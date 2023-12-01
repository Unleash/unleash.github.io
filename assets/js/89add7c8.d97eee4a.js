"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[73158],{2886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>b,frontMatter:()=>u,metadata:()=>y,toc:()=>f});var n=a(87462),i=(a(67294),a(3905)),s=a(80334),o=(a(11032),a(46062)),r=a(57138),p=a(21439),l=a(9531),m=a(15761),c=a(73418),d=a(92414),h=a(30433);const u={id:"get-api-tokens-by-name",title:"Get API tokens by name",description:"Retrieves all API tokens that match a given token name. Because token names are not unique, this endpoint will always return a list. If no tokens with the provided name exist, the list will be empty. Otherwise, it will contain all the tokens with the given name.",sidebar_label:"Get API tokens by name",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"getApiTokensByName",description:"Retrieves all API tokens that match a given token name. Because token names are not unique, this endpoint will always return a list. If no tokens with the provided name exist, the list will be empty. Otherwise, it will contain all the tokens with the given name.",responses:{200:{description:"apiTokensSchema",content:{"application/json":{schema:{type:"object",description:"An object with [Unleash API tokens](https://docs.getunleash.io/reference/api-tokens-and-client-keys)",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",description:"A list of Unleash API tokens.",items:{type:"object",additionalProperties:!1,required:["secret","tokenName","type","project","projects","createdAt"],description:"An overview of an [Unleash API token](https://docs.getunleash.io/reference/api-tokens-and-client-keys).",properties:{secret:{type:"string",description:"The token used for authentication.",example:"project:environment.xyzrandomstring"},username:{type:"string",deprecated:!0,description:"This property was deprecated in Unleash v5. Prefer the `tokenName` property instead.",example:"a-name"},tokenName:{type:"string",description:"A unique name for this particular token",example:"some-user"},type:{type:"string",enum:["client","admin","frontend"],description:"The type of API token",example:"client"},environment:{type:"string",description:"The environment the token has access to. `*` if it has access to all environments.",example:"development"},project:{type:"string",description:"The project this token belongs to.",example:"developerexperience"},projects:{type:"array",description:"The list of projects this token has access to. If the token has access to specific projects they will be listed here. If the token has access to all projects it will be represented as `[*]`",items:{type:"string"},example:["developerexperience","enterprisegrowth"]},expiresAt:{type:"string",format:"date-time",nullable:!0,description:"The token's expiration date. NULL if the token doesn't have an expiration set.",example:"2023-04-19T08:15:14.000Z"},createdAt:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created."},seenAt:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. NULL if the token has not yet been used for authentication."},alias:{type:"string",nullable:!0,description:"Alias is no longer in active use and will often be NULL. It's kept around as a way of allowing old proxy tokens created with the old metadata format to keep working.",example:"randomid-or-some-alias"}},title:"apiTokenSchema"}}},title:"apiTokensSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/api-tokens/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Get API tokens by name",description:{content:"Retrieves all API tokens that match a given token name. Because token names are not unique, this endpoint will always return a list. If no tokens with the provided name exist, the list will be empty. Otherwise, it will contain all the tokens with the given name.",type:"text/plain"},url:{path:["api","admin","api-tokens",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},k=void 0,y={unversionedId:"reference/api/unleash/get-api-tokens-by-name",id:"reference/api/unleash/get-api-tokens-by-name",title:"Get API tokens by name",description:"Retrieves all API tokens that match a given token name. Because token names are not unique, this endpoint will always return a list. If no tokens with the provided name exist, the list will be empty. Otherwise, it will contain all the tokens with the given name.",source:"@site/docs/reference/api/unleash/get-api-tokens-by-name.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-api-tokens-by-name",permalink:"/reference/api/unleash/get-api-tokens-by-name",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-api-tokens-by-name",title:"Get API tokens by name",description:"Retrieves all API tokens that match a given token name. Because token names are not unique, this endpoint will always return a list. If no tokens with the provided name exist, the list will be empty. Otherwise, it will contain all the tokens with the given name.",sidebar_label:"Get API tokens by name",hide_title:!0,hide_table_of_contents:!0,api:{tags:["API tokens"],operationId:"getApiTokensByName",description:"Retrieves all API tokens that match a given token name. Because token names are not unique, this endpoint will always return a list. If no tokens with the provided name exist, the list will be empty. Otherwise, it will contain all the tokens with the given name.",responses:{200:{description:"apiTokensSchema",content:{"application/json":{schema:{type:"object",description:"An object with [Unleash API tokens](https://docs.getunleash.io/reference/api-tokens-and-client-keys)",additionalProperties:!1,required:["tokens"],properties:{tokens:{type:"array",description:"A list of Unleash API tokens.",items:{type:"object",additionalProperties:!1,required:["secret","tokenName","type","project","projects","createdAt"],description:"An overview of an [Unleash API token](https://docs.getunleash.io/reference/api-tokens-and-client-keys).",properties:{secret:{type:"string",description:"The token used for authentication.",example:"project:environment.xyzrandomstring"},username:{type:"string",deprecated:!0,description:"This property was deprecated in Unleash v5. Prefer the `tokenName` property instead.",example:"a-name"},tokenName:{type:"string",description:"A unique name for this particular token",example:"some-user"},type:{type:"string",enum:["client","admin","frontend"],description:"The type of API token",example:"client"},environment:{type:"string",description:"The environment the token has access to. `*` if it has access to all environments.",example:"development"},project:{type:"string",description:"The project this token belongs to.",example:"developerexperience"},projects:{type:"array",description:"The list of projects this token has access to. If the token has access to specific projects they will be listed here. If the token has access to all projects it will be represented as `[*]`",items:{type:"string"},example:["developerexperience","enterprisegrowth"]},expiresAt:{type:"string",format:"date-time",nullable:!0,description:"The token's expiration date. NULL if the token doesn't have an expiration set.",example:"2023-04-19T08:15:14.000Z"},createdAt:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created."},seenAt:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. NULL if the token has not yet been used for authentication."},alias:{type:"string",nullable:!0,description:"Alias is no longer in active use and will often be NULL. It's kept around as a way of allowing old proxy tokens created with the old metadata format to keep working.",example:"randomid-or-some-alias"}},title:"apiTokenSchema"}}},title:"apiTokensSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/api-tokens/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Get API tokens by name",description:{content:"Retrieves all API tokens that match a given token name. Because token names are not unique, this endpoint will always return a list. If no tokens with the provided name exist, the list will be empty. Otherwise, it will contain all the tokens with the given name.",type:"text/plain"},url:{path:["api","admin","api-tokens",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Create API token",permalink:"/reference/api/unleash/create-api-token"},next:{title:"Update API token",permalink:"/reference/api/unleash/update-api-token"}},g={},f=[{value:"Request",id:"request",level:2}],v={toc:f};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Get API tokens by name"),(0,i.kt)(o.Z,{method:"get",path:"/api/admin/api-tokens/{name}",mdxType:"MethodEndpoint"}),(0,i.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Retrieves all API tokens that match a given token name. Because token names are not unique, this endpoint will always return a list. If no tokens with the provided name exist, the list will be empty. Otherwise, it will contain all the tokens with the given name."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"apiTokensSchema")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"tokens"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"A list of Unleash API tokens.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(c.Z,{collapsible:!1,name:"secret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The token used for authentication.",example:"project:environment.xyzrandomstring"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",deprecated:!0,description:"This property was deprecated in Unleash v5. Prefer the `tokenName` property instead.",example:"a-name"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"tokenName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A unique name for this particular token",example:"some-user"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`client`, `admin`, `frontend`]",schema:{type:"string",enum:["client","admin","frontend"],description:"The type of API token",example:"client"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The environment the token has access to. `*` if it has access to all environments.",example:"development"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"project",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The project this token belongs to.",example:"developerexperience"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"projects",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The list of projects this token has access to. If the token has access to specific projects they will be listed here. If the token has access to all projects it will be represented as `[*]`",items:{type:"string"},example:["developerexperience","enterprisegrowth"]},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0,description:"The token's expiration date. NULL if the token doesn't have an expiration set.",example:"2023-04-19T08:15:14.000Z"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. NULL if the token has not yet been used for authentication."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"alias",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"Alias is no longer in active use and will often be NULL. It's kept around as a way of allowing old proxy tokens created with the old metadata format to keep working.",example:"randomid-or-some-alias"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "tokens": [\n    {\n      "secret": "project:environment.xyzrandomstring",\n      "tokenName": "some-user",\n      "type": "client",\n      "environment": "development",\n      "project": "developerexperience",\n      "projects": [\n        "developerexperience",\n        "enterprisegrowth"\n      ],\n      "expiresAt": "2023-04-19T08:15:14.000Z",\n      "createdAt": "2023-04-19T08:15:14.000Z",\n      "seenAt": "2023-04-19T08:15:14.000Z",\n      "alias": "randomid-or-some-alias"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);