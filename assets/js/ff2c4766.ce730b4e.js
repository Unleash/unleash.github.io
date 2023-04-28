"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7858],{17204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var i=a(87462),s=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),o=a(21439),p=a(9531),l=(a(15761),a(73418)),d=(a(92414),a(11666));const u={id:"revive-features",title:"Revives a list of features",description:"This endpoint revives the specified features.",sidebar_label:"Revives a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Archive"],operationId:"reviveFeatures",description:"This endpoint revives the specified features.",requestBody:{description:"batchFeaturesSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features"],properties:{features:{type:"array",items:{type:"string"}}},title:"batchFeaturesSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/revive",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"]},info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"Revives a list of features",description:{content:"This endpoint revives the specified features.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","revive"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,m={unversionedId:"reference/api/unleash/revive-features",id:"reference/api/unleash/revive-features",title:"Revives a list of features",description:"This endpoint revives the specified features.",source:"@site/docs/reference/api/unleash/revive-features.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/revive-features",permalink:"/reference/api/unleash/revive-features",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"revive-features",title:"Revives a list of features",description:"This endpoint revives the specified features.",sidebar_label:"Revives a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Archive"],operationId:"reviveFeatures",description:"This endpoint revives the specified features.",requestBody:{description:"batchFeaturesSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features"],properties:{features:{type:"array",items:{type:"string"}}},title:"batchFeaturesSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/revive",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"]},info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"Revives a list of features",description:{content:"This endpoint revives the specified features.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","revive"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Deletes a list of features",permalink:"/reference/api/unleash/delete-features"},next:{title:"Auth",permalink:"/reference/api/unleash/auth"}},h={},v=[],f={toc:v};function y(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Revives a list of features"),(0,s.kt)(n.Z,{method:"post",path:"/api/admin/projects/{projectId}/revive",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"This endpoint revives the specified features."),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"batchFeaturesSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"features",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null))))))}y.isMDXComponent=!0}}]);