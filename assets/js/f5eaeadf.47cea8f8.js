"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2847],{90684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var r=a(87462),n=(a(67294),a(3905)),i=a(60961),s=a(48165),l=a(90115),m=a(58475),p=a(5428),o=a(80487),c=(a(54881),a(11666));const d={id:"get-change-requests-for-environment",title:"Retrieves all change requests for an environment in a project",description:"This endpoint will retrieve all change requests in a given environment for a given project.",sidebar_label:"Retrieves all change requests for an environment in a project",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve all change requests in a given environment for a given project.",tags:["Unstable"],operationId:"getChangeRequestsForEnvironment",responses:{200:{description:"changeRequestsSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number",example:3},environment:{type:"string",example:"development"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number",example:2},project:{type:"string",example:"unleash-project"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string",example:"my-feature"},conflict:{type:"string"},changes:{type:"array",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number",example:33},action:{type:"string",example:"updateStrategy"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number",example:33},username:{type:"string",example:"unleash-user"},imageUrl:{type:"string"}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}}}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{id:{type:"number",example:33},text:{type:"string",example:"This is a comment"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0,example:"unleash-user"},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}}}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/environments/{environment}/change-requests",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.43"},postman:{name:"Retrieves all change requests for an environment in a project",description:{content:"This endpoint will retrieve all change requests in a given environment for a given project.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments",":environment","change-requests"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,u={unversionedId:"reference/api/unleash/get-change-requests-for-environment",id:"reference/api/unleash/get-change-requests-for-environment",title:"Retrieves all change requests for an environment in a project",description:"This endpoint will retrieve all change requests in a given environment for a given project.",source:"@site/docs/reference/api/unleash/get-change-requests-for-environment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-change-requests-for-environment",permalink:"/reference/api/unleash/get-change-requests-for-environment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-change-requests-for-environment",title:"Retrieves all change requests for an environment in a project",description:"This endpoint will retrieve all change requests in a given environment for a given project.",sidebar_label:"Retrieves all change requests for an environment in a project",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve all change requests in a given environment for a given project.",tags:["Unstable"],operationId:"getChangeRequestsForEnvironment",responses:{200:{description:"changeRequestsSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number",example:3},environment:{type:"string",example:"development"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number",example:2},project:{type:"string",example:"unleash-project"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string",example:"my-feature"},conflict:{type:"string"},changes:{type:"array",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number",example:33},action:{type:"string",example:"updateStrategy"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number",example:33},username:{type:"string",example:"unleash-user"},imageUrl:{type:"string"}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}}}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{id:{type:"number",example:33},text:{type:"string",example:"This is a comment"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0,example:"unleash-user"},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}}}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/environments/{environment}/change-requests",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.43"},postman:{name:"Retrieves all change requests for an environment in a project",description:{content:"This endpoint will retrieve all change requests in a given environment for a given project.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments",":environment","change-requests"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Create/Add change to a change request",permalink:"/reference/api/unleash/change-request"},next:{title:"Retrieves change request configuration for a project",permalink:"/reference/api/unleash/get-project-change-request-config"}},g={},h=[{value:"Retrieves all change requests for an environment in a project",id:"retrieves-all-change-requests-for-an-environment-in-a-project",level:2}],v={toc:h};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"retrieves-all-change-requests-for-an-environment-in-a-project"},"Retrieves all change requests for an environment in a project"),(0,n.kt)("p",null,"This endpoint will retrieve all change requests in a given environment for a given project."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"environment",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"changeRequestsSchema")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:3},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Draft`, `In review`, `Approved`, `Applied`, `Cancelled`]",schema:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"minApprovals",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:2},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"unleash-project"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"features"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"my-feature"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"conflict",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"changes"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:33},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"action",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"updateStrategy"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"conflict",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"payload"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("span",{className:"badge badge--info"},"oneOf"),(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))),(0,n.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"boolean")))),(0,n.kt)(c.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"number"))))))))),(0,n.kt)(p.Z,{collapsible:!1,name:"updatedBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"createdBy"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"approvals"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"createdBy"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:33},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"unleash-user"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"comments"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:33},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"This is a comment"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"createdBy"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"unleash-user"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"createdBy"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'[\n  {\n    "id": 3,\n    "environment": "development",\n    "state": "Draft",\n    "minApprovals": 2,\n    "project": "unleash-project",\n    "features": [\n      {\n        "name": "my-feature",\n        "conflict": "string",\n        "changes": [\n          {\n            "id": 33,\n            "action": "updateStrategy",\n            "conflict": "string",\n            "payload": "string",\n            "updatedBy": "string",\n            "createdBy": {\n              "username": "string",\n              "imageUrl": "string"\n            },\n            "createdAt": "2023-03-17"\n          }\n        ]\n      }\n    ],\n    "approvals": [\n      {\n        "createdBy": {\n          "id": 33,\n          "username": "unleash-user",\n          "imageUrl": "string"\n        },\n        "createdAt": "2022-12-12T12:13:24.218Z"\n      }\n    ],\n    "comments": [\n      {\n        "id": 33,\n        "text": "This is a comment",\n        "createdBy": {\n          "username": "unleash-user",\n          "imageUrl": "string"\n        },\n        "createdAt": "2022-12-12T12:13:24.218Z"\n      }\n    ],\n    "createdBy": {\n      "username": "string",\n      "imageUrl": "string"\n    },\n    "createdAt": "2023-03-17"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);