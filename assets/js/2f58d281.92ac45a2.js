"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3256],{48840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>h,toc:()=>v});var a=n(87462),i=(n(67294),n(3905)),o=n(70439),r=n(89402),s=n(10725),p=n(65860),d=n(5479),m=n(83559),l=(n(48567),n(72905));const u={id:"update-environment",sidebar_label:"Updates an environment by name",hide_title:!0,hide_table_of_contents:!0,api:{description:"Given an environment by name updates the environment with the given payload. Note that `name`, `enabled` and `protected` cannot be changed by this API",tags:["admin"],operationId:"updateEnvironment",requestBody:{description:"updateEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",properties:{type:{type:"string",description:"Updates the type of environment (i.e. development or production)."},sortOrder:{type:"integer",description:"Changes the sort order of this environment."}}}}}},responses:{200:{description:"environmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled"],properties:{name:{type:"string"},type:{type:"string"},enabled:{type:"boolean"},protected:{type:"boolean"},sortOrder:{type:"number"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/environments/update/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{type:"string",sortOrder:0},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"Updates an environment by name",description:{content:"Given an environment by name updates the environment with the given payload. Note that `name`, `enabled` and `protected` cannot be changed by this API",type:"text/plain"},url:{path:["api","admin","environments","update",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/reference/api/unleash/unleash-api"},c=void 0,h={unversionedId:"reference/api/unleash/update-environment",id:"reference/api/unleash/update-environment",title:"update-environment",description:"Updates an environment by name",source:"@site/docs/reference/api/unleash/update-environment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-environment",permalink:"/reference/api/unleash/update-environment",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/update-environment.api.mdx",tags:[],version:"current",frontMatter:{id:"update-environment",sidebar_label:"Updates an environment by name",hide_title:!0,hide_table_of_contents:!0,api:{description:"Given an environment by name updates the environment with the given payload. Note that `name`, `enabled` and `protected` cannot be changed by this API",tags:["admin"],operationId:"updateEnvironment",requestBody:{description:"updateEnvironmentSchema",required:!0,content:{"application/json":{schema:{type:"object",properties:{type:{type:"string",description:"Updates the type of environment (i.e. development or production)."},sortOrder:{type:"integer",description:"Changes the sort order of this environment."}}}}}},responses:{200:{description:"environmentSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name","type","enabled"],properties:{name:{type:"string"},type:{type:"string"},enabled:{type:"boolean"},protected:{type:"boolean"},sortOrder:{type:"number"}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},parameters:[{name:"name",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/environments/update/{name}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{type:"string",sortOrder:0},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"Updates an environment by name",description:{content:"Given an environment by name updates the environment with the given payload. Note that `name`, `enabled` and `protected` cannot be changed by this API",type:"text/plain"},url:{path:["api","admin","environments","update",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"name"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/reference/api/unleash/unleash-api"}},y={},v=[{value:"Updates an environment by name",id:"updates-an-environment-by-name",level:2}],b={toc:v};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"updates-an-environment-by-name"},"Updates an environment by name"),(0,i.kt)("p",null,"Given an environment by name updates the environment with the given payload. Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"protected")," cannot be changed by this API"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"updateEnvironmentSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:"Updates the type of environment (i.e. development or production).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaDescription:"Changes the sort order of this environment.",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"environmentSchema")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"enabled",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"protected",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "name": "string",\n  "type": "string",\n  "enabled": true,\n  "protected": true,\n  "sortOrder": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The request data does not match what we expect.")),(0,i.kt)("div",null)),(0,i.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,i.kt)("div",null)))))}g.isMDXComponent=!0}}]);