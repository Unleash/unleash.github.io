"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[212],{63391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>b,frontMatter:()=>h,metadata:()=>u,toc:()=>v});var s=a(87462),i=(a(67294),a(3905)),n=a(80334),r=(a(11032),a(46062)),m=a(57138),l=a(21439),p=(a(9531),a(15761)),o=a(73418),c=a(92414),d=a(11666);const h={id:"search-events",title:"searchEvents",description:"searchEvents",sidebar_label:"searchEvents",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"searchEvents",tags:["Events"],requestBody:{description:"searchEventsSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"\n        Search for events by type, project, feature, free-text query,\n        or a combination thereof. Pass an empty object to fetch all events.\n    ",properties:{type:{type:"string",description:"Find events by event type (case-sensitive)."},project:{type:"string",description:"Find events by project ID (case-sensitive)."},feature:{type:"string",description:"Find events by feature toggle name (case-sensitive)."},query:{type:"string",description:"\n                Find events by a free-text search query.\n                The query will be matched against the event type,\n                the username or email that created the event (if any),\n                and the event data payload (if any).\n            "},limit:{type:"integer",minimum:1,maximum:100,default:100},offset:{type:"integer",minimum:0,default:0}},title:"searchEventsSchema"}}}},responses:{200:{description:"eventsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","events"],properties:{version:{type:"integer",minimum:1},events:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","createdAt","type","createdBy"],properties:{id:{type:"integer",minimum:1},createdAt:{type:"string",format:"date-time"},type:{type:"string"},createdBy:{type:"string"},environment:{type:"string",nullable:!0},project:{type:"string",nullable:!0},featureName:{type:"string",nullable:!0},data:{type:"object",nullable:!0},preData:{type:"object",nullable:!0},tags:{type:"array",items:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"},nullable:!0}},title:"eventSchema"}},totalEvents:{type:"integer",minimum:0}},title:"eventsSchema"}}}}},description:"searchEvents",method:"post",path:"/api/admin/events/search",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{type:"string",project:"string",feature:"string",query:"string",limit:100,offset:0},info:{title:"Unleash API",version:"5.1.0-beta.49"},postman:{name:"search Events",description:{type:"text/plain"},url:{path:["api","admin","events","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},y=void 0,u={unversionedId:"reference/api/unleash/search-events",id:"reference/api/unleash/search-events",title:"searchEvents",description:"searchEvents",source:"@site/docs/reference/api/unleash/search-events.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/search-events",permalink:"/reference/api/unleash/search-events",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"search-events",title:"searchEvents",description:"searchEvents",sidebar_label:"searchEvents",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"searchEvents",tags:["Events"],requestBody:{description:"searchEventsSchema",required:!0,content:{"application/json":{schema:{type:"object",description:"\n        Search for events by type, project, feature, free-text query,\n        or a combination thereof. Pass an empty object to fetch all events.\n    ",properties:{type:{type:"string",description:"Find events by event type (case-sensitive)."},project:{type:"string",description:"Find events by project ID (case-sensitive)."},feature:{type:"string",description:"Find events by feature toggle name (case-sensitive)."},query:{type:"string",description:"\n                Find events by a free-text search query.\n                The query will be matched against the event type,\n                the username or email that created the event (if any),\n                and the event data payload (if any).\n            "},limit:{type:"integer",minimum:1,maximum:100,default:100},offset:{type:"integer",minimum:0,default:0}},title:"searchEventsSchema"}}}},responses:{200:{description:"eventsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","events"],properties:{version:{type:"integer",minimum:1},events:{type:"array",items:{type:"object",additionalProperties:!1,required:["id","createdAt","type","createdBy"],properties:{id:{type:"integer",minimum:1},createdAt:{type:"string",format:"date-time"},type:{type:"string"},createdBy:{type:"string"},environment:{type:"string",nullable:!0},project:{type:"string",nullable:!0},featureName:{type:"string",nullable:!0},data:{type:"object",nullable:!0},preData:{type:"object",nullable:!0},tags:{type:"array",items:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"},nullable:!0}},title:"eventSchema"}},totalEvents:{type:"integer",minimum:0}},title:"eventsSchema"}}}}},description:"searchEvents",method:"post",path:"/api/admin/events/search",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},jsonRequestBodyExample:{type:"string",project:"string",feature:"string",query:"string",limit:100,offset:0},info:{title:"Unleash API",version:"5.1.0-beta.49"},postman:{name:"search Events",description:{type:"text/plain"},url:{path:["api","admin","events","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all events related to a specific feature toggle.",permalink:"/reference/api/unleash/get-events-for-toggle"},next:{title:"Features",permalink:"/reference/api/unleash/features"}},g={},v=[{value:"Request",id:"request",level:2}],f={toc:v};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"searchEvents"),(0,i.kt)(r.Z,{method:"post",path:"/api/admin/events/search",mdxType:"MethodEndpoint"}),(0,i.kt)(m.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"searchEvents"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"searchEventsSchema"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Find events by event type (case-sensitive)."},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Find events by project ID (case-sensitive)."},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"feature",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Find events by feature toggle name (case-sensitive)."},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"query",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\n                Find events by a free-text search query.\n                The query will be matched against the event type,\n                the username or email that created the event (if any),\n                and the event data payload (if any).\n            "},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"limit",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1` and `<= 100`",schema:{type:"integer",minimum:1,maximum:100,default:100},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"offset",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0,default:0},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"eventsSchema")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"events"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(o.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"createdBy",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"featureName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"data",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"preData",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"tags"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__nullable"},"nullable"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(o.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(o.Z,{collapsible:!1,name:"totalEvents",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",minimum:0},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "version": 0,\n  "events": [\n    {\n      "id": 0,\n      "createdAt": "2023-05-13T13:59:37.290Z",\n      "type": "string",\n      "createdBy": "string",\n      "environment": "string",\n      "project": "string",\n      "featureName": "string",\n      "data": {},\n      "preData": {},\n      "tags": [\n        {\n          "value": "a-tag-value",\n          "type": "simple"\n        }\n      ]\n    }\n  ],\n  "totalEvents": 0\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);