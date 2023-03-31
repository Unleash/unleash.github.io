"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8595],{59085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>T,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var r=a(87462),s=(a(67294),a(3905)),i=a(80334),n=(a(11032),a(46062)),o=a(21439),p=a(9531),l=a(15761),m=a(73418),c=a(92414),d=a(11666);const u={id:"patch-feature-strategy",title:"patchFeatureStrategy",description:"patchFeatureStrategy",sidebar_label:"patchFeatureStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"patchFeatureStrategy",requestBody:{description:"patchesSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",required:["path","op"],properties:{path:{type:"string"},op:{type:"string",enum:["add","remove","replace","copy","move"]},from:{type:"string"},value:{}},title:"patchSchema"},title:"patchesSchema"}}}},responses:{200:{description:"featureStrategySchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{id:{type:"string"},name:{type:"string"},featureName:{type:"string"},sortOrder:{type:"number"},segments:{type:"array",items:{type:"number"}},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}},title:"constraintSchema"}},parameters:{type:"object",additionalProperties:{type:"string"},title:"parametersSchema"}},title:"featureStrategySchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}},{name:"strategyId",in:"path",required:!0,schema:{type:"string"}}],description:"patchFeatureStrategy",method:"patch",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/strategies/{strategyId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{path:"string",op:"add",from:"string",value:{}}],info:{title:"Unleash API",version:"4.22.0"},postman:{name:"patch Feature Strategy",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment","strategies",":strategyId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,h={unversionedId:"reference/api/unleash/patch-feature-strategy",id:"reference/api/unleash/patch-feature-strategy",title:"patchFeatureStrategy",description:"patchFeatureStrategy",source:"@site/docs/reference/api/unleash/patch-feature-strategy.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/patch-feature-strategy",permalink:"/reference/api/unleash/patch-feature-strategy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"patch-feature-strategy",title:"patchFeatureStrategy",description:"patchFeatureStrategy",sidebar_label:"patchFeatureStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"patchFeatureStrategy",requestBody:{description:"patchesSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",required:["path","op"],properties:{path:{type:"string"},op:{type:"string",enum:["add","remove","replace","copy","move"]},from:{type:"string"},value:{}},title:"patchSchema"},title:"patchesSchema"}}}},responses:{200:{description:"featureStrategySchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{id:{type:"string"},name:{type:"string"},featureName:{type:"string"},sortOrder:{type:"number"},segments:{type:"array",items:{type:"number"}},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}},title:"constraintSchema"}},parameters:{type:"object",additionalProperties:{type:"string"},title:"parametersSchema"}},title:"featureStrategySchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}},{name:"strategyId",in:"path",required:!0,schema:{type:"string"}}],description:"patchFeatureStrategy",method:"patch",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/strategies/{strategyId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{path:"string",op:"add",from:"string",value:{}}],info:{title:"Unleash API",version:"4.22.0"},postman:{name:"patch Feature Strategy",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment","strategies",":strategyId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"updateFeatureStrategy",permalink:"/reference/api/unleash/update-feature-strategy"},next:{title:"deleteFeatureStrategy",permalink:"/reference/api/unleash/delete-feature-strategy"}},g={},f=[],v={toc:f};function T(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"patchFeatureStrategy"),(0,s.kt)(n.Z,{method:"patch",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/strategies/{strategyId}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"patchFeatureStrategy"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"environment",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"strategyId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("span",{style:{opacity:"0.6"}}," array"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"patchesSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"path",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"op",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`add`, `remove`, `replace`, `copy`, `move`]",schema:{type:"string",enum:["add","remove","replace","copy","move"]},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"from",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaName:"",qualifierMessage:void 0,schema:{},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"featureStrategySchema")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"featureName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"segments",required:!1,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"constraints"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",schema:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"inverted",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"parameters"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("code",null,"property name*"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "string",\n  "name": "string",\n  "featureName": "string",\n  "sortOrder": 0,\n  "segments": [\n    0\n  ],\n  "constraints": [\n    {\n      "contextName": "appName",\n      "operator": "NOT_IN",\n      "caseInsensitive": false,\n      "inverted": false,\n      "values": [\n        "string"\n      ],\n      "value": "string"\n    }\n  ],\n  "parameters": {}\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);