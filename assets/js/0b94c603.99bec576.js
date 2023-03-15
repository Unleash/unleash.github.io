"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8032],{74639:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>b,toc:()=>h});var i=t(87462),n=(t(67294),t(3905)),s=t(60961),r=t(48165),d=t(90115),p=t(58475),l=t(5428),o=t(80487),m=(t(54881),t(11666));const c={id:"update-feedback",title:"updateFeedback",description:"updateFeedback",sidebar_label:"updateFeedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateFeedback",requestBody:{description:"feedbackSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{200:{description:"feedbackSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateFeedback",method:"put",path:"/api/admin/feedback/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:0,feedbackId:"string",neverShow:!0,given:"2023-03-15"},info:{title:"Unleash API",version:"4.22.0-beta.43"},postman:{name:"update Feedback",description:{type:"text/plain"},url:{path:["api","admin","feedback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,b={unversionedId:"reference/api/unleash/update-feedback",id:"reference/api/unleash/update-feedback",title:"updateFeedback",description:"updateFeedback",source:"@site/docs/reference/api/unleash/update-feedback.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-feedback",permalink:"/reference/api/unleash/update-feedback",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-feedback",title:"updateFeedback",description:"updateFeedback",sidebar_label:"updateFeedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateFeedback",requestBody:{description:"feedbackSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{200:{description:"feedbackSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateFeedback",method:"put",path:"/api/admin/feedback/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:0,feedbackId:"string",neverShow:!0,given:"2023-03-15"},info:{title:"Unleash API",version:"4.22.0-beta.43"},postman:{name:"update Feedback",description:{type:"text/plain"},url:{path:["api","admin","feedback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"createFeedback",permalink:"/reference/api/unleash/create-feedback"},next:{title:"updateSplashSettings",permalink:"/reference/api/unleash/update-splash-settings"}},y={},h=[{value:"updateFeedback",id:"updatefeedback",level:2}],k={toc:h};function f(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"updatefeedback"},"updateFeedback"),(0,n.kt)("p",null,"updateFeedback"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(r.Z,{mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"feedbackSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"userId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"given",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"feedbackSchema")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"userId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"given",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "userId": 0,\n  "feedbackId": "string",\n  "neverShow": true,\n  "given": "2023-03-15"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);