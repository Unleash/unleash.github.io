"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7731],{21552:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var i=a(87462),n=(a(67294),a(3905)),r=a(70439),s=a(89402),p=(a(10725),a(65860)),o=a(5479),l=a(83559),m=(a(48567),a(72905));const c={id:"create-api-token",sidebar_label:"createApiToken",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"createApiToken",requestBody:{description:"createApiTokenSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",description:"client, admin, frontend."},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{201:{description:"apiTokenSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",description:"client, admin, frontend."},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0},alias:{type:"string",nullable:!0}}}}}}},description:"createApiToken",method:"post",path:"/api/admin/api-tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{secret:"string",username:"string",type:"string",environment:"string",project:"string",projects:["string"],expiresAt:"2022-09-20"},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"create Api Token",description:{type:"text/plain"},url:{path:["api","admin","api-tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/reference/api/unleash/unleash-api"},d=void 0,u={unversionedId:"reference/api/unleash/create-api-token",id:"reference/api/unleash/create-api-token",title:"create-api-token",description:"createApiToken",source:"@site/docs/reference/api/unleash/create-api-token.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-api-token",permalink:"/reference/api/unleash/create-api-token",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/create-api-token.api.mdx",tags:[],version:"current",frontMatter:{id:"create-api-token",sidebar_label:"createApiToken",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"createApiToken",requestBody:{description:"createApiTokenSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",description:"client, admin, frontend."},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{201:{description:"apiTokenSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",description:"client, admin, frontend."},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0},alias:{type:"string",nullable:!0}}}}}}},description:"createApiToken",method:"post",path:"/api/admin/api-tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{secret:"string",username:"string",type:"string",environment:"string",project:"string",projects:["string"],expiresAt:"2022-09-20"},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"create Api Token",description:{type:"text/plain"},url:{path:["api","admin","api-tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getAllApiTokens",permalink:"/reference/api/unleash/get-all-api-tokens"},next:{title:"updateApiToken",permalink:"/reference/api/unleash/update-api-token"}},y={},h=[{value:"createApiToken",id:"createapitoken",level:2}],g={toc:h};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"createapitoken"},"createApiToken"),(0,n.kt)("p",null,"createApiToken"),(0,n.kt)(s.Z,{mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"createApiTokenSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"secret",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"username",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaDescription:"client, admin, frontend.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"environment",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"project",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"projects",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"apiTokenSchema")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"secret",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:"client, admin, frontend.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"environment",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"project",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"projects",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"seenAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"alias",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "secret": "string",\n  "username": "string",\n  "type": "string",\n  "environment": "string",\n  "project": "string",\n  "projects": [\n    "string"\n  ],\n  "expiresAt": "2022-09-20",\n  "createdAt": "2022-09-20",\n  "seenAt": "2022-09-20",\n  "alias": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);