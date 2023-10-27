"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[90168],{48327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>j,frontMatter:()=>h,metadata:()=>f,toc:()=>y});var r=a(87462),n=(a(67294),a(3905)),s=a(80334),i=(a(11032),a(46062)),d=a(57138),o=a(21439),p=a(9531),c=a(15761),l=a(73418),u=a(92414),m=a(30433);const h={id:"get-events",title:"Get the most recent events from the Unleash instance or all events related to a project.",description:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.",sidebar_label:"Get the most recent events from the Unleash instance or all events related to a project.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getEvents",tags:["Events"],responses:{200:{description:"eventsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","events"],description:"A list of events that has happened in the system",properties:{version:{type:"integer",minimum:1,enum:[1],description:"The api version of this response. A natural increasing number. Only increases if format changes",example:1},events:{description:"The list of events",type:"array",items:{type:"object",additionalProperties:!1,required:["id","createdAt","type","createdBy"],description:"An event describing something happening in the system",properties:{id:{type:"integer",minimum:1,description:"The ID of the event. An increasing natural number."},createdAt:{type:"string",format:"date-time",description:"The time the event happened as a RFC 3339-conformant timestamp.",example:"2023-07-05T12:56:00.000Z"},type:{type:"string",description:"What [type](https://docs.getunleash.io/reference/api/legacy/unleash/admin/events#event-type-description) of event this is",enum:["application-created","feature-created","feature-deleted","feature-updated","feature-metadata-updated","feature-variants-updated","feature-environment-variants-updated","feature-project-change","feature-archived","feature-revived","feature-import","feature-tagged","feature-tag-import","feature-strategy-update","feature-strategy-add","feature-strategy-remove","strategy-order-changed","drop-feature-tags","feature-untagged","feature-stale-on","feature-stale-off","drop-features","feature-environment-enabled","feature-environment-disabled","strategy-created","strategy-deleted","strategy-deprecated","strategy-reactivated","strategy-updated","strategy-import","drop-strategies","context-field-created","context-field-updated","context-field-deleted","project-access-added","project-access-user-roles-updated","project-access-group-roles-updated","project-access-user-roles-deleted","project-access-group-roles-deleted","project-access-updated","project-created","project-updated","project-deleted","project-import","project-user-added","project-user-removed","project-user-role-changed","project-group-role-changed","project-group-added","project-group-removed","drop-projects","tag-created","tag-deleted","tag-import","drop-tags","tag-type-created","tag-type-deleted","tag-type-updated","tag-type-import","drop-tag-types","addon-config-created","addon-config-updated","addon-config-deleted","db-pool-update","user-created","user-updated","user-deleted","drop-environments","environment-import","segment-created","segment-updated","segment-deleted","group-created","group-updated","group-deleted","setting-created","setting-updated","setting-deleted","client-metrics","client-register","pat-created","pat-deleted","public-signup-token-created","public-signup-token-user-added","public-signup-token-updated","change-request-created","change-request-discarded","change-added","change-discarded","change-edited","change-request-rejected","change-request-approved","change-request-approval-added","change-request-cancelled","change-request-sent-to-review","change-request-applied","change-request-scheduled","api-token-created","api-token-updated","api-token-deleted","feature-favorited","feature-unfavorited","project-favorited","project-unfavorited","features-exported","features-imported","service-account-created","service-account-deleted","service-account-updated","feature-potentially-stale-on","feature-dependency-added","feature-dependency-removed","feature-dependencies-removed","banner-created","banner-updated","banner-deleted"],example:"feature-created"},createdBy:{type:"string",description:"Which user created this event",example:"johndoe"},environment:{type:"string",description:"The feature toggle environment the event relates to, if applicable.",nullable:!0,example:"development"},project:{type:"string",nullable:!0,description:"The project the event relates to, if applicable.",example:"default"},featureName:{type:"string",nullable:!0,description:"The name of the feature toggle the event relates to, if applicable.",example:"my.first.feature"},data:{type:"object",nullable:!0,"x-enforcer-exception-skip-codes":"WSCH006",description:"Extra associated data related to the event, such as feature toggle state, segment configuration, etc., if applicable.",example:{name:"new-feature",description:"Toggle description",type:"release",project:"my-project",stale:!1,variants:[],createdAt:"2022-05-31T13:32:20.547Z",lastSeenAt:null,impressionData:!0}},preData:{type:"object",nullable:!0,"x-enforcer-exception-skip-codes":"WSCH006",description:"Data relating to the previous state of the event's subject.",example:{name:"new-feature",description:"Toggle description",type:"release",project:"my-project",stale:!1,variants:[],createdAt:"2022-05-31T13:32:20.547Z",lastSeenAt:null,impressionData:!0}},tags:{type:"array",items:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"},nullable:!0,description:"Any tags related to the event, if applicable."}},title:"eventSchema"}},totalEvents:{type:"integer",description:"The total count of events",minimum:0,example:842}},title:"eventsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"project",description:"The name of the project whose events you want to retrieve",schema:{type:"string"},in:"query"}],description:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.\n\nIf the provided project does not exist, the list of events will be empty.",method:"get",path:"/api/admin/events",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0"},postman:{name:"Get the most recent events from the Unleash instance or all events related to a project.",description:{content:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.\n\nIf the provided project does not exist, the list of events will be empty.",type:"text/plain"},url:{path:["api","admin","events"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The name of the project whose events you want to retrieve",type:"text/plain"},key:"project",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},g=void 0,f={unversionedId:"reference/api/unleash/get-events",id:"reference/api/unleash/get-events",title:"Get the most recent events from the Unleash instance or all events related to a project.",description:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.",source:"@site/docs/reference/api/unleash/get-events.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-events",permalink:"/reference/api/unleash/get-events",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-events",title:"Get the most recent events from the Unleash instance or all events related to a project.",description:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.",sidebar_label:"Get the most recent events from the Unleash instance or all events related to a project.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getEvents",tags:["Events"],responses:{200:{description:"eventsSchema",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["version","events"],description:"A list of events that has happened in the system",properties:{version:{type:"integer",minimum:1,enum:[1],description:"The api version of this response. A natural increasing number. Only increases if format changes",example:1},events:{description:"The list of events",type:"array",items:{type:"object",additionalProperties:!1,required:["id","createdAt","type","createdBy"],description:"An event describing something happening in the system",properties:{id:{type:"integer",minimum:1,description:"The ID of the event. An increasing natural number."},createdAt:{type:"string",format:"date-time",description:"The time the event happened as a RFC 3339-conformant timestamp.",example:"2023-07-05T12:56:00.000Z"},type:{type:"string",description:"What [type](https://docs.getunleash.io/reference/api/legacy/unleash/admin/events#event-type-description) of event this is",enum:["application-created","feature-created","feature-deleted","feature-updated","feature-metadata-updated","feature-variants-updated","feature-environment-variants-updated","feature-project-change","feature-archived","feature-revived","feature-import","feature-tagged","feature-tag-import","feature-strategy-update","feature-strategy-add","feature-strategy-remove","strategy-order-changed","drop-feature-tags","feature-untagged","feature-stale-on","feature-stale-off","drop-features","feature-environment-enabled","feature-environment-disabled","strategy-created","strategy-deleted","strategy-deprecated","strategy-reactivated","strategy-updated","strategy-import","drop-strategies","context-field-created","context-field-updated","context-field-deleted","project-access-added","project-access-user-roles-updated","project-access-group-roles-updated","project-access-user-roles-deleted","project-access-group-roles-deleted","project-access-updated","project-created","project-updated","project-deleted","project-import","project-user-added","project-user-removed","project-user-role-changed","project-group-role-changed","project-group-added","project-group-removed","drop-projects","tag-created","tag-deleted","tag-import","drop-tags","tag-type-created","tag-type-deleted","tag-type-updated","tag-type-import","drop-tag-types","addon-config-created","addon-config-updated","addon-config-deleted","db-pool-update","user-created","user-updated","user-deleted","drop-environments","environment-import","segment-created","segment-updated","segment-deleted","group-created","group-updated","group-deleted","setting-created","setting-updated","setting-deleted","client-metrics","client-register","pat-created","pat-deleted","public-signup-token-created","public-signup-token-user-added","public-signup-token-updated","change-request-created","change-request-discarded","change-added","change-discarded","change-edited","change-request-rejected","change-request-approved","change-request-approval-added","change-request-cancelled","change-request-sent-to-review","change-request-applied","change-request-scheduled","api-token-created","api-token-updated","api-token-deleted","feature-favorited","feature-unfavorited","project-favorited","project-unfavorited","features-exported","features-imported","service-account-created","service-account-deleted","service-account-updated","feature-potentially-stale-on","feature-dependency-added","feature-dependency-removed","feature-dependencies-removed","banner-created","banner-updated","banner-deleted"],example:"feature-created"},createdBy:{type:"string",description:"Which user created this event",example:"johndoe"},environment:{type:"string",description:"The feature toggle environment the event relates to, if applicable.",nullable:!0,example:"development"},project:{type:"string",nullable:!0,description:"The project the event relates to, if applicable.",example:"default"},featureName:{type:"string",nullable:!0,description:"The name of the feature toggle the event relates to, if applicable.",example:"my.first.feature"},data:{type:"object",nullable:!0,"x-enforcer-exception-skip-codes":"WSCH006",description:"Extra associated data related to the event, such as feature toggle state, segment configuration, etc., if applicable.",example:{name:"new-feature",description:"Toggle description",type:"release",project:"my-project",stale:!1,variants:[],createdAt:"2022-05-31T13:32:20.547Z",lastSeenAt:null,impressionData:!0}},preData:{type:"object",nullable:!0,"x-enforcer-exception-skip-codes":"WSCH006",description:"Data relating to the previous state of the event's subject.",example:{name:"new-feature",description:"Toggle description",type:"release",project:"my-project",stale:!1,variants:[],createdAt:"2022-05-31T13:32:20.547Z",lastSeenAt:null,impressionData:!0}},tags:{type:"array",items:{type:"object",description:"Representation of a [tag](https://docs.getunleash.io/reference/tags)",additionalProperties:!1,required:["value","type"],properties:{value:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},type:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"}},title:"tagSchema"},nullable:!0,description:"Any tags related to the event, if applicable."}},title:"eventSchema"}},totalEvents:{type:"integer",description:"The total count of events",minimum:0,example:842}},title:"eventsSchema"}}}},401:{description:"Authorization information is missing or invalid. Provide a valid API token as the `authorization` header, e.g. `authorization:*.*.my-admin-token`.",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},name:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},message:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."}}}}}}},parameters:[{name:"project",description:"The name of the project whose events you want to retrieve",schema:{type:"string"},in:"query"}],description:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.\n\nIf the provided project does not exist, the list of events will be empty.",method:"get",path:"/api/admin/events",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.6.0"},postman:{name:"Get the most recent events from the Unleash instance or all events related to a project.",description:{content:"Returns **the last 100** events from the Unleash instance when called without a query parameter. When called with a `project` parameter, returns **all events** for the specified project.\n\nIf the provided project does not exist, the list of events will be empty.",type:"text/plain"},url:{path:["api","admin","events"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The name of the project whose events you want to retrieve",type:"text/plain"},key:"project",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Events",permalink:"/reference/api/unleash/events"},next:{title:"Get all events related to a specific feature toggle.",permalink:"/reference/api/unleash/get-events-for-toggle"}},v={},y=[{value:"Request",id:"request",level:2}],b={toc:y};function j(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get the most recent events from the Unleash instance or all events related to a project."),(0,n.kt)(i.Z,{method:"get",path:"/api/admin/events",mdxType:"MethodEndpoint"}),(0,n.kt)(d.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Returns ",(0,n.kt)("strong",{parentName:"p"},"the last 100")," events from the Unleash instance when called without a query parameter. When called with a ",(0,n.kt)("inlineCode",{parentName:"p"},"project")," parameter, returns ",(0,n.kt)("strong",{parentName:"p"},"all events")," for the specified project."),(0,n.kt)("p",null,"If the provided project does not exist, the list of events will be empty."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(p.Z,{className:"paramsItem",param:{name:"project",description:"The name of the project whose events you want to retrieve",schema:{type:"string"},in:"query"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"eventsSchema")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"version",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`, [`1`]",schema:{type:"integer",minimum:1,enum:[1],description:"The api version of this response. A natural increasing number. Only increases if format changes",example:1},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"events"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The list of events")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,description:"The ID of the event. An increasing natural number."},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The time the event happened as a RFC 3339-conformant timestamp.",example:"2023-07-05T12:56:00.000Z"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`application-created`, `feature-created`, `feature-deleted`, `feature-updated`, `feature-metadata-updated`, `feature-variants-updated`, `feature-environment-variants-updated`, `feature-project-change`, `feature-archived`, `feature-revived`, `feature-import`, `feature-tagged`, `feature-tag-import`, `feature-strategy-update`, `feature-strategy-add`, `feature-strategy-remove`, `strategy-order-changed`, `drop-feature-tags`, `feature-untagged`, `feature-stale-on`, `feature-stale-off`, `drop-features`, `feature-environment-enabled`, `feature-environment-disabled`, `strategy-created`, `strategy-deleted`, `strategy-deprecated`, `strategy-reactivated`, `strategy-updated`, `strategy-import`, `drop-strategies`, `context-field-created`, `context-field-updated`, `context-field-deleted`, `project-access-added`, `project-access-user-roles-updated`, `project-access-group-roles-updated`, `project-access-user-roles-deleted`, `project-access-group-roles-deleted`, `project-access-updated`, `project-created`, `project-updated`, `project-deleted`, `project-import`, `project-user-added`, `project-user-removed`, `project-user-role-changed`, `project-group-role-changed`, `project-group-added`, `project-group-removed`, `drop-projects`, `tag-created`, `tag-deleted`, `tag-import`, `drop-tags`, `tag-type-created`, `tag-type-deleted`, `tag-type-updated`, `tag-type-import`, `drop-tag-types`, `addon-config-created`, `addon-config-updated`, `addon-config-deleted`, `db-pool-update`, `user-created`, `user-updated`, `user-deleted`, `drop-environments`, `environment-import`, `segment-created`, `segment-updated`, `segment-deleted`, `group-created`, `group-updated`, `group-deleted`, `setting-created`, `setting-updated`, `setting-deleted`, `client-metrics`, `client-register`, `pat-created`, `pat-deleted`, `public-signup-token-created`, `public-signup-token-user-added`, `public-signup-token-updated`, `change-request-created`, `change-request-discarded`, `change-added`, `change-discarded`, `change-edited`, `change-request-rejected`, `change-request-approved`, `change-request-approval-added`, `change-request-cancelled`, `change-request-sent-to-review`, `change-request-applied`, `change-request-scheduled`, `api-token-created`, `api-token-updated`, `api-token-deleted`, `feature-favorited`, `feature-unfavorited`, `project-favorited`, `project-unfavorited`, `features-exported`, `features-imported`, `service-account-created`, `service-account-deleted`, `service-account-updated`, `feature-potentially-stale-on`, `feature-dependency-added`, `feature-dependency-removed`, `feature-dependencies-removed`, `banner-created`, `banner-updated`, `banner-deleted`]",schema:{type:"string",description:"What [type](https://docs.getunleash.io/reference/api/legacy/unleash/admin/events#event-type-description) of event this is",enum:["application-created","feature-created","feature-deleted","feature-updated","feature-metadata-updated","feature-variants-updated","feature-environment-variants-updated","feature-project-change","feature-archived","feature-revived","feature-import","feature-tagged","feature-tag-import","feature-strategy-update","feature-strategy-add","feature-strategy-remove","strategy-order-changed","drop-feature-tags","feature-untagged","feature-stale-on","feature-stale-off","drop-features","feature-environment-enabled","feature-environment-disabled","strategy-created","strategy-deleted","strategy-deprecated","strategy-reactivated","strategy-updated","strategy-import","drop-strategies","context-field-created","context-field-updated","context-field-deleted","project-access-added","project-access-user-roles-updated","project-access-group-roles-updated","project-access-user-roles-deleted","project-access-group-roles-deleted","project-access-updated","project-created","project-updated","project-deleted","project-import","project-user-added","project-user-removed","project-user-role-changed","project-group-role-changed","project-group-added","project-group-removed","drop-projects","tag-created","tag-deleted","tag-import","drop-tags","tag-type-created","tag-type-deleted","tag-type-updated","tag-type-import","drop-tag-types","addon-config-created","addon-config-updated","addon-config-deleted","db-pool-update","user-created","user-updated","user-deleted","drop-environments","environment-import","segment-created","segment-updated","segment-deleted","group-created","group-updated","group-deleted","setting-created","setting-updated","setting-deleted","client-metrics","client-register","pat-created","pat-deleted","public-signup-token-created","public-signup-token-user-added","public-signup-token-updated","change-request-created","change-request-discarded","change-added","change-discarded","change-edited","change-request-rejected","change-request-approved","change-request-approval-added","change-request-cancelled","change-request-sent-to-review","change-request-applied","change-request-scheduled","api-token-created","api-token-updated","api-token-deleted","feature-favorited","feature-unfavorited","project-favorited","project-unfavorited","features-exported","features-imported","service-account-created","service-account-deleted","service-account-updated","feature-potentially-stale-on","feature-dependency-added","feature-dependency-removed","feature-dependencies-removed","banner-created","banner-updated","banner-deleted"],example:"feature-created"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"createdBy",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Which user created this event",example:"johndoe"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"environment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The feature toggle environment the event relates to, if applicable.",nullable:!0,example:"development"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"project",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The project the event relates to, if applicable.",example:"default"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"featureName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The name of the feature toggle the event relates to, if applicable.",example:"my.first.feature"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"data",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",nullable:!0,"x-enforcer-exception-skip-codes":"WSCH006",description:"Extra associated data related to the event, such as feature toggle state, segment configuration, etc., if applicable.",example:{name:"new-feature",description:"Toggle description",type:"release",project:"my-project",stale:!1,variants:[],createdAt:"2022-05-31T13:32:20.547Z",lastSeenAt:null,impressionData:!0}},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"preData",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",nullable:!0,"x-enforcer-exception-skip-codes":"WSCH006",description:"Data relating to the previous state of the event's subject.",example:{name:"new-feature",description:"Toggle description",type:"release",project:"my-project",stale:!1,variants:[],createdAt:"2022-05-31T13:32:20.547Z",lastSeenAt:null,impressionData:!0}},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"tags"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__nullable"},"nullable"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Any tags related to the event, if applicable.")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(l.Z,{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,description:"The value of the tag",example:"a-tag-value"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 2 characters` and `<= 50 characters`",schema:{type:"string",minLength:2,maxLength:50,default:"simple",description:"The [type](https://docs.getunleash.io/reference/tags#tag-types) of the tag",example:"simple"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(l.Z,{collapsible:!1,name:"totalEvents",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The total count of events",minimum:0,example:842},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "version": 1,\n  "events": [\n    {\n      "id": 0,\n      "createdAt": "2023-07-05T12:56:00.000Z",\n      "type": "feature-created",\n      "createdBy": "johndoe",\n      "environment": "development",\n      "project": "default",\n      "featureName": "my.first.feature",\n      "data": {\n        "name": "new-feature",\n        "description": "Toggle description",\n        "type": "release",\n        "project": "my-project",\n        "stale": false,\n        "variants": [],\n        "createdAt": "2022-05-31T13:32:20.547Z",\n        "lastSeenAt": null,\n        "impressionData": true\n      },\n      "preData": {\n        "name": "new-feature",\n        "description": "Toggle description",\n        "type": "release",\n        "project": "my-project",\n        "stale": false,\n        "variants": [],\n        "createdAt": "2022-05-31T13:32:20.547Z",\n        "lastSeenAt": null,\n        "impressionData": true\n      },\n      "tags": [\n        {\n          "value": "a-tag-value",\n          "type": "simple"\n        }\n      ]\n    }\n  ],\n  "totalEvents": 842\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Authorization information is missing or invalid. Provide a valid API token as the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," header, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization:*.*.my-admin-token"),".")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"9c40958a-daac-400e-98fb-3bb438567008",description:"The ID of the error instance"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AuthenticationRequired",description:"The name of the error kind"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login.",description:"A description of what went wrong."},mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "id": "9c40958a-daac-400e-98fb-3bb438567008",\n  "name": "AuthenticationRequired",\n  "message": "You must log in to use Unleash. Your request had no authorization header, so we could not authorize you. Try logging in at /auth/simple/login."\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}j.isMDXComponent=!0}}]);