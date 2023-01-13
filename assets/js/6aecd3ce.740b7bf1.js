"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9820],{81480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=n(87462),s=(n(67294),n(3905));const c={title:"Service accounts"},o=void 0,i={unversionedId:"reference/service-accounts",id:"reference/service-accounts",title:"Service accounts",description:"Service accounts is an upcoming enterprise feature, and is scheduled to become available in one of the next few releases.",source:"@site/docs/reference/service-accounts.md",sourceDirName:"reference",slug:"/reference/service-accounts",permalink:"/reference/service-accounts",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/service-accounts.md",tags:[],version:"current",frontMatter:{title:"Service accounts"},sidebar:"documentation",previous:{title:"Segments",permalink:"/reference/segments"},next:{title:"Single Sign-On",permalink:"/reference/sso"}},r={},u=[{value:"Service account tokens",id:"service-account-tokens",level:2}],l={toc:u};function h(e){let{components:t,...c}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Service accounts is an upcoming enterprise feature, and is scheduled to become available in one of the next few releases.")),(0,s.kt)("p",null,"Service accounts are accounts that act as normal Unleash users and that respect the same set of permissions, but that don't represent real users. These accounts do not have a password and cannot log in to the Unleash UI. Instead, they are intended to be used to access the Unleash API programmatically, providing integrations an identity."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Service account table",src:n(57434).Z,width:"1366",height:"520"})),(0,s.kt)("p",null,"Use service accounts to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Provide a user-like identity to an integration or automation and manage it within Unleash"),(0,s.kt)("li",{parentName:"ul"},"Give access to the Unleash API without giving access to the Unleash UI"),(0,s.kt)("li",{parentName:"ul"},"Provide more fine-grained permissions than an admin token provides")),(0,s.kt)("p",null,"In order to create a service account, you can follow the ",(0,s.kt)("a",{parentName:"p",href:"/how-to/how-to-create-service-accounts"},"how to create service accounts")," guide."),(0,s.kt)("h2",{id:"service-account-tokens"},"Service account tokens"),(0,s.kt)("p",null,"Service account tokens allow service accounts to use the Admin API as themselves with their own set of permissions, rather than using an admin token. See ",(0,s.kt)("a",{parentName:"p",href:"/how-to/how-to-use-the-admin-api"},(0,s.kt)("em",{parentName:"a"},"how to use the Admin API"))," for more information."),(0,s.kt)("p",null,"These tokens act just like ",(0,s.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#personal-access-tokens"},"personal access tokens")," for the service accounts, except that they are managed by Unleash admins."),(0,s.kt)("p",null,"When using a service account token to modify resources, the event log will display the service account name for that operation."),(0,s.kt)("p",null,"Service account tokens can be managed by editing the respective service account: "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Service account tokens",src:n(4598).Z,width:"1366",height:"987"})))}h.isMDXComponent=!0},57434:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/service-account-table-e8026faef5b4fbe25f60479f8c0d6799.png"},4598:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/service-account-tokens-03a6bc7fc455a48e9e6f8d9e5a55a75c.png"}}]);