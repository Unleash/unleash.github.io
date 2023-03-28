"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4560],{62418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>h,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),l=a(21439),o=(a(9531),a(15761)),p=a(73418),m=a(92414),d=a(11666);const c={id:"get-roles",title:"getRoles",description:"getRoles",sidebar_label:"getRoles",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getRoles",responses:{200:{description:"rolesWithVersionSchema",content:{"application/json":{schema:{type:"object",required:["version","roles"],additionalProperties:!1,properties:{version:{type:"number"},roles:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},title:"roleSchema"}}},title:"rolesWithVersionSchema"}}}}},description:"getRoles",method:"get",path:"/api/admin/roles",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"get Roles",description:{type:"text/plain"},url:{path:["api","admin","roles"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,h={unversionedId:"reference/api/unleash/get-roles",id:"reference/api/unleash/get-roles",title:"getRoles",description:"getRoles",source:"@site/docs/reference/api/unleash/get-roles.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-roles",permalink:"/reference/api/unleash/get-roles",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-roles",title:"getRoles",description:"getRoles",sidebar_label:"getRoles",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"getRoles",responses:{200:{description:"rolesWithVersionSchema",content:{"application/json":{schema:{type:"object",required:["version","roles"],additionalProperties:!1,properties:{version:{type:"number"},roles:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}},title:"roleSchema"}}},title:"rolesWithVersionSchema"}}}}},description:"getRoles",method:"get",path:"/api/admin/roles",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"get Roles",description:{type:"text/plain"},url:{path:["api","admin","roles"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"deleteGroup",permalink:"/reference/api/unleash/delete-group"},next:{title:"createRole",permalink:"/reference/api/unleash/create-role"}},y={},g=[],b={toc:g};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"getRoles"),(0,s.kt)(n.Z,{method:"get",path:"/api/admin/roles",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"getRoles"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"rolesWithVersionSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"version",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"roles"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "version": 0,\n  "roles": [\n    {\n      "id": 0,\n      "type": "string",\n      "name": "string",\n      "description": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);