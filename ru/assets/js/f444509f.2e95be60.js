"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[11919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(n),f=r,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||c;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),c=n(95999);const o={title:"CustomEnchant.EnchantSetupInterface.setMask()",sidebar_label:"setMask",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},l=void 0,p={unversionedId:"CustomEnchant/EnchantSetupInterface/setMask",id:"CustomEnchant/EnchantSetupInterface/setMask",title:"CustomEnchant.EnchantSetupInterface.setMask()",description:"",source:"@site/api/www/CustomEnchant/EnchantSetupInterface/setMask.mdx",sourceDirName:"CustomEnchant/EnchantSetupInterface",slug:"/CustomEnchant/EnchantSetupInterface/setMask",permalink:"/ru/api/CustomEnchant/EnchantSetupInterface/setMask",draft:!1,tags:[],version:"current",frontMatter:{title:"CustomEnchant.EnchantSetupInterface.setMask()",sidebar_label:"setMask",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},i={},s=[],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,(0,r.kt)(c.Z,{id:"api.heading.method",values:{scopedName:"CustomEnchant.EnchantSetupInterface.setMask()"},mdxType:"Translate"},"{scopedName} method")),(0,r.kt)("p",null,"Sets the mask of items, that the following enchantment can be applied to, paired parameter for item is enchant slot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EnchantSetupInterface {\n    ...\n    setMask(mask: number): EnchantSetupInterface;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(c.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(c.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(c.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(c.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mask"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(c.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,r.kt)("a",{parentName:"p",href:"/api/CustomEnchant/EnchantSetupInterface"},"EnchantSetupInterface")),(0,r.kt)("p",null,"Reference to itself to be used in sequential calls."))}m.isMDXComponent=!0}}]);