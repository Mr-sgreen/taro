(window.webpackJsonp=window.webpackJsonp||[]).push([[500],{2880:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var c=n(0),r=n.n(c);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},o=Object.keys(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),O=c,d=p["".concat(a,".").concat(O)]||p[O]||s[O]||o;return n?r.a.createElement(d,b(b({ref:t},i),{},{components:n})):r.a.createElement(d,b({ref:t},i))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=O;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:c,a[1]=b;for(var i=2;i<o;i++)a[i]=n[i];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},556:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var c=n(2),r=n(6),o=(n(0),n(2880)),a={title:"Taro.closeSocket(option)",sidebar_label:"closeSocket"},b={unversionedId:"apis/network/webSocket/closeSocket",id:"version-3.0.14/apis/network/webSocket/closeSocket",isDocsHomePage:!1,title:"Taro.closeSocket(option)",description:"\u5173\u95ed WebSocket \u8fde\u63a5",source:"@site/versioned_docs/version-3.0.14/apis/network/webSocket/closeSocket.md",slug:"/apis/network/webSocket/closeSocket",permalink:"/taro/docs/3.0.14/apis/network/webSocket/closeSocket",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.14/apis/network/webSocket/closeSocket.md",version:"3.0.14",sidebar_label:"closeSocket",sidebar:"version-3.0.14/API",previous:{title:"Taro.connectSocket(option)",permalink:"/taro/docs/3.0.14/apis/network/webSocket/connectSocket"},next:{title:"SocketTask",permalink:"/taro/docs/3.0.14/apis/network/webSocket/SocketTask"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5173\u95ed WebSocket \u8fde\u63a5"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html"}),"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<CallbackResult>\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h3",{id:"option"},"Option"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"code"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")),Object(o.b)("tr",null,Object(o.b)("td",null,"complete"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(o.b)("tr",null,Object(o.b)("td",null,"fail"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(o.b)("tr",null,Object(o.b)("td",null,"reason"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002\u8fd9\u4e2a\u5b57\u7b26\u4e32\u5fc5\u987b\u662f\u4e0d\u957f\u4e8e 123 \u5b57\u8282\u7684 UTF-8 \u6587\u672c\uff08\u4e0d\u662f\u5b57\u7b26\uff09\u3002")),Object(o.b)("tr",null,Object(o.b)("td",null,"success"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.connectSocket({\n  url: 'test.php'\n})\n//\u6ce8\u610f\u8fd9\u91cc\u6709\u65f6\u5e8f\u95ee\u9898\uff0c\n//\u5982\u679c Taro.connectSocket \u8fd8\u6ca1\u56de\u8c03 Taro.onSocketOpen\uff0c\u800c\u5148\u8c03\u7528 Taro.closeSocket\uff0c\u90a3\u4e48\u5c31\u505a\u4e0d\u5230\u5173\u95ed WebSocket \u7684\u76ee\u7684\u3002\n//\u5fc5\u987b\u5728 WebSocket \u6253\u5f00\u671f\u95f4\u8c03\u7528 Taro.closeSocket \u624d\u80fd\u5173\u95ed\u3002\nTaro.onSocketOpen(function() {\n  Taro.closeSocket()\n})\nTaro.onSocketClose(function(res) {\n  console.log('WebSocket \u5df2\u5173\u95ed\uff01')\n})\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.closeSocket"),Object(o.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);