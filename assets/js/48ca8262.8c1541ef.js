"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[850],{61156:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var n=t(87462),i=(t(67294),t(3905)),s=t(80334),r=(t(11032),t(46062)),d=t(57138),c=(t(21439),t(9531)),h=(t(15761),t(73418),t(92414),t(11666));const p={id:"delete-change",title:"Discards a change from a change request by change id",description:"This endpoint will discard one change from a change request if it matches the provided id.",sidebar_label:"Discards a change from a change request by change id",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will discard one change from a change request if it matches the provided id.",tags:["Change Requests"],operationId:"deleteChange",responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"changeRequestId",in:"path",required:!0,schema:{type:"string"}},{name:"changeId",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/projects/{projectId}/change-requests/{changeRequestId}/changes/{changeId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.3.0-main"},postman:{name:"Discards a change from a change request by change id",description:{content:"This endpoint will discard one change from a change request if it matches the provided id.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":changeRequestId","changes",":changeId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"changeRequestId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"changeId"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},o=void 0,l={unversionedId:"reference/api/unleash/delete-change",id:"reference/api/unleash/delete-change",title:"Discards a change from a change request by change id",description:"This endpoint will discard one change from a change request if it matches the provided id.",source:"@site/docs/reference/api/unleash/delete-change.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/delete-change",permalink:"/reference/api/unleash/delete-change",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-change",title:"Discards a change from a change request by change id",description:"This endpoint will discard one change from a change request if it matches the provided id.",sidebar_label:"Discards a change from a change request by change id",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will discard one change from a change request if it matches the provided id.",tags:["Change Requests"],operationId:"deleteChange",responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"changeRequestId",in:"path",required:!0,schema:{type:"string"}},{name:"changeId",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/projects/{projectId}/change-requests/{changeRequestId}/changes/{changeId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.3.0-main"},postman:{name:"Discards a change from a change request by change id",description:{content:"This endpoint will discard one change from a change request if it matches the provided id.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":changeRequestId","changes",":changeId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"changeRequestId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"changeId"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Deletes a change request by id",permalink:"/reference/api/unleash/delete-change-request"},next:{title:"Edits a single change in a change request",permalink:"/reference/api/unleash/edit-change"}},u={},m=[{value:"Request",id:"request",level:2}],g={toc:m};function y(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Discards a change from a change request by change id"),(0,i.kt)(r.Z,{method:"delete",path:"/api/admin/projects/{projectId}/change-requests/{changeRequestId}/changes/{changeId}",mdxType:"MethodEndpoint"}),(0,i.kt)(d.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"This endpoint will discard one change from a change request if it matches the provided id."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(c.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(c.Z,{className:"paramsItem",param:{name:"changeRequestId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(c.Z,{className:"paramsItem",param:{name:"changeId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null))))))}y.isMDXComponent=!0}}]);