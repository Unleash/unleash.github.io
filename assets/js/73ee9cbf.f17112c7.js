"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[88906],{19285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>b,frontMatter:()=>u,metadata:()=>y,toc:()=>g});var i=a(87462),o=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),s=a(57138),p=a(21439),m=a(9531),l=a(15761),d=a(73418),c=a(92414),h=a(30433);const u={id:"remove-favorite-project",title:"Remove project from favorites",description:"This endpoint removes the project in the url from favorites",sidebar_label:"Remove project from favorites",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],description:"This endpoint removes the project in the url from favorites",operationId:"removeFavoriteProject",responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/projects/{projectId}/favorites",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0"},postman:{name:"Remove project from favorites",description:{content:"This endpoint removes the project in the url from favorites",type:"text/plain"},url:{path:["api","admin","projects",":projectId","favorites"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},f=void 0,y={unversionedId:"reference/api/unleash/remove-favorite-project",id:"reference/api/unleash/remove-favorite-project",title:"Remove project from favorites",description:"This endpoint removes the project in the url from favorites",source:"@site/docs/reference/api/unleash/remove-favorite-project.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/remove-favorite-project",permalink:"/reference/api/unleash/remove-favorite-project",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"remove-favorite-project",title:"Remove project from favorites",description:"This endpoint removes the project in the url from favorites",sidebar_label:"Remove project from favorites",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],description:"This endpoint removes the project in the url from favorites",operationId:"removeFavoriteProject",responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/projects/{projectId}/favorites",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0"},postman:{name:"Remove project from favorites",description:{content:"This endpoint removes the project in the url from favorites",type:"text/plain"},url:{path:["api","admin","projects",":projectId","favorites"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Add project to favorites",permalink:"/reference/api/unleash/add-favorite-project"},next:{title:"Frontend API",permalink:"/reference/api/unleash/frontend-api"}},v={},g=[{value:"Request",id:"request",level:2}],k={toc:g};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{className:"openapi__heading"},"Remove project from favorites"),(0,o.kt)(n.Z,{method:"delete",path:"/api/admin/projects/{projectId}/favorites",mdxType:"MethodEndpoint"}),(0,o.kt)(s.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,o.kt)("p",null,"This endpoint removes the project in the url from favorites"),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(m.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)(r.Z,{mdxType:"ApiTabs"},(0,o.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"This response has no body.")),(0,o.kt)("div",null)),(0,o.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,o.kt)("div",null,(0,o.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(h.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"The requested resource was not found.")),(0,o.kt)("div",null,(0,o.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);