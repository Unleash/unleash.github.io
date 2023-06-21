"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2777],{88433:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>k,frontMatter:()=>u,metadata:()=>g,toc:()=>v});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),o=(a(11032),a(46062)),r=a(57138),d=a(21439),p=a(9531),l=a(15761),m=a(73418),c=a(92414),h=a(11666);const u={id:"get-addon",title:"Get a specific addon",description:"Retrieve information about the addon whose ID matches the ID in the request URL.",sidebar_label:"Get a specific addon",hide_title:!0,hide_table_of_contents:!0,api:{description:"Retrieve information about the addon whose ID matches the ID in the request URL.",tags:["Addons"],operationId:"getAddon",responses:{200:{description:"addonSchema",content:{"application/json":{schema:{type:"object",description:"An [addon](https://docs.getunleash.io/reference/addons) instance description. Contains data about what kind of provider it uses, whether it's enabled or not, what events it listens for, and more.",required:["id","description","provider","enabled","parameters","events"],properties:{id:{type:"integer",minimum:1,example:27,description:"The addon's unique identifier."},provider:{type:"string",description:'The addon provider, such as "webhook" or "slack".',example:"webhook"},description:{type:"string",description:"A description of the addon. `null` if no description exists.",example:"This addon posts updates to our internal feature tracking system whenever a feature is created or updated.",nullable:!0},enabled:{type:"boolean",description:"Whether the addon is enabled or not."},parameters:{type:"object",additionalProperties:{},example:{url:"http://localhost:4242/webhook"},description:"Parameters for the addon provider. This object has different required and optional properties depending on the provider you choose."},events:{type:"array",description:"The event types that trigger this specific addon.",items:{type:"string"},example:["feature-created","feature-updated"]},projects:{type:"array",description:"The projects that this addon listens to events from. An empty list means it listens to events from **all** projects.",example:["new-landing-project","signups-v2"],items:{type:"string"}},environments:{type:"array",description:"The list of environments that this addon listens to events from. An empty list means it listens to events from **all** environments.",example:["development","production"],items:{type:"string"}}},title:"addonSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/addons/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"Get a specific addon",description:{content:"Retrieve information about the addon whose ID matches the ID in the request URL.",type:"text/plain"},url:{path:["api","admin","addons",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/get-addon",id:"reference/api/unleash/get-addon",title:"Get a specific addon",description:"Retrieve information about the addon whose ID matches the ID in the request URL.",source:"@site/docs/reference/api/unleash/get-addon.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-addon",permalink:"/reference/api/unleash/get-addon",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-addon",title:"Get a specific addon",description:"Retrieve information about the addon whose ID matches the ID in the request URL.",sidebar_label:"Get a specific addon",hide_title:!0,hide_table_of_contents:!0,api:{description:"Retrieve information about the addon whose ID matches the ID in the request URL.",tags:["Addons"],operationId:"getAddon",responses:{200:{description:"addonSchema",content:{"application/json":{schema:{type:"object",description:"An [addon](https://docs.getunleash.io/reference/addons) instance description. Contains data about what kind of provider it uses, whether it's enabled or not, what events it listens for, and more.",required:["id","description","provider","enabled","parameters","events"],properties:{id:{type:"integer",minimum:1,example:27,description:"The addon's unique identifier."},provider:{type:"string",description:'The addon provider, such as "webhook" or "slack".',example:"webhook"},description:{type:"string",description:"A description of the addon. `null` if no description exists.",example:"This addon posts updates to our internal feature tracking system whenever a feature is created or updated.",nullable:!0},enabled:{type:"boolean",description:"Whether the addon is enabled or not."},parameters:{type:"object",additionalProperties:{},example:{url:"http://localhost:4242/webhook"},description:"Parameters for the addon provider. This object has different required and optional properties depending on the provider you choose."},events:{type:"array",description:"The event types that trigger this specific addon.",items:{type:"string"},example:["feature-created","feature-updated"]},projects:{type:"array",description:"The projects that this addon listens to events from. An empty list means it listens to events from **all** projects.",example:["new-landing-project","signups-v2"],items:{type:"string"}},environments:{type:"array",description:"The list of environments that this addon listens to events from. An empty list means it listens to events from **all** environments.",example:["development","production"],items:{type:"string"}}},title:"addonSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/addons/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"Get a specific addon",description:{content:"Retrieve information about the addon whose ID matches the ID in the request URL.",type:"text/plain"},url:{path:["api","admin","addons",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Create a new addon",permalink:"/reference/api/unleash/create-addon"},next:{title:"Update an addon",permalink:"/reference/api/unleash/update-addon"}},f={},v=[{value:"Request",id:"request",level:2}],b={toc:v};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get a specific addon"),(0,n.kt)(o.Z,{method:"get",path:"/api/admin/addons/{id}",mdxType:"MethodEndpoint"}),(0,n.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Retrieve information about the addon whose ID matches the ID in the request URL."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(p.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"addonSchema")),(0,n.kt)("div",null,(0,n.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,example:27,description:"The addon's unique identifier."},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"provider",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The addon provider, such as "webhook" or "slack".',example:"webhook"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A description of the addon. `null` if no description exists.",example:"This addon posts updates to our internal feature tracking system whenever a feature is created or updated.",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the addon is enabled or not."},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Parameters for the addon provider. This object has different required and optional properties depending on the provider you choose."))))),(0,n.kt)(m.Z,{collapsible:!1,name:"events",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The event types that trigger this specific addon.",items:{type:"string"},example:["feature-created","feature-updated"]},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The projects that this addon listens to events from. An empty list means it listens to events from **all** projects.",example:["new-landing-project","signups-v2"],items:{type:"string"}},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"environments",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The list of environments that this addon listens to events from. An empty list means it listens to events from **all** environments.",example:["development","production"],items:{type:"string"}},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": 27,\n  "provider": "webhook",\n  "description": "This addon posts updates to our internal feature tracking system whenever a feature is created or updated.",\n  "enabled": true,\n  "parameters": {\n    "url": "http://localhost:4242/webhook"\n  },\n  "events": [\n    "feature-created",\n    "feature-updated"\n  ],\n  "projects": [\n    "new-landing-project",\n    "signups-v2"\n  ],\n  "environments": [\n    "development",\n    "production"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null,(0,n.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);