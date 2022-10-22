"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1262],{30851:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>v});var i=a(87462),r=(a(67294),a(3905)),n=a(70439),s=a(89402),d=a(10725),o=a(65860),p=a(5479),l=a(83559),m=(a(48567),a(72905));const c={id:"update-addon",title:"updateAddon",description:"updateAddon",sidebar_label:"updateAddon",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Addons"],operationId:"updateAddon",requestBody:{description:"addonSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}}}},responses:{200:{description:"addonSchema",content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateAddon",method:"put",path:"/api/admin/addons/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{id:0,createdAt:"2022-10-22",provider:"string",description:"string",enabled:!0,parameters:{},events:["string"],projects:["string"],environments:["string"]},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"update Addon",description:{type:"text/plain"},url:{path:["api","admin","addons",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api"},u=void 0,y={unversionedId:"reference/api/unleash/update-addon",id:"reference/api/unleash/update-addon",title:"updateAddon",description:"updateAddon",source:"@site/docs/reference/api/unleash/update-addon.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-addon",permalink:"/reference/api/unleash/update-addon",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/update-addon.api.mdx",tags:[],version:"current",frontMatter:{id:"update-addon",title:"updateAddon",description:"updateAddon",sidebar_label:"updateAddon",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Addons"],operationId:"updateAddon",requestBody:{description:"addonSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}}}},responses:{200:{description:"addonSchema",content:{"application/json":{schema:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateAddon",method:"put",path:"/api/admin/addons/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{id:0,createdAt:"2022-10-22",provider:"string",description:"string",enabled:!0,parameters:{},events:["string"],projects:["string"],environments:["string"]},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"update Addon",description:{type:"text/plain"},url:{path:["api","admin","addons",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getAddon",permalink:"/reference/api/unleash/get-addon"},next:{title:"deleteAddon",permalink:"/reference/api/unleash/delete-addon"}},h={},v=[{value:"updateAddon",id:"updateaddon",level:2}],g={toc:v};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"updateaddon"},"updateAddon"),(0,r.kt)("p",null,"updateAddon"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(s.Z,{mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"addonSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"provider",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"enabled",required:!0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"parameters"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}}))),(0,r.kt)(p.Z,{collapsible:!1,name:"events",required:!0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"projects",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"environments",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"addonSchema")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"provider",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"parameters"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}}))),(0,r.kt)(p.Z,{collapsible:!1,name:"events",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"projects",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"environments",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "id": 0,\n  "createdAt": "2022-10-22",\n  "provider": "string",\n  "description": "string",\n  "enabled": true,\n  "parameters": {},\n  "events": [\n    "string"\n  ],\n  "projects": [\n    "string"\n  ],\n  "environments": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);