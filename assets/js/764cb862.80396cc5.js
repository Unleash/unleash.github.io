"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3089],{37504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>y,toc:()=>h});var r=a(87462),i=(a(67294),a(3905)),s=a(60961),n=a(48165),o=(a(90115),a(58475)),p=a(5428),d=a(80487),m=(a(54881),a(11666));const l={id:"create-addon",title:"createAddon",description:"createAddon",sidebar_label:"createAddon",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Addons"],operationId:"createAddon",requestBody:{description:"addonSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}}}},responses:{200:{description:"addonSchema",content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}}}}},description:"createAddon",method:"post",path:"/api/admin/addons",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{id:0,createdAt:"2023-02-14",provider:"string",description:"string",enabled:!0,parameters:{},events:["string"],projects:["string"],environments:["string"]},info:{title:"Unleash API",version:"4.20.5"},postman:{name:"create Addon",description:{type:"text/plain"},url:{path:["api","admin","addons"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,y={unversionedId:"reference/api/unleash/create-addon",id:"reference/api/unleash/create-addon",title:"createAddon",description:"createAddon",source:"@site/docs/reference/api/unleash/create-addon.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-addon",permalink:"/reference/api/unleash/create-addon",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-addon",title:"createAddon",description:"createAddon",sidebar_label:"createAddon",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Addons"],operationId:"createAddon",requestBody:{description:"addonSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}}}},responses:{200:{description:"addonSchema",content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}}}}},description:"createAddon",method:"post",path:"/api/admin/addons",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{id:0,createdAt:"2023-02-14",provider:"string",description:"string",enabled:!0,parameters:{},events:["string"],projects:["string"],environments:["string"]},info:{title:"Unleash API",version:"4.20.5"},postman:{name:"create Addon",description:{type:"text/plain"},url:{path:["api","admin","addons"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getAddons",permalink:"/reference/api/unleash/get-addons"},next:{title:"getAddon",permalink:"/reference/api/unleash/get-addon"}},u={},h=[{value:"createAddon",id:"createaddon",level:2}],g={toc:h};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"createaddon"},"createAddon"),(0,i.kt)("p",null,"createAddon"),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"addonSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"provider",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"parameters"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(p.Z,{collapsible:!1,name:"events",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"environments",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"addonSchema")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"provider",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"parameters"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}}))),(0,i.kt)(p.Z,{collapsible:!1,name:"events",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"environments",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "id": 0,\n  "createdAt": "2023-02-14",\n  "provider": "string",\n  "description": "string",\n  "enabled": true,\n  "parameters": {},\n  "events": [\n    "string"\n  ],\n  "projects": [\n    "string"\n  ],\n  "environments": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);