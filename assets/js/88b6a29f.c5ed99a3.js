"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4264],{11636:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>b,frontMatter:()=>h,metadata:()=>g,toc:()=>k});var s=a(87462),r=(a(67294),a(3905)),n=a(80334),i=(a(11032),a(46062)),m=a(57138),p=a(21439),l=a(9531),o=a(15761),c=a(73418),d=a(92414),u=a(11666);const h={id:"get-open-change-requests-for-user",title:"Retrieves pending change requests in configured environments",description:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",sidebar_label:"Retrieves pending change requests in configured environments",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",tags:["Unstable"],operationId:"getOpenChangeRequestsForUser",responses:{200:{description:"changeRequestsSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number",example:3},title:{type:"string",example:"Increasing gradual rollout"},environment:{type:"string",example:"development"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number",example:2},project:{type:"string",example:"unleash-project"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string",example:"my-feature"},conflict:{type:"string"},changes:{type:"array",description:"List of changes inside change request. This list may be empty when listing all change requests for a project.",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number",example:33},action:{type:"string",example:"updateStrategy"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}},title:"changeRequestEventSchema"}},defaultChange:{type:"object",additionalProperties:!1,required:["action","payload"],properties:{action:{type:"string",example:"addStrategy"},payload:{type:"object"}},title:"changeRequestDefaultEventSchema"}},title:"changeRequestFeatureSchema"}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number",example:33},username:{type:"string",example:"unleash-user"},imageUrl:{type:"string"}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}},title:"changeRequestApprovalSchema"}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{id:{type:"number",example:33},text:{type:"string",example:"This is a comment"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0,example:"unleash-user"},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}},title:"changeRequestCommentSchema"}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}},title:"changeRequestSchema"},title:"changeRequestsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/open",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Retrieves pending change requests in configured environments",description:{content:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests","open"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,g={unversionedId:"reference/api/unleash/get-open-change-requests-for-user",id:"reference/api/unleash/get-open-change-requests-for-user",title:"Retrieves pending change requests in configured environments",description:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",source:"@site/docs/reference/api/unleash/get-open-change-requests-for-user.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-open-change-requests-for-user",permalink:"/reference/api/unleash/get-open-change-requests-for-user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-open-change-requests-for-user",title:"Retrieves pending change requests in configured environments",description:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",sidebar_label:"Retrieves pending change requests in configured environments",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",tags:["Unstable"],operationId:"getOpenChangeRequestsForUser",responses:{200:{description:"changeRequestsSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number",example:3},title:{type:"string",example:"Increasing gradual rollout"},environment:{type:"string",example:"development"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number",example:2},project:{type:"string",example:"unleash-project"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string",example:"my-feature"},conflict:{type:"string"},changes:{type:"array",description:"List of changes inside change request. This list may be empty when listing all change requests for a project.",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number",example:33},action:{type:"string",example:"updateStrategy"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}},title:"changeRequestEventSchema"}},defaultChange:{type:"object",additionalProperties:!1,required:["action","payload"],properties:{action:{type:"string",example:"addStrategy"},payload:{type:"object"}},title:"changeRequestDefaultEventSchema"}},title:"changeRequestFeatureSchema"}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number",example:33},username:{type:"string",example:"unleash-user"},imageUrl:{type:"string"}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}},title:"changeRequestApprovalSchema"}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{id:{type:"number",example:33},text:{type:"string",example:"This is a comment"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0,example:"unleash-user"},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}},title:"changeRequestCommentSchema"}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}},title:"changeRequestSchema"},title:"changeRequestsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/open",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"Retrieves pending change requests in configured environments",description:{content:"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests","open"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Updates change request configuration for an environment in the project",permalink:"/reference/api/unleash/update-project-change-request-config"},next:{title:"Retrieves pending change requests in configured environments",permalink:"/reference/api/unleash/get-pending-change-requests-for-user"}},f={},k=[{value:"Request",id:"request",level:2}],v={toc:k};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Retrieves pending change requests in configured environments"),(0,r.kt)(i.Z,{method:"get",path:"/api/admin/projects/{projectId}/change-requests/open",mdxType:"MethodEndpoint"}),(0,r.kt)(m.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"This endpoint will retrieve the pending change requests in the configured environments for the project, for the current user performing the request."),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"changeRequestsSchema")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:3},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Increasing gradual rollout"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"environment",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"state",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`Draft`, `In review`, `Approved`, `Applied`, `Cancelled`]",schema:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"minApprovals",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:2},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"project",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"unleash-project"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"features"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"my-feature"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"conflict",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"changes"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"List of changes inside change request. This list may be empty when listing all change requests for a project.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:33},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"action",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"updateStrategy"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"conflict",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"payload"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(u.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"string")))),(0,r.kt)(u.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"boolean")))),(0,r.kt)(u.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"number"))))))))),(0,r.kt)(c.Z,{collapsible:!1,name:"updatedBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"createdBy"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"defaultChange"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"action",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"addStrategy"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"payload",required:!0,schemaName:"object",qualifierMessage:void 0,schema:{type:"object"},mdxType:"SchemaItem"})))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"approvals"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"createdBy"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:33},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"unleash-user"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"comments"),(0,r.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:33},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"text",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"This is a comment"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"createdBy"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"unleash-user"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("span",{className:"openapi-schema__container"},(0,r.kt)("strong",{className:"openapi-schema__property"},"createdBy"),(0,r.kt)("span",{className:"openapi-schema__name"}," object"),(0,r.kt)("span",{className:"openapi-schema__divider"}),(0,r.kt)("span",{className:"openapi-schema__required"},"required"))),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'[\n  {\n    "id": 3,\n    "title": "Increasing gradual rollout",\n    "environment": "development",\n    "state": "Draft",\n    "minApprovals": 2,\n    "project": "unleash-project",\n    "features": [\n      {\n        "name": "my-feature",\n        "conflict": "string",\n        "changes": [\n          {\n            "id": 33,\n            "action": "updateStrategy",\n            "conflict": "string",\n            "payload": "string",\n            "updatedBy": "string",\n            "createdBy": {\n              "username": "string",\n              "imageUrl": "string"\n            },\n            "createdAt": "2023-06-22T15:34:11.568Z"\n          }\n        ],\n        "defaultChange": {\n          "action": "addStrategy",\n          "payload": {}\n        }\n      }\n    ],\n    "approvals": [\n      {\n        "createdBy": {\n          "id": 33,\n          "username": "unleash-user",\n          "imageUrl": "string"\n        },\n        "createdAt": "2022-12-12T12:13:24.218Z"\n      }\n    ],\n    "comments": [\n      {\n        "id": 33,\n        "text": "This is a comment",\n        "createdBy": {\n          "username": "unleash-user",\n          "imageUrl": "string"\n        },\n        "createdAt": "2022-12-12T12:13:24.218Z"\n      }\n    ],\n    "createdBy": {\n      "username": "string",\n      "imageUrl": "string"\n    },\n    "createdAt": "2023-06-22T15:34:11.568Z"\n  }\n]',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);