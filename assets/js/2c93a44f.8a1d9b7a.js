"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3516],{6859:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var a=i(87462),n=(i(67294),i(3905)),o=i(60961),s=i(48165),l=(i(23380),i(58475)),r=i(5428),g=i(80487),p=(i(54881),i(11666));const d={id:"get-google-settings",title:"getGoogleSettings",description:"getGoogleSettings",sidebar_label:"getGoogleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getGoogleSettings",responses:{200:{description:"googleSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","clientSecret","unleashHostname"],properties:{enabled:{type:"boolean"},clientId:{type:"string"},clientSecret:{type:"string"},unleashHostname:{type:"string"},autoCreate:{type:"boolean"},emailDomains:{type:"string"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"getGoogleSettings",method:"get",path:"/api/admin/auth/google/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.17.2"},postman:{name:"get Google Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","google","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},m=void 0,c={unversionedId:"reference/api/unleash/get-google-settings",id:"reference/api/unleash/get-google-settings",title:"getGoogleSettings",description:"getGoogleSettings",source:"@site/docs/reference/api/unleash/get-google-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-google-settings",permalink:"/reference/api/unleash/get-google-settings",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-google-settings.api.mdx",tags:[],version:"current",frontMatter:{id:"get-google-settings",title:"getGoogleSettings",description:"getGoogleSettings",sidebar_label:"getGoogleSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getGoogleSettings",responses:{200:{description:"googleSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","clientSecret","unleashHostname"],properties:{enabled:{type:"boolean"},clientId:{type:"string"},clientSecret:{type:"string"},unleashHostname:{type:"string"},autoCreate:{type:"boolean"},emailDomains:{type:"string"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"getGoogleSettings",method:"get",path:"/api/admin/auth/google/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.17.2"},postman:{name:"get Google Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","google","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Auth",permalink:"/reference/api/unleash/auth"},next:{title:"setGoogleSettings",permalink:"/reference/api/unleash/set-google-settings"}},u={},h=[{value:"getGoogleSettings",id:"getgooglesettings",level:2}],y={toc:h};function v(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"getgooglesettings"},"getGoogleSettings"),(0,n.kt)("p",null,"getGoogleSettings"),(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"googleSettingsSchema")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(g.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"clientId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"clientSecret",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"unleashHostname",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"autoCreate",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"emailDomains",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "enabled": true,\n  "clientId": "string",\n  "clientSecret": "string",\n  "unleashHostname": "string",\n  "autoCreate": true,\n  "emailDomains": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The request data does not match what we expect.")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null)))))}v.isMDXComponent=!0}}]);