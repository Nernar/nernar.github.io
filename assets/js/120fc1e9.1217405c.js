"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[97182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,b=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},95419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=n(95999);const o={title:"ModAPI.cloneObject()",sidebar_label:"cloneObject",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},i=void 0,c={unversionedId:"ModAPI/cloneObject",id:"ModAPI/cloneObject",title:"ModAPI.cloneObject()",description:"",source:"@site/api/www/ModAPI/cloneObject.mdx",sourceDirName:"ModAPI",slug:"/ModAPI/cloneObject",permalink:"/api/ModAPI/cloneObject",draft:!1,tags:[],version:"current",frontMatter:{title:"ModAPI.cloneObject()",sidebar_label:"cloneObject",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},p={},u=[],d={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,(0,a.kt)(l.Z,{id:"api.heading.function",values:{scopedName:"ModAPI.cloneObject()"},mdxType:"Translate"},"{scopedName} function")),(0,a.kt)("p",null,"Recursively clones object to the new one counting call depth and interrupting copying after 7th recursion call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function cloneObject<T extends object>(source: T, deep?: boolean, rec?: number): T;\n")),(0,a.kt)("h3",null,(0,a.kt)(l.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(l.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(l.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(l.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source"),(0,a.kt)("td",{parentName:"tr",align:null},"T"),(0,a.kt)("td",{parentName:"tr",align:null},"an object to be cloned")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deep"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,(0,a.kt)(l.Z,{id:"api.block.optional",mdxType:"Translate"},"(optional)"))," if ",(0,a.kt)("code",null,"true"),", copies the object recursively")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rec"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,(0,a.kt)(l.Z,{id:"api.block.optional",mdxType:"Translate"},"(optional)"))," current recursion state, if ",">"," 6, recursion stops; default value is 0")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(l.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"T"),(0,a.kt)("p",null,"Cloned object, all the properties that are less then then 8 in depth, get copied."))}s.isMDXComponent=!0}}]);