"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[29688],{1296:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>v,frontMatter:()=>h,metadata:()=>u,toc:()=>y});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),o=(a(11032),a(46062)),r=a(57138),c=a(21439),m=(a(9531),a(15761)),l=a(73418),p=a(92414),d=a(30433);const h={id:"get-notifications",title:"Retrieves a list of notifications",description:"A user may get relevant notifications from the projects they are a member of",sidebar_label:"Retrieves a list of notifications",hide_title:!0,hide_table_of_contents:!0,api:{description:"A user may get relevant notifications from the projects they are a member of",tags:["Notifications"],operationId:"getNotifications",responses:{200:{description:"notificationsSchema",content:{"application/json":{schema:{type:"array",description:"A list of [notifications](https://docs.getunleash.io/reference/notifications)",items:{type:"object",additionalProperties:!1,required:["id","message","link","notificationType","createdBy","createdAt","readAt"],properties:{id:{type:"number",example:1,description:"The id of this notification"},message:{type:"string",example:"Your change request got approved",description:"The actual notification message"},link:{type:"string",example:"/myunleash/projects/myproject/change-requests/46",description:"The link to change request or feature toggle the notification refers to"},notificationType:{enum:["change-request","toggle"],description:"The type of the notification used e.g. for the graphical hints"},createdBy:{type:"object",additionalProperties:!1,properties:{username:{type:"string",example:"Jane Smith",description:"The name of the user who triggered the notification",nullable:!0},imageUrl:{type:"string",example:"https://gravatar.com/avatar/758f27d1f066779a62a65665242b8780107df403509a62a9e8a5924df5469f68?s=42&d=retro&r=g",description:"The avatar url of the user who triggered the notification",nullable:!0}}},createdAt:{type:"string",format:"date-time",example:"2022-12-02T13:17:12.445Z",description:"The date and time when the notification was created"},readAt:{type:"string",format:"date-time",nullable:!0,example:"2022-12-02T13:17:12.445Z",description:"The date and time when the notification was read or marked as read, otherwise `null`"}}},title:"notificationsSchema"}}}}},method:"get",path:"/api/admin/notifications",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Retrieves a list of notifications",description:{content:"A user may get relevant notifications from the projects they are a member of",type:"text/plain"},url:{path:["api","admin","notifications"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},f=void 0,u={unversionedId:"reference/api/unleash/get-notifications",id:"reference/api/unleash/get-notifications",title:"Retrieves a list of notifications",description:"A user may get relevant notifications from the projects they are a member of",source:"@site/docs/reference/api/unleash/get-notifications.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-notifications",permalink:"/reference/api/unleash/get-notifications",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-notifications",title:"Retrieves a list of notifications",description:"A user may get relevant notifications from the projects they are a member of",sidebar_label:"Retrieves a list of notifications",hide_title:!0,hide_table_of_contents:!0,api:{description:"A user may get relevant notifications from the projects they are a member of",tags:["Notifications"],operationId:"getNotifications",responses:{200:{description:"notificationsSchema",content:{"application/json":{schema:{type:"array",description:"A list of [notifications](https://docs.getunleash.io/reference/notifications)",items:{type:"object",additionalProperties:!1,required:["id","message","link","notificationType","createdBy","createdAt","readAt"],properties:{id:{type:"number",example:1,description:"The id of this notification"},message:{type:"string",example:"Your change request got approved",description:"The actual notification message"},link:{type:"string",example:"/myunleash/projects/myproject/change-requests/46",description:"The link to change request or feature toggle the notification refers to"},notificationType:{enum:["change-request","toggle"],description:"The type of the notification used e.g. for the graphical hints"},createdBy:{type:"object",additionalProperties:!1,properties:{username:{type:"string",example:"Jane Smith",description:"The name of the user who triggered the notification",nullable:!0},imageUrl:{type:"string",example:"https://gravatar.com/avatar/758f27d1f066779a62a65665242b8780107df403509a62a9e8a5924df5469f68?s=42&d=retro&r=g",description:"The avatar url of the user who triggered the notification",nullable:!0}}},createdAt:{type:"string",format:"date-time",example:"2022-12-02T13:17:12.445Z",description:"The date and time when the notification was created"},readAt:{type:"string",format:"date-time",nullable:!0,example:"2022-12-02T13:17:12.445Z",description:"The date and time when the notification was read or marked as read, otherwise `null`"}}},title:"notificationsSchema"}}}}},method:"get",path:"/api/admin/notifications",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Retrieves a list of notifications",description:{content:"A user may get relevant notifications from the projects they are a member of",type:"text/plain"},url:{path:["api","admin","notifications"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Notifications",permalink:"/reference/api/unleash/notifications"},next:{title:"Mark notifications as read",permalink:"/reference/api/unleash/mark-notifications-as-read"}},g={},y=[{value:"Request",id:"request",level:2}],k={toc:y};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Retrieves a list of notifications"),(0,n.kt)(o.Z,{method:"get",path:"/api/admin/notifications",mdxType:"MethodEndpoint"}),(0,n.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"A user may get relevant notifications from the projects they are a member of"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"notificationsSchema")),(0,n.kt)("div",null,(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:1,description:"The id of this notification"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Your change request got approved",description:"The actual notification message"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"link",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"/myunleash/projects/myproject/change-requests/46",description:"The link to change request or feature toggle the notification refers to"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"notificationType",required:!0,schemaName:"",qualifierMessage:"**Possible values:** [`change-request`, `toggle`]",schema:{enum:["change-request","toggle"],description:"The type of the notification used e.g. for the graphical hints"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"createdBy"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Jane Smith",description:"The name of the user who triggered the notification",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"https://gravatar.com/avatar/758f27d1f066779a62a65665242b8780107df403509a62a9e8a5924df5469f68?s=42&d=retro&r=g",description:"The avatar url of the user who triggered the notification",nullable:!0},mdxType:"SchemaItem"})))),(0,n.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2022-12-02T13:17:12.445Z",description:"The date and time when the notification was created"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"readAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0,example:"2022-12-02T13:17:12.445Z",description:"The date and time when the notification was read or marked as read, otherwise `null`"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'[\n  {\n    "id": 1,\n    "message": "Your change request got approved",\n    "link": "/myunleash/projects/myproject/change-requests/46",\n    "createdBy": {\n      "username": "Jane Smith",\n      "imageUrl": "https://gravatar.com/avatar/758f27d1f066779a62a65665242b8780107df403509a62a9e8a5924df5469f68?s=42&d=retro&r=g"\n    },\n    "createdAt": "2022-12-02T13:17:12.445Z",\n    "readAt": "2022-12-02T13:17:12.445Z"\n  }\n]',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);