"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9369],{69937:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>b,frontMatter:()=>y,metadata:()=>u,toc:()=>T});var i=a(87462),n=(a(67294),a(3905)),p=a(80334),s=(a(11032),a(46062)),r=a(21439),l=a(9531),m=a(15761),o=a(73418),d=a(92414),c=a(11666);const y={id:"get-tag-type",title:"getTagType",description:"getTagType",sidebar_label:"getTagType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagType",responses:{200:{description:"tagTypeSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getTagType",method:"get",path:"/api/admin/tag-types/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"get Tag Type",description:{type:"text/plain"},url:{path:["api","admin","tag-types",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,u={unversionedId:"reference/api/unleash/get-tag-type",id:"reference/api/unleash/get-tag-type",title:"getTagType",description:"getTagType",source:"@site/docs/reference/api/unleash/get-tag-type.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-tag-type",permalink:"/reference/api/unleash/get-tag-type",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-tag-type",title:"getTagType",description:"getTagType",sidebar_label:"getTagType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagType",responses:{200:{description:"tagTypeSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}},title:"tagTypeSchema"}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getTagType",method:"get",path:"/api/admin/tag-types/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"get Tag Type",description:{type:"text/plain"},url:{path:["api","admin","tag-types",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"validateTagType",permalink:"/reference/api/unleash/validate-tag-type"},next:{title:"updateTagType",permalink:"/reference/api/unleash/update-tag-type"}},h={},T=[],k={toc:T};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"getTagType"),(0,n.kt)(s.Z,{method:"get",path:"/api/admin/tag-types/{name}",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"getTagType"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(p.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"tagTypeSchema")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "name": "string",\n  "description": "string",\n  "icon": "string"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);