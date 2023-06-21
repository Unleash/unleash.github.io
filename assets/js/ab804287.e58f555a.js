"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1081],{43432:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>v,contentTitle:()=>y,default:()=>b,frontMatter:()=>u,metadata:()=>f,toc:()=>g});var i=t(87462),s=(t(67294),t(3905)),r=t(80334),n=(t(11032),t(46062)),p=t(57138),o=t(21439),m=t(9531),c=t(15761),l=t(73418),h=t(92414),d=t(11666);const u={id:"patch-feature-variants",title:"Apply a patch to a feature's variants (in all environments).",description:"Apply a list of patches patch to the specified feature's variants. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).",sidebar_label:"Apply a patch to a feature's variants (in all environments).",hide_title:!0,hide_table_of_contents:!0,api:{description:"Apply a list of patches patch to the specified feature's variants. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).\n                        \n                        \u26a0\ufe0f **Warning**: This method is not atomic. If something fails in the middle of applying the patch, you can be left with a half-applied patch. We recommend that you instead [patch variants on a per-environment basis](/reference/api/unleash/patch-environments-feature-variants), which **is** an atomic operation.",tags:["Features"],operationId:"patchFeatureVariants",requestBody:{description:"patchesSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",required:["path","op"],properties:{path:{type:"string"},op:{type:"string",enum:["add","remove","replace","copy","move"]},from:{type:"string"},value:{}},title:"patchSchema"},title:"patchesSchema"}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}},title:"overrideSchema"}}},title:"variantSchema"}}},title:"featureVariantsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"patch",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{path:"string",op:"add",from:"string",value:{}}],info:{title:"Unleash API",version:"5.1.9"},postman:{name:"Apply a patch to a feature's variants (in all environments).",description:{content:"Apply a list of patches patch to the specified feature's variants. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).\n                        \n                        \u26a0\ufe0f **Warning**: This method is not atomic. If something fails in the middle of applying the patch, you can be left with a half-applied patch. We recommend that you instead [patch variants on a per-environment basis](/reference/api/unleash/patch-environments-feature-variants), which **is** an atomic operation.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,f={unversionedId:"reference/api/unleash/patch-feature-variants",id:"reference/api/unleash/patch-feature-variants",title:"Apply a patch to a feature's variants (in all environments).",description:"Apply a list of patches patch to the specified feature's variants. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).",source:"@site/docs/reference/api/unleash/patch-feature-variants.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/patch-feature-variants",permalink:"/reference/api/unleash/patch-feature-variants",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"patch-feature-variants",title:"Apply a patch to a feature's variants (in all environments).",description:"Apply a list of patches patch to the specified feature's variants. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).",sidebar_label:"Apply a patch to a feature's variants (in all environments).",hide_title:!0,hide_table_of_contents:!0,api:{description:"Apply a list of patches patch to the specified feature's variants. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).\n                        \n                        \u26a0\ufe0f **Warning**: This method is not atomic. If something fails in the middle of applying the patch, you can be left with a half-applied patch. We recommend that you instead [patch variants on a per-environment basis](/docs/reference/api/unleash/patch-environments-feature-variants.api.mdx), which **is** an atomic operation.",tags:["Features"],operationId:"patchFeatureVariants",requestBody:{description:"patchesSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",required:["path","op"],properties:{path:{type:"string"},op:{type:"string",enum:["add","remove","replace","copy","move"]},from:{type:"string"},value:{}},title:"patchSchema"},title:"patchesSchema"}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,required:["name","weight"],properties:{name:{type:"string"},weight:{type:"number"},weightType:{type:"string"},stickiness:{type:"string"},payload:{type:"object",required:["type","value"],properties:{type:{type:"string"},value:{type:"string"}}},overrides:{type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],properties:{contextName:{type:"string"},values:{type:"array",items:{type:"string"}}},title:"overrideSchema"}}},title:"variantSchema"}}},title:"featureVariantsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"patch",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{path:"string",op:"add",from:"string",value:{}}],info:{title:"Unleash API",version:"5.1.9"},postman:{name:"Apply a patch to a feature's variants (in all environments).",description:{content:"Apply a list of patches patch to the specified feature's variants. The patch objects should conform to the [JSON-patch format (RFC 6902)](https://www.rfc-editor.org/rfc/rfc6902).\n                        \n                        \u26a0\ufe0f **Warning**: This method is not atomic. If something fails in the middle of applying the patch, you can be left with a half-applied patch. We recommend that you instead [patch variants on a per-environment basis](/docs/reference/api/unleash/patch-environments-feature-variants.api.mdx), which **is** an atomic operation.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Retrieve variants for a feature (deprecated) ",permalink:"/reference/api/unleash/get-feature-variants"},next:{title:"Create (overwrite) variants for a feature toggle in all environments",permalink:"/reference/api/unleash/overwrite-feature-variants"}},v={},g=[{value:"Request",id:"request",level:2}],k={toc:g};function b(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Apply a patch to a feature's variants (in all environments)."),(0,s.kt)(n.Z,{method:"patch",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",mdxType:"MethodEndpoint"}),(0,s.kt)(p.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Apply a list of patches patch to the specified feature's variants. The patch objects should conform to the ",(0,s.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6902"},"JSON-patch format (RFC 6902)"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"                    \u26a0\ufe0f **Warning**: This method is not atomic. If something fails in the middle of applying the patch, you can be left with a half-applied patch. We recommend that you instead [patch variants on a per-environment basis](/reference/api/unleash/patch-environments-feature-variants), which **is** an atomic operation.\n")),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("span",{style:{opacity:"0.6"}}," array"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"patchesSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"path",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"op",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`add`, `remove`, `replace`, `copy`, `move`]",schema:{type:"string",enum:["add","remove","replace","copy","move"]},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"from",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"",qualifierMessage:void 0,schema:{},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"featureVariantsSchema")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(h.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"variants"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"weightType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"payload"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"overrides"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "version": 0,\n  "variants": [\n    {\n      "name": "string",\n      "weight": 0,\n      "weightType": "string",\n      "stickiness": "string",\n      "payload": {\n        "type": "string",\n        "value": "string"\n      },\n      "overrides": [\n        {\n          "contextName": "string",\n          "values": [\n            "string"\n          ]\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);