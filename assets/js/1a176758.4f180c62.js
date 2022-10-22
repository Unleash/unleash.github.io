"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8090],{70749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>m,metadata:()=>c,toc:()=>v});var r=n(87462),o=(n(67294),n(3905)),a=n(70439),i=n(89402),s=n(10725),d=(n(65860),n(5479)),p=(n(83559),n(48567),n(72905));const m={id:"add-environment-to-project",title:"addEnvironmentToProject",description:"addEnvironmentToProject",sidebar_label:"addEnvironmentToProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"addEnvironmentToProject",requestBody:{description:"projectEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["environment"],properties:{environment:{type:"string"}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"addEnvironmentToProject",method:"post",path:"/api/admin/projects/{projectId}/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{environment:"string"},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"add Environment To Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},l=void 0,c={unversionedId:"reference/api/unleash/add-environment-to-project",id:"reference/api/unleash/add-environment-to-project",title:"addEnvironmentToProject",description:"addEnvironmentToProject",source:"@site/docs/reference/api/unleash/add-environment-to-project.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/add-environment-to-project",permalink:"/reference/api/unleash/add-environment-to-project",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/add-environment-to-project.api.mdx",tags:[],version:"current",frontMatter:{id:"add-environment-to-project",title:"addEnvironmentToProject",description:"addEnvironmentToProject",sidebar_label:"addEnvironmentToProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"addEnvironmentToProject",requestBody:{description:"projectEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["environment"],properties:{environment:{type:"string"}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"addEnvironmentToProject",method:"post",path:"/api/admin/projects/{projectId}/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{environment:"string"},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"add Environment To Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getProjectHealthOverview",permalink:"/reference/api/unleash/get-project-health-overview"},next:{title:"removeEnvironmentFromProject",permalink:"/reference/api/unleash/remove-environment-from-project"}},u={},v=[{value:"addEnvironmentToProject",id:"addenvironmenttoproject",level:2}],h={toc:v};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"addenvironmenttoproject"},"addEnvironmentToProject"),(0,o.kt)("p",null,"addEnvironmentToProject"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(s.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)(i.Z,{mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,o.kt)("p",null,"projectEnvironmentSchema"))),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"environment",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(a.Z,{mdxType:"ApiTabs"},(0,o.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"This response has no body.")),(0,o.kt)("div",null)))))}y.isMDXComponent=!0}}]);