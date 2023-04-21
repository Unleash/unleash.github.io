"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7227],{37547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var s=a(87462),i=(a(67294),a(3905)),n=a(80334),r=(a(11032),a(46062)),l=a(21439),p=(a(9531),a(15761)),m=a(73418),o=a(92414),c=a(11666);const d={id:"get-pats",title:"getPats",description:"getPats",sidebar_label:"getPats",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Personal access tokens"],operationId:"getPats",responses:{200:{description:"patsSchema",content:{"application/json":{schema:{type:"object",properties:{pats:{type:"array",items:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}},title:"patSchema"}}},title:"patsSchema"}}}}},description:"getPats",method:"get",path:"/api/admin/user/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.5"},postman:{name:"get Pats",description:{type:"text/plain"},url:{path:["api","admin","user","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,h={unversionedId:"reference/api/unleash/get-pats",id:"reference/api/unleash/get-pats",title:"getPats",description:"getPats",source:"@site/docs/reference/api/unleash/get-pats.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-pats",permalink:"/reference/api/unleash/get-pats",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-pats",title:"getPats",description:"getPats",sidebar_label:"getPats",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Personal access tokens"],operationId:"getPats",responses:{200:{description:"patsSchema",content:{"application/json":{schema:{type:"object",properties:{pats:{type:"array",items:{type:"object",properties:{id:{type:"number"},secret:{type:"string"},expiresAt:{type:"string",format:"date-time",nullable:!0},createdAt:{type:"string",format:"date-time",nullable:!0},seenAt:{type:"string",format:"date-time",nullable:!0}},title:"patSchema"}}},title:"patsSchema"}}}}},description:"getPats",method:"get",path:"/api/admin/user/tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.5"},postman:{name:"get Pats",description:{type:"text/plain"},url:{path:["api","admin","user","tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Personal access tokens",permalink:"/reference/api/unleash/personal-access-tokens"},next:{title:"createPat",permalink:"/reference/api/unleash/create-pat"}},y={},g=[],k={toc:g};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"getPats"),(0,i.kt)(r.Z,{method:"get",path:"/api/admin/user/tokens",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"getPats"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"patsSchema")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"pats"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"secret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "pats": [\n    {\n      "id": 0,\n      "secret": "string",\n      "expiresAt": "2023-04-21T00:13:12.448Z",\n      "createdAt": "2023-04-21T00:13:12.448Z",\n      "seenAt": "2023-04-21T00:13:12.448Z"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);