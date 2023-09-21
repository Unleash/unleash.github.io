"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8032],{74639:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>f,default:()=>T,frontMatter:()=>u,metadata:()=>y,toc:()=>k});var i=t(87462),n=(t(67294),t(3905)),s=t(80334),o=(t(11032),t(46062)),r=t(57138),p=t(21439),d=t(9531),l=t(15761),m=t(73418),c=t(92414),h=t(11666);const u={id:"update-feedback",title:"Update Unleash feedback",description:"Updates the feedback with the provided ID. Only provided fields are updated. Fields left out are left untouched. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",sidebar_label:"Update Unleash feedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateFeedback",description:"Updates the feedback with the provided ID. Only provided fields are updated. Fields left out are left untouched. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",requestBody:{description:"feedbackUpdateSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"User feedback information to be updated.",properties:{userId:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},neverShow:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},given:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"}},title:"feedbackUpdateSchema"}}}},responses:{200:{description:"feedbackResponseSchema",content:{"application/json":{schema:{additionalProperties:!1,type:"object",description:"User feedback information about a particular feedback item.",properties:{userId:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},neverShow:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},given:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"},feedbackId:{description:"The name of the feedback session",type:"string",example:"pnps"}},title:"feedbackResponseSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/feedback/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:2,neverShow:!1,given:"2023-07-06T08:29:21.282Z"},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Update Unleash feedback",description:{content:"Updates the feedback with the provided ID. Only provided fields are updated. Fields left out are left untouched. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",type:"text/plain"},url:{path:["api","admin","feedback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},f=void 0,y={unversionedId:"reference/api/unleash/update-feedback",id:"reference/api/unleash/update-feedback",title:"Update Unleash feedback",description:"Updates the feedback with the provided ID. Only provided fields are updated. Fields left out are left untouched. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",source:"@site/docs/reference/api/unleash/update-feedback.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-feedback",permalink:"/reference/api/unleash/update-feedback",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-feedback",title:"Update Unleash feedback",description:"Updates the feedback with the provided ID. Only provided fields are updated. Fields left out are left untouched. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",sidebar_label:"Update Unleash feedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateFeedback",description:"Updates the feedback with the provided ID. Only provided fields are updated. Fields left out are left untouched. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",requestBody:{description:"feedbackUpdateSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"User feedback information to be updated.",properties:{userId:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},neverShow:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},given:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"}},title:"feedbackUpdateSchema"}}}},responses:{200:{description:"feedbackResponseSchema",content:{"application/json":{schema:{additionalProperties:!1,type:"object",description:"User feedback information about a particular feedback item.",properties:{userId:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},neverShow:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},given:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"},feedbackId:{description:"The name of the feedback session",type:"string",example:"pnps"}},title:"feedbackResponseSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/feedback/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{userId:2,neverShow:!1,given:"2023-07-06T08:29:21.282Z"},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Update Unleash feedback",description:{content:"Updates the feedback with the provided ID. Only provided fields are updated. Fields left out are left untouched. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",type:"text/plain"},url:{path:["api","admin","feedback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Send Unleash feedback",permalink:"/reference/api/unleash/create-feedback"},next:{title:"Update splash settings",permalink:"/reference/api/unleash/update-splash-settings"}},b={},k=[{value:"Request",id:"request",level:2}],g={toc:k};function T(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Update Unleash feedback"),(0,n.kt)(o.Z,{method:"put",path:"/api/admin/feedback/{id}",mdxType:"MethodEndpoint"}),(0,n.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Updates the feedback with the provided ID. Only provided fields are updated. Fields left out are left untouched. Must be called with a token with an identifiable user (either from being sent from the UI or from using a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens"},"PAT"),")."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,n.kt)("strong",{className:"openapi-schema__required"},"required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"feedbackUpdateSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"userId",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"given",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"feedbackResponseSchema")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"userId",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"given",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the feedback session",type:"string",example:"pnps"},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "userId": 2,\n  "neverShow": false,\n  "given": "2023-07-06T08:29:21.282Z",\n  "feedbackId": "pnps"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The request data does not match what we expect.")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.')),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTypeerror",\n  "message": "We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);