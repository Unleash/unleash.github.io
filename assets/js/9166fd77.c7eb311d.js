"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8110],{33523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>v,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var s=a(87462),i=(a(67294),a(3905)),r=a(80334),n=(a(11032),a(46062)),o=a(21439),p=a(9531),l=(a(15761),a(73418)),d=(a(92414),a(11666));const u={id:"delete-features",title:"Deletes a list of features",description:"This endpoint deletes the specified features, that are in archive.",sidebar_label:"Deletes a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Archive"],operationId:"deleteFeatures",description:"This endpoint deletes the specified features, that are in archive.",requestBody:{description:"batchFeaturesSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features"],properties:{features:{type:"array",items:{type:"string"}}},title:"batchFeaturesSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/delete",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"]},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"Deletes a list of features",description:{content:"This endpoint deletes the specified features, that are in archive.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","delete"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,h={unversionedId:"reference/api/unleash/delete-features",id:"reference/api/unleash/delete-features",title:"Deletes a list of features",description:"This endpoint deletes the specified features, that are in archive.",source:"@site/docs/reference/api/unleash/delete-features.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/delete-features",permalink:"/reference/api/unleash/delete-features",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-features",title:"Deletes a list of features",description:"This endpoint deletes the specified features, that are in archive.",sidebar_label:"Deletes a list of features",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Archive"],operationId:"deleteFeatures",description:"This endpoint deletes the specified features, that are in archive.",requestBody:{description:"batchFeaturesSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features"],properties:{features:{type:"array",items:{type:"string"}}},title:"batchFeaturesSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/delete",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["string"]},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"Deletes a list of features",description:{content:"This endpoint deletes the specified features, that are in archive.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","delete"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"reviveFeature",permalink:"/reference/api/unleash/revive-feature"},next:{title:"Revives a list of features",permalink:"/reference/api/unleash/revive-features"}},m={},f=[],y={toc:f};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Deletes a list of features"),(0,i.kt)(n.Z,{method:"post",path:"/api/admin/projects/{projectId}/delete",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"This endpoint deletes the specified features, that are in archive."),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"batchFeaturesSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"features",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null))))))}v.isMDXComponent=!0}}]);