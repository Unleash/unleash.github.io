"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7666],{79242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>_,frontMatter:()=>y,metadata:()=>u,toc:()=>T});var s=a(87462),i=(a(67294),a(3905)),n=a(80334),p=(a(11032),a(46062)),r=a(57138),l=a(21439),o=(a(9531),a(15761)),m=a(73418),c=a(92414),d=a(11666);const y={id:"get-tag-types",title:"getTagTypes",description:"getTagTypes",sidebar_label:"getTagTypes",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagTypes",responses:{200:{description:"tagTypesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tagTypes"],properties:{version:{type:"integer"},tagTypes:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}}},title:"tagTypesSchema"}}}}},description:"getTagTypes",method:"get",path:"/api/admin/tag-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Tag Types",description:{type:"text/plain"},url:{path:["api","admin","tag-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,u={unversionedId:"reference/api/unleash/get-tag-types",id:"reference/api/unleash/get-tag-types",title:"getTagTypes",description:"getTagTypes",source:"@site/docs/reference/api/unleash/get-tag-types.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-tag-types",permalink:"/reference/api/unleash/get-tag-types",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-tag-types",title:"getTagTypes",description:"getTagTypes",sidebar_label:"getTagTypes",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagTypes",responses:{200:{description:"tagTypesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tagTypes"],properties:{version:{type:"integer"},tagTypes:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}}},title:"tagTypesSchema"}}}}},description:"getTagTypes",method:"get",path:"/api/admin/tag-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Tag Types",description:{type:"text/plain"},url:{path:["api","admin","tag-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"deleteTag",permalink:"/reference/api/unleash/delete-tag"},next:{title:"createTagType",permalink:"/reference/api/unleash/create-tag-type"}},h={},T=[{value:"Request",id:"request",level:2}],k={toc:T};function _(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"getTagTypes"),(0,i.kt)(p.Z,{method:"get",path:"/api/admin/tag-types",mdxType:"MethodEndpoint"}),(0,i.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"getTagTypes"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"tagTypesSchema")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"tagTypes"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "version": 0,\n  "tagTypes": [\n    {\n      "name": "string",\n      "description": "string",\n      "icon": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}_.isMDXComponent=!0}}]);