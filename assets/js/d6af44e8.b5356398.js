"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7724],{2106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),o=(a(11032),a(46062)),r=a(21439),p=a(9531),l=a(15761),m=a(73418),c=a(92414),d=a(11666);const h={id:"update-public-signup-token",title:"Update a public signup token",description:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",sidebar_label:"Update a public signup token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Public signup tokens"],operationId:"updatePublicSignupToken",description:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",requestBody:{description:"publicSignupTokenUpdateSchema",required:!0,content:{"application/json":{schema:{description:"Used by Unleash for updating a token's expiration date or, when deleting the invite link, it's status",type:"object",additionalProperties:!1,properties:{expiresAt:{type:"string",description:"The token's expiration date.",format:"date-time",example:"2023-04-11T15:46:56Z"},enabled:{description:"Whether the token is active or not.",type:"boolean",example:!0}},title:"publicSignupTokenUpdateSchema"}}}},responses:{200:{description:"publicSignupTokenSchema",content:{"application/json":{schema:{description:"Used for transporting a [public invite link](https://docs.getunleash.io/reference/public-signup#public-sign-up-tokens)",type:"object",additionalProperties:!1,required:["secret","url","name","expiresAt","createdAt","createdBy","enabled","role"],properties:{secret:{description:"The actual value of the token. This is the part that is used by Unleash to create an invite link",type:"string",example:"a3c84b25409ea8ca1782ef17f94a42fc"},url:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string",example:"https://sandbox.getunleash.io/enterprise/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc"},name:{description:"The token's name. Only for displaying in the UI",type:"string",example:"Invite public viewers"},enabled:{description:"Whether the token is active. This property will always be `false` for a token that has expired.",type:"boolean",example:!0},expiresAt:{type:"string",description:"The time when the token will expire.",format:"date-time",example:"2023-04-12T11:13:31.960Z"},createdAt:{type:"string",format:"date-time",description:"When the token was created.",example:"2023-04-12T11:13:31.960Z"},createdBy:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},users:{type:"array",description:"Array of users that have signed up using the token.",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}},title:"userSchema"},nullable:!0},role:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},title:"roleSchema",description:"Users who sign up using this token will be given this role."}},title:"publicSignupTokenSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"User credentials are valid but does not have enough privileges to execute this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},parameters:[{name:"token",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/invite-link/tokens/{token}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{expiresAt:"2023-04-11T15:46:56Z",enabled:!0},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"Update a public signup token",description:{content:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",type:"text/plain"},url:{path:["api","admin","invite-link","tokens",":token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"token"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/update-public-signup-token",id:"reference/api/unleash/update-public-signup-token",title:"Update a public signup token",description:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",source:"@site/docs/reference/api/unleash/update-public-signup-token.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-public-signup-token",permalink:"/reference/api/unleash/update-public-signup-token",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-public-signup-token",title:"Update a public signup token",description:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",sidebar_label:"Update a public signup token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Public signup tokens"],operationId:"updatePublicSignupToken",description:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",requestBody:{description:"publicSignupTokenUpdateSchema",required:!0,content:{"application/json":{schema:{description:"Used by Unleash for updating a token's expiration date or, when deleting the invite link, it's status",type:"object",additionalProperties:!1,properties:{expiresAt:{type:"string",description:"The token's expiration date.",format:"date-time",example:"2023-04-11T15:46:56Z"},enabled:{description:"Whether the token is active or not.",type:"boolean",example:!0}},title:"publicSignupTokenUpdateSchema"}}}},responses:{200:{description:"publicSignupTokenSchema",content:{"application/json":{schema:{description:"Used for transporting a [public invite link](https://docs.getunleash.io/reference/public-signup#public-sign-up-tokens)",type:"object",additionalProperties:!1,required:["secret","url","name","expiresAt","createdAt","createdBy","enabled","role"],properties:{secret:{description:"The actual value of the token. This is the part that is used by Unleash to create an invite link",type:"string",example:"a3c84b25409ea8ca1782ef17f94a42fc"},url:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string",example:"https://sandbox.getunleash.io/enterprise/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc"},name:{description:"The token's name. Only for displaying in the UI",type:"string",example:"Invite public viewers"},enabled:{description:"Whether the token is active. This property will always be `false` for a token that has expired.",type:"boolean",example:!0},expiresAt:{type:"string",description:"The time when the token will expire.",format:"date-time",example:"2023-04-12T11:13:31.960Z"},createdAt:{type:"string",format:"date-time",description:"When the token was created.",example:"2023-04-12T11:13:31.960Z"},createdBy:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},users:{type:"array",description:"Array of users that have signed up using the token.",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}},title:"userSchema"},nullable:!0},role:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},title:"roleSchema",description:"Users who sign up using this token will be given this role."}},title:"publicSignupTokenSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"User credentials are valid but does not have enough privileges to execute this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},parameters:[{name:"token",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/invite-link/tokens/{token}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{expiresAt:"2023-04-11T15:46:56Z",enabled:!0},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"Update a public signup token",description:{content:"Update information about a specific token. The `:token` part of the URL should be the token's secret.",type:"text/plain"},url:{path:["api","admin","invite-link","tokens",":token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"token"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Retrieve a token",permalink:"/reference/api/unleash/get-public-signup-token"},next:{title:"Service Accounts",permalink:"/reference/api/unleash/service-accounts"}},g={},b=[],k={toc:b};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Update a public signup token"),(0,n.kt)(o.Z,{method:"put",path:"/api/admin/invite-link/tokens/{token}",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"Update information about a specific token. The ",(0,n.kt)("inlineCode",{parentName:"p"},":token")," part of the URL should be the token's secret."),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(p.Z,{className:"paramsItem",param:{name:"token",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(r.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"publicSignupTokenUpdateSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",description:"The token's expiration date.",format:"date-time",example:"2023-04-11T15:46:56Z"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the token is active or not.",type:"boolean",example:!0},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"publicSignupTokenSchema")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"secret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The actual value of the token. This is the part that is used by Unleash to create an invite link",type:"string",example:"a3c84b25409ea8ca1782ef17f94a42fc"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"url",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string",example:"https://sandbox.getunleash.io/enterprise/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The token's name. Only for displaying in the UI",type:"string",example:"Invite public viewers"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the token is active. This property will always be `false` for a token that has expired.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"expiresAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",description:"The time when the token will expire.",format:"date-time",example:"2023-04-12T11:13:31.960Z"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"When the token was created.",example:"2023-04-12T11:13:31.960Z"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"createdBy",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"users"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-nullable)"}}," nullable")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Array of users that have signed up using the token.")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"role"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Users who sign up using this token will be given this role.")),(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "secret": "a3c84b25409ea8ca1782ef17f94a42fc",\n  "url": "https://sandbox.getunleash.io/enterprise/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc",\n  "name": "Invite public viewers",\n  "enabled": true,\n  "expiresAt": "2023-04-12T11:13:31.960Z",\n  "createdAt": "2023-04-12T11:13:31.960Z",\n  "createdBy": "someone@example.com",\n  "users": [\n    {\n      "id": 0,\n      "isAPI": true,\n      "name": "string",\n      "email": "string",\n      "username": "string",\n      "imageUrl": "string",\n      "inviteLink": "string",\n      "loginAttempts": 0,\n      "emailSent": true,\n      "rootRole": 0,\n      "seenAt": "2023-04-29T00:14:02.041Z",\n      "createdAt": "2023-04-29T00:14:02.041Z",\n      "accountType": "string"\n    }\n  ],\n  "role": {\n    "id": 0,\n    "type": "string",\n    "name": "string",\n    "description": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The request data does not match what we expect.")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"User credentials are valid but does not have enough privileges to execute this operation")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);