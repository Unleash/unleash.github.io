"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3133],{83987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>u,metadata:()=>v,toc:()=>f});var i=a(87462),r=(a(67294),a(3905)),s=a(80334),n=(a(11032),a(46062)),o=a(57138),m=a(21439),p=a(9531),l=a(15761),c=a(73418),d=a(92414),h=a(11666);const u={id:"overwrite-feature-variants-on-environments",title:"Create (overwrite) variants for a feature toggle in multiple environments",description:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.",sidebar_label:"Create (overwrite) variants for a feature toggle in multiple environments",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"overwriteFeatureVariantsOnEnvironments",description:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.",requestBody:{description:"pushVariantsSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data used when copying variants into a new environment.",properties:{variants:{type:"array",description:"The variants to write to the provided environments",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"variable",enum:["variable","fix"]},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",additionalProperties:!1,properties:{type:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string",enum:["json","csv","string"]},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:'{"color": "red"}'}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"}},environments:{type:"array",description:"The enviromnents to write the provided variants to",items:{type:"string"}}},title:"pushVariantsSchema"}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],description:"A versioned collection of feature toggle variants.",properties:{version:{type:"integer",example:1,description:"The version of the feature variants schema."},variants:{type:"array",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"variable",enum:["variable","fix"]},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",additionalProperties:!1,properties:{type:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string",enum:["json","csv","string"]},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:'{"color": "red"}'}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"},description:"All variants defined for a specific feature toggle."}},title:"featureVariantsSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/features/{featureName}/variants-batch",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{variants:[{name:"blue_group",weight:0,weightType:"variable",stickiness:"custom.context.field",payload:{type:"json",value:'{"color": "red"}'},overrides:[{contextName:"userId",values:["red","blue"]}]}],environments:["string"]},info:{title:"Unleash API",version:"5.3.0-main"},postman:{name:"Create (overwrite) variants for a feature toggle in multiple environments",description:{content:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants-batch"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,v={unversionedId:"reference/api/unleash/overwrite-feature-variants-on-environments",id:"reference/api/unleash/overwrite-feature-variants-on-environments",title:"Create (overwrite) variants for a feature toggle in multiple environments",description:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.",source:"@site/docs/reference/api/unleash/overwrite-feature-variants-on-environments.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/overwrite-feature-variants-on-environments",permalink:"/reference/api/unleash/overwrite-feature-variants-on-environments",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"overwrite-feature-variants-on-environments",title:"Create (overwrite) variants for a feature toggle in multiple environments",description:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.",sidebar_label:"Create (overwrite) variants for a feature toggle in multiple environments",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"overwriteFeatureVariantsOnEnvironments",description:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.",requestBody:{description:"pushVariantsSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data used when copying variants into a new environment.",properties:{variants:{type:"array",description:"The variants to write to the provided environments",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"variable",enum:["variable","fix"]},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",additionalProperties:!1,properties:{type:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string",enum:["json","csv","string"]},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:'{"color": "red"}'}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"}},environments:{type:"array",description:"The enviromnents to write the provided variants to",items:{type:"string"}}},title:"pushVariantsSchema"}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],description:"A versioned collection of feature toggle variants.",properties:{version:{type:"integer",example:1,description:"The version of the feature variants schema."},variants:{type:"array",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"variable",enum:["variable","fix"]},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",additionalProperties:!1,properties:{type:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string",enum:["json","csv","string"]},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:'{"color": "red"}'}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"},description:"All variants defined for a specific feature toggle."}},title:"featureVariantsSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/features/{featureName}/variants-batch",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{variants:[{name:"blue_group",weight:0,weightType:"variable",stickiness:"custom.context.field",payload:{type:"json",value:'{"color": "red"}'},overrides:[{contextName:"userId",values:["red","blue"]}]}],environments:["string"]},info:{title:"Unleash API",version:"5.3.0-main"},postman:{name:"Create (overwrite) variants for a feature toggle in multiple environments",description:{content:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","variants-batch"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Create (overwrite) variants for a feature in an environment",permalink:"/reference/api/unleash/overwrite-environment-feature-variants"},next:{title:"Archives a list of features",permalink:"/reference/api/unleash/archive-features"}},y={},f=[{value:"Request",id:"request",level:2}],b={toc:f};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Create (overwrite) variants for a feature toggle in multiple environments"),(0,r.kt)(n.Z,{method:"put",path:"/api/admin/projects/{projectId}/features/{featureName}/variants-batch",mdxType:"MethodEndpoint"}),(0,r.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter."),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(m.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,r.kt)(h.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,r.kt)("strong",{className:"openapi-schema__required"},"required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"pushVariantsSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"variants"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The variants to write to the provided environments")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:"**Possible values:** `<= 1000`",schema:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"weightType",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`variable`, `fix`]",schema:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"variable",enum:["variable","fix"]},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"payload"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Extra data configured for this variant")),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`json`, `csv`, `string`]",schema:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string",enum:["json","csv","string"]},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The actual value of payload",type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"overrides"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(c.Z,{collapsible:!1,name:"environments",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The enviromnents to write the provided variants to",items:{type:"string"}},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"featureVariantsSchema")),(0,r.kt)("div",null,(0,r.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:1,description:"The version of the feature variants schema."},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"variants"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"All variants defined for a specific feature toggle.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:"**Possible values:** `<= 1000`",schema:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"weightType",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`variable`, `fix`]",schema:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"variable",enum:["variable","fix"]},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"payload"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Extra data configured for this variant")),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`json`, `csv`, `string`]",schema:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string",enum:["json","csv","string"]},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The actual value of payload",type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"overrides"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "version": 1,\n  "variants": [\n    {\n      "name": "blue_group",\n      "weight": 0,\n      "weightType": "variable",\n      "stickiness": "custom.context.field",\n      "payload": {\n        "type": "json",\n        "value": "{\\"color\\": \\"red\\"}"\n      },\n      "overrides": [\n        {\n          "contextName": "userId",\n          "values": [\n            "red",\n            "blue"\n          ]\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(h.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The request data does not match what we expect.")),(0,r.kt)("div",null,(0,r.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,r.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,r.kt)("div",null,(0,r.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,r.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,r.kt)("div",null,(0,r.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,r.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);