"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[17035],{34154:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var n=t(87462),i=(t(67294),t(3905)),o=t(80334),s=(t(11032),t(46062)),r=t(57138),m=t(21439),l=(t(9531),t(15761)),p=t(73418),d=t(92414),c=t(30433);const h={id:"toggle-maintenance",title:"Enabled/disabled maintenance mode",description:"Lets administrators put Unleash into a mostly read-only mode. While Unleash is in maintenance mode, users can not change any configuration settings",sidebar_label:"Enabled/disabled maintenance mode",hide_title:!0,hide_table_of_contents:!0,api:{description:"Lets administrators put Unleash into a mostly read-only mode. While Unleash is in maintenance mode, users can not change any configuration settings",tags:["Maintenance"],operationId:"toggleMaintenance",responses:{204:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},requestBody:{description:"toggleMaintenanceSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data used when to activate or deactivate maintenance mode for Unleash.",required:["enabled"],properties:{enabled:{description:"`true` if you want to activate maintenance mode, `false` if you want to deactivate it.",type:"boolean",example:!0}},title:"toggleMaintenanceSchema"}}}},method:"post",path:"/api/admin/maintenance",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{enabled:!0},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Enabled/disabled maintenance mode",description:{content:"Lets administrators put Unleash into a mostly read-only mode. While Unleash is in maintenance mode, users can not change any configuration settings",type:"text/plain"},url:{path:["api","admin","maintenance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/toggle-maintenance",id:"reference/api/unleash/toggle-maintenance",title:"Enabled/disabled maintenance mode",description:"Lets administrators put Unleash into a mostly read-only mode. While Unleash is in maintenance mode, users can not change any configuration settings",source:"@site/docs/reference/api/unleash/toggle-maintenance.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/toggle-maintenance",permalink:"/reference/api/unleash/toggle-maintenance",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"toggle-maintenance",title:"Enabled/disabled maintenance mode",description:"Lets administrators put Unleash into a mostly read-only mode. While Unleash is in maintenance mode, users can not change any configuration settings",sidebar_label:"Enabled/disabled maintenance mode",hide_title:!0,hide_table_of_contents:!0,api:{description:"Lets administrators put Unleash into a mostly read-only mode. While Unleash is in maintenance mode, users can not change any configuration settings",tags:["Maintenance"],operationId:"toggleMaintenance",responses:{204:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},requestBody:{description:"toggleMaintenanceSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data used when to activate or deactivate maintenance mode for Unleash.",required:["enabled"],properties:{enabled:{description:"`true` if you want to activate maintenance mode, `false` if you want to deactivate it.",type:"boolean",example:!0}},title:"toggleMaintenanceSchema"}}}},method:"post",path:"/api/admin/maintenance",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{enabled:!0},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Enabled/disabled maintenance mode",description:{content:"Lets administrators put Unleash into a mostly read-only mode. While Unleash is in maintenance mode, users can not change any configuration settings",type:"text/plain"},url:{path:["api","admin","maintenance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Maintenance",permalink:"/reference/api/unleash/maintenance"},next:{title:"Get maintenance mode status",permalink:"/reference/api/unleash/get-maintenance"}},g={},b=[{value:"Request",id:"request",level:2}],f={toc:b};function k(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Enabled/disabled maintenance mode"),(0,i.kt)(s.Z,{method:"post",path:"/api/admin/maintenance",mdxType:"MethodEndpoint"}),(0,i.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Lets administrators put Unleash into a mostly read-only mode. While Unleash is in maintenance mode, users can not change any configuration settings"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)(m.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"toggleMaintenanceSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"`true` if you want to activate maintenance mode, `false` if you want to deactivate it.",type:"boolean",example:!0},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The request data does not match what we expect.")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);