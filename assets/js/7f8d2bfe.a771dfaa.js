"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[50159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),o=r(95999);const l={title:"ToolAPI.getToolData()",sidebar_label:"getToolData",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},i=void 0,p={unversionedId:"ToolAPI/getToolData",id:"ToolAPI/getToolData",title:"ToolAPI.getToolData()",description:"",source:"@site/api/www/ToolAPI/getToolData.mdx",sourceDirName:"ToolAPI",slug:"/ToolAPI/getToolData",permalink:"/api/ToolAPI/getToolData",draft:!1,tags:[],version:"current",frontMatter:{title:"ToolAPI.getToolData()",sidebar_label:"getToolData",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},c={},u=[],s={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,(0,n.kt)(o.Z,{id:"api.heading.function",values:{scopedName:"ToolAPI.getToolData()"},mdxType:"Translate"},"{scopedName} function")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function getToolData(itemID: number): Nullable<ToolParams>;\n")),(0,n.kt)("h3",null,(0,n.kt)(o.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)(o.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)(o.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)(o.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"itemID"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"numeric item ID")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)(o.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,n.kt)("a",{parentName:"p",href:"/api/Nullable"},"Nullable"),"<",(0,n.kt)("a",{parentName:"p",href:"/api/ToolAPI/ToolParams"},"ToolParams"),">"),(0,n.kt)("p",null,"Tool information stored in slightly modified ",(0,n.kt)("a",{parentName:"p",href:"/api/ToolAPI/ToolParams"},"ToolAPI.ToolParams")," object or null if no tool data was specified."))}m.isMDXComponent=!0}}]);