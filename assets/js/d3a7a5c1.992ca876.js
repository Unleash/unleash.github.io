"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9577],{68612:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var a=i(87462),s=(i(67294),i(3905)),n=i(60961),r=i(48165),o=(i(90115),i(58475)),l=i(5428),p=i(80487),d=(i(54881),i(11666));const m={id:"create-public-signup-token",title:"Create a public signup token",description:"Create a public signup token",sidebar_label:"Create a public signup token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Public signup tokens"],operationId:"createPublicSignupToken",requestBody:{description:"publicSignupTokenCreateSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","expiresAt"],properties:{name:{description:"The token's name.",type:"string"},expiresAt:{type:"string",description:"The token's expiration date.",format:"date-time"}}}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["secret","url","name","expiresAt","createdAt","createdBy","enabled","role"],properties:{secret:{type:"string"},url:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string"},name:{type:"string"},enabled:{type:"boolean"},expiresAt:{type:"string",format:"date-time"},createdAt:{type:"string",format:"date-time"},createdBy:{type:"string",nullable:!0},users:{type:"array",description:"Array of users that have signed up using the token.",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}}},nullable:!0},role:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},description:"Users who sign up using this token will be given this role."}}}}}}},description:"Create a public signup token",method:"post",path:"/api/admin/invite-link/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",expiresAt:"2023-02-03"},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"Create a public signup token",description:{type:"text/plain"},url:{path:["api","admin","invite-link","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,u={unversionedId:"reference/api/unleash/create-public-signup-token",id:"reference/api/unleash/create-public-signup-token",title:"Create a public signup token",description:"Create a public signup token",source:"@site/docs/reference/api/unleash/create-public-signup-token.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-public-signup-token",permalink:"/reference/api/unleash/create-public-signup-token",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-public-signup-token",title:"Create a public signup token",description:"Create a public signup token",sidebar_label:"Create a public signup token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Public signup tokens"],operationId:"createPublicSignupToken",requestBody:{description:"publicSignupTokenCreateSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","expiresAt"],properties:{name:{description:"The token's name.",type:"string"},expiresAt:{type:"string",description:"The token's expiration date.",format:"date-time"}}}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["secret","url","name","expiresAt","createdAt","createdBy","enabled","role"],properties:{secret:{type:"string"},url:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string"},name:{type:"string"},enabled:{type:"boolean"},expiresAt:{type:"string",format:"date-time"},createdAt:{type:"string",format:"date-time"},createdBy:{type:"string",nullable:!0},users:{type:"array",description:"Array of users that have signed up using the token.",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}}},nullable:!0},role:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},description:"Users who sign up using this token will be given this role."}}}}}}},description:"Create a public signup token",method:"post",path:"/api/admin/invite-link/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",expiresAt:"2023-02-03"},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"Create a public signup token",description:{type:"text/plain"},url:{path:["api","admin","invite-link","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Retrieve all existing public signup tokens",permalink:"/reference/api/unleash/get-all-public-signup-tokens"},next:{title:"Retrieve a token",permalink:"/reference/api/unleash/get-public-signup-token"}},g={},h=[{value:"Create a public signup token",id:"create-a-public-signup-token",level:2}],y={toc:h};function k(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"create-a-public-signup-token"},"Create a public signup token"),(0,s.kt)("p",null,"Create a public signup token"),(0,s.kt)(r.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"publicSignupTokenCreateSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!0,deprecated:void 0,schemaDescription:"The token's name.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"expiresAt",required:!0,deprecated:void 0,schemaDescription:"The token's expiration date.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The resource was successfully created.")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null,(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The location of the newly created resource.")))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"secret",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"url",required:!1,deprecated:void 0,schemaDescription:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"enabled",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"expiresAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"createdBy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"users"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Array of users that have signed up using the token.")),(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"isAPI",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"email",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"username",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"imageUrl",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"inviteLink",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"loginAttempts",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"emailSent",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"rootRole",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"accountType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"role"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Users who sign up using this token will be given this role.")),(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "secret": "string",\n  "url": "string",\n  "name": "string",\n  "enabled": true,\n  "expiresAt": "2023-02-03",\n  "createdAt": "2023-02-03",\n  "createdBy": "string",\n  "users": [\n    {\n      "id": 0,\n      "isAPI": true,\n      "name": "string",\n      "email": "string",\n      "username": "string",\n      "imageUrl": "string",\n      "inviteLink": "string",\n      "loginAttempts": 0,\n      "emailSent": true,\n      "rootRole": 0,\n      "seenAt": "2023-02-03",\n      "createdAt": "2023-02-03",\n      "accountType": "string"\n    }\n  ],\n  "role": {\n    "id": 0,\n    "type": "string",\n    "name": "string",\n    "description": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);