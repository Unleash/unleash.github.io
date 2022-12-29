"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6574],{88541:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>y,toc:()=>h});var s=a(87462),i=(a(67294),a(3905)),r=a(60961),l=a(48165),n=a(90115),p=a(58475),o=a(5428),m=a(80487),d=(a(54881),a(11666));const u={id:"list-tags",title:"listTags",description:"listTags",sidebar_label:"listTags",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"listTags",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer"},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}}}}},parameters:[{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],description:"listTags",method:"get",path:"/api/admin/features/{featureName}/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"list Tags",description:{type:"text/plain"},url:{path:["api","admin","features",":featureName","tags"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,y={unversionedId:"reference/api/unleash/list-tags",id:"reference/api/unleash/list-tags",title:"listTags",description:"listTags",source:"@site/docs/reference/api/unleash/list-tags.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/list-tags",permalink:"/reference/api/unleash/list-tags",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-tags",title:"listTags",description:"listTags",sidebar_label:"listTags",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"listTags",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer"},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}}}}},parameters:[{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],description:"listTags",method:"get",path:"/api/admin/features/{featureName}/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"list Tags",description:{type:"text/plain"},url:{path:["api","admin","features",":featureName","tags"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"validateFeature",permalink:"/reference/api/unleash/validate-feature"},next:{title:"addTag",permalink:"/reference/api/unleash/add-tag"}},g={},h=[{value:"listTags",id:"listtags",level:2}],v={toc:h};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"listtags"},"listTags"),(0,i.kt)("p",null,"listTags"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"tagsSchema")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"tags"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "version": 0,\n  "tags": [\n    {\n      "value": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);