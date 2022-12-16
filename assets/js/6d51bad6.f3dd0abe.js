"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9849],{752:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>h,toc:()=>y});var i=t(87462),p=(t(67294),t(3905)),n=t(60961),s=t(48165),r=t(90115),l=t(58475),o=t(5428),c=t(80487),m=(t(54881),t(11666));const d={id:"get-application",title:"getApplication",description:"getApplication",sidebar_label:"getApplication",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getApplication",responses:{200:{description:"applicationSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["appName"],properties:{appName:{type:"string"},sdkVersion:{type:"string"},strategies:{type:"array",items:{type:"string"}},description:{type:"string"},url:{type:"string"},color:{type:"string"},icon:{type:"string"},announced:{type:"boolean"}}}}}}},parameters:[{name:"appName",in:"path",required:!0,schema:{type:"string"}}],description:"getApplication",method:"get",path:"/api/admin/metrics/applications/{appName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get Application",description:{type:"text/plain"},url:{path:["api","admin","metrics","applications",":appName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"appName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},u=void 0,h={unversionedId:"reference/api/unleash/get-application",id:"reference/api/unleash/get-application",title:"getApplication",description:"getApplication",source:"@site/docs/reference/api/unleash/get-application.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-application",permalink:"/reference/api/unleash/get-application",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/get-application.api.mdx",tags:[],version:"current",frontMatter:{id:"get-application",title:"getApplication",description:"getApplication",sidebar_label:"getApplication",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"getApplication",responses:{200:{description:"applicationSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["appName"],properties:{appName:{type:"string"},sdkVersion:{type:"string"},strategies:{type:"array",items:{type:"string"}},description:{type:"string"},url:{type:"string"},color:{type:"string"},icon:{type:"string"},announced:{type:"boolean"}}}}}}},parameters:[{name:"appName",in:"path",required:!0,schema:{type:"string"}}],description:"getApplication",method:"get",path:"/api/admin/metrics/applications/{appName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"get Application",description:{type:"text/plain"},url:{path:["api","admin","metrics","applications",":appName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"appName"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"deleteApplication",permalink:"/reference/api/unleash/delete-application"},next:{title:"getApplications",permalink:"/reference/api/unleash/get-applications"}},g={},y=[{value:"getApplication",id:"getapplication",level:2}],v={toc:y};function k(e){let{components:a,...t}=e;return(0,p.kt)("wrapper",(0,i.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"getapplication"},"getApplication"),(0,p.kt)("p",null,"getApplication"),(0,p.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,p.kt)("summary",{style:{}},(0,p.kt)("strong",null,"Path Parameters")),(0,p.kt)("div",null,(0,p.kt)("ul",null,(0,p.kt)(r.Z,{className:"paramsItem",param:{name:"appName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,p.kt)("div",null,(0,p.kt)(n.Z,{mdxType:"ApiTabs"},(0,p.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,p.kt)("div",null,(0,p.kt)("p",null,"applicationSchema")),(0,p.kt)("div",null,(0,p.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,p.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,p.kt)(c.Z,{mdxType:"SchemaTabs"},(0,p.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,p.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,p.kt)("summary",{style:{textAlign:"left"}},(0,p.kt)("strong",null,"Schema")),(0,p.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,p.kt)("ul",{style:{marginLeft:"1rem"}},(0,p.kt)(o.Z,{collapsible:!1,name:"appName",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,p.kt)(o.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,p.kt)(o.Z,{collapsible:!1,name:"strategies",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,p.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,p.kt)(o.Z,{collapsible:!1,name:"url",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,p.kt)(o.Z,{collapsible:!1,name:"color",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,p.kt)(o.Z,{collapsible:!1,name:"icon",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,p.kt)(o.Z,{collapsible:!1,name:"announced",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,p.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,p.kt)(l.Z,{responseExample:'{\n  "appName": "string",\n  "sdkVersion": "string",\n  "strategies": [\n    "string"\n  ],\n  "description": "string",\n  "url": "string",\n  "color": "string",\n  "icon": "string",\n  "announced": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);