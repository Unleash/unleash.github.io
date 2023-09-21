"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4245],{90447:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>T,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),o=a(80334),n=(a(11032),a(46062)),r=a(57138),p=a(21439),l=a(9531),c=a(15761),m=a(73418),d=a(92414),h=a(11666);const u={id:"create-application",title:"Create an application to connect reported metrics",description:"Is used to report usage as well which sdk the application uses",sidebar_label:"Create an application to connect reported metrics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"createApplication",description:"Is used to report usage as well which sdk the application uses",responses:{202:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},requestBody:{description:"createApplicationSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Reported application information from Unleash SDKs",properties:{appName:{description:"Name of the application",type:"string",example:"accounting"},sdkVersion:{description:"Which SDK and version the application reporting uses. Typically represented as `<identifier>:<version>`",type:"string",example:"unleash-client-java:8.0.0"},strategies:{description:"Which [strategies](https://docs.getunleash.io/topics/the-anatomy-of-unleash#activation-strategies) the application has loaded. Useful when trying to figure out if your [custom strategy](https://docs.getunleash.io/reference/custom-activation-strategies) has been loaded in the SDK",type:"array",items:{type:"string"},example:["standard","gradualRollout","mySpecialCustomStrategy"]},url:{description:"A link to reference the application reporting the metrics. Could for instance be a GitHub link to the repository of the application",type:"string",example:"https://github.com/Unleash/unleash-client-proxy-js"},color:{description:"Css color to be used to color the application's entry in the application list",type:"string",example:"red"},icon:{description:"An URL to an icon file to be used for the applications's entry in the application list",type:"string",example:"https://github.com/favicon.ico"}},title:"createApplicationSchema"}}}},parameters:[{name:"appName",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/metrics/applications/{appName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"accounting",sdkVersion:"unleash-client-java:8.0.0",strategies:["standard","gradualRollout","mySpecialCustomStrategy"],url:"https://github.com/Unleash/unleash-client-proxy-js",color:"red",icon:"https://github.com/favicon.ico"},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Create an application to connect reported metrics",description:{content:"Is used to report usage as well which sdk the application uses",type:"text/plain"},url:{path:["api","admin","metrics","applications",":appName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"appName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/create-application",id:"reference/api/unleash/create-application",title:"Create an application to connect reported metrics",description:"Is used to report usage as well which sdk the application uses",source:"@site/docs/reference/api/unleash/create-application.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-application",permalink:"/reference/api/unleash/create-application",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-application",title:"Create an application to connect reported metrics",description:"Is used to report usage as well which sdk the application uses",sidebar_label:"Create an application to connect reported metrics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"createApplication",description:"Is used to report usage as well which sdk the application uses",responses:{202:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},requestBody:{description:"createApplicationSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Reported application information from Unleash SDKs",properties:{appName:{description:"Name of the application",type:"string",example:"accounting"},sdkVersion:{description:"Which SDK and version the application reporting uses. Typically represented as `<identifier>:<version>`",type:"string",example:"unleash-client-java:8.0.0"},strategies:{description:"Which [strategies](https://docs.getunleash.io/topics/the-anatomy-of-unleash#activation-strategies) the application has loaded. Useful when trying to figure out if your [custom strategy](https://docs.getunleash.io/reference/custom-activation-strategies) has been loaded in the SDK",type:"array",items:{type:"string"},example:["standard","gradualRollout","mySpecialCustomStrategy"]},url:{description:"A link to reference the application reporting the metrics. Could for instance be a GitHub link to the repository of the application",type:"string",example:"https://github.com/Unleash/unleash-client-proxy-js"},color:{description:"Css color to be used to color the application's entry in the application list",type:"string",example:"red"},icon:{description:"An URL to an icon file to be used for the applications's entry in the application list",type:"string",example:"https://github.com/favicon.ico"}},title:"createApplicationSchema"}}}},parameters:[{name:"appName",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/metrics/applications/{appName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"accounting",sdkVersion:"unleash-client-java:8.0.0",strategies:["standard","gradualRollout","mySpecialCustomStrategy"],url:"https://github.com/Unleash/unleash-client-proxy-js",color:"red",icon:"https://github.com/favicon.ico"},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Create an application to connect reported metrics",description:{content:"Is used to report usage as well which sdk the application uses",type:"text/plain"},url:{path:["api","admin","metrics","applications",":appName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"appName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Gets usage data",permalink:"/reference/api/unleash/get-requests-per-second"},next:{title:"Delete an application",permalink:"/reference/api/unleash/delete-application"}},b={},f=[{value:"Request",id:"request",level:2}],k={toc:f};function T(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Create an application to connect reported metrics"),(0,s.kt)(n.Z,{method:"post",path:"/api/admin/metrics/applications/{appName}",mdxType:"MethodEndpoint"}),(0,s.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Is used to report usage as well which sdk the application uses"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"appName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"createApplicationSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"appName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the application",type:"string",example:"accounting"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Which SDK and version the application reporting uses. Typically represented as `<identifier>:<version>`",type:"string",example:"unleash-client-java:8.0.0"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"strategies",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which [strategies](https://docs.getunleash.io/topics/the-anatomy-of-unleash#activation-strategies) the application has loaded. Useful when trying to figure out if your [custom strategy](https://docs.getunleash.io/reference/custom-activation-strategies) has been loaded in the SDK",type:"array",items:{type:"string"},example:["standard","gradualRollout","mySpecialCustomStrategy"]},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A link to reference the application reporting the metrics. Could for instance be a GitHub link to the repository of the application",type:"string",example:"https://github.com/Unleash/unleash-client-proxy-js"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"color",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Css color to be used to color the application's entry in the application list",type:"string",example:"red"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"An URL to an icon file to be used for the applications's entry in the application list",type:"string",example:"https://github.com/favicon.ico"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(h.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null)),(0,s.kt)(h.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);