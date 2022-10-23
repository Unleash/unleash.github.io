"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6161],{13404:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>c,toc:()=>g});var t=a(87462),n=(a(67294),a(3905)),s=a(70439),l=a(89402),o=(a(10725),a(65860)),r=a(5479),m=a(83559),p=(a(48567),a(72905));const d={id:"login",title:"login",description:"login",sidebar_label:"login",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"login",requestBody:{description:"loginSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["username","password"],properties:{username:{type:"string"},password:{type:"string"}}}}}},responses:{200:{description:"userSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"}}}}}}},description:"login",method:"post",path:"/auth/simple/login",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{username:"string",password:"string"},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"login",description:{type:"text/plain"},url:{path:["auth","simple","login"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},u=void 0,c={unversionedId:"reference/api/unleash/login",id:"reference/api/unleash/login",title:"login",description:"login",source:"@site/docs/reference/api/unleash/login.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/login",permalink:"/reference/api/unleash/login",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/login.api.mdx",tags:[],version:"current",frontMatter:{id:"login",title:"login",description:"login",sidebar_label:"login",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"login",requestBody:{description:"loginSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["username","password"],properties:{username:{type:"string"},password:{type:"string"}}}}}},responses:{200:{description:"userSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"}}}}}}},description:"login",method:"post",path:"/auth/simple/login",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{username:"string",password:"string"},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"login",description:{type:"text/plain"},url:{path:["auth","simple","login"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Auth",permalink:"/reference/api/unleash/auth"},next:{title:"validateToken",permalink:"/reference/api/unleash/validate-token"}},h={},g=[{value:"login",id:"login",level:2}],y={toc:g};function v(e){let{components:i,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},y,a,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"login"},"login"),(0,n.kt)("p",null,"login"),(0,n.kt)(l.Z,{mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"loginSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"username",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"password",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"userSchema")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"isAPI",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"email",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"emailSent",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"rootRole",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"seenAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "id": 0,\n  "isAPI": true,\n  "name": "string",\n  "email": "string",\n  "username": "string",\n  "imageUrl": "string",\n  "inviteLink": "string",\n  "loginAttempts": 0,\n  "emailSent": true,\n  "rootRole": 0,\n  "seenAt": "2022-10-23",\n  "createdAt": "2022-10-23"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);