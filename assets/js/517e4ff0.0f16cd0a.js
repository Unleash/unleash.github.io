"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4617],{83377:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var i=a(87462),r=(a(67294),a(3905)),n=a(60961),s=a(48165),o=(a(90115),a(58475)),c=a(5428),l=a(80487),m=(a(54881),a(11666));const d={id:"create-service-account",title:"createServiceAccount",description:"createServiceAccount",sidebar_label:"createServiceAccount",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unstable"],operationId:"createServiceAccount",requestBody:{description:"createServiceAccountSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["rootRole"],properties:{username:{type:"string"},name:{type:"string"},rootRole:{type:"number"}}}}}},responses:{200:{description:"serviceAccountSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},tokens:{type:"array",items:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}}}}}},description:"createServiceAccount",method:"post",path:"/api/admin/service-account",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{username:"string",name:"string",rootRole:0},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"create Service Account",description:{type:"text/plain"},url:{path:["api","admin","service-account"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},p=void 0,u={unversionedId:"reference/api/unleash/create-service-account",id:"reference/api/unleash/create-service-account",title:"createServiceAccount",description:"createServiceAccount",source:"@site/docs/reference/api/unleash/create-service-account.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-service-account",permalink:"/reference/api/unleash/create-service-account",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-service-account",title:"createServiceAccount",description:"createServiceAccount",sidebar_label:"createServiceAccount",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unstable"],operationId:"createServiceAccount",requestBody:{description:"createServiceAccountSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["rootRole"],properties:{username:{type:"string"},name:{type:"string"},rootRole:{type:"number"}}}}}},responses:{200:{description:"serviceAccountSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},tokens:{type:"array",items:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}}}}}},description:"createServiceAccount",method:"post",path:"/api/admin/service-account",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{username:"string",name:"string",rootRole:0},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"create Service Account",description:{type:"text/plain"},url:{path:["api","admin","service-account"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getServiceAccounts",permalink:"/reference/api/unleash/get-service-accounts"},next:{title:"updateServiceAccount",permalink:"/reference/api/unleash/update-service-account"}},v={},y=[{value:"createServiceAccount",id:"createserviceaccount",level:2}],h={toc:y};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"createserviceaccount"},"createServiceAccount"),(0,r.kt)("p",null,"createServiceAccount"),(0,r.kt)(s.Z,{mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"createServiceAccountSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"username",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"rootRole",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"serviceAccountSchema")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"isAPI",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"email",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"username",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"imageUrl",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"inviteLink",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"loginAttempts",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"emailSent",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"rootRole",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"seenAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"tokens"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"secret",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"expiresAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"seenAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "id": 0,\n  "isAPI": true,\n  "name": "string",\n  "email": "string",\n  "username": "string",\n  "imageUrl": "string",\n  "inviteLink": "string",\n  "loginAttempts": 0,\n  "emailSent": true,\n  "rootRole": 0,\n  "seenAt": "2023-02-03",\n  "createdAt": "2023-02-03",\n  "tokens": [\n    {\n      "id": 0,\n      "secret": "string",\n      "expiresAt": "2023-02-03",\n      "createdAt": "2023-02-03",\n      "seenAt": "2023-02-03"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);