"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[577],{26468:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>u,default:()=>T,frontMatter:()=>h,metadata:()=>y,toc:()=>f});var i=t(87462),n=(t(67294),t(3905)),s=t(80334),r=(t(11032),t(46062)),o=t(57138),p=t(21439),l=(t(9531),t(15761)),m=t(73418),d=t(92414),c=t(11666);const h={id:"validate-feature",title:"Validate a feature toggle name.",description:"Validates a feature toggle name: checks whether the name is URL-friendly and whether a feature with the given name already exists. Returns 200 if the feature name is compliant and unused.",sidebar_label:"Validate a feature toggle name.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"validateFeature",requestBody:{description:"validateFeatureSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],description:"Data used to validate a feature toggle's name.",properties:{name:{description:"The feature name to validate.",type:"string",example:"my-feature-3"},projectId:{description:"The id of the project that the feature flag will belong to. If the target project has a feature naming pattern defined, the name will be validated against that pattern.",nullable:!0,type:"string",example:"project-y"}},title:"validateFeatureSchema"}}}},description:"Validates a feature toggle name: checks whether the name is URL-friendly and whether a feature with the given name already exists. Returns 200 if the feature name is compliant and unused.",responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NameExistsError",description:"The name of the error kind"},message:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/features/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"my-feature-3",projectId:"project-y"},info:{title:"Unleash API",version:"5.4.0-main"},postman:{name:"Validate a feature toggle name.",description:{content:"Validates a feature toggle name: checks whether the name is URL-friendly and whether a feature with the given name already exists. Returns 200 if the feature name is compliant and unused.",type:"text/plain"},url:{path:["api","admin","features","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},u=void 0,y={unversionedId:"reference/api/unleash/validate-feature",id:"reference/api/unleash/validate-feature",title:"Validate a feature toggle name.",description:"Validates a feature toggle name: checks whether the name is URL-friendly and whether a feature with the given name already exists. Returns 200 if the feature name is compliant and unused.",source:"@site/docs/reference/api/unleash/validate-feature.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/validate-feature",permalink:"/reference/api/unleash/validate-feature",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"validate-feature",title:"Validate a feature toggle name.",description:"Validates a feature toggle name: checks whether the name is URL-friendly and whether a feature with the given name already exists. Returns 200 if the feature name is compliant and unused.",sidebar_label:"Validate a feature toggle name.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"validateFeature",requestBody:{description:"validateFeatureSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],description:"Data used to validate a feature toggle's name.",properties:{name:{description:"The feature name to validate.",type:"string",example:"my-feature-3"},projectId:{description:"The id of the project that the feature flag will belong to. If the target project has a feature naming pattern defined, the name will be validated against that pattern.",nullable:!0,type:"string",example:"project-y"}},title:"validateFeatureSchema"}}}},description:"Validates a feature toggle name: checks whether the name is URL-friendly and whether a feature with the given name already exists. Returns 200 if the feature name is compliant and unused.",responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ValidationError",description:"The name of the error kind"},message:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."}}}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NameExistsError",description:"The name of the error kind"},message:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."}}}}}},415:{description:'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.',content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},message:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."}}}}}}},method:"post",path:"/api/admin/features/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"my-feature-3",projectId:"project-y"},info:{title:"Unleash API",version:"5.4.0-main"},postman:{name:"Validate a feature toggle name.",description:{content:"Validates a feature toggle name: checks whether the name is URL-friendly and whether a feature with the given name already exists. Returns 200 if the feature name is compliant and unused.",type:"text/plain"},url:{path:["api","admin","features","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all feature toggles (deprecated)",permalink:"/reference/api/unleash/get-all-toggles"},next:{title:"Get all tags for a feature.",permalink:"/reference/api/unleash/list-tags"}},g={},f=[{value:"Request",id:"request",level:2}],b={toc:f};function T(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Validate a feature toggle name."),(0,n.kt)(r.Z,{method:"post",path:"/api/admin/features/validate",mdxType:"MethodEndpoint"}),(0,n.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Validates a feature toggle name: checks whether the name is URL-friendly and whether a feature with the given name already exists. Returns 200 if the feature name is compliant and unused."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,n.kt)("strong",{className:"openapi-schema__required"},"required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"validateFeatureSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The feature name to validate.",type:"string",example:"my-feature-3"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"projectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The id of the project that the feature flag will belong to. If the target project has a feature naming pattern defined, the name will be validated against that pattern.",nullable:!0,type:"string",example:"project-y"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null)),(0,n.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The request data does not match what we expect.")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ValidationError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"The request payload you provided doesn't conform to the schema. The .parameters property should be object. You sent [].",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ValidationError",\n  "message": "The request payload you provided doesn\'t conform to the schema. The .parameters property should be object. You sent []."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NameExistsError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NameExistsError",\n  "message": "There is already a feature called \\"my-awesome-feature\\"."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,'The operation does not support request payloads of the provided type. Please ensure that you\'re using one of the listed payload types and that you have specified the right content type in the "content-type" header.')),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ContentTypeerror",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "ContentTypeerror",\n  "message": "We do not accept the content-type you provided (application/xml). Try using one of the content-types we do accept instead (application/json) and make sure the body is in the corresponding format."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);