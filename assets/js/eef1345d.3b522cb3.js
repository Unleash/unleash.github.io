"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6597],{4082:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>g,toc:()=>y});var a=i(87462),n=(i(67294),i(3905)),s=i(80334),l=(i(11032),i(46062)),o=i(21439),r=(i(9531),i(15761)),d=i(73418),m=i(92414),c=i(11666);const p={id:"get-oidc-settings",title:"getOidcSettings",description:"getOidcSettings",sidebar_label:"getOidcSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getOidcSettings",responses:{200:{description:"oidcSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","secret"],properties:{enabled:{type:"boolean"},discoverUrl:{type:"string"},clientId:{type:"string"},secret:{type:"string"},autoCreate:{type:"boolean"},enableSingleSignOut:{type:"boolean"},defaultRootRole:{type:"string",enum:["Viewer","Editor","Admin"]},emailDomains:{type:"string"},acrValues:{type:"string"}},title:"oidcSettingsSchema"}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"getOidcSettings",method:"get",path:"/api/admin/auth/oidc/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"get Oidc Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","oidc","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/get-oidc-settings",id:"reference/api/unleash/get-oidc-settings",title:"getOidcSettings",description:"getOidcSettings",source:"@site/docs/reference/api/unleash/get-oidc-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-oidc-settings",permalink:"/reference/api/unleash/get-oidc-settings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-oidc-settings",title:"getOidcSettings",description:"getOidcSettings",sidebar_label:"getOidcSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getOidcSettings",responses:{200:{description:"oidcSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","secret"],properties:{enabled:{type:"boolean"},discoverUrl:{type:"string"},clientId:{type:"string"},secret:{type:"string"},autoCreate:{type:"boolean"},enableSingleSignOut:{type:"boolean"},defaultRootRole:{type:"string",enum:["Viewer","Editor","Admin"]},emailDomains:{type:"string"},acrValues:{type:"string"}},title:"oidcSettingsSchema"}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"getOidcSettings",method:"get",path:"/api/admin/auth/oidc/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"get Oidc Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","oidc","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"setSamlSettings",permalink:"/reference/api/unleash/set-saml-settings"},next:{title:"setOidcSettings",permalink:"/reference/api/unleash/set-oidc-settings"}},h={},y=[],b={toc:y};function k(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"getOidcSettings"),(0,n.kt)(l.Z,{method:"get",path:"/api/admin/auth/oidc/settings",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"getOidcSettings"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"oidcSettingsSchema")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"discoverUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"clientId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"secret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"autoCreate",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"enableSingleSignOut",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"defaultRootRole",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Viewer`, `Editor`, `Admin`]",schema:{type:"string",enum:["Viewer","Editor","Admin"]},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"emailDomains",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"acrValues",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:'{\n  "enabled": true,\n  "discoverUrl": "string",\n  "clientId": "string",\n  "secret": "string",\n  "autoCreate": true,\n  "enableSingleSignOut": true,\n  "defaultRootRole": "Viewer",\n  "emailDomains": "string",\n  "acrValues": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The request data does not match what we expect.")),(0,n.kt)("div",null)),(0,n.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null))))))}k.isMDXComponent=!0}}]);