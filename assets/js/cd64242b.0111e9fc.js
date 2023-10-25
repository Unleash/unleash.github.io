"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3628],{88950:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>f});var o=a(87462),n=(a(67294),a(3905));const i={title:"Defining the scope of the feature flag migration"},r=void 0,s={unversionedId:"topics/feature-flag-migration/feature-flag-migration-scope",id:"topics/feature-flag-migration/feature-flag-migration-scope",title:"Defining the scope of the feature flag migration",description:"Scoping a feature flag migration properly is the most significant task you can do to ensure the success of your project.",source:"@site/docs/topics/feature-flag-migration/feature-flag-migration-scope.md",sourceDirName:"topics/feature-flag-migration",slug:"/topics/feature-flag-migration/feature-flag-migration-scope",permalink:"/topics/feature-flag-migration/feature-flag-migration-scope",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/topics/feature-flag-migration/feature-flag-migration-scope.md",tags:[],version:"current",frontMatter:{title:"Defining the scope of the feature flag migration"},sidebar:"documentation",previous:{title:"Best Practices for Migrating from a Homegrown Feature Management Solution",permalink:"/topics/feature-flag-migration/feature-flag-migration-best-practices"},next:{title:"Make the business case for feature flag migration",permalink:"/topics/feature-flag-migration/business-case-feature-flag-migration"}},l={},f=[{value:"1- Separate the migration of old flags from the existing system from new flags created in Unleash.",id:"1--separate-the-migration-of-old-flags-from-the-existing-system-from-new-flags-created-in-unleash",level:2},{value:"2- Do not make end-to-end app modernization a dependency of your feature flag migration",id:"2--do-not-make-end-to-end-app-modernization-a-dependency-of-your-feature-flag-migration",level:2}],g={toc:f};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Scoping a feature flag migration properly is the most significant task you can do to ensure the success of your project.  "),(0,n.kt)("p",null,"Based on experiences working with dozens of large enterprises migrating homegrown systems to Unleash, we recommend two best practices when scoping your feature flag migration."),(0,n.kt)("h2",{id:"1--separate-the-migration-of-old-flags-from-the-existing-system-from-new-flags-created-in-unleash"},"1- Separate the migration of old flags from the existing system from new flags created in Unleash."),(0,n.kt)("p",null,'The older the system, the more existing flags there are. It might take weeks or months to hunt down the developer responsible for an old flag in an obscure part of the code base. In the meantime, hundreds of developers are trying to create new flags today.  By separating these concerns, you can get to the "happy end state" for your development team faster, and burn down your flag migrations over time.'),(0,n.kt)("p",null,"So you should end up with two separate tracks as part of your project scope."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Build the new platform around the "better" target state - ideal use cases and ways of working that enable greater levels of developer efficiency')),(0,n.kt)("p",null,"In parallel, the second track:"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Clean up stale feature flags in the current platform. You should decide strategically on what should be migrated and what should be cleaned up. Many old flags can simply be deleted rather than migrated.  ")),(0,n.kt)("h2",{id:"2--do-not-make-end-to-end-app-modernization-a-dependency-of-your-feature-flag-migration"},"2- Do not make end-to-end app modernization a dependency of your feature flag migration"),(0,n.kt)("p",null,"Organizations who adopt feature flags see improvements in all key operational metrics for DevOps: Lead time to changes, mean-time-to-recovery, deployment frequency, and change failure rate.  So it is natural as part of a feature flag migration to also improve other parts of the software development lifecycle. From the perspective of feature flag migration, this is a mistake."),(0,n.kt)("p",null,"Making feature flag migration dependent on breaking down mission-critical monolithic applications into microservices, for example, will slow down your feature flag migration."),(0,n.kt)("p",null,"Rather, enable feature flags for all codebases, independent of your state of modernization.  Even monolithic applications can benefit from feature flags in some instances. When this monolith is broken down, the accrued benefits will be even greater, and you will ship your new feature management system a lot faster."),(0,n.kt)("p",null,"Use our ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1MKc95v7Tc-9tznWMDVSy2vvmVJTvOFLRVZpx1QrL-_U/edit#gid=996250264"},"Feature Flag Migration template")," to fill in details about your project scope."))}m.isMDXComponent=!0}}]);