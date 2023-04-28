"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8015],{47043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>y,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var a=r(87462),s=(r(67294),r(3905)),i=r(80334),n=(r(11032),r(46062)),o=r(21439),p=r(9531),d=(r(15761),r(73418)),m=(r(92414),r(11666));const l={id:"set-strategy-sort-order",title:"setStrategySortOrder",description:"setStrategySortOrder",sidebar_label:"setStrategySortOrder",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"setStrategySortOrder",requestBody:{description:"setStrategySortOrderSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","sortOrder"],properties:{id:{type:"string"},sortOrder:{type:"number"}}},title:"setStrategySortOrderSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],description:"setStrategySortOrder",method:"post",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/strategies/set-sort-order",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{id:"string",sortOrder:0}],info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"set Strategy Sort Order",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment","strategies","set-sort-order"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,u={unversionedId:"reference/api/unleash/set-strategy-sort-order",id:"reference/api/unleash/set-strategy-sort-order",title:"setStrategySortOrder",description:"setStrategySortOrder",source:"@site/docs/reference/api/unleash/set-strategy-sort-order.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/set-strategy-sort-order",permalink:"/reference/api/unleash/set-strategy-sort-order",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"set-strategy-sort-order",title:"setStrategySortOrder",description:"setStrategySortOrder",sidebar_label:"setStrategySortOrder",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Features"],operationId:"setStrategySortOrder",requestBody:{description:"setStrategySortOrderSchema",required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","sortOrder"],properties:{id:{type:"string"},sortOrder:{type:"number"}}},title:"setStrategySortOrderSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"projectId",in:"path",required:!0,schema:{type:"string"}},{name:"featureName",in:"path",required:!0,schema:{type:"string"}},{name:"environment",in:"path",required:!0,schema:{type:"string"}}],description:"setStrategySortOrder",method:"post",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/strategies/set-sort-order",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:[{id:"string",sortOrder:0}],info:{title:"Unleash API",version:"5.1.0-beta.5"},postman:{name:"set Strategy Sort Order",description:{type:"text/plain"},url:{path:["api","admin","projects",":projectId","features",":featureName","environments",":environment","strategies","set-sort-order"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"projectId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"featureName"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"environment"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"deleteFeatureStrategy",permalink:"/reference/api/unleash/delete-feature-strategy"},next:{title:"getFeatures",permalink:"/reference/api/unleash/get-features"}},c={},h=[],g={toc:h};function f(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"setStrategySortOrder"),(0,s.kt)(n.Z,{method:"post",path:"/api/admin/projects/{projectId}/features/{featureName}/environments/{environment}/strategies/set-sort-order",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"setStrategySortOrder"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"projectId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"featureName",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"environment",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("span",{style:{opacity:"0.6"}}," array"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"setStrategySortOrderSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"sortOrder",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null))))))}f.isMDXComponent=!0}}]);