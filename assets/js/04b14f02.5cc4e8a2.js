"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2946],{35125:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>h,toc:()=>y});var s=a(87462),i=(a(67294),a(3905)),n=a(80334),r=(a(11032),a(46062)),l=a(21439),p=(a(9531),a(15761)),o=a(73418),m=a(92414),g=a(11666);const c={id:"get-tags",title:"getTags",description:"getTags",sidebar_label:"getTags",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTags",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{description:"A list of tags with a version number",type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer",description:"The version of the schema used to model the tags."},tags:{type:"array",description:"A list of tags.",items:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"}}},title:"tagsSchema"}}}}},description:"getTags",method:"get",path:"/api/admin/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"get Tags",description:{type:"text/plain"},url:{path:["api","admin","tags"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,h={unversionedId:"reference/api/unleash/get-tags",id:"reference/api/unleash/get-tags",title:"getTags",description:"getTags",source:"@site/docs/reference/api/unleash/get-tags.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-tags",permalink:"/reference/api/unleash/get-tags",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-tags",title:"getTags",description:"getTags",sidebar_label:"getTags",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Tags"],operationId:"getTags",responses:{200:{description:"tagsSchema",content:{"application/json":{schema:{description:"A list of tags with a version number",type:"object",additionalProperties:!1,required:["version","tags"],properties:{version:{type:"integer",description:"The version of the schema used to model the tags."},tags:{type:"array",description:"A list of tags.",items:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"}}},title:"tagsSchema"}}}}},description:"getTags",method:"get",path:"/api/admin/tags",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.1.0-beta.12"},postman:{name:"get Tags",description:{type:"text/plain"},url:{path:["api","admin","tags"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Tags",permalink:"/reference/api/unleash/tags"},next:{title:"createTag",permalink:"/reference/api/unleash/create-tag"}},u={},y=[],f={toc:y};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"getTags"),(0,i.kt)(r.Z,{method:"get",path:"/api/admin/tags",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"getTags"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(g.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"tagsSchema")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(g.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The version of the schema used to model the tags."},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"tags"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"A list of tags.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(o.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(g.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "version": 0,\n  "tags": [\n    {\n      "value": "a-tag-value",\n      "type": "simple"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);