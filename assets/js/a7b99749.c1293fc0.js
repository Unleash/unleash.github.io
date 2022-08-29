"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7326],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>c});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=h(o),c=r,d=y["".concat(l,".").concat(c)]||y[c]||p[c]||a;return o?n.createElement(d,s(s({ref:t},u),{},{components:o})):n.createElement(d,s({ref:t},u))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var h=2;h<a;h++)s[h]=o[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},17743:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var n=o(87462),r=(o(67294),o(3905));const a={title:"Proxy hosting strategies"},s=void 0,i={unversionedId:"topics/proxy-hosting",id:"topics/proxy-hosting",title:"Proxy hosting strategies",description:"Because the Unleash proxy is a separate piece of the Unleash architecture and because it should sit close to your application, there are numerous ways of hosting it. Another important distinction is whether you're hosting Unleash yourself or you have a managed solution.",source:"@site/docs/topics/proxy-hosting.mdx",sourceDirName:"topics",slug:"/topics/proxy-hosting",permalink:"/topics/proxy-hosting",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/topics/proxy-hosting.mdx",tags:[],version:"current",frontMatter:{title:"Proxy hosting strategies"},sidebar:"documentation",previous:{title:"A/B and multivariate testing",permalink:"/topics/a-b-testing"}},l={},h=[{value:"Unleash-hosted proxy vs self-hosted proxy",id:"unleash-hosted-or-self-hosted",level:2},{value:"Unleash hosts everything",id:"unleash-hosts-everything",level:2},{value:"Unleash hosts the API, you host the proxy",id:"unleash-hosts-the-api-you-host-the-proxy",level:2},{value:"You host everything",id:"you-host-everything",level:2},{value:"Multi-region",id:"multi-region",level:2}],u={toc:h};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Because the ",(0,r.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"Unleash proxy")," is a separate piece of the Unleash architecture and because it should sit close to your application, there are numerous ways of hosting it. Another important distinction is whether you're hosting Unleash yourself or you have a managed solution."),(0,r.kt)("p",null,"This document describes the three main ways of hosting the proxy alongside the Unleash API and the tradeoffs between hosting the proxy yourself and having Unleash host it for you."),(0,r.kt)("h2",{id:"unleash-hosted-or-self-hosted"},"Unleash-hosted proxy vs self-hosted proxy"),(0,r.kt)("p",null,"Which way is right for you will depend on your setup and your needs. In general, we recommend that you host the proxy yourself, but we do recognize that self-hosting requires some extra work on your part and that not all our customers need it."),(0,r.kt)("p",null,"If you want Unleash to host the proxy for you, you should be aware of the following limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is only available to Pro and Enterprise customers who have signed up for a managed Unleash instance."),(0,r.kt)("li",{parentName:"ul"},'Pro customers will get a total of two (2) proxies: One for the "development" environment and one for the "production" environment.'),(0,r.kt)("li",{parentName:"ul"},"We do allow short spikes in traffic and our adaptive infrastructure will automatically scale your needs. "),(0,r.kt)("li",{parentName:"ul"},"If you go above an average of 10 requests per second, then you'll be charged extra for the hosted proxy. "),(0,r.kt)("li",{parentName:"ul"},"There's no guarantee that it'll be close to your applications. This means you'll get higher response times."),(0,r.kt)("li",{parentName:"ul"},"When we host the proxy, we will also receive whatever end user data you put in the ",(0,r.kt)("a",{parentName:"li",href:"/user_guide/unleash_context"},"Unleash context"),". This may or may not be an issue depending on your business requirements.")),(0,r.kt)("p",null,"Hosting the proxy yourself requires a little more setup on your part than the Unleash-hosted proxy does, but it offers a number of benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can scale the proxy horizontally and automatically."),(0,r.kt)("li",{parentName:"ul"},"There's no request cap or extra charges."),(0,r.kt)("li",{parentName:"ul"},"You can host as many proxies as you want for as many different environments as you want."),(0,r.kt)("li",{parentName:"ul"},"You can arrange for the proxy to be close to your applications, minimizing response times."),(0,r.kt)("li",{parentName:"ul"},"You have full control of all your user data. None of the data that the proxy receives is ever sent to the Unleash API. This keeps ",(0,r.kt)("em",{parentName:"li"},"your")," data in ",(0,r.kt)("em",{parentName:"li"},"your")," hands."),(0,r.kt)("li",{parentName:"ul"},"You can easily add more proxies in different regions, as described in the ",(0,r.kt)("a",{parentName:"li",href:"#multi-region"},"multi-region")," section.")),(0,r.kt)("h2",{id:"unleash-hosts-everything"},"Unleash hosts everything"),(0,r.kt)("admonition",{title:"Availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This setup is only available to Pro and Enterprise customers.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An architecture diagram of using the proxy in a setup where Unleash hosts both the API and the proxy.",src:o(61660).Z,width:"1024",height:"768"})),(0,r.kt)("p",null,"When Unleash hosts the proxy, it'll run alongside the Unleash API and the admin UI within Unleash's Kubernetes setup in AWS. The API is backed by an Amazon RDS database. Your applications can connect to the proxy from your own cloud or other hosting solution. You'll need to configure your proxy SDKs with the following details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One of the ",(0,r.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"proxy's client keys"),". Unleash will provide you with the actual keys."),(0,r.kt)("li",{parentName:"ul"},'The proxy\'s endpoint. This will be the your Unleash instance\'s URL followed by "/api/proxy/development" or "/api/proxy/production" (depending on which environment you want to use).')),(0,r.kt)("p",null,"This is the simplest, but also most limited (by far) way to host the proxy. In this setup, Unleash hosts both the Unleash API and the Unleash proxy. With Unleash hosting the proxy, you'll only need to worry about the client keys and the URL the proxy is hosted at."),(0,r.kt)("p",null,"While this is easy to get started with, it comes with the limitations described in the ",(0,r.kt)("a",{parentName:"p",href:"#unleash-hosted-or-self-hosted"},"section on tradeoffs between self-hosted and Unleash-hosted setups"),"."),(0,r.kt)("h2",{id:"unleash-hosts-the-api-you-host-the-proxy"},"Unleash hosts the API, you host the proxy"),(0,r.kt)("admonition",{title:"Availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This setup is only available to Pro and Enterprise customers.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An architecture diagram of using the proxy in a setup where Unleash hosts the API and you host the proxy.",src:o(75720).Z,width:"1024",height:"768"})),(0,r.kt)("p",null,"You host the proxy yourself. It runs in a standalone container alongside your other applications in your cloud or hosting setup. Unleash manages the Unleash API, the admin UI, and the backing database in our AWS setup: the API and the UI run together in a Kubernetes deployment and connect to an Amazon RDS database."),(0,r.kt)("p",null,"You'll need to configure the proxy and the proxy client SDKs."),(0,r.kt)("p",null,"For the proxy, configure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The Unleash API url. This is your Unleash instance URL followed by "/api".'),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys#client-tokens"},"client API token"),". (Refer to ",(0,r.kt)("a",{parentName:"li",href:"/user_guide/api-token"},"how to create API tokens")," for the steps to create one.)"),(0,r.kt)("li",{parentName:"ul"},"One or more ",(0,r.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"proxy client keys"),". Refer to the ",(0,r.kt)("a",{parentName:"li",href:"../sdks/unleash-proxy#configuration"},"configuration section of the proxy document")," for more details.")),(0,r.kt)("p",null,"For the proxy client SDK, configure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One of the proxy client keys that you configured for the proxy."),(0,r.kt)("li",{parentName:"ul"},"The proxy's endpoint. This will depend on where and how you're hosting the proxy, but will typically end in \"/proxy\"")),(0,r.kt)("p",null,"This setup requires a little more setup on your part than the Unleash-hosted proxy does, but it offers all the benefits described in the ",(0,r.kt)("a",{parentName:"p",href:"#unleash-hosted-or-self-hosted"},"section on tradeoffs between self-hosted and Unleash-hosted setups"),"."),(0,r.kt)("h2",{id:"you-host-everything"},"You host everything"),(0,r.kt)("admonition",{title:"Availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This setup is only available open-source and Enterprise customers.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An architecture diagram of using the proxy in a single-region, self-hosted setup.",src:o(29688).Z,width:"1024",height:"768"})),(0,r.kt)("p",null,"You host everything yourself. Everything runs where and how you configure it to."),(0,r.kt)("p",null,"You'll need to configure the proxy and the proxy client SDKs."),(0,r.kt)("p",null,"For the proxy, configure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The Unleash API url. This is your Unleash instance URL followed by "/api".'),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys#client-tokens"},"client API token"),". (Refer to ",(0,r.kt)("a",{parentName:"li",href:"/user_guide/api-token"},"how to create API tokens")," for the steps to create one.)"),(0,r.kt)("li",{parentName:"ul"},"One or more ",(0,r.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"proxy client keys"),". Refer to the ",(0,r.kt)("a",{parentName:"li",href:"../sdks/unleash-proxy#configuration"},"configuration section of the proxy document")," for more details.")),(0,r.kt)("p",null,"For the proxy client SDK, configure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One of the proxy client keys that you configured for the proxy."),(0,r.kt)("li",{parentName:"ul"},"The proxy's endpoint. This will depend on where and how you're hosting the proxy, but will typically end in \"/proxy\"")),(0,r.kt)("p",null,"As you might expect, doing everything yourself ",(0,r.kt)("em",{parentName:"p"},"is")," going to give you the most flexibility, but it's also going to be the most work. If you're already hosting Unleash yourself, though, this shouldn't be any more difficult than the previous section."),(0,r.kt)("p",null,"As described in the ",(0,r.kt)("a",{parentName:"p",href:"#unleash-hosted-or-self-hosted"},"section on tradeoffs between self-hosted and Unleash-hosted setups"),", running the proxy yourself gives you a number of benefits."),(0,r.kt)("h2",{id:"multi-region"},"Multi-region"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An architecture diagram of using the proxy in a multi-region, self-hosted setup.",src:o(23053).Z,width:"1024",height:"768"})),(0,r.kt)("p",null,"You can also use the proxy for a multi-region setup. You can run a proxy in a different region to the API and still connect to the API. Because the proxy runs closer to your applications it still provides you benefits in terms of quicker response times. Everything should be configured as described in the ",(0,r.kt)("a",{parentName:"p",href:"#you-host-everything"},"you host everything section")," or the ",(0,r.kt)("a",{parentName:"p",href:"#unleash-hosts-the-api-you-host-the-proxy"},"Unleash hosts the API, you host the proxy section"),". You can add as many extra proxies in as many extra regions as you want."))}p.isMDXComponent=!0},61660:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proxy-hosting-all-unleash-90d7a6394d6a85d74ab96833e6ccb9bd.svg"},23053:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proxy-hosting-customer-multi-c1c4460d17d7fa6e4f61e43c62b9b949.svg"},29688:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proxy-hosting-customer-single-a95f3e3531b5e397393313f5f5e7e6a8.svg"},75720:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proxy-hosting-unleash-api-customer-proxy-76edcbfd8aa41ef981139bddde7d9128.svg"}}]);