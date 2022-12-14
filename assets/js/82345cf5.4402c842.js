"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3186],{2226:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var a=i(87462),s=(i(67294),i(3905)),n=i(60961),l=i(48165),r=(i(90115),i(58475)),o=i(5428),d=i(80487),p=(i(54881),i(11666));const c={id:"get-context-fields",title:"getContextFields",description:"getContextFields",sidebar_label:"getContextFields",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],operationId:"getContextFields",responses:{200:{description:"contextFieldsSchema",content:{"application/json":{schema:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},stickiness:{type:"boolean"},sortOrder:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},legalValues:{type:"array",items:{type:"object",additionalProperties:!1,required:["value"],properties:{value:{type:"string"},description:{type:"string"}}}}}}}}}}},description:"getContextFields",method:"get",path:"/api/admin/context",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"get Context Fields",description:{type:"text/plain"},url:{path:["api","admin","context"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},m=void 0,u={unversionedId:"reference/api/unleash/get-context-fields",id:"reference/api/unleash/get-context-fields",title:"getContextFields",description:"getContextFields",source:"@site/docs/reference/api/unleash/get-context-fields.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-context-fields",permalink:"/reference/api/unleash/get-context-fields",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-context-fields.api.mdx",tags:[],version:"current",frontMatter:{id:"get-context-fields",title:"getContextFields",description:"getContextFields",sidebar_label:"getContextFields",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],operationId:"getContextFields",responses:{200:{description:"contextFieldsSchema",content:{"application/json":{schema:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},stickiness:{type:"boolean"},sortOrder:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},legalValues:{type:"array",items:{type:"object",additionalProperties:!1,required:["value"],properties:{value:{type:"string"},description:{type:"string"}}}}}}}}}}},description:"getContextFields",method:"get",path:"/api/admin/context",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"get Context Fields",description:{type:"text/plain"},url:{path:["api","admin","context"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Context",permalink:"/reference/api/unleash/context"},next:{title:"createContextField",permalink:"/reference/api/unleash/create-context-field"}},h={},y=[{value:"getContextFields",id:"getcontextfields",level:2}],g={toc:y};function x(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getcontextfields"},"getContextFields"),(0,s.kt)("p",null,"getContextFields"),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"contextFieldsSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema"),(0,s.kt)("span",{style:{opacity:"0.6"}}," array")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"stickiness",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"legalValues"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'[\n  {\n    "name": "string",\n    "description": "string",\n    "stickiness": true,\n    "sortOrder": 0,\n    "createdAt": "2022-12-14",\n    "legalValues": [\n      {\n        "value": "string",\n        "description": "string"\n      }\n    ]\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);