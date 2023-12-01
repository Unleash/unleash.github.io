"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[39297],{33803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>k,frontMatter:()=>u,metadata:()=>v,toc:()=>b});var i=n(87462),a=(n(67294),n(3905)),o=n(80334),r=(n(11032),n(46062)),s=n(57138),m=n(21439),p=n(9531),l=n(15761),d=n(73418),c=n(92414),h=n(30433);const u={id:"get-environment",title:"Get the environment with `name`",description:"Retrieves the environment with `name` if it exists in this Unleash instance",sidebar_label:"Get the environment with `name`",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],operationId:"getEnvironment",description:"Retrieves the environment with `name` if it exists in this Unleash instance",responses:{200:{description:"environmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled","protected","sortOrder"],description:"A definition of the project environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},type:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},protected:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},sortOrder:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},projectCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},apiTokenCount:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},enabledToggleCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"}},title:"environmentSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/environments/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Get the environment with `name`",description:{content:"Retrieves the environment with `name` if it exists in this Unleash instance",type:"text/plain"},url:{path:["api","admin","environments",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,v={unversionedId:"reference/api/unleash/get-environment",id:"reference/api/unleash/get-environment",title:"Get the environment with `name`",description:"Retrieves the environment with `name` if it exists in this Unleash instance",source:"@site/docs/reference/api/unleash/get-environment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-environment",permalink:"/reference/api/unleash/get-environment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-environment",title:"Get the environment with `name`",description:"Retrieves the environment with `name` if it exists in this Unleash instance",sidebar_label:"Get the environment with `name`",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],operationId:"getEnvironment",description:"Retrieves the environment with `name` if it exists in this Unleash instance",responses:{200:{description:"environmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled","protected","sortOrder"],description:"A definition of the project environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},type:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},protected:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},sortOrder:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},projectCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},apiTokenCount:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},enabledToggleCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"}},title:"environmentSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/environments/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Get the environment with `name`",description:{content:"Retrieves the environment with `name` if it exists in this Unleash instance",type:"text/plain"},url:{path:["api","admin","environments",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Deletes an environment by name",permalink:"/reference/api/unleash/remove-environment"},next:{title:"Clones an environment",permalink:"/reference/api/unleash/clone-environment"}},g={},b=[{value:"Request",id:"request",level:2}],f={toc:b};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Get the environment with `name`"),(0,a.kt)(r.Z,{method:"get",path:"/api/admin/environments/{name}",mdxType:"MethodEndpoint"}),(0,a.kt)(s.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,a.kt)("p",null,"Retrieves the environment with ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," if it exists in this Unleash instance"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"environmentSchema")),(0,a.kt)("div",null,(0,a.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"my-dev-env",description:"The name of the environment"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"protected",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"sortOrder",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"projectCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"apiTokenCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"enabledToggleCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"},mdxType:"SchemaItem"})))),(0,a.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "name": "my-dev-env",\n  "type": "development",\n  "enabled": true,\n  "protected": true,\n  "sortOrder": 3,\n  "projectCount": 10,\n  "apiTokenCount": 6,\n  "enabledToggleCount": 10\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,a.kt)("div",null,(0,a.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,a.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,a.kt)("div",null,(0,a.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,a.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(h.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The requested resource was not found.")),(0,a.kt)("div",null,(0,a.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,a.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);