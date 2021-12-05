"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2856],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2471:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],i={id:"feature-toggles-v2",title:"/api/admin/projects/:projectId"},p=void 0,s={unversionedId:"api/admin/feature-toggles-v2",id:"api/admin/feature-toggles-v2",isDocsHomePage:!1,title:"/api/admin/projects/:projectId",description:"In order to access the admin API endpoints you need to identify yourself. You'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/feature-toggles-api-v2.md",sourceDirName:"api/admin",slug:"/api/admin/feature-toggles-v2",permalink:"/api/admin/feature-toggles-v2",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/api/admin/feature-toggles-api-v2.md",tags:[],version:"current",frontMatter:{id:"feature-toggles-v2",title:"/api/admin/projects/:projectId"}},u=[{value:"Get Project Overview",id:"fetching-project",children:[],level:3},{value:"Get All Feature Toggles",id:"fetching-toggles",children:[],level:3},{value:"Create Feature Toggle",id:"create-toggle",children:[],level:3},{value:"Get Feature Toggle",id:"get-toggle",children:[],level:3},{value:"Update Feature Toggle",id:"update-toggle",children:[],level:3},{value:"Patch Feature Toggle",id:"patch-toggle",children:[{value:"Clone Feature Toggle",id:"create-toggle",children:[],level:3},{value:"Archive Feature Toggle",id:"archive-toggle",children:[],level:3},{value:"Add strategy to Feature Toggle",id:"add-strategy",children:[],level:3},{value:"Update strategy configuration",id:"update-strategy",children:[],level:3}],level:2},{value:"Patch strategy configuration",id:"patch-strategy",children:[{value:"Delete strategy from Feature Toggle",id:"delete-strategy",children:[],level:3},{value:"Enable environment for Feature Toggle",id:"enable-env",children:[],level:3}],level:2},{value:"Feature Variants",id:"feature-variants",children:[{value:"Put variants for Feature Toggle",id:"update-variants",children:[],level:3},{value:"PATCH variants for a feature toggle",id:"patch-variants-for-a-feature-toggle",children:[],level:3}],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. You'll need to ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,r.kt)("p",null,"In this document we will guide you on how you can work with feature toggles and their configuration. Please remember the following details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All feature toggles exists ",(0,r.kt)("em",{parentName:"li"},"inside a project"),". "),(0,r.kt)("li",{parentName:"ul"},"A feature toggle exists ",(0,r.kt)("em",{parentName:"li"},"across all environments"),". "),(0,r.kt)("li",{parentName:"ul"},"A feature toggle can take different configuration, activation strategies, per environment.")),(0,r.kt)("p",null,"TODO: Need to explain the following in a bit more details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"default")," environment")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We will in this guide use ",(0,r.kt)("a",{parentName:"p",href:"https://httpie.io"},"HTTPie")," commands to show examples on how to interact with the API. ")),(0,r.kt)("h3",{id:"fetching-project"},"Get Project Overview"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4242/api/admin/projects/:projectId")),(0,r.kt)("p",null,"This endpoint will give you an general overview of a project. It will return essential details about a project, in addition it will return all feature toggles and high level environment details per feature toggle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http GET http://localhost:4242/api/admin/projects/default Authorization:$KEY")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "description": "Default project",\n  "features": [\n    {\n      "createdAt": "2021-08-31T08:00:33.335Z",\n      "environments": [\n        {\n          "displayName": "Development",\n          "enabled": false,\n          "name": "development"\n        },\n        {\n          "displayName": "Production",\n          "enabled": false,\n          "name": "production"\n        }\n      ],\n      "lastSeenAt": null,\n      "name": "demo",\n      "stale": false,\n      "type": "release"\n    },\n    {\n      "createdAt": "2021-08-31T09:43:13.686Z",\n      "environments": [\n        {\n          "displayName": "Development",\n          "enabled": false,\n          "name": "development"\n        },\n        {\n          "displayName": "Production",\n          "enabled": false,\n          "name": "production"\n        }\n      ],\n      "lastSeenAt": null,\n      "name": "demo.test",\n      "stale": false,\n      "type": "release"\n    }\n  ],\n  "health": 100,\n  "members": 2,\n  "name": "Default",\n  "version": 1\n}\n')),(0,r.kt)("p",null,"From the results we can see that we have received two feature toggles, ",(0,r.kt)("em",{parentName:"p"},"demo"),", ",(0,r.kt)("em",{parentName:"p"},"demo.test"),", and other useful metadata about the project."),(0,r.kt)("h3",{id:"fetching-toggles"},"Get All Feature Toggles"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4242/api/admin/projects/:projectId/features")),(0,r.kt)("p",null,"This endpoint will return all feature toggles and high level environment details per feature toggle for a given ",(0,r.kt)("em",{parentName:"p"},"projectId")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http GET http://localhost:4242/api/admin/projects/default/features Authorization:$KEY")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "features": [\n    {\n      "createdAt": "2021-08-31T08:00:33.335Z",\n      "environments": [\n        {\n          "displayName": "Development",\n          "enabled": false,\n          "name": "development"\n        },\n        {\n          "displayName": "Production",\n          "enabled": false,\n          "name": "production"\n        }\n      ],\n      "lastSeenAt": null,\n      "name": "demo",\n      "stale": false,\n      "type": "release"\n    },\n    {\n      "createdAt": "2021-08-31T09:43:13.686Z",\n      "environments": [\n        {\n          "displayName": "Development",\n          "enabled": false,\n          "name": "development"\n        },\n        {\n          "displayName": "Production",\n          "enabled": false,\n          "name": "production"\n        }\n      ],\n      "lastSeenAt": null,\n      "name": "demo.test",\n      "stale": false,\n      "type": "release"\n    }\n  ],\n  "version": 1\n}\n')),(0,r.kt)("h3",{id:"create-toggle"},"Create Feature Toggle"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4242/api/admin/projects/:projectId/features")),(0,r.kt)("p",null,"This endpoint will accept HTTP POST request to create a new feature toggle for a given ",(0,r.kt)("em",{parentName:"p"},"projectId")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo \'{"name": "demo2", "description": "A new feature toggle"}\' | http POST http://localhost:4242/api/admin/projects/default/features Authorization:$KEY`\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'HTTP/1.1 201 Created\nAccess-Control-Allow-Origin: *\nConnection: keep-alive\nContent-Length: 159\nContent-Type: application/json; charset=utf-8\nDate: Tue, 07 Sep 2021 20:16:02 GMT\nETag: W/"9f-4btEokgk0N74zuBVKKxws0IBu4w"\nKeep-Alive: timeout=60\nVary: Accept-Encoding\n\n{\n    "createdAt": "2021-09-07T20:16:02.614Z",\n    "description": "A new feature toggle",\n    "lastSeenAt": null,\n    "name": "demo2",\n    "project": "default",\n    "stale": false,\n    "type": "release",\n    "variants": null\n}\n')),(0,r.kt)("p",null,"Possible Errors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"409 Conflict")," - A toggle with that name already exists")),(0,r.kt)("h3",{id:"get-toggle"},"Get Feature Toggle"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4242/api/admin/projects/:projectId/features/:featureName")),(0,r.kt)("p",null,"This endpoint will return the feature toggles with the defined name and ",(0,r.kt)("em",{parentName:"p"},"projectId"),". We will also see the list of environments and all activation strategies configured per environment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"http GET http://localhost:4242/api/admin/projects/default/features/demo Authorization:$KEY`\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "archived": false,\n    "createdAt": "2021-08-31T08:00:33.335Z",\n    "description": null,\n    "environments": [\n        {\n            "enabled": false,\n            "name": "development",\n            "strategies": [\n                {\n                    "constraints": [],\n                    "id": "8eaa8abb-0e03-4dbb-a440-f3bf193917ad",\n                    "name": "default",\n                    "parameters": null\n                }\n            ]\n        },\n        {\n            "enabled": false,\n            "name": "production",\n            "strategies": []\n        }\n    ],\n    "lastSeenAt": null,\n    "name": "demo",\n    "project": "default",\n    "stale": false,\n    "type": "release",\n    "variants": null\n}\n')),(0,r.kt)("p",null,"Possible Errors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"404 Not Found")," - Could not find feature toggle with the provided name.")),(0,r.kt)("h3",{id:"update-toggle"},"Update Feature Toggle"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4242/api/admin/projects/:projectId/features/:featureName")),(0,r.kt)("p",null,"This endpoint will accept HTTP PUT request to update the feature toggle metadata."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo \'{"name": "demo", "description": "An update feature toggle", "type": "kill-switch"}\' | http PUT http://localhost:4242/api/admin/projects/default/features/demo Authorization:$KEY`\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "createdAt": "2021-09-07T20:16:02.614Z",\n    "description": "An update feature toggle",\n    "lastSeenAt": null,\n    "name": "demo",\n    "project": "default",\n    "stale": false,\n    "type": "kill-switch",\n    "variants": null\n}\n')),(0,r.kt)("p",null,"Some fields is not possible to change via this endpoint:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name"),(0,r.kt)("li",{parentName:"ul"},"project"),(0,r.kt)("li",{parentName:"ul"},"createdAt"),(0,r.kt)("li",{parentName:"ul"},"lastSeen")),(0,r.kt)("h2",{id:"patch-toggle"},"Patch Feature Toggle"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4242/api/admin/projects/:projectId/features/:featureName")),(0,r.kt)("p",null,"This endpoint will accept HTTP PATCH request to update the feature toggle metadata."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo \'[{"op": "replace", "path": "/description", "value": "patched desc"}]\' | http PATCH http://localhost:4242/api/admin/projects/default/features/demo Authorization:$KEY`\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "createdAt": "2021-09-07T20:16:02.614Z",\n    "description": "patched desc",\n    "lastSeenAt": null,\n    "name": "demo",\n    "project": "default",\n    "stale": false,\n    "type": "release",\n    "variants": null\n}\n')),(0,r.kt)("p",null,"Some fields is not possible to change via this endpoint:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name"),(0,r.kt)("li",{parentName:"ul"},"project"),(0,r.kt)("li",{parentName:"ul"},"createdAt"),(0,r.kt)("li",{parentName:"ul"},"lastSeen")),(0,r.kt)("h3",{id:"create-toggle"},"Clone Feature Toggle"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4242/api/admin/projects/:projectId/features/:featureName/clone")),(0,r.kt)("p",null,"This endpoint will accept HTTP POST request to clone an existing feature toggle with all strategies and variants. It is not possible to clone archived feature toggles. The newly created feature toggle will be disabled for all environments."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo \'{ "name": "newName" }\' | http POST http://localhost:4242/api/admin/projects/default/features/Demo/clone Authorization:$KEY`\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'HTTP/1.1 201 Created\nAccess-Control-Allow-Origin: *\nConnection: keep-alive\nContent-Length: 260\nContent-Type: application/json; charset=utf-8\nDate: Wed, 06 Oct 2021 20:04:39 GMT\nETag: W/"104-joC/gdjtJ29jZMxj91lIzR42Pmo"\nKeep-Alive: timeout=60\nVary: Accept-Encoding\n\n{\n    "createdAt": "2021-09-29T10:22:28.523Z",\n    "description": "Some useful description",\n    "lastSeenAt": null,\n    "name": "DemoNew",\n    "project": "default",\n    "stale": false,\n    "type": "release",\n    "variants": [\n        {\n            "name": "blue",\n            "overrides": [],\n            "stickiness": "default",\n            "weight": 1000,\n            "weightType": "variable"\n        }\n    ]\n}\n\n')),(0,r.kt)("p",null,"Possible Errors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"409 Conflict")," - A toggle with that name already exists")),(0,r.kt)("h3",{id:"archive-toggle"},"Archive Feature Toggle"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4242/api/admin/projects/:projectId/features/:featureName")),(0,r.kt)("p",null,"This endpoint will accept HTTP PUT request to update the feature toggle metadata."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"http DELETE http://localhost:4242/api/admin/projects/default/features/demo Authorization:$KEY`\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"HTTP/1.1 202 Accepted\nAccess-Control-Allow-Origin: *\nConnection: keep-alive\nDate: Wed, 08 Sep 2021 20:09:21 GMT\nKeep-Alive: timeout=60\nTransfer-Encoding: chunked\n\n")),(0,r.kt)("h3",{id:"add-strategy"},"Add strategy to Feature Toggle"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4242/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies")),(0,r.kt)("p",null,"This endpoint will allow you to add a new strategy to a feature toggle in a given environment. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},' echo \'{"name": "flexibleRollout", "parameters": { "rollout": 20, "groupId": "demo", "stickiness": "default" }}\' | \\\n http POST http://localhost:4242/api/admin/projects/default/features/demo/environments/production/strategies Authorization:$KEY\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "constraints": [],\n    "id": "77bbe972-ffce-49b2-94d9-326593e2228e",\n    "name": "flexibleRollout",\n    "parameters": {\n        "groupId": "demo",\n        "rollout": 20,\n        "stickiness": "default"\n    }\n}\n')),(0,r.kt)("h3",{id:"update-strategy"},"Update strategy configuration"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo \'{"name": "flexibleRollout", "parameters": { "rollout": 25, "groupId": "demo","stickiness": "default" }}\' | \\\nhttp PUT http://localhost:4242/api/admin/projects/default/features/demo/environments/production/strategies/77bbe972-ffce-49b2-94d9-326593e2228e Authorization:$KEY\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "constraints": [],\n    "id": "77bbe972-ffce-49b2-94d9-326593e2228e",\n    "name": "flexibleRollout",\n    "parameters": {\n        "groupId": "demo",\n        "rollout": 20,\n        "stickiness": "default"\n    }\n}\n')),(0,r.kt)("h2",{id:"patch-strategy"},"Patch strategy configuration"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo \'[{"op": "replace", "path": "/parameters/rollout", "value": 50}]\' | \\\nhttp PATCH http://localhost:4242/api/admin/projects/default/features/demo/environments/production/strategies/ea5404e5-0c0d-488c-93b2-0a2200534827 Authorization:$KEY\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "constraints": [],\n    "id": "ea5404e5-0c0d-488c-93b2-0a2200534827",\n    "name": "flexibleRollout",\n    "parameters": {\n        "groupId": "demo",\n        "rollout": 50,\n        "stickiness": "default"\n    }\n}\n')),(0,r.kt)("h3",{id:"delete-strategy"},"Delete strategy from Feature Toggle"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"http DELETE http://localhost:4242/api/admin/projects/default/features/demo/environments/production/strategies/77bbe972-ffce-49b2-94d9-326593e2228e Authorization:$KEY\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"HTTP/1.1 200 OK\nAccess-Control-Allow-Origin: *\nConnection: keep-alive\nContent-Type: application/json; charset=utf-8\nDate: Tue, 07 Sep 2021 20:47:55 GMT\nKeep-Alive: timeout=60\nTransfer-Encoding: chunked\nVary: Accept-Encoding\n")),(0,r.kt)("h3",{id:"enable-env"},"Enable environment for Feature Toggle"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"http POST http://localhost:4242/api/admin/projects/default/features/demo/environments/development/on Authorization:$KEY --json\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"HTTP/1.1 200 OK\nAccess-Control-Allow-Origin: *\nConnection: keep-alive\nDate: Tue, 07 Sep 2021 20:49:51 GMT\nKeep-Alive: timeout=60\nTransfer-Encoding: chunked\n")),(0,r.kt)("p",null,"Possible Errors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"409 Conflict")," - You can not enable the environment before it has strategies.")),(0,r.kt)("h2",{id:"feature-variants"},"Feature Variants"),(0,r.kt)("h3",{id:"update-variants"},"Put variants for Feature Toggle"),(0,r.kt)("p",null,"This overwrites the current variants for the feature toggle specified in the :featureName parameter.\nThe backend will validate the input for the following invariants"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If there are variants, there needs to be at least one variant with ",(0,r.kt)("inlineCode",{parentName:"li"},"weightType: variable")),(0,r.kt)("li",{parentName:"ul"},"The sum of the weights of variants with ",(0,r.kt)("inlineCode",{parentName:"li"},"weightType: fix")," must be below 1000 (< 1000)")),(0,r.kt)("p",null,"The backend will also distribute remaining weight up to 1000 after adding the variants with ",(0,r.kt)("inlineCode",{parentName:"p"},"weightType: fix")," together amongst the variants of ",(0,r.kt)("inlineCode",{parentName:"p"},"weightType: variable")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'[\n    {\n        "name": "variant1",\n        "weightType": "fix",\n        "weight": 650\n    },\n    {\n        "name": "variant2",\n        "weightType": "variable",\n        "weight": 123\n    }\n]\' | \\\nhttp PUT http://localhost:4242/api/admin/projects/default/features/demo/variants Authorization:$KEY\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'HTTP/1.1 200 OK\nAccess-Control-Allow-Origin: *\nConnection: keep-alive\nDate: Tue, 23 Nov 2021 08:46:32 GMT\nKeep-Alive: timeout=60\nTransfer-Encoding: chunked\nContent-Type: application/json; charset=utf-8\n\n{\n  "version": "1",\n  "variants": [\n    {\n      "name": "variant2",\n      "weightType": "variable",\n      "weight": 350\n    },\n    {\n      "name": "variant1",\n      "weightType": "fix",\n      "weight": 650\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"patch-variants-for-a-feature-toggle"},"PATCH variants for a feature toggle"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo \'[{"op": "add", "path": "/1", "value": {\n  "name": "new-variant",\n  "weightType": "fix",\n  "weight": 200\n}}]\' | \\\nhttp PATCH http://localhost:4242/api/admin/projects/default/features/demo/variants Authorization:$KEY\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Example Response ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1",\n  "variants": [\n    {\n      "name": "variant2",\n      "weightType": "variable",\n      "weight": 150\n    },\n    {\n      "name": "new-variant",\n      "weightType": "fix",\n      "weight": 200\n    },\n    {\n      "name": "variant1",\n      "weightType": "fix",\n      "weight": 650\n    }\n  ]\n}\n')))}c.isMDXComponent=!0}}]);