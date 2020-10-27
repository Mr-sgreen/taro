(window.webpackJsonp=window.webpackJsonp||[]).push([[1527],{1583:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return l}));var t=r(2),o=r(6),a=(r(0),r(2880)),c={title:"Refs \u5f15\u7528"},i={unversionedId:"ref",id:"version-1.3.45/ref",isDocsHomePage:!1,title:"Refs \u5f15\u7528",description:"Refs \u63d0\u4f9b\u4e86\u4e00\u79cd\u8bbf\u95ee\u5728 render \u65b9\u6cd5\u4e2d\u521b\u5efa\u7684 DOM \u8282\u70b9\uff08\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\uff09\u6216 Taro \u7ec4\u4ef6\u5b9e\u4f8b\u7684\u65b9\u5f0f\u3002",source:"@site/versioned_docs/version-1.3.45/ref.md",slug:"/ref",permalink:"/taro/docs/1.3.45/ref",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/ref.md",version:"1.3.45",sidebar:"version-1.3.45/docs",previous:{title:"Render Props",permalink:"/taro/docs/1.3.45/render-props"},next:{title:"\u8de8\u5e73\u53f0\u5f00\u53d1",permalink:"/taro/docs/1.3.45/envs"}},p=[{value:"\u4e0d\u8981\u8fc7\u5ea6\u4f7f\u7528 Refs",id:"\u4e0d\u8981\u8fc7\u5ea6\u4f7f\u7528-refs",children:[]},{value:"\u521b\u5efa Refs",id:"\u521b\u5efa-refs",children:[{value:"\u4f7f\u7528\u5b57\u7b26\u4e32\u521b\u5efa ref",id:"\u4f7f\u7528\u5b57\u7b26\u4e32\u521b\u5efa-ref",children:[]},{value:"\u901a\u8fc7\u51fd\u6570\u521b\u5efa ref",id:"\u901a\u8fc7\u51fd\u6570\u521b\u5efa-ref",children:[]},{value:"\u901a\u8fc7 <code>createRef</code> \u521b\u5efa ref",id:"\u901a\u8fc7-createref-\u521b\u5efa-ref",children:[]}]}],s={rightToc:p};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Refs \u63d0\u4f9b\u4e86\u4e00\u79cd\u8bbf\u95ee\u5728 render \u65b9\u6cd5\u4e2d\u521b\u5efa\u7684 DOM \u8282\u70b9\uff08\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\uff09\u6216 Taro \u7ec4\u4ef6\u5b9e\u4f8b\u7684\u65b9\u5f0f\u3002")),Object(a.b)("p",null,"\u5728\u5e38\u89c4\u7684 Taro \u6570\u636e\u6d41\u4e2d\uff0cprops \u662f\u7236\u7ec4\u4ef6\u4e0e\u5b50\u7ec4\u4ef6\u4ea4\u4e92\u7684\u552f\u4e00\u65b9\u5f0f\u3002\u8981\u4fee\u6539\u5b50\u5143\u7d20\uff0c\u4f60\u9700\u8981\u7528\u65b0\u7684 props \u53bb\u91cd\u65b0\u6e32\u67d3\u5b50\u5143\u7d20\u3002\u7136\u800c\uff0c\u5728\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u5728\u5e38\u89c4\u6570\u636e\u6d41\u5916\u5f3a\u5236\u4fee\u6539\u5b50\u5143\u7d20\u3002\u88ab\u4fee\u6539\u7684\u5b50\u5143\u7d20\u53ef\u4ee5\u662f Taro \u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u6216\u8005\u662f\u4e00\u4e2a DOM \u5143\u7d20\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cTaro \u63d0\u4f9b\u4e86\u89e3\u51b3\u529e\u6cd5\u3002"),Object(a.b)("h2",{id:"\u4e0d\u8981\u8fc7\u5ea6\u4f7f\u7528-refs"},"\u4e0d\u8981\u8fc7\u5ea6\u4f7f\u7528 Refs"),Object(a.b)("p",null,"\u4f60\u53ef\u80fd\u9996\u5148\u4f1a\u60f3\u5230\u5728\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528 refs \u6765\u66f4\u65b0\u7ec4\u4ef6\u3002\u5982\u679c\u662f\u8fd9\u79cd\u60c5\u51b5\uff0c\u8bf7\u82b1\u4e00\u70b9\u65f6\u95f4\uff0c\u66f4\u591a\u7684\u5173\u6ce8\u5728\u7ec4\u4ef6\u5c42\u4e2d\u4f7f\u7528 state\u3002\u5728\u7ec4\u4ef6\u5c42\u4e2d\uff0c\u901a\u5e38\u8f83\u9ad8\u7ea7\u522b\u7684 state \u66f4\u4e3a\u6e05\u6670\u3002\u4f8b\u5982\uff0c\u76f8\u6bd4\u4e8e\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"Dialog")," \u7ec4\u4ef6\u4e2d\u66b4\u9732 ",Object(a.b)("inlineCode",{parentName:"p"},"open()")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"close()")," \u65b9\u6cd5\uff0c\u6700\u597d\u4f20\u9012 ",Object(a.b)("inlineCode",{parentName:"p"},"isOpen")," \u5c5e\u6027\u3002"),Object(a.b)("h2",{id:"\u521b\u5efa-refs"},"\u521b\u5efa Refs"),Object(a.b)("p",null,"Taro \u652f\u6301\u4f7f\u7528\u5b57\u7b26\u4e32\u548c\u51fd\u6570\u4e24\u79cd\u65b9\u5f0f\u521b\u5efa Ref\u3002"),Object(a.b)("h3",{id:"\u4f7f\u7528\u5b57\u7b26\u4e32\u521b\u5efa-ref"},"\u4f7f\u7528\u5b57\u7b26\u4e32\u521b\u5efa ref"),Object(a.b)("p",null,"\u901a\u8fc7\u5b57\u7b26\u4e32\u521b\u5efa ref \u53ea\u9700\u8981\u628a\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u540d\u79f0\u8d4b\u7ed9 ",Object(a.b)("inlineCode",{parentName:"p"},"ref")," prop\u3002\u7136\u540e\u5c31\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"this.refs")," \u8bbf\u95ee\u5230\u88ab\u5b9a\u4e49\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u6216 DOM \u5143\u7d20\uff08\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\uff09\u3002\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u5982\u679c ",Object(a.b)("inlineCode",{parentName:"p"},"ref")," \u7684\u662f\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\uff0c\u90a3\u4e48\u76f8\u5f53\u4e8e\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"createSeletorQuery")," \u53d6\u5230\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u5982\u679c\u662f\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"H5(Web)")," \u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u90a3\u8bbf\u95ee\u5230\u7684\u5c06\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"@tarojs/components")," \u5bf9\u5e94\u7ec4\u4ef6\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"class MyComponent extends Component {\n\n  componentDidMount () {\n    // \u5982\u679c ref \u7684\u662f\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\uff0c\u90a3\u53ea\u6709\u5728 didMount \u751f\u547d\u5468\u671f\u4e4b\u540e\u624d\u80fd\u901a\u8fc7\n    // this.refs.input \u8bbf\u95ee\u5230\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\n    if (process.env.TARO_ENV === 'weapp') {\n      // \u8fd9\u91cc this.refs.input \u8bbf\u95ee\u7684\u65f6\u5019\u901a\u8fc7 `wx.createSeletorQuery` \u53d6\u5230\u7684\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\n    } else if (process.env.TARO_ENV === 'h5') {\n      // \u8fd9\u91cc this.refs.input \u8bbf\u95ee\u5230\u7684\u662f `@tarojs/components` \u7684 `Input` \u7ec4\u4ef6\u5b9e\u4f8b\n    }\n  }\n\n  render () {\n    return <Input ref='input' />\n  }\n}\n")),Object(a.b)("h3",{id:"\u901a\u8fc7\u51fd\u6570\u521b\u5efa-ref"},"\u901a\u8fc7\u51fd\u6570\u521b\u5efa ref"),Object(a.b)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012\u4e00\u4e2a\u51fd\u6570\u521b\u5efa ref, \u5728\u51fd\u6570\u4e2d\u88ab\u5f15\u7528\u7684\u7ec4\u4ef6\u4f1a\u4f5c\u4e3a\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u3002\u5982\u679c\u662f\u88ab\u5f15\u7528\u7684\u7ec4\u4ef6\u662f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u90a3\u53ef\u4ee5\u5728\u4efb\u610f\u7684\u751f\u547d\u5468\u671f\u8bbf\u95ee\u5f15\u7528\u3002"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"\u4e0d\u7ba1\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\uff0cTaro \u90fd\u63a8\u8350\u4f60\u4f7f\u7528\u51fd\u6570\u7684\u65b9\u5f0f\u521b\u5efa ref\u3002")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"class MyComponent extends Component {\n\n  roar () {\n    // \u4f1a\u6253\u5370 `miao, miao, miao~`\n    this.cat.miao()\n  }\n\n  refCat = (node) => this.cat = node // `this.cat` \u4f1a\u53d8\u6210 `Cat` \u7ec4\u4ef6\u5b9e\u4f8b\u7684\u5f15\u7528\n\n  render () {\n    return <Cat ref={this.refCat} />\n  }\n}\n\nclass Cat extends Component {\n  miao () {\n    console.log('miao, miao, miao~')\n  }\n\n  render () {\n    return <View />\n  }\n}\n")),Object(a.b)("h3",{id:"\u901a\u8fc7-createref-\u521b\u5efa-ref"},"\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"h3"},"createRef")," \u521b\u5efa ref"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u81ea v1.3.0-beta.0 \u8d77 \u652f\u6301")),Object(a.b)("p",null,"Refs \u8fd8\u662f\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"Taro.createRef()")," \u521b\u5efa\u7684\uff0c\u5e76\u901a\u8fc7 ref \u5c5e\u6027\u9644\u52a0\u5230 Taro \u5143\u7d20\u3002\u5728\u6784\u9020\u7ec4\u4ef6\u65f6\uff0c\u901a\u5e38\u5c06 Refs \u5206\u914d\u7ed9\u5b9e\u4f8b\u5c5e\u6027\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u5728\u6574\u4e2a\u7ec4\u4ef6\u4e2d\u5f15\u7528\u5b83\u4eec\u3002"),Object(a.b)("p",null,"\u5f53 ref \u88ab\u4f20\u9012\u7ed9 ",Object(a.b)("inlineCode",{parentName:"p"},"render")," \u4e2d\u7684\u5143\u7d20\u65f6\uff0c\u5bf9\u8be5\u8282\u70b9\u7684\u5f15\u7528\u53ef\u4ee5\u5728 ref \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"current")," \u5c5e\u6027\u4e2d\u88ab\u8bbf\u95ee\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"class MyComponent extends Component {\n\n  this.cat = Taro.createRef()\n\n  roar () {\n    // \u4f1a\u6253\u5370 `miao, miao, miao~`\n    this.cat.current.miao()\n  }\n\n  render () {\n    return <Cat ref={this.cat} />\n  }\n}\n\nclass Cat extends Component {\n  miao () {\n    console.log('miao, miao, miao~')\n  }\n\n  render () {\n    return <View />\n  }\n}\n")))}l.isMDXComponent=!0},2880:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},b=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),u=t,d=b["".concat(c,".").concat(u)]||b[u]||f[u]||a;return r?o.a.createElement(d,i(i({ref:n},s),{},{components:r})):o.a.createElement(d,i({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);