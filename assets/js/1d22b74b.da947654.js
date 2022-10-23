"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1627],{47208:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=a(87462),d=(a(67294),a(3905));const o={id:"addons",title:"/api/admin/addons"},i=void 0,r={unversionedId:"api/admin/addons",id:"api/admin/addons",title:"/api/admin/addons",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/addons.md",sourceDirName:"api/admin",slug:"/api/admin/addons",permalink:"/api/admin/addons",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/addons.md",tags:[],version:"current",frontMatter:{id:"addons",title:"/api/admin/addons"},sidebar:"documentation",previous:{title:"API Documentation",permalink:"/api"},next:{title:"/api/admin/context",permalink:"/api/admin/context"}},s={},l=[{value:"List addons and providers",id:"list-addons-and-providers",level:3},{value:"Create a new addon configuration",id:"create-a-new-addon-configuration",level:3},{value:"Notes",id:"notes",level:3},{value:"Update new addon configuration",id:"update-new-addon-configuration",level:3},{value:"Notes",id:"notes-1",level:3},{value:"Delete an addon configuration",id:"delete-an-addon-configuration",level:3}],p={toc:l};function u(e){let{components:n,...a}=e;return(0,d.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,d.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,d.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,d.kt)("h3",{id:"list-addons-and-providers"},"List addons and providers"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/addons")),(0,d.kt)("p",null,"Returns a list of ",(0,d.kt)("em",{parentName:"p"},"configured addons")," and available ",(0,d.kt)("em",{parentName:"p"},"addon providers"),"."),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"Example response:")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addons": [\n    {\n      "id": 30,\n      "provider": "webhook",\n      "enabled": true,\n      "description": "post updates to slack",\n      "parameters": {\n        "url": "http://localhost:4242/webhook"\n      },\n      "events": ["feature-created", "feature-updated"]\n    },\n    {\n      "id": 33,\n      "provider": "slack",\n      "enabled": true,\n      "description": "default",\n      "parameters": {\n        "defaultChannel": "integration-demo-instance",\n        "url": "https://hooks.slack.com/someurl"\n      },\n      "events": ["feature-created", "feature-updated"]\n    }\n  ],\n  "providers": [\n    {\n      "name": "webhook",\n      "displayName": "Webhook",\n      "description": "Webhooks are a simple way to post messages from Unleash to third party services. Unleash make use of normal HTTP POST with a payload you may define yourself.",\n      "parameters": [\n        {\n          "name": "url",\n          "displayName": "Webhook URL",\n          "type": "url",\n          "required": true\n        },\n        {\n          "name": "bodyTemplate",\n          "displayName": "Body template",\n          "description": "You may format the body using a mustache template. If you don\'t specify anything, the format will be similar to the /api/admin/events format",\n          "type": "textfield",\n          "required": false\n        }\n      ],\n      "events": [\n        "feature-created",\n        "feature-updated",\n        "feature-archived",\n        "feature-revived"\n      ]\n    },\n    {\n      "name": "slack",\n      "displayName": "Slack",\n      "description": "Integrates Unleash with Slack.",\n      "parameters": [\n        {\n          "name": "url",\n          "displayName": "Slack webhook URL",\n          "type": "url",\n          "required": true\n        },\n        {\n          "name": "defaultChannel",\n          "displayName": "Default channel",\n          "description": "Default channel to post updates to if not specified in the slack-tag",\n          "type": "text",\n          "required": true\n        }\n      ],\n      "events": [\n        "feature-created",\n        "feature-updated",\n        "feature-archived",\n        "feature-revived"\n      ],\n      "tags": [\n        {\n          "name": "slack",\n          "description": "Slack tag used by the slack-addon to specify the slack channel.",\n          "icon": "S"\n        }\n      ]\n    }\n  ]\n}\n')),(0,d.kt)("h3",{id:"create-a-new-addon-configuration"},"Create a new addon configuration"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/addons")),(0,d.kt)("p",null,"Creates an addon configuration for an addon provider."),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"Body")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "provider": "webhook",\n  "description": "Optional description",\n  "enabled": true,\n  "parameters": {\n    "url": "http://localhost:4242/webhook"\n  },\n  "events": ["feature-created", "feature-updated"]\n}\n')),(0,d.kt)("h3",{id:"notes"},"Notes"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"provider")," must be a valid addon provider")),(0,d.kt)("h3",{id:"update-new-addon-configuration"},"Update new addon configuration"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/addons/:id")),(0,d.kt)("p",null,"Updates an addon configuration."),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"Body")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "provider": "webhook",\n  "description": "Optional updated description",\n  "enabled": true,\n  "parameters": {\n    "url": "http://localhost:4242/webhook"\n  },\n  "events": ["feature-created", "feature-updated"]\n}\n')),(0,d.kt)("h3",{id:"notes-1"},"Notes"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"provider")," can not be changed.")),(0,d.kt)("h3",{id:"delete-an-addon-configuration"},"Delete an addon configuration"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"DELETE https://unleash.host.com/api/admin/addons/:id")),(0,d.kt)("p",null,"Deletes the addon with id=",(0,d.kt)("inlineCode",{parentName:"p"},"id"),"."))}u.isMDXComponent=!0}}]);