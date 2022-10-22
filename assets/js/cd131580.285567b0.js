"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2777],{49036:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var i=a(87462),n=(a(67294),a(3905)),s=a(70439),d=a(89402),r=a(10725),o=a(65860),p=a(5479),l=a(83559),m=(a(48567),a(72905));const c={id:"get-addon",title:"getAddon",description:"getAddon",sidebar_label:"getAddon",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Addons"],operationId:"getAddon",responses:{200:{description:"addonSchema",content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"getAddon",method:"get",path:"/api/admin/addons/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"get Addon",description:{type:"text/plain"},url:{path:["api","admin","addons",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},u=void 0,y={unversionedId:"reference/api/unleash/get-addon",id:"reference/api/unleash/get-addon",title:"getAddon",description:"getAddon",source:"@site/docs/reference/api/unleash/get-addon.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-addon",permalink:"/reference/api/unleash/get-addon",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-addon.api.mdx",tags:[],version:"current",frontMatter:{id:"get-addon",title:"getAddon",description:"getAddon",sidebar_label:"getAddon",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Addons"],operationId:"getAddon",responses:{200:{description:"addonSchema",content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"getAddon",method:"get",path:"/api/admin/addons/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"get Addon",description:{type:"text/plain"},url:{path:["api","admin","addons",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"createAddon",permalink:"/reference/api/unleash/create-addon"},next:{title:"updateAddon",permalink:"/reference/api/unleash/update-addon"}},h={},g=[{value:"getAddon",id:"getaddon",level:2}],v={toc:g};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"getaddon"},"getAddon"),(0,n.kt)("p",null,"getAddon"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"addonSchema")),(0,n.kt)("div",null,(0,n.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"provider",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"parameters"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}}))),(0,n.kt)(p.Z,{collapsible:!1,name:"events",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"projects",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"environments",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "id": 0,\n  "createdAt": "2022-10-22",\n  "provider": "string",\n  "description": "string",\n  "enabled": true,\n  "parameters": {},\n  "events": [\n    "string"\n  ],\n  "projects": [\n    "string"\n  ],\n  "environments": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);