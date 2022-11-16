"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1352],{52471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>m,metadata:()=>u,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),r=a(60961),n=a(48165),o=(a(23380),a(58475)),p=a(5428),l=a(80487),c=(a(54881),a(11666));const m={id:"get-projects",title:"getProjects",description:"getProjects",sidebar_label:"getProjects",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjects",responses:{200:{description:"projectsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","projects"],properties:{version:{type:"integer"},projects:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","name"],properties:{id:{type:"string"},name:{type:"string"},description:{type:"string"},health:{type:"number"},featureCount:{type:"number"},memberCount:{type:"number"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time",nullable:!0},changeRequestsEnabled:{type:"boolean"}}}}}}}}}},description:"getProjects",method:"get",path:"/api/admin/projects",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Projects",description:{type:"text/plain"},url:{path:["api","admin","projects"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},d=void 0,u={unversionedId:"reference/api/unleash/get-projects",id:"reference/api/unleash/get-projects",title:"getProjects",description:"getProjects",source:"@site/docs/reference/api/unleash/get-projects.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-projects",permalink:"/reference/api/unleash/get-projects",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-projects.api.mdx",tags:[],version:"current",frontMatter:{id:"get-projects",title:"getProjects",description:"getProjects",sidebar_label:"getProjects",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjects",responses:{200:{description:"projectsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","projects"],properties:{version:{type:"integer"},projects:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","name"],properties:{id:{type:"string"},name:{type:"string"},description:{type:"string"},health:{type:"number"},featureCount:{type:"number"},memberCount:{type:"number"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time",nullable:!0},changeRequestsEnabled:{type:"boolean"}}}}}}}}}},description:"getProjects",method:"get",path:"/api/admin/projects",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Projects",description:{type:"text/plain"},url:{path:["api","admin","projects"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Projects",permalink:"/reference/api/unleash/projects"},next:{title:"createProject",permalink:"/reference/api/unleash/create-project"}},h={},y=[{value:"getProjects",id:"getprojects",level:2}],g={toc:y};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getprojects"},"getProjects"),(0,s.kt)("p",null,"getProjects"),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"projectsSchema")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"projects"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"health",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"featureCount",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"memberCount",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"changeRequestsEnabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "version": 0,\n  "projects": [\n    {\n      "id": "string",\n      "name": "string",\n      "description": "string",\n      "health": 0,\n      "featureCount": 0,\n      "memberCount": 0,\n      "createdAt": "2022-11-16",\n      "updatedAt": "2022-11-16",\n      "changeRequestsEnabled": true\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);