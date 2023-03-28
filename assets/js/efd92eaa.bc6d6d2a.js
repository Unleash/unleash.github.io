"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[568],{77548:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>y,metadata:()=>g,toc:()=>h});var s=a(87462),n=(a(67294),a(3905)),i=a(80334),r=(a(11032),a(46062)),o=a(21439),m=(a(9531),a(15761)),p=a(73418),d=a(92414),l=a(11666);const y={id:"update-feature-strategy-segments",title:"Updates the segments of a strategy by id",description:"Sets the segments of the strategy to be exactly the ones passed in the payload",sidebar_label:"Updates the segments of a strategy by id",hide_title:!0,hide_table_of_contents:!0,api:{description:"Sets the segments of the strategy to be exactly the ones passed in the payload",tags:["Strategies"],operationId:"updateFeatureStrategySegments",requestBody:{description:"updateFeatureStrategySegmentsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["projectId","strategyId","environmentId","segmentIds"],properties:{projectId:{type:"string"},strategyId:{type:"string"},environmentId:{type:"string"},segmentIds:{type:"array",items:{type:"number"}}},title:"updateFeatureStrategySegmentsSchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",required:["projectId","strategyId","environmentId","segmentIds"],properties:{projectId:{type:"string"},strategyId:{type:"string"},environmentId:{type:"string"},segmentIds:{type:"array",items:{type:"number"}}},title:"updateFeatureStrategySegmentsSchema"}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},method:"post",path:"/api/admin/segments/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{projectId:"string",strategyId:"string",environmentId:"string",segmentIds:[0]},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"Updates the segments of a strategy by id",description:{content:"Sets the segments of the strategy to be exactly the ones passed in the payload",type:"text/plain"},url:{path:["api","admin","segments","strategies"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,g={unversionedId:"reference/api/unleash/update-feature-strategy-segments",id:"reference/api/unleash/update-feature-strategy-segments",title:"Updates the segments of a strategy by id",description:"Sets the segments of the strategy to be exactly the ones passed in the payload",source:"@site/docs/reference/api/unleash/update-feature-strategy-segments.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-feature-strategy-segments",permalink:"/reference/api/unleash/update-feature-strategy-segments",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-feature-strategy-segments",title:"Updates the segments of a strategy by id",description:"Sets the segments of the strategy to be exactly the ones passed in the payload",sidebar_label:"Updates the segments of a strategy by id",hide_title:!0,hide_table_of_contents:!0,api:{description:"Sets the segments of the strategy to be exactly the ones passed in the payload",tags:["Strategies"],operationId:"updateFeatureStrategySegments",requestBody:{description:"updateFeatureStrategySegmentsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["projectId","strategyId","environmentId","segmentIds"],properties:{projectId:{type:"string"},strategyId:{type:"string"},environmentId:{type:"string"},segmentIds:{type:"array",items:{type:"number"}}},title:"updateFeatureStrategySegmentsSchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",required:["projectId","strategyId","environmentId","segmentIds"],properties:{projectId:{type:"string"},strategyId:{type:"string"},environmentId:{type:"string"},segmentIds:{type:"array",items:{type:"number"}}},title:"updateFeatureStrategySegmentsSchema"}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},method:"post",path:"/api/admin/segments/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{projectId:"string",strategyId:"string",environmentId:"string",segmentIds:[0]},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"Updates the segments of a strategy by id",description:{content:"Sets the segments of the strategy to be exactly the ones passed in the payload",type:"text/plain"},url:{path:["api","admin","segments","strategies"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getSegmentsByStrategyId",permalink:"/reference/api/unleash/get-segments-by-strategy-id"},next:{title:"getStrategiesBySegmentId",permalink:"/reference/api/unleash/get-strategies-by-segment-id"}},u={},h=[],k={toc:h};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Updates the segments of a strategy by id"),(0,n.kt)(r.Z,{method:"post",path:"/api/admin/segments/strategies",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"Sets the segments of the strategy to be exactly the ones passed in the payload"),(0,n.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"updateFeatureStrategySegmentsSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"projectId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"strategyId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"environmentId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"segmentIds",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The resource was successfully created.")),(0,n.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Response Headers")),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"location"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null,(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The location of the newly created resource.")))))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"projectId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"strategyId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"environmentId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"segmentIds",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"})))),(0,n.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "projectId": "string",\n  "strategyId": "string",\n  "environmentId": "string",\n  "segmentIds": [\n    0\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The request data does not match what we expect.")),(0,n.kt)("div",null)),(0,n.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null))))))}b.isMDXComponent=!0}}]);