"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[71048],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),k=o(a),u=r,N=k["".concat(p,".").concat(u)]||k[u]||s[u]||i;return a?n.createElement(N,l(l({ref:e},d),{},{components:a})):n.createElement(N,l({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,l[1]=m;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},35329:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>m,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),i=a(95999);const l={title:"Animation.Item",sidebar_label:"Item",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},m=void 0,p={unversionedId:"Animation/Item/index",id:"Animation/Item/index",title:"Animation.Item",description:"",source:"@site/api/www/Animation/Item/index.mdx",sourceDirName:"Animation/Item",slug:"/Animation/Item/",permalink:"/api/Animation/Item/",draft:!1,tags:[],version:"current",frontMatter:{title:"Animation.Item",sidebar_label:"Item",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},o={},d=[],s={toc:d};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,(0,r.kt)(i.Z,{id:"api.heading.class",values:{scopedName:"Animation.Item"},mdxType:"Translate"},"{scopedName} class")),(0,r.kt)("p",null,"Item animations are used to display items or blocks models in the world."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Item extends Base \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{id:"api.descriptor.extends",mdxType:"Translate"},"Extends: ")),(0,r.kt)("a",{parentName:"p",href:"/api/Animation/Base"},"Base")),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.constructors",mdxType:"Translate"},"Constructors")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.constructor",mdxType:"Translate"},"Constructor")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.modifiers",mdxType:"Translate"},"Modifiers")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Item/_constructor_"},"(constructor)(x, y, z)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Constructs a new Item animation on the specified coordinates.")))),(0,r.kt)("h3",null,(0,r.kt)(i.Z,{id:"api.section.methods",mdxType:"Translate"},"Methods")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.method",mdxType:"Translate"},"Method")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.modifiers",mdxType:"Translate"},"Modifiers")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(i.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/createRenderIfNeeded"},"createRenderIfNeeded()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Creates render if it was not previously created and applies all the parameters from animation description."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/describe"},"describe(description)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Describes animation parameters for the future use. Call ",(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/load"},"load")," or ",(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/loadCustom"},"loadCustom")," to actually launch the animation."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Item/describeItem"},"describeItem(item)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Describes item to be used for the animation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Item/describeItemAlternative"},"describeItemAlternative(item, offset)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Item/describeItemDefault"},"describeItemDefault(item)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/destroy"},"destroy()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Destroys animation and releases all the resources."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/exists"},"exists()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/getAge"},"getAge()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/getRenderAPI"},"getRenderAPI(base)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/getShaderUniforms"},"getShaderUniforms()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/load"},"load()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Loads animation in the world."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/loadCustom"},"loadCustom(func)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Loads animation in the world registering it as an ."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/newTransform"},"newTransform(transformations, noClear)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Creates a set of transformations for the current animation."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/refresh"},"refresh()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Refreshes the animation."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/resetBlockLightPos"},"resetBlockLightPos()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Resets light measuring position for the animation (to it's coordinates)."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Item/resetTransform"},"resetTransform()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Resets all the transformations made via ",(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/transform"},"transform")," calls.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/setBlocklightMode"},"setBlocklightMode()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Sets light measuring to match the animation coordinated."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/setBlockLightPos"},"setBlockLightPos(x, y, z)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Sets specified coordinates as light measuring position for the animation. In other words, animation lightning will be calculated as if animation was at the specified coordinates."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/setIgnoreBlocklight"},"setIgnoreBlocklight(ignore)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/setIgnoreLightMode"},"setIgnoreLightMode()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Makes the animation ignore light at all."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/setInterpolationEnabled"},"setInterpolationEnabled(enabled)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Item/setItemRotation"},"setItemRotation(x, y, z)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies item rotation along the three axes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Item/setItemSize"},"setItemSize(size)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies item size.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Item/setItemSizeAndRotation"},"setItemSizeAndRotation(size, x, y, z)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies item size and rotation via single function call.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/setPos"},"setPos(x, y, z)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Changes the animation's position."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/setSkylightMode"},"setSkylightMode()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Sets light measuring position to always match day/night lightning, even when the animation is not directly illuminated."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/transform"},"transform()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base/updateRender"},"updateRender()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Refreshes the animation."),(0,r.kt)("p",null,"(",(0,r.kt)(i.Z,{id:"api.block.inherited",values:{scopedName:""},mdxType:"Translate"},'{"inherited from {scopedName}"}'),(0,r.kt)("a",{parentName:"td",href:"/api/Animation/Base"},"Base"),")"))))))}k.isMDXComponent=!0}}]);