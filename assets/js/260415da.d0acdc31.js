"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[91476],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(87462),o=(t(67294),t(3905)),i=t(95999);const a={title:"com.zhekasmirnov.innercore.api.mod.ui.container.Container.getGuiContent()",sidebar_label:"getGuiContent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},c=void 0,l={unversionedId:"com/zhekasmirnov/innercore/api/mod/ui/container/Container/getGuiContent",id:"com/zhekasmirnov/innercore/api/mod/ui/container/Container/getGuiContent",title:"com.zhekasmirnov.innercore.api.mod.ui.container.Container.getGuiContent()",description:"",source:"@site/api/www/com/zhekasmirnov/innercore/api/mod/ui/container/Container/getGuiContent.mdx",sourceDirName:"com/zhekasmirnov/innercore/api/mod/ui/container/Container",slug:"/com/zhekasmirnov/innercore/api/mod/ui/container/Container/getGuiContent",permalink:"/api/com/zhekasmirnov/innercore/api/mod/ui/container/Container/getGuiContent",draft:!1,tags:[],version:"current",frontMatter:{title:"com.zhekasmirnov.innercore.api.mod.ui.container.Container.getGuiContent()",sidebar_label:"getGuiContent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},p={},u=[],s={toc:u};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",null,(0,o.kt)(i.Z,{id:"api.heading.method",values:{scopedName:"com.zhekasmirnov.innercore.api.mod.ui.container.Container.getGuiContent()"},mdxType:"Translate"},"{scopedName} method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Container extends java.lang.Object implements UiAbstractContainer, recipes.workbench.WorkbenchField {\n    ...\n    getGuiContent(): Nullable<window.WindowContent>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,o.kt)("a",{parentName:"p",href:"/api/Nullable"},"Nullable"),"<",(0,o.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/WindowContent"},"window.WindowContent"),">"),(0,o.kt)("p",null,"Window's content object (usually specified in the window's constructor) if a window was opened in the container, ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," otherwise."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Container extends java.lang.Object implements UiAbstractContainer, recipes.workbench.WorkbenchField {\n    ...\n    getGuiContent(): Nullable<window.WindowContent>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,o.kt)("a",{parentName:"p",href:"/api/Nullable"},"Nullable"),"<",(0,o.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/WindowContent"},"window.WindowContent"),">"),(0,o.kt)("p",null,"Window's content object (usually specified in the window's constructor) if a window was opened in the container, ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," otherwise."))}d.isMDXComponent=!0}}]);