"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[10819],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>s});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=d(r),s=a,m=k["".concat(p,".").concat(s)]||k[s]||u[s]||i;return r?n.createElement(m,l(l({ref:e},c),{},{components:r})):n.createElement(m,l({ref:e},c))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},10880:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),i=r(95999);const l={title:"Block.LiquidDescriptor",sidebar_label:"LiquidDescriptor",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},o=void 0,p={unversionedId:"Block/LiquidDescriptor/index",id:"Block/LiquidDescriptor/index",title:"Block.LiquidDescriptor",description:"",source:"@site/api/www/Block/LiquidDescriptor/index.mdx",sourceDirName:"Block/LiquidDescriptor",slug:"/Block/LiquidDescriptor/",permalink:"/ru/api/Block/LiquidDescriptor/",draft:!1,tags:[],version:"current",frontMatter:{title:"Block.LiquidDescriptor",sidebar_label:"LiquidDescriptor",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},d={},c=[],u={toc:c};function k(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,(0,a.kt)(i.Z,{id:"api.heading.interface",values:{scopedName:"Block.LiquidDescriptor"},mdxType:"Translate"},"{scopedName} interface")),(0,a.kt)("p",null,"Object to specify needed params for custom liquid block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface LiquidDescriptor \n")),(0,a.kt)("h3",null,(0,a.kt)(i.Z,{id:"api.section.properties",mdxType:"Translate"},"Properties")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.property",mdxType:"Translate"},"Property")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.modifiers",mdxType:"Translate"},"Modifiers")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/Block/LiquidDescriptor/bucket"},"bucket?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"{ id?: string, texture: { name: string, meta?: number } }"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,(0,a.kt)(i.Z,{id:"api.block.optional",mdxType:"Translate"},"(optional)"))," Optional section, if added, this will create fully functional (including dispensers) bucket items.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/Block/LiquidDescriptor/flowing"},"flowing")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"{ id?: string, texture: ","[","string, number","]"," }"),(0,a.kt)("td",{parentName:"tr",align:null},"Object to describe dynamic liquid block texture, and name ID additionally.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/Block/LiquidDescriptor/inCreative"},"inCreative?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,(0,a.kt)(i.Z,{id:"api.block.optional",mdxType:"Translate"},"(optional)"))," Whether to add liquid block to creative inventory.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/Block/LiquidDescriptor/isRenewable"},"isRenewable?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,(0,a.kt)(i.Z,{id:"api.block.optional",mdxType:"Translate"},"(optional)"))," True if the liquid will be renewable, as water.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/Block/LiquidDescriptor/modelTextures"},"modelTextures?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,(0,a.kt)(i.Z,{id:"api.block.optional",mdxType:"Translate"},"(optional)")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/Block/LiquidDescriptor/name"},"name")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the block to be displayed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/Block/LiquidDescriptor/still"},"still")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"{ id?: string, texture: ","[","string, number","]"," }"),(0,a.kt)("td",{parentName:"tr",align:null},"Object to describe static liquid block texture, and name ID additionally.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/Block/LiquidDescriptor/tickDelay"},"tickDelay?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,(0,a.kt)(i.Z,{id:"api.block.optional",mdxType:"Translate"},"(optional)"))," Delay between liquid spreading steps in ticks.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/Block/LiquidDescriptor/uiTextures"},"uiTextures?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,(0,a.kt)(i.Z,{id:"api.block.optional",mdxType:"Translate"},"(optional)")))))))}k.isMDXComponent=!0}}]);