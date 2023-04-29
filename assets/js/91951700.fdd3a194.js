"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4845],{22801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>v,frontMatter:()=>u,metadata:()=>y,toc:()=>f});var r=a(87462),i=(a(67294),a(3905)),n=a(80334),s=(a(11032),a(46062)),l=a(21439),m=a(9531),p=a(15761),o=a(73418),c=a(92414),d=a(11666);const u={id:"get-pending-change-requests-for-feature",title:"Retrieves all pending change requests referencing a feature in the project",description:"This endpoint will retrieve all pending change requests (change requests with a status of Draft | In review | Approved) referencing the given feature toggle name.",sidebar_label:"Retrieves all pending change requests referencing a feature in the project",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve all pending change requests (change requests with a status of Draft | In review | Approved) referencing the given feature toggle name.",tags:["Unstable"],operationId:"getPendingChangeRequestsForFeature",responses:{200:{description:"changeRequestsSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number",example:3},title:{type:"string",example:"Increasing gradual rollout"},environment:{type:"string",example:"development"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number",example:2},project:{type:"string",example:"unleash-project"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string",example:"my-feature"},conflict:{type:"string"},changes:{type:"array",description:"List of changes inside change request. This list may be empty when listing all change requests for a project.",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number",example:33},action:{type:"string",example:"updateStrategy"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}},title:"changeRequestEventSchema"}},defaultChange:{type:"object",additionalProperties:!1,required:["action","payload"],properties:{action:{type:"string",example:"addStrategy"},payload:{type:"object"}},title:"changeRequestDefaultEventSchema"}},title:"changeRequestFeatureSchema"}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number",example:33},username:{type:"string",example:"unleash-user"},imageUrl:{type:"string"}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}},title:"changeRequestApprovalSchema"}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{id:{type:"number",example:33},text:{type:"string",example:"This is a comment"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0,example:"unleash-user"},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}},title:"changeRequestCommentSchema"}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}},title:"changeRequestSchema"},title:"changeRequestsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/pending/{featureName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"Retrieves all pending change requests referencing a feature in the project",description:{content:"This endpoint will retrieve all pending change requests (change requests with a status of Draft | In review | Approved) referencing the given feature toggle name.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests","pending",":featureName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,y={unversionedId:"reference/api/unleash/get-pending-change-requests-for-feature",id:"reference/api/unleash/get-pending-change-requests-for-feature",title:"Retrieves all pending change requests referencing a feature in the project",description:"This endpoint will retrieve all pending change requests (change requests with a status of Draft | In review | Approved) referencing the given feature toggle name.",source:"@site/docs/reference/api/unleash/get-pending-change-requests-for-feature.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-pending-change-requests-for-feature",permalink:"/reference/api/unleash/get-pending-change-requests-for-feature",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-pending-change-requests-for-feature",title:"Retrieves all pending change requests referencing a feature in the project",description:"This endpoint will retrieve all pending change requests (change requests with a status of Draft | In review | Approved) referencing the given feature toggle name.",sidebar_label:"Retrieves all pending change requests referencing a feature in the project",hide_title:!0,hide_table_of_contents:!0,api:{description:"This endpoint will retrieve all pending change requests (change requests with a status of Draft | In review | Approved) referencing the given feature toggle name.",tags:["Unstable"],operationId:"getPendingChangeRequestsForFeature",responses:{200:{description:"changeRequestsSchema",content:{"application/json":{schema:{type:"array",items:{additionalProperties:!1,type:"object",required:["id","environment","state","minApprovals","project","features","createdAt","createdBy"],properties:{id:{type:"number",example:3},title:{type:"string",example:"Increasing gradual rollout"},environment:{type:"string",example:"development"},state:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},minApprovals:{type:"number",example:2},project:{type:"string",example:"unleash-project"},features:{type:"array",items:{additionalProperties:!1,type:"object",required:["name","changes"],properties:{name:{type:"string",example:"my-feature"},conflict:{type:"string"},changes:{type:"array",description:"List of changes inside change request. This list may be empty when listing all change requests for a project.",items:{type:"object",required:["id","action","payload"],properties:{id:{type:"number",example:33},action:{type:"string",example:"updateStrategy"},conflict:{type:"string"},payload:{oneOf:[{type:"string"},{type:"boolean"},{type:"object"},{type:"number"}]},updatedBy:{type:"string"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}},title:"changeRequestEventSchema"}},defaultChange:{type:"object",additionalProperties:!1,required:["action","payload"],properties:{action:{type:"string",example:"addStrategy"},payload:{type:"object"}},title:"changeRequestDefaultEventSchema"}},title:"changeRequestFeatureSchema"}},approvals:{type:"array",items:{additionalProperties:!1,type:"object",required:["createdBy","createdAt"],properties:{createdBy:{type:"object",properties:{id:{type:"number",example:33},username:{type:"string",example:"unleash-user"},imageUrl:{type:"string"}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}},title:"changeRequestApprovalSchema"}},comments:{type:"array",items:{additionalProperties:!1,type:"object",required:["text","createdBy","createdAt"],properties:{id:{type:"number",example:33},text:{type:"string",example:"This is a comment"},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0,example:"unleash-user"},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"}},title:"changeRequestCommentSchema"}},createdBy:{type:"object",properties:{username:{type:"string",nullable:!0},imageUrl:{type:"string",nullable:!0}}},createdAt:{type:"string",format:"date-time"}},title:"changeRequestSchema"},title:"changeRequestsSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}}],method:"get",path:"/api/admin/projects/{projectId}/change-requests/pending/{featureName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"Retrieves all pending change requests referencing a feature in the project",description:{content:"This endpoint will retrieve all pending change requests (change requests with a status of Draft | In review | Approved) referencing the given feature toggle name.",type:"text/plain"},url:{path:["api","admin","projects",":projectId","change-requests","pending",":featureName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Retrieves all change requests for a project",permalink:"/reference/api/unleash/get-change-requests-for-project"},next:{title:"Retrieves one change request by id",permalink:"/reference/api/unleash/get-change-request"}},h={},f=[],k={toc:f};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Retrieves all pending change requests referencing a feature in the project"),(0,i.kt)(s.Z,{method:"get",path:"/api/admin/projects/{projectId}/change-requests/pending/{featureName}",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"This endpoint will retrieve all pending change requests (change requests with a status of Draft | In review | Approved) referencing the given feature toggle name."),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(m.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(m.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"changeRequestsSchema")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(o.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:3},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Increasing gradual rollout"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"environment",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"development"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"state",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`Draft`, `In review`, `Approved`, `Applied`, `Cancelled`]",schema:{type:"string",enum:["Draft","In review","Approved","Applied","Cancelled"]},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"minApprovals",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:2},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"project",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"unleash-project"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"features"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"my-feature"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"conflict",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"changes"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"List of changes inside change request. This list may be empty when listing all change requests for a project.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(o.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:33},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"action",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"updateStrategy"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"conflict",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"payload"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))),(0,i.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"boolean")))),(0,i.kt)(d.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"number"))))))))),(0,i.kt)(o.Z,{collapsible:!1,name:"updatedBy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"createdBy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"defaultChange"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"action",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"addStrategy"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"payload",required:!0,schemaName:"object",qualifierMessage:void 0,schema:{type:"object"},mdxType:"SchemaItem"})))),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"approvals"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"createdBy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:33},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"unleash-user"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"comments"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:33},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"text",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"This is a comment"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"createdBy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"unleash-user"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2022-12-12T12:13:24.218Z"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"createdBy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"imageUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'[\n  {\n    "id": 3,\n    "title": "Increasing gradual rollout",\n    "environment": "development",\n    "state": "Draft",\n    "minApprovals": 2,\n    "project": "unleash-project",\n    "features": [\n      {\n        "name": "my-feature",\n        "conflict": "string",\n        "changes": [\n          {\n            "id": 33,\n            "action": "updateStrategy",\n            "conflict": "string",\n            "payload": "string",\n            "updatedBy": "string",\n            "createdBy": {\n              "username": "string",\n              "imageUrl": "string"\n            },\n            "createdAt": "2023-04-29T00:14:01.781Z"\n          }\n        ],\n        "defaultChange": {\n          "action": "addStrategy",\n          "payload": {}\n        }\n      }\n    ],\n    "approvals": [\n      {\n        "createdBy": {\n          "id": 33,\n          "username": "unleash-user",\n          "imageUrl": "string"\n        },\n        "createdAt": "2022-12-12T12:13:24.218Z"\n      }\n    ],\n    "comments": [\n      {\n        "id": 33,\n        "text": "This is a comment",\n        "createdBy": {\n          "username": "unleash-user",\n          "imageUrl": "string"\n        },\n        "createdAt": "2022-12-12T12:13:24.218Z"\n      }\n    ],\n    "createdBy": {\n      "username": "string",\n      "imageUrl": "string"\n    },\n    "createdAt": "2023-04-29T00:14:01.781Z"\n  }\n]',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);