"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1337],{51763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>S,frontMatter:()=>o,metadata:()=>h,toc:()=>y});var n=a(87462),s=(a(67294),a(3905)),i=a(80334),m=(a(11032),a(46062)),r=a(21439),p=(a(9531),a(15761)),l=a(73418),c=a(92414),d=a(11666);const o={id:"get-instance-admin-stats",title:"getInstanceAdminStats",description:"getInstanceAdminStats",sidebar_label:"getInstanceAdminStats",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Instance Admin"],operationId:"getInstanceAdminStats",responses:{200:{description:"instanceAdminStatsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["instanceId"],properties:{instanceId:{type:"string"},timestamp:{type:"string",format:"date-time",nullable:!0},versionOSS:{type:"string"},versionEnterprise:{type:"string"},users:{type:"number"},featureToggles:{type:"number"},projects:{type:"number"},contextFields:{type:"number"},roles:{type:"number"},groups:{type:"number"},environments:{type:"number"},segments:{type:"number"},strategies:{type:"number"},SAMLenabled:{type:"number"},OIDCenabled:{type:"number"},sum:{type:"string"}},title:"instanceAdminStatsSchema"}}}}},deprecated:!0,description:"getInstanceAdminStats",method:"get",path:"/api/admin/instance-admin/statistics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.5"},postman:{name:"get Instance Admin Stats",description:{type:"text/plain"},url:{path:["api","admin","instance-admin","statistics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,h={unversionedId:"reference/api/unleash/get-instance-admin-stats",id:"reference/api/unleash/get-instance-admin-stats",title:"getInstanceAdminStats",description:"getInstanceAdminStats",source:"@site/docs/reference/api/unleash/get-instance-admin-stats.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-instance-admin-stats",permalink:"/reference/api/unleash/get-instance-admin-stats",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-instance-admin-stats",title:"getInstanceAdminStats",description:"getInstanceAdminStats",sidebar_label:"getInstanceAdminStats",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Instance Admin"],operationId:"getInstanceAdminStats",responses:{200:{description:"instanceAdminStatsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["instanceId"],properties:{instanceId:{type:"string"},timestamp:{type:"string",format:"date-time",nullable:!0},versionOSS:{type:"string"},versionEnterprise:{type:"string"},users:{type:"number"},featureToggles:{type:"number"},projects:{type:"number"},contextFields:{type:"number"},roles:{type:"number"},groups:{type:"number"},environments:{type:"number"},segments:{type:"number"},strategies:{type:"number"},SAMLenabled:{type:"number"},OIDCenabled:{type:"number"},sum:{type:"string"}},title:"instanceAdminStatsSchema"}}}}},deprecated:!0,description:"getInstanceAdminStats",method:"get",path:"/api/admin/instance-admin/statistics",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.5"},postman:{name:"get Instance Admin Stats",description:{type:"text/plain"},url:{path:["api","admin","instance-admin","statistics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Instance Admin",permalink:"/reference/api/unleash/instance-admin"},next:{title:"Maintenance",permalink:"/reference/api/unleash/maintenance"}},b={},y=[],g={toc:y};function S(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"getInstanceAdminStats"),(0,s.kt)(m.Z,{method:"get",path:"/api/admin/instance-admin/statistics",mdxType:"MethodEndpoint"}),(0,s.kt)("admonition",{title:"deprecated",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,s.kt)("p",null,"getInstanceAdminStats"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"instanceAdminStatsSchema")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"instanceId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"versionOSS",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"versionEnterprise",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"users",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"featureToggles",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"contextFields",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"roles",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"groups",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"environments",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"segments",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"strategies",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"SAMLenabled",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"OIDCenabled",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"sum",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "instanceId": "string",\n  "timestamp": "2023-04-24T00:15:09.722Z",\n  "versionOSS": "string",\n  "versionEnterprise": "string",\n  "users": 0,\n  "featureToggles": 0,\n  "projects": 0,\n  "contextFields": 0,\n  "roles": 0,\n  "groups": 0,\n  "environments": 0,\n  "segments": 0,\n  "strategies": 0,\n  "SAMLenabled": 0,\n  "OIDCenabled": 0,\n  "sum": "string"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}S.isMDXComponent=!0}}]);