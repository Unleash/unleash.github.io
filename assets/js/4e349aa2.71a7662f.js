"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7523],{21612:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var a=i(87462),s=(i(67294),i(3905)),n=i(60961),l=i(48165),p=(i(90115),i(58475)),o=i(5428),r=i(80487),m=(i(54881),i(11666));const d={id:"get-simple-settings",title:"getSimpleSettings",description:"getSimpleSettings",sidebar_label:"getSimpleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getSimpleSettings",responses:{200:{description:"passwordAuthSchema",content:{"application/json":{schema:{type:"object",properties:{enabled:{type:"boolean"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"getSimpleSettings",method:"get",path:"/api/admin/auth/simple/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"get Simple Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","simple","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},h=void 0,u={unversionedId:"reference/api/unleash/get-simple-settings",id:"reference/api/unleash/get-simple-settings",title:"getSimpleSettings",description:"getSimpleSettings",source:"@site/docs/reference/api/unleash/get-simple-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-simple-settings",permalink:"/reference/api/unleash/get-simple-settings",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-simple-settings.api.mdx",tags:[],version:"current",frontMatter:{id:"get-simple-settings",title:"getSimpleSettings",description:"getSimpleSettings",sidebar_label:"getSimpleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getSimpleSettings",responses:{200:{description:"passwordAuthSchema",content:{"application/json":{schema:{type:"object",properties:{enabled:{type:"boolean"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"getSimpleSettings",method:"get",path:"/api/admin/auth/simple/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.0-beta.1"},postman:{name:"get Simple Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","simple","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"setOidcSettings",permalink:"/reference/api/unleash/set-oidc-settings"},next:{title:"setSimpleSettings",permalink:"/reference/api/unleash/set-simple-settings"}},c={},g=[{value:"getSimpleSettings",id:"getsimplesettings",level:2}],S={toc:g};function b(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},S,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getsimplesettings"},"getSimpleSettings"),(0,s.kt)("p",null,"getSimpleSettings"),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"passwordAuthSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(r.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "enabled": true\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null)),(0,s.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);