"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[1891],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=p(n),m=o,w=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(w,i(i({ref:e},s),{},{components:n})):r.createElement(w,i({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22813:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905)),a=n(95999);const i={title:"UI.WindowLocation.(constructor)",sidebar_label:"(constructor)",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},c="UI.WindowLocation.(constructor)",l={unversionedId:"UI/WindowLocation/_constructor_",id:"UI/WindowLocation/_constructor_",title:"UI.WindowLocation.(constructor)",description:"",source:"@site/api/www/UI/WindowLocation/_constructor_.mdx",sourceDirName:"UI/WindowLocation",slug:"/UI/WindowLocation/_constructor_",permalink:"/ru/api/UI/WindowLocation/_constructor_",draft:!1,tags:[],version:"current",frontMatter:{title:"UI.WindowLocation.(constructor)",sidebar_label:"(constructor)",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},p={},s=[],u={toc:s};function d(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uiwindowlocationconstructor"},"UI.WindowLocation.(constructor)"),(0,o.kt)("p",null,"Constructs new ",(0,o.kt)("a",{parentName:"p",href:"/api/UI/WindowLocation"},"UI.WindowLocation")," instance with default position and size (fullscreen window)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class WindowLocation extends com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation {\n    ...\n    constructor();\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Constructs new ",(0,o.kt)("a",{parentName:"p",href:"/api/UI/WindowLocation"},"UI.WindowLocation")," instance with specified parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class WindowLocation extends com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation {\n    ...\n    constructor(desc: com.zhekasmirnov.innercore.api.mod.ui.window.WindowLocationDescription);\n}\n")),(0,o.kt)("h3",null,(0,o.kt)(a.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)(a.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)(a.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)(a.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"desc"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/WindowLocationDescription"},"com.zhekasmirnov.innercore.api.mod.ui.window.WindowLocationDescription")),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);