"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1758],{65412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>h,toc:()=>v});var r=a(87462),n=(a(67294),a(3905)),i=a(60961),s=a(48165),o=a(90115),l=a(58475),p=a(5428),m=a(80487),d=(a(54881),a(11666));const u={id:"get-feature-environment",title:"getFeatureEnvironment",description:"getFeatureEnvironment",sidebar_label:"getFeatureEnvironment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"getFeatureEnvironment",responses:{200:{description:"featureEnvironmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","enabled"],properties:{name:{type:"string"},featureName:{type:"string"},environment:{type:"string"},type:{type:"string"},enabled:{type:"boolean"},sortOrder:{type:"number"},variantCount:{type:"number"},strategies:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{id:{type:"string"},name:{type:"string"},featureName:{type:"string"},sortOrder:{type:"number"},segments:{type:"array",items:{type:"number"}},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}}}},parameters:{type:"object",additionalProperties:{type:"string"}}}}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],description:"getFeatureEnvironment",method:"get",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"get Feature Environment",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,h={unversionedId:"reference/api/unleash/get-feature-environment",id:"reference/api/unleash/get-feature-environment",title:"getFeatureEnvironment",description:"getFeatureEnvironment",source:"@site/docs/reference/api/unleash/get-feature-environment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-feature-environment",permalink:"/reference/api/unleash/get-feature-environment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-feature-environment",title:"getFeatureEnvironment",description:"getFeatureEnvironment",sidebar_label:"getFeatureEnvironment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"getFeatureEnvironment",responses:{200:{description:"featureEnvironmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","enabled"],properties:{name:{type:"string"},featureName:{type:"string"},environment:{type:"string"},type:{type:"string"},enabled:{type:"boolean"},sortOrder:{type:"number"},variantCount:{type:"number"},strategies:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{id:{type:"string"},name:{type:"string"},featureName:{type:"string"},sortOrder:{type:"number"},segments:{type:"array",items:{type:"number"}},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}}}},parameters:{type:"object",additionalProperties:{type:"string"}}}}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],description:"getFeatureEnvironment",method:"get",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"get Feature Environment",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getAllFeatureTypes",permalink:"/reference/api/unleash/get-all-feature-types"},next:{title:"toggleFeatureEnvironmentOff",permalink:"/reference/api/unleash/toggle-feature-environment-off"}},y={},v=[{value:"getFeatureEnvironment",id:"getfeatureenvironment",level:2}],g={toc:v};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"getfeatureenvironment"},"getFeatureEnvironment"),(0,n.kt)("p",null,"getFeatureEnvironment"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"environment",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"featureEnvironmentSchema")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"featureName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"enabled",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"variantCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"strategies"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"featureName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"segments",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"constraints"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"contextName",required:!1,deprecated:void 0,schemaDescription:"The name of the context field that this constraint should apply to.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"operator",required:!1,deprecated:void 0,schemaDescription:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"caseInsensitive",required:!1,deprecated:void 0,schemaDescription:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"inverted",required:!1,deprecated:void 0,schemaDescription:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"values",required:!1,deprecated:void 0,schemaDescription:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"parameters"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("code",null,"property name*"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "name": "string",\n  "featureName": "string",\n  "environment": "string",\n  "type": "string",\n  "enabled": true,\n  "sortOrder": 0,\n  "variantCount": 0,\n  "strategies": [\n    {\n      "id": "string",\n      "name": "string",\n      "featureName": "string",\n      "sortOrder": 0,\n      "segments": [\n        0\n      ],\n      "constraints": [\n        {\n          "contextName": "appName",\n          "operator": "NOT_IN",\n          "caseInsensitive": false,\n          "inverted": false,\n          "values": [\n            "string"\n          ],\n          "value": "string"\n        }\n      ],\n      "parameters": {}\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);