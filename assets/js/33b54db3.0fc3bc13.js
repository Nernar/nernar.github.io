"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[26136],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),l=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=l(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=l(n),c=r,u=k["".concat(d,".").concat(c)]||k[c]||s[c]||i;return n?a.createElement(u,o(o({ref:e},m),{},{components:n})):a.createElement(u,o({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},97703:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(95999);const o={title:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowGroup.addWindow()",sidebar_label:"addWindow",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},p=void 0,d={unversionedId:"com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup/addWindow",id:"com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup/addWindow",title:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowGroup.addWindow()",description:"",source:"@site/api/www/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup/addWindow.mdx",sourceDirName:"com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup",slug:"/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup/addWindow",permalink:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindowGroup/addWindow",draft:!1,tags:[],version:"current",frontMatter:{title:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowGroup.addWindow()",sidebar_label:"addWindow",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},l={},m=[],s={toc:m};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,(0,r.kt)(i.Z,{id:"api.heading.method",values:{scopedName:"com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowGroup.addWindow()"},mdxType:"Translate"},"{scopedName} method")),(0,r.kt)("p",null,"Creates a new window using provided description and adds it to the group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    addWindow(name: string, content: WindowContent): UIWindow;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"window name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/WindowContent"},"WindowContent")),(0,r.kt)("td",{parentName:"tr",align:null},"window description object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,r.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow"},"UIWindow")),(0,r.kt)("p",null,"Created ",(0,r.kt)("a",{parentName:"p",href:"/api/UI/Window"},"UI.Window")," object."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Creates a new window using provided description and adds it to the group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    addWindow(name: string, content: WindowContent): UIWindow;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"window name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/WindowContent"},"WindowContent")),(0,r.kt)("td",{parentName:"tr",align:null},"window description object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,r.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow"},"UIWindow")),(0,r.kt)("p",null,"Created ",(0,r.kt)("a",{parentName:"p",href:"/api/UI/Window"},"UI.Window")," object."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Creates a new window using provided description and adds it to the group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    addWindow(name: string, content: WindowContent): UIWindow;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"window name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/WindowContent"},"WindowContent")),(0,r.kt)("td",{parentName:"tr",align:null},"window description object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,r.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow"},"UIWindow")),(0,r.kt)("p",null,"Created ",(0,r.kt)("a",{parentName:"p",href:"/api/UI/Window"},"UI.Window")," object."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Creates a new window using provided description and adds it to the group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    addWindow(name: string, content: WindowContent): UIWindow;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"window name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/WindowContent"},"WindowContent")),(0,r.kt)("td",{parentName:"tr",align:null},"window description object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,r.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow"},"UIWindow")),(0,r.kt)("p",null,"Created ",(0,r.kt)("a",{parentName:"p",href:"/api/UI/Window"},"UI.Window")," object."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Creates a new window using provided description and adds it to the group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    addWindow(name: string, content: WindowContent): UIWindow;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"window name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/WindowContent"},"WindowContent")),(0,r.kt)("td",{parentName:"tr",align:null},"window description object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,r.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow"},"UIWindow")),(0,r.kt)("p",null,"Created ",(0,r.kt)("a",{parentName:"p",href:"/api/UI/Window"},"UI.Window")," object."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Creates a new window using provided description and adds it to the group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    addWindow(name: string, content: WindowContent): UIWindow;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"window name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/WindowContent"},"WindowContent")),(0,r.kt)("td",{parentName:"tr",align:null},"window description object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,r.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow"},"UIWindow")),(0,r.kt)("p",null,"Created ",(0,r.kt)("a",{parentName:"p",href:"/api/UI/Window"},"UI.Window")," object."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Creates a new window using provided description and adds it to the group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UIWindowGroup extends java.lang.Object implements IWindow {\n    ...\n    addWindow(name: string, content: WindowContent): UIWindow;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"window name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/WindowContent"},"WindowContent")),(0,r.kt)("td",{parentName:"tr",align:null},"window description object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,r.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/innercore/api/mod/ui/window/UIWindow"},"UIWindow")),(0,r.kt)("p",null,"Created ",(0,r.kt)("a",{parentName:"p",href:"/api/UI/Window"},"UI.Window")," object."))}k.isMDXComponent=!0}}]);