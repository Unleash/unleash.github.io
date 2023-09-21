"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1733],{28621:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>f,frontMatter:()=>h,metadata:()=>g,toc:()=>k});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),r=(a(11032),a(46062)),o=a(57138),m=a(21439),l=(a(9531),a(15761)),p=a(73418),d=a(92414),c=a(11666);const h={id:"register-client-metrics",title:"Register client usage metrics",description:"Registers usage metrics. Stores information about how many times each toggle was evaluated to enabled and disabled within a time frame. If provided, this operation will also store data on how many times each feature toggle's variants were displayed to the end user.",sidebar_label:"Register client usage metrics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Client"],description:"Registers usage metrics. Stores information about how many times each toggle was evaluated to enabled and disabled within a time frame. If provided, this operation will also store data on how many times each feature toggle's variants were displayed to the end user.",operationId:"registerClientMetrics",requestBody:{description:"clientMetricsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","bucket"],description:"Client usage metrics, accumulated in buckets of hour by hour by default",properties:{appName:{description:"The name of the application that is evaluating toggles",type:"string",example:"insurance-selector"},instanceId:{description:"A [(somewhat) unique identifier](https://docs.getunleash.io/reference/sdks/node#advanced-usage) for the application",type:"string",example:"application-name-dacb1234"},environment:{description:"Which environment the application is running in",type:"string",example:"development"},bucket:{type:"object",required:["start","stop","toggles"],description:"Holds all metrics gathered over a window of time. Typically 1 hour wide",properties:{start:{description:"The start of the time window these metrics are valid for. The window is usually 1 hour wide",example:"1926-05-08T12:00:00.000Z",oneOf:[{type:"string",format:"date-time",description:"An [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339.html)-compliant timestamp.",example:"2023-07-27T11:23:44Z"},{type:"integer",description:"A [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time).",example:1690449593}],title:"dateSchema"},stop:{description:"The end of the time window these metrics are valid for. The window is 1 hour wide",example:"1926-05-08T13:00:00.000Z",oneOf:[{type:"string",format:"date-time",description:"An [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339.html)-compliant timestamp.",example:"2023-07-27T11:23:44Z"},{type:"integer",description:"A [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time).",example:1690449593}],title:"dateSchema"},toggles:{type:"object",description:"an object containing feature names with yes/no plus variant usage",example:{myCoolToggle:{yes:25,no:42,variants:{blue:6,green:15,red:46}},myOtherToggle:{yes:0,no:100}},additionalProperties:{type:"object",properties:{yes:{description:"How many times the toggle evaluated to true",type:"number",example:974,minimum:0},no:{description:"How many times the toggle evaluated to false",type:"integer",example:50,minimum:0},variants:{description:"An object describing how many times each variant was returned. Variant names are used as properties, and the number of times they were exposed is the corresponding value (i.e. `{ [variantName]: number }`).",type:"object",additionalProperties:{type:"integer",minimum:0},example:{variantA:15,variantB:25,variantC:5}}}}}}}},title:"clientMetricsSchema"}}}},responses:{202:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/client/metrics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"insurance-selector",instanceId:"application-name-dacb1234",environment:"development",bucket:{start:"2023-07-27T11:23:44Z",stop:"2023-07-27T11:23:44Z",toggles:{myCoolToggle:{yes:25,no:42,variants:{blue:6,green:15,red:46}},myOtherToggle:{yes:0,no:100}}}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Register client usage metrics",description:{content:"Registers usage metrics. Stores information about how many times each toggle was evaluated to enabled and disabled within a time frame. If provided, this operation will also store data on how many times each feature toggle's variants were displayed to the end user.",type:"text/plain"},url:{path:["api","client","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/register-client-metrics",id:"reference/api/unleash/register-client-metrics",title:"Register client usage metrics",description:"Registers usage metrics. Stores information about how many times each toggle was evaluated to enabled and disabled within a time frame. If provided, this operation will also store data on how many times each feature toggle's variants were displayed to the end user.",source:"@site/docs/reference/api/unleash/register-client-metrics.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/register-client-metrics",permalink:"/reference/api/unleash/register-client-metrics",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"register-client-metrics",title:"Register client usage metrics",description:"Registers usage metrics. Stores information about how many times each toggle was evaluated to enabled and disabled within a time frame. If provided, this operation will also store data on how many times each feature toggle's variants were displayed to the end user.",sidebar_label:"Register client usage metrics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Client"],description:"Registers usage metrics. Stores information about how many times each toggle was evaluated to enabled and disabled within a time frame. If provided, this operation will also store data on how many times each feature toggle's variants were displayed to the end user.",operationId:"registerClientMetrics",requestBody:{description:"clientMetricsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","bucket"],description:"Client usage metrics, accumulated in buckets of hour by hour by default",properties:{appName:{description:"The name of the application that is evaluating toggles",type:"string",example:"insurance-selector"},instanceId:{description:"A [(somewhat) unique identifier](https://docs.getunleash.io/reference/sdks/node#advanced-usage) for the application",type:"string",example:"application-name-dacb1234"},environment:{description:"Which environment the application is running in",type:"string",example:"development"},bucket:{type:"object",required:["start","stop","toggles"],description:"Holds all metrics gathered over a window of time. Typically 1 hour wide",properties:{start:{description:"The start of the time window these metrics are valid for. The window is usually 1 hour wide",example:"1926-05-08T12:00:00.000Z",oneOf:[{type:"string",format:"date-time",description:"An [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339.html)-compliant timestamp.",example:"2023-07-27T11:23:44Z"},{type:"integer",description:"A [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time).",example:1690449593}],title:"dateSchema"},stop:{description:"The end of the time window these metrics are valid for. The window is 1 hour wide",example:"1926-05-08T13:00:00.000Z",oneOf:[{type:"string",format:"date-time",description:"An [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339.html)-compliant timestamp.",example:"2023-07-27T11:23:44Z"},{type:"integer",description:"A [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time).",example:1690449593}],title:"dateSchema"},toggles:{type:"object",description:"an object containing feature names with yes/no plus variant usage",example:{myCoolToggle:{yes:25,no:42,variants:{blue:6,green:15,red:46}},myOtherToggle:{yes:0,no:100}},additionalProperties:{type:"object",properties:{yes:{description:"How many times the toggle evaluated to true",type:"number",example:974,minimum:0},no:{description:"How many times the toggle evaluated to false",type:"integer",example:50,minimum:0},variants:{description:"An object describing how many times each variant was returned. Variant names are used as properties, and the number of times they were exposed is the corresponding value (i.e. `{ [variantName]: number }`).",type:"object",additionalProperties:{type:"integer",minimum:0},example:{variantA:15,variantB:25,variantC:5}}}}}}}},title:"clientMetricsSchema"}}}},responses:{202:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/client/metrics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"insurance-selector",instanceId:"application-name-dacb1234",environment:"development",bucket:{start:"2023-07-27T11:23:44Z",stop:"2023-07-27T11:23:44Z",toggles:{myCoolToggle:{yes:25,no:42,variants:{blue:6,green:15,red:46}},myOtherToggle:{yes:0,no:100}}}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Register client usage metrics",description:{content:"Registers usage metrics. Stores information about how many times each toggle was evaluated to enabled and disabled within a time frame. If provided, this operation will also store data on how many times each feature toggle's variants were displayed to the end user.",type:"text/plain"},url:{path:["api","client","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all toggles (SDK)",permalink:"/reference/api/unleash/get-all-client-features"},next:{title:"Register a client SDK",permalink:"/reference/api/unleash/register-client-application"}},y={},k=[{value:"Request",id:"request",level:2}],b={toc:k};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Register client usage metrics"),(0,s.kt)(r.Z,{method:"post",path:"/api/client/metrics",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Registers usage metrics. Stores information about how many times each toggle was evaluated to enabled and disabled within a time frame. If provided, this operation will also store data on how many times each feature toggle's variants were displayed to the end user."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)(m.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"clientMetricsSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"appName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the application that is evaluating toggles",type:"string",example:"insurance-selector"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"instanceId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A [(somewhat) unique identifier](https://docs.getunleash.io/reference/sdks/node#advanced-usage) for the application",type:"string",example:"application-name-dacb1234"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Which environment the application is running in",type:"string",example:"development"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"bucket"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Holds all metrics gathered over a window of time. Typically 1 hour wide")),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"start"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The start of the time window these metrics are valid for. The window is usually 1 hour wide")),(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"An ",(0,s.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc3339.html"},"RFC-3339"),"-compliant timestamp."))))),(0,s.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_time"},"UNIX timestamp"),".")))))))))),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"stop"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The end of the time window these metrics are valid for. The window is 1 hour wide")),(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"An ",(0,s.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc3339.html"},"RFC-3339"),"-compliant timestamp."))))),(0,s.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_time"},"UNIX timestamp"),".")))))))))),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"toggles"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"an object containing feature names with yes/no plus variant usage")),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"property name*"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"yes",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{description:"How many times the toggle evaluated to true",type:"number",example:974,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"no",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many times the toggle evaluated to false",type:"integer",example:50,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"variants"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"An object describing how many times each variant was returned. Variant names are used as properties, and the number of times they were exposed is the corresponding value (i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"{ [variantName]: number }"),").")),(0,s.kt)(p.Z,{name:"property name*",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))))))))))))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null)),(0,s.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);