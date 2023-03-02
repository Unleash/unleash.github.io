"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3853],{9425:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>y,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var i=a(87462),s=(a(67294),a(3905)),r=a(60961),l=a(48165),n=(a(90115),a(58475)),p=a(5428),m=a(80487),o=(a(54881),a(11666));const u={id:"get-all-feature-types",title:"getAllFeatureTypes",description:"getAllFeatureTypes",sidebar_label:"getAllFeatureTypes",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"getAllFeatureTypes",responses:{200:{description:"featureTypesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","types"],properties:{version:{type:"integer"},types:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","name","description","lifetimeDays"],properties:{id:{type:"string"},name:{type:"string"},description:{type:"string"},lifetimeDays:{type:"number",nullable:!0}}}}}}}}}},description:"getAllFeatureTypes",method:"get",path:"/api/admin/feature-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get All Feature Types",description:{type:"text/plain"},url:{path:["api","admin","feature-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,d={unversionedId:"reference/api/unleash/get-all-feature-types",id:"reference/api/unleash/get-all-feature-types",title:"getAllFeatureTypes",description:"getAllFeatureTypes",source:"@site/docs/reference/api/unleash/get-all-feature-types.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-all-feature-types",permalink:"/reference/api/unleash/get-all-feature-types",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-feature-types",title:"getAllFeatureTypes",description:"getAllFeatureTypes",sidebar_label:"getAllFeatureTypes",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"getAllFeatureTypes",responses:{200:{description:"featureTypesSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","types"],properties:{version:{type:"integer"},types:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","name","description","lifetimeDays"],properties:{id:{type:"string"},name:{type:"string"},description:{type:"string"},lifetimeDays:{type:"number",nullable:!0}}}}}}}}}},description:"getAllFeatureTypes",method:"get",path:"/api/admin/feature-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get All Feature Types",description:{type:"text/plain"},url:{path:["api","admin","feature-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"removeTag",permalink:"/reference/api/unleash/remove-tag"},next:{title:"getFeatureEnvironment",permalink:"/reference/api/unleash/get-feature-environment"}},c={},h=[{value:"getAllFeatureTypes",id:"getallfeaturetypes",level:2}],g={toc:h};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getallfeaturetypes"},"getAllFeatureTypes"),(0,s.kt)("p",null,"getAllFeatureTypes"),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"featureTypesSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"version",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"types"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"lifetimeDays",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "version": 0,\n  "types": [\n    {\n      "id": "string",\n      "name": "string",\n      "description": "string",\n      "lifetimeDays": 0\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);