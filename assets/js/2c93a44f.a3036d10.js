"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3516],{6859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>m,metadata:()=>c,toc:()=>h});var i=a(87462),n=(a(67294),a(3905)),s=a(60961),o=a(48165),l=(a(90115),a(58475)),r=a(5428),g=a(80487),p=(a(54881),a(11666));const m={id:"get-google-settings",title:"getGoogleSettings",description:"getGoogleSettings",sidebar_label:"getGoogleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getGoogleSettings",responses:{200:{description:"googleSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","clientSecret","unleashHostname"],properties:{enabled:{type:"boolean"},clientId:{type:"string"},clientSecret:{type:"string"},unleashHostname:{type:"string"},autoCreate:{type:"boolean"},emailDomains:{type:"string"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"getGoogleSettings",method:"get",path:"/api/admin/auth/google/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.43"},postman:{name:"get Google Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","google","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,c={unversionedId:"reference/api/unleash/get-google-settings",id:"reference/api/unleash/get-google-settings",title:"getGoogleSettings",description:"getGoogleSettings",source:"@site/docs/reference/api/unleash/get-google-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-google-settings",permalink:"/reference/api/unleash/get-google-settings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-google-settings",title:"getGoogleSettings",description:"getGoogleSettings",sidebar_label:"getGoogleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getGoogleSettings",responses:{200:{description:"googleSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","clientSecret","unleashHostname"],properties:{enabled:{type:"boolean"},clientId:{type:"string"},clientSecret:{type:"string"},unleashHostname:{type:"string"},autoCreate:{type:"boolean"},emailDomains:{type:"string"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"getGoogleSettings",method:"get",path:"/api/admin/auth/google/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.43"},postman:{name:"get Google Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","google","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"login",permalink:"/reference/api/unleash/login"},next:{title:"setGoogleSettings",permalink:"/reference/api/unleash/set-google-settings"}},u={},h=[{value:"getGoogleSettings",id:"getgooglesettings",level:2}],y={toc:h};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"getgooglesettings"},"getGoogleSettings"),(0,n.kt)("p",null,"getGoogleSettings"),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"googleSettingsSchema")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(g.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"clientId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"clientSecret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"unleashHostname",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"autoCreate",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"emailDomains",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "enabled": true,\n  "clientId": "string",\n  "clientSecret": "string",\n  "unleashHostname": "string",\n  "autoCreate": true,\n  "emailDomains": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The request data does not match what we expect.")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null)))))}b.isMDXComponent=!0}}]);