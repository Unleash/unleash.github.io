"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1312],{29737:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),n=a(70439),p=a(89402),r=(a(10725),a(65860)),l=a(5479),o=a(83559),c=(a(48567),a(72905));const m={id:"get-applications",sidebar_label:"getApplications",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getApplications",responses:{200:{description:"applicationsSchema",content:{"application/json":{schema:{type:"object",properties:{applications:{type:"array",items:{type:"object",additionalProperties:!1,required:["appName"],properties:{appName:{type:"string"},sdkVersion:{type:"string"},strategies:{type:"array",items:{type:"string"}},description:{type:"string"},url:{type:"string"},color:{type:"string"},icon:{type:"string"},announced:{type:"boolean"}}}}}}}}}},description:"getApplications",method:"get",path:"/api/admin/metrics/applications",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"get Applications",description:{type:"text/plain"},url:{path:["api","admin","metrics","applications"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/reference/api/unleash/unleash-api"},d=void 0,u={unversionedId:"reference/api/unleash/get-applications",id:"reference/api/unleash/get-applications",title:"get-applications",description:"getApplications",source:"@site/docs/reference/api/unleash/get-applications.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-applications",permalink:"/reference/api/unleash/get-applications",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-applications.api.mdx",tags:[],version:"current",frontMatter:{id:"get-applications",sidebar_label:"getApplications",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getApplications",responses:{200:{description:"applicationsSchema",content:{"application/json":{schema:{type:"object",properties:{applications:{type:"array",items:{type:"object",additionalProperties:!1,required:["appName"],properties:{appName:{type:"string"},sdkVersion:{type:"string"},strategies:{type:"array",items:{type:"string"}},description:{type:"string"},url:{type:"string"},color:{type:"string"},icon:{type:"string"},announced:{type:"boolean"}}}}}}}}}},description:"getApplications",method:"get",path:"/api/admin/metrics/applications",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"get Applications",description:{type:"text/plain"},url:{path:["api","admin","metrics","applications"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getApplication",permalink:"/reference/api/unleash/get-application"},next:{title:"getRawFeatureMetrics",permalink:"/reference/api/unleash/get-raw-feature-metrics"}},h={},g=[{value:"getApplications",id:"getapplications",level:2}],y={toc:g};function v(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getapplications"},"getApplications"),(0,s.kt)("p",null,"getApplications"),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"applicationsSchema")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(o.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"applications"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"appName",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"strategies",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"url",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"color",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"icon",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"announced",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "applications": [\n    {\n      "appName": "string",\n      "sdkVersion": "string",\n      "strategies": [\n        "string"\n      ],\n      "description": "string",\n      "url": "string",\n      "color": "string",\n      "icon": "string",\n      "announced": true\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);