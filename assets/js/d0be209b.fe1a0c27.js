"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2906],{88778:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var i=t(87462),s=(t(67294),t(3905)),r=t(70439),n=t(89402),l=t(10725),o=t(65860),m=t(5479),p=t(83559),d=(t(48567),t(72905));const u={id:"update-user",title:"updateUser",description:"updateUser",sidebar_label:"updateUser",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"updateUser",requestBody:{description:"updateUserSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0,properties:{email:{type:"string"},name:{type:"string"},rootRole:{type:"number"}}}}}},responses:{200:{description:"userSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateUser",method:"put",path:"/api/admin/user-admin/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{email:"string",name:"string",rootRole:0},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"update User",description:{type:"text/plain"},url:{path:["api","admin","user-admin",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api"},c=void 0,h={unversionedId:"reference/api/unleash/update-user",id:"reference/api/unleash/update-user",title:"updateUser",description:"updateUser",source:"@site/docs/reference/api/unleash/update-user.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-user",permalink:"/reference/api/unleash/update-user",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/update-user.api.mdx",tags:[],version:"current",frontMatter:{id:"update-user",title:"updateUser",description:"updateUser",sidebar_label:"updateUser",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"updateUser",requestBody:{description:"updateUserSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0,properties:{email:{type:"string"},name:{type:"string"},rootRole:{type:"number"}}}}}},responses:{200:{description:"userSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateUser",method:"put",path:"/api/admin/user-admin/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{email:"string",name:"string",rootRole:0},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"update User",description:{type:"text/plain"},url:{path:["api","admin","user-admin",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getUser",permalink:"/reference/api/unleash/get-user"},next:{title:"deleteUser",permalink:"/reference/api/unleash/delete-user"}},y={},g=[{value:"updateUser",id:"updateuser",level:2}],v={toc:g};function b(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"updateuser"},"updateUser"),(0,s.kt)("p",null,"updateUser"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"updateUserSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"email",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"rootRole",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"userSchema")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"isAPI",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"email",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"emailSent",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"rootRole",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"seenAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "id": 0,\n  "isAPI": true,\n  "name": "string",\n  "email": "string",\n  "username": "string",\n  "imageUrl": "string",\n  "inviteLink": "string",\n  "loginAttempts": 0,\n  "emailSent": true,\n  "rootRole": 0,\n  "seenAt": "2022-10-22",\n  "createdAt": "2022-10-22"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);