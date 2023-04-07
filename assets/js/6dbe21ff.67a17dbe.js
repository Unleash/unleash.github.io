"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7130],{49722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var s=a(87462),i=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),l=a(21439),o=a(9531),p=(a(15761),a(73418)),d=(a(92414),a(11666));const u={id:"stale-features",title:"Stales a list of features",description:"This endpoint stales the specified features.",sidebar_label:"Stales a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"staleFeatures",description:"This endpoint stales the specified features.",requestBody:{description:"batchStaleSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features","stale"],properties:{features:{type:"array",items:{type:"string"}},stale:{type:"boolean"}},title:"batchStaleSchema"}}}},responses:{202:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/stale",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"],stale:!0},info:{title:"Unleash API",version:"4.22.1"},postman:{name:"Stales a list of features",description:{content:"This endpoint stales the specified features.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","stale"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,m={unversionedId:"reference/api/unleash/stale-features",id:"reference/api/unleash/stale-features",title:"Stales a list of features",description:"This endpoint stales the specified features.",source:"@site/docs/reference/api/unleash/stale-features.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/stale-features",permalink:"/reference/api/unleash/stale-features",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"stale-features",title:"Stales a list of features",description:"This endpoint stales the specified features.",sidebar_label:"Stales a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"staleFeatures",description:"This endpoint stales the specified features.",requestBody:{description:"batchStaleSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features","stale"],properties:{features:{type:"array",items:{type:"string"}},stale:{type:"boolean"}},title:"batchStaleSchema"}}}},responses:{202:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/stale",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"],stale:!0},info:{title:"Unleash API",version:"4.22.1"},postman:{name:"Stales a list of features",description:{content:"This endpoint stales the specified features.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","stale"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Archive a feature.",permalink:"/reference/api/unleash/archive-feature"},next:{title:"Retrieve variants for a feature (deprecated) ",permalink:"/reference/api/unleash/get-feature-variants"}},h={},f=[],y={toc:f};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Stales a list of features"),(0,i.kt)(n.Z,{method:"post",path:"/api/admin/projects/{projectId}/stale",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"This endpoint stales the specified features."),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"batchStaleSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"features",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"stale",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null))))))}b.isMDXComponent=!0}}]);