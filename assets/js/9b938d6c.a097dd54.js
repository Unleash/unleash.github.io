"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1752],{15027:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),r=(a(11032),a(46062)),o=a(21439),l=(a(9531),a(15761),a(73418)),p=(a(92414),a(11666));const d={id:"validate-role",title:"validateRole",description:"validateRole",sidebar_label:"validateRole",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"validateRole",requestBody:{description:"createRoleWithPermissionsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id"],properties:{id:{type:"number"},environment:{type:"string"}}}}},title:"createRoleWithPermissionsSchema"}}}},responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect."}},description:"validateRole",method:"post",path:"/api/admin/roles/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",permissions:[{id:0,environment:"string"}]},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"validate Role",description:{type:"text/plain"},url:{path:["api","admin","roles","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},m=void 0,c={unversionedId:"reference/api/unleash/validate-role",id:"reference/api/unleash/validate-role",title:"validateRole",description:"validateRole",source:"@site/docs/reference/api/unleash/validate-role.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/validate-role",permalink:"/reference/api/unleash/validate-role",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"validate-role",title:"validateRole",description:"validateRole",sidebar_label:"validateRole",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"validateRole",requestBody:{description:"createRoleWithPermissionsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},permissions:{type:"array",items:{type:"object",required:["id"],properties:{id:{type:"number"},environment:{type:"string"}}}}},title:"createRoleWithPermissionsSchema"}}}},responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect."}},description:"validateRole",method:"post",path:"/api/admin/roles/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",permissions:[{id:0,environment:"string"}]},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"validate Role",description:{type:"text/plain"},url:{path:["api","admin","roles","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"deleteRole",permalink:"/reference/api/unleash/delete-role"},next:{title:"getMe",permalink:"/reference/api/unleash/get-me"}},u={},h=[],y={toc:h};function v(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"validateRole"),(0,s.kt)(r.Z,{method:"post",path:"/api/admin/roles/validate",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"validateRole"),(0,s.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"createRoleWithPermissionsSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"permissions"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null)),(0,s.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null))))))}v.isMDXComponent=!0}}]);