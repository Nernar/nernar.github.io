"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[37073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),s=p(r),y=i,d=s["".concat(l,".").concat(y)]||s[y]||u[y]||o;return r?n.createElement(d,c(c({ref:t},f),{},{components:r})):n.createElement(d,c({ref:t},f))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},66025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>c,metadata:()=>l,toc:()=>f});var n=r(87462),i=(r(67294),r(3905)),o=r(95999);const c={title:"Block.SpecialType.friction",sidebar_label:"friction",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},a=void 0,l={unversionedId:"Block/SpecialType/friction",id:"Block/SpecialType/friction",title:"Block.SpecialType.friction",description:"",source:"@site/api/www/Block/SpecialType/friction.mdx",sourceDirName:"Block/SpecialType",slug:"/Block/SpecialType/friction",permalink:"/ru/api/Block/SpecialType/friction",draft:!1,tags:[],version:"current",frontMatter:{title:"Block.SpecialType.friction",sidebar_label:"friction",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},p={},f=[],u={toc:f};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,(0,i.kt)(o.Z,{id:"api.heading.property",values:{scopedName:"Block.SpecialType.friction"},mdxType:"Translate"},"{scopedName} property")),(0,i.kt)("p",null,"Specifies how player walks on this block. The higher the friction is, the more difficult it is to change speed and direction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SpecialType {\n    ...\n    friction?: number,\n}\n")))}s.isMDXComponent=!0}}]);