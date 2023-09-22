"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2221],{91334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>k,frontMatter:()=>u,metadata:()=>g,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),o=a(57138),p=a(21439),m=a(9531),l=a(15761),d=a(73418),c=a(92414),h=a(11666);const u={id:"get-feature-variants",title:"Retrieve variants for a feature (deprecated) ",description:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",sidebar_label:"Retrieve variants for a feature (deprecated) ",hide_title:!0,hide_table_of_contents:!0,api:{description:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",deprecated:!0,tags:["Features"],operationId:"getFeatureVariants",responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],description:"A versioned collection of feature toggle variants.",properties:{version:{type:"integer",example:1,description:"The version of the feature variants schema."},variants:{type:"array",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"variable",enum:["variable","fix"]},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",additionalProperties:!1,properties:{type:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string",enum:["json","csv","string"]},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:'{"color": "red"}'}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"},description:"All variants defined for a specific feature toggle."}},title:"featureVariantsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Retrieve variants for a feature (deprecated) ",description:{content:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},f=void 0,g={unversionedId:"reference/api/unleash/get-feature-variants",id:"reference/api/unleash/get-feature-variants",title:"Retrieve variants for a feature (deprecated) ",description:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",source:"@site/docs/reference/api/unleash/get-feature-variants.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-feature-variants",permalink:"/reference/api/unleash/get-feature-variants",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-feature-variants",title:"Retrieve variants for a feature (deprecated) ",description:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",sidebar_label:"Retrieve variants for a feature (deprecated) ",hide_title:!0,hide_table_of_contents:!0,api:{description:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",deprecated:!0,tags:["Features"],operationId:"getFeatureVariants",responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],description:"A versioned collection of feature toggle variants.",properties:{version:{type:"integer",example:1,description:"The version of the feature variants schema."},variants:{type:"array",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"variable",enum:["variable","fix"]},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",additionalProperties:!1,properties:{type:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string",enum:["json","csv","string"]},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:'{"color": "red"}'}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"},description:"All variants defined for a specific feature toggle."}},title:"featureVariantsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Retrieve variants for a feature (deprecated) ",description:{content:"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a [production-type environment](https://docs.getunleash.io/reference/environments) as the source of truth. If more than one production environment is found, the first one will be used.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Mark features as stale / not stale",permalink:"/reference/api/unleash/stale-features"},next:{title:"Apply a patch to a feature's variants (in all environments).",permalink:"/reference/api/unleash/patch-feature-variants"}},v={},y=[{value:"Request",id:"request",level:2}],b={toc:y};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Retrieve variants for a feature (deprecated) "),(0,s.kt)(n.Z,{method:"get",path:"/api/admin/projects/{projectId}/features/{featureName}/variants",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("admonition",{title:"deprecated",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,s.kt)("p",null,"(deprecated from 4.21) Retrieve the variants for the specified feature. From Unleash 4.21 onwards, this endpoint will attempt to choose a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/environments"},"production-type environment")," as the source of truth. If more than one production environment is found, the first one will be used."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"featureVariantsSchema")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:1,description:"The version of the feature variants schema."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"variants"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"All variants defined for a specific feature toggle.")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:"**Possible values:** `<= 1000`",schema:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"weightType",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`variable`, `fix`]",schema:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"variable",enum:["variable","fix"]},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"payload"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Extra data configured for this variant")),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`json`, `csv`, `string`]",schema:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string",enum:["json","csv","string"]},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The actual value of payload",type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"overrides"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "version": 1,\n  "variants": [\n    {\n      "name": "blue_group",\n      "weight": 0,\n      "weightType": "variable",\n      "stickiness": "custom.context.field",\n      "payload": {\n        "type": "json",\n        "value": "{\\"color\\": \\"red\\"}"\n      },\n      "overrides": [\n        {\n          "contextName": "userId",\n          "values": [\n            "red",\n            "blue"\n          ]\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The requested resource was not found.")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);