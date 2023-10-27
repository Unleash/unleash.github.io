"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[43527],{28453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const o={title:"/api/admin/context"},l=void 0,s={unversionedId:"reference/api/legacy/unleash/admin/context",id:"reference/api/legacy/unleash/admin/context",title:"/api/admin/context",description:"The context feature is only available as part of Unleash Enterprise. In order to access the API programmatically you need to make sure you obtain a API token with admin permissions.",source:"@site/docs/reference/api/legacy/unleash/admin/context.md",sourceDirName:"reference/api/legacy/unleash/admin",slug:"/reference/api/legacy/unleash/admin/context",permalink:"/reference/api/legacy/unleash/admin/context",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/legacy/unleash/admin/context.md",tags:[],version:"current",frontMatter:{title:"/api/admin/context"},sidebar:"documentation",previous:{title:"/api/admin/addons",permalink:"/reference/api/legacy/unleash/admin/addons"},next:{title:"/api/admin/events",permalink:"/reference/api/legacy/unleash/admin/events"}},r={},d=[{value:"List context fields defined in Unleash",id:"list-context-fields-defined-in-unleash",level:3},{value:"Create a new context field",id:"create-a-new-context-field",level:3},{value:"Update a context field",id:"update-a-context-field",level:3},{value:"Delete a context field",id:"delete-a-context-field",level:3}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The context feature is only available as part of Unleash Enterprise. In order to access the API programmatically you need to make sure you ",(0,i.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"obtain a API token")," with admin permissions.")),(0,i.kt)("h3",{id:"list-context-fields-defined-in-unleash"},"List context fields defined in Unleash"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/context")),(0,i.kt)("p",null,"Returns a list of context fields defined in Unleash."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "appName",\n    "description": "Allows you to constrain on application name",\n    "stickiness": false,\n    "sortOrder": 2,\n    "createdAt": "2020-03-05T19:33:19.784Z"\n  },\n  {\n    "name": "environment",\n    "description": "Allows you to constrain on application environment",\n    "stickiness": false,\n    "sortOrder": 0,\n    "legalValues": ["qa", "dev", "prod"],\n    "createdAt": "2020-03-05T19:33:19.784Z"\n  },\n  {\n    "name": "tenantId",\n    "description": "Control rollout to your tenants",\n    "stickiness": true,\n    "sortOrder": 10,\n    "legalValues": ["company-a, company-b"],\n    "createdAt": "2020-03-05T19:33:19.784Z"\n  },\n  {\n    "name": "userId",\n    "description": "Allows you to constrain on userId",\n    "stickiness": false,\n    "sortOrder": 1,\n    "createdAt": "2020-03-05T19:33:19.784Z"\n  }\n]\n')),(0,i.kt)("h3",{id:"create-a-new-context-field"},"Create a new context field"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/admin/context")),(0,i.kt)("p",null,"Creates a new context field."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "region",\n  "description": "Control rollout based on region",\n  "legalValues": ["asia", "eu", "europe"],\n  "stickiness": true\n}\n')),(0,i.kt)("h3",{id:"update-a-context-field"},"Update a context field"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT https://unleash.host.com/api/context/:name")),(0,i.kt)("p",null,"Updates a new context field"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "region",\n  "description": "Control rollout based on region",\n  "legalValues": ["asia", "eu"],\n  "stickiness": true\n}\n')),(0,i.kt)("h3",{id:"delete-a-context-field"},"Delete a context field"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DELETE https://unleash.host.com/api/admin/context/:name")),(0,i.kt)("p",null,"Deletes the context field with name=",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"."))}p.isMDXComponent=!0}}]);