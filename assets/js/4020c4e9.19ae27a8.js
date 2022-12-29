"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4503],{19787:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var i=t(87462),r=(t(67294),t(3905)),s=t(60961),m=t(48165),n=t(90115),p=t(58475),l=t(5428),u=t(80487),o=(t(54881),t(11666));const d={id:"get-feature-usage-summary",title:"getFeatureUsageSummary",description:"getFeatureUsageSummary",sidebar_label:"getFeatureUsageSummary",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getFeatureUsageSummary",tags:["Metrics"],responses:{200:{description:"featureUsageSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","maturity","featureName","lastHourUsage","seenApplications"],properties:{version:{type:"number"},maturity:{type:"string"},featureName:{type:"string"},lastHourUsage:{type:"array",items:{type:"object",additionalProperties:!1,required:["environment","timestamp","yes","no"],properties:{featureName:{type:"string"},appName:{type:"string"},environment:{type:"string"},timestamp:{type:"string",format:"date-time"},yes:{type:"number"},no:{type:"number"}}}},seenApplications:{type:"array",items:{type:"string"}}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getFeatureUsageSummary",method:"get",path:"/api/admin/client-metrics/features/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get Feature Usage Summary",description:{type:"text/plain"},url:{path:["api","admin","client-metrics","features",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,y={unversionedId:"reference/api/unleash/get-feature-usage-summary",id:"reference/api/unleash/get-feature-usage-summary",title:"getFeatureUsageSummary",description:"getFeatureUsageSummary",source:"@site/docs/reference/api/unleash/get-feature-usage-summary.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-feature-usage-summary",permalink:"/reference/api/unleash/get-feature-usage-summary",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-feature-usage-summary",title:"getFeatureUsageSummary",description:"getFeatureUsageSummary",sidebar_label:"getFeatureUsageSummary",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getFeatureUsageSummary",tags:["Metrics"],responses:{200:{description:"featureUsageSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","maturity","featureName","lastHourUsage","seenApplications"],properties:{version:{type:"number"},maturity:{type:"string"},featureName:{type:"string"},lastHourUsage:{type:"array",items:{type:"object",additionalProperties:!1,required:["environment","timestamp","yes","no"],properties:{featureName:{type:"string"},appName:{type:"string"},environment:{type:"string"},timestamp:{type:"string",format:"date-time"},yes:{type:"number"},no:{type:"number"}}}},seenApplications:{type:"array",items:{type:"string"}}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getFeatureUsageSummary",method:"get",path:"/api/admin/client-metrics/features/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get Feature Usage Summary",description:{type:"text/plain"},url:{path:["api","admin","client-metrics","features",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getRawFeatureMetrics",permalink:"/reference/api/unleash/get-raw-feature-metrics"},next:{title:"Operational",permalink:"/reference/api/unleash/operational"}},g={},h=[{value:"getFeatureUsageSummary",id:"getfeatureusagesummary",level:2}],v={toc:h};function f(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getfeatureusagesummary"},"getFeatureUsageSummary"),(0,r.kt)("p",null,"getFeatureUsageSummary"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"featureUsageSchema")),(0,r.kt)("div",null,(0,r.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(u.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"maturity",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"featureName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"lastHourUsage"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"featureName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"appName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"yes",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"no",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!1,name:"seenApplications",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "version": 0,\n  "maturity": "string",\n  "featureName": "string",\n  "lastHourUsage": [\n    {\n      "featureName": "string",\n      "appName": "string",\n      "environment": "string",\n      "timestamp": "2022-12-29",\n      "yes": 0,\n      "no": 0\n    }\n  ],\n  "seenApplications": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);