"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[18091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(95999);const i={title:"Translation.addTranslation()",sidebar_label:"addTranslation",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},o=void 0,s={unversionedId:"Translation/addTranslation",id:"Translation/addTranslation",title:"Translation.addTranslation()",description:"",source:"@site/api/www/Translation/addTranslation.mdx",sourceDirName:"Translation",slug:"/Translation/addTranslation",permalink:"/ru/api/Translation/addTranslation",draft:!1,tags:[],version:"current",frontMatter:{title:"Translation.addTranslation()",sidebar_label:"addTranslation",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},p={},d=[],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,(0,r.kt)(l.Z,{id:"api.heading.function",values:{scopedName:"Translation.addTranslation()"},mdxType:"Translate"},"{scopedName} function")),(0,r.kt)("p",null,"Adds translations for specified object in several languages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function addTranslation(name: string, localization: { [language: string]: string }): void;\n")),(0,r.kt)("h3",null,(0,r.kt)(l.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"default string in English or name key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"localization"),(0,r.kt)("td",{parentName:"tr",align:null},"{ ","[","language: string","]",": string }"),(0,r.kt)("td",{parentName:"tr",align:null},"object containing two-letter language codes as keys and localized strings in the specified language as values")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(l.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"void"))}u.isMDXComponent=!0}}]);