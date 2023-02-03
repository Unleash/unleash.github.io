"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4264],{11636:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var i=a(87462),r=(a(67294),a(3905)),n=a(60961),s=a(48165),l=a(90115),o=a(58475),d=a(5428),p=a(80487),m=(a(54881),a(11666));const c={id:"get-open-change-requests-for-user",title:"Retrieves pending change requests in configured environments",description:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",sidebar_label:"Retrieves pending change requests in configured environments",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",tags:["Change Requests"],operationId:"getOpenChangeRequestsForUser",responses:{200:{description:"changeRequestsSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number"},environment:{type:"string"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number"},project:{type:"string"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string"},conflict:{type:"string"},changes:{type:"array",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number"},action:{type:"string"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number"},username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{text:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/open",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"Retrieves pending change requests in configured environments",description:{content:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests","open"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/get-open-change-requests-for-user",id:"reference/api/unleash/get-open-change-requests-for-user",title:"Retrieves pending change requests in configured environments",description:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",source:"@site/docs/reference/api/unleash/get-open-change-requests-for-user.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-open-change-requests-for-user",permalink:"/reference/api/unleash/get-open-change-requests-for-user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-open-change-requests-for-user",title:"Retrieves pending change requests in configured environments",description:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",sidebar_label:"Retrieves pending change requests in configured environments",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",tags:["Change Requests"],operationId:"getOpenChangeRequestsForUser",responses:{200:{description:"changeRequestsSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number"},environment:{type:"string"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number"},project:{type:"string"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string"},conflict:{type:"string"},changes:{type:"array",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number"},action:{type:"string"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number"},username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{text:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/open",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"Retrieves pending change requests in configured environments",description:{content:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests","open"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Updates change request configuration for an environment in the project",permalink:"/reference/api/unleash/update-project-change-request-config"},next:{title:"Retrieves pending change requests in configured environments",permalink:"/reference/api/unleash/get-pending-change-requests-for-user"}},g={},h=[{value:"Retrieves pending change requests in configured environments",id:"retrieves-pending-change-requests-in-configured-environments",level:2}],v={toc:h};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"retrieves-pending-change-requests-in-configured-environments"},"Retrieves pending change requests in configured environments"),(0,r.kt)("p",null,"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"changeRequestsSchema")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema"),(0,r.kt)("span",{style:{opacity:"0.6"}}," array")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"environment",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"state",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Draft`, `In review`, `Approved`, `Applied`, `Cancelled`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"minApprovals",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"project",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"features"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"conflict",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"changes"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"action",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"conflict",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"payload"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"string")))),(0,r.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"boolean")))),(0,r.kt)(m.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"number")))))))))),(0,r.kt)(d.Z,{collapsible:!1,name:"updatedBy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"createdBy"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"username",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"imageUrl",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"approvals"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"createdBy"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"username",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"imageUrl",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"comments"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"createdBy"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"username",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"imageUrl",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"createdBy"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"username",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"imageUrl",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'[\n  {\n    "id": 0,\n    "environment": "string",\n    "state": "Draft",\n    "minApprovals": 0,\n    "project": "string",\n    "features": [\n      {\n        "name": "string",\n        "conflict": "string",\n        "changes": [\n          {\n            "id": 0,\n            "action": "string",\n            "conflict": "string",\n            "payload": "string",\n            "updatedBy": "string",\n            "createdBy": {\n              "username": "string",\n              "imageUrl": "string"\n            },\n            "createdAt": "2023-02-03"\n          }\n        ]\n      }\n    ],\n    "approvals": [\n      {\n        "createdBy": {\n          "id": 0,\n          "username": "string",\n          "imageUrl": "string"\n        },\n        "createdAt": "2023-02-03"\n      }\n    ],\n    "comments": [\n      {\n        "text": "string",\n        "createdBy": {\n          "username": "string",\n          "imageUrl": "string"\n        },\n        "createdAt": "2023-02-03"\n      }\n    ],\n    "createdBy": {\n      "username": "string",\n      "imageUrl": "string"\n    },\n    "createdAt": "2023-02-03"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);