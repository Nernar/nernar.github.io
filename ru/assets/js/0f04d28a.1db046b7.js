"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[81093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},24935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),o=r(95999);const l={title:"CustomBiome.setFoliageColor()",sidebar_label:"setFoliageColor",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},i=void 0,p={unversionedId:"CustomBiome/setFoliageColor",id:"CustomBiome/setFoliageColor",title:"CustomBiome.setFoliageColor()",description:"",source:"@site/api/www/CustomBiome/setFoliageColor.mdx",sourceDirName:"CustomBiome",slug:"/CustomBiome/setFoliageColor",permalink:"/ru/api/CustomBiome/setFoliageColor",draft:!1,tags:[],version:"current",frontMatter:{title:"CustomBiome.setFoliageColor()",sidebar_label:"setFoliageColor",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},m={},s=[],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,(0,a.kt)(o.Z,{id:"api.heading.method",values:{scopedName:"CustomBiome.setFoliageColor()"},mdxType:"Translate"},"{scopedName} method")),(0,a.kt)("p",null,"Sets biome's foliage color."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class CustomBiome {\n    ...\n    setFoliageColor(r: number, g: number, b: number): CustomBiome;\n}\n")),(0,a.kt)("h3",null,(0,a.kt)(o.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"r"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"red color component, value from 0 to 1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"g"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"green color component, value from 0 to 1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"b"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"blue color component, value from 0 to 1")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/CustomBiome"},"CustomBiome")),(0,a.kt)("p",null,"Reference to itself to be used in sequential calls."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Sets biome's foliage color."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class CustomBiome {\n    ...\n    setFoliageColor(color: number): CustomBiome;\n}\n")),(0,a.kt)("h3",null,(0,a.kt)(o.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"color"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"integer color value (you can specify it using hex value)")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/CustomBiome"},"CustomBiome")),(0,a.kt)("p",null,"Reference to itself to be used in sequential calls."))}c.isMDXComponent=!0}}]);