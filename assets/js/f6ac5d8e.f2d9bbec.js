"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[94406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(95999);const i={title:"CustomEnchant.EnchantSetupInterface.setAttackDamageBonusProvider()",sidebar_label:"setAttackDamageBonusProvider",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},c=void 0,l={unversionedId:"CustomEnchant/EnchantSetupInterface/setAttackDamageBonusProvider",id:"CustomEnchant/EnchantSetupInterface/setAttackDamageBonusProvider",title:"CustomEnchant.EnchantSetupInterface.setAttackDamageBonusProvider()",description:"",source:"@site/api/www/CustomEnchant/EnchantSetupInterface/setAttackDamageBonusProvider.mdx",sourceDirName:"CustomEnchant/EnchantSetupInterface",slug:"/CustomEnchant/EnchantSetupInterface/setAttackDamageBonusProvider",permalink:"/api/CustomEnchant/EnchantSetupInterface/setAttackDamageBonusProvider",draft:!1,tags:[],version:"current",frontMatter:{title:"CustomEnchant.EnchantSetupInterface.setAttackDamageBonusProvider()",sidebar_label:"setAttackDamageBonusProvider",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},p={},s=[],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,(0,r.kt)(o.Z,{id:"api.heading.method",values:{scopedName:"CustomEnchant.EnchantSetupInterface.setAttackDamageBonusProvider()"},mdxType:"Translate"},"{scopedName} method")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"api.nearlyFeature.title",mdxType:"Translate"},"Nearly Feature")),(0,r.kt)(o.Z,{id:"api.nearlyFeature.message",mdxType:"Translate"},"This API is provided as a preview for developers and may change based on feedback that we receive.")),(0,r.kt)("p",null,"Defines the function that will be called, when item with following enchantment is used for attack. The function must return bonus damage dealt to the victim."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EnchantSetupInterface {\n    ...\n    setAttackDamageBonusProvider(func: AttackDamageBonusProvider): EnchantSetupInterface;\n}\n")),(0,r.kt)("h3",null,(0,r.kt)(o.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(o.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(o.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)(o.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"func"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/CustomEnchant/AttackDamageBonusProvider"},"AttackDamageBonusProvider")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(o.Z,{id:"api.descriptor.returns",mdxType:"Translate"},"Returns: ")),(0,r.kt)("a",{parentName:"p",href:"/api/CustomEnchant/EnchantSetupInterface"},"EnchantSetupInterface")),(0,r.kt)("p",null,"Reference to itself to be used in sequential calls. This method is highly experimental right now."))}m.isMDXComponent=!0}}]);