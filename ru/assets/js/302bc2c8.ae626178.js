"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[35389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(95999);const i={title:"Dimensions.NoiseOctave.(constructor)",sidebar_label:"(constructor)",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},s="Dimensions.NoiseOctave.(constructor)",c={unversionedId:"Dimensions/NoiseOctave/_constructor_",id:"Dimensions/NoiseOctave/_constructor_",title:"Dimensions.NoiseOctave.(constructor)",description:"",source:"@site/api/www/Dimensions/NoiseOctave/_constructor_.mdx",sourceDirName:"Dimensions/NoiseOctave",slug:"/Dimensions/NoiseOctave/_constructor_",permalink:"/ru/api/Dimensions/NoiseOctave/_constructor_",draft:!1,tags:[],version:"current",frontMatter:{title:"Dimensions.NoiseOctave.(constructor)",sidebar_label:"(constructor)",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,hide_title:!0},sidebar:"defaultSidebar"},l={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dimensionsnoiseoctaveconstructor"},"Dimensions.NoiseOctave.(constructor)"),(0,a.kt)("p",null,"Creates a new noise octave of specified type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class NoiseOctave {\n    ...\n    constructor(type?: number | NoiseOctaveStringType);\n}\n")),(0,a.kt)("h3",null,(0,a.kt)(o.Z,{id:"api.section.parameters",mdxType:"Translate"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.parameter",mdxType:"Translate"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.type",mdxType:"Translate"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)(o.Z,{id:"api.block.description",mdxType:"Translate"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," ",(0,a.kt)("a",{parentName:"td",href:"/api/Dimensions/NoiseOctaveStringType"},"NoiseOctaveStringType")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("i",null,(0,a.kt)(o.Z,{id:"api.block.optional",mdxType:"Translate"},"(optional)"))," numeric type constant or one of the following strings:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"td"},'"perlin"')," (0) is a general-purpose noise generator."),(0,a.kt)("p",null,"Used to generate noise of completely random nature ",(0,a.kt)("strong",{parentName:"td"},'"gray"')," (1) ",(0,a.kt)("strong",{parentName:"td"},'"chess"')," (2)"),(0,a.kt)("p",null,"The following sine noises are used to generate sinusoidal noise. Generally they should be used with some noise octaves of other types to avoid too mathematical landscapes ",(0,a.kt)("strong",{parentName:"td"},'"sine',"_",'x"')," (10) ",(0,a.kt)("strong",{parentName:"td"},'"sine',"_",'y"')," (11) ",(0,a.kt)("strong",{parentName:"td"},'"sine',"_",'z"')," (12) ",(0,a.kt)("strong",{parentName:"td"},'"sine',"_",'xy"')," (13) ",(0,a.kt)("strong",{parentName:"td"},'"sine',"_",'yz"')," (14) ",(0,a.kt)("strong",{parentName:"td"},'"sine',"_",'xz"')," (15) ",(0,a.kt)("strong",{parentName:"td"},'"sine',"_",'xyz"')," (16)"))))))}m.isMDXComponent=!0}}]);