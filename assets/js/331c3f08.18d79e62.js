"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8327],{65022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>T,frontMatter:()=>u,metadata:()=>f,toc:()=>v});var n=a(87462),r=(a(67294),a(3905)),i=a(80334),o=(a(11032),a(46062)),s=a(57138),p=a(21439),l=a(9531),m=a(15761),c=a(73418),d=a(92414),h=a(11666);const u={id:"get-project-environments",title:"Get the environments available to a project",description:"Gets the environments that are available for this project. An environment is available for a project if enabled in the [project configuration](https://docs.getunleash.io/reference/environments#step-1-enable-new-environments-for-your-project)",sidebar_label:"Get the environments available to a project",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],operationId:"getProjectEnvironments",description:"Gets the environments that are available for this project. An environment is available for a project if enabled in the [project configuration](https://docs.getunleash.io/reference/environments#step-1-enable-new-environments-for-your-project)",responses:{200:{description:"environmentsProjectSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","environments"],description:"Environments defined for a given project",properties:{version:{type:"integer"},environments:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","type","enabled","protected","sortOrder"],description:"Describes a project's configuration in a given environment.",properties:{name:{type:"string",example:"development",description:"The name of the environment"},type:{type:"string",example:"production",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`"},protected:{type:"boolean",example:!1,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},sortOrder:{type:"integer",example:1,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear"},projectApiTokenCount:{type:"integer",minimum:0,example:5,description:"The number of client and front-end API tokens that have access to this project"},projectEnabledToggleCount:{type:"integer",minimum:0,example:7,description:"The number of features enabled in this environment for this project"},defaultStrategy:{description:"The strategy configuration to add when enabling a feature environment by default",type:"object",required:["name"],properties:{name:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},title:{type:"string",nullable:!0,description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod"},disabled:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},sortOrder:{type:"number",description:"The order of the strategy in the list",example:9999},constraints:{type:"array",description:"A list of the constraints attached to the strategy",example:[{values:["1","2"],inverted:!1,operator:"IN",contextName:"appName",caseInsensitive:!1}],items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},parameters:{type:"object",additionalProperties:{type:"string"},title:"parametersSchema",description:"An object containing the parameters for the strategy",example:{groupId:"some_new",rollout:"25",stickiness:"sessionId"}},segments:{type:"array",description:"Ids of segments to use for this strategy",example:[1,2],items:{type:"number"}}},title:"createFeatureStrategySchema"}},title:"environmentProjectSchema"}}},title:"environmentsProjectSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/environments/project/{projectId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Get the environments available to a project",description:{content:"Gets the environments that are available for this project. An environment is available for a project if enabled in the [project configuration](https://docs.getunleash.io/reference/environments#step-1-enable-new-environments-for-your-project)",type:"text/plain"},url:{path:["api","admin","environments","project",":projectId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,f={unversionedId:"reference/api/unleash/get-project-environments",id:"reference/api/unleash/get-project-environments",title:"Get the environments available to a project",description:"Gets the environments that are available for this project. An environment is available for a project if enabled in the [project configuration](https://docs.getunleash.io/reference/environments#step-1-enable-new-environments-for-your-project)",source:"@site/docs/reference/api/unleash/get-project-environments.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-project-environments",permalink:"/reference/api/unleash/get-project-environments",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-environments",title:"Get the environments available to a project",description:"Gets the environments that are available for this project. An environment is available for a project if enabled in the [project configuration](https://docs.getunleash.io/reference/environments#step-1-enable-new-environments-for-your-project)",sidebar_label:"Get the environments available to a project",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Environments"],operationId:"getProjectEnvironments",description:"Gets the environments that are available for this project. An environment is available for a project if enabled in the [project configuration](https://docs.getunleash.io/reference/environments#step-1-enable-new-environments-for-your-project)",responses:{200:{description:"environmentsProjectSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","environments"],description:"Environments defined for a given project",properties:{version:{type:"integer"},environments:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","type","enabled","protected","sortOrder"],description:"Describes a project's configuration in a given environment.",properties:{name:{type:"string",example:"development",description:"The name of the environment"},type:{type:"string",example:"production",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},enabled:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`"},protected:{type:"boolean",example:!1,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},sortOrder:{type:"integer",example:1,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear"},projectApiTokenCount:{type:"integer",minimum:0,example:5,description:"The number of client and front-end API tokens that have access to this project"},projectEnabledToggleCount:{type:"integer",minimum:0,example:7,description:"The number of features enabled in this environment for this project"},defaultStrategy:{description:"The strategy configuration to add when enabling a feature environment by default",type:"object",required:["name"],properties:{name:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},title:{type:"string",nullable:!0,description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod"},disabled:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},sortOrder:{type:"number",description:"The order of the strategy in the list",example:9999},constraints:{type:"array",description:"A list of the constraints attached to the strategy",example:[{values:["1","2"],inverted:!1,operator:"IN",contextName:"appName",caseInsensitive:!1}],items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},parameters:{type:"object",additionalProperties:{type:"string"},title:"parametersSchema",description:"An object containing the parameters for the strategy",example:{groupId:"some_new",rollout:"25",stickiness:"sessionId"}},segments:{type:"array",description:"Ids of segments to use for this strategy",example:[1,2],items:{type:"number"}}},title:"createFeatureStrategySchema"}},title:"environmentProjectSchema"}}},title:"environmentsProjectSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/environments/project/{projectId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Get the environments available to a project",description:{content:"Gets the environments that are available for this project. An environment is available for a project if enabled in the [project configuration](https://docs.getunleash.io/reference/environments#step-1-enable-new-environments-for-your-project)",type:"text/plain"},url:{path:["api","admin","environments","project",":projectId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Clones an environment",permalink:"/reference/api/unleash/clone-environment"},next:{title:"Update environment sort orders",permalink:"/reference/api/unleash/update-sort-order"}},g={},v=[{value:"Request",id:"request",level:2}],b={toc:v};function T(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Get the environments available to a project"),(0,r.kt)(o.Z,{method:"get",path:"/api/admin/environments/project/{projectId}",mdxType:"MethodEndpoint"}),(0,r.kt)(s.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"Gets the environments that are available for this project. An environment is available for a project if enabled in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/environments#step-1-enable-new-environments-for-your-project"},"project configuration")),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"environmentsProjectSchema")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"environments"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development",description:"The name of the environment"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"production",description:"The [type of environment](https://docs.getunleash.io/reference/environments#environment-types)."},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the environment is enabled for the project, otherwise `false`"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"protected",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1,description:"`true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted."},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"sortOrder",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:1,description:"Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"projectApiTokenCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0,example:5,description:"The number of client and front-end API tokens that have access to this project"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"projectEnabledToggleCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0,example:7,description:"The number of features enabled in this environment for this project"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"defaultStrategy"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The strategy configuration to add when enabling a feature environment by default")),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"disabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The order of the strategy in the list",example:9999},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"constraints"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"A list of the constraints attached to the strategy")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",schema:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"inverted",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"An object containing the parameters for the strategy")),(0,r.kt)(c.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{collapsible:!1,name:"segments",required:!1,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",description:"Ids of segments to use for this strategy",example:[1,2],items:{type:"number"}},mdxType:"SchemaItem"})))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(m.Z,{responseExample:'{\n  "version": 0,\n  "environments": [\n    {\n      "name": "development",\n      "type": "production",\n      "enabled": true,\n      "protected": false,\n      "sortOrder": 1,\n      "projectApiTokenCount": 5,\n      "projectEnabledToggleCount": 7,\n      "defaultStrategy": {\n        "name": "flexibleRollout",\n        "title": "Gradual Rollout 25-Prod",\n        "disabled": false,\n        "sortOrder": 9999,\n        "constraints": [\n          {\n            "values": [\n              "1",\n              "2"\n            ],\n            "inverted": false,\n            "operator": "IN",\n            "contextName": "appName",\n            "caseInsensitive": false\n          }\n        ],\n        "parameters": {\n          "groupId": "some_new",\n          "rollout": "25",\n          "stickiness": "sessionId"\n        },\n        "segments": [\n          1,\n          2\n        ]\n      }\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,r.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,r.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(h.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The requested resource was not found.")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,r.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);