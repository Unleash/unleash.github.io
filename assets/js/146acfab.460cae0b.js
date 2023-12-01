"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[32365],{6591:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>f,frontMatter:()=>u,metadata:()=>y,toc:()=>k});var i=a(87462),s=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),o=a(57138),m=a(21439),l=(a(9531),a(15761)),p=a(73418),d=a(92414),c=a(30433);const u={id:"create-user",title:"Create a new user",description:"Creates a new user with the given root role.",sidebar_label:"Create a new user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"createUser",description:"Creates a new user with the given root role.",requestBody:{description:"createUserSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["rootRole"],description:"The payload must contain at least one of the name and email properties, though which one is up to you. For the user to be able to log in to the system, the user must have an email.",properties:{username:{description:"The user's username. Must be provided if email is not provided.",type:"string",example:"hunter"},email:{description:"The user's email address. Must be provided if username is not provided.",type:"string",example:"user@example.com"},name:{description:"The user's name (not the user's username).",type:"string",example:"Sam Seawright"},password:{type:"string",example:"k!5As3HquUrQ",description:"Password for the user"},rootRole:{description:"The role to assign to the user. Can be either the role's ID or its unique name.",oneOf:[{type:"integer",example:1,minimum:0},{type:"string",example:"Admin",enum:["Admin","Editor","Viewer","Owner","Member"]}]},sendEmail:{type:"boolean",example:!1,description:"Whether to send a welcome email with a login link to the user or not. Defaults to `true`."}},title:"createUserSchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"An Unleash user after creation",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User",nullable:!0},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned. Usually a numeric role ID, but can be a string when returning newly created user with an explicit string role.",oneOf:[{type:"integer",example:1,minimum:0},{type:"string",example:"Admin",enum:["Admin","Editor","Viewer","Owner","Member"]}]},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"createUserResponseSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/user-admin",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{username:"hunter",email:"user@example.com",name:"Sam Seawright",password:"k!5As3HquUrQ",rootRole:1,sendEmail:!1},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Create a new user",description:{content:"Creates a new user with the given root role.",type:"text/plain"},url:{path:["api","admin","user-admin"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,y={unversionedId:"reference/api/unleash/create-user",id:"reference/api/unleash/create-user",title:"Create a new user",description:"Creates a new user with the given root role.",source:"@site/docs/reference/api/unleash/create-user.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-user",permalink:"/reference/api/unleash/create-user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-user",title:"Create a new user",description:"Creates a new user with the given root role.",sidebar_label:"Create a new user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"createUser",description:"Creates a new user with the given root role.",requestBody:{description:"createUserSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["rootRole"],description:"The payload must contain at least one of the name and email properties, though which one is up to you. For the user to be able to log in to the system, the user must have an email.",properties:{username:{description:"The user's username. Must be provided if email is not provided.",type:"string",example:"hunter"},email:{description:"The user's email address. Must be provided if username is not provided.",type:"string",example:"user@example.com"},name:{description:"The user's name (not the user's username).",type:"string",example:"Sam Seawright"},password:{type:"string",example:"k!5As3HquUrQ",description:"Password for the user"},rootRole:{description:"The role to assign to the user. Can be either the role's ID or its unique name.",oneOf:[{type:"integer",example:1,minimum:0},{type:"string",example:"Admin",enum:["Admin","Editor","Viewer","Owner","Member"]}]},sendEmail:{type:"boolean",example:!1,description:"Whether to send a welcome email with a login link to the user or not. Defaults to `true`."}},title:"createUserSchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"An Unleash user after creation",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User",nullable:!0},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned. Usually a numeric role ID, but can be a string when returning newly created user with an explicit string role.",oneOf:[{type:"integer",example:1,minimum:0},{type:"string",example:"Admin",enum:["Admin","Editor","Viewer","Owner","Member"]}]},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"createUserResponseSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/user-admin",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{username:"hunter",email:"user@example.com",name:"Sam Seawright",password:"k!5As3HquUrQ",rootRole:1,sendEmail:!1},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Create a new user",description:{content:"Creates a new user with the given root role.",type:"text/plain"},url:{path:["api","admin","user-admin"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all users and [root roles](https://docs.getunleash.io/reference/rbac#predefined-roles)",permalink:"/reference/api/unleash/get-users"},next:{title:"Search users",permalink:"/reference/api/unleash/search-users"}},g={},k=[{value:"Request",id:"request",level:2}],b={toc:k};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Create a new user"),(0,s.kt)(n.Z,{method:"post",path:"/api/admin/user-admin",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Creates a new user with the given root role."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)(m.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"createUserSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The user's username. Must be provided if email is not provided.",type:"string",example:"hunter"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The user's email address. Must be provided if username is not provided.",type:"string",example:"user@example.com"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The user's name (not the user's username).",type:"string",example:"Sam Seawright"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"password",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"k!5As3HquUrQ",description:"Password for the user"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"rootRole"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The role to assign to the user. Can be either the role's ID or its unique name.")),(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer")))),(0,s.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,s.kt)("inlineCode",{parentName:"p"},"Admin"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Editor"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Viewer"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Owner"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Member"),"]")))))))))),(0,s.kt)(p.Z,{collapsible:!1,name:"sendEmail",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1,description:"Whether to send a welcome email with a login link to the user or not. Defaults to `true`."},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The resource was successfully created.")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null,(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The location of the newly created resource.")))))),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The user id",type:"integer",minimum:0,example:123},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the user",type:"string",example:"User",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Email of the user",type:"string",example:"user@example.com"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A unique username for the user",type:"string",example:"hunter"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"rootRole"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Which ",(0,s.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/rbac#predefined-roles"},"root role")," this user is assigned. Usually a numeric role ID, but can be a string when returning newly created user with an explicit string role.")),(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer")))),(0,s.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,s.kt)("inlineCode",{parentName:"p"},"Admin"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Editor"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Viewer"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Owner"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Member"),"]")))))))))),(0,s.kt)(p.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"permissions",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Deprecated",type:"array",items:{type:"string"}},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": 123,\n  "name": "User",\n  "email": "user@example.com",\n  "username": "hunter",\n  "imageUrl": "https://example.com/242x200.png",\n  "inviteLink": "http://localhost:4242/invite-link/some-secret",\n  "loginAttempts": 3,\n  "emailSent": false,\n  "rootRole": 1,\n  "seenAt": "2023-06-30T11:42:00.345Z",\n  "createdAt": "2023-06-30T11:41:00.123Z",\n  "accountType": "User",\n  "permissions": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);