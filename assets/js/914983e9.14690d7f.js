"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5672],{99878:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(67294),a=n(86010),i=n(18015),s=n(11614);const r="admonition_LlT9",l="admonitionHeading_tbUL",h="admonitionIcon_kALy",d="admonitionContent_S0QG";var u=n(25108);const p={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(s.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(s.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(s.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(s.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(s.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}function g(e){const{children:t,type:n,title:s,icon:g}=m(e),f=function(e){const t=c[e]??e;return p[t]||(u.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),p.info)}(n),y=s??f.label,{iconComponent:k}=f,v=g??o.createElement(k,null);return o.createElement("div",{className:(0,a.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert",`alert--${f.infimaClassName}`,r)},o.createElement("div",{className:l},o.createElement("span",{className:h},v),y),o.createElement("div",{className:d},t))}},640:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(99878);const i=e=>{let{videoUrls:t}=e;return o.createElement("article",{className:"unleash-video-container"},t?t.map((e=>o.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0}))):o.createElement(a.Z,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly."))}},74578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905)),i=n(640);const s={title:"Edge & Proxy hosting strategies"},r=void 0,l={unversionedId:"understanding-unleash/proxy-hosting",id:"understanding-unleash/proxy-hosting",title:"Edge & Proxy hosting strategies",description:"This document describes the main ways of hosting Unleash Edge (or alternatively Unleash Proxy) alongside the Unleash API and the tradeoffs between self-hosting compared to using the Frontend API that Unleash hosts for you.",source:"@site/docs/understanding-unleash/proxy-hosting.mdx",sourceDirName:"understanding-unleash",slug:"/understanding-unleash/proxy-hosting",permalink:"/understanding-unleash/proxy-hosting",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/understanding-unleash/proxy-hosting.mdx",tags:[],version:"current",frontMatter:{title:"Edge & Proxy hosting strategies"},sidebar:"documentation",previous:{title:"Managing constraints",permalink:"/understanding-unleash/managing-constraints"},next:{title:"Data collection",permalink:"/understanding-unleash/data-collection"}},h={},d=[{value:"Unleash-hosted Frontend API vs self-hosted Edge/Proxy",id:"unleash-hosted-or-self-hosted",level:2},{value:"Unleash hosts everything",id:"unleash-hosts-everything",level:2},{value:"Unleash hosts the API, you host Edge",id:"unleash-hosts-the-api-you-host-edge",level:2},{value:"On Unleash",id:"on-unleash",level:3},{value:"On Edge",id:"on-edge",level:3},{value:"On SDKs",id:"on-sdks",level:3},{value:"You host everything",id:"you-host-everything",level:2},{value:"Multi-region",id:"multi-region",level:2},{value:"Legacy: Unleash hosts the API, you host the Proxy",id:"legacy-unleash-hosts-the-api-you-host-the-proxy",level:2}],u={toc:d};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes the main ways of hosting ",(0,a.kt)("a",{parentName:"p",href:"/reference/unleash-edge"},"Unleash Edge")," (or alternatively ",(0,a.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash Proxy"),") alongside the Unleash API and the tradeoffs between self-hosting compared to using the Frontend API that Unleash hosts for you.\nWhether you're hosting Unleash yourself or have a managed solution will be a key consideration."),(0,a.kt)("admonition",{title:"Warning",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Edge is the next-gen replacement of the Unleash proxy and is recommended to be used over the proxy in most cases, with the exception of the scenario where custom strategies are being used as Edge does not support these.")),(0,a.kt)(i.Z,{videoUrls:["https://www.youtube.com/embed/6uIdF-yByWs"],mdxType:"VideoContent"}),(0,a.kt)("h2",{id:"unleash-hosted-or-self-hosted"},"Unleash-hosted Frontend API vs self-hosted Edge/Proxy"),(0,a.kt)("p",null,"Which way is right for you will depend on your setup and your needs."),(0,a.kt)("p",null,"In general, we recommend you use Edge over the Frontend API, but we do recognize that self-hosting requires some extra work on your part and that not all our customers need it."),(0,a.kt)("p",null,"If you want Unleash to host the Frontend API for you, you should be aware of the following limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This is only available to Pro and Enterprise customers who have signed up for a managed Unleash instance."),(0,a.kt)("li",{parentName:"ul"},"We allow short spikes in traffic and our adaptive infrastructure will automatically scale to your needs."),(0,a.kt)("li",{parentName:"ul"},"Please check the ",(0,a.kt)("a",{parentName:"li",href:"https://www.getunleash.io/fair-use-policy"},"Fair Use Policy")," to see the limits of the Unleash-hosted Frontend API."),(0,a.kt)("li",{parentName:"ul"},"There's no guarantee that it'll be close to your applications. This means you'll get higher response times."),(0,a.kt)("li",{parentName:"ul"},"When we host the frontend API, we will also receive whatever end user data you put in the ",(0,a.kt)("a",{parentName:"li",href:"/reference/unleash-context"},"Unleash context"),". This may or may not be an issue depending on your business requirements.")),(0,a.kt)("p",null,"Hosting Edge requires a little more setup the Unleash-hosted frontend API does, but it offers a number of benefits over both the frontend API and Proxy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can scale Edge instances horizontally and automatically."),(0,a.kt)("li",{parentName:"ul"},"There's no request cap or extra charges."),(0,a.kt)("li",{parentName:"ul"},"Edge can handle multiple sets of API tokens and sync these automatically. Compared to the legacy proxy, it is not necessary to setup single instances per token."),(0,a.kt)("li",{parentName:"ul"},"A key benefit of Edge is its ability to dynamically update new tokens while running. This greatly simplifies scaling up additional application workloads that leverage new tokens without the need to restart the instance or make large changes to infra, as was the prior requirement with the proxy."),(0,a.kt)("li",{parentName:"ul"},"You can arrange for Edge to be close to your applications, minimizing response times."),(0,a.kt)("li",{parentName:"ul"},"You have full control of all your user data. None of the data that Edge receives is ever sent to the Unleash API. This keeps ",(0,a.kt)("em",{parentName:"li"},"your")," data in ",(0,a.kt)("em",{parentName:"li"},"your")," hands."),(0,a.kt)("li",{parentName:"ul"},"You can easily add more Edge instances in different regions, as described in the ",(0,a.kt)("a",{parentName:"li",href:"#multi-region"},"multi-region")," section.")),(0,a.kt)("h2",{id:"unleash-hosts-everything"},"Unleash hosts everything"),(0,a.kt)("admonition",{title:"Availability",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This setup is only available to Pro and Enterprise customers.")),(0,a.kt)("p",null,"Unleash no longer hosts instances of the proxy, but makes the ",(0,a.kt)("a",{parentName:"p",href:"../reference/front-end-api"},"Frontend API")," available to all Pro and Enterprise customers. The API is backed by an Amazon RDS database. Your applications can connect to the frontend API from your own cloud or from other hosting solutions."),(0,a.kt)("p",null,"In order to access the frontend API you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"to create a ",(0,a.kt)("a",{parentName:"li",href:"../reference/api-tokens-and-client-keys#front-end-tokens"},"Frontend API key")," for the environment you'd like to use."),(0,a.kt)("li",{parentName:"ul"},'The Frontend API URL. This will be the your Unleash instance\'s URL followed by "/api/frontend".')),(0,a.kt)("p",null,"This is the simplest, but also most limited (by far) way to use Unleash client SDKs. In this setup, Unleash hosts both the Unleash API and the Unleash frontend API. With Unleash hosting, you'll only need to worry about the Frontend API keys and the URL to access the endpoint."),(0,a.kt)("p",null,"While this is easy to get started with, it comes with the limitations described in the ",(0,a.kt)("a",{parentName:"p",href:"#unleash-hosted-or-self-hosted"},"section on tradeoffs between self-hosted and Unleash-hosted setups"),"."),(0,a.kt)("h2",{id:"unleash-hosts-the-api-you-host-edge"},"Unleash hosts the API, you host Edge"),(0,a.kt)("admonition",{title:"Availability",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This setup is only available to Pro and Enterprise customers.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An architecture diagram of using Edge in a setup where Unleash hosts the API and you host the proxy.",src:n(6431).Z,width:"1024",height:"768"})),(0,a.kt)("p",null,"You host Edge yourself. It runs in a standalone container alongside your other applications in your cloud or hosting setup. Unleash manages the Unleash API, the admin UI, and the backing database in our AWS setup: the API and the UI run together in a Kubernetes deployment and connect to an Amazon RDS database."),(0,a.kt)("p",null,"You'll need to configure Edge and the SDKs."),(0,a.kt)("h3",{id:"on-unleash"},"On Unleash"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create one or multiple\xa0",(0,a.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#client-tokens"},"client API tokens")," scoped to the projects/environments you wish to leverage the Edge instance for. (Refer to\xa0",(0,a.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/how-to/how-to-create-api-tokens"},"how to create API tokens"),"\xa0for the steps to create one)"),(0,a.kt)("li",{parentName:"ul"},"Create frontend tokens for the frontend apps that will retrieve feature toggles from Edge")),(0,a.kt)("h3",{id:"on-edge"},"On Edge"),(0,a.kt)("p",null,"Edge will fetch feature toggles from the specified upstream Unleash instance for every client API key it has been made aware of, either during startup (recommended) or separate endpoint requests. It will then periodically sync features with upstream."),(0,a.kt)("p",null,"It will then accept frontend / backend tokens from application SDKs."),(0,a.kt)("admonition",{title:"Warning",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Make sure to use the correct token type for the use case:\nFrontend API: Frontend facing apps only, Edge returns app specific context\nClient API: For backend SDKs, Edge returns entire toggle payload for scope of token (project/environment)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start Edge & populate toggle cache")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This initial command will populate toggle cache on startup using the client token specified in the environment variable:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run -p 3063:3063 -e TOKENS='CLIENT_API_TOKEN' -e UPSTREAM_URL='UPSTREAM_URL' unleashorg/unleash-edge:v8.1 edge")),(0,a.kt)("p",null,"The following can be used to pass new tokens to Edge for different project/environment scopes:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"curl --location --request GET 'http://0.0.0.0:3063/api/client/features' \\ --header 'Content-Type: application/json' \\ --header 'Authorization: NEW_TOKEN' \\ --data-raw ''")),(0,a.kt)("h3",{id:"on-sdks"},"On SDKs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Point frontend/client SDKs to Edge endpoints",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backend SDKs:")," /api/client"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Frontend SDKs:")," /api/frontend, /api/proxy")))),(0,a.kt)("h2",{id:"you-host-everything"},"You host everything"),(0,a.kt)("admonition",{title:"Availability",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This setup is only available open-source and Enterprise customers.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An architecture diagram of using the proxy in a single-region, self-hosted setup.",src:n(41673).Z,width:"1024",height:"768"})),(0,a.kt)("p",null,"You host everything yourself. Everything runs where and how you configure it to."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To configure Edge and the SDKs, follow steps in the ",(0,a.kt)("a",{parentName:"strong",href:"#unleash-hosts-the-api-you-host-edge"},"previous section on Unleash hosts the API, you host Edge"))),(0,a.kt)("p",null,"As you might expect, doing everything yourself ",(0,a.kt)("em",{parentName:"p"},"is")," going to give you the most flexibility, but it's also going to be the most work. If you're already hosting Unleash yourself, though, this shouldn't be any more difficult than the previous section."),(0,a.kt)("p",null,"As described in the ",(0,a.kt)("a",{parentName:"p",href:"#unleash-hosted-or-self-hosted"},"section on tradeoffs between self-hosted and Unleash-hosted setups"),", running Edge yourself gives you a number of benefits."),(0,a.kt)("h2",{id:"multi-region"},"Multi-region"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An architecture diagram of using the proxy in a multi-region, self-hosted setup.",src:n(90845).Z,width:"1024",height:"768"})),(0,a.kt)("p",null,"You can also use Edge for a multi-region setup. You can run Edge in a different region to the API and still connect to the API. Because Edge runs closer to your applications it still provides you benefits in terms of quicker response times. Everything should be configured as described in the ",(0,a.kt)("a",{parentName:"p",href:"#you-host-everything"},"you host everything section")," or the ",(0,a.kt)("a",{parentName:"p",href:"#unleash-hosts-the-api-you-host-edge"},"Unleash hosts the API, you host Edge section"),". You can add as many Edge instances in as many extra regions as you want."),(0,a.kt)("h2",{id:"legacy-unleash-hosts-the-api-you-host-the-proxy"},"Legacy: Unleash hosts the API, you host the Proxy"),(0,a.kt)("admonition",{title:"Recommendation",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This approach is no longer recommended. You should use ",(0,a.kt)("a",{parentName:"p",href:"../reference/unleash-edge"},"Unleash Edge")," instead of the Unleash proxy.\nIf you are an existing Proxy user, see our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-edge/blob/main/migration-guide.md"},"Edge migration guide")," for a guide on how to migrate.\nPlease take note of the section covering features Edge does not currently support in the same linked document before planning a migration.")),(0,a.kt)("admonition",{title:"Availability",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This setup is only available to Pro and Enterprise customers.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An architecture diagram of using the proxy in a setup where Unleash hosts the API and you host the proxy.",src:n(75720).Z,width:"1024",height:"768"})),(0,a.kt)("p",null,"You host the proxy yourself. It runs in a standalone container alongside your other applications in your cloud or hosting setup. Unleash manages the Unleash API, the admin UI, and the backing database in our AWS setup: the API and the UI run together in a Kubernetes deployment and connect to an Amazon RDS database."),(0,a.kt)("p",null,"You'll need to configure the proxy and the proxy client SDKs."),(0,a.kt)("p",null,"For the proxy, configure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The Unleash API url. This is your Unleash instance URL followed by "/api".'),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys#client-tokens"},"client API token"),". (Refer to ",(0,a.kt)("a",{parentName:"li",href:"/how-to/how-to-create-api-tokens"},"how to create API tokens")," for the steps to create one.)"),(0,a.kt)("li",{parentName:"ul"},"One or more ",(0,a.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"proxy client keys"),". Refer to the ",(0,a.kt)("a",{parentName:"li",href:"../reference/unleash-proxy#configuration"},"configuration section of the proxy document")," for more details.")),(0,a.kt)("p",null,"For the proxy client SDK, configure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One of the proxy client keys that you configured for the proxy."),(0,a.kt)("li",{parentName:"ul"},"The proxy's endpoint. This will depend on where and how you're hosting the proxy, but will typically end in \"/proxy\"")),(0,a.kt)("p",null,"This setup requires a little more setup on your part than the Unleash-hosted proxy does, but it offers all the benefits described in the ",(0,a.kt)("a",{parentName:"p",href:"#unleash-hosted-or-self-hosted"},"section on tradeoffs between self-hosted and Unleash-hosted setups"),"."))}p.isMDXComponent=!0},90845:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/proxy-hosting-customer-multi-edge-e69103d60aa9175baeaca3be0902b834.svg"},41673:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/proxy-hosting-customer-single-edge-d95f22c5c3ecf1682ceb3ba55a9b09c1.svg"},6431:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/proxy-hosting-unleash-api-customer-proxy-edge-afd553bb2e711a7f9f7da2188e89760d.svg"},75720:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/proxy-hosting-unleash-api-customer-proxy-76edcbfd8aa41ef981139bddde7d9128.svg"}}]);