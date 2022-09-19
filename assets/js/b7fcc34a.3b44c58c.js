"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3048],{28909:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var s=t(87462),i=(t(67294),t(3905)),r=t(70439),n=t(89402),m=(t(10725),t(65860)),l=t(5479),o=t(83559),p=(t(48567),t(72905));const d={id:"search-users",sidebar_label:"searchUsers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"searchUsers",responses:{200:{description:"usersSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["users"],properties:{users:{type:"array",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"}}}},rootRoles:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}}}}}},description:"searchUsers",method:"get",path:"/ushosted/api/admin/user-admin/search",servers:[{url:"https://us.app.unleash-hosted.com"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"search Users",description:{type:"text/plain"},url:{path:["ushosted","api","admin","user-admin","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/reference/api/unleash/unleash-api"},c=void 0,u={unversionedId:"reference/api/unleash/search-users",id:"reference/api/unleash/search-users",title:"search-users",description:"searchUsers",source:"@site/docs/reference/api/unleash/search-users.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/search-users",permalink:"/reference/api/unleash/search-users",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/search-users.api.mdx",tags:[],version:"current",frontMatter:{id:"search-users",sidebar_label:"searchUsers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"searchUsers",responses:{200:{description:"usersSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["users"],properties:{users:{type:"array",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"}}}},rootRoles:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}}}}}},description:"searchUsers",method:"get",path:"/ushosted/api/admin/user-admin/search",servers:[{url:"https://us.app.unleash-hosted.com"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"search Users",description:{type:"text/plain"},url:{path:["ushosted","api","admin","user-admin","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"createUser",permalink:"/reference/api/unleash/create-user"},next:{title:"getBaseUsersAndGroups",permalink:"/reference/api/unleash/get-base-users-and-groups"}},h={},y=[{value:"searchUsers",id:"searchusers",level:2}],g={toc:y};function v(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"searchusers"},"searchUsers"),(0,i.kt)("p",null,"searchUsers"),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"usersSchema")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"users"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"isAPI",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"email",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"emailSent",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"rootRole",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"rootRoles"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "users": [\n    {\n      "id": 0,\n      "isAPI": true,\n      "name": "string",\n      "email": "string",\n      "username": "string",\n      "imageUrl": "string",\n      "inviteLink": "string",\n      "loginAttempts": 0,\n      "emailSent": true,\n      "rootRole": 0,\n      "seenAt": "2022-09-19",\n      "createdAt": "2022-09-19"\n    }\n  ],\n  "rootRoles": [\n    {\n      "id": 0,\n      "type": "string",\n      "name": "string",\n      "description": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);