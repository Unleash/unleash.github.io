"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[236],{7139:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>k,frontMatter:()=>h,metadata:()=>x,toc:()=>g});var a=i(87462),s=(i(67294),i(3905)),n=i(80334),l=(i(11032),i(46062)),r=i(57138),o=i(21439),c=i(9531),d=i(15761),p=i(73418),m=i(92414),u=i(11666);const h={id:"get-context-field",title:"Gets context field",description:"Returns specific [context field](https://docs.getunleash.io/reference/unleash-context) identified by the name in the path",sidebar_label:"Gets context field",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],description:"Returns specific [context field](https://docs.getunleash.io/reference/unleash-context) identified by the name in the path",operationId:"getContextField",responses:{200:{description:"contextFieldSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A representation of a [context field](https://docs.getunleash.io/reference/unleash-context).",required:["name"],properties:{name:{description:"The name of the context field",type:"string",example:"userId"},description:{description:"The description of the context field.",type:"string",nullable:!0,example:"Used to uniquely identify users"},stickiness:{description:"Does this context field support being used for [stickiness](https://docs.getunleash.io/reference/stickiness) calculations",type:"boolean",example:!0},sortOrder:{description:"Used when sorting a list of context fields. Is also used as a tiebreaker if a list of context fields is sorted alphabetically.",type:"integer",example:900},createdAt:{description:"When this context field was created",type:"string",format:"date-time",nullable:!0,example:"2023-06-29T10:19:00.000Z"},usedInFeatures:{type:"integer",description:"Number of projects where this context field is used in",example:3,nullable:!0,minimum:0},usedInProjects:{type:"integer",description:"Number of projects where this context field is used in",example:2,nullable:!0,minimum:0},legalValues:{description:"Allowed values for this context field schema. Can be used to narrow down accepted input",type:"array",items:{type:"object",additionalProperties:!1,description:"Describes a legal value. Typically used to limit possible values for contextFields or strategy properties",required:["value"],properties:{value:{description:"The valid value",type:"string",example:"#c154c1"},description:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"}},title:"legalValueSchema"}}},title:"contextFieldSchema"}}}}},parameters:[{name:"contextField",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/context/{contextField}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Gets context field",description:{content:"Returns specific [context field](https://docs.getunleash.io/reference/unleash-context) identified by the name in the path",type:"text/plain"},url:{path:["api","admin","context",":contextField"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"contextField"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},f=void 0,x={unversionedId:"reference/api/unleash/get-context-field",id:"reference/api/unleash/get-context-field",title:"Gets context field",description:"Returns specific [context field](https://docs.getunleash.io/reference/unleash-context) identified by the name in the path",source:"@site/docs/reference/api/unleash/get-context-field.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-context-field",permalink:"/reference/api/unleash/get-context-field",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-context-field",title:"Gets context field",description:"Returns specific [context field](https://docs.getunleash.io/reference/unleash-context) identified by the name in the path",sidebar_label:"Gets context field",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],description:"Returns specific [context field](https://docs.getunleash.io/reference/unleash-context) identified by the name in the path",operationId:"getContextField",responses:{200:{description:"contextFieldSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A representation of a [context field](https://docs.getunleash.io/reference/unleash-context).",required:["name"],properties:{name:{description:"The name of the context field",type:"string",example:"userId"},description:{description:"The description of the context field.",type:"string",nullable:!0,example:"Used to uniquely identify users"},stickiness:{description:"Does this context field support being used for [stickiness](https://docs.getunleash.io/reference/stickiness) calculations",type:"boolean",example:!0},sortOrder:{description:"Used when sorting a list of context fields. Is also used as a tiebreaker if a list of context fields is sorted alphabetically.",type:"integer",example:900},createdAt:{description:"When this context field was created",type:"string",format:"date-time",nullable:!0,example:"2023-06-29T10:19:00.000Z"},usedInFeatures:{type:"integer",description:"Number of projects where this context field is used in",example:3,nullable:!0,minimum:0},usedInProjects:{type:"integer",description:"Number of projects where this context field is used in",example:2,nullable:!0,minimum:0},legalValues:{description:"Allowed values for this context field schema. Can be used to narrow down accepted input",type:"array",items:{type:"object",additionalProperties:!1,description:"Describes a legal value. Typically used to limit possible values for contextFields or strategy properties",required:["value"],properties:{value:{description:"The valid value",type:"string",example:"#c154c1"},description:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"}},title:"legalValueSchema"}}},title:"contextFieldSchema"}}}}},parameters:[{name:"contextField",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/context/{contextField}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Gets context field",description:{content:"Returns specific [context field](https://docs.getunleash.io/reference/unleash-context) identified by the name in the path",type:"text/plain"},url:{path:["api","admin","context",":contextField"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"contextField"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Create a context field",permalink:"/reference/api/unleash/create-context-field"},next:{title:"Update an existing context field",permalink:"/reference/api/unleash/update-context-field"}},y={},g=[{value:"Request",id:"request",level:2}],b={toc:g};function k(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Gets context field"),(0,s.kt)(l.Z,{method:"get",path:"/api/admin/context/{contextField}",mdxType:"MethodEndpoint"}),(0,s.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Returns specific ",(0,s.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-context"},"context field")," identified by the name in the path"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(c.Z,{className:"paramsItem",param:{name:"contextField",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"contextFieldSchema")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the context field",type:"string",example:"userId"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The description of the context field.",type:"string",nullable:!0,example:"Used to uniquely identify users"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Does this context field support being used for [stickiness](https://docs.getunleash.io/reference/stickiness) calculations",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"Used when sorting a list of context fields. Is also used as a tiebreaker if a list of context fields is sorted alphabetically.",type:"integer",example:900},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"When this context field was created",type:"string",format:"date-time",nullable:!0,example:"2023-06-29T10:19:00.000Z"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"usedInFeatures",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Number of projects where this context field is used in",example:3,nullable:!0,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"usedInProjects",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Number of projects where this context field is used in",example:2,nullable:!0,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"legalValues"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Allowed values for this context field schema. Can be used to narrow down accepted input")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The valid value",type:"string",example:"#c154c1"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "name": "userId",\n  "description": "Used to uniquely identify users",\n  "stickiness": true,\n  "sortOrder": 900,\n  "createdAt": "2023-06-29T10:19:00.000Z",\n  "usedInFeatures": 3,\n  "usedInProjects": 2,\n  "legalValues": [\n    {\n      "value": "#c154c1",\n      "description": "Deep fuchsia"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);