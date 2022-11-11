"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8032],{74639:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>b,toc:()=>k});var i=t(87462),d=(t(67294),t(3905)),n=t(60961),s=t(48165),r=t(23380),p=t(58475),l=t(5428),o=t(80487),c=(t(54881),t(11666));const m={id:"update-feedback",title:"updateFeedback",description:"updateFeedback",sidebar_label:"updateFeedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateFeedback",requestBody:{description:"feedbackSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{200:{description:"feedbackSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateFeedback",method:"put",path:"/api/admin/feedback/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:0,feedbackId:"string",neverShow:!0,given:"2022-11-11"},info:{title:"Unleash API",version:"4.17.2"},postman:{name:"update Feedback",description:{type:"text/plain"},url:{path:["api","admin","feedback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api"},u=void 0,b={unversionedId:"reference/api/unleash/update-feedback",id:"reference/api/unleash/update-feedback",title:"updateFeedback",description:"updateFeedback",source:"@site/docs/reference/api/unleash/update-feedback.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-feedback",permalink:"/reference/api/unleash/update-feedback",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/update-feedback.api.mdx",tags:[],version:"current",frontMatter:{id:"update-feedback",title:"updateFeedback",description:"updateFeedback",sidebar_label:"updateFeedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateFeedback",requestBody:{description:"feedbackSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{200:{description:"feedbackSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateFeedback",method:"put",path:"/api/admin/feedback/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:0,feedbackId:"string",neverShow:!0,given:"2022-11-11"},info:{title:"Unleash API",version:"4.17.2"},postman:{name:"update Feedback",description:{type:"text/plain"},url:{path:["api","admin","feedback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"createFeedback",permalink:"/reference/api/unleash/create-feedback"},next:{title:"updateSplashSettings",permalink:"/reference/api/unleash/update-splash-settings"}},h={},k=[{value:"updateFeedback",id:"updatefeedback",level:2}],y={toc:k};function f(e){let{components:a,...t}=e;return(0,d.kt)("wrapper",(0,i.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"updatefeedback"},"updateFeedback"),(0,d.kt)("p",null,"updateFeedback"),(0,d.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,d.kt)("summary",{style:{}},(0,d.kt)("strong",null,"Path Parameters")),(0,d.kt)("div",null,(0,d.kt)("ul",null,(0,d.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,d.kt)(s.Z,{mdxType:"MimeTabs"},(0,d.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,d.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,d.kt)("summary",{style:{textAlign:"left"}},(0,d.kt)("strong",null,"Request Body"),(0,d.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,d.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,d.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,d.kt)("p",null,"feedbackSchema"))),(0,d.kt)("ul",{style:{marginLeft:"1rem"}},(0,d.kt)(l.Z,{collapsible:!1,name:"userId",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,d.kt)(l.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,d.kt)(l.Z,{collapsible:!1,name:"neverShow",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,d.kt)(l.Z,{collapsible:!1,name:"given",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,d.kt)("div",null,(0,d.kt)(n.Z,{mdxType:"ApiTabs"},(0,d.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,d.kt)("div",null,(0,d.kt)("p",null,"feedbackSchema")),(0,d.kt)("div",null,(0,d.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,d.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,d.kt)(o.Z,{mdxType:"SchemaTabs"},(0,d.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,d.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,d.kt)("summary",{style:{textAlign:"left"}},(0,d.kt)("strong",null,"Schema")),(0,d.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,d.kt)("ul",{style:{marginLeft:"1rem"}},(0,d.kt)(l.Z,{collapsible:!1,name:"userId",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,d.kt)(l.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,d.kt)(l.Z,{collapsible:!1,name:"neverShow",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,d.kt)(l.Z,{collapsible:!1,name:"given",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,d.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,d.kt)(p.Z,{responseExample:'{\n  "userId": 0,\n  "feedbackId": "string",\n  "neverShow": true,\n  "given": "2022-11-11"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);