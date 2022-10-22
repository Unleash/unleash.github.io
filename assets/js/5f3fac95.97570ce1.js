"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2810],{61572:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>h});var n=i(87462),r=(i(67294),i(3905)),s=i(70439),a=i(89402),o=(i(10725),i(65860),i(5479)),l=i(83559),d=(i(48567),i(72905));const p={id:"register-frontend-client",title:"registerFrontendClient",description:"registerFrontendClient",sidebar_label:"registerFrontendClient",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unstable"],operationId:"registerFrontendClient",requestBody:{description:"proxyClientSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","interval","started","strategies"],properties:{appName:{type:"string",description:"Name of the application using Unleash"},instanceId:{type:"string",description:"Instance id for this application (typically hostname, podId or similar)"},sdkVersion:{type:"string",description:"Optional field that describes the sdk version (name:version)"},environment:{type:"string",deprecated:!0},interval:{type:"number",description:"At which interval, in milliseconds, will this client be expected to send metrics"},started:{oneOf:[{type:"string",format:"date-time"},{type:"number"}],description:"When this client started. Should be reported as ISO8601 time."},strategies:{type:"array",items:{type:"string"},description:"List of strategies implemented by this application"}}}}}},responses:{200:{description:"This response has no body."}},description:"registerFrontendClient",method:"post",path:"/api/frontend/client/register",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"string",instanceId:"string",sdkVersion:"string",interval:0,started:"2022-10-22",strategies:["string"]},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"register Frontend Client",description:{type:"text/plain"},url:{path:["api","frontend","client","register"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},c=void 0,m={unversionedId:"reference/api/unleash/register-frontend-client",id:"reference/api/unleash/register-frontend-client",title:"registerFrontendClient",description:"registerFrontendClient",source:"@site/docs/reference/api/unleash/register-frontend-client.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/register-frontend-client",permalink:"/reference/api/unleash/register-frontend-client",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/register-frontend-client.api.mdx",tags:[],version:"current",frontMatter:{id:"register-frontend-client",title:"registerFrontendClient",description:"registerFrontendClient",sidebar_label:"registerFrontendClient",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unstable"],operationId:"registerFrontendClient",requestBody:{description:"proxyClientSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","interval","started","strategies"],properties:{appName:{type:"string",description:"Name of the application using Unleash"},instanceId:{type:"string",description:"Instance id for this application (typically hostname, podId or similar)"},sdkVersion:{type:"string",description:"Optional field that describes the sdk version (name:version)"},environment:{type:"string",deprecated:!0},interval:{type:"number",description:"At which interval, in milliseconds, will this client be expected to send metrics"},started:{oneOf:[{type:"string",format:"date-time"},{type:"number"}],description:"When this client started. Should be reported as ISO8601 time."},strategies:{type:"array",items:{type:"string"},description:"List of strategies implemented by this application"}}}}}},responses:{200:{description:"This response has no body."}},description:"registerFrontendClient",method:"post",path:"/api/frontend/client/register",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"string",instanceId:"string",sdkVersion:"string",interval:0,started:"2022-10-22",strategies:["string"]},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"register Frontend Client",description:{type:"text/plain"},url:{path:["api","frontend","client","register"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"registerFrontendMetrics",permalink:"/reference/api/unleash/register-frontend-metrics"},next:{title:"Users",permalink:"/reference/api/unleash/users"}},u={},h=[{value:"registerFrontendClient",id:"registerfrontendclient",level:2}],g={toc:h};function y(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"registerfrontendclient"},"registerFrontendClient"),(0,r.kt)("p",null,"registerFrontendClient"),(0,r.kt)(a.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"proxyClientSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"appName",required:!0,schemaDescription:"Name of the application using Unleash",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"instanceId",required:!1,schemaDescription:"Instance id for this application (typically hostname, podId or similar)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaDescription:"Optional field that describes the sdk version (name:version)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"environment",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"interval",required:!0,schemaDescription:"At which interval, in milliseconds, will this client be expected to send metrics",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"started"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"When this client started. Should be reported as ISO8601 time.")),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time")))),(0,r.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"number")))))))))),(0,r.kt)(o.Z,{collapsible:!1,name:"strategies",required:!0,schemaDescription:"List of strategies implemented by this application",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"This response has no body.")),(0,r.kt)("div",null)))))}y.isMDXComponent=!0}}]);