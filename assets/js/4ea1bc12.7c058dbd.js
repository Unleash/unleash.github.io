"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5732],{86945:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>u,contentTitle:()=>h,default:()=>w,frontMatter:()=>c,metadata:()=>m,toc:()=>y});var t=s(87462),n=(s(67294),s(3905)),r=s(80334),i=(s(11032),s(46062)),o=s(57138),p=s(21439),d=(s(9531),s(15761),s(73418)),l=(s(92414),s(11666));const c={id:"change-password",title:"changePassword",description:"changePassword",sidebar_label:"changePassword",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"changePassword",requestBody:{description:"changePasswordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["token","password"],properties:{token:{type:"string"},password:{type:"string"}},title:"changePasswordSchema"}}}},responses:{200:{description:"This response has no body."}},description:"changePassword",method:"post",path:"/auth/reset/password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{token:"string",password:"string"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"change Password",description:{type:"text/plain"},url:{path:["auth","reset","password"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,m={unversionedId:"reference/api/unleash/change-password",id:"reference/api/unleash/change-password",title:"changePassword",description:"changePassword",source:"@site/docs/reference/api/unleash/change-password.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/change-password",permalink:"/reference/api/unleash/change-password",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"change-password",title:"changePassword",description:"changePassword",sidebar_label:"changePassword",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"changePassword",requestBody:{description:"changePasswordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["token","password"],properties:{token:{type:"string"},password:{type:"string"}},title:"changePasswordSchema"}}}},responses:{200:{description:"This response has no body."}},description:"changePassword",method:"post",path:"/auth/reset/password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{token:"string",password:"string"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"change Password",description:{type:"text/plain"},url:{path:["auth","reset","password"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"validateToken",permalink:"/reference/api/unleash/validate-token"},next:{title:"validatePassword",permalink:"/reference/api/unleash/validate-password"}},u={},y=[{value:"Request",id:"request",level:2}],g={toc:y};function w(e){let{components:a,...s}=e;return(0,n.kt)("wrapper",(0,t.Z)({},g,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"changePassword"),(0,n.kt)(i.Z,{method:"post",path:"/auth/reset/password",mdxType:"MethodEndpoint"}),(0,n.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"changePassword"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,n.kt)("strong",{className:"openapi-schema__required"},"required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"changePasswordSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"token",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"password",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null))))))}w.isMDXComponent=!0}}]);