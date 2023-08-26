"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2535],{7123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>j,frontMatter:()=>u,metadata:()=>y,toc:()=>b});var i=a(87462),s=(a(67294),a(3905)),r=a(80334),o=(a(11032),a(46062)),n=a(57138),l=a(21439),p=a(9531),m=a(15761),d=a(73418),c=a(92414),h=a(11666);const u={id:"get-project-users",title:"Get users in project",description:"Get users belonging to a project together with their roles as well as a list of roles available to the project. This endpoint is deprecated. Use `/:projectId/access` instead.",sidebar_label:"Get users in project",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],description:"Get users belonging to a project together with their roles as well as a list of roles available to the project. This endpoint is deprecated. Use `/:projectId/access` instead.",operationId:"getProjectUsers",responses:{200:{description:"projectUsersSchema",content:{"application/json":{schema:{type:"object",required:["roles","users"],description:"An overview of users and available roles within a project.",deprecated:!0,additionalProperties:!1,properties:{users:{type:"array",description:"A list of users with access to this project and their role within it.",items:{type:"object",description:"Data about a user including their project role",required:["id"],properties:{isAPI:{type:"boolean",description:"Whether this user is authenticated through Unleash tokens or logged in with a session",deprecated:!0,example:!1},name:{type:"string",description:"The name of the user",example:"Hunter Burgan"},email:{type:"string",nullable:!0,description:"The user's email address",example:"hunter@hunter.com"},id:{type:"integer",minimum:0,description:"The user's ID in the Unleash system",example:1},imageUrl:{type:"string",nullable:!0,format:"uri",description:"A URL pointing to the user's image."},addedAt:{type:"string",description:"When this user was added to the project",format:"date-time",example:"2023-08-01T14:35:16Z"},roleId:{description:"The ID of the role this user has in the given project",type:"integer",minimum:0,example:5},roles:{type:"array",description:"A list of roles this user has in the given project",items:{type:"integer",minimum:0,example:5}}},title:"userWithProjectRoleSchema"}},roles:{type:"array",description:"A list of roles that are available for this project",items:{type:"object",description:"A role holds permissions to allow Unleash to decide what actions a role holder is allowed to perform",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"integer",description:"The role id",example:9,minimum:0},type:{description:"A role can either be a global root role (applies to all projects) or a project role",type:"string",example:"root"},name:{description:"The name of the role",type:"string",example:"Editor"},description:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."}},title:"roleSchema"}}},title:"projectUsersSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},deprecated:!0,parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/users",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.0-main"},postman:{name:"Get users in project",description:{content:"Get users belonging to a project together with their roles as well as a list of roles available to the project. This endpoint is deprecated. Use `/:projectId/access` instead.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","users"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,y={unversionedId:"reference/api/unleash/get-project-users",id:"reference/api/unleash/get-project-users",title:"Get users in project",description:"Get users belonging to a project together with their roles as well as a list of roles available to the project. This endpoint is deprecated. Use `/:projectId/access` instead.",source:"@site/docs/reference/api/unleash/get-project-users.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-project-users",permalink:"/reference/api/unleash/get-project-users",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-users",title:"Get users in project",description:"Get users belonging to a project together with their roles as well as a list of roles available to the project. This endpoint is deprecated. Use `/:projectId/access` instead.",sidebar_label:"Get users in project",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],description:"Get users belonging to a project together with their roles as well as a list of roles available to the project. This endpoint is deprecated. Use `/:projectId/access` instead.",operationId:"getProjectUsers",responses:{200:{description:"projectUsersSchema",content:{"application/json":{schema:{type:"object",required:["roles","users"],description:"An overview of users and available roles within a project.",deprecated:!0,additionalProperties:!1,properties:{users:{type:"array",description:"A list of users with access to this project and their role within it.",items:{type:"object",description:"Data about a user including their project role",required:["id"],properties:{isAPI:{type:"boolean",description:"Whether this user is authenticated through Unleash tokens or logged in with a session",deprecated:!0,example:!1},name:{type:"string",description:"The name of the user",example:"Hunter Burgan"},email:{type:"string",nullable:!0,description:"The user's email address",example:"hunter@hunter.com"},id:{type:"integer",minimum:0,description:"The user's ID in the Unleash system",example:1},imageUrl:{type:"string",nullable:!0,format:"uri",description:"A URL pointing to the user's image."},addedAt:{type:"string",description:"When this user was added to the project",format:"date-time",example:"2023-08-01T14:35:16Z"},roleId:{description:"The ID of the role this user has in the given project",type:"integer",minimum:0,example:5},roles:{type:"array",description:"A list of roles this user has in the given project",items:{type:"integer",minimum:0,example:5}}},title:"userWithProjectRoleSchema"}},roles:{type:"array",description:"A list of roles that are available for this project",items:{type:"object",description:"A role holds permissions to allow Unleash to decide what actions a role holder is allowed to perform",additionalProperties:!1,required:["id","type","name"],properties:{id:{type:"integer",description:"The role id",example:9,minimum:0},type:{description:"A role can either be a global root role (applies to all projects) or a project role",type:"string",example:"root"},name:{description:"The name of the role",type:"string",example:"Editor"},description:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."}},title:"roleSchema"}}},title:"projectUsersSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},deprecated:!0,parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/users",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.0-main"},postman:{name:"Get users in project",description:{content:"Get users belonging to a project together with their roles as well as a list of roles available to the project. This endpoint is deprecated. Use `/:projectId/access` instead.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","users"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get an overview of a project.",permalink:"/reference/api/unleash/get-project-overview"},next:{title:"Get users and groups in project",permalink:"/reference/api/unleash/get-project-access"}},f={},b=[{value:"Request",id:"request",level:2}],k={toc:b};function j(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Get users in project"),(0,s.kt)(o.Z,{method:"get",path:"/api/admin/projects/{projectId}/users",mdxType:"MethodEndpoint"}),(0,s.kt)(n.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("admonition",{title:"deprecated",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,s.kt)("p",null,"Get users belonging to a project together with their roles as well as a list of roles available to the project. This endpoint is deprecated. Use ",(0,s.kt)("inlineCode",{parentName:"p"},"/:projectId/access")," instead."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"projectUsersSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"users"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of users with access to this project and their role within it.")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"isAPI",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether this user is authenticated through Unleash tokens or logged in with a session",deprecated:!0,example:!1},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the user",example:"Hunter Burgan"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The user's email address",example:"hunter@hunter.com"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0,description:"The user's ID in the Unleash system",example:1},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"uri",qualifierMessage:void 0,schema:{type:"string",nullable:!0,format:"uri",description:"A URL pointing to the user's image."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"addedAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",description:"When this user was added to the project",format:"date-time",example:"2023-08-01T14:35:16Z"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"roleId",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{description:"The ID of the role this user has in the given project",type:"integer",minimum:0,example:5},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"roles",required:!1,schemaName:"integer[]",qualifierMessage:void 0,schema:{type:"array",description:"A list of roles this user has in the given project",items:{type:"integer",minimum:0,example:5}},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"roles"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of roles that are available for this project")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The role id",example:9,minimum:0},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"A role can either be a global root role (applies to all projects) or a project role",type:"string",example:"root"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the role",type:"string",example:"Editor"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"A more detailed description of the role and what use it's intended for",type:"string",example:"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "users": [\n    {\n      "name": "Hunter Burgan",\n      "email": "hunter@hunter.com",\n      "id": 1,\n      "imageUrl": "string",\n      "addedAt": "2023-08-01T14:35:16Z",\n      "roleId": 5,\n      "roles": [\n        5\n      ]\n    }\n  ],\n  "roles": [\n    {\n      "id": 9,\n      "type": "root",\n      "name": "Editor",\n      "description": "Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}j.isMDXComponent=!0}}]);