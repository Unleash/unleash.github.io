"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8505],{62548:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var s=a(87462),r=(a(67294),a(3905)),i=a(60961),n=a(48165),o=a(90115),l=a(58475),p=a(5428),d=a(80487),m=(a(54881),a(11666));const c={id:"get-segments-by-strategy-id",title:"getSegmentsByStrategyId",description:"getSegmentsByStrategyId",sidebar_label:"getSegmentsByStrategyId",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getSegmentsByStrategyId",responses:{200:{description:"segmentsSchema",content:{"application/json":{schema:{type:"object",properties:{segments:{type:"array",items:{type:"object",required:["id","name","constraints","createdAt"],properties:{id:{type:"number"},name:{type:"string"},description:{type:"string",nullable:!0},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}}}},createdBy:{type:"string"},createdAt:{type:"string",format:"date-time"}}}}}}}}}},parameters:[{name:"strategyId",in:"path",required:!0,schema:{type:"string"}}],description:"getSegmentsByStrategyId",method:"get",path:"/api/admin/segments/strategies/{strategyId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"get Segments By Strategy Id",description:{type:"text/plain"},url:{path:["api","admin","segments","strategies",":strategyId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},u=void 0,y={unversionedId:"reference/api/unleash/get-segments-by-strategy-id",id:"reference/api/unleash/get-segments-by-strategy-id",title:"getSegmentsByStrategyId",description:"getSegmentsByStrategyId",source:"@site/docs/reference/api/unleash/get-segments-by-strategy-id.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-segments-by-strategy-id",permalink:"/reference/api/unleash/get-segments-by-strategy-id",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-segments-by-strategy-id.api.mdx",tags:[],version:"current",frontMatter:{id:"get-segments-by-strategy-id",title:"getSegmentsByStrategyId",description:"getSegmentsByStrategyId",sidebar_label:"getSegmentsByStrategyId",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getSegmentsByStrategyId",responses:{200:{description:"segmentsSchema",content:{"application/json":{schema:{type:"object",properties:{segments:{type:"array",items:{type:"object",required:["id","name","constraints","createdAt"],properties:{id:{type:"number"},name:{type:"string"},description:{type:"string",nullable:!0},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}}}},createdBy:{type:"string"},createdAt:{type:"string",format:"date-time"}}}}}}}}}},parameters:[{name:"strategyId",in:"path",required:!0,schema:{type:"string"}}],description:"getSegmentsByStrategyId",method:"get",path:"/api/admin/segments/strategies/{strategyId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"get Segments By Strategy Id",description:{type:"text/plain"},url:{path:["api","admin","segments","strategies",":strategyId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Validates if a segment name exists",permalink:"/reference/api/unleash/validate-segment"},next:{title:"Updates the segments of a strategy by id",permalink:"/reference/api/unleash/update-feature-strategy-segments"}},g={},h=[{value:"getSegmentsByStrategyId",id:"getsegmentsbystrategyid",level:2}],f={toc:h};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getsegmentsbystrategyid"},"getSegmentsByStrategyId"),(0,r.kt)("p",null,"getSegmentsByStrategyId"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"strategyId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"segmentsSchema")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"segments"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"constraints"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"contextName",required:!1,schemaDescription:"The name of the context field that this constraint should apply to.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"operator",required:!1,schemaDescription:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaDescription:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"inverted",required:!1,schemaDescription:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"values",required:!1,schemaDescription:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{collapsible:!1,name:"createdBy",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "segments": [\n    {\n      "id": 0,\n      "name": "string",\n      "description": "string",\n      "constraints": [\n        {\n          "contextName": "appName",\n          "operator": "NOT_IN",\n          "caseInsensitive": false,\n          "inverted": false,\n          "values": [\n            "string"\n          ],\n          "value": "string"\n        }\n      ],\n      "createdBy": "string",\n      "createdAt": "2022-12-14"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);