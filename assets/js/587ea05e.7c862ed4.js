"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[48322],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(95999);const o={title:"Recipes.WorkbenchRecipe.isPossibleForInventory()",sidebar_label:"isPossibleForInventory",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},i=void 0,p={unversionedId:"Recipes/WorkbenchRecipe/isPossibleForInventory",id:"Recipes/WorkbenchRecipe/isPossibleForInventory",title:"Recipes.WorkbenchRecipe.isPossibleForInventory()",description:"",source:"@site/api/www/Recipes/WorkbenchRecipe/isPossibleForInventory.mdx",sourceDirName:"Recipes/WorkbenchRecipe",slug:"/Recipes/WorkbenchRecipe/isPossibleForInventory",permalink:"/api/Recipes/WorkbenchRecipe/isPossibleForInventory",draft:!1,tags:[],version:"current",frontMatter:{title:"Recipes.WorkbenchRecipe.isPossibleForInventory()",sidebar_label:"isPossibleForInventory",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},s={},c=[],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,(0,r.kt)(l.Z,{id:"api.heading.method",values:{scopedName:"Recipes.WorkbenchRecipe.isPossibleForInventory()"},mdxType:"Translate"},"{scopedName} method")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface WorkbenchRecipe extends java.lang.Object {\n    ...\n    isPossibleForInventory(inv: java.util.HashMap<java.lang.Long, java.lang.Integer>): boolean;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(l.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inv"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/java/util/HashMap"},"java.util.HashMap"),"<",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/java/lang/Long"},"java.lang.Long"),", ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/java/lang/Integer"},"java.lang.Integer"),">"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(l.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"boolean"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface WorkbenchRecipe extends java.lang.Object {\n    ...\n    isPossibleForInventory(inv: java.util.HashMap<java.lang.Long, java.lang.Integer>): boolean;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(l.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inv"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/java/util/HashMap"},"java.util.HashMap"),"<",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/java/lang/Long"},"java.lang.Long"),", ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/java/lang/Integer"},"java.lang.Integer"),">"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(l.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"boolean"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface WorkbenchRecipe extends java.lang.Object {\n    ...\n    isPossibleForInventory(inv: java.util.HashMap<java.lang.Long, java.lang.Integer>): boolean;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(l.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(l.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inv"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/java/util/HashMap"},"java.util.HashMap"),"<",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/java/lang/Long"},"java.lang.Long"),", ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/java/lang/Integer"},"java.lang.Integer"),">"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(l.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),"boolean"))}m.isMDXComponent=!0}}]);