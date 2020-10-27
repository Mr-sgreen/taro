(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{2880:function(e,r,a){"use strict";a.d(r,"a",(function(){return p})),a.d(r,"b",(function(){return b}));var t=a(0),n=a.n(t);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function f(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),u=function(e){var r=n.a.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):f(f({},r),e)),a},p=function(e){var r=u(e.components);return n.a.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},y=n.a.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),y=t,b=p["".concat(i,".").concat(y)]||p[y]||l[y]||o;return a?n.a.createElement(b,f(f({ref:r},c),{},{components:a})):n.a.createElement(b,f({ref:r},c))}));function b(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=y;var f={};for(var s in r)hasOwnProperty.call(r,s)&&(f[s]=r[s]);f.originalType=e,f.mdxType="string"==typeof e?e:t,i[1]=f;for(var c=2;c<o;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}y.displayName="MDXCreateElement"},328:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return i})),a.d(r,"metadata",(function(){return f})),a.d(r,"rightToc",(function(){return s})),a.d(r,"default",(function(){return u}));var t=a(2),n=a(6),o=(a(0),a(2880)),i={title:"arrayBufferToBase64",sidebar_label:"arrayBufferToBase64"},f={unversionedId:"apis/extend-apis/arrayBufferToBase64",id:"version-1.x/apis/extend-apis/arrayBufferToBase64",isDocsHomePage:!1,title:"arrayBufferToBase64",description:"Taro.arrayBufferToBase64(arrayBuffer)",source:"@site/versioned_docs/version-1.x/apis/extend-apis/arrayBufferToBase64.md",slug:"/apis/extend-apis/arrayBufferToBase64",permalink:"/taro/docs/1.x/apis/extend-apis/arrayBufferToBase64",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/extend-apis/arrayBufferToBase64.md",version:"1.x",sidebar_label:"arrayBufferToBase64",sidebar:"version-1.x/API",previous:{title:"Taro.stopWifi(OBJECT)",permalink:"/taro/docs/1.x/apis/device/wifi/stopWifi"},next:{title:"base64ToArrayBuffer",permalink:"/taro/docs/1.x/apis/extend-apis/base64ToArrayBuffer"}},s=[{value:"Taro.arrayBufferToBase64(arrayBuffer)",id:"taroarraybuffertobase64arraybuffer",children:[]}],c={rightToc:s};function u(e){var r=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,a,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"taroarraybuffertobase64arraybuffer"},"Taro.arrayBufferToBase64(arrayBuffer)"),Object(o.b)("p",null,"\u5c06 ArrayBuffer \u6570\u636e\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32\u3002(\u5c0f\u7a0b\u5e8f\u7aef\u57fa\u7840\u5e93 1.1.0 \u5f00\u59cb\u652f\u6301\uff0c\u4f4e\u7248\u672c\u9700\u505a\u517c\u5bb9\u5904\u7406)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst arrayBuffer = new Uint8Array([11, 22, 33])\nconst base64 = Taro.arrayBufferToBase64(arrayBuffer)\n")))}u.isMDXComponent=!0}}]);