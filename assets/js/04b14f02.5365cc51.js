"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2946],{35125:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>h,metadata:()=>g,toc:()=>f});var i=t(87462),s=(t(67294),t(3905)),n=t(80334),o=(t(11032),t(46062)),r=t(57138),l=t(21439),p=(t(9531),t(15761)),m=t(73418),c=t(92414),d=t(11666);const h={id:"get-tags",title:"List all tags.",description:"List all tags available in Unleash.",sidebar_label:"List all tags.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTags",description:"List all tags available in Unleash.",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{description:"A list of tags with a version number",type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer",description:"The version of the schema used to model the tags."},tags:{type:"array",description:"A list of tags.",items:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"}}},title:"tagsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"List all tags.",description:{content:"List all tags available in Unleash.",type:"text/plain"},url:{path:["api","admin","tags"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,g={unversionedId:"reference/api/unleash/get-tags",id:"reference/api/unleash/get-tags",title:"List all tags.",description:"List all tags available in Unleash.",source:"@site/docs/reference/api/unleash/get-tags.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-tags",permalink:"/reference/api/unleash/get-tags",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-tags",title:"List all tags.",description:"List all tags available in Unleash.",sidebar_label:"List all tags.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTags",description:"List all tags available in Unleash.",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{description:"A list of tags with a version number",type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer",description:"The version of the schema used to model the tags."},tags:{type:"array",description:"A list of tags.",items:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"}}},title:"tagsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}}},method:"get",path:"/api/admin/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"List all tags.",description:{content:"List all tags available in Unleash.",type:"text/plain"},url:{path:["api","admin","tags"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Tags",permalink:"/reference/api/unleash/tags"},next:{title:"Create a new tag.",permalink:"/reference/api/unleash/create-tag"}},y={},f=[{value:"Request",id:"request",level:2}],v={toc:f};function b(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"List all tags."),(0,s.kt)(o.Z,{method:"get",path:"/api/admin/tags",mdxType:"MethodEndpoint"}),(0,s.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"List all tags available in Unleash."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"tagsSchema")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The version of the schema used to model the tags."},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"tags"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of tags.")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "version": 0,\n  "tags": [\n    {\n      "value": "a-tag-value",\n      "type": "simple"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);