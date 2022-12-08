"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7961],{50231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>j,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var i=a(87462),r=(a(67294),a(3905)),s=a(60961),o=a(48165),n=(a(23380),a(58475)),p=a(5428),c=a(80487),l=(a(54881),a(11666));const d={id:"create-project",title:"createProject",description:"createProject",sidebar_label:"createProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"createProject",requestBody:{description:"createProjectSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["id","name"],properties:{id:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",required:["id","name"],description:"Details about the newly created project.",additionalProperties:!1,properties:{id:{description:"The project's identifier.",type:"string",pattern:"[A-Za-z0-9_~.-]+",example:"pet-shop"},name:{description:"The project's name.",type:"string",minLength:1,example:"Pet shop"},description:{description:"The project's description.",type:"string",nullable:!0,example:"This project contains features related to the new pet shop."}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"createProject",method:"post",path:"/api/admin/projects",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{id:"string",name:"string",description:"string"},info:{title:"Unleash API",version:"4.18.6"},postman:{name:"create Project",description:{type:"text/plain"},url:{path:["api","admin","projects"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},m=void 0,u={unversionedId:"reference/api/unleash/create-project",id:"reference/api/unleash/create-project",title:"createProject",description:"createProject",source:"@site/docs/reference/api/unleash/create-project.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-project",permalink:"/reference/api/unleash/create-project",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/create-project.api.mdx",tags:[],version:"current",frontMatter:{id:"create-project",title:"createProject",description:"createProject",sidebar_label:"createProject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Projects"],operationId:"createProject",requestBody:{description:"createProjectSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["id","name"],properties:{id:{type:"string"},name:{type:"string"},description:{type:"string"}}}}}},responses:{201:{headers:{location:{description:"The location of the newly created resource.",schema:{type:"string",format:"uri"}}},description:"The resource was successfully created.",content:{"application/json":{schema:{type:"object",required:["id","name"],description:"Details about the newly created project.",additionalProperties:!1,properties:{id:{description:"The project's identifier.",type:"string",pattern:"[A-Za-z0-9_~.-]+",example:"pet-shop"},name:{description:"The project's name.",type:"string",minLength:1,example:"Pet shop"},description:{description:"The project's description.",type:"string",nullable:!0,example:"This project contains features related to the new pet shop."}}}}}},400:{description:"The request data does not match what we expect."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."}},description:"createProject",method:"post",path:"/api/admin/projects",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{id:"string",name:"string",description:"string"},info:{title:"Unleash API",version:"4.18.6"},postman:{name:"create Project",description:{type:"text/plain"},url:{path:["api","admin","projects"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getProjects",permalink:"/reference/api/unleash/get-projects"},next:{title:"validateProject",permalink:"/reference/api/unleash/validate-project"}},h={},y=[{value:"createProject",id:"createproject",level:2}],g={toc:y};function j(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"createproject"},"createProject"),(0,r.kt)("p",null,"createProject"),(0,r.kt)(o.Z,{mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"createProjectSchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(l.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The resource was successfully created.")),(0,r.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Response Headers")),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",{className:"schemaItem"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"location"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")),(0,r.kt)("div",null,(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The location of the newly created resource.")))))),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"The project's identifier.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `[A-Za-z0-9_~.-]+`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"The project's name.",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:"The project's description.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "id": "pet-shop",\n  "name": "Pet shop",\n  "description": "This project contains features related to the new pet shop."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The request data does not match what we expect.")),(0,r.kt)("div",null)),(0,r.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,r.kt)("div",null)))))}j.isMDXComponent=!0}}]);