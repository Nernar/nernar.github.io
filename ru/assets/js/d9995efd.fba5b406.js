"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[4808],{6528:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>t});const a=JSON.parse('{"id":"events/callbacks","title":"\u041a\u0430\u043b\u0431\u0435\u043a\u0438","description":"\u041e\u0442 \u0441\u043b\u043e\u0432\u043e\u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u0432\u044b\u0437\u043e\u0432 + \u043e\u0431\u0440\u0430\u0442\u043d\u043e, \u0438\u043c\u0435\u043d\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0438\u0445 \u043c\u044b \u0438 \u0431\u0443\u0434\u0435\u043c \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0441\u043e\u0431\u044b\u0442\u0438\u0439. \u041a\u0430\u043a \u0438 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f, \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0432\u044b\u0437\u043e\u0432, \u0430 \u043f\u043e\u0441\u043b\u0435 \u0441\u043c\u043e\u0436\u0435\u043c \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435. \u0412\u043f\u0440\u043e\u0447\u0435\u043c, \u043d\u0435 \u0432\u0441\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c, \u0430 \u0442\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u044b \u043a\u0430\u043a \u0434\u0440\u0443\u0433\u0438\u043c \u043c\u043e\u0434\u043e\u043c, \u0442\u0430\u043a \u0438 \u0434\u0432\u0438\u0436\u043a\u043e\u043c. \u041d\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043c\u0441\u044f \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043a\u0430\u043b\u0431\u0435\u043a\u043e\u0432.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/events/callbacks.md","sourceDirName":"events","slug":"/events/callbacks","permalink":"/ru/docs/events/callbacks","draft":false,"unlisted":false,"editUrl":"https://github.com/nernar/nernar.github.io/tree/master/i18n/ru/docusaurus-plugin-content-docs/current/events/callbacks.md","tags":[],"version":"current","lastUpdatedAt":1735050569000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u0413\u0434\u0435, \u0447\u0442\u043e \u0438 \u043a\u0442\u043e","permalink":"/ru/docs/events/where-what-and-who"},"next":{"title":"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b","permalink":"/ru/docs/events/updatables"}}');var c=l(4848),s=l(8453);const r={},i="\u041a\u0430\u043b\u0431\u0435\u043a\u0438",d={},t=[{value:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430",id:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430",level:2},{value:"\u0412\u044b\u0437\u043e\u0432 \u0441\u0432\u043e\u0438\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439",id:"\u0432\u044b\u0437\u043e\u0432-\u0441\u0432\u043e\u0438\u0445-\u0441\u043e\u0431\u044b\u0442\u0438\u0439",level:3},{value:"\u0417\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e \u0441 \u043c\u0438\u0440\u043e\u043c \u0441\u043e\u0431\u044b\u0442\u0438\u0439",id:"\u0437\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e-\u0441-\u043c\u0438\u0440\u043e\u043c-\u0441\u043e\u0431\u044b\u0442\u0438\u0439",level:2},{value:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u0438 \u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0438-\u0438-\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components},{TabItem:l,Tabs:a}=n;return l||p("TabItem",!0),a||p("Tabs",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u043a\u0430\u043b\u0431\u0435\u043a\u0438",children:"\u041a\u0430\u043b\u0431\u0435\u043a\u0438"})}),"\n",(0,c.jsx)(n.p,{children:"\u041e\u0442 \u0441\u043b\u043e\u0432\u043e\u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u0432\u044b\u0437\u043e\u0432 + \u043e\u0431\u0440\u0430\u0442\u043d\u043e, \u0438\u043c\u0435\u043d\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0438\u0445 \u043c\u044b \u0438 \u0431\u0443\u0434\u0435\u043c \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0441\u043e\u0431\u044b\u0442\u0438\u0439. \u041a\u0430\u043a \u0438 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f, \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0432\u044b\u0437\u043e\u0432, \u0430 \u043f\u043e\u0441\u043b\u0435 \u0441\u043c\u043e\u0436\u0435\u043c \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435. \u0412\u043f\u0440\u043e\u0447\u0435\u043c, \u043d\u0435 \u0432\u0441\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c, \u0430 \u0442\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u044b \u043a\u0430\u043a \u0434\u0440\u0443\u0433\u0438\u043c \u043c\u043e\u0434\u043e\u043c, \u0442\u0430\u043a \u0438 \u0434\u0432\u0438\u0436\u043a\u043e\u043c. \u041d\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043c\u0441\u044f \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043a\u0430\u043b\u0431\u0435\u043a\u043e\u0432."}),"\n",(0,c.jsx)(n.h2,{id:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430"}),"\n",(0,c.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,c.jsx)(n.a,{href:"/api/namespace/Callback#addCallback",children:"Callback.addCallback"}),":"]}),"\n",(0,c.jsxs)(a,{groupId:"scripting-language",children:[(0,c.jsx)(l,{value:"js",label:"JavaScript",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'Callback.addCallback("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u0421\u043e\u0431\u044b\u0442\u0438\u044f", function(/* \u0435\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b */) {\n    // \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u043d\u043e \u0432\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\n}, 0 /* \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 */);\n'})})}),(0,c.jsx)(l,{value:"ts",label:"TypeScript",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'Callback.addCallback("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u0421\u043e\u0431\u044b\u0442\u0438\u044f", (/* \u0435\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b */) => {\n    // \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u043d\u043e \u0432\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\n}, 0 /* \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 */);\n'})})})]}),"\n",(0,c.jsxs)(n.p,{children:["\u0423\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e, \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432. \u0415\u0441\u043b\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043e\u0442\u043c\u0435\u043d\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f ",(0,c.jsx)(n.a,{href:"/api/namespace/Game#prevent",children:"Game.prevent"}),", \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0431\u044b\u043b\u043e \u043b\u0438 \u043e\u043d\u043e \u0443\u0436\u0435 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,c.jsx)(n.a,{href:"/api/namespace/Game#isActionPrevented",children:"Game.isActionPrevented"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0439. \u0427\u0435\u043c \u043e\u043d \u0431\u043e\u043b\u044c\u0448\u0435, \u0442\u0435\u043c \u0440\u0430\u043d\u044c\u0448\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u043d \u0432\u0430\u0448 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a. \u041d\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0447\u0438\u0441\u043b\u0430, \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u044c\u0442\u0435\u0441\u044c, \u0441\u043a\u0430\u0436\u0435\u043c, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043e\u0442 0 \u0434\u043e 9. \u0415\u0441\u043b\u0438 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d, \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 (0)."}),"\n",(0,c.jsx)(n.admonition,{title:"\u041d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043a\u0430\u043b\u0431\u0435\u043a \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f",type:"danger",children:(0,c.jsx)(n.p,{children:"\u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043d\u043e\u0432\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043a\u0430\u043b\u0431\u0435\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043a\u0430\u0436\u0434\u044b\u043c \u0432\u044b\u0437\u043e\u0432\u043e\u043c \u0441\u043e\u0431\u044b\u0442\u0438\u044f."})}),"\n",(0,c.jsxs)(n.p,{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0432 ",(0,c.jsx)(n.a,{href:"/api/namespace/Callback#addCallback",children:"Callback"}),", \u0442\u0430\u043c \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d \u043f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0433\u0440\u043e\u0432\u044b\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442."]}),"\n",(0,c.jsx)(n.h3,{id:"\u0432\u044b\u0437\u043e\u0432-\u0441\u0432\u043e\u0438\u0445-\u0441\u043e\u0431\u044b\u0442\u0438\u0439",children:"\u0412\u044b\u0437\u043e\u0432 \u0441\u0432\u043e\u0438\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439"}),"\n",(0,c.jsxs)(n.p,{children:["\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,c.jsx)(n.a,{href:"/api/namespace/Callback#invokeCallback",children:"Callback.invokeCallback"}),". \u041e\u0431\u0449\u0438\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0432\u0435\u0441\u044c\u043c\u0430 \u043f\u0440\u043e\u0441\u0442:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'Callback.invokeCallback("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u0421\u043e\u0431\u044b\u0442\u0438\u044f", /* \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u044b \u0432 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 */); \n'})}),"\n",(0,c.jsx)(n.p,{children:"\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 10. \u041d\u0438 \u0432 \u043a\u043e\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043d\u0435 \u0432\u044b\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u0438\u0433\u0440\u043e\u0432\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c! \u0412\u044b\u0434\u0435\u043b\u0438\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u043a\u043e\u0434\u0430 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0438\u043b\u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438."}),"\n",(0,c.jsx)(n.h2,{id:"\u0437\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e-\u0441-\u043c\u0438\u0440\u043e\u043c-\u0441\u043e\u0431\u044b\u0442\u0438\u0439",children:"\u0417\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e \u0441 \u043c\u0438\u0440\u043e\u043c \u0441\u043e\u0431\u044b\u0442\u0438\u0439"}),"\n",(0,c.jsxs)(n.p,{children:["\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430, \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0432\u0435\u0441\u0442\u0438 ",(0,c.jsx)(n.code,{children:"\u041f\u0440\u0438\u0432\u0435\u0442, \u041c\u0438\u0440!"})," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0438 \u0435\u0433\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430. \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u043c \u043a\u043e\u0434 \u0432\u044b\u0448\u0435:"]}),"\n",(0,c.jsxs)(a,{groupId:"scripting-language",children:[(0,c.jsx)(l,{value:"js",label:"JavaScript",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'Callback.addCallback("MyMod:HelloWorld", function(who) {\n    alert("\u041f\u0440\u0438\u0432\u0435\u0442, " + who + "!");\n});\nCallback.invokeCallback("MyMod:HelloWorld", "\u041c\u0438\u0440");\n'})})}),(0,c.jsx)(l,{value:"ts",label:"TypeScript",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'Callback.addCallback("MyMod:HelloWorld", who => alert(`\u041f\u0440\u0438\u0432\u0435\u0442, ${who}!`));\nCallback.invokeCallback("MyMod:HelloWorld", "\u041c\u0438\u0440");\n'})})})]}),"\n",(0,c.jsxs)(n.p,{children:["\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u0435 ",(0,c.jsx)(n.em,{children:"\u041c\u0438\u0440"}),", \u0441\u043a\u0430\u0436\u0435\u043c, \u043d\u0430 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f."]}),"\n",(0,c.jsx)(n.h2,{id:"\u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0438-\u0438-\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",children:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u0438 \u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u041f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e, \u0432\u0441\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f, \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u044d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u044b."}),"\n",(0,c.jsx)(n.p,{children:"\u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0432\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f. \u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0445\u043e\u0442\u044f \u0431\u044b \u043f\u0430\u0440\u0443 \u043c\u043e\u0434\u043e\u0432 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0442\u044c \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0443, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0447\u043d\u0435\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u0430\u0442\u044c \u043f\u043e\u0434\u0432\u0438\u0441\u0430\u043d\u0438\u044f \u0438 \u043e\u0442\u043a\u0430\u0436\u0435\u0442\u0441\u044f \u043e\u0442 \u0438\u0433\u0440\u044b \u0441 \u0432\u0430\u0448\u0438\u043c \u043c\u043e\u0434\u043e\u043c."}),"\n",(0,c.jsx)(n.p,{children:"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0441\u043b\u0443\u0447\u0430\u0439 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0438\u043b\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0438\u0434\u0438\u0442 \u0441\u0430\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043f\u043e\u043d\u0438\u043c\u0430\u044f, \u0447\u0442\u043e \u0432\u0441\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a \u043a\u0430\u043a \u0438 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043b\u043e\u0441\u044c."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u0412\u0441\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e."}),"\n",(0,c.jsxs)(n.p,{children:["\u0418 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,c.jsx)(n.a,{href:"/api/namespace/Callback#addCallback",children:"Callback.addCallback"}),", \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u044b."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0442\u0435\u0441\u044c \u043e\u0434\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f."}),"\n",(0,c.jsx)(n.p,{children:"\u0423 \u0432\u0430\u0441 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a \u0434\u043b\u044f \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f. \u041c\u043e\u0434\u043e\u0434\u0435\u043b\u044b \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043d\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442, \u0447\u0442\u043e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e \u0441 \u0438\u0445 \u043c\u043e\u0434\u043e\u043c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0435\u0449\u0435 \u0434\u0435\u0441\u044f\u0442\u043e\u043a-\u0434\u0440\u0443\u0433\u043e\u0439."}),"\n",(0,c.jsx)(n.p,{children:"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0439. \u0412\u044b\u043d\u043e\u0441\u0438\u0442\u0435 \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0432 \u043e\u0434\u043d\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e. \u041f\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043e\u043f\u044b\u0442\u0443, \u044d\u0442\u043e \u0443\u043b\u0443\u0447\u0448\u0438\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u0422\u0438\u043a \u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0438\u0434\u044b \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432 \u043d\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b \u0441 \u0438\u0433\u0440\u043e\u0439."}),"\n",(0,c.jsx)(n.p,{children:"\u0412 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0434\u043b\u044f \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0431\u043e\u043b\u0435\u0435 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b, \u043e\u0434\u043d\u0430\u043a\u043e \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0441\u044b\u0433\u0440\u0430\u0442\u044c \u0441 \u0432\u0430\u043c\u0438 \u0437\u043b\u0443\u044e \u0448\u0443\u0442\u043a\u0443. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0431\u043b\u043e\u043a\u043e\u0432 \u0437\u0430 \u043e\u0434\u0438\u043d \u0442\u0438\u043a \u0431\u0443\u0434\u0435\u0442 \u043e\u0437\u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0445 \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u0443\u044e \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0443 \u0432 \u043c\u0438\u0440\u0435, \u0430 \u043d\u0435 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u0443\u044e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043e\u0436\u0438\u0434\u0430\u0442\u044c."}),"\n",(0,c.jsx)(n.p,{children:"\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a\u0430\u043a \u043a \u043b\u0430\u0433\u0430\u043c, \u0442\u0430\u043a \u0438 \u043a \u0432\u044b\u043b\u0435\u0442\u0443. \u0412\u044b\u0445\u043e\u0434\u043e\u043c \u0438\u0437 \u044d\u0442\u043e\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u0442\u0438\u043a\u0435 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0438\u043f\u044b \u0441\u043e\u0431\u044b\u0442\u0438\u0439, \u043a\u043e\u043d\u0435\u0447\u043d\u043e, \u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e."}),"\n",(0,c.jsx)(n.p,{children:"\u041e\u0434\u043d\u0430\u043a\u043e, \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u0432\u0440\u0435\u043c\u044f \u0432 \u0438\u0433\u0440\u0435 \u0438 \u0432\u0440\u0435\u043c\u044f \u0442\u0438\u043a\u0430 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u044b \u0432 \u043b\u044e\u0431\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u0414\u0435\u043b\u0430\u0439\u0442\u0435 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043f\u0435\u0440\u0435\u0434 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435\u043c \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(n.p,{children:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u0431\u043b\u043e\u043a\u043e\u043c, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0439\u0442\u0435 \u0447\u0442\u043e \u044d\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u0442\u043e\u0442 \u0431\u043b\u043e\u043a \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0430\u043c \u043d\u0443\u0436\u0435\u043d \u0438\u0437 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043e\u0431\u044b\u0442\u0438\u044f, \u0430 \u0443\u0436\u0435 \u043f\u043e\u0441\u043b\u0435, \u043e\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c \u043a \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u043c\u0435\u0442\u043e\u0434\u0430\u043c."}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.admonition,{title:"\u0418 \u043f\u043e\u043c\u043d\u0438\u0442\u0435",type:"note",children:(0,c.jsx)(n.p,{children:"\u0422\u043e\u043b\u044c\u043a\u043e \u043e\u0442 \u0432\u0430\u0441 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438\u0433\u0440\u044b. \u041c\u044b, \u0432 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c, \u0434\u0435\u043b\u0430\u0435\u043c \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u0441 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438, \u043a\u0430\u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u043c \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430."})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>i});var a=l(6540);const c={},s=a.createContext(c);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);