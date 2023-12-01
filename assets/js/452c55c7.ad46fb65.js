"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[35957],{44906:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>f,toc:()=>x});var s=i(87462),a=(i(67294),i(3905)),o=i(80334),n=(i(11032),i(46062)),l=i(57138),r=i(21439),c=(i(9531),i(15761)),p=i(73418),d=i(92414),m=i(30433);const u={id:"create-context-field",title:"Create a context field",description:"Endpoint that allows creation of [custom context fields](https://docs.getunleash.io/reference/unleash-context#custom-context-fields)",sidebar_label:"Create a context field",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],operationId:"createContextField",description:"Endpoint that allows creation of [custom context fields](https://docs.getunleash.io/reference/unleash-context#custom-context-fields)",requestBody:{description:"createContextFieldSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data used to create a context field configuration.",properties:{description:{type:"string",description:"A description of the context field",example:"The user's subscription tier"},stickiness:{type:"boolean",description:"`true` if this field should be available for use with [custom stickiness](https://docs.getunleash.io/reference/stickiness#custom-stickiness), otherwise `false`",example:!1},sortOrder:{type:"integer",description:"How this context field should be sorted if no other sort order is selected",example:2},legalValues:{type:"array",description:"A list of allowed values for this context field",example:[{value:"gold"},{value:"silver"},{value:"crystal"}],items:{type:"object",additionalProperties:!1,description:"Describes a legal value. Typically used to limit possible values for contextFields or strategy properties",required:["value"],properties:{value:{description:"The valid value",type:"string",example:"#c154c1"},description:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"}},title:"legalValueSchema"}},name:{description:"The name of the context field.",type:"string",example:"subscriptionTier"}},required:["name"],title:"createContextFieldSchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A representation of a [context field](https://docs.getunleash.io/reference/unleash-context).",required:["name"],properties:{name:{description:"The name of the context field",type:"string",example:"userId"},description:{description:"The description of the context field.",type:"string",nullable:!0,example:"Used to uniquely identify users"},stickiness:{description:"Does this context field support being used for [stickiness](https://docs.getunleash.io/reference/stickiness) calculations",type:"boolean",example:!0},sortOrder:{description:"Used when sorting a list of context fields. Is also used as a tiebreaker if a list of context fields is sorted alphabetically.",type:"integer",example:900},createdAt:{description:"When this context field was created",type:"string",format:"date-time",nullable:!0,example:"2023-06-29T10:19:00.000Z"},usedInFeatures:{type:"integer",description:"Number of projects where this context field is used in",example:3,nullable:!0,minimum:0},usedInProjects:{type:"integer",description:"Number of projects where this context field is used in",example:2,nullable:!0,minimum:0},legalValues:{description:"Allowed values for this context field schema. Can be used to narrow down accepted input",type:"array",items:{type:"object",additionalProperties:!1,description:"Describes a legal value. Typically used to limit possible values for contextFields or strategy properties",required:["value"],properties:{value:{description:"The valid value",type:"string",example:"#c154c1"},description:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"}},title:"legalValueSchema"}}},title:"contextFieldSchema"}}}}},method:"post",path:"/api/admin/context",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{description:"The user's subscription tier",stickiness:!1,sortOrder:2,legalValues:[{value:"gold"},{value:"silver"},{value:"crystal"}],name:"subscriptionTier"},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Create a context field",description:{content:"Endpoint that allows creation of [custom context fields](https://docs.getunleash.io/reference/unleash-context#custom-context-fields)",type:"text/plain"},url:{path:["api","admin","context"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,f={unversionedId:"reference/api/unleash/create-context-field",id:"reference/api/unleash/create-context-field",title:"Create a context field",description:"Endpoint that allows creation of [custom context fields](https://docs.getunleash.io/reference/unleash-context#custom-context-fields)",source:"@site/docs/reference/api/unleash/create-context-field.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-context-field",permalink:"/reference/api/unleash/create-context-field",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-context-field",title:"Create a context field",description:"Endpoint that allows creation of [custom context fields](https://docs.getunleash.io/reference/unleash-context#custom-context-fields)",sidebar_label:"Create a context field",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],operationId:"createContextField",description:"Endpoint that allows creation of [custom context fields](https://docs.getunleash.io/reference/unleash-context#custom-context-fields)",requestBody:{description:"createContextFieldSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data used to create a context field configuration.",properties:{description:{type:"string",description:"A description of the context field",example:"The user's subscription tier"},stickiness:{type:"boolean",description:"`true` if this field should be available for use with [custom stickiness](https://docs.getunleash.io/reference/stickiness#custom-stickiness), otherwise `false`",example:!1},sortOrder:{type:"integer",description:"How this context field should be sorted if no other sort order is selected",example:2},legalValues:{type:"array",description:"A list of allowed values for this context field",example:[{value:"gold"},{value:"silver"},{value:"crystal"}],items:{type:"object",additionalProperties:!1,description:"Describes a legal value. Typically used to limit possible values for contextFields or strategy properties",required:["value"],properties:{value:{description:"The valid value",type:"string",example:"#c154c1"},description:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"}},title:"legalValueSchema"}},name:{description:"The name of the context field.",type:"string",example:"subscriptionTier"}},required:["name"],title:"createContextFieldSchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A representation of a [context field](https://docs.getunleash.io/reference/unleash-context).",required:["name"],properties:{name:{description:"The name of the context field",type:"string",example:"userId"},description:{description:"The description of the context field.",type:"string",nullable:!0,example:"Used to uniquely identify users"},stickiness:{description:"Does this context field support being used for [stickiness](https://docs.getunleash.io/reference/stickiness) calculations",type:"boolean",example:!0},sortOrder:{description:"Used when sorting a list of context fields. Is also used as a tiebreaker if a list of context fields is sorted alphabetically.",type:"integer",example:900},createdAt:{description:"When this context field was created",type:"string",format:"date-time",nullable:!0,example:"2023-06-29T10:19:00.000Z"},usedInFeatures:{type:"integer",description:"Number of projects where this context field is used in",example:3,nullable:!0,minimum:0},usedInProjects:{type:"integer",description:"Number of projects where this context field is used in",example:2,nullable:!0,minimum:0},legalValues:{description:"Allowed values for this context field schema. Can be used to narrow down accepted input",type:"array",items:{type:"object",additionalProperties:!1,description:"Describes a legal value. Typically used to limit possible values for contextFields or strategy properties",required:["value"],properties:{value:{description:"The valid value",type:"string",example:"#c154c1"},description:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"}},title:"legalValueSchema"}}},title:"contextFieldSchema"}}}}},method:"post",path:"/api/admin/context",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{description:"The user's subscription tier",stickiness:!1,sortOrder:2,legalValues:[{value:"gold"},{value:"silver"},{value:"crystal"}],name:"subscriptionTier"},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Create a context field",description:{content:"Endpoint that allows creation of [custom context fields](https://docs.getunleash.io/reference/unleash-context#custom-context-fields)",type:"text/plain"},url:{path:["api","admin","context"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Gets configured context fields",permalink:"/reference/api/unleash/get-context-fields"},next:{title:"Gets context field",permalink:"/reference/api/unleash/get-context-field"}},y={},x=[{value:"Request",id:"request",level:2}],g={toc:x};function b(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Create a context field"),(0,a.kt)(n.Z,{method:"post",path:"/api/admin/context",mdxType:"MethodEndpoint"}),(0,a.kt)(l.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,a.kt)("p",null,"Endpoint that allows creation of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-context#custom-context-fields"},"custom context fields")),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)(r.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,a.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,a.kt)("strong",{className:"openapi-schema__required"},"required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,a.kt)("p",null,"createContextFieldSchema"))),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A description of the context field",example:"The user's subscription tier"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"`true` if this field should be available for use with [custom stickiness](https://docs.getunleash.io/reference/stickiness#custom-stickiness), otherwise `false`",example:!1},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"How this context field should be sorted if no other sort order is selected",example:2},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"legalValues"),(0,a.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"A list of allowed values for this context field")),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(p.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The valid value",type:"string",example:"#c154c1"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field.",type:"string",example:"subscriptionTier"},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The resource was successfully created.")),(0,a.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Response Headers")),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"location"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null,(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"The location of the newly created resource.")))))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field",type:"string",example:"userId"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The description of the context field.",type:"string",nullable:!0,example:"Used to uniquely identify users"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Does this context field support being used for [stickiness](https://docs.getunleash.io/reference/stickiness) calculations",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"Used when sorting a list of context fields. Is also used as a tiebreaker if a list of context fields is sorted alphabetically.",type:"integer",example:900},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"When this context field was created",type:"string",format:"date-time",nullable:!0,example:"2023-06-29T10:19:00.000Z"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"usedInFeatures",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Number of projects where this context field is used in",example:3,nullable:!0,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"usedInProjects",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Number of projects where this context field is used in",example:2,nullable:!0,minimum:0},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"legalValues"),(0,a.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Allowed values for this context field schema. Can be used to narrow down accepted input")),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(p.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The valid value",type:"string",example:"#c154c1"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{\n  "name": "userId",\n  "description": "Used to uniquely identify users",\n  "stickiness": true,\n  "sortOrder": 900,\n  "createdAt": "2023-06-29T10:19:00.000Z",\n  "usedInFeatures": 3,\n  "usedInProjects": 2,\n  "legalValues": [\n    {\n      "value": "#c154c1",\n      "description": "Deep fuchsia"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);