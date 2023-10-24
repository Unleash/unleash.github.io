"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[24844],{52536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>h,metadata:()=>y,toc:()=>v});var a=n(87462),i=(n(67294),n(3905)),o=n(80334),r=(n(11032),n(46062)),s=n(57138),l=n(21439),m=(n(9531),n(15761)),p=n(73418),c=n(92414),d=n(30433);const h={id:"create-environment",title:"Creates a new environment",description:"Uses the details provided in the payload to create a new environment",sidebar_label:"Creates a new environment",hide_title:!0,hide_table_of_contents:!0,api:{description:"Uses the details provided in the payload to create a new environment",tags:["Environments"],operationId:"createEnvironment",requestBody:{description:"createEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name","type"],description:"Data required to create a new [environment](https://docs.getunleash.io/reference/environments)",properties:{name:{type:"string",description:"The name of the environment. Must be a URL-friendly string according to [RFC 3968, section 2.3](https://www.rfc-editor.org/rfc/rfc3986#section-2.3)",pattern:"^[a-zA-Z0-9~_.-]+$"},type:{type:"string",minLength:1,description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types) you would like to create. Unleash officially recognizes the following values:\n- `development`\n- `test`\n- `preproduction`\n- `production`\n\nIf you pass a string that is not one of the recognized values, Unleash will accept it, but it will carry no special semantics."},enabled:{type:"boolean",description:"Newly created environments are enabled by default. Set this property to `false` to create the environment in a disabled state."},sortOrder:{type:"integer",description:"Defines where in the list of environments to place this environment. The list uses an ascending sort, so lower numbers are shown first. You can change this value later."}},title:"createEnvironmentSchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled","protected","sortOrder"],description:"A definition of the project environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},type:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},protected:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},sortOrder:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},projectCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},apiTokenCount:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},enabledToggleCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"}},title:"environmentSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",type:"string",enabled:!0,sortOrder:0},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Creates a new environment",description:{content:"Uses the details provided in the payload to create a new environment",type:"text/plain"},url:{path:["api","admin","environments"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/create-environment",id:"reference/api/unleash/create-environment",title:"Creates a new environment",description:"Uses the details provided in the payload to create a new environment",source:"@site/docs/reference/api/unleash/create-environment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-environment",permalink:"/reference/api/unleash/create-environment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-environment",title:"Creates a new environment",description:"Uses the details provided in the payload to create a new environment",sidebar_label:"Creates a new environment",hide_title:!0,hide_table_of_contents:!0,api:{description:"Uses the details provided in the payload to create a new environment",tags:["Environments"],operationId:"createEnvironment",requestBody:{description:"createEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name","type"],description:"Data required to create a new [environment](https://docs.getunleash.io/reference/environments)",properties:{name:{type:"string",description:"The name of the environment. Must be a URL-friendly string according to [RFC 3968, section 2.3](https://www.rfc-editor.org/rfc/rfc3986#section-2.3)",pattern:"^[a-zA-Z0-9~_.-]+$"},type:{type:"string",minLength:1,description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types) you would like to create. Unleash officially recognizes the following values:\n- `development`\n- `test`\n- `preproduction`\n- `production`\n\nIf you pass a string that is not one of the recognized values, Unleash will accept it, but it will carry no special semantics."},enabled:{type:"boolean",description:"Newly created environments are enabled by default. Set this property to `false` to create the environment in a disabled state."},sortOrder:{type:"integer",description:"Defines where in the list of environments to place this environment. The list uses an ascending sort, so lower numbers are shown first. You can change this value later."}},title:"createEnvironmentSchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled","protected","sortOrder"],description:"A definition of the project environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},type:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},protected:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},sortOrder:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},projectCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},apiTokenCount:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},enabledToggleCount:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"}},title:"environmentSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",type:"string",enabled:!0,sortOrder:0},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Creates a new environment",description:{content:"Uses the details provided in the payload to create a new environment",type:"text/plain"},url:{path:["api","admin","environments"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Environments",permalink:"/reference/api/unleash/environments"},next:{title:"Get all environments",permalink:"/reference/api/unleash/get-all-environments"}},g={},v=[{value:"Request",id:"request",level:2}],f={toc:v};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Creates a new environment"),(0,i.kt)(r.Z,{method:"post",path:"/api/admin/environments",mdxType:"MethodEndpoint"}),(0,i.kt)(s.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Uses the details provided in the payload to create a new environment"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"createEnvironmentSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[a-zA-Z0-9~_.-]+$`",schema:{type:"string",description:"The name of the environment. Must be a URL-friendly string according to [RFC 3968, section 2.3](https://www.rfc-editor.org/rfc/rfc3986#section-2.3)",pattern:"^[a-zA-Z0-9~_.-]+$"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{type:"string",minLength:1,description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types) you would like to create. Unleash officially recognizes the following values:\n- `development`\n- `test`\n- `preproduction`\n- `production`\n\nIf you pass a string that is not one of the recognized values, Unleash will accept it, but it will carry no special semantics."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Newly created environments are enabled by default. Set this property to `false` to create the environment in a disabled state."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Defines where in the list of environments to place this environment. The list uses an ascending sort, so lower numbers are shown first. You can change this value later."},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The resource was successfully created.")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"location"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null,(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"The location of the newly created resource.")))))),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"my-dev-env",description:"The name of the environment"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"protected",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:3,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"projectCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of projects with this environment"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"apiTokenCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:6,description:"The number of API tokens for the project environment"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"enabledToggleCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",nullable:!0,minimum:0,example:10,description:"The number of enabled toggles for the project environment"},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "name": "my-dev-env",\n  "type": "development",\n  "enabled": true,\n  "protected": true,\n  "sortOrder": 3,\n  "projectCount": 10,\n  "apiTokenCount": 6,\n  "enabledToggleCount": 10\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The request data does not match what we expect.")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);