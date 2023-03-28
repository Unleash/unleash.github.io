"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1960],{28157:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>y,default:()=>v,frontMatter:()=>c,metadata:()=>g,toc:()=>h});var i=t(87462),n=(t(67294),t(3905)),s=t(80334),p=(t(11032),t(46062)),l=t(21439),r=(t(9531),t(15761)),o=t(73418),m=t(92414),d=t(11666);const c={id:"validate-tag-type",title:"validateTagType",description:"validateTagType",sidebar_label:"validateTagType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"validateTagType",responses:{200:{description:"validateTagTypeSchema",content:{"application/json":{schema:{type:"object",required:["valid","tagType"],properties:{valid:{type:"boolean"},tagType:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}},title:"validateTagTypeSchema"}}}}},requestBody:{description:"tagTypeSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}}}},description:"validateTagType",method:"post",path:"/api/admin/tag-types/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",icon:"string"},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"validate Tag Type",description:{type:"text/plain"},url:{path:["api","admin","tag-types","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/validate-tag-type",id:"reference/api/unleash/validate-tag-type",title:"validateTagType",description:"validateTagType",source:"@site/docs/reference/api/unleash/validate-tag-type.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/validate-tag-type",permalink:"/reference/api/unleash/validate-tag-type",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"validate-tag-type",title:"validateTagType",description:"validateTagType",sidebar_label:"validateTagType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"validateTagType",responses:{200:{description:"validateTagTypeSchema",content:{"application/json":{schema:{type:"object",required:["valid","tagType"],properties:{valid:{type:"boolean"},tagType:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}},title:"validateTagTypeSchema"}}}}},requestBody:{description:"tagTypeSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}}}},description:"validateTagType",method:"post",path:"/api/admin/tag-types/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",icon:"string"},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"validate Tag Type",description:{type:"text/plain"},url:{path:["api","admin","tag-types","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"createTagType",permalink:"/reference/api/unleash/create-tag-type"},next:{title:"getTagType",permalink:"/reference/api/unleash/get-tag-type"}},u={},h=[],T={toc:h};function v(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},T,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"validateTagType"),(0,n.kt)(p.Z,{method:"post",path:"/api/admin/tag-types/validate",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"validateTagType"),(0,n.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"tagTypeSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"validateTagTypeSchema")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"valid",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"tagType"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}))))))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:'{\n  "valid": true,\n  "tagType": {\n    "name": "string",\n    "description": "string",\n    "icon": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);