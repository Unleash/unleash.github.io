"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4852],{40814:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>h,toc:()=>x});var a=i(87462),s=(i(67294),i(3905)),n=i(80334),l=(i(11032),i(46062)),o=i(57138),r=i(21439),d=i(9531),p=(i(15761),i(73418)),c=(i(92414),i(30433));const u={id:"update-context-field",title:"Update an existing context field",description:"Endpoint that allows updating a custom context field. Used to toggle stickiness and add/remove legal values for this context field",sidebar_label:"Update an existing context field",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],description:"Endpoint that allows updating a custom context field. Used to toggle stickiness and add/remove legal values for this context field",operationId:"updateContextField",requestBody:{description:"updateContextFieldSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data to update an existing context field configuration.",properties:{description:{type:"string",description:"A description of the context field",example:"The user's subscription tier"},stickiness:{type:"boolean",description:"`true` if this field should be available for use with [custom stickiness](https://docs.getunleash.io/reference/stickiness#custom-stickiness), otherwise `false`",example:!1},sortOrder:{type:"integer",description:"How this context field should be sorted if no other sort order is selected",example:2},legalValues:{type:"array",description:"A list of allowed values for this context field",example:[{value:"gold"},{value:"silver"},{value:"crystal"}],items:{type:"object",additionalProperties:!1,description:"Describes a legal value. Typically used to limit possible values for contextFields or strategy properties",required:["value"],properties:{value:{description:"The valid value",type:"string",example:"#c154c1"},description:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"}},title:"legalValueSchema"}}},title:"updateContextFieldSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"contextField",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/context/{contextField}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{description:"The user's subscription tier",stickiness:!1,sortOrder:2,legalValues:[{value:"gold"},{value:"silver"},{value:"crystal"}]},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Update an existing context field",description:{content:"Endpoint that allows updating a custom context field. Used to toggle stickiness and add/remove legal values for this context field",type:"text/plain"},url:{path:["api","admin","context",":contextField"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"contextField"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},m=void 0,h={unversionedId:"reference/api/unleash/update-context-field",id:"reference/api/unleash/update-context-field",title:"Update an existing context field",description:"Endpoint that allows updating a custom context field. Used to toggle stickiness and add/remove legal values for this context field",source:"@site/docs/reference/api/unleash/update-context-field.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/update-context-field",permalink:"/reference/api/unleash/update-context-field",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-context-field",title:"Update an existing context field",description:"Endpoint that allows updating a custom context field. Used to toggle stickiness and add/remove legal values for this context field",sidebar_label:"Update an existing context field",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Context"],description:"Endpoint that allows updating a custom context field. Used to toggle stickiness and add/remove legal values for this context field",operationId:"updateContextField",requestBody:{description:"updateContextFieldSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"Data to update an existing context field configuration.",properties:{description:{type:"string",description:"A description of the context field",example:"The user's subscription tier"},stickiness:{type:"boolean",description:"`true` if this field should be available for use with [custom stickiness](https://docs.getunleash.io/reference/stickiness#custom-stickiness), otherwise `false`",example:!1},sortOrder:{type:"integer",description:"How this context field should be sorted if no other sort order is selected",example:2},legalValues:{type:"array",description:"A list of allowed values for this context field",example:[{value:"gold"},{value:"silver"},{value:"crystal"}],items:{type:"object",additionalProperties:!1,description:"Describes a legal value. Typically used to limit possible values for contextFields or strategy properties",required:["value"],properties:{value:{description:"The valid value",type:"string",example:"#c154c1"},description:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"}},title:"legalValueSchema"}}},title:"updateContextFieldSchema"}}}},responses:{200:{description:"This response has no body."}},parameters:[{name:"contextField",in:"path",required:!0,schema:{type:"string"}}],method:"put",path:"/api/admin/context/{contextField}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{description:"The user's subscription tier",stickiness:!1,sortOrder:2,legalValues:[{value:"gold"},{value:"silver"},{value:"crystal"}]},info:{title:"Unleash API",version:"5.6.0-main"},postman:{name:"Update an existing context field",description:{content:"Endpoint that allows updating a custom context field. Used to toggle stickiness and add/remove legal values for this context field",type:"text/plain"},url:{path:["api","admin","context",":contextField"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"contextField"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Gets context field",permalink:"/reference/api/unleash/get-context-field"},next:{title:"Delete an existing context field",permalink:"/reference/api/unleash/delete-context-field"}},f={},x=[{value:"Request",id:"request",level:2}],y={toc:x};function g(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Update an existing context field"),(0,s.kt)(l.Z,{method:"put",path:"/api/admin/context/{contextField}",mdxType:"MethodEndpoint"}),(0,s.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Endpoint that allows updating a custom context field. Used to toggle stickiness and add/remove legal values for this context field"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(d.Z,{className:"paramsItem",param:{name:"contextField",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(r.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"updateContextFieldSchema"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A description of the context field",example:"The user's subscription tier"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"stickiness",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"`true` if this field should be available for use with [custom stickiness](https://docs.getunleash.io/reference/stickiness#custom-stickiness), otherwise `false`",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"How this context field should be sorted if no other sort order is selected",example:2},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"legalValues"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of allowed values for this context field")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"The valid value",type:"string",example:"#c154c1"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Describes this specific legal value",type:"string",example:"Deep fuchsia"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"This response has no body.")),(0,s.kt)("div",null))))))}g.isMDXComponent=!0}}]);