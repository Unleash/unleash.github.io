"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2427],{61083:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>g,toc:()=>h});var i=a(87462),s=(a(67294),a(3905)),r=a(60961),l=a(48165),n=a(90115),o=a(58475),d=a(5428),p=a(80487),m=(a(54881),a(11666));const c={id:"get-events-for-toggle",title:"Get all events related to a specific feature toggle.",description:"Returns all events related to the specified feature toggle. If the feature toggle does not exist, the list of events will be empty.",sidebar_label:"Get all events related to a specific feature toggle.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getEventsForToggle",tags:["Events"],responses:{200:{description:"featureEventsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["events"],properties:{version:{type:"number"},toggleName:{type:"string"},events:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","createdAt","type","createdBy"],properties:{id:{type:"integer",minimum:1},createdAt:{type:"string",format:"date-time"},type:{type:"string"},createdBy:{type:"string"},environment:{type:"string",nullable:!0},project:{type:"string",nullable:!0},featureName:{type:"string",nullable:!0},data:{type:"object",nullable:!0},preData:{type:"object",nullable:!0},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}},nullable:!0}}}}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"Returns all events related to the specified feature toggle. If the feature toggle does not exist, the list of events will be empty.",parameters:[{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/events/{featureName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"Get all events related to a specific feature toggle.",description:{content:"Returns all events related to the specified feature toggle. If the feature toggle does not exist, the list of events will be empty.",type:"text/plain"},url:{path:["api","admin","events",":featureName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/get-events-for-toggle",id:"reference/api/unleash/get-events-for-toggle",title:"Get all events related to a specific feature toggle.",description:"Returns all events related to the specified feature toggle. If the feature toggle does not exist, the list of events will be empty.",source:"@site/docs/reference/api/unleash/get-events-for-toggle.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-events-for-toggle",permalink:"/reference/api/unleash/get-events-for-toggle",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-events-for-toggle",title:"Get all events related to a specific feature toggle.",description:"Returns all events related to the specified feature toggle. If the feature toggle does not exist, the list of events will be empty.",sidebar_label:"Get all events related to a specific feature toggle.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getEventsForToggle",tags:["Events"],responses:{200:{description:"featureEventsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["events"],properties:{version:{type:"number"},toggleName:{type:"string"},events:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","createdAt","type","createdBy"],properties:{id:{type:"integer",minimum:1},createdAt:{type:"string",format:"date-time"},type:{type:"string"},createdBy:{type:"string"},environment:{type:"string",nullable:!0},project:{type:"string",nullable:!0},featureName:{type:"string",nullable:!0},data:{type:"object",nullable:!0},preData:{type:"object",nullable:!0},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}},nullable:!0}}}}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"Returns all events related to the specified feature toggle. If the feature toggle does not exist, the list of events will be empty.",parameters:[{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/events/{featureName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"Get all events related to a specific feature toggle.",description:{content:"Returns all events related to the specified feature toggle. If the feature toggle does not exist, the list of events will be empty.",type:"text/plain"},url:{path:["api","admin","events",":featureName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get the most recent events from the Unleash instance or all events related to a project.",permalink:"/reference/api/unleash/get-events"},next:{title:"searchEvents",permalink:"/reference/api/unleash/search-events"}},v={},h=[{value:"Get all events related to a specific feature toggle.",id:"get-all-events-related-to-a-specific-feature-toggle",level:2}],f={toc:h};function y(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-all-events-related-to-a-specific-feature-toggle"},"Get all events related to a specific feature toggle."),(0,s.kt)("p",null,"Returns all events related to the specified feature toggle. If the feature toggle does not exist, the list of events will be empty."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"featureEventsSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"toggleName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"events"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"createdBy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"environment",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"project",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"featureName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"data",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"preData",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"tags"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "version": 0,\n  "toggleName": "string",\n  "events": [\n    {\n      "id": 0,\n      "createdAt": "2022-12-29",\n      "type": "string",\n      "createdBy": "string",\n      "environment": "string",\n      "project": "string",\n      "featureName": "string",\n      "data": {},\n      "preData": {},\n      "tags": [\n        {\n          "value": "string",\n          "type": "string"\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null)))))}y.isMDXComponent=!0}}]);