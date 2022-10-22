"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4927],{46791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>u});var i=r(87462),s=(r(67294),r(3905)),n=r(70439),a=r(89402),o=(r(10725),r(65860),r(5479)),l=(r(83559),r(48567),r(72905));const p={id:"register-frontend-metrics",title:"registerFrontendMetrics",description:"registerFrontendMetrics",sidebar_label:"registerFrontendMetrics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unstable"],operationId:"registerFrontendMetrics",requestBody:{description:"proxyMetricsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","instanceId","bucket"],properties:{appName:{type:"string"},instanceId:{type:"string"},environment:{type:"string"},bucket:{type:"object",required:["start","stop","toggles"],properties:{start:{type:"string",format:"date-time"},stop:{type:"string",format:"date-time"},toggles:{type:"object",example:{myCoolToggle:{yes:25,no:42,variants:{blue:6,green:15,red:46}},myOtherToggle:{yes:0,no:100}},additionalProperties:{type:"object",properties:{yes:{type:"integer",minimum:0},no:{type:"integer",minimum:0},variants:{type:"object",additionalProperties:{type:"integer",minimum:0}}}}}}}}}}}},responses:{200:{description:"This response has no body."}},description:"registerFrontendMetrics",method:"post",path:"/api/frontend/client/metrics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"string",instanceId:"string",environment:"string",bucket:{start:"2022-10-22",stop:"2022-10-22",toggles:{myCoolToggle:{yes:25,no:42,variants:{blue:6,green:15,red:46}},myOtherToggle:{yes:0,no:100}}}},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"register Frontend Metrics",description:{type:"text/plain"},url:{path:["api","frontend","client","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},d=void 0,m={unversionedId:"reference/api/unleash/register-frontend-metrics",id:"reference/api/unleash/register-frontend-metrics",title:"registerFrontendMetrics",description:"registerFrontendMetrics",source:"@site/docs/reference/api/unleash/register-frontend-metrics.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/register-frontend-metrics",permalink:"/reference/api/unleash/register-frontend-metrics",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/register-frontend-metrics.api.mdx",tags:[],version:"current",frontMatter:{id:"register-frontend-metrics",title:"registerFrontendMetrics",description:"registerFrontendMetrics",sidebar_label:"registerFrontendMetrics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unstable"],operationId:"registerFrontendMetrics",requestBody:{description:"proxyMetricsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","instanceId","bucket"],properties:{appName:{type:"string"},instanceId:{type:"string"},environment:{type:"string"},bucket:{type:"object",required:["start","stop","toggles"],properties:{start:{type:"string",format:"date-time"},stop:{type:"string",format:"date-time"},toggles:{type:"object",example:{myCoolToggle:{yes:25,no:42,variants:{blue:6,green:15,red:46}},myOtherToggle:{yes:0,no:100}},additionalProperties:{type:"object",properties:{yes:{type:"integer",minimum:0},no:{type:"integer",minimum:0},variants:{type:"object",additionalProperties:{type:"integer",minimum:0}}}}}}}}}}}},responses:{200:{description:"This response has no body."}},description:"registerFrontendMetrics",method:"post",path:"/api/frontend/client/metrics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"string",instanceId:"string",environment:"string",bucket:{start:"2022-10-22",stop:"2022-10-22",toggles:{myCoolToggle:{yes:25,no:42,variants:{blue:6,green:15,red:46}},myOtherToggle:{yes:0,no:100}}}},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"register Frontend Metrics",description:{type:"text/plain"},url:{path:["api","frontend","client","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getFrontendFeatures",permalink:"/reference/api/unleash/get-frontend-features"},next:{title:"registerFrontendClient",permalink:"/reference/api/unleash/register-frontend-client"}},c={},u=[{value:"registerFrontendMetrics",id:"registerfrontendmetrics",level:2}],g={toc:u};function y(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,i.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"registerfrontendmetrics"},"registerFrontendMetrics"),(0,s.kt)("p",null,"registerFrontendMetrics"),(0,s.kt)(a.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"proxyMetricsSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"appName",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"instanceId",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"environment",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"bucket"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"start",required:!0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"stop",required:!0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"toggles"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("code",null,"property name*"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"))))))))))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null)))))}y.isMDXComponent=!0}}]);