"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1352],{52471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>h,metadata:()=>f,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),o=(a(11032),a(46062)),r=a(57138),p=a(21439),l=(a(9531),a(15761)),m=a(73418),c=a(92414),d=a(11666);const h={id:"get-projects",title:"Get a list of all projects.",description:"This endpoint returns an list of all the projects in the Unleash instance.",sidebar_label:"Get a list of all projects.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjects",description:"This endpoint returns an list of all the projects in the Unleash instance.",responses:{200:{description:"projectsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","projects"],description:"An overview of all the projects in the Unleash instance",properties:{version:{type:"integer"},projects:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","name"],description:"A definition of the project used for projects listing purposes",properties:{id:{type:"string",example:"dx-squad",description:"The id of this project"},name:{type:"string",example:"DX-Squad",description:"The name of this project"},description:{type:"string",nullable:!0,example:"DX squad feature release",description:"Additional information about the project"},health:{type:"number",example:50,description:"An indicator of the [project's health](https://docs.getunleash.io/reference/technical-debt#health-rating) on a scale from 0 to 100"},featureCount:{type:"number",example:10,description:"The number of features this project has"},memberCount:{type:"number",example:4,description:"The number of members this project has"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time",nullable:!0},favorite:{type:"boolean",example:!0,description:"`true` if the project was favorited, otherwise `false`."},mode:{type:"string",enum:["open","protected"],example:"open",description:"The project's [collaboration mode](https://docs.getunleash.io/reference/project-collaboration-mode). Determines whether non-project members can submit change requests or not."},defaultStickiness:{type:"string",example:"userId",description:"A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy"}},title:"projectSchema"},description:"A list of projects in the Unleash instance"}},title:"projectsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"User credentials are valid but does not have enough privileges to execute this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/projects",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Get a list of all projects.",description:{content:"This endpoint returns an list of all the projects in the Unleash instance.",type:"text/plain"},url:{path:["api","admin","projects"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,f={unversionedId:"reference/api/unleash/get-projects",id:"reference/api/unleash/get-projects",title:"Get a list of all projects.",description:"This endpoint returns an list of all the projects in the Unleash instance.",source:"@site/docs/reference/api/unleash/get-projects.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-projects",permalink:"/reference/api/unleash/get-projects",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-projects",title:"Get a list of all projects.",description:"This endpoint returns an list of all the projects in the Unleash instance.",sidebar_label:"Get a list of all projects.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjects",description:"This endpoint returns an list of all the projects in the Unleash instance.",responses:{200:{description:"projectsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","projects"],description:"An overview of all the projects in the Unleash instance",properties:{version:{type:"integer"},projects:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","name"],description:"A definition of the project used for projects listing purposes",properties:{id:{type:"string",example:"dx-squad",description:"The id of this project"},name:{type:"string",example:"DX-Squad",description:"The name of this project"},description:{type:"string",nullable:!0,example:"DX squad feature release",description:"Additional information about the project"},health:{type:"number",example:50,description:"An indicator of the [project's health](https://docs.getunleash.io/reference/technical-debt#health-rating) on a scale from 0 to 100"},featureCount:{type:"number",example:10,description:"The number of features this project has"},memberCount:{type:"number",example:4,description:"The number of members this project has"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time",nullable:!0},favorite:{type:"boolean",example:!0,description:"`true` if the project was favorited, otherwise `false`."},mode:{type:"string",enum:["open","protected"],example:"open",description:"The project's [collaboration mode](https://docs.getunleash.io/reference/project-collaboration-mode). Determines whether non-project members can submit change requests or not."},defaultStickiness:{type:"string",example:"userId",description:"A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy"}},title:"projectSchema"},description:"A list of projects in the Unleash instance"}},title:"projectsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"User credentials are valid but does not have enough privileges to execute this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/projects",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Get a list of all projects.",description:{content:"This endpoint returns an list of all the projects in the Unleash instance.",type:"text/plain"},url:{path:["api","admin","projects"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Projects",permalink:"/reference/api/unleash/projects"},next:{title:"createProject",permalink:"/reference/api/unleash/create-project"}},g={},y=[{value:"Request",id:"request",level:2}],b={toc:y};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Get a list of all projects."),(0,s.kt)(o.Z,{method:"get",path:"/api/admin/projects",mdxType:"MethodEndpoint"}),(0,s.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"This endpoint returns an list of all the projects in the Unleash instance."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"projectsSchema")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"projects"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of projects in the Unleash instance")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"dx-squad",description:"The id of this project"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"DX-Squad",description:"The name of this project"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"DX squad feature release",description:"Additional information about the project"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"health",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:50,description:"An indicator of the [project's health](https://docs.getunleash.io/reference/technical-debt#health-rating) on a scale from 0 to 100"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"featureCount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:10,description:"The number of features this project has"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"memberCount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:4,description:"The number of members this project has"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"favorite",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the project was favorited, otherwise `false`."},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"mode",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`open`, `protected`]",schema:{type:"string",enum:["open","protected"],example:"open",description:"The project's [collaboration mode](https://docs.getunleash.io/reference/project-collaboration-mode). Determines whether non-project members can submit change requests or not."},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"defaultStickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"userId",description:"A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "version": 0,\n  "projects": [\n    {\n      "id": "dx-squad",\n      "name": "DX-Squad",\n      "description": "DX squad feature release",\n      "health": 50,\n      "featureCount": 10,\n      "memberCount": 4,\n      "createdAt": "2023-06-13T00:15:32.924Z",\n      "updatedAt": "2023-06-13T00:15:32.924Z",\n      "favorite": true,\n      "mode": "open",\n      "defaultStickiness": "userId"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"User credentials are valid but does not have enough privileges to execute this operation")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);