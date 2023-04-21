"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7014],{86518:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>h,contentTitle:()=>m,default:()=>w,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var r=a(87462),t=(a(67294),a(3905)),i=a(80334),n=(a(11032),a(46062)),o=a(21439),d=a(9531),p=(a(15761),a(73418)),l=(a(92414),a(11666));const c={id:"change-user-password",title:"changeUserPassword",description:"changeUserPassword",sidebar_label:"changeUserPassword",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"changeUserPassword",requestBody:{description:"passwordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["password"],properties:{password:{type:"string"},confirmPassword:{type:"string"}},title:"passwordSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"changeUserPassword",method:"post",path:"/api/admin/user-admin/{id}/change-password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{password:"string",confirmPassword:"string"},info:{title:"Unleash API",version:"4.22.5"},postman:{name:"change User Password",description:{type:"text/plain"},url:{path:["api","admin","user-admin",":id","change-password"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},m=void 0,u={unversionedId:"reference/api/unleash/change-user-password",id:"reference/api/unleash/change-user-password",title:"changeUserPassword",description:"changeUserPassword",source:"@site/docs/reference/api/unleash/change-user-password.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/change-user-password",permalink:"/reference/api/unleash/change-user-password",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"change-user-password",title:"changeUserPassword",description:"changeUserPassword",sidebar_label:"changeUserPassword",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"changeUserPassword",requestBody:{description:"passwordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["password"],properties:{password:{type:"string"},confirmPassword:{type:"string"}},title:"passwordSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"changeUserPassword",method:"post",path:"/api/admin/user-admin/{id}/change-password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{password:"string",confirmPassword:"string"},info:{title:"Unleash API",version:"4.22.5"},postman:{name:"change User Password",description:{type:"text/plain"},url:{path:["api","admin","user-admin",":id","change-password"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"validateUserPassword",permalink:"/reference/api/unleash/validate-user-password"},next:{title:"resetUserPassword",permalink:"/reference/api/unleash/reset-user-password"}},h={},y=[],g={toc:y};function w(e){let{components:s,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},g,a,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("h1",{className:"openapi__heading"},"changeUserPassword"),(0,t.kt)(n.Z,{method:"post",path:"/api/admin/user-admin/{id}/change-password",mdxType:"MethodEndpoint"}),(0,t.kt)("p",null,"changeUserPassword"),(0,t.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("strong",null,"Path Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(d.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,t.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,t.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{textAlign:"left"}},(0,t.kt)("strong",null,"Request Body"),(0,t.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,t.kt)("p",null,"passwordSchema"))),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(p.Z,{collapsible:!1,name:"password",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(p.Z,{collapsible:!1,name:"confirmPassword",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,t.kt)("div",null,(0,t.kt)("div",null,(0,t.kt)(i.Z,{mdxType:"ApiTabs"},(0,t.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"This response has no body.")),(0,t.kt)("div",null))))))}w.isMDXComponent=!0}}]);