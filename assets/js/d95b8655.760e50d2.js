"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1575],{20771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var n=a(87462),r=(a(67294),a(3905)),s=a(80334),i=(a(11032),a(46062)),o=a(57138),l=a(21439),p=a(9531),u=(a(15761),a(73418)),m=(a(92414),a(11666));const d={id:"bulk-toggle-features-environment-on",title:"Bulk enable a list of features.",description:"This endpoint enables multiple feature toggles.",sidebar_label:"Bulk enable a list of features.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],description:"This endpoint enables multiple feature toggles.",operationId:"bulkToggleFeaturesEnvironmentOn",requestBody:{description:"bulkToggleFeaturesSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features"],description:"The feature list used for bulk toggle operations",properties:{features:{type:"array",description:"The features that we want to bulk toggle",items:{type:"string",description:"The feature name we want to toggle"},example:["feature-a","feature-b"]}},title:"bulkToggleFeaturesSchema"}}}},responses:{405:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/bulk_features/environments/{environment}/on",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["feature-a","feature-b"]},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"Bulk enable a list of features.",description:{content:"This endpoint enables multiple feature toggles.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","bulk_features","environments",":environment","on"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,h={unversionedId:"reference/api/unleash/bulk-toggle-features-environment-on",id:"reference/api/unleash/bulk-toggle-features-environment-on",title:"Bulk enable a list of features.",description:"This endpoint enables multiple feature toggles.",source:"@site/docs/reference/api/unleash/bulk-toggle-features-environment-on.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/bulk-toggle-features-environment-on",permalink:"/reference/api/unleash/bulk-toggle-features-environment-on",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"bulk-toggle-features-environment-on",title:"Bulk enable a list of features.",description:"This endpoint enables multiple feature toggles.",sidebar_label:"Bulk enable a list of features.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],description:"This endpoint enables multiple feature toggles.",operationId:"bulkToggleFeaturesEnvironmentOn",requestBody:{description:"bulkToggleFeaturesSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["features"],description:"The feature list used for bulk toggle operations",properties:{features:{type:"array",description:"The features that we want to bulk toggle",items:{type:"string",description:"The feature name we want to toggle"},example:["feature-a","feature-b"]}},title:"bulkToggleFeaturesSchema"}}}},responses:{405:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],method:"post",path:"/api/admin/projects/{projectId}/bulk_features/environments/{environment}/on",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{features:["feature-a","feature-b"]},info:{title:"Unleash API",version:"5.1.9"},postman:{name:"Bulk enable a list of features.",description:{content:"This endpoint enables multiple feature toggles.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","bulk_features","environments",":environment","on"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"toggleFeatureEnvironmentOn",permalink:"/reference/api/unleash/toggle-feature-environment-on"},next:{title:"Bulk disabled a list of features.",permalink:"/reference/api/unleash/bulk-toggle-features-environment-off"}},f={},g=[{value:"Request",id:"request",level:2}],y={toc:g};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Bulk enable a list of features."),(0,r.kt)(i.Z,{method:"post",path:"/api/admin/projects/{projectId}/bulk_features/environments/{environment}/on",mdxType:"MethodEndpoint"}),(0,r.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"This endpoint enables multiple feature toggles."),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"environment",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,r.kt)("strong",{className:"openapi-schema__required"},"required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"bulkToggleFeaturesSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(u.Z,{collapsible:!1,name:"features",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The features that we want to bulk toggle",items:{type:"string",description:"The feature name we want to toggle"},example:["feature-a","feature-b"]},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"This response has no body.")),(0,r.kt)("div",null))))))}b.isMDXComponent=!0}}]);