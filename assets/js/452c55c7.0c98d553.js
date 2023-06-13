"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5957],{44906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>f,frontMatter:()=>u,metadata:()=>h,toc:()=>k});var i=a(87462),s=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),l=a(57138),o=a(21439),m=(a(9531),a(15761)),p=a(73418),c=a(92414),d=a(11666);const u={id:"create-context-field",title:"createContextField",description:"createContextField",sidebar_label:"createContextField",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],operationId:"createContextField",requestBody:{description:"upsertContextFieldSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},stickiness:{type:"boolean"},sortOrder:{type:"number"},legalValues:{type:"array",items:{type:"object",additionalProperties:!1,required:["value"],properties:{value:{type:"string"},description:{type:"string"}},title:"legalValueSchema"}}},title:"upsertContextFieldSchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string",nullable:!0},stickiness:{type:"boolean"},sortOrder:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},usedInFeatures:{type:"number",description:"Number of projects where this context field is used in",example:3,nullable:!0},usedInProjects:{type:"number",description:"Number of projects where this context field is used in",example:2,nullable:!0},legalValues:{type:"array",items:{type:"object",additionalProperties:!1,required:["value"],properties:{value:{type:"string"},description:{type:"string"}},title:"legalValueSchema"}}},title:"contextFieldSchema"}}}}},description:"createContextField",method:"post",path:"/api/admin/context",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",stickiness:!0,sortOrder:0,legalValues:[{value:"string",description:"string"}]},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"create Context Field",description:{type:"text/plain"},url:{path:["api","admin","context"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,h={unversionedId:"reference/api/unleash/create-context-field",id:"reference/api/unleash/create-context-field",title:"createContextField",description:"createContextField",source:"@site/docs/reference/api/unleash/create-context-field.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-context-field",permalink:"/reference/api/unleash/create-context-field",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-context-field",title:"createContextField",description:"createContextField",sidebar_label:"createContextField",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],operationId:"createContextField",requestBody:{description:"upsertContextFieldSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},stickiness:{type:"boolean"},sortOrder:{type:"number"},legalValues:{type:"array",items:{type:"object",additionalProperties:!1,required:["value"],properties:{value:{type:"string"},description:{type:"string"}},title:"legalValueSchema"}}},title:"upsertContextFieldSchema"}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string",nullable:!0},stickiness:{type:"boolean"},sortOrder:{type:"number"},createdAt:{type:"string",format:"date-time",nullable:!0},usedInFeatures:{type:"number",description:"Number of projects where this context field is used in",example:3,nullable:!0},usedInProjects:{type:"number",description:"Number of projects where this context field is used in",example:2,nullable:!0},legalValues:{type:"array",items:{type:"object",additionalProperties:!1,required:["value"],properties:{value:{type:"string"},description:{type:"string"}},title:"legalValueSchema"}}},title:"contextFieldSchema"}}}}},description:"createContextField",method:"post",path:"/api/admin/context",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",stickiness:!0,sortOrder:0,legalValues:[{value:"string",description:"string"}]},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"create Context Field",description:{type:"text/plain"},url:{path:["api","admin","context"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getContextFields",permalink:"/reference/api/unleash/get-context-fields"},next:{title:"getContextField",permalink:"/reference/api/unleash/get-context-field"}},g={},k=[{value:"Request",id:"request",level:2}],b={toc:k};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"createContextField"),(0,s.kt)(n.Z,{method:"post",path:"/api/admin/context",mdxType:"MethodEndpoint"}),(0,s.kt)(l.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"createContextField"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"upsertContextFieldSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"legalValues"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The resource was successfully created.")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null,(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The location of the newly created resource.")))))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"usedInFeatures",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Number of projects where this context field is used in",example:3,nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"usedInProjects",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Number of projects where this context field is used in",example:2,nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"legalValues"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "name": "string",\n  "description": "string",\n  "stickiness": true,\n  "sortOrder": 0,\n  "createdAt": "2023-06-13T00:15:33.004Z",\n  "usedInFeatures": 3,\n  "usedInProjects": 2,\n  "legalValues": [\n    {\n      "value": "string",\n      "description": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);