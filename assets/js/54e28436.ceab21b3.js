"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[49338],{47536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>T,frontMatter:()=>h,metadata:()=>u,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),n=a(80334),o=(a(11032),a(46062)),r=a(57138),p=a(21439),m=(a(9531),a(15761)),l=a(73418),c=a(92414),d=a(30433);const h={id:"create-tag-type",title:"Create a tag type",description:"Create a new tag type.",sidebar_label:"Create a tag type",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"createTagType",description:"Create a new tag type.",responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A tag type.",required:["name"],properties:{name:{type:"string",description:"The name of the tag type.",example:"color"},description:{type:"string",description:"The description of the tag type.",example:"A tag type for describing the color of a tag."},icon:{type:"string",nullable:!0,description:"The icon of the tag type.",example:"not-really-used"}},title:"tagTypeSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NameExistsError",description:"The name of the error kind"},message:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},requestBody:{description:"tagTypeSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A tag type.",required:["name"],properties:{name:{type:"string",description:"The name of the tag type.",example:"color"},description:{type:"string",description:"The description of the tag type.",example:"A tag type for describing the color of a tag."},icon:{type:"string",nullable:!0,description:"The icon of the tag type.",example:"not-really-used"}},title:"tagTypeSchema"}}}},method:"post",path:"/api/admin/tag-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"color",description:"A tag type for describing the color of a tag.",icon:"not-really-used"},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Create a tag type",description:{content:"Create a new tag type.",type:"text/plain"},url:{path:["api","admin","tag-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,u={unversionedId:"reference/api/unleash/create-tag-type",id:"reference/api/unleash/create-tag-type",title:"Create a tag type",description:"Create a new tag type.",source:"@site/docs/reference/api/unleash/create-tag-type.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-tag-type",permalink:"/reference/api/unleash/create-tag-type",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-tag-type",title:"Create a tag type",description:"Create a new tag type.",sidebar_label:"Create a tag type",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"createTagType",description:"Create a new tag type.",responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A tag type.",required:["name"],properties:{name:{type:"string",description:"The name of the tag type.",example:"color"},description:{type:"string",description:"The description of the tag type.",example:"A tag type for describing the color of a tag."},icon:{type:"string",nullable:!0,description:"The icon of the tag type.",example:"not-really-used"}},title:"tagTypeSchema"}}}},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},403:{description:"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NoAccessError",description:"The name of the error kind"},message:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."}}}}}},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NameExistsError",description:"The name of the error kind"},message:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},requestBody:{description:"tagTypeSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,description:"A tag type.",required:["name"],properties:{name:{type:"string",description:"The name of the tag type.",example:"color"},description:{type:"string",description:"The description of the tag type.",example:"A tag type for describing the color of a tag."},icon:{type:"string",nullable:!0,description:"The icon of the tag type.",example:"not-really-used"}},title:"tagTypeSchema"}}}},method:"post",path:"/api/admin/tag-types",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"color",description:"A tag type for describing the color of a tag.",icon:"not-really-used"},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Create a tag type",description:{content:"Create a new tag type.",type:"text/plain"},url:{path:["api","admin","tag-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all tag types",permalink:"/reference/api/unleash/get-tag-types"},next:{title:"Validate a tag type",permalink:"/reference/api/unleash/validate-tag-type"}},g={},f=[{value:"Request",id:"request",level:2}],b={toc:f};function T(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Create a tag type"),(0,s.kt)(o.Z,{method:"post",path:"/api/admin/tag-types",mdxType:"MethodEndpoint"}),(0,s.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Create a new tag type."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"tagTypeSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the tag type.",example:"color"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The description of the tag type.",example:"A tag type for describing the color of a tag."},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The icon of the tag type.",example:"not-really-used"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The resource was successfully created.")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null,(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The location of the newly created resource.")))))),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the tag type.",example:"color"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The description of the tag type.",example:"A tag type for describing the color of a tag."},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The icon of the tag type.",example:"not-really-used"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "name": "color",\n  "description": "A tag type for describing the color of a tag.",\n  "icon": "not-really-used"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request data does not match what we expect.")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided user credentials are valid, but the user does not have the necessary permissions to perform this operation")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NoAccessError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'You need the "UPDATE_ADDON" permission to perform this action in the "development" environment.',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NoAccessError",\n  "message": "You need the \\"UPDATE_ADDON\\" permission to perform this action in the \\"development\\" environment."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NameExistsError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NameExistsError",\n  "message": "There is already a feature called \\"my-awesome-feature\\"."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.')),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTypeerror",\n  "message": "We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);