"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6262],{50555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>y,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var n=a(87462),s=(a(67294),a(3905)),r=a(80334),i=(a(11032),a(46062)),p=a(57138),o=a(21439),l=a(9531),h=a(15761),d=a(73418),c=a(92414),u=a(11666);const m={id:"update-change-request-state",title:"This endpoint will update the state of a change request",description:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.",sidebar_label:"This endpoint will update the state of a change request",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.\n\n                    Once a change request has been approved, it can be applied. Once a change request has been applied, it cannot be changed. Once a change request has been cancelled, it cannot be changed. Any change to a change request in the state of Approved will result in the state being set to In Review and the number of approvals will be reset.",tags:["Unstable"],operationId:"updateChangeRequestState",responses:{200:{description:"changeRequestStateSchema",content:{"application/json":{schema:{type:"object",required:["state"],additionalProperties:!1,properties:{state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},comment:{type:"string",example:"This is a comment for my change request"}},title:"changeRequestStateSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/change-requests/{id}/state",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.54"},postman:{name:"This endpoint will update the state of a change request",description:{content:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.\n\n                    Once a change request has been approved, it can be applied. Once a change request has been applied, it cannot be changed. Once a change request has been cancelled, it cannot be changed. Any change to a change request in the state of Approved will result in the state being set to In Review and the number of approvals will be reset.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":id","state"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"PUT"}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,b={unversionedId:"reference/api/unleash/update-change-request-state",id:"reference/api/unleash/update-change-request-state",title:"This endpoint will update the state of a change request",description:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.",source:"@site/docs/reference/api/unleash/update-change-request-state.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-change-request-state",permalink:"/reference/api/unleash/update-change-request-state",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-change-request-state",title:"This endpoint will update the state of a change request",description:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.",sidebar_label:"This endpoint will update the state of a change request",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.\n\n                    Once a change request has been approved, it can be applied. Once a change request has been applied, it cannot be changed. Once a change request has been cancelled, it cannot be changed. Any change to a change request in the state of Approved will result in the state being set to In Review and the number of approvals will be reset.",tags:["Unstable"],operationId:"updateChangeRequestState",responses:{200:{description:"changeRequestStateSchema",content:{"application/json":{schema:{type:"object",required:["state"],additionalProperties:!1,properties:{state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},comment:{type:"string",example:"This is a comment for my change request"}},title:"changeRequestStateSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/change-requests/{id}/state",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.54"},postman:{name:"This endpoint will update the state of a change request",description:{content:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.\n\n                    Once a change request has been approved, it can be applied. Once a change request has been applied, it cannot be changed. Once a change request has been cancelled, it cannot be changed. Any change to a change request in the state of Approved will result in the state being set to In Review and the number of approvals will be reset.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":id","state"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"PUT"}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Edits a single change in a change request",permalink:"/reference/api/unleash/edit-change"},next:{title:"This endpoint will update the custom title of a change request",permalink:"/reference/api/unleash/update-change-request-title"}},f={},v=[{value:"Request",id:"request",level:2}],q={toc:v};function y(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},q,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"This endpoint will update the state of a change request"),(0,s.kt)(i.Z,{method:"put",path:"/api/admin/projects/{projectId}/change-requests/{id}/state",mdxType:"MethodEndpoint"}),(0,s.kt)(p.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"                Once a change request has been approved, it can be applied. Once a change request has been applied, it cannot be changed. Once a change request has been cancelled, it cannot be changed. Any change to a change request in the state of Approved will result in the state being set to In Review and the number of approvals will be reset.\n")),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"changeRequestStateSchema")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"state",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`Draft`, `In review`, `Approved`, `Applied`, `Cancelled`]",schema:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"comment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"This is a comment for my change request"},mdxType:"SchemaItem"})))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(h.Z,{responseExample:'{\n  "state": "Draft",\n  "comment": "This is a comment for my change request"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}y.isMDXComponent=!0}}]);