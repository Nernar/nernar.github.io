"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[23242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,k=s["".concat(o,".").concat(c)]||s[c]||u[c]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},40020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),l=n(95999);const i={title:"ICRender.RenderEntry.asCondition()",sidebar_label:"asCondition",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},p=void 0,o={unversionedId:"ICRender/RenderEntry/asCondition",id:"ICRender/RenderEntry/asCondition",title:"ICRender.RenderEntry.asCondition()",description:"",source:"@site/api/www/ICRender/RenderEntry/asCondition.mdx",sourceDirName:"ICRender/RenderEntry",slug:"/ICRender/RenderEntry/asCondition",permalink:"/ru/api/ICRender/RenderEntry/asCondition",draft:!1,tags:[],version:"current",frontMatter:{title:"ICRender.RenderEntry.asCondition()",sidebar_label:"asCondition",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},d={},m=[],u={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,(0,a.kt)(l.Z,{id:"api.heading.method",values:{scopedName:"ICRender.RenderEntry.asCondition()"},mdxType:"Translate"},"{scopedName} method")),(0,a.kt)("p",null,"Sets ",(0,a.kt)("a",{parentName:"p",href:"/api/ICRender/BLOCK"},"ICRender.BLOCK()")," condition with specified parameters. Uses coordinates that are relative to current block's ones."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RenderEntry {\n    ...\n    asCondition(x: number, y: number, z: number, group: Group | string, mode: number): RenderEntry;\n}\n")),(0,a.kt)("h3",null,(0,a.kt)(l.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(l.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(l.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(l.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"z"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"group"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/ICRender/Group"},"Group")," ","|"," string"),(0,a.kt)("td",{parentName:"tr",align:null},"group name or object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"one of the ",(0,a.kt)("a",{parentName:"td",href:"/api/ICRender/MODE_INCLUDE"},"ICRender.MODE","_","INCLUDE")," and ",(0,a.kt)("a",{parentName:"td",href:"/api/ICRender/MODE_EXCLUDE"},"ICRender.MODE","_","EXCLUDE")," constants")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(l.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/ICRender/RenderEntry"},"RenderEntry")),(0,a.kt)("p",null,"Reference to itself to be used in sequential calls."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Sets ",(0,a.kt)("a",{parentName:"p",href:"/api/ICRender/BLOCK"},"ICRender.BLOCK()")," condition with specified parameters. Uses coordinates that are relative to current block's ones. Creates a new anonymous group with single block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RenderEntry {\n    ...\n    asCondition(x: number, y: number, z: number, id: number, data: number, mode: number): RenderEntry;\n}\n")),(0,a.kt)("h3",null,(0,a.kt)(l.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(l.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(l.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(l.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"z"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"condition block ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"condition block data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"one of the ",(0,a.kt)("a",{parentName:"td",href:"/api/ICRender/MODE_INCLUDE"},"ICRender.MODE","_","INCLUDE")," and ",(0,a.kt)("a",{parentName:"td",href:"/api/ICRender/MODE_EXCLUDE"},"ICRender.MODE","_","EXCLUDE")," constants")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(l.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/ICRender/RenderEntry"},"RenderEntry")),(0,a.kt)("p",null,"Reference to itself to be used in sequential calls."))}s.isMDXComponent=!0}}]);