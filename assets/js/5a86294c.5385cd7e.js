"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4788],{61586:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>T,frontMatter:()=>m,metadata:()=>u,toc:()=>y});var s=a(87462),r=(a(67294),a(3905)),n=a(60961),i=a(48165),o=(a(90115),a(58475)),l=a(5428),p=a(80487),c=(a(54881),a(11666));const m={id:"create-segment",title:"Create a new segment",description:"Creates a new segment using the payload provided",sidebar_label:"Create a new segment",hide_title:!0,hide_table_of_contents:!0,api:{description:"Creates a new segment using the payload provided",tags:["Strategies"],operationId:"createSegment",requestBody:{description:"upsertSegmentSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name","constraints"],properties:{name:{type:"string"},description:{type:"string",nullable:!0},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}}}}}}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",required:["id","name","constraints","createdAt"],properties:{id:{type:"number"},name:{type:"string"},description:{type:"string",nullable:!0},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}}}},createdBy:{type:"string"},createdAt:{type:"string",format:"date-time"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},method:"post",path:"/api/admin/segments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",constraints:[{contextName:"appName",operator:"NOT_IN",caseInsensitive:!1,inverted:!1,values:["string"],value:"string"}]},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"Create a new segment",description:{content:"Creates a new segment using the payload provided",type:"text/plain"},url:{path:["api","admin","segments"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,u={unversionedId:"reference/api/unleash/create-segment",id:"reference/api/unleash/create-segment",title:"Create a new segment",description:"Creates a new segment using the payload provided",source:"@site/docs/reference/api/unleash/create-segment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-segment",permalink:"/reference/api/unleash/create-segment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-segment",title:"Create a new segment",description:"Creates a new segment using the payload provided",sidebar_label:"Create a new segment",hide_title:!0,hide_table_of_contents:!0,api:{description:"Creates a new segment using the payload provided",tags:["Strategies"],operationId:"createSegment",requestBody:{description:"upsertSegmentSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name","constraints"],properties:{name:{type:"string"},description:{type:"string",nullable:!0},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}}}}}}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",required:["id","name","constraints","createdAt"],properties:{id:{type:"number"},name:{type:"string"},description:{type:"string",nullable:!0},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}}}},createdBy:{type:"string"},createdAt:{type:"string",format:"date-time"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},method:"post",path:"/api/admin/segments",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",constraints:[{contextName:"appName",operator:"NOT_IN",caseInsensitive:!1,inverted:!1,values:["string"],value:"string"}]},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"Create a new segment",description:{content:"Creates a new segment using the payload provided",type:"text/plain"},url:{path:["api","admin","segments"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get a segment by id",permalink:"/reference/api/unleash/get-segment"},next:{title:"Get all segments",permalink:"/reference/api/unleash/get-segments"}},h={},y=[{value:"Create a new segment",id:"create-a-new-segment",level:2}],g={toc:y};function T(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-a-new-segment"},"Create a new segment"),(0,r.kt)("p",null,"Creates a new segment using the payload provided"),(0,r.kt)(i.Z,{mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"upsertSegmentSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"constraints"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",schema:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"inverted",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The resource was successfully created.")),(0,r.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Response Headers")),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",{className:"schemaItem"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"location"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")),(0,r.kt)("div",null,(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The location of the newly created resource.")))))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"constraints"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"contextName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"operator",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",schema:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"inverted",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(l.Z,{collapsible:!1,name:"createdBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "id": 0,\n  "name": "string",\n  "description": "string",\n  "constraints": [\n    {\n      "contextName": "appName",\n      "operator": "NOT_IN",\n      "caseInsensitive": false,\n      "inverted": false,\n      "values": [\n        "string"\n      ],\n      "value": "string"\n    }\n  ],\n  "createdBy": "string",\n  "createdAt": "2023-03-02"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The request data does not match what we expect.")),(0,r.kt)("div",null)),(0,r.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,r.kt)("div",null)))))}T.isMDXComponent=!0}}]);