"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8327],{65022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>v,toc:()=>y});var a=n(87462),r=(n(67294),n(3905)),i=n(60961),o=n(48165),s=n(23380),p=n(58475),l=n(5428),m=n(80487),c=(n(54881),n(11666));const d={id:"get-project-environments",title:"getProjectEnvironments",description:"getProjectEnvironments",sidebar_label:"getProjectEnvironments",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],operationId:"getProjectEnvironments",responses:{200:{description:"environmentsProjectSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","environments"],properties:{version:{type:"integer"},environments:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","type","enabled"],properties:{name:{type:"string"},type:{type:"string"},enabled:{type:"boolean"},protected:{type:"boolean"},sortOrder:{type:"number"},projectApiTokenCount:{type:"number",nullable:!0},projectEnabledToggleCount:{type:"number",nullable:!0}}}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"getProjectEnvironments",method:"get",path:"/api/admin/environments/project/{projectId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Project Environments",description:{type:"text/plain"},url:{path:["api","admin","environments","project",":projectId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},u=void 0,v={unversionedId:"reference/api/unleash/get-project-environments",id:"reference/api/unleash/get-project-environments",title:"getProjectEnvironments",description:"getProjectEnvironments",source:"@site/docs/reference/api/unleash/get-project-environments.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-project-environments",permalink:"/reference/api/unleash/get-project-environments",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-project-environments.api.mdx",tags:[],version:"current",frontMatter:{id:"get-project-environments",title:"getProjectEnvironments",description:"getProjectEnvironments",sidebar_label:"getProjectEnvironments",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],operationId:"getProjectEnvironments",responses:{200:{description:"environmentsProjectSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","environments"],properties:{version:{type:"integer"},environments:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","type","enabled"],properties:{name:{type:"string"},type:{type:"string"},enabled:{type:"boolean"},protected:{type:"boolean"},sortOrder:{type:"number"},projectApiTokenCount:{type:"number",nullable:!0},projectEnabledToggleCount:{type:"number",nullable:!0}}}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"getProjectEnvironments",method:"get",path:"/api/admin/environments/project/{projectId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Project Environments",description:{type:"text/plain"},url:{path:["api","admin","environments","project",":projectId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Clones an environment",permalink:"/reference/api/unleash/clone-environment"},next:{title:"updateSortOrder",permalink:"/reference/api/unleash/update-sort-order"}},h={},y=[{value:"getProjectEnvironments",id:"getprojectenvironments",level:2}],b={toc:y};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getprojectenvironments"},"getProjectEnvironments"),(0,r.kt)("p",null,"getProjectEnvironments"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(s.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"environmentsProjectSchema")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"environments"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"protected",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"projectApiTokenCount",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"projectEnabledToggleCount",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "version": 0,\n  "environments": [\n    {\n      "name": "string",\n      "type": "string",\n      "enabled": true,\n      "protected": true,\n      "sortOrder": 0,\n      "projectApiTokenCount": 0,\n      "projectEnabledToggleCount": 0\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);