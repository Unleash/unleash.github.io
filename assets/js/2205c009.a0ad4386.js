"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1960],{28157:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>y,metadata:()=>g,toc:()=>T});var i=t(87462),s=(t(67294),t(3905)),n=t(80334),p=(t(11032),t(46062)),l=t(57138),r=t(21439),o=(t(9531),t(15761)),m=t(73418),d=t(92414),c=t(11666);const y={id:"validate-tag-type",title:"validateTagType",description:"validateTagType",sidebar_label:"validateTagType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"validateTagType",responses:{200:{description:"validateTagTypeSchema",content:{"application/json":{schema:{type:"object",required:["valid","tagType"],properties:{valid:{type:"boolean"},tagType:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}},title:"validateTagTypeSchema"}}}}},requestBody:{description:"tagTypeSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}}}},description:"validateTagType",method:"post",path:"/api/admin/tag-types/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",icon:"string"},info:{title:"Unleash API",version:"5.1.0-beta.49"},postman:{name:"validate Tag Type",description:{type:"text/plain"},url:{path:["api","admin","tag-types","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/validate-tag-type",id:"reference/api/unleash/validate-tag-type",title:"validateTagType",description:"validateTagType",source:"@site/docs/reference/api/unleash/validate-tag-type.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/validate-tag-type",permalink:"/reference/api/unleash/validate-tag-type",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"validate-tag-type",title:"validateTagType",description:"validateTagType",sidebar_label:"validateTagType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"validateTagType",responses:{200:{description:"validateTagTypeSchema",content:{"application/json":{schema:{type:"object",required:["valid","tagType"],properties:{valid:{type:"boolean"},tagType:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}},title:"validateTagTypeSchema"}}}}},requestBody:{description:"tagTypeSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}}}},description:"validateTagType",method:"post",path:"/api/admin/tag-types/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",icon:"string"},info:{title:"Unleash API",version:"5.1.0-beta.49"},postman:{name:"validate Tag Type",description:{type:"text/plain"},url:{path:["api","admin","tag-types","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"createTagType",permalink:"/reference/api/unleash/create-tag-type"},next:{title:"getTagType",permalink:"/reference/api/unleash/get-tag-type"}},h={},T=[{value:"Request",id:"request",level:2}],v={toc:T};function k(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"validateTagType"),(0,s.kt)(p.Z,{method:"post",path:"/api/admin/tag-types/validate",mdxType:"MethodEndpoint"}),(0,s.kt)(l.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"validateTagType"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)(r.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"tagTypeSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"validateTagTypeSchema")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"valid",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"tagType"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "valid": true,\n  "tagType": {\n    "name": "string",\n    "description": "string",\n    "icon": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);