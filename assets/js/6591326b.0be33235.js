"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7603],{9123:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>y});var a=i(87462),n=(i(67294),i(3905)),r=i(80334),s=(i(11032),i(46062)),l=i(21439),p=(i(9531),i(15761),i(73418)),o=i(92414),c=i(11666);const m={id:"register-client-application",title:"registerClientApplication",description:"registerClientApplication",sidebar_label:"registerClientApplication",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Client"],operationId:"registerClientApplication",requestBody:{description:"clientApplicationSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","interval","started","strategies"],properties:{appName:{type:"string"},instanceId:{type:"string"},sdkVersion:{type:"string"},environment:{type:"string"},interval:{type:"number"},started:{oneOf:[{type:"string",format:"date-time"},{type:"number"}]},strategies:{type:"array",items:{type:"string"}}},title:"clientApplicationSchema"}}}},responses:{202:{description:"This response has no body."}},description:"registerClientApplication",method:"post",path:"/api/client/register",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"string",instanceId:"string",sdkVersion:"string",environment:"string",interval:0,started:"2023-04-28T00:14:40.157Z",strategies:["string"]},info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"register Client Application",description:{type:"text/plain"},url:{path:["api","client","register"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,u={unversionedId:"reference/api/unleash/register-client-application",id:"reference/api/unleash/register-client-application",title:"registerClientApplication",description:"registerClientApplication",source:"@site/docs/reference/api/unleash/register-client-application.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/register-client-application",permalink:"/reference/api/unleash/register-client-application",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"register-client-application",title:"registerClientApplication",description:"registerClientApplication",sidebar_label:"registerClientApplication",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Client"],operationId:"registerClientApplication",requestBody:{description:"clientApplicationSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["appName","interval","started","strategies"],properties:{appName:{type:"string"},instanceId:{type:"string"},sdkVersion:{type:"string"},environment:{type:"string"},interval:{type:"number"},started:{oneOf:[{type:"string",format:"date-time"},{type:"number"}]},strategies:{type:"array",items:{type:"string"}}},title:"clientApplicationSchema"}}}},responses:{202:{description:"This response has no body."}},description:"registerClientApplication",method:"post",path:"/api/client/register",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"string",instanceId:"string",sdkVersion:"string",environment:"string",interval:0,started:"2023-04-28T00:14:40.157Z",strategies:["string"]},info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"register Client Application",description:{type:"text/plain"},url:{path:["api","client","register"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"registerClientMetrics",permalink:"/reference/api/unleash/register-client-metrics"},next:{title:"Context",permalink:"/reference/api/unleash/context"}},g={},y=[],h={toc:y};function k(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"registerClientApplication"),(0,n.kt)(s.Z,{method:"post",path:"/api/client/register",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"registerClientApplication"),(0,n.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"clientApplicationSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"appName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"instanceId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"interval",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"started"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("span",{className:"badge badge--info"},"oneOf"),(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," date-time")))),(0,n.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"number"))))))))),(0,n.kt)(p.Z,{collapsible:!1,name:"strategies",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null))))))}k.isMDXComponent=!0}}]);