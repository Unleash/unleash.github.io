"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[77603],{9123:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>y});var a=i(87462),s=(i(67294),i(3905)),n=i(80334),r=(i(11032),i(46062)),o=i(57138),l=i(21439),p=(i(9531),i(15761),i(73418)),c=i(92414),d=i(30433);const m={id:"register-client-application",title:"Register a client SDK",description:"Register a client SDK with Unleash. SDKs call this endpoint on startup to tell Unleash about their existence. Used to track custom strategies in use as well as SDK versions.",sidebar_label:"Register a client SDK",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Client"],description:"Register a client SDK with Unleash. SDKs call this endpoint on startup to tell Unleash about their existence. Used to track custom strategies in use as well as SDK versions.",operationId:"registerClientApplication",requestBody:{description:"clientApplicationSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","interval","started","strategies"],description:"A client application is an instance of one of our SDKs",properties:{appName:{description:"An identifier for the app that uses the sdk, should be static across SDK restarts",type:"string",example:"example-app"},instanceId:{description:"A unique identifier identifying the instance of the application running the SDK. Often changes based on execution environment. For instance: two pods in Kubernetes will have two different instanceIds",type:"string",example:"b77f3d13-5f48-4a7b-a3f4-a449b97ce43a"},sdkVersion:{type:"string",description:'An SDK version identifier. Usually formatted as "unleash-client-<language>:<version>"',example:"unleash-client-java:7.0.0"},environment:{description:"The SDK's configured 'environment' property. Deprecated. This property  does **not** control which Unleash environment the SDK gets toggles for. To control Unleash environments, use the SDKs API key.",deprecated:!0,type:"string",example:"development"},interval:{type:"number",description:"How often (in seconds) does the client refresh its toggles",example:10,minimum:0},started:{description:"Either an RFC-3339 timestamp or a unix timestamp in seconds",oneOf:[{type:"string",format:"date-time"},{type:"number"}],example:"2023-06-13T16:35:00.000Z"},strategies:{description:"Which strategies the SDKs runtime knows about",type:"array",items:{type:"string"},example:["default","gradualRollout","remoteAddress"]}},title:"clientApplicationSchema"}}}},responses:{202:{description:"This response has no body."}},method:"post",path:"/api/client/register",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"example-app",instanceId:"b77f3d13-5f48-4a7b-a3f4-a449b97ce43a",sdkVersion:"unleash-client-java:7.0.0",interval:10,started:"2023-11-28T19:42:04.032Z",strategies:["default","gradualRollout","remoteAddress"]},info:{title:"Unleash API",version:"5.6.10"},postman:{name:"Register a client SDK",description:{content:"Register a client SDK with Unleash. SDKs call this endpoint on startup to tell Unleash about their existence. Used to track custom strategies in use as well as SDK versions.",type:"text/plain"},url:{path:["api","client","register"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,h={unversionedId:"reference/api/unleash/register-client-application",id:"reference/api/unleash/register-client-application",title:"Register a client SDK",description:"Register a client SDK with Unleash. SDKs call this endpoint on startup to tell Unleash about their existence. Used to track custom strategies in use as well as SDK versions.",source:"@site/docs/reference/api/unleash/register-client-application.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/register-client-application",permalink:"/reference/api/unleash/register-client-application",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"register-client-application",title:"Register a client SDK",description:"Register a client SDK with Unleash. SDKs call this endpoint on startup to tell Unleash about their existence. Used to track custom strategies in use as well as SDK versions.",sidebar_label:"Register a client SDK",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Client"],description:"Register a client SDK with Unleash. SDKs call this endpoint on startup to tell Unleash about their existence. Used to track custom strategies in use as well as SDK versions.",operationId:"registerClientApplication",requestBody:{description:"clientApplicationSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","interval","started","strategies"],description:"A client application is an instance of one of our SDKs",properties:{appName:{description:"An identifier for the app that uses the sdk, should be static across SDK restarts",type:"string",example:"example-app"},instanceId:{description:"A unique identifier identifying the instance of the application running the SDK. Often changes based on execution environment. For instance: two pods in Kubernetes will have two different instanceIds",type:"string",example:"b77f3d13-5f48-4a7b-a3f4-a449b97ce43a"},sdkVersion:{type:"string",description:'An SDK version identifier. Usually formatted as "unleash-client-<language>:<version>"',example:"unleash-client-java:7.0.0"},environment:{description:"The SDK's configured 'environment' property. Deprecated. This property  does **not** control which Unleash environment the SDK gets toggles for. To control Unleash environments, use the SDKs API key.",deprecated:!0,type:"string",example:"development"},interval:{type:"number",description:"How often (in seconds) does the client refresh its toggles",example:10,minimum:0},started:{description:"Either an RFC-3339 timestamp or a unix timestamp in seconds",oneOf:[{type:"string",format:"date-time"},{type:"number"}],example:"2023-06-13T16:35:00.000Z"},strategies:{description:"Which strategies the SDKs runtime knows about",type:"array",items:{type:"string"},example:["default","gradualRollout","remoteAddress"]}},title:"clientApplicationSchema"}}}},responses:{202:{description:"This response has no body."}},method:"post",path:"/api/client/register",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"example-app",instanceId:"b77f3d13-5f48-4a7b-a3f4-a449b97ce43a",sdkVersion:"unleash-client-java:7.0.0",interval:10,started:"2023-11-28T19:42:04.032Z",strategies:["default","gradualRollout","remoteAddress"]},info:{title:"Unleash API",version:"5.6.10"},postman:{name:"Register a client SDK",description:{content:"Register a client SDK with Unleash. SDKs call this endpoint on startup to tell Unleash about their existence. Used to track custom strategies in use as well as SDK versions.",type:"text/plain"},url:{path:["api","client","register"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Register client usage metrics",permalink:"/reference/api/unleash/register-client-metrics"},next:{title:"Context",permalink:"/reference/api/unleash/context"}},g={},y=[{value:"Request",id:"request",level:2}],f={toc:y};function b(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Register a client SDK"),(0,s.kt)(r.Z,{method:"post",path:"/api/client/register",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Register a client SDK with Unleash. SDKs call this endpoint on startup to tell Unleash about their existence. Used to track custom strategies in use as well as SDK versions."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"clientApplicationSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"appName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"An identifier for the app that uses the sdk, should be static across SDK restarts",type:"string",example:"example-app"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"instanceId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A unique identifier identifying the instance of the application running the SDK. Often changes based on execution environment. For instance: two pods in Kubernetes will have two different instanceIds",type:"string",example:"b77f3d13-5f48-4a7b-a3f4-a449b97ce43a"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'An SDK version identifier. Usually formatted as "unleash-client-<language>:<version>"',example:"unleash-client-java:7.0.0"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The SDK's configured 'environment' property. Deprecated. This property  does **not** control which Unleash environment the SDK gets toggles for. To control Unleash environments, use the SDKs API key.",deprecated:!0,type:"string",example:"development"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"interval",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"How often (in seconds) does the client refresh its toggles",example:10,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"started"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Either an RFC-3339 timestamp or a unix timestamp in seconds")),(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," date-time")))),(0,s.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"number"))))))))),(0,s.kt)(p.Z,{collapsible:!1,name:"strategies",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which strategies the SDKs runtime knows about",type:"array",items:{type:"string"},example:["default","gradualRollout","remoteAddress"]},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null))))))}b.isMDXComponent=!0}}]);