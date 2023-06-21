"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9026],{39480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>x,frontMatter:()=>u,metadata:()=>h,toc:()=>b});var r=a(87462),i=(a(67294),a(3905)),s=a(80334),l=(a(11032),a(46062)),n=a(57138),p=a(21439),o=a(9531),m=a(15761),d=a(73418),c=a(92414),y=a(11666);const u={id:"get-strategy",title:"getStrategy",description:"getStrategy",sidebar_label:"getStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getStrategy",responses:{200:{description:"strategySchema",content:{"application/json":{schema:{description:"The [activation strategy](https://docs.getunleash.io/reference/activation-strategies) schema",type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{title:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},name:{type:"string",description:"The name or type of the strategy",example:"flexibleRollout"},displayName:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},description:{type:"string",description:"A short description for the strategy",example:"Gradual rollout to logged in users"},editable:{type:"boolean",description:"Determines whether the strategy allows for editing",example:!0},deprecated:{type:"boolean",description:"",example:!0},parameters:{type:"array",description:"A list of relevant parameters for each strategy",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string",example:"percentage"},type:{type:"string",example:"percentage"},description:{type:"string",example:"Gradual rollout to logged in users"},required:{type:"boolean",example:!0}}}}},title:"strategySchema"}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getStrategy",method:"get",path:"/api/admin/strategies/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"get Strategy",description:{type:"text/plain"},url:{path:["api","admin","strategies",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,h={unversionedId:"reference/api/unleash/get-strategy",id:"reference/api/unleash/get-strategy",title:"getStrategy",description:"getStrategy",source:"@site/docs/reference/api/unleash/get-strategy.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-strategy",permalink:"/reference/api/unleash/get-strategy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-strategy",title:"getStrategy",description:"getStrategy",sidebar_label:"getStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getStrategy",responses:{200:{description:"strategySchema",content:{"application/json":{schema:{description:"The [activation strategy](https://docs.getunleash.io/reference/activation-strategies) schema",type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{title:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},name:{type:"string",description:"The name or type of the strategy",example:"flexibleRollout"},displayName:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},description:{type:"string",description:"A short description for the strategy",example:"Gradual rollout to logged in users"},editable:{type:"boolean",description:"Determines whether the strategy allows for editing",example:!0},deprecated:{type:"boolean",description:"",example:!0},parameters:{type:"array",description:"A list of relevant parameters for each strategy",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string",example:"percentage"},type:{type:"string",example:"percentage"},description:{type:"string",example:"Gradual rollout to logged in users"},required:{type:"boolean",example:!0}}}}},title:"strategySchema"}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getStrategy",method:"get",path:"/api/admin/strategies/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"get Strategy",description:{type:"text/plain"},url:{path:["api","admin","strategies",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"createStrategy",permalink:"/reference/api/unleash/create-strategy"},next:{title:"removeStrategy",permalink:"/reference/api/unleash/remove-strategy"}},f={},b=[{value:"Request",id:"request",level:2}],k={toc:b};function x(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"getStrategy"),(0,i.kt)(l.Z,{method:"get",path:"/api/admin/strategies/{name}",mdxType:"MethodEndpoint"}),(0,i.kt)(n.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"getStrategy"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(y.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"strategySchema")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(y.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(y.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name or type of the strategy",example:"flexibleRollout"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A short description for the strategy",example:"Gradual rollout to logged in users"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"editable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Determines whether the strategy allows for editing",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"deprecated",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"A list of relevant parameters for each strategy")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"percentage"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"percentage"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Gradual rollout to logged in users"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"required",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(y.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "title": "GradualRollout - Prod25",\n  "name": "flexibleRollout",\n  "displayName": "Gradual Rollout",\n  "description": "Gradual rollout to logged in users",\n  "editable": true,\n  "deprecated": true,\n  "parameters": [\n    {\n      "name": "percentage",\n      "type": "percentage",\n      "description": "Gradual rollout to logged in users",\n      "required": true\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}x.isMDXComponent=!0}}]);