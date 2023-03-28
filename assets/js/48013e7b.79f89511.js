"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9002],{78643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>h,metadata:()=>u,toc:()=>g});var i=a(87462),r=(a(67294),a(3905)),n=a(80334),s=(a(11032),a(46062)),l=a(21439),o=a(9531),p=a(15761),m=a(73418),d=a(92414),c=a(11666);const h={id:"overwrite-feature-variants",title:"Create (overwrite) variants for a feature toggle in all environments",description:"This overwrites the current variants for the feature specified in the :featureName parameter in all environments.",sidebar_label:"Create (overwrite) variants for a feature toggle in all environments",hide_title:!0,hide_table_of_contents:!0,api:{description:"This overwrites the current variants for the feature specified in the :featureName parameter in all environments.\n\n                    The backend will validate the input for the following invariants\n\n                    * If there are variants, there needs to be at least one variant with `weightType: variable`\n                    * The sum of the weights of variants with `weightType: fix` must be strictly less than 1000 (< 1000)\n\n                    The backend will also distribute remaining weight up to 1000 after adding the variants with `weightType: fix` together amongst the variants of `weightType: variable`",tags:["Features"],operationId:"overwriteFeatureVariants",requestBody:{description:"variantsSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}},title:"overrideSchema"}}},title:"variantSchema"},title:"variantsSchema"}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}},title:"overrideSchema"}}},title:"variantSchema"}}},title:"featureVariantsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{name:"string",weight:0,weightType:"string",stickiness:"string",payload:{type:"string",value:"string"},overrides:[{contextName:"string",values:["string"]}]}],info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"Create (overwrite) variants for a feature toggle in all environments",description:{content:"This overwrites the current variants for the feature specified in the :featureName parameter in all environments.\n\n                    The backend will validate the input for the following invariants\n\n                    * If there are variants, there needs to be at least one variant with `weightType: variable`\n                    * The sum of the weights of variants with `weightType: fix` must be strictly less than 1000 (< 1000)\n\n                    The backend will also distribute remaining weight up to 1000 after adding the variants with `weightType: fix` together amongst the variants of `weightType: variable`",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,u={unversionedId:"reference/api/unleash/overwrite-feature-variants",id:"reference/api/unleash/overwrite-feature-variants",title:"Create (overwrite) variants for a feature toggle in all environments",description:"This overwrites the current variants for the feature specified in the :featureName parameter in all environments.",source:"@site/docs/reference/api/unleash/overwrite-feature-variants.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/overwrite-feature-variants",permalink:"/reference/api/unleash/overwrite-feature-variants",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"overwrite-feature-variants",title:"Create (overwrite) variants for a feature toggle in all environments",description:"This overwrites the current variants for the feature specified in the :featureName parameter in all environments.",sidebar_label:"Create (overwrite) variants for a feature toggle in all environments",hide_title:!0,hide_table_of_contents:!0,api:{description:"This overwrites the current variants for the feature specified in the :featureName parameter in all environments.\n\n                    The backend will validate the input for the following invariants\n\n                    * If there are variants, there needs to be at least one variant with `weightType: variable`\n                    * The sum of the weights of variants with `weightType: fix` must be strictly less than 1000 (< 1000)\n\n                    The backend will also distribute remaining weight up to 1000 after adding the variants with `weightType: fix` together amongst the variants of `weightType: variable`",tags:["Features"],operationId:"overwriteFeatureVariants",requestBody:{description:"variantsSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}},title:"overrideSchema"}}},title:"variantSchema"},title:"variantsSchema"}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}},title:"overrideSchema"}}},title:"variantSchema"}}},title:"featureVariantsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{name:"string",weight:0,weightType:"string",stickiness:"string",payload:{type:"string",value:"string"},overrides:[{contextName:"string",values:["string"]}]}],info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"Create (overwrite) variants for a feature toggle in all environments",description:{content:"This overwrites the current variants for the feature specified in the :featureName parameter in all environments.\n\n                    The backend will validate the input for the following invariants\n\n                    * If there are variants, there needs to be at least one variant with `weightType: variable`\n                    * The sum of the weights of variants with `weightType: fix` must be strictly less than 1000 (< 1000)\n\n                    The backend will also distribute remaining weight up to 1000 after adding the variants with `weightType: fix` together amongst the variants of `weightType: variable`",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Apply a patch to a feature's variants (in all environments).",permalink:"/reference/api/unleash/patch-feature-variants"},next:{title:"Get variants for a feature in an environment",permalink:"/reference/api/unleash/get-environment-feature-variants"}},v={},g=[],f={toc:g};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Create (overwrite) variants for a feature toggle in all environments"),(0,r.kt)(s.Z,{method:"put",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",mdxType:"MethodEndpoint"}),(0,r.kt)("p",null,"This overwrites the current variants for the feature specified in the :featureName parameter in all environments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                The backend will validate the input for the following invariants\n\n                * If there are variants, there needs to be at least one variant with `weightType: variable`\n                * The sum of the weights of variants with `weightType: fix` must be strictly less than 1000 (< 1000)\n\n                The backend will also distribute remaining weight up to 1000 after adding the variants with `weightType: fix` together amongst the variants of `weightType: variable`\n")),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("span",{style:{opacity:"0.6"}}," array"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"variantsSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"weightType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"payload"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"overrides"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"featureVariantsSchema")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"variants"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"weightType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"payload"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"overrides"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "version": 0,\n  "variants": [\n    {\n      "name": "string",\n      "weight": 0,\n      "weightType": "string",\n      "stickiness": "string",\n      "payload": {\n        "type": "string",\n        "value": "string"\n      },\n      "overrides": [\n        {\n          "contextName": "string",\n          "values": [\n            "string"\n          ]\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);