"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7394],{53958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),l=(a(11032),a(46062)),o=a(21439),p=(a(9531),a(15761)),r=a(73418),m=a(92414),d=a(11666);const u={id:"set-simple-settings",title:"setSimpleSettings",description:"setSimpleSettings",sidebar_label:"setSimpleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"setSimpleSettings",requestBody:{description:"passwordAuthSchema",required:!0,content:{"application/json":{schema:{type:"object",properties:{enabled:{type:"boolean"}},title:"passwordAuthSchema"}}}},responses:{200:{description:"passwordAuthSchema",content:{"application/json":{schema:{type:"object",properties:{enabled:{type:"boolean"}},title:"passwordAuthSchema"}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"setSimpleSettings",method:"post",path:"/api/admin/auth/simple/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{enabled:!0},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"set Simple Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","simple","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},c=void 0,h={unversionedId:"reference/api/unleash/set-simple-settings",id:"reference/api/unleash/set-simple-settings",title:"setSimpleSettings",description:"setSimpleSettings",source:"@site/docs/reference/api/unleash/set-simple-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/set-simple-settings",permalink:"/reference/api/unleash/set-simple-settings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"set-simple-settings",title:"setSimpleSettings",description:"setSimpleSettings",sidebar_label:"setSimpleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"setSimpleSettings",requestBody:{description:"passwordAuthSchema",required:!0,content:{"application/json":{schema:{type:"object",properties:{enabled:{type:"boolean"}},title:"passwordAuthSchema"}}}},responses:{200:{description:"passwordAuthSchema",content:{"application/json":{schema:{type:"object",properties:{enabled:{type:"boolean"}},title:"passwordAuthSchema"}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"setSimpleSettings",method:"post",path:"/api/admin/auth/simple/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{enabled:!0},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"set Simple Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","simple","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getSimpleSettings",permalink:"/reference/api/unleash/get-simple-settings"},next:{title:"getPermissions",permalink:"/reference/api/unleash/get-permissions"}},y={},g=[],b={toc:g};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"setSimpleSettings"),(0,s.kt)(l.Z,{method:"post",path:"/api/admin/auth/simple/settings",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"setSimpleSettings"),(0,s.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"passwordAuthSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(r.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"passwordAuthSchema")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(r.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "enabled": true\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null)),(0,s.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null))))))}k.isMDXComponent=!0}}]);