"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[403],{39750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var a=n(87462),i=(n(67294),n(3905));const s={id:"metrics",title:"/api/admin/metrics"},l=void 0,o={unversionedId:"api/admin/metrics",id:"api/admin/metrics",title:"/api/admin/metrics",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/metrics-api.md",sourceDirName:"api/admin",slug:"/api/admin/metrics",permalink:"/api/admin/metrics",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/metrics-api.md",tags:[],version:"current",frontMatter:{id:"metrics",title:"/api/admin/metrics"},sidebar:"documentation",previous:{title:"/api/admin/archive",permalink:"/api/admin/features-archive"},next:{title:"/api/admin/projects",permalink:"/api/admin/projects"}},p={},r=[{value:"Seen-toggles",id:"seen-toggles",level:3},{value:"Feature-Toggles metrics",id:"feature-toggles-metrics",level:3},{value:"Applications",id:"applications",level:3},{value:"Query Params",id:"query-params",level:4},{value:"Application Details",id:"application-details",level:3},{value:"Seen applications",id:"seen-applications",level:3}],d={toc:r};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,i.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,i.kt)("h1",{id:"this-document-describes-the-metrics-endpoint-for-admin-ui"},"This document describes the metrics endpoint for admin ui"),(0,i.kt)("h3",{id:"seen-toggles"},"Seen-toggles"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/api/admin/seen-toggles")),(0,i.kt)("p",null,"This enpoints returns a list of applications and what toogles unleash has seen for each application. It will only guarantee toggles reported by client applications within the last hour, but will in most cases remember seen toggles for applications longer."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "appName": "demo-app",\n    "seenToggles": ["add-feature-2", "toggle-2", "toggle-3"],\n    "metricsCount": 127\n  },\n  {\n    "appName": "demo-app-2",\n    "seenToggles": ["add-feature-2", "toggle-2", "toggle-3"],\n    "metricsCount": 21\n  }\n]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fields:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"appName")," - Name of the application seen by unleash-server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"seenToggles")," - array of toggles names seen by unleash-server for this application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"metricsCount")," - number of metrics counted across all toggles for this application.")),(0,i.kt)("h3",{id:"feature-toggles-metrics"},"Feature-Toggles metrics"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/api/admin/metrics/feature-toggles")),(0,i.kt)("p",null,"This endpoint gives ",(0,i.kt)("em",{parentName:"p"},"last minute")," and ",(0,i.kt)("em",{parentName:"p"},"last hour")," metrics for all active toggles. This is based on metrics reported by client applications. Yes is the number of times a given feature toggle was evaluated to enabled in a client application, and no is the number it was evaluated to false."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lastHour": {\n    "add-feature-2": {\n      "yes": 0,\n      "no": 527\n    },\n    "toggle-2": {\n      "yes": 265,\n      "no": 85\n    },\n    "toggle-3": {\n      "yes": 257,\n      "no": 93\n    }\n  },\n  "lastMinute": {\n    "add-feature-2": {\n      "yes": 0,\n      "no": 527\n    },\n    "toggle-2": {\n      "yes": 265,\n      "no": 85\n    },\n    "toggle-3": {\n      "yes": 257,\n      "no": 93\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fields:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"lastHour")," - Hour projection collected metrics for all feature toggles."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"lastMinute")," - Minute projection collected metrics for all feature toggles.")),(0,i.kt)("h3",{id:"applications"},"Applications"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/api/admin/applications")),(0,i.kt)("p",null,"This endpoint returns a list of known applications (seen the last two days) and a link to follow for more details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applications": [\n    {\n      "appName": "another",\n      "strategies": ["default", "other", "brother"],\n      "createdAt": "2016-12-09T14:56:36.730Z",\n      "links": {\n        "appDetails": "/api/admin/applications/another"\n      }\n    },\n    {\n      "appName": "bow",\n      "strategies": ["default", "other", "brother"],\n      "createdAt": "2016-12-09T14:56:36.730Z",\n      "links": {\n        "appDetails": "/api/admin/applications/bow"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h4",{id:"query-params"},"Query Params"),(0,i.kt)("p",null,"You can also specify the query param: ",(0,i.kt)("em",{parentName:"p"},"strategyName"),", which will return all applications implementing the given strategy."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/api/admin/applications?strategyName=someStrategyName")),(0,i.kt)("h3",{id:"application-details"},"Application Details"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/api/admin/applications/:appName")),(0,i.kt)("p",null,"This endpoint gives insight into details about a client application, such as instances, strategies implemented and seen toggles."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appName": "demo-app",\n  "instances": [\n    {\n      "instanceId": "generated-732038-17080",\n      "clientIp": "::ffff:127.0.0.1",\n      "lastSeen": "2016-11-30T17:32:04.265Z",\n      "createdAt": "2016-11-30T17:31:08.914Z"\n    },\n    {\n      "instanceId": "generated-639919-11185",\n      "clientIp": "::ffff:127.0.0.1",\n      "lastSeen": "2016-11-30T16:04:15.991Z",\n      "createdAt": "2016-11-30T10:49:11.223Z"\n    }\n  ],\n  "strategies": [\n    {\n      "appName": "demo-app",\n      "strategies": ["default", "extra"]\n    }\n  ],\n  "seenToggles": ["add-feature-2", "toggle-2", "toggle-3"]\n}\n')),(0,i.kt)("h3",{id:"seen-applications"},"Seen applications"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/api/admin/seen-apps")),(0,i.kt)("p",null,"This endpoint gives insight into details about application seen per feature toggle."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "my-toggle": [\n    {\n      "appName": "my-app",\n      "createdAt": "2016-12-28T10:39:24.966Z",\n      "updatedAt": "2017-01-06T15:32:41.932Z",\n      "description": "our main app",\n      "strategies": [\n        "gradualRolloutRandom",\n        "abTest",\n        "default",\n        "betaUser",\n        "userWithId",\n        "byHostName",\n        "gradualRolloutWithSessionId",\n        "gradualRollout",\n        "byRemoteAddr"\n      ],\n      "url": "http://example.com",\n      "color": null,\n      "icon": "terrain"\n    },\n    {\n      "appName": "my-other-app",\n      "createdAt": "2016-12-28T10:39:24.966Z",\n      "updatedAt": "2017-01-06T15:32:41.932Z",\n      "description": "our other app",\n      "strategies": ["default"],\n      "url": "http://example.com",\n      "color": null,\n      "icon": "desktop"\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);