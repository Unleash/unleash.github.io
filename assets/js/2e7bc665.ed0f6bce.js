"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9123],{86429:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var i=t(87462),n=(t(67294),t(3905)),o=t(80334),s=(t(11032),t(46062)),r=t(21439),d=(t(9531),t(15761),t(73418)),l=(t(92414),t(11666));const c={id:"mark-notifications-as-read",title:"Mark notifications as read",description:"Allow to select which notifications were read and saving a read date",sidebar_label:"Mark notifications as read",hide_title:!0,hide_table_of_contents:!0,api:{description:"Allow to select which notifications were read and saving a read date",tags:["Unstable"],operationId:"markNotificationsAsRead",requestBody:{description:"markNotificationsAsReadSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0,required:["notifications"],properties:{notifications:{type:"array",items:{type:"number"}}},title:"markNotificationsAsReadSchema"}}}},responses:{200:{description:"This response has no body."}},method:"post",path:"/api/admin/notifications/read",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{notifications:[0]},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"Mark notifications as read",description:{content:"Allow to select which notifications were read and saving a read date",type:"text/plain"},url:{path:["api","admin","notifications","read"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},p=void 0,m={unversionedId:"reference/api/unleash/mark-notifications-as-read",id:"reference/api/unleash/mark-notifications-as-read",title:"Mark notifications as read",description:"Allow to select which notifications were read and saving a read date",source:"@site/docs/reference/api/unleash/mark-notifications-as-read.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/mark-notifications-as-read",permalink:"/reference/api/unleash/mark-notifications-as-read",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"mark-notifications-as-read",title:"Mark notifications as read",description:"Allow to select which notifications were read and saving a read date",sidebar_label:"Mark notifications as read",hide_title:!0,hide_table_of_contents:!0,api:{description:"Allow to select which notifications were read and saving a read date",tags:["Unstable"],operationId:"markNotificationsAsRead",requestBody:{description:"markNotificationsAsReadSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0,required:["notifications"],properties:{notifications:{type:"array",items:{type:"number"}}},title:"markNotificationsAsReadSchema"}}}},responses:{200:{description:"This response has no body."}},method:"post",path:"/api/admin/notifications/read",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{notifications:[0]},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"Mark notifications as read",description:{content:"Allow to select which notifications were read and saving a read date",type:"text/plain"},url:{path:["api","admin","notifications","read"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Retrieves a list of notifications",permalink:"/reference/api/unleash/get-notifications"},next:{title:"Users",permalink:"/reference/api/unleash/users"}},u={},h=[],f={toc:h};function y(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Mark notifications as read"),(0,n.kt)(s.Z,{method:"post",path:"/api/admin/notifications/read",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"Allow to select which notifications were read and saving a read date"),(0,n.kt)(r.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"markNotificationsAsReadSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"notifications",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null))))))}y.isMDXComponent=!0}}]);