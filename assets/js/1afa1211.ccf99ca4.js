"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6318],{56245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>T,contentTitle:()=>h,default:()=>v,frontMatter:()=>y,metadata:()=>u,toc:()=>f});var s=a(87462),i=(a(67294),a(3905)),n=a(80334),p=(a(11032),a(46062)),r=a(57138),l=a(21439),o=a(9531),m=a(15761),d=a(73418),c=a(92414),g=a(11666);const y={id:"get-tags-by-type",title:"getTagsByType",description:"getTagsByType",sidebar_label:"getTagsByType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagsByType",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{description:"A list of tags with a version number",type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer",description:"The version of the schema used to model the tags."},tags:{type:"array",description:"A list of tags.",items:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"}}},title:"tagsSchema"}}}}},parameters:[{name:"type",in:"path",required:!0,schema:{type:"string"}}],description:"getTagsByType",method:"get",path:"/api/admin/tags/{type}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Tags By Type",description:{type:"text/plain"},url:{path:["api","admin","tags",":type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},h=void 0,u={unversionedId:"reference/api/unleash/get-tags-by-type",id:"reference/api/unleash/get-tags-by-type",title:"getTagsByType",description:"getTagsByType",source:"@site/docs/reference/api/unleash/get-tags-by-type.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-tags-by-type",permalink:"/reference/api/unleash/get-tags-by-type",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-tags-by-type",title:"getTagsByType",description:"getTagsByType",sidebar_label:"getTagsByType",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTagsByType",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{description:"A list of tags with a version number",type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer",description:"The version of the schema used to model the tags."},tags:{type:"array",description:"A list of tags.",items:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"}}},title:"tagsSchema"}}}}},parameters:[{name:"type",in:"path",required:!0,schema:{type:"string"}}],description:"getTagsByType",method:"get",path:"/api/admin/tags/{type}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"get Tags By Type",description:{type:"text/plain"},url:{path:["api","admin","tags",":type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"addTagToFeatures",permalink:"/reference/api/unleash/add-tag-to-features"},next:{title:"getTag",permalink:"/reference/api/unleash/get-tag"}},T={},f=[{value:"Request",id:"request",level:2}],k={toc:f};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"getTagsByType"),(0,i.kt)(p.Z,{method:"get",path:"/api/admin/tags/{type}",mdxType:"MethodEndpoint"}),(0,i.kt)(r.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"getTagsByType"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"type",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(g.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"tagsSchema")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(g.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The version of the schema used to model the tags."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"tags"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"A list of tags.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(d.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(g.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "version": 0,\n  "tags": [\n    {\n      "value": "a-tag-value",\n      "type": "simple"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);