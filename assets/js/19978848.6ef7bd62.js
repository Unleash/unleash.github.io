"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4569],{59437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=a(87462),n=(a(67294),a(3905)),i=a(60961),o=a(48165),s=a(90115),p=(a(58475),a(5428)),c=(a(80487),a(54881),a(11666));const l={id:"change-project",title:"changeProject",description:"changeProject",sidebar_label:"changeProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"changeProject",requestBody:{description:"changeProjectSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["newProjectId"],properties:{newProjectId:{type:"string"}}}}}},responses:{200:{description:"OK"}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],description:"changeProject",method:"post",path:"/api/admin/projects/{projectId}/features/{featureName}/changeProject",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{newProjectId:"string"},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"change Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","changeProject"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},d=void 0,u={unversionedId:"reference/api/unleash/change-project",id:"reference/api/unleash/change-project",title:"changeProject",description:"changeProject",source:"@site/docs/reference/api/unleash/change-project.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/change-project",permalink:"/reference/api/unleash/change-project",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/change-project.api.mdx",tags:[],version:"current",frontMatter:{id:"change-project",title:"changeProject",description:"changeProject",sidebar_label:"changeProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"changeProject",requestBody:{description:"changeProjectSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["newProjectId"],properties:{newProjectId:{type:"string"}}}}}},responses:{200:{description:"OK"}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],description:"changeProject",method:"post",path:"/api/admin/projects/{projectId}/features/{featureName}/changeProject",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{newProjectId:"string"},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"change Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","changeProject"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Features",permalink:"/reference/api/unleash/features"},next:{title:"getAllToggles",permalink:"/reference/api/unleash/get-all-toggles"}},m={},h=[{value:"changeProject",id:"changeproject",level:2}],y={toc:h};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"changeproject"},"changeProject"),(0,n.kt)("p",null,"changeProject"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"changeProjectSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"newProjectId",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null)))))}g.isMDXComponent=!0}}]);