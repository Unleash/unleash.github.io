"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1064],{60775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>f,frontMatter:()=>u,metadata:()=>k,toc:()=>v});var n=a(87462),i=(a(67294),a(3905)),s=a(80334),o=(a(11032),a(46062)),r=a(57138),c=a(21439),l=a(9531),p=a(15761),m=a(73418),d=a(92414),h=a(11666);const u={id:"get-service-account-tokens",title:"getServiceAccountTokens",description:"getServiceAccountTokens",sidebar_label:"getServiceAccountTokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Service Accounts"],operationId:"getServiceAccountTokens",responses:{200:{description:"patsSchema",content:{"application/json":{schema:{type:"object",description:"Contains a collection of [Personal Access Tokens](https://docs.getunleash.io/how-to/how-to-create-personal-access-tokens).",properties:{pats:{type:"array",items:{type:"object",description:"An overview of a [Personal Access Token](https://docs.getunleash.io/how-to/how-to-create-personal-access-tokens).",properties:{id:{type:"integer",description:"The unique identification number for this Personal Access Token. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:1,minimum:1},secret:{type:"string",description:"The token used for authentication. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:"user:xyzrandomstring"},expiresAt:{type:"string",format:"date-time",description:"The token's expiration date.",example:"2023-04-19T08:15:14.000Z"},createdAt:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},seenAt:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. `null` if it has not been used yet. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"}},title:"patSchema"},description:"A collection of Personal Access Tokens"}},title:"patsSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"getServiceAccountTokens",method:"get",path:"/api/admin/service-account/{id}/token",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.49"},postman:{name:"get Service Account Tokens",description:{type:"text/plain"},url:{path:["api","admin","service-account",":id","token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,k={unversionedId:"reference/api/unleash/get-service-account-tokens",id:"reference/api/unleash/get-service-account-tokens",title:"getServiceAccountTokens",description:"getServiceAccountTokens",source:"@site/docs/reference/api/unleash/get-service-account-tokens.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-service-account-tokens",permalink:"/reference/api/unleash/get-service-account-tokens",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-service-account-tokens",title:"getServiceAccountTokens",description:"getServiceAccountTokens",sidebar_label:"getServiceAccountTokens",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Service Accounts"],operationId:"getServiceAccountTokens",responses:{200:{description:"patsSchema",content:{"application/json":{schema:{type:"object",description:"Contains a collection of [Personal Access Tokens](https://docs.getunleash.io/how-to/how-to-create-personal-access-tokens).",properties:{pats:{type:"array",items:{type:"object",description:"An overview of a [Personal Access Token](https://docs.getunleash.io/how-to/how-to-create-personal-access-tokens).",properties:{id:{type:"integer",description:"The unique identification number for this Personal Access Token. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:1,minimum:1},secret:{type:"string",description:"The token used for authentication. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:"user:xyzrandomstring"},expiresAt:{type:"string",format:"date-time",description:"The token's expiration date.",example:"2023-04-19T08:15:14.000Z"},createdAt:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},seenAt:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. `null` if it has not been used yet. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"}},title:"patSchema"},description:"A collection of Personal Access Tokens"}},title:"patsSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"getServiceAccountTokens",method:"get",path:"/api/admin/service-account/{id}/token",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.49"},postman:{name:"get Service Account Tokens",description:{type:"text/plain"},url:{path:["api","admin","service-account",":id","token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"deleteServiceAccount",permalink:"/reference/api/unleash/delete-service-account"},next:{title:"createServiceAccountToken",permalink:"/reference/api/unleash/create-service-account-token"}},g={},v=[{value:"Request",id:"request",level:2}],T={toc:v};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"getServiceAccountTokens"),(0,i.kt)(o.Z,{method:"get",path:"/api/admin/service-account/{id}/token",mdxType:"MethodEndpoint"}),(0,i.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"getServiceAccountTokens"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"patsSchema")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"pats"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"A collection of Personal Access Tokens")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",description:"The unique identification number for this Personal Access Token. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:1,minimum:1},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"secret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The token used for authentication. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:"user:xyzrandomstring"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The token's expiration date.",example:"2023-04-19T08:15:14.000Z"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. `null` if it has not been used yet. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "pats": [\n    {\n      "id": 1,\n      "secret": "user:xyzrandomstring",\n      "expiresAt": "2023-04-19T08:15:14.000Z",\n      "createdAt": "2023-04-19T08:15:14.000Z",\n      "seenAt": "2023-04-19T08:15:14.000Z"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);