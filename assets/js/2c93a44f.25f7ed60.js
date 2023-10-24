"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[33516],{6859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>T,frontMatter:()=>h,metadata:()=>g,toc:()=>b});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),o=(a(11032),a(46062)),r=a(57138),l=a(21439),p=(a(9531),a(15761)),m=a(73418),c=a(92414),d=a(30433);const h={id:"get-google-settings",title:"Get Google auth settings",description:"Returns the current settings for Google Authentication (deprecated, please use OpenID instead)",sidebar_label:"Get Google auth settings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],description:"Returns the current settings for Google Authentication (deprecated, please use OpenID instead)",deprecated:!0,operationId:"getGoogleSettings",responses:{200:{description:"googleSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","clientSecret","unleashHostname"],description:"Configuration for using Google Authentication",properties:{enabled:{description:"Is google OIDC enabled",type:"boolean",example:!1},clientId:{description:"The google client id, used to authenticate against google",type:"string",example:"your-client-id"},clientSecret:{type:"string",description:"The client secret used to authenticate the OAuth session used to log the user in",example:"your-client-secret"},unleashHostname:{description:"Name of the host allowed to access the Google authentication flow",type:"string",example:"localhost"},autoCreate:{description:"Should Unleash create users based on the emails coming back in the authentication reply from Google",type:"boolean",example:!0},emailDomains:{description:"A comma separated list of email domains that Unleash will auto create user accounts for.",type:"string",example:"getunleash.io,unleash-hosted.com"}},title:"googleSettingsSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/auth/google/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Get Google auth settings",description:{content:"Returns the current settings for Google Authentication (deprecated, please use OpenID instead)",type:"text/plain"},url:{path:["api","admin","auth","google","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/get-google-settings",id:"reference/api/unleash/get-google-settings",title:"Get Google auth settings",description:"Returns the current settings for Google Authentication (deprecated, please use OpenID instead)",source:"@site/docs/reference/api/unleash/get-google-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-google-settings",permalink:"/reference/api/unleash/get-google-settings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-google-settings",title:"Get Google auth settings",description:"Returns the current settings for Google Authentication (deprecated, please use OpenID instead)",sidebar_label:"Get Google auth settings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],description:"Returns the current settings for Google Authentication (deprecated, please use OpenID instead)",deprecated:!0,operationId:"getGoogleSettings",responses:{200:{description:"googleSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","clientSecret","unleashHostname"],description:"Configuration for using Google Authentication",properties:{enabled:{description:"Is google OIDC enabled",type:"boolean",example:!1},clientId:{description:"The google client id, used to authenticate against google",type:"string",example:"your-client-id"},clientSecret:{type:"string",description:"The client secret used to authenticate the OAuth session used to log the user in",example:"your-client-secret"},unleashHostname:{description:"Name of the host allowed to access the Google authentication flow",type:"string",example:"localhost"},autoCreate:{description:"Should Unleash create users based on the emails coming back in the authentication reply from Google",type:"boolean",example:!0},emailDomains:{description:"A comma separated list of email domains that Unleash will auto create user accounts for.",type:"string",example:"getunleash.io,unleash-hosted.com"}},title:"googleSettingsSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/auth/google/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Get Google auth settings",description:{content:"Returns the current settings for Google Authentication (deprecated, please use OpenID instead)",type:"text/plain"},url:{path:["api","admin","auth","google","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Log in",permalink:"/reference/api/unleash/login"},next:{title:"Set Google auth options",permalink:"/reference/api/unleash/set-google-settings"}},y={},b=[{value:"Request",id:"request",level:2}],f={toc:b};function T(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Get Google auth settings"),(0,s.kt)(o.Z,{method:"get",path:"/api/admin/auth/google/settings",mdxType:"MethodEndpoint"}),(0,s.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("admonition",{title:"deprecated",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,s.kt)("p",null,"Returns the current settings for Google Authentication (deprecated, please use OpenID instead)"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"googleSettingsSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Is google OIDC enabled",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"clientId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The google client id, used to authenticate against google",type:"string",example:"your-client-id"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"clientSecret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The client secret used to authenticate the OAuth session used to log the user in",example:"your-client-secret"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"unleashHostname",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the host allowed to access the Google authentication flow",type:"string",example:"localhost"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"autoCreate",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Should Unleash create users based on the emails coming back in the authentication reply from Google",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"emailDomains",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A comma separated list of email domains that Unleash will auto create user accounts for.",type:"string",example:"getunleash.io,unleash-hosted.com"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "enabled": false,\n  "clientId": "your-client-id",\n  "clientSecret": "your-client-secret",\n  "unleashHostname": "localhost",\n  "autoCreate": true,\n  "emailDomains": "getunleash.io,unleash-hosted.com"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);