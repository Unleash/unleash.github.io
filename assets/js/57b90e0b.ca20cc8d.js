"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3584],{3427:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>g,toc:()=>f});var a=s(87462),n=(s(67294),s(3905)),i=s(80334),r=(s(11032),s(46062)),o=s(57138),m=s(21439),l=(s(9531),s(15761)),p=s(73418),c=s(92414),h=s(30433);const d={id:"get-segments",title:"Get all segments",description:"Retrieves all segments that exist in this Unleash instance.",sidebar_label:"Get all segments",hide_title:!0,hide_table_of_contents:!0,api:{description:"Retrieves all segments that exist in this Unleash instance.",tags:["Segments"],operationId:"getSegments",responses:{200:{description:"segmentsSchema",content:{"application/json":{schema:{description:"Data containing a list of [segments](https://docs.getunleash.io/reference/segments)",type:"object",properties:{segments:{type:"array",description:"A list of segments",items:{type:"object",required:["id","name","constraints","createdAt"],description:"A description of a [segment](https://docs.getunleash.io/reference/segments)",additionalProperties:!1,properties:{id:{type:"integer",description:"The ID of this segment",example:2,minimum:0},name:{type:"string",description:"The name of this segment",example:"ios-users"},description:{type:"string",nullable:!0,description:"The description for this segment",example:"IOS users segment"},constraints:{type:"array",description:"The list of constraints that are used in this segment",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},usedInFeatures:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:3,nullable:!0},usedInProjects:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:2,nullable:!0},project:{type:"string",nullable:!0,example:"red-vista",description:"The project the segment belongs to. Only present if the segment is a project-specific segment."},createdBy:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},createdAt:{type:"string",format:"date-time",description:"When the segment was created",example:"2023-04-12T11:13:31.960Z"}},title:"adminSegmentSchema"}}},title:"segmentsSchema"}}}}},method:"get",path:"/api/admin/segments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.5.6"},postman:{name:"Get all segments",description:{content:"Retrieves all segments that exist in this Unleash instance.",type:"text/plain"},url:{path:["api","admin","segments"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/get-segments",id:"reference/api/unleash/get-segments",title:"Get all segments",description:"Retrieves all segments that exist in this Unleash instance.",source:"@site/docs/reference/api/unleash/get-segments.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-segments",permalink:"/reference/api/unleash/get-segments",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-segments",title:"Get all segments",description:"Retrieves all segments that exist in this Unleash instance.",sidebar_label:"Get all segments",hide_title:!0,hide_table_of_contents:!0,api:{description:"Retrieves all segments that exist in this Unleash instance.",tags:["Segments"],operationId:"getSegments",responses:{200:{description:"segmentsSchema",content:{"application/json":{schema:{description:"Data containing a list of [segments](https://docs.getunleash.io/reference/segments)",type:"object",properties:{segments:{type:"array",description:"A list of segments",items:{type:"object",required:["id","name","constraints","createdAt"],description:"A description of a [segment](https://docs.getunleash.io/reference/segments)",additionalProperties:!1,properties:{id:{type:"integer",description:"The ID of this segment",example:2,minimum:0},name:{type:"string",description:"The name of this segment",example:"ios-users"},description:{type:"string",nullable:!0,description:"The description for this segment",example:"IOS users segment"},constraints:{type:"array",description:"The list of constraints that are used in this segment",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"}},title:"constraintSchema"}},usedInFeatures:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:3,nullable:!0},usedInProjects:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:2,nullable:!0},project:{type:"string",nullable:!0,example:"red-vista",description:"The project the segment belongs to. Only present if the segment is a project-specific segment."},createdBy:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},createdAt:{type:"string",format:"date-time",description:"When the segment was created",example:"2023-04-12T11:13:31.960Z"}},title:"adminSegmentSchema"}}},title:"segmentsSchema"}}}}},method:"get",path:"/api/admin/segments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.5.6"},postman:{name:"Get all segments",description:{content:"Retrieves all segments that exist in this Unleash instance.",type:"text/plain"},url:{path:["api","admin","segments"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Create a new segment",permalink:"/reference/api/unleash/create-segment"},next:{title:"Service Accounts",permalink:"/reference/api/unleash/service-accounts"}},y={},f=[{value:"Request",id:"request",level:2}],T={toc:f};function v(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},T,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get all segments"),(0,n.kt)(r.Z,{method:"get",path:"/api/admin/segments",mdxType:"MethodEndpoint"}),(0,n.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Retrieves all segments that exist in this Unleash instance."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"segmentsSchema")),(0,n.kt)("div",null,(0,n.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"segments"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"A list of segments")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The ID of this segment",example:2,minimum:0},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of this segment",example:"ios-users"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The description for this segment",example:"IOS users segment"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"constraints"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The list of constraints that are used in this segment")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",schema:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"],example:"IN"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"inverted",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"},example:["my-app","my-other-app"]},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string",example:"my-app"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(p.Z,{collapsible:!1,name:"usedInFeatures",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:3,nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"usedInProjects",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0,description:"The number of projects that use this segment",example:2,nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"red-vista",description:"The project the segment belongs to. Only present if the segment is a project-specific segment."},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"createdBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The creator's email or username",example:"someone@example.com",type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"When the segment was created",example:"2023-04-12T11:13:31.960Z"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "segments": [\n    {\n      "id": 2,\n      "name": "ios-users",\n      "description": "IOS users segment",\n      "constraints": [\n        {\n          "contextName": "appName",\n          "operator": "IN",\n          "caseInsensitive": false,\n          "inverted": false,\n          "values": [\n            "my-app",\n            "my-other-app"\n          ],\n          "value": "my-app"\n        }\n      ],\n      "usedInFeatures": 3,\n      "usedInProjects": 2,\n      "project": "red-vista",\n      "createdBy": "someone@example.com",\n      "createdAt": "2023-04-12T11:13:31.960Z"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);