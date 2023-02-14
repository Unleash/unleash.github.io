"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5004],{15111:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>y,toc:()=>u});var i=a(87462),s=(a(67294),a(3905)),r=a(60961),n=a(48165),m=(a(90115),a(58475)),p=a(5428),d=a(80487),l=(a(54881),a(11666));const o={id:"get-addons",title:"getAddons",description:"getAddons",sidebar_label:"getAddons",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Addons"],operationId:"getAddons",responses:{200:{description:"addonsSchema",content:{"application/json":{schema:{type:"object",required:["addons","providers"],properties:{addons:{type:"array",items:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}},providers:{type:"array",items:{type:"object",required:["name","displayName","documentationUrl","description"],properties:{name:{type:"string"},displayName:{type:"string"},documentationUrl:{type:"string"},description:{type:"string"},tagTypes:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}}}},parameters:{type:"array",items:{type:"object",required:["name","displayName","type","required","sensitive"],properties:{name:{type:"string"},displayName:{type:"string"},type:{type:"string"},description:{type:"string"},placeholder:{type:"string"},required:{type:"boolean"},sensitive:{type:"boolean"}}}},events:{type:"array",items:{type:"string"}}}}}}}}}}},description:"getAddons",method:"get",path:"/api/admin/addons",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.20.5"},postman:{name:"get Addons",description:{type:"text/plain"},url:{path:["api","admin","addons"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,y={unversionedId:"reference/api/unleash/get-addons",id:"reference/api/unleash/get-addons",title:"getAddons",description:"getAddons",source:"@site/docs/reference/api/unleash/get-addons.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-addons",permalink:"/reference/api/unleash/get-addons",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-addons",title:"getAddons",description:"getAddons",sidebar_label:"getAddons",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Addons"],operationId:"getAddons",responses:{200:{description:"addonsSchema",content:{"application/json":{schema:{type:"object",required:["addons","providers"],properties:{addons:{type:"array",items:{type:"object",required:["provider","enabled","parameters","events"],properties:{id:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},provider:{type:"string"},description:{type:"string"},enabled:{type:"boolean"},parameters:{type:"object",additionalProperties:!0},events:{type:"array",items:{type:"string"}},projects:{type:"array",items:{type:"string"}},environments:{type:"array",items:{type:"string"}}}}},providers:{type:"array",items:{type:"object",required:["name","displayName","documentationUrl","description"],properties:{name:{type:"string"},displayName:{type:"string"},documentationUrl:{type:"string"},description:{type:"string"},tagTypes:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}}}},parameters:{type:"array",items:{type:"object",required:["name","displayName","type","required","sensitive"],properties:{name:{type:"string"},displayName:{type:"string"},type:{type:"string"},description:{type:"string"},placeholder:{type:"string"},required:{type:"boolean"},sensitive:{type:"boolean"}}}},events:{type:"array",items:{type:"string"}}}}}}}}}}},description:"getAddons",method:"get",path:"/api/admin/addons",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.20.5"},postman:{name:"get Addons",description:{type:"text/plain"},url:{path:["api","admin","addons"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Addons",permalink:"/reference/api/unleash/addons"},next:{title:"createAddon",permalink:"/reference/api/unleash/create-addon"}},g={},u=[{value:"getAddons",id:"getaddons",level:2}],h={toc:u};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getaddons"},"getAddons"),(0,s.kt)("p",null,"getAddons"),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"addonsSchema")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"addons"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"provider",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"parameters"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}}))),(0,s.kt)(p.Z,{collapsible:!1,name:"events",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"environments",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"providers"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"displayName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"documentationUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"tagTypes"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"parameters"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"displayName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"placeholder",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"required",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"sensitive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(p.Z,{collapsible:!1,name:"events",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "addons": [\n    {\n      "id": 0,\n      "createdAt": "2023-02-14",\n      "provider": "string",\n      "description": "string",\n      "enabled": true,\n      "parameters": {},\n      "events": [\n        "string"\n      ],\n      "projects": [\n        "string"\n      ],\n      "environments": [\n        "string"\n      ]\n    }\n  ],\n  "providers": [\n    {\n      "name": "string",\n      "displayName": "string",\n      "documentationUrl": "string",\n      "description": "string",\n      "tagTypes": [\n        {\n          "name": "string",\n          "description": "string",\n          "icon": "string"\n        }\n      ],\n      "parameters": [\n        {\n          "name": "string",\n          "displayName": "string",\n          "type": "string",\n          "description": "string",\n          "placeholder": "string",\n          "required": true,\n          "sensitive": true\n        }\n      ],\n      "events": [\n        "string"\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);