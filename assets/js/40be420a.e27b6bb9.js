"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[236],{7139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>k,frontMatter:()=>h,metadata:()=>x,toc:()=>b});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),l=(a(11032),a(46062)),r=a(57138),o=a(21439),p=a(9531),m=a(15761),d=a(73418),c=a(92414),u=a(11666);const h={id:"get-context-field",title:"getContextField",description:"getContextField",sidebar_label:"getContextField",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],operationId:"getContextField",responses:{200:{description:"contextFieldSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string",nullable:!0},stickiness:{type:"boolean"},sortOrder:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},usedInFeatures:{type:"number",description:"Number of projects where this context field is used in",example:3,nullable:!0},usedInProjects:{type:"number",description:"Number of projects where this context field is used in",example:2,nullable:!0},legalValues:{type:"array",items:{type:"object",additionalProperties:!1,required:["value"],properties:{value:{type:"string"},description:{type:"string"}},title:"legalValueSchema"}}},title:"contextFieldSchema"}}}}},parameters:[{name:"contextField",in:"path",required:!0,schema:{type:"string"}}],description:"getContextField",method:"get",path:"/api/admin/context/{contextField}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Context Field",description:{type:"text/plain"},url:{path:["api","admin","context",":contextField"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"contextField"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,x={unversionedId:"reference/api/unleash/get-context-field",id:"reference/api/unleash/get-context-field",title:"getContextField",description:"getContextField",source:"@site/docs/reference/api/unleash/get-context-field.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-context-field",permalink:"/reference/api/unleash/get-context-field",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-context-field",title:"getContextField",description:"getContextField",sidebar_label:"getContextField",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],operationId:"getContextField",responses:{200:{description:"contextFieldSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string",nullable:!0},stickiness:{type:"boolean"},sortOrder:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},usedInFeatures:{type:"number",description:"Number of projects where this context field is used in",example:3,nullable:!0},usedInProjects:{type:"number",description:"Number of projects where this context field is used in",example:2,nullable:!0},legalValues:{type:"array",items:{type:"object",additionalProperties:!1,required:["value"],properties:{value:{type:"string"},description:{type:"string"}},title:"legalValueSchema"}}},title:"contextFieldSchema"}}}}},parameters:[{name:"contextField",in:"path",required:!0,schema:{type:"string"}}],description:"getContextField",method:"get",path:"/api/admin/context/{contextField}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Context Field",description:{type:"text/plain"},url:{path:["api","admin","context",":contextField"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"contextField"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"createContextField",permalink:"/reference/api/unleash/create-context-field"},next:{title:"updateContextField",permalink:"/reference/api/unleash/update-context-field"}},g={},b=[{value:"Request",id:"request",level:2}],f={toc:b};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"getContextField"),(0,n.kt)(l.Z,{method:"get",path:"/api/admin/context/{contextField}",mdxType:"MethodEndpoint"}),(0,n.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"getContextField"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(p.Z,{className:"paramsItem",param:{name:"contextField",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"contextFieldSchema")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"usedInFeatures",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Number of projects where this context field is used in",example:3,nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"usedInProjects",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Number of projects where this context field is used in",example:2,nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"legalValues"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(d.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "name": "string",\n  "description": "string",\n  "stickiness": true,\n  "sortOrder": 0,\n  "createdAt": "2023-06-20T00:14:28.682Z",\n  "usedInFeatures": 3,\n  "usedInProjects": 2,\n  "legalValues": [\n    {\n      "value": "string",\n      "description": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);