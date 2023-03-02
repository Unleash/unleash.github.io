"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[775],{79589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var r=a(87462),i=(a(67294),a(3905)),s=a(60961),n=a(48165),l=(a(90115),a(58475)),o=a(5428),p=a(80487),c=(a(54881),a(11666));const m={id:"create-tag",title:"createTag",description:"createTag",sidebar_label:"createTag",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"createTag",responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tag"],properties:{version:{type:"integer"},tag:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}}}},requestBody:{description:"tagSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}},description:"createTag",method:"post",path:"/api/admin/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{value:"string",type:"string"},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"create Tag",description:{type:"text/plain"},url:{path:["api","admin","tags"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,u={unversionedId:"reference/api/unleash/create-tag",id:"reference/api/unleash/create-tag",title:"createTag",description:"createTag",source:"@site/docs/reference/api/unleash/create-tag.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-tag",permalink:"/reference/api/unleash/create-tag",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-tag",title:"createTag",description:"createTag",sidebar_label:"createTag",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"createTag",responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tag"],properties:{version:{type:"integer"},tag:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}}}},requestBody:{description:"tagSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}},description:"createTag",method:"post",path:"/api/admin/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{value:"string",type:"string"},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"create Tag",description:{type:"text/plain"},url:{path:["api","admin","tags"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getTags",permalink:"/reference/api/unleash/get-tags"},next:{title:"getTagsByType",permalink:"/reference/api/unleash/get-tags-by-type"}},y={},g=[{value:"createTag",id:"createtag",level:2}],h={toc:g};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"createtag"},"createTag"),(0,i.kt)("p",null,"createTag"),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"tagSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The resource was successfully created.")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"location"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null,(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"The location of the newly created resource.")))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"version",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"tag"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "version": 0,\n  "tag": {\n    "value": "string",\n    "type": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);