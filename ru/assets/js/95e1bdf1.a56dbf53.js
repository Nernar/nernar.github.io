"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[4954],{9047:(e,n,s)=>{s.r(n),s.d(n,{default:()=>m});var a=s(4848),r=s(6540),i=s(8774),l=s(3025),t=s(3886),c=s(1107);var d=s(6391);function o(e,n,s){if(!e.match(/api\/([\d.]+)/)&&!e.includes("api/next")&&s&&s.name!==n.version){const n="current"===s.name?"next":s.name;return e.endsWith("/api")?`${e}/${n}`:e.replace("/api/",`/api/${n}/`)}return e}function m(e){let{options:n,packages:s,history:m}=e;const h=(0,l.r)(),{preferredVersion:p}=(0,t.g1)(h.pluginId);return(0,r.useEffect)((()=>{1===s.length?m.replace(o(s[0].entryPoints[0].reflection.permalink,h,p)):p&&m.replace(o(m.location.pathname,h,p))}),[s,m,h,p]),(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col apiItemCol",children:[n.banner&&(0,a.jsx)("div",{className:"alert alert--info margin-bottom--md",role:"alert",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n.banner}})}),(0,a.jsx)(d.z,{}),(0,a.jsx)("div",{className:"apiItemContainer",children:(0,a.jsx)("article",{children:(0,a.jsxs)("div",{className:"markdown",children:[(0,a.jsx)("header",{children:(0,a.jsx)(c.A,{as:"h1",children:"API"})}),(0,a.jsxs)("section",{className:"tsd-panel",children:[(0,a.jsx)("h3",{className:"tsd-panel-header",children:"Packages"}),(0,a.jsx)("div",{className:"tsd-panel-content",children:(0,a.jsx)("ul",{className:"tsd-index-list",children:s.map((e=>{return(0,a.jsx)("li",{className:"tsd-truncate",children:(0,a.jsxs)(i.A,{className:"tsd-kind-icon",to:e.entryPoints[0].reflection.permalink,children:[(0,a.jsxs)("span",{className:"tsd-signature-symbol",children:["v",e.packageVersion]})," ",(0,a.jsx)("span",{children:(s=e.packageName,r=n.scopes,0===r.length?s:r.reduce(((e,n)=>e.replace(new RegExp(`^(${n}-|@${n}/)`),"")),s))})]})},e.packageName);var s,r}))})})]})]})})})]})})}},6391:(e,n,s)=>{s.d(n,{z:()=>o});var a=s(4848),r=s(6540),i=s(8774),l=s(3025),t=s(4070),c=s(3886),d=s(7559);function o(){const{banner:e,docs:n,pluginId:s,version:o}=(0,l.r)(),{latestVersionSuggestion:m}=(0,t.HW)(s),{savePreferredVersionName:h}=(0,c.g1)(s),p=(0,r.useCallback)((()=>{h(m.name)}),[m.name,h]);if(!e||!m)return null;const u=n[m.label];return(0,a.jsx)("div",{className:`${d.G.docs.docVersionBanner} alert alert--warning margin-bottom--md`,role:"alert",children:(0,a.jsxs)("div",{children:["unreleased"===e&&(0,a.jsx)(a.Fragment,{children:"This is documentation for an unreleased version."}),"unmaintained"===e&&(0,a.jsxs)(a.Fragment,{children:["This is documentation for version ",(0,a.jsx)("b",{children:o}),"."]})," ","For the latest API, see version"," ",(0,a.jsx)("b",{children:(0,a.jsx)(i.A,{to:u.id,onClick:p,children:u.title})}),"."]})})}}}]);