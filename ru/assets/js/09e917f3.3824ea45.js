"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[8457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),y=i,m=s["".concat(p,".").concat(y)]||s[y]||d[y]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},85668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),i=(r(67294),r(3905)),a=r(95999);const l={title:"LiquidRegistry.getLiquidByBlock()",sidebar_label:"getLiquidByBlock",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},o=void 0,p={unversionedId:"LiquidRegistry/getLiquidByBlock",id:"LiquidRegistry/getLiquidByBlock",title:"LiquidRegistry.getLiquidByBlock()",description:"",source:"@site/api/www/LiquidRegistry/getLiquidByBlock.mdx",sourceDirName:"LiquidRegistry",slug:"/LiquidRegistry/getLiquidByBlock",permalink:"/ru/api/LiquidRegistry/getLiquidByBlock",draft:!1,tags:[],version:"current",frontMatter:{title:"LiquidRegistry.getLiquidByBlock()",sidebar_label:"getLiquidByBlock",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},u={},c=[],d={toc:c};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,(0,i.kt)(a.Z,{id:"api.heading.function",values:{scopedName:"LiquidRegistry.getLiquidByBlock()"},mdxType:"Translate"},"{scopedName} function")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function getLiquidByBlock(id: number): Nullable<string>;\n")),(0,i.kt)("h3",null,(0,i.kt)(a.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)(a.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)(a.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)(a.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(a.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,i.kt)("a",{parentName:"p",href:"/api/Nullable"},"Nullable"),"<","string",">"),(0,i.kt)("p",null,"String ID of a liquid for given block, or ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", if a block with given ID is not a liquid."))}s.isMDXComponent=!0}}]);