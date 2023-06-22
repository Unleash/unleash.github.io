"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7011],{32357:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>y,default:()=>v,frontMatter:()=>h,metadata:()=>b,toc:()=>k});var r=t(87462),i=(t(67294),t(3905)),s=t(80334),l=(t(11032),t(46062)),n=t(57138),o=t(21439),d=t(9531),p=t(15761),m=t(73418),c=t(92414),u=t(11666);const h={id:"delete-role",title:"deleteRole",description:"deleteRole",sidebar_label:"deleteRole",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"deleteRole",responses:{200:{description:"This response has no body."},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NameExistsError",description:"The name of the error kind"},message:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"roleId",in:"path",required:!0,schema:{type:"string"}}],description:"deleteRole",method:"delete",path:"/api/admin/roles/{roleId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"delete Role",description:{type:"text/plain"},url:{path:["api","admin","roles",":roleId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"roleId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,b={unversionedId:"reference/api/unleash/delete-role",id:"reference/api/unleash/delete-role",title:"deleteRole",description:"deleteRole",source:"@site/docs/reference/api/unleash/delete-role.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/delete-role",permalink:"/reference/api/unleash/delete-role",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-role",title:"deleteRole",description:"deleteRole",sidebar_label:"deleteRole",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Users"],operationId:"deleteRole",responses:{200:{description:"This response has no body."},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"NameExistsError",description:"The name of the error kind"},message:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."}}}}}}},parameters:[{name:"roleId",in:"path",required:!0,schema:{type:"string"}}],description:"deleteRole",method:"delete",path:"/api/admin/roles/{roleId}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.2.0-main"},postman:{name:"delete Role",description:{type:"text/plain"},url:{path:["api","admin","roles",":roleId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"roleId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"updateRole",permalink:"/reference/api/unleash/update-role"},next:{title:"validateRole",permalink:"/reference/api/unleash/validate-role"}},f={},k=[{value:"Request",id:"request",level:2}],T={toc:k};function v(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},T,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"deleteRole"),(0,i.kt)(l.Z,{method:"delete",path:"/api/admin/roles/{roleId}",mdxType:"MethodEndpoint"}),(0,i.kt)(n.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"deleteRole"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"roleId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"This response has no body.")),(0,i.kt)("div",null)),(0,i.kt)(u.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"NameExistsError",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:'There is already a feature called "my-awesome-feature".',description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "NameExistsError",\n  "message": "There is already a feature called \\"my-awesome-feature\\"."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);