"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3089],{37504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>v,frontMatter:()=>h,metadata:()=>y,toc:()=>g});var n=a(87462),o=(a(67294),a(3905)),s=a(80334),i=(a(11032),a(46062)),r=a(57138),d=a(21439),p=(a(9531),a(15761)),l=a(73418),m=a(92414),c=a(11666);const h={id:"create-addon",title:"Create a new addon",description:"Create an addon instance. The addon must use one of the providers available on this Unleash instance.",sidebar_label:"Create a new addon",hide_title:!0,hide_table_of_contents:!0,api:{description:"Create an addon instance. The addon must use one of the providers available on this Unleash instance.",tags:["Addons"],operationId:"createAddon",requestBody:{description:"addonCreateUpdateSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],description:"Data required to create or update an [Unleash addon](https://docs.getunleash.io/reference/addons) instance.",properties:{provider:{type:"string",description:'The addon provider, such as "webhook" or "slack". This string is **case sensitive** and maps to the provider\'s `name` property.\n\nThe list of all supported providers and their parameters for a specific Unleash instance can be found by making a GET request to the `api/admin/addons` endpoint: the `providers` property of that response will contain all available providers.\n\nThe default set of providers can be found in the [addons reference documentation](https://docs.getunleash.io/reference/addons). The default supported options are:\n- `datadog` for [Datadog](https://docs.getunleash.io/reference/addons/datadog)\n- `slack` for [Slack](https://docs.getunleash.io/reference/addons/slack)\n- `teams` for [Microsoft Teams](https://docs.getunleash.io/reference/addons/teams)\n- `webhook` for [webhooks](https://docs.getunleash.io/reference/addons/webhook)\n\nThe provider you choose for your addon dictates what properties the `parameters` object needs. Refer to the documentation for each provider for more information.\n',example:"webhook"},description:{type:"string",description:"A description of the addon.",example:"This addon posts updates to our internal feature tracking system whenever a feature is created or updated."},enabled:{type:"boolean",description:"Whether the addon should be enabled or not."},parameters:{type:"object",additionalProperties:{},example:{url:"http://localhost:4242/webhook"},description:"Parameters for the addon provider. This object has different required and optional properties depending on the provider you choose. Consult the documentation for details."},events:{type:"array",description:"The event types that will trigger this specific addon.",items:{type:"string"},example:["feature-created","feature-updated"]},projects:{type:"array",description:"The projects that this addon will listen to events from. An empty list means it will listen to events from **all** projects.",example:["new-landing-project","signups-v2"],items:{type:"string"}},environments:{type:"array",description:"The list of environments that this addon will listen to events from. An empty list means it will listen to events from **all** environments.",example:["development","production"],items:{type:"string"}}},title:"addonCreateUpdateSchema"}}}},responses:{200:{description:"addonSchema",content:{"application/json":{schema:{type:"object",description:"An [addon](https://docs.getunleash.io/reference/addons) instance description. Contains data about what kind of provider it uses, whether it's enabled or not, what events it listens for, and more.",required:["id","description","provider","enabled","parameters","events"],properties:{id:{type:"integer",minimum:1,example:27,description:"The addon's unique identifier."},provider:{type:"string",description:'The addon provider, such as "webhook" or "slack".',example:"webhook"},description:{type:"string",description:"A description of the addon. `null` if no description exists.",example:"This addon posts updates to our internal feature tracking system whenever a feature is created or updated.",nullable:!0},enabled:{type:"boolean",description:"Whether the addon is enabled or not."},parameters:{type:"object",additionalProperties:{},example:{url:"http://localhost:4242/webhook"},description:"Parameters for the addon provider. This object has different required and optional properties depending on the provider you choose."},events:{type:"array",description:"The event types that trigger this specific addon.",items:{type:"string"},example:["feature-created","feature-updated"]},projects:{type:"array",description:"The projects that this addon listens to events from. An empty list means it listens to events from **all** projects.",example:["new-landing-project","signups-v2"],items:{type:"string"}},environments:{type:"array",description:"The list of environments that this addon listens to events from. An empty list means it listens to events from **all** environments.",example:["development","production"],items:{type:"string"}}},title:"addonSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},413:{description:"The request body is larger than what we accept. By default we only accept bodies of 100kB or less",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTooLarge",description:"The name of the error kind"},message:{type:"string",example:"You provided more data than we can handle. Unleash accepts at most X MB.",description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/addons",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{provider:"webhook",description:"This addon posts updates to our internal feature tracking system whenever a feature is created or updated.",enabled:!0,parameters:{url:"http://localhost:4242/webhook"},events:["feature-created","feature-updated"],projects:["new-landing-project","signups-v2"],environments:["development","production"]},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Create a new addon",description:{content:"Create an addon instance. The addon must use one of the providers available on this Unleash instance.",type:"text/plain"},url:{path:["api","admin","addons"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/create-addon",id:"reference/api/unleash/create-addon",title:"Create a new addon",description:"Create an addon instance. The addon must use one of the providers available on this Unleash instance.",source:"@site/docs/reference/api/unleash/create-addon.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-addon",permalink:"/reference/api/unleash/create-addon",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-addon",title:"Create a new addon",description:"Create an addon instance. The addon must use one of the providers available on this Unleash instance.",sidebar_label:"Create a new addon",hide_title:!0,hide_table_of_contents:!0,api:{description:"Create an addon instance. The addon must use one of the providers available on this Unleash instance.",tags:["Addons"],operationId:"createAddon",requestBody:{description:"addonCreateUpdateSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],description:"Data required to create or update an [Unleash addon](https://docs.getunleash.io/reference/addons) instance.",properties:{provider:{type:"string",description:'The addon provider, such as "webhook" or "slack". This string is **case sensitive** and maps to the provider\'s `name` property.\n\nThe list of all supported providers and their parameters for a specific Unleash instance can be found by making a GET request to the `api/admin/addons` endpoint: the `providers` property of that response will contain all available providers.\n\nThe default set of providers can be found in the [addons reference documentation](https://docs.getunleash.io/reference/addons). The default supported options are:\n- `datadog` for [Datadog](https://docs.getunleash.io/reference/addons/datadog)\n- `slack` for [Slack](https://docs.getunleash.io/reference/addons/slack)\n- `teams` for [Microsoft Teams](https://docs.getunleash.io/reference/addons/teams)\n- `webhook` for [webhooks](https://docs.getunleash.io/reference/addons/webhook)\n\nThe provider you choose for your addon dictates what properties the `parameters` object needs. Refer to the documentation for each provider for more information.\n',example:"webhook"},description:{type:"string",description:"A description of the addon.",example:"This addon posts updates to our internal feature tracking system whenever a feature is created or updated."},enabled:{type:"boolean",description:"Whether the addon should be enabled or not."},parameters:{type:"object",additionalProperties:{},example:{url:"http://localhost:4242/webhook"},description:"Parameters for the addon provider. This object has different required and optional properties depending on the provider you choose. Consult the documentation for details."},events:{type:"array",description:"The event types that will trigger this specific addon.",items:{type:"string"},example:["feature-created","feature-updated"]},projects:{type:"array",description:"The projects that this addon will listen to events from. An empty list means it will listen to events from **all** projects.",example:["new-landing-project","signups-v2"],items:{type:"string"}},environments:{type:"array",description:"The list of environments that this addon will listen to events from. An empty list means it will listen to events from **all** environments.",example:["development","production"],items:{type:"string"}}},title:"addonCreateUpdateSchema"}}}},responses:{200:{description:"addonSchema",content:{"application/json":{schema:{type:"object",description:"An [addon](https://docs.getunleash.io/reference/addons) instance description. Contains data about what kind of provider it uses, whether it's enabled or not, what events it listens for, and more.",required:["id","description","provider","enabled","parameters","events"],properties:{id:{type:"integer",minimum:1,example:27,description:"The addon's unique identifier."},provider:{type:"string",description:'The addon provider, such as "webhook" or "slack".',example:"webhook"},description:{type:"string",description:"A description of the addon. `null` if no description exists.",example:"This addon posts updates to our internal feature tracking system whenever a feature is created or updated.",nullable:!0},enabled:{type:"boolean",description:"Whether the addon is enabled or not."},parameters:{type:"object",additionalProperties:{},example:{url:"http://localhost:4242/webhook"},description:"Parameters for the addon provider. This object has different required and optional properties depending on the provider you choose."},events:{type:"array",description:"The event types that trigger this specific addon.",items:{type:"string"},example:["feature-created","feature-updated"]},projects:{type:"array",description:"The projects that this addon listens to events from. An empty list means it listens to events from **all** projects.",example:["new-landing-project","signups-v2"],items:{type:"string"}},environments:{type:"array",description:"The list of environments that this addon listens to events from. An empty list means it listens to events from **all** environments.",example:["development","production"],items:{type:"string"}}},title:"addonSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},413:{description:"The request body is larger than what we accept. By default we only accept bodies of 100kB or less",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTooLarge",description:"The name of the error kind"},message:{type:"string",example:"You provided more data than we can handle. Unleash accepts at most X MB.",description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/addons",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{provider:"webhook",description:"This addon posts updates to our internal feature tracking system whenever a feature is created or updated.",enabled:!0,parameters:{url:"http://localhost:4242/webhook"},events:["feature-created","feature-updated"],projects:["new-landing-project","signups-v2"],environments:["development","production"]},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Create a new addon",description:{content:"Create an addon instance. The addon must use one of the providers available on this Unleash instance.",type:"text/plain"},url:{path:["api","admin","addons"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all addons and providers",permalink:"/reference/api/unleash/get-addons"},next:{title:"Get a specific addon",permalink:"/reference/api/unleash/get-addon"}},f={},g=[{value:"Request",id:"request",level:2}],b={toc:g};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{className:"openapi__heading"},"Create a new addon"),(0,o.kt)(i.Z,{method:"post",path:"/api/admin/addons",mdxType:"MethodEndpoint"}),(0,o.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,o.kt)("p",null,"Create an addon instance. The addon must use one of the providers available on this Unleash instance."),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)(d.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,o.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,o.kt)("strong",{className:"openapi-schema__required"},"required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,o.kt)("p",null,"addonCreateUpdateSchema"))),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"provider",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The addon provider, such as "webhook" or "slack". This string is **case sensitive** and maps to the provider\'s `name` property.\n\nThe list of all supported providers and their parameters for a specific Unleash instance can be found by making a GET request to the `api/admin/addons` endpoint: the `providers` property of that response will contain all available providers.\n\nThe default set of providers can be found in the [addons reference documentation](https://docs.getunleash.io/reference/addons). The default supported options are:\n- `datadog` for [Datadog](https://docs.getunleash.io/reference/addons/datadog)\n- `slack` for [Slack](https://docs.getunleash.io/reference/addons/slack)\n- `teams` for [Microsoft Teams](https://docs.getunleash.io/reference/addons/teams)\n- `webhook` for [webhooks](https://docs.getunleash.io/reference/addons/webhook)\n\nThe provider you choose for your addon dictates what properties the `parameters` object needs. Refer to the documentation for each provider for more information.\n',example:"webhook"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A description of the addon.",example:"This addon posts updates to our internal feature tracking system whenever a feature is created or updated."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the addon should be enabled or not."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details"},(0,o.kt)("summary",{style:{}},(0,o.kt)("span",{className:"openapi-schema__container"},(0,o.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,o.kt)("span",{className:"openapi-schema__name"}," object"),(0,o.kt)("span",{className:"openapi-schema__divider"}),(0,o.kt)("span",{className:"openapi-schema__required"},"required"))),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Parameters for the addon provider. This object has different required and optional properties depending on the provider you choose. Consult the documentation for details."))))),(0,o.kt)(l.Z,{collapsible:!1,name:"events",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The event types that will trigger this specific addon.",items:{type:"string"},example:["feature-created","feature-updated"]},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The projects that this addon will listen to events from. An empty list means it will listen to events from **all** projects.",example:["new-landing-project","signups-v2"],items:{type:"string"}},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"environments",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The list of environments that this addon will listen to events from. An empty list means it will listen to events from **all** environments.",example:["development","production"],items:{type:"string"}},mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"addonSchema")),(0,o.kt)("div",null,(0,o.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,example:27,description:"The addon's unique identifier."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"provider",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The addon provider, such as "webhook" or "slack".',example:"webhook"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A description of the addon. `null` if no description exists.",example:"This addon posts updates to our internal feature tracking system whenever a feature is created or updated.",nullable:!0},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the addon is enabled or not."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details"},(0,o.kt)("summary",{style:{}},(0,o.kt)("span",{className:"openapi-schema__container"},(0,o.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,o.kt)("span",{className:"openapi-schema__name"}," object"),(0,o.kt)("span",{className:"openapi-schema__divider"}),(0,o.kt)("span",{className:"openapi-schema__required"},"required"))),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Parameters for the addon provider. This object has different required and optional properties depending on the provider you choose."))))),(0,o.kt)(l.Z,{collapsible:!1,name:"events",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The event types that trigger this specific addon.",items:{type:"string"},example:["feature-created","feature-updated"]},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The projects that this addon listens to events from. An empty list means it listens to events from **all** projects.",example:["new-landing-project","signups-v2"],items:{type:"string"}},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"environments",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The list of environments that this addon listens to events from. An empty list means it listens to events from **all** environments.",example:["development","production"],items:{type:"string"}},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(p.Z,{responseExample:'{\n  "id": 27,\n  "provider": "webhook",\n  "description": "This addon posts updates to our internal feature tracking system whenever a feature is created or updated.",\n  "enabled": true,\n  "parameters": {\n    "url": "http://localhost:4242/webhook"\n  },\n  "events": [\n    "feature-created",\n    "feature-updated"\n  ],\n  "projects": [\n    "new-landing-project",\n    "signups-v2"\n  ],\n  "environments": [\n    "development",\n    "production"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"The request data does not match what we expect.")),(0,o.kt)("div",null,(0,o.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,o.kt)("div",null,(0,o.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,o.kt)("div",null,(0,o.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(c.Z,{label:"413",value:"413",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"The request body is larger than what we accept. By default we only accept bodies of 100kB or less")),(0,o.kt)("div",null,(0,o.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTooLarge",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You provided more data than we can handle. Unleash accepts at most X MB.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTooLarge",\n  "message": "You provided more data than we can handle. Unleash accepts at most X MB."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(c.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.')),(0,o.kt)("div",null,(0,o.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTypeerror",\n  "message": "We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);