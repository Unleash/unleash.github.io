"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8090],{96323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var o=n(87462),r=(n(67294),n(3905)),a=n(60961),i=n(48165),s=n(90115),d=(n(58475),n(5428)),p=(n(80487),n(54881),n(11666));const l={id:"add-environment-to-project",title:"addEnvironmentToProject",description:"addEnvironmentToProject",sidebar_label:"addEnvironmentToProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"addEnvironmentToProject",requestBody:{description:"projectEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["environment"],properties:{environment:{type:"string"},changeRequestsEnabled:{type:"boolean"}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"addEnvironmentToProject",method:"post",path:"/api/admin/projects/{projectId}/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{environment:"string",changeRequestsEnabled:!0},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"add Environment To Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},m=void 0,c={unversionedId:"reference/api/unleash/add-environment-to-project",id:"reference/api/unleash/add-environment-to-project",title:"addEnvironmentToProject",description:"addEnvironmentToProject",source:"@site/docs/reference/api/unleash/add-environment-to-project.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/add-environment-to-project",permalink:"/reference/api/unleash/add-environment-to-project",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-environment-to-project",title:"addEnvironmentToProject",description:"addEnvironmentToProject",sidebar_label:"addEnvironmentToProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"addEnvironmentToProject",requestBody:{description:"projectEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["environment"],properties:{environment:{type:"string"},changeRequestsEnabled:{type:"boolean"}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"addEnvironmentToProject",method:"post",path:"/api/admin/projects/{projectId}/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{environment:"string",changeRequestsEnabled:!0},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"add Environment To Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"addAccessToProject",permalink:"/reference/api/unleash/add-access-to-project"},next:{title:"removeEnvironmentFromProject",permalink:"/reference/api/unleash/remove-environment-from-project"}},u={},h=[{value:"addEnvironmentToProject",id:"addenvironmenttoproject",level:2}],v={toc:h};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"addenvironmenttoproject"},"addEnvironmentToProject"),(0,r.kt)("p",null,"addEnvironmentToProject"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(s.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(i.Z,{mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"projectEnvironmentSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"environment",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"changeRequestsEnabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(a.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"This response has no body.")),(0,r.kt)("div",null)))))}y.isMDXComponent=!0}}]);