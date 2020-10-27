(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(2),c=n(6),r=(n(0),n(2880)),l={title:"Taro.onHCEMessage(callback)",sidebar_label:"onHCEMessage"},b={unversionedId:"apis/device/nfc/onHCEMessage",id:"version-2.2.15/apis/device/nfc/onHCEMessage",isDocsHomePage:!1,title:"Taro.onHCEMessage(callback)",description:"\u76d1\u542c\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\uff0c\u4ec5\u80fd\u6ce8\u518c\u4e00\u4e2a\u76d1\u542c",source:"@site/versioned_docs/version-2.2.15/apis/device/nfc/onHCEMessage.md",slug:"/apis/device/nfc/onHCEMessage",permalink:"/taro/docs/2.2.15/apis/device/nfc/onHCEMessage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.15/apis/device/nfc/onHCEMessage.md",version:"2.2.15",sidebar_label:"onHCEMessage",sidebar:"version-2.2.15/API",previous:{title:"Taro.sendHCEMessage(option)",permalink:"/taro/docs/2.2.15/apis/device/nfc/sendHCEMessage"},next:{title:"Taro.offHCEMessage(callback)",permalink:"/taro/docs/2.2.15/apis/device/nfc/offHCEMessage"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]},{value:"messageType",id:"messagetype",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u76d1\u542c\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\uff0c\u4ec5\u80fd\u6ce8\u518c\u4e00\u4e2a\u76d1\u542c"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.onHCEMessage.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"callback"},"Callback"),Object(r.b)("p",null,"\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"result"),Object(r.b)("td",null,Object(r.b)("code",null,"CallbackResult"))))),Object(r.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"data"),Object(r.b)("td",null,Object(r.b)("code",null,"ArrayBuffer")),Object(r.b)("td",null,Object(r.b)("code",null,"messageType=1")," \u65f6 ,\u5ba2\u6237\u7aef\u63a5\u6536\u5230 NFC \u8bbe\u5907\u7684\u6307\u4ee4")),Object(r.b)("tr",null,Object(r.b)("td",null,"messageType"),Object(r.b)("td",null,Object(r.b)("code",null,"1 | 2")),Object(r.b)("td",null,"\u6d88\u606f\u7c7b\u578b")),Object(r.b)("tr",null,Object(r.b)("td",null,"reason"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,Object(r.b)("code",null,"messageType=2")," \u65f6\uff0c\u539f\u56e0")))),Object(r.b)("h3",{id:"messagetype"},"messageType"),Object(r.b)("p",null,"\u6d88\u606f\u7c7b\u578b"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"1"),Object(r.b)("td",null,"HCE APDU Command\u7c7b\u578b\uff0c\u5c0f\u7a0b\u5e8f\u9700\u5bf9\u6b64\u6307\u4ee4\u8fdb\u884c\u5904\u7406\uff0c\u5e76\u8c03\u7528 sendHCEMessage \u63a5\u53e3\u8fd4\u56de\u5904\u7406\u6307\u4ee4")),Object(r.b)("tr",null,Object(r.b)("td",null,"2"),Object(r.b)("td",null,"\u8bbe\u5907\u79bb\u573a\u4e8b\u4ef6\u7c7b\u578b")))),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.onHCEMessage"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},2880:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(n),O=a,p=s["".concat(l,".").concat(O)]||s[O]||d[O]||r;return n?c.a.createElement(p,b(b({ref:t},i),{},{components:n})):c.a.createElement(p,b({ref:t},i))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var i=2;i<r;i++)l[i]=n[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);