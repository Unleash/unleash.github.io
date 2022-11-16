"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6192],{57717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>h});var i=a(87462),s=(a(67294),a(3905)),n=a(60961),r=a(48165),p=a(23380),l=a(58475),o=a(5428),m=a(80487),d=(a(54881),a(11666));const u={id:"get-tag",title:"getTag",description:"getTag",sidebar_label:"getTag",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTag",responses:{200:{description:"tagWithVersionSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tag"],properties:{version:{type:"integer"},tag:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}}}},parameters:[{name:"type",in:"path",required:!0,schema:{type:"string"}},{name:"value",in:"path",required:!0,schema:{type:"string"}}],description:"getTag",method:"get",path:"/api/admin/tags/{type}/{value}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Tag",description:{type:"text/plain"},url:{path:["api","admin","tags",":type",":value"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"value"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},g=void 0,c={unversionedId:"reference/api/unleash/get-tag",id:"reference/api/unleash/get-tag",title:"getTag",description:"getTag",source:"@site/docs/reference/api/unleash/get-tag.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-tag",permalink:"/reference/api/unleash/get-tag",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-tag.api.mdx",tags:[],version:"current",frontMatter:{id:"get-tag",title:"getTag",description:"getTag",sidebar_label:"getTag",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTag",responses:{200:{description:"tagWithVersionSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tag"],properties:{version:{type:"integer"},tag:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}}}},parameters:[{name:"type",in:"path",required:!0,schema:{type:"string"}},{name:"value",in:"path",required:!0,schema:{type:"string"}}],description:"getTag",method:"get",path:"/api/admin/tags/{type}/{value}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Tag",description:{type:"text/plain"},url:{path:["api","admin","tags",":type",":value"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"value"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getTagsByType",permalink:"/reference/api/unleash/get-tags-by-type"},next:{title:"deleteTag",permalink:"/reference/api/unleash/delete-tag"}},y={},h=[{value:"getTag",id:"gettag",level:2}],v={toc:h};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"gettag"},"getTag"),(0,s.kt)("p",null,"getTag"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"type",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"value",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"tagWithVersionSchema")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"tag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "version": 0,\n  "tag": {\n    "value": "string",\n    "type": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);