"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8090],{96323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>m,metadata:()=>u,toc:()=>v});var o=n(87462),a=(n(67294),n(3905)),r=n(80334),i=(n(11032),n(46062)),s=n(21439),p=n(9531),d=(n(15761),n(73418)),l=(n(92414),n(11666));const m={id:"add-environment-to-project",title:"addEnvironmentToProject",description:"addEnvironmentToProject",sidebar_label:"addEnvironmentToProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"addEnvironmentToProject",requestBody:{description:"projectEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["environment"],properties:{environment:{type:"string"},changeRequestsEnabled:{type:"boolean"}},title:"projectEnvironmentSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"addEnvironmentToProject",method:"post",path:"/api/admin/projects/{projectId}/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{environment:"string",changeRequestsEnabled:!0},info:{title:"Unleash API",version:"4.22.1"},postman:{name:"add Environment To Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,u={unversionedId:"reference/api/unleash/add-environment-to-project",id:"reference/api/unleash/add-environment-to-project",title:"addEnvironmentToProject",description:"addEnvironmentToProject",source:"@site/docs/reference/api/unleash/add-environment-to-project.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/add-environment-to-project",permalink:"/reference/api/unleash/add-environment-to-project",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-environment-to-project",title:"addEnvironmentToProject",description:"addEnvironmentToProject",sidebar_label:"addEnvironmentToProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"addEnvironmentToProject",requestBody:{description:"projectEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["environment"],properties:{environment:{type:"string"},changeRequestsEnabled:{type:"boolean"}},title:"projectEnvironmentSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"addEnvironmentToProject",method:"post",path:"/api/admin/projects/{projectId}/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{environment:"string",changeRequestsEnabled:!0},info:{title:"Unleash API",version:"4.22.1"},postman:{name:"add Environment To Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getProjectSettings",permalink:"/reference/api/unleash/get-project-settings"},next:{title:"removeEnvironmentFromProject",permalink:"/reference/api/unleash/remove-environment-from-project"}},h={},v=[],y={toc:v};function j(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"addEnvironmentToProject"),(0,a.kt)(i.Z,{method:"post",path:"/api/admin/projects/{projectId}/environments",mdxType:"MethodEndpoint"}),(0,a.kt)("p",null,"addEnvironmentToProject"),(0,a.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(s.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,a.kt)("p",null,"projectEnvironmentSchema"))),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"environment",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"changeRequestsEnabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"This response has no body.")),(0,a.kt)("div",null))))))}j.isMDXComponent=!0}}]);