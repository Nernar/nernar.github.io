"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[8654],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||c;return n?t.createElement(h,o(o({ref:r},p),{},{components:n})):t.createElement(h,o({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42027:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=n(87462),a=(n(67294),n(3905)),c=n(95999);const o={title:"Recipes.WorkbenchUIHandler.refreshAsync()",sidebar_label:"refreshAsync",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},i=void 0,s={unversionedId:"Recipes/WorkbenchUIHandler/refreshAsync",id:"Recipes/WorkbenchUIHandler/refreshAsync",title:"Recipes.WorkbenchUIHandler.refreshAsync()",description:"",source:"@site/api/www/Recipes/WorkbenchUIHandler/refreshAsync.mdx",sourceDirName:"Recipes/WorkbenchUIHandler",slug:"/Recipes/WorkbenchUIHandler/refreshAsync",permalink:"/ru/api/Recipes/WorkbenchUIHandler/refreshAsync",draft:!1,tags:[],version:"current",frontMatter:{title:"Recipes.WorkbenchUIHandler.refreshAsync()",sidebar_label:"refreshAsync",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},l={},p=[],u={toc:p};function f(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,(0,a.kt)(c.Z,{id:"api.heading.method",values:{scopedName:"Recipes.WorkbenchUIHandler.refreshAsync()"},mdxType:"Translate"},"{scopedName} method")),(0,a.kt)("p",null,"Runs recipes refresh in the ticking thread delaying refresh process for a tick. To get recipes count use ",(0,a.kt)("a",{parentName:"p",href:"/api/Recipes/WorkbenchUIHandler/setOnRefreshListener"},"WorkbenchUIHandler.setOnRefreshListener"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class WorkbenchUIHandler {\n    ...\n    refreshAsync(): void;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(c.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"void"))}f.isMDXComponent=!0}}]);