"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[27618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,k=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),i=n(95999);const o={title:"ModPack.ModPackManifestEditor.addIfMissing()",sidebar_label:"addIfMissing",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},d=void 0,l={unversionedId:"ModPack/ModPackManifestEditor/addIfMissing",id:"ModPack/ModPackManifestEditor/addIfMissing",title:"ModPack.ModPackManifestEditor.addIfMissing()",description:"",source:"@site/api/www/ModPack/ModPackManifestEditor/addIfMissing.mdx",sourceDirName:"ModPack/ModPackManifestEditor",slug:"/ModPack/ModPackManifestEditor/addIfMissing",permalink:"/api/ModPack/ModPackManifestEditor/addIfMissing",draft:!1,tags:[],version:"current",frontMatter:{title:"ModPack.ModPackManifestEditor.addIfMissing()",sidebar_label:"addIfMissing",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,(0,r.kt)(i.Z,{id:"api.heading.method",values:{scopedName:"ModPack.ModPackManifestEditor.addIfMissing()"},mdxType:"Translate"},"{scopedName} method")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ModPackManifestEditor {\n    ...\n    addIfMissing(key: string, value: any): ModPackManifestEditor;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,r.kt)("a",{parentName:"p",href:"/api/ModPack/ModPackManifestEditor"},"ModPackManifestEditor")))}u.isMDXComponent=!0}}]);