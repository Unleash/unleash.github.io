"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3741],{71469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>y,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var n=a(87462),r=(a(67294),a(3905)),i=a(60961),o=a(48165),s=a(90115),p=a(58475),c=a(5428),l=a(80487),u=(a(54881),a(11666));const m={id:"get-project-change-request-config",title:"Retrieves change request configuration for a project",description:"Given a projectId, this endpoint will retrieve change request configuration for the project",sidebar_label:"Retrieves change request configuration for a project",hide_title:!0,hide_table_of_contents:!0,api:{description:"Given a projectId, this endpoint will retrieve change request configuration for the project",tags:["Unstable"],operationId:"getProjectChangeRequestConfig",responses:{200:{description:"changeRequestConfigSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["environment","type","changeRequestEnabled","requiredApprovals"],properties:{environment:{type:"string",example:"development"},type:{type:"string",example:"development"},changeRequestEnabled:{type:"boolean"},requiredApprovals:{type:"number",nullable:!0,example:2}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.104"},postman:{name:"Retrieves change request configuration for a project",description:{content:"Given a projectId, this endpoint will retrieve change request configuration for the project",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests","config"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,h={unversionedId:"reference/api/unleash/get-project-change-request-config",id:"reference/api/unleash/get-project-change-request-config",title:"Retrieves change request configuration for a project",description:"Given a projectId, this endpoint will retrieve change request configuration for the project",source:"@site/docs/reference/api/unleash/get-project-change-request-config.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-project-change-request-config",permalink:"/reference/api/unleash/get-project-change-request-config",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-change-request-config",title:"Retrieves change request configuration for a project",description:"Given a projectId, this endpoint will retrieve change request configuration for the project",sidebar_label:"Retrieves change request configuration for a project",hide_title:!0,hide_table_of_contents:!0,api:{description:"Given a projectId, this endpoint will retrieve change request configuration for the project",tags:["Unstable"],operationId:"getProjectChangeRequestConfig",responses:{200:{description:"changeRequestConfigSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["environment","type","changeRequestEnabled","requiredApprovals"],properties:{environment:{type:"string",example:"development"},type:{type:"string",example:"development"},changeRequestEnabled:{type:"boolean"},requiredApprovals:{type:"number",nullable:!0,example:2}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.104"},postman:{name:"Retrieves change request configuration for a project",description:{content:"Given a projectId, this endpoint will retrieve change request configuration for the project",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests","config"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Retrieves all change requests for an environment in a project",permalink:"/reference/api/unleash/get-change-requests-for-environment"},next:{title:"Updates change request configuration for an environment in the project",permalink:"/reference/api/unleash/update-project-change-request-config"}},g={},f=[{value:"Retrieves change request configuration for a project",id:"retrieves-change-request-configuration-for-a-project",level:2}],v={toc:f};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"retrieves-change-request-configuration-for-a-project"},"Retrieves change request configuration for a project"),(0,r.kt)("p",null,"Given a projectId, this endpoint will retrieve change request configuration for the project"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(s.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"changeRequestConfigSchema")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"changeRequestEnabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"requiredApprovals",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",nullable:!0,example:2},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'[\n  {\n    "environment": "development",\n    "type": "development",\n    "changeRequestEnabled": true,\n    "requiredApprovals": 2\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);