"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[63853],{9425:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var a=i(87462),s=(i(67294),i(3905)),n=i(80334),r=(i(11032),i(46062)),l=i(57138),o=i(21439),p=(i(9531),i(15761)),m=i(73418),d=i(92414),u=i(30433);const c={id:"get-all-feature-types",title:"Get all feature types",description:"Retrieves all feature types that exist in this Unleash instance, along with their descriptions and lifetimes.",sidebar_label:"Get all feature types",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Feature Types"],operationId:"getAllFeatureTypes",description:"Retrieves all feature types that exist in this Unleash instance, along with their descriptions and lifetimes.",responses:{200:{description:"featureTypesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A list of [feature toggle types](https://docs.getunleash.io/reference/feature-toggle-types) and the schema version used to represent those feature types.",required:["version","types"],properties:{version:{type:"integer",enum:[1],example:1,description:"The schema version used to describe the feature toggle types listed in the `types` property."},types:{type:"array",description:"The list of feature toggle types.",items:{type:"object",description:"A [feature toggle type](https://docs.getunleash.io/reference/feature-toggle-types).",additionalProperties:!1,required:["id","name","description","lifetimeDays"],properties:{id:{type:"string",description:"The identifier of this feature toggle type.",example:"kill-switch"},name:{type:"string",description:"The display name of this feature toggle type.",example:"Kill switch"},description:{type:"string",description:"A description of what this feature toggle type is intended to be used for.",example:"Kill switch feature toggles are used to quickly turn on or off critical functionality in your system."},lifetimeDays:{type:"integer",minimum:0,description:"How many days it takes before a feature toggle of this typed is flagged as [potentially stale](https://docs.getunleash.io/reference/technical-debt#stale-and-potentially-stale-toggles) by Unleash. If this value is `null`, Unleash will never mark it as potentially stale.",example:40,nullable:!0}},title:"featureTypeSchema"},example:[{id:"release",name:"Release",description:"Release feature toggles are used to release new features.",lifetimeDays:40},{id:"experiment",name:"Experiment",description:"Experiment feature toggles are used to test and verify multiple different versions of a feature.",lifetimeDays:40},{id:"operational",name:"Operational",description:"Operational feature toggles are used to control aspects of a rollout.",lifetimeDays:7},{id:"kill-switch",name:"Kill switch",description:"Kill switch feature toggles are used to quickly turn on or off critical functionality in your system.",lifetimeDays:null},{id:"permission",name:"Permission",description:"Permission feature toggles are used to control permissions in your system.",lifetimeDays:null}]}},title:"featureTypesSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/feature-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.10"},postman:{name:"Get all feature types",description:{content:"Retrieves all feature types that exist in this Unleash instance, along with their descriptions and lifetimes.",type:"text/plain"},url:{path:["api","admin","feature-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,y={unversionedId:"reference/api/unleash/get-all-feature-types",id:"reference/api/unleash/get-all-feature-types",title:"Get all feature types",description:"Retrieves all feature types that exist in this Unleash instance, along with their descriptions and lifetimes.",source:"@site/docs/reference/api/unleash/get-all-feature-types.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-all-feature-types",permalink:"/reference/api/unleash/get-all-feature-types",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-feature-types",title:"Get all feature types",description:"Retrieves all feature types that exist in this Unleash instance, along with their descriptions and lifetimes.",sidebar_label:"Get all feature types",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Feature Types"],operationId:"getAllFeatureTypes",description:"Retrieves all feature types that exist in this Unleash instance, along with their descriptions and lifetimes.",responses:{200:{description:"featureTypesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A list of [feature toggle types](https://docs.getunleash.io/reference/feature-toggle-types) and the schema version used to represent those feature types.",required:["version","types"],properties:{version:{type:"integer",enum:[1],example:1,description:"The schema version used to describe the feature toggle types listed in the `types` property."},types:{type:"array",description:"The list of feature toggle types.",items:{type:"object",description:"A [feature toggle type](https://docs.getunleash.io/reference/feature-toggle-types).",additionalProperties:!1,required:["id","name","description","lifetimeDays"],properties:{id:{type:"string",description:"The identifier of this feature toggle type.",example:"kill-switch"},name:{type:"string",description:"The display name of this feature toggle type.",example:"Kill switch"},description:{type:"string",description:"A description of what this feature toggle type is intended to be used for.",example:"Kill switch feature toggles are used to quickly turn on or off critical functionality in your system."},lifetimeDays:{type:"integer",minimum:0,description:"How many days it takes before a feature toggle of this typed is flagged as [potentially stale](https://docs.getunleash.io/reference/technical-debt#stale-and-potentially-stale-toggles) by Unleash. If this value is `null`, Unleash will never mark it as potentially stale.",example:40,nullable:!0}},title:"featureTypeSchema"},example:[{id:"release",name:"Release",description:"Release feature toggles are used to release new features.",lifetimeDays:40},{id:"experiment",name:"Experiment",description:"Experiment feature toggles are used to test and verify multiple different versions of a feature.",lifetimeDays:40},{id:"operational",name:"Operational",description:"Operational feature toggles are used to control aspects of a rollout.",lifetimeDays:7},{id:"kill-switch",name:"Kill switch",description:"Kill switch feature toggles are used to quickly turn on or off critical functionality in your system.",lifetimeDays:null},{id:"permission",name:"Permission",description:"Permission feature toggles are used to control permissions in your system.",lifetimeDays:null}]}},title:"featureTypesSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/feature-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.10"},postman:{name:"Get all feature types",description:{content:"Retrieves all feature types that exist in this Unleash instance, along with their descriptions and lifetimes.",type:"text/plain"},url:{path:["api","admin","feature-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Feature Types",permalink:"/reference/api/unleash/feature-types"},next:{title:"Update feature type lifetime",permalink:"/reference/api/unleash/update-feature-type-lifetime"}},f={},g=[{value:"Request",id:"request",level:2}],k={toc:g};function b(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Get all feature types"),(0,s.kt)(r.Z,{method:"get",path:"/api/admin/feature-types",mdxType:"MethodEndpoint"}),(0,s.kt)(l.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Retrieves all feature types that exist in this Unleash instance, along with their descriptions and lifetimes."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"featureTypesSchema")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** [`1`]",schema:{type:"integer",enum:[1],example:1,description:"The schema version used to describe the feature toggle types listed in the `types` property."},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"types"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The list of feature toggle types.")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The identifier of this feature toggle type.",example:"kill-switch"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The display name of this feature toggle type.",example:"Kill switch"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A description of what this feature toggle type is intended to be used for.",example:"Kill switch feature toggles are used to quickly turn on or off critical functionality in your system."},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"lifetimeDays",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0,description:"How many days it takes before a feature toggle of this typed is flagged as [potentially stale](https://docs.getunleash.io/reference/technical-debt#stale-and-potentially-stale-toggles) by Unleash. If this value is `null`, Unleash will never mark it as potentially stale.",example:40,nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "version": 1,\n  "types": [\n    {\n      "id": "release",\n      "name": "Release",\n      "description": "Release feature toggles are used to release new features.",\n      "lifetimeDays": 40\n    },\n    {\n      "id": "experiment",\n      "name": "Experiment",\n      "description": "Experiment feature toggles are used to test and verify multiple different versions of a feature.",\n      "lifetimeDays": 40\n    },\n    {\n      "id": "operational",\n      "name": "Operational",\n      "description": "Operational feature toggles are used to control aspects of a rollout.",\n      "lifetimeDays": 7\n    },\n    {\n      "id": "kill-switch",\n      "name": "Kill switch",\n      "description": "Kill switch feature toggles are used to quickly turn on or off critical functionality in your system.",\n      "lifetimeDays": null\n    },\n    {\n      "id": "permission",\n      "name": "Permission",\n      "description": "Permission feature toggles are used to control permissions in your system.",\n      "lifetimeDays": null\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(u.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);