"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9123],{86429:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>h,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>f});var t=i(87462),n=(i(67294),i(3905)),s=i(80334),o=(i(11032),i(46062)),r=i(57138),d=i(21439),l=(i(9531),i(15761),i(73418)),c=(i(92414),i(11666));const p={id:"mark-notifications-as-read",title:"Mark notifications as read",description:"Allow to select which notifications were read and saving a read date",sidebar_label:"Mark notifications as read",hide_title:!0,hide_table_of_contents:!0,api:{description:"Allow to select which notifications were read and saving a read date",tags:["Unstable"],operationId:"markNotificationsAsRead",requestBody:{description:"markNotificationsAsReadSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0,required:["notifications"],properties:{notifications:{type:"array",items:{type:"number"}}},title:"markNotificationsAsReadSchema"}}}},responses:{200:{description:"This response has no body."}},method:"post",path:"/api/admin/notifications/read",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{notifications:[0]},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"Mark notifications as read",description:{content:"Allow to select which notifications were read and saving a read date",type:"text/plain"},url:{path:["api","admin","notifications","read"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},m=void 0,u={unversionedId:"reference/api/unleash/mark-notifications-as-read",id:"reference/api/unleash/mark-notifications-as-read",title:"Mark notifications as read",description:"Allow to select which notifications were read and saving a read date",source:"@site/docs/reference/api/unleash/mark-notifications-as-read.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/mark-notifications-as-read",permalink:"/reference/api/unleash/mark-notifications-as-read",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"mark-notifications-as-read",title:"Mark notifications as read",description:"Allow to select which notifications were read and saving a read date",sidebar_label:"Mark notifications as read",hide_title:!0,hide_table_of_contents:!0,api:{description:"Allow to select which notifications were read and saving a read date",tags:["Unstable"],operationId:"markNotificationsAsRead",requestBody:{description:"markNotificationsAsReadSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0,required:["notifications"],properties:{notifications:{type:"array",items:{type:"number"}}},title:"markNotificationsAsReadSchema"}}}},responses:{200:{description:"This response has no body."}},method:"post",path:"/api/admin/notifications/read",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{notifications:[0]},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"Mark notifications as read",description:{content:"Allow to select which notifications were read and saving a read date",type:"text/plain"},url:{path:["api","admin","notifications","read"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Retrieves a list of notifications",permalink:"/reference/api/unleash/get-notifications"},next:{title:"Users",permalink:"/reference/api/unleash/users"}},h={},f=[{value:"Request",id:"request",level:2}],y={toc:f};function k(e){let{components:a,...i}=e;return(0,n.kt)("wrapper",(0,t.Z)({},y,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Mark notifications as read"),(0,n.kt)(o.Z,{method:"post",path:"/api/admin/notifications/read",mdxType:"MethodEndpoint"}),(0,n.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Allow to select which notifications were read and saving a read date"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)(d.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,n.kt)("strong",{className:"openapi-schema__required"},"required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"markNotificationsAsReadSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"notifications",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{name:"property name*",required:!1,schemaName:"any",qualifierMessage:void 0,schema:{type:"object",additionalProperties:!0,required:["notifications"],properties:{notifications:{type:"array",items:{type:"number"}}},title:"markNotificationsAsReadSchema"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null))))))}k.isMDXComponent=!0}}]);