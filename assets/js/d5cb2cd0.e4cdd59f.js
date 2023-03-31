"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2221],{91334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>k,frontMatter:()=>u,metadata:()=>f,toc:()=>v});var r=a(87462),i=(a(67294),a(3905)),n=a(80334),s=(a(11032),a(46062)),o=a(21439),p=a(9531),m=a(15761),l=a(73418),d=a(92414),c=a(11666);const u={id:"get-feature-variants",title:"Retrieve variants for a feature (deprecated) ",description:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",sidebar_label:"Retrieve variants for a feature (deprecated) ",hide_title:!0,hide_table_of_contents:!0,api:{description:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",deprecated:!0,tags:["Features"],operationId:"getFeatureVariants",responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}},title:"overrideSchema"}}},title:"variantSchema"}}},title:"featureVariantsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"Retrieve variants for a feature (deprecated) ",description:{content:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,f={unversionedId:"reference/api/unleash/get-feature-variants",id:"reference/api/unleash/get-feature-variants",title:"Retrieve variants for a feature (deprecated) ",description:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",source:"@site/docs/reference/api/unleash/get-feature-variants.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-feature-variants",permalink:"/reference/api/unleash/get-feature-variants",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-feature-variants",title:"Retrieve variants for a feature (deprecated) ",description:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",sidebar_label:"Retrieve variants for a feature (deprecated) ",hide_title:!0,hide_table_of_contents:!0,api:{description:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",deprecated:!0,tags:["Features"],operationId:"getFeatureVariants",responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}},title:"overrideSchema"}}},title:"variantSchema"}}},title:"featureVariantsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"Retrieve variants for a feature (deprecated) ",description:{content:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Stales a list of features",permalink:"/reference/api/unleash/stale-features"},next:{title:"Apply a patch to a feature's variants (in all environments).",permalink:"/reference/api/unleash/patch-feature-variants"}},y={},v=[],g={toc:v};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Retrieve variants for a feature (deprecated) "),(0,i.kt)(s.Z,{method:"get",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",mdxType:"MethodEndpoint"}),(0,i.kt)("admonition",{title:"deprecated",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,i.kt)("p",null,"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/environments"},"production-type environment")," as the source of truth. If more than one production environment is found, the first one will be used."),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"featureVariantsSchema")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"variants"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"weightType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"payload"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"overrides"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "version": 0,\n  "variants": [\n    {\n      "name": "string",\n      "weight": 0,\n      "weightType": "string",\n      "stickiness": "string",\n      "payload": {\n        "type": "string",\n        "value": "string"\n      },\n      "overrides": [\n        {\n          "contextName": "string",\n          "values": [\n            "string"\n          ]\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);