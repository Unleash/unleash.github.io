"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8032],{74639:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>b,default:()=>v,frontMatter:()=>h,metadata:()=>k,toc:()=>f});var i=t(87462),s=(t(67294),t(3905)),n=t(80334),d=(t(11032),t(46062)),p=t(57138),r=t(21439),l=t(9531),m=t(15761),o=t(73418),c=t(92414),u=t(11666);const h={id:"update-feedback",title:"updateFeedback",description:"updateFeedback",sidebar_label:"updateFeedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateFeedback",requestBody:{description:"feedbackSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}},title:"feedbackSchema"}}}},responses:{200:{description:"feedbackSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}},title:"feedbackSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateFeedback",method:"put",path:"/api/admin/feedback/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:0,feedbackId:"string",neverShow:!0,given:"2023-06-13T00:15:32.824Z"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"update Feedback",description:{type:"text/plain"},url:{path:["api","admin","feedback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},b=void 0,k={unversionedId:"reference/api/unleash/update-feedback",id:"reference/api/unleash/update-feedback",title:"updateFeedback",description:"updateFeedback",source:"@site/docs/reference/api/unleash/update-feedback.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-feedback",permalink:"/reference/api/unleash/update-feedback",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-feedback",title:"updateFeedback",description:"updateFeedback",sidebar_label:"updateFeedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateFeedback",requestBody:{description:"feedbackSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}},title:"feedbackSchema"}}}},responses:{200:{description:"feedbackSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}},title:"feedbackSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateFeedback",method:"put",path:"/api/admin/feedback/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:0,feedbackId:"string",neverShow:!0,given:"2023-06-13T00:15:32.824Z"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"update Feedback",description:{type:"text/plain"},url:{path:["api","admin","feedback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"createFeedback",permalink:"/reference/api/unleash/create-feedback"},next:{title:"updateSplashSettings",permalink:"/reference/api/unleash/update-splash-settings"}},y={},f=[{value:"Request",id:"request",level:2}],g={toc:f};function v(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"updateFeedback"),(0,s.kt)(d.Z,{method:"put",path:"/api/admin/feedback/{id}",mdxType:"MethodEndpoint"}),(0,s.kt)(p.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"updateFeedback"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(r.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"feedbackSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"userId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"given",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"feedbackSchema")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"userId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"given",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"})))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "userId": 0,\n  "feedbackId": "string",\n  "neverShow": true,\n  "given": "2023-06-13T00:15:33.048Z"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);