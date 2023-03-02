"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7974],{18469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>u});var i=a(87462),s=(a(67294),a(3905)),r=a(60961),l=a(48165),n=(a(90115),a(58475)),p=a(5428),m=a(80487),o=(a(54881),a(11666));const d={id:"get-all-strategies",title:"getAllStrategies",description:"getAllStrategies",sidebar_label:"getAllStrategies",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getAllStrategies",responses:{200:{description:"strategiesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","strategies"],properties:{version:{type:"integer"},strategies:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{name:{type:"string"},displayName:{type:"string",nullable:!0},description:{type:"string"},editable:{type:"boolean"},deprecated:{type:"boolean"},parameters:{type:"array",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string"},type:{type:"string"},description:{type:"string"},required:{type:"boolean"}}}}}}}}}}}}},description:"getAllStrategies",method:"get",path:"/api/admin/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get All Strategies",description:{type:"text/plain"},url:{path:["api","admin","strategies"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,g={unversionedId:"reference/api/unleash/get-all-strategies",id:"reference/api/unleash/get-all-strategies",title:"getAllStrategies",description:"getAllStrategies",source:"@site/docs/reference/api/unleash/get-all-strategies.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-all-strategies",permalink:"/reference/api/unleash/get-all-strategies",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-strategies",title:"getAllStrategies",description:"getAllStrategies",sidebar_label:"getAllStrategies",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getAllStrategies",responses:{200:{description:"strategiesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","strategies"],properties:{version:{type:"integer"},strategies:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{name:{type:"string"},displayName:{type:"string",nullable:!0},description:{type:"string"},editable:{type:"boolean"},deprecated:{type:"boolean"},parameters:{type:"array",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string"},type:{type:"string"},description:{type:"string"},required:{type:"boolean"}}}}}}}}}}}}},description:"getAllStrategies",method:"get",path:"/api/admin/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get All Strategies",description:{type:"text/plain"},url:{path:["api","admin","strategies"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all segments",permalink:"/reference/api/unleash/get-segments"},next:{title:"createStrategy",permalink:"/reference/api/unleash/create-strategy"}},y={},u=[{value:"getAllStrategies",id:"getallstrategies",level:2}],h={toc:u};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getallstrategies"},"getAllStrategies"),(0,s.kt)("p",null,"getAllStrategies"),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"strategiesSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"version",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"strategies"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"displayName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"editable",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"deprecated",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"parameters"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"required",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "version": 0,\n  "strategies": [\n    {\n      "name": "string",\n      "displayName": "string",\n      "description": "string",\n      "editable": true,\n      "deprecated": true,\n      "parameters": [\n        {\n          "name": "string",\n          "type": "string",\n          "description": "string",\n          "required": true\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);