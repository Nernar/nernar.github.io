"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[6714],{7412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"getting-started/supporting-ides","title":"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0441\u0440\u0435\u0434\u044b","description":"\u0421\u0440\u0435\u0434\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043f\u0440\u043e\u0441\u0442\u0438\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044f \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435, \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0438, \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u044e \u043d\u0438\u0437\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u0438 \u0446\u0435\u043b\u0443\u044e \u043a\u0443\u0447\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439. \u041f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0434 \u0432 \u0441\u0440\u0435\u0434\u0435 \u043d\u0430\u043c\u043d\u043e\u0433\u043e \u0443\u0434\u043e\u0431\u043d\u0435\u0435, \u0447\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043b\u043e\u043a\u043d\u043e\u0442, \u0445\u043e\u0442\u044f \u0432\u043f\u0440\u043e\u0447\u0435\u043c \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/getting-started/supporting-ides.md","sourceDirName":"getting-started","slug":"/getting-started/supporting-ides","permalink":"/ru/docs/getting-started/supporting-ides","draft":false,"unlisted":false,"editUrl":"https://github.com/nernar/nernar.github.io/tree/master/i18n/ru/docusaurus-plugin-content-docs/current/getting-started/supporting-ides.md","tags":[],"version":"current","lastUpdatedAt":1735050569000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u0432\u0438\u0436\u043a\u0430","permalink":"/ru/docs/getting-started/installing-pack"},"next":{"title":"\u0414\u0432\u0438\u0433\u0430\u0435\u043c\u0441\u044f \u0432\u043f\u0435\u0440\u0435\u0434","permalink":"/ru/docs/getting-started/going-forward"}}');var i=n(4848),s=n(8453);const d={},o="\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0441\u0440\u0435\u0434\u044b",c={},l=[{value:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c \u0441\u0440\u0435\u0434\u0443",id:"\u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c-\u0441\u0440\u0435\u0434\u0443",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"IntelliJ IDEA",id:"intellij-idea",level:3},{value:"Spck Code Editor",id:"spck-code-editor",level:3},{value:"Inner Core Mod Toolchain",id:"inner-core-mod-toolchain",level:2},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435-\u0441\u0440\u0435\u0434\u044b",children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0441\u0440\u0435\u0434\u044b"})}),"\n",(0,i.jsx)(t.p,{children:"\u0421\u0440\u0435\u0434\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043f\u0440\u043e\u0441\u0442\u0438\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044f \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435, \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0438, \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u044e \u043d\u0438\u0437\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u0438 \u0446\u0435\u043b\u0443\u044e \u043a\u0443\u0447\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439. \u041f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0434 \u0432 \u0441\u0440\u0435\u0434\u0435 \u043d\u0430\u043c\u043d\u043e\u0433\u043e \u0443\u0434\u043e\u0431\u043d\u0435\u0435, \u0447\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043b\u043e\u043a\u043d\u043e\u0442, \u0445\u043e\u0442\u044f \u0432\u043f\u0440\u043e\u0447\u0435\u043c \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c."}),"\n",(0,i.jsx)(t.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c-\u0441\u0440\u0435\u0434\u0443",children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c \u0441\u0440\u0435\u0434\u0443"}),"\n",(0,i.jsx)(t.h3,{id:"visual-studio-code",children:"Visual Studio Code"}),"\n",(0,i.jsxs)(t.p,{children:["\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u043c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u043c \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0438 \u0437\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u0430 \u0441\u043e \u0441\u0440\u0435\u0434\u0430\u043c\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",(0,i.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),", \u0435\u0433\u043e \u0432\u044b\u0431\u0438\u0440\u0430\u044e\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043c\u043e\u0434\u043e\u0434\u0435\u043b\u043e\u0432 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u0432\u0441\u0435\u0439 \u0436\u0438\u0437\u043d\u0438 \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438. \u0418\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 \u043d\u0430\u043c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u0438\u0435 \u044f\u0437\u044b\u043a\u0438, \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u043c\u044b\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u043a\u043e\u0434\u0430, \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f."]}),"\n",(0,i.jsxs)(t.p,{children:["\u041d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0435 \u0441\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432? \u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u044d\u0442\u043e\u0439 \u0441\u0440\u0435\u0434\u044b \u0443\u0436\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435. \u0425\u043e\u0442\u0438\u0442\u0435 \u044f\u0437\u044b\u043a\u0438 \u043f\u043e\u0441\u043b\u043e\u0436\u043d\u0435\u0435, \u0442\u043e\u0433\u0434\u0430 \u0434\u0435\u0440\u0437\u0430\u0439\u0442\u0435, ",(0,i.jsx)(t.a,{href:"https://code.visualstudio.com/docs/editor/extension-marketplace",children:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0439"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"vscode:extension/vscjava.vscode-java-pack",children:"Extension Pack for Java"})," \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Java"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"vscode:extension/ms-vscode.cpptools-extension-pack",children:"C/C++ Extension Pack"})," \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 C/C++"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"intellij-idea",children:"IntelliJ IDEA"}),"\n",(0,i.jsxs)(t.p,{children:["\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043e\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0441\u043b\u0443\u0436\u0438\u0442\u044c ",(0,i.jsx)(t.a,{href:"https://www.jetbrains.com/ru-ru/idea/",children:"IntelliJ IDEA"}),", \u043e\u043d\u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043a\u043e\u0434\u043e\u043c. \u0412\u0430\u0436\u043d\u043e \u043f\u043e\u043c\u043d\u0438\u0442\u044c, \u0447\u0442\u043e \u044d\u0442\u043e \u043f\u0440\u043e\u043f\u0440\u0438\u0435\u0442\u0430\u0440\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442. \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f ",(0,i.jsx)(t.a,{href:"https://www.jetbrains.com/ru-ru/clion/",children:"CLion"})," \u043e\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 IntelliJ, \u043d\u0430 \u0442\u043e\u0442 \u0441\u043b\u0443\u0447\u0430\u0439 \u0435\u0441\u043b\u0438 \u043d\u0443\u0436\u0435\u043d C/C++."]}),"\n",(0,i.jsx)(t.h3,{id:"spck-code-editor",children:"Spck Code Editor"}),"\n",(0,i.jsxs)(t.p,{children:["\u0411\u0443\u0434\u0435\u0442\u0435 \u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0434 \u043d\u0430 \u0445\u043e\u0434\u0443 \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435? \u0422\u043e\u0436\u0435 \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432, \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 ",(0,i.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=io.spck&hl=ru",children:"Spck Code Editor"}),". \u041c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432, \u0430 \u0432 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u0430\u0445 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0435\u043d \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441. \u042d\u0442\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430, \u043f\u043e\u0432\u0435\u0440\u044c\u0442\u0435."]}),"\n",(0,i.jsxs)(t.p,{children:["\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u0435\u0449\u0435 ",(0,i.jsx)(t.a,{href:"https://telegra.ph/Spck-Editor-i-Inner-Core-04-08",children:"\u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"}),", \u0432\u0434\u0440\u0443\u0433 \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c."]}),"\n",(0,i.jsx)(t.h2,{id:"inner-core-mod-toolchain",children:"Inner Core Mod Toolchain"}),"\n",(0,i.jsxs)(t.p,{children:["\u041f\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043e, \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043d\u0430 TypeScript \u043d\u0430\u043c \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f TypeScript Compiler (tsc), \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 Java \u043d\u0443\u0436\u0435\u043d Java Development Kit (JDK) \u0438\u043b\u0438 \u0445\u043e\u0442\u044f \u0431\u044b Eclipse compiler for Java (ECJ), \u0434\u043b\u044f \u0441\u0431\u043e\u0440\u043a\u0438 C/C++ \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c GNU Compiler Collection (GCC), \u0430 \u043f\u0440\u043e\u0441\u0442\u043e \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043a\u043e\u0434\u0430 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0441 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 Android Debug Bridge (ADB). \u041d\u0435\u0442, \u043d\u0443\u0436\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e ",(0,i.jsx)(t.a,{href:"https://github.com/zheka2304/innercore-mod-toolchain/blob/master/README-ru.md",children:"Inner Core Mod Toolchain"}),", \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438."]}),"\n",(0,i.jsx)(t.p,{children:"\u0422\u0443\u043b\u0447\u0435\u0439\u043d \u0441\u043b\u0443\u0436\u0438\u0442 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u043e\u043c \u0432 \u0441\u0431\u043e\u0440\u043a\u0435 \u043d\u0430\u0448\u0438\u0445 \u0441 \u0432\u0430\u043c\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043d\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438 \u043e\u0442\u0432\u0435\u0441\u0442\u0438 \u043e\u0441\u0442\u0430\u0432\u0448\u0435\u0435\u0441\u044f \u0432\u0440\u0435\u043c\u044f \u043d\u0430 \u043a\u043e\u0434."}),"\n",(0,i.jsx)(t.h2,{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsx)(t.p,{children:"\u041f\u043e\u043c\u0438\u043c\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0441\u0440\u0435\u0434\u044b \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u0444\u0430\u0439\u043b\u0430\u043c\u0438, \u044d\u0442\u043e \u0438 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b, \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b, \u0438 \u043f\u0440\u043e\u0447\u0438\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0444\u0430\u0439\u043b\u0430. \u0412\u043e\u0442 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u0432\u0435\u0434\u044c \u0438\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u0441\u044f \u0438 \u043c\u044b, \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438, \u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043d\u0430 \u0432\u0441\u0435\u0445 \u0442\u0438\u043f\u0430\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),(0,i.jsx)(t.th,{children:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440"}),(0,i.jsx)(t.th,{children:"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430\u043c\u0438"}),(0,i.jsx)(t.td,{children:"\u041b\u044e\u0431\u043e\u0439 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0432\u043e\u0434\u043d\u0438\u043a"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"installing-pack#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80%D0%B0",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0443\u0440"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://www.adobe.com/ru/products/photoshop.html",children:"Adobe Photoshop (Windows)"})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)(t.a,{href:"https://www.gimp.org/",children:"GNU Image Manipulation Program"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=com.meltinglogic.pixly&hl=ru",children:"Pixly"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.blockbench.net/",children:"Blockbench"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://web.blockbench.net/",children:"Blockbench (\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u044b\u0439)"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/tryashtar/nbt-studio",children:"NBT Studio"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/oO0oO0oO0o0o00/blocktopograph",children:"Blocktopograph"})})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(6540);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);