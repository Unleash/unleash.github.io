"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3048],{12206:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>h,metadata:()=>g,toc:()=>f});var a=s(87462),i=(s(67294),s(3905)),r=s(80334),o=(s(11032),s(46062)),n=s(57138),l=s(21439),m=(s(9531),s(15761)),p=s(73418),c=s(92414),d=s(11666);const h={id:"search-users",title:"searchUsers",description:"searchUsers",sidebar_label:"searchUsers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"searchUsers",responses:{200:{description:"usersSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["users"],properties:{users:{type:"array",items:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User"},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#standard-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"}},title:"userSchema"}},rootRoles:{type:"array",items:{type:"object",description:"A role holds permissions to allow Unleash to decide what actions a role holder is allowed to perform",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"integer",description:"The role id",example:9,minimum:0},type:{description:"A role can either be a global role (applies to all projects) or a project role",type:"string",example:"global"},name:{description:"The name of the role",type:"string",example:"Editor"},description:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."}},title:"roleSchema"}}},title:"usersSchema"}}}}},description:"searchUsers",method:"get",path:"/api/admin/user-admin/search",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"search Users",description:{type:"text/plain"},url:{path:["api","admin","user-admin","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/search-users",id:"reference/api/unleash/search-users",title:"searchUsers",description:"searchUsers",source:"@site/docs/reference/api/unleash/search-users.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/search-users",permalink:"/reference/api/unleash/search-users",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"search-users",title:"searchUsers",description:"searchUsers",sidebar_label:"searchUsers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"searchUsers",responses:{200:{description:"usersSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["users"],properties:{users:{type:"array",items:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User"},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#standard-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"}},title:"userSchema"}},rootRoles:{type:"array",items:{type:"object",description:"A role holds permissions to allow Unleash to decide what actions a role holder is allowed to perform",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"integer",description:"The role id",example:9,minimum:0},type:{description:"A role can either be a global role (applies to all projects) or a project role",type:"string",example:"global"},name:{description:"The name of the role",type:"string",example:"Editor"},description:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."}},title:"roleSchema"}}},title:"usersSchema"}}}}},description:"searchUsers",method:"get",path:"/api/admin/user-admin/search",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"search Users",description:{type:"text/plain"},url:{path:["api","admin","user-admin","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"createUser",permalink:"/reference/api/unleash/create-user"},next:{title:"getBaseUsersAndGroups",permalink:"/reference/api/unleash/get-base-users-and-groups"}},y={},f=[{value:"Request",id:"request",level:2}],x={toc:f};function b(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},x,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"searchUsers"),(0,i.kt)(o.Z,{method:"get",path:"/api/admin/user-admin/search",mdxType:"MethodEndpoint"}),(0,i.kt)(n.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"searchUsers"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"usersSchema")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"users"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The user id",type:"integer",minimum:0,example:123},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the user",type:"string",example:"User"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Email of the user",type:"string",example:"user@example.com"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A unique username for the user",type:"string",example:"hunter"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#standard-roles) this user is assigned",type:"integer",example:1,minimum:0},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"rootRoles"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The role id",example:9,minimum:0},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"A role can either be a global role (applies to all projects) or a project role",type:"string",example:"global"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the role",type:"string",example:"Editor"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "users": [\n    {\n      "id": 123,\n      "name": "User",\n      "email": "user@example.com",\n      "username": "hunter",\n      "imageUrl": "https://example.com/242x200.png",\n      "inviteLink": "http://localhost:4242/invite-link/some-secret",\n      "loginAttempts": 3,\n      "emailSent": false,\n      "rootRole": 1,\n      "seenAt": "2023-06-30T11:42:00.345Z",\n      "createdAt": "2023-06-30T11:41:00.123Z",\n      "accountType": "User"\n    }\n  ],\n  "rootRoles": [\n    {\n      "id": 9,\n      "type": "global",\n      "name": "Editor",\n      "description": "Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);