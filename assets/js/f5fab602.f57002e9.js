"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5723],{80451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>T,frontMatter:()=>u,metadata:()=>k,toc:()=>h});var i=a(87462),n=(a(67294),a(3905)),p=a(80334),o=(a(11032),a(46062)),s=a(21439),r=a(9531),d=(a(15761),a(73418)),l=(a(92414),a(11666));const u={id:"update-api-token",title:"updateApiToken",description:"updateApiToken",sidebar_label:"updateApiToken",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"updateApiToken",requestBody:{description:"updateApiTokenSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["expiresAt"],properties:{expiresAt:{type:"string",format:"date-time"}},title:"updateApiTokenSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"token",in:"path",required:!0,schema:{type:"string"}}],description:"updateApiToken",method:"put",path:"/api/admin/api-tokens/{token}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{expiresAt:"2023-03-28T09:09:03.619Z"},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"update Api Token",description:{type:"text/plain"},url:{path:["api","admin","api-tokens",":token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"token"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},m=void 0,k={unversionedId:"reference/api/unleash/update-api-token",id:"reference/api/unleash/update-api-token",title:"updateApiToken",description:"updateApiToken",source:"@site/docs/reference/api/unleash/update-api-token.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-api-token",permalink:"/reference/api/unleash/update-api-token",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-api-token",title:"updateApiToken",description:"updateApiToken",sidebar_label:"updateApiToken",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"updateApiToken",requestBody:{description:"updateApiTokenSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["expiresAt"],properties:{expiresAt:{type:"string",format:"date-time"}},title:"updateApiTokenSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"token",in:"path",required:!0,schema:{type:"string"}}],description:"updateApiToken",method:"put",path:"/api/admin/api-tokens/{token}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{expiresAt:"2023-03-28T09:09:03.619Z"},info:{title:"Unleash API",version:"4.22.0-beta.124"},postman:{name:"update Api Token",description:{type:"text/plain"},url:{path:["api","admin","api-tokens",":token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"token"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"createApiToken",permalink:"/reference/api/unleash/create-api-token"},next:{title:"deleteApiToken",permalink:"/reference/api/unleash/delete-api-token"}},c={},h=[],y={toc:h};function T(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"updateApiToken"),(0,n.kt)(o.Z,{method:"put",path:"/api/admin/api-tokens/{token}",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"updateApiToken"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"token",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(s.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"updateApiTokenSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"expiresAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(p.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null))))))}T.isMDXComponent=!0}}]);