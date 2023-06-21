"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9113],{8565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>b,frontMatter:()=>h,metadata:()=>g,toc:()=>T});var r=a(87462),s=(a(67294),a(3905)),i=a(80334),o=(a(11032),a(46062)),n=a(57138),l=a(21439),p=a(9531),m=a(15761),d=a(73418),c=a(92414),u=a(11666);const h={id:"add-feature-strategy",title:"addFeatureStrategy",description:"addFeatureStrategy",sidebar_label:"addFeatureStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"addFeatureStrategy",requestBody:{description:"createFeatureStrategySchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},title:{type:"string",nullable:!0,description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod"},disabled:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},sortOrder:{type:"number",description:"The order of the strategy in the list",example:9999},constraints:{type:"array",description:"A list of the constraints attached to the strategy",example:[{values:["1","2"],inverted:!1,operator:"IN",contextName:"appName",caseInsensitive:!1}],items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},parameters:{type:"object",additionalProperties:{type:"string"},title:"parametersSchema",description:"An object containing the parameters for the strategy",example:{groupId:"some_new",rollout:"25",stickiness:"sessionId"}},segments:{type:"array",description:"Ids of segments to use for this strategy",example:[1,2],items:{type:"number"}}},title:"createFeatureStrategySchema"}}}},responses:{200:{description:"featureStrategySchema",content:{"application/json":{schema:{description:"A singles activation strategy configuration schema for a feature",type:"object",additionalProperties:!1,required:["name"],properties:{id:{type:"string",description:"A uuid for the feature strategy",example:"6b5157cb-343a-41e7-bfa3-7b4ec3044840"},name:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},title:{type:"string",description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod",nullable:!0},disabled:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},featureName:{type:"string",description:"The name or feature the strategy is attached to",example:"myAwesomeFeature"},sortOrder:{type:"number",description:"The order of the strategy in the list",example:9999},segments:{type:"array",description:"A list of segment ids attached to the strategy",example:[1,2],items:{type:"number"}},constraints:{type:"array",description:"A list of the constraints attached to the strategy",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},parameters:{type:"object",additionalProperties:{type:"string"},title:"parametersSchema"}},title:"featureStrategySchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],description:"addFeatureStrategy",method:"post",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"flexibleRollout",title:"Gradual Rollout 25-Prod",disabled:!1,sortOrder:9999,constraints:[{values:["1","2"],inverted:!1,operator:"IN",contextName:"appName",caseInsensitive:!1}],parameters:{groupId:"some_new",rollout:"25",stickiness:"sessionId"},segments:[1,2]},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"add Feature Strategy",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment","strategies"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/add-feature-strategy",id:"reference/api/unleash/add-feature-strategy",title:"addFeatureStrategy",description:"addFeatureStrategy",source:"@site/docs/reference/api/unleash/add-feature-strategy.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/add-feature-strategy",permalink:"/reference/api/unleash/add-feature-strategy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-feature-strategy",title:"addFeatureStrategy",description:"addFeatureStrategy",sidebar_label:"addFeatureStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"addFeatureStrategy",requestBody:{description:"createFeatureStrategySchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},title:{type:"string",nullable:!0,description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod"},disabled:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},sortOrder:{type:"number",description:"The order of the strategy in the list",example:9999},constraints:{type:"array",description:"A list of the constraints attached to the strategy",example:[{values:["1","2"],inverted:!1,operator:"IN",contextName:"appName",caseInsensitive:!1}],items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},parameters:{type:"object",additionalProperties:{type:"string"},title:"parametersSchema",description:"An object containing the parameters for the strategy",example:{groupId:"some_new",rollout:"25",stickiness:"sessionId"}},segments:{type:"array",description:"Ids of segments to use for this strategy",example:[1,2],items:{type:"number"}}},title:"createFeatureStrategySchema"}}}},responses:{200:{description:"featureStrategySchema",content:{"application/json":{schema:{description:"A singles activation strategy configuration schema for a feature",type:"object",additionalProperties:!1,required:["name"],properties:{id:{type:"string",description:"A uuid for the feature strategy",example:"6b5157cb-343a-41e7-bfa3-7b4ec3044840"},name:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},title:{type:"string",description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod",nullable:!0},disabled:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},featureName:{type:"string",description:"The name or feature the strategy is attached to",example:"myAwesomeFeature"},sortOrder:{type:"number",description:"The order of the strategy in the list",example:9999},segments:{type:"array",description:"A list of segment ids attached to the strategy",example:[1,2],items:{type:"number"}},constraints:{type:"array",description:"A list of the constraints attached to the strategy",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},parameters:{type:"object",additionalProperties:{type:"string"},title:"parametersSchema"}},title:"featureStrategySchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],description:"addFeatureStrategy",method:"post",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"flexibleRollout",title:"Gradual Rollout 25-Prod",disabled:!1,sortOrder:9999,constraints:[{values:["1","2"],inverted:!1,operator:"IN",contextName:"appName",caseInsensitive:!1}],parameters:{groupId:"some_new",rollout:"25",stickiness:"sessionId"},segments:[1,2]},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"add Feature Strategy",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment","strategies"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getFeatureStrategies",permalink:"/reference/api/unleash/get-feature-strategies"},next:{title:"getFeatureStrategy",permalink:"/reference/api/unleash/get-feature-strategy"}},f={},T=[{value:"Request",id:"request",level:2}],v={toc:T};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"addFeatureStrategy"),(0,s.kt)(o.Z,{method:"post",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/strategies",mdxType:"MethodEndpoint"}),(0,s.kt)(n.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"addFeatureStrategy"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"environment",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"createFeatureStrategySchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"disabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The order of the strategy in the list",example:9999},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"constraints"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of the constraints attached to the strategy")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",schema:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"inverted",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"An object containing the parameters for the strategy")),(0,s.kt)(d.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"segments",required:!1,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",description:"Ids of segments to use for this strategy",example:[1,2],items:{type:"number"}},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"featureStrategySchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A uuid for the feature strategy",example:"6b5157cb-343a-41e7-bfa3-7b4ec3044840"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name or type of strategy",example:"flexibleRollout"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A descriptive title for the strategy",example:"Gradual Rollout 25-Prod",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"disabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs",example:!1,nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"featureName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name or feature the strategy is attached to",example:"myAwesomeFeature"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The order of the strategy in the list",example:9999},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"segments",required:!1,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",description:"A list of segment ids attached to the strategy",example:[1,2],items:{type:"number"}},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"constraints"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of the constraints attached to the strategy")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",schema:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"inverted",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "6b5157cb-343a-41e7-bfa3-7b4ec3044840",\n  "name": "flexibleRollout",\n  "title": "Gradual Rollout 25-Prod",\n  "disabled": false,\n  "featureName": "myAwesomeFeature",\n  "sortOrder": 9999,\n  "segments": [\n    1,\n    2\n  ],\n  "constraints": [\n    {\n      "contextName": "appName",\n      "operator": "IN",\n      "caseInsensitive": false,\n      "inverted": false,\n      "values": [\n        "my-app",\n        "my-other-app"\n      ],\n      "value": "my-app"\n    }\n  ],\n  "parameters": {}\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);