"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3402],{22965:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var i=a(87462),r=(a(67294),a(3905)),s=a(60961),n=a(48165),o=(a(90115),a(58475)),l=a(5428),p=a(80487),m=(a(54881),a(11666));const d={id:"get-archived-features",title:"getArchivedFeatures",description:"getArchivedFeatures",sidebar_label:"getArchivedFeatures",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Archive"],operationId:"getArchivedFeatures",responses:{200:{description:"featuresSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","features"],properties:{version:{type:"integer"},features:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},type:{type:"string"},description:{type:"string"},archived:{type:"boolean"},project:{type:"string"},enabled:{type:"boolean"},stale:{type:"boolean"},favorite:{type:"boolean"},impressionData:{type:"boolean"},createdAt:{type:"string",format:"date-time",nullable:!0},archivedAt:{type:"string",format:"date-time",nullable:!0},lastSeenAt:{type:"string",format:"date-time",nullable:!0},environments:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","type","enabled"],properties:{name:{type:"string"},type:{type:"string"},enabled:{type:"boolean"},protected:{type:"boolean"},sortOrder:{type:"number"},projectCount:{type:"number",nullable:!0},apiTokenCount:{type:"number",nullable:!0},enabledToggleCount:{type:"number",nullable:!0}}}},strategies:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{id:{type:"string"},name:{type:"string"},sortOrder:{type:"number"},segments:{type:"array",items:{type:"number"}},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}}}},parameters:{type:"object",additionalProperties:{type:"string"}}}}},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}}}}}}},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}},nullable:!0}}}}}}}}}},deprecated:!0,description:"getArchivedFeatures",method:"get",path:"/api/admin/archive/features",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"get Archived Features",description:{type:"text/plain"},url:{path:["api","admin","archive","features"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},c=void 0,u={unversionedId:"reference/api/unleash/get-archived-features",id:"reference/api/unleash/get-archived-features",title:"getArchivedFeatures",description:"getArchivedFeatures",source:"@site/docs/reference/api/unleash/get-archived-features.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-archived-features",permalink:"/reference/api/unleash/get-archived-features",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-archived-features.api.mdx",tags:[],version:"current",frontMatter:{id:"get-archived-features",title:"getArchivedFeatures",description:"getArchivedFeatures",sidebar_label:"getArchivedFeatures",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Archive"],operationId:"getArchivedFeatures",responses:{200:{description:"featuresSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","features"],properties:{version:{type:"integer"},features:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},type:{type:"string"},description:{type:"string"},archived:{type:"boolean"},project:{type:"string"},enabled:{type:"boolean"},stale:{type:"boolean"},favorite:{type:"boolean"},impressionData:{type:"boolean"},createdAt:{type:"string",format:"date-time",nullable:!0},archivedAt:{type:"string",format:"date-time",nullable:!0},lastSeenAt:{type:"string",format:"date-time",nullable:!0},environments:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","type","enabled"],properties:{name:{type:"string"},type:{type:"string"},enabled:{type:"boolean"},protected:{type:"boolean"},sortOrder:{type:"number"},projectCount:{type:"number",nullable:!0},apiTokenCount:{type:"number",nullable:!0},enabledToggleCount:{type:"number",nullable:!0}}}},strategies:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{id:{type:"string"},name:{type:"string"},sortOrder:{type:"number"},segments:{type:"array",items:{type:"number"}},constraints:{type:"array",items:{additionalProperties:!1,type:"object",required:["contextName","operator"],description:"A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/strategy-constraints)",properties:{contextName:{description:"The name of the context field that this constraint should apply to.",example:"appName",type:"string"},operator:{description:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",type:"string",enum:["NOT_IN","IN","STR_ENDS_WITH","STR_STARTS_WITH","STR_CONTAINS","NUM_EQ","NUM_GT","NUM_GTE","NUM_LT","NUM_LTE","DATE_AFTER","DATE_BEFORE","SEMVER_EQ","SEMVER_GT","SEMVER_LT"]},caseInsensitive:{description:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",type:"boolean",default:!1},inverted:{description:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",type:"boolean",default:!1},values:{type:"array",description:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",items:{type:"string"}},value:{description:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",type:"string"}}}},parameters:{type:"object",additionalProperties:{type:"string"}}}}},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}}}}}}},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}},nullable:!0}}}}}}}}}},deprecated:!0,description:"getArchivedFeatures",method:"get",path:"/api/admin/archive/features",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"get Archived Features",description:{type:"text/plain"},url:{path:["api","admin","archive","features"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Archive",permalink:"/reference/api/unleash/archive"},next:{title:"getArchivedFeaturesByProjectId",permalink:"/reference/api/unleash/get-archived-features-by-project-id"}},h={},y=[{value:"getArchivedFeatures",id:"getarchivedfeatures",level:2}],v={toc:y};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getarchivedfeatures"},"getArchivedFeatures"),(0,r.kt)("admonition",{title:"deprecated",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,r.kt)("p",null,"getArchivedFeatures"),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"featuresSchema")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"features"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"archived",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"project",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"stale",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"favorite",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"impressionData",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"archivedAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"lastSeenAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"environments"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"protected",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"projectCount",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"apiTokenCount",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"enabledToggleCount",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"strategies"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"segments",required:!1,schemaDescription:void 0,schemaName:"number[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"constraints"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"contextName",required:!1,schemaDescription:"The name of the context field that this constraint should apply to.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"operator",required:!1,schemaDescription:"The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).",schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_IN`, `IN`, `STR_ENDS_WITH`, `STR_STARTS_WITH`, `STR_CONTAINS`, `NUM_EQ`, `NUM_GT`, `NUM_GTE`, `NUM_LT`, `NUM_LTE`, `DATE_AFTER`, `DATE_BEFORE`, `SEMVER_EQ`, `SEMVER_GT`, `SEMVER_LT`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"caseInsensitive",required:!1,schemaDescription:"Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive).",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"inverted",required:!1,schemaDescription:"Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"values",required:!1,schemaDescription:"The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values.",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"parameters"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("code",null,"property name*"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"variants"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"weight",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"weightType",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"stickiness",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"payload"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"overrides"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"contextName",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"values",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"tags"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "version": 0,\n  "features": [\n    {\n      "name": "string",\n      "type": "string",\n      "description": "string",\n      "archived": true,\n      "project": "string",\n      "enabled": true,\n      "stale": true,\n      "favorite": true,\n      "impressionData": true,\n      "createdAt": "2022-12-14",\n      "archivedAt": "2022-12-14",\n      "lastSeenAt": "2022-12-14",\n      "environments": [\n        {\n          "name": "string",\n          "type": "string",\n          "enabled": true,\n          "protected": true,\n          "sortOrder": 0,\n          "projectCount": 0,\n          "apiTokenCount": 0,\n          "enabledToggleCount": 0\n        }\n      ],\n      "strategies": [\n        {\n          "id": "string",\n          "name": "string",\n          "sortOrder": 0,\n          "segments": [\n            0\n          ],\n          "constraints": [\n            {\n              "contextName": "appName",\n              "operator": "NOT_IN",\n              "caseInsensitive": false,\n              "inverted": false,\n              "values": [\n                "string"\n              ],\n              "value": "string"\n            }\n          ],\n          "parameters": {}\n        }\n      ],\n      "variants": [\n        {\n          "name": "string",\n          "weight": 0,\n          "weightType": "string",\n          "stickiness": "string",\n          "payload": {\n            "type": "string",\n            "value": "string"\n          },\n          "overrides": [\n            {\n              "contextName": "string",\n              "values": [\n                "string"\n              ]\n            }\n          ]\n        }\n      ],\n      "tags": [\n        {\n          "value": "string",\n          "type": "string"\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);