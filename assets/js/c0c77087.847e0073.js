"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[26192],{57717:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>g,default:()=>f,frontMatter:()=>u,metadata:()=>y,toc:()=>v});var i=t(87462),n=(t(67294),t(3905)),s=t(80334),r=(t(11032),t(46062)),o=t(57138),p=t(21439),l=t(9531),m=t(15761),d=t(73418),c=t(92414),h=t(30433);const u={id:"get-tag",title:"Get a tag by type and value.",description:"Get a tag by type and value. Can be used to check whether a given tag already exists in Unleash or not.",sidebar_label:"Get a tag by type and value.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTag",description:"Get a tag by type and value. Can be used to check whether a given tag already exists in Unleash or not.",responses:{200:{description:"tagWithVersionSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tag"],description:"A tag with a version number representing the schema used to model the tag.",properties:{version:{type:"integer",description:"The version of the schema used to model the tag.",example:1},tag:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"}},title:"tagWithVersionSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"type",in:"path",required:!0,schema:{type:"string"}},{name:"value",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/tags/{type}/{value}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.10"},postman:{name:"Get a tag by type and value.",description:{content:"Get a tag by type and value. Can be used to check whether a given tag already exists in Unleash or not.",type:"text/plain"},url:{path:["api","admin","tags",":type",":value"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"value"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,y={unversionedId:"reference/api/unleash/get-tag",id:"reference/api/unleash/get-tag",title:"Get a tag by type and value.",description:"Get a tag by type and value. Can be used to check whether a given tag already exists in Unleash or not.",source:"@site/docs/reference/api/unleash/get-tag.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-tag",permalink:"/reference/api/unleash/get-tag",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-tag",title:"Get a tag by type and value.",description:"Get a tag by type and value. Can be used to check whether a given tag already exists in Unleash or not.",sidebar_label:"Get a tag by type and value.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTag",description:"Get a tag by type and value. Can be used to check whether a given tag already exists in Unleash or not.",responses:{200:{description:"tagWithVersionSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","tag"],description:"A tag with a version number representing the schema used to model the tag.",properties:{version:{type:"integer",description:"The version of the schema used to model the tag.",example:1},tag:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"}},title:"tagWithVersionSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"type",in:"path",required:!0,schema:{type:"string"}},{name:"value",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/tags/{type}/{value}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.10"},postman:{name:"Get a tag by type and value.",description:{content:"Get a tag by type and value. Can be used to check whether a given tag already exists in Unleash or not.",type:"text/plain"},url:{path:["api","admin","tags",":type",":value"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"value"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"List all tags of a given type.",permalink:"/reference/api/unleash/get-tags-by-type"},next:{title:"Delete a tag.",permalink:"/reference/api/unleash/delete-tag"}},b={},v=[{value:"Request",id:"request",level:2}],k={toc:v};function f(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get a tag by type and value."),(0,n.kt)(r.Z,{method:"get",path:"/api/admin/tags/{type}/{value}",mdxType:"MethodEndpoint"}),(0,n.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Get a tag by type and value. Can be used to check whether a given tag already exists in Unleash or not."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"type",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"value",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"tagWithVersionSchema")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The version of the schema used to model the tag.",example:1},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"tag"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Representation of a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/tags"},"tag"))),(0,n.kt)(d.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"},mdxType:"SchemaItem"}))))))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "version": 1,\n  "tag": {\n    "value": "a-tag-value",\n    "type": "simple"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The requested resource was not found.")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);