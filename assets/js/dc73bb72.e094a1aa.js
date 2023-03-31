"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9225],{80551:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>g,contentTitle:()=>y,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var s=t(87462),a=(t(67294),t(3905)),n=t(80334),r=(t(11032),t(46062)),m=t(21439),o=(t(9531),t(15761)),p=t(73418),l=t(92414),d=t(11666);const c={id:"get-permissions",title:"getPermissions",description:"getPermissions",sidebar_label:"getPermissions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getPermissions",responses:{200:{description:"adminPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["permissions","version"],additionalProperties:!1,properties:{permissions:{type:"object",required:["project","environments"],additionalProperties:!1,properties:{project:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}},title:"adminPermissionSchema"}},environments:{type:"array",items:{type:"object",required:["name","permissions"],additionalProperties:!1,properties:{name:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}},title:"adminPermissionSchema"}}}}}}},version:{type:"number"}},title:"adminPermissionsSchema"}}}}},description:"getPermissions",method:"get",path:"/api/admin/permissions",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"get Permissions",description:{type:"text/plain"},url:{path:["api","admin","permissions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,u={unversionedId:"reference/api/unleash/get-permissions",id:"reference/api/unleash/get-permissions",title:"getPermissions",description:"getPermissions",source:"@site/docs/reference/api/unleash/get-permissions.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-permissions",permalink:"/reference/api/unleash/get-permissions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-permissions",title:"getPermissions",description:"getPermissions",sidebar_label:"getPermissions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getPermissions",responses:{200:{description:"adminPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["permissions","version"],additionalProperties:!1,properties:{permissions:{type:"object",required:["project","environments"],additionalProperties:!1,properties:{project:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}},title:"adminPermissionSchema"}},environments:{type:"array",items:{type:"object",required:["name","permissions"],additionalProperties:!1,properties:{name:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}},title:"adminPermissionSchema"}}}}}}},version:{type:"number"}},title:"adminPermissionsSchema"}}}}},description:"getPermissions",method:"get",path:"/api/admin/permissions",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"get Permissions",description:{type:"text/plain"},url:{path:["api","admin","permissions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"setSimpleSettings",permalink:"/reference/api/unleash/set-simple-settings"},next:{title:"validateToken",permalink:"/reference/api/unleash/validate-token"}},g={},h=[],k={toc:h};function v(e){let{components:i,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},k,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"getPermissions"),(0,a.kt)(r.Z,{method:"get",path:"/api/admin/permissions",mdxType:"MethodEndpoint"}),(0,a.kt)("p",null,"getPermissions"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"adminPermissionsSchema")),(0,a.kt)("div",null,(0,a.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"permissions"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"project"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"environments"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"permissions"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(p.Z,{collapsible:!1,name:"version",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "permissions": {\n    "project": [\n      {\n        "id": 0,\n        "name": "string",\n        "displayName": "string",\n        "type": "string",\n        "environment": "string"\n      }\n    ],\n    "environments": [\n      {\n        "name": "string",\n        "permissions": [\n          {\n            "id": 0,\n            "name": "string",\n            "displayName": "string",\n            "type": "string",\n            "environment": "string"\n          }\n        ]\n      }\n    ]\n  },\n  "version": 0\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);