"use strict";(self.webpackChunkinnercore_docs=self.webpackChunkinnercore_docs||[]).push([[8422],{3853:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"basics/evaluate-context","title":"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f","description":"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u0435\u0441\u044c \u0432\u0430\u0448 \u043a\u043e\u0434. \u0417\u0434\u0435\u0441\u044c \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0438 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442, \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0431\u0443\u0434\u0443\u0449\u0438\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u043e\u0434\u0430 \u0441 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e\u043c.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/basics/evaluate-context.md","sourceDirName":"basics","slug":"/basics/evaluate-context","permalink":"/ru/docs/basics/evaluate-context","draft":false,"unlisted":false,"editUrl":"https://github.com/nernar/nernar.github.io/tree/master/i18n/ru/docusaurus-plugin-content-docs/current/basics/evaluate-context.md","tags":[],"version":"current","lastUpdatedAt":1735050569000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u0421\u0431\u043e\u0440\u043a\u0430 \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432","permalink":"/ru/docs/basics/building-script"},"next":{"title":"\u0412\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a","permalink":"/ru/docs/basics/integrating-libraries"}}');var i=r(4848),s=r(8453);const c={},a="\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",d={},l=[{value:"API \u2014 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",id:"api--\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",level:2},{value:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",level:3},{value:"\u0422\u0435\u043b\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u0430",id:"\u0442\u0435\u043b\u043e-\u0441\u043a\u0440\u0438\u043f\u0442\u0430",level:2},{value:"\u0420\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430",id:"\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c\u044b\u0435-\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442-\u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",children:"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})}),"\n",(0,i.jsx)(n.p,{children:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u0435\u0441\u044c \u0432\u0430\u0448 \u043a\u043e\u0434. \u0417\u0434\u0435\u0441\u044c \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0438 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442, \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0431\u0443\u0434\u0443\u0449\u0438\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u043e\u0434\u0430 \u0441 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e\u043c."}),"\n",(0,i.jsx)(n.p,{children:'\u041a\u0430\u0436\u0434\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435, \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u043e\u0435, "\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435" \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e. \u041e\u043d\u043e \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0438\u0437\u0432\u043d\u0435, \u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u043d\u0435\u0433\u043e \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b \u043f\u043e \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u043d\u0438\u0436\u0435. \u0414\u0443\u043c\u0430\u044e, \u0435\u0441\u043b\u0438 \u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0438\u0437 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u043f\u043e\u043d\u044f\u0442\u043d\u043e\u0439, \u0441\u0430\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443.'}),"\n",(0,i.jsx)(n.h2,{id:"api--\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",children:"API \u2014 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442"}),"\n",(0,i.jsx)(n.p,{children:"\u0415\u0441\u043b\u0438 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445, \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u0434\u0432\u0438\u0436\u043a\u0430\u0445, \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430, \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u044b \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c, \u0442\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 Inner Core, \u043c\u044b \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u043c \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0441 \u0438\u0433\u0440\u043e\u0439. \u0410 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u044b \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430, \u043c\u0435\u0442\u043e\u0434\u044b \u0438 \u043a\u043b\u0430\u0441\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435."}),"\n",(0,i.jsx)(n.p,{children:"Inner Core \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043e\u0432, \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u043c\u0435\u0435\u0442 \u0441\u0432\u043e\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0446\u0435\u043b\u0438. \u041d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u043c\u043d\u043e\u0433\u0438\u0445 \u043b\u0435\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0438\u0437 \u043d\u0438\u0445 \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f Core Engine, \u0442\u0430\u043a \u043a\u0430\u043a \u0438\u043c\u0435\u043d\u043d\u043e \u0432\u043e\u043a\u0440\u0443\u0433 \u043d\u0435\u0433\u043e \u0438 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d \u0432\u0435\u0441\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u043b\u0430\u0443\u043d\u0447\u0435\u0440\u0430. \u042d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e, Adapted Script. \u041e\u043d \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0443\u0433\u0443\u0431\u043e \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u0441\u0430\u043c\u043e\u0439 \u0438\u0433\u0440\u043e\u0439, \u043b\u0438\u0431\u043e \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0430\u043c\u043e\u0433\u043e Core Engine. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0435\u0449\u0435 Preloader, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u043e\u043c, \u0438 Preferences Window API, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u044b\u043b \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u043d \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u0435\u0440\u0441\u0442\u0430\u043a\u0430, \u0430 \u043a\u043e\u0433\u0434\u0430-\u0442\u043e \u0438 \u0432\u043d\u0443\u0442\u0440\u0435\u0438\u0433\u0440\u043e\u0432\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043c\u043e\u0434\u043e\u0432. \u0418\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u0435\u0441\u044c\u043c\u0430 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u043e, \u0442\u0430\u043a \u0447\u0442\u043e \u043c\u044b \u043d\u0435 \u0431\u0443\u0434\u0435\u043c \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u0438\u0445 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"- AdaptedScript\n    - CoreEngine\n- PrefsWinAPI\n- Preloader\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u042d\u0442\u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u0435 \u0438 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u0445 ",(0,i.jsx)(n.code,{children:"api"})," \u0432\u0430\u0448\u0435\u0433\u043e ",(0,i.jsx)(n.em,{children:"build.config"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 Core Engine \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430, \u043a\u0430\u043a \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 Ender IO:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="dev/Base/Items/powder.js"',children:'// highlight-malformed-start\nItem.createDyeItem = function(id, name, type) {\n    IDRegistry.genItemID(id);\n    Item.createItem(id, name, {\n        name: "item_material_organic_" + type + "_dye"\n    }, { stack: 64 });\n};\n// highlight-malformed-end\n\nItem.createDyeItem("greenDye", "Organic Green Dye", "green");\nItem.createDyeItem("blackDye", "Organic Black Dye", "black");\nItem.createDyeItem("brownDye", "Organic Brown Dye", "brown");\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u041e\u0434\u043d\u0430\u043a\u043e \u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043e \u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u044f\u0445, \u044d\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0432\u043e \u0432\u0441\u0435\u0445 \u043c\u043e\u0434\u0430\u0445. \u0422\u043e \u0435\u0441\u0442\u044c, \u043c\u0435\u0442\u043e\u0434 ",(0,i.jsx)(n.code,{children:"Item.createDyeItem"})," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u0437\u0432\u0430\u043d \u0438\u0437 \u043b\u044e\u0431\u043e\u0433\u043e \u043c\u043e\u0434\u0430, \u0435\u0441\u043b\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d Ender IO. \u041d\u043e \u0432 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438 \u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0438\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043c\u0438. \u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0447\u0442\u043e-\u0442\u043e \u044d\u0441\u043a\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,i.jsx)(n.a,{href:"/api/namespace/ModAPI#registerAPI",children:"ModAPI.registerAPI"}),", \u043e\u043d \u0441\u043e\u0437\u0434\u0430\u043d \u0438\u043c\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u044d\u0442\u0438\u0445 \u0446\u0435\u043b\u0435\u0439."]}),"\n",(0,i.jsx)(n.h3,{id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",children:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsx)(n.p,{children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0441\u0432\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d, \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u043e \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0438\u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439. \u041e\u0434\u043d\u0430\u043a\u043e \u043f\u043e\u043c\u0438\u043c\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435, \u0434\u0432\u0438\u0436\u043e\u043a \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u044d\u043a\u0441\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u0435 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043c\u043e\u0434\u0430 \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \u042d\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b \u0432\u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e \u0438\u0437 \u043a\u0430\u043a\u043e\u0433\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u044d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0442\u0440\u043e\u043d\u0443\u0442\u043e. \u0421\u044e\u0434\u0430 \u0432\u0445\u043e\u0434\u044f\u0442 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043c\u043e\u0434\u0435 \u0438 \u0432\u043d\u0443\u0442\u0440\u0435\u0438\u0433\u0440\u043e\u0432\u044b\u0435 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const MINECRAFT_VERSION = getMCPEVersion();\nif (MINECRAFT_VERSION.main == 16) {\n    alert("\u041c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 " + MINECRAFT_VERSION.str + " \u0441\u0435\u0439\u0447\u0430\u0441 \u0430\u043a\u0442\u0443\u0430\u043b\u0435\u043d!");\n    // \u0432\u044b\u0432\u0435\u0434\u0435\u0442: \u041c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 1.16.201 \u0441\u0435\u0439\u0447\u0430\u0441 \u0430\u043a\u0442\u0443\u0430\u043b\u0435\u043d!\n} else if (MINECRAFT_VERSION.main == 11) {\n    alert("\u041b\u0435\u0433\u0430\u0441\u0438 \u0432\u0435\u0440\u0441\u0438\u044f " + MINECRAFT_VERSION.array.join("-") + " \u043d\u0435\u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430 \u0434\u043b\u044f " + __name__);\n    // \u0432\u044b\u0432\u0435\u0434\u0435\u0442: \u041b\u0435\u0433\u0430\u0441\u0438 \u0432\u0435\u0440\u0441\u0438\u044f 1-11-4 \u043d\u0435\u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430 \u0434\u043b\u044f <\u0438\u043c\u044f \u043c\u043e\u0434\u0430>\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u041c\u0435\u0442\u043e\u0434\u044b ",(0,i.jsx)(n.code,{children:"getMCPEVersion"})," \u0438 ",(0,i.jsx)(n.code,{children:"alert"})," \u0437\u0434\u0435\u0441\u044c \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0430\u0441\u0442\u044c\u044e \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 API, \u0432 \u0442\u043e \u0436\u0435 \u0432\u0440\u0435\u043c\u044f, ",(0,i.jsx)(n.code,{children:"__name__"})," \u2014 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0435 \u0438\u0437 \u043b\u044e\u0431\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043c\u043e\u0434\u0430. \u0412\u0430\u043c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0434\u0443\u043c\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043e \u0442\u043e\u043c \u043a\u0430\u043a\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0437\u0434\u0435\u0441\u044c, \u043e\u043d\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u0432 ",(0,i.jsx)(n.a,{href:"/api",children:"\u0441\u0432\u043e\u0434\u043a\u0435 API"})," \u0438 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f\u0445 \u0442\u0443\u043b\u0447\u0435\u0439\u043d\u0430."]}),"\n",(0,i.jsx)(n.h2,{id:"\u0442\u0435\u043b\u043e-\u0441\u043a\u0440\u0438\u043f\u0442\u0430",children:"\u0422\u0435\u043b\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u0430"}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c \u0438 \u0432\u0430\u0436\u043d\u0435\u0439\u0448\u0438\u043c \u0448\u0430\u0433\u043e\u043c \u0432 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0441\u043b\u0443\u0436\u0438\u0442 \u0438\u043c\u0435\u043d\u043d\u043e \u043a\u043e\u0434. JavaScript \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 Rhino 1.7.7 (\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0438\u043c ES6, \u043e\u0434\u043d\u0430\u043a\u043e \u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 \u043e\u0441\u0442\u0430\u043b\u0430\u0441\u044c \u0432 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 ES5) \u043a\u0430\u043a \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0434\u0432\u0438\u0436\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0432\u0441\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u044b. \u042f\u0437\u044b\u043a \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0439, \u0430 \u044d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043e\u043d \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043b\u0438\u0431\u043e \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439 \u043f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c. \u0412\u0435\u0441\u044c \u043a\u043e\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u0430 \u0442\u0435\u043b\u043e\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u043c\u044b \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u0432\u0435\u0441\u044c \u0442\u043e\u0442 \u043a\u043e\u0434, \u0447\u0442\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0445 \u0432 \u0441\u0431\u043e\u0440\u043a\u0443 \u0444\u0430\u0439\u043b\u0430\u0445."}),"\n",(0,i.jsx)(n.p,{children:"\u0421\u043a\u0440\u0438\u043f\u0442 \u043e\u0431\u044b\u0447\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u043e\u0436\u0434\u044b, \u0430 \u043b\u044e\u0431\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 (\u044d\u0442\u043e \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043a\u0430\u043a \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b, \u0442\u0430\u043a \u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0438\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438), \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442\u0441\u044f \u0432 \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0439. \u0412 \u0442\u0435\u043b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442, \u043b\u043e\u0433\u0438\u043a\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u043c\u043e\u0434\u0430, \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0447\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0438 \u0432\u0441\u0435 \u0442\u043e, \u043d\u0430 \u0447\u0442\u043e \u0432\u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u0435\u043d \u0434\u0432\u0438\u0436\u043e\u043a."}),"\n",(0,i.jsx)(n.h2,{id:"\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c\u044b\u0435-\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430",children:"\u0420\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430"}),"\n",(0,i.jsxs)(n.p,{children:["\u0420\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u0440\u0430\u043d\u0435\u0435, \u043c\u044b \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u043d\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u0441\u043a\u0440\u0438\u043f\u0442\u044b ",(0,i.jsx)(n.strong,{children:"custom"}),". \u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0438 \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432, \u044d\u0442\u043e \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0442\u0438\u043f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u0433\u043e\u0434\u043d\u043e \u0440\u0430\u0437, \u0430 \u043f\u043e\u043c\u0438\u043c\u043e \u044d\u0442\u043e\u0433\u043e, \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. \u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e, \u0443 \u0432\u0430\u0441 \u043c\u043e\u0433\u043b\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0443\u0442\u044c \u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u0438 \u0441 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438 \u0435\u0441\u043b\u0438 \u0437\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e \u0441 \u044f\u0437\u044b\u043a\u043e\u043c \u043e\u0434\u043d\u0430\u0436\u0434\u044b \u043f\u0440\u043e\u0448\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e. \u041d\u043e \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0438 \u043e\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u044d\u0442\u043e \u0432\u0441\u0435 \u0436\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430; \u043e\u043d\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0432 \u043d\u043e\u0432\u043e\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 \u0438 \u0445\u0440\u0430\u043d\u044f\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."]}),"\n",(0,i.jsx)(n.p,{children:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u044d\u0442\u043e \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0438\u0437 Solar Flux Reborn:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="dev/tests.js"',children:'alert(\n    runCustomSource("custom.js", {\n        THUNDER_MULTIPLIER: 0.4,\n        RAIN_MULTIPLIER: 0.6,\n        WEATHER: World.getWeather()\n    })\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e, \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u043b\u0438\u0431\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0435\u0441\u043b\u0438 \u0438\u0445 \u0435\u0449\u0435 \u043d\u0435\u0442. \u041b\u044e\u0431\u044b\u0435 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432 \u0442\u0435\u043b\u0435 \u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c\u044b\u0445 \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u044b \u043b\u0438\u0448\u044c \u043e\u0434\u0438\u043d \u0440\u0430\u0437. \u0418\u0445 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432\u044b\u0437\u043e\u0432\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443, \u0432 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0440\u043e\u0441\u0442\u044b\u043c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0438\u0445 \u043c\u0435\u0436\u0434\u0443 ",(0,i.jsx)(n.code,{children:"try-catch"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="custom.js"',children:"let raining = WEATHER.rain / 10;\nraining = raining > 0.2 ? (raining - 0.2) / 0.8 : 0;\nraining = Math.sin(raining * Math.PI / 2);\nraining = 1 - raining * (1 - RAIN_MULTIPLIER);\n\nlet thundering = WEATHER.thunder / 10;\nthundering = thundering > 0.75 ? (thundering - 0.75) / 0.25 : 0;\nthundering = Math.sin(thundering * Math.PI / 2);\nthundering = 1 - thundering * (1 - THUNDER_MULTIPLIER);\n\n// \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u044b \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439, \u0442\u0430\u043a\n// \u043a\u0430\u043a \u0442\u0435\u043b\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0447\u0442\u043e-\u043b\u0438\u0431\u043e\n(function() {\n    return raining * thundering;\n})();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043e\u0433\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0445 \u043f\u0430\u043d\u0435\u043b\u0435\u0439 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f, \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430. \u0422\u0430\u043a, ",(0,i.jsx)(n.code,{children:'runCustomSource("custom.js")'})," \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438 \u0432\u0435\u0440\u043d\u0435\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442. \u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f, \u0442\u0430\u043a \u0447\u0442\u043e \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u0435\u0436\u043d\u0438\u043c\u0438."]}),"\n",(0,i.jsx)(n.p,{children:"\u0421\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0434\u043b\u044f \u043c\u043e\u0434\u0434\u0438\u043d\u0433\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u044d\u0442\u043e\u0442 \u0442\u0438\u043f \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0438\u0433\u0440\u044b. \u0422\u0430\u043a \u043a\u0430\u043a \u0438\u0445 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u043b\u0435\u0433\u043a\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043c\u043e\u0434\u0430, \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043a\u043e\u0434 \u0437\u0434\u0435\u0441\u044c \u0431\u044b\u043b\u043e \u0445\u043e\u0440\u043e\u0448\u0435\u0439 \u0438\u0434\u0435\u0435\u0439. \u0411\u043e\u043b\u0435\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u044d\u0442\u0438\u0445 \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432 \u043f\u043e\u043f\u0440\u043e\u0441\u0442\u0443 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u041f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0438 \u0438\u0434\u0435\u0438, \u0433\u0434\u0435 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u043c\u043e\u0433 \u0431\u044b \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u0435\u043d."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);