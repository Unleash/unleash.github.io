"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6267],{5855:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>v,frontMatter:()=>u,metadata:()=>f,toc:()=>g});var n=i(87462),o=(i(67294),i(3905)),a=i(80334),s=(i(11032),i(46062)),l=i(57138),r=i(21439),c=(i(9531),i(15761)),p=i(73418),m=i(92414),d=i(11666);const u={id:"get-telemetry-settings",title:"Get telemetry settings",description:"Provides the configured settings for [telemetry information collection](https://docs.getunleash.io/topics/data-collection)",sidebar_label:"Get telemetry settings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Telemetry"],description:"Provides the configured settings for [telemetry information collection](https://docs.getunleash.io/topics/data-collection)",operationId:"getTelemetrySettings",responses:{200:{description:"telemetrySettingsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["versionInfoCollectionEnabled","featureInfoCollectionEnabled"],description:"Contains information about which settings are configured for version info collection and feature usage collection.",properties:{versionInfoCollectionEnabled:{type:"boolean",description:"Whether collection of version info is enabled/active.",example:!0},featureInfoCollectionEnabled:{type:"boolean",description:"Whether collection of feature usage metrics is enabled/active.",example:!0}},title:"telemetrySettingsSchema"}}}}},method:"get",path:"/api/admin/telemetry/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Get telemetry settings",description:{content:"Provides the configured settings for [telemetry information collection](https://docs.getunleash.io/topics/data-collection)",type:"text/plain"},url:{path:["api","admin","telemetry","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,f={unversionedId:"reference/api/unleash/get-telemetry-settings",id:"reference/api/unleash/get-telemetry-settings",title:"Get telemetry settings",description:"Provides the configured settings for [telemetry information collection](https://docs.getunleash.io/topics/data-collection)",source:"@site/docs/reference/api/unleash/get-telemetry-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-telemetry-settings",permalink:"/reference/api/unleash/get-telemetry-settings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-telemetry-settings",title:"Get telemetry settings",description:"Provides the configured settings for [telemetry information collection](https://docs.getunleash.io/topics/data-collection)",sidebar_label:"Get telemetry settings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Telemetry"],description:"Provides the configured settings for [telemetry information collection](https://docs.getunleash.io/topics/data-collection)",operationId:"getTelemetrySettings",responses:{200:{description:"telemetrySettingsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["versionInfoCollectionEnabled","featureInfoCollectionEnabled"],description:"Contains information about which settings are configured for version info collection and feature usage collection.",properties:{versionInfoCollectionEnabled:{type:"boolean",description:"Whether collection of version info is enabled/active.",example:!0},featureInfoCollectionEnabled:{type:"boolean",description:"Whether collection of feature usage metrics is enabled/active.",example:!0}},title:"telemetrySettingsSchema"}}}}},method:"get",path:"/api/admin/telemetry/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Get telemetry settings",description:{content:"Provides the configured settings for [telemetry information collection](https://docs.getunleash.io/topics/data-collection)",type:"text/plain"},url:{path:["api","admin","telemetry","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Telemetry",permalink:"/reference/api/unleash/telemetry"},next:{title:"Users",permalink:"/reference/api/unleash/users"}},y={},g=[{value:"Request",id:"request",level:2}],b={toc:g};function v(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{className:"openapi__heading"},"Get telemetry settings"),(0,o.kt)(s.Z,{method:"get",path:"/api/admin/telemetry/settings",mdxType:"MethodEndpoint"}),(0,o.kt)(l.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,o.kt)("p",null,"Provides the configured settings for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/topics/data-collection"},"telemetry information collection")),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)(a.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"telemetrySettingsSchema")),(0,o.kt)("div",null,(0,o.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!1,name:"versionInfoCollectionEnabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether collection of version info is enabled/active.",example:!0},mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"featureInfoCollectionEnabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether collection of feature usage metrics is enabled/active.",example:!0},mdxType:"SchemaItem"})))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "versionInfoCollectionEnabled": true,\n  "featureInfoCollectionEnabled": true\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);