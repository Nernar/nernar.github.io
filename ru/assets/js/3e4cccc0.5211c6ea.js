"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[79710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,y=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(95999);const i={title:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindow.getProperty()",sidebar_label:"getProperty",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},p=void 0,l={unversionedId:"com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow/getProperty",id:"com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow/getProperty",title:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindow.getProperty()",description:"",source:"@site/api/www/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow/getProperty.mdx",sourceDirName:"com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow",slug:"/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow/getProperty",permalink:"/ru/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow/getProperty",draft:!1,tags:[],version:"current",frontMatter:{title:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindow.getProperty()",sidebar_label:"getProperty",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},s={},m=[],c={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,(0,a.kt)(o.Z,{id:"api.heading.method",values:{scopedName:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindow.getProperty()"},mdxType:"Translate"},"{scopedName} method")),(0,a.kt)("p",null,"Gets custom property by it's name. Custom properties can be used to store some values containing window's current state. Note that these properties are not saved between Inner Core launches."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindow extends java.lang.Object implements IWindow {\n    ...\n    getProperty<T>(name: string): T;\n}\n")),(0,a.kt)("h3",null,(0,a.kt)(o.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"custom property name")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"T"),(0,a.kt)("p",null,"Value set by ",(0,a.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow/putProperty"},"UI.Window.putProperty")," or null if no value was specified for this name."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Gets custom property by it's name. Custom properties can be used to store some values containing window's current state. Note that these properties are not saved between Inner Core launches."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindow extends java.lang.Object implements IWindow {\n    ...\n    getProperty<T>(name: string): T;\n}\n")),(0,a.kt)("h3",null,(0,a.kt)(o.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"custom property name")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"T"),(0,a.kt)("p",null,"Value set by ",(0,a.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow/putProperty"},"UI.Window.putProperty")," or null if no value was specified for this name."))}d.isMDXComponent=!0}}]);