"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3637],{21058:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=a(87462),n=(a(67294),a(3905));const r={title:"Unleash introductory overview"},i=void 0,o={unversionedId:"user_guide/unleash_overview",id:"user_guide/unleash_overview",title:"Unleash introductory overview",description:"One of the most important aspects of the architecture to understand is that feature toggles are evaluated in a client SDKs which runs as part of your application. This makes toggle evaluations super-fast (we're talking nano-seconds), scalable and resilient against network disturbances. In order to achieve this Unleash compromises a small update-delay when you change your toggle configurations until it is fully propagated to your application (in terms of seconds and is configurable).",source:"@site/docs/user_guide/unleash_overview.md",sourceDirName:"user_guide",slug:"/user_guide/unleash_overview",permalink:"/user_guide/unleash_overview",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/user_guide/unleash_overview.md",tags:[],version:"current",frontMatter:{title:"Unleash introductory overview"},sidebar:"documentation",previous:{title:"First steps and tutorials",permalink:"/tutorials"},next:{title:"Important Concepts",permalink:"/user_guide/important-concepts"}},l={},u=[{value:"Unleash Server",id:"unleash-server",level:3},{value:"System Overview",id:"system-overview",level:3}],h={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"One of the most important aspects of the architecture to understand is that feature toggles ",(0,n.kt)("em",{parentName:"p"},"are evaluated in a client SDKs")," which runs as part of your application. This makes toggle evaluations super-fast (",(0,n.kt)("em",{parentName:"p"},"we're talking nano-seconds"),"), scalable and resilient against network disturbances. In order to achieve this Unleash compromises a small update-delay when you change your toggle configurations until it is fully propagated to your application (in terms of seconds and is configurable)."),(0,n.kt)("p",null,"If you want more details you can read about ",(0,n.kt)("a",{parentName:"p",href:"https://www.getunleash.io/blog/our-unique-architecture"},"our unique architecture"),"."),(0,n.kt)("h3",{id:"unleash-server"},"Unleash Server"),(0,n.kt)("p",null,"Before you can connect your application to Unleash you need a Unleash server. You have a few options available:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Unleash Open-source"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/deploy/getting_started"},"Docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/unleash/helm-charts/"},"Helm Chart")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/operations/feature_flags.html#choose-a-client-library"},"GitLab")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Unleash Enterprise"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.getunleash.io/plans"},"Hosted Plans")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.getunleash.io/blog/self-host-your-feature-toggle-system"},"Self-hosted"))))),(0,n.kt)("h3",{id:"system-overview"},"System Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A visual overview of an Unleash system as described in the following paragraph.",src:a(38199).Z,title:"System Overview",width:"1024",height:"960"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api"},(0,n.kt)("strong",{parentName:"a"},"The Unleash API"))," - The Unleash instance. This is where you create feature toggles, configure activation strategies, and parameters, etc. The service holding all feature toggles and their configurations. Configurations declare which activation strategies to use and which parameters they should get."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"The Unleash admin UI")," - The bundled web interface for interacting with the Unleash instance. Manage toggles, define strategies, look at metrics, and much more. Use the UI to ",(0,n.kt)("a",{parentName:"li",href:"/user_guide/create_feature_toggle"},"create feature toggles"),", ",(0,n.kt)("a",{parentName:"li",href:"/how-to/how-to-create-and-assign-custom-project-roles"},"manage project access roles"),", ",(0,n.kt)("a",{parentName:"li",href:"/user_guide/api-token"},"create API tokens"),", and more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/sdks"},(0,n.kt)("strong",{parentName:"a"},"Unleash SDKs"))," - Unleash SDKs integrate into your applications and get feature configurations from the Unleash API. Use them to check whether features are enabled or disabled and to send metrics to the Unleash API. ",(0,n.kt)("a",{parentName:"li",href:"/sdks"},"See all our SDKs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/sdks/unleash-proxy"},(0,n.kt)("strong",{parentName:"a"},"The Unleash proxy"))," - The Unleash proxy sits between front-end and native applications and the Unleash API. You can scale it independently of the Unleash API to handle large request rates without causing issues for the Unleash API.")),(0,n.kt)("p",null,"To be super fast (",(0,n.kt)("em",{parentName:"p"},"we're talking nano-seconds"),"), the ",(0,n.kt)("a",{parentName:"p",href:"/sdks"},"client SDK")," caches all feature toggles and their current configuration in memory. The activation strategies are also implemented in the SDK. This makes it really fast to check if a toggle is on or off because it is just a simple function operating on local state, without the need to poll data from the database."))}c.isMDXComponent=!0},38199:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/unleash-architecture-40c7293e777a7bea0df4edeeef8a6bf4.svg"}}]);