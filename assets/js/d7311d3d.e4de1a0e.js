"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4923],{61787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>_,frontMatter:()=>m,metadata:()=>h,toc:()=>j});var r=a(87462),i=(a(67294),a(3905)),p=a(80334),s=(a(11032),a(46062)),n=a(57138),o=a(21439),d=a(9531),l=(a(15761),a(73418)),c=(a(92414),a(11666));const m={id:"update-project",title:"updateProject",description:"updateProject",sidebar_label:"updateProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"updateProject",requestBody:{description:"updateProjectSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"}},title:"updateProjectSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"updateProject",method:"put",path:"/api/admin/projects/{projectId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string"},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"update Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,h={unversionedId:"reference/api/unleash/update-project",id:"reference/api/unleash/update-project",title:"updateProject",description:"updateProject",source:"@site/docs/reference/api/unleash/update-project.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-project",permalink:"/reference/api/unleash/update-project",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-project",title:"updateProject",description:"updateProject",sidebar_label:"updateProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"updateProject",requestBody:{description:"updateProjectSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"}},title:"updateProjectSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"updateProject",method:"put",path:"/api/admin/projects/{projectId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string"},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"update Project",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"validateProject",permalink:"/reference/api/unleash/validate-project"},next:{title:"deleteProject",permalink:"/reference/api/unleash/delete-project"}},y={},j=[{value:"Request",id:"request",level:2}],k={toc:j};function _(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"updateProject"),(0,i.kt)(s.Z,{method:"put",path:"/api/admin/projects/{projectId}",mdxType:"MethodEndpoint"}),(0,i.kt)(n.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"updateProject"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"updateProjectSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(p.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null))))))}_.isMDXComponent=!0}}]);