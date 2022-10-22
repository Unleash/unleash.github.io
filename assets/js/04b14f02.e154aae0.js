"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2946],{52590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>c,toc:()=>h});var s=a(87462),i=(a(67294),a(3905)),n=a(70439),r=a(89402),l=(a(10725),a(65860)),p=a(5479),o=a(83559),g=(a(48567),a(72905));const m={id:"get-tags",title:"getTags",description:"getTags",sidebar_label:"getTags",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTags",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer"},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}}}}},description:"getTags",method:"get",path:"/api/admin/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"get Tags",description:{type:"text/plain"},url:{path:["api","admin","tags"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},d=void 0,c={unversionedId:"reference/api/unleash/get-tags",id:"reference/api/unleash/get-tags",title:"getTags",description:"getTags",source:"@site/docs/reference/api/unleash/get-tags.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-tags",permalink:"/reference/api/unleash/get-tags",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-tags.api.mdx",tags:[],version:"current",frontMatter:{id:"get-tags",title:"getTags",description:"getTags",sidebar_label:"getTags",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTags",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer"},tags:{type:"array",items:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}}}}},description:"getTags",method:"get",path:"/api/admin/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"get Tags",description:{type:"text/plain"},url:{path:["api","admin","tags"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Tags",permalink:"/reference/api/unleash/tags"},next:{title:"createTag",permalink:"/reference/api/unleash/create-tag"}},u={},h=[{value:"getTags",id:"gettags",level:2}],y={toc:h};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gettags"},"getTags"),(0,i.kt)("p",null,"getTags"),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(g.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"tagsSchema")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(g.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,i.kt)(g.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"tags"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(g.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "version": 0,\n  "tags": [\n    {\n      "value": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);