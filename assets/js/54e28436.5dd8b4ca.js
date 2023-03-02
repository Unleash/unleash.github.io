"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9338],{47536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>T,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),r=a(60961),n=a(48165),p=(a(90115),a(58475)),l=a(5428),o=a(80487),c=(a(54881),a(11666));const m={id:"create-tag-type",title:"createTagType",description:"createTagType",sidebar_label:"createTagType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"createTagType",responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}}}}}}},requestBody:{description:"tagTypeSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}}}}}},description:"createTagType",method:"post",path:"/api/admin/tag-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",icon:"string"},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"create Tag Type",description:{type:"text/plain"},url:{path:["api","admin","tag-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,y={unversionedId:"reference/api/unleash/create-tag-type",id:"reference/api/unleash/create-tag-type",title:"createTagType",description:"createTagType",source:"@site/docs/reference/api/unleash/create-tag-type.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-tag-type",permalink:"/reference/api/unleash/create-tag-type",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-tag-type",title:"createTagType",description:"createTagType",sidebar_label:"createTagType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"createTagType",responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}}}}}}},requestBody:{description:"tagTypeSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"},description:{type:"string"},icon:{type:"string",nullable:!0}}}}}},description:"createTagType",method:"post",path:"/api/admin/tag-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",icon:"string"},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"create Tag Type",description:{type:"text/plain"},url:{path:["api","admin","tag-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getTagTypes",permalink:"/reference/api/unleash/get-tag-types"},next:{title:"validateTagType",permalink:"/reference/api/unleash/validate-tag-type"}},u={},g=[{value:"createTagType",id:"createtagtype",level:2}],h={toc:g};function T(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"createtagtype"},"createTagType"),(0,s.kt)("p",null,"createTagType"),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"tagTypeSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The resource was successfully created.")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null,(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The location of the newly created resource.")))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(o.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "name": "string",\n  "description": "string",\n  "icon": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);