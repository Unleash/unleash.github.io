"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7291],{24589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var i=a(87462),r=(a(67294),a(3905)),s=a(60961),n=a(48165),l=a(90115),o=a(58475),p=a(5428),m=a(80487),d=(a(54881),a(11666));const c={id:"update-role",title:"updateRole",description:"updateRole",sidebar_label:"updateRole",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"updateRole",requestBody:{description:"createRoleWithPermissionsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id"],properties:{id:{type:"number"},environment:{type:"string"}}}}}}}}},responses:{200:{description:"roleWithVersionSchema",content:{"application/json":{schema:{type:"object",required:["version","roles"],additionalProperties:!1,properties:{version:{type:"number"},roles:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}}}},400:{description:"The request data does not match what we expect."}},parameters:[{name:"roleId",in:"path",required:!0,schema:{type:"string"}}],description:"updateRole",method:"put",path:"/api/admin/roles/{roleId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",permissions:[{id:0,environment:"string"}]},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"update Role",description:{type:"text/plain"},url:{path:["api","admin","roles",":roleId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"roleId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/update-role",id:"reference/api/unleash/update-role",title:"updateRole",description:"updateRole",source:"@site/docs/reference/api/unleash/update-role.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-role",permalink:"/reference/api/unleash/update-role",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-role",title:"updateRole",description:"updateRole",sidebar_label:"updateRole",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"updateRole",requestBody:{description:"createRoleWithPermissionsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id"],properties:{id:{type:"number"},environment:{type:"string"}}}}}}}}},responses:{200:{description:"roleWithVersionSchema",content:{"application/json":{schema:{type:"object",required:["version","roles"],additionalProperties:!1,properties:{version:{type:"number"},roles:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}}}},400:{description:"The request data does not match what we expect."}},parameters:[{name:"roleId",in:"path",required:!0,schema:{type:"string"}}],description:"updateRole",method:"put",path:"/api/admin/roles/{roleId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",permissions:[{id:0,environment:"string"}]},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"update Role",description:{type:"text/plain"},url:{path:["api","admin","roles",":roleId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"roleId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getRoleById",permalink:"/reference/api/unleash/get-role-by-id"},next:{title:"deleteRole",permalink:"/reference/api/unleash/delete-role"}},h={},g=[{value:"updateRole",id:"updaterole",level:2}],k={toc:g};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"updaterole"},"updateRole"),(0,r.kt)("p",null,"updateRole"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"roleId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(n.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"createRoleWithPermissionsSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"permissions"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"roleWithVersionSchema")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"version",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"roles"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "version": 0,\n  "roles": {\n    "id": 0,\n    "type": "string",\n    "name": "string",\n    "description": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The request data does not match what we expect.")),(0,r.kt)("div",null)))))}b.isMDXComponent=!0}}]);