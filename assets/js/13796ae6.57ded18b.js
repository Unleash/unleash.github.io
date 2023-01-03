"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[172],{68951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const r={title:"ADR: Preferred export"},a=void 0,s={unversionedId:"contributing/ADRs/back-end/preferred-export",id:"contributing/ADRs/back-end/preferred-export",title:"ADR: Preferred export",description:"Background",source:"@site/docs/contributing/ADRs/back-end/preferred-export.md",sourceDirName:"contributing/ADRs/back-end",slug:"/contributing/ADRs/back-end/preferred-export",permalink:"/contributing/ADRs/back-end/preferred-export",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/contributing/ADRs/back-end/preferred-export.md",tags:[],version:"current",frontMatter:{title:"ADR: Preferred export"},sidebar:"documentation",previous:{title:"ADR: Naming",permalink:"/contributing/ADRs/back-end/naming"},next:{title:"ADR: Component naming and file naming",permalink:"/contributing/ADRs/front-end/component-naming"}},c={},d=[{value:"Background",id:"background",level:2},{value:"Decision",id:"decision",level:2}],l={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"In the codebase, we have discovered that default exports create multiple problems. One is that you can rename the component when importing it, which can cause confusion. Another is that it is harder to find the component when you are looking for it, as you have to look for the file name instead of the component name (solved by ADR for naming, but still relevant)."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"We have decided to use named exports. This will allow us to eliminate the possiblity of exporting a component and renaming it in another file. It also allows us easy access to advanced refactors across the project, because renaming in one place will propagate to all the other places where that import is referenced. This resolves the issues described in the background without any significant downsides."))}p.isMDXComponent=!0}}]);