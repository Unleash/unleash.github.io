"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9278],{1471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>h,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const s={id:"health",title:"/health"},i="Health API",h={unversionedId:"api/internal/health",id:"api/internal/health",title:"/health",description:"GET http://unleash.host.com/health",source:"@site/docs/api/internal/health.md",sourceDirName:"api/internal",slug:"/api/internal/health",permalink:"/api/internal/health",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/internal/health.md",tags:[],version:"current",frontMatter:{id:"health",title:"/health"},sidebar:"documentation",previous:{title:"/internal-backstage/prometheus",permalink:"/api/internal/internal"},next:{title:"OpenAPI docs",permalink:"/reference/api/unleash"}},r={},o=[],p={toc:o};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"health-api"},"Health API"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/health")),(0,l.kt)("p",null,"Used to check the health of the running Unleash instance. This endpoint has two possible responses:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Status: 200")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "health": "GOOD"\n}\n')),(0,l.kt)("p",null,"This response means everything is OK. Unleash is able to talk to the PostgreSQL"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Status: 500")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "health": "BAD"\n}\n')),(0,l.kt)("p",null,"This response indicates that Unleash is not able to talk to PostgreSQL and will not be able to serve requests."))}u.isMDXComponent=!0}}]);