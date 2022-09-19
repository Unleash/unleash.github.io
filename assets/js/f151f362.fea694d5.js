"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5063],{95219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var i=a(87462),s=(a(67294),a(3905)),n=a(70439),o=a(89402),l=(a(10725),a(65860)),r=a(5479),m=a(83559),d=(a(48567),a(72905));const p={id:"set-google-settings",sidebar_label:"setGoogleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["admin"],operationId:"setGoogleSettings",requestBody:{description:"googleSettingsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["clientId","clientSecret","unleashHostname"],properties:{enabled:{type:"boolean"},clientId:{type:"string"},clientSecret:{type:"string"},unleashHostname:{type:"string"},autoCreate:{type:"boolean"},emailDomains:{type:"string"}}}}}},responses:{200:{description:"googleSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","clientSecret","unleashHostname"],properties:{enabled:{type:"boolean"},clientId:{type:"string"},clientSecret:{type:"string"},unleashHostname:{type:"string"},autoCreate:{type:"boolean"},emailDomains:{type:"string"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"setGoogleSettings",method:"post",path:"/ushosted/api/admin/auth/google/settings",servers:[{url:"https://us.app.unleash-hosted.com"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{enabled:!0,clientId:"string",clientSecret:"string",unleashHostname:"string",autoCreate:!0,emailDomains:"string"},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"set Google Settings",description:{type:"text/plain"},url:{path:["ushosted","api","admin","auth","google","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/reference/api/unleash/unleash-api"},c=void 0,u={unversionedId:"reference/api/unleash/set-google-settings",id:"reference/api/unleash/set-google-settings",title:"set-google-settings",description:"setGoogleSettings",source:"@site/docs/reference/api/unleash/set-google-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/set-google-settings",permalink:"/reference/api/unleash/set-google-settings",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/set-google-settings.api.mdx",tags:[],version:"current",frontMatter:{id:"set-google-settings",sidebar_label:"setGoogleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["admin"],operationId:"setGoogleSettings",requestBody:{description:"googleSettingsSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["clientId","clientSecret","unleashHostname"],properties:{enabled:{type:"boolean"},clientId:{type:"string"},clientSecret:{type:"string"},unleashHostname:{type:"string"},autoCreate:{type:"boolean"},emailDomains:{type:"string"}}}}}},responses:{200:{description:"googleSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","clientSecret","unleashHostname"],properties:{enabled:{type:"boolean"},clientId:{type:"string"},clientSecret:{type:"string"},unleashHostname:{type:"string"},autoCreate:{type:"boolean"},emailDomains:{type:"string"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"setGoogleSettings",method:"post",path:"/ushosted/api/admin/auth/google/settings",servers:[{url:"https://us.app.unleash-hosted.com"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{enabled:!0,clientId:"string",clientSecret:"string",unleashHostname:"string",autoCreate:!0,emailDomains:"string"},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"set Google Settings",description:{type:"text/plain"},url:{path:["ushosted","api","admin","auth","google","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/reference/api/unleash/unleash-api"}},g={},h=[{value:"setGoogleSettings",id:"setgooglesettings",level:2}],y={toc:h};function v(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"setgooglesettings"},"setGoogleSettings"),(0,s.kt)("p",null,"setGoogleSettings"),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"googleSettingsSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(r.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"clientId",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"clientSecret",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"unleashHostname",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"autoCreate",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"emailDomains",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"googleSettingsSchema")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(r.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"clientId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"clientSecret",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"unleashHostname",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"autoCreate",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"emailDomains",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "enabled": true,\n  "clientId": "string",\n  "clientSecret": "string",\n  "unleashHostname": "string",\n  "autoCreate": true,\n  "emailDomains": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null)),(0,s.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null)))))}v.isMDXComponent=!0}}]);