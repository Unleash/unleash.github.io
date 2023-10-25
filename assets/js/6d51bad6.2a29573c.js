"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9849],{752:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>v,frontMatter:()=>u,metadata:()=>g,toc:()=>b});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),o=(a(11032),a(46062)),p=a(57138),r=a(21439),l=a(9531),c=a(15761),m=a(73418),d=a(92414),h=a(30433);const u={id:"get-application",title:"Get application data",description:"Returns data about the specified application (`appName`). The data contains information on the name of the application, sdkVersion (which sdk reported these metrics, typically `unleash-client-node:3.4.1` or `unleash-client-java:7.1.0`), as well as data about how to display this application in a list.",sidebar_label:"Get application data",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getApplication",description:"Returns data about the specified application (`appName`). The data contains information on the name of the application, sdkVersion (which sdk reported these metrics, typically `unleash-client-node:3.4.1` or `unleash-client-java:7.1.0`), as well as data about how to display this application in a list.",responses:{200:{description:"applicationSchema",content:{"application/json":{schema:{type:"object",description:"Data about an application that's connected to Unleash via an SDK.",additionalProperties:!1,required:["appName"],properties:{appName:{description:"Name of the application",type:"string",example:"accounting"},sdkVersion:{description:"Which SDK and version the application reporting uses. Typically represented as `<identifier>:<version>`",type:"string",example:"unleash-client-java:8.0.0"},strategies:{description:"Which [strategies](https://docs.getunleash.io/topics/the-anatomy-of-unleash#activation-strategies) the application has loaded. Useful when trying to figure out if your [custom strategy](https://docs.getunleash.io/reference/custom-activation-strategies) has been loaded in the SDK",type:"array",items:{type:"string"},example:["standard","gradualRollout","mySpecialCustomStrategy"]},description:{description:"Extra information added about the application reporting the metrics. Only present if added via the Unleash Admin interface",type:"string",example:"Application for reporting page visits"},url:{description:"A link to reference the application reporting the metrics. Could for instance be a GitHub link to the repository of the application",type:"string",example:"https://github.com/Unleash/unleash-client-proxy-js"},color:{description:"The CSS color that is used to color the application's entry in the application list",type:"string",example:"red"},icon:{description:"An URL to an icon file to be used for the applications's entry in the application list",type:"string",example:"https://github.com/favicon.ico"},usage:{description:"The list of projects the application has been using.",type:"array",items:{type:"object",description:"Data about an project that have been used by applications.",additionalProperties:!1,required:["project","environments"],properties:{project:{description:"Name of the project",type:"string",example:"main-project"},environments:{description:"Which environments have been accessed in this project.",type:"array",items:{type:"string"},example:["development","production"]}},title:"applicationUsageSchema"}}},title:"applicationSchema"}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"appName",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/metrics/applications/{appName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.5.6"},postman:{name:"Get application data",description:{content:"Returns data about the specified application (`appName`). The data contains information on the name of the application, sdkVersion (which sdk reported these metrics, typically `unleash-client-node:3.4.1` or `unleash-client-java:7.1.0`), as well as data about how to display this application in a list.",type:"text/plain"},url:{path:["api","admin","metrics","applications",":appName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"appName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/get-application",id:"reference/api/unleash/get-application",title:"Get application data",description:"Returns data about the specified application (`appName`). The data contains information on the name of the application, sdkVersion (which sdk reported these metrics, typically `unleash-client-node:3.4.1` or `unleash-client-java:7.1.0`), as well as data about how to display this application in a list.",source:"@site/docs/reference/api/unleash/get-application.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-application",permalink:"/reference/api/unleash/get-application",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-application",title:"Get application data",description:"Returns data about the specified application (`appName`). The data contains information on the name of the application, sdkVersion (which sdk reported these metrics, typically `unleash-client-node:3.4.1` or `unleash-client-java:7.1.0`), as well as data about how to display this application in a list.",sidebar_label:"Get application data",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getApplication",description:"Returns data about the specified application (`appName`). The data contains information on the name of the application, sdkVersion (which sdk reported these metrics, typically `unleash-client-node:3.4.1` or `unleash-client-java:7.1.0`), as well as data about how to display this application in a list.",responses:{200:{description:"applicationSchema",content:{"application/json":{schema:{type:"object",description:"Data about an application that's connected to Unleash via an SDK.",additionalProperties:!1,required:["appName"],properties:{appName:{description:"Name of the application",type:"string",example:"accounting"},sdkVersion:{description:"Which SDK and version the application reporting uses. Typically represented as `<identifier>:<version>`",type:"string",example:"unleash-client-java:8.0.0"},strategies:{description:"Which [strategies](https://docs.getunleash.io/topics/the-anatomy-of-unleash#activation-strategies) the application has loaded. Useful when trying to figure out if your [custom strategy](https://docs.getunleash.io/reference/custom-activation-strategies) has been loaded in the SDK",type:"array",items:{type:"string"},example:["standard","gradualRollout","mySpecialCustomStrategy"]},description:{description:"Extra information added about the application reporting the metrics. Only present if added via the Unleash Admin interface",type:"string",example:"Application for reporting page visits"},url:{description:"A link to reference the application reporting the metrics. Could for instance be a GitHub link to the repository of the application",type:"string",example:"https://github.com/Unleash/unleash-client-proxy-js"},color:{description:"The CSS color that is used to color the application's entry in the application list",type:"string",example:"red"},icon:{description:"An URL to an icon file to be used for the applications's entry in the application list",type:"string",example:"https://github.com/favicon.ico"},usage:{description:"The list of projects the application has been using.",type:"array",items:{type:"object",description:"Data about an project that have been used by applications.",additionalProperties:!1,required:["project","environments"],properties:{project:{description:"Name of the project",type:"string",example:"main-project"},environments:{description:"Which environments have been accessed in this project.",type:"array",items:{type:"string"},example:["development","production"]}},title:"applicationUsageSchema"}}},title:"applicationSchema"}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"appName",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/metrics/applications/{appName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.5.6"},postman:{name:"Get application data",description:{content:"Returns data about the specified application (`appName`). The data contains information on the name of the application, sdkVersion (which sdk reported these metrics, typically `unleash-client-node:3.4.1` or `unleash-client-java:7.1.0`), as well as data about how to display this application in a list.",type:"text/plain"},url:{path:["api","admin","metrics","applications",":appName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"appName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Delete an application",permalink:"/reference/api/unleash/delete-application"},next:{title:"Get all applications",permalink:"/reference/api/unleash/get-applications"}},f={},b=[{value:"Request",id:"request",level:2}],k={toc:b};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get application data"),(0,n.kt)(o.Z,{method:"get",path:"/api/admin/metrics/applications/{appName}",mdxType:"MethodEndpoint"}),(0,n.kt)(p.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Returns data about the specified application (",(0,n.kt)("inlineCode",{parentName:"p"},"appName"),"). The data contains information on the name of the application, sdkVersion (which sdk reported these metrics, typically ",(0,n.kt)("inlineCode",{parentName:"p"},"unleash-client-node:3.4.1")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"unleash-client-java:7.1.0"),"), as well as data about how to display this application in a list."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"appName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"applicationSchema")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"appName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the application",type:"string",example:"accounting"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Which SDK and version the application reporting uses. Typically represented as `<identifier>:<version>`",type:"string",example:"unleash-client-java:8.0.0"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"strategies",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which [strategies](https://docs.getunleash.io/topics/the-anatomy-of-unleash#activation-strategies) the application has loaded. Useful when trying to figure out if your [custom strategy](https://docs.getunleash.io/reference/custom-activation-strategies) has been loaded in the SDK",type:"array",items:{type:"string"},example:["standard","gradualRollout","mySpecialCustomStrategy"]},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Extra information added about the application reporting the metrics. Only present if added via the Unleash Admin interface",type:"string",example:"Application for reporting page visits"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A link to reference the application reporting the metrics. Could for instance be a GitHub link to the repository of the application",type:"string",example:"https://github.com/Unleash/unleash-client-proxy-js"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"color",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The CSS color that is used to color the application's entry in the application list",type:"string",example:"red"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"An URL to an icon file to be used for the applications's entry in the application list",type:"string",example:"https://github.com/favicon.ico"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"usage"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The list of projects the application has been using.")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(m.Z,{collapsible:!1,name:"project",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the project",type:"string",example:"main-project"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"environments",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which environments have been accessed in this project.",type:"array",items:{type:"string"},example:["development","production"]},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "appName": "accounting",\n  "sdkVersion": "unleash-client-java:8.0.0",\n  "strategies": [\n    "standard",\n    "gradualRollout",\n    "mySpecialCustomStrategy"\n  ],\n  "description": "Application for reporting page visits",\n  "url": "https://github.com/Unleash/unleash-client-proxy-js",\n  "color": "red",\n  "icon": "https://github.com/favicon.ico",\n  "usage": [\n    {\n      "project": "main-project",\n      "environments": [\n        "development",\n        "production"\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The requested resource was not found.")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);