"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1312],{17346:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>h});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),p=(a(11032),a(46062)),r=a(21439),l=(a(9531),a(15761)),o=a(73418),c=a(92414),m=a(11666);const d={id:"get-applications",title:"getApplications",description:"getApplications",sidebar_label:"getApplications",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getApplications",responses:{200:{description:"applicationsSchema",content:{"application/json":{schema:{type:"object",properties:{applications:{type:"array",items:{type:"object",additionalProperties:!1,required:["appName"],properties:{appName:{type:"string"},sdkVersion:{type:"string"},strategies:{type:"array",items:{type:"string"}},description:{type:"string"},url:{type:"string"},color:{type:"string"},icon:{type:"string"},announced:{type:"boolean"}},title:"applicationSchema"}}},title:"applicationsSchema"}}}}},description:"getApplications",method:"get",path:"/api/admin/metrics/applications",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"get Applications",description:{type:"text/plain"},url:{path:["api","admin","metrics","applications"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/get-applications",id:"reference/api/unleash/get-applications",title:"getApplications",description:"getApplications",source:"@site/docs/reference/api/unleash/get-applications.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-applications",permalink:"/reference/api/unleash/get-applications",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-applications",title:"getApplications",description:"getApplications",sidebar_label:"getApplications",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getApplications",responses:{200:{description:"applicationsSchema",content:{"application/json":{schema:{type:"object",properties:{applications:{type:"array",items:{type:"object",additionalProperties:!1,required:["appName"],properties:{appName:{type:"string"},sdkVersion:{type:"string"},strategies:{type:"array",items:{type:"string"}},description:{type:"string"},url:{type:"string"},color:{type:"string"},icon:{type:"string"},announced:{type:"boolean"}},title:"applicationSchema"}}},title:"applicationsSchema"}}}}},description:"getApplications",method:"get",path:"/api/admin/metrics/applications",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"get Applications",description:{type:"text/plain"},url:{path:["api","admin","metrics","applications"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getApplication",permalink:"/reference/api/unleash/get-application"},next:{title:"getRawFeatureMetrics",permalink:"/reference/api/unleash/get-raw-feature-metrics"}},y={},h=[],k={toc:h};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"getApplications"),(0,s.kt)(p.Z,{method:"get",path:"/api/admin/metrics/applications",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"getApplications"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"applicationsSchema")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"applications"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"appName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"strategies",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"color",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"announced",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "applications": [\n    {\n      "appName": "string",\n      "sdkVersion": "string",\n      "strategies": [\n        "string"\n      ],\n      "description": "string",\n      "url": "string",\n      "color": "string",\n      "icon": "string",\n      "announced": true\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);