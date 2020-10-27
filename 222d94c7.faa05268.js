(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{2880:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var b=a(0),n=a.n(b);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},c=Object.keys(e);for(b=0;b<c.length;b++)a=c[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)a=c[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var j=n.a.createContext({}),i=function(e){var t=n.a.useContext(j),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.a.createElement(j.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,c=e.originalType,r=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),p=i(a),o=b,m=p["".concat(r,".").concat(o)]||p[o]||d[o]||c;return a?n.a.createElement(m,l(l({ref:t},j),{},{components:a})):n.a.createElement(m,l({ref:t},j))}));function m(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=a.length,r=new Array(c);r[0]=o;var l={};for(var O in t)hasOwnProperty.call(t,O)&&(l[O]=t[O]);l.originalType=e,l.mdxType="string"==typeof e?e:b,r[1]=l;for(var j=2;j<c;j++)r[j]=a[j];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},429:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return i}));var b=a(2),n=a(6),c=(a(0),a(2880)),r={title:"VideoContext",sidebar_label:"VideoContext"},l={unversionedId:"apis/media/video/VideoContext",id:"version-2.2.15/apis/media/video/VideoContext",isDocsHomePage:!1,title:"VideoContext",description:"\u65b9\u6cd5",source:"@site/versioned_docs/version-2.2.15/apis/media/video/VideoContext.md",slug:"/apis/media/video/VideoContext",permalink:"/taro/docs/2.2.15/apis/media/video/VideoContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.15/apis/media/video/VideoContext.md",version:"2.2.15",sidebar_label:"VideoContext",sidebar:"version-2.2.15/API",previous:{title:"Taro.chooseVideo(option)",permalink:"/taro/docs/2.2.15/apis/media/video/chooseVideo"},next:{title:"Taro.stopVoice(option)",permalink:"/taro/docs/2.2.15/apis/media/audio/stopVoice"}},O=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"exitFullScreen",id:"exitfullscreen",children:[]},{value:"hideStatusBar",id:"hidestatusbar",children:[]},{value:"pause",id:"pause",children:[]},{value:"play",id:"play",children:[]},{value:"playbackRate",id:"playbackrate",children:[]},{value:"requestFullScreen",id:"requestfullscreen",children:[]},{value:"seek",id:"seek",children:[]},{value:"sendDanmu",id:"senddanmu",children:[]},{value:"showStatusBar",id:"showstatusbar",children:[]},{value:"stop",id:"stop",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"RequestFullScreenOption",id:"requestfullscreenoption",children:[]},{value:"Danmu",id:"danmu",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-10",children:[]}],j={rightToc:O};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(b.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("h3",{id:"exitfullscreen"},"exitFullScreen"),Object(c.b)("p",null,"\u9000\u51fa\u5168\u5c4f"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitFullScreen.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.exitFullScreen"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"hidestatusbar"},"hideStatusBar"),Object(c.b)("p",null,"\u9690\u85cf\u72b6\u6001\u680f\uff0c\u4ec5\u5728iOS\u5168\u5c4f\u4e0b\u6709\u6548"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.hideStatusBar.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.hideStatusBar"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"pause"},"pause"),Object(c.b)("p",null,"\u6682\u505c\u89c6\u9891"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.pause.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.pause"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"play"},"play"),Object(c.b)("p",null,"\u64ad\u653e\u89c6\u9891"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.play.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.play"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"playbackrate"},"playbackRate"),Object(c.b)("p",null,"\u8bbe\u7f6e\u500d\u901f\u64ad\u653e"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.playbackRate.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(rate: number) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"rate"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u500d\u7387\uff0c\u652f\u6301 0.5/0.8/1.0/1.25/1.5\uff0c2.6.3 \u8d77\u652f\u6301 2.0 \u500d\u901f")))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.playbackRate"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"requestfullscreen"},"requestFullScreen"),Object(c.b)("p",null,"\u8fdb\u5165\u5168\u5c4f"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.requestFullScreen.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(option: RequestFullScreenOption) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"option"),Object(c.b)("td",null,Object(c.b)("code",null,"RequestFullScreenOption"))))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-5"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.requestFullScreen"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"seek"},"seek"),Object(c.b)("p",null,"\u8df3\u8f6c\u5230\u6307\u5b9a\u4f4d\u7f6e"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.seek.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(position: number) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"position"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8df3\u8f6c\u5230\u7684\u4f4d\u7f6e\uff0c\u5355\u4f4d s")))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.seek"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"senddanmu"},"sendDanmu"),Object(c.b)("p",null,"\u53d1\u9001\u5f39\u5e55"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.sendDanmu.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(data: Danmu) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"data"),Object(c.b)("td",null,Object(c.b)("code",null,"Danmu")),Object(c.b)("td",null,"\u5f39\u5e55\u5185\u5bb9")))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-7"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.sendDanmu"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"showstatusbar"},"showStatusBar"),Object(c.b)("p",null,"\u663e\u793a\u72b6\u6001\u680f\uff0c\u4ec5\u5728iOS\u5168\u5c4f\u4e0b\u6709\u6548"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.showStatusBar.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-8"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.showStatusBar"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"stop"},"stop"),Object(c.b)("p",null,"\u505c\u6b62\u89c6\u9891"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.stop.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-9"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.stop"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"requestfullscreenoption"},"RequestFullScreenOption"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"direction"),Object(c.b)("td",null,Object(c.b)("code",null,"0 | 90 | -90")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e\u5168\u5c4f\u65f6\u89c6\u9891\u7684\u65b9\u5411\uff0c\u4e0d\u6307\u5b9a\u5219\u6839\u636e\u5bbd\u9ad8\u6bd4\u81ea\u52a8\u5224\u65ad\u3002",Object(c.b)("br",null),Object(c.b)("br",null),"\u53ef\u9009\u503c\uff1a",Object(c.b)("br",null),"- 0: \u6b63\u5e38\u7ad6\u5411;",Object(c.b)("br",null),"- 90: \u5c4f\u5e55\u9006\u65f6\u948890\u5ea6;",Object(c.b)("br",null),"- -90: \u5c4f\u5e55\u987a\u65f6\u948890\u5ea6;")))),Object(c.b)("h3",{id:"danmu"},"Danmu"),Object(c.b)("p",null,"\u5f39\u5e55\u5185\u5bb9"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"text"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u5f39\u5e55\u6587\u5b57")),Object(c.b)("tr",null,Object(c.b)("td",null,"color"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f39\u5e55\u989c\u8272")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-10"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.exitFullScreen"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.hideStatusBar"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.pause"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.play"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.playbackRate"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.requestFullScreen"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.seek"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.sendDanmu"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.showStatusBar"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"VideoContext.stop"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))))}i.isMDXComponent=!0}}]);