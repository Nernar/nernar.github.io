"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[97186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(95999);const o={title:"UI.WindowEventListener",sidebar_label:"WindowEventListener",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},l=void 0,p={unversionedId:"UI/WindowEventListener/index",id:"UI/WindowEventListener/index",title:"UI.WindowEventListener",description:"",source:"@site/api/www/UI/WindowEventListener/index.mdx",sourceDirName:"UI/WindowEventListener",slug:"/UI/WindowEventListener/",permalink:"/ru/api/UI/WindowEventListener/",draft:!1,tags:[],version:"current",frontMatter:{title:"UI.WindowEventListener",sidebar_label:"WindowEventListener",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},d={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,(0,a.kt)(i.Z,{id:"api.heading.interface",values:{scopedName:"UI.WindowEventListener"},mdxType:"Translate"},"{scopedName} interface")),(0,a.kt)("p",null,"Object used to handle windows opening and closing events."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface WindowEventListener \n")),(0,a.kt)("h3",null,(0,a.kt)(i.Z,{id:"api.section.properties",mdxType:"Translate"},"Properties")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.property",mdxType:"Translate"},"Property")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.modifiers",mdxType:"Translate"},"Modifiers")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/UI/WindowEventListener/onClose"},"onClose")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"(window: ",(0,a.kt)("a",{parentName:"td",href:"/api/UI/Window"},"Window"),") =",">"," void"),(0,a.kt)("td",{parentName:"tr",align:null},"Called when the window is closed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/UI/WindowEventListener/onOpen"},"onOpen")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"(window: ",(0,a.kt)("a",{parentName:"td",href:"/api/UI/Window"},"Window"),") =",">"," void"),(0,a.kt)("td",{parentName:"tr",align:null},"Called when the window is opened.")))))}u.isMDXComponent=!0}}]);