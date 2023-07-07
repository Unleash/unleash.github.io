"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1758],{65412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>T,frontMatter:()=>h,metadata:()=>g,toc:()=>v});var i=a(87462),r=(a(67294),a(3905)),s=a(80334),n=(a(11032),a(46062)),o=a(57138),m=a(21439),l=a(9531),p=a(15761),c=a(73418),d=a(92414),u=a(11666);const h={id:"get-feature-environment",title:"getFeatureEnvironment",description:"getFeatureEnvironment",sidebar_label:"getFeatureEnvironment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"getFeatureEnvironment",responses:{200:{description:"featureEnvironmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","enabled"],description:"A detailed description of the feature environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},featureName:{type:"string",example:"disable-comments"},environment:{type:"string"},type:{type:"string",example:"development",description:"The type of the environment"},enabled:{type:"boolean",example:!0,description:"`true` if the feature is enabled for the environment, otherwise `false`."},sortOrder:{type:"number",example:3,description:"The sort order of the feature environment in the feature environments list"},variantCount:{type:"number"},strategies:{type:"array",items:{description:"A single activation strategy configuration schema for a feature",type:"object",additionalProperties:!1,required:["name"],properties:{id:{type:"string",description:"A uuid for the feature strategy",example:"6b5157cb-343a-41e7-bfa3-7b4ec3044840"},name:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},title:{type:"string",description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod",nullable:!0},disabled:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},featureName:{type:"string",description:"The name or feature the strategy is attached to",example:"myAwesomeFeature"},sortOrder:{type:"number",description:"The order of the strategy in the list",example:9999},segments:{type:"array",description:"A list of segment ids attached to the strategy",example:[1,2],items:{type:"number"}},constraints:{type:"array",description:"A list of the constraints attached to the strategy",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},minItems:1,example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},parameters:{type:"object",additionalProperties:{type:"string"},title:"parametersSchema"}},title:"featureStrategySchema"},description:"A list of activation strategies for the feature environment"},variants:{type:"array",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"fix"},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",properties:{type:{type:"string"},value:{type:"string"}},example:{type:"json",value:"{color: red}"}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"},description:"A list of variants for the feature environment"}},title:"featureEnvironmentSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],description:"getFeatureEnvironment",method:"get",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Feature Environment",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/get-feature-environment",id:"reference/api/unleash/get-feature-environment",title:"getFeatureEnvironment",description:"getFeatureEnvironment",source:"@site/docs/reference/api/unleash/get-feature-environment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-feature-environment",permalink:"/reference/api/unleash/get-feature-environment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-feature-environment",title:"getFeatureEnvironment",description:"getFeatureEnvironment",sidebar_label:"getFeatureEnvironment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"getFeatureEnvironment",responses:{200:{description:"featureEnvironmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","enabled"],description:"A detailed description of the feature environment",properties:{name:{type:"string",example:"my-dev-env",description:"The name of the environment"},featureName:{type:"string",example:"disable-comments"},environment:{type:"string"},type:{type:"string",example:"development",description:"The type of the environment"},enabled:{type:"boolean",example:!0,description:"`true` if the feature is enabled for the environment, otherwise `false`."},sortOrder:{type:"number",example:3,description:"The sort order of the feature environment in the feature environments list"},variantCount:{type:"number"},strategies:{type:"array",items:{description:"A single activation strategy configuration schema for a feature",type:"object",additionalProperties:!1,required:["name"],properties:{id:{type:"string",description:"A uuid for the feature strategy",example:"6b5157cb-343a-41e7-bfa3-7b4ec3044840"},name:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},title:{type:"string",description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod",nullable:!0},disabled:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},featureName:{type:"string",description:"The name or feature the strategy is attached to",example:"myAwesomeFeature"},sortOrder:{type:"number",description:"The order of the strategy in the list",example:9999},segments:{type:"array",description:"A list of segment ids attached to the strategy",example:[1,2],items:{type:"number"}},constraints:{type:"array",description:"A list of the constraints attached to the strategy",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},minItems:1,example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},parameters:{type:"object",additionalProperties:{type:"string"},title:"parametersSchema"}},title:"featureStrategySchema"},description:"A list of activation strategies for the feature environment"},variants:{type:"array",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"fix"},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",properties:{type:{type:"string"},value:{type:"string"}},example:{type:"json",value:"{color: red}"}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"},description:"A list of variants for the feature environment"}},title:"featureEnvironmentSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],description:"getFeatureEnvironment",method:"get",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Feature Environment",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getAllFeatureTypes",permalink:"/reference/api/unleash/get-all-feature-types"},next:{title:"toggleFeatureEnvironmentOff",permalink:"/reference/api/unleash/toggle-feature-environment-off"}},f={},v=[{value:"Request",id:"request",level:2}],b={toc:v};function T(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"getFeatureEnvironment"),(0,r.kt)(n.Z,{method:"get",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}",mdxType:"MethodEndpoint"}),(0,r.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"getFeatureEnvironment"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"environment",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"featureEnvironmentSchema")),(0,r.kt)("div",null,(0,r.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"my-dev-env",description:"The name of the environment"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"featureName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"disable-comments"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development",description:"The type of the environment"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the feature is enabled for the environment, otherwise `false`."},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:3,description:"The sort order of the feature environment in the feature environments list"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"variantCount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"strategies"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"A list of activation strategies for the feature environment")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A uuid for the feature strategy",example:"6b5157cb-343a-41e7-bfa3-7b4ec3044840"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"disabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"featureName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name or feature the strategy is attached to",example:"myAwesomeFeature"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The order of the strategy in the list",example:9999},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"segments",required:!1,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",description:"A list of segment ids attached to the strategy",example:[1,2],items:{type:"number"}},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"constraints"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"A list of the constraints attached to the strategy")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",schema:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"inverted",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},minItems:1,example:["my-app","my-other-app"]},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"variants"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"A list of variants for the feature environment")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:"**Possible values:** `<= 1000`",schema:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"weightType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"fix"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"payload"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Extra data configured for this variant")),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"overrides"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "name": "my-dev-env",\n  "featureName": "disable-comments",\n  "environment": "string",\n  "type": "development",\n  "enabled": true,\n  "sortOrder": 3,\n  "variantCount": 0,\n  "strategies": [\n    {\n      "id": "6b5157cb-343a-41e7-bfa3-7b4ec3044840",\n      "name": "flexibleRollout",\n      "title": "Gradual Rollout 25-Prod",\n      "disabled": false,\n      "featureName": "myAwesomeFeature",\n      "sortOrder": 9999,\n      "segments": [\n        1,\n        2\n      ],\n      "constraints": [\n        {\n          "contextName": "appName",\n          "operator": "IN",\n          "caseInsensitive": false,\n          "inverted": false,\n          "values": [\n            "my-app",\n            "my-other-app"\n          ],\n          "value": "my-app"\n        }\n      ],\n      "parameters": {}\n    }\n  ],\n  "variants": [\n    {\n      "name": "blue_group",\n      "weight": 0,\n      "weightType": "fix",\n      "stickiness": "custom.context.field",\n      "payload": {\n        "type": "json",\n        "value": "{color: red}"\n      },\n      "overrides": [\n        {\n          "contextName": "userId",\n          "values": [\n            "red",\n            "blue"\n          ]\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);