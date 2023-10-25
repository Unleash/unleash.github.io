"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6773],{15195:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>v,frontMatter:()=>h,metadata:()=>y,toc:()=>g});var n=a(87462),o=(a(67294),a(3905)),r=a(80334),i=(a(11032),a(46062)),s=a(57138),p=a(21439),m=(a(9531),a(15761)),d=a(73418),l=a(92414),c=a(30433);const h={id:"update-sort-order",title:"Update environment sort orders",description:"Updates sort orders for the named environments. Environments not specified are unaffected.",sidebar_label:"Update environment sort orders",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],description:"Updates sort orders for the named environments. Environments not specified are unaffected.",operationId:"updateSortOrder",requestBody:{description:"sortOrderSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"A map of object IDs and their corresponding sort orders.",additionalProperties:{type:"integer",description:"Sort order for the object whose ID is the key used for this property.",example:6},title:"sortOrderSchema"}}}},responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},method:"put",path:"/api/admin/environments/sort-order",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{},info:{title:"Unleash API",version:"5.5.6"},postman:{name:"Update environment sort orders",description:{content:"Updates sort orders for the named environments. Environments not specified are unaffected.",type:"text/plain"},url:{path:["api","admin","environments","sort-order"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/update-sort-order",id:"reference/api/unleash/update-sort-order",title:"Update environment sort orders",description:"Updates sort orders for the named environments. Environments not specified are unaffected.",source:"@site/docs/reference/api/unleash/update-sort-order.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-sort-order",permalink:"/reference/api/unleash/update-sort-order",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-sort-order",title:"Update environment sort orders",description:"Updates sort orders for the named environments. Environments not specified are unaffected.",sidebar_label:"Update environment sort orders",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],description:"Updates sort orders for the named environments. Environments not specified are unaffected.",operationId:"updateSortOrder",requestBody:{description:"sortOrderSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"A map of object IDs and their corresponding sort orders.",additionalProperties:{type:"integer",description:"Sort order for the object whose ID is the key used for this property.",example:6},title:"sortOrderSchema"}}}},responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},method:"put",path:"/api/admin/environments/sort-order",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{},info:{title:"Unleash API",version:"5.5.6"},postman:{name:"Update environment sort orders",description:{content:"Updates sort orders for the named environments. Environments not specified are unaffected.",type:"text/plain"},url:{path:["api","admin","environments","sort-order"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get the environments available to a project",permalink:"/reference/api/unleash/get-project-environments"},next:{title:"Toggle the environment with `name` on",permalink:"/reference/api/unleash/toggle-environment-on"}},f={},g=[{value:"Request",id:"request",level:2}],b={toc:g};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{className:"openapi__heading"},"Update environment sort orders"),(0,o.kt)(i.Z,{method:"put",path:"/api/admin/environments/sort-order",mdxType:"MethodEndpoint"}),(0,o.kt)(s.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,o.kt)("p",null,"Updates sort orders for the named environments. Environments not specified are unaffected."),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,o.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,o.kt)("strong",{className:"openapi-schema__required"},"required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,o.kt)("p",null,"sortOrderSchema"))),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{name:"property name*",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Sort order for the object whose ID is the key used for this property.",example:6},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)(r.Z,{mdxType:"ApiTabs"},(0,o.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"This response has no body.")),(0,o.kt)("div",null)),(0,o.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,o.kt)("div",null,(0,o.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,o.kt)("div",null,(0,o.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"The requested resource was not found.")),(0,o.kt)("div",null,(0,o.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);