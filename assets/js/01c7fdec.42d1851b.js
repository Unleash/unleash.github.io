"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[67731],{89760:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>T,frontMatter:()=>h,metadata:()=>u,toc:()=>k});var n=a(87462),i=(a(67294),a(3905)),o=a(80334),s=(a(11032),a(46062)),r=a(57138),p=a(21439),m=(a(9531),a(15761)),l=a(73418),c=a(92414),d=a(30433);const h={id:"create-api-token",title:"Create API token",description:"Create an API token of a specific type: one of client, admin, frontend.",sidebar_label:"Create API token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"createApiToken",requestBody:{description:"createApiTokenSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"The data required to create an [Unleash API token](https://docs.getunleash.io/reference/api-tokens-and-client-keys).",oneOf:[{required:["type","tokenName"],type:"object",properties:{expiresAt:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},type:{type:"string",pattern:"^[Aa][Dd][Mm][Ii][Nn]$",description:'An admin token. Must be the string "admin" (not case sensitive).',example:"admin"},tokenName:{type:"string",description:"The name of the token.",example:"token-64522"}}},{required:["type","username"],type:"object",properties:{expiresAt:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},type:{type:"string",pattern:"^[Aa][Dd][Mm][Ii][Nn]$",description:'An admin token. Must be the string "admin" (not case sensitive).',example:"admin"},username:{deprecated:!0,type:"string",description:"The name of the token. This property is deprecated. Use `tokenName` instead.",example:"token-64523"}}},{required:["type","tokenName"],type:"object",properties:{expiresAt:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},type:{type:"string",pattern:"^([Cc][Ll][Ii][Ee][Nn][Tt]|[Ff][Rr][Oo][Nn][Tt][Ee][Nn][Dd])$",description:'A client or frontend token. Must be one of the strings "client" or "frontend" (not case sensitive).',example:"frontend"},environment:{type:"string",description:'The environment that the token should be valid for. Defaults to "default"',example:"development"},project:{type:"string",description:'The project that the token should be valid for. Defaults to "*" meaning every project. This property is mutually incompatible with the `projects` property. If you specify one, you cannot specify the other.',example:"project-851"},projects:{type:"array",description:"A list of projects that the token should be valid for. This property is mutually incompatible with the `project` property. If you specify one, you cannot specify the other.",example:["project-851","project-852"],items:{type:"string"}},tokenName:{type:"string",description:"The name of the token.",example:"token-64522"}}},{required:["type","username"],type:"object",properties:{expiresAt:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},type:{type:"string",pattern:"^([Cc][Ll][Ii][Ee][Nn][Tt]|[Ff][Rr][Oo][Nn][Tt][Ee][Nn][Dd])$",description:'A client or frontend token. Must be one of the strings "client" or "frontend" (not case sensitive).',example:"frontend"},environment:{type:"string",description:'The environment that the token should be valid for. Defaults to "default"',example:"development"},project:{type:"string",description:'The project that the token should be valid for. Defaults to "*" meaning every project. This property is mutually incompatible with the `projects` property. If you specify one, you cannot specify the other.',example:"project-851"},projects:{type:"array",description:"A list of projects that the token should be valid for. This property is mutually incompatible with the `project` property. If you specify one, you cannot specify the other.",example:["project-851","project-852"],items:{type:"string"}},username:{deprecated:!0,type:"string",description:"The name of the token. This property is deprecated. Use `tokenName` instead.",example:"token-64523"}}}],title:"createApiTokenSchema"}}}},description:"Create an API token of a specific type: one of client, admin, frontend.",responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["secret","tokenName","type","project","projects","createdAt"],description:"An overview of an [Unleash API token](https://docs.getunleash.io/reference/api-tokens-and-client-keys).",properties:{secret:{type:"string",description:"The token used for authentication.",example:"project:environment.xyzrandomstring"},username:{type:"string",deprecated:!0,description:"This property was deprecated in Unleash v5. Prefer the `tokenName` property instead.",example:"a-name"},tokenName:{type:"string",description:"A unique name for this particular token",example:"some-user"},type:{type:"string",enum:["client","admin","frontend"],description:"The type of API token",example:"client"},environment:{type:"string",description:"The environment the token has access to. `*` if it has access to all environments.",example:"development"},project:{type:"string",description:"The project this token belongs to.",example:"developerexperience"},projects:{type:"array",description:"The list of projects this token has access to. If the token has access to specific projects they will be listed here. If the token has access to all projects it will be represented as `[*]`",items:{type:"string"},example:["developerexperience","enterprisegrowth"]},expiresAt:{type:"string",format:"date-time",nullable:!0,description:"The token's expiration date. NULL if the token doesn't have an expiration set.",example:"2023-04-19T08:15:14.000Z"},createdAt:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created."},seenAt:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. NULL if the token has not yet been used for authentication."},alias:{type:"string",nullable:!0,description:"Alias is no longer in active use and will often be NULL. It's kept around as a way of allowing old proxy tokens created with the old metadata format to keep working.",example:"randomid-or-some-alias"}},title:"apiTokenSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/api-tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{expiresAt:"2023-07-04T11:26:24+02:00",type:"admin",tokenName:"token-64522"},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Create API token",description:{content:"Create an API token of a specific type: one of client, admin, frontend.",type:"text/plain"},url:{path:["api","admin","api-tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,u={unversionedId:"reference/api/unleash/create-api-token",id:"reference/api/unleash/create-api-token",title:"Create API token",description:"Create an API token of a specific type: one of client, admin, frontend.",source:"@site/docs/reference/api/unleash/create-api-token.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-api-token",permalink:"/reference/api/unleash/create-api-token",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-api-token",title:"Create API token",description:"Create an API token of a specific type: one of client, admin, frontend.",sidebar_label:"Create API token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"createApiToken",requestBody:{description:"createApiTokenSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"The data required to create an [Unleash API token](https://docs.getunleash.io/reference/api-tokens-and-client-keys).",oneOf:[{required:["type","tokenName"],type:"object",properties:{expiresAt:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},type:{type:"string",pattern:"^[Aa][Dd][Mm][Ii][Nn]$",description:'An admin token. Must be the string "admin" (not case sensitive).',example:"admin"},tokenName:{type:"string",description:"The name of the token.",example:"token-64522"}}},{required:["type","username"],type:"object",properties:{expiresAt:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},type:{type:"string",pattern:"^[Aa][Dd][Mm][Ii][Nn]$",description:'An admin token. Must be the string "admin" (not case sensitive).',example:"admin"},username:{deprecated:!0,type:"string",description:"The name of the token. This property is deprecated. Use `tokenName` instead.",example:"token-64523"}}},{required:["type","tokenName"],type:"object",properties:{expiresAt:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},type:{type:"string",pattern:"^([Cc][Ll][Ii][Ee][Nn][Tt]|[Ff][Rr][Oo][Nn][Tt][Ee][Nn][Dd])$",description:'A client or frontend token. Must be one of the strings "client" or "frontend" (not case sensitive).',example:"frontend"},environment:{type:"string",description:'The environment that the token should be valid for. Defaults to "default"',example:"development"},project:{type:"string",description:'The project that the token should be valid for. Defaults to "*" meaning every project. This property is mutually incompatible with the `projects` property. If you specify one, you cannot specify the other.',example:"project-851"},projects:{type:"array",description:"A list of projects that the token should be valid for. This property is mutually incompatible with the `project` property. If you specify one, you cannot specify the other.",example:["project-851","project-852"],items:{type:"string"}},tokenName:{type:"string",description:"The name of the token.",example:"token-64522"}}},{required:["type","username"],type:"object",properties:{expiresAt:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},type:{type:"string",pattern:"^([Cc][Ll][Ii][Ee][Nn][Tt]|[Ff][Rr][Oo][Nn][Tt][Ee][Nn][Dd])$",description:'A client or frontend token. Must be one of the strings "client" or "frontend" (not case sensitive).',example:"frontend"},environment:{type:"string",description:'The environment that the token should be valid for. Defaults to "default"',example:"development"},project:{type:"string",description:'The project that the token should be valid for. Defaults to "*" meaning every project. This property is mutually incompatible with the `projects` property. If you specify one, you cannot specify the other.',example:"project-851"},projects:{type:"array",description:"A list of projects that the token should be valid for. This property is mutually incompatible with the `project` property. If you specify one, you cannot specify the other.",example:["project-851","project-852"],items:{type:"string"}},username:{deprecated:!0,type:"string",description:"The name of the token. This property is deprecated. Use `tokenName` instead.",example:"token-64523"}}}],title:"createApiTokenSchema"}}}},description:"Create an API token of a specific type: one of client, admin, frontend.",responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["secret","tokenName","type","project","projects","createdAt"],description:"An overview of an [Unleash API token](https://docs.getunleash.io/reference/api-tokens-and-client-keys).",properties:{secret:{type:"string",description:"The token used for authentication.",example:"project:environment.xyzrandomstring"},username:{type:"string",deprecated:!0,description:"This property was deprecated in Unleash v5. Prefer the `tokenName` property instead.",example:"a-name"},tokenName:{type:"string",description:"A unique name for this particular token",example:"some-user"},type:{type:"string",enum:["client","admin","frontend"],description:"The type of API token",example:"client"},environment:{type:"string",description:"The environment the token has access to. `*` if it has access to all environments.",example:"development"},project:{type:"string",description:"The project this token belongs to.",example:"developerexperience"},projects:{type:"array",description:"The list of projects this token has access to. If the token has access to specific projects they will be listed here. If the token has access to all projects it will be represented as `[*]`",items:{type:"string"},example:["developerexperience","enterprisegrowth"]},expiresAt:{type:"string",format:"date-time",nullable:!0,description:"The token's expiration date. NULL if the token doesn't have an expiration set.",example:"2023-04-19T08:15:14.000Z"},createdAt:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created."},seenAt:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. NULL if the token has not yet been used for authentication."},alias:{type:"string",nullable:!0,description:"Alias is no longer in active use and will often be NULL. It's kept around as a way of allowing old proxy tokens created with the old metadata format to keep working.",example:"randomid-or-some-alias"}},title:"apiTokenSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/api-tokens",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{expiresAt:"2023-07-04T11:26:24+02:00",type:"admin",tokenName:"token-64522"},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Create API token",description:{content:"Create an API token of a specific type: one of client, admin, frontend.",type:"text/plain"},url:{path:["api","admin","api-tokens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get API tokens",permalink:"/reference/api/unleash/get-all-api-tokens"},next:{title:"Get API tokens by name",permalink:"/reference/api/unleash/get-api-tokens-by-name"}},f={},k=[{value:"Request",id:"request",level:2}],g={toc:k};function T(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Create API token"),(0,i.kt)(s.Z,{method:"post",path:"/api/admin/api-tokens",mdxType:"MethodEndpoint"}),(0,i.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Create an API token of a specific type: one of client, admin, frontend."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"createApiTokenSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[Aa][Dd][Mm][Ii][Nn]$`",schema:{type:"string",pattern:"^[Aa][Dd][Mm][Ii][Nn]$",description:'An admin token. Must be the string "admin" (not case sensitive).',example:"admin"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"tokenName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the token.",example:"token-64522"},mdxType:"SchemaItem"})),(0,i.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[Aa][Dd][Mm][Ii][Nn]$`",schema:{type:"string",pattern:"^[Aa][Dd][Mm][Ii][Nn]$",description:'An admin token. Must be the string "admin" (not case sensitive).',example:"admin"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{deprecated:!0,type:"string",description:"The name of the token. This property is deprecated. Use `tokenName` instead.",example:"token-64523"},mdxType:"SchemaItem"})),(0,i.kt)(d.Z,{label:"MOD3",value:"2-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^([Cc][Ll][Ii][Ee][Nn][Tt]|[Ff][Rr][Oo][Nn][Tt][Ee][Nn][Dd])$`",schema:{type:"string",pattern:"^([Cc][Ll][Ii][Ee][Nn][Tt]|[Ff][Rr][Oo][Nn][Tt][Ee][Nn][Dd])$",description:'A client or frontend token. Must be one of the strings "client" or "frontend" (not case sensitive).',example:"frontend"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The environment that the token should be valid for. Defaults to "default"',example:"development"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The project that the token should be valid for. Defaults to "*" meaning every project. This property is mutually incompatible with the `projects` property. If you specify one, you cannot specify the other.',example:"project-851"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"A list of projects that the token should be valid for. This property is mutually incompatible with the `project` property. If you specify one, you cannot specify the other.",example:["project-851","project-852"],items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"tokenName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the token.",example:"token-64522"},mdxType:"SchemaItem"})),(0,i.kt)(d.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The time when this token should expire.",example:"2023-07-04T11:26:24+02:00"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^([Cc][Ll][Ii][Ee][Nn][Tt]|[Ff][Rr][Oo][Nn][Tt][Ee][Nn][Dd])$`",schema:{type:"string",pattern:"^([Cc][Ll][Ii][Ee][Nn][Tt]|[Ff][Rr][Oo][Nn][Tt][Ee][Nn][Dd])$",description:'A client or frontend token. Must be one of the strings "client" or "frontend" (not case sensitive).',example:"frontend"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The environment that the token should be valid for. Defaults to "default"',example:"development"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The project that the token should be valid for. Defaults to "*" meaning every project. This property is mutually incompatible with the `projects` property. If you specify one, you cannot specify the other.',example:"project-851"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"projects",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"A list of projects that the token should be valid for. This property is mutually incompatible with the `project` property. If you specify one, you cannot specify the other.",example:["project-851","project-852"],items:{type:"string"}},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{deprecated:!0,type:"string",description:"The name of the token. This property is deprecated. Use `tokenName` instead.",example:"token-64523"},mdxType:"SchemaItem"})))))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The resource was successfully created.")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"location"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null,(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"The location of the newly created resource.")))))),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"secret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The token used for authentication.",example:"project:environment.xyzrandomstring"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",deprecated:!0,description:"This property was deprecated in Unleash v5. Prefer the `tokenName` property instead.",example:"a-name"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"tokenName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A unique name for this particular token",example:"some-user"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`client`, `admin`, `frontend`]",schema:{type:"string",enum:["client","admin","frontend"],description:"The type of API token",example:"client"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The environment the token has access to. `*` if it has access to all environments.",example:"development"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"project",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The project this token belongs to.",example:"developerexperience"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"projects",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The list of projects this token has access to. If the token has access to specific projects they will be listed here. If the token has access to all projects it will be represented as `[*]`",items:{type:"string"},example:["developerexperience","enterprisegrowth"]},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0,description:"The token's expiration date. NULL if the token doesn't have an expiration set.",example:"2023-04-19T08:15:14.000Z"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. NULL if the token has not yet been used for authentication."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"alias",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"Alias is no longer in active use and will often be NULL. It's kept around as a way of allowing old proxy tokens created with the old metadata format to keep working.",example:"randomid-or-some-alias"},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "secret": "project:environment.xyzrandomstring",\n  "tokenName": "some-user",\n  "type": "client",\n  "environment": "development",\n  "project": "developerexperience",\n  "projects": [\n    "developerexperience",\n    "enterprisegrowth"\n  ],\n  "expiresAt": "2023-04-19T08:15:14.000Z",\n  "createdAt": "2023-04-19T08:15:14.000Z",\n  "seenAt": "2023-04-19T08:15:14.000Z",\n  "alias": "randomid-or-some-alias"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.')),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTypeerror",\n  "message": "We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);