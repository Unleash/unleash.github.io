"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4953],{67855:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var a=i(87462),s=(i(67294),i(3905)),r=i(70439),n=i(89402),l=i(10725),o=i(65860),p=i(5479),d=i(83559),m=(i(48567),i(72905));const c={id:"get-role-by-id",sidebar_label:"getRoleById",hide_title:!0,hide_table_of_contents:!0,api:{tags:["admin"],operationId:"getRoleById",responses:{200:{description:"roleWithPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["id","type","name","permissions"],additionalProperties:!1,properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}}}}}}}}}},parameters:[{name:"roleId",in:"path",required:!0,schema:{type:"string"}}],description:"getRoleById",method:"get",path:"/ushosted/api/admin/roles/{roleId}",servers:[{url:"https://us.app.unleash-hosted.com"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"get Role By Id",description:{type:"text/plain"},url:{path:["ushosted","api","admin","roles",":roleId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"roleId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/reference/api/unleash/unleash-api"},y=void 0,u={unversionedId:"reference/api/unleash/get-role-by-id",id:"reference/api/unleash/get-role-by-id",title:"get-role-by-id",description:"getRoleById",source:"@site/docs/reference/api/unleash/get-role-by-id.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-role-by-id",permalink:"/reference/api/unleash/get-role-by-id",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-role-by-id.api.mdx",tags:[],version:"current",frontMatter:{id:"get-role-by-id",sidebar_label:"getRoleById",hide_title:!0,hide_table_of_contents:!0,api:{tags:["admin"],operationId:"getRoleById",responses:{200:{description:"roleWithPermissionsSchema",content:{"application/json":{schema:{type:"object",required:["id","type","name","permissions"],additionalProperties:!1,properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id","name","displayName","type"],additionalProperties:!1,properties:{id:{type:"number"},name:{type:"string"},displayName:{type:"string"},type:{type:"string"},environment:{type:"string"}}}}}}}}}},parameters:[{name:"roleId",in:"path",required:!0,schema:{type:"string"}}],description:"getRoleById",method:"get",path:"/ushosted/api/admin/roles/{roleId}",servers:[{url:"https://us.app.unleash-hosted.com"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"get Role By Id",description:{type:"text/plain"},url:{path:["ushosted","api","admin","roles",":roleId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"roleId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/reference/api/unleash/unleash-api"}},h={},g=[{value:"getRoleById",id:"getrolebyid",level:2}],b={toc:g};function v(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getrolebyid"},"getRoleById"),(0,s.kt)("p",null,"getRoleById"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"roleId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"roleWithPermissionsSchema")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"permissions"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"displayName",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "id": 0,\n  "type": "string",\n  "name": "string",\n  "description": "string",\n  "permissions": [\n    {\n      "id": 0,\n      "name": "string",\n      "displayName": "string",\n      "type": "string",\n      "environment": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);