"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[65263],{3905:(t,a,e)=>{e.d(a,{Zo:()=>m,kt:()=>u});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),d=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},m=function(t){var a=d(t.components);return n.createElement(p.Provider,{value:a},t.children)},s={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),N=d(e),u=r,g=N["".concat(p,".").concat(u)]||N[u]||s[u]||i;return e?n.createElement(g,l(l({ref:a},m),{},{components:e})):n.createElement(g,l({ref:a},m))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=N;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=e[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},34921:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=e(87462),r=(e(67294),e(3905)),i=e(95999);const l={since:"2.0.3b33",title:"Entity.PathNavigation",sidebar_label:"PathNavigation",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},o=void 0,p={unversionedId:"Entity/PathNavigation/index",id:"Entity/PathNavigation/index",title:"Entity.PathNavigation",description:"",source:"@site/api/www/Entity/PathNavigation/index.mdx",sourceDirName:"Entity/PathNavigation",slug:"/Entity/PathNavigation/",permalink:"/api/Entity/PathNavigation/",draft:!1,tags:[],version:"current",frontMatter:{since:"2.0.3b33",title:"Entity.PathNavigation",sidebar_label:"PathNavigation",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},d={},m=[],s={toc:m};function N(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,(0,r.kt)(i.Z,{id:"api.heading.interface",values:{scopedName:"Entity.PathNavigation"},mdxType:"Translate"},"{scopedName} interface")),(0,r.kt)("p",null,"Object used to build path and move mobs to the required coordinates using specified parameters. All the setters return current ",(0,r.kt)("a",{parentName:"p",href:"/api/Entity/PathNavigation"},"Entity.PathNavigation")," instance to be able to produce chained calls."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PathNavigation \n")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.methods",mdxType:"Translate"},"Methods")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.method",mdxType:"Translate"},"Method")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/canOpenDoors"},"canOpenDoors()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/canPassDoors"},"canPassDoors()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/getAvoidDamageBlocks"},"getAvoidDamageBlocks()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/getAvoidPortals"},"getAvoidPortals()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/getAvoidWater"},"getAvoidWater()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/getCanBreach"},"getCanBreach()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/getCanFloat"},"getCanFloat()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/getCanJump"},"getCanJump()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/getCanSink"},"getCanSink()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/getSpeed"},"getSpeed()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/isAmphibious"},"isAmphibious()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/isRiverFollowing"},"isRiverFollowing()")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/moveToCoords"},"moveToCoords(x, y, z, speed)")),(0,r.kt)("td",{parentName:"tr",align:null},"Builds path to the specified coordinates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/moveToEntity"},"moveToEntity(entity, speed)")),(0,r.kt)("td",{parentName:"tr",align:null},"Builds path to the specified entity. Note that current coordinates of entity are used, and are not updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setAvoidDamageBlocks"},"setAvoidDamageBlocks(value)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setAvoidPortals"},"setAvoidPortals(value)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setAvoidSun"},"setAvoidSun(value)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets entity's sun avoiding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setAvoidWater"},"setAvoidWater(value)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets entity's water avoiding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setCanBreach"},"setCanBreach(value)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setCanFloat"},"setCanFloat(value)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setCanJump"},"setCanJump(value)")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables or disables entity's jumping ability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setCanOpenDoors"},"setCanOpenDoors(value)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets entity's door opening ability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setCanPassDoors"},"setCanPassDoors(value)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets entity's door passing ability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setCanSink"},"setCanSink(value)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setEndPathRadius"},"setEndPathRadius(value)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setIsAmphibious"},"setIsAmphibious(value)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setIsRiverFollowing"},"setIsRiverFollowing(value)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setResultFunction"},"setResultFunction(callback)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets function to be notified when path navigation is finished or aborted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Entity/PathNavigation/setSpeed"},"setSpeed(value)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets entity's speed value.")))))}N.isMDXComponent=!0}}]);