"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[26028],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),s=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return o.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=n,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?o.createElement(y,i(i({ref:r},u),{},{components:t})):o.createElement(y,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84756:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=t(87462),n=(t(67294),t(3905)),a=t(95999);const i={title:"com.zhekasmirnov.horizon.modloader.resource.directory.ResourceDirectory.getResource()",sidebar_label:"getResource",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},c=void 0,l={unversionedId:"com/zhekasmirnov/horizon/modloader/resource/directory/ResourceDirectory/getResource",id:"com/zhekasmirnov/horizon/modloader/resource/directory/ResourceDirectory/getResource",title:"com.zhekasmirnov.horizon.modloader.resource.directory.ResourceDirectory.getResource()",description:"",source:"@site/api/www/com/zhekasmirnov/horizon/modloader/resource/directory/ResourceDirectory/getResource.mdx",sourceDirName:"com/zhekasmirnov/horizon/modloader/resource/directory/ResourceDirectory",slug:"/com/zhekasmirnov/horizon/modloader/resource/directory/ResourceDirectory/getResource",permalink:"/ru/api/com/zhekasmirnov/horizon/modloader/resource/directory/ResourceDirectory/getResource",draft:!1,tags:[],version:"current",frontMatter:{title:"com.zhekasmirnov.horizon.modloader.resource.directory.ResourceDirectory.getResource()",sidebar_label:"getResource",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},s={},u=[],p={toc:u};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,(0,n.kt)(a.Z,{id:"api.heading.method",values:{scopedName:"com.zhekasmirnov.horizon.modloader.resource.directory.ResourceDirectory.getResource()"},mdxType:"Translate"},"{scopedName} method")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ResourceDirectory extends globalThis.java.lang.Object {\n    ...\n    getResource(path: string): globalThis.java.util.List<Resource>;\n}\n")),(0,n.kt)("h3",null,(0,n.kt)(a.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)(a.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)(a.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)(a.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)(a.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/java/util/List"},"globalThis.java.util.List"),"<",(0,n.kt)("a",{parentName:"p",href:"/api/com/zhekasmirnov/horizon/modloader/resource/directory/Resource"},"Resource"),">"))}d.isMDXComponent=!0}}]);