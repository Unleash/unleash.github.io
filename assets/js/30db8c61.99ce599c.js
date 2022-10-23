"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9369],{27575:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var i=a(87462),n=(a(67294),a(3905)),p=a(70439),s=a(89402),r=a(10725),l=a(65860),o=a(5479),m=a(83559),d=(a(48567),a(72905));const c={id:"get-tag-type",title:"getTagType",description:"getTagType",sidebar_label:"getTagType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagType",responses:{200:{description:"tagTypeSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getTagType",method:"get",path:"/api/admin/tag-types/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"get Tag Type",description:{type:"text/plain"},url:{path:["api","admin","tag-types",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},g=void 0,y={unversionedId:"reference/api/unleash/get-tag-type",id:"reference/api/unleash/get-tag-type",title:"getTagType",description:"getTagType",source:"@site/docs/reference/api/unleash/get-tag-type.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-tag-type",permalink:"/reference/api/unleash/get-tag-type",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-tag-type.api.mdx",tags:[],version:"current",frontMatter:{id:"get-tag-type",title:"getTagType",description:"getTagType",sidebar_label:"getTagType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagType",responses:{200:{description:"tagTypeSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],description:"getTagType",method:"get",path:"/api/admin/tag-types/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"get Tag Type",description:{type:"text/plain"},url:{path:["api","admin","tag-types",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"validateTagType",permalink:"/reference/api/unleash/validate-tag-type"},next:{title:"updateTagType",permalink:"/reference/api/unleash/update-tag-type"}},u={},h=[{value:"getTagType",id:"gettagtype",level:2}],T={toc:h};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"gettagtype"},"getTagType"),(0,n.kt)("p",null,"getTagType"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(p.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"tagTypeSchema")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"icon",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "name": "string",\n  "description": "string",\n  "icon": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);