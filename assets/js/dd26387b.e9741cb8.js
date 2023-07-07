"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7892],{75781:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>w});var r=a(87462),i=(a(67294),a(3905)),n=a(80334),o=(a(11032),a(46062)),t=a(57138),d=a(21439),p=(a(9531),a(15761),a(73418)),l=(a(92414),a(11666));const c={id:"change-my-password",title:"Change your own password",description:"Requires specifying old password and confirming new password",sidebar_label:"Change your own password",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"changeMyPassword",description:"Requires specifying old password and confirming new password",requestBody:{description:"passwordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["password"],description:"Fields used to create new password or update old password",properties:{password:{type:"string",example:"k!5As3HquUrQ",description:"The new password to change or validate."},oldPassword:{type:"string",example:"Oldk!5As3HquUrQ",description:"The old password the user is changing. This field is for the non-admin users changing their own password."},confirmPassword:{type:"string",example:"k!5As3HquUrQ",description:"The confirmation of the new password. This field is for the non-admin users changing their own password."}},title:"passwordSchema"}}}},responses:{200:{description:"This response has no body."},400:{description:"Old and new password do not match"},401:{description:"Old password is incorrect or user is not authenticated"}},method:"post",path:"/api/admin/user/change-password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{password:"k!5As3HquUrQ",oldPassword:"Oldk!5As3HquUrQ",confirmPassword:"k!5As3HquUrQ"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Change your own password",description:{content:"Requires specifying old password and confirming new password",type:"text/plain"},url:{path:["api","admin","user","change-password"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,m={unversionedId:"reference/api/unleash/change-my-password",id:"reference/api/unleash/change-my-password",title:"Change your own password",description:"Requires specifying old password and confirming new password",source:"@site/docs/reference/api/unleash/change-my-password.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/change-my-password",permalink:"/reference/api/unleash/change-my-password",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"change-my-password",title:"Change your own password",description:"Requires specifying old password and confirming new password",sidebar_label:"Change your own password",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"changeMyPassword",description:"Requires specifying old password and confirming new password",requestBody:{description:"passwordSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["password"],description:"Fields used to create new password or update old password",properties:{password:{type:"string",example:"k!5As3HquUrQ",description:"The new password to change or validate."},oldPassword:{type:"string",example:"Oldk!5As3HquUrQ",description:"The old password the user is changing. This field is for the non-admin users changing their own password."},confirmPassword:{type:"string",example:"k!5As3HquUrQ",description:"The confirmation of the new password. This field is for the non-admin users changing their own password."}},title:"passwordSchema"}}}},responses:{200:{description:"This response has no body."},400:{description:"Old and new password do not match"},401:{description:"Old password is incorrect or user is not authenticated"}},method:"post",path:"/api/admin/user/change-password",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{password:"k!5As3HquUrQ",oldPassword:"Oldk!5As3HquUrQ",confirmPassword:"k!5As3HquUrQ"},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Change your own password",description:{content:"Requires specifying old password and confirming new password",type:"text/plain"},url:{path:["api","admin","user","change-password"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get your own user profile",permalink:"/reference/api/unleash/get-profile"},next:{title:"Validate password for a user",permalink:"/reference/api/unleash/validate-user-password"}},h={},w=[{value:"Request",id:"request",level:2}],y={toc:w};function g(e){let{components:s,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},y,a,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Change your own password"),(0,i.kt)(o.Z,{method:"post",path:"/api/admin/user/change-password",mdxType:"MethodEndpoint"}),(0,i.kt)(t.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Requires specifying old password and confirming new password"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)(d.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"passwordSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"password",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"k!5As3HquUrQ",description:"The new password to change or validate."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"oldPassword",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Oldk!5As3HquUrQ",description:"The old password the user is changing. This field is for the non-admin users changing their own password."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"confirmPassword",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"k!5As3HquUrQ",description:"The confirmation of the new password. This field is for the non-admin users changing their own password."},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null)),(0,i.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Old and new password do not match")),(0,i.kt)("div",null)),(0,i.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Old password is incorrect or user is not authenticated")),(0,i.kt)("div",null))))))}g.isMDXComponent=!0}}]);