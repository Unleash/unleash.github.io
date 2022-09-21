"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9980],{91517:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>c,metadata:()=>y,toc:()=>k});var n=a(87462),i=(a(67294),a(3905)),s=a(70439),o=a(89402),r=(a(10725),a(65860)),p=a(5479),l=a(83559),d=(a(48567),a(72905));const c={id:"get-valid-tokens",sidebar_label:"getValidTokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Edge"],operationId:"getValidTokens",requestBody:{description:"validateEdgeTokensSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",items:{anyOf:[{type:"object",additionalProperties:!1,required:["token","projects","type"],properties:{projects:{type:"array",items:{type:"string"}},type:{type:"string",enum:["client","admin","frontend"]},token:{type:"string"}}},{type:"string"}]}}}}}}},responses:{200:{description:"validateEdgeTokensSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",items:{anyOf:[{type:"object",additionalProperties:!1,required:["token","projects","type"],properties:{projects:{type:"array",items:{type:"string"}},type:{type:"string",enum:["client","admin","frontend"]},token:{type:"string"}}},{type:"string"}]}}}}}}}},description:"getValidTokens",method:"post",path:"/edge/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{tokens:[{projects:["string"],type:"client",token:"string"},"string"]},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"get Valid Tokens",description:{type:"text/plain"},url:{path:["edge","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/reference/api/unleash/unleash-api"},m=void 0,y={unversionedId:"reference/api/unleash/get-valid-tokens",id:"reference/api/unleash/get-valid-tokens",title:"get-valid-tokens",description:"getValidTokens",source:"@site/docs/reference/api/unleash/get-valid-tokens.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-valid-tokens",permalink:"/reference/api/unleash/get-valid-tokens",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-valid-tokens.api.mdx",tags:[],version:"current",frontMatter:{id:"get-valid-tokens",sidebar_label:"getValidTokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Edge"],operationId:"getValidTokens",requestBody:{description:"validateEdgeTokensSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",items:{anyOf:[{type:"object",additionalProperties:!1,required:["token","projects","type"],properties:{projects:{type:"array",items:{type:"string"}},type:{type:"string",enum:["client","admin","frontend"]},token:{type:"string"}}},{type:"string"}]}}}}}}},responses:{200:{description:"validateEdgeTokensSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",items:{anyOf:[{type:"object",additionalProperties:!1,required:["token","projects","type"],properties:{projects:{type:"array",items:{type:"string"}},type:{type:"string",enum:["client","admin","frontend"]},token:{type:"string"}}},{type:"string"}]}}}}}}}},description:"getValidTokens",method:"post",path:"/edge/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{tokens:[{projects:["string"],type:"client",token:"string"},"string"]},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"get Valid Tokens",description:{type:"text/plain"},url:{path:["edge","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Edge",permalink:"/reference/api/unleash/edge"},next:{title:"Environments",permalink:"/reference/api/unleash/environments"}},u={},k=[{value:"getValidTokens",id:"getvalidtokens",level:2}],g={toc:k};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getvalidtokens"},"getValidTokens"),(0,i.kt)("p",null,"getValidTokens"),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"validateEdgeTokensSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"tokens",required:!0,schemaDescription:void 0,schemaName:"object[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"validateEdgeTokensSchema")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"tokens",required:!1,schemaDescription:void 0,schemaName:"object[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "tokens": [\n    {\n      "projects": [\n        "string"\n      ],\n      "type": "client",\n      "token": "string"\n    },\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);