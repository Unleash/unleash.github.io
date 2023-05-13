"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7858],{17204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>c,default:()=>k,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var s=a(87462),i=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),p=a(57138),o=a(21439),l=a(9531),d=(a(15761),a(73418)),u=(a(92414),a(11666));const m={id:"revive-features",title:"Revives a list of features",description:"This endpoint revives the specified features.",sidebar_label:"Revives a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Archive"],operationId:"reviveFeatures",description:"This endpoint revives the specified features.",requestBody:{description:"batchFeaturesSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features"],properties:{features:{type:"array",items:{type:"string"}}},title:"batchFeaturesSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/revive",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"]},info:{title:"Unleash API",version:"5.1.0-beta.49"},postman:{name:"Revives a list of features",description:{content:"This endpoint revives the specified features.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","revive"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,h={unversionedId:"reference/api/unleash/revive-features",id:"reference/api/unleash/revive-features",title:"Revives a list of features",description:"This endpoint revives the specified features.",source:"@site/docs/reference/api/unleash/revive-features.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/revive-features",permalink:"/reference/api/unleash/revive-features",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"revive-features",title:"Revives a list of features",description:"This endpoint revives the specified features.",sidebar_label:"Revives a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Archive"],operationId:"reviveFeatures",description:"This endpoint revives the specified features.",requestBody:{description:"batchFeaturesSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features"],properties:{features:{type:"array",items:{type:"string"}}},title:"batchFeaturesSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/revive",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"]},info:{title:"Unleash API",version:"5.1.0-beta.49"},postman:{name:"Revives a list of features",description:{content:"This endpoint revives the specified features.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","revive"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Deletes a list of features",permalink:"/reference/api/unleash/delete-features"},next:{title:"Auth",permalink:"/reference/api/unleash/auth"}},v={},f=[{value:"Request",id:"request",level:2}],y={toc:f};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Revives a list of features"),(0,i.kt)(n.Z,{method:"post",path:"/api/admin/projects/{projectId}/revive",mdxType:"MethodEndpoint"}),(0,i.kt)(p.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"This endpoint revives the specified features."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(u.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"batchFeaturesSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"features",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null))))))}k.isMDXComponent=!0}}]);