"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4453],{55607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"ADR: preferred styling method"},s=void 0,d={unversionedId:"contributing/frontend/ADR/preferred-styling-method",id:"contributing/frontend/ADR/preferred-styling-method",title:"ADR: preferred styling method",description:"This document supersedes ADR: preferred styles import placement",source:"@site/docs/contributing/frontend/ADR/preferred-styling-method.md",sourceDirName:"contributing/frontend/ADR",slug:"/contributing/frontend/ADR/preferred-styling-method",permalink:"/contributing/frontend/ADR/preferred-styling-method",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/contributing/frontend/ADR/preferred-styling-method.md",tags:[],version:"current",frontMatter:{title:"ADR: preferred styling method"}},a={},l=[{value:"Background",id:"background",level:2},{value:"Decision",id:"decision",level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document supersedes ",(0,i.kt)("a",{parentName:"p",href:"/contributing/frontend/ADR/preferred-styles-import-placement"},"ADR: preferred styles import placement")),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"In the codebase, we need to have a uniform way of performing style updates."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"We have decided to move away from using makeStyles as it's currently deprecated from @material/ui, and kept alive with an\nexternal interop package to maintain compatability with the latest version. The preferred path forward is to use styled components which is\nsupported natively in @material/ui and sparingly use the sx prop available on all mui components."))}c.isMDXComponent=!0}}]);