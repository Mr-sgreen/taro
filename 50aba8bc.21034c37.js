(window.webpackJsonp=window.webpackJsonp||[]).push([[862],{2880:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,O=m["".concat(o,".").concat(u)]||m[u]||d[u]||c;return r?a.a.createElement(O,l(l({ref:t},i),{},{components:r})):a.a.createElement(O,l({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},918:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),c=(r(0),r(2880)),o={title:"Taro.onAccelerometerChange(callback)",sidebar_label:"onAccelerometerChange"},l={unversionedId:"apis/device/accelerometer/onAccelerometerChange",id:"version-1.3.45/apis/device/accelerometer/onAccelerometerChange",isDocsHomePage:!1,title:"Taro.onAccelerometerChange(callback)",description:"\u76d1\u542c\u52a0\u901f\u5ea6\u6570\u636e\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e startAccelerometer() \u7684 interval \u53c2\u6570\u3002\u53ef\u4f7f\u7528 stopAccelerometer() \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-1.3.45/apis/device/accelerometer/onAccelerometerChange.md",slug:"/apis/device/accelerometer/onAccelerometerChange",permalink:"/taro/docs/1.3.45/apis/device/accelerometer/onAccelerometerChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/apis/device/accelerometer/onAccelerometerChange.md",version:"1.3.45",sidebar_label:"onAccelerometerChange",sidebar:"version-1.3.45/API",previous:{title:"Taro.stopAccelerometer(res)",permalink:"/taro/docs/1.3.45/apis/device/accelerometer/stopAccelerometer"},next:{title:"Taro.startDeviceMotionListening(callback)",permalink:"/taro/docs/1.3.45/apis/device/deviceMotion/startDeviceMotionListening"}},b=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"function callback(res)",id:"function-callbackres",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u76d1\u542c\u52a0\u901f\u5ea6\u6570\u636e\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e ",Object(c.b)("inlineCode",{parentName:"p"},"startAccelerometer()")," \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"interval")," \u53c2\u6570\u3002\u53ef\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"stopAccelerometer()")," \u505c\u6b62\u76d1\u542c\u3002"),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"function-callbackres"},"function callback(res)"),Object(c.b)("p",null,"\u52a0\u901f\u5ea6\u6570\u636e\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(c.b)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),Object(c.b)("h5",{id:"object-res"},"object res"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X \u8f74")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"y"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y \u8f74")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"z"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Z \u8f74")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.onAccelerometerChange(res => {\n  console.log(res.x)\n  console.log(res.y)\n  console.log(res.z)\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.onAccelerometerChange"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);