"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[12648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,p(p({ref:t},s),{},{components:r})):n.createElement(k,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),i=r(95999);const p={title:"Recipes.WorkbenchRecipe.setPrefix()",sidebar_label:"setPrefix",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},l=void 0,o={unversionedId:"Recipes/WorkbenchRecipe/setPrefix",id:"Recipes/WorkbenchRecipe/setPrefix",title:"Recipes.WorkbenchRecipe.setPrefix()",description:"",source:"@site/api/www/Recipes/WorkbenchRecipe/setPrefix.mdx",sourceDirName:"Recipes/WorkbenchRecipe",slug:"/Recipes/WorkbenchRecipe/setPrefix",permalink:"/ru/api/Recipes/WorkbenchRecipe/setPrefix",draft:!1,tags:[],version:"current",frontMatter:{title:"Recipes.WorkbenchRecipe.setPrefix()",sidebar_label:"setPrefix",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},c={},s=[],d={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,(0,a.kt)(i.Z,{id:"api.heading.method",values:{scopedName:"Recipes.WorkbenchRecipe.setPrefix()"},mdxType:"Translate"},"{scopedName} method")),(0,a.kt)("p",null,"Sets prefix value for the recipe."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface WorkbenchRecipe extends java.lang.Object {\n    ...\n    setPrefix(prefix: string): void;\n}\n")),(0,a.kt)("h3",null,(0,a.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"prefix"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"new prefix value")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"void"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Sets prefix value for the recipe."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface WorkbenchRecipe extends java.lang.Object {\n    ...\n    setPrefix(prefix: string): void;\n}\n")),(0,a.kt)("h3",null,(0,a.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"prefix"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"new prefix value")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"void"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Sets prefix value for the recipe."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface WorkbenchRecipe extends java.lang.Object {\n    ...\n    setPrefix(prefix: string): void;\n}\n")),(0,a.kt)("h3",null,(0,a.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"prefix"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"new prefix value")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"void"))}u.isMDXComponent=!0}}]);