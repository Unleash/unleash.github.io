"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1312],{17346:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>y});var a=i(87462),s=(i(67294),i(3905)),n=i(60961),p=i(48165),r=(i(90115),i(58475)),l=i(5428),o=i(80487),c=(i(54881),i(11666));const m={id:"get-applications",title:"getApplications",description:"getApplications",sidebar_label:"getApplications",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getApplications",responses:{200:{description:"applicationsSchema",content:{"application/json":{schema:{type:"object",properties:{applications:{type:"array",items:{type:"object",additionalProperties:!1,required:["appName"],properties:{appName:{type:"string"},sdkVersion:{type:"string"},strategies:{type:"array",items:{type:"string"}},description:{type:"string"},url:{type:"string"},color:{type:"string"},icon:{type:"string"},announced:{type:"boolean"}}}}}}}}}},description:"getApplications",method:"get",path:"/api/admin/metrics/applications",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get Applications",description:{type:"text/plain"},url:{path:["api","admin","metrics","applications"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,u={unversionedId:"reference/api/unleash/get-applications",id:"reference/api/unleash/get-applications",title:"getApplications",description:"getApplications",source:"@site/docs/reference/api/unleash/get-applications.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-applications",permalink:"/reference/api/unleash/get-applications",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-applications",title:"getApplications",description:"getApplications",sidebar_label:"getApplications",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getApplications",responses:{200:{description:"applicationsSchema",content:{"application/json":{schema:{type:"object",properties:{applications:{type:"array",items:{type:"object",additionalProperties:!1,required:["appName"],properties:{appName:{type:"string"},sdkVersion:{type:"string"},strategies:{type:"array",items:{type:"string"}},description:{type:"string"},url:{type:"string"},color:{type:"string"},icon:{type:"string"},announced:{type:"boolean"}}}}}}}}}},description:"getApplications",method:"get",path:"/api/admin/metrics/applications",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get Applications",description:{type:"text/plain"},url:{path:["api","admin","metrics","applications"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getApplication",permalink:"/reference/api/unleash/get-application"},next:{title:"getRawFeatureMetrics",permalink:"/reference/api/unleash/get-raw-feature-metrics"}},g={},y=[{value:"getApplications",id:"getapplications",level:2}],h={toc:y};function k(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getapplications"},"getApplications"),(0,s.kt)("p",null,"getApplications"),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"applicationsSchema")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(o.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"applications"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"appName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"strategies",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"color",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"announced",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "applications": [\n    {\n      "appName": "string",\n      "sdkVersion": "string",\n      "strategies": [\n        "string"\n      ],\n      "description": "string",\n      "url": "string",\n      "color": "string",\n      "icon": "string",\n      "announced": true\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);