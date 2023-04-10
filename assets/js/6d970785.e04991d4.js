"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6349],{78169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>j,frontMatter:()=>u,metadata:()=>h,toc:()=>k});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),r=(a(11032),a(46062)),p=a(21439),o=a(9531),l=a(15761),m=a(73418),c=a(92414),d=a(11666);const u={id:"get-project-api-tokens",title:"getProjectApiTokens",description:"getProjectApiTokens",sidebar_label:"getProjectApiTokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjectApiTokens",responses:{200:{description:"apiTokensSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",items:{type:"object",additionalProperties:!1,required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",enum:["client","admin","frontend"]},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0},alias:{type:"string",nullable:!0}},title:"apiTokenSchema"}}},title:"apiTokensSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"getProjectApiTokens",method:"get",path:"/api/admin/projects/{projectId}/api-tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.1"},postman:{name:"get Project Api Tokens",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","api-tokens"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,h={unversionedId:"reference/api/unleash/get-project-api-tokens",id:"reference/api/unleash/get-project-api-tokens",title:"getProjectApiTokens",description:"getProjectApiTokens",source:"@site/docs/reference/api/unleash/get-project-api-tokens.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-project-api-tokens",permalink:"/reference/api/unleash/get-project-api-tokens",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-api-tokens",title:"getProjectApiTokens",description:"getProjectApiTokens",sidebar_label:"getProjectApiTokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjectApiTokens",responses:{200:{description:"apiTokensSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",items:{type:"object",additionalProperties:!1,required:["username","type"],properties:{secret:{type:"string"},username:{type:"string"},type:{type:"string",enum:["client","admin","frontend"]},environment:{type:"string"},project:{type:"string"},projects:{type:"array",items:{type:"string"}},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0},alias:{type:"string",nullable:!0}},title:"apiTokenSchema"}}},title:"apiTokensSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"getProjectApiTokens",method:"get",path:"/api/admin/projects/{projectId}/api-tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.1"},postman:{name:"get Project Api Tokens",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","api-tokens"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getProjectHealthReport",permalink:"/reference/api/unleash/get-project-health-report"},next:{title:"createProjectApiToken",permalink:"/reference/api/unleash/create-project-api-token"}},g={},k=[],f={toc:k};function j(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"getProjectApiTokens"),(0,s.kt)(r.Z,{method:"get",path:"/api/admin/projects/{projectId}/api-tokens",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"getProjectApiTokens"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"apiTokensSchema")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"tokens"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"secret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`client`, `admin`, `frontend`]",schema:{type:"string",enum:["client","admin","frontend"]},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"alias",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "tokens": [\n    {\n      "secret": "string",\n      "username": "string",\n      "type": "client",\n      "environment": "string",\n      "project": "string",\n      "projects": [\n        "string"\n      ],\n      "expiresAt": "2023-04-10T00:14:03.555Z",\n      "createdAt": "2023-04-10T00:14:03.555Z",\n      "seenAt": "2023-04-10T00:14:03.555Z",\n      "alias": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}j.isMDXComponent=!0}}]);