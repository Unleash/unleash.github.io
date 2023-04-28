"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5986],{5816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),r=(a(11032),a(46062)),o=a(21439),p=(a(9531),a(15761)),l=a(73418),m=a(92414),c=a(11666);const d={id:"bulk-metrics",title:"Send metrics from Edge",description:"This operation accepts batched metrics from Edge. Metrics will be inserted into Unleash's metrics storage",sidebar_label:"Send metrics from Edge",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Edge"],description:"This operation accepts batched metrics from Edge. Metrics will be inserted into Unleash's metrics storage",operationId:"bulkMetrics",requestBody:{description:"bulkMetricsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["applications","metrics"],description:"A batch of metrics accumulated by Edge (or other compatible applications). Includes both application registrations as well usage metrics from clients",properties:{applications:{description:"A list of applications registered by an Unleash SDK",type:"array",items:{type:"object",required:["appName","instanceId","environment"],description:"An application registration. Defines the format POSTed by our server-side SDKs when they're starting up",properties:{connectVia:{type:"array",description:"A list of applications this app registration has been registered through. If connected directly to Unleash, this is an empty list. \n This can be used in later visualizations to tell how many levels of proxy or Edge instances our SDKs have connected through",items:{type:"object",required:["appName","instanceId"],properties:{appName:{type:"string"},instanceId:{type:"string"}}},example:[{appName:"unleash-edge",instanceId:"edge-pod-bghzv5"}]},appName:{description:"The name of the application that is evaluating toggles",type:"string",example:"Ingress load balancer"},environment:{description:"Which environment the application is running in",type:"string",example:"development"},instanceId:{description:"A [(somewhat) unique identifier](https://docs.getunleash.io/reference/sdks/node#advanced-usage) for the application",type:"string",example:"application-name-dacb1234"},interval:{description:"How often (in seconds) the application refreshes its features",type:"number",example:10},started:{description:"The application started at",example:"1952-03-11T12:00:00.000Z",oneOf:[{type:"string",format:"date-time"},{type:"number"}],title:"dateSchema"},strategies:{description:"Enabled [strategies](https://docs.getunleash.io/reference/activation-strategies) in the application",type:"array",example:["standard","gradualRollout"],items:{type:"string"}},sdkVersion:{description:"The version the sdk is running. Typically <client>:<version>",example:"unleash-client-java:8.0.0",type:"string"}},title:"bulkRegistrationSchema"}},metrics:{description:"a list of client usage metrics registered by downstream providers. (Typically Unleash Edge)",type:"array",items:{type:"object",required:["featureName","appName","environment"],additionalProperties:!0,description:"Used for reporting feature evaluation results from SDKs",properties:{featureName:{type:"string",description:"Name of the feature checked by the SDK",example:"my.special.feature"},appName:{description:"The name of the application the SDK is being used in",type:"string",example:"accounting"},environment:{description:"Which environment the SDK is being used in",type:"string",example:"development"},timestamp:{description:"The start of the time window these metrics are valid for. The window is 1 hour wide",example:"1926-05-08T12:00:00.000Z",oneOf:[{type:"string",format:"date-time"},{type:"number"}],title:"dateSchema"},yes:{description:"How many times the toggle evaluated to true",type:"integer",example:974,minimum:0},no:{description:"How many times the toggle evaluated to false",type:"integer",example:50,minimum:0},variants:{description:"How many times each variant was returned",type:"object",additionalProperties:{type:"integer",minimum:0},example:{variantA:15,variantB:25,variantC:5}}},title:"clientMetricsEnvSchema"}}},title:"bulkMetricsSchema"}}}},responses:{202:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},413:{description:"The request body is larger than what we accept. By default we only accept bodies of 100kB or less",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTooLarge",description:"The name of the error kind"},message:{type:"string",example:"You provided more data than we can handle. Unleash accepts at most X MB.",description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/edge/metrics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{applications:[{connectVia:[{appName:"unleash-edge",instanceId:"edge-pod-bghzv5"}],appName:"Ingress load balancer",environment:"development",instanceId:"application-name-dacb1234",interval:10,started:"2023-04-28T00:14:40.158Z",strategies:["standard","gradualRollout"],sdkVersion:"unleash-client-java:8.0.0"}],metrics:[{featureName:"my.special.feature",appName:"accounting",environment:"development",timestamp:"2023-04-28T00:14:40.158Z",yes:974,no:50,variants:{variantA:15,variantB:25,variantC:5}}]},info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"Send metrics from Edge",description:{content:"This operation accepts batched metrics from Edge. Metrics will be inserted into Unleash's metrics storage",type:"text/plain"},url:{path:["edge","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,u={unversionedId:"reference/api/unleash/bulk-metrics",id:"reference/api/unleash/bulk-metrics",title:"Send metrics from Edge",description:"This operation accepts batched metrics from Edge. Metrics will be inserted into Unleash's metrics storage",source:"@site/docs/reference/api/unleash/bulk-metrics.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/bulk-metrics",permalink:"/reference/api/unleash/bulk-metrics",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"bulk-metrics",title:"Send metrics from Edge",description:"This operation accepts batched metrics from Edge. Metrics will be inserted into Unleash's metrics storage",sidebar_label:"Send metrics from Edge",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Edge"],description:"This operation accepts batched metrics from Edge. Metrics will be inserted into Unleash's metrics storage",operationId:"bulkMetrics",requestBody:{description:"bulkMetricsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["applications","metrics"],description:"A batch of metrics accumulated by Edge (or other compatible applications). Includes both application registrations as well usage metrics from clients",properties:{applications:{description:"A list of applications registered by an Unleash SDK",type:"array",items:{type:"object",required:["appName","instanceId","environment"],description:"An application registration. Defines the format POSTed by our server-side SDKs when they're starting up",properties:{connectVia:{type:"array",description:"A list of applications this app registration has been registered through. If connected directly to Unleash, this is an empty list. \n This can be used in later visualizations to tell how many levels of proxy or Edge instances our SDKs have connected through",items:{type:"object",required:["appName","instanceId"],properties:{appName:{type:"string"},instanceId:{type:"string"}}},example:[{appName:"unleash-edge",instanceId:"edge-pod-bghzv5"}]},appName:{description:"The name of the application that is evaluating toggles",type:"string",example:"Ingress load balancer"},environment:{description:"Which environment the application is running in",type:"string",example:"development"},instanceId:{description:"A [(somewhat) unique identifier](https://docs.getunleash.io/reference/sdks/node#advanced-usage) for the application",type:"string",example:"application-name-dacb1234"},interval:{description:"How often (in seconds) the application refreshes its features",type:"number",example:10},started:{description:"The application started at",example:"1952-03-11T12:00:00.000Z",oneOf:[{type:"string",format:"date-time"},{type:"number"}],title:"dateSchema"},strategies:{description:"Enabled [strategies](https://docs.getunleash.io/reference/activation-strategies) in the application",type:"array",example:["standard","gradualRollout"],items:{type:"string"}},sdkVersion:{description:"The version the sdk is running. Typically <client>:<version>",example:"unleash-client-java:8.0.0",type:"string"}},title:"bulkRegistrationSchema"}},metrics:{description:"a list of client usage metrics registered by downstream providers. (Typically Unleash Edge)",type:"array",items:{type:"object",required:["featureName","appName","environment"],additionalProperties:!0,description:"Used for reporting feature evaluation results from SDKs",properties:{featureName:{type:"string",description:"Name of the feature checked by the SDK",example:"my.special.feature"},appName:{description:"The name of the application the SDK is being used in",type:"string",example:"accounting"},environment:{description:"Which environment the SDK is being used in",type:"string",example:"development"},timestamp:{description:"The start of the time window these metrics are valid for. The window is 1 hour wide",example:"1926-05-08T12:00:00.000Z",oneOf:[{type:"string",format:"date-time"},{type:"number"}],title:"dateSchema"},yes:{description:"How many times the toggle evaluated to true",type:"integer",example:974,minimum:0},no:{description:"How many times the toggle evaluated to false",type:"integer",example:50,minimum:0},variants:{description:"How many times each variant was returned",type:"object",additionalProperties:{type:"integer",minimum:0},example:{variantA:15,variantB:25,variantC:5}}},title:"clientMetricsEnvSchema"}}},title:"bulkMetricsSchema"}}}},responses:{202:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},413:{description:"The request body is larger than what we accept. By default we only accept bodies of 100kB or less",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTooLarge",description:"The name of the error kind"},message:{type:"string",example:"You provided more data than we can handle. Unleash accepts at most X MB.",description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/edge/metrics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{applications:[{connectVia:[{appName:"unleash-edge",instanceId:"edge-pod-bghzv5"}],appName:"Ingress load balancer",environment:"development",instanceId:"application-name-dacb1234",interval:10,started:"2023-04-28T00:14:40.158Z",strategies:["standard","gradualRollout"],sdkVersion:"unleash-client-java:8.0.0"}],metrics:[{featureName:"my.special.feature",appName:"accounting",environment:"development",timestamp:"2023-04-28T00:14:40.158Z",yes:974,no:50,variants:{variantA:15,variantB:25,variantC:5}}]},info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"Send metrics from Edge",description:{content:"This operation accepts batched metrics from Edge. Metrics will be inserted into Unleash's metrics storage",type:"text/plain"},url:{path:["edge","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Check which tokens are valid",permalink:"/reference/api/unleash/get-valid-tokens"},next:{title:"Environments",permalink:"/reference/api/unleash/environments"}},y={},g=[],f={toc:g};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Send metrics from Edge"),(0,n.kt)(r.Z,{method:"post",path:"/edge/metrics",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"This operation accepts batched metrics from Edge. Metrics will be inserted into Unleash's metrics storage"),(0,n.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"bulkMetricsSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"applications"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"A list of applications registered by an Unleash SDK")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"connectVia"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"A list of applications this app registration has been registered through. If connected directly to Unleash, this is an empty list.\nThis can be used in later visualizations to tell how many levels of proxy or Edge instances our SDKs have connected through")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(l.Z,{collapsible:!1,name:"appName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"instanceId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(l.Z,{collapsible:!1,name:"appName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the application that is evaluating toggles",type:"string",example:"Ingress load balancer"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"environment",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Which environment the application is running in",type:"string",example:"development"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"instanceId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"A [(somewhat) unique identifier](https://docs.getunleash.io/reference/sdks/node#advanced-usage) for the application",type:"string",example:"application-name-dacb1234"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"interval",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{description:"How often (in seconds) the application refreshes its features",type:"number",example:10},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"started"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The application started at")),(0,n.kt)("li",null,(0,n.kt)("span",{className:"badge badge--info"},"oneOf"),(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," date-time")))),(0,n.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"number"))))))))),(0,n.kt)(l.Z,{collapsible:!1,name:"strategies",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Enabled [strategies](https://docs.getunleash.io/reference/activation-strategies) in the application",type:"array",example:["standard","gradualRollout"],items:{type:"string"}},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The version the sdk is running. Typically <client>:<version>",example:"unleash-client-java:8.0.0",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"metrics"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"a list of client usage metrics registered by downstream providers. (Typically Unleash Edge)")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(l.Z,{collapsible:!1,name:"featureName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the feature checked by the SDK",example:"my.special.feature"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"appName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the application the SDK is being used in",type:"string",example:"accounting"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"environment",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Which environment the SDK is being used in",type:"string",example:"development"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"timestamp"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The start of the time window these metrics are valid for. The window is 1 hour wide")),(0,n.kt)("li",null,(0,n.kt)("span",{className:"badge badge--info"},"oneOf"),(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," date-time")))),(0,n.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"number"))))))))),(0,n.kt)(l.Z,{collapsible:!1,name:"yes",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many times the toggle evaluated to true",type:"integer",example:974,minimum:0},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"no",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"How many times the toggle evaluated to false",type:"integer",example:50,minimum:0},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"variants"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"How many times each variant was returned")),(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("code",null,"property name*"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")))))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null)),(0,n.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The request data does not match what we expect.")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"413",value:"413",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The request body is larger than what we accept. By default we only accept bodies of 100kB or less")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTooLarge",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You provided more data than we can handle. Unleash accepts at most X MB.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTooLarge",\n  "message": "You provided more data than we can handle. Unleash accepts at most X MB."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.')),(0,n.kt)("div",null,(0,n.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTypeerror",\n  "message": "We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);