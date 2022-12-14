"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6815],{99905:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var r=a(87462),i=(a(67294),a(3905)),s=a(60961),n=a(48165),l=a(90115),o=a(58475),p=a(5428),m=a(80487),c=(a(54881),a(11666));const d={id:"get-change-requests-for-project",title:"Retrieves all change requests for a project",description:"This endpoint will retrieve all change requests regardless of status for a given project.",sidebar_label:"Retrieves all change requests for a project",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve all change requests regardless of status for a given project.",tags:["Unstable"],operationId:"getChangeRequestsForProject",responses:{200:{description:"changeRequestsSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number"},environment:{type:"string"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number"},project:{type:"string"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string"},conflict:{type:"string"},changes:{type:"array",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number"},action:{type:"string"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number"},username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{text:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"Retrieves all change requests for a project",description:{content:"This endpoint will retrieve all change requests regardless of status for a given project.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},u=void 0,y={unversionedId:"reference/api/unleash/get-change-requests-for-project",id:"reference/api/unleash/get-change-requests-for-project",title:"Retrieves all change requests for a project",description:"This endpoint will retrieve all change requests regardless of status for a given project.",source:"@site/docs/reference/api/unleash/get-change-requests-for-project.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-change-requests-for-project",permalink:"/reference/api/unleash/get-change-requests-for-project",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-change-requests-for-project.api.mdx",tags:[],version:"current",frontMatter:{id:"get-change-requests-for-project",title:"Retrieves all change requests for a project",description:"This endpoint will retrieve all change requests regardless of status for a given project.",sidebar_label:"Retrieves all change requests for a project",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve all change requests regardless of status for a given project.",tags:["Unstable"],operationId:"getChangeRequestsForProject",responses:{200:{description:"changeRequestsSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number"},environment:{type:"string"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number"},project:{type:"string"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string"},conflict:{type:"string"},changes:{type:"array",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number"},action:{type:"string"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number"},username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{text:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"Retrieves all change requests for a project",description:{content:"This endpoint will retrieve all change requests regardless of status for a given project.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Retrieves pending change requests in configured environments",permalink:"/reference/api/unleash/get-pending-change-requests-for-user"},next:{title:"Retrieves all pending change requests referencing a feature in the project",permalink:"/reference/api/unleash/get-pending-change-requests-for-feature"}},g={},h=[{value:"Retrieves all change requests for a project",id:"retrieves-all-change-requests-for-a-project",level:2}],v={toc:h};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"retrieves-all-change-requests-for-a-project"},"Retrieves all change requests for a project"),(0,i.kt)("p",null,"This endpoint will retrieve all change requests regardless of status for a given project."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"changeRequestsSchema")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"state",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Draft`, `In review`, `Approved`, `Applied`, `Cancelled`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"minApprovals",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"project",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"features"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"conflict",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"changes"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"action",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"conflict",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"payload"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))),(0,i.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"boolean")))),(0,i.kt)(c.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"number")))))))))),(0,i.kt)(p.Z,{collapsible:!1,name:"updatedBy",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"createdBy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"approvals"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"createdBy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"comments"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"createdBy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"createdBy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'[\n  {\n    "id": 0,\n    "environment": "string",\n    "state": "Draft",\n    "minApprovals": 0,\n    "project": "string",\n    "features": [\n      {\n        "name": "string",\n        "conflict": "string",\n        "changes": [\n          {\n            "id": 0,\n            "action": "string",\n            "conflict": "string",\n            "payload": "string",\n            "updatedBy": "string",\n            "createdBy": {\n              "username": "string",\n              "imageUrl": "string"\n            },\n            "createdAt": "2022-12-14"\n          }\n        ]\n      }\n    ],\n    "approvals": [\n      {\n        "createdBy": {\n          "id": 0,\n          "username": "string",\n          "imageUrl": "string"\n        },\n        "createdAt": "2022-12-14"\n      }\n    ],\n    "comments": [\n      {\n        "text": "string",\n        "createdBy": {\n          "username": "string",\n          "imageUrl": "string"\n        },\n        "createdAt": "2022-12-14"\n      }\n    ],\n    "createdBy": {\n      "username": "string",\n      "imageUrl": "string"\n    },\n    "createdAt": "2022-12-14"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);