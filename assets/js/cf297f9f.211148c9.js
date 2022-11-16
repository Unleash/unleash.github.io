"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9297],{33803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>h,toc:()=>y});var a=t(87462),i=(t(67294),t(3905)),r=t(60961),o=t(48165),l=t(23380),m=t(58475),s=t(5428),p=t(80487),d=(t(54881),t(11666));const u={id:"get-environment",title:"getEnvironment",description:"getEnvironment",sidebar_label:"getEnvironment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],operationId:"getEnvironment",responses:{200:{description:"environmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled"],properties:{name:{type:"string"},type:{type:"string"},enabled:{type:"boolean"},protected:{type:"boolean"},sortOrder:{type:"number"},projectCount:{type:"number",nullable:!0},apiTokenCount:{type:"number",nullable:!0},enabledToggleCount:{type:"number",nullable:!0}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getEnvironment",method:"get",path:"/api/admin/environments/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Environment",description:{type:"text/plain"},url:{path:["api","admin","environments",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},c=void 0,h={unversionedId:"reference/api/unleash/get-environment",id:"reference/api/unleash/get-environment",title:"getEnvironment",description:"getEnvironment",source:"@site/docs/reference/api/unleash/get-environment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-environment",permalink:"/reference/api/unleash/get-environment",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-environment.api.mdx",tags:[],version:"current",frontMatter:{id:"get-environment",title:"getEnvironment",description:"getEnvironment",sidebar_label:"getEnvironment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],operationId:"getEnvironment",responses:{200:{description:"environmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled"],properties:{name:{type:"string"},type:{type:"string"},enabled:{type:"boolean"},protected:{type:"boolean"},sortOrder:{type:"number"},projectCount:{type:"number",nullable:!0},apiTokenCount:{type:"number",nullable:!0},enabledToggleCount:{type:"number",nullable:!0}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getEnvironment",method:"get",path:"/api/admin/environments/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Environment",description:{type:"text/plain"},url:{path:["api","admin","environments",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Deletes an environment by name",permalink:"/reference/api/unleash/remove-environment"},next:{title:"Clones an environment",permalink:"/reference/api/unleash/clone-environment"}},v={},y=[{value:"getEnvironment",id:"getenvironment",level:2}],b={toc:y};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getenvironment"},"getEnvironment"),(0,i.kt)("p",null,"getEnvironment"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"environmentSchema")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(s.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(s.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(s.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(s.Z,{collapsible:!1,name:"protected",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(s.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(s.Z,{collapsible:!1,name:"projectCount",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(s.Z,{collapsible:!1,name:"apiTokenCount",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(s.Z,{collapsible:!1,name:"enabledToggleCount",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "name": "string",\n  "type": "string",\n  "enabled": true,\n  "protected": true,\n  "sortOrder": 0,\n  "projectCount": 0,\n  "apiTokenCount": 0,\n  "enabledToggleCount": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);