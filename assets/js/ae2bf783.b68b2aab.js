"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[168],{48327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>v});var n=a(87462),r=(a(67294),a(3905)),i=a(60961),s=a(48165),l=a(90115),o=a(58475),p=a(5428),m=a(80487),c=(a(54881),a(11666));const d={id:"get-events",title:"Get the most recent events from the Unleash instance or all events related to a project.",description:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.",sidebar_label:"Get the most recent events from the Unleash instance or all events related to a project.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getEvents",tags:["Events"],responses:{200:{description:"eventsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","events"],properties:{version:{type:"integer",minimum:1},events:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","createdAt","type","createdBy"],properties:{id:{type:"integer",minimum:1},createdAt:{type:"string",format:"date-time"},type:{type:"string"},createdBy:{type:"string"},environment:{type:"string",nullable:!0},project:{type:"string",nullable:!0},featureName:{type:"string",nullable:!0},data:{type:"object",nullable:!0},preData:{type:"object",nullable:!0},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}},nullable:!0}}}},totalEvents:{type:"integer",minimum:0}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},parameters:[{name:"project",description:"The name of the project whose events you want to retrieve",schema:{type:"string"},in:"query"}],description:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.\n\nIf the provided project does not exist, the list of events will be empty.",method:"get",path:"/api/admin/events",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.104"},postman:{name:"Get the most recent events from the Unleash instance or all events related to a project.",description:{content:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.\n\nIf the provided project does not exist, the list of events will be empty.",type:"text/plain"},url:{path:["api","admin","events"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The name of the project whose events you want to retrieve",type:"text/plain"},key:"project",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,u={unversionedId:"reference/api/unleash/get-events",id:"reference/api/unleash/get-events",title:"Get the most recent events from the Unleash instance or all events related to a project.",description:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.",source:"@site/docs/reference/api/unleash/get-events.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-events",permalink:"/reference/api/unleash/get-events",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-events",title:"Get the most recent events from the Unleash instance or all events related to a project.",description:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.",sidebar_label:"Get the most recent events from the Unleash instance or all events related to a project.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getEvents",tags:["Events"],responses:{200:{description:"eventsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","events"],properties:{version:{type:"integer",minimum:1},events:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","createdAt","type","createdBy"],properties:{id:{type:"integer",minimum:1},createdAt:{type:"string",format:"date-time"},type:{type:"string"},createdBy:{type:"string"},environment:{type:"string",nullable:!0},project:{type:"string",nullable:!0},featureName:{type:"string",nullable:!0},data:{type:"object",nullable:!0},preData:{type:"object",nullable:!0},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}},nullable:!0}}}},totalEvents:{type:"integer",minimum:0}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},parameters:[{name:"project",description:"The name of the project whose events you want to retrieve",schema:{type:"string"},in:"query"}],description:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.\n\nIf the provided project does not exist, the list of events will be empty.",method:"get",path:"/api/admin/events",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.104"},postman:{name:"Get the most recent events from the Unleash instance or all events related to a project.",description:{content:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.\n\nIf the provided project does not exist, the list of events will be empty.",type:"text/plain"},url:{path:["api","admin","events"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The name of the project whose events you want to retrieve",type:"text/plain"},key:"project",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Events",permalink:"/reference/api/unleash/events"},next:{title:"Get all events related to a specific feature toggle.",permalink:"/reference/api/unleash/get-events-for-toggle"}},y={},v=[{value:"Get the most recent events from the Unleash instance or all events related to a project.",id:"get-the-most-recent-events-from-the-unleash-instance-or-all-events-related-to-a-project",level:2}],f={toc:v};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-the-most-recent-events-from-the-unleash-instance-or-all-events-related-to-a-project"},"Get the most recent events from the Unleash instance or all events related to a project."),(0,r.kt)("p",null,"Returns ",(0,r.kt)("strong",{parentName:"p"},"the last 100")," events from the Unleash instance when called without a query parameter. When called with a ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," parameter, returns ",(0,r.kt)("strong",{parentName:"p"},"all events")," for the specified project."),(0,r.kt)("p",null,"If the provided project does not exist, the list of events will be empty."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"project",description:"The name of the project whose events you want to retrieve",schema:{type:"string"},in:"query"},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"eventsSchema")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"version",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"events"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"createdBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"featureName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"data",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"preData",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"tags"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-nullable)"}}," nullable")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(p.Z,{collapsible:!1,name:"totalEvents",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "version": 0,\n  "events": [\n    {\n      "id": 0,\n      "createdAt": "2023-03-22",\n      "type": "string",\n      "createdBy": "string",\n      "environment": "string",\n      "project": "string",\n      "featureName": "string",\n      "data": {},\n      "preData": {},\n      "tags": [\n        {\n          "value": "string",\n          "type": "string"\n        }\n      ]\n    }\n  ],\n  "totalEvents": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,r.kt)("div",null)))))}g.isMDXComponent=!0}}]);