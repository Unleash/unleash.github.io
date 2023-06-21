"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9146],{95718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>b,frontMatter:()=>y,metadata:()=>u,toc:()=>k});var s=a(87462),r=(a(67294),a(3905)),i=a(80334),n=(a(11032),a(46062)),p=a(57138),m=a(21439),o=(a(9531),a(15761)),c=a(73418),l=a(92414),d=a(11666);const y={id:"get-requests-per-second",title:"getRequestsPerSecond",description:"getRequestsPerSecond",sidebar_label:"getRequestsPerSecond",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getRequestsPerSecond",responses:{200:{description:"requestsPerSecondSegmentedSchema",content:{"application/json":{schema:{type:"object",properties:{clientMetrics:{type:"object",properties:{status:{type:"string"},data:{type:"object",properties:{resultType:{type:"string"},result:{description:"An array of values per metric. Each one represents a line in the graph labeled by its metric name",type:"array",items:{type:"object",properties:{metric:{description:"A key value set representing the metric",type:"object",properties:{appName:{type:"string"},endpoint:{type:"string"}}},values:{description:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}}}}}}}}},title:"requestsPerSecondSchema"},adminMetrics:{type:"object",properties:{status:{type:"string"},data:{type:"object",properties:{resultType:{type:"string"},result:{description:"An array of values per metric. Each one represents a line in the graph labeled by its metric name",type:"array",items:{type:"object",properties:{metric:{description:"A key value set representing the metric",type:"object",properties:{appName:{type:"string"},endpoint:{type:"string"}}},values:{description:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}}}}}}}}},title:"requestsPerSecondSchema"}},title:"requestsPerSecondSegmentedSchema"}}}}},description:"getRequestsPerSecond",method:"get",path:"/api/admin/metrics/rps",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"get Requests Per Second",description:{type:"text/plain"},url:{path:["api","admin","metrics","rps"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,u={unversionedId:"reference/api/unleash/get-requests-per-second",id:"reference/api/unleash/get-requests-per-second",title:"getRequestsPerSecond",description:"getRequestsPerSecond",source:"@site/docs/reference/api/unleash/get-requests-per-second.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-requests-per-second",permalink:"/reference/api/unleash/get-requests-per-second",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-requests-per-second",title:"getRequestsPerSecond",description:"getRequestsPerSecond",sidebar_label:"getRequestsPerSecond",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getRequestsPerSecond",responses:{200:{description:"requestsPerSecondSegmentedSchema",content:{"application/json":{schema:{type:"object",properties:{clientMetrics:{type:"object",properties:{status:{type:"string"},data:{type:"object",properties:{resultType:{type:"string"},result:{description:"An array of values per metric. Each one represents a line in the graph labeled by its metric name",type:"array",items:{type:"object",properties:{metric:{description:"A key value set representing the metric",type:"object",properties:{appName:{type:"string"},endpoint:{type:"string"}}},values:{description:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}}}}}}}}},title:"requestsPerSecondSchema"},adminMetrics:{type:"object",properties:{status:{type:"string"},data:{type:"object",properties:{resultType:{type:"string"},result:{description:"An array of values per metric. Each one represents a line in the graph labeled by its metric name",type:"array",items:{type:"object",properties:{metric:{description:"A key value set representing the metric",type:"object",properties:{appName:{type:"string"},endpoint:{type:"string"}}},values:{description:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}}}}}}}}},title:"requestsPerSecondSchema"}},title:"requestsPerSecondSegmentedSchema"}}}}},description:"getRequestsPerSecond",method:"get",path:"/api/admin/metrics/rps",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"get Requests Per Second",description:{type:"text/plain"},url:{path:["api","admin","metrics","rps"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Metrics",permalink:"/reference/api/unleash/metrics"},next:{title:"Create an application to connect reported metrics",permalink:"/reference/api/unleash/create-application"}},g={},k=[{value:"Request",id:"request",level:2}],f={toc:k};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"getRequestsPerSecond"),(0,r.kt)(n.Z,{method:"get",path:"/api/admin/metrics/rps",mdxType:"MethodEndpoint"}),(0,r.kt)(p.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"getRequestsPerSecond"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"requestsPerSecondSegmentedSchema")),(0,r.kt)("div",null,(0,r.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"clientMetrics"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"data"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"resultType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"result"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"An array of values per metric. Each one represents a line in the graph labeled by its metric name")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"metric"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"A key value set representing the metric")),(0,r.kt)(c.Z,{collapsible:!1,name:"appName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"endpoint",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{collapsible:!1,name:"values",required:!1,schemaName:"array[]",qualifierMessage:void 0,schema:{description:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}}},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"adminMetrics"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"data"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"resultType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"result"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"An array of values per metric. Each one represents a line in the graph labeled by its metric name")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"metric"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"A key value set representing the metric")),(0,r.kt)(c.Z,{collapsible:!1,name:"appName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"endpoint",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{collapsible:!1,name:"values",required:!1,schemaName:"array[]",qualifierMessage:void 0,schema:{description:"An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string",type:"array",items:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}}},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))))))))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "clientMetrics": {\n    "status": "string",\n    "data": {\n      "resultType": "string",\n      "result": [\n        {\n          "metric": {\n            "appName": "string",\n            "endpoint": "string"\n          },\n          "values": [\n            [\n              "string",\n              0\n            ]\n          ]\n        }\n      ]\n    }\n  },\n  "adminMetrics": {\n    "status": "string",\n    "data": {\n      "resultType": "string",\n      "result": [\n        {\n          "metric": {\n            "appName": "string",\n            "endpoint": "string"\n          },\n          "values": [\n            [\n              "string",\n              0\n            ]\n          ]\n        }\n      ]\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);