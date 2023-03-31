"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[850],{61156:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>h,metadata:()=>o,toc:()=>u});var n=t(87462),i=(t(67294),t(3905)),s=t(80334),r=(t(11032),t(46062)),d=(t(21439),t(9531)),c=(t(15761),t(73418),t(92414),t(11666));const h={id:"delete-change",title:"Discards a change from a change request by change id",description:"This endpoint will discard one change from a change request if it matches the provided id.",sidebar_label:"Discards a change from a change request by change id",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will discard one change from a change request if it matches the provided id.",tags:["Unstable"],operationId:"deleteChange",responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"changeRequestId",in:"path",required:!0,schema:{type:"string"}},{name:"eventId",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/projects/{projectId}/change-requests/{changeRequestId}/changes/{eventId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"Discards a change from a change request by change id",description:{content:"This endpoint will discard one change from a change request if it matches the provided id.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":changeRequestId","changes",":eventId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"changeRequestId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"eventId"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},p=void 0,o={unversionedId:"reference/api/unleash/delete-change",id:"reference/api/unleash/delete-change",title:"Discards a change from a change request by change id",description:"This endpoint will discard one change from a change request if it matches the provided id.",source:"@site/docs/reference/api/unleash/delete-change.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/delete-change",permalink:"/reference/api/unleash/delete-change",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-change",title:"Discards a change from a change request by change id",description:"This endpoint will discard one change from a change request if it matches the provided id.",sidebar_label:"Discards a change from a change request by change id",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will discard one change from a change request if it matches the provided id.",tags:["Unstable"],operationId:"deleteChange",responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"changeRequestId",in:"path",required:!0,schema:{type:"string"}},{name:"eventId",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/projects/{projectId}/change-requests/{changeRequestId}/changes/{eventId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"Discards a change from a change request by change id",description:{content:"This endpoint will discard one change from a change request if it matches the provided id.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":changeRequestId","changes",":eventId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"changeRequestId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"eventId"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Deletes a change request by id",permalink:"/reference/api/unleash/delete-change-request"},next:{title:"This endpoint will update the state of a change request",permalink:"/reference/api/unleash/update-change-request-state"}},l={},u=[],m={toc:u};function g(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Discards a change from a change request by change id"),(0,i.kt)(r.Z,{method:"delete",path:"/api/admin/projects/{projectId}/change-requests/{changeRequestId}/changes/{eventId}",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"This endpoint will discard one change from a change request if it matches the provided id."),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"changeRequestId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"eventId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null))))))}g.isMDXComponent=!0}}]);