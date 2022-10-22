"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4569],{81579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var r=a(87462),n=(a(67294),a(3905)),i=a(70439),o=a(89402),s=a(10725),c=(a(65860),a(5479)),p=(a(83559),a(48567),a(72905));const d={id:"change-project",title:"changeProject",description:"changeProject",sidebar_label:"changeProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["admin"],operationId:"changeProject",requestBody:{description:"changeProjectSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["newProjectId"],properties:{newProjectId:{type:"string"}}}}}},responses:{200:{description:"OK"}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],description:"changeProject",method:"post",path:"/api/admin/projects/{projectId}/features/{featureName}/changeProject",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{newProjectId:"string"},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"change Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","changeProject"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},l=void 0,m={unversionedId:"reference/api/unleash/change-project",id:"reference/api/unleash/change-project",title:"changeProject",description:"changeProject",source:"@site/docs/reference/api/unleash/change-project.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/change-project",permalink:"/reference/api/unleash/change-project",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/change-project.api.mdx",tags:[],version:"current",frontMatter:{id:"change-project",title:"changeProject",description:"changeProject",sidebar_label:"changeProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["admin"],operationId:"changeProject",requestBody:{description:"changeProjectSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["newProjectId"],properties:{newProjectId:{type:"string"}}}}}},responses:{200:{description:"OK"}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],description:"changeProject",method:"post",path:"/api/admin/projects/{projectId}/features/{featureName}/changeProject",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{newProjectId:"string"},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"change Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","changeProject"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"addAccessToProject",permalink:"/reference/api/unleash/add-access-to-project"},next:{title:"Creates a new environment",permalink:"/reference/api/unleash/create-environment"}},u={},h=[{value:"changeProject",id:"changeproject",level:2}],y={toc:h};function j(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"changeproject"},"changeProject"),(0,n.kt)("p",null,"changeProject"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"changeProjectSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"newProjectId",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null)))))}j.isMDXComponent=!0}}]);