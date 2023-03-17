"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1896],{94878:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var i=a(87462),r=(a(67294),a(3905)),s=a(60961),n=a(48165),l=(a(90115),a(58475)),p=a(5428),m=a(80487),o=(a(54881),a(11666));const c={id:"create-pat",title:"createPat",description:"createPat",sidebar_label:"createPat",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Personal access tokens"],operationId:"createPat",requestBody:{description:"patSchema",required:!0,content:{"application/json":{schema:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{200:{description:"patSchema",content:{"application/json":{schema:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}}},description:"createPat",method:"post",path:"/api/admin/user/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{id:0,secret:"string",expiresAt:"2023-03-17",createdAt:"2023-03-17",seenAt:"2023-03-17"},info:{title:"Unleash API",version:"4.22.0-beta.43"},postman:{name:"create Pat",description:{type:"text/plain"},url:{path:["api","admin","user","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,u={unversionedId:"reference/api/unleash/create-pat",id:"reference/api/unleash/create-pat",title:"createPat",description:"createPat",source:"@site/docs/reference/api/unleash/create-pat.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-pat",permalink:"/reference/api/unleash/create-pat",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-pat",title:"createPat",description:"createPat",sidebar_label:"createPat",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Personal access tokens"],operationId:"createPat",requestBody:{description:"patSchema",required:!0,content:{"application/json":{schema:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{200:{description:"patSchema",content:{"application/json":{schema:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}}},description:"createPat",method:"post",path:"/api/admin/user/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{id:0,secret:"string",expiresAt:"2023-03-17",createdAt:"2023-03-17",seenAt:"2023-03-17"},info:{title:"Unleash API",version:"4.22.0-beta.43"},postman:{name:"create Pat",description:{type:"text/plain"},url:{path:["api","admin","user","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getPats",permalink:"/reference/api/unleash/get-pats"},next:{title:"deletePat",permalink:"/reference/api/unleash/delete-pat"}},y={},h=[{value:"createPat",id:"createpat",level:2}],b={toc:h};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"createpat"},"createPat"),(0,r.kt)("p",null,"createPat"),(0,r.kt)(n.Z,{mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"patSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"secret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"patSchema")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"secret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "id": 0,\n  "secret": "string",\n  "expiresAt": "2023-03-17",\n  "createdAt": "2023-03-17",\n  "seenAt": "2023-03-17"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);