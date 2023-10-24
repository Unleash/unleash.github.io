"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[58623],{87533:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>x,frontMatter:()=>c,metadata:()=>g,toc:()=>f});var a=i(87462),s=(i(67294),i(3905)),r=i(80334),n=(i(11032),i(46062)),o=i(57138),m=i(21439),p=(i(9531),i(15761)),l=i(73418),d=i(92414),u=i(30433);const c={id:"get-base-users-and-groups",title:"Get basic user and group information",description:"Get a subset of user and group information eligible even for non-admin users",sidebar_label:"Get basic user and group information",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getBaseUsersAndGroups",description:"Get a subset of user and group information eligible even for non-admin users",responses:{200:{description:"usersGroupsBaseSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"An overview of user groups and users.",properties:{groups:{type:"array",description:"A list of user groups and their configuration.",items:{type:"object",additionalProperties:!1,required:["name"],description:"A detailed information about a user group",properties:{id:{description:"The group id",type:"integer",example:1},name:{description:"The name of the group",type:"string",example:"DX team"},description:{description:"A custom description of the group",type:"string",nullable:!0,example:"Current members of the DX squad"},mappingsSSO:{description:"A list of SSO groups that should map to this Unleash group",type:"array",items:{type:"string"},example:["SSOGroup1","SSOGroup2"]},rootRole:{type:"number",nullable:!0,description:"A role id that is used as the root role for all users in this group. This can be either the id of the Viewer, Editor or Admin role.",example:1},createdBy:{description:"A user who created this group",type:"string",nullable:!0,example:"admin"},createdAt:{description:"When was this group created",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:41:00.123Z"},users:{type:"array",description:"A list of users belonging to this group",items:{type:"object",additionalProperties:!1,required:["user"],description:"Details for a single user belonging to a group",properties:{joinedAt:{description:"The date when the user joined the group",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},createdBy:{description:"The username of the user who added this user to this group",type:"string",nullable:!0,example:"admin"},user:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User",nullable:!0},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"userSchema"}},title:"groupUserModelSchema"}},projects:{description:"A list of projects where this group is used",type:"array",items:{type:"string"},example:["default","my-project"]},userCount:{description:"The number of users that belong to this group",example:1,type:"integer",minimum:0}},title:"groupSchema"},example:[{id:1,name:"unleash-e2e-7095756699593281",userCount:1,rootRole:null}]},users:{type:"array",items:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User",nullable:!0},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"userSchema"},description:"A list of users.",example:[{id:4,name:"unleash-e2e-user2-7095756699593281",email:"unleash-e2e-user2-7095756699593281@test.com",accountType:"User"},{id:1,username:"admin",accountType:"User"}]}},title:"usersGroupsBaseSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/user-admin/access",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Get basic user and group information",description:{content:"Get a subset of user and group information eligible even for non-admin users",type:"text/plain"},url:{path:["api","admin","user-admin","access"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,g={unversionedId:"reference/api/unleash/get-base-users-and-groups",id:"reference/api/unleash/get-base-users-and-groups",title:"Get basic user and group information",description:"Get a subset of user and group information eligible even for non-admin users",source:"@site/docs/reference/api/unleash/get-base-users-and-groups.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-base-users-and-groups",permalink:"/reference/api/unleash/get-base-users-and-groups",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-base-users-and-groups",title:"Get basic user and group information",description:"Get a subset of user and group information eligible even for non-admin users",sidebar_label:"Get basic user and group information",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getBaseUsersAndGroups",description:"Get a subset of user and group information eligible even for non-admin users",responses:{200:{description:"usersGroupsBaseSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"An overview of user groups and users.",properties:{groups:{type:"array",description:"A list of user groups and their configuration.",items:{type:"object",additionalProperties:!1,required:["name"],description:"A detailed information about a user group",properties:{id:{description:"The group id",type:"integer",example:1},name:{description:"The name of the group",type:"string",example:"DX team"},description:{description:"A custom description of the group",type:"string",nullable:!0,example:"Current members of the DX squad"},mappingsSSO:{description:"A list of SSO groups that should map to this Unleash group",type:"array",items:{type:"string"},example:["SSOGroup1","SSOGroup2"]},rootRole:{type:"number",nullable:!0,description:"A role id that is used as the root role for all users in this group. This can be either the id of the Viewer, Editor or Admin role.",example:1},createdBy:{description:"A user who created this group",type:"string",nullable:!0,example:"admin"},createdAt:{description:"When was this group created",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:41:00.123Z"},users:{type:"array",description:"A list of users belonging to this group",items:{type:"object",additionalProperties:!1,required:["user"],description:"Details for a single user belonging to a group",properties:{joinedAt:{description:"The date when the user joined the group",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},createdBy:{description:"The username of the user who added this user to this group",type:"string",nullable:!0,example:"admin"},user:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User",nullable:!0},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"userSchema"}},title:"groupUserModelSchema"}},projects:{description:"A list of projects where this group is used",type:"array",items:{type:"string"},example:["default","my-project"]},userCount:{description:"The number of users that belong to this group",example:1,type:"integer",minimum:0}},title:"groupSchema"},example:[{id:1,name:"unleash-e2e-7095756699593281",userCount:1,rootRole:null}]},users:{type:"array",items:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User",nullable:!0},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"userSchema"},description:"A list of users.",example:[{id:4,name:"unleash-e2e-user2-7095756699593281",email:"unleash-e2e-user2-7095756699593281@test.com",accountType:"User"},{id:1,username:"admin",accountType:"User"}]}},title:"usersGroupsBaseSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/user-admin/access",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Get basic user and group information",description:{content:"Get a subset of user and group information eligible even for non-admin users",type:"text/plain"},url:{path:["api","admin","user-admin","access"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Search users",permalink:"/reference/api/unleash/search-users"},next:{title:"Get total count of admin accounts",permalink:"/reference/api/unleash/get-admin-count"}},y={},f=[{value:"Request",id:"request",level:2}],b={toc:f};function x(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Get basic user and group information"),(0,s.kt)(n.Z,{method:"get",path:"/api/admin/user-admin/access",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Get a subset of user and group information eligible even for non-admin users"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"usersGroupsBaseSchema")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"groups"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of user groups and their configuration.")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The group id",type:"integer",example:1},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the group",type:"string",example:"DX team"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A custom description of the group",type:"string",nullable:!0,example:"Current members of the DX squad"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"mappingsSSO",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"A list of SSO groups that should map to this Unleash group",type:"array",items:{type:"string"},example:["SSOGroup1","SSOGroup2"]},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",nullable:!0,description:"A role id that is used as the root role for all users in this group. This can be either the id of the Viewer, Editor or Admin role.",example:1},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"createdBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A user who created this group",type:"string",nullable:!0,example:"admin"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"When was this group created",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:41:00.123Z"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"users"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of users belonging to this group")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"joinedAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The date when the user joined the group",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"createdBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The username of the user who added this user to this group",type:"string",nullable:!0,example:"admin"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"user"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"An Unleash user")),(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The user id",type:"integer",minimum:0,example:123},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the user",type:"string",example:"User",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Email of the user",type:"string",example:"user@example.com"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A unique username for the user",type:"string",example:"hunter"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned",type:"integer",example:1,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"permissions",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Deprecated",type:"array",items:{type:"string"}},mdxType:"SchemaItem"})))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"A list of projects where this group is used",type:"array",items:{type:"string"},example:["default","my-project"]},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"userCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The number of users that belong to this group",example:1,type:"integer",minimum:0},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"users"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of users.")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The user id",type:"integer",minimum:0,example:123},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the user",type:"string",example:"User",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Email of the user",type:"string",example:"user@example.com"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A unique username for the user",type:"string",example:"hunter"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#predefined-roles) this user is assigned",type:"integer",example:1,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"permissions",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Deprecated",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "groups": [\n    {\n      "id": 1,\n      "name": "unleash-e2e-7095756699593281",\n      "userCount": 1,\n      "rootRole": null\n    }\n  ],\n  "users": [\n    {\n      "id": 4,\n      "name": "unleash-e2e-user2-7095756699593281",\n      "email": "unleash-e2e-user2-7095756699593281@test.com",\n      "accountType": "User"\n    },\n    {\n      "id": 1,\n      "username": "admin",\n      "accountType": "User"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(u.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}x.isMDXComponent=!0}}]);