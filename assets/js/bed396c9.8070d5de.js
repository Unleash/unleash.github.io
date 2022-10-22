"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[574],{39793:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>y});var i=t(87462),n=(t(67294),t(3905)),s=t(70439),l=t(89402),r=(t(10725),t(65860)),o=t(5479),d=t(83559),p=(t(48567),t(72905));const m={id:"validate-token",title:"validateToken",description:"validateToken",sidebar_label:"validateToken",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"validateToken",responses:{200:{description:"tokenUserSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id","name","email","token","createdBy","role"],properties:{id:{type:"number"},name:{type:"string"},email:{type:"string"},token:{type:"string"},createdBy:{type:"string",nullable:!0},role:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}}}}},description:"validateToken",method:"get",path:"/auth/reset/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"validate Token",description:{type:"text/plain"},url:{path:["auth","reset","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},c=void 0,u={unversionedId:"reference/api/unleash/validate-token",id:"reference/api/unleash/validate-token",title:"validateToken",description:"validateToken",source:"@site/docs/reference/api/unleash/validate-token.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/validate-token",permalink:"/reference/api/unleash/validate-token",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/validate-token.api.mdx",tags:[],version:"current",frontMatter:{id:"validate-token",title:"validateToken",description:"validateToken",sidebar_label:"validateToken",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"validateToken",responses:{200:{description:"tokenUserSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id","name","email","token","createdBy","role"],properties:{id:{type:"number"},name:{type:"string"},email:{type:"string"},token:{type:"string"},createdBy:{type:"string",nullable:!0},role:{type:"object",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"number"},type:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}}}}},description:"validateToken",method:"get",path:"/auth/reset/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.16.1"},postman:{name:"validate Token",description:{type:"text/plain"},url:{path:["auth","reset","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"login",permalink:"/reference/api/unleash/login"},next:{title:"changePassword",permalink:"/reference/api/unleash/change-password"}},h={},y=[{value:"validateToken",id:"validatetoken",level:2}],v={toc:y};function k(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"validatetoken"},"validateToken"),(0,n.kt)("p",null,"validateToken"),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"tokenUserSchema")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"email",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"token",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"createdBy",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"role"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:'{\n  "id": 0,\n  "name": "string",\n  "email": "string",\n  "token": "string",\n  "createdBy": "string",\n  "role": {\n    "id": 0,\n    "type": "string",\n    "name": "string",\n    "description": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);