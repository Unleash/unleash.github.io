"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5945],{46401:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>y,metadata:()=>c,toc:()=>h});var r=a(87462),s=(a(67294),a(3905)),i=a(80334),n=(a(11032),a(46062)),p=a(57138),m=a(21439),o=a(9531),l=(a(15761),a(73418)),d=(a(92414),a(11666));const y={id:"update-strategy",title:"updateStrategy",description:"updateStrategy",sidebar_label:"updateStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"updateStrategy",requestBody:{description:"upsertStrategySchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},editable:{type:"boolean"},parameters:{type:"array",items:{type:"object",properties:{name:{type:"string"},type:{type:"string"},description:{type:"string"},required:{type:"boolean"}}}}},title:"upsertStrategySchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"strategyName",in:"path",required:!0,schema:{type:"string"}}],description:"updateStrategy",method:"put",path:"/api/admin/strategies/{strategyName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",editable:!0,parameters:[{name:"string",type:"string",description:"string",required:!0}]},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"update Strategy",description:{type:"text/plain"},url:{path:["api","admin","strategies",":strategyName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyName"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,c={unversionedId:"reference/api/unleash/update-strategy",id:"reference/api/unleash/update-strategy",title:"updateStrategy",description:"updateStrategy",source:"@site/docs/reference/api/unleash/update-strategy.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-strategy",permalink:"/reference/api/unleash/update-strategy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-strategy",title:"updateStrategy",description:"updateStrategy",sidebar_label:"updateStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"updateStrategy",requestBody:{description:"upsertStrategySchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},editable:{type:"boolean"},parameters:{type:"array",items:{type:"object",properties:{name:{type:"string"},type:{type:"string"},description:{type:"string"},required:{type:"boolean"}}}}},title:"upsertStrategySchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"strategyName",in:"path",required:!0,schema:{type:"string"}}],description:"updateStrategy",method:"put",path:"/api/admin/strategies/{strategyName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",editable:!0,parameters:[{name:"string",type:"string",description:"string",required:!0}]},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"update Strategy",description:{type:"text/plain"},url:{path:["api","admin","strategies",":strategyName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyName"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"removeStrategy",permalink:"/reference/api/unleash/remove-strategy"},next:{title:"deprecateStrategy",permalink:"/reference/api/unleash/deprecate-strategy"}},g={},h=[{value:"Request",id:"request",level:2}],k={toc:h};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"updateStrategy"),(0,s.kt)(n.Z,{method:"put",path:"/api/admin/strategies/{strategyName}",mdxType:"MethodEndpoint"}),(0,s.kt)(p.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"updateStrategy"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"strategyName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(m.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"upsertStrategySchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"editable",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"parameters"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"required",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null))))))}b.isMDXComponent=!0}}]);