"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6235],{92579:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>s});var t=a(87462),o=(a(67294),a(3905));const d={title:"/api/admin/addons"},i=void 0,r={unversionedId:"reference/api/legacy/unleash/admin/addons",id:"reference/api/legacy/unleash/admin/addons",title:"/api/admin/addons",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/reference/api/legacy/unleash/admin/addons.md",sourceDirName:"reference/api/legacy/unleash/admin",slug:"/reference/api/legacy/unleash/admin/addons",permalink:"/reference/api/legacy/unleash/admin/addons",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/legacy/unleash/admin/addons.md",tags:[],version:"current",frontMatter:{title:"/api/admin/addons"},sidebar:"documentation",previous:{title:"Legacy API Documentation",permalink:"/reference/api/legacy/unleash/"},next:{title:"/api/admin/context",permalink:"/reference/api/legacy/unleash/admin/context"}},l={},s=[{value:"List addons and providers",id:"list-addons-and-providers",level:3},{value:"Create a new addon configuration",id:"create-a-new-addon-configuration",level:3},{value:"Notes",id:"notes",level:3},{value:"Update new addon configuration",id:"update-new-addon-configuration",level:3},{value:"Notes",id:"notes-1",level:3},{value:"Delete an addon configuration",id:"delete-an-addon-configuration",level:3}],p={toc:s};function u(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,o.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,o.kt)("h3",{id:"list-addons-and-providers"},"List addons and providers"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/addons")),(0,o.kt)("p",null,"Returns a list of ",(0,o.kt)("em",{parentName:"p"},"configured addons")," and available ",(0,o.kt)("em",{parentName:"p"},"addon providers"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addons": [\n    {\n      "id": 30,\n      "provider": "webhook",\n      "enabled": true,\n      "description": "post updates to slack",\n      "parameters": {\n        "url": "http://localhost:4242/webhook"\n      },\n      "events": ["feature-created", "feature-updated"]\n    },\n    {\n      "id": 33,\n      "provider": "slack",\n      "enabled": true,\n      "description": "default",\n      "parameters": {\n        "defaultChannel": "integration-demo-instance",\n        "url": "https://hooks.slack.com/someurl"\n      },\n      "events": ["feature-created", "feature-updated"]\n    }\n  ],\n  "providers": [\n    {\n      "name": "webhook",\n      "displayName": "Webhook",\n      "description": "Webhooks are a simple way to post messages from Unleash to third party services. Unleash make use of normal HTTP POST with a payload you may define yourself.",\n      "parameters": [\n        {\n          "name": "url",\n          "displayName": "Webhook URL",\n          "type": "url",\n          "required": true\n        },\n        {\n          "name": "bodyTemplate",\n          "displayName": "Body template",\n          "description": "You may format the body using a mustache template. If you don\'t specify anything, the format will be similar to the /api/admin/events format",\n          "type": "textfield",\n          "required": false\n        }\n      ],\n      "events": [\n        "feature-created",\n        "feature-updated",\n        "feature-archived",\n        "feature-revived"\n      ]\n    },\n    {\n      "name": "slack",\n      "displayName": "Slack",\n      "description": "Integrates Unleash with Slack.",\n      "parameters": [\n        {\n          "name": "url",\n          "displayName": "Slack webhook URL",\n          "type": "url",\n          "required": true\n        },\n        {\n          "name": "defaultChannel",\n          "displayName": "Default channel",\n          "description": "Default channel to post updates to if not specified in the slack-tag",\n          "type": "text",\n          "required": true\n        }\n      ],\n      "events": [\n        "feature-created",\n        "feature-updated",\n        "feature-archived",\n        "feature-revived"\n      ],\n      "tags": [\n        {\n          "name": "slack",\n          "description": "Slack tag used by the slack-addon to specify the slack channel.",\n          "icon": "S"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"create-a-new-addon-configuration"},"Create a new addon configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/addons")),(0,o.kt)("p",null,"Creates an addon configuration for an addon provider."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "provider": "webhook",\n  "description": "Optional description",\n  "enabled": true,\n  "parameters": {\n    "url": "http://localhost:4242/webhook"\n  },\n  "events": ["feature-created", "feature-updated"]\n}\n')),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"provider")," must be a valid addon provider")),(0,o.kt)("h3",{id:"update-new-addon-configuration"},"Update new addon configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/addons/:id")),(0,o.kt)("p",null,"Updates an addon configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "provider": "webhook",\n  "description": "Optional updated description",\n  "enabled": true,\n  "parameters": {\n    "url": "http://localhost:4242/webhook"\n  },\n  "events": ["feature-created", "feature-updated"]\n}\n')),(0,o.kt)("h3",{id:"notes-1"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"provider")," can not be changed.")),(0,o.kt)("h3",{id:"delete-an-addon-configuration"},"Delete an addon configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DELETE https://unleash.host.com/api/admin/addons/:id")),(0,o.kt)("p",null,"Deletes the addon with id=",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"."))}u.isMDXComponent=!0}}]);