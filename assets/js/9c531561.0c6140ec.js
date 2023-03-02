"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7394],{53958:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>c,toc:()=>y});var a=i(87462),s=(i(67294),i(3905)),n=i(60961),l=i(48165),o=(i(90115),i(58475)),p=i(5428),r=i(80487),m=(i(54881),i(11666));const d={id:"set-simple-settings",title:"setSimpleSettings",description:"setSimpleSettings",sidebar_label:"setSimpleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"setSimpleSettings",requestBody:{description:"passwordAuthSchema",required:!0,content:{"application/json":{schema:{type:"object",properties:{enabled:{type:"boolean"}}}}}},responses:{200:{description:"passwordAuthSchema",content:{"application/json":{schema:{type:"object",properties:{enabled:{type:"boolean"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"setSimpleSettings",method:"post",path:"/api/admin/auth/simple/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{enabled:!0},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"set Simple Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","simple","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,c={unversionedId:"reference/api/unleash/set-simple-settings",id:"reference/api/unleash/set-simple-settings",title:"setSimpleSettings",description:"setSimpleSettings",source:"@site/docs/reference/api/unleash/set-simple-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/set-simple-settings",permalink:"/reference/api/unleash/set-simple-settings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"set-simple-settings",title:"setSimpleSettings",description:"setSimpleSettings",sidebar_label:"setSimpleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"setSimpleSettings",requestBody:{description:"passwordAuthSchema",required:!0,content:{"application/json":{schema:{type:"object",properties:{enabled:{type:"boolean"}}}}}},responses:{200:{description:"passwordAuthSchema",content:{"application/json":{schema:{type:"object",properties:{enabled:{type:"boolean"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"setSimpleSettings",method:"post",path:"/api/admin/auth/simple/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{enabled:!0},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"set Simple Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","simple","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getSimpleSettings",permalink:"/reference/api/unleash/get-simple-settings"},next:{title:"getPermissions",permalink:"/reference/api/unleash/get-permissions"}},h={},y=[{value:"setSimpleSettings",id:"setsimplesettings",level:2}],g={toc:y};function b(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"setsimplesettings"},"setSimpleSettings"),(0,s.kt)("p",null,"setSimpleSettings"),(0,s.kt)(l.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"passwordAuthSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"passwordAuthSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(r.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "enabled": true\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null)),(0,s.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);