"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[71953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(n),b=a,m=s["".concat(l,".").concat(b)]||s[b]||u[b]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},61268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(95999);const i={title:"com.zhekasmirnov.innercore.api.mod.ui.window.UITabbedWindow.getDefaultTab()",sidebar_label:"getDefaultTab",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},d=void 0,l={unversionedId:"com/zhekasmirnov/innercore/api/mod/ui/window/UITabbedWindow/getDefaultTab",id:"com/zhekasmirnov/innercore/api/mod/ui/window/UITabbedWindow/getDefaultTab",title:"com.zhekasmirnov.innercore.api.mod.ui.window.UITabbedWindow.getDefaultTab()",description:"",source:"@site/api/www/com/zhekasmirnov/innercore/api/mod/ui/window/UITabbedWindow/getDefaultTab.mdx",sourceDirName:"com/zhekasmirnov/innercore/api/mod/ui/window/UITabbedWindow",slug:"/com/zhekasmirnov/innercore/api/mod/ui/window/UITabbedWindow/getDefaultTab",permalink:"/ru/api/com/zhekasmirnov/innercore/api/mod/ui/window/UITabbedWindow/getDefaultTab",draft:!1,tags:[],version:"current",frontMatter:{title:"com.zhekasmirnov.innercore.api.mod.ui.window.UITabbedWindow.getDefaultTab()",sidebar_label:"getDefaultTab",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},c={},p=[],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,(0,a.kt)(o.Z,{id:"api.heading.method",values:{scopedName:"com.zhekasmirnov.innercore.api.mod.ui.window.UITabbedWindow.getDefaultTab()"},mdxType:"Translate"},"{scopedName} method")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UITabbedWindow extends java.lang.Object implements IWindow {\n    ...\n    getDefaultTab(): number;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"number"),(0,a.kt)("p",null,"Current default tab index. If no default tab was specified via ",(0,a.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UITabbedWindow/setDefaultTab"},"UI.TabbedWindow.setDefaultTab"),", the first tab added becomes default."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UITabbedWindow extends java.lang.Object implements IWindow {\n    ...\n    getDefaultTab(): number;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"number"),(0,a.kt)("p",null,"Current default tab index. If no default tab was specified via ",(0,a.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UITabbedWindow/setDefaultTab"},"UI.TabbedWindow.setDefaultTab"),", the first tab added becomes default."))}s.isMDXComponent=!0}}]);