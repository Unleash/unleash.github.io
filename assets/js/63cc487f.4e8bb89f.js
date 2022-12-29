"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6262],{50555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var n=a(87462),r=(a(67294),a(3905)),s=a(60961),i=a(48165),o=a(90115),p=a(58475),l=a(5428),h=a(80487),d=(a(54881),a(11666));const u={id:"update-change-request-state",title:"This endpoint will update the state of a change request",description:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.",sidebar_label:"This endpoint will update the state of a change request",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.\n\n                    Once a change request has been approved, it can be applied. Once a change request has been applied, it cannot be changed. Once a change request has been cancelled, it cannot be changed. Any change to a change request in the state of Approved will result in the state being set to In Review and the number of approvals will be reset.",tags:["Unstable"],operationId:"updateChangeRequestState",responses:{200:{description:"changeRequestStateSchema",content:{"application/json":{schema:{type:"object",required:["state"],additionalProperties:!1,properties:{state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/change-requests/{id}/state",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"This endpoint will update the state of a change request",description:{content:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.\n\n                    Once a change request has been approved, it can be applied. Once a change request has been applied, it cannot be changed. Once a change request has been cancelled, it cannot be changed. Any change to a change request in the state of Approved will result in the state being set to In Review and the number of approvals will be reset.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":id","state"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"PUT"}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,m={unversionedId:"reference/api/unleash/update-change-request-state",id:"reference/api/unleash/update-change-request-state",title:"This endpoint will update the state of a change request",description:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.",source:"@site/docs/reference/api/unleash/update-change-request-state.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-change-request-state",permalink:"/reference/api/unleash/update-change-request-state",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-change-request-state",title:"This endpoint will update the state of a change request",description:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.",sidebar_label:"This endpoint will update the state of a change request",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.\n\n                    Once a change request has been approved, it can be applied. Once a change request has been applied, it cannot be changed. Once a change request has been cancelled, it cannot be changed. Any change to a change request in the state of Approved will result in the state being set to In Review and the number of approvals will be reset.",tags:["Unstable"],operationId:"updateChangeRequestState",responses:{200:{description:"changeRequestStateSchema",content:{"application/json":{schema:{type:"object",required:["state"],additionalProperties:!1,properties:{state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/change-requests/{id}/state",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"This endpoint will update the state of a change request",description:{content:"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment.\n\n                    Once a change request has been approved, it can be applied. Once a change request has been applied, it cannot be changed. Once a change request has been cancelled, it cannot be changed. Any change to a change request in the state of Approved will result in the state being set to In Review and the number of approvals will be reset.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":id","state"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"PUT"}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Discards a change from a change request by change id",permalink:"/reference/api/unleash/delete-change"},next:{title:"This endpoint will add a comment to a change request",permalink:"/reference/api/unleash/add-change-request-comment"}},g={},b=[{value:"This endpoint will update the state of a change request",id:"this-endpoint-will-update-the-state-of-a-change-request",level:2}],f={toc:b};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"this-endpoint-will-update-the-state-of-a-change-request"},"This endpoint will update the state of a change request"),(0,r.kt)("p",null,"This endpoint will update the state of a change request if the business rules allow it. The state can be one of the following: Draft, In review, Approved, Cancelled, Applied. In order to be approved, the change request must have at least one change and the number of approvals must be greater than or equal to the number of approvals required for the environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                Once a change request has been approved, it can be applied. Once a change request has been applied, it cannot be changed. Once a change request has been cancelled, it cannot be changed. Any change to a change request in the state of Approved will result in the state being set to In Review and the number of approvals will be reset.\n")),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"changeRequestStateSchema")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(h.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"state",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Draft`, `In review`, `Approved`, `Applied`, `Cancelled`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "state": "Draft"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);