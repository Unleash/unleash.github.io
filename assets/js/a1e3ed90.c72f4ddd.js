"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5146],{20307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>b,frontMatter:()=>u,metadata:()=>v,toc:()=>g});var i=a(87462),r=(a(67294),a(3905)),n=a(80334),s=(a(11032),a(46062)),p=a(57138),m=a(21439),o=a(9531),c=a(15761),l=a(73418),d=a(92414),h=a(11666);const u={id:"patch-environments-feature-variants",title:"Patch a feature's variants in an environment",description:"Apply a list of patches to the features environments in the specified environment. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).",sidebar_label:"Patch a feature's variants in an environment",hide_title:!0,hide_table_of_contents:!0,api:{description:"Apply a list of patches to the features environments in the specified environment. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).",tags:["Features"],operationId:"patchEnvironmentsFeatureVariants",requestBody:{description:"patchesSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",required:["path","op"],properties:{path:{type:"string"},op:{type:"string",enum:["add","remove","replace","copy","move"]},from:{type:"string"},value:{}},title:"patchSchema"},title:"patchesSchema"}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}},title:"overrideSchema"}}},title:"variantSchema"}}},title:"featureVariantsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"patch",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{path:"string",op:"add",from:"string",value:{}}],info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Patch a feature's variants in an environment",description:{content:"Apply a list of patches to the features environments in the specified environment. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,v={unversionedId:"reference/api/unleash/patch-environments-feature-variants",id:"reference/api/unleash/patch-environments-feature-variants",title:"Patch a feature's variants in an environment",description:"Apply a list of patches to the features environments in the specified environment. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).",source:"@site/docs/reference/api/unleash/patch-environments-feature-variants.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/patch-environments-feature-variants",permalink:"/reference/api/unleash/patch-environments-feature-variants",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"patch-environments-feature-variants",title:"Patch a feature's variants in an environment",description:"Apply a list of patches to the features environments in the specified environment. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).",sidebar_label:"Patch a feature's variants in an environment",hide_title:!0,hide_table_of_contents:!0,api:{description:"Apply a list of patches to the features environments in the specified environment. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).",tags:["Features"],operationId:"patchEnvironmentsFeatureVariants",requestBody:{description:"patchesSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",required:["path","op"],properties:{path:{type:"string"},op:{type:"string",enum:["add","remove","replace","copy","move"]},from:{type:"string"},value:{}},title:"patchSchema"},title:"patchesSchema"}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}},title:"overrideSchema"}}},title:"variantSchema"}}},title:"featureVariantsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"patch",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{path:"string",op:"add",from:"string",value:{}}],info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Patch a feature's variants in an environment",description:{content:"Apply a list of patches to the features environments in the specified environment. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get variants for a feature in an environment",permalink:"/reference/api/unleash/get-environment-feature-variants"},next:{title:"Create (overwrite) variants for a feature in an environment",permalink:"/reference/api/unleash/overwrite-environment-feature-variants"}},f={},g=[{value:"Request",id:"request",level:2}],k={toc:g};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Patch a feature's variants in an environment"),(0,r.kt)(s.Z,{method:"patch",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/variants",mdxType:"MethodEndpoint"}),(0,r.kt)(p.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"Apply a list of patches to the features environments in the specified environment. The patch objects should conform to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6902"},"JSON-patch format (RFC 6902)"),"."),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"environment",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(m.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,r.kt)(h.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,r.kt)("span",{style:{opacity:"0.6"}}," array"),(0,r.kt)("strong",{className:"openapi-schema__required"},"required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"patchesSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"path",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"op",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`add`, `remove`, `replace`, `copy`, `move`]",schema:{type:"string",enum:["add","remove","replace","copy","move"]},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"from",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"",qualifierMessage:void 0,schema:{},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"featureVariantsSchema")),(0,r.kt)("div",null,(0,r.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"variants"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"weightType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"payload"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"overrides"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "version": 0,\n  "variants": [\n    {\n      "name": "string",\n      "weight": 0,\n      "weightType": "string",\n      "stickiness": "string",\n      "payload": {\n        "type": "string",\n        "value": "string"\n      },\n      "overrides": [\n        {\n          "contextName": "string",\n          "values": [\n            "string"\n          ]\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);