"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8238],{10873:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>v,frontMatter:()=>h,metadata:()=>g,toc:()=>k});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),r=(a(11032),a(46062)),m=a(57138),l=a(21439),p=a(9531),o=a(15761),d=a(73418),u=a(92414),c=a(11666);const h={id:"get-user",title:"getUser",description:"getUser",sidebar_label:"getUser",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getUser",responses:{200:{description:"userSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}},title:"userSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"getUser",method:"get",path:"/api/admin/user-admin/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get User",description:{type:"text/plain"},url:{path:["api","admin","user-admin",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/get-user",id:"reference/api/unleash/get-user",title:"getUser",description:"getUser",source:"@site/docs/reference/api/unleash/get-user.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-user",permalink:"/reference/api/unleash/get-user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-user",title:"getUser",description:"getUser",sidebar_label:"getUser",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getUser",responses:{200:{description:"userSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"number"},isAPI:{type:"boolean"},name:{type:"string"},email:{type:"string"},username:{type:"string"},imageUrl:{type:"string"},inviteLink:{type:"string"},loginAttempts:{type:"number"},emailSent:{type:"boolean"},rootRole:{type:"number"},seenAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time"},accountType:{type:"string"}},title:"userSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"getUser",method:"get",path:"/api/admin/user-admin/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get User",description:{type:"text/plain"},url:{path:["api","admin","user-admin",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getAdminCount",permalink:"/reference/api/unleash/get-admin-count"},next:{title:"updateUser",permalink:"/reference/api/unleash/update-user"}},b={},k=[{value:"Request",id:"request",level:2}],f={toc:k};function v(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"getUser"),(0,s.kt)(r.Z,{method:"get",path:"/api/admin/user-admin/{id}",mdxType:"MethodEndpoint"}),(0,s.kt)(m.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"getUser"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"userSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"accountType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "id": 0,\n  "isAPI": true,\n  "name": "string",\n  "email": "string",\n  "username": "string",\n  "imageUrl": "string",\n  "inviteLink": "string",\n  "loginAttempts": 0,\n  "emailSent": true,\n  "rootRole": 0,\n  "seenAt": "2023-06-13T00:15:33.046Z",\n  "createdAt": "2023-06-13T00:15:33.046Z",\n  "accountType": "string"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);