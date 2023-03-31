"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9026],{39480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>f,frontMatter:()=>y,metadata:()=>u,toc:()=>b});var i=a(87462),r=(a(67294),a(3905)),s=a(80334),n=(a(11032),a(46062)),p=a(21439),l=a(9531),m=a(15761),o=a(73418),d=a(92414),c=a(11666);const y={id:"get-strategy",title:"getStrategy",description:"getStrategy",sidebar_label:"getStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getStrategy",responses:{200:{description:"strategySchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{name:{type:"string"},displayName:{type:"string",nullable:!0},description:{type:"string"},editable:{type:"boolean"},deprecated:{type:"boolean"},parameters:{type:"array",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string"},type:{type:"string"},description:{type:"string"},required:{type:"boolean"}}}}},title:"strategySchema"}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getStrategy",method:"get",path:"/api/admin/strategies/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"get Strategy",description:{type:"text/plain"},url:{path:["api","admin","strategies",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,u={unversionedId:"reference/api/unleash/get-strategy",id:"reference/api/unleash/get-strategy",title:"getStrategy",description:"getStrategy",source:"@site/docs/reference/api/unleash/get-strategy.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-strategy",permalink:"/reference/api/unleash/get-strategy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-strategy",title:"getStrategy",description:"getStrategy",sidebar_label:"getStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"getStrategy",responses:{200:{description:"strategySchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","displayName","description","editable","deprecated","parameters"],properties:{name:{type:"string"},displayName:{type:"string",nullable:!0},description:{type:"string"},editable:{type:"boolean"},deprecated:{type:"boolean"},parameters:{type:"array",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string"},type:{type:"string"},description:{type:"string"},required:{type:"boolean"}}}}},title:"strategySchema"}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getStrategy",method:"get",path:"/api/admin/strategies/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"get Strategy",description:{type:"text/plain"},url:{path:["api","admin","strategies",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"createStrategy",permalink:"/reference/api/unleash/create-strategy"},next:{title:"removeStrategy",permalink:"/reference/api/unleash/remove-strategy"}},h={},b=[],k={toc:b};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"getStrategy"),(0,r.kt)(n.Z,{method:"get",path:"/api/admin/strategies/{name}",mdxType:"MethodEndpoint"}),(0,r.kt)("p",null,"getStrategy"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"strategySchema")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"editable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"deprecated",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"parameters"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"required",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(m.Z,{responseExample:'{\n  "name": "string",\n  "displayName": "string",\n  "description": "string",\n  "editable": true,\n  "deprecated": true,\n  "parameters": [\n    {\n      "name": "string",\n      "type": "string",\n      "description": "string",\n      "required": true\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);