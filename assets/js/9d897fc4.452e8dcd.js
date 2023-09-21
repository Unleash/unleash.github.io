"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1547],{94392:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>g,toc:()=>y});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),r=(a(11032),a(46062)),o=a(57138),l=a(21439),p=(a(9531),a(15761)),m=a(73418),c=a(92414),h=a(11666);const d={id:"get-ui-config",title:"Get UI configuration",description:"Retrieves the full configuration used to set up the Unleash Admin UI.",sidebar_label:"Get UI configuration",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],description:"Retrieves the full configuration used to set up the Unleash Admin UI.",operationId:"getUiConfig",responses:{200:{description:"uiConfigSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A collection of properties used to configure the Unleash Admin UI.",required:["version","unleashUrl","baseUriPath","versionInfo"],properties:{slogan:{type:"string",description:"The slogan to display in the UI footer.",example:"The enterprise-ready feature toggle service."},name:{type:"string",description:"The name of this Unleash instance. Used to build the text in the footer.",example:"Unleash enterprise"},version:{type:"string",description:"The current version of Unleash",example:"5.3.0-main"},environment:{type:"string",description:"What kind of Unleash instance it is: Enterprise, Pro, or Open source",example:"Enterprise"},unleashUrl:{type:"string",description:"The URL of the Unleash instance.",example:"https://unleash.mycompany.com/enterprise"},baseUriPath:{type:"string",description:"The base URI path at which this Unleash instance is listening.",example:"/enterprise"},disablePasswordAuth:{type:"boolean",description:"Whether password authentication should be disabled or not.",example:!1},emailEnabled:{type:"boolean",description:"Whether this instance can send out emails or not.",example:!0},maintenanceMode:{type:"boolean",description:"Whether maintenance mode is currently active or not.",example:!1},segmentValuesLimit:{type:"number",description:"The maximum number of values that can be used in a single segment.",example:1e3},strategySegmentsLimit:{type:"number",description:"The maximum number of segments that can be applied to a single strategy.",example:5},networkViewEnabled:{type:"boolean",description:"Whether to enable the Unleash network view or not.",example:!0},frontendApiOrigins:{type:"array",description:"The list of origins that the front-end API should accept requests from.",example:["*"],items:{type:"string"}},flags:{type:"object",description:"Additional (largely experimental) features that are enabled in this Unleash instance.",example:{messageBanner:{name:"disabled",enabled:!1},featuresExportImport:!0},additionalProperties:{anyOf:[{type:"boolean"},{type:"object",additionalProperties:!1,description:"A representation of an evaluated Unleash feature variant.",properties:{name:{description:"The name of the variant. Will always be disabled if `enabled` is false.",example:"blue",type:"string"},enabled:{type:"boolean",description:"Whether the variant is enabled or not.",example:!0},payload:{type:"object",description:"Additional data associated with this variant.",additionalProperties:!1,properties:{type:{description:"The type of data contained.",type:"string",enum:["string","json","csv"],example:"json"},value:{description:"The actual associated data",type:"string",example:'{ "starter": "squirtle" }'}}}},title:"variantFlagSchema"}]}},links:{description:"Relevant links to use in the UI.",example:[{value:"Documentation",icon:"library_books",href:"https://docs.getunleash.io/docs",title:"User documentation"},{value:"GitHub",icon:"c_github",href:"https://github.com/Unleash/unleash",title:"Source code on GitHub"}],"x-enforcer-exception-skip-codes":"WSCH006",type:"array",items:{type:"object"}},authenticationType:{type:"string",description:"The type of authentication enabled for this Unleash instance",example:"enterprise",enum:["open-source","demo","enterprise","hosted","custom","none"]},versionInfo:{type:"object",additionalProperties:!1,description:"Detailed information about an Unleash version",required:["current","latest","isLatest"],properties:{current:{type:"object",additionalProperties:!1,description:"The current version of Unleash.",properties:{oss:{description:"The OSS version used when building this Unleash instance, represented as a git revision belonging to the [main Unleash git repo](https://github.com/Unleash/unleash/)",example:"5.3.0-main",type:"string"},enterprise:{description:"The Enterpris version of Unleash used to build this instance, represented as a git revision belonging to the [Unleash Enterprise](https://github.com/ivarconr/unleash-enterprise) repository. Will be an empty string if no enterprise version was used,",example:"5.3.0-main+2105.45ed03c9",type:"string"}}},latest:{type:"object",additionalProperties:!1,description:"Information about the latest available Unleash releases. Will be an empty object if no data is available.",properties:{oss:{description:"The latest available OSS version of Unleash",type:"string",example:"5.1.5"},enterprise:{description:"The latest available Enterprise version of Unleash",type:"string",example:"5.1.5"}}},isLatest:{type:"boolean",description:"Whether the Unleash server is running the latest release (`true`) or if there are updates available (`false`)",example:!0},instanceId:{type:"string",description:"The instance identifier of the Unleash instance",example:"0d652a82-43db-4144-8e02-864b0b030710"}},title:"versionSchema"}},title:"uiConfigSchema"}}}}},method:"get",path:"/api/admin/ui-config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Get UI configuration",description:{content:"Retrieves the full configuration used to set up the Unleash Admin UI.",type:"text/plain"},url:{path:["api","admin","ui-config"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/get-ui-config",id:"reference/api/unleash/get-ui-config",title:"Get UI configuration",description:"Retrieves the full configuration used to set up the Unleash Admin UI.",source:"@site/docs/reference/api/unleash/get-ui-config.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-ui-config",permalink:"/reference/api/unleash/get-ui-config",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-ui-config",title:"Get UI configuration",description:"Retrieves the full configuration used to set up the Unleash Admin UI.",sidebar_label:"Get UI configuration",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],description:"Retrieves the full configuration used to set up the Unleash Admin UI.",operationId:"getUiConfig",responses:{200:{description:"uiConfigSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A collection of properties used to configure the Unleash Admin UI.",required:["version","unleashUrl","baseUriPath","versionInfo"],properties:{slogan:{type:"string",description:"The slogan to display in the UI footer.",example:"The enterprise-ready feature toggle service."},name:{type:"string",description:"The name of this Unleash instance. Used to build the text in the footer.",example:"Unleash enterprise"},version:{type:"string",description:"The current version of Unleash",example:"5.3.0-main"},environment:{type:"string",description:"What kind of Unleash instance it is: Enterprise, Pro, or Open source",example:"Enterprise"},unleashUrl:{type:"string",description:"The URL of the Unleash instance.",example:"https://unleash.mycompany.com/enterprise"},baseUriPath:{type:"string",description:"The base URI path at which this Unleash instance is listening.",example:"/enterprise"},disablePasswordAuth:{type:"boolean",description:"Whether password authentication should be disabled or not.",example:!1},emailEnabled:{type:"boolean",description:"Whether this instance can send out emails or not.",example:!0},maintenanceMode:{type:"boolean",description:"Whether maintenance mode is currently active or not.",example:!1},segmentValuesLimit:{type:"number",description:"The maximum number of values that can be used in a single segment.",example:1e3},strategySegmentsLimit:{type:"number",description:"The maximum number of segments that can be applied to a single strategy.",example:5},networkViewEnabled:{type:"boolean",description:"Whether to enable the Unleash network view or not.",example:!0},frontendApiOrigins:{type:"array",description:"The list of origins that the front-end API should accept requests from.",example:["*"],items:{type:"string"}},flags:{type:"object",description:"Additional (largely experimental) features that are enabled in this Unleash instance.",example:{messageBanner:{name:"disabled",enabled:!1},featuresExportImport:!0},additionalProperties:{anyOf:[{type:"boolean"},{type:"object",additionalProperties:!1,description:"A representation of an evaluated Unleash feature variant.",properties:{name:{description:"The name of the variant. Will always be disabled if `enabled` is false.",example:"blue",type:"string"},enabled:{type:"boolean",description:"Whether the variant is enabled or not.",example:!0},payload:{type:"object",description:"Additional data associated with this variant.",additionalProperties:!1,properties:{type:{description:"The type of data contained.",type:"string",enum:["string","json","csv"],example:"json"},value:{description:"The actual associated data",type:"string",example:'{ "starter": "squirtle" }'}}}},title:"variantFlagSchema"}]}},links:{description:"Relevant links to use in the UI.",example:[{value:"Documentation",icon:"library_books",href:"https://docs.getunleash.io/docs",title:"User documentation"},{value:"GitHub",icon:"c_github",href:"https://github.com/Unleash/unleash",title:"Source code on GitHub"}],"x-enforcer-exception-skip-codes":"WSCH006",type:"array",items:{type:"object"}},authenticationType:{type:"string",description:"The type of authentication enabled for this Unleash instance",example:"enterprise",enum:["open-source","demo","enterprise","hosted","custom","none"]},versionInfo:{type:"object",additionalProperties:!1,description:"Detailed information about an Unleash version",required:["current","latest","isLatest"],properties:{current:{type:"object",additionalProperties:!1,description:"The current version of Unleash.",properties:{oss:{description:"The OSS version used when building this Unleash instance, represented as a git revision belonging to the [main Unleash git repo](https://github.com/Unleash/unleash/)",example:"5.3.0-main",type:"string"},enterprise:{description:"The Enterpris version of Unleash used to build this instance, represented as a git revision belonging to the [Unleash Enterprise](https://github.com/ivarconr/unleash-enterprise) repository. Will be an empty string if no enterprise version was used,",example:"5.3.0-main+2105.45ed03c9",type:"string"}}},latest:{type:"object",additionalProperties:!1,description:"Information about the latest available Unleash releases. Will be an empty object if no data is available.",properties:{oss:{description:"The latest available OSS version of Unleash",type:"string",example:"5.1.5"},enterprise:{description:"The latest available Enterprise version of Unleash",type:"string",example:"5.1.5"}}},isLatest:{type:"boolean",description:"Whether the Unleash server is running the latest release (`true`) or if there are updates available (`false`)",example:!0},instanceId:{type:"string",description:"The instance identifier of the Unleash instance",example:"0d652a82-43db-4144-8e02-864b0b030710"}},title:"versionSchema"}},title:"uiConfigSchema"}}}}},method:"get",path:"/api/admin/ui-config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Get UI configuration",description:{content:"Retrieves the full configuration used to set up the Unleash Admin UI.",type:"text/plain"},url:{path:["api","admin","ui-config"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Admin UI",permalink:"/reference/api/unleash/admin-ui"},next:{title:"Set UI configuration",permalink:"/reference/api/unleash/set-ui-config"}},b={},y=[{value:"Request",id:"request",level:2}],f={toc:y};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get UI configuration"),(0,n.kt)(r.Z,{method:"get",path:"/api/admin/ui-config",mdxType:"MethodEndpoint"}),(0,n.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Retrieves the full configuration used to set up the Unleash Admin UI."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"uiConfigSchema")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"slogan",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The slogan to display in the UI footer.",example:"The enterprise-ready feature toggle service."},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of this Unleash instance. Used to build the text in the footer.",example:"Unleash enterprise"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"version",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The current version of Unleash",example:"5.3.0-main"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"What kind of Unleash instance it is: Enterprise, Pro, or Open source",example:"Enterprise"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"unleashUrl",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The URL of the Unleash instance.",example:"https://unleash.mycompany.com/enterprise"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"baseUriPath",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The base URI path at which this Unleash instance is listening.",example:"/enterprise"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"disablePasswordAuth",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether password authentication should be disabled or not.",example:!1},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"emailEnabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether this instance can send out emails or not.",example:!0},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"maintenanceMode",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether maintenance mode is currently active or not.",example:!1},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"segmentValuesLimit",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The maximum number of values that can be used in a single segment.",example:1e3},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"strategySegmentsLimit",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The maximum number of segments that can be applied to a single strategy.",example:5},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"networkViewEnabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether to enable the Unleash network view or not.",example:!0},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"frontendApiOrigins",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The list of origins that the front-end API should accept requests from.",example:["*"],items:{type:"string"}},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"flags"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Additional (largely experimental) features that are enabled in this Unleash instance.")),(0,n.kt)(m.Z,{collapsible:!1,name:"anyOf",required:!1,schemaName:"",qualifierMessage:void 0,schema:[{type:"boolean"},{type:"object",additionalProperties:!1,description:"A representation of an evaluated Unleash feature variant.",properties:{name:{description:"The name of the variant. Will always be disabled if `enabled` is false.",example:"blue",type:"string"},enabled:{type:"boolean",description:"Whether the variant is enabled or not.",example:!0},payload:{type:"object",description:"Additional data associated with this variant.",additionalProperties:!1,properties:{type:{description:"The type of data contained.",type:"string",enum:["string","json","csv"],example:"json"},value:{description:"The actual associated data",type:"string",example:'{ "starter": "squirtle" }'}}}},title:"variantFlagSchema"}],mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"links",required:!1,schemaName:"object[]",qualifierMessage:void 0,schema:{description:"Relevant links to use in the UI.",example:[{value:"Documentation",icon:"library_books",href:"https://docs.getunleash.io/docs",title:"User documentation"},{value:"GitHub",icon:"c_github",href:"https://github.com/Unleash/unleash",title:"Source code on GitHub"}],"x-enforcer-exception-skip-codes":"WSCH006",type:"array",items:{type:"object"}},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"authenticationType",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`open-source`, `demo`, `enterprise`, `hosted`, `custom`, `none`]",schema:{type:"string",description:"The type of authentication enabled for this Unleash instance",example:"enterprise",enum:["open-source","demo","enterprise","hosted","custom","none"]},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"versionInfo"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Detailed information about an Unleash version")),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"current"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The current version of Unleash.")),(0,n.kt)(m.Z,{collapsible:!1,name:"oss",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The OSS version used when building this Unleash instance, represented as a git revision belonging to the [main Unleash git repo](https://github.com/Unleash/unleash/)",example:"5.3.0-main",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"enterprise",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The Enterpris version of Unleash used to build this instance, represented as a git revision belonging to the [Unleash Enterprise](https://github.com/ivarconr/unleash-enterprise) repository. Will be an empty string if no enterprise version was used,",example:"5.3.0-main+2105.45ed03c9",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"latest"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Information about the latest available Unleash releases. Will be an empty object if no data is available.")),(0,n.kt)(m.Z,{collapsible:!1,name:"oss",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The latest available OSS version of Unleash",type:"string",example:"5.1.5"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"enterprise",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The latest available Enterprise version of Unleash",type:"string",example:"5.1.5"},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"isLatest",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the Unleash server is running the latest release (`true`) or if there are updates available (`false`)",example:!0},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"instanceId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The instance identifier of the Unleash instance",example:"0d652a82-43db-4144-8e02-864b0b030710"},mdxType:"SchemaItem"}))))))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "slogan": "The enterprise-ready feature toggle service.",\n  "name": "Unleash enterprise",\n  "version": "5.3.0-main",\n  "environment": "Enterprise",\n  "unleashUrl": "https://unleash.mycompany.com/enterprise",\n  "baseUriPath": "/enterprise",\n  "disablePasswordAuth": false,\n  "emailEnabled": true,\n  "maintenanceMode": false,\n  "segmentValuesLimit": 1000,\n  "strategySegmentsLimit": 5,\n  "networkViewEnabled": true,\n  "frontendApiOrigins": [\n    "*"\n  ],\n  "flags": {\n    "messageBanner": {\n      "name": "disabled",\n      "enabled": false\n    },\n    "featuresExportImport": true\n  },\n  "links": [\n    {\n      "value": "Documentation",\n      "icon": "library_books",\n      "href": "https://docs.getunleash.io/docs",\n      "title": "User documentation"\n    },\n    {\n      "value": "GitHub",\n      "icon": "c_github",\n      "href": "https://github.com/Unleash/unleash",\n      "title": "Source code on GitHub"\n    }\n  ],\n  "authenticationType": "enterprise",\n  "versionInfo": {\n    "current": {\n      "oss": "5.3.0-main",\n      "enterprise": "5.3.0-main+2105.45ed03c9"\n    },\n    "latest": {\n      "oss": "5.1.5",\n      "enterprise": "5.1.5"\n    },\n    "isLatest": true,\n    "instanceId": "0d652a82-43db-4144-8e02-864b0b030710"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);