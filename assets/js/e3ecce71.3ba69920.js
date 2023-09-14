"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3602],{66847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=n(87462),s=(n(67294),n(3905));const o={title:"What's new in v4?"},r=void 0,i={unversionedId:"reference/whats-new-v4",id:"reference/whats-new-v4",title:"What's new in v4?",description:"Version 4 of Unleash brings a lot of improvements to Unleash. In this document we will highlight some of the things that has been added.",source:"@site/docs/reference/whats-new-v4.md",sourceDirName:"reference",slug:"/reference/whats-new-v4",permalink:"/reference/whats-new-v4",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/whats-new-v4.md",tags:[],version:"current",frontMatter:{title:"What's new in v4?"}},l={},h=[{value:"Upgrade with ease",id:"upgrade-with-ease",level:3},{value:"Role-Based Access Control",id:"role-based-access-control",level:3},{value:"New Integrations",id:"new-integrations",level:3},{value:"Improved UX",id:"improved-ux",level:3},{value:"New SSO Option",id:"new-sso-option",level:3},{value:"User Management",id:"user-management",level:3},{value:"API access",id:"api-access",level:3},{value:"Custom stickiness",id:"custom-stickiness",level:3}],d={toc:h};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Version 4 of Unleash brings a lot of improvements to Unleash. In this document we will highlight some of the things that has been added."),(0,s.kt)("h3",{id:"upgrade-with-ease"},"Upgrade with ease"),(0,s.kt)("p",null,"Unleash can either be hosted by us or self-hosted. If you have a managed Unleash Enterprise instance you are automatically upgraded to version 4. If you manage Unleash yourself (either Open-Source or Enterprise Self-hosted) we recommend reading the ",(0,s.kt)("a",{parentName:"p",href:"/reference/deploy/migration-guide"},"migration guide"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"PS! The first time you access Unleash v4 from a self-hosted instance you will need to login with the default admin user:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"username: ",(0,s.kt)("inlineCode",{parentName:"li"},"admin")),(0,s.kt)("li",{parentName:"ul"},"password: ",(0,s.kt)("inlineCode",{parentName:"li"},"unleash4all"))),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(We recommend changing the password of the default user from the admin section.)")),(0,s.kt)("h3",{id:"role-based-access-control"},"Role-Based Access Control"),(0,s.kt)("p",null,"With Role-Based Access Control you can now assign groups to users in order to control access. You can control access to root resources in addition to controlling access to ",(0,s.kt)("a",{parentName:"p",href:"/reference/projects"},"projects"),". ",(0,s.kt)("em",{parentName:"p"},'Please be aware that all existing users will become "Owner" of all existing projects as part of the migration from v3 to v4.')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/reference/rbac"},"Read more")),(0,s.kt)("h3",{id:"new-integrations"},"New Integrations"),(0,s.kt)("p",null,"Integrations make it easy to integrate Unleash with other systems. In version 4 we bring two new integrations to Unleash:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/reference/integrations/teams"},"Microsoft Teams")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/reference/integrations/datadog"},"Datadog"))),(0,s.kt)("h3",{id:"improved-ux"},"Improved UX"),(0,s.kt)("p",null,"Unleash v4 includes a new implementation of the frontend based on ",(0,s.kt)("a",{parentName:"p",href:"https://material-ui.com"},"Material-ui"),". This will make it much easier for us to improve the Unleash Admin UI and our ambition is to make it intuitive to use even for non-developers. The improved UX is made available in Unleash Open-Source and Unleash Enterprise."),(0,s.kt)("h3",{id:"new-sso-option"},"New SSO Option"),(0,s.kt)("p",null,"In version 4 we added support for ",(0,s.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect")," as part of the Unleash Enterprise offering. OpenID Connect is a simple identity layer on top of the OAuth 2.0 protocol. It allows Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner."),(0,s.kt)("h3",{id:"user-management"},"User Management"),(0,s.kt)("p",null,"In version 4 we improved the User Management and made it available for Unleash Open-Source and Unleash Enterprise. Starting in v4 all users accessing Unleash needs to exist in Unleash in order to gain access (because they need to have the proper permission from RBAC.)"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/how-to/how-to-add-users-to-unleash"},"Read more")),(0,s.kt)("h3",{id:"api-access"},"API access"),(0,s.kt)("p",null,"In version 4 we improved the API Access and made it available for Unleash Open-Source and Unleash Enterprise. Starting from Unleash v4 we require all SDKs to use an access token in order to connect to Unleash."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/how-to/how-to-use-the-admin-api"},"Read more")),(0,s.kt)("h3",{id:"custom-stickiness"},"Custom stickiness"),(0,s.kt)("p",null,'In Unleash Enterprise v4 you can configure stickiness when you are\ndoing a gradual rollout with the "gradual rollout" strategy (previously known as "flexible rollout") or together with feature toggle variants. This means that you can now have consistent behavior based on any field available on the ',(0,s.kt)("a",{parentName:"p",href:"/reference/unleash-context"},"Unleash context"),"."))}c.isMDXComponent=!0}}]);