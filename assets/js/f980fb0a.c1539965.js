"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[814],{60906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var s=a(87462),i=(a(67294),a(3905)),r=a(60961),n=a(48165),m=(a(90115),a(58475)),l=a(5428),p=a(80487),o=(a(54881),a(11666));const d={id:"get-users",title:"getUsers",description:"getUsers",sidebar_label:"getUsers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getUsers",responses:{200:{description:"usersSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["users"],properties:{users:{type:"array",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}}}},rootRoles:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}}}}}},description:"getUsers",method:"get",path:"/api/admin/user-admin",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.20.5"},postman:{name:"get Users",description:{type:"text/plain"},url:{path:["api","admin","user-admin"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,u={unversionedId:"reference/api/unleash/get-users",id:"reference/api/unleash/get-users",title:"getUsers",description:"getUsers",source:"@site/docs/reference/api/unleash/get-users.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-users",permalink:"/reference/api/unleash/get-users",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-users",title:"getUsers",description:"getUsers",sidebar_label:"getUsers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getUsers",responses:{200:{description:"usersSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["users"],properties:{users:{type:"array",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}}}},rootRoles:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}}}}}},description:"getUsers",method:"get",path:"/api/admin/user-admin",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.20.5"},postman:{name:"get Users",description:{type:"text/plain"},url:{path:["api","admin","user-admin"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"resetUserPassword",permalink:"/reference/api/unleash/reset-user-password"},next:{title:"createUser",permalink:"/reference/api/unleash/create-user"}},y={},g=[{value:"getUsers",id:"getusers",level:2}],h={toc:g};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getusers"},"getUsers"),(0,i.kt)("p",null,"getUsers"),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"usersSchema")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"users"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"rootRoles"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "users": [\n    {\n      "id": 0,\n      "isAPI": true,\n      "name": "string",\n      "email": "string",\n      "username": "string",\n      "imageUrl": "string",\n      "inviteLink": "string",\n      "loginAttempts": 0,\n      "emailSent": true,\n      "rootRole": 0,\n      "seenAt": "2023-02-14",\n      "createdAt": "2023-02-14",\n      "accountType": "string"\n    }\n  ],\n  "rootRoles": [\n    {\n      "id": 0,\n      "type": "string",\n      "name": "string",\n      "description": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);