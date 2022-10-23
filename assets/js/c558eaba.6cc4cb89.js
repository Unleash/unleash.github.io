"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6726],{69796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const a={title:"ADR: Preferred form architecture"},i=void 0,c={unversionedId:"contributing/frontend/ADR/preferred-form-architecture",id:"contributing/frontend/ADR/preferred-form-architecture",title:"ADR: Preferred form architecture",description:"Background",source:"@site/docs/contributing/frontend/ADR/preferred-form-architecture.md",sourceDirName:"contributing/frontend/ADR",slug:"/contributing/frontend/ADR/preferred-form-architecture",permalink:"/contributing/frontend/ADR/preferred-form-architecture",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/contributing/frontend/ADR/preferred-form-architecture.md",tags:[],version:"current",frontMatter:{title:"ADR: Preferred form architecture"}},s={},d=[{value:"Background",id:"background",level:2},{value:"Decision",id:"decision",level:2}],l={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"Forms can be tricky. In software, we often want to write DRY components, repeating as little as possible. Yet we also want a clear separation of concerns. Forms represent a challenge in this way because you have to choose which principle is the most important. You can't both have it DRY and completely separated."),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,"We have decided to architecture our forms in the following way: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a hook that contains all the logic for the form. This hook will return a form object that contains all the form state and functions to update the state."),(0,n.kt)("li",{parentName:"ul"},"Create a reusable form component that does not contain any logic"),(0,n.kt)("li",{parentName:"ul"},"Create separate Create and Edit components that use the form component and the form hook to create the form and implements it's own logic for submitting the form.")),(0,n.kt)("p",null,"In this way, we keep as much of the form as possible DRY, but we avoid passing state internally in the form so the form doesn't need to know wheter it is in create or edit mode. This allows us to keep one thing in mind when working, and not have to worry about dual states of the component."))}u.isMDXComponent=!0}}]);