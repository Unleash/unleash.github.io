"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5799],{78421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var s=a(87462),n=(a(67294),a(3905)),i=a(80334),r=(a(11032),a(46062)),o=a(57138),l=a(21439),h=(a(9531),a(15761)),p=a(73418),c=a(92414),m=a(11666);const d={id:"get-health",title:"Get instance operational status",description:"This operation returns information about whether this Unleash instance is healthy and ready to serve requests or not. Typically used by your deployment orchestrator (e.g. Kubernetes, Docker Swarm, Mesos, et al.).",sidebar_label:"Get instance operational status",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Operational"],operationId:"getHealth",description:"This operation returns information about whether this Unleash instance is healthy and ready to serve requests or not. Typically used by your deployment orchestrator (e.g. Kubernetes, Docker Swarm, Mesos, et al.).",responses:{200:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",description:"Used by service orchestrators to decide whether this Unleash instance should be marked as healthy or unhealthy",additionalProperties:!1,required:["health"],properties:{health:{description:"The state this Unleash instance is in. GOOD if everything is ok, BAD if the instance should be restarted",type:"string",enum:["GOOD","BAD"],example:"GOOD"}},title:"healthCheckSchema"}}}},500:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",description:"Used by service orchestrators to decide whether this Unleash instance should be marked as healthy or unhealthy",additionalProperties:!1,required:["health"],properties:{health:{description:"The state this Unleash instance is in. GOOD if everything is ok, BAD if the instance should be restarted",type:"string",enum:["GOOD","BAD"],example:"GOOD"}},title:"healthCheckSchema"}}}}},method:"get",path:"/health",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Get instance operational status",description:{content:"This operation returns information about whether this Unleash instance is healthy and ready to serve requests or not. Typically used by your deployment orchestrator (e.g. Kubernetes, Docker Swarm, Mesos, et al.).",type:"text/plain"},url:{path:["health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/get-health",id:"reference/api/unleash/get-health",title:"Get instance operational status",description:"This operation returns information about whether this Unleash instance is healthy and ready to serve requests or not. Typically used by your deployment orchestrator (e.g. Kubernetes, Docker Swarm, Mesos, et al.).",source:"@site/docs/reference/api/unleash/get-health.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-health",permalink:"/reference/api/unleash/get-health",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-health",title:"Get instance operational status",description:"This operation returns information about whether this Unleash instance is healthy and ready to serve requests or not. Typically used by your deployment orchestrator (e.g. Kubernetes, Docker Swarm, Mesos, et al.).",sidebar_label:"Get instance operational status",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Operational"],operationId:"getHealth",description:"This operation returns information about whether this Unleash instance is healthy and ready to serve requests or not. Typically used by your deployment orchestrator (e.g. Kubernetes, Docker Swarm, Mesos, et al.).",responses:{200:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",description:"Used by service orchestrators to decide whether this Unleash instance should be marked as healthy or unhealthy",additionalProperties:!1,required:["health"],properties:{health:{description:"The state this Unleash instance is in. GOOD if everything is ok, BAD if the instance should be restarted",type:"string",enum:["GOOD","BAD"],example:"GOOD"}},title:"healthCheckSchema"}}}},500:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",description:"Used by service orchestrators to decide whether this Unleash instance should be marked as healthy or unhealthy",additionalProperties:!1,required:["health"],properties:{health:{description:"The state this Unleash instance is in. GOOD if everything is ok, BAD if the instance should be restarted",type:"string",enum:["GOOD","BAD"],example:"GOOD"}},title:"healthCheckSchema"}}}}},method:"get",path:"/health",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Get instance operational status",description:{content:"This operation returns information about whether this Unleash instance is healthy and ready to serve requests or not. Typically used by your deployment orchestrator (e.g. Kubernetes, Docker Swarm, Mesos, et al.).",type:"text/plain"},url:{path:["health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Operational",permalink:"/reference/api/unleash/operational"},next:{title:"Personal access tokens",permalink:"/reference/api/unleash/personal-access-tokens"}},b={},k=[{value:"Request",id:"request",level:2}],T={toc:k};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get instance operational status"),(0,n.kt)(r.Z,{method:"get",path:"/health",mdxType:"MethodEndpoint"}),(0,n.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"This operation returns information about whether this Unleash instance is healthy and ready to serve requests or not. Typically used by your deployment orchestrator (e.g. Kubernetes, Docker Swarm, Mesos, et al.)."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"healthCheckSchema")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"health",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`GOOD`, `BAD`]",schema:{description:"The state this Unleash instance is in. GOOD if everything is ok, BAD if the instance should be restarted",type:"string",enum:["GOOD","BAD"],example:"GOOD"},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(h.Z,{responseExample:'{\n  "health": "GOOD"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"healthCheckSchema")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"health",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`GOOD`, `BAD`]",schema:{description:"The state this Unleash instance is in. GOOD if everything is ok, BAD if the instance should be restarted",type:"string",enum:["GOOD","BAD"],example:"GOOD"},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(h.Z,{responseExample:'{\n  "health": "GOOD"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);