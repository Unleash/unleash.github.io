"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7892],{75781:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>h,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=s(87462),t=(s(67294),s(3905)),i=s(60961),n=s(48165),o=(s(90115),s(58475),s(5428)),d=(s(80487),s(54881),s(11666));const p={id:"change-my-password",title:"changeMyPassword",description:"changeMyPassword",sidebar_label:"changeMyPassword",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"changeMyPassword",requestBody:{description:"passwordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["password"],properties:{password:{type:"string"},confirmPassword:{type:"string"}}}}}},responses:{200:{description:"This response has no body."},400:{description:"passwordMismatch"}},description:"changeMyPassword",method:"post",path:"/api/admin/user/change-password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{password:"string",confirmPassword:"string"},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"change My Password",description:{type:"text/plain"},url:{path:["api","admin","user","change-password"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},l=void 0,c={unversionedId:"reference/api/unleash/change-my-password",id:"reference/api/unleash/change-my-password",title:"changeMyPassword",description:"changeMyPassword",source:"@site/docs/reference/api/unleash/change-my-password.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/change-my-password",permalink:"/reference/api/unleash/change-my-password",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"change-my-password",title:"changeMyPassword",description:"changeMyPassword",sidebar_label:"changeMyPassword",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"changeMyPassword",requestBody:{description:"passwordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["password"],properties:{password:{type:"string"},confirmPassword:{type:"string"}}}}}},responses:{200:{description:"This response has no body."},400:{description:"passwordMismatch"}},description:"changeMyPassword",method:"post",path:"/api/admin/user/change-password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{password:"string",confirmPassword:"string"},info:{title:"Unleash API",version:"4.20.4"},postman:{name:"change My Password",description:{type:"text/plain"},url:{path:["api","admin","user","change-password"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getProfile",permalink:"/reference/api/unleash/get-profile"},next:{title:"validateUserPassword",permalink:"/reference/api/unleash/validate-user-password"}},h={},u=[{value:"changeMyPassword",id:"changemypassword",level:2}],m={toc:u};function y(e){let{components:a,...s}=e;return(0,t.kt)("wrapper",(0,r.Z)({},m,s,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"changemypassword"},"changeMyPassword"),(0,t.kt)("p",null,"changeMyPassword"),(0,t.kt)(n.Z,{mdxType:"MimeTabs"},(0,t.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{textAlign:"left"}},(0,t.kt)("strong",null,"Request Body"),(0,t.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,t.kt)("p",null,"passwordSchema"))),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(o.Z,{collapsible:!1,name:"password",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(o.Z,{collapsible:!1,name:"confirmPassword",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,t.kt)("div",null,(0,t.kt)(i.Z,{mdxType:"ApiTabs"},(0,t.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"This response has no body.")),(0,t.kt)("div",null)),(0,t.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"passwordMismatch")),(0,t.kt)("div",null)))))}y.isMDXComponent=!0}}]);