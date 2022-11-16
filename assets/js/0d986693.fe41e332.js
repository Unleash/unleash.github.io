"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7666],{79242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>T,frontMatter:()=>d,metadata:()=>g,toc:()=>u});var i=a(87462),s=(a(67294),a(3905)),n=a(60961),p=a(48165),r=(a(23380),a(58475)),l=a(5428),o=a(80487),m=(a(54881),a(11666));const d={id:"get-tag-types",title:"getTagTypes",description:"getTagTypes",sidebar_label:"getTagTypes",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagTypes",responses:{200:{description:"tagTypesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tagTypes"],properties:{version:{type:"integer"},tagTypes:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}}}}}}}}}},description:"getTagTypes",method:"get",path:"/api/admin/tag-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Tag Types",description:{type:"text/plain"},url:{path:["api","admin","tag-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},c=void 0,g={unversionedId:"reference/api/unleash/get-tag-types",id:"reference/api/unleash/get-tag-types",title:"getTagTypes",description:"getTagTypes",source:"@site/docs/reference/api/unleash/get-tag-types.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-tag-types",permalink:"/reference/api/unleash/get-tag-types",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-tag-types.api.mdx",tags:[],version:"current",frontMatter:{id:"get-tag-types",title:"getTagTypes",description:"getTagTypes",sidebar_label:"getTagTypes",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagTypes",responses:{200:{description:"tagTypesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tagTypes"],properties:{version:{type:"integer"},tagTypes:{type:"array",items:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}}}}}}}}}},description:"getTagTypes",method:"get",path:"/api/admin/tag-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Tag Types",description:{type:"text/plain"},url:{path:["api","admin","tag-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"deleteTag",permalink:"/reference/api/unleash/delete-tag"},next:{title:"createTagType",permalink:"/reference/api/unleash/create-tag-type"}},y={},u=[{value:"getTagTypes",id:"gettagtypes",level:2}],h={toc:u};function T(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"gettagtypes"},"getTagTypes"),(0,s.kt)("p",null,"getTagTypes"),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"tagTypesSchema")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(o.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"tagTypes"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"icon",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "version": 0,\n  "tagTypes": [\n    {\n      "name": "string",\n      "description": "string",\n      "icon": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);