"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3841],{57958:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>g,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>h});var a=t(87462),s=(t(67294),t(3905)),n=t(60961),l=t(48165),r=(t(23380),t(58475)),o=t(5428),p=t(80487),m=(t(54881),t(11666));const u={id:"get-all-public-signup-tokens",title:"Retrieve all existing public signup tokens",description:"Retrieve all existing public signup tokens",sidebar_label:"Retrieve all existing public signup tokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Public signup tokens"],operationId:"getAllPublicSignupTokens",responses:{200:{description:"publicSignupTokensSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",items:{type:"object",additionalProperties:!1,required:["secret","url","name","expiresAt","createdAt","createdBy","enabled","role"],properties:{secret:{type:"string"},url:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string"},name:{type:"string"},enabled:{type:"boolean"},expiresAt:{type:"string",format:"date-time"},createdAt:{type:"string",format:"date-time"},createdBy:{type:"string",nullable:!0},users:{type:"array",description:"Array of users that have signed up using the token.",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"}}},nullable:!0},role:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},description:"Users who sign up using this token will be given this role."}}}}}}}}}},description:"Retrieve all existing public signup tokens",method:"get",path:"/api/admin/invite-link/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.6"},postman:{name:"Retrieve all existing public signup tokens",description:{type:"text/plain"},url:{path:["api","admin","invite-link","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},d=void 0,c={unversionedId:"reference/api/unleash/get-all-public-signup-tokens",id:"reference/api/unleash/get-all-public-signup-tokens",title:"Retrieve all existing public signup tokens",description:"Retrieve all existing public signup tokens",source:"@site/docs/reference/api/unleash/get-all-public-signup-tokens.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-all-public-signup-tokens",permalink:"/reference/api/unleash/get-all-public-signup-tokens",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-all-public-signup-tokens.api.mdx",tags:[],version:"current",frontMatter:{id:"get-all-public-signup-tokens",title:"Retrieve all existing public signup tokens",description:"Retrieve all existing public signup tokens",sidebar_label:"Retrieve all existing public signup tokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Public signup tokens"],operationId:"getAllPublicSignupTokens",responses:{200:{description:"publicSignupTokensSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",items:{type:"object",additionalProperties:!1,required:["secret","url","name","expiresAt","createdAt","createdBy","enabled","role"],properties:{secret:{type:"string"},url:{description:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",type:"string"},name:{type:"string"},enabled:{type:"boolean"},expiresAt:{type:"string",format:"date-time"},createdAt:{type:"string",format:"date-time"},createdBy:{type:"string",nullable:!0},users:{type:"array",description:"Array of users that have signed up using the token.",items:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"}}},nullable:!0},role:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},description:"Users who sign up using this token will be given this role."}}}}}}}}}},description:"Retrieve all existing public signup tokens",method:"get",path:"/api/admin/invite-link/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.6"},postman:{name:"Retrieve all existing public signup tokens",description:{type:"text/plain"},url:{path:["api","admin","invite-link","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Add a user via a signup token",permalink:"/reference/api/unleash/add-public-signup-token-user"},next:{title:"Create a public signup token",permalink:"/reference/api/unleash/create-public-signup-token"}},g={},h=[{value:"Retrieve all existing public signup tokens",id:"retrieve-all-existing-public-signup-tokens",level:2}],y={toc:h};function k(e){let{components:i,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},y,t,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"retrieve-all-existing-public-signup-tokens"},"Retrieve all existing public signup tokens"),(0,s.kt)("p",null,"Retrieve all existing public signup tokens"),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"publicSignupTokensSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"tokens"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"secret",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"url",required:!1,schemaDescription:"The public signup link for the token. Users who follow this link will be taken to a signup page where they can create an Unleash user.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"createdBy",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"users"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Array of users that have signed up using the token.")),(0,s.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"isAPI",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"email",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"emailSent",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"rootRole",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"seenAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"role"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Users who sign up using this token will be given this role.")),(0,s.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "tokens": [\n    {\n      "secret": "string",\n      "url": "string",\n      "name": "string",\n      "enabled": true,\n      "expiresAt": "2022-12-08",\n      "createdAt": "2022-12-08",\n      "createdBy": "string",\n      "users": [\n        {\n          "id": 0,\n          "isAPI": true,\n          "name": "string",\n          "email": "string",\n          "username": "string",\n          "imageUrl": "string",\n          "inviteLink": "string",\n          "loginAttempts": 0,\n          "emailSent": true,\n          "rootRole": 0,\n          "seenAt": "2022-12-08",\n          "createdAt": "2022-12-08"\n        }\n      ],\n      "role": {\n        "id": 0,\n        "type": "string",\n        "name": "string",\n        "description": "string"\n      }\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);