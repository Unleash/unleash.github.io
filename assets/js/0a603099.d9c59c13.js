"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[31535],{37157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>b,frontMatter:()=>u,metadata:()=>y,toc:()=>x});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),r=(a(11032),a(46062)),o=a(57138),l=a(21439),p=a(9531),d=a(15761),m=a(73418),c=a(92414),h=a(30433);const u={id:"get-strategies-by-context-field",title:"Get strategies that use a context field",description:"Retrieves a list of all strategies that use the specified context field. If the context field doesn't exist, returns an empty list of strategies",sidebar_label:"Get strategies that use a context field",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getStrategiesByContextField",description:"Retrieves a list of all strategies that use the specified context field. If the context field doesn't exist, returns an empty list of strategies",responses:{200:{description:"contextFieldStrategiesSchema",content:{"application/json":{schema:{type:"object",description:"A wrapper object containing all strategies that use a specific context field",required:["strategies"],properties:{strategies:{type:"array",description:"List of strategies using the context field",items:{type:"object",required:["id","featureName","projectId","environment","strategyName"],properties:{id:{type:"string",example:"433ae8d9-dd69-4ad0-bc46-414aedbe9c55",description:"The ID of the strategy."},featureName:{type:"string",example:"best-feature",description:"The name of the feature that contains this strategy."},projectId:{type:"string",description:"The ID of the project that contains this feature."},environment:{type:"string",description:"The ID of the environment where this strategy is in."},strategyName:{type:"string",description:"The name of the strategy."}}}}},title:"contextFieldStrategiesSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"contextField",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/context/{contextField}/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Get strategies that use a context field",description:{content:"Retrieves a list of all strategies that use the specified context field. If the context field doesn't exist, returns an empty list of strategies",type:"text/plain"},url:{path:["api","admin","context",":contextField","strategies"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"contextField"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,y={unversionedId:"reference/api/unleash/get-strategies-by-context-field",id:"reference/api/unleash/get-strategies-by-context-field",title:"Get strategies that use a context field",description:"Retrieves a list of all strategies that use the specified context field. If the context field doesn't exist, returns an empty list of strategies",source:"@site/docs/reference/api/unleash/get-strategies-by-context-field.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-strategies-by-context-field",permalink:"/reference/api/unleash/get-strategies-by-context-field",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-strategies-by-context-field",title:"Get strategies that use a context field",description:"Retrieves a list of all strategies that use the specified context field. If the context field doesn't exist, returns an empty list of strategies",sidebar_label:"Get strategies that use a context field",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getStrategiesByContextField",description:"Retrieves a list of all strategies that use the specified context field. If the context field doesn't exist, returns an empty list of strategies",responses:{200:{description:"contextFieldStrategiesSchema",content:{"application/json":{schema:{type:"object",description:"A wrapper object containing all strategies that use a specific context field",required:["strategies"],properties:{strategies:{type:"array",description:"List of strategies using the context field",items:{type:"object",required:["id","featureName","projectId","environment","strategyName"],properties:{id:{type:"string",example:"433ae8d9-dd69-4ad0-bc46-414aedbe9c55",description:"The ID of the strategy."},featureName:{type:"string",example:"best-feature",description:"The name of the feature that contains this strategy."},projectId:{type:"string",description:"The ID of the project that contains this feature."},environment:{type:"string",description:"The ID of the environment where this strategy is in."},strategyName:{type:"string",description:"The name of the strategy."}}}}},title:"contextFieldStrategiesSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"contextField",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/context/{contextField}/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Get strategies that use a context field",description:{content:"Retrieves a list of all strategies that use the specified context field. If the context field doesn't exist, returns an empty list of strategies",type:"text/plain"},url:{path:["api","admin","context",":contextField","strategies"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"contextField"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Reactivate a strategy",permalink:"/reference/api/unleash/reactivate-strategy"},next:{title:"Update strategy segments",permalink:"/reference/api/unleash/update-feature-strategy-segments"}},f={},x=[{value:"Request",id:"request",level:2}],k={toc:x};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Get strategies that use a context field"),(0,s.kt)(r.Z,{method:"get",path:"/api/admin/context/{contextField}/strategies",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Retrieves a list of all strategies that use the specified context field. If the context field doesn't exist, returns an empty list of strategies"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"contextField",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"contextFieldStrategiesSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"strategies"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"List of strategies using the context field")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"433ae8d9-dd69-4ad0-bc46-414aedbe9c55",description:"The ID of the strategy."},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"featureName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"best-feature",description:"The name of the feature that contains this strategy."},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"projectId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the project that contains this feature."},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"environment",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the environment where this strategy is in."},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"strategyName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the strategy."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "strategies": [\n    {\n      "id": "433ae8d9-dd69-4ad0-bc46-414aedbe9c55",\n      "featureName": "best-feature",\n      "projectId": "string",\n      "environment": "string",\n      "strategyName": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);