"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[795],{92832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>m});var a=t(87462),i=(t(67294),t(3905)),r=t(60961),o=t(48165),s=t(90115),p=(t(58475),t(5428)),c=(t(80487),t(54881),t(11666));const u={id:"update-project-change-request-config",title:"Updates change request configuration for an environment in the project",description:"This endpoint will change the change request             configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed.",sidebar_label:"Updates change request configuration for an environment in the project",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will change the change request             configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed.",tags:["Unstable"],operationId:"updateProjectChangeRequestConfig",requestBody:{description:"updateChangeRequestEnvironmentConfigSchema",required:!0,content:{"application/json":{schema:{additionalProperties:!1,type:"object",required:["changeRequestsEnabled"],properties:{changeRequestsEnabled:{type:"boolean"},requiredApprovals:{type:"number"}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/environments/{environment}/change-requests/config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{changeRequestsEnabled:!0,requiredApprovals:0},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"Updates change request configuration for an environment in the project",description:{content:"This endpoint will change the change request             configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments",":environment","change-requests","config"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api"},d=void 0,l={unversionedId:"reference/api/unleash/update-project-change-request-config",id:"reference/api/unleash/update-project-change-request-config",title:"Updates change request configuration for an environment in the project",description:"This endpoint will change the change request             configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed.",source:"@site/docs/reference/api/unleash/update-project-change-request-config.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-project-change-request-config",permalink:"/reference/api/unleash/update-project-change-request-config",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/update-project-change-request-config.api.mdx",tags:[],version:"current",frontMatter:{id:"update-project-change-request-config",title:"Updates change request configuration for an environment in the project",description:"This endpoint will change the change request             configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed.",sidebar_label:"Updates change request configuration for an environment in the project",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will change the change request             configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed.",tags:["Unstable"],operationId:"updateProjectChangeRequestConfig",requestBody:{description:"updateChangeRequestEnvironmentConfigSchema",required:!0,content:{"application/json":{schema:{additionalProperties:!1,type:"object",required:["changeRequestsEnabled"],properties:{changeRequestsEnabled:{type:"boolean"},requiredApprovals:{type:"number"}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/environments/{environment}/change-requests/config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{changeRequestsEnabled:!0,requiredApprovals:0},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"Updates change request configuration for an environment in the project",description:{content:"This endpoint will change the change request             configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments",":environment","change-requests","config"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Retrieves change request configuration for a project",permalink:"/reference/api/unleash/get-project-change-request-config"},next:{title:"Retrieves pending change requests in configured environments",permalink:"/reference/api/unleash/get-open-change-requests-for-user"}},h={},m=[{value:"Updates change request configuration for an environment in the project",id:"updates-change-request-configuration-for-an-environment-in-the-project",level:2}],g={toc:m};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"updates-change-request-configuration-for-an-environment-in-the-project"},"Updates change request configuration for an environment in the project"),(0,i.kt)("p",null,"This endpoint will change the change request             configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"environment",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"updateChangeRequestEnvironmentConfigSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"changeRequestsEnabled",required:!0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"requiredApprovals",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null)))))}f.isMDXComponent=!0}}]);