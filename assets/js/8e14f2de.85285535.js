"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9745],{35957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),r=a(60961),n=a(48165),m=(a(90115),a(58475)),l=a(5428),p=a(80487),o=(a(54881),a(11666));const d={id:"get-me",title:"getMe",description:"getMe",sidebar_label:"getMe",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getMe",responses:{200:{description:"meSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["user","permissions","feedback","splash"],properties:{user:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}}},permissions:{type:"array",items:{type:"object",additionalProperties:!1,required:["permission"],properties:{permission:{type:"string"},project:{type:"string"},environment:{type:"string"}}}},feedback:{type:"array",items:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}},splash:{type:"object",additionalProperties:{type:"boolean"}}}}}}}},description:"getMe",method:"get",path:"/api/admin/user",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get Me",description:{type:"text/plain"},url:{path:["api","admin","user"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,y={unversionedId:"reference/api/unleash/get-me",id:"reference/api/unleash/get-me",title:"getMe",description:"getMe",source:"@site/docs/reference/api/unleash/get-me.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-me",permalink:"/reference/api/unleash/get-me",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-me",title:"getMe",description:"getMe",sidebar_label:"getMe",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getMe",responses:{200:{description:"meSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["user","permissions","feedback","splash"],properties:{user:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}}},permissions:{type:"array",items:{type:"object",additionalProperties:!1,required:["permission"],properties:{permission:{type:"string"},project:{type:"string"},environment:{type:"string"}}}},feedback:{type:"array",items:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}},splash:{type:"object",additionalProperties:{type:"boolean"}}}}}}}},description:"getMe",method:"get",path:"/api/admin/user",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get Me",description:{type:"text/plain"},url:{path:["api","admin","user"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"validateRole",permalink:"/reference/api/unleash/validate-role"},next:{title:"getProfile",permalink:"/reference/api/unleash/get-profile"}},u={},g=[{value:"getMe",id:"getme",level:2}],h={toc:g};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getme"},"getMe"),(0,s.kt)("p",null,"getMe"),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"meSchema")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"user"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"permissions"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"permission",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"feedback"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"userId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"given",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"splash"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("code",null,"property name*"),(0,s.kt)("span",{style:{opacity:"0.6"}}," boolean"))))))))),(0,s.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "user": {\n    "id": 0,\n    "isAPI": true,\n    "name": "string",\n    "email": "string",\n    "username": "string",\n    "imageUrl": "string",\n    "inviteLink": "string",\n    "loginAttempts": 0,\n    "emailSent": true,\n    "rootRole": 0,\n    "seenAt": "2023-03-07",\n    "createdAt": "2023-03-07",\n    "accountType": "string"\n  },\n  "permissions": [\n    {\n      "permission": "string",\n      "project": "string",\n      "environment": "string"\n    }\n  ],\n  "feedback": [\n    {\n      "userId": 0,\n      "feedbackId": "string",\n      "neverShow": true,\n      "given": "2023-03-07"\n    }\n  ],\n  "splash": {}\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);