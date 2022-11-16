"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4245],{90447:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var i=t(87462),n=(t(67294),t(3905)),r=t(60961),s=t(48165),p=t(23380),o=(t(58475),t(5428)),l=(t(80487),t(54881),t(11666));const c={id:"create-application",title:"createApplication",description:"createApplication",sidebar_label:"createApplication",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"createApplication",responses:{202:{description:"This response has no body."}},requestBody:{description:"applicationSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["appName"],properties:{appName:{type:"string"},sdkVersion:{type:"string"},strategies:{type:"array",items:{type:"string"}},description:{type:"string"},url:{type:"string"},color:{type:"string"},icon:{type:"string"},announced:{type:"boolean"}}}}}},parameters:[{name:"appName",in:"path",required:!0,schema:{type:"string"}}],description:"createApplication",method:"post",path:"/api/admin/metrics/applications/{appName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"string",sdkVersion:"string",strategies:["string"],description:"string",url:"string",color:"string",icon:"string",announced:!0},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"create Application",description:{type:"text/plain"},url:{path:["api","admin","metrics","applications",":appName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"appName"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},d=void 0,m={unversionedId:"reference/api/unleash/create-application",id:"reference/api/unleash/create-application",title:"createApplication",description:"createApplication",source:"@site/docs/reference/api/unleash/create-application.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/create-application",permalink:"/reference/api/unleash/create-application",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/create-application.api.mdx",tags:[],version:"current",frontMatter:{id:"create-application",title:"createApplication",description:"createApplication",sidebar_label:"createApplication",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Metrics"],operationId:"createApplication",responses:{202:{description:"This response has no body."}},requestBody:{description:"applicationSchema",required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["appName"],properties:{appName:{type:"string"},sdkVersion:{type:"string"},strategies:{type:"array",items:{type:"string"}},description:{type:"string"},url:{type:"string"},color:{type:"string"},icon:{type:"string"},announced:{type:"boolean"}}}}}},parameters:[{name:"appName",in:"path",required:!0,schema:{type:"string"}}],description:"createApplication",method:"post",path:"/api/admin/metrics/applications/{appName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{appName:"string",sdkVersion:"string",strategies:["string"],description:"string",url:"string",color:"string",icon:"string",announced:!0},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"create Application",description:{type:"text/plain"},url:{path:["api","admin","metrics","applications",":appName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"appName"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"Metrics",permalink:"/reference/api/unleash/metrics"},next:{title:"deleteApplication",permalink:"/reference/api/unleash/delete-application"}},u={},h=[{value:"createApplication",id:"createapplication",level:2}],y={toc:h};function g(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"createapplication"},"createApplication"),(0,n.kt)("p",null,"createApplication"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(p.Z,{className:"paramsItem",param:{name:"appName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(s.Z,{mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"applicationSchema"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"appName",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"sdkVersion",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"strategies",required:!1,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"url",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"color",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"icon",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"announced",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null)))))}g.isMDXComponent=!0}}]);