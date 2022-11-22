"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9659],{76130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>r,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={title:"How to add SSO with OpenID Connect"},s=void 0,l={unversionedId:"how-to/how-to-add-sso-open-id-connect",id:"how-to/how-to-add-sso-open-id-connect",title:"How to add SSO with OpenID Connect",description:"The Single-Sign-On capability is only available for customers on the Enterprise subscription. Check out the Unleash plans for details.",source:"@site/docs/how-to/how-to-add-sso-open-id-connect.md",sourceDirName:"how-to",slug:"/how-to/how-to-add-sso-open-id-connect",permalink:"/how-to/how-to-add-sso-open-id-connect",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-add-sso-open-id-connect.md",tags:[],version:"current",frontMatter:{title:"How to add SSO with OpenID Connect"},sidebar:"documentation",previous:{title:"Single Sign-On (SSO)",permalink:"/how-to/sso"},next:{title:"How to add SSO with SAML 2.0 Okta",permalink:"/how-to/how-to-add-sso-saml"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Basic configuration",id:"basic-configuration",level:2},{value:"Step 1: Sign-in to Unleash",id:"step-1",level:3},{value:"Step 2: Navigate to SSO configuration",id:"step-2",level:3},{value:"Step 3: Okta with OpenID Connect",id:"step3",level:3},{value:"Step 4: Verify",id:"step-4",level:3}],c={toc:d};function r(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Availability",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("strong",{parentName:"p"},"Single-Sign-On capability")," is only available for customers on the Enterprise subscription. Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://www.getunleash.io/plans"},"Unleash plans")," for details.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this guide we will do a deep dive on the Single-Sign-On (SSO) using the OpenID Connect protocol and connect it with Okta as IdP. Unleash supports other identity providers and protocols, have a look at ",(0,a.kt)("a",{parentName:"p",href:"/reference/sso"},"all available Single-Sign-On options")),(0,a.kt)("h2",{id:"basic-configuration"},"Basic configuration"),(0,a.kt)("h3",{id:"step-1"},"Step 1: Sign-in to Unleash"),(0,a.kt)("p",null,'In order to configure SSO you will need to log in to the Unleash instance with a user that have "Admin" role. If you are self-hosting Unleash then a default user will be automatically created the first time you start Unleash:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"username: ",(0,a.kt)("inlineCode",{parentName:"li"},"admin")),(0,a.kt)("li",{parentName:"ul"},"password: ",(0,a.kt)("inlineCode",{parentName:"li"},"unleash4all"))),(0,a.kt)("h3",{id:"step-2"},"Step 2: Navigate to SSO configuration"),(0,a.kt)("p",null,'Unleash enterprise supports multiple authentication providers, and we provide in depth guides for each of them. To find them navigate to "Admin" => "Single-Sign-On" section.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"admin-authentication",src:n(89353).Z,width:"1366",height:"425"})),(0,a.kt)("h3",{id:"step3"},"Step 3: Okta with OpenID Connect"),(0,a.kt)("p",null,"Open a new tab/window in your browser and sign in to your Okta account. We will need to create a new Application which will hold the settings we need for Unleash."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"a) Create new Okta application")),(0,a.kt)("p",null,"Navigate to \u201cAdmin/Applications\u201d and click the \u201cAdd Apps\u201d button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Okta: Add Apps",src:n(73683).Z,width:"768",height:"345"})),(0,a.kt)("p",null,'Then click \u201cCreate Application\u201d and choose a new \u201cOIDC - OpenID Connect\u201d application, and choose application type "Web Application" and click create.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Okta: Create Apps",src:n(62440).Z,width:"942",height:"536"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"b) Configure Application Integration")),(0,a.kt)("p",null,"Give you application a name. And set the Sign-in redirect URI to:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://[region].app.unleash-hosted.com/[instanceName]/auth/oidc/callback")),(0,a.kt)("p",null,"(In a self-hosted scenario the URL must match your ",(0,a.kt)("inlineCode",{parentName:"p"},"UNLEASH_URL")," configuration)"),(0,a.kt)("p",null,"You can also configure the optional Sign-out redirect URIs: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://[region].app.unleash-hosted.com/[instanceName]/")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Okta: Configure OpenID Connect",src:n(21855).Z,width:"953",height:"886"})),(0,a.kt)("p",null,"Save your new application and your will ge the required details you need to configure the Unleash side of things:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Okta: Configure OpenID Connect",src:n(27494).Z,width:"1088",height:"748"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"c) Configure OpenID Connect provider in Unleash")),(0,a.kt)("p",null,"Navigate to Unleash and insert the details (Discover URL, Client Id and Client Secret) in to Unleash."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pleas note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Discover URL")," must be a valid URL and must include the ",(0,a.kt)("inlineCode",{parentName:"p"},"https://")," prefix. For example: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://dev-example-okta.com"},"https://dev-example-okta.com"))," is a valid discovery URL.")),(0,a.kt)("p",null,"You may also choose to \u201cAuto-create users\u201d. This will make Unleash automatically create new users on the fly the first time they sign-in to Unleash with the given SSO provider (JIT). If you decide to automatically create users in Unleash you must also provide a list of valid email domains. You must also decide which global Unleash role they will be assigned (Editor role will be the default)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Unleash: Configure OpenID Connect",src:n(86801).Z,width:"1100",height:"872"})),(0,a.kt)("h3",{id:"step-4"},"Step 4: Verify"),(0,a.kt)("p",null,'Logout of Unleash and sign back in again. You should now be presented with the "Sign in with OpenID Connect" option. Click the button and follow the sign-in flow. If all goes well you should be successfully signed in to Unleash.'),(0,a.kt)("p",null,"(If something is not working you can still sign-in with username and password)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Verify SSO",src:n(53513).Z,width:"1759",height:"843"})),(0,a.kt)("p",null,"Success!"))}r.isMDXComponent=!0},62440:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/okta-oidc-create-f9d9ab1b8892b1c5ec0ed74b62b5b124.png"},27494:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/okta-oidc-details-e77e03e7e1ba9f5681c2e79598de086b.png"},73683:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/okta_add_application-768x345-9ffd206a08941ae538097e4630b372c7.png"},21855:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sso-oidc-okta-5a34aca33a53c55b14040711fe83da17.png"},86801:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sso-oidc-unleash-dc2193ffcb14e31bba304e2410060a04.png"},53513:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sso-oidc-verify-3dda592e70d72ef4f0a8ec06befb3e8c.png"},89353:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sso-oidc-60043d69e4dac19acd7f3c2dfee0bfd4.png"}}]);