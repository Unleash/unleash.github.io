"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1064],{60775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>b,frontMatter:()=>u,metadata:()=>h,toc:()=>v});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),r=(a(11032),a(46062)),c=a(21439),o=a(9531),l=a(15761),p=a(73418),m=a(92414),d=a(11666);const u={id:"get-service-account-tokens",title:"getServiceAccountTokens",description:"getServiceAccountTokens",sidebar_label:"getServiceAccountTokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Service Accounts"],operationId:"getServiceAccountTokens",responses:{200:{description:"patsSchema",content:{"application/json":{schema:{type:"object",properties:{pats:{type:"array",items:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}},title:"patSchema"}}},title:"patsSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"getServiceAccountTokens",method:"get",path:"/api/admin/service-account/{id}/token",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"get Service Account Tokens",description:{type:"text/plain"},url:{path:["api","admin","service-account",":id","token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,h={unversionedId:"reference/api/unleash/get-service-account-tokens",id:"reference/api/unleash/get-service-account-tokens",title:"getServiceAccountTokens",description:"getServiceAccountTokens",source:"@site/docs/reference/api/unleash/get-service-account-tokens.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-service-account-tokens",permalink:"/reference/api/unleash/get-service-account-tokens",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-service-account-tokens",title:"getServiceAccountTokens",description:"getServiceAccountTokens",sidebar_label:"getServiceAccountTokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Service Accounts"],operationId:"getServiceAccountTokens",responses:{200:{description:"patsSchema",content:{"application/json":{schema:{type:"object",properties:{pats:{type:"array",items:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}},title:"patSchema"}}},title:"patsSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"getServiceAccountTokens",method:"get",path:"/api/admin/service-account/{id}/token",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"get Service Account Tokens",description:{type:"text/plain"},url:{path:["api","admin","service-account",":id","token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"deleteServiceAccount",permalink:"/reference/api/unleash/delete-service-account"},next:{title:"createServiceAccountToken",permalink:"/reference/api/unleash/create-service-account-token"}},k={},v=[],g={toc:v};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"getServiceAccountTokens"),(0,n.kt)(r.Z,{method:"get",path:"/api/admin/service-account/{id}/token",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"getServiceAccountTokens"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"patsSchema")),(0,n.kt)("div",null,(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"pats"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"secret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "pats": [\n    {\n      "id": 0,\n      "secret": "string",\n      "expiresAt": "2023-03-28T09:19:25.675Z",\n      "createdAt": "2023-03-28T09:19:25.675Z",\n      "seenAt": "2023-03-28T09:19:25.675Z"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);