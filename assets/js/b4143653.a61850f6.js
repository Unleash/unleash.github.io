"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6281],{37031:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>y,toc:()=>g});var i=t(87462),s=(t(67294),t(3905)),r=t(70439),n=t(89402),l=t(10725),o=t(65860),p=t(5479),d=t(83559),m=(t(48567),t(72905));const u={id:"add-tag",sidebar_label:"addTag",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"addTag",requestBody:{description:"tagSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}},parameters:[{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],description:"addTag",method:"post",path:"/api/admin/features/{featureName}/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{value:"string",type:"string"},info:{title:"Unleash API",version:"4.16.0"},postman:{name:"add Tag",description:{type:"text/plain"},url:{path:["api","admin","features",":featureName","tags"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/reference/api/unleash/unleash-api"},c=void 0,y={unversionedId:"reference/api/unleash/add-tag",id:"reference/api/unleash/add-tag",title:"add-tag",description:"addTag",source:"@site/docs/reference/api/unleash/add-tag.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/add-tag",permalink:"/reference/api/unleash/add-tag",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/add-tag.api.mdx",tags:[],version:"current",frontMatter:{id:"add-tag",sidebar_label:"addTag",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"addTag",requestBody:{description:"tagSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string"},type:{type:"string"}}}}}}},parameters:[{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],description:"addTag",method:"post",path:"/api/admin/features/{featureName}/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{value:"string",type:"string"},info:{title:"Unleash API",version:"4.16.0"},postman:{name:"add Tag",description:{type:"text/plain"},url:{path:["api","admin","features",":featureName","tags"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"listTags",permalink:"/reference/api/unleash/list-tags"},next:{title:"removeTag",permalink:"/reference/api/unleash/remove-tag"}},h={},g=[{value:"addTag",id:"addtag",level:2}],f={toc:g};function k(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"addtag"},"addTag"),(0,s.kt)("p",null,"addTag"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"tagSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"value",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The resource was successfully created.")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{class:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null,(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The location of the newly created resource.")))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "value": "string",\n  "type": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);