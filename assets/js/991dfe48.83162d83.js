"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7974],{18469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>g,metadata:()=>y,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),r=a(80334),l=(a(11032),a(46062)),n=a(57138),o=a(21439),p=(a(9531),a(15761)),m=a(73418),d=a(92414),c=a(11666);const g={id:"get-all-strategies",title:"getAllStrategies",description:"getAllStrategies",sidebar_label:"getAllStrategies",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getAllStrategies",responses:{200:{description:"strategiesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","strategies"],properties:{version:{type:"integer"},strategies:{type:"array",items:{description:"The [activation strategy](https://docs.getunleash.io/reference/activation-strategies) schema",type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{title:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},name:{type:"string",description:"The name or type of the strategy",example:"flexibleRollout"},displayName:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},description:{type:"string",description:"A short description for the strategy",example:"Gradual rollout to logged in users"},editable:{type:"boolean",description:"Determines whether the strategy allows for editing",example:!0},deprecated:{type:"boolean",description:"",example:!0},parameters:{type:"array",description:"A list of relevant parameters for each strategy",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string",example:"percentage"},type:{type:"string",example:"percentage"},description:{type:"string",example:"Gradual rollout to logged in users"},required:{type:"boolean",example:!0}}}}},title:"strategySchema"}}},title:"strategiesSchema"}}}}},description:"getAllStrategies",method:"get",path:"/api/admin/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get All Strategies",description:{type:"text/plain"},url:{path:["api","admin","strategies"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/get-all-strategies",id:"reference/api/unleash/get-all-strategies",title:"getAllStrategies",description:"getAllStrategies",source:"@site/docs/reference/api/unleash/get-all-strategies.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-all-strategies",permalink:"/reference/api/unleash/get-all-strategies",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-strategies",title:"getAllStrategies",description:"getAllStrategies",sidebar_label:"getAllStrategies",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getAllStrategies",responses:{200:{description:"strategiesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","strategies"],properties:{version:{type:"integer"},strategies:{type:"array",items:{description:"The [activation strategy](https://docs.getunleash.io/reference/activation-strategies) schema",type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{title:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},name:{type:"string",description:"The name or type of the strategy",example:"flexibleRollout"},displayName:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},description:{type:"string",description:"A short description for the strategy",example:"Gradual rollout to logged in users"},editable:{type:"boolean",description:"Determines whether the strategy allows for editing",example:!0},deprecated:{type:"boolean",description:"",example:!0},parameters:{type:"array",description:"A list of relevant parameters for each strategy",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string",example:"percentage"},type:{type:"string",example:"percentage"},description:{type:"string",example:"Gradual rollout to logged in users"},required:{type:"boolean",example:!0}}}}},title:"strategySchema"}}},title:"strategiesSchema"}}}}},description:"getAllStrategies",method:"get",path:"/api/admin/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get All Strategies",description:{type:"text/plain"},url:{path:["api","admin","strategies"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all segments",permalink:"/reference/api/unleash/get-segments"},next:{title:"createStrategy",permalink:"/reference/api/unleash/create-strategy"}},h={},f=[{value:"Request",id:"request",level:2}],b={toc:f};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"getAllStrategies"),(0,s.kt)(l.Z,{method:"get",path:"/api/admin/strategies",mdxType:"MethodEndpoint"}),(0,s.kt)(n.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"getAllStrategies"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"strategiesSchema")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"strategies"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name or type of the strategy",example:"flexibleRollout"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A short description for the strategy",example:"Gradual rollout to logged in users"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"editable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Determines whether the strategy allows for editing",example:!0},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"deprecated",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"",example:!0},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of relevant parameters for each strategy")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"percentage"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"percentage"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Gradual rollout to logged in users"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"required",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "version": 0,\n  "strategies": [\n    {\n      "title": "GradualRollout - Prod25",\n      "name": "flexibleRollout",\n      "displayName": "Gradual Rollout",\n      "description": "Gradual rollout to logged in users",\n      "editable": true,\n      "deprecated": true,\n      "parameters": [\n        {\n          "name": "percentage",\n          "type": "percentage",\n          "description": "Gradual rollout to logged in users",\n          "required": true\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);