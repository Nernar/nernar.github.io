"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[17789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(o,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(95999);const p={title:"com.zhekasmirnov.apparatus.api.container.ItemContainer.addClientOpenListener()",sidebar_label:"addClientOpenListener",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},l=void 0,o={unversionedId:"com/zhekasmirnov/apparatus/api/container/ItemContainer/addClientOpenListener",id:"com/zhekasmirnov/apparatus/api/container/ItemContainer/addClientOpenListener",title:"com.zhekasmirnov.apparatus.api.container.ItemContainer.addClientOpenListener()",description:"",source:"@site/api/www/com/zhekasmirnov/apparatus/api/container/ItemContainer/addClientOpenListener.mdx",sourceDirName:"com/zhekasmirnov/apparatus/api/container/ItemContainer",slug:"/com/zhekasmirnov/apparatus/api/container/ItemContainer/addClientOpenListener",permalink:"/api/com/zhekasmirnov/apparatus/api/container/ItemContainer/addClientOpenListener",draft:!1,tags:[],version:"current",frontMatter:{title:"com.zhekasmirnov.apparatus.api.container.ItemContainer.addClientOpenListener()",sidebar_label:"addClientOpenListener",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},s={},m=[],c={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,(0,r.kt)(i.Z,{id:"api.heading.method",values:{scopedName:"com.zhekasmirnov.apparatus.api.container.ItemContainer.addClientOpenListener()"},mdxType:"Translate"},"{scopedName} method")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ItemContainer extends java.lang.Object implements innercore.api.mod.recipes.workbench.WorkbenchField {\n    ...\n    static addClientOpenListener(typeName: string, listener: ItemContainerFuncs.ClientOnOpenListener): void;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"typeName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/com/zhekasmirnov/apparatus/api/container/ItemContainerFuncs/ClientOnOpenListener"},"ItemContainerFuncs.ClientOnOpenListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"void"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ItemContainer extends java.lang.Object implements innercore.api.mod.recipes.workbench.WorkbenchField {\n    ...\n    static addClientOpenListener(typeName: string, listener: ItemContainerFuncs.ClientOnOpenListener): void;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"typeName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/com/zhekasmirnov/apparatus/api/container/ItemContainerFuncs/ClientOnOpenListener"},"ItemContainerFuncs.ClientOnOpenListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"void"))}d.isMDXComponent=!0}}]);