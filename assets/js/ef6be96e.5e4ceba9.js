"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8567],{52073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"state",title:"/api/admin/state"},o=void 0,s={unversionedId:"api/admin/state",id:"api/admin/state",title:"/api/admin/state",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/state-api.md",sourceDirName:"api/admin",slug:"/api/admin/state",permalink:"/api/admin/state",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/state-api.md",tags:[],version:"current",frontMatter:{id:"state",title:"/api/admin/state"},sidebar:"documentation",previous:{title:"/api/admin/segments",permalink:"/api/admin/segments"},next:{title:"/api/admin/strategies",permalink:"/api/admin/strategies"}},l={},p=[{value:"Export Feature Toggles &amp; Strategies",id:"export-feature-toggles--strategies",level:3},{value:"Import Feature Toggles &amp; Strategies",id:"import-feature-toggles--strategies",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,r.kt)("h3",{id:"export-feature-toggles--strategies"},"Export Feature Toggles & Strategies"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/admin/state/export")),(0,r.kt)("p",null,"The api endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/admin/state/export")," will export feature-toggles and strategies as json by default.\\\nYou can customize the export with query parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json")),(0,r.kt)("td",{parentName:"tr",align:null},"Export format, either ",(0,r.kt)("inlineCode",{parentName:"td"},"json")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"yaml"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"download"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"If the exported data should be downloaded as a file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"featureToggles"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Include feature-toggles in the exported data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strategies"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Include strategies in the exported data")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/admin/state/export?format=yaml&featureToggles=1&strategies=1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nfeatures:\n  - name: Feature.A\n    description: lorem ipsum\n    enabled: false\n    strategies:\n      - name: default\n        parameters: {}\n    variants:\n      - name: variant1\n        weight: 50\n      - name: variant2\n        weight: 50\n  - name: Feature.B\n    description: lorem ipsum\n    enabled: true\n    strategies:\n      - name: ActiveForUserWithId\n        parameters:\n          userIdList: '123,221,998'\n      - name: GradualRolloutRandom\n        parameters:\n          percentage: '10'\n    variants: []\nstrategies:\n  - name: country\n    description: Enable feature for certain countries\n    parameters:\n      - name: countries\n        type: list\n        description: List of countries\n        required: true\n")),(0,r.kt)("h3",{id:"import-feature-toggles--strategies"},"Import Feature Toggles & Strategies"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/state/import")),(0,r.kt)("p",null,"You can import feature-toggles and strategies by POSTing to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/admin/state/import")," endpoint.\\\nYou can either send the data as JSON in the POST-body or send a ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," parameter with ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," (YAML files are also accepted here)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Query Paramters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"drop")," - Use this parameter if you want the database to be cleaned before import (all strategies and features will be removed)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"keep")," - Use this query parameter if you want to keep all exiting feature toggle (and strategy) configurations as is (no override), and only insert missing feature toggles from the data provided.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You should be careful using the ",(0,r.kt)("inlineCode",{parentName:"p"},"drop")," parameter in production environments.")),(0,r.kt)("p",null,"Success: ",(0,r.kt)("inlineCode",{parentName:"p"},"202 Accepted"),"\\\nError: ",(0,r.kt)("inlineCode",{parentName:"p"},"400 Bad Request")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example body:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "features": [\n    {\n      "name": "Feature.A",\n      "description": "lorem ipsum",\n      "enabled": false,\n      "strategies": [\n        {\n          "name": "default",\n          "parameters": {}\n        }\n      ],\n      "variants": [\n        {\n          "name": "variant1",\n          "weight": 50\n        },\n        {\n          "name": "variant2",\n          "weight": 50\n        }\n      ]\n    },\n    {\n      "name": "Feature.B",\n      "description": "lorem ipsum",\n      "enabled": true,\n      "strategies": [\n        {\n          "name": "ActiveForUserWithId",\n          "parameters": {\n            "userIdList": "123,221,998"\n          }\n        },\n        {\n          "name": "GradualRolloutRandom",\n          "parameters": {\n            "percentage": "10"\n          }\n        }\n      ],\n      "variants": []\n    }\n  ],\n  "strategies": [\n    {\n      "name": "country",\n      "description": "Enable feature for certain countries",\n      "parameters": [\n        {\n          "name": "countries",\n          "type": "list",\n          "description": "List of countries",\n          "required": true\n        }\n      ]\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);