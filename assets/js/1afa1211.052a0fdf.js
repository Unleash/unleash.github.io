"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6318],{56245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>m,metadata:()=>g,toc:()=>h});var s=a(87462),i=(a(67294),a(3905)),p=a(60961),r=a(48165),n=a(90115),l=a(58475),o=a(5428),y=a(80487),d=(a(54881),a(11666));const m={id:"get-tags-by-type",title:"getTagsByType",description:"getTagsByType",sidebar_label:"getTagsByType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagsByType",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer"},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}}}}},parameters:[{name:"type",in:"path",required:!0,schema:{type:"string"}}],description:"getTagsByType",method:"get",path:"/api/admin/tags/{type}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get Tags By Type",description:{type:"text/plain"},url:{path:["api","admin","tags",":type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,g={unversionedId:"reference/api/unleash/get-tags-by-type",id:"reference/api/unleash/get-tags-by-type",title:"getTagsByType",description:"getTagsByType",source:"@site/docs/reference/api/unleash/get-tags-by-type.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-tags-by-type",permalink:"/reference/api/unleash/get-tags-by-type",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-tags-by-type",title:"getTagsByType",description:"getTagsByType",sidebar_label:"getTagsByType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagsByType",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer"},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}}}}},parameters:[{name:"type",in:"path",required:!0,schema:{type:"string"}}],description:"getTagsByType",method:"get",path:"/api/admin/tags/{type}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get Tags By Type",description:{type:"text/plain"},url:{path:["api","admin","tags",":type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"createTag",permalink:"/reference/api/unleash/create-tag"},next:{title:"getTag",permalink:"/reference/api/unleash/get-tag"}},u={},h=[{value:"getTagsByType",id:"gettagsbytype",level:2}],T={toc:h};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gettagsbytype"},"getTagsByType"),(0,i.kt)("p",null,"getTagsByType"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"type",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(p.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"tagsSchema")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(y.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"tags"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "version": 0,\n  "tags": [\n    {\n      "value": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);