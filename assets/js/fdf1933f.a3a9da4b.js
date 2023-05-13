"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3741],{71469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>b,frontMatter:()=>h,metadata:()=>f,toc:()=>v});var n=a(87462),r=(a(67294),a(3905)),i=a(80334),o=(a(11032),a(46062)),s=a(57138),p=a(21439),c=a(9531),l=a(15761),m=a(73418),u=a(92414),d=a(11666);const h={id:"get-project-change-request-config",title:"Retrieves change request configuration for a project",description:"Given a projectId, this endpoint will retrieve change request configuration for the project",sidebar_label:"Retrieves change request configuration for a project",hide_title:!0,hide_table_of_contents:!0,api:{description:"Given a projectId, this endpoint will retrieve change request configuration for the project",tags:["Unstable"],operationId:"getProjectChangeRequestConfig",responses:{200:{description:"changeRequestConfigSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["environment","type","changeRequestEnabled","requiredApprovals"],properties:{environment:{type:"string",example:"development"},type:{type:"string",example:"development"},changeRequestEnabled:{type:"boolean"},requiredApprovals:{type:"number",nullable:!0,example:2}},title:"changeRequestEnvironmentConfigSchema"},title:"changeRequestConfigSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.49"},postman:{name:"Retrieves change request configuration for a project",description:{content:"Given a projectId, this endpoint will retrieve change request configuration for the project",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests","config"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,f={unversionedId:"reference/api/unleash/get-project-change-request-config",id:"reference/api/unleash/get-project-change-request-config",title:"Retrieves change request configuration for a project",description:"Given a projectId, this endpoint will retrieve change request configuration for the project",source:"@site/docs/reference/api/unleash/get-project-change-request-config.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-project-change-request-config",permalink:"/reference/api/unleash/get-project-change-request-config",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-change-request-config",title:"Retrieves change request configuration for a project",description:"Given a projectId, this endpoint will retrieve change request configuration for the project",sidebar_label:"Retrieves change request configuration for a project",hide_title:!0,hide_table_of_contents:!0,api:{description:"Given a projectId, this endpoint will retrieve change request configuration for the project",tags:["Unstable"],operationId:"getProjectChangeRequestConfig",responses:{200:{description:"changeRequestConfigSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["environment","type","changeRequestEnabled","requiredApprovals"],properties:{environment:{type:"string",example:"development"},type:{type:"string",example:"development"},changeRequestEnabled:{type:"boolean"},requiredApprovals:{type:"number",nullable:!0,example:2}},title:"changeRequestEnvironmentConfigSchema"},title:"changeRequestConfigSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.49"},postman:{name:"Retrieves change request configuration for a project",description:{content:"Given a projectId, this endpoint will retrieve change request configuration for the project",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests","config"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Create/Add change to a change request",permalink:"/reference/api/unleash/change-request"},next:{title:"Updates change request configuration for an environment in the project",permalink:"/reference/api/unleash/update-project-change-request-config"}},y={},v=[{value:"Request",id:"request",level:2}],q={toc:v};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},q,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Retrieves change request configuration for a project"),(0,r.kt)(o.Z,{method:"get",path:"/api/admin/projects/{projectId}/change-requests/config",mdxType:"MethodEndpoint"}),(0,r.kt)(s.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"Given a projectId, this endpoint will retrieve change request configuration for the project"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(c.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"changeRequestConfigSchema")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"environment",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"changeRequestEnabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"requiredApprovals",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",nullable:!0,example:2},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'[\n  {\n    "environment": "development",\n    "type": "development",\n    "changeRequestEnabled": true,\n    "requiredApprovals": 2\n  }\n]',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);