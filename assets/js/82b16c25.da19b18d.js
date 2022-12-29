"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2535],{7123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var r=a(87462),i=(a(67294),a(3905)),s=a(60961),n=a(48165),o=a(90115),p=a(58475),l=a(5428),d=a(80487),m=(a(54881),a(11666));const c={id:"get-project-users",title:"getProjectUsers",description:"getProjectUsers",sidebar_label:"getProjectUsers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjectUsers",responses:{200:{description:"projectUsers",content:{"application/json":{schema:{type:"object",required:["roles","users"],additionalProperties:!1,properties:{users:{type:"array",items:{type:"object",required:["isAPI","id"],properties:{isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string",nullable:!0},id:{type:"number"},imageUrl:{type:"string",nullable:!0},addedAt:{type:"string",format:"date-time"},roleId:{type:"number"}}}},roles:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}}}}}},deprecated:!0,parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"getProjectUsers",method:"get",path:"/api/admin/projects/{projectId}/users",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get Project Users",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","users"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/get-project-users",id:"reference/api/unleash/get-project-users",title:"getProjectUsers",description:"getProjectUsers",source:"@site/docs/reference/api/unleash/get-project-users.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-project-users",permalink:"/reference/api/unleash/get-project-users",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-users",title:"getProjectUsers",description:"getProjectUsers",sidebar_label:"getProjectUsers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjectUsers",responses:{200:{description:"projectUsers",content:{"application/json":{schema:{type:"object",required:["roles","users"],additionalProperties:!1,properties:{users:{type:"array",items:{type:"object",required:["isAPI","id"],properties:{isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string",nullable:!0},id:{type:"number"},imageUrl:{type:"string",nullable:!0},addedAt:{type:"string",format:"date-time"},roleId:{type:"number"}}}},roles:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}}}}}},deprecated:!0,parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"getProjectUsers",method:"get",path:"/api/admin/projects/{projectId}/users",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get Project Users",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","users"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getProjectHealthOverview",permalink:"/reference/api/unleash/get-project-health-overview"},next:{title:"getProjectAccess",permalink:"/reference/api/unleash/get-project-access"}},h={},g=[{value:"getProjectUsers",id:"getprojectusers",level:2}],v={toc:g};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getprojectusers"},"getProjectUsers"),(0,i.kt)("admonition",{title:"deprecated",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,i.kt)("p",null,"getProjectUsers"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"projectUsers")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"users"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"isAPI",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"email",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"imageUrl",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"addedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"roleId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"roles"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"description",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "users": [\n    {\n      "isAPI": true,\n      "name": "string",\n      "email": "string",\n      "id": 0,\n      "imageUrl": "string",\n      "addedAt": "2022-12-29",\n      "roleId": 0\n    }\n  ],\n  "roles": [\n    {\n      "id": 0,\n      "type": "string",\n      "name": "string",\n      "description": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);