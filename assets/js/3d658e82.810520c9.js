"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[413],{44064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>v});var i=n(87462),a=(n(67294),n(3905)),o=n(60961),s=n(48165),r=(n(23380),n(58475),n(5428)),d=(n(80487),n(54881),n(11666));const l={id:"validate-environment-name",title:"Validates if an environment name exists",description:"Uses the name provided in the body of the request to validate if the given name exists or not",sidebar_label:"Validates if an environment name exists",hide_title:!0,hide_table_of_contents:!0,api:{description:"Uses the name provided in the body of the request to validate if the given name exists or not",tags:["Environments"],operationId:"validateEnvironmentName",requestBody:{description:"nameSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"}}}}}},responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},method:"post",path:"/api/admin/environments/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string"},info:{title:"Unleash API",version:"4.18.6"},postman:{name:"Validates if an environment name exists",description:{content:"Uses the name provided in the body of the request to validate if the given name exists or not",type:"text/plain"},url:{path:["api","admin","environments","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},m=void 0,p={unversionedId:"reference/api/unleash/validate-environment-name",id:"reference/api/unleash/validate-environment-name",title:"Validates if an environment name exists",description:"Uses the name provided in the body of the request to validate if the given name exists or not",source:"@site/docs/reference/api/unleash/validate-environment-name.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/validate-environment-name",permalink:"/reference/api/unleash/validate-environment-name",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/validate-environment-name.api.mdx",tags:[],version:"current",frontMatter:{id:"validate-environment-name",title:"Validates if an environment name exists",description:"Uses the name provided in the body of the request to validate if the given name exists or not",sidebar_label:"Validates if an environment name exists",hide_title:!0,hide_table_of_contents:!0,api:{description:"Uses the name provided in the body of the request to validate if the given name exists or not",tags:["Environments"],operationId:"validateEnvironmentName",requestBody:{description:"nameSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"}}}}}},responses:{200:{description:"This response has no body."},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},method:"post",path:"/api/admin/environments/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string"},info:{title:"Unleash API",version:"4.18.6"},postman:{name:"Validates if an environment name exists",description:{content:"Uses the name provided in the body of the request to validate if the given name exists or not",type:"text/plain"},url:{path:["api","admin","environments","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getAllEnvironments",permalink:"/reference/api/unleash/get-all-environments"},next:{title:"Updates an environment by name",permalink:"/reference/api/unleash/update-environment"}},h={},v=[{value:"Validates if an environment name exists",id:"validates-if-an-environment-name-exists",level:2}],u={toc:v};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"validates-if-an-environment-name-exists"},"Validates if an environment name exists"),(0,a.kt)("p",null,"Uses the name provided in the body of the request to validate if the given name exists or not"),(0,a.kt)(s.Z,{mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,a.kt)("p",null,"nameSchema"))),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(r.Z,{collapsible:!1,name:"name",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"This response has no body.")),(0,a.kt)("div",null)),(0,a.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The request data does not match what we expect.")),(0,a.kt)("div",null)),(0,a.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,a.kt)("div",null)))))}c.isMDXComponent=!0}}]);