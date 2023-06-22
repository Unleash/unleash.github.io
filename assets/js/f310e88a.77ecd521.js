"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3553],{41568:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>f,frontMatter:()=>c,metadata:()=>b,toc:()=>g});var n=a(87462),s=(a(67294),a(3905)),i=a(80334),o=(a(11032),a(46062)),r=a(57138),d=a(21439),m=(a(9531),a(15761)),p=a(73418),l=a(92414),u=a(11666);const c={id:"get-admin-count",title:"getAdminCount",description:"getAdminCount",sidebar_label:"getAdminCount",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getAdminCount",responses:{200:{description:"adminCountSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Contains total admin counts for an Unleash instance.",required:["password","noPassword","service"],properties:{password:{type:"number",description:"Total number of admins that have a password set."},noPassword:{type:"number",description:"Total number of admins that do not have a password set. May be SSO, but may also be users that did not set a password yet."},service:{type:"number",description:"Total number of service accounts that have the admin root role."}},title:"adminCountSchema"}}}}},description:"getAdminCount",method:"get",path:"/api/admin/user-admin/admin-count",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Admin Count",description:{type:"text/plain"},url:{path:["api","admin","user-admin","admin-count"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,b={unversionedId:"reference/api/unleash/get-admin-count",id:"reference/api/unleash/get-admin-count",title:"getAdminCount",description:"getAdminCount",source:"@site/docs/reference/api/unleash/get-admin-count.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-admin-count",permalink:"/reference/api/unleash/get-admin-count",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-admin-count",title:"getAdminCount",description:"getAdminCount",sidebar_label:"getAdminCount",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getAdminCount",responses:{200:{description:"adminCountSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Contains total admin counts for an Unleash instance.",required:["password","noPassword","service"],properties:{password:{type:"number",description:"Total number of admins that have a password set."},noPassword:{type:"number",description:"Total number of admins that do not have a password set. May be SSO, but may also be users that did not set a password yet."},service:{type:"number",description:"Total number of service accounts that have the admin root role."}},title:"adminCountSchema"}}}}},description:"getAdminCount",method:"get",path:"/api/admin/user-admin/admin-count",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Admin Count",description:{type:"text/plain"},url:{path:["api","admin","user-admin","admin-count"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getBaseUsersAndGroups",permalink:"/reference/api/unleash/get-base-users-and-groups"},next:{title:"getUser",permalink:"/reference/api/unleash/get-user"}},y={},g=[{value:"Request",id:"request",level:2}],v={toc:g};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"getAdminCount"),(0,s.kt)(o.Z,{method:"get",path:"/api/admin/user-admin/admin-count",mdxType:"MethodEndpoint"}),(0,s.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"getAdminCount"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"adminCountSchema")),(0,s.kt)("div",null,(0,s.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"password",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Total number of admins that have a password set."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"noPassword",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Total number of admins that do not have a password set. May be SSO, but may also be users that did not set a password yet."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"service",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Total number of service accounts that have the admin root role."},mdxType:"SchemaItem"})))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "password": 0,\n  "noPassword": 0,\n  "service": 0\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);