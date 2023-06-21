"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5799],{78421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>_,frontMatter:()=>d,metadata:()=>k,toc:()=>g});var l=a(87462),s=(a(67294),a(3905)),i=a(80334),n=(a(11032),a(46062)),h=a(57138),p=a(21439),r=(a(9531),a(15761)),o=a(73418),m=a(92414),c=a(11666);const d={id:"get-health",title:"getHealth",description:"getHealth",sidebar_label:"getHealth",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Operational"],operationId:"getHealth",responses:{200:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["health"],properties:{health:{type:"string",enum:["GOOD","BAD"]}},title:"healthCheckSchema"}}}},500:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["health"],properties:{health:{type:"string",enum:["GOOD","BAD"]}},title:"healthCheckSchema"}}}}},description:"getHealth",method:"get",path:"/health",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"get Health",description:{type:"text/plain"},url:{path:["health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,k={unversionedId:"reference/api/unleash/get-health",id:"reference/api/unleash/get-health",title:"getHealth",description:"getHealth",source:"@site/docs/reference/api/unleash/get-health.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-health",permalink:"/reference/api/unleash/get-health",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-health",title:"getHealth",description:"getHealth",sidebar_label:"getHealth",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Operational"],operationId:"getHealth",responses:{200:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["health"],properties:{health:{type:"string",enum:["GOOD","BAD"]}},title:"healthCheckSchema"}}}},500:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["health"],properties:{health:{type:"string",enum:["GOOD","BAD"]}},title:"healthCheckSchema"}}}}},description:"getHealth",method:"get",path:"/health",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"get Health",description:{type:"text/plain"},url:{path:["health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Operational",permalink:"/reference/api/unleash/operational"},next:{title:"Personal access tokens",permalink:"/reference/api/unleash/personal-access-tokens"}},y={},g=[{value:"Request",id:"request",level:2}],b={toc:g};function _(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"getHealth"),(0,s.kt)(n.Z,{method:"get",path:"/health",mdxType:"MethodEndpoint"}),(0,s.kt)(h.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"getHealth"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"healthCheckSchema")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"health",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`GOOD`, `BAD`]",schema:{type:"string",enum:["GOOD","BAD"]},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "health": "GOOD"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"healthCheckSchema")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"health",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`GOOD`, `BAD`]",schema:{type:"string",enum:["GOOD","BAD"]},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "health": "GOOD"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}_.isMDXComponent=!0}}]);