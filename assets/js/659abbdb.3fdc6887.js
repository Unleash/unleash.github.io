"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7291],{24589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>f,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),o=a(21439),p=a(9531),l=a(15761),m=a(73418),d=a(92414),c=a(11666);const u={id:"update-role",title:"updateRole",description:"updateRole",sidebar_label:"updateRole",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"updateRole",requestBody:{description:"createRoleWithPermissionsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id"],properties:{id:{type:"number"},environment:{type:"string"}}}}},title:"createRoleWithPermissionsSchema"}}}},responses:{200:{description:"roleWithVersionSchema",content:{"application/json":{schema:{type:"object",required:["version","roles"],additionalProperties:!1,properties:{version:{type:"number"},roles:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},title:"roleSchema"}},title:"roleWithVersionSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}}},parameters:[{name:"roleId",in:"path",required:!0,schema:{type:"string"}}],description:"updateRole",method:"put",path:"/api/admin/roles/{roleId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",permissions:[{id:0,environment:"string"}]},info:{title:"Unleash API",version:"5.1.0-beta.41"},postman:{name:"update Role",description:{type:"text/plain"},url:{path:["api","admin","roles",":roleId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"roleId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,h={unversionedId:"reference/api/unleash/update-role",id:"reference/api/unleash/update-role",title:"updateRole",description:"updateRole",source:"@site/docs/reference/api/unleash/update-role.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-role",permalink:"/reference/api/unleash/update-role",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-role",title:"updateRole",description:"updateRole",sidebar_label:"updateRole",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"updateRole",requestBody:{description:"createRoleWithPermissionsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id"],properties:{id:{type:"number"},environment:{type:"string"}}}}},title:"createRoleWithPermissionsSchema"}}}},responses:{200:{description:"roleWithVersionSchema",content:{"application/json":{schema:{type:"object",required:["version","roles"],additionalProperties:!1,properties:{version:{type:"number"},roles:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},title:"roleSchema"}},title:"roleWithVersionSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}}},parameters:[{name:"roleId",in:"path",required:!0,schema:{type:"string"}}],description:"updateRole",method:"put",path:"/api/admin/roles/{roleId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",permissions:[{id:0,environment:"string"}]},info:{title:"Unleash API",version:"5.1.0-beta.41"},postman:{name:"update Role",description:{type:"text/plain"},url:{path:["api","admin","roles",":roleId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"roleId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getRoleById",permalink:"/reference/api/unleash/get-role-by-id"},next:{title:"deleteRole",permalink:"/reference/api/unleash/delete-role"}},b={},g=[],k={toc:g};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"updateRole"),(0,s.kt)(n.Z,{method:"put",path:"/api/admin/roles/{roleId}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"updateRole"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"roleId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"createRoleWithPermissionsSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"permissions"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"roleWithVersionSchema")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"version",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"roles"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "version": 0,\n  "roles": {\n    "id": 0,\n    "type": "string",\n    "name": "string",\n    "description": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);