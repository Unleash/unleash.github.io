"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[36545],{86889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>h,metadata:()=>v,toc:()=>g});var i=n(87462),a=(n(67294),n(3905)),o=n(80334),r=(n(11032),n(46062)),s=n(57138),m=n(21439),l=(n(9531),n(15761)),p=n(73418),d=n(92414),c=n(30433);const h={id:"get-all-environments",title:"Get all environments",description:"Retrieves all environments that exist in this Unleash instance.",sidebar_label:"Get all environments",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],description:"Retrieves all environments that exist in this Unleash instance.",operationId:"getAllEnvironments",responses:{200:{description:"environmentsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","environments"],description:"A versioned list of environments",properties:{version:{type:"integer",example:1,description:"Version of the environments schema"},environments:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","type","enabled","protected","sortOrder"],description:"A definition of the project environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},type:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},protected:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},sortOrder:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},projectCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},apiTokenCount:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},enabledToggleCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"}},title:"environmentSchema"},description:"List of environments"}},title:"environmentsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0"},postman:{name:"Get all environments",description:{content:"Retrieves all environments that exist in this Unleash instance.",type:"text/plain"},url:{path:["api","admin","environments"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,v={unversionedId:"reference/api/unleash/get-all-environments",id:"reference/api/unleash/get-all-environments",title:"Get all environments",description:"Retrieves all environments that exist in this Unleash instance.",source:"@site/docs/reference/api/unleash/get-all-environments.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-all-environments",permalink:"/reference/api/unleash/get-all-environments",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-environments",title:"Get all environments",description:"Retrieves all environments that exist in this Unleash instance.",sidebar_label:"Get all environments",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],description:"Retrieves all environments that exist in this Unleash instance.",operationId:"getAllEnvironments",responses:{200:{description:"environmentsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","environments"],description:"A versioned list of environments",properties:{version:{type:"integer",example:1,description:"Version of the environments schema"},environments:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","type","enabled","protected","sortOrder"],description:"A definition of the project environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},type:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},protected:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},sortOrder:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},projectCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},apiTokenCount:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},enabledToggleCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"}},title:"environmentSchema"},description:"List of environments"}},title:"environmentsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0"},postman:{name:"Get all environments",description:{content:"Retrieves all environments that exist in this Unleash instance.",type:"text/plain"},url:{path:["api","admin","environments"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Creates a new environment",permalink:"/reference/api/unleash/create-environment"},next:{title:"Validates if an environment name exists",permalink:"/reference/api/unleash/validate-environment-name"}},y={},g=[{value:"Request",id:"request",level:2}],f={toc:g};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Get all environments"),(0,a.kt)(r.Z,{method:"get",path:"/api/admin/environments",mdxType:"MethodEndpoint"}),(0,a.kt)(s.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,a.kt)("p",null,"Retrieves all environments that exist in this Unleash instance."),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"environmentsSchema")),(0,a.kt)("div",null,(0,a.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:1,description:"Version of the environments schema"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"environments"),(0,a.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,a.kt)("span",{className:"openapi-schema__divider"}),(0,a.kt)("span",{className:"openapi-schema__required"},"required"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"List of environments")),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"my-dev-env",description:"The name of the environment"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"protected",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"projectCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"apiTokenCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"enabledToggleCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "version": 1,\n  "environments": [\n    {\n      "name": "my-dev-env",\n      "type": "development",\n      "enabled": true,\n      "protected": true,\n      "sortOrder": 3,\n      "projectCount": 10,\n      "apiTokenCount": 6,\n      "enabledToggleCount": 10\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,a.kt)("div",null,(0,a.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,a.kt)("div",null,(0,a.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);