(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{2880:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var r=n(0),l=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),u=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,j=s["".concat(c,".").concat(d)]||s[d]||O[d]||b;return n?l.a.createElement(j,a(a({ref:t},i),{},{components:n})):l.a.createElement(j,a({ref:t},i))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var i=2;i<b;i++)c[i]=n[i];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(2),l=n(6),b=(n(0),n(2880)),c={title:"Taro.showToast(option)",sidebar_label:"showToast"},a={unversionedId:"apis/ui/interaction/showToast",id:"version-2.2.15/apis/ui/interaction/showToast",isDocsHomePage:!1,title:"Taro.showToast(option)",description:"\u663e\u793a\u6d88\u606f\u63d0\u793a\u6846",source:"@site/versioned_docs/version-2.2.15/apis/ui/interaction/showToast.md",slug:"/apis/ui/interaction/showToast",permalink:"/taro/docs/2.2.15/apis/ui/interaction/showToast",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.15/apis/ui/interaction/showToast.md",version:"2.2.15",sidebar_label:"showToast",sidebar:"version-2.2.15/API",previous:{title:"Page",permalink:"/taro/docs/2.2.15/apis/framework/Page"},next:{title:"Taro.showModal(option)",permalink:"/taro/docs/2.2.15/apis/ui/interaction/showModal"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u663e\u793a\u6d88\u606f\u63d0\u793a\u6846"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Taro.showLoading \u548c Taro.showToast \u540c\u65f6\u53ea\u80fd\u663e\u793a\u4e00\u4e2a"),Object(b.b)("li",{parentName:"ul"},"Taro.showToast \u5e94\u4e0e Taro.hideToast \u914d\u5bf9\u4f7f\u7528")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"title"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u63d0\u793a\u7684\u5185\u5bb9")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"duration"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63d0\u793a\u7684\u5ef6\u8fdf\u65f6\u95f4")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"icon"),Object(b.b)("td",null,Object(b.b)("code",null,'"success" | "loading" | "none"')),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u56fe\u6807",Object(b.b)("br",null),Object(b.b)("br",null),"\u53ef\u9009\u503c\uff1a",Object(b.b)("br",null),"- 'success': \u663e\u793a\u6210\u529f\u56fe\u6807\uff0c\u6b64\u65f6 title \u6587\u672c\u6700\u591a\u663e\u793a 7 \u4e2a\u6c49\u5b57\u957f\u5ea6;",Object(b.b)("br",null),"- 'loading': \u663e\u793a\u52a0\u8f7d\u56fe\u6807\uff0c\u6b64\u65f6 title \u6587\u672c\u6700\u591a\u663e\u793a 7 \u4e2a\u6c49\u5b57\u957f\u5ea6;",Object(b.b)("br",null),"- 'none': \u4e0d\u663e\u793a\u56fe\u6807\uff0c\u6b64\u65f6 title \u6587\u672c\u6700\u591a\u53ef\u663e\u793a\u4e24\u884c")),Object(b.b)("tr",null,Object(b.b)("td",null,"image"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u81ea\u5b9a\u4e49\u56fe\u6807\u7684\u672c\u5730\u8def\u5f84\uff0cimage \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e icon")),Object(b.b)("tr",null,Object(b.b)("td",null,"mask"),Object(b.b)("td",null,Object(b.b)("code",null,"boolean")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u662f\u5426\u663e\u793a\u900f\u660e\u8499\u5c42\uff0c\u9632\u6b62\u89e6\u6478\u7a7f\u900f")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.showToast({\n  title: '\u6210\u529f',\n  icon: 'success',\n  duration: 2000\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.showToast"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);