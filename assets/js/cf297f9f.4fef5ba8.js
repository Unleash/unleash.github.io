"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9297],{33803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>h,toc:()=>b});var i=t(87462),a=(t(67294),t(3905)),r=t(60961),o=t(48165),m=t(90115),l=t(58475),s=t(5428),p=t(80487),d=(t(54881),t(11666));const c={id:"get-environment",title:"getEnvironment",description:"getEnvironment",sidebar_label:"getEnvironment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],operationId:"getEnvironment",responses:{200:{description:"environmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled"],description:"A definition of the project environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},type:{type:"string",example:"development",description:"The type of the environment"},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},protected:{type:"boolean"},sortOrder:{type:"number",example:3,description:"The sort order of the environment in the environments list"},projectCount:{type:"number",nullable:!0,example:10,description:"The number of projects with this environment"},apiTokenCount:{type:"number",nullable:!0,example:6,description:"The number of API tokens for the project environment"},enabledToggleCount:{type:"number",nullable:!0,example:10,description:"The number of enabled toggles for the project environment"}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getEnvironment",method:"get",path:"/api/admin/environments/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get Environment",description:{type:"text/plain"},url:{path:["api","admin","environments",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,h={unversionedId:"reference/api/unleash/get-environment",id:"reference/api/unleash/get-environment",title:"getEnvironment",description:"getEnvironment",source:"@site/docs/reference/api/unleash/get-environment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-environment",permalink:"/reference/api/unleash/get-environment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-environment",title:"getEnvironment",description:"getEnvironment",sidebar_label:"getEnvironment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],operationId:"getEnvironment",responses:{200:{description:"environmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled"],description:"A definition of the project environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},type:{type:"string",example:"development",description:"The type of the environment"},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},protected:{type:"boolean"},sortOrder:{type:"number",example:3,description:"The sort order of the environment in the environments list"},projectCount:{type:"number",nullable:!0,example:10,description:"The number of projects with this environment"},apiTokenCount:{type:"number",nullable:!0,example:6,description:"The number of API tokens for the project environment"},enabledToggleCount:{type:"number",nullable:!0,example:10,description:"The number of enabled toggles for the project environment"}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getEnvironment",method:"get",path:"/api/admin/environments/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get Environment",description:{type:"text/plain"},url:{path:["api","admin","environments",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Deletes an environment by name",permalink:"/reference/api/unleash/remove-environment"},next:{title:"Clones an environment",permalink:"/reference/api/unleash/clone-environment"}},v={},b=[{value:"getEnvironment",id:"getenvironment",level:2}],y={toc:b};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getenvironment"},"getEnvironment"),(0,a.kt)("p",null,"getEnvironment"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(m.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"environmentSchema")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(s.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"my-dev-env",description:"The name of the environment"},mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development",description:"The type of the environment"},mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"protected",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:3,description:"The sort order of the environment in the environments list"},mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"projectCount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",nullable:!0,example:10,description:"The number of projects with this environment"},mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"apiTokenCount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",nullable:!0,example:6,description:"The number of API tokens for the project environment"},mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"enabledToggleCount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",nullable:!0,example:10,description:"The number of enabled toggles for the project environment"},mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "name": "my-dev-env",\n  "type": "development",\n  "enabled": true,\n  "protected": true,\n  "sortOrder": 3,\n  "projectCount": 10,\n  "apiTokenCount": 6,\n  "enabledToggleCount": 10\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);