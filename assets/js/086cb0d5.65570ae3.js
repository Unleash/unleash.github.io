"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3412],{81611:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>f,contentTitle:()=>d,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>g});var a=t(87462),n=(t(67294),t(3905)),i=t(80334),r=(t(11032),t(46062)),o=t(57138),c=t(21439),l=(t(9531),t(15761)),u=(t(73418),t(92414)),p=t(11666);const m={id:"get-instance-admin-stats-csv",title:"Instance usage statistics",description:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",sidebar_label:"Instance usage statistics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Instance Admin"],description:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",operationId:"getInstanceAdminStatsCsv",responses:{200:{description:"instanceAdminStatsSchemaCsv",content:{"text/csv":{example:'"OIDCenabled","SAMLenabled","clientApps","contextFields","environments","featureExports","featureImports","featureToggles","groups","instanceId","projects","roles","customRootRoles","customRootRolesInUse","segments","strategies","sum","timestamp","users","versionEnterprise","versionOSS","activeUsers"\ntrue,false,"[{""range"":""allTime"",""count"":15},{""range"":""30d"",""count"":9},{""range"":""7d"",""count"":5}]",6,2,0,0,29,3,"ed3861ae-78f9-4e8c-8e57-b57efc15f82b",1,5,2,1,2,8,"some-sha256-hash","2023-07-12T10:00:00.000Z",10,"5.1.7","5.1.7","{""last90"":15,""last30"":10,""last7"":5}"',schema:{type:"string"}}}}},method:"get",path:"/api/admin/instance-admin/statistics/csv",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.0-main"},postman:{name:"Instance usage statistics",description:{content:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",type:"text/plain"},url:{path:["api","admin","instance-admin","statistics","csv"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"text/csv"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},d=void 0,h={unversionedId:"reference/api/unleash/get-instance-admin-stats-csv",id:"reference/api/unleash/get-instance-admin-stats-csv",title:"Instance usage statistics",description:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",source:"@site/docs/reference/api/unleash/get-instance-admin-stats-csv.api.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/get-instance-admin-stats-csv",permalink:"/reference/api/unleash/get-instance-admin-stats-csv",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-instance-admin-stats-csv",title:"Instance usage statistics",description:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",sidebar_label:"Instance usage statistics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Instance Admin"],description:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",operationId:"getInstanceAdminStatsCsv",responses:{200:{description:"instanceAdminStatsSchemaCsv",content:{"text/csv":{example:'"OIDCenabled","SAMLenabled","clientApps","contextFields","environments","featureExports","featureImports","featureToggles","groups","instanceId","projects","roles","customRootRoles","customRootRolesInUse","segments","strategies","sum","timestamp","users","versionEnterprise","versionOSS","activeUsers"\ntrue,false,"[{""range"":""allTime"",""count"":15},{""range"":""30d"",""count"":9},{""range"":""7d"",""count"":5}]",6,2,0,0,29,3,"ed3861ae-78f9-4e8c-8e57-b57efc15f82b",1,5,2,1,2,8,"some-sha256-hash","2023-07-12T10:00:00.000Z",10,"5.1.7","5.1.7","{""last90"":15,""last30"":10,""last7"":5}"',schema:{type:"string"}}}}},method:"get",path:"/api/admin/instance-admin/statistics/csv",servers:[{url:"<your-unleash-url>"}],security:[{apiKey:[]}],securitySchemes:{apiKey:{type:"apiKey",in:"header",name:"Authorization"}},info:{title:"Unleash API",version:"5.4.0-main"},postman:{name:"Instance usage statistics",description:{content:"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc.",type:"text/plain"},url:{path:["api","admin","instance-admin","statistics","csv"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"text/csv"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"reference/api/unleash/unleash-api",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all login events.",permalink:"/reference/api/unleash/get-login-history"},next:{title:"Instance usage statistics",permalink:"/reference/api/unleash/get-instance-admin-stats"}},f={},g=[{value:"Request",id:"request",level:2}],v={toc:g};function b(e){let{components:s,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},v,t,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Instance usage statistics"),(0,n.kt)(r.Z,{method:"get",path:"/api/admin/instance-admin/statistics/csv",mdxType:"MethodEndpoint"}),(0,n.kt)(o.Z,{infoPath:"reference/api/unleash/unleash-api",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Provides statistics about various features of Unleash to allow for reporting of usage for self-hosted customers. The response contains data such as the number of users, groups, features, strategies, versions, etc."),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"instanceAdminStatsSchemaCsv")),(0,n.kt)("div",null,(0,n.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text/csv",value:"text/csv",mdxType:"TabItem"},(0,n.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))))),(0,n.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'"OIDCenabled","SAMLenabled","clientApps","contextFields","environments","featureExports","featureImports","featureToggles","groups","instanceId","projects","roles","customRootRoles","customRootRolesInUse","segments","strategies","sum","timestamp","users","versionEnterprise","versionOSS","activeUsers"\ntrue,false,"[{""range"":""allTime"",""count"":15},{""range"":""30d"",""count"":9},{""range"":""7d"",""count"":5}]",6,2,0,0,29,3,"ed3861ae-78f9-4e8c-8e57-b57efc15f82b",1,5,2,1,2,8,"some-sha256-hash","2023-07-12T10:00:00.000Z",10,"5.1.7","5.1.7","{""last90"":15,""last30"":10,""last7"":5}"',language:"shell",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);