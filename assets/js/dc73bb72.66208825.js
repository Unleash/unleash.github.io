"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9225],{80551:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>k,frontMatter:()=>d,metadata:()=>c,toc:()=>g});var s=i(87462),a=(i(67294),i(3905)),n=i(60961),r=i(48165),m=(i(90115),i(58475)),p=i(5428),o=i(80487),l=(i(54881),i(11666));const d={id:"get-permissions",title:"getPermissions",description:"getPermissions",sidebar_label:"getPermissions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getPermissions",responses:{200:{description:"adminPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["permissions","version"],additionalProperties:!1,properties:{permissions:{type:"object",required:["project","environments"],additionalProperties:!1,properties:{project:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}}}},environments:{type:"array",items:{type:"object",required:["name","permissions"],additionalProperties:!1,properties:{name:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}}}}}}}}},version:{type:"number"}}}}}}},description:"getPermissions",method:"get",path:"/api/admin/permissions",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get Permissions",description:{type:"text/plain"},url:{path:["api","admin","permissions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,c={unversionedId:"reference/api/unleash/get-permissions",id:"reference/api/unleash/get-permissions",title:"getPermissions",description:"getPermissions",source:"@site/docs/reference/api/unleash/get-permissions.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-permissions",permalink:"/reference/api/unleash/get-permissions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-permissions",title:"getPermissions",description:"getPermissions",sidebar_label:"getPermissions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getPermissions",responses:{200:{description:"adminPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["permissions","version"],additionalProperties:!1,properties:{permissions:{type:"object",required:["project","environments"],additionalProperties:!1,properties:{project:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}}}},environments:{type:"array",items:{type:"object",required:["name","permissions"],additionalProperties:!1,properties:{name:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}}}}}}}}},version:{type:"number"}}}}}}},description:"getPermissions",method:"get",path:"/api/admin/permissions",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get Permissions",description:{type:"text/plain"},url:{path:["api","admin","permissions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"setSimpleSettings",permalink:"/reference/api/unleash/set-simple-settings"},next:{title:"validateToken",permalink:"/reference/api/unleash/validate-token"}},u={},g=[{value:"getPermissions",id:"getpermissions",level:2}],h={toc:g};function k(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getpermissions"},"getPermissions"),(0,a.kt)("p",null,"getPermissions"),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"adminPermissionsSchema")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"permissions"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"project"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"displayName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"environments"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"permissions"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"displayName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(p.Z,{collapsible:!1,name:"version",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(m.Z,{responseExample:'{\n  "permissions": {\n    "project": [\n      {\n        "id": 0,\n        "name": "string",\n        "displayName": "string",\n        "type": "string",\n        "environment": "string"\n      }\n    ],\n    "environments": [\n      {\n        "name": "string",\n        "permissions": [\n          {\n            "id": 0,\n            "name": "string",\n            "displayName": "string",\n            "type": "string",\n            "environment": "string"\n          }\n        ]\n      }\n    ]\n  },\n  "version": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);