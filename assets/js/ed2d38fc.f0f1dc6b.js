"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1352],{52471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),r=a(60961),o=a(48165),n=(a(90115),a(58475)),p=a(5428),l=a(80487),c=(a(54881),a(11666));const m={id:"get-projects",title:"getProjects",description:"getProjects",sidebar_label:"getProjects",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjects",responses:{200:{description:"projectsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","projects"],description:"An overview of all the projects in the Unleash instance",properties:{version:{type:"integer"},projects:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","name"],description:"A definition of the project used for projects listing purposes",properties:{id:{type:"string",example:"dx-squad",description:"The id of this project"},name:{type:"string",example:"DX-Squad",description:"The name of this project"},description:{type:"string",nullable:!0,example:"DX squad feature release",description:"Additional information about the project"},health:{type:"number",example:50,description:"An indicator of the [project's health](https://docs.getunleash.io/reference/technical-debt#health-rating) on a scale from 0 to 100"},featureCount:{type:"number",example:10,description:"The number of features this project has"},memberCount:{type:"number",example:4,description:"The number of members this project has"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time",nullable:!0},favorite:{type:"boolean",example:!0,description:"`true` if the project was favorited, otherwise `false`."},mode:{type:"string",enum:["open","protected"],example:"open",description:"A mode of the project affecting what actions are possible in this project"},defaultStickiness:{type:"string",enum:["default","userId","sessionId","random"],example:"userId",description:"A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy"}}},description:"A list of projects in the Unleash instance"}}}}}}},description:"getProjects",method:"get",path:"/api/admin/projects",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.104"},postman:{name:"get Projects",description:{type:"text/plain"},url:{path:["api","admin","projects"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,u={unversionedId:"reference/api/unleash/get-projects",id:"reference/api/unleash/get-projects",title:"getProjects",description:"getProjects",source:"@site/docs/reference/api/unleash/get-projects.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-projects",permalink:"/reference/api/unleash/get-projects",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-projects",title:"getProjects",description:"getProjects",sidebar_label:"getProjects",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"getProjects",responses:{200:{description:"projectsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","projects"],description:"An overview of all the projects in the Unleash instance",properties:{version:{type:"integer"},projects:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","name"],description:"A definition of the project used for projects listing purposes",properties:{id:{type:"string",example:"dx-squad",description:"The id of this project"},name:{type:"string",example:"DX-Squad",description:"The name of this project"},description:{type:"string",nullable:!0,example:"DX squad feature release",description:"Additional information about the project"},health:{type:"number",example:50,description:"An indicator of the [project's health](https://docs.getunleash.io/reference/technical-debt#health-rating) on a scale from 0 to 100"},featureCount:{type:"number",example:10,description:"The number of features this project has"},memberCount:{type:"number",example:4,description:"The number of members this project has"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time",nullable:!0},favorite:{type:"boolean",example:!0,description:"`true` if the project was favorited, otherwise `false`."},mode:{type:"string",enum:["open","protected"],example:"open",description:"A mode of the project affecting what actions are possible in this project"},defaultStickiness:{type:"string",enum:["default","userId","sessionId","random"],example:"userId",description:"A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy"}}},description:"A list of projects in the Unleash instance"}}}}}}},description:"getProjects",method:"get",path:"/api/admin/projects",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.22.0-beta.104"},postman:{name:"get Projects",description:{type:"text/plain"},url:{path:["api","admin","projects"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Projects",permalink:"/reference/api/unleash/projects"},next:{title:"createProject",permalink:"/reference/api/unleash/create-project"}},h={},f=[{value:"getProjects",id:"getprojects",level:2}],y={toc:f};function g(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getprojects"},"getProjects"),(0,s.kt)("p",null,"getProjects"),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"projectsSchema")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"version",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"projects"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of projects in the Unleash instance")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"dx-squad",description:"The id of this project"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"DX-Squad",description:"The name of this project"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"DX squad feature release",description:"Additional information about the project"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"health",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:50,description:"An indicator of the [project's health](https://docs.getunleash.io/reference/technical-debt#health-rating) on a scale from 0 to 100"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"featureCount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:10,description:"The number of features this project has"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"memberCount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:4,description:"The number of members this project has"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"favorite",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"`true` if the project was favorited, otherwise `false`."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"mode",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`open`, `protected`]",schema:{type:"string",enum:["open","protected"],example:"open",description:"A mode of the project affecting what actions are possible in this project"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"defaultStickiness",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`default`, `userId`, `sessionId`, `random`]",schema:{type:"string",enum:["default","userId","sessionId","random"],example:"userId",description:"A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "version": 0,\n  "projects": [\n    {\n      "id": "dx-squad",\n      "name": "DX-Squad",\n      "description": "DX squad feature release",\n      "health": 50,\n      "featureCount": 10,\n      "memberCount": 4,\n      "createdAt": "2023-03-22",\n      "updatedAt": "2023-03-22",\n      "favorite": true,\n      "mode": "open",\n      "defaultStickiness": "userId"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);