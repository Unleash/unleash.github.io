"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[92569],{46933:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>v,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var i=a(87462),n=(a(67294),a(3905)),r=a(80334),s=(a(11032),a(46062)),o=a(57138),l=a(21439),p=(a(9531),a(15761)),d=a(73418),m=a(92414),c=a(30433);const u={id:"get-frontend-features",title:"Retrieve enabled feature toggles for the provided context.",description:"This endpoint returns the list of feature toggles that the proxy evaluates to enabled for the given context. Context values are provided as query parameters. If the Frontend API is disabled 404 is returned.",sidebar_label:"Retrieve enabled feature toggles for the provided context.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Frontend API"],operationId:"getFrontendFeatures",responses:{200:{description:"proxyFeaturesSchema",content:{"application/json":{schema:{type:"object",required:["toggles"],additionalProperties:!1,description:"Frontend SDK features list",properties:{toggles:{description:"The actual features returned to the Frontend SDK",type:"array",items:{type:"object",required:["name","enabled","impressionData"],additionalProperties:!1,description:"Frontend API feature",properties:{name:{type:"string",example:"disable-comments",description:"Unique feature name."},enabled:{type:"boolean",example:!0,description:"Always set to `true`."},impressionData:{type:"boolean",example:!1,description:"`true` if the impression data collection is enabled for the feature, otherwise `false`."},variant:{type:"object",required:["name","enabled"],additionalProperties:!1,description:"Variant details",properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},enabled:{type:"boolean",example:!0,description:"Whether the variant is enabled or not."},payload:{type:"object",additionalProperties:!1,required:["type","value"],description:"Extra data configured for this variant",example:{type:"json",value:'{"color": "red"}'},properties:{type:{type:"string",description:"The format of the payload.",enum:["json","csv","string"]},value:{type:"string",description:"The payload value stringified."}}}}}},title:"proxyFeatureSchema"}}},title:"proxyFeaturesSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},description:"This endpoint returns the list of feature toggles that the proxy evaluates to enabled for the given context. Context values are provided as query parameters. If the Frontend API is disabled 404 is returned.",method:"get",path:"/api/frontend",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Retrieve enabled feature toggles for the provided context.",description:{content:"This endpoint returns the list of feature toggles that the proxy evaluates to enabled for the given context. Context values are provided as query parameters. If the Frontend API is disabled 404 is returned.",type:"text/plain"},url:{path:["api","frontend"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,g={unversionedId:"reference/api/unleash/get-frontend-features",id:"reference/api/unleash/get-frontend-features",title:"Retrieve enabled feature toggles for the provided context.",description:"This endpoint returns the list of feature toggles that the proxy evaluates to enabled for the given context. Context values are provided as query parameters. If the Frontend API is disabled 404 is returned.",source:"@site/docs/reference/api/unleash/get-frontend-features.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-frontend-features",permalink:"/reference/api/unleash/get-frontend-features",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-frontend-features",title:"Retrieve enabled feature toggles for the provided context.",description:"This endpoint returns the list of feature toggles that the proxy evaluates to enabled for the given context. Context values are provided as query parameters. If the Frontend API is disabled 404 is returned.",sidebar_label:"Retrieve enabled feature toggles for the provided context.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Frontend API"],operationId:"getFrontendFeatures",responses:{200:{description:"proxyFeaturesSchema",content:{"application/json":{schema:{type:"object",required:["toggles"],additionalProperties:!1,description:"Frontend SDK features list",properties:{toggles:{description:"The actual features returned to the Frontend SDK",type:"array",items:{type:"object",required:["name","enabled","impressionData"],additionalProperties:!1,description:"Frontend API feature",properties:{name:{type:"string",example:"disable-comments",description:"Unique feature name."},enabled:{type:"boolean",example:!0,description:"Always set to `true`."},impressionData:{type:"boolean",example:!1,description:"`true` if the impression data collection is enabled for the feature, otherwise `false`."},variant:{type:"object",required:["name","enabled"],additionalProperties:!1,description:"Variant details",properties:{name:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},enabled:{type:"boolean",example:!0,description:"Whether the variant is enabled or not."},payload:{type:"object",additionalProperties:!1,required:["type","value"],description:"Extra data configured for this variant",example:{type:"json",value:'{"color": "red"}'},properties:{type:{type:"string",description:"The format of the payload.",enum:["json","csv","string"]},value:{type:"string",description:"The payload value stringified."}}}}}},title:"proxyFeatureSchema"}}},title:"proxyFeaturesSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}},404:{description:"The requested resource was not found.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NotFoundError",description:"The name of the error kind"},message:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."}}}}}}},description:"This endpoint returns the list of feature toggles that the proxy evaluates to enabled for the given context. Context values are provided as query parameters. If the Frontend API is disabled 404 is returned.",method:"get",path:"/api/frontend",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.7.0"},postman:{name:"Retrieve enabled feature toggles for the provided context.",description:{content:"This endpoint returns the list of feature toggles that the proxy evaluates to enabled for the given context. Context values are provided as query parameters. If the Frontend API is disabled 404 is returned.",type:"text/plain"},url:{path:["api","frontend"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Frontend API",permalink:"/reference/api/unleash/frontend-api"},next:{title:"Register client usage metrics",permalink:"/reference/api/unleash/register-frontend-metrics"}},y={},f=[{value:"Request",id:"request",level:2}],b={toc:f};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Retrieve enabled feature toggles for the provided context."),(0,n.kt)(s.Z,{method:"get",path:"/api/frontend",mdxType:"MethodEndpoint"}),(0,n.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"This endpoint returns the list of feature toggles that the proxy evaluates to enabled for the given context. Context values are provided as query parameters. If the Frontend API is disabled 404 is returned."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"proxyFeaturesSchema")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"toggles"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The actual features returned to the Frontend SDK")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"disable-comments",description:"Unique feature name."},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Always set to `true`."},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"impressionData",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1,description:"`true` if the impression data collection is enabled for the feature, otherwise `false`."},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"variant"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Variant details")),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The variants name. Is unique for this feature toggle",example:"blue_group"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Whether the variant is enabled or not."},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"payload"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Extra data configured for this variant")),(0,n.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`json`, `csv`, `string`]",schema:{type:"string",description:"The format of the payload.",enum:["json","csv","string"]},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The payload value stringified."},mdxType:"SchemaItem"}))))))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "toggles": [\n    {\n      "name": "disable-comments",\n      "enabled": true,\n      "impressionData": false,\n      "variant": {\n        "name": "blue_group",\n        "enabled": true,\n        "payload": {\n          "type": "json",\n          "value": "{\\"color\\": \\"red\\"}"\n        }\n      }\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The requested resource was not found.")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NotFoundError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'Could not find the addon with ID "12345".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NotFoundError",\n  "message": "Could not find the addon with ID \\"12345\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);