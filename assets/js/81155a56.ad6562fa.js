"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[66856],{62161:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=a(87462),s=(a(67294),a(3905));const r={title:"Unleash introductory overview"},i=void 0,l={unversionedId:"understanding-unleash/unleash-overview",id:"understanding-unleash/unleash-overview",title:"Unleash introductory overview",description:"One of the most important aspects of the architecture to understand is that feature toggles are evaluated in client SDKs which runs as part of your application. This makes toggle evaluations super-fast (we're talking nano-seconds), scalable and resilient against network disturbances. In order to achieve this Unleash incurs a small update-delay when you change your toggle configurations until it is fully propagated to your application (in terms of seconds and is configurable).",source:"@site/docs/understanding-unleash/unleash-overview.md",sourceDirName:"understanding-unleash",slug:"/understanding-unleash/unleash-overview",permalink:"/understanding-unleash/unleash-overview",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/understanding-unleash/unleash-overview.md",tags:[],version:"current",frontMatter:{title:"Unleash introductory overview"},sidebar:"documentation",previous:{title:"Understanding Unleash",permalink:"/understanding-unleash"},next:{title:"The Anatomy of Unleash",permalink:"/understanding-unleash/the-anatomy-of-unleash"}},o={},h=[{value:"Unleash Server",id:"unleash-server",level:3},{value:"System Overview",id:"system-overview",level:3}],u={toc:h};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"One of the most important aspects of the architecture to understand is that feature toggles are evaluated in client SDKs which runs as part of your application. This makes toggle evaluations super-fast (",(0,s.kt)("em",{parentName:"p"},"we're talking nano-seconds"),"), scalable and resilient against network disturbances. In order to achieve this Unleash incurs a small update-delay when you change your toggle configurations until it is fully propagated to your application (in terms of seconds and is configurable)."),(0,s.kt)("p",null,"If you want more details you can read about ",(0,s.kt)("a",{parentName:"p",href:"https://www.getunleash.io/blog/our-unique-architecture"},"our unique architecture"),"."),(0,s.kt)("h3",{id:"unleash-server"},"Unleash Server"),(0,s.kt)("p",null,"Before you can connect your application to Unleash you need a Unleash server. You have a few options available:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Unleash Open-Source"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/using-unleash/deploy/getting-started"},"Docker")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/unleash/helm-charts/"},"Helm Chart")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/operations/feature_flags.html#choose-a-client-library"},"GitLab")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Unleash Enterprise"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.getunleash.io/plans"},"Hosted Plans")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.getunleash.io/blog/self-host-your-feature-toggle-system"},"Self-hosted"))))),(0,s.kt)("h3",{id:"system-overview"},"System Overview"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A visual overview of an Unleash system as described in the following paragraph.",src:a(97298).Z,title:"System Overview",width:"1024",height:"960"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/reference/api/unleash"},(0,s.kt)("strong",{parentName:"a"},"The Unleash API"))," - The Unleash instance. This is where you create feature toggles, configure activation strategies, and parameters, etc. The service holding all feature toggles and their configurations. Configurations declare which activation strategies to use and which parameters they should get."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"The Unleash admin UI")," - The bundled web interface for interacting with the Unleash instance. Manage toggles, define strategies, look at metrics, and much more. Use the UI to ",(0,s.kt)("a",{parentName:"li",href:"/how-to/how-to-create-feature-toggles"},"create feature toggles"),", ",(0,s.kt)("a",{parentName:"li",href:"/how-to/how-to-create-and-assign-custom-project-roles"},"manage project access roles"),", ",(0,s.kt)("a",{parentName:"li",href:"/how-to/how-to-create-api-tokens"},"create API tokens"),", and more."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/reference/sdks/"},(0,s.kt)("strong",{parentName:"a"},"Unleash SDKs"))," - Unleash SDKs integrate into your applications and get feature configurations from the Unleash API. Use them to check whether features are enabled or disabled and to send metrics to the Unleash API. ",(0,s.kt)("a",{parentName:"li",href:"/reference/sdks/"},"See all our SDKs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/reference/unleash-edge"},(0,s.kt)("strong",{parentName:"a"},"The Unleash Edge"))," - The Unleash Edge sits between front-end and native applications and the Unleash API, it can also sit between server-side SDKs and the Unleash API as well. You can scale it independently of the Unleash API to handle large request rates without causing issues for the Unleash API. Edge has all endpoints for the client API, frontend API, and proxy API. ")),(0,s.kt)("p",null,"To be super fast (",(0,s.kt)("em",{parentName:"p"},"we're talking nano-seconds"),"), the ",(0,s.kt)("a",{parentName:"p",href:"/reference/sdks/"},"client SDK")," caches all feature toggles and their current configuration in memory. The activation strategies are also implemented in the SDK. This makes it really fast to check if a toggle is on or off because it is just a simple function operating on local state, without the need to poll data from the database."))}c.isMDXComponent=!0},97298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/unleash-architecture-edge-7a74e5389fede4bdfeab2318d1928a27.png"}}]);