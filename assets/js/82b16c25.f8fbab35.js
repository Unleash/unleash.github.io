"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2535],{7123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>f,frontMatter:()=>y,metadata:()=>g,toc:()=>b});var s=a(87462),r=(a(67294),a(3905)),i=a(80334),n=(a(11032),a(46062)),p=a(57138),m=a(21439),o=a(9531),l=a(15761),c=a(73418),d=a(92414),u=a(11666);const y={id:"get-project-users",title:"getProjectUsers",description:"getProjectUsers",sidebar_label:"getProjectUsers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjectUsers",responses:{200:{description:"projectUsersSchema",content:{"application/json":{schema:{type:"object",required:["roles","users"],additionalProperties:!1,properties:{users:{type:"array",items:{type:"object",required:["isAPI","id"],properties:{isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string",nullable:!0},id:{type:"number"},imageUrl:{type:"string",nullable:!0},addedAt:{type:"string",format:"date-time"},roleId:{type:"number"}},title:"userWithProjectRoleSchema"}},roles:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},title:"roleSchema"}}},title:"projectUsersSchema"}}}}},deprecated:!0,parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"getProjectUsers",method:"get",path:"/api/admin/projects/{projectId}/users",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Project Users",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","users"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,g={unversionedId:"reference/api/unleash/get-project-users",id:"reference/api/unleash/get-project-users",title:"getProjectUsers",description:"getProjectUsers",source:"@site/docs/reference/api/unleash/get-project-users.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-project-users",permalink:"/reference/api/unleash/get-project-users",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-users",title:"getProjectUsers",description:"getProjectUsers",sidebar_label:"getProjectUsers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjectUsers",responses:{200:{description:"projectUsersSchema",content:{"application/json":{schema:{type:"object",required:["roles","users"],additionalProperties:!1,properties:{users:{type:"array",items:{type:"object",required:["isAPI","id"],properties:{isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string",nullable:!0},id:{type:"number"},imageUrl:{type:"string",nullable:!0},addedAt:{type:"string",format:"date-time"},roleId:{type:"number"}},title:"userWithProjectRoleSchema"}},roles:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},title:"roleSchema"}}},title:"projectUsersSchema"}}}}},deprecated:!0,parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"getProjectUsers",method:"get",path:"/api/admin/projects/{projectId}/users",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Project Users",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","users"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get an overview of a project.",permalink:"/reference/api/unleash/get-project-overview"},next:{title:"getProjectAccess",permalink:"/reference/api/unleash/get-project-access"}},k={},b=[{value:"Request",id:"request",level:2}],j={toc:b};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},j,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"getProjectUsers"),(0,r.kt)(n.Z,{method:"get",path:"/api/admin/projects/{projectId}/users",mdxType:"MethodEndpoint"}),(0,r.kt)(p.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,r.kt)("admonition",{title:"deprecated",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,r.kt)("p",null,"getProjectUsers"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"projectUsersSchema")),(0,r.kt)("div",null,(0,r.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"users"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"isAPI",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"addedAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"roleId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"roles"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "users": [\n    {\n      "isAPI": true,\n      "name": "string",\n      "email": "string",\n      "id": 0,\n      "imageUrl": "string",\n      "addedAt": "2023-06-29T10:03:55.957Z",\n      "roleId": 0\n    }\n  ],\n  "roles": [\n    {\n      "id": 0,\n      "type": "string",\n      "name": "string",\n      "description": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);