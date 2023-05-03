"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6079],{57352:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>g,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var r=a(87462),i=(a(67294),a(3905)),o=a(80334),s=(a(11032),a(46062)),n=a(21439),p=a(9531),m=a(15761),l=a(73418),c=a(92414),d=a(11666);const u={id:"get-project-overview",title:"getProjectOverview",description:"getProjectOverview",sidebar_label:"getProjectOverview",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjectOverview",responses:{200:{description:"projectOverviewSchema",content:{"application/json":{schema:{type:"object",required:["featureCount","memberCount","projects"],additionalProperties:!1,properties:{featureCount:{type:"number"},memberCount:{type:"number"},projects:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","name"],description:"A definition of the project used for projects listing purposes",properties:{id:{type:"string",example:"dx-squad",description:"The id of this project"},name:{type:"string",example:"DX-Squad",description:"The name of this project"},description:{type:"string",nullable:!0,example:"DX squad feature release",description:"Additional information about the project"},health:{type:"number",example:50,description:"An indicator of the [project's health](https://docs.getunleash.io/reference/technical-debt#health-rating) on a scale from 0 to 100"},featureCount:{type:"number",example:10,description:"The number of features this project has"},memberCount:{type:"number",example:4,description:"The number of members this project has"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time",nullable:!0},favorite:{type:"boolean",example:!0,description:"`true` if the project was favorited, otherwise `false`."},mode:{type:"string",enum:["open","protected"],example:"open",description:"The project's [collaboration mode](https://docs.getunleash.io/reference/project-collaboration-mode). Determines whether non-project members can submit change requests or not."},defaultStickiness:{type:"string",example:"userId",description:"A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy"}},title:"projectSchema"}}},title:"projectOverviewSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"getProjectOverview",method:"get",path:"/api/admin/projects/{projectId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"get Project Overview",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,f={unversionedId:"reference/api/unleash/get-project-overview",id:"reference/api/unleash/get-project-overview",title:"getProjectOverview",description:"getProjectOverview",source:"@site/docs/reference/api/unleash/get-project-overview.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-project-overview",permalink:"/reference/api/unleash/get-project-overview",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-overview",title:"getProjectOverview",description:"getProjectOverview",sidebar_label:"getProjectOverview",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjectOverview",responses:{200:{description:"projectOverviewSchema",content:{"application/json":{schema:{type:"object",required:["featureCount","memberCount","projects"],additionalProperties:!1,properties:{featureCount:{type:"number"},memberCount:{type:"number"},projects:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","name"],description:"A definition of the project used for projects listing purposes",properties:{id:{type:"string",example:"dx-squad",description:"The id of this project"},name:{type:"string",example:"DX-Squad",description:"The name of this project"},description:{type:"string",nullable:!0,example:"DX squad feature release",description:"Additional information about the project"},health:{type:"number",example:50,description:"An indicator of the [project's health](https://docs.getunleash.io/reference/technical-debt#health-rating) on a scale from 0 to 100"},featureCount:{type:"number",example:10,description:"The number of features this project has"},memberCount:{type:"number",example:4,description:"The number of members this project has"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time",nullable:!0},favorite:{type:"boolean",example:!0,description:"`true` if the project was favorited, otherwise `false`."},mode:{type:"string",enum:["open","protected"],example:"open",description:"The project's [collaboration mode](https://docs.getunleash.io/reference/project-collaboration-mode). Determines whether non-project members can submit change requests or not."},defaultStickiness:{type:"string",example:"userId",description:"A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy"}},title:"projectSchema"}}},title:"projectOverviewSchema"}}}}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}}],description:"getProjectOverview",method:"get",path:"/api/admin/projects/{projectId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"get Project Overview",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"deleteProject",permalink:"/reference/api/unleash/delete-project"},next:{title:"getProjectUsers",permalink:"/reference/api/unleash/get-project-users"}},y={},b=[],v={toc:b};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"getProjectOverview"),(0,i.kt)(s.Z,{method:"get",path:"/api/admin/projects/{projectId}",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"getProjectOverview"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"projectOverviewSchema")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"featureCount",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"memberCount",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"projects"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"dx-squad",description:"The id of this project"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"DX-Squad",description:"The name of this project"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"DX squad feature release",description:"Additional information about the project"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"health",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:50,description:"An indicator of the [project's health](https://docs.getunleash.io/reference/technical-debt#health-rating) on a scale from 0 to 100"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"featureCount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:10,description:"The number of features this project has"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"memberCount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:4,description:"The number of members this project has"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"favorite",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the project was favorited, otherwise `false`."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"mode",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`open`, `protected`]",schema:{type:"string",enum:["open","protected"],example:"open",description:"The project's [collaboration mode](https://docs.getunleash.io/reference/project-collaboration-mode). Determines whether non-project members can submit change requests or not."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"defaultStickiness",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"userId",description:"A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "featureCount": 0,\n  "memberCount": 0,\n  "projects": [\n    {\n      "id": "dx-squad",\n      "name": "DX-Squad",\n      "description": "DX squad feature release",\n      "health": 50,\n      "featureCount": 10,\n      "memberCount": 4,\n      "createdAt": "2023-05-03T00:14:02.397Z",\n      "updatedAt": "2023-05-03T00:14:02.397Z",\n      "favorite": true,\n      "mode": "open",\n      "defaultStickiness": "userId"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}g.isMDXComponent=!0}}]);