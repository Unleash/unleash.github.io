"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3594],{463:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),o=a(21439),p=a(9531),l=(a(15761),a(73418)),c=(a(92414),a(11666));const d={id:"archive-features",title:"Archives a list of features",description:"This endpoint archives the specified features.",sidebar_label:"Archives a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"archiveFeatures",description:"This endpoint archives the specified features.",requestBody:{description:"batchFeaturesSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features"],properties:{features:{type:"array",items:{type:"string"}}},title:"batchFeaturesSchema"}}}},responses:{202:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/archive",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"]},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"Archives a list of features",description:{content:"This endpoint archives the specified features.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","archive"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,h={unversionedId:"reference/api/unleash/archive-features",id:"reference/api/unleash/archive-features",title:"Archives a list of features",description:"This endpoint archives the specified features.",source:"@site/docs/reference/api/unleash/archive-features.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/archive-features",permalink:"/reference/api/unleash/archive-features",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"archive-features",title:"Archives a list of features",description:"This endpoint archives the specified features.",sidebar_label:"Archives a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"archiveFeatures",description:"This endpoint archives the specified features.",requestBody:{description:"batchFeaturesSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features"],properties:{features:{type:"array",items:{type:"string"}}},title:"batchFeaturesSchema"}}}},responses:{202:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/archive",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"]},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"Archives a list of features",description:{content:"This endpoint archives the specified features.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","archive"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"overwriteFeatureVariantsOnEnvironments",permalink:"/reference/api/unleash/overwrite-feature-variants-on-environments"},next:{title:"validateConstraint",permalink:"/reference/api/unleash/validate-constraint"}},m={},f=[],y={toc:f};function v(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Archives a list of features"),(0,s.kt)(n.Z,{method:"post",path:"/api/admin/projects/{projectId}/archive",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"This endpoint archives the specified features."),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"batchFeaturesSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"features",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null))))))}v.isMDXComponent=!0}}]);