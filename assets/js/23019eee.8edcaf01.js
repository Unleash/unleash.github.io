"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2373],{38118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var n=a(87462),i=(a(67294),a(3905));const s={id:"api_access",title:"How to use the Admin API"},o=void 0,l={unversionedId:"advanced/api_access",id:"advanced/api_access",title:"How to use the Admin API",description:"It is possible to integrate directly with the Admin API. In this guide we will explain all the steps to set it up.",source:"@site/docs/advanced/api_access.md",sourceDirName:"advanced",slug:"/advanced/api_access",permalink:"/advanced/api_access",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/advanced/api_access.md",tags:[],version:"current",frontMatter:{id:"api_access",title:"How to use the Admin API"},sidebar:"documentation",previous:{title:"How to create API Tokens",permalink:"/user_guide/api-token"},next:{title:"How to enable OpenAPI and the Swagger UI",permalink:"/how-to/how-to-enable-openapi"}},p={},r=[{value:"Step 1: Create API token",id:"step-1-create-api-token",level:2},{value:"Step 2: Use Admin API",id:"step-2-use-admin-api",level:2},{value:"API overview",id:"api-overview",level:2}],d={toc:r};function c(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is possible to integrate directly with the Admin API. In this guide we will explain all the steps to set it up."),(0,i.kt)("h2",{id:"step-1-create-api-token"},"Step 1: Create API token"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"../user_guide/api-token"},(0,i.kt)("em",{parentName:"a"},"how to create API tokens"))," on how to create an API token. You'll need a token with ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin")," level access for this to work."),(0,i.kt)("p",null,"Please note that it may take up to 60 seconds for the new key to propagate to all Unleash instances due to eager caching."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'If you need an API token to use in a client SDK you should create a "client token" as these have fewer access rights.')),(0,i.kt)("h2",{id:"step-2-use-admin-api"},"Step 2: Use Admin API"),(0,i.kt)("p",null,"Now that you have an access token with admin privileges we can use that to perform changes in our Unleash instance."),(0,i.kt)("p",null,"In the example below we will use the ",(0,i.kt)("a",{parentName:"p",href:"../api/admin/features"},"Unleash Admin API")," to enable the \u201cDemo\u201d feature toggle using curl."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" \\\n     -H "Authorization: admintoken" \\\n     https://app.unleash-hosted.com/demo/api/admin/features/Demo/toggle/on\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Great success!")," We have now enabled the feature toggle. We can also verify that it was actually changed by the API user by navigating to the Event log (history) for this feature toggle."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A feature toggle&#39;s event log showing that it was last updated by &quot;admin-api&quot;.",src:a(51975).Z,width:"1366",height:"675"})),(0,i.kt)("h2",{id:"api-overview"},"API overview"),(0,i.kt)("p",null,"You can find the full documentation on everything the Unleash API supports in the ",(0,i.kt)("a",{parentName:"p",href:"../api/admin/features"},"Unleash API documentation"),"."))}c.isMDXComponent=!0},51975:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api_access_history-2874359bc41a892ba9fb594103ff5503.png"}}]);