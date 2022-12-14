"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1081],{43432:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var i=t(87462),r=(t(67294),t(3905)),s=t(60961),n=t(48165),p=t(90115),o=t(58475),l=t(5428),m=t(80487),c=(t(54881),t(11666));const d={id:"patch-feature-variants",title:"patchFeatureVariants",description:"patchFeatureVariants",sidebar_label:"patchFeatureVariants",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"patchFeatureVariants",requestBody:{description:"patchesSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",required:["path","op"],properties:{path:{type:"string"},op:{type:"string",enum:["add","remove","replace","copy","move"]},from:{type:"string"},value:{}}}}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}}}}}}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],description:"patchFeatureVariants",method:"patch",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{path:"string",op:"add",from:"string",value:{}}],info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"patch Feature Variants",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"reference/api/unleash/unleash-api"},u=void 0,y={unversionedId:"reference/api/unleash/patch-feature-variants",id:"reference/api/unleash/patch-feature-variants",title:"patchFeatureVariants",description:"patchFeatureVariants",source:"@site/docs/reference/api/unleash/patch-feature-variants.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/patch-feature-variants",permalink:"/reference/api/unleash/patch-feature-variants",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/patch-feature-variants.api.mdx",tags:[],version:"current",frontMatter:{id:"patch-feature-variants",title:"patchFeatureVariants",description:"patchFeatureVariants",sidebar_label:"patchFeatureVariants",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"patchFeatureVariants",requestBody:{description:"patchesSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",required:["path","op"],properties:{path:{type:"string"},op:{type:"string",enum:["add","remove","replace","copy","move"]},from:{type:"string"},value:{}}}}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}}}}}}}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],description:"patchFeatureVariants",method:"patch",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{path:"string",op:"add",from:"string",value:{}}],info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"patch Feature Variants",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getFeatureVariants",permalink:"/reference/api/unleash/get-feature-variants"},next:{title:"overwriteFeatureVariants",permalink:"/reference/api/unleash/overwrite-feature-variants"}},h={},v=[{value:"patchFeatureVariants",id:"patchfeaturevariants",level:2}],g={toc:v};function f(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"patchfeaturevariants"},"patchFeatureVariants"),(0,r.kt)("p",null,"patchFeatureVariants"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(n.Z,{mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("span",{style:{opacity:"0.6"}}," array"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"patchesSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"path",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"op",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`add`, `remove`, `replace`, `copy`, `move`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"from",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"featureVariantsSchema")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"variants"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"weight",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"weightType",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"stickiness",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"payload"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"overrides"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"contextName",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"values",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "version": 0,\n  "variants": [\n    {\n      "name": "string",\n      "weight": 0,\n      "weightType": "string",\n      "stickiness": "string",\n      "payload": {\n        "type": "string",\n        "value": "string"\n      },\n      "overrides": [\n        {\n          "contextName": "string",\n          "values": [\n            "string"\n          ]\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);