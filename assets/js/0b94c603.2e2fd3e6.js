"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8032],{74639:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>b,default:()=>g,frontMatter:()=>u,metadata:()=>h,toc:()=>y});var i=t(87462),n=(t(67294),t(3905)),s=t(80334),d=(t(11032),t(46062)),p=t(21439),r=t(9531),l=t(15761),o=t(73418),m=t(92414),c=t(11666);const u={id:"update-feedback",title:"updateFeedback",description:"updateFeedback",sidebar_label:"updateFeedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateFeedback",requestBody:{description:"feedbackSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}},title:"feedbackSchema"}}}},responses:{200:{description:"feedbackSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}},title:"feedbackSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateFeedback",method:"put",path:"/api/admin/feedback/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:0,feedbackId:"string",neverShow:!0,given:"2023-03-28T09:09:03.619Z"},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"update Feedback",description:{type:"text/plain"},url:{path:["api","admin","feedback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},b=void 0,h={unversionedId:"reference/api/unleash/update-feedback",id:"reference/api/unleash/update-feedback",title:"updateFeedback",description:"updateFeedback",source:"@site/docs/reference/api/unleash/update-feedback.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-feedback",permalink:"/reference/api/unleash/update-feedback",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-feedback",title:"updateFeedback",description:"updateFeedback",sidebar_label:"updateFeedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateFeedback",requestBody:{description:"feedbackSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}},title:"feedbackSchema"}}}},responses:{200:{description:"feedbackSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{userId:{type:"number"},feedbackId:{type:"string"},neverShow:{type:"boolean"},given:{type:"string",format:"date-time",nullable:!0}},title:"feedbackSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateFeedback",method:"put",path:"/api/admin/feedback/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:0,feedbackId:"string",neverShow:!0,given:"2023-03-28T09:09:03.619Z"},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"update Feedback",description:{type:"text/plain"},url:{path:["api","admin","feedback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"createFeedback",permalink:"/reference/api/unleash/create-feedback"},next:{title:"updateSplashSettings",permalink:"/reference/api/unleash/update-splash-settings"}},k={},y=[],f={toc:y};function g(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"updateFeedback"),(0,n.kt)(d.Z,{method:"put",path:"/api/admin/feedback/{id}",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"updateFeedback"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"feedbackSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"userId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"given",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"feedbackSchema")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"userId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"given",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "userId": 0,\n  "feedbackId": "string",\n  "neverShow": true,\n  "given": "2023-03-28T09:09:03.751Z"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}g.isMDXComponent=!0}}]);