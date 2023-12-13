"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[61454],{56104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));const o={title:"ADR: Interface naming"},r=void 0,s={unversionedId:"contributing/ADRs/front-end/interface-naming",id:"contributing/ADRs/front-end/interface-naming",title:"ADR: Interface naming",description:"Background",source:"@site/docs/contributing/ADRs/front-end/interface-naming.md",sourceDirName:"contributing/ADRs/front-end",slug:"/contributing/ADRs/front-end/interface-naming",permalink:"/contributing/ADRs/front-end/interface-naming",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/contributing/ADRs/front-end/interface-naming.md",tags:[],version:"current",frontMatter:{title:"ADR: Interface naming"},sidebar:"documentation",previous:{title:"ADR: Handling tables",permalink:"/contributing/ADRs/front-end/handling-tables"},next:{title:"ADR: Preferred component props usage",permalink:"/contributing/ADRs/front-end/preferred-component-props-usage"}},c={},d=[{value:"Background",id:"background",level:2},{value:"Decision",id:"decision",level:2}],u={toc:d};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"In the codebase, we have found a need to have a common way of naming interfaces in order to ensure consistency."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"We have decided to use a naming convention of appending the letter ",(0,a.kt)("inlineCode",{parentName:"p"},"I")," in front of interfaces to signify that we are in fact using an interface. For props, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"IComponentNameProps"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// Do:\ninterface IMyInterface {}\ninterface IMyComponentNameProps {}\n\n// Don't:\ninterface MyInterface {}\ninterface MyComponentName {}\n")),(0,a.kt)("p",null,"The reason for this decision is to remove mental clutter and free up capacity to easily navigate the codebase. Knowing that an interface is prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"I")," allows you to quickly scan a file without watching for a context where the interface is used in order to understand what it is."))}f.isMDXComponent=!0}}]);