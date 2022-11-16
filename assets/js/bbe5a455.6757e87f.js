"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2664],{69102:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var i=s(87462),n=(s(67294),s(3905)),a=s(60961),r=(s(48165),s(23380)),o=(s(58475),s(5428),s(80487),s(54881),s(11666));const d={id:"remove-segment",title:"Deletes a segment by id",description:"Deletes a segment by its id, if not found returns a 409 error",sidebar_label:"Deletes a segment by id",hide_title:!0,hide_table_of_contents:!0,api:{description:"Deletes a segment by its id, if not found returns a 409 error",tags:["Strategies"],operationId:"removeSegment",responses:{204:{description:"This response has no body."},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively."}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/segments/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"Deletes a segment by id",description:{content:"Deletes a segment by its id, if not found returns a 409 error",type:"text/plain"},url:{path:["api","admin","segments",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api"},l=void 0,p={unversionedId:"reference/api/unleash/remove-segment",id:"reference/api/unleash/remove-segment",title:"Deletes a segment by id",description:"Deletes a segment by its id, if not found returns a 409 error",source:"@site/docs/reference/api/unleash/remove-segment.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/remove-segment",permalink:"/reference/api/unleash/remove-segment",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/remove-segment.api.mdx",tags:[],version:"current",frontMatter:{id:"remove-segment",title:"Deletes a segment by id",description:"Deletes a segment by its id, if not found returns a 409 error",sidebar_label:"Deletes a segment by id",hide_title:!0,hide_table_of_contents:!0,api:{description:"Deletes a segment by its id, if not found returns a 409 error",tags:["Strategies"],operationId:"removeSegment",responses:{204:{description:"This response has no body."},409:{description:"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively."}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],method:"delete",path:"/api/admin/segments/{id}",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"4.18.0-beta.7"},postman:{name:"Deletes a segment by id",description:{content:"Deletes a segment by its id, if not found returns a 409 error",type:"text/plain"},url:{path:["api","admin","segments",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"reference/api/unleash/unleash-api"},sidebar:"documentation",previous:{title:"getStrategiesBySegmentId",permalink:"/reference/api/unleash/get-strategies-by-segment-id"},next:{title:"Update segment by id",permalink:"/reference/api/unleash/update-segment"}},u={},m=[{value:"Deletes a segment by id",id:"deletes-a-segment-by-id",level:2}],c={toc:m};function h(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"deletes-a-segment-by-id"},"Deletes a segment by id"),(0,n.kt)("p",null,"Deletes a segment by its id, if not found returns a 409 error"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(o.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"This response has no body.")),(0,n.kt)("div",null)),(0,n.kt)(o.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The provided resource can not be created or updated because it would conflict with the current state of the resource or with an already existing resource, respectively.")),(0,n.kt)("div",null)))))}h.isMDXComponent=!0}}]);