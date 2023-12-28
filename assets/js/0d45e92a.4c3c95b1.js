"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[60795],{92832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>d,default:()=>y,frontMatter:()=>h,metadata:()=>c,toc:()=>f});var a=t(87462),i=(t(67294),t(3905)),r=t(80334),o=(t(11032),t(46062)),s=t(57138),p=t(21439),l=t(9531),u=(t(15761),t(73418)),m=(t(92414),t(30433));const h={id:"update-project-change-request-config",title:"Updates change request configuration for an environment in the project",description:"This endpoint will change the change request configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed. The minimum number of approvals is 1 and the maximum number is 10. If you provide a number higher than 10 or lower than 1, Unleash will clamp it to the allowed range.",sidebar_label:"Updates change request configuration for an environment in the project",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will change the change request configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed. The minimum number of approvals is 1 and the maximum number is 10. If you provide a number higher than 10 or lower than 1, Unleash will clamp it to the allowed range.",tags:["Change Requests"],operationId:"updateProjectChangeRequestConfig",requestBody:{description:"updateChangeRequestEnvironmentConfigSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data used to update change request in an environment",required:["changeRequestsEnabled"],properties:{changeRequestsEnabled:{type:"boolean",description:"`true` if change requests should be enabled, otherwise `false`."},requiredApprovals:{type:"integer",description:"The number of approvals required before a change request can be applied in this environment.",minimum:0,example:3}},title:"updateChangeRequestEnvironmentConfigSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/environments/{environment}/change-requests/config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{changeRequestsEnabled:!0,requiredApprovals:3},info:{title:"Unleash API",version:"5.6.10"},postman:{name:"Updates change request configuration for an environment in the project",description:{content:"This endpoint will change the change request configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed. The minimum number of approvals is 1 and the maximum number is 10. If you provide a number higher than 10 or lower than 1, Unleash will clamp it to the allowed range.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments",":environment","change-requests","config"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,c={unversionedId:"reference/api/unleash/update-project-change-request-config",id:"reference/api/unleash/update-project-change-request-config",title:"Updates change request configuration for an environment in the project",description:"This endpoint will change the change request configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed. The minimum number of approvals is 1 and the maximum number is 10. If you provide a number higher than 10 or lower than 1, Unleash will clamp it to the allowed range.",source:"@site/docs/reference/api/unleash/update-project-change-request-config.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-project-change-request-config",permalink:"/reference/api/unleash/update-project-change-request-config",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-project-change-request-config",title:"Updates change request configuration for an environment in the project",description:"This endpoint will change the change request configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed. The minimum number of approvals is 1 and the maximum number is 10. If you provide a number higher than 10 or lower than 1, Unleash will clamp it to the allowed range.",sidebar_label:"Updates change request configuration for an environment in the project",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will change the change request configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed. The minimum number of approvals is 1 and the maximum number is 10. If you provide a number higher than 10 or lower than 1, Unleash will clamp it to the allowed range.",tags:["Change Requests"],operationId:"updateProjectChangeRequestConfig",requestBody:{description:"updateChangeRequestEnvironmentConfigSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data used to update change request in an environment",required:["changeRequestsEnabled"],properties:{changeRequestsEnabled:{type:"boolean",description:"`true` if change requests should be enabled, otherwise `false`."},requiredApprovals:{type:"integer",description:"The number of approvals required before a change request can be applied in this environment.",minimum:0,example:3}},title:"updateChangeRequestEnvironmentConfigSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/environments/{environment}/change-requests/config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{changeRequestsEnabled:!0,requiredApprovals:3},info:{title:"Unleash API",version:"5.6.10"},postman:{name:"Updates change request configuration for an environment in the project",description:{content:"This endpoint will change the change request configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed. The minimum number of approvals is 1 and the maximum number is 10. If you provide a number higher than 10 or lower than 1, Unleash will clamp it to the allowed range.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments",":environment","change-requests","config"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Retrieves change request configuration for a project",permalink:"/reference/api/unleash/get-project-change-request-config"},next:{title:"Retrieves pending change requests in configured environments",permalink:"/reference/api/unleash/get-open-change-requests-for-user"}},g={},f=[{value:"Request",id:"request",level:2}],v={toc:f};function y(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Updates change request configuration for an environment in the project"),(0,i.kt)(o.Z,{method:"put",path:"/api/admin/projects/{projectId}/environments/{environment}/change-requests/config",mdxType:"MethodEndpoint"}),(0,i.kt)(s.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"This endpoint will change the change request configuration for a given environment, set it to either on/off and optionally configure the number of approvals needed. The minimum number of approvals is 1 and the maximum number is 10. If you provide a number higher than 10 or lower than 1, Unleash will clamp it to the allowed range."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"environment",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"updateChangeRequestEnvironmentConfigSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"changeRequestsEnabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"`true` if change requests should be enabled, otherwise `false`."},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"requiredApprovals",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The number of approvals required before a change request can be applied in this environment.",minimum:0,example:3},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null))))))}y.isMDXComponent=!0}}]);