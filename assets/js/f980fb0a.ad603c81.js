"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[814],{60906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>h,metadata:()=>g,toc:()=>f});var s=a(87462),i=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),o=a(57138),l=a(21439),p=(a(9531),a(15761)),m=a(73418),d=a(92414),c=a(11666);const h={id:"get-users",title:"Get all users and [root roles](https://docs.getunleash.io/reference/rbac#predefined-roles)",description:"Will return all users and all available root roles for the Unleash instance.",sidebar_label:"Get all users and [root roles](https://docs.getunleash.io/reference/rbac#predefined-roles)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getUsers",description:"Will return all users and all available root roles for the Unleash instance.",responses:{200:{description:"usersSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Users and root roles",required:["users"],properties:{users:{type:"array",description:"A list of users in the Unleash instance.",items:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User",nullable:!0},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"userSchema"}},rootRoles:{type:"array",description:"A list of [root roles](https://docs.getunleash.io/reference/rbac#predefined-roles) in the Unleash instance.",items:{type:"object",description:"A role holds permissions to allow Unleash to decide what actions a role holder is allowed to perform",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"integer",description:"The role id",example:9,minimum:0},type:{description:"A role can either be a global root role (applies to all projects) or a project role",type:"string",example:"root"},name:{description:"The name of the role",type:"string",example:"Editor"},description:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."}},title:"roleSchema"}}},title:"usersSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/user-admin",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.5.3"},postman:{name:"Get all users and [root roles](https://docs.getunleash.io/reference/rbac#predefined-roles)",description:{content:"Will return all users and all available root roles for the Unleash instance.",type:"text/plain"},url:{path:["api","admin","user-admin"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/get-users",id:"reference/api/unleash/get-users",title:"Get all users and [root roles](https://docs.getunleash.io/reference/rbac#predefined-roles)",description:"Will return all users and all available root roles for the Unleash instance.",source:"@site/docs/reference/api/unleash/get-users.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-users",permalink:"/reference/api/unleash/get-users",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-users",title:"Get all users and [root roles](https://docs.getunleash.io/reference/rbac#predefined-roles)",description:"Will return all users and all available root roles for the Unleash instance.",sidebar_label:"Get all users and [root roles](https://docs.getunleash.io/reference/rbac#predefined-roles)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getUsers",description:"Will return all users and all available root roles for the Unleash instance.",responses:{200:{description:"usersSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Users and root roles",required:["users"],properties:{users:{type:"array",description:"A list of users in the Unleash instance.",items:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User",nullable:!0},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"userSchema"}},rootRoles:{type:"array",description:"A list of [root roles](https://docs.getunleash.io/reference/rbac#predefined-roles) in the Unleash instance.",items:{type:"object",description:"A role holds permissions to allow Unleash to decide what actions a role holder is allowed to perform",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"integer",description:"The role id",example:9,minimum:0},type:{description:"A role can either be a global root role (applies to all projects) or a project role",type:"string",example:"root"},name:{description:"The name of the role",type:"string",example:"Editor"},description:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."}},title:"roleSchema"}}},title:"usersSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/user-admin",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.5.3"},postman:{name:"Get all users and [root roles](https://docs.getunleash.io/reference/rbac#predefined-roles)",description:{content:"Will return all users and all available root roles for the Unleash instance.",type:"text/plain"},url:{path:["api","admin","user-admin"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Reset user password",permalink:"/reference/api/unleash/reset-user-password"},next:{title:"Create a new user",permalink:"/reference/api/unleash/create-user"}},y={},f=[{value:"Request",id:"request",level:2}],b={toc:f};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Get all users and [root roles](https://docs.getunleash.io/reference/rbac#predefined-roles)"),(0,i.kt)(n.Z,{method:"get",path:"/api/admin/user-admin",mdxType:"MethodEndpoint"}),(0,i.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Will return all users and all available root roles for the Unleash instance."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"usersSchema")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"users"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"A list of users in the Unleash instance.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The user id",type:"integer",minimum:0,example:123},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the user",type:"string",example:"User",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Email of the user",type:"string",example:"user@example.com"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A unique username for the user",type:"string",example:"hunter"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned",type:"integer",example:1,minimum:0},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"permissions",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Deprecated",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"rootRoles"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"A list of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/rbac#predefined-roles"},"root roles")," in the Unleash instance.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The role id",example:9,minimum:0},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"A role can either be a global root role (applies to all projects) or a project role",type:"string",example:"root"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the role",type:"string",example:"Editor"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "users": [\n    {\n      "id": 123,\n      "name": "User",\n      "email": "user@example.com",\n      "username": "hunter",\n      "imageUrl": "https://example.com/242x200.png",\n      "inviteLink": "http://localhost:4242/invite-link/some-secret",\n      "loginAttempts": 3,\n      "emailSent": false,\n      "rootRole": 1,\n      "seenAt": "2023-06-30T11:42:00.345Z",\n      "createdAt": "2023-06-30T11:41:00.123Z",\n      "accountType": "User",\n      "permissions": [\n        "string"\n      ]\n    }\n  ],\n  "rootRoles": [\n    {\n      "id": 9,\n      "type": "root",\n      "name": "Editor",\n      "description": "Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);