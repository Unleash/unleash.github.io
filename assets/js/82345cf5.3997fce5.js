"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[23186],{2226:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>x,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>f,toc:()=>g});var s=i(87462),a=(i(67294),i(3905)),n=i(80334),o=(i(11032),i(46062)),l=i(57138),r=i(21439),c=(i(9531),i(15761)),d=i(73418),p=i(92414),m=i(30433);const u={id:"get-context-fields",title:"Gets configured context fields",description:"Returns all configured [Context fields](https://docs.getunleash.io/how-to/how-to-define-custom-context-fields) that have been created.",sidebar_label:"Gets configured context fields",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],description:"Returns all configured [Context fields](https://docs.getunleash.io/how-to/how-to-define-custom-context-fields) that have been created.",operationId:"getContextFields",responses:{200:{description:"contextFieldsSchema",content:{"application/json":{schema:{type:"array",description:"A list of context fields",items:{type:"object",additionalProperties:!1,description:"A representation of a [context field](https://docs.getunleash.io/reference/unleash-context).",required:["name"],properties:{name:{description:"The name of the context field",type:"string",example:"userId"},description:{description:"The description of the context field.",type:"string",nullable:!0,example:"Used to uniquely identify users"},stickiness:{description:"Does this context field support being used for [stickiness](https://docs.getunleash.io/reference/stickiness) calculations",type:"boolean",example:!0},sortOrder:{description:"Used when sorting a list of context fields. Is also used as a tiebreaker if a list of context fields is sorted alphabetically.",type:"integer",example:900},createdAt:{description:"When this context field was created",type:"string",format:"date-time",nullable:!0,example:"2023-06-29T10:19:00.000Z"},usedInFeatures:{type:"integer",description:"Number of projects where this context field is used in",example:3,nullable:!0,minimum:0},usedInProjects:{type:"integer",description:"Number of projects where this context field is used in",example:2,nullable:!0,minimum:0},legalValues:{description:"Allowed values for this context field schema. Can be used to narrow down accepted input",type:"array",items:{type:"object",additionalProperties:!1,description:"Describes a legal value. Typically used to limit possible values for contextFields or strategy properties",required:["value"],properties:{value:{description:"The valid value",type:"string",example:"#c154c1"},description:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"}},title:"legalValueSchema"}}},title:"contextFieldSchema"},title:"contextFieldsSchema"}}}}},method:"get",path:"/api/admin/context",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Gets configured context fields",description:{content:"Returns all configured [Context fields](https://docs.getunleash.io/how-to/how-to-define-custom-context-fields) that have been created.",type:"text/plain"},url:{path:["api","admin","context"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,f={unversionedId:"reference/api/unleash/get-context-fields",id:"reference/api/unleash/get-context-fields",title:"Gets configured context fields",description:"Returns all configured [Context fields](https://docs.getunleash.io/how-to/how-to-define-custom-context-fields) that have been created.",source:"@site/docs/reference/api/unleash/get-context-fields.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-context-fields",permalink:"/reference/api/unleash/get-context-fields",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-context-fields",title:"Gets configured context fields",description:"Returns all configured [Context fields](https://docs.getunleash.io/how-to/how-to-define-custom-context-fields) that have been created.",sidebar_label:"Gets configured context fields",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],description:"Returns all configured [Context fields](https://docs.getunleash.io/how-to/how-to-define-custom-context-fields) that have been created.",operationId:"getContextFields",responses:{200:{description:"contextFieldsSchema",content:{"application/json":{schema:{type:"array",description:"A list of context fields",items:{type:"object",additionalProperties:!1,description:"A representation of a [context field](https://docs.getunleash.io/reference/unleash-context).",required:["name"],properties:{name:{description:"The name of the context field",type:"string",example:"userId"},description:{description:"The description of the context field.",type:"string",nullable:!0,example:"Used to uniquely identify users"},stickiness:{description:"Does this context field support being used for [stickiness](https://docs.getunleash.io/reference/stickiness) calculations",type:"boolean",example:!0},sortOrder:{description:"Used when sorting a list of context fields. Is also used as a tiebreaker if a list of context fields is sorted alphabetically.",type:"integer",example:900},createdAt:{description:"When this context field was created",type:"string",format:"date-time",nullable:!0,example:"2023-06-29T10:19:00.000Z"},usedInFeatures:{type:"integer",description:"Number of projects where this context field is used in",example:3,nullable:!0,minimum:0},usedInProjects:{type:"integer",description:"Number of projects where this context field is used in",example:2,nullable:!0,minimum:0},legalValues:{description:"Allowed values for this context field schema. Can be used to narrow down accepted input",type:"array",items:{type:"object",additionalProperties:!1,description:"Describes a legal value. Typically used to limit possible values for contextFields or strategy properties",required:["value"],properties:{value:{description:"The valid value",type:"string",example:"#c154c1"},description:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"}},title:"legalValueSchema"}}},title:"contextFieldSchema"},title:"contextFieldsSchema"}}}}},method:"get",path:"/api/admin/context",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Gets configured context fields",description:{content:"Returns all configured [Context fields](https://docs.getunleash.io/how-to/how-to-define-custom-context-fields) that have been created.",type:"text/plain"},url:{path:["api","admin","context"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Context",permalink:"/reference/api/unleash/context"},next:{title:"Create a context field",permalink:"/reference/api/unleash/create-context-field"}},x={},g=[{value:"Request",id:"request",level:2}],y={toc:g};function b(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Gets configured context fields"),(0,a.kt)(o.Z,{method:"get",path:"/api/admin/context",mdxType:"MethodEndpoint"}),(0,a.kt)(l.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,a.kt)("p",null,"Returns all configured ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/how-to/how-to-define-custom-context-fields"},"Context fields")," that have been created."),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"contextFieldsSchema")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(p.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field",type:"string",example:"userId"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The description of the context field.",type:"string",nullable:!0,example:"Used to uniquely identify users"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Does this context field support being used for [stickiness](https://docs.getunleash.io/reference/stickiness) calculations",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"Used when sorting a list of context fields. Is also used as a tiebreaker if a list of context fields is sorted alphabetically.",type:"integer",example:900},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"When this context field was created",type:"string",format:"date-time",nullable:!0,example:"2023-06-29T10:19:00.000Z"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"usedInFeatures",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Number of projects where this context field is used in",example:3,nullable:!0,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"usedInProjects",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Number of projects where this context field is used in",example:2,nullable:!0,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"legalValues"),(0,a.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Allowed values for this context field schema. Can be used to narrow down accepted input")),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(d.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The valid value",type:"string",example:"#c154c1"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'[\n  {\n    "name": "userId",\n    "description": "Used to uniquely identify users",\n    "stickiness": true,\n    "sortOrder": 900,\n    "createdAt": "2023-06-29T10:19:00.000Z",\n    "usedInFeatures": 3,\n    "usedInProjects": 2,\n    "legalValues": [\n      {\n        "value": "#c154c1",\n        "description": "Deep fuchsia"\n      }\n    ]\n  }\n]',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);