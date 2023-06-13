"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9225],{80551:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>g,contentTitle:()=>u,default:()=>_,frontMatter:()=>y,metadata:()=>h,toc:()=>k});var a=i(87462),t=(i(67294),i(3905)),n=i(80334),r=(i(11032),i(46062)),m=i(57138),p=i(21439),o=(i(9531),i(15761)),l=i(73418),d=i(92414),c=i(11666);const y={id:"get-permissions",title:"getPermissions",description:"getPermissions",sidebar_label:"getPermissions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getPermissions",responses:{200:{description:"adminPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["permissions","version"],additionalProperties:!1,properties:{permissions:{type:"object",required:["project","environments"],additionalProperties:!1,properties:{project:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}},title:"adminPermissionSchema"}},environments:{type:"array",items:{type:"object",required:["name","permissions"],additionalProperties:!1,properties:{name:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}},title:"adminPermissionSchema"}}}}}}},version:{type:"number"}},title:"adminPermissionsSchema"}}}}},description:"getPermissions",method:"get",path:"/api/admin/permissions",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Permissions",description:{type:"text/plain"},url:{path:["api","admin","permissions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,h={unversionedId:"reference/api/unleash/get-permissions",id:"reference/api/unleash/get-permissions",title:"getPermissions",description:"getPermissions",source:"@site/docs/reference/api/unleash/get-permissions.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-permissions",permalink:"/reference/api/unleash/get-permissions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-permissions",title:"getPermissions",description:"getPermissions",sidebar_label:"getPermissions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getPermissions",responses:{200:{description:"adminPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["permissions","version"],additionalProperties:!1,properties:{permissions:{type:"object",required:["project","environments"],additionalProperties:!1,properties:{project:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}},title:"adminPermissionSchema"}},environments:{type:"array",items:{type:"object",required:["name","permissions"],additionalProperties:!1,properties:{name:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}},title:"adminPermissionSchema"}}}}}}},version:{type:"number"}},title:"adminPermissionsSchema"}}}}},description:"getPermissions",method:"get",path:"/api/admin/permissions",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Permissions",description:{type:"text/plain"},url:{path:["api","admin","permissions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"setSimpleSettings",permalink:"/reference/api/unleash/set-simple-settings"},next:{title:"validateToken",permalink:"/reference/api/unleash/validate-token"}},g={},k=[{value:"Request",id:"request",level:2}],v={toc:k};function _(e){let{components:s,...i}=e;return(0,t.kt)("wrapper",(0,a.Z)({},v,i,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("h1",{className:"openapi__heading"},"getPermissions"),(0,t.kt)(r.Z,{method:"get",path:"/api/admin/permissions",mdxType:"MethodEndpoint"}),(0,t.kt)(m.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,t.kt)("p",null,"getPermissions"),(0,t.kt)("h2",{id:"request"},"Request"),(0,t.kt)("div",null,(0,t.kt)("div",null,(0,t.kt)(n.Z,{mdxType:"ApiTabs"},(0,t.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"adminPermissionsSchema")),(0,t.kt)("div",null,(0,t.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"permissions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"project"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"environments"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"permissions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,t.kt)(l.Z,{collapsible:!1,name:"version",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(o.Z,{responseExample:'{\n  "permissions": {\n    "project": [\n      {\n        "id": 0,\n        "name": "string",\n        "displayName": "string",\n        "type": "string",\n        "environment": "string"\n      }\n    ],\n    "environments": [\n      {\n        "name": "string",\n        "permissions": [\n          {\n            "id": 0,\n            "name": "string",\n            "displayName": "string",\n            "type": "string",\n            "environment": "string"\n          }\n        ]\n      }\n    ]\n  },\n  "version": 0\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}_.isMDXComponent=!0}}]);