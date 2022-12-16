"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9947],{23503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),n=a(60961),l=a(48165),r=(a(90115),a(58475)),p=a(5428),o=a(80487),m=(a(54881),a(11666));const d={id:"get-all-api-tokens",title:"getAllApiTokens",description:"getAllApiTokens",sidebar_label:"getAllApiTokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"getAllApiTokens",responses:{200:{description:"apiTokensSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",items:{type:"object",additionalProperties:!1,required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",enum:["client","admin","frontend"]},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0},alias:{type:"string",nullable:!0}}}}}}}}}},description:"getAllApiTokens",method:"get",path:"/api/admin/api-tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get All Api Tokens",description:{type:"text/plain"},url:{path:["api","admin","api-tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},c=void 0,u={unversionedId:"reference/api/unleash/get-all-api-tokens",id:"reference/api/unleash/get-all-api-tokens",title:"getAllApiTokens",description:"getAllApiTokens",source:"@site/docs/reference/api/unleash/get-all-api-tokens.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-all-api-tokens",permalink:"/reference/api/unleash/get-all-api-tokens",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-all-api-tokens.api.mdx",tags:[],version:"current",frontMatter:{id:"get-all-api-tokens",title:"getAllApiTokens",description:"getAllApiTokens",sidebar_label:"getAllApiTokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"getAllApiTokens",responses:{200:{description:"apiTokensSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",items:{type:"object",additionalProperties:!1,required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",enum:["client","admin","frontend"]},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0},alias:{type:"string",nullable:!0}}}}}}}}}},description:"getAllApiTokens",method:"get",path:"/api/admin/api-tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get All Api Tokens",description:{type:"text/plain"},url:{path:["api","admin","api-tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"deletePat",permalink:"/reference/api/unleash/delete-pat"},next:{title:"createApiToken",permalink:"/reference/api/unleash/create-api-token"}},h={},y=[{value:"getAllApiTokens",id:"getallapitokens",level:2}],k={toc:y};function g(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getallapitokens"},"getAllApiTokens"),(0,s.kt)("p",null,"getAllApiTokens"),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"apiTokensSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(o.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"tokens"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"secret",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`client`, `admin`, `frontend`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"project",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"projects",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"seenAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"alias",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "tokens": [\n    {\n      "secret": "string",\n      "username": "string",\n      "type": "client",\n      "environment": "string",\n      "project": "string",\n      "projects": [\n        "string"\n      ],\n      "expiresAt": "2022-12-16",\n      "createdAt": "2022-12-16",\n      "seenAt": "2022-12-16",\n      "alias": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);