"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2681],{19734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={title:"ADR: Preferred export"},a=void 0,d={unversionedId:"contributing/ADRs/front-end/preferred-export",id:"contributing/ADRs/front-end/preferred-export",title:"ADR: Preferred export",description:"Background",source:"@site/docs/contributing/ADRs/front-end/preferred-export.md",sourceDirName:"contributing/ADRs/front-end",slug:"/contributing/ADRs/front-end/preferred-export",permalink:"/contributing/ADRs/front-end/preferred-export",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/contributing/ADRs/front-end/preferred-export.md",tags:[],version:"current",frontMatter:{title:"ADR: Preferred export"},sidebar:"documentation",previous:{title:"ADR: Preferred data mutation method",permalink:"/contributing/ADRs/front-end/preferred-data-mutation-method"},next:{title:"ADR: Preferred folder structure",permalink:"/contributing/ADRs/front-end/preferred-folder-structure"}},s={},c=[{value:"Background",id:"background",level:2},{value:"Decision",id:"decision",level:2}],p={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"We have seen a need to standardize how to export from files in the project, in order to achieve consistency and avoid situations where we can have a component default exported as one name and renamed as something else in a different file. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Problem example\n// File A\n\nconst MyComponent = () => {\n\n}\n\nexport default MyComponent;\n\n// File B\nimport NewName from '../components/MyComponent/MyComponent.tsx';\n")),(0,r.kt)("p",null,"The above can cause massive confusion and make it hard to navigate the codebase."),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"We have decided to standardise exports on named exports. This will allow us to eliminate the possiblity of exporting a component and renaming it in another file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Do:\nexport const MyComponent = () => {};\n\n// Don't:\nconst MyComponent = () => {};\n\nexport default MyComponent;\n")),(0,r.kt)("p",null,"The reason for this decision is to remove mental clutter and free up capacity to easily navigate the codebase. If you can always deduce that the component is named as it is defined, then finding that component becomes a lot easier. This will ensure that we remove unnecessary hurdles to understand and work within the codebase."))}l.isMDXComponent=!0}}]);