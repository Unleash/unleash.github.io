"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1337],{51763:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>v,frontMatter:()=>u,metadata:()=>b,toc:()=>y});var i=s(87462),a=(s(67294),s(3905)),n=s(80334),r=(s(11032),s(46062)),m=s(57138),o=s(21439),c=(s(9531),s(15761)),p=s(73418),l=s(92414),d=s(11666);const u={id:"get-instance-admin-stats",title:"Instance usage statistics",description:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",sidebar_label:"Instance usage statistics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Instance Admin"],operationId:"getInstanceAdminStats",description:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",responses:{200:{description:"instanceAdminStatsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Information about an instance and statistics about usage of various features of Unleash",required:["instanceId"],properties:{instanceId:{type:"string",description:"A unique identifier for this instance. Generated by the database migration scripts at first run. Typically a UUID.",example:"ed3861ae-78f9-4e8c-8e57-b57efc15f82b"},timestamp:{type:"string",format:"date-time",nullable:!0,description:"When these statistics were produced",example:"2023-06-12T12:25:06Z"},versionOSS:{type:"string",description:"The version of Unleash OSS that is bundled in this instance",example:"5.1.7"},versionEnterprise:{type:"string",description:"The version of Unleash Enterprise that is bundled in this instance",example:"5.1.7"},users:{type:"number",description:"The number of users this instance has",example:8,minimum:0},activeUsers:{type:"object",description:"The number of active users in the last 7, 30 and 90 days",properties:{last7:{type:"number",description:"The number of active users in the last 7 days",example:5,minimum:0},last30:{type:"number",description:"The number of active users in the last 30 days",example:10,minimum:0},last60:{type:"number",description:"The number of active users in the last 60 days",example:12,minimum:0},last90:{type:"number",description:"The number of active users in the last 90 days",example:15,minimum:0}}},featureToggles:{type:"number",description:"The number of feature-toggles this instance has",example:47,minimum:0},projects:{type:"number",description:"The number of projects defined in this instance.",example:3,minimum:0},contextFields:{type:"number",description:"The number of context fields defined in this instance.",example:7,minimum:0},roles:{type:"number",description:"The number of roles defined in this instance",example:5,minimum:0},groups:{type:"number",description:"The number of groups defined in this instance",example:12,minimum:0},environments:{type:"number",description:"The number of environments defined in this instance",example:3,minimum:0},segments:{type:"number",description:"The number of segments defined in this instance",example:19,minimum:0},strategies:{type:"number",description:"The number of strategies defined in this instance",example:8,minimum:0},SAMLenabled:{type:"boolean",description:"Whether or not SAML authentication is enabled for this instance",example:!1},OIDCenabled:{type:"boolean",description:"Whether or not OIDC authentication is enabled for this instance",example:!0},clientApps:{type:"array",description:"A count of connected applications in the last week, last month and all time since last restart",items:{type:"object",description:"An entry describing how many client applications has been observed over the defined range",properties:{range:{type:"string",description:"A description of a time range",enum:["allTime","30d","7d"],example:"30d"},count:{type:"number",description:"The number of client applications that have been observed in this period",example:1}}}},featureExports:{type:"number",description:"The number of export operations on this instance",example:0,minimum:0},featureImports:{type:"number",description:"The number of import operations on this instance",example:0,minimum:0},sum:{type:"string",description:"A SHA-256 checksum of the instance statistics to be used to verify that the data in this object has not been tampered with",example:"b023323477abb1eb145bebf3cdb30a1c2063e3edc1f7ae474ed8ed6c80de9a3b"}},title:"instanceAdminStatsSchema"}}}}},deprecated:!0,method:"get",path:"/api/admin/instance-admin/statistics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.5.0"},postman:{name:"Instance usage statistics",description:{content:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",type:"text/plain"},url:{path:["api","admin","instance-admin","statistics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,b={unversionedId:"reference/api/unleash/get-instance-admin-stats",id:"reference/api/unleash/get-instance-admin-stats",title:"Instance usage statistics",description:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",source:"@site/docs/reference/api/unleash/get-instance-admin-stats.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-instance-admin-stats",permalink:"/reference/api/unleash/get-instance-admin-stats",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-instance-admin-stats",title:"Instance usage statistics",description:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",sidebar_label:"Instance usage statistics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Instance Admin"],operationId:"getInstanceAdminStats",description:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",responses:{200:{description:"instanceAdminStatsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Information about an instance and statistics about usage of various features of Unleash",required:["instanceId"],properties:{instanceId:{type:"string",description:"A unique identifier for this instance. Generated by the database migration scripts at first run. Typically a UUID.",example:"ed3861ae-78f9-4e8c-8e57-b57efc15f82b"},timestamp:{type:"string",format:"date-time",nullable:!0,description:"When these statistics were produced",example:"2023-06-12T12:25:06Z"},versionOSS:{type:"string",description:"The version of Unleash OSS that is bundled in this instance",example:"5.1.7"},versionEnterprise:{type:"string",description:"The version of Unleash Enterprise that is bundled in this instance",example:"5.1.7"},users:{type:"number",description:"The number of users this instance has",example:8,minimum:0},activeUsers:{type:"object",description:"The number of active users in the last 7, 30 and 90 days",properties:{last7:{type:"number",description:"The number of active users in the last 7 days",example:5,minimum:0},last30:{type:"number",description:"The number of active users in the last 30 days",example:10,minimum:0},last60:{type:"number",description:"The number of active users in the last 60 days",example:12,minimum:0},last90:{type:"number",description:"The number of active users in the last 90 days",example:15,minimum:0}}},featureToggles:{type:"number",description:"The number of feature-toggles this instance has",example:47,minimum:0},projects:{type:"number",description:"The number of projects defined in this instance.",example:3,minimum:0},contextFields:{type:"number",description:"The number of context fields defined in this instance.",example:7,minimum:0},roles:{type:"number",description:"The number of roles defined in this instance",example:5,minimum:0},groups:{type:"number",description:"The number of groups defined in this instance",example:12,minimum:0},environments:{type:"number",description:"The number of environments defined in this instance",example:3,minimum:0},segments:{type:"number",description:"The number of segments defined in this instance",example:19,minimum:0},strategies:{type:"number",description:"The number of strategies defined in this instance",example:8,minimum:0},SAMLenabled:{type:"boolean",description:"Whether or not SAML authentication is enabled for this instance",example:!1},OIDCenabled:{type:"boolean",description:"Whether or not OIDC authentication is enabled for this instance",example:!0},clientApps:{type:"array",description:"A count of connected applications in the last week, last month and all time since last restart",items:{type:"object",description:"An entry describing how many client applications has been observed over the defined range",properties:{range:{type:"string",description:"A description of a time range",enum:["allTime","30d","7d"],example:"30d"},count:{type:"number",description:"The number of client applications that have been observed in this period",example:1}}}},featureExports:{type:"number",description:"The number of export operations on this instance",example:0,minimum:0},featureImports:{type:"number",description:"The number of import operations on this instance",example:0,minimum:0},sum:{type:"string",description:"A SHA-256 checksum of the instance statistics to be used to verify that the data in this object has not been tampered with",example:"b023323477abb1eb145bebf3cdb30a1c2063e3edc1f7ae474ed8ed6c80de9a3b"}},title:"instanceAdminStatsSchema"}}}}},deprecated:!0,method:"get",path:"/api/admin/instance-admin/statistics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.5.0"},postman:{name:"Instance usage statistics",description:{content:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",type:"text/plain"},url:{path:["api","admin","instance-admin","statistics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Instance usage statistics",permalink:"/reference/api/unleash/get-instance-admin-stats-csv"},next:{title:"Maintenance",permalink:"/reference/api/unleash/maintenance"}},f={},y=[{value:"Request",id:"request",level:2}],g={toc:y};function v(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Instance usage statistics"),(0,a.kt)(r.Z,{method:"get",path:"/api/admin/instance-admin/statistics",mdxType:"MethodEndpoint"}),(0,a.kt)(m.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,a.kt)("admonition",{title:"deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,a.kt)("p",null,"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc."),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"instanceAdminStatsSchema")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"instanceId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A unique identifier for this instance. Generated by the database migration scripts at first run. Typically a UUID.",example:"ed3861ae-78f9-4e8c-8e57-b57efc15f82b"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"timestamp",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0,description:"When these statistics were produced",example:"2023-06-12T12:25:06Z"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"versionOSS",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The version of Unleash OSS that is bundled in this instance",example:"5.1.7"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"versionEnterprise",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The version of Unleash Enterprise that is bundled in this instance",example:"5.1.7"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"users",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of users this instance has",example:8,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"activeUsers"),(0,a.kt)("span",{className:"openapi-schema__name"}," object"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"The number of active users in the last 7, 30 and 90 days")),(0,a.kt)(p.Z,{collapsible:!1,name:"last7",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of active users in the last 7 days",example:5,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"last30",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of active users in the last 30 days",example:10,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"last60",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of active users in the last 60 days",example:12,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"last90",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of active users in the last 90 days",example:15,minimum:0},mdxType:"SchemaItem"})))),(0,a.kt)(p.Z,{collapsible:!1,name:"featureToggles",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of feature-toggles this instance has",example:47,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of projects defined in this instance.",example:3,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"contextFields",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of context fields defined in this instance.",example:7,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"roles",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of roles defined in this instance",example:5,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"groups",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of groups defined in this instance",example:12,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"environments",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of environments defined in this instance",example:3,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"segments",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of segments defined in this instance",example:19,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"strategies",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of strategies defined in this instance",example:8,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"SAMLenabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether or not SAML authentication is enabled for this instance",example:!1},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"OIDCenabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether or not OIDC authentication is enabled for this instance",example:!0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"clientApps"),(0,a.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"A count of connected applications in the last week, last month and all time since last restart")),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(p.Z,{collapsible:!1,name:"range",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`allTime`, `30d`, `7d`]",schema:{type:"string",description:"A description of a time range",enum:["allTime","30d","7d"],example:"30d"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"count",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of client applications that have been observed in this period",example:1},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(p.Z,{collapsible:!1,name:"featureExports",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of export operations on this instance",example:0,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"featureImports",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of import operations on this instance",example:0,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"sum",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A SHA-256 checksum of the instance statistics to be used to verify that the data in this object has not been tampered with",example:"b023323477abb1eb145bebf3cdb30a1c2063e3edc1f7ae474ed8ed6c80de9a3b"},mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{\n  "instanceId": "ed3861ae-78f9-4e8c-8e57-b57efc15f82b",\n  "timestamp": "2023-06-12T12:25:06Z",\n  "versionOSS": "5.1.7",\n  "versionEnterprise": "5.1.7",\n  "users": 8,\n  "activeUsers": {\n    "last7": 5,\n    "last30": 10,\n    "last60": 12,\n    "last90": 15\n  },\n  "featureToggles": 47,\n  "projects": 3,\n  "contextFields": 7,\n  "roles": 5,\n  "groups": 12,\n  "environments": 3,\n  "segments": 19,\n  "strategies": 8,\n  "SAMLenabled": false,\n  "OIDCenabled": true,\n  "clientApps": [\n    {\n      "range": "30d",\n      "count": 1\n    }\n  ],\n  "featureExports": 0,\n  "featureImports": 0,\n  "sum": "b023323477abb1eb145bebf3cdb30a1c2063e3edc1f7ae474ed8ed6c80de9a3b"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);