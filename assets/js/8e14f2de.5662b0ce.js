"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9745],{35957:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>y,toc:()=>f});var a=i(87462),s=(i(67294),i(3905)),r=i(80334),n=(i(11032),i(46062)),o=i(57138),m=i(21439),p=(i(9531),i(15761)),l=i(73418),c=i(92414),d=i(11666);const u={id:"get-me",title:"Get your own user details",description:"Detailed information about the current user, user permissions and user feedback",sidebar_label:"Get your own user details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getMe",description:"Detailed information about the current user, user permissions and user feedback",responses:{200:{description:"meSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["user","permissions","feedback","splash"],description:"Detailed user information",properties:{user:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User",nullable:!0},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#standard-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"userSchema"},permissions:{description:"User permissions for projects and environments",type:"array",items:{type:"object",additionalProperties:!1,required:["permission"],description:"Project and environment permissions",properties:{permission:{description:"[Project](https://docs.getunleash.io/reference/rbac#project-permissions) or [environment](https://docs.getunleash.io/reference/rbac#environment-permissions) permission name",type:"string",example:"UPDATE_FEATURE_STRATEGY"},project:{description:"The project this permission applies to",type:"string",example:"my-project"},environment:{description:"The environment this permission applies to",type:"string",example:"development"}},title:"permissionSchema"}},feedback:{description:"User feedback information",type:"array",items:{additionalProperties:!1,type:"object",description:"User feedback information about a particular feedback item.",properties:{userId:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},neverShow:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},given:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"},feedbackId:{description:"The name of the feedback session",type:"string",example:"pnps"}},title:"feedbackResponseSchema"}},splash:{description:"Splash screen configuration",type:"object",additionalProperties:{type:"boolean"}}},title:"meSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/user",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.3.0-main"},postman:{name:"Get your own user details",description:{content:"Detailed information about the current user, user permissions and user feedback",type:"text/plain"},url:{path:["api","admin","user"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,y={unversionedId:"reference/api/unleash/get-me",id:"reference/api/unleash/get-me",title:"Get your own user details",description:"Detailed information about the current user, user permissions and user feedback",source:"@site/docs/reference/api/unleash/get-me.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-me",permalink:"/reference/api/unleash/get-me",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-me",title:"Get your own user details",description:"Detailed information about the current user, user permissions and user feedback",sidebar_label:"Get your own user details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getMe",description:"Detailed information about the current user, user permissions and user feedback",responses:{200:{description:"meSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["user","permissions","feedback","splash"],description:"Detailed user information",properties:{user:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User",nullable:!0},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#standard-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"userSchema"},permissions:{description:"User permissions for projects and environments",type:"array",items:{type:"object",additionalProperties:!1,required:["permission"],description:"Project and environment permissions",properties:{permission:{description:"[Project](https://docs.getunleash.io/reference/rbac#project-permissions) or [environment](https://docs.getunleash.io/reference/rbac#environment-permissions) permission name",type:"string",example:"UPDATE_FEATURE_STRATEGY"},project:{description:"The project this permission applies to",type:"string",example:"my-project"},environment:{description:"The environment this permission applies to",type:"string",example:"development"}},title:"permissionSchema"}},feedback:{description:"User feedback information",type:"array",items:{additionalProperties:!1,type:"object",description:"User feedback information about a particular feedback item.",properties:{userId:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},neverShow:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},given:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"},feedbackId:{description:"The name of the feedback session",type:"string",example:"pnps"}},title:"feedbackResponseSchema"}},splash:{description:"Splash screen configuration",type:"object",additionalProperties:{type:"boolean"}}},title:"meSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/user",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.3.0-main"},postman:{name:"Get your own user details",description:{content:"Detailed information about the current user, user permissions and user feedback",type:"text/plain"},url:{path:["api","admin","user"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Validate a role",permalink:"/reference/api/unleash/validate-role"},next:{title:"Get your own user profile",permalink:"/reference/api/unleash/get-profile"}},g={},f=[{value:"Request",id:"request",level:2}],k={toc:f};function b(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Get your own user details"),(0,s.kt)(n.Z,{method:"get",path:"/api/admin/user",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Detailed information about the current user, user permissions and user feedback"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"meSchema")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"user"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"An Unleash user")),(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The user id",type:"integer",minimum:0,example:123},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the user",type:"string",example:"User",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Email of the user",type:"string",example:"user@example.com"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A unique username for the user",type:"string",example:"hunter"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#standard-roles) this user is assigned",type:"integer",example:1,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"permissions",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Deprecated",type:"array",items:{type:"string"}},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"permissions"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"User permissions for projects and environments")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"permission",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"[Project](https://docs.getunleash.io/reference/rbac#project-permissions) or [environment](https://docs.getunleash.io/reference/rbac#environment-permissions) permission name",type:"string",example:"UPDATE_FEATURE_STRATEGY"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The project this permission applies to",type:"string",example:"my-project"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The environment this permission applies to",type:"string",example:"development"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"feedback"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"User feedback information")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"userId",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"given",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the feedback session",type:"string",example:"pnps"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"splash"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Splash screen configuration")),(0,s.kt)(l.Z,{name:"property name*",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "user": {\n    "id": 123,\n    "name": "User",\n    "email": "user@example.com",\n    "username": "hunter",\n    "imageUrl": "https://example.com/242x200.png",\n    "inviteLink": "http://localhost:4242/invite-link/some-secret",\n    "loginAttempts": 3,\n    "emailSent": false,\n    "rootRole": 1,\n    "seenAt": "2023-06-30T11:42:00.345Z",\n    "createdAt": "2023-06-30T11:41:00.123Z",\n    "accountType": "User",\n    "permissions": [\n      "string"\n    ]\n  },\n  "permissions": [\n    {\n      "permission": "UPDATE_FEATURE_STRATEGY",\n      "project": "my-project",\n      "environment": "development"\n    }\n  ],\n  "feedback": [\n    {\n      "userId": 2,\n      "neverShow": false,\n      "given": "2023-07-06T08:29:21.282Z",\n      "feedbackId": "pnps"\n    }\n  ],\n  "splash": {}\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);