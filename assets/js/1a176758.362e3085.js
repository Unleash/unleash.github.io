"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[68090],{96323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>T,frontMatter:()=>u,metadata:()=>g,toc:()=>v});var i=a(87462),s=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),o=a(57138),p=a(21439),l=a(9531),m=a(15761),d=a(73418),c=a(92414),h=a(30433);const u={id:"add-environment-to-project",title:"Add an environment to a project.",description:"This endpoint adds the provided environment to the specified project, with optional support for enabling and disabling change requests for the environment and project.",sidebar_label:"Add an environment to a project.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"addEnvironmentToProject",description:"This endpoint adds the provided environment to the specified project, with optional support for enabling and disabling change requests for the environment and project.",requestBody:{description:"projectEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Add an environment to a project, optionally also sets if change requests are enabled for this environment on the project",required:["environment"],properties:{environment:{type:"string",description:"The environment to add to the project",example:"development"},changeRequestsEnabled:{type:"boolean",description:"Whether change requests should be enabled or for this environment on the project or not",example:!0},defaultStrategy:{description:"A default strategy to create for this environment on the project.",type:"object",required:["name"],properties:{name:{type:"string",description:"The name of the strategy type",example:"flexibleRollout"},title:{type:"string",nullable:!0,description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod"},disabled:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},sortOrder:{type:"number",description:"The order of the strategy in the list",example:9999},constraints:{type:"array",description:"A list of the constraints attached to the strategy. See https://docs.getunleash.io/reference/strategy-constraints",example:[{values:["1","2"],inverted:!1,operator:"IN",contextName:"appName",caseInsensitive:!1}],items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},variants:{type:"array",description:"Strategy level variants",items:{type:"object",description:"This is an experimental property. It may change or be removed as we work on it. Please don't depend on it yet. A strategy variant allows you to attach any data to strategies instead of only returning `true`/`false`. Strategy variants take precedence over feature variants.",required:["name","weight","weightType","stickiness"],properties:{name:{type:"string",description:"The variant name. Must be unique for this feature toggle",example:"blue_group"},weight:{type:"integer",description:"The weight is the likelihood of any one user getting this variant. It is an integer between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to `fix` if this variant must have exactly the weight allocated to it. If the type is `variable`, the weight will adjust so that the total weight of all variants adds up to 1000. Refer to the [variant weight documentation](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight).",type:"string",example:"fix",enum:["variable","fix"]},stickiness:{type:"string",description:"The [stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) to use for distribution of this variant. Stickiness is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",properties:{type:{description:"The type of the value. Commonly used types are string, number, json and csv.",type:"string",enum:["json","csv","string","number"]},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:'{"color": "red"}'}}},title:"createStrategyVariantSchema"}},parameters:{type:"object",description:"A list of parameters for a strategy",additionalProperties:{type:"string"},title:"parametersSchema",example:{groupId:"some_new",rollout:"25",stickiness:"sessionId"}},segments:{type:"array",description:"Ids of segments to use for this strategy",example:[1,2],items:{type:"number"}}},title:"createFeatureStrategySchema"}},title:"projectEnvironmentSchema"}}}},responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NameExistsError",description:"The name of the error kind"},message:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{environment:"development",changeRequestsEnabled:!0,defaultStrategy:{name:"flexibleRollout",title:"Gradual Rollout 25-Prod",disabled:!1,sortOrder:9999,constraints:[{values:["1","2"],inverted:!1,operator:"IN",contextName:"appName",caseInsensitive:!1}],variants:[{name:"blue_group",weight:0,weightType:"fix",stickiness:"custom.context.field",payload:{type:"json",value:'{"color": "red"}'}}],parameters:{groupId:"some_new",rollout:"25",stickiness:"sessionId"},segments:[1,2]}},info:{title:"Unleash API",version:"5.6.0"},postman:{name:"Add an environment to a project.",description:{content:"This endpoint adds the provided environment to the specified project, with optional support for enabling and disabling change requests for the environment and project.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/add-environment-to-project",id:"reference/api/unleash/add-environment-to-project",title:"Add an environment to a project.",description:"This endpoint adds the provided environment to the specified project, with optional support for enabling and disabling change requests for the environment and project.",source:"@site/docs/reference/api/unleash/add-environment-to-project.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/add-environment-to-project",permalink:"/reference/api/unleash/add-environment-to-project",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-environment-to-project",title:"Add an environment to a project.",description:"This endpoint adds the provided environment to the specified project, with optional support for enabling and disabling change requests for the environment and project.",sidebar_label:"Add an environment to a project.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"addEnvironmentToProject",description:"This endpoint adds the provided environment to the specified project, with optional support for enabling and disabling change requests for the environment and project.",requestBody:{description:"projectEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Add an environment to a project, optionally also sets if change requests are enabled for this environment on the project",required:["environment"],properties:{environment:{type:"string",description:"The environment to add to the project",example:"development"},changeRequestsEnabled:{type:"boolean",description:"Whether change requests should be enabled or for this environment on the project or not",example:!0},defaultStrategy:{description:"A default strategy to create for this environment on the project.",type:"object",required:["name"],properties:{name:{type:"string",description:"The name of the strategy type",example:"flexibleRollout"},title:{type:"string",nullable:!0,description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod"},disabled:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},sortOrder:{type:"number",description:"The order of the strategy in the list",example:9999},constraints:{type:"array",description:"A list of the constraints attached to the strategy. See https://docs.getunleash.io/reference/strategy-constraints",example:[{values:["1","2"],inverted:!1,operator:"IN",contextName:"appName",caseInsensitive:!1}],items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},variants:{type:"array",description:"Strategy level variants",items:{type:"object",description:"This is an experimental property. It may change or be removed as we work on it. Please don't depend on it yet. A strategy variant allows you to attach any data to strategies instead of only returning `true`/`false`. Strategy variants take precedence over feature variants.",required:["name","weight","weightType","stickiness"],properties:{name:{type:"string",description:"The variant name. Must be unique for this feature toggle",example:"blue_group"},weight:{type:"integer",description:"The weight is the likelihood of any one user getting this variant. It is an integer between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to `fix` if this variant must have exactly the weight allocated to it. If the type is `variable`, the weight will adjust so that the total weight of all variants adds up to 1000. Refer to the [variant weight documentation](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight).",type:"string",example:"fix",enum:["variable","fix"]},stickiness:{type:"string",description:"The [stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) to use for distribution of this variant. Stickiness is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",properties:{type:{description:"The type of the value. Commonly used types are string, number, json and csv.",type:"string",enum:["json","csv","string","number"]},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:'{"color": "red"}'}}},title:"createStrategyVariantSchema"}},parameters:{type:"object",description:"A list of parameters for a strategy",additionalProperties:{type:"string"},title:"parametersSchema",example:{groupId:"some_new",rollout:"25",stickiness:"sessionId"}},segments:{type:"array",description:"Ids of segments to use for this strategy",example:[1,2],items:{type:"number"}}},title:"createFeatureStrategySchema"}},title:"projectEnvironmentSchema"}}}},responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NameExistsError",description:"The name of the error kind"},message:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/environments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{environment:"development",changeRequestsEnabled:!0,defaultStrategy:{name:"flexibleRollout",title:"Gradual Rollout 25-Prod",disabled:!1,sortOrder:9999,constraints:[{values:["1","2"],inverted:!1,operator:"IN",contextName:"appName",caseInsensitive:!1}],variants:[{name:"blue_group",weight:0,weightType:"fix",stickiness:"custom.context.field",payload:{type:"json",value:'{"color": "red"}'}}],parameters:{groupId:"some_new",rollout:"25",stickiness:"sessionId"},segments:[1,2]}},info:{title:"Unleash API",version:"5.6.0"},postman:{name:"Add an environment to a project.",description:{content:"This endpoint adds the provided environment to the specified project, with optional support for enabling and disabling change requests for the environment and project.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","environments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get an overview project dora metrics.",permalink:"/reference/api/unleash/get-project-dora"},next:{title:"Remove an environment from a project.",permalink:"/reference/api/unleash/remove-environment-from-project"}},f={},v=[{value:"Request",id:"request",level:2}],b={toc:v};function T(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Add an environment to a project."),(0,s.kt)(n.Z,{method:"post",path:"/api/admin/projects/{projectId}/environments",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"This endpoint adds the provided environment to the specified project, with optional support for enabling and disabling change requests for the environment and project."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"projectEnvironmentSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"environment",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The environment to add to the project",example:"development"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"changeRequestsEnabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether change requests should be enabled or for this environment on the project or not",example:!0},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"defaultStrategy"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A default strategy to create for this environment on the project.")),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the strategy type",example:"flexibleRollout"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"disabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The order of the strategy in the list",example:9999},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"constraints"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of the constraints attached to the strategy. See ",(0,s.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/strategy-constraints"},"https://docs.getunleash.io/reference/strategy-constraints"))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",schema:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"inverted",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"variants"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Strategy level variants")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The variant name. Must be unique for this feature toggle",example:"blue_group"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `<= 1000`",schema:{type:"integer",description:"The weight is the likelihood of any one user getting this variant. It is an integer between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"weightType",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`variable`, `fix`]",schema:{description:"Set to `fix` if this variant must have exactly the weight allocated to it. If the type is `variable`, the weight will adjust so that the total weight of all variants adds up to 1000. Refer to the [variant weight documentation](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight).",type:"string",example:"fix",enum:["variable","fix"]},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"stickiness",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The [stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) to use for distribution of this variant. Stickiness is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"payload"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Extra data configured for this variant")),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`json`, `csv`, `string`, `number`]",schema:{description:"The type of the value. Commonly used types are string, number, json and csv.",type:"string",enum:["json","csv","string","number"]},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The actual value of payload",type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of parameters for a strategy")),(0,s.kt)(d.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"segments",required:!1,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",description:"Ids of segments to use for this strategy",example:[1,2],items:{type:"number"}},mdxType:"SchemaItem"})))))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null)),(0,s.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NameExistsError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NameExistsError",\n  "message": "There is already a feature called \\"my-awesome-feature\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);