"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[76394],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),y=o,f=m["".concat(l,".").concat(y)]||m[y]||u[y]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83178:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905)),a=t(95999);const i={title:"ArmorType",sidebar_label:"ArmorType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},p=void 0,l={unversionedId:"ArmorType",id:"ArmorType",title:"ArmorType",description:"",source:"@site/api/www/ArmorType.mdx",sourceDirName:".",slug:"/ArmorType",permalink:"/api/ArmorType",draft:!1,tags:[],version:"current",frontMatter:{title:"ArmorType",sidebar_label:"ArmorType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},c={},s=[],u={toc:s};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",null,(0,o.kt)(a.Z,{id:"api.heading.typeAlias",values:{scopedName:"ArmorType"},mdxType:"Translate"},"{scopedName} type")),(0,o.kt)("p",null,"String types of armor to be specified when calling ",(0,o.kt)("a",{parentName:"p",href:"/api/Item/createArmorItem"},"Item.createArmorItem()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export type ArmorType = "helmet" | "chestplate" | "leggings" | "boots";\n')))}m.isMDXComponent=!0}}]);