"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4693],{39872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var r=a(87462),i=(a(67294),a(3905)),n=a(60961),s=a(48165),p=a(90115),o=a(58475),l=a(5428),m=a(80487),c=(a(54881),a(11666));const d={id:"create-project-api-token",title:"createProjectApiToken",description:"createProjectApiToken",sidebar_label:"createProjectApiToken",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"createProjectApiToken",requestBody:{description:"createApiTokenSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",description:"One of client, admin, frontend"},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",enum:["client","admin","frontend"]},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0},alias:{type:"string",nullable:!0}}}}}},400:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"createProjectApiToken",method:"post",path:"/api/admin/projects/{projectId}/api-tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{secret:"string",username:"string",type:"string",environment:"string",project:"string",projects:["string"],expiresAt:"2023-03-02"},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"create Project Api Token",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","api-tokens"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/create-project-api-token",id:"reference/api/unleash/create-project-api-token",title:"createProjectApiToken",description:"createProjectApiToken",source:"@site/docs/reference/api/unleash/create-project-api-token.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-project-api-token",permalink:"/reference/api/unleash/create-project-api-token",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-project-api-token",title:"createProjectApiToken",description:"createProjectApiToken",sidebar_label:"createProjectApiToken",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"createProjectApiToken",requestBody:{description:"createApiTokenSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",description:"One of client, admin, frontend"},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",enum:["client","admin","frontend"]},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0},alias:{type:"string",nullable:!0}}}}}},400:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"createProjectApiToken",method:"post",path:"/api/admin/projects/{projectId}/api-tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{secret:"string",username:"string",type:"string",environment:"string",project:"string",projects:["string"],expiresAt:"2023-03-02"},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"create Project Api Token",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","api-tokens"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getProjectApiTokens",permalink:"/reference/api/unleash/get-project-api-tokens"},next:{title:"deleteProjectApiToken",permalink:"/reference/api/unleash/delete-project-api-token"}},g={},h=[{value:"createProjectApiToken",id:"createprojectapitoken",level:2}],k={toc:h};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"createprojectapitoken"},"createProjectApiToken"),(0,i.kt)("p",null,"createProjectApiToken"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"createApiTokenSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"secret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"One of client, admin, frontend"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The resource was successfully created.")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"location"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null,(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"The location of the newly created resource.")))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"secret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`client`, `admin`, `frontend`]",schema:{type:"string",enum:["client","admin","frontend"]},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"alias",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "secret": "string",\n  "username": "string",\n  "type": "client",\n  "environment": "string",\n  "project": "string",\n  "projects": [\n    "string"\n  ],\n  "expiresAt": "2023-03-02",\n  "createdAt": "2023-03-02",\n  "seenAt": "2023-03-02",\n  "alias": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null)))))}f.isMDXComponent=!0}}]);