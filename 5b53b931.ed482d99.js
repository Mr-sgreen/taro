(window.webpackJsonp=window.webpackJsonp||[]).push([[972],{1028:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return i}));var c=n(2),l=n(6),b=(n(0),n(2880)),r={title:"Taro.addCard(option)",sidebar_label:"addCard"},a={unversionedId:"apis/open-api/card/addCard",id:"version-2.x/apis/open-api/card/addCard",isDocsHomePage:!1,title:"Taro.addCard(option)",description:"\u6279\u91cf\u6dfb\u52a0\u5361\u5238\u3002\u53ea\u6709\u901a\u8fc7 \u8ba4\u8bc1 \u7684\u5c0f\u7a0b\u5e8f\u6216\u6587\u5316\u4e92\u52a8\u7c7b\u76ee\u7684\u5c0f\u6e38\u620f\u624d\u80fd\u4f7f\u7528\u3002\u66f4\u591a\u6587\u6863\u8bf7\u53c2\u8003 \u5fae\u4fe1\u5361\u5238\u63a5\u53e3\u6587\u6863\u3002",source:"@site/versioned_docs/version-2.x/apis/open-api/card/addCard.md",slug:"/apis/open-api/card/addCard",permalink:"/taro/docs/2.x/apis/open-api/card/addCard",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/open-api/card/addCard.md",version:"2.x",sidebar_label:"addCard",sidebar:"version-2.x/API",previous:{title:"Taro.openCard(option)",permalink:"/taro/docs/2.x/apis/open-api/card/openCard"},next:{title:"Taro.chooseInvoiceTitle(option)",permalink:"/taro/docs/2.x/apis/open-api/invoice/chooseInvoiceTitle"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"RequestInfo",id:"requestinfo",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"AddCardResponseInfo",id:"addcardresponseinfo",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:d};function i(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(c.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u6279\u91cf\u6dfb\u52a0\u5361\u5238\u3002\u53ea\u6709\u901a\u8fc7 ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/product/renzheng.html"}),"\u8ba4\u8bc1")," \u7684\u5c0f\u7a0b\u5e8f\u6216\u6587\u5316\u4e92\u52a8\u7c7b\u76ee\u7684\u5c0f\u6e38\u620f\u624d\u80fd\u4f7f\u7528\u3002\u66f4\u591a\u6587\u6863\u8bf7\u53c2\u8003 ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2"}),"\u5fae\u4fe1\u5361\u5238\u63a5\u53e3\u6587\u6863"),"\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"cardExt \u8bf4\u660e"),"\ncardExt \u662f\u5361\u5238\u7684\u6269\u5c55\u53c2\u6570\uff0c\u5176\u503c\u662f\u4e00\u4e2a JSON \u5b57\u7b26\u4e32\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"cardList"),Object(b.b)("td",null,Object(b.b)("code",null,"RequestInfo[]")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u9700\u8981\u6dfb\u52a0\u7684\u5361\u5238\u5217\u8868")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h3",{id:"requestinfo"},"RequestInfo"),Object(b.b)("p",null,"\u9700\u8981\u6dfb\u52a0\u7684\u5361\u5238\u5217\u8868"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"cardExt"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u5361\u5238\u7684\u6269\u5c55\u53c2\u6570\u3002\u9700\u5c06 CardExt \u5bf9\u8c61 JSON \u5e8f\u5217\u5316\u4e3a",Object(b.b)("strong",null,"\u5b57\u7b26\u4e32"),"\u4f20\u5165")),Object(b.b)("tr",null,Object(b.b)("td",null,"cardId"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u5361\u5238 ID")))),Object(b.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"cardList"),Object(b.b)("td",null,Object(b.b)("code",null,"AddCardResponseInfo[]")),Object(b.b)("td",null,"\u5361\u5238\u6dfb\u52a0\u7ed3\u679c\u5217\u8868")),Object(b.b)("tr",null,Object(b.b)("td",null,"errMsg"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(b.b)("h3",{id:"addcardresponseinfo"},"AddCardResponseInfo"),Object(b.b)("p",null,"\u5361\u5238\u6dfb\u52a0\u7ed3\u679c\u5217\u8868"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"cardExt"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u5361\u5238\u7684\u6269\u5c55\u53c2\u6570\uff0c\u7ed3\u6784\u8bf7\u53c2\u8003\u4e0b\u6587")),Object(b.b)("tr",null,Object(b.b)("td",null,"cardId"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u7528\u6237\u9886\u53d6\u5230\u5361\u5238\u7684 ID")),Object(b.b)("tr",null,Object(b.b)("td",null,"code"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u52a0\u5bc6 code\uff0c\u4e3a\u7528\u6237\u9886\u53d6\u5230\u5361\u5238\u7684code\u52a0\u5bc6\u540e\u7684\u5b57\u7b26\u4e32\uff0c\u89e3\u5bc6\u8bf7\u53c2\u7167\uff1a",Object(b.b)("a",{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V"},"code \u89e3\u7801\u63a5\u53e3"))),Object(b.b)("tr",null,Object(b.b)("td",null,"isSuccess"),Object(b.b)("td",null,Object(b.b)("code",null,"boolean")),Object(b.b)("td",null,"\u662f\u5426\u6210\u529f")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),'Taro.addCard({\n  cardList: [\n    {\n      cardId: \'\',\n      cardExt: \'{"code": "", "openid": "", "timestamp": "", "signature":""}\'\n    }, {\n      cardId: \'\',\n      cardExt: \'{"code": "", "openid": "", "timestamp": "", "signature":""}\'\n    }\n  ],\n  success: function (res) {\n    console.log(res.cardList) // \u5361\u5238\u6dfb\u52a0\u7ed3\u679c\n  }\n})\n')),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.addCard"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}i.isMDXComponent=!0},2880:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var c=n(0),l=n.n(c);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,c,l=function(e,t){if(null==e)return{};var n,c,l={},b=Object.keys(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),i=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},j=l.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,b=e.originalType,r=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),u=i(n),j=c,s=u["".concat(r,".").concat(j)]||u[j]||O[j]||b;return n?l.a.createElement(s,a(a({ref:t},o),{},{components:n})):l.a.createElement(s,a({ref:t},o))}));function s(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var b=n.length,r=new Array(b);r[0]=j;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:c,r[1]=a;for(var o=2;o<b;o++)r[o]=n[o];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);