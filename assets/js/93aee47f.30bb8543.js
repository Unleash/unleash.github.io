"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9739],{8609:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var n=i(87462),a=(i(67294),i(3905)),s=i(80334),o=(i(11032),i(46062)),r=i(57138),p=i(21439),l=(i(9531),i(15761),i(73418)),c=(i(92414),i(30433));const d={id:"set-ui-config",title:"Set UI configuration",description:"Sets the UI configuration for this Unleash instance.",sidebar_label:"Set UI configuration",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],description:"Sets the UI configuration for this Unleash instance.",operationId:"setUiConfig",requestBody:{description:"setUiConfigSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Unleash configuration settings affect the admin UI.",properties:{frontendSettings:{type:"object",description:"Settings related to the front-end API.",additionalProperties:!1,required:["frontendApiOrigins"],properties:{frontendApiOrigins:{description:"The list of origins that the front-end API should accept requests from.",example:["*"],type:"array",items:{type:"string"}}}}},title:"setUiConfigSchema"}}}},responses:{200:{description:"This response has no body."}},method:"post",path:"/api/admin/ui-config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{frontendSettings:{frontendApiOrigins:["*"]}},info:{title:"Unleash API",version:"5.5.6"},postman:{name:"Set UI configuration",description:{content:"Sets the UI configuration for this Unleash instance.",type:"text/plain"},url:{path:["api","admin","ui-config"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},m=void 0,u={unversionedId:"reference/api/unleash/set-ui-config",id:"reference/api/unleash/set-ui-config",title:"Set UI configuration",description:"Sets the UI configuration for this Unleash instance.",source:"@site/docs/reference/api/unleash/set-ui-config.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/set-ui-config",permalink:"/reference/api/unleash/set-ui-config",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"set-ui-config",title:"Set UI configuration",description:"Sets the UI configuration for this Unleash instance.",sidebar_label:"Set UI configuration",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],description:"Sets the UI configuration for this Unleash instance.",operationId:"setUiConfig",requestBody:{description:"setUiConfigSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"Unleash configuration settings affect the admin UI.",properties:{frontendSettings:{type:"object",description:"Settings related to the front-end API.",additionalProperties:!1,required:["frontendApiOrigins"],properties:{frontendApiOrigins:{description:"The list of origins that the front-end API should accept requests from.",example:["*"],type:"array",items:{type:"string"}}}}},title:"setUiConfigSchema"}}}},responses:{200:{description:"This response has no body."}},method:"post",path:"/api/admin/ui-config",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{frontendSettings:{frontendApiOrigins:["*"]}},info:{title:"Unleash API",version:"5.5.6"},postman:{name:"Set UI configuration",description:{content:"Sets the UI configuration for this Unleash instance.",type:"text/plain"},url:{path:["api","admin","ui-config"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get UI configuration",permalink:"/reference/api/unleash/get-ui-config"},next:{title:"Send Unleash feedback",permalink:"/reference/api/unleash/create-feedback"}},h={},f=[{value:"Request",id:"request",level:2}],g={toc:f};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Set UI configuration"),(0,a.kt)(o.Z,{method:"post",path:"/api/admin/ui-config",mdxType:"MethodEndpoint"}),(0,a.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,a.kt)("p",null,"Sets the UI configuration for this Unleash instance."),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,a.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,a.kt)("strong",{className:"openapi-schema__required"},"required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,a.kt)("p",null,"setUiConfigSchema"))),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"frontendSettings"),(0,a.kt)("span",{className:"openapi-schema__name"}," object"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Settings related to the front-end API.")),(0,a.kt)(l.Z,{collapsible:!1,name:"frontendApiOrigins",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"The list of origins that the front-end API should accept requests from.",example:["*"],type:"array",items:{type:"string"}},mdxType:"SchemaItem"})))))))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"This response has no body.")),(0,a.kt)("div",null))))))}y.isMDXComponent=!0}}]);