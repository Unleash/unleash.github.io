"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[13256],{75029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>k,frontMatter:()=>u,metadata:()=>v,toc:()=>g});var a=n(87462),i=(n(67294),n(3905)),o=n(80334),r=(n(11032),n(46062)),s=n(57138),m=n(21439),p=n(9531),l=n(15761),d=n(73418),c=n(92414),h=n(30433);const u={id:"update-environment",title:"Updates an environment by name",description:"Given an environment by name updates the environment with the given payload. Note that `name`, `enabled` and `protected` cannot be changed by this API",sidebar_label:"Updates an environment by name",hide_title:!0,hide_table_of_contents:!0,api:{description:"Given an environment by name updates the environment with the given payload. Note that `name`, `enabled` and `protected` cannot be changed by this API",tags:["Environments"],operationId:"updateEnvironment",requestBody:{description:"updateEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data used to update an [environment](https://docs.getunleash.io/reference/environments).",properties:{type:{type:"string",description:"Updates the type of environment (i.e. development or production)."},sortOrder:{type:"integer",description:"Changes the sort order of this environment."}},title:"updateEnvironmentSchema"}}}},responses:{200:{description:"environmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled","protected","sortOrder"],description:"A definition of the project environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},type:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},protected:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},sortOrder:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},projectCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},apiTokenCount:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},enabledToggleCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"}},title:"environmentSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/environments/update/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{type:"string",sortOrder:0},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Updates an environment by name",description:{content:"Given an environment by name updates the environment with the given payload. Note that `name`, `enabled` and `protected` cannot be changed by this API",type:"text/plain"},url:{path:["api","admin","environments","update",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,v={unversionedId:"reference/api/unleash/update-environment",id:"reference/api/unleash/update-environment",title:"Updates an environment by name",description:"Given an environment by name updates the environment with the given payload. Note that `name`, `enabled` and `protected` cannot be changed by this API",source:"@site/docs/reference/api/unleash/update-environment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-environment",permalink:"/reference/api/unleash/update-environment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-environment",title:"Updates an environment by name",description:"Given an environment by name updates the environment with the given payload. Note that `name`, `enabled` and `protected` cannot be changed by this API",sidebar_label:"Updates an environment by name",hide_title:!0,hide_table_of_contents:!0,api:{description:"Given an environment by name updates the environment with the given payload. Note that `name`, `enabled` and `protected` cannot be changed by this API",tags:["Environments"],operationId:"updateEnvironment",requestBody:{description:"updateEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data used to update an [environment](https://docs.getunleash.io/reference/environments).",properties:{type:{type:"string",description:"Updates the type of environment (i.e. development or production)."},sortOrder:{type:"integer",description:"Changes the sort order of this environment."}},title:"updateEnvironmentSchema"}}}},responses:{200:{description:"environmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled","protected","sortOrder"],description:"A definition of the project environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},type:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},protected:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},sortOrder:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},projectCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},apiTokenCount:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},enabledToggleCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"}},title:"environmentSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/environments/update/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{type:"string",sortOrder:0},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Updates an environment by name",description:{content:"Given an environment by name updates the environment with the given payload. Note that `name`, `enabled` and `protected` cannot be changed by this API",type:"text/plain"},url:{path:["api","admin","environments","update",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Validates if an environment name exists",permalink:"/reference/api/unleash/validate-environment-name"},next:{title:"Deletes an environment by name",permalink:"/reference/api/unleash/remove-environment"}},b={},g=[{value:"Request",id:"request",level:2}],f={toc:g};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Updates an environment by name"),(0,i.kt)(r.Z,{method:"put",path:"/api/admin/environments/update/{name}",mdxType:"MethodEndpoint"}),(0,i.kt)(s.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Given an environment by name updates the environment with the given payload. Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"protected")," cannot be changed by this API"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(m.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"updateEnvironmentSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Updates the type of environment (i.e. development or production)."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Changes the sort order of this environment."},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"environmentSchema")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"my-dev-env",description:"The name of the environment"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"protected",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"sortOrder",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"projectCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"apiTokenCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"enabledToggleCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"},mdxType:"SchemaItem"})))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "name": "my-dev-env",\n  "type": "development",\n  "enabled": true,\n  "protected": true,\n  "sortOrder": 3,\n  "projectCount": 10,\n  "apiTokenCount": 6,\n  "enabledToggleCount": 10\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The request data does not match what we expect.")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);