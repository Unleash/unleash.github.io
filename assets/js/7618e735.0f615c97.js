"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8814],{43555:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>c,default:()=>k,frontMatter:()=>h,metadata:()=>y,toc:()=>S});var s=t(87462),i=(t(67294),t(3905)),p=t(80334),n=(t(11032),t(46062)),l=t(21439),r=t(9531),d=t(15761),o=t(73418),m=t(92414),u=t(11666);const h={id:"update-splash-settings",title:"updateSplashSettings",description:"updateSplashSettings",sidebar_label:"updateSplashSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateSplashSettings",responses:{200:{description:"splashSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["userId","splashId","seen"],properties:{userId:{type:"number"},splashId:{type:"string"},seen:{type:"boolean"}},title:"splashSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateSplashSettings",method:"post",path:"/api/admin/splash/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"update Splash Settings",description:{type:"text/plain"},url:{path:["api","admin","splash",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,y={unversionedId:"reference/api/unleash/update-splash-settings",id:"reference/api/unleash/update-splash-settings",title:"updateSplashSettings",description:"updateSplashSettings",source:"@site/docs/reference/api/unleash/update-splash-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-splash-settings",permalink:"/reference/api/unleash/update-splash-settings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-splash-settings",title:"updateSplashSettings",description:"updateSplashSettings",sidebar_label:"updateSplashSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Admin UI"],operationId:"updateSplashSettings",responses:{200:{description:"splashSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["userId","splashId","seen"],properties:{userId:{type:"number"},splashId:{type:"string"},seen:{type:"boolean"}},title:"splashSchema"}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"updateSplashSettings",method:"post",path:"/api/admin/splash/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"update Splash Settings",description:{type:"text/plain"},url:{path:["api","admin","splash",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"updateFeedback",permalink:"/reference/api/unleash/update-feedback"},next:{title:"API tokens",permalink:"/reference/api/unleash/api-tokens"}},b={},S=[],g={toc:S};function k(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"updateSplashSettings"),(0,i.kt)(n.Z,{method:"post",path:"/api/admin/splash/{id}",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"updateSplashSettings"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(p.Z,{mdxType:"ApiTabs"},(0,i.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"splashSchema")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"userId",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"splashId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"seen",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "userId": 0,\n  "splashId": "string",\n  "seen": true\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);