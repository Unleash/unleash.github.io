"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6340],{36538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>m,metadata:()=>c,toc:()=>h});var n=a(87462),i=(a(67294),a(3905)),s=a(60961),r=a(48165),o=a(90115),d=(a(58475),a(5428)),p=(a(80487),a(54881),a(11666));const m={id:"add-change-request-comment",title:"This endpoint will add a comment to a change request",description:"This endpoint will add a comment to a change request for the user making the request.",sidebar_label:"This endpoint will add a comment to a change request",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will add a comment to a change request for the user making the request.",tags:["Unstable"],operationId:"addChangeRequestComment",requestBody:{description:"changeRequestAddCommentSchema",required:!0,content:{"application/json":{schema:{additionalProperties:!1,type:"object",required:["text"],properties:{text:{type:"string",example:"This is a comment"}}}}}},responses:{204:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/change-requests/{id}/comments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{text:"This is a comment"},info:{title:"Unleash API",version:"4.22.0-beta.104"},postman:{name:"This endpoint will add a comment to a change request",description:{content:"This endpoint will add a comment to a change request for the user making the request.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":id","comments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},l=void 0,c={unversionedId:"reference/api/unleash/add-change-request-comment",id:"reference/api/unleash/add-change-request-comment",title:"This endpoint will add a comment to a change request",description:"This endpoint will add a comment to a change request for the user making the request.",source:"@site/docs/reference/api/unleash/add-change-request-comment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/add-change-request-comment",permalink:"/reference/api/unleash/add-change-request-comment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-change-request-comment",title:"This endpoint will add a comment to a change request",description:"This endpoint will add a comment to a change request for the user making the request.",sidebar_label:"This endpoint will add a comment to a change request",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will add a comment to a change request for the user making the request.",tags:["Unstable"],operationId:"addChangeRequestComment",requestBody:{description:"changeRequestAddCommentSchema",required:!0,content:{"application/json":{schema:{additionalProperties:!1,type:"object",required:["text"],properties:{text:{type:"string",example:"This is a comment"}}}}}},responses:{204:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/change-requests/{id}/comments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{text:"This is a comment"},info:{title:"Unleash API",version:"4.22.0-beta.104"},postman:{name:"This endpoint will add a comment to a change request",description:{content:"This endpoint will add a comment to a change request for the user making the request.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests",":id","comments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"This endpoint will update the state of a change request",permalink:"/reference/api/unleash/update-change-request-state"},next:{title:"exportFeatures",permalink:"/reference/api/unleash/export-features"}},u={},h=[{value:"This endpoint will add a comment to a change request",id:"this-endpoint-will-add-a-comment-to-a-change-request",level:2}],y={toc:h};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"this-endpoint-will-add-a-comment-to-a-change-request"},"This endpoint will add a comment to a change request"),(0,i.kt)("p",null,"This endpoint will add a comment to a change request for the user making the request."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"changeRequestAddCommentSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"text",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"This is a comment"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null)))))}g.isMDXComponent=!0}}]);