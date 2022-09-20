"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[217],{48925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>v,frontMatter:()=>m,metadata:()=>d,toc:()=>h});var i=t(87462),a=(t(67294),t(3905)),o=t(70439),r=(t(89402),t(10725)),s=(t(65860),t(5479),t(83559),t(48567),t(72905));const m={id:"remove-environment",sidebar_label:"Deletes an environment by name",hide_title:!0,hide_table_of_contents:!0,api:{description:"Given an existing environment by name, this endpoint will attempt to delete it",tags:["admin"],operationId:"removeEnvironment",responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/environments/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"Deletes an environment by name",description:{content:"Given an existing environment by name, this endpoint will attempt to delete it",type:"text/plain"},url:{path:["api","admin","environments",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs/reference/api/unleash/unleash-api"},l=void 0,d={unversionedId:"reference/api/unleash/remove-environment",id:"reference/api/unleash/remove-environment",title:"remove-environment",description:"Deletes an environment by name",source:"@site/docs/reference/api/unleash/remove-environment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/remove-environment",permalink:"/reference/api/unleash/remove-environment",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/remove-environment.api.mdx",tags:[],version:"current",frontMatter:{id:"remove-environment",sidebar_label:"Deletes an environment by name",hide_title:!0,hide_table_of_contents:!0,api:{description:"Given an existing environment by name, this endpoint will attempt to delete it",tags:["admin"],operationId:"removeEnvironment",responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/environments/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"Deletes an environment by name",description:{content:"Given an existing environment by name, this endpoint will attempt to delete it",type:"text/plain"},url:{path:["api","admin","environments",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs/reference/api/unleash/unleash-api"}},p={},h=[{value:"Deletes an environment by name",id:"deletes-an-environment-by-name",level:2}],u={toc:h};function v(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deletes-an-environment-by-name"},"Deletes an environment by name"),(0,a.kt)("p",null,"Given an existing environment by name, this endpoint will attempt to delete it"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(r.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(s.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"This response has no body.")),(0,a.kt)("div",null)),(0,a.kt)(s.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The request data does not match what we expect.")),(0,a.kt)("div",null)),(0,a.kt)(s.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,a.kt)("div",null)))))}v.isMDXComponent=!0}}]);