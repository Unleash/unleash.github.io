"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1896],{94878:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),r=a(60961),n=a(48165),l=(a(90115),a(58475)),p=a(5428),o=a(80487),m=(a(54881),a(11666));const c={id:"create-pat",title:"createPat",description:"createPat",sidebar_label:"createPat",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"createPat",requestBody:{description:"patSchema",required:!0,content:{"application/json":{schema:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{200:{description:"patSchema",content:{"application/json":{schema:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}}},description:"createPat",method:"post",path:"/api/admin/user/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{id:0,secret:"string",expiresAt:"2022-12-14",createdAt:"2022-12-14",seenAt:"2022-12-14"},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"create Pat",description:{type:"text/plain"},url:{path:["api","admin","user","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},d=void 0,u={unversionedId:"reference/api/unleash/create-pat",id:"reference/api/unleash/create-pat",title:"createPat",description:"createPat",source:"@site/docs/reference/api/unleash/create-pat.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-pat",permalink:"/reference/api/unleash/create-pat",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/create-pat.api.mdx",tags:[],version:"current",frontMatter:{id:"create-pat",title:"createPat",description:"createPat",sidebar_label:"createPat",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"createPat",requestBody:{description:"patSchema",required:!0,content:{"application/json":{schema:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}},responses:{200:{description:"patSchema",content:{"application/json":{schema:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}}},description:"createPat",method:"post",path:"/api/admin/user/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{id:0,secret:"string",expiresAt:"2022-12-14",createdAt:"2022-12-14",seenAt:"2022-12-14"},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"create Pat",description:{type:"text/plain"},url:{path:["api","admin","user","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getPats",permalink:"/reference/api/unleash/get-pats"},next:{title:"deletePat",permalink:"/reference/api/unleash/delete-pat"}},h={},y=[{value:"createPat",id:"createpat",level:2}],b={toc:y};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"createpat"},"createPat"),(0,s.kt)("p",null,"createPat"),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"patSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"secret",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"seenAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"patSchema")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(o.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"secret",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"seenAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": 0,\n  "secret": "string",\n  "expiresAt": "2022-12-14",\n  "createdAt": "2022-12-14",\n  "seenAt": "2022-12-14"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);