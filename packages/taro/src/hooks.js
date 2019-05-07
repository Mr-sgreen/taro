import { isFunction, isUndefined, isArray, isNullOrUndef, defer } from './util'
import { Current } from './current'

function getHooks (index) {
  if (Current.current === null) {
    throw new Error(`invalid hooks call: hooks can only be called in a stateless component.`)
  }
  const hooks = Current.current.hooks
  if (index >= hooks.length) {
    hooks.push({})
  }
  return hooks[index]
}

export function useState (initialState) {
  if (isFunction(initialState)) {
    initialState = initialState()
  }
  const hook = getHooks(Current.index++)
  if (!hook.state) {
    hook.component = Current.current
    hook.state = [
      initialState,
      (action) => {
        hook.state[0] = isFunction(action) ? action(hook.state[0]) : action
        hook.component._disable = false
        hook.component.setState({})
      }
    ]
  }
  return hook.state
}

export function useReducer (
  reducer,
  initialState,
  initializer
) {
  if (isFunction(initialState)) {
    initialState = initialState()
  }
  const hook = getHooks(Current.index++)
  if (!hook.state) {
    hook.component = Current.current
    hook.state = [
      isUndefined(initializer) ? initialState : initializer(initialState),
      (action) => {
        hook.state[0] = reducer(hook.state[0], action)
        hook.component._disable = false
        hook.component.setState({})
      }
    ]
  }
  return hook.state
}

// Object.is polyfill
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function is (x, y) {
  if (x === y) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y
  }
  // eslint-disable-next-line no-self-compare
  return x !== x && y !== y
}

function areDepsChanged (prevDeps, deps) {
  if (isNullOrUndef(prevDeps) || isNullOrUndef(deps)) {
    return true
  }
  for (let i = 0; i < deps.length; i += 1) {
    const val1 = deps[i]
    const val2 = prevDeps[i]
    if (is(val1, val2)) {
      continue
    }
    return false
  }
  return true
}

export function invokeEffects (component, delay) {
  const effects = delay ? component.effects : component.layoutEffects
  effects.forEach((hook) => {
    if (isFunction(hook.cleanup)) {
      hook.cleanup()
    }
    const result = hook.effect()
    if (isFunction(result)) {
      hook.cleanup = result
    }
  })

  if (delay) {
    component.effects = []
  } else {
    component.layoutEffects = []
  }
}

let scheduleEffectComponents = []

function invokeScheduleEffects (component) {
  if (!component._afterScheduleEffect) {
    component._afterScheduleEffect = true
    scheduleEffectComponents.push(component)
    if (scheduleEffectComponents.length === 1) {
      defer(() => {
        setTimeout(() => {
          scheduleEffectComponents.forEach((c) => {
            c._afterScheduleEffect = false
            invokeEffects(c, true)
          })
          scheduleEffectComponents = []
        }, 0)
      })
    }
  }
}

function useEffectImpl (effect, deps, delay) {
  const hook = getHooks(Current.index++)
  if (Current.current._disableHooks || !Current.current.__isReady) {
    return
  }
  if (areDepsChanged(hook.deps, deps)) {
    hook.effect = effect
    hook.deps = deps

    if (delay) {
      Current.current.effects = Current.current.effects.concat(hook)
      invokeScheduleEffects(Current.current)
    } else {
      Current.current.layoutEffects = Current.current.layoutEffects.concat(hook)
    }
  }
}

export function useEffect (effect, deps) {
  useEffectImpl(effect, deps, true)
}

export function useLayoutEffect (effect, deps) {
  useEffectImpl(effect, deps)
}

export function useRef (initialValue) {
  const hook = getHooks(Current.index++)
  if (!hook.ref) {
    hook.ref = {
      current: initialValue
    }
  }
  return hook.ref
}

export function useMemo (factory, deps) {
  const hook = getHooks(Current.index++)
  if (areDepsChanged(hook.deps, deps)) {
    hook.deps = deps
    hook.callback = factory
    hook.value = factory()
  }
  return hook.value
}

export function useCallback (callback, deps) {
  return useMemo(() => callback, deps)
}

export function useImperativeHandle (ref, init, deps) {
  useLayoutEffect(() => {
    if (isFunction(ref)) {
      ref(init())
      return () => ref(null)
    } else if (!isUndefined(ref)) {
      ref.current = init()
      return () => {
        delete ref.current
      }
    }
  }, isArray(deps) ? deps.concat([ref]) : undefined)
}
