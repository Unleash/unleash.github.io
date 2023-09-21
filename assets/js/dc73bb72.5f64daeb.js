"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9225],{80551:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>g,contentTitle:()=>y,default:()=>k,frontMatter:()=>h,metadata:()=>v,toc:()=>u});var s=t(87462),a=(t(67294),t(3905)),n=t(80334),r=(t(11032),t(46062)),o=t(57138),p=t(21439),m=(t(9531),t(15761)),l=t(73418),c=t(92414),d=t(11666);const h={id:"get-permissions",title:"Gets available permissions",description:"Returns a list of available permissions",sidebar_label:"Gets available permissions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getPermissions",description:"Returns a list of available permissions",responses:{200:{description:"adminPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["permissions","version"],additionalProperties:!1,description:"What kind of permissions are available",properties:{permissions:{type:"object",required:["project","environments"],additionalProperties:!1,description:"Returns permissions available at all three levels (root|project|environment)",properties:{root:{type:"array",description:"Permissions available at the root level, i.e. not connected to any specific project or environment",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,description:"Describes a single permission",properties:{id:{type:"integer",description:"The identifier for this permission",example:3},name:{type:"string",description:"The name of this permission",example:"UPDATE_FEATURE"},displayName:{type:"string",description:"The name to display in listings of permissions",example:"Update feature toggles"},type:{type:"string",description:"What level this permission applies to. Either root, project or the name of the environment it applies to",example:"project"},environment:{description:"Which environment this permission applies to",type:"string",example:"development"}},title:"adminPermissionSchema"}},project:{type:"array",description:"Permissions available at the project level",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,description:"Describes a single permission",properties:{id:{type:"integer",description:"The identifier for this permission",example:3},name:{type:"string",description:"The name of this permission",example:"UPDATE_FEATURE"},displayName:{type:"string",description:"The name to display in listings of permissions",example:"Update feature toggles"},type:{type:"string",description:"What level this permission applies to. Either root, project or the name of the environment it applies to",example:"project"},environment:{description:"Which environment this permission applies to",type:"string",example:"development"}},title:"adminPermissionSchema"}},environments:{type:"array",description:"A list of environments with available permissions per environment",items:{type:"object",required:["name","permissions"],additionalProperties:!1,properties:{name:{type:"string",description:"The name of the environment",example:"development"},permissions:{type:"array",description:"Permissions available for this environment",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,description:"Describes a single permission",properties:{id:{type:"integer",description:"The identifier for this permission",example:3},name:{type:"string",description:"The name of this permission",example:"UPDATE_FEATURE"},displayName:{type:"string",description:"The name to display in listings of permissions",example:"Update feature toggles"},type:{type:"string",description:"What level this permission applies to. Either root, project or the name of the environment it applies to",example:"project"},environment:{description:"Which environment this permission applies to",type:"string",example:"development"}},title:"adminPermissionSchema"}}}}}}},version:{type:"integer",minimum:1,enum:[1,2],description:"The api version of this response. A natural increasing number. Only increases if format changes",example:1}},title:"adminPermissionsSchema"}}}}},method:"get",path:"/api/admin/permissions",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Gets available permissions",description:{content:"Returns a list of available permissions",type:"text/plain"},url:{path:["api","admin","permissions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,v={unversionedId:"reference/api/unleash/get-permissions",id:"reference/api/unleash/get-permissions",title:"Gets available permissions",description:"Returns a list of available permissions",source:"@site/docs/reference/api/unleash/get-permissions.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-permissions",permalink:"/reference/api/unleash/get-permissions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-permissions",title:"Gets available permissions",description:"Returns a list of available permissions",sidebar_label:"Gets available permissions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getPermissions",description:"Returns a list of available permissions",responses:{200:{description:"adminPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["permissions","version"],additionalProperties:!1,description:"What kind of permissions are available",properties:{permissions:{type:"object",required:["project","environments"],additionalProperties:!1,description:"Returns permissions available at all three levels (root|project|environment)",properties:{root:{type:"array",description:"Permissions available at the root level, i.e. not connected to any specific project or environment",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,description:"Describes a single permission",properties:{id:{type:"integer",description:"The identifier for this permission",example:3},name:{type:"string",description:"The name of this permission",example:"UPDATE_FEATURE"},displayName:{type:"string",description:"The name to display in listings of permissions",example:"Update feature toggles"},type:{type:"string",description:"What level this permission applies to. Either root, project or the name of the environment it applies to",example:"project"},environment:{description:"Which environment this permission applies to",type:"string",example:"development"}},title:"adminPermissionSchema"}},project:{type:"array",description:"Permissions available at the project level",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,description:"Describes a single permission",properties:{id:{type:"integer",description:"The identifier for this permission",example:3},name:{type:"string",description:"The name of this permission",example:"UPDATE_FEATURE"},displayName:{type:"string",description:"The name to display in listings of permissions",example:"Update feature toggles"},type:{type:"string",description:"What level this permission applies to. Either root, project or the name of the environment it applies to",example:"project"},environment:{description:"Which environment this permission applies to",type:"string",example:"development"}},title:"adminPermissionSchema"}},environments:{type:"array",description:"A list of environments with available permissions per environment",items:{type:"object",required:["name","permissions"],additionalProperties:!1,properties:{name:{type:"string",description:"The name of the environment",example:"development"},permissions:{type:"array",description:"Permissions available for this environment",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,description:"Describes a single permission",properties:{id:{type:"integer",description:"The identifier for this permission",example:3},name:{type:"string",description:"The name of this permission",example:"UPDATE_FEATURE"},displayName:{type:"string",description:"The name to display in listings of permissions",example:"Update feature toggles"},type:{type:"string",description:"What level this permission applies to. Either root, project or the name of the environment it applies to",example:"project"},environment:{description:"Which environment this permission applies to",type:"string",example:"development"}},title:"adminPermissionSchema"}}}}}}},version:{type:"integer",minimum:1,enum:[1,2],description:"The api version of this response. A natural increasing number. Only increases if format changes",example:1}},title:"adminPermissionsSchema"}}}}},method:"get",path:"/api/admin/permissions",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Gets available permissions",description:{content:"Returns a list of available permissions",type:"text/plain"},url:{path:["api","admin","permissions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Update Simple auth settings",permalink:"/reference/api/unleash/set-simple-settings"},next:{title:"Validates a token",permalink:"/reference/api/unleash/validate-token"}},g={},u=[{value:"Request",id:"request",level:2}],f={toc:u};function k(e){let{components:i,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},f,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Gets available permissions"),(0,a.kt)(r.Z,{method:"get",path:"/api/admin/permissions",mdxType:"MethodEndpoint"}),(0,a.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,a.kt)("p",null,"Returns a list of available permissions"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"adminPermissionsSchema")),(0,a.kt)("div",null,(0,a.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"permissions"),(0,a.kt)("span",{className:"openapi-schema__name"}," object"),(0,a.kt)("span",{className:"openapi-schema__divider"}),(0,a.kt)("span",{className:"openapi-schema__required"},"required"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Returns permissions available at all three levels (root|project|environment)")),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"root"),(0,a.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Permissions available at the root level, i.e. not connected to any specific project or environment")),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The identifier for this permission",example:3},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of this permission",example:"UPDATE_FEATURE"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name to display in listings of permissions",example:"Update feature toggles"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"What level this permission applies to. Either root, project or the name of the environment it applies to",example:"project"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Which environment this permission applies to",type:"string",example:"development"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"project"),(0,a.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,a.kt)("span",{className:"openapi-schema__divider"}),(0,a.kt)("span",{className:"openapi-schema__required"},"required"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Permissions available at the project level")),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The identifier for this permission",example:3},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of this permission",example:"UPDATE_FEATURE"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name to display in listings of permissions",example:"Update feature toggles"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"What level this permission applies to. Either root, project or the name of the environment it applies to",example:"project"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Which environment this permission applies to",type:"string",example:"development"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"environments"),(0,a.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,a.kt)("span",{className:"openapi-schema__divider"}),(0,a.kt)("span",{className:"openapi-schema__required"},"required"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"A list of environments with available permissions per environment")),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the environment",example:"development"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"permissions"),(0,a.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,a.kt)("span",{className:"openapi-schema__divider"}),(0,a.kt)("span",{className:"openapi-schema__required"},"required"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Permissions available for this environment")),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The identifier for this permission",example:3},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of this permission",example:"UPDATE_FEATURE"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name to display in listings of permissions",example:"Update feature toggles"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"What level this permission applies to. Either root, project or the name of the environment it applies to",example:"project"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Which environment this permission applies to",type:"string",example:"development"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(l.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`, [`1`, `2`]",schema:{type:"integer",minimum:1,enum:[1,2],description:"The api version of this response. A natural increasing number. Only increases if format changes",example:1},mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(m.Z,{responseExample:'{\n  "permissions": {\n    "root": [\n      {\n        "id": 3,\n        "name": "UPDATE_FEATURE",\n        "displayName": "Update feature toggles",\n        "type": "project",\n        "environment": "development"\n      }\n    ],\n    "project": [\n      {\n        "id": 3,\n        "name": "UPDATE_FEATURE",\n        "displayName": "Update feature toggles",\n        "type": "project",\n        "environment": "development"\n      }\n    ],\n    "environments": [\n      {\n        "name": "development",\n        "permissions": [\n          {\n            "id": 3,\n            "name": "UPDATE_FEATURE",\n            "displayName": "Update feature toggles",\n            "type": "project",\n            "environment": "development"\n          }\n        ]\n      }\n    ]\n  },\n  "version": 1\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);