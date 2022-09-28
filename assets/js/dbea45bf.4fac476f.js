"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4878],{28874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={title:"Front-end API access"},i=void 0,s={unversionedId:"reference/front-end-api",id:"reference/front-end-api",title:"Front-end API access",description:"The Unleash front-end API is an experimental feature and is currently in development.",source:"@site/docs/reference/front-end-api.md",sourceDirName:"reference",slug:"/reference/front-end-api",permalink:"/reference/front-end-api",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/front-end-api.md",tags:[],version:"current",frontMatter:{title:"Front-end API access"},sidebar:"documentation",previous:{title:"Feature Toggle Variants",permalink:"/advanced/toggle_variants"},next:{title:"The Playground",permalink:"/reference/playground"}},l={},d=[{value:"Using the Unleash front-end API",id:"using-the-unleash-front-end-api",level:2},{value:"Front-end API tokens",id:"front-end-api-tokens",level:3},{value:"Cross-origin resource sharing (CORS) configuration",id:"cors",level:3},{value:"API URL",id:"api-url",level:3},{value:"API token",id:"api-token",level:3},{value:"Refresh interval for tokens",id:"refresh-interval-for-tokens",level:3}],h={toc:d};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Availability",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Unleash front-end API is an experimental feature and is currently in development.")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Unleash front-end API")," offers a simplified workflow for connecting a client-side (front-end) applications to Unleash. It provides the exact same API as the ",(0,o.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"Unleash proxy"),". The front-end API is a quick and easy way to add Unleash to single-page applications and mobile apps."),(0,o.kt)("p",null,"Compared to using the Unleash proxy, using the Unleash front-end API has both benefits and drawbacks. The benefits are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Managing client-side API tokens is easier.")," With the Unleash proxy, you need to create and manage client keys manually; with the front-end API, you manage client-side API tokens in the exact same manner as other API tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"You don't need to configure and run an Unleash proxy.")," The front-end API is part of Unleash itself and not an external process. All proxy clients will work exactly the same as they would with the Proxy.")),(0,o.kt)("p",null,"On the other hand, using the front-end API has the following drawbacks compared to using the proxy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"It can't handle a large number of requests per second.")," Because the front-end API is part of Unleash, you can't scale it horizontally the way you can scale the proxy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"It sends client details to your Unleash instance.")," Unleash only stores these details in its short-term runtime cache, but this can be a privacy issue for some use cases.")),(0,o.kt)("p",null,"These points make the Unleash front-end API best suited for development purposes and applications that don\u2019t receive a lot of traffic, such as internal dashboards. However, because the API is identical to the Unleash proxy API, you can go from one to the other at any time. As such, you can start out by using the front-end API and switch to using the proxy when you need it."),(0,o.kt)("h2",{id:"using-the-unleash-front-end-api"},"Using the Unleash front-end API"),(0,o.kt)("p",null,"When using the front-end API in an SDK, there's three things you need to configure."),(0,o.kt)("h3",{id:"front-end-api-tokens"},"Front-end API tokens"),(0,o.kt)("p",null,"As a client-side API, you should use a ",(0,o.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#front-end-tokens"},"front-end API token")," to interact with it. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"how to create API tokens")," guide for steps on how to create API tokens."),(0,o.kt)("h3",{id:"cors"},"Cross-origin resource sharing (CORS) configuration"),(0,o.kt)("p",null,"You need to allow traffic from your application domains to use the Unleash front-end API with web and hybrid mobile applications. You can update the front-end API CORS settings from the Unleash UI under ",(0,o.kt)("em",{parentName:"p"},"admin ",">"," CORS")," or by using the API."),(0,o.kt)("h3",{id:"api-url"},"API URL"),(0,o.kt)("p",null,"The client needs to point to the correct API endpoint. The front-end API is available at ",(0,o.kt)("inlineCode",{parentName:"p"},"<your-unleash-instance>/api/frontend"),"."),(0,o.kt)("h3",{id:"api-token"},"API token"),(0,o.kt)("p",null,"You can create appropriate token, with type ",(0,o.kt)("inlineCode",{parentName:"p"},"FRONTEND")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"<YOUR_UNLEASH_URL>/admin/api/create-token")," page or with a request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/admin/api-tokens"),". See our guide on ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"how to create API tokens")," for more details."),(0,o.kt)("h3",{id:"refresh-interval-for-tokens"},"Refresh interval for tokens"),(0,o.kt)("p",null,"Internally, Unleash creates a new Unleash client for each token it receives. Each client is configured with the project and environment specified in the token."),(0,o.kt)("p",null,"Each client updates its feature toggle configuration at a specified refresh interval plus a random offset between 0 and 10 seconds. By default, the refresh interval is set to 10 seconds. The random offset is used to stagger incoming requests to avoid a large number of clients all querying the database simultaneously. A new, random offset is used for every update."),(0,o.kt)("p",null,"The refresh interval is specified in milliseconds and can be set by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"FRONTEND_API_REFRESH_INTERVAL_MS")," environment variable or by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontendApi.refreshIntervalInMs")," configuration option in code."))}p.isMDXComponent=!0}}]);