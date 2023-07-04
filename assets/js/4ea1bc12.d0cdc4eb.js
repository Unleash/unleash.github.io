"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5732],{86945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>h,metadata:()=>y,toc:()=>k});var s=a(87462),o=(a(67294),a(3905)),i=a(80334),n=(a(11032),a(46062)),r=a(57138),p=a(21439),l=(a(9531),a(15761)),d=a(73418),m=a(92414),c=a(11666);const h={id:"change-password",title:"Changes a user password",description:"Allows users with a valid reset token to reset their password without remembering their old password",sidebar_label:"Changes a user password",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],description:"Allows users with a valid reset token to reset their password without remembering their old password",operationId:"changePassword",requestBody:{description:"changePasswordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["token","password"],description:"Change password as long as the token is a valid token",properties:{token:{description:"A reset token used to validate that the user is allowed to change the password.",type:"string",example:"$2a$15$QzeW/y5/MEppCWVEkoX5euejobYOLSd4We21LQjjKlWH9l2I3wCke"},password:{type:"string",description:"The new password for the user",example:"correct horse battery staple"}},title:"changePasswordSchema"}}}},responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"User credentials are valid but does not have enough privileges to execute this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/auth/reset/password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{token:"$2a$15$QzeW/y5/MEppCWVEkoX5euejobYOLSd4We21LQjjKlWH9l2I3wCke",password:"correct horse battery staple"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Changes a user password",description:{content:"Allows users with a valid reset token to reset their password without remembering their old password",type:"text/plain"},url:{path:["auth","reset","password"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/change-password",id:"reference/api/unleash/change-password",title:"Changes a user password",description:"Allows users with a valid reset token to reset their password without remembering their old password",source:"@site/docs/reference/api/unleash/change-password.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/change-password",permalink:"/reference/api/unleash/change-password",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"change-password",title:"Changes a user password",description:"Allows users with a valid reset token to reset their password without remembering their old password",sidebar_label:"Changes a user password",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],description:"Allows users with a valid reset token to reset their password without remembering their old password",operationId:"changePassword",requestBody:{description:"changePasswordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["token","password"],description:"Change password as long as the token is a valid token",properties:{token:{description:"A reset token used to validate that the user is allowed to change the password.",type:"string",example:"$2a$15$QzeW/y5/MEppCWVEkoX5euejobYOLSd4We21LQjjKlWH9l2I3wCke"},password:{type:"string",description:"The new password for the user",example:"correct horse battery staple"}},title:"changePasswordSchema"}}}},responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"User credentials are valid but does not have enough privileges to execute this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/auth/reset/password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{token:"$2a$15$QzeW/y5/MEppCWVEkoX5euejobYOLSd4We21LQjjKlWH9l2I3wCke",password:"correct horse battery staple"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Changes a user password",description:{content:"Allows users with a valid reset token to reset their password without remembering their old password",type:"text/plain"},url:{path:["auth","reset","password"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Validates a token",permalink:"/reference/api/unleash/validate-token"},next:{title:"Validates password",permalink:"/reference/api/unleash/validate-password"}},g={},k=[{value:"Request",id:"request",level:2}],w={toc:k};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{className:"openapi__heading"},"Changes a user password"),(0,o.kt)(n.Z,{method:"post",path:"/auth/reset/password",mdxType:"MethodEndpoint"}),(0,o.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,o.kt)("p",null,"Allows users with a valid reset token to reset their password without remembering their old password"),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,o.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,o.kt)("strong",{className:"openapi-schema__required"},"required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,o.kt)("p",null,"changePasswordSchema"))),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"token",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"A reset token used to validate that the user is allowed to change the password.",type:"string",example:"$2a$15$QzeW/y5/MEppCWVEkoX5euejobYOLSd4We21LQjjKlWH9l2I3wCke"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"password",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The new password for the user",example:"correct horse battery staple"},mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"This response has no body.")),(0,o.kt)("div",null)),(0,o.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,o.kt)("div",null,(0,o.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"User credentials are valid but does not have enough privileges to execute this operation")),(0,o.kt)("div",null,(0,o.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(c.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.')),(0,o.kt)("div",null,(0,o.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTypeerror",\n  "message": "We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);