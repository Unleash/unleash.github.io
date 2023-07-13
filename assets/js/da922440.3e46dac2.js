"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7466],{29751:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>k,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var i=a(87462),r=(a(67294),a(3905)),s=a(80334),n=(a(11032),a(46062)),o=a(57138),l=a(21439),m=a(9531),p=a(15761),h=a(73418),d=a(92414),c=a(11666);const u={id:"overwrite-environment-feature-variants",title:"Create (overwrite) variants for a feature in an environment",description:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.",sidebar_label:"Create (overwrite) variants for a feature in an environment",hide_title:!0,hide_table_of_contents:!0,api:{description:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.\n                        \n                        The backend will validate the input for the following invariants:\n                        \n                    * If there are variants, there needs to be at least one variant with `weightType: variable`\n                    * The sum of the weights of variants with `weightType: fix` must be strictly less than 1000 (< 1000)\n\n                    The backend will also distribute remaining weight up to 1000 after adding the variants with `weightType: fix` together amongst the variants of `weightType: variable`",tags:["Features"],operationId:"overwriteEnvironmentFeatureVariants",requestBody:{description:"variantsSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"fix"},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",properties:{type:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string"},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:"{color: red}"}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"},title:"variantsSchema"}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"fix"},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",properties:{type:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string"},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:"{color: red}"}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"}}},title:"featureVariantsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{name:"blue_group",weight:0,weightType:"fix",stickiness:"custom.context.field",payload:{type:"json",value:"{color: red}"},overrides:[{contextName:"userId",values:["red","blue"]}]}],info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Create (overwrite) variants for a feature in an environment",description:{content:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.\n                        \n                        The backend will validate the input for the following invariants:\n                        \n                    * If there are variants, there needs to be at least one variant with `weightType: variable`\n                    * The sum of the weights of variants with `weightType: fix` must be strictly less than 1000 (< 1000)\n\n                    The backend will also distribute remaining weight up to 1000 after adding the variants with `weightType: fix` together amongst the variants of `weightType: variable`",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},v=void 0,g={unversionedId:"reference/api/unleash/overwrite-environment-feature-variants",id:"reference/api/unleash/overwrite-environment-feature-variants",title:"Create (overwrite) variants for a feature in an environment",description:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.",source:"@site/docs/reference/api/unleash/overwrite-environment-feature-variants.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/overwrite-environment-feature-variants",permalink:"/reference/api/unleash/overwrite-environment-feature-variants",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"overwrite-environment-feature-variants",title:"Create (overwrite) variants for a feature in an environment",description:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.",sidebar_label:"Create (overwrite) variants for a feature in an environment",hide_title:!0,hide_table_of_contents:!0,api:{description:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.\n                        \n                        The backend will validate the input for the following invariants:\n                        \n                    * If there are variants, there needs to be at least one variant with `weightType: variable`\n                    * The sum of the weights of variants with `weightType: fix` must be strictly less than 1000 (< 1000)\n\n                    The backend will also distribute remaining weight up to 1000 after adding the variants with `weightType: fix` together amongst the variants of `weightType: variable`",tags:["Features"],operationId:"overwriteEnvironmentFeatureVariants",requestBody:{description:"variantsSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"fix"},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",properties:{type:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string"},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:"{color: red}"}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"},title:"variantsSchema"}}}},responses:{200:{description:"featureVariantsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","variants"],properties:{version:{type:"integer"},variants:{type:"array",items:{type:"object",additionalProperties:!1,description:"A variant allows for further separation of users into segments. See [our excellent documentation](https://docs.getunleash.io/reference/feature-toggle-variants#what-are-variants) for a more detailed description",required:["name","weight"],properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},weight:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},weightType:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"fix"},stickiness:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},payload:{type:"object",required:["type","value"],description:"Extra data configured for this variant",properties:{type:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string"},value:{description:"The actual value of payload",type:"string"}},example:{type:"json",value:"{color: red}"}},overrides:{description:"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.",type:"array",items:{type:"object",additionalProperties:!1,required:["contextName","values"],description:"An override for deciding which variant should be assigned to a user based on the context name",properties:{contextName:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},values:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]}},title:"overrideSchema"}}},title:"variantSchema"}}},title:"featureVariantsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/variants",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{name:"blue_group",weight:0,weightType:"fix",stickiness:"custom.context.field",payload:{type:"json",value:"{color: red}"},overrides:[{contextName:"userId",values:["red","blue"]}]}],info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Create (overwrite) variants for a feature in an environment",description:{content:"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter.\n                        \n                        The backend will validate the input for the following invariants:\n                        \n                    * If there are variants, there needs to be at least one variant with `weightType: variable`\n                    * The sum of the weights of variants with `weightType: fix` must be strictly less than 1000 (< 1000)\n\n                    The backend will also distribute remaining weight up to 1000 after adding the variants with `weightType: fix` together amongst the variants of `weightType: variable`",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment","variants"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Patch a feature's variants in an environment",permalink:"/reference/api/unleash/patch-environments-feature-variants"},next:{title:"overwriteFeatureVariantsOnEnvironments",permalink:"/reference/api/unleash/overwrite-feature-variants-on-environments"}},y={},f=[{value:"Request",id:"request",level:2}],w={toc:f};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Create (overwrite) variants for a feature in an environment"),(0,r.kt)(n.Z,{method:"put",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/variants",mdxType:"MethodEndpoint"}),(0,r.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"This overwrites the current variants for the feature toggle in the :featureName parameter for the :environment parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                    The backend will validate the input for the following invariants:\n                    \n                * If there are variants, there needs to be at least one variant with `weightType: variable`\n                * The sum of the weights of variants with `weightType: fix` must be strictly less than 1000 (< 1000)\n\n                The backend will also distribute remaining weight up to 1000 after adding the variants with `weightType: fix` together amongst the variants of `weightType: variable`\n")),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(m.Z,{className:"paramsItem",param:{name:"environment",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,r.kt)("span",{style:{opacity:"0.6"}}," array"),(0,r.kt)("strong",{className:"openapi-schema__required"},"required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"variantsSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(h.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:"**Possible values:** `<= 1000`",schema:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"weightType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"fix"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"payload"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Extra data configured for this variant")),(0,r.kt)(h.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The actual value of payload",type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(h.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"overrides"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(h.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"featureVariantsSchema")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(h.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"variants"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(h.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:"**Possible values:** `<= 1000`",schema:{type:"number",description:"The weight is the likelihood of any one user getting this variant. It is a number between 0 and 1000. See the section on [variant weights](https://docs.getunleash.io/reference/feature-toggle-variants#variant-weight) for more information",minimum:0,maximum:1e3},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"weightType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000",type:"string",example:"fix"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"[Stickiness](https://docs.getunleash.io/reference/feature-toggle-variants#variant-stickiness) is how Unleash guarantees that the same user gets the same variant every time",example:"custom.context.field"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"payload"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Extra data configured for this variant")),(0,r.kt)(h.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The type of the value. Commonly used types are string, json and csv.",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The actual value of payload",type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(h.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"overrides"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Overrides assigning specific variants to specific users. The weighting system automatically assigns users to specific groups for you, but any overrides in this list will take precedence.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(h.Z,{collapsible:!1,name:"contextName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field used to determine overrides",type:"string",example:"userId"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Which values that should be overriden",type:"array",items:{type:"string"},example:["red","blue"]},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "version": 0,\n  "variants": [\n    {\n      "name": "blue_group",\n      "weight": 0,\n      "weightType": "fix",\n      "stickiness": "custom.context.field",\n      "payload": {\n        "type": "json",\n        "value": "{color: red}"\n      },\n      "overrides": [\n        {\n          "contextName": "userId",\n          "values": [\n            "red",\n            "blue"\n          ]\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);