"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9026],{39480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>x,frontMatter:()=>u,metadata:()=>g,toc:()=>b});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),r=(a(11032),a(46062)),o=a(57138),l=a(21439),p=a(9531),m=a(15761),d=a(73418),c=a(92414),h=a(11666);const u={id:"get-strategy",title:"Get a strategy definition",description:"Retrieves the definition of the strategy specified in the URL",sidebar_label:"Get a strategy definition",hide_title:!0,hide_table_of_contents:!0,api:{description:"Retrieves the definition of the strategy specified in the URL",tags:["Strategies"],operationId:"getStrategy",responses:{200:{description:"strategySchema",content:{"application/json":{schema:{description:"The [activation strategy](https://docs.getunleash.io/reference/activation-strategies) schema",type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{title:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},name:{type:"string",description:"The name (type) of the strategy",example:"flexibleRollout"},displayName:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},description:{type:"string",description:"A short description of the strategy",example:"Gradual rollout to logged in users"},editable:{type:"boolean",description:"Whether the strategy can be edited or not. Strategies bundled with Unleash cannot be edited.",example:!0},deprecated:{type:"boolean",description:"",example:!0},parameters:{type:"array",description:"A list of relevant parameters for each strategy",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string",example:"percentage"},type:{type:"string",example:"percentage"},description:{type:"string",example:"Gradual rollout to logged in users"},required:{type:"boolean",example:!0}}}}},title:"strategySchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/strategies/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Get a strategy definition",description:{content:"Retrieves the definition of the strategy specified in the URL",type:"text/plain"},url:{path:["api","admin","strategies",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/get-strategy",id:"reference/api/unleash/get-strategy",title:"Get a strategy definition",description:"Retrieves the definition of the strategy specified in the URL",source:"@site/docs/reference/api/unleash/get-strategy.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-strategy",permalink:"/reference/api/unleash/get-strategy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-strategy",title:"Get a strategy definition",description:"Retrieves the definition of the strategy specified in the URL",sidebar_label:"Get a strategy definition",hide_title:!0,hide_table_of_contents:!0,api:{description:"Retrieves the definition of the strategy specified in the URL",tags:["Strategies"],operationId:"getStrategy",responses:{200:{description:"strategySchema",content:{"application/json":{schema:{description:"The [activation strategy](https://docs.getunleash.io/reference/activation-strategies) schema",type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{title:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},name:{type:"string",description:"The name (type) of the strategy",example:"flexibleRollout"},displayName:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},description:{type:"string",description:"A short description of the strategy",example:"Gradual rollout to logged in users"},editable:{type:"boolean",description:"Whether the strategy can be edited or not. Strategies bundled with Unleash cannot be edited.",example:!0},deprecated:{type:"boolean",description:"",example:!0},parameters:{type:"array",description:"A list of relevant parameters for each strategy",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string",example:"percentage"},type:{type:"string",example:"percentage"},description:{type:"string",example:"Gradual rollout to logged in users"},required:{type:"boolean",example:!0}}}}},title:"strategySchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/strategies/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Get a strategy definition",description:{content:"Retrieves the definition of the strategy specified in the URL",type:"text/plain"},url:{path:["api","admin","strategies",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Create a strategy",permalink:"/reference/api/unleash/create-strategy"},next:{title:"Delete a strategy",permalink:"/reference/api/unleash/remove-strategy"}},f={},b=[{value:"Request",id:"request",level:2}],k={toc:b};function x(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get a strategy definition"),(0,n.kt)(r.Z,{method:"get",path:"/api/admin/strategies/{name}",mdxType:"MethodEndpoint"}),(0,n.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Retrieves the definition of the strategy specified in the URL"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(p.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"strategySchema")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"An optional title for the strategy",example:"GradualRollout - Prod25"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name (type) of the strategy",example:"flexibleRollout"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A human friendly name for the strategy",example:"Gradual Rollout",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A short description of the strategy",example:"Gradual rollout to logged in users"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"editable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the strategy can be edited or not. Strategies bundled with Unleash cannot be edited.",example:!0},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"deprecated",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"",example:!0},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"A list of relevant parameters for each strategy")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"percentage"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"percentage"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Gradual rollout to logged in users"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"required",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "title": "GradualRollout - Prod25",\n  "name": "flexibleRollout",\n  "displayName": "Gradual Rollout",\n  "description": "Gradual rollout to logged in users",\n  "editable": true,\n  "deprecated": true,\n  "parameters": [\n    {\n      "name": "percentage",\n      "type": "percentage",\n      "description": "Gradual rollout to logged in users",\n      "required": true\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The requested resource was not found.")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}x.isMDXComponent=!0}}]);