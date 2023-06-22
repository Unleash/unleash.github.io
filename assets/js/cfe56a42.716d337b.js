"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6340],{36538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>q});var n=a(87462),i=(a(67294),a(3905)),s=a(80334),r=(a(11032),a(46062)),o=a(57138),d=a(21439),m=a(9531),p=(a(15761),a(73418)),l=(a(92414),a(11666));const c={id:"add-change-request-comment",title:"This endpoint will add a comment to a change request",description:"This endpoint will add a comment to a change request for the user making the request.",sidebar_label:"This endpoint will add a comment to a change request",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will add a comment to a change request for the user making the request.",tags:["Unstable"],operationId:"addChangeRequestComment",requestBody:{description:"changeRequestAddCommentSchema",required:!0,content:{"application/json":{schema:{additionalProperties:!1,type:"object",required:["text"],properties:{text:{type:"string",example:"This is a comment"}},title:"changeRequestAddCommentSchema"}}}},responses:{204:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/change-requests/{id}/comments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{text:"This is a comment"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"This endpoint will add a comment to a change request",description:{content:"This endpoint will add a comment to a change request for the user making the request.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":id","comments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,u={unversionedId:"reference/api/unleash/add-change-request-comment",id:"reference/api/unleash/add-change-request-comment",title:"This endpoint will add a comment to a change request",description:"This endpoint will add a comment to a change request for the user making the request.",source:"@site/docs/reference/api/unleash/add-change-request-comment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/add-change-request-comment",permalink:"/reference/api/unleash/add-change-request-comment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-change-request-comment",title:"This endpoint will add a comment to a change request",description:"This endpoint will add a comment to a change request for the user making the request.",sidebar_label:"This endpoint will add a comment to a change request",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will add a comment to a change request for the user making the request.",tags:["Unstable"],operationId:"addChangeRequestComment",requestBody:{description:"changeRequestAddCommentSchema",required:!0,content:{"application/json":{schema:{additionalProperties:!1,type:"object",required:["text"],properties:{text:{type:"string",example:"This is a comment"}},title:"changeRequestAddCommentSchema"}}}},responses:{204:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/change-requests/{id}/comments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{text:"This is a comment"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"This endpoint will add a comment to a change request",description:{content:"This endpoint will add a comment to a change request for the user making the request.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":id","comments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"This endpoint will update the custom title of a change request",permalink:"/reference/api/unleash/update-change-request-title"},next:{title:"exportFeatures",permalink:"/reference/api/unleash/export-features"}},y={},q=[{value:"Request",id:"request",level:2}],g={toc:q};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"This endpoint will add a comment to a change request"),(0,i.kt)(r.Z,{method:"post",path:"/api/admin/projects/{projectId}/change-requests/{id}/comments",mdxType:"MethodEndpoint"}),(0,i.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"This endpoint will add a comment to a change request for the user making the request."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(m.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(m.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(d.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"changeRequestAddCommentSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"text",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"This is a comment"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null))))))}k.isMDXComponent=!0}}]);