"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4503],{19787:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>g,default:()=>b,frontMatter:()=>h,metadata:()=>y,toc:()=>k});var i=t(87462),s=(t(67294),t(3905)),n=t(80334),r=(t(11032),t(46062)),o=t(57138),m=t(21439),p=t(9531),l=t(15761),d=t(73418),c=t(92414),u=t(11666);const h={id:"get-feature-usage-summary",title:"Last hour of usage and a list of applications that have reported seeing this feature toggle",description:"Separate counts for yes (enabled), no (disabled), as well as how many times each variant was selected during the last hour",sidebar_label:"Last hour of usage and a list of applications that have reported seeing this feature toggle",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getFeatureUsageSummary",tags:["Metrics"],description:"Separate counts for yes (enabled), no (disabled), as well as how many times each variant was selected during the last hour",responses:{200:{description:"featureUsageSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"How many applications have seen this feature toggle, as well as how this feature was evaluated the last hour",required:["version","maturity","featureName","lastHourUsage","seenApplications"],properties:{version:{description:"The version of this schema",type:"integer",minimum:1},maturity:{description:"The maturity level of this API (alpha, beta, stable, deprecated)",type:"string",example:"stable"},featureName:{description:"The name of the feature",type:"string",example:"my.special.feature"},lastHourUsage:{description:"Last hour statistics. Accumulated per feature per environment. Contains counts for evaluations to true (yes) and to false (no)",type:"array",items:{type:"object",additionalProperties:!1,required:["environment","timestamp","yes","no"],description:"How many times `feautreName` was evaluated to `true` (yes) and `false` (no) for `appName` in `environmnet`",properties:{featureName:{description:"The name of the feature",type:"string",example:"my.special.feature"},appName:{description:"The name of the application the SDK is being used in",type:"string",example:"accounting"},environment:{description:"Which environment the SDK is being used in",type:"string",example:"development"},timestamp:{description:"The start of the time window these metrics are valid for. The window is usually 1 hour wide",example:"1926-05-08T12:00:00.000Z",oneOf:[{type:"string",format:"date-time",description:"An [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339.html)-compliant timestamp.",example:"2023-07-27T11:23:44Z"},{type:"integer",description:"A [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time).",example:1690449593}],title:"dateSchema"},yes:{description:"How many times the toggle evaluated to true",type:"integer",example:974,minimum:0},no:{description:"How many times the toggle evaluated to false",type:"integer",example:50,minimum:0},variants:{description:"How many times each variant was returned",type:"object",additionalProperties:{type:"integer",minimum:0},example:{variantA:15,variantB:25,variantC:5}}},title:"featureEnvironmentMetricsSchema"}},seenApplications:{description:"A list of applications seen using this feature",type:"array",items:{type:"string"},example:["accounting","billing","booking"]}},title:"featureUsageSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/client-metrics/features/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.3.0-main"},postman:{name:"Last hour of usage and a list of applications that have reported seeing this feature toggle",description:{content:"Separate counts for yes (enabled), no (disabled), as well as how many times each variant was selected during the last hour",type:"text/plain"},url:{path:["api","admin","client-metrics","features",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,y={unversionedId:"reference/api/unleash/get-feature-usage-summary",id:"reference/api/unleash/get-feature-usage-summary",title:"Last hour of usage and a list of applications that have reported seeing this feature toggle",description:"Separate counts for yes (enabled), no (disabled), as well as how many times each variant was selected during the last hour",source:"@site/docs/reference/api/unleash/get-feature-usage-summary.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-feature-usage-summary",permalink:"/reference/api/unleash/get-feature-usage-summary",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-feature-usage-summary",title:"Last hour of usage and a list of applications that have reported seeing this feature toggle",description:"Separate counts for yes (enabled), no (disabled), as well as how many times each variant was selected during the last hour",sidebar_label:"Last hour of usage and a list of applications that have reported seeing this feature toggle",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getFeatureUsageSummary",tags:["Metrics"],description:"Separate counts for yes (enabled), no (disabled), as well as how many times each variant was selected during the last hour",responses:{200:{description:"featureUsageSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"How many applications have seen this feature toggle, as well as how this feature was evaluated the last hour",required:["version","maturity","featureName","lastHourUsage","seenApplications"],properties:{version:{description:"The version of this schema",type:"integer",minimum:1},maturity:{description:"The maturity level of this API (alpha, beta, stable, deprecated)",type:"string",example:"stable"},featureName:{description:"The name of the feature",type:"string",example:"my.special.feature"},lastHourUsage:{description:"Last hour statistics. Accumulated per feature per environment. Contains counts for evaluations to true (yes) and to false (no)",type:"array",items:{type:"object",additionalProperties:!1,required:["environment","timestamp","yes","no"],description:"How many times `feautreName` was evaluated to `true` (yes) and `false` (no) for `appName` in `environmnet`",properties:{featureName:{description:"The name of the feature",type:"string",example:"my.special.feature"},appName:{description:"The name of the application the SDK is being used in",type:"string",example:"accounting"},environment:{description:"Which environment the SDK is being used in",type:"string",example:"development"},timestamp:{description:"The start of the time window these metrics are valid for. The window is usually 1 hour wide",example:"1926-05-08T12:00:00.000Z",oneOf:[{type:"string",format:"date-time",description:"An [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339.html)-compliant timestamp.",example:"2023-07-27T11:23:44Z"},{type:"integer",description:"A [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time).",example:1690449593}],title:"dateSchema"},yes:{description:"How many times the toggle evaluated to true",type:"integer",example:974,minimum:0},no:{description:"How many times the toggle evaluated to false",type:"integer",example:50,minimum:0},variants:{description:"How many times each variant was returned",type:"object",additionalProperties:{type:"integer",minimum:0},example:{variantA:15,variantB:25,variantC:5}}},title:"featureEnvironmentMetricsSchema"}},seenApplications:{description:"A list of applications seen using this feature",type:"array",items:{type:"string"},example:["accounting","billing","booking"]}},title:"featureUsageSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/client-metrics/features/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.3.0-main"},postman:{name:"Last hour of usage and a list of applications that have reported seeing this feature toggle",description:{content:"Separate counts for yes (enabled), no (disabled), as well as how many times each variant was selected during the last hour",type:"text/plain"},url:{path:["api","admin","client-metrics","features",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Feature usage metrics for the last 48 hours, grouped by hour",permalink:"/reference/api/unleash/get-raw-feature-metrics"},next:{title:"Operational",permalink:"/reference/api/unleash/operational"}},f={},k=[{value:"Request",id:"request",level:2}],v={toc:k};function b(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Last hour of usage and a list of applications that have reported seeing this feature toggle"),(0,s.kt)(r.Z,{method:"get",path:"/api/admin/client-metrics/features/{name}",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Separate counts for yes (enabled), no (disabled), as well as how many times each variant was selected during the last hour"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"featureUsageSchema")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{description:"The version of this schema",type:"integer",minimum:1},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"maturity",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The maturity level of this API (alpha, beta, stable, deprecated)",type:"string",example:"stable"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"featureName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the feature",type:"string",example:"my.special.feature"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"lastHourUsage"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Last hour statistics. Accumulated per feature per environment. Contains counts for evaluations to true (yes) and to false (no)")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"featureName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the feature",type:"string",example:"my.special.feature"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"appName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the application the SDK is being used in",type:"string",example:"accounting"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"environment",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Which environment the SDK is being used in",type:"string",example:"development"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"timestamp"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The start of the time window these metrics are valid for. The window is usually 1 hour wide")),(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"An ",(0,s.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc3339.html"},"RFC-3339"),"-compliant timestamp."))))),(0,s.kt)(u.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_time"},"UNIX timestamp"),".")))))))))),(0,s.kt)(d.Z,{collapsible:!1,name:"yes",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many times the toggle evaluated to true",type:"integer",example:974,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"no",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many times the toggle evaluated to false",type:"integer",example:50,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"variants"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"How many times each variant was returned")),(0,s.kt)(d.Z,{name:"property name*",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!1,name:"seenApplications",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"A list of applications seen using this feature",type:"array",items:{type:"string"},example:["accounting","billing","booking"]},mdxType:"SchemaItem"})))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "version": 0,\n  "maturity": "stable",\n  "featureName": "my.special.feature",\n  "lastHourUsage": [\n    {\n      "featureName": "my.special.feature",\n      "appName": "accounting",\n      "environment": "development",\n      "timestamp": "2023-07-27T11:23:44Z",\n      "yes": 974,\n      "no": 50,\n      "variants": {\n        "variantA": 15,\n        "variantB": 25,\n        "variantC": 5\n      }\n    }\n  ],\n  "seenApplications": [\n    "accounting",\n    "billing",\n    "booking"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(u.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(u.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(u.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The requested resource was not found.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);