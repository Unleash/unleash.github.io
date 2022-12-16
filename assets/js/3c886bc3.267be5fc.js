"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5945],{46401:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var i=a(87462),r=(a(67294),a(3905)),s=a(60961),n=a(48165),p=a(90115),o=(a(58475),a(5428)),d=(a(80487),a(54881),a(11666));const l={id:"update-strategy",title:"updateStrategy",description:"updateStrategy",sidebar_label:"updateStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"updateStrategy",requestBody:{description:"upsertStrategySchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},editable:{type:"boolean"},parameters:{type:"array",items:{type:"object",properties:{name:{type:"string"},type:{type:"string"},description:{type:"string"},required:{type:"boolean"}}}}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"strategyName",in:"path",required:!0,schema:{type:"string"}}],description:"updateStrategy",method:"put",path:"/api/admin/strategies/{strategyName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",editable:!0,parameters:[{name:"string",type:"string",description:"string",required:!0}]},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"update Strategy",description:{type:"text/plain"},url:{path:["api","admin","strategies",":strategyName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyName"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api"},m=void 0,u={unversionedId:"reference/api/unleash/update-strategy",id:"reference/api/unleash/update-strategy",title:"updateStrategy",description:"updateStrategy",source:"@site/docs/reference/api/unleash/update-strategy.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-strategy",permalink:"/reference/api/unleash/update-strategy",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/update-strategy.api.mdx",tags:[],version:"current",frontMatter:{id:"update-strategy",title:"updateStrategy",description:"updateStrategy",sidebar_label:"updateStrategy",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Strategies"],operationId:"updateStrategy",requestBody:{description:"upsertStrategySchema",required:!0,content:{"application/json":{schema:{type:"object",required:["name"],properties:{name:{type:"string"},description:{type:"string"},editable:{type:"boolean"},parameters:{type:"array",items:{type:"object",properties:{name:{type:"string"},type:{type:"string"},description:{type:"string"},required:{type:"boolean"}}}}}}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"strategyName",in:"path",required:!0,schema:{type:"string"}}],description:"updateStrategy",method:"put",path:"/api/admin/strategies/{strategyName}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{name:"string",description:"string",editable:!0,parameters:[{name:"string",type:"string",description:"string",required:!0}]},info:{title:"Unleash API",version:"4.19.1"},postman:{name:"update Strategy",description:{type:"text/plain"},url:{path:["api","admin","strategies",":strategyName"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"strategyName"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"removeStrategy",permalink:"/reference/api/unleash/remove-strategy"},next:{title:"deprecateStrategy",permalink:"/reference/api/unleash/deprecate-strategy"}},y={},c=[{value:"updateStrategy",id:"updatestrategy",level:2}],g={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"updatestrategy"},"updateStrategy"),(0,r.kt)("p",null,"updateStrategy"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"strategyName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(n.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"upsertStrategySchema"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"editable",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"parameters"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"required",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"This response has no body.")),(0,r.kt)("div",null)))))}h.isMDXComponent=!0}}]);