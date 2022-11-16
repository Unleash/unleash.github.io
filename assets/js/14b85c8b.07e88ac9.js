"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7227],{37547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var s=a(87462),i=(a(67294),a(3905)),n=a(60961),r=a(48165),p=(a(23380),a(58475)),l=a(5428),o=a(80487),m=(a(54881),a(11666));const d={id:"get-pats",title:"getPats",description:"getPats",sidebar_label:"getPats",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"getPats",responses:{200:{description:"patsSchema",content:{"application/json":{schema:{type:"object",properties:{pats:{type:"array",items:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}}}}}},description:"getPats",method:"get",path:"/api/admin/user/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Pats",description:{type:"text/plain"},url:{path:["api","admin","user","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},c=void 0,u={unversionedId:"reference/api/unleash/get-pats",id:"reference/api/unleash/get-pats",title:"getPats",description:"getPats",source:"@site/docs/reference/api/unleash/get-pats.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-pats",permalink:"/reference/api/unleash/get-pats",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-pats.api.mdx",tags:[],version:"current",frontMatter:{id:"get-pats",title:"getPats",description:"getPats",sidebar_label:"getPats",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"getPats",responses:{200:{description:"patsSchema",content:{"application/json":{schema:{type:"object",properties:{pats:{type:"array",items:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}}}}}}}}}},description:"getPats",method:"get",path:"/api/admin/user/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"get Pats",description:{type:"text/plain"},url:{path:["api","admin","user","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"API tokens",permalink:"/reference/api/unleash/api-tokens"},next:{title:"createPat",permalink:"/reference/api/unleash/create-pat"}},h={},y=[{value:"getPats",id:"getpats",level:2}],g={toc:y};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getpats"},"getPats"),(0,i.kt)("p",null,"getPats"),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"patsSchema")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"pats"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"secret",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "pats": [\n    {\n      "id": 0,\n      "secret": "string",\n      "expiresAt": "2022-11-16",\n      "createdAt": "2022-11-16",\n      "seenAt": "2022-11-16"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);