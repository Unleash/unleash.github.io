"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7724],{2106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>x,frontMatter:()=>u,metadata:()=>y,toc:()=>b});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),r=(a(11032),a(46062)),o=a(57138),p=a(21439),l=a(9531),m=a(15761),c=a(73418),d=a(92414),h=a(11666);const u={id:"update-public-signup-token",title:"Update a public signup token",description:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",sidebar_label:"Update a public signup token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Public signup tokens"],operationId:"updatePublicSignupToken",description:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",requestBody:{description:"publicSignupTokenUpdateSchema",required:!0,content:{"application/json":{schema:{description:"Used by Unleash for updating a token's expiration date or, when deleting the invite link, it's status",type:"object",additionalProperties:!1,properties:{expiresAt:{type:"string",description:"The token's expiration date.",format:"date-time",example:"2023-04-11T15:46:56Z"},enabled:{description:"Whether the token is active or not.",type:"boolean",example:!0}},title:"publicSignupTokenUpdateSchema"}}}},responses:{200:{description:"publicSignupTokenSchema",content:{"application/json":{schema:{description:"Used for transporting a [public invite link](https://docs.getunleash.io/reference/public-signup#public-sign-up-tokens)",type:"object",additionalProperties:!1,required:["secret","url","name","expiresAt","createdAt","createdBy","enabled","role"],properties:{secret:{description:"The actual value of the token. This is the part that is used by Unleash to create an invite link",type:"string",example:"a3c84b25409ea8ca1782ef17f94a42fc"},url:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string",example:"https://sandbox.getunleash.io/enterprise/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc"},name:{description:"The token's name. Only for displaying in the UI",type:"string",example:"Invite public viewers"},enabled:{description:"Whether the token is active. This property will always be `false` for a token that has expired.",type:"boolean",example:!0},expiresAt:{type:"string",description:"The time when the token will expire.",format:"date-time",example:"2023-04-12T11:13:31.960Z"},createdAt:{type:"string",format:"date-time",description:"When the token was created.",example:"2023-04-12T11:13:31.960Z"},createdBy:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},users:{type:"array",description:"Array of users that have signed up using the token.",items:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User"},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#standard-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"userSchema"},nullable:!0},role:{type:"object",description:"A role holds permissions to allow Unleash to decide what actions a role holder is allowed to perform",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"integer",description:"The role id",example:9,minimum:0},type:{description:"A role can either be a global role (applies to all projects) or a project role",type:"string",example:"global"},name:{description:"The name of the role",type:"string",example:"Editor"},description:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."}},title:"roleSchema"}},title:"publicSignupTokenSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},parameters:[{name:"token",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/invite-link/tokens/{token}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{expiresAt:"2023-04-11T15:46:56Z",enabled:!0},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Update a public signup token",description:{content:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",type:"text/plain"},url:{path:["api","admin","invite-link","tokens",":token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"token"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,y={unversionedId:"reference/api/unleash/update-public-signup-token",id:"reference/api/unleash/update-public-signup-token",title:"Update a public signup token",description:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",source:"@site/docs/reference/api/unleash/update-public-signup-token.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-public-signup-token",permalink:"/reference/api/unleash/update-public-signup-token",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-public-signup-token",title:"Update a public signup token",description:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",sidebar_label:"Update a public signup token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Public signup tokens"],operationId:"updatePublicSignupToken",description:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",requestBody:{description:"publicSignupTokenUpdateSchema",required:!0,content:{"application/json":{schema:{description:"Used by Unleash for updating a token's expiration date or, when deleting the invite link, it's status",type:"object",additionalProperties:!1,properties:{expiresAt:{type:"string",description:"The token's expiration date.",format:"date-time",example:"2023-04-11T15:46:56Z"},enabled:{description:"Whether the token is active or not.",type:"boolean",example:!0}},title:"publicSignupTokenUpdateSchema"}}}},responses:{200:{description:"publicSignupTokenSchema",content:{"application/json":{schema:{description:"Used for transporting a [public invite link](https://docs.getunleash.io/reference/public-signup#public-sign-up-tokens)",type:"object",additionalProperties:!1,required:["secret","url","name","expiresAt","createdAt","createdBy","enabled","role"],properties:{secret:{description:"The actual value of the token. This is the part that is used by Unleash to create an invite link",type:"string",example:"a3c84b25409ea8ca1782ef17f94a42fc"},url:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string",example:"https://sandbox.getunleash.io/enterprise/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc"},name:{description:"The token's name. Only for displaying in the UI",type:"string",example:"Invite public viewers"},enabled:{description:"Whether the token is active. This property will always be `false` for a token that has expired.",type:"boolean",example:!0},expiresAt:{type:"string",description:"The time when the token will expire.",format:"date-time",example:"2023-04-12T11:13:31.960Z"},createdAt:{type:"string",format:"date-time",description:"When the token was created.",example:"2023-04-12T11:13:31.960Z"},createdBy:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},users:{type:"array",description:"Array of users that have signed up using the token.",items:{type:"object",additionalProperties:!1,description:"An Unleash user",required:["id"],properties:{id:{description:"The user id",type:"integer",minimum:0,example:123},isAPI:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},name:{description:"Name of the user",type:"string",example:"User"},email:{description:"Email of the user",type:"string",example:"user@example.com"},username:{description:"A unique username for the user",type:"string",example:"hunter"},imageUrl:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},inviteLink:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},loginAttempts:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},emailSent:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},rootRole:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#standard-roles) this user is assigned",type:"integer",example:1,minimum:0},seenAt:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},createdAt:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},accountType:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},permissions:{description:"Deprecated",type:"array",items:{type:"string"}}},title:"userSchema"},nullable:!0},role:{type:"object",description:"A role holds permissions to allow Unleash to decide what actions a role holder is allowed to perform",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"integer",description:"The role id",example:9,minimum:0},type:{description:"A role can either be a global role (applies to all projects) or a project role",type:"string",example:"global"},name:{description:"The name of the role",type:"string",example:"Editor"},description:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."}},title:"roleSchema"}},title:"publicSignupTokenSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},parameters:[{name:"token",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/invite-link/tokens/{token}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{expiresAt:"2023-04-11T15:46:56Z",enabled:!0},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Update a public signup token",description:{content:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",type:"text/plain"},url:{path:["api","admin","invite-link","tokens",":token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"token"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Retrieve a token",permalink:"/reference/api/unleash/get-public-signup-token"},next:{title:"Segments",permalink:"/reference/api/unleash/segments"}},k={},b=[{value:"Request",id:"request",level:2}],f={toc:b};function x(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Update a public signup token"),(0,s.kt)(r.Z,{method:"put",path:"/api/admin/invite-link/tokens/{token}",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Update information about a specific token. The ",(0,s.kt)("inlineCode",{parentName:"p"},":token")," part of the URL should be the token's secret."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"token",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"publicSignupTokenUpdateSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",description:"The token's expiration date.",format:"date-time",example:"2023-04-11T15:46:56Z"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the token is active or not.",type:"boolean",example:!0},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"publicSignupTokenSchema")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"secret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The actual value of the token. This is the part that is used by Unleash to create an invite link",type:"string",example:"a3c84b25409ea8ca1782ef17f94a42fc"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"url",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string",example:"https://sandbox.getunleash.io/enterprise/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The token's name. Only for displaying in the UI",type:"string",example:"Invite public viewers"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the token is active. This property will always be `false` for a token that has expired.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"expiresAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",description:"The time when the token will expire.",format:"date-time",example:"2023-04-12T11:13:31.960Z"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"When the token was created.",example:"2023-04-12T11:13:31.960Z"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"createdBy",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"users"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__nullable"},"nullable"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Array of users that have signed up using the token.")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The user id",type:"integer",minimum:0,example:123},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"(Deprecated): Used internally to know which operations the user should be allowed to perform",type:"boolean",example:!0,deprecated:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the user",type:"string",example:"User"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Email of the user",type:"string",example:"user@example.com"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A unique username for the user",type:"string",example:"hunter"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"URL used for the userprofile image",type:"string",example:"https://example.com/242x200.png"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"If the user is actively inviting other users, this is the link that can be shared with other users",type:"string",example:"http://localhost:4242/invite-link/some-secret"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many unsuccessful attempts at logging in has the user made",type:"integer",minimum:0,example:3},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Is the welcome email sent to the user or not",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"Which [root role](https://docs.getunleash.io/reference/rbac#standard-roles) this user is assigned",type:"integer",example:1,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The last time this user logged in",type:"string",format:"date-time",nullable:!0,example:"2023-06-30T11:42:00.345Z"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The user was created at this time",type:"string",format:"date-time",example:"2023-06-30T11:41:00.123Z"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A user is either an actual User or a Service Account",type:"string",example:"User"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"permissions",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Deprecated",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"role"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A role holds permissions to allow Unleash to decide what actions a role holder is allowed to perform")),(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The role id",example:9,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"A role can either be a global role (applies to all projects) or a project role",type:"string",example:"global"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the role",type:"string",example:"Editor"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."},mdxType:"SchemaItem"}))))))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "secret": "a3c84b25409ea8ca1782ef17f94a42fc",\n  "url": "https://sandbox.getunleash.io/enterprise/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc",\n  "name": "Invite public viewers",\n  "enabled": true,\n  "expiresAt": "2023-04-12T11:13:31.960Z",\n  "createdAt": "2023-04-12T11:13:31.960Z",\n  "createdBy": "someone@example.com",\n  "users": [\n    {\n      "id": 123,\n      "name": "User",\n      "email": "user@example.com",\n      "username": "hunter",\n      "imageUrl": "https://example.com/242x200.png",\n      "inviteLink": "http://localhost:4242/invite-link/some-secret",\n      "loginAttempts": 3,\n      "emailSent": false,\n      "rootRole": 1,\n      "seenAt": "2023-06-30T11:42:00.345Z",\n      "createdAt": "2023-06-30T11:41:00.123Z",\n      "accountType": "User",\n      "permissions": [\n        "string"\n      ]\n    }\n  ],\n  "role": {\n    "id": 9,\n    "type": "global",\n    "name": "Editor",\n    "description": "Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}x.isMDXComponent=!0}}]);