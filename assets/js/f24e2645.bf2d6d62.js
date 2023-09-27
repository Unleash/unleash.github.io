"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9261],{16102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>h,metadata:()=>y,toc:()=>f});var s=a(87462),r=(a(67294),a(3905)),i=a(80334),o=(a(11032),a(46062)),n=a(57138),p=a(21439),l=(a(9531),a(15761)),m=a(73418),d=a(92414),c=a(11666);const h={id:"create-strategy",title:"Create a strategy",description:"Creates a strategy type based on the supplied data.",sidebar_label:"Create a strategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"createStrategy",description:"Creates a strategy type based on the supplied data.",requestBody:{description:"createStrategySchema",required:!0,content:{"application/json":{schema:{type:"object",description:"The data required to create a strategy type. Refer to the docs on [custom strategy types](https://docs.getunleash.io/reference/custom-activation-strategies) for more information.",required:["name","parameters"],properties:{name:{type:"string",description:"The name of the strategy type. Must be unique.",example:"my-custom-strategy"},title:{type:"string",description:"The title of the strategy",example:"My awesome strategy"},description:{type:"string",description:"A description of the strategy type.",example:"Enable the feature for users who have not logged in before."},editable:{type:"boolean",description:"Whether the strategy type is editable or not. Defaults to `true`.",example:!1},deprecated:{type:"boolean",description:"Whether the strategy type is deprecated or not. Defaults to `false`.",example:!0},parameters:{type:"array",description:"The parameter list lets you pass arguments to your custom activation strategy. These will be made available to your custom strategy implementation.",items:{type:"object",required:["name","type"],properties:{name:{type:"string",description:"The name of the parameter",example:"Rollout percentage"},type:{type:"string",description:"The [type of the parameter](https://docs.getunleash.io/reference/custom-activation-strategies#parameter-types)",enum:["string","percentage","list","number","boolean"],example:"percentage"},description:{type:"string",description:"A description of this strategy parameter. Use this to indicate to the users what the parameter does.",example:"How many percent of users should see this feature?"},required:{type:"boolean",description:"Whether this parameter must be configured when using the strategy. Defaults to `false`",example:!1}}}}},title:"createStrategySchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{description:"The [activation strategy](https://docs.getunleash.io/reference/activation-strategies) schema",type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{title:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},name:{type:"string",description:"The name (type) of the strategy",example:"flexibleRollout"},displayName:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},description:{type:"string",nullable:!0,description:"A short description of the strategy",example:"Gradual rollout to logged in users"},editable:{type:"boolean",description:"Whether the strategy can be edited or not. Strategies bundled with Unleash cannot be edited.",example:!0},deprecated:{type:"boolean",description:"",example:!0},parameters:{type:"array",description:"A list of relevant parameters for each strategy",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string",example:"percentage"},type:{type:"string",example:"percentage"},description:{type:"string",example:"Gradual rollout to logged in users"},required:{type:"boolean",example:!0}}}}},title:"strategySchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NameExistsError",description:"The name of the error kind"},message:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"my-custom-strategy",title:"My awesome strategy",description:"Enable the feature for users who have not logged in before.",editable:!1,deprecated:!0,parameters:[{name:"Rollout percentage",type:"percentage",description:"How many percent of users should see this feature?",required:!1}]},info:{title:"Unleash API",version:"5.5.0"},postman:{name:"Create a strategy",description:{content:"Creates a strategy type based on the supplied data.",type:"text/plain"},url:{path:["api","admin","strategies"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/create-strategy",id:"reference/api/unleash/create-strategy",title:"Create a strategy",description:"Creates a strategy type based on the supplied data.",source:"@site/docs/reference/api/unleash/create-strategy.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-strategy",permalink:"/reference/api/unleash/create-strategy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-strategy",title:"Create a strategy",description:"Creates a strategy type based on the supplied data.",sidebar_label:"Create a strategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"createStrategy",description:"Creates a strategy type based on the supplied data.",requestBody:{description:"createStrategySchema",required:!0,content:{"application/json":{schema:{type:"object",description:"The data required to create a strategy type. Refer to the docs on [custom strategy types](https://docs.getunleash.io/reference/custom-activation-strategies) for more information.",required:["name","parameters"],properties:{name:{type:"string",description:"The name of the strategy type. Must be unique.",example:"my-custom-strategy"},title:{type:"string",description:"The title of the strategy",example:"My awesome strategy"},description:{type:"string",description:"A description of the strategy type.",example:"Enable the feature for users who have not logged in before."},editable:{type:"boolean",description:"Whether the strategy type is editable or not. Defaults to `true`.",example:!1},deprecated:{type:"boolean",description:"Whether the strategy type is deprecated or not. Defaults to `false`.",example:!0},parameters:{type:"array",description:"The parameter list lets you pass arguments to your custom activation strategy. These will be made available to your custom strategy implementation.",items:{type:"object",required:["name","type"],properties:{name:{type:"string",description:"The name of the parameter",example:"Rollout percentage"},type:{type:"string",description:"The [type of the parameter](https://docs.getunleash.io/reference/custom-activation-strategies#parameter-types)",enum:["string","percentage","list","number","boolean"],example:"percentage"},description:{type:"string",description:"A description of this strategy parameter. Use this to indicate to the users what the parameter does.",example:"How many percent of users should see this feature?"},required:{type:"boolean",description:"Whether this parameter must be configured when using the strategy. Defaults to `false`",example:!1}}}}},title:"createStrategySchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{description:"The [activation strategy](https://docs.getunleash.io/reference/activation-strategies) schema",type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{title:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},name:{type:"string",description:"The name (type) of the strategy",example:"flexibleRollout"},displayName:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},description:{type:"string",nullable:!0,description:"A short description of the strategy",example:"Gradual rollout to logged in users"},editable:{type:"boolean",description:"Whether the strategy can be edited or not. Strategies bundled with Unleash cannot be edited.",example:!0},deprecated:{type:"boolean",description:"",example:!0},parameters:{type:"array",description:"A list of relevant parameters for each strategy",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string",example:"percentage"},type:{type:"string",example:"percentage"},description:{type:"string",example:"Gradual rollout to logged in users"},required:{type:"boolean",example:!0}}}}},title:"strategySchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NameExistsError",description:"The name of the error kind"},message:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"my-custom-strategy",title:"My awesome strategy",description:"Enable the feature for users who have not logged in before.",editable:!1,deprecated:!0,parameters:[{name:"Rollout percentage",type:"percentage",description:"How many percent of users should see this feature?",required:!1}]},info:{title:"Unleash API",version:"5.5.0"},postman:{name:"Create a strategy",description:{content:"Creates a strategy type based on the supplied data.",type:"text/plain"},url:{path:["api","admin","strategies"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all strategies",permalink:"/reference/api/unleash/get-all-strategies"},next:{title:"Get a strategy definition",permalink:"/reference/api/unleash/get-strategy"}},g={},f=[{value:"Request",id:"request",level:2}],b={toc:f};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Create a strategy"),(0,r.kt)(o.Z,{method:"post",path:"/api/admin/strategies",mdxType:"MethodEndpoint"}),(0,r.kt)(n.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"Creates a strategy type based on the supplied data."),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,r.kt)("strong",{className:"openapi-schema__required"},"required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"createStrategySchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the strategy type. Must be unique.",example:"my-custom-strategy"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The title of the strategy",example:"My awesome strategy"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A description of the strategy type.",example:"Enable the feature for users who have not logged in before."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"editable",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the strategy type is editable or not. Defaults to `true`.",example:!1},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"deprecated",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the strategy type is deprecated or not. Defaults to `false`.",example:!0},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The parameter list lets you pass arguments to your custom activation strategy. These will be made available to your custom strategy implementation.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the parameter",example:"Rollout percentage"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`string`, `percentage`, `list`, `number`, `boolean`]",schema:{type:"string",description:"The [type of the parameter](https://docs.getunleash.io/reference/custom-activation-strategies#parameter-types)",enum:["string","percentage","list","number","boolean"],example:"percentage"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A description of this strategy parameter. Use this to indicate to the users what the parameter does.",example:"How many percent of users should see this feature?"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"required",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether this parameter must be configured when using the strategy. Defaults to `false`",example:!1},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The resource was successfully created.")),(0,r.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Response Headers")),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",{className:"schemaItem"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"location"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")),(0,r.kt)("div",null,(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The location of the newly created resource.")))))),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name (type) of the strategy",example:"flexibleRollout"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"A short description of the strategy",example:"Gradual rollout to logged in users"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"editable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the strategy can be edited or not. Strategies bundled with Unleash cannot be edited.",example:!0},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"deprecated",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"",example:!0},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"A list of relevant parameters for each strategy")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"percentage"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"percentage"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Gradual rollout to logged in users"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"required",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "title": "GradualRollout - Prod25",\n  "name": "flexibleRollout",\n  "displayName": "Gradual Rollout",\n  "description": "Gradual rollout to logged in users",\n  "editable": true,\n  "deprecated": true,\n  "parameters": [\n    {\n      "name": "percentage",\n      "type": "percentage",\n      "description": "Gradual rollout to logged in users",\n      "required": true\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NameExistsError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NameExistsError",\n  "message": "There is already a feature called \\"my-awesome-feature\\"."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.')),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTypeerror",\n  "message": "We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);