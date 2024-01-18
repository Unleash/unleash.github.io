"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7917],{55691:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>v,frontMatter:()=>u,metadata:()=>h,toc:()=>y});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),r=(a(11032),a(46062)),l=a(57138),o=a(21439),d=(a(9531),a(15761)),p=a(73418),c=a(92414),m=a(30433);const u={id:"get-feedback",title:"Get all feedback events.",description:"Get all feedback events.",sidebar_label:"Get all feedback events.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unstable"],operationId:"getFeedback",responses:{200:{description:"feedbackListSchema",content:{"application/json":{schema:{type:"array",description:"A list of feedback items.",items:{additionalProperties:!1,description:"Schema representing feedback information.",type:"object",required:["id","category","userType","difficultyScore","positive","areasForImprovement","createdAt"],properties:{id:{type:"number",example:123,description:"The unique identifier of the feedback."},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z",description:"The date and time when the feedback was provided."},category:{type:"string",example:"UI/UX",description:"The category of the feedback."},userType:{type:"string",nullable:!0,example:"developer",description:"The type of user providing the feedback."},difficultyScore:{type:"number",nullable:!0,example:5,description:"A score indicating the difficulty experienced by the user."},positive:{type:"string",nullable:!0,example:"Easy to navigate.",description:"This field is for users to mention what they liked."},areasForImprovement:{nullable:!0,type:"string",example:"Slow response time.",description:"Details aspects of the service or product that could benefit from enhancements or modifications. Aids in pinpointing areas needing attention for improvement."}},title:"feedbackSchema"},title:"feedbackListSchema"}}}}},description:"Get all feedback events.",method:"get",path:"/api/admin/feedback",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.8.1"},postman:{name:"Get all feedback events.",description:{content:"Get all feedback events.",type:"text/plain"},url:{path:["api","admin","feedback"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},f=void 0,h={unversionedId:"reference/api/unleash/get-feedback",id:"reference/api/unleash/get-feedback",title:"Get all feedback events.",description:"Get all feedback events.",source:"@site/docs/reference/api/unleash/get-feedback.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-feedback",permalink:"/reference/api/unleash/get-feedback",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-feedback",title:"Get all feedback events.",description:"Get all feedback events.",sidebar_label:"Get all feedback events.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unstable"],operationId:"getFeedback",responses:{200:{description:"feedbackListSchema",content:{"application/json":{schema:{type:"array",description:"A list of feedback items.",items:{additionalProperties:!1,description:"Schema representing feedback information.",type:"object",required:["id","category","userType","difficultyScore","positive","areasForImprovement","createdAt"],properties:{id:{type:"number",example:123,description:"The unique identifier of the feedback."},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z",description:"The date and time when the feedback was provided."},category:{type:"string",example:"UI/UX",description:"The category of the feedback."},userType:{type:"string",nullable:!0,example:"developer",description:"The type of user providing the feedback."},difficultyScore:{type:"number",nullable:!0,example:5,description:"A score indicating the difficulty experienced by the user."},positive:{type:"string",nullable:!0,example:"Easy to navigate.",description:"This field is for users to mention what they liked."},areasForImprovement:{nullable:!0,type:"string",example:"Slow response time.",description:"Details aspects of the service or product that could benefit from enhancements or modifications. Aids in pinpointing areas needing attention for improvement."}},title:"feedbackSchema"},title:"feedbackListSchema"}}}}},description:"Get all feedback events.",method:"get",path:"/api/admin/feedback",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.8.1"},postman:{name:"Get all feedback events.",description:{content:"Get all feedback events.",type:"text/plain"},url:{path:["api","admin","feedback"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get scheduled change requests matching a query.",permalink:"/reference/api/unleash/get-scheduled-change-requests"},next:{title:"Submit user feedback",permalink:"/reference/api/unleash/provide-feedback"}},b={},y=[{value:"Request",id:"request",level:2}],k={toc:y};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get all feedback events."),(0,n.kt)(r.Z,{method:"get",path:"/api/admin/feedback",mdxType:"MethodEndpoint"}),(0,n.kt)(l.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Get all feedback events."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"feedbackListSchema")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:123,description:"The unique identifier of the feedback."},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z",description:"The date and time when the feedback was provided."},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"category",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"UI/UX",description:"The category of the feedback."},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"userType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"developer",description:"The type of user providing the feedback."},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"difficultyScore",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",nullable:!0,example:5,description:"A score indicating the difficulty experienced by the user."},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"positive",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"Easy to navigate.",description:"This field is for users to mention what they liked."},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"areasForImprovement",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{nullable:!0,type:"string",example:"Slow response time.",description:"Details aspects of the service or product that could benefit from enhancements or modifications. Aids in pinpointing areas needing attention for improvement."},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'[\n  {\n    "id": 123,\n    "createdAt": "2022-12-12T12:13:24.218Z",\n    "category": "UI/UX",\n    "userType": "developer",\n    "difficultyScore": 5,\n    "positive": "Easy to navigate.",\n    "areasForImprovement": "Slow response time."\n  }\n]',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);