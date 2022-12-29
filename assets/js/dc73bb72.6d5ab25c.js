"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9225],{80551:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var s=t(87462),a=(t(67294),t(3905)),n=t(60961),r=t(48165),m=(t(90115),t(58475)),p=t(5428),o=t(80487),l=(t(54881),t(11666));const d={id:"get-permissions",title:"getPermissions",description:"getPermissions",sidebar_label:"getPermissions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getPermissions",responses:{200:{description:"adminPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["permissions","version"],additionalProperties:!1,properties:{permissions:{type:"object",required:["project","environments"],additionalProperties:!1,properties:{project:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}}}},environments:{type:"array",items:{type:"object",required:["name","permissions"],additionalProperties:!1,properties:{name:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}}}}}}}}},version:{type:"number"}}}}}}},description:"getPermissions",method:"get",path:"/api/admin/permissions",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get Permissions",description:{type:"text/plain"},url:{path:["api","admin","permissions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,y={unversionedId:"reference/api/unleash/get-permissions",id:"reference/api/unleash/get-permissions",title:"getPermissions",description:"getPermissions",source:"@site/docs/reference/api/unleash/get-permissions.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-permissions",permalink:"/reference/api/unleash/get-permissions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-permissions",title:"getPermissions",description:"getPermissions",sidebar_label:"getPermissions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getPermissions",responses:{200:{description:"adminPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["permissions","version"],additionalProperties:!1,properties:{permissions:{type:"object",required:["project","environments"],additionalProperties:!1,properties:{project:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}}}},environments:{type:"array",items:{type:"object",required:["name","permissions"],additionalProperties:!1,properties:{name:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}}}}}}}}},version:{type:"number"}}}}}}},description:"getPermissions",method:"get",path:"/api/admin/permissions",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get Permissions",description:{type:"text/plain"},url:{path:["api","admin","permissions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"setSimpleSettings",permalink:"/reference/api/unleash/set-simple-settings"},next:{title:"login",permalink:"/reference/api/unleash/login"}},u={},h=[{value:"getPermissions",id:"getpermissions",level:2}],g={toc:h};function v(e){let{components:i,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},g,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getpermissions"},"getPermissions"),(0,a.kt)("p",null,"getPermissions"),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"adminPermissionsSchema")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"permissions"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"project"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"displayName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"environments"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"permissions"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"displayName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,a.kt)(p.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(m.Z,{responseExample:'{\n  "permissions": {\n    "project": [\n      {\n        "id": 0,\n        "name": "string",\n        "displayName": "string",\n        "type": "string",\n        "environment": "string"\n      }\n    ],\n    "environments": [\n      {\n        "name": "string",\n        "permissions": [\n          {\n            "id": 0,\n            "name": "string",\n            "displayName": "string",\n            "type": "string",\n            "environment": "string"\n          }\n        ]\n      }\n    ]\n  },\n  "version": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);