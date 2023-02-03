"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9146],{95718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var s=a(87462),r=(a(67294),a(3905)),i=a(60961),n=a(48165),p=(a(90115),a(58475)),o=a(5428),l=a(80487),m=(a(54881),a(11666));const c={id:"get-requests-per-second",title:"getRequestsPerSecond",description:"getRequestsPerSecond",sidebar_label:"getRequestsPerSecond",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getRequestsPerSecond",responses:{200:{description:"requestsPerSecondSegmentedSchema",content:{"application/json":{schema:{type:"object",properties:{clientMetrics:{type:"object",properties:{status:{type:"string"},data:{type:"object",properties:{resultType:{type:"string"},result:{description:"An array of values per metric. Each one represents a line in the graph labeled by its metric name",type:"array",items:{type:"object",properties:{metric:{description:"A key value set representing the metric",type:"object",properties:{appName:{type:"string"},endpoint:{type:"string"}}},values:{description:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}}}}}}}}}},adminMetrics:{type:"object",properties:{status:{type:"string"},data:{type:"object",properties:{resultType:{type:"string"},result:{description:"An array of values per metric. Each one represents a line in the graph labeled by its metric name",type:"array",items:{type:"object",properties:{metric:{description:"A key value set representing the metric",type:"object",properties:{appName:{type:"string"},endpoint:{type:"string"}}},values:{description:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}}}}}}}}}}}}}}}},description:"getRequestsPerSecond",method:"get",path:"/api/admin/metrics/rps",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"get Requests Per Second",description:{type:"text/plain"},url:{path:["api","admin","metrics","rps"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,y={unversionedId:"reference/api/unleash/get-requests-per-second",id:"reference/api/unleash/get-requests-per-second",title:"getRequestsPerSecond",description:"getRequestsPerSecond",source:"@site/docs/reference/api/unleash/get-requests-per-second.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-requests-per-second",permalink:"/reference/api/unleash/get-requests-per-second",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-requests-per-second",title:"getRequestsPerSecond",description:"getRequestsPerSecond",sidebar_label:"getRequestsPerSecond",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getRequestsPerSecond",responses:{200:{description:"requestsPerSecondSegmentedSchema",content:{"application/json":{schema:{type:"object",properties:{clientMetrics:{type:"object",properties:{status:{type:"string"},data:{type:"object",properties:{resultType:{type:"string"},result:{description:"An array of values per metric. Each one represents a line in the graph labeled by its metric name",type:"array",items:{type:"object",properties:{metric:{description:"A key value set representing the metric",type:"object",properties:{appName:{type:"string"},endpoint:{type:"string"}}},values:{description:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}}}}}}}}}},adminMetrics:{type:"object",properties:{status:{type:"string"},data:{type:"object",properties:{resultType:{type:"string"},result:{description:"An array of values per metric. Each one represents a line in the graph labeled by its metric name",type:"array",items:{type:"object",properties:{metric:{description:"A key value set representing the metric",type:"object",properties:{appName:{type:"string"},endpoint:{type:"string"}}},values:{description:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}}}}}}}}}}}}}}}},description:"getRequestsPerSecond",method:"get",path:"/api/admin/metrics/rps",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"get Requests Per Second",description:{type:"text/plain"},url:{path:["api","admin","metrics","rps"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getApplications",permalink:"/reference/api/unleash/get-applications"},next:{title:"getRawFeatureMetrics",permalink:"/reference/api/unleash/get-raw-feature-metrics"}},u={},h=[{value:"getRequestsPerSecond",id:"getrequestspersecond",level:2}],g={toc:h};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getrequestspersecond"},"getRequestsPerSecond"),(0,r.kt)("p",null,"getRequestsPerSecond"),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"requestsPerSecondSegmentedSchema")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"clientMetrics"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"resultType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"result"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"An array of values per metric. Each one represents a line in the graph labeled by its metric name")),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"metric"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"A key value set representing the metric")),(0,r.kt)(o.Z,{collapsible:!1,name:"appName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"endpoint",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{collapsible:!1,name:"values",required:!1,deprecated:void 0,schemaDescription:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",schemaName:"array[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"adminMetrics"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"resultType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"result"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"An array of values per metric. Each one represents a line in the graph labeled by its metric name")),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"metric"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"A key value set representing the metric")),(0,r.kt)(o.Z,{collapsible:!1,name:"appName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"endpoint",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{collapsible:!1,name:"values",required:!1,deprecated:void 0,schemaDescription:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",schemaName:"array[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "clientMetrics": {\n    "status": "string",\n    "data": {\n      "resultType": "string",\n      "result": [\n        {\n          "metric": {\n            "appName": "string",\n            "endpoint": "string"\n          },\n          "values": [\n            [\n              "string",\n              0\n            ]\n          ]\n        }\n      ]\n    }\n  },\n  "adminMetrics": {\n    "status": "string",\n    "data": {\n      "resultType": "string",\n      "result": [\n        {\n          "metric": {\n            "appName": "string",\n            "endpoint": "string"\n          },\n          "values": [\n            [\n              "string",\n              0\n            ]\n          ]\n        }\n      ]\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);