"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[59911],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,k=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return n?t.createElement(k,i(i({ref:r},d),{},{components:n})):t.createElement(k,i({ref:r},d))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},20719:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(87462),o=(n(67294),n(3905)),a=n(95999);const i={title:"com.zhekasmirnov.innercore.api.mod.ui.IBackgroundProvider.(constructor)",sidebar_label:"(constructor)",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},c="com.zhekasmirnov.innercore.api.mod.ui.IBackgroundProvider.(constructor)",l={unversionedId:"com/zhekasmirnov/innercore/api/mod/ui/IBackgroundProvider/_constructor_",id:"com/zhekasmirnov/innercore/api/mod/ui/IBackgroundProvider/_constructor_",title:"com.zhekasmirnov.innercore.api.mod.ui.IBackgroundProvider.(constructor)",description:"",source:"@site/api/www/com/zhekasmirnov/innercore/api/mod/ui/IBackgroundProvider/_constructor_.mdx",sourceDirName:"com/zhekasmirnov/innercore/api/mod/ui/IBackgroundProvider",slug:"/com/zhekasmirnov/innercore/api/mod/ui/IBackgroundProvider/_constructor_",permalink:"/ru/api/com/zhekasmirnov/innercore/api/mod/ui/IBackgroundProvider/_constructor_",draft:!1,tags:[],version:"current",frontMatter:{title:"com.zhekasmirnov.innercore.api.mod.ui.IBackgroundProvider.(constructor)",sidebar_label:"(constructor)",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},p={},d=[],u={toc:d};function s(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"comzhekasmirnovinnercoreapimoduiibackgroundproviderconstructor"},"com.zhekasmirnov.innercore.api.mod.ui.IBackgroundProvider.(constructor)"),(0,o.kt)("p",null,"Constructs a new instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"IBackgroundProvider")," class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class IBackgroundProvider extends java.lang.Object {\n    ...\n    constructor();\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Constructs a new instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"IBackgroundProvider")," class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class IBackgroundProvider extends java.lang.Object {\n    ...\n    constructor(impl: {\n                                addDrawing(idrawing: background.IDrawing): void;\n                                clearAll(): void;\n                                prepareCache(): void;\n                                releaseCache(): void;\n                                setBackgroundColor(color: number): void;\n                            });\n}\n")),(0,o.kt)("h3",null,(0,o.kt)(a.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)(a.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)(a.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)(a.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"impl"),(0,o.kt)("td",{parentName:"tr",align:null},"{ addDrawing(idrawing: ",(0,o.kt)("a",{parentName:"td",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/background/IDrawing"},"background.IDrawing"),"): void; clearAll(): void; prepareCache(): void; releaseCache(): void; setBackgroundColor(color: number): void; }"),(0,o.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);