"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[40413],{44064:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>v,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>y,toc:()=>b});var n=t(87462),i=(t(67294),t(3905)),o=t(80334),s=(t(11032),t(46062)),r=t(57138),m=t(21439),p=(t(9531),t(15761)),l=t(73418),d=t(92414),h=t(30433);const c={id:"validate-environment-name",title:"Validates if an environment name exists",description:"Uses the name provided in the body of the request to validate if the given name exists or not",sidebar_label:"Validates if an environment name exists",hide_title:!0,hide_table_of_contents:!0,api:{description:"Uses the name provided in the body of the request to validate if the given name exists or not",tags:["Environments"],operationId:"validateEnvironmentName",requestBody:{description:"nameSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],description:"An object with a name",properties:{name:{description:"The name of the represented object.",example:"betaUser",type:"string"}},title:"nameSchema"}}}},responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/environments/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"betaUser"},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Validates if an environment name exists",description:{content:"Uses the name provided in the body of the request to validate if the given name exists or not",type:"text/plain"},url:{path:["api","admin","environments","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/validate-environment-name",id:"reference/api/unleash/validate-environment-name",title:"Validates if an environment name exists",description:"Uses the name provided in the body of the request to validate if the given name exists or not",source:"@site/docs/reference/api/unleash/validate-environment-name.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/validate-environment-name",permalink:"/reference/api/unleash/validate-environment-name",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"validate-environment-name",title:"Validates if an environment name exists",description:"Uses the name provided in the body of the request to validate if the given name exists or not",sidebar_label:"Validates if an environment name exists",hide_title:!0,hide_table_of_contents:!0,api:{description:"Uses the name provided in the body of the request to validate if the given name exists or not",tags:["Environments"],operationId:"validateEnvironmentName",requestBody:{description:"nameSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],description:"An object with a name",properties:{name:{description:"The name of the represented object.",example:"betaUser",type:"string"}},title:"nameSchema"}}}},responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/environments/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"betaUser"},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Validates if an environment name exists",description:{content:"Uses the name provided in the body of the request to validate if the given name exists or not",type:"text/plain"},url:{path:["api","admin","environments","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all environments",permalink:"/reference/api/unleash/get-all-environments"},next:{title:"Updates an environment by name",permalink:"/reference/api/unleash/update-environment"}},v={},b=[{value:"Request",id:"request",level:2}],g={toc:b};function f(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Validates if an environment name exists"),(0,i.kt)(s.Z,{method:"post",path:"/api/admin/environments/validate",mdxType:"MethodEndpoint"}),(0,i.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Uses the name provided in the body of the request to validate if the given name exists or not"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)(m.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"nameSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the represented object.",example:"betaUser",type:"string"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null)),(0,i.kt)(h.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The request data does not match what we expect.")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);