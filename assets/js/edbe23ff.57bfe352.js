"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[41312],{17346:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>h,metadata:()=>g,toc:()=>f});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),o=(a(11032),a(46062)),p=a(57138),r=a(21439),l=(a(9531),a(15761)),c=a(73418),m=a(92414),d=a(30433);const h={id:"get-applications",title:"Get all applications",description:"Returns all applications registered with Unleash. Applications can be created via metrics reporting or manual creation",sidebar_label:"Get all applications",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],description:"Returns all applications registered with Unleash. Applications can be created via metrics reporting or manual creation",operationId:"getApplications",responses:{200:{description:"applicationsSchema",content:{"application/json":{schema:{additionalProperties:!1,description:"An object containing a list of applications that have connected to Unleash via an SDK.",type:"object",properties:{applications:{description:"The list of applications that have connected to this Unleash instance.",type:"array",items:{type:"object",description:"Data about an application that's connected to Unleash via an SDK.",additionalProperties:!1,required:["appName"],properties:{appName:{description:"Name of the application",type:"string",example:"accounting"},sdkVersion:{description:"Which SDK and version the application reporting uses. Typically represented as `<identifier>:<version>`",type:"string",example:"unleash-client-java:8.0.0"},strategies:{description:"Which [strategies](https://docs.getunleash.io/topics/the-anatomy-of-unleash#activation-strategies) the application has loaded. Useful when trying to figure out if your [custom strategy](https://docs.getunleash.io/reference/custom-activation-strategies) has been loaded in the SDK",type:"array",items:{type:"string"},example:["standard","gradualRollout","mySpecialCustomStrategy"]},description:{description:"Extra information added about the application reporting the metrics. Only present if added via the Unleash Admin interface",type:"string",example:"Application for reporting page visits"},url:{description:"A link to reference the application reporting the metrics. Could for instance be a GitHub link to the repository of the application",type:"string",example:"https://github.com/Unleash/unleash-proxy-client-js"},color:{description:"The CSS color that is used to color the application's entry in the application list",type:"string",example:"red"},icon:{description:"An URL to an icon file to be used for the applications's entry in the application list",type:"string",example:"https://github.com/favicon.ico"},usage:{description:"The list of projects the application has been using.",type:"array",items:{type:"object",description:"Data about an project that have been used by applications.",additionalProperties:!1,required:["project","environments"],properties:{project:{description:"Name of the project",type:"string",example:"main-project"},environments:{description:"Which environments have been accessed in this project.",type:"array",items:{type:"string"},example:["development","production"]}},title:"applicationUsageSchema"}}},title:"applicationSchema"}}},title:"applicationsSchema"}}}}},method:"get",path:"/api/admin/metrics/applications",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.10"},postman:{name:"Get all applications",description:{content:"Returns all applications registered with Unleash. Applications can be created via metrics reporting or manual creation",type:"text/plain"},url:{path:["api","admin","metrics","applications"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/get-applications",id:"reference/api/unleash/get-applications",title:"Get all applications",description:"Returns all applications registered with Unleash. Applications can be created via metrics reporting or manual creation",source:"@site/docs/reference/api/unleash/get-applications.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-applications",permalink:"/reference/api/unleash/get-applications",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-applications",title:"Get all applications",description:"Returns all applications registered with Unleash. Applications can be created via metrics reporting or manual creation",sidebar_label:"Get all applications",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],description:"Returns all applications registered with Unleash. Applications can be created via metrics reporting or manual creation",operationId:"getApplications",responses:{200:{description:"applicationsSchema",content:{"application/json":{schema:{additionalProperties:!1,description:"An object containing a list of applications that have connected to Unleash via an SDK.",type:"object",properties:{applications:{description:"The list of applications that have connected to this Unleash instance.",type:"array",items:{type:"object",description:"Data about an application that's connected to Unleash via an SDK.",additionalProperties:!1,required:["appName"],properties:{appName:{description:"Name of the application",type:"string",example:"accounting"},sdkVersion:{description:"Which SDK and version the application reporting uses. Typically represented as `<identifier>:<version>`",type:"string",example:"unleash-client-java:8.0.0"},strategies:{description:"Which [strategies](https://docs.getunleash.io/topics/the-anatomy-of-unleash#activation-strategies) the application has loaded. Useful when trying to figure out if your [custom strategy](https://docs.getunleash.io/reference/custom-activation-strategies) has been loaded in the SDK",type:"array",items:{type:"string"},example:["standard","gradualRollout","mySpecialCustomStrategy"]},description:{description:"Extra information added about the application reporting the metrics. Only present if added via the Unleash Admin interface",type:"string",example:"Application for reporting page visits"},url:{description:"A link to reference the application reporting the metrics. Could for instance be a GitHub link to the repository of the application",type:"string",example:"https://github.com/Unleash/unleash-proxy-client-js"},color:{description:"The CSS color that is used to color the application's entry in the application list",type:"string",example:"red"},icon:{description:"An URL to an icon file to be used for the applications's entry in the application list",type:"string",example:"https://github.com/favicon.ico"},usage:{description:"The list of projects the application has been using.",type:"array",items:{type:"object",description:"Data about an project that have been used by applications.",additionalProperties:!1,required:["project","environments"],properties:{project:{description:"Name of the project",type:"string",example:"main-project"},environments:{description:"Which environments have been accessed in this project.",type:"array",items:{type:"string"},example:["development","production"]}},title:"applicationUsageSchema"}}},title:"applicationSchema"}}},title:"applicationsSchema"}}}}},method:"get",path:"/api/admin/metrics/applications",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.10"},postman:{name:"Get all applications",description:{content:"Returns all applications registered with Unleash. Applications can be created via metrics reporting or manual creation",type:"text/plain"},url:{path:["api","admin","metrics","applications"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get application data",permalink:"/reference/api/unleash/get-application"},next:{title:"Get feature metrics",permalink:"/reference/api/unleash/get-raw-feature-metrics"}},y={},f=[{value:"Request",id:"request",level:2}],v={toc:f};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get all applications"),(0,n.kt)(o.Z,{method:"get",path:"/api/admin/metrics/applications",mdxType:"MethodEndpoint"}),(0,n.kt)(p.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Returns all applications registered with Unleash. Applications can be created via metrics reporting or manual creation"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"applicationsSchema")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"applications"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The list of applications that have connected to this Unleash instance.")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(c.Z,{collapsible:!1,name:"appName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the application",type:"string",example:"accounting"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Which SDK and version the application reporting uses. Typically represented as `<identifier>:<version>`",type:"string",example:"unleash-client-java:8.0.0"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"strategies",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which [strategies](https://docs.getunleash.io/topics/the-anatomy-of-unleash#activation-strategies) the application has loaded. Useful when trying to figure out if your [custom strategy](https://docs.getunleash.io/reference/custom-activation-strategies) has been loaded in the SDK",type:"array",items:{type:"string"},example:["standard","gradualRollout","mySpecialCustomStrategy"]},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Extra information added about the application reporting the metrics. Only present if added via the Unleash Admin interface",type:"string",example:"Application for reporting page visits"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A link to reference the application reporting the metrics. Could for instance be a GitHub link to the repository of the application",type:"string",example:"https://github.com/Unleash/unleash-proxy-client-js"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"color",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The CSS color that is used to color the application's entry in the application list",type:"string",example:"red"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"An URL to an icon file to be used for the applications's entry in the application list",type:"string",example:"https://github.com/favicon.ico"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"usage"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The list of projects the application has been using.")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(c.Z,{collapsible:!1,name:"project",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the project",type:"string",example:"main-project"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"environments",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which environments have been accessed in this project.",type:"array",items:{type:"string"},example:["development","production"]},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "applications": [\n    {\n      "appName": "accounting",\n      "sdkVersion": "unleash-client-java:8.0.0",\n      "strategies": [\n        "standard",\n        "gradualRollout",\n        "mySpecialCustomStrategy"\n      ],\n      "description": "Application for reporting page visits",\n      "url": "https://github.com/Unleash/unleash-proxy-client-js",\n      "color": "red",\n      "icon": "https://github.com/favicon.ico",\n      "usage": [\n        {\n          "project": "main-project",\n          "environments": [\n            "development",\n            "production"\n          ]\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);