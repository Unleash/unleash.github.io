"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7130],{49722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>u,metadata:()=>c,toc:()=>h});var s=a(87462),i=(a(67294),a(3905)),r=a(60961),n=a(48165),l=a(90115),o=(a(58475),a(5428)),p=(a(80487),a(54881),a(11666));const u={id:"stale-features",title:"Stales a list of features",description:"This endpoint stales the specified features.",sidebar_label:"Stales a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"staleFeatures",description:"This endpoint stales the specified features.",requestBody:{description:"batchStaleSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features","stale"],properties:{features:{type:"array",items:{type:"string"}},stale:{type:"boolean"}}}}}},responses:{202:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/stale",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"],stale:!0},info:{title:"Unleash API",version:"4.22.0-beta.104"},postman:{name:"Stales a list of features",description:{content:"This endpoint stales the specified features.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","stale"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,c={unversionedId:"reference/api/unleash/stale-features",id:"reference/api/unleash/stale-features",title:"Stales a list of features",description:"This endpoint stales the specified features.",source:"@site/docs/reference/api/unleash/stale-features.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/stale-features",permalink:"/reference/api/unleash/stale-features",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"stale-features",title:"Stales a list of features",description:"This endpoint stales the specified features.",sidebar_label:"Stales a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"staleFeatures",description:"This endpoint stales the specified features.",requestBody:{description:"batchStaleSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features","stale"],properties:{features:{type:"array",items:{type:"string"}},stale:{type:"boolean"}}}}}},responses:{202:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/stale",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"],stale:!0},info:{title:"Unleash API",version:"4.22.0-beta.104"},postman:{name:"Stales a list of features",description:{content:"This endpoint stales the specified features.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","stale"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Archive a feature.",permalink:"/reference/api/unleash/archive-feature"},next:{title:"Retrieve variants for a feature (deprecated) ",permalink:"/reference/api/unleash/get-feature-variants"}},m={},h=[{value:"Stales a list of features",id:"stales-a-list-of-features",level:2}],f={toc:h};function y(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"stales-a-list-of-features"},"Stales a list of features"),(0,i.kt)("p",null,"This endpoint stales the specified features."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"batchStaleSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"features",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"stale",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null)))))}y.isMDXComponent=!0}}]);