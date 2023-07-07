"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8505],{62548:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>_,frontMatter:()=>u,metadata:()=>g,toc:()=>T});var a=s(87462),i=(s(67294),s(3905)),n=s(80334),r=(s(11032),s(46062)),o=s(57138),m=s(21439),p=s(9531),l=s(15761),c=s(73418),d=s(92414),h=s(11666);const u={id:"get-segments-by-strategy-id",title:"Get strategy segments",description:"Retrieve all segments that are referenced by the specified strategy. Returns an empty list of segments if the strategy ID doesn't exist.",sidebar_label:"Get strategy segments",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Segments"],operationId:"getSegmentsByStrategyId",description:"Retrieve all segments that are referenced by the specified strategy. Returns an empty list of segments if the strategy ID doesn't exist.",responses:{200:{description:"segmentsSchema",content:{"application/json":{schema:{type:"object",properties:{segments:{type:"array",items:{type:"object",required:["id","name","constraints","createdAt"],additionalProperties:!1,properties:{id:{type:"integer",description:"The ID of this segment",example:2,minimum:0},name:{type:"string",description:"The name of this segment",example:"ios-users"},description:{type:"string",nullable:!0,description:"The description for this segment",example:"IOS users segment"},constraints:{type:"array",description:"The list of constraints that are used in this segment",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},minItems:1,example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},usedInFeatures:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:3,nullable:!0},usedInProjects:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:2,nullable:!0},project:{type:"string",nullable:!0,example:"red-vista"},createdBy:{description:"The creator's email or username",example:"someone@example.com",type:"string"},createdAt:{type:"string",format:"date-time",description:"When the segment was created",example:"2023-04-12T11:13:31.960Z"}},title:"adminSegmentSchema"}}},title:"segmentsSchema"}}}}},parameters:[{name:"strategyId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/segments/strategies/{strategyId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Get strategy segments",description:{content:"Retrieve all segments that are referenced by the specified strategy. Returns an empty list of segments if the strategy ID doesn't exist.",type:"text/plain"},url:{path:["api","admin","segments","strategies",":strategyId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/get-segments-by-strategy-id",id:"reference/api/unleash/get-segments-by-strategy-id",title:"Get strategy segments",description:"Retrieve all segments that are referenced by the specified strategy. Returns an empty list of segments if the strategy ID doesn't exist.",source:"@site/docs/reference/api/unleash/get-segments-by-strategy-id.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-segments-by-strategy-id",permalink:"/reference/api/unleash/get-segments-by-strategy-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-segments-by-strategy-id",title:"Get strategy segments",description:"Retrieve all segments that are referenced by the specified strategy. Returns an empty list of segments if the strategy ID doesn't exist.",sidebar_label:"Get strategy segments",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Segments"],operationId:"getSegmentsByStrategyId",description:"Retrieve all segments that are referenced by the specified strategy. Returns an empty list of segments if the strategy ID doesn't exist.",responses:{200:{description:"segmentsSchema",content:{"application/json":{schema:{type:"object",properties:{segments:{type:"array",items:{type:"object",required:["id","name","constraints","createdAt"],additionalProperties:!1,properties:{id:{type:"integer",description:"The ID of this segment",example:2,minimum:0},name:{type:"string",description:"The name of this segment",example:"ios-users"},description:{type:"string",nullable:!0,description:"The description for this segment",example:"IOS users segment"},constraints:{type:"array",description:"The list of constraints that are used in this segment",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},minItems:1,example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},usedInFeatures:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:3,nullable:!0},usedInProjects:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:2,nullable:!0},project:{type:"string",nullable:!0,example:"red-vista"},createdBy:{description:"The creator's email or username",example:"someone@example.com",type:"string"},createdAt:{type:"string",format:"date-time",description:"When the segment was created",example:"2023-04-12T11:13:31.960Z"}},title:"adminSegmentSchema"}}},title:"segmentsSchema"}}}}},parameters:[{name:"strategyId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/segments/strategies/{strategyId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Get strategy segments",description:{content:"Retrieve all segments that are referenced by the specified strategy. Returns an empty list of segments if the strategy ID doesn't exist.",type:"text/plain"},url:{path:["api","admin","segments","strategies",":strategyId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Validates if a segment name exists",permalink:"/reference/api/unleash/validate-segment"},next:{title:"Get strategies that reference segment",permalink:"/reference/api/unleash/get-strategies-by-segment-id"}},f={},T=[{value:"Request",id:"request",level:2}],v={toc:T};function _(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Get strategy segments"),(0,i.kt)(r.Z,{method:"get",path:"/api/admin/segments/strategies/{strategyId}",mdxType:"MethodEndpoint"}),(0,i.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Retrieve all segments that are referenced by the specified strategy. Returns an empty list of segments if the strategy ID doesn't exist."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"strategyId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"segmentsSchema")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"segments"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(c.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The ID of this segment",example:2,minimum:0},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of this segment",example:"ios-users"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The description for this segment",example:"IOS users segment"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"constraints"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"The list of constraints that are used in this segment")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(c.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",schema:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"inverted",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},minItems:1,example:["my-app","my-other-app"]},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(c.Z,{collapsible:!1,name:"usedInFeatures",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:3,nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"usedInProjects",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:2,nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"red-vista"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"createdBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The creator's email or username",example:"someone@example.com",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"When the segment was created",example:"2023-04-12T11:13:31.960Z"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "segments": [\n    {\n      "id": 2,\n      "name": "ios-users",\n      "description": "IOS users segment",\n      "constraints": [\n        {\n          "contextName": "appName",\n          "operator": "IN",\n          "caseInsensitive": false,\n          "inverted": false,\n          "values": [\n            "my-app",\n            "my-other-app"\n          ],\n          "value": "my-app"\n        }\n      ],\n      "usedInFeatures": 3,\n      "usedInProjects": 2,\n      "project": "red-vista",\n      "createdBy": "someone@example.com",\n      "createdAt": "2023-04-12T11:13:31.960Z"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}_.isMDXComponent=!0}}]);