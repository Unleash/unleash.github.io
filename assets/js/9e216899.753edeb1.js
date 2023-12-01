"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[11225],{77578:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>h,metadata:()=>g,toc:()=>f});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),o=(a(11032),a(46062)),r=a(57138),l=a(21439),p=(a(9531),a(15761)),m=a(73418),d=a(92414),c=a(30433);const h={id:"get-login-history",title:"Get all login events.",description:"Returns **all** login events in the Unleash system. You can optionally get them in CSV format by specifying the `Accept` header as `text/csv`.",sidebar_label:"Get all login events.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Instance Admin"],operationId:"getLoginHistory",responses:{200:{description:"loginHistorySchema",content:{"application/json":{schema:{description:"A response model with a list of login events.",type:"object",additionalProperties:!1,required:["events"],properties:{events:{type:"array",description:"A list of login events",items:{description:"A model representing a single login event.",type:"object",additionalProperties:!1,required:["id"],properties:{id:{description:"The event's ID. Event IDs are incrementing integers. In other words, a more recent event will always have a higher ID than an older event.",type:"integer",minimum:1,example:13},username:{description:'The username of the user that attempted to log in. Will return "Incorrectly configured provider" when attempting to log in using a misconfigured provider.',type:"string",example:"admin"},auth_type:{description:"The authentication type used to log in.",example:"simple",type:"string"},created_at:{description:"The date and time of when the login was attempted.",type:"string",format:"date-time",example:"2023-03-01T12:04:26.061Z"},successful:{description:"Whether the login was successful or not.",type:"boolean",example:!0},ip:{description:"The IP address of the client that attempted to log in.",type:"string",nullable:!0,example:"::ffff:127.0.0.1"},failure_reason:{description:"The reason for the login failure. This property is only present if the login was unsuccessful.",type:"string",nullable:!0,example:"No user found"}},title:"loginEventSchema"}}},title:"loginHistorySchema"}},"text/csv":{schema:{type:"string"}}}},204:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},description:"Returns **all** login events in the Unleash system. You can optionally get them in CSV format by specifying the `Accept` header as `text/csv`.",method:"get",path:"/api/admin/logins",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Get all login events.",description:{content:"Returns **all** login events in the Unleash system. You can optionally get them in CSV format by specifying the `Accept` header as `text/csv`.",type:"text/plain"},url:{path:["api","admin","logins"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/get-login-history",id:"reference/api/unleash/get-login-history",title:"Get all login events.",description:"Returns **all** login events in the Unleash system. You can optionally get them in CSV format by specifying the `Accept` header as `text/csv`.",source:"@site/docs/reference/api/unleash/get-login-history.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-login-history",permalink:"/reference/api/unleash/get-login-history",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-login-history",title:"Get all login events.",description:"Returns **all** login events in the Unleash system. You can optionally get them in CSV format by specifying the `Accept` header as `text/csv`.",sidebar_label:"Get all login events.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Instance Admin"],operationId:"getLoginHistory",responses:{200:{description:"loginHistorySchema",content:{"application/json":{schema:{description:"A response model with a list of login events.",type:"object",additionalProperties:!1,required:["events"],properties:{events:{type:"array",description:"A list of login events",items:{description:"A model representing a single login event.",type:"object",additionalProperties:!1,required:["id"],properties:{id:{description:"The event's ID. Event IDs are incrementing integers. In other words, a more recent event will always have a higher ID than an older event.",type:"integer",minimum:1,example:13},username:{description:'The username of the user that attempted to log in. Will return "Incorrectly configured provider" when attempting to log in using a misconfigured provider.',type:"string",example:"admin"},auth_type:{description:"The authentication type used to log in.",example:"simple",type:"string"},created_at:{description:"The date and time of when the login was attempted.",type:"string",format:"date-time",example:"2023-03-01T12:04:26.061Z"},successful:{description:"Whether the login was successful or not.",type:"boolean",example:!0},ip:{description:"The IP address of the client that attempted to log in.",type:"string",nullable:!0,example:"::ffff:127.0.0.1"},failure_reason:{description:"The reason for the login failure. This property is only present if the login was unsuccessful.",type:"string",nullable:!0,example:"No user found"}},title:"loginEventSchema"}}},title:"loginHistorySchema"}},"text/csv":{schema:{type:"string"}}}},204:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},description:"Returns **all** login events in the Unleash system. You can optionally get them in CSV format by specifying the `Accept` header as `text/csv`.",method:"get",path:"/api/admin/logins",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Get all login events.",description:{content:"Returns **all** login events in the Unleash system. You can optionally get them in CSV format by specifying the `Accept` header as `text/csv`.",type:"text/plain"},url:{path:["api","admin","logins"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Instance Admin",permalink:"/reference/api/unleash/instance-admin"},next:{title:"Instance usage statistics",permalink:"/reference/api/unleash/get-instance-admin-stats-csv"}},y={},f=[{value:"Request",id:"request",level:2}],v={toc:f};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get all login events."),(0,n.kt)(o.Z,{method:"get",path:"/api/admin/logins",mdxType:"MethodEndpoint"}),(0,n.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Returns ",(0,n.kt)("strong",{parentName:"p"},"all")," login events in the Unleash system. You can optionally get them in CSV format by specifying the ",(0,n.kt)("inlineCode",{parentName:"p"},"Accept")," header as ",(0,n.kt)("inlineCode",{parentName:"p"},"text/csv"),"."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"loginHistorySchema")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"events"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"A list of login events")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{description:"The event's ID. Event IDs are incrementing integers. In other words, a more recent event will always have a higher ID than an older event.",type:"integer",minimum:1,example:13},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:'The username of the user that attempted to log in. Will return "Incorrectly configured provider" when attempting to log in using a misconfigured provider.',type:"string",example:"admin"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"auth_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The authentication type used to log in.",example:"simple",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"created_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The date and time of when the login was attempted.",type:"string",format:"date-time",example:"2023-03-01T12:04:26.061Z"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"successful",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the login was successful or not.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"ip",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The IP address of the client that attempted to log in.",type:"string",nullable:!0,example:"::ffff:127.0.0.1"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"failure_reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The reason for the login failure. This property is only present if the login was unsuccessful.",type:"string",nullable:!0,example:"No user found"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "events": [\n    {\n      "id": 13,\n      "username": "admin",\n      "auth_type": "simple",\n      "created_at": "2023-03-01T12:04:26.061Z",\n      "successful": true,\n      "ip": "::ffff:127.0.0.1",\n      "failure_reason": "No user found"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))),(0,n.kt)(c.Z,{label:"text/csv",value:"text/csv",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"))))))))))),(0,n.kt)(c.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null)),(0,n.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The requested resource was not found.")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);