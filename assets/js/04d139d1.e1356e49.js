"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[66080],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(m,".").concat(d)]||u[d]||s[d]||i;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),i=r(95999);const l={title:"Item.createArmorItem()",sidebar_label:"createArmorItem",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},o=void 0,m={unversionedId:"Item/createArmorItem",id:"Item/createArmorItem",title:"Item.createArmorItem()",description:"",source:"@site/api/www/Item/createArmorItem.mdx",sourceDirName:"Item",slug:"/Item/createArmorItem",permalink:"/api/Item/createArmorItem",draft:!1,tags:[],version:"current",frontMatter:{title:"Item.createArmorItem()",sidebar_label:"createArmorItem",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},p={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,(0,n.kt)(i.Z,{id:"api.heading.function",values:{scopedName:"Item.createArmorItem()"},mdxType:"Translate"},"{scopedName} function")),(0,n.kt)("p",null,"Creates armor item using specified parameters."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function createArmorItem(nameID: string, name: string, texture: TextureData, params: ArmorParams): NativeItem;\n")),(0,n.kt)("h3",null,(0,n.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nameID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"string ID of the item; you should register it via ",(0,n.kt)("a",{parentName:"td",href:"/api/IDRegistry/genItemID"},"IDRegistry.genItemID()")," call first")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"item name in English; add translations to the name using ",(0,n.kt)("a",{parentName:"td",href:"/api/Translation"},"Translation")," module, all translation to the item and block names are applied automatically")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"texture"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/Item/TextureData"},"TextureData")),(0,n.kt)("td",{parentName:"tr",align:null},"texture data used to create item")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/Item/ArmorParams"},"ArmorParams")),(0,n.kt)("td",{parentName:"tr",align:null},"general armor item parameters object, the armor type there is required")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,n.kt)("a",{parentName:"p",href:"/api/Item/NativeItem"},"NativeItem")))}u.isMDXComponent=!0}}]);