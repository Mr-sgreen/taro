(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{2880:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),O=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=O(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),i=O(n),d=a,p=i["".concat(c,".").concat(d)]||i[d]||j[d]||b;return n?r.a.createElement(p,l(l({ref:t},u),{},{components:n})):r.a.createElement(p,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<b;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2881:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},2882:function(e,t,n){"use strict";var a=n(0),r=n(2883);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2883:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},2884:function(e,t,n){"use strict";var a=n(0),r=n.n(a),b=n(2882),c=n(2881),l=n(47),o=n.n(l),u=37,O=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,i=e.values,j=e.groupId,d=e.className,p=Object(b.a)(),s=p.tabGroupChoices,m=p.setTabGroupChoices,f=Object(a.useState)(l),g=f[0],y=f[1],v=Object(a.useState)(!1),N=v[0],h=v[1];if(null!=j){var x=s[j];null!=x&&x!==g&&i.some((function(e){return e.value===x}))&&y(x)}var w=function(e){y(e),null!=j&&m(j,e)},P=[],A=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},D=function(){h(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",A),window.addEventListener("mousedown",D),function(){window.removeEventListener("keydown",A),window.removeEventListener("mousedown",D)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},d)},i.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),style:N?{}:{outline:"none"},key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case O:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e),A(e)},onFocus:function(){return w(t)},onClick:function(){w(t),h(!1)},onPointerDown:function(){return h(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},2885:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},641:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return j}));var a=n(2),r=n(6),b=(n(0),n(2880)),c=n(2884),l=n(2885),o={title:"OpenData",sidebar_label:"OpenData"},u={unversionedId:"components/open/open-data",id:"components/open/open-data",isDocsHomePage:!1,title:"OpenData",description:"\u7528\u4e8e\u5c55\u793a\u5fae\u4fe1\u5f00\u653e\u7684\u6570\u636e",source:"@site/docs/components/open/open-data.md",slug:"/components/open/open-data",permalink:"/taro/docs/next/components/open/open-data",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/open/open-data.md",version:"current",sidebar_label:"OpenData",sidebar:"components",previous:{title:"OfficialAccount",permalink:"/taro/docs/next/components/open/official-account"},next:{title:"WebView",permalink:"/taro/docs/next/components/open/web-view"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"OpenDataProps",id:"opendataprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"type",id:"type",children:[]},{value:"lang",id:"lang",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:O};function j(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u7528\u4e8e\u5c55\u793a\u5fae\u4fe1\u5f00\u653e\u7684\u6570\u636e"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<OpenDataProps>\n")),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)(c.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(b.b)(l.a,{value:"React",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  render () {\n    return (\n      <OpenData type='userAvatarUrl'/>\n    )\n  }\n}\n"))),Object(b.b)(l.a,{value:"Vue",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <open-data type="userAvatarUrl" />\n</template>\n')))),Object(b.b)("h2",{id:"opendataprops"},"OpenDataProps"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"type"),Object(b.b)("td",null,Object(b.b)("code",null,'"groupName" | "userNickName" | "userAvatarUrl" | "userGender" | "userCity" | "userProvince" | "userCountry" | "userLanguage"')),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u5f00\u653e\u6570\u636e\u7c7b\u578b")),Object(b.b)("tr",null,Object(b.b)("td",null,"openGid"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,'\u5f53 type="groupName" \u65f6\u751f\u6548, \u7fa4id')),Object(b.b)("tr",null,Object(b.b)("td",null,"lang"),Object(b.b)("td",null,Object(b.b)("code",null,'"en" | "zh_CN" | "zh_TW"')),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,'"en"')),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,'\u5f53 type="user*" \u65f6\u751f\u6548\uff0c\u4ee5\u54ea\u79cd\u8bed\u8a00\u5c55\u793a userInfo')),Object(b.b)("tr",null,Object(b.b)("td",null,"defaultText"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u6587\u6848")),Object(b.b)("tr",null,Object(b.b)("td",null,"defaultAvatar"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u7528\u6237\u5934\u50cf\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u56fe\u7247\uff0c\u652f\u6301\u76f8\u5bf9\u8def\u5f84\u548c\u7f51\u7edc\u56fe\u7247\u8def\u5f84")),Object(b.b)("tr",null,Object(b.b)("td",null,"onError"),Object(b.b)("td",null,Object(b.b)("code",null,"BaseEventOrigFunction<any>")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u7fa4\u540d\u79f0\u6216\u7528\u6237\u4fe1\u606f\u4e3a\u7a7a\u65f6\u89e6\u53d1")))),Object(b.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.type"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.openGid"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.lang"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultText"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultAvatar"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.onError"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h3",{id:"type"},"type"),Object(b.b)("p",null,"type \u7684\u5408\u6cd5\u503c"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"groupName"),Object(b.b)("td",null,"\u62c9\u53d6\u7fa4\u540d\u79f0")),Object(b.b)("tr",null,Object(b.b)("td",null,"userNickName"),Object(b.b)("td",null,"\u7528\u6237\u6635\u79f0")),Object(b.b)("tr",null,Object(b.b)("td",null,"userAvatarUrl"),Object(b.b)("td",null,"\u7528\u6237\u5934\u50cf")),Object(b.b)("tr",null,Object(b.b)("td",null,"userGender"),Object(b.b)("td",null,"\u7528\u6237\u6027\u522b")),Object(b.b)("tr",null,Object(b.b)("td",null,"userCity"),Object(b.b)("td",null,"\u7528\u6237\u6240\u5728\u57ce\u5e02")),Object(b.b)("tr",null,Object(b.b)("td",null,"userProvince"),Object(b.b)("td",null,"\u7528\u6237\u6240\u5728\u7701\u4efd")),Object(b.b)("tr",null,Object(b.b)("td",null,"userCountry"),Object(b.b)("td",null,"\u7528\u6237\u6240\u5728\u56fd\u5bb6")),Object(b.b)("tr",null,Object(b.b)("td",null,"userLanguage"),Object(b.b)("td",null,"\u7528\u6237\u7684\u8bed\u8a00")))),Object(b.b)("h3",{id:"lang"},"lang"),Object(b.b)("p",null,"lang \u7684\u5408\u6cd5\u503c"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"en"),Object(b.b)("td",null,"\u82f1\u6587")),Object(b.b)("tr",null,Object(b.b)("td",null,"zh_CN"),Object(b.b)("td",null,"\u7b80\u4f53\u4e2d\u6587")),Object(b.b)("tr",null,Object(b.b)("td",null,"zh_TW"),Object(b.b)("td",null,"\u7e41\u4f53\u4e2d\u6587")))),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"OpenData"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}j.isMDXComponent=!0}}]);