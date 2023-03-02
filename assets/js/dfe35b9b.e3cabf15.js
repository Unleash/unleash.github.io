"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[768],{38024:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var i=a(87462),n=(a(67294),a(3905)),s=a(60961),o=a(48165),r=(a(90115),a(58475),a(5428)),d=(a(80487),a(54881),a(11666));const l={id:"validate-segment",title:"Validates if a segment name exists",description:"Uses the name provided in the body of the request to validate if the given name exists or not",sidebar_label:"Validates if a segment name exists",hide_title:!0,hide_table_of_contents:!0,api:{description:"Uses the name provided in the body of the request to validate if the given name exists or not",tags:["Strategies"],operationId:"validateSegment",requestBody:{description:"nameSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"}}}}}},responses:{204:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively."}},method:"post",path:"/api/admin/segments/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string"},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"Validates if a segment name exists",description:{content:"Uses the name provided in the body of the request to validate if the given name exists or not",type:"text/plain"},url:{path:["api","admin","segments","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},m=void 0,p={unversionedId:"reference/api/unleash/validate-segment",id:"reference/api/unleash/validate-segment",title:"Validates if a segment name exists",description:"Uses the name provided in the body of the request to validate if the given name exists or not",source:"@site/docs/reference/api/unleash/validate-segment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/validate-segment",permalink:"/reference/api/unleash/validate-segment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"validate-segment",title:"Validates if a segment name exists",description:"Uses the name provided in the body of the request to validate if the given name exists or not",sidebar_label:"Validates if a segment name exists",hide_title:!0,hide_table_of_contents:!0,api:{description:"Uses the name provided in the body of the request to validate if the given name exists or not",tags:["Strategies"],operationId:"validateSegment",requestBody:{description:"nameSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["name"],properties:{name:{type:"string"}}}}}},responses:{204:{description:"This response has no body."},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`."},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively."}},method:"post",path:"/api/admin/segments/validate",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string"},info:{title:"Unleash API",version:"4.22.0-beta.33"},postman:{name:"Validates if a segment name exists",description:{content:"Uses the name provided in the body of the request to validate if the given name exists or not",type:"text/plain"},url:{path:["api","admin","segments","validate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Strategies",permalink:"/reference/api/unleash/strategies"},next:{title:"getSegmentsByStrategyId",permalink:"/reference/api/unleash/get-segments-by-strategy-id"}},u={},h=[{value:"Validates if a segment name exists",id:"validates-if-a-segment-name-exists",level:2}],c={toc:h};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"validates-if-a-segment-name-exists"},"Validates if a segment name exists"),(0,n.kt)("p",null,"Uses the name provided in the body of the request to validate if the given name exists or not"),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"nameSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.")),(0,n.kt)("div",null)))))}v.isMDXComponent=!0}}]);