"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3069],{14292:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={id:"sso-saml-keycloak",title:"How to add SSO with SAML 2.0 Keycloak"},l=void 0,s={unversionedId:"advanced/sso-saml-keycloak",id:"advanced/sso-saml-keycloak",title:"How to add SSO with SAML 2.0 Keycloak",description:"The Single-Sign-On capability is only available for customers on the Enterprise subscription. Check out the Unleash plans for details.",source:"@site/docs/advanced/sso-saml-keycloak.md",sourceDirName:"advanced",slug:"/advanced/sso-saml-keycloak",permalink:"/advanced/sso-saml-keycloak",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/advanced/sso-saml-keycloak.md",tags:[],version:"current",frontMatter:{id:"sso-saml-keycloak",title:"How to add SSO with SAML 2.0 Keycloak"},sidebar:"documentation",previous:{title:"How to add SSO with SAML 2.0 Okta",permalink:"/advanced/sso-saml"},next:{title:"[Deprecated] How to add SSO with Google",permalink:"/advanced/sso-google"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Basic configuration",id:"basic-configuration",level:2},{value:"Step 1: Sign-in to Unleash",id:"step-1",level:3},{value:"Step 2: Navigate to SSO configuration",id:"step-2",level:3},{value:"Step 3: Keycloak with SAML 2.0",id:"step-3",level:3},{value:"Step 4: Configure SAML 2.0 Authentication provider in Unleash",id:"step-3",level:3},{value:"Step 5: Validate",id:"step-5",level:3}],r={toc:c};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},r,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("strong",{parentName:"p"},"Single-Sign-On capability")," is only available for customers on the Enterprise subscription. Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://www.getunleash.io/plans"},"Unleash plans")," for details.")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this guide we will do a deep dive on the Single-Sign-On (SSO) integration with SAML 2.0 and connect it with Keycloak as IdP. Unleash supports other identity providers and protocols, have a look at ",(0,i.kt)("a",{parentName:"p",href:"/advanced/enterprise-authentication"},"all available Single-Sign-On options")),(0,i.kt)("h2",{id:"basic-configuration"},"Basic configuration"),(0,i.kt)("h3",{id:"step-1"},"Step 1: Sign-in to Unleash"),(0,i.kt)("p",null,'In order to configure SSO you will need to log in to the Unleash instance with a user that have "Admin" role. If you are self-hosting Unleash then a default user will be automatically created the first time you start Unleash:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"username: ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")),(0,i.kt)("li",{parentName:"ul"},"password: ",(0,i.kt)("inlineCode",{parentName:"li"},"unleash4all"))),(0,i.kt)("h3",{id:"step-2"},"Step 2: Navigate to SSO configuration"),(0,i.kt)("p",null,'In order to configure SSO with SAML with your Unleash enterprise you should navigate to the Single-Sign-On configuration section and choose the "SAML 2.0" tab.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sso-config",src:a(46515).Z,width:"1366",height:"785"})),(0,i.kt)("h3",{id:"step-3"},"Step 3: Keycloak with SAML 2.0"),(0,i.kt)("p",null,"Open to the Keycloak dashboard and navigate to \u201cClients\u201d and click \u201cAdd Client\u201d button. Give it a unique clientId (e.g. unleash), use the \u201csaml\u201d protocol and specify the following SAML Endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://<unleash.hostname.com>/auth/saml/callback\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keycloak: Add client",src:a(51012).Z,width:"768",height:"347"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"a) Change \u201cName ID format to \u201cemail\u201d")," Unleash expects an email to be sent from the SSO provider so make sure Name ID format is set to email, see a). also you must give the IDP Initiated SSO URL Name, we have chosen to call it \u201cunleash\u201d, see 2). This gives us the Sign-on URL we will need in our Unleash configuration later."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keycloak: step 2",src:a(58785).Z,width:"768",height:"242"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"b) Copy the Keycloak Entity ID an Signing key")),(0,i.kt)("p",null,"Navigate to \u201cRealm Settings\u201d and open the \u201cSAML 2.0 Identity Provider Metadata\u201d. You will need copy the entityID (a) and the X509Certificate (B). These will be required when configuring SAML 2.0 in Unleash."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keycloak: step 3",src:a(74342).Z,width:"768",height:"235"})),(0,i.kt)("h3",{id:"step-3"},"Step 4: Configure SAML 2.0 Authentication provider in Unleash"),(0,i.kt)("p",null,"Go back to Unleash Admin Dashboard and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin Menu -> Single-Sign-On -> SAML"),". Fill in the values captured in the step 3."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Entity ID (3b a)"),(0,i.kt)("li",{parentName:"ul"},"Single Sing-On URL (3a b)"),(0,i.kt)("li",{parentName:"ul"},"Certificate (3b b)")),(0,i.kt)("p",null,"You may also choose to \u201cauto create users\u201d. This will make Unleash automatically create new users on the fly first time they sign-in to Unleash with the given SSO provider. You may also limit the auto-creation to certain email domains, shown in the example below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keycloak: step 4",src:a(78088).Z,width:"768",height:"644"})),(0,i.kt)("h3",{id:"step-5"},"Step 5: Validate"),(0,i.kt)("p",null,"You have now successfully configured Unleash to use SAML 2.0 together with Keycloak as an IdP. Please note that you also must assign users to the application defined in Keycloak to actually be able to log-in to Unleash."),(0,i.kt)("p",null,"Try signing out of Unleash. If everything is configured correctly you should be presented with the option to sign in with SAML 2.0."))}h.isMDXComponent=!0},51012:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keykloak_step1-768x347-44d9190db1752ec4ed70c29499d145aa.png"},58785:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keykloak_step2b-768x242-eda1a0d74c67a5189fbc5b538170d11d.png"},74342:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keykloak_step3-768x235-8b396e1cacb7dda0391f0904dc5b132b.png"},78088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keykloak_step4-768x644-52af8c74af86573d7ec006a3084f25f5.png"},46515:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sso-configure-saml-5b4bc8f7d79873fced0c335184e8cb49.png"}}]);