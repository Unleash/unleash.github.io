"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6161],{13404:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>c,toc:()=>g});var t=i(87462),s=(i(67294),i(3905)),n=i(70439),o=i(89402),l=(i(10725),i(65860)),r=i(5479),m=i(83559),p=(i(48567),i(72905));const d={id:"login",sidebar_label:"login",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"login",requestBody:{description:"loginSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["username","password"],properties:{username:{type:"string"},password:{type:"string"}}}}}},responses:{200:{description:"userSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"}}}}}}},description:"login",method:"post",path:"/auth/simple/login",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{username:"string",password:"string"},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"login",description:{type:"text/plain"},url:{path:["ushosted","auth","simple","login"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/reference/api/unleash/unleash-api"},u=void 0,c={unversionedId:"reference/api/unleash/login",id:"reference/api/unleash/login",title:"login",description:"login",source:"@site/docs/reference/api/unleash/login.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/login",permalink:"/reference/api/unleash/login",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/login.api.mdx",tags:[],version:"current",frontMatter:{id:"login",sidebar_label:"login",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"login",requestBody:{description:"loginSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["username","password"],properties:{username:{type:"string"},password:{type:"string"}}}}}},responses:{200:{description:"userSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"}}}}}}},description:"login",method:"post",path:"/auth/simple/login",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{username:"string",password:"string"},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"login",description:{type:"text/plain"},url:{path:["ushosted","auth","simple","login"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Auth",permalink:"/reference/api/unleash/auth"},next:{title:"validateToken",permalink:"/reference/api/unleash/validate-token"}},h={},g=[{value:"login",id:"login",level:2}],y={toc:g};function v(e){let{components:a,...i}=e;return(0,s.kt)("wrapper",(0,t.Z)({},y,i,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"login"},"login"),(0,s.kt)("p",null,"login"),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"loginSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(r.Z,{collapsible:!1,name:"username",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"password",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"userSchema")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(r.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"isAPI",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"email",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"emailSent",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"rootRole",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"seenAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": 0,\n  "isAPI": true,\n  "name": "string",\n  "email": "string",\n  "username": "string",\n  "imageUrl": "string",\n  "inviteLink": "string",\n  "loginAttempts": 0,\n  "emailSent": true,\n  "rootRole": 0,\n  "seenAt": "2022-09-20",\n  "createdAt": "2022-09-20"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);