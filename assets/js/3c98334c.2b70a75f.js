"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7478],{96391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>k,frontMatter:()=>h,metadata:()=>u,toc:()=>b});var s=a(87462),i=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),m=a(57138),p=a(21439),l=a(9531),o=a(15761),d=a(73418),c=a(92414),g=a(11666);const h={id:"get-strategies-by-segment-id",title:"Get strategies that reference segment",description:"Retrieve all strategies that reference the specified segment.",sidebar_label:"Get strategies that reference segment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Segments"],operationId:"getStrategiesBySegmentId",description:"Retrieve all strategies that reference the specified segment.",responses:{200:{description:"adminStrategiesSchema",content:{"application/json":{schema:{type:"object",required:["strategies"],description:"A collection of strategies belonging to a specified segment.",properties:{strategies:{description:"The list of strategies",type:"array",items:{type:"object",required:["id","featureName","projectId","environment","strategyName"],properties:{id:{type:"string",description:"The ID of the strategy",example:"e465c813-cffb-4232-b184-82b1d6fe9d3d"},featureName:{type:"string",description:"The ID of the strategy",example:"new-signup-flow"},projectId:{type:"string",description:"The ID of the project that the strategy belongs to.",example:"red-vista"},environment:{type:"string",description:"The ID of the environment that the strategy belongs to.",example:"development"},strategyName:{type:"string",description:"The name of the strategy's type.",example:"flexibleRollout"}}}}},title:"adminStrategiesSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/segments/{id}/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Get strategies that reference segment",description:{content:"Retrieve all strategies that reference the specified segment.",type:"text/plain"},url:{path:["api","admin","segments",":id","strategies"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,u={unversionedId:"reference/api/unleash/get-strategies-by-segment-id",id:"reference/api/unleash/get-strategies-by-segment-id",title:"Get strategies that reference segment",description:"Retrieve all strategies that reference the specified segment.",source:"@site/docs/reference/api/unleash/get-strategies-by-segment-id.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-strategies-by-segment-id",permalink:"/reference/api/unleash/get-strategies-by-segment-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-strategies-by-segment-id",title:"Get strategies that reference segment",description:"Retrieve all strategies that reference the specified segment.",sidebar_label:"Get strategies that reference segment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Segments"],operationId:"getStrategiesBySegmentId",description:"Retrieve all strategies that reference the specified segment.",responses:{200:{description:"adminStrategiesSchema",content:{"application/json":{schema:{type:"object",required:["strategies"],description:"A collection of strategies belonging to a specified segment.",properties:{strategies:{description:"The list of strategies",type:"array",items:{type:"object",required:["id","featureName","projectId","environment","strategyName"],properties:{id:{type:"string",description:"The ID of the strategy",example:"e465c813-cffb-4232-b184-82b1d6fe9d3d"},featureName:{type:"string",description:"The ID of the strategy",example:"new-signup-flow"},projectId:{type:"string",description:"The ID of the project that the strategy belongs to.",example:"red-vista"},environment:{type:"string",description:"The ID of the environment that the strategy belongs to.",example:"development"},strategyName:{type:"string",description:"The name of the strategy's type.",example:"flexibleRollout"}}}}},title:"adminStrategiesSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/segments/{id}/strategies",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.4"},postman:{name:"Get strategies that reference segment",description:{content:"Retrieve all strategies that reference the specified segment.",type:"text/plain"},url:{path:["api","admin","segments",":id","strategies"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get strategy segments",permalink:"/reference/api/unleash/get-segments-by-strategy-id"},next:{title:"Deletes a segment by id",permalink:"/reference/api/unleash/remove-segment"}},f={},b=[{value:"Request",id:"request",level:2}],v={toc:b};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Get strategies that reference segment"),(0,i.kt)(n.Z,{method:"get",path:"/api/admin/segments/{id}/strategies",mdxType:"MethodEndpoint"}),(0,i.kt)(m.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Retrieve all strategies that reference the specified segment."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(g.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"adminStrategiesSchema")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(g.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"strategies"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"The list of strategies")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the strategy",example:"e465c813-cffb-4232-b184-82b1d6fe9d3d"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"featureName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the strategy",example:"new-signup-flow"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"projectId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the project that the strategy belongs to.",example:"red-vista"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"environment",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the environment that the strategy belongs to.",example:"development"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"strategyName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the strategy's type.",example:"flexibleRollout"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(g.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "strategies": [\n    {\n      "id": "e465c813-cffb-4232-b184-82b1d6fe9d3d",\n      "featureName": "new-signup-flow",\n      "projectId": "red-vista",\n      "environment": "development",\n      "strategyName": "flexibleRollout"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);