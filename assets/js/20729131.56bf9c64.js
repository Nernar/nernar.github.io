"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[22597],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,w=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(w,o(o({ref:n},c),{},{components:t})):r.createElement(w,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87666:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905)),i=t(95999);const o={title:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowGroup.getContainer()",sidebar_label:"getContainer",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},p=void 0,l={unversionedId:"com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup/getContainer",id:"com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup/getContainer",title:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowGroup.getContainer()",description:"",source:"@site/api/www/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup/getContainer.mdx",sourceDirName:"com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup",slug:"/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup/getContainer",permalink:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup/getContainer",draft:!1,tags:[],version:"current",frontMatter:{title:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowGroup.getContainer()",sidebar_label:"getContainer",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},s={},c=[],u={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,(0,a.kt)(i.Z,{id:"api.heading.method",values:{scopedName:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowGroup.getContainer()"},mdxType:"Translate"},"{scopedName} method")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    getContainer(): Nullable<container.UiAbstractContainer>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/Nullable"},"Nullable"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/container/UiAbstractContainer"},"container.UiAbstractContainer"),">"),(0,a.kt)("p",null,"Currently ",(0,a.kt)("a",{parentName:"p",href:"/api/UI/Container"},"UI.Container")," that was used to open this window or null, if the window wasn't opened in container."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    getContainer(): Nullable<container.UiAbstractContainer>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/Nullable"},"Nullable"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/container/UiAbstractContainer"},"container.UiAbstractContainer"),">"),(0,a.kt)("p",null,"Currently ",(0,a.kt)("a",{parentName:"p",href:"/api/UI/Container"},"UI.Container")," that was used to open this window or null, if the window wasn't opened in container."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    getContainer(): Nullable<container.UiAbstractContainer>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/Nullable"},"Nullable"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/container/UiAbstractContainer"},"container.UiAbstractContainer"),">"),(0,a.kt)("p",null,"Currently ",(0,a.kt)("a",{parentName:"p",href:"/api/UI/Container"},"UI.Container")," that was used to open this window or null, if the window wasn't opened in container."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    getContainer(): Nullable<container.UiAbstractContainer>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/Nullable"},"Nullable"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/container/UiAbstractContainer"},"container.UiAbstractContainer"),">"),(0,a.kt)("p",null,"Currently ",(0,a.kt)("a",{parentName:"p",href:"/api/UI/Container"},"UI.Container")," that was used to open this window or null, if the window wasn't opened in container."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    getContainer(): Nullable<container.UiAbstractContainer>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/Nullable"},"Nullable"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/container/UiAbstractContainer"},"container.UiAbstractContainer"),">"),(0,a.kt)("p",null,"Currently ",(0,a.kt)("a",{parentName:"p",href:"/api/UI/Container"},"UI.Container")," that was used to open this window or null, if the window wasn't opened in container."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    getContainer(): Nullable<container.UiAbstractContainer>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/Nullable"},"Nullable"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/container/UiAbstractContainer"},"container.UiAbstractContainer"),">"),(0,a.kt)("p",null,"Currently ",(0,a.kt)("a",{parentName:"p",href:"/api/UI/Container"},"UI.Container")," that was used to open this window or null, if the window wasn't opened in container."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    getContainer(): Nullable<container.UiAbstractContainer>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/Nullable"},"Nullable"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/container/UiAbstractContainer"},"container.UiAbstractContainer"),">"),(0,a.kt)("p",null,"Currently ",(0,a.kt)("a",{parentName:"p",href:"/api/UI/Container"},"UI.Container")," that was used to open this window or null, if the window wasn't opened in container."))}d.isMDXComponent=!0}}]);