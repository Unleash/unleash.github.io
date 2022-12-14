"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7014],{86518:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=a(87462),t=(a(67294),a(3905)),i=a(60961),n=a(48165),o=a(90115),d=(a(58475),a(5428)),p=(a(80487),a(54881),a(11666));const l={id:"change-user-password",title:"changeUserPassword",description:"changeUserPassword",sidebar_label:"changeUserPassword",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"changeUserPassword",requestBody:{description:"passwordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["password"],properties:{password:{type:"string"},confirmPassword:{type:"string"}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"changeUserPassword",method:"post",path:"/api/admin/user-admin/{id}/change-password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{password:"string",confirmPassword:"string"},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"change User Password",description:{type:"text/plain"},url:{path:["api","admin","user-admin",":id","change-password"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},c=void 0,u={unversionedId:"reference/api/unleash/change-user-password",id:"reference/api/unleash/change-user-password",title:"changeUserPassword",description:"changeUserPassword",source:"@site/docs/reference/api/unleash/change-user-password.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/change-user-password",permalink:"/reference/api/unleash/change-user-password",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/change-user-password.api.mdx",tags:[],version:"current",frontMatter:{id:"change-user-password",title:"changeUserPassword",description:"changeUserPassword",sidebar_label:"changeUserPassword",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"changeUserPassword",requestBody:{description:"passwordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["password"],properties:{password:{type:"string"},confirmPassword:{type:"string"}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],description:"changeUserPassword",method:"post",path:"/api/admin/user-admin/{id}/change-password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{password:"string",confirmPassword:"string"},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"change User Password",description:{type:"text/plain"},url:{path:["api","admin","user-admin",":id","change-password"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"validateUserPassword",permalink:"/reference/api/unleash/validate-user-password"},next:{title:"resetUserPassword",permalink:"/reference/api/unleash/reset-user-password"}},h={},m=[{value:"changeUserPassword",id:"changeuserpassword",level:2}],y={toc:m};function g(e){let{components:s,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},y,a,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"changeuserpassword"},"changeUserPassword"),(0,t.kt)("p",null,"changeUserPassword"),(0,t.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("strong",null,"Path Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,t.kt)(n.Z,{mdxType:"MimeTabs"},(0,t.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{textAlign:"left"}},(0,t.kt)("strong",null,"Request Body"),(0,t.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,t.kt)("p",null,"passwordSchema"))),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(d.Z,{collapsible:!1,name:"password",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"confirmPassword",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,t.kt)("div",null,(0,t.kt)(i.Z,{mdxType:"ApiTabs"},(0,t.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"This response has no body.")),(0,t.kt)("div",null)))))}g.isMDXComponent=!0}}]);