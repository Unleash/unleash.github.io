"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3841],{57958:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>f,frontMatter:()=>d,metadata:()=>g,toc:()=>k});var a=i(87462),s=(i(67294),i(3905)),n=i(80334),r=(i(11032),i(46062)),l=i(57138),p=i(21439),o=(i(9531),i(15761)),m=i(73418),c=i(92414),u=i(11666);const d={id:"get-all-public-signup-tokens",title:"Retrieve all existing public signup tokens",description:"Retrieve all existing public signup tokens",sidebar_label:"Retrieve all existing public signup tokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Public signup tokens"],operationId:"getAllPublicSignupTokens",responses:{200:{description:"publicSignupTokensSchema",content:{"application/json":{schema:{type:"object",description:"A wrapper object containing all the public signup tokens",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",description:"An array of all the public signup tokens",example:[{secret:"a3c84b25409ea8ca1782ef17f94a42fc",url:"https://my_unleash_instance/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc",name:"Invite public viewers",enabled:!1,expiresAt:"2023-04-12T11:13:31.960Z",createdAt:"2023-04-12T11:13:31.960Z",createdBy:"someone",users:null,role:{id:3,type:"root",name:"Viewer"}}],items:{description:"Used for transporting a [public invite link](https://docs.getunleash.io/reference/public-signup#public-sign-up-tokens)",type:"object",additionalProperties:!1,required:["secret","url","name","expiresAt","createdAt","createdBy","enabled","role"],properties:{secret:{description:"The actual value of the token. This is the part that is used by Unleash to create an invite link",type:"string",example:"a3c84b25409ea8ca1782ef17f94a42fc"},url:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string",example:"https://sandbox.getunleash.io/enterprise/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc"},name:{description:"The token's name. Only for displaying in the UI",type:"string",example:"Invite public viewers"},enabled:{description:"Whether the token is active. This property will always be `false` for a token that has expired.",type:"boolean",example:!0},expiresAt:{type:"string",description:"The time when the token will expire.",format:"date-time",example:"2023-04-12T11:13:31.960Z"},createdAt:{type:"string",format:"date-time",description:"When the token was created.",example:"2023-04-12T11:13:31.960Z"},createdBy:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},users:{type:"array",description:"Array of users that have signed up using the token.",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}},title:"userSchema"},nullable:!0},role:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},title:"roleSchema",description:"Users who sign up using this token will be given this role."}},title:"publicSignupTokenSchema"}}},title:"publicSignupTokensSchema"}}}}},description:"Retrieve all existing public signup tokens",method:"get",path:"/api/admin/invite-link/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Retrieve all existing public signup tokens",description:{type:"text/plain"},url:{path:["api","admin","invite-link","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,g={unversionedId:"reference/api/unleash/get-all-public-signup-tokens",id:"reference/api/unleash/get-all-public-signup-tokens",title:"Retrieve all existing public signup tokens",description:"Retrieve all existing public signup tokens",source:"@site/docs/reference/api/unleash/get-all-public-signup-tokens.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-all-public-signup-tokens",permalink:"/reference/api/unleash/get-all-public-signup-tokens",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-public-signup-tokens",title:"Retrieve all existing public signup tokens",description:"Retrieve all existing public signup tokens",sidebar_label:"Retrieve all existing public signup tokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Public signup tokens"],operationId:"getAllPublicSignupTokens",responses:{200:{description:"publicSignupTokensSchema",content:{"application/json":{schema:{type:"object",description:"A wrapper object containing all the public signup tokens",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",description:"An array of all the public signup tokens",example:[{secret:"a3c84b25409ea8ca1782ef17f94a42fc",url:"https://my_unleash_instance/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc",name:"Invite public viewers",enabled:!1,expiresAt:"2023-04-12T11:13:31.960Z",createdAt:"2023-04-12T11:13:31.960Z",createdBy:"someone",users:null,role:{id:3,type:"root",name:"Viewer"}}],items:{description:"Used for transporting a [public invite link](https://docs.getunleash.io/reference/public-signup#public-sign-up-tokens)",type:"object",additionalProperties:!1,required:["secret","url","name","expiresAt","createdAt","createdBy","enabled","role"],properties:{secret:{description:"The actual value of the token. This is the part that is used by Unleash to create an invite link",type:"string",example:"a3c84b25409ea8ca1782ef17f94a42fc"},url:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string",example:"https://sandbox.getunleash.io/enterprise/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc"},name:{description:"The token's name. Only for displaying in the UI",type:"string",example:"Invite public viewers"},enabled:{description:"Whether the token is active. This property will always be `false` for a token that has expired.",type:"boolean",example:!0},expiresAt:{type:"string",description:"The time when the token will expire.",format:"date-time",example:"2023-04-12T11:13:31.960Z"},createdAt:{type:"string",format:"date-time",description:"When the token was created.",example:"2023-04-12T11:13:31.960Z"},createdBy:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},users:{type:"array",description:"Array of users that have signed up using the token.",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}},title:"userSchema"},nullable:!0},role:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},title:"roleSchema",description:"Users who sign up using this token will be given this role."}},title:"publicSignupTokenSchema"}}},title:"publicSignupTokensSchema"}}}}},description:"Retrieve all existing public signup tokens",method:"get",path:"/api/admin/invite-link/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Retrieve all existing public signup tokens",description:{type:"text/plain"},url:{path:["api","admin","invite-link","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Add a user via a signup token",permalink:"/reference/api/unleash/add-public-signup-token-user"},next:{title:"Create a public signup token",permalink:"/reference/api/unleash/create-public-signup-token"}},y={},k=[{value:"Request",id:"request",level:2}],b={toc:k};function f(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Retrieve all existing public signup tokens"),(0,s.kt)(r.Z,{method:"get",path:"/api/admin/invite-link/tokens",mdxType:"MethodEndpoint"}),(0,s.kt)(l.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Retrieve all existing public signup tokens"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"publicSignupTokensSchema")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"tokens"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"An array of all the public signup tokens")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"secret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The actual value of the token. This is the part that is used by Unleash to create an invite link",type:"string",example:"a3c84b25409ea8ca1782ef17f94a42fc"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"url",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string",example:"https://sandbox.getunleash.io/enterprise/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The token's name. Only for displaying in the UI",type:"string",example:"Invite public viewers"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the token is active. This property will always be `false` for a token that has expired.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"expiresAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",description:"The time when the token will expire.",format:"date-time",example:"2023-04-12T11:13:31.960Z"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"When the token was created.",example:"2023-04-12T11:13:31.960Z"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"createdBy",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"users"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__nullable"},"nullable"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Array of users that have signed up using the token.")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"role"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Users who sign up using this token will be given this role.")),(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "tokens": [\n    {\n      "secret": "a3c84b25409ea8ca1782ef17f94a42fc",\n      "url": "https://my_unleash_instance/new-user?invite=a3c84b25409ea8ca1782ef17f94a42fc",\n      "name": "Invite public viewers",\n      "enabled": false,\n      "expiresAt": "2023-04-12T11:13:31.960Z",\n      "createdAt": "2023-04-12T11:13:31.960Z",\n      "createdBy": "someone",\n      "users": null,\n      "role": {\n        "id": 3,\n        "type": "root",\n        "name": "Viewer"\n      }\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);