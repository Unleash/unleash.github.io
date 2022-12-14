"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[399],{71391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var i=a(87462),r=(a(67294),a(3905)),s=a(60961),n=a(48165),l=a(90115),m=a(58475),d=a(5428),p=a(80487),o=(a(54881),a(11666));const c={id:"get-change-request",title:"Retrieves one change request by id",description:"This endpoint will retrieve one change request if it matches the provided id.",sidebar_label:"Retrieves one change request by id",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve one change request if it matches the provided id.",tags:["Unstable"],operationId:"getChangeRequest",responses:{200:{description:"changeRequestSchema",content:{"application/json":{schema:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number"},environment:{type:"string"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number"},project:{type:"string"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string"},conflict:{type:"string"},changes:{type:"array",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number"},action:{type:"string"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number"},username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{text:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}},404:{description:"The requested resource was not found."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"Retrieves one change request by id",description:{content:"This endpoint will retrieve one change request if it matches the provided id.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},u=void 0,y={unversionedId:"reference/api/unleash/get-change-request",id:"reference/api/unleash/get-change-request",title:"Retrieves one change request by id",description:"This endpoint will retrieve one change request if it matches the provided id.",source:"@site/docs/reference/api/unleash/get-change-request.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-change-request",permalink:"/reference/api/unleash/get-change-request",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-change-request.api.mdx",tags:[],version:"current",frontMatter:{id:"get-change-request",title:"Retrieves one change request by id",description:"This endpoint will retrieve one change request if it matches the provided id.",sidebar_label:"Retrieves one change request by id",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve one change request if it matches the provided id.",tags:["Unstable"],operationId:"getChangeRequest",responses:{200:{description:"changeRequestSchema",content:{"application/json":{schema:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number"},environment:{type:"string"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number"},project:{type:"string"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string"},conflict:{type:"string"},changes:{type:"array",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number"},action:{type:"string"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number"},username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{text:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}},404:{description:"The requested resource was not found."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"Retrieves one change request by id",description:{content:"This endpoint will retrieve one change request if it matches the provided id.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Retrieves all pending change requests referencing a feature in the project",permalink:"/reference/api/unleash/get-pending-change-requests-for-feature"},next:{title:"Deletes a change request by id",permalink:"/reference/api/unleash/delete-change-request"}},h={},g=[{value:"Retrieves one change request by id",id:"retrieves-one-change-request-by-id",level:2}],v={toc:g};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"retrieves-one-change-request-by-id"},"Retrieves one change request by id"),(0,r.kt)("p",null,"This endpoint will retrieve one change request if it matches the provided id."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"changeRequestSchema")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"environment",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"state",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Draft`, `In review`, `Approved`, `Applied`, `Cancelled`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"minApprovals",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"project",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"features"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"conflict",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"changes"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"action",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"conflict",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"payload"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"string")))),(0,r.kt)(o.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"boolean")))),(0,r.kt)(o.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"number")))))))))),(0,r.kt)(d.Z,{collapsible:!1,name:"updatedBy",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"createdBy"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"approvals"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"createdBy"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"comments"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"createdBy"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"createdBy"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(m.Z,{responseExample:'{\n  "id": 0,\n  "environment": "string",\n  "state": "Draft",\n  "minApprovals": 0,\n  "project": "string",\n  "features": [\n    {\n      "name": "string",\n      "conflict": "string",\n      "changes": [\n        {\n          "id": 0,\n          "action": "string",\n          "conflict": "string",\n          "payload": "string",\n          "updatedBy": "string",\n          "createdBy": {\n            "username": "string",\n            "imageUrl": "string"\n          },\n          "createdAt": "2022-12-14"\n        }\n      ]\n    }\n  ],\n  "approvals": [\n    {\n      "createdBy": {\n        "id": 0,\n        "username": "string",\n        "imageUrl": "string"\n      },\n      "createdAt": "2022-12-14"\n    }\n  ],\n  "comments": [\n    {\n      "text": "string",\n      "createdBy": {\n        "username": "string",\n        "imageUrl": "string"\n      },\n      "createdAt": "2022-12-14"\n    }\n  ],\n  "createdBy": {\n    "username": "string",\n    "imageUrl": "string"\n  },\n  "createdAt": "2022-12-14"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(o.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The requested resource was not found.")),(0,r.kt)("div",null)))))}b.isMDXComponent=!0}}]);