"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[454],{6583:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>c,toc:()=>w});var r=s(87462),t=(s(67294),s(3905)),i=s(80334),o=(s(11032),s(46062)),d=s(57138),n=s(21439),p=(s(9531),s(15761),s(73418)),l=(s(92414),s(11666));const m={id:"validate-user-password",title:"validateUserPassword",description:"validateUserPassword",sidebar_label:"validateUserPassword",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"validateUserPassword",requestBody:{description:"passwordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["password"],properties:{password:{type:"string"},oldPassword:{type:"string"},confirmPassword:{type:"string"}},title:"passwordSchema"}}}},responses:{200:{description:"This response has no body."}},description:"validateUserPassword",method:"post",path:"/api/admin/user-admin/validate-password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{password:"string",oldPassword:"string",confirmPassword:"string"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"validate User Password",description:{type:"text/plain"},url:{path:["api","admin","user-admin","validate-password"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,c={unversionedId:"reference/api/unleash/validate-user-password",id:"reference/api/unleash/validate-user-password",title:"validateUserPassword",description:"validateUserPassword",source:"@site/docs/reference/api/unleash/validate-user-password.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/validate-user-password",permalink:"/reference/api/unleash/validate-user-password",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"validate-user-password",title:"validateUserPassword",description:"validateUserPassword",sidebar_label:"validateUserPassword",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"validateUserPassword",requestBody:{description:"passwordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["password"],properties:{password:{type:"string"},oldPassword:{type:"string"},confirmPassword:{type:"string"}},title:"passwordSchema"}}}},responses:{200:{description:"This response has no body."}},description:"validateUserPassword",method:"post",path:"/api/admin/user-admin/validate-password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{password:"string",oldPassword:"string",confirmPassword:"string"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"validate User Password",description:{type:"text/plain"},url:{path:["api","admin","user-admin","validate-password"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"changeMyPassword",permalink:"/reference/api/unleash/change-my-password"},next:{title:"changeUserPassword",permalink:"/reference/api/unleash/change-user-password"}},h={},w=[{value:"Request",id:"request",level:2}],y={toc:w};function v(e){let{components:a,...s}=e;return(0,t.kt)("wrapper",(0,r.Z)({},y,s,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{className:"openapi__heading"},"validateUserPassword"),(0,t.kt)(o.Z,{method:"post",path:"/api/admin/user-admin/validate-password",mdxType:"MethodEndpoint"}),(0,t.kt)(d.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,t.kt)("p",null,"validateUserPassword"),(0,t.kt)("h2",{id:"request"},"Request"),(0,t.kt)(n.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,t.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,t.kt)("strong",{className:"openapi-schema__required"},"required")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,t.kt)("p",null,"passwordSchema"))),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(p.Z,{collapsible:!1,name:"password",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(p.Z,{collapsible:!1,name:"oldPassword",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(p.Z,{collapsible:!1,name:"confirmPassword",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,t.kt)("div",null,(0,t.kt)("div",null,(0,t.kt)(i.Z,{mdxType:"ApiTabs"},(0,t.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"This response has no body.")),(0,t.kt)("div",null))))))}v.isMDXComponent=!0}}]);