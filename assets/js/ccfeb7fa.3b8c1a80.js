"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1100],{97750:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var i=t(87462),r=(t(67294),t(3905)),n=t(60961),d=t(48165),s=(t(90115),t(58475)),o=t(5428),l=t(80487),c=(t(54881),t(11666));const p={id:"create-feedback",title:"createFeedback",description:"createFeedback",sidebar_label:"createFeedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"createFeedback",requestBody:{description:"feedbackSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{200:{description:"feedbackSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}}},description:"createFeedback",method:"post",path:"/api/admin/feedback",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:0,feedbackId:"string",neverShow:!0,given:"2022-12-29"},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"create Feedback",description:{type:"text/plain"},url:{path:["api","admin","feedback"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},m=void 0,u={unversionedId:"reference/api/unleash/create-feedback",id:"reference/api/unleash/create-feedback",title:"createFeedback",description:"createFeedback",source:"@site/docs/reference/api/unleash/create-feedback.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-feedback",permalink:"/reference/api/unleash/create-feedback",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-feedback",title:"createFeedback",description:"createFeedback",sidebar_label:"createFeedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"createFeedback",requestBody:{description:"feedbackSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{200:{description:"feedbackSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}}}}}}},description:"createFeedback",method:"post",path:"/api/admin/feedback",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:0,feedbackId:"string",neverShow:!0,given:"2022-12-29"},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"create Feedback",description:{type:"text/plain"},url:{path:["api","admin","feedback"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"setUiConfig",permalink:"/reference/api/unleash/set-ui-config"},next:{title:"updateFeedback",permalink:"/reference/api/unleash/update-feedback"}},b={},h=[{value:"createFeedback",id:"createfeedback",level:2}],k={toc:h};function f(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"createfeedback"},"createFeedback"),(0,r.kt)("p",null,"createFeedback"),(0,r.kt)(d.Z,{mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"feedbackSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"userId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"feedbackId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"neverShow",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"given",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"feedbackSchema")),(0,r.kt)("div",null,(0,r.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"userId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"feedbackId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"neverShow",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"given",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "userId": 0,\n  "feedbackId": "string",\n  "neverShow": true,\n  "given": "2022-12-29"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);