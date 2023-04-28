"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6597],{4082:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var i=a(87462),n=(a(67294),a(3905)),o=a(80334),s=(a(11032),a(46062)),r=a(21439),l=(a(9531),a(15761)),p=a(73418),c=a(92414),m=a(11666);const d={id:"get-oidc-settings",title:"getOidcSettings",description:"getOidcSettings",sidebar_label:"getOidcSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getOidcSettings",responses:{200:{description:"oidcSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","secret"],description:"Settings for configuring OpenID Connect as a login provider for Unleash",properties:{enabled:{description:"`true` if OpenID connect is turned on for this instance, otherwise `false`",example:!0,type:"boolean"},discoverUrl:{description:"The [.well-known OpenID discover URL](https://swagger.io/docs/specification/authentication/openid-connect-discovery/)",example:"https://myoidchost.azure.com/.well-known/openid-configuration",type:"string"},clientId:{description:"The OIDC client ID of this application.",example:"FB87266D-CDDB-4BCF-BB1F-8392FD0EDC1B",type:"string"},secret:{description:"Shared secret from OpenID server. Used to authenticate login requests",type:"string",example:"qjcVfeFjEfoYAF3AEsX2IMUWYuUzAbXO"},autoCreate:{description:"Auto create users based on email addresses from login tokens",type:"boolean"},enableSingleSignOut:{description:"Support Single sign out when user clicks logout in Unleash. If `true` user is signed out of all OpenID Connect sessions against the clientId they may have active",type:"boolean"},defaultRootRole:{description:"[Default role](https://docs.getunleash.io/reference/rbac#standard-roles) granted to users auto-created from email. Only relevant if autoCreate is `true`",type:"string",enum:["Viewer","Editor","Admin"]},emailDomains:{description:"Comma separated list of email domains that are automatically approved for an account in the server. Only relevant if autoCreate is `true`",type:"string",example:"getunleash.io,getunleash.ai"},acrValues:{description:"Authentication Context Class Reference, used to request extra values in the acr claim returned from the server. If multiple values are required, they should be space separated. \n Consult [the OIDC reference](https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint) for more information \n",type:"string",example:"urn:okta:loa:2fa:any phr"},idTokenSigningAlgorithm:{description:"The signing algorithm used to sign our token. Refer to the [JWT signatures](https://jwt.io/introduction) documentation for more information.",type:"string",example:"RS256",enum:["RS256","RS384","RS512"]}},title:"oidcSettingsSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},description:"getOidcSettings",method:"get",path:"/api/admin/auth/oidc/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"get Oidc Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","oidc","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,h={unversionedId:"reference/api/unleash/get-oidc-settings",id:"reference/api/unleash/get-oidc-settings",title:"getOidcSettings",description:"getOidcSettings",source:"@site/docs/reference/api/unleash/get-oidc-settings.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-oidc-settings",permalink:"/reference/api/unleash/get-oidc-settings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-oidc-settings",title:"getOidcSettings",description:"getOidcSettings",sidebar_label:"getOidcSettings",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Auth"],operationId:"getOidcSettings",responses:{200:{description:"oidcSettingsSchema",content:{"application/json":{schema:{type:"object",required:["clientId","secret"],description:"Settings for configuring OpenID Connect as a login provider for Unleash",properties:{enabled:{description:"`true` if OpenID connect is turned on for this instance, otherwise `false`",example:!0,type:"boolean"},discoverUrl:{description:"The [.well-known OpenID discover URL](https://swagger.io/docs/specification/authentication/openid-connect-discovery/)",example:"https://myoidchost.azure.com/.well-known/openid-configuration",type:"string"},clientId:{description:"The OIDC client ID of this application.",example:"FB87266D-CDDB-4BCF-BB1F-8392FD0EDC1B",type:"string"},secret:{description:"Shared secret from OpenID server. Used to authenticate login requests",type:"string",example:"qjcVfeFjEfoYAF3AEsX2IMUWYuUzAbXO"},autoCreate:{description:"Auto create users based on email addresses from login tokens",type:"boolean"},enableSingleSignOut:{description:"Support Single sign out when user clicks logout in Unleash. If `true` user is signed out of all OpenID Connect sessions against the clientId they may have active",type:"boolean"},defaultRootRole:{description:"[Default role](https://docs.getunleash.io/reference/rbac#standard-roles) granted to users auto-created from email. Only relevant if autoCreate is `true`",type:"string",enum:["Viewer","Editor","Admin"]},emailDomains:{description:"Comma separated list of email domains that are automatically approved for an account in the server. Only relevant if autoCreate is `true`",type:"string",example:"getunleash.io,getunleash.ai"},acrValues:{description:"Authentication Context Class Reference, used to request extra values in the acr claim returned from the server. If multiple values are required, they should be space separated. \n Consult [the OIDC reference](https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint) for more information \n",type:"string",example:"urn:okta:loa:2fa:any phr"},idTokenSigningAlgorithm:{description:"The signing algorithm used to sign our token. Refer to the [JWT signatures](https://jwt.io/introduction) documentation for more information.",type:"string",example:"RS256",enum:["RS256","RS384","RS512"]}},title:"oidcSettingsSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},description:"getOidcSettings",method:"get",path:"/api/admin/auth/oidc/settings",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"get Oidc Settings",description:{type:"text/plain"},url:{path:["api","admin","auth","oidc","settings"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"setSamlSettings",permalink:"/reference/api/unleash/set-saml-settings"},next:{title:"setOidcSettings",permalink:"/reference/api/unleash/set-oidc-settings"}},g={},f=[],y={toc:f};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"getOidcSettings"),(0,n.kt)(s.Z,{method:"get",path:"/api/admin/auth/oidc/settings",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"getOidcSettings"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"oidcSettingsSchema")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"`true` if OpenID connect is turned on for this instance, otherwise `false`",example:!0,type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"discoverUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The [.well-known OpenID discover URL](https://swagger.io/docs/specification/authentication/openid-connect-discovery/)",example:"https://myoidchost.azure.com/.well-known/openid-configuration",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"clientId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The OIDC client ID of this application.",example:"FB87266D-CDDB-4BCF-BB1F-8392FD0EDC1B",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"secret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Shared secret from OpenID server. Used to authenticate login requests",type:"string",example:"qjcVfeFjEfoYAF3AEsX2IMUWYuUzAbXO"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"autoCreate",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Auto create users based on email addresses from login tokens",type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"enableSingleSignOut",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Support Single sign out when user clicks logout in Unleash. If `true` user is signed out of all OpenID Connect sessions against the clientId they may have active",type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"defaultRootRole",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Viewer`, `Editor`, `Admin`]",schema:{description:"[Default role](https://docs.getunleash.io/reference/rbac#standard-roles) granted to users auto-created from email. Only relevant if autoCreate is `true`",type:"string",enum:["Viewer","Editor","Admin"]},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"emailDomains",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Comma separated list of email domains that are automatically approved for an account in the server. Only relevant if autoCreate is `true`",type:"string",example:"getunleash.io,getunleash.ai"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"acrValues",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Authentication Context Class Reference, used to request extra values in the acr claim returned from the server. If multiple values are required, they should be space separated. \n Consult [the OIDC reference](https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint) for more information \n",type:"string",example:"urn:okta:loa:2fa:any phr"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"idTokenSigningAlgorithm",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`RS256`, `RS384`, `RS512`]",schema:{description:"The signing algorithm used to sign our token. Refer to the [JWT signatures](https://jwt.io/introduction) documentation for more information.",type:"string",example:"RS256",enum:["RS256","RS384","RS512"]},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "enabled": true,\n  "discoverUrl": "https://myoidchost.azure.com/.well-known/openid-configuration",\n  "clientId": "FB87266D-CDDB-4BCF-BB1F-8392FD0EDC1B",\n  "secret": "qjcVfeFjEfoYAF3AEsX2IMUWYuUzAbXO",\n  "autoCreate": true,\n  "enableSingleSignOut": true,\n  "defaultRootRole": "Viewer",\n  "emailDomains": "getunleash.io,getunleash.ai",\n  "acrValues": "urn:okta:loa:2fa:any phr",\n  "idTokenSigningAlgorithm": "RS256"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The request data does not match what we expect.")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);