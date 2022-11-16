"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1733],{28621:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>m,metadata:()=>d,toc:()=>y});var r=i(87462),s=(i(67294),i(3905)),a=i(60961),n=i(48165),l=(i(23380),i(58475),i(5428)),o=i(80487),p=(i(54881),i(11666));const m={id:"register-client-metrics",title:"registerClientMetrics",description:"registerClientMetrics",sidebar_label:"registerClientMetrics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Client"],operationId:"registerClientMetrics",requestBody:{description:"clientMetricsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","bucket"],properties:{appName:{type:"string"},instanceId:{type:"string"},environment:{type:"string"},bucket:{type:"object",required:["start","stop","toggles"],properties:{start:{oneOf:[{type:"string",format:"date-time"},{type:"number"}]},stop:{oneOf:[{type:"string",format:"date-time"},{type:"number"}]},toggles:{type:"object",additionalProperties:{type:"object",properties:{yes:{type:"integer",minimum:0},no:{type:"integer",minimum:0},variants:{type:"object",additionalProperties:{type:"integer",minimum:0}}}}}}}}}}}},responses:{202:{description:"This response has no body."},400:{description:"The request data does not match what we expect."}},description:"registerClientMetrics",method:"post",path:"/api/client/metrics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"string",instanceId:"string",environment:"string",bucket:{start:"2022-11-16",stop:"2022-11-16",toggles:{}}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"register Client Metrics",description:{type:"text/plain"},url:{path:["api","client","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},c=void 0,d={unversionedId:"reference/api/unleash/register-client-metrics",id:"reference/api/unleash/register-client-metrics",title:"registerClientMetrics",description:"registerClientMetrics",source:"@site/docs/reference/api/unleash/register-client-metrics.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/register-client-metrics",permalink:"/reference/api/unleash/register-client-metrics",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/register-client-metrics.api.mdx",tags:[],version:"current",frontMatter:{id:"register-client-metrics",title:"registerClientMetrics",description:"registerClientMetrics",sidebar_label:"registerClientMetrics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Client"],operationId:"registerClientMetrics",requestBody:{description:"clientMetricsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","bucket"],properties:{appName:{type:"string"},instanceId:{type:"string"},environment:{type:"string"},bucket:{type:"object",required:["start","stop","toggles"],properties:{start:{oneOf:[{type:"string",format:"date-time"},{type:"number"}]},stop:{oneOf:[{type:"string",format:"date-time"},{type:"number"}]},toggles:{type:"object",additionalProperties:{type:"object",properties:{yes:{type:"integer",minimum:0},no:{type:"integer",minimum:0},variants:{type:"object",additionalProperties:{type:"integer",minimum:0}}}}}}}}}}}},responses:{202:{description:"This response has no body."},400:{description:"The request data does not match what we expect."}},description:"registerClientMetrics",method:"post",path:"/api/client/metrics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"string",instanceId:"string",environment:"string",bucket:{start:"2022-11-16",stop:"2022-11-16",toggles:{}}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"register Client Metrics",description:{type:"text/plain"},url:{path:["api","client","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getAllClientFeatures",permalink:"/reference/api/unleash/get-all-client-features"},next:{title:"registerClientApplication",permalink:"/reference/api/unleash/register-client-application"}},u={},y=[{value:"registerClientMetrics",id:"registerclientmetrics",level:2}],g={toc:y};function k(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"registerclientmetrics"},"registerClientMetrics"),(0,s.kt)("p",null,"registerClientMetrics"),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"clientMetricsSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"appName",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"instanceId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"bucket"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"start"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(o.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," date-time")))),(0,s.kt)(p.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"number")))))))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"stop"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(o.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," date-time")))),(0,s.kt)(p.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"number")))))))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"toggles"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("code",null,"property name*"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"))))))))))))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null)),(0,s.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null)))))}k.isMDXComponent=!0}}]);