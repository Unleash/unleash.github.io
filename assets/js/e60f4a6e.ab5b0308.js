"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[99392],{71225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>h,metadata:()=>y,toc:()=>v});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),o=(a(11032),a(46062)),r=a(57138),c=a(21439),l=(a(9531),a(15761)),p=a(73418),m=a(92414),d=a(30433);const h={id:"get-service-accounts",title:"List service accounts.",description:"Returns the list of all service accounts.",sidebar_label:"List service accounts.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Service Accounts"],operationId:"getServiceAccounts",description:"Returns the list of all service accounts.",responses:{200:{description:"serviceAccountsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["serviceAccounts"],description:"Represents a list of service accounts, and includes a list of root roles they reference",properties:{serviceAccounts:{description:"A list of service accounts",type:"array",items:{type:"object",additionalProperties:!1,required:["id"],description:"Represents a [service account](https://docs.getunleash.io/reference/service-accounts). Service accounts are used to let systems interact with the Unleash API.",properties:{id:{type:"number",description:"The service account id",example:54321},isAPI:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: for internal use only, should not be exposed through the API"},name:{type:"string",description:"The name of the service account",example:"My Service Account"},email:{type:"string",example:"noemail@getunleash.io",deprecated:!0,description:"Deprecated: service accounts don't have emails associated with them"},username:{type:"string",description:"The service account username",example:"my-service-account"},imageUrl:{type:"string",description:"The service account image url",example:"https://example.com/my-service-account.png"},inviteLink:{type:"string",deprecated:!0,example:"https://example.com/invite-link",description:"Deprecated: service accounts cannot be invited via an invitation link"},loginAttempts:{type:"number",deprecated:!0,example:0,description:"Deprecated: service accounts cannot log in to Unleash"},emailSent:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: internal use only"},rootRole:{type:"integer",description:"The root role id associated with the service account",example:1},seenAt:{type:"string",format:"date-time",example:null,nullable:!0,deprecated:!0,description:"Deprecated. This property is always `null`. To find out when a service account was last seen, check its `tokens` list and refer to each token's `lastSeen` property instead."},createdAt:{type:"string",format:"date-time",description:"The service account creation date",example:"2021-01-01T00:00:00.000Z"},tokens:{type:"array",description:"The list of tokens associated with the service account",items:{type:"object",description:"An overview of a [Personal Access Token](https://docs.getunleash.io/how-to/how-to-create-personal-access-tokens).",properties:{id:{type:"integer",description:"The unique identification number for this Personal Access Token. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:1,minimum:1},secret:{type:"string",description:"The token used for authentication. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:"user:xyzrandomstring"},expiresAt:{type:"string",format:"date-time",description:"The token's expiration date.",example:"2023-04-19T08:15:14.000Z"},createdAt:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},seenAt:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. `null` if it has not been used yet. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"}},title:"patSchema"}}},title:"serviceAccountSchema"}},rootRoles:{description:"A list of root roles that are referenced from service account objects in the `serviceAccounts` list",type:"array",items:{type:"object",description:"A role holds permissions to allow Unleash to decide what actions a role holder is allowed to perform",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"integer",description:"The role id",example:9,minimum:0},type:{description:"A role can either be a global root role (applies to all projects) or a project role",type:"string",example:"root"},name:{description:"The name of the role",type:"string",example:"Editor"},description:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."}},title:"roleSchema"}}},title:"serviceAccountsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/service-account",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.8.1"},postman:{name:"List service accounts.",description:{content:"Returns the list of all service accounts.",type:"text/plain"},url:{path:["api","admin","service-account"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/get-service-accounts",id:"reference/api/unleash/get-service-accounts",title:"List service accounts.",description:"Returns the list of all service accounts.",source:"@site/docs/reference/api/unleash/get-service-accounts.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-service-accounts",permalink:"/reference/api/unleash/get-service-accounts",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-service-accounts",title:"List service accounts.",description:"Returns the list of all service accounts.",sidebar_label:"List service accounts.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Service Accounts"],operationId:"getServiceAccounts",description:"Returns the list of all service accounts.",responses:{200:{description:"serviceAccountsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["serviceAccounts"],description:"Represents a list of service accounts, and includes a list of root roles they reference",properties:{serviceAccounts:{description:"A list of service accounts",type:"array",items:{type:"object",additionalProperties:!1,required:["id"],description:"Represents a [service account](https://docs.getunleash.io/reference/service-accounts). Service accounts are used to let systems interact with the Unleash API.",properties:{id:{type:"number",description:"The service account id",example:54321},isAPI:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: for internal use only, should not be exposed through the API"},name:{type:"string",description:"The name of the service account",example:"My Service Account"},email:{type:"string",example:"noemail@getunleash.io",deprecated:!0,description:"Deprecated: service accounts don't have emails associated with them"},username:{type:"string",description:"The service account username",example:"my-service-account"},imageUrl:{type:"string",description:"The service account image url",example:"https://example.com/my-service-account.png"},inviteLink:{type:"string",deprecated:!0,example:"https://example.com/invite-link",description:"Deprecated: service accounts cannot be invited via an invitation link"},loginAttempts:{type:"number",deprecated:!0,example:0,description:"Deprecated: service accounts cannot log in to Unleash"},emailSent:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: internal use only"},rootRole:{type:"integer",description:"The root role id associated with the service account",example:1},seenAt:{type:"string",format:"date-time",example:null,nullable:!0,deprecated:!0,description:"Deprecated. This property is always `null`. To find out when a service account was last seen, check its `tokens` list and refer to each token's `lastSeen` property instead."},createdAt:{type:"string",format:"date-time",description:"The service account creation date",example:"2021-01-01T00:00:00.000Z"},tokens:{type:"array",description:"The list of tokens associated with the service account",items:{type:"object",description:"An overview of a [Personal Access Token](https://docs.getunleash.io/how-to/how-to-create-personal-access-tokens).",properties:{id:{type:"integer",description:"The unique identification number for this Personal Access Token. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:1,minimum:1},secret:{type:"string",description:"The token used for authentication. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:"user:xyzrandomstring"},expiresAt:{type:"string",format:"date-time",description:"The token's expiration date.",example:"2023-04-19T08:15:14.000Z"},createdAt:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},seenAt:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. `null` if it has not been used yet. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"}},title:"patSchema"}}},title:"serviceAccountSchema"}},rootRoles:{description:"A list of root roles that are referenced from service account objects in the `serviceAccounts` list",type:"array",items:{type:"object",description:"A role holds permissions to allow Unleash to decide what actions a role holder is allowed to perform",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"integer",description:"The role id",example:9,minimum:0},type:{description:"A role can either be a global root role (applies to all projects) or a project role",type:"string",example:"root"},name:{description:"The name of the role",type:"string",example:"Editor"},description:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."}},title:"roleSchema"}}},title:"serviceAccountsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/service-account",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.8.1"},postman:{name:"List service accounts.",description:{content:"Returns the list of all service accounts.",type:"text/plain"},url:{path:["api","admin","service-account"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Service Accounts",permalink:"/reference/api/unleash/service-accounts"},next:{title:"Create a service account.",permalink:"/reference/api/unleash/create-service-account"}},g={},v=[{value:"Request",id:"request",level:2}],f={toc:v};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"List service accounts."),(0,s.kt)(o.Z,{method:"get",path:"/api/admin/service-account",mdxType:"MethodEndpoint"}),(0,s.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Returns the list of all service accounts."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"serviceAccountsSchema")),(0,s.kt)("div",null,(0,s.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"serviceAccounts"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of service accounts")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The service account id",example:54321},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: for internal use only, should not be exposed through the API"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the service account",example:"My Service Account"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"noemail@getunleash.io",deprecated:!0,description:"Deprecated: service accounts don't have emails associated with them"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The service account username",example:"my-service-account"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The service account image url",example:"https://example.com/my-service-account.png"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",deprecated:!0,example:"https://example.com/invite-link",description:"Deprecated: service accounts cannot be invited via an invitation link"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",deprecated:!0,example:0,description:"Deprecated: service accounts cannot log in to Unleash"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: internal use only"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The root role id associated with the service account",example:1},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:null,nullable:!0,deprecated:!0,description:"Deprecated. This property is always `null`. To find out when a service account was last seen, check its `tokens` list and refer to each token's `lastSeen` property instead."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The service account creation date",example:"2021-01-01T00:00:00.000Z"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"tokens"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The list of tokens associated with the service account")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",description:"The unique identification number for this Personal Access Token. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:1,minimum:1},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"secret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The token used for authentication. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:"user:xyzrandomstring"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The token's expiration date.",example:"2023-04-19T08:15:14.000Z"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. `null` if it has not been used yet. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"rootRoles"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of root roles that are referenced from service account objects in the ",(0,s.kt)("inlineCode",{parentName:"p"},"serviceAccounts")," list")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The role id",example:9,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"A role can either be a global root role (applies to all projects) or a project role",type:"string",example:"root"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the role",type:"string",example:"Editor"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "serviceAccounts": [\n    {\n      "id": 54321,\n      "name": "My Service Account",\n      "username": "my-service-account",\n      "imageUrl": "https://example.com/my-service-account.png",\n      "rootRole": 1,\n      "createdAt": "2021-01-01T00:00:00.000Z",\n      "tokens": [\n        {\n          "id": 1,\n          "secret": "user:xyzrandomstring",\n          "expiresAt": "2023-04-19T08:15:14.000Z",\n          "createdAt": "2023-04-19T08:15:14.000Z",\n          "seenAt": "2023-04-19T08:15:14.000Z"\n        }\n      ]\n    }\n  ],\n  "rootRoles": [\n    {\n      "id": 9,\n      "type": "root",\n      "name": "Editor",\n      "description": "Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}k.isMDXComponent=!0}}]);