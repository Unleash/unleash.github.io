"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3527],{84838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>v,frontMatter:()=>u,metadata:()=>g,toc:()=>k});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),r=(a(11032),a(46062)),o=a(57138),p=a(21439),m=a(9531),d=a(15761),l=a(73418),c=a(92414),h=a(11666);const u={id:"reactivate-strategy",title:"Reactivate a strategy",description:"Marks the specified strategy as not deprecated. If the strategy wasn't already deprecated, nothing changes.",sidebar_label:"Reactivate a strategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"reactivateStrategy",description:"Marks the specified strategy as not deprecated. If the strategy wasn't already deprecated, nothing changes.",responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"strategyName",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/strategies/{strategyName}/reactivate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Reactivate a strategy",description:{content:"Marks the specified strategy as not deprecated. If the strategy wasn't already deprecated, nothing changes.",type:"text/plain"},url:{path:["api","admin","strategies",":strategyName","reactivate"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyName"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/reactivate-strategy",id:"reference/api/unleash/reactivate-strategy",title:"Reactivate a strategy",description:"Marks the specified strategy as not deprecated. If the strategy wasn't already deprecated, nothing changes.",source:"@site/docs/reference/api/unleash/reactivate-strategy.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/reactivate-strategy",permalink:"/reference/api/unleash/reactivate-strategy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"reactivate-strategy",title:"Reactivate a strategy",description:"Marks the specified strategy as not deprecated. If the strategy wasn't already deprecated, nothing changes.",sidebar_label:"Reactivate a strategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"reactivateStrategy",description:"Marks the specified strategy as not deprecated. If the strategy wasn't already deprecated, nothing changes.",responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"strategyName",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/strategies/{strategyName}/reactivate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Reactivate a strategy",description:{content:"Marks the specified strategy as not deprecated. If the strategy wasn't already deprecated, nothing changes.",type:"text/plain"},url:{path:["api","admin","strategies",":strategyName","reactivate"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyName"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Deprecate a strategy",permalink:"/reference/api/unleash/deprecate-strategy"},next:{title:"Get strategies that use a context field",permalink:"/reference/api/unleash/get-strategies-by-context-field"}},f={},k=[{value:"Request",id:"request",level:2}],b={toc:k};function v(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Reactivate a strategy"),(0,s.kt)(r.Z,{method:"post",path:"/api/admin/strategies/{strategyName}/reactivate",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Marks the specified strategy as not deprecated. If the strategy wasn't already deprecated, nothing changes."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"strategyName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null)),(0,s.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The requested resource was not found.")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);