"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8286],{69695:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const i={title:"ADR: Preferred folder structure"},s=void 0,l={unversionedId:"contributing/ADRs/front-end/preferred-folder-structure",id:"contributing/ADRs/front-end/preferred-folder-structure",title:"ADR: Preferred folder structure",description:"Background",source:"@site/docs/contributing/ADRs/front-end/preferred-folder-structure.md",sourceDirName:"contributing/ADRs/front-end",slug:"/contributing/ADRs/front-end/preferred-folder-structure",permalink:"/contributing/ADRs/front-end/preferred-folder-structure",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/contributing/ADRs/front-end/preferred-folder-structure.md",tags:[],version:"current",frontMatter:{title:"ADR: Preferred folder structure"},sidebar:"documentation",previous:{title:"ADR: Preferred export",permalink:"/contributing/ADRs/front-end/preferred-export"},next:{title:"ADR: Preferred form architecture",permalink:"/contributing/ADRs/front-end/preferred-form-architecture"}},a={},d=[{value:"Background",id:"background",level:2},{value:"Decision",id:"decision",level:2},{value:"Folder structure example:",id:"folder-structure-example",level:2}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"Folder structure is important in how easy it is to navigate and reason about the codebase. It's important to have a clear structure that is easy to understand and follow, while grouping related files together in such a way that is easy to find and remove."),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,"We have decided to create tree-like folder structure that mimics as closely as possible the relationship of the React components in the project. This has a number of benefits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you are looking for a component, you can easily find it by looking at the folder structure."),(0,n.kt)("li",{parentName:"ul"},"If you need to delete a component, you can be sure that all of the files connected to that component will be deleted if you delete the folder. This is supremely important, because it allows us to get rid of dead code easily and without having to worry about the consequences of deleting a file and worrying about whether it's used somewhere else.")),(0,n.kt)("h2",{id:"folder-structure-example"},"Folder structure example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ProfilePage\n  ProfilePage.tsx\n  ProfilePage.styles.ts\n  ProfileSettings\n    ProfileSettings.tsx\n    ProfileSettings.styles.ts\n  ProfilePicture\n    ProfilePicture.tsx\n    ProfilePicture.styles.ts\n")),(0,n.kt)("p",null,"Now you can clearly see that if you need to delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"ProfilePage")," component, you can simply delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"ProfilePage")," folder and all of the files connected to that component will be deleted."),(0,n.kt)("p",null,"If you experience that you need to create a component that is used in multiple places, the component should be moved to the closest possible ancestor. If this is not possible, the component should be moved to the ",(0,n.kt)("inlineCode",{parentName:"p"},"common")," folder."))}c.isMDXComponent=!0}}]);