"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4852],{42e3:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>x,frontMatter:()=>p,metadata:()=>c,toc:()=>y});var a=i(87462),n=(i(67294),i(3905)),s=i(70439),r=i(89402),o=i(10725),l=(i(65860),i(5479)),d=(i(83559),i(48567),i(72905));const p={id:"update-context-field",sidebar_label:"updateContextField",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],operationId:"updateContextField",requestBody:{description:"upsertContextFieldSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},stickiness:{type:"boolean"},sortOrder:{type:"number"},legalValues:{type:"array",items:{type:"object",additionalProperties:!1,required:["value"],properties:{value:{type:"string"},description:{type:"string"}}}}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"contextField",in:"path",required:!0,schema:{type:"string"}}],description:"updateContextField",method:"put",path:"/api/admin/context/{contextField}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",stickiness:!0,sortOrder:0,legalValues:[{value:"string",description:"string"}]},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"update Context Field",description:{type:"text/plain"},url:{path:["api","admin","context",":contextField"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"contextField"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/reference/api/unleash/unleash-api"},u=void 0,c={unversionedId:"reference/api/unleash/update-context-field",id:"reference/api/unleash/update-context-field",title:"update-context-field",description:"updateContextField",source:"@site/docs/reference/api/unleash/update-context-field.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-context-field",permalink:"/reference/api/unleash/update-context-field",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/update-context-field.api.mdx",tags:[],version:"current",frontMatter:{id:"update-context-field",sidebar_label:"updateContextField",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],operationId:"updateContextField",requestBody:{description:"upsertContextFieldSchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},stickiness:{type:"boolean"},sortOrder:{type:"number"},legalValues:{type:"array",items:{type:"object",additionalProperties:!1,required:["value"],properties:{value:{type:"string"},description:{type:"string"}}}}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"contextField",in:"path",required:!0,schema:{type:"string"}}],description:"updateContextField",method:"put",path:"/api/admin/context/{contextField}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",stickiness:!0,sortOrder:0,legalValues:[{value:"string",description:"string"}]},info:{title:"Unleash API",version:"4.15.4"},postman:{name:"update Context Field",description:{type:"text/plain"},url:{path:["api","admin","context",":contextField"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"contextField"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getContextField",permalink:"/reference/api/unleash/get-context-field"},next:{title:"deleteContextField",permalink:"/reference/api/unleash/delete-context-field"}},m={},y=[{value:"updateContextField",id:"updatecontextfield",level:2}],h={toc:y};function x(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"updatecontextfield"},"updateContextField"),(0,n.kt)("p",null,"updateContextField"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"contextField",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(r.Z,{mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"upsertContextFieldSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"stickiness",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"legalValues"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"value",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null)))))}x.isMDXComponent=!0}}]);