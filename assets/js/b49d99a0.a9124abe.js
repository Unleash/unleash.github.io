"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[73148],{89800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>T,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var n=a(87462),i=(a(67294),a(3905)),o=a(80334),r=(a(11032),a(46062)),s=a(57138),p=a(21439),l=a(9531),d=a(15761),m=a(73418),c=a(92414),h=a(30433);const u={id:"delete-project",title:"Delete project",description:"Permanently delete the provided project. All feature toggles in the project must be archived before you can delete it. This permanently deletes the project and its archived toggles. It can not be undone.",sidebar_label:"Delete project",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],description:"Permanently delete the provided project. All feature toggles in the project must be archived before you can delete it. This permanently deletes the project and its archived toggles. It can not be undone.",operationId:"deleteProject",responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/projects/{projectId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Delete project",description:{content:"Permanently delete the provided project. All feature toggles in the project must be archived before you can delete it. This permanently deletes the project and its archived toggles. It can not be undone.",type:"text/plain"},url:{path:["api","admin","projects",":projectId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/delete-project",id:"reference/api/unleash/delete-project",title:"Delete project",description:"Permanently delete the provided project. All feature toggles in the project must be archived before you can delete it. This permanently deletes the project and its archived toggles. It can not be undone.",source:"@site/docs/reference/api/unleash/delete-project.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/delete-project",permalink:"/reference/api/unleash/delete-project",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-project",title:"Delete project",description:"Permanently delete the provided project. All feature toggles in the project must be archived before you can delete it. This permanently deletes the project and its archived toggles. It can not be undone.",sidebar_label:"Delete project",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],description:"Permanently delete the provided project. All feature toggles in the project must be archived before you can delete it. This permanently deletes the project and its archived toggles. It can not be undone.",operationId:"deleteProject",responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/projects/{projectId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Delete project",description:{content:"Permanently delete the provided project. All feature toggles in the project must be archived before you can delete it. This permanently deletes the project and its archived toggles. It can not be undone.",type:"text/plain"},url:{path:["api","admin","projects",":projectId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Update project",permalink:"/reference/api/unleash/update-project"},next:{title:"Get an overview of a project.",permalink:"/reference/api/unleash/get-project-overview"}},b={},f=[{value:"Request",id:"request",level:2}],v={toc:f};function T(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Delete project"),(0,i.kt)(r.Z,{method:"delete",path:"/api/admin/projects/{projectId}",mdxType:"MethodEndpoint"}),(0,i.kt)(s.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Permanently delete the provided project. All feature toggles in the project must be archived before you can delete it. This permanently deletes the project and its archived toggles. It can not be undone."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null)),(0,i.kt)(h.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The request data does not match what we expect.")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);