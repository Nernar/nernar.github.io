"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[19297],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),y=a,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return t?n.createElement(f,p(p({ref:r},s),{},{components:t})):n.createElement(f,p({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82266:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905)),i=t(95999);const p={title:"Player.experience()",sidebar_label:"experience",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},o=void 0,l={unversionedId:"Player/experience",id:"Player/experience",title:"Player.experience()",description:"",source:"@site/api/www/Player/experience.mdx",sourceDirName:"Player",slug:"/Player/experience",permalink:"/api/Player/experience",draft:!1,tags:[],version:"current",frontMatter:{title:"Player.experience()",sidebar_label:"experience",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},c={},s=[],u={toc:s};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,(0,a.kt)(i.Z,{id:"api.heading.function",values:{scopedName:"Player.experience()"},mdxType:"Translate"},"{scopedName} function")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)(i.Z,{id:"api.deprecatedNotice.title",mdxType:"Translate"},"Deprecated")),(0,a.kt)(i.Z,{id:"api.deprecatedNotice.message",mdxType:"Translate"},"No longer supported and shouldn't be used!"),(0,a.kt)("p",{parentName:"admonition"},"Consider using ",(0,a.kt)("a",{parentName:"p",href:"/api/Player/getExperience"},"Player.getExperience()"),", ",(0,a.kt)("a",{parentName:"p",href:"/api/Player/setExperience"},"Player.setExperience()"),", ",(0,a.kt)("a",{parentName:"p",href:"/api/Player/addExperience"},"Player.addExperience()"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function experience(): PlayerExperience;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,a.kt)("a",{parentName:"p",href:"/api/Player/PlayerExperience"},"PlayerExperience")),(0,a.kt)("p",null,"An object that allows to manipulate player experience."))}d.isMDXComponent=!0}}]);