"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7890],{42876:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>S,frontMatter:()=>p,metadata:()=>g,toc:()=>y});var a=i(87462),s=(i(67294),i(3905)),n=i(80334),o=(i(11032),i(46062)),l=i(21439),r=(i(9531),i(15761)),m=i(73418),d=i(92414),c=i(11666);const p={id:"set-oidc-settings",title:"setOidcSettings",description:"setOidcSettings",sidebar_label:"setOidcSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"setOidcSettings",requestBody:{description:"oidcSettingsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["clientId","secret"],properties:{enabled:{type:"boolean"},discoverUrl:{type:"string"},clientId:{type:"string"},secret:{type:"string"},autoCreate:{type:"boolean"},enableSingleSignOut:{type:"boolean"},defaultRootRole:{type:"string",enum:["Viewer","Editor","Admin"]},emailDomains:{type:"string"},acrValues:{type:"string"}},title:"oidcSettingsSchema"}}}},responses:{200:{description:"oidcSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","secret"],properties:{enabled:{type:"boolean"},discoverUrl:{type:"string"},clientId:{type:"string"},secret:{type:"string"},autoCreate:{type:"boolean"},enableSingleSignOut:{type:"boolean"},defaultRootRole:{type:"string",enum:["Viewer","Editor","Admin"]},emailDomains:{type:"string"},acrValues:{type:"string"}},title:"oidcSettingsSchema"}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"setOidcSettings",method:"post",path:"/api/admin/auth/oidc/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{enabled:!0,discoverUrl:"string",clientId:"string",secret:"string",autoCreate:!0,enableSingleSignOut:!0,defaultRootRole:"Viewer",emailDomains:"string",acrValues:"string"},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"set Oidc Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","oidc","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/set-oidc-settings",id:"reference/api/unleash/set-oidc-settings",title:"setOidcSettings",description:"setOidcSettings",source:"@site/docs/reference/api/unleash/set-oidc-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/set-oidc-settings",permalink:"/reference/api/unleash/set-oidc-settings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"set-oidc-settings",title:"setOidcSettings",description:"setOidcSettings",sidebar_label:"setOidcSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"setOidcSettings",requestBody:{description:"oidcSettingsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["clientId","secret"],properties:{enabled:{type:"boolean"},discoverUrl:{type:"string"},clientId:{type:"string"},secret:{type:"string"},autoCreate:{type:"boolean"},enableSingleSignOut:{type:"boolean"},defaultRootRole:{type:"string",enum:["Viewer","Editor","Admin"]},emailDomains:{type:"string"},acrValues:{type:"string"}},title:"oidcSettingsSchema"}}}},responses:{200:{description:"oidcSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","secret"],properties:{enabled:{type:"boolean"},discoverUrl:{type:"string"},clientId:{type:"string"},secret:{type:"string"},autoCreate:{type:"boolean"},enableSingleSignOut:{type:"boolean"},defaultRootRole:{type:"string",enum:["Viewer","Editor","Admin"]},emailDomains:{type:"string"},acrValues:{type:"string"}},title:"oidcSettingsSchema"}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"setOidcSettings",method:"post",path:"/api/admin/auth/oidc/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{enabled:!0,discoverUrl:"string",clientId:"string",secret:"string",autoCreate:!0,enableSingleSignOut:!0,defaultRootRole:"Viewer",emailDomains:"string",acrValues:"string"},info:{title:"Unleash API",version:"4.22.0"},postman:{name:"set Oidc Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","oidc","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"getOidcSettings",permalink:"/reference/api/unleash/get-oidc-settings"},next:{title:"getSimpleSettings",permalink:"/reference/api/unleash/get-simple-settings"}},h={},y=[],b={toc:y};function S(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"setOidcSettings"),(0,s.kt)(o.Z,{method:"post",path:"/api/admin/auth/oidc/settings",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"setOidcSettings"),(0,s.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"oidcSettingsSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"discoverUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"clientId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"secret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"autoCreate",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"enableSingleSignOut",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"defaultRootRole",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Viewer`, `Editor`, `Admin`]",schema:{type:"string",enum:["Viewer","Editor","Admin"]},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"emailDomains",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"acrValues",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"oidcSettingsSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"discoverUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"clientId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"secret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"autoCreate",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"enableSingleSignOut",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"defaultRootRole",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Viewer`, `Editor`, `Admin`]",schema:{type:"string",enum:["Viewer","Editor","Admin"]},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"emailDomains",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"acrValues",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "enabled": true,\n  "discoverUrl": "string",\n  "clientId": "string",\n  "secret": "string",\n  "autoCreate": true,\n  "enableSingleSignOut": true,\n  "defaultRootRole": "Viewer",\n  "emailDomains": "string",\n  "acrValues": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null)),(0,s.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null))))))}S.isMDXComponent=!0}}]);