"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7326],{75618:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var n=o(87462),a=(o(67294),o(3905));const s={title:"Proxy hosting strategies"},r=void 0,i={unversionedId:"topics/proxy-hosting",id:"topics/proxy-hosting",title:"Proxy hosting strategies",description:"Because the Unleash proxy is a separate piece of the Unleash architecture and because it should sit close to your application, there are numerous ways of hosting it. Another important distinction is whether you're hosting Unleash yourself or you have a managed solution.",source:"@site/docs/topics/proxy-hosting.mdx",sourceDirName:"topics",slug:"/topics/proxy-hosting",permalink:"/topics/proxy-hosting",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/topics/proxy-hosting.mdx",tags:[],version:"current",frontMatter:{title:"Proxy hosting strategies"},sidebar:"documentation",previous:{title:"Managing constraints",permalink:"/topics/managing-constraints"},next:{title:"Data collection",permalink:"/topics/data-collection"}},l={},h=[{value:"Unleash-hosted Frontend API vs self-hosted proxy",id:"unleash-hosted-or-self-hosted",level:2},{value:"Unleash hosts everything",id:"unleash-hosts-everything",level:2},{value:"Unleash hosts the API, you host the proxy",id:"unleash-hosts-the-api-you-host-the-proxy",level:2},{value:"You host everything",id:"you-host-everything",level:2},{value:"Multi-region",id:"multi-region",level:2}],u={toc:h};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Because the ",(0,a.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash proxy")," is a separate piece of the Unleash architecture and because it should sit close to your application, there are numerous ways of hosting it. Another important distinction is whether you're hosting Unleash yourself or you have a managed solution."),(0,a.kt)("p",null,"This document describes the two main ways of hosting the proxy alongside the Unleash API and the tradeoffs between hosting the proxy yourself and using the Frontend API that Unleash hosts for you."),(0,a.kt)("h2",{id:"unleash-hosted-or-self-hosted"},"Unleash-hosted Frontend API vs self-hosted proxy"),(0,a.kt)("p",null,"Which way is right for you will depend on your setup and your needs. In general, we recommend that you host the proxy yourself, but we do recognize that self-hosting requires some extra work on your part and that not all our customers need it."),(0,a.kt)("p",null,"If you want Unleash to host the Frontend API for you, you should be aware of the following limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This is only available to Pro and Enterprise customers who have signed up for a managed Unleash instance."),(0,a.kt)("li",{parentName:"ul"},"We allow short spikes in traffic and our adaptive infrastructure will automatically scale to your needs."),(0,a.kt)("li",{parentName:"ul"},"Please check the ",(0,a.kt)("a",{parentName:"li",href:"https://www.getunleash.io/fair-use-policy"},"Fair Use Policy")," to see the limits of the Unleash-hosted Frontend API."),(0,a.kt)("li",{parentName:"ul"},"There's no guarantee that it'll be close to your applications. This means you'll get higher response times."),(0,a.kt)("li",{parentName:"ul"},"When we host the frontend API, we will also receive whatever end user data you put in the ",(0,a.kt)("a",{parentName:"li",href:"/reference/unleash-context"},"Unleash context"),". This may or may not be an issue depending on your business requirements.")),(0,a.kt)("p",null,"Hosting the proxy yourself requires a little more setup on your part than the Unleash-hosted proxy does, but it offers a number of benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can scale the proxy horizontally and automatically."),(0,a.kt)("li",{parentName:"ul"},"There's no request cap or extra charges."),(0,a.kt)("li",{parentName:"ul"},"You can host as many proxies as you want for as many different environments as you want."),(0,a.kt)("li",{parentName:"ul"},"You can arrange for the proxy to be close to your applications, minimizing response times."),(0,a.kt)("li",{parentName:"ul"},"You have full control of all your user data. None of the data that the proxy receives is ever sent to the Unleash API. This keeps ",(0,a.kt)("em",{parentName:"li"},"your")," data in ",(0,a.kt)("em",{parentName:"li"},"your")," hands."),(0,a.kt)("li",{parentName:"ul"},"You can easily add more proxies in different regions, as described in the ",(0,a.kt)("a",{parentName:"li",href:"#multi-region"},"multi-region")," section."),(0,a.kt)("li",{parentName:"ul"},"If you're having scaling challenges, it could be worth it to have a look at ",(0,a.kt)("a",{parentName:"li",href:"../reference/unleash-edge"},"Unleash Edge"))),(0,a.kt)("h2",{id:"unleash-hosts-everything"},"Unleash hosts everything"),(0,a.kt)("admonition",{title:"Availability",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This setup is only available to Pro and Enterprise customers.")),(0,a.kt)("p",null,"Unleash no longer hosts instances of the proxy, but makes the ",(0,a.kt)("a",{parentName:"p",href:"../reference/front-end-api"},"Frontend API")," available to all Pro and Enterprise customers. The API is backed by an Amazon RDS database. Your applications can connect to the frontend API from your own cloud or from other hosting solutions."),(0,a.kt)("p",null,"In order to access the frontend API you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"to create a ",(0,a.kt)("a",{parentName:"li",href:"../reference/api-tokens-and-client-keys#front-end-tokens"},"Frontend API key")," for the environment you'd like to use."),(0,a.kt)("li",{parentName:"ul"},'The Frontend API URL. This will be the your Unleash instance\'s URL followed by "/api/frontend".')),(0,a.kt)("p",null,"This is the simplest, but also most limited (by far) way to use Unleash client SDKs. In this setup, Unleash hosts both the Unleash API and the Unleash frontend API. With Unleash hosting, you'll only need to worry about the Frontend API keys and the URL to access the endpoint."),(0,a.kt)("p",null,"While this is easy to get started with, it comes with the limitations described in the ",(0,a.kt)("a",{parentName:"p",href:"#unleash-hosted-or-self-hosted"},"section on tradeoffs between self-hosted and Unleash-hosted setups"),"."),(0,a.kt)("h2",{id:"unleash-hosts-the-api-you-host-the-proxy"},"Unleash hosts the API, you host the proxy"),(0,a.kt)("admonition",{title:"Recommendation",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We recommend you use ",(0,a.kt)("a",{parentName:"p",href:"../reference/unleash-edge"},"Unleash Edge")," instead of the Unleash proxy. See our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-edge/blob/main/migration-guide.md"},"Edge migration guide")," for a guide on how to migrate")),(0,a.kt)("p",null,"This setup is only available to Pro and Enterprise customers."),(0,a.kt)("p",null,":::"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An architecture diagram of using the proxy in a setup where Unleash hosts the API and you host the proxy.",src:o(75720).Z,width:"1024",height:"768"})),(0,a.kt)("p",null,"You host the proxy yourself. It runs in a standalone container alongside your other applications in your cloud or hosting setup. Unleash manages the Unleash API, the admin UI, and the backing database in our AWS setup: the API and the UI run together in a Kubernetes deployment and connect to an Amazon RDS database."),(0,a.kt)("p",null,"You'll need to configure the proxy and the proxy client SDKs."),(0,a.kt)("p",null,"For the proxy, configure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The Unleash API url. This is your Unleash instance URL followed by "/api".'),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys#client-tokens"},"client API token"),". (Refer to ",(0,a.kt)("a",{parentName:"li",href:"/how-to/how-to-create-api-tokens"},"how to create API tokens")," for the steps to create one.)"),(0,a.kt)("li",{parentName:"ul"},"One or more ",(0,a.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"proxy client keys"),". Refer to the ",(0,a.kt)("a",{parentName:"li",href:"../reference/unleash-proxy#configuration"},"configuration section of the proxy document")," for more details.")),(0,a.kt)("p",null,"For the proxy client SDK, configure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One of the proxy client keys that you configured for the proxy."),(0,a.kt)("li",{parentName:"ul"},"The proxy's endpoint. This will depend on where and how you're hosting the proxy, but will typically end in \"/proxy\"")),(0,a.kt)("p",null,"This setup requires a little more setup on your part than the Unleash-hosted proxy does, but it offers all the benefits described in the ",(0,a.kt)("a",{parentName:"p",href:"#unleash-hosted-or-self-hosted"},"section on tradeoffs between self-hosted and Unleash-hosted setups"),"."),(0,a.kt)("h2",{id:"you-host-everything"},"You host everything"),(0,a.kt)("admonition",{title:"Availability",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This setup is only available open-source and Enterprise customers.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An architecture diagram of using the proxy in a single-region, self-hosted setup.",src:o(29688).Z,width:"1024",height:"768"})),(0,a.kt)("p",null,"You host everything yourself. Everything runs where and how you configure it to."),(0,a.kt)("p",null,"You'll need to configure the proxy and the proxy client SDKs."),(0,a.kt)("p",null,"For the proxy, configure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The Unleash API url. This is your Unleash instance URL followed by "/api".'),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys#client-tokens"},"client API token"),". (Refer to ",(0,a.kt)("a",{parentName:"li",href:"/how-to/how-to-create-api-tokens"},"how to create API tokens")," for the steps to create one.)"),(0,a.kt)("li",{parentName:"ul"},"One or more ",(0,a.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"proxy client keys"),". Refer to the ",(0,a.kt)("a",{parentName:"li",href:"../reference/unleash-proxy#configuration"},"configuration section of the proxy document")," for more details.")),(0,a.kt)("p",null,"For the proxy client SDK, configure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One of the proxy client keys that you configured for the proxy."),(0,a.kt)("li",{parentName:"ul"},"The proxy's endpoint. This will depend on where and how you're hosting the proxy, but will typically end in \"/proxy\"")),(0,a.kt)("p",null,"As you might expect, doing everything yourself ",(0,a.kt)("em",{parentName:"p"},"is")," going to give you the most flexibility, but it's also going to be the most work. If you're already hosting Unleash yourself, though, this shouldn't be any more difficult than the previous section."),(0,a.kt)("p",null,"As described in the ",(0,a.kt)("a",{parentName:"p",href:"#unleash-hosted-or-self-hosted"},"section on tradeoffs between self-hosted and Unleash-hosted setups"),", running the proxy yourself gives you a number of benefits."),(0,a.kt)("h2",{id:"multi-region"},"Multi-region"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An architecture diagram of using the proxy in a multi-region, self-hosted setup.",src:o(23053).Z,width:"1024",height:"768"})),(0,a.kt)("p",null,"You can also use the proxy for a multi-region setup. You can run a proxy in a different region to the API and still connect to the API. Because the proxy runs closer to your applications it still provides you benefits in terms of quicker response times. Everything should be configured as described in the ",(0,a.kt)("a",{parentName:"p",href:"#you-host-everything"},"you host everything section")," or the ",(0,a.kt)("a",{parentName:"p",href:"#unleash-hosts-the-api-you-host-the-proxy"},"Unleash hosts the API, you host the proxy section"),". You can add as many extra proxies in as many extra regions as you want."))}p.isMDXComponent=!0},23053:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proxy-hosting-customer-multi-c1c4460d17d7fa6e4f61e43c62b9b949.svg"},29688:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proxy-hosting-customer-single-a95f3e3531b5e397393313f5f5e7e6a8.svg"},75720:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proxy-hosting-unleash-api-customer-proxy-76edcbfd8aa41ef981139bddde7d9128.svg"}}]);