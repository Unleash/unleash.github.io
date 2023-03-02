"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5799],{78421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>m,metadata:()=>d,toc:()=>y});var l=a(87462),i=(a(67294),a(3905)),n=a(60961),s=a(48165),h=(a(90115),a(58475)),r=a(5428),p=a(80487),o=(a(54881),a(11666));const m={id:"get-health",title:"getHealth",description:"getHealth",sidebar_label:"getHealth",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Operational"],operationId:"getHealth",responses:{200:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["health"],properties:{health:{type:"string",enum:["GOOD","BAD"]}}}}}},500:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["health"],properties:{health:{type:"string",enum:["GOOD","BAD"]}}}}}}},description:"getHealth",method:"get",path:"/health",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get Health",description:{type:"text/plain"},url:{path:["health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,d={unversionedId:"reference/api/unleash/get-health",id:"reference/api/unleash/get-health",title:"getHealth",description:"getHealth",source:"@site/docs/reference/api/unleash/get-health.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-health",permalink:"/reference/api/unleash/get-health",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-health",title:"getHealth",description:"getHealth",sidebar_label:"getHealth",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Operational"],operationId:"getHealth",responses:{200:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["health"],properties:{health:{type:"string",enum:["GOOD","BAD"]}}}}}},500:{description:"healthCheckSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["health"],properties:{health:{type:"string",enum:["GOOD","BAD"]}}}}}}},description:"getHealth",method:"get",path:"/health",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"get Health",description:{type:"text/plain"},url:{path:["health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Operational",permalink:"/reference/api/unleash/operational"},next:{title:"Personal access tokens",permalink:"/reference/api/unleash/personal-access-tokens"}},u={},y=[{value:"getHealth",id:"gethealth",level:2}],g={toc:y};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gethealth"},"getHealth"),(0,i.kt)("p",null,"getHealth"),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"healthCheckSchema")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"health",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`GOOD`, `BAD`]",schema:{type:"string",enum:["GOOD","BAD"]},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(h.Z,{responseExample:'{\n  "health": "GOOD"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"healthCheckSchema")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"health",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`GOOD`, `BAD`]",schema:{type:"string",enum:["GOOD","BAD"]},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(h.Z,{responseExample:'{\n  "health": "GOOD"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);