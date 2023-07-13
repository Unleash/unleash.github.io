"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1100],{97750:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>u,default:()=>g,frontMatter:()=>h,metadata:()=>f,toc:()=>k});var n=t(87462),s=(t(67294),t(3905)),i=t(80334),o=(t(11032),t(46062)),r=t(57138),p=t(21439),d=(t(9531),t(15761)),l=t(73418),m=t(92414),c=t(11666);const h={id:"create-feedback",title:"Send Unleash feedback",description:"Sends feedback gathered from the Unleash UI to the Unleash server. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",sidebar_label:"Send Unleash feedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"createFeedback",description:"Sends feedback gathered from the Unleash UI to the Unleash server. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",requestBody:{description:"feedbackCreateSchema",required:!0,content:{"application/json":{schema:{required:["feedbackId"],type:"object",description:"User feedback information to be created.",properties:{neverShow:{description:"`true` if the user has asked never to see this feedback questionnaire again. Defaults to `false`.",type:"boolean",example:!1},feedbackId:{description:"The name of the feedback session",type:"string",example:"pnps"}},title:"feedbackCreateSchema"}}}},responses:{200:{description:"feedbackResponseSchema",content:{"application/json":{schema:{additionalProperties:!1,type:"object",description:"User feedback information about a particular feedback item.",properties:{userId:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},neverShow:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},given:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"},feedbackId:{description:"The name of the feedback session",type:"string",example:"pnps"}},title:"feedbackResponseSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/feedback",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{neverShow:!1,feedbackId:"pnps"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Send Unleash feedback",description:{content:"Sends feedback gathered from the Unleash UI to the Unleash server. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",type:"text/plain"},url:{path:["api","admin","feedback"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,f={unversionedId:"reference/api/unleash/create-feedback",id:"reference/api/unleash/create-feedback",title:"Send Unleash feedback",description:"Sends feedback gathered from the Unleash UI to the Unleash server. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",source:"@site/docs/reference/api/unleash/create-feedback.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-feedback",permalink:"/reference/api/unleash/create-feedback",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-feedback",title:"Send Unleash feedback",description:"Sends feedback gathered from the Unleash UI to the Unleash server. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",sidebar_label:"Send Unleash feedback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"createFeedback",description:"Sends feedback gathered from the Unleash UI to the Unleash server. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",requestBody:{description:"feedbackCreateSchema",required:!0,content:{"application/json":{schema:{required:["feedbackId"],type:"object",description:"User feedback information to be created.",properties:{neverShow:{description:"`true` if the user has asked never to see this feedback questionnaire again. Defaults to `false`.",type:"boolean",example:!1},feedbackId:{description:"The name of the feedback session",type:"string",example:"pnps"}},title:"feedbackCreateSchema"}}}},responses:{200:{description:"feedbackResponseSchema",content:{"application/json":{schema:{additionalProperties:!1,type:"object",description:"User feedback information about a particular feedback item.",properties:{userId:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},neverShow:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},given:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"},feedbackId:{description:"The name of the feedback session",type:"string",example:"pnps"}},title:"feedbackResponseSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/feedback",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{neverShow:!1,feedbackId:"pnps"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Send Unleash feedback",description:{content:"Sends feedback gathered from the Unleash UI to the Unleash server. Must be called with a token with an identifiable user (either from being sent from the UI or from using a [PAT](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens)).",type:"text/plain"},url:{path:["api","admin","feedback"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"setUiConfig",permalink:"/reference/api/unleash/set-ui-config"},next:{title:"Update Unleash feedback",permalink:"/reference/api/unleash/update-feedback"}},b={},k=[{value:"Request",id:"request",level:2}],y={toc:k};function g(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Send Unleash feedback"),(0,s.kt)(o.Z,{method:"post",path:"/api/admin/feedback",mdxType:"MethodEndpoint"}),(0,s.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Sends feedback gathered from the Unleash UI to the Unleash server. Must be called with a token with an identifiable user (either from being sent from the UI or from using a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens"},"PAT"),")."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"feedbackCreateSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"`true` if the user has asked never to see this feedback questionnaire again. Defaults to `false`.",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"feedbackId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the feedback session",type:"string",example:"pnps"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"feedbackResponseSchema")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"userId",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The ID of the user that gave the feedback.",type:"integer",example:2},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"neverShow",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"`true` if the user has asked never to see this feedback questionnaire again.",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"given",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"When this feedback was given",type:"string",format:"date-time",nullable:!0,example:"2023-07-06T08:29:21.282Z"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"feedbackId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the feedback session",type:"string",example:"pnps"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "userId": 2,\n  "neverShow": false,\n  "given": "2023-07-06T08:29:21.282Z",\n  "feedbackId": "pnps"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.')),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTypeerror",\n  "message": "We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}g.isMDXComponent=!0}}]);