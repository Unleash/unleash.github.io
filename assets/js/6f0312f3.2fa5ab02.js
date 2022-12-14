"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3944],{35697:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>l});var i=a(87462),r=(a(67294),a(3905)),n=a(60961),s=(a(48165),a(90115)),o=(a(58475),a(5428),a(80487),a(54881),a(11666));const p={id:"archive-feature",title:"Archive a feature.",description:"This endpoint archives the specified feature if the feature belongs to the specified project.",sidebar_label:"Archive a feature.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"archiveFeature",description:"This endpoint archives the specified feature if the feature belongs to the specified project.",responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."},403:{description:"You either do not have the required permissions or used an invalid URL."},404:{description:"The requested resource was not found."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/projects/{projectId}/features/{featureName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"Archive a feature.",description:{content:"This endpoint archives the specified feature if the feature belongs to the specified project.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api"},d=void 0,u={unversionedId:"reference/api/unleash/archive-feature",id:"reference/api/unleash/archive-feature",title:"Archive a feature.",description:"This endpoint archives the specified feature if the feature belongs to the specified project.",source:"@site/docs/reference/api/unleash/archive-feature.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/archive-feature",permalink:"/reference/api/unleash/archive-feature",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/archive-feature.api.mdx",tags:[],version:"current",frontMatter:{id:"archive-feature",title:"Archive a feature.",description:"This endpoint archives the specified feature if the feature belongs to the specified project.",sidebar_label:"Archive a feature.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"archiveFeature",description:"This endpoint archives the specified feature if the feature belongs to the specified project.",responses:{200:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."},403:{description:"You either do not have the required permissions or used an invalid URL."},404:{description:"The requested resource was not found."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/projects/{projectId}/features/{featureName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"Archive a feature.",description:{content:"This endpoint archives the specified feature if the feature belongs to the specified project.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"patchFeature",permalink:"/reference/api/unleash/patch-feature"},next:{title:"getFeatureVariants",permalink:"/reference/api/unleash/get-feature-variants"}},h={},l=[{value:"Archive a feature.",id:"archive-a-feature",level:2}],c={toc:l};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"archive-a-feature"},"Archive a feature."),(0,r.kt)("p",null,"This endpoint archives the specified feature if the feature belongs to the specified project."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(s.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(s.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"This response has no body.")),(0,r.kt)("div",null)),(0,r.kt)(o.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,r.kt)("div",null)),(0,r.kt)(o.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"You either do not have the required permissions or used an invalid URL.")),(0,r.kt)("div",null)),(0,r.kt)(o.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The requested resource was not found.")),(0,r.kt)("div",null)))))}f.isMDXComponent=!0}}]);