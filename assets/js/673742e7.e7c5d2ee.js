"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6298],{44585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>f,frontMatter:()=>u,metadata:()=>g,toc:()=>b});var i=a(87462),n=(a(67294),a(3905)),s=a(80334),o=(a(11032),a(46062)),r=a(57138),c=a(21439),p=a(9531),m=a(15761),l=a(73418),d=a(92414),h=a(30433);const u={id:"update-service-account",title:"Update a service account.",description:"Updates an existing service account identified by its id.",sidebar_label:"Update a service account.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Service Accounts"],operationId:"updateServiceAccount",description:"Updates an existing service account identified by its id.",requestBody:{description:"updateServiceAccountSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Describes the properties required to update a service account",additionalProperties:!0,properties:{name:{type:"string",description:"The name of the service account",example:"Service Account 1"},rootRole:{type:"integer",description:"The id of the root role for the service account",example:1}},title:"updateServiceAccountSchema"}}}},responses:{200:{description:"serviceAccountSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],description:"Represents a [service account](https://docs.getunleash.io/reference/service-accounts). Service accounts are used to let systems interact with the Unleash API.",properties:{id:{type:"number",description:"The service account id",example:54321},isAPI:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: for internal use only, should not be exposed through the API"},name:{type:"string",description:"The name of the service account",example:"My Service Account"},email:{type:"string",example:"noemail@getunleash.io",deprecated:!0,description:"Deprecated: service accounts don't have emails associated with them"},username:{type:"string",description:"The service account username",example:"my-service-account"},imageUrl:{type:"string",description:"The service account image url",example:"https://example.com/my-service-account.png"},inviteLink:{type:"string",deprecated:!0,example:"https://example.com/invite-link",description:"Deprecated: service accounts cannot be invited via an invitation link"},loginAttempts:{type:"number",deprecated:!0,example:0,description:"Deprecated: service accounts cannot log in to Unleash"},emailSent:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: internal use only"},rootRole:{type:"integer",description:"The root role id associated with the service account",example:1},seenAt:{type:"string",format:"date-time",example:null,nullable:!0,deprecated:!0,description:"Deprecated. This property is always `null`. To find out when a service account was last seen, check its `tokens` list and refer to each token's `lastSeen` property instead."},createdAt:{type:"string",format:"date-time",description:"The service account creation date",example:"2021-01-01T00:00:00.000Z"},tokens:{type:"array",description:"The list of tokens associated with the service account",items:{type:"object",description:"An overview of a [Personal Access Token](https://docs.getunleash.io/how-to/how-to-create-personal-access-tokens).",properties:{id:{type:"integer",description:"The unique identification number for this Personal Access Token. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:1,minimum:1},secret:{type:"string",description:"The token used for authentication. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:"user:xyzrandomstring"},expiresAt:{type:"string",format:"date-time",description:"The token's expiration date.",example:"2023-04-19T08:15:14.000Z"},createdAt:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},seenAt:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. `null` if it has not been used yet. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"}},title:"patSchema"}}},title:"serviceAccountSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/service-account/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"Service Account 1",rootRole:1},info:{title:"Unleash API",version:"5.5.6"},postman:{name:"Update a service account.",description:{content:"Updates an existing service account identified by its id.",type:"text/plain"},url:{path:["api","admin","service-account",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/update-service-account",id:"reference/api/unleash/update-service-account",title:"Update a service account.",description:"Updates an existing service account identified by its id.",source:"@site/docs/reference/api/unleash/update-service-account.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-service-account",permalink:"/reference/api/unleash/update-service-account",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-service-account",title:"Update a service account.",description:"Updates an existing service account identified by its id.",sidebar_label:"Update a service account.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Service Accounts"],operationId:"updateServiceAccount",description:"Updates an existing service account identified by its id.",requestBody:{description:"updateServiceAccountSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Describes the properties required to update a service account",additionalProperties:!0,properties:{name:{type:"string",description:"The name of the service account",example:"Service Account 1"},rootRole:{type:"integer",description:"The id of the root role for the service account",example:1}},title:"updateServiceAccountSchema"}}}},responses:{200:{description:"serviceAccountSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["id"],description:"Represents a [service account](https://docs.getunleash.io/reference/service-accounts). Service accounts are used to let systems interact with the Unleash API.",properties:{id:{type:"number",description:"The service account id",example:54321},isAPI:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: for internal use only, should not be exposed through the API"},name:{type:"string",description:"The name of the service account",example:"My Service Account"},email:{type:"string",example:"noemail@getunleash.io",deprecated:!0,description:"Deprecated: service accounts don't have emails associated with them"},username:{type:"string",description:"The service account username",example:"my-service-account"},imageUrl:{type:"string",description:"The service account image url",example:"https://example.com/my-service-account.png"},inviteLink:{type:"string",deprecated:!0,example:"https://example.com/invite-link",description:"Deprecated: service accounts cannot be invited via an invitation link"},loginAttempts:{type:"number",deprecated:!0,example:0,description:"Deprecated: service accounts cannot log in to Unleash"},emailSent:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: internal use only"},rootRole:{type:"integer",description:"The root role id associated with the service account",example:1},seenAt:{type:"string",format:"date-time",example:null,nullable:!0,deprecated:!0,description:"Deprecated. This property is always `null`. To find out when a service account was last seen, check its `tokens` list and refer to each token's `lastSeen` property instead."},createdAt:{type:"string",format:"date-time",description:"The service account creation date",example:"2021-01-01T00:00:00.000Z"},tokens:{type:"array",description:"The list of tokens associated with the service account",items:{type:"object",description:"An overview of a [Personal Access Token](https://docs.getunleash.io/how-to/how-to-create-personal-access-tokens).",properties:{id:{type:"integer",description:"The unique identification number for this Personal Access Token. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:1,minimum:1},secret:{type:"string",description:"The token used for authentication. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:"user:xyzrandomstring"},expiresAt:{type:"string",format:"date-time",description:"The token's expiration date.",example:"2023-04-19T08:15:14.000Z"},createdAt:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},seenAt:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. `null` if it has not been used yet. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"}},title:"patSchema"}}},title:"serviceAccountSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/service-account/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"Service Account 1",rootRole:1},info:{title:"Unleash API",version:"5.5.6"},postman:{name:"Update a service account.",description:{content:"Updates an existing service account identified by its id.",type:"text/plain"},url:{path:["api","admin","service-account",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Create a service account.",permalink:"/reference/api/unleash/create-service-account"},next:{title:"Delete a service account.",permalink:"/reference/api/unleash/delete-service-account"}},v={},b=[{value:"Request",id:"request",level:2}],T={toc:b};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Update a service account."),(0,n.kt)(o.Z,{method:"put",path:"/api/admin/service-account/{id}",mdxType:"MethodEndpoint"}),(0,n.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Updates an existing service account identified by its id."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(p.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(c.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,n.kt)("strong",{className:"openapi-schema__required"},"required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"updateServiceAccountSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the service account",example:"Service Account 1"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The id of the root role for the service account",example:1},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{name:"property name*",required:!1,schemaName:"any",qualifierMessage:void 0,schema:{type:"object",description:"Describes the properties required to update a service account",additionalProperties:!0,properties:{name:{type:"string",description:"The name of the service account",example:"Service Account 1"},rootRole:{type:"integer",description:"The id of the root role for the service account",example:1}},title:"updateServiceAccountSchema"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"serviceAccountSchema")),(0,n.kt)("div",null,(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The service account id",example:54321},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: for internal use only, should not be exposed through the API"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the service account",example:"My Service Account"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"noemail@getunleash.io",deprecated:!0,description:"Deprecated: service accounts don't have emails associated with them"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The service account username",example:"my-service-account"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The service account image url",example:"https://example.com/my-service-account.png"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"inviteLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",deprecated:!0,example:"https://example.com/invite-link",description:"Deprecated: service accounts cannot be invited via an invitation link"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"loginAttempts",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",deprecated:!0,example:0,description:"Deprecated: service accounts cannot log in to Unleash"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"emailSent",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",deprecated:!0,example:!1,description:"Deprecated: internal use only"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"rootRole",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The root role id associated with the service account",example:1},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:null,nullable:!0,deprecated:!0,description:"Deprecated. This property is always `null`. To find out when a service account was last seen, check its `tokens` list and refer to each token's `lastSeen` property instead."},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The service account creation date",example:"2021-01-01T00:00:00.000Z"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"tokens"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The list of tokens associated with the service account")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",description:"The unique identification number for this Personal Access Token. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:1,minimum:1},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"secret",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The token used for authentication. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)",example:"user:xyzrandomstring"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"expiresAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The token's expiration date.",example:"2023-04-19T08:15:14.000Z"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2023-04-19T08:15:14.000Z",description:"When the token was created. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"seenAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0,example:"2023-04-19T08:15:14.000Z",description:"When the token was last seen/used to authenticate with. `null` if it has not been used yet. (This property is set by Unleash when the token is created and cannot be set manually: if you provide a value when creating a PAT, Unleash will ignore it.)"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": 54321,\n  "name": "My Service Account",\n  "username": "my-service-account",\n  "imageUrl": "https://example.com/my-service-account.png",\n  "rootRole": 1,\n  "createdAt": "2021-01-01T00:00:00.000Z",\n  "tokens": [\n    {\n      "id": 1,\n      "secret": "user:xyzrandomstring",\n      "expiresAt": "2023-04-19T08:15:14.000Z",\n      "createdAt": "2023-04-19T08:15:14.000Z",\n      "seenAt": "2023-04-19T08:15:14.000Z"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The request data does not match what we expect.")),(0,n.kt)("div",null,(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null,(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,n.kt)("div",null,(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The requested resource was not found.")),(0,n.kt)("div",null,(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.')),(0,n.kt)("div",null,(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTypeerror",\n  "message": "We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);