"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[43553],{41568:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>h,default:()=>v,frontMatter:()=>u,metadata:()=>y,toc:()=>g});var n=t(87462),s=(t(67294),t(3905)),i=t(80334),o=(t(11032),t(46062)),r=t(57138),m=t(21439),p=(t(9531),t(15761)),d=t(73418),l=t(92414),c=t(30433);const u={id:"get-admin-count",title:"Get total count of admin accounts",description:"Get a total count of admins with password, without password and admin service accounts",sidebar_label:"Get total count of admin accounts",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getAdminCount",description:"Get a total count of admins with password, without password and admin service accounts",responses:{200:{description:"adminCountSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Contains total admin counts for an Unleash instance.",required:["password","noPassword","service"],properties:{password:{type:"number",description:"Total number of admins that have a password set."},noPassword:{type:"number",description:"Total number of admins that do not have a password set. May be SSO, but may also be users that did not set a password yet."},service:{type:"number",description:"Total number of service accounts that have the admin root role."}},title:"adminCountSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/user-admin/admin-count",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Get total count of admin accounts",description:{content:"Get a total count of admins with password, without password and admin service accounts",type:"text/plain"},url:{path:["api","admin","user-admin","admin-count"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,y={unversionedId:"reference/api/unleash/get-admin-count",id:"reference/api/unleash/get-admin-count",title:"Get total count of admin accounts",description:"Get a total count of admins with password, without password and admin service accounts",source:"@site/docs/reference/api/unleash/get-admin-count.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-admin-count",permalink:"/reference/api/unleash/get-admin-count",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-admin-count",title:"Get total count of admin accounts",description:"Get a total count of admins with password, without password and admin service accounts",sidebar_label:"Get total count of admin accounts",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getAdminCount",description:"Get a total count of admins with password, without password and admin service accounts",responses:{200:{description:"adminCountSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Contains total admin counts for an Unleash instance.",required:["password","noPassword","service"],properties:{password:{type:"number",description:"Total number of admins that have a password set."},noPassword:{type:"number",description:"Total number of admins that do not have a password set. May be SSO, but may also be users that did not set a password yet."},service:{type:"number",description:"Total number of service accounts that have the admin root role."}},title:"adminCountSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/user-admin/admin-count",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Get total count of admin accounts",description:{content:"Get a total count of admins with password, without password and admin service accounts",type:"text/plain"},url:{path:["api","admin","user-admin","admin-count"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get basic user and group information",permalink:"/reference/api/unleash/get-base-users-and-groups"},next:{title:"Get user",permalink:"/reference/api/unleash/get-user"}},b={},g=[{value:"Request",id:"request",level:2}],f={toc:g};function v(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Get total count of admin accounts"),(0,s.kt)(o.Z,{method:"get",path:"/api/admin/user-admin/admin-count",mdxType:"MethodEndpoint"}),(0,s.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Get a total count of admins with password, without password and admin service accounts"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"adminCountSchema")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"password",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Total number of admins that have a password set."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"noPassword",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Total number of admins that do not have a password set. May be SSO, but may also be users that did not set a password yet."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"service",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Total number of service accounts that have the admin root role."},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "password": 0,\n  "noPassword": 0,\n  "service": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);