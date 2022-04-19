"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1627],{8674:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return s}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],d={id:"addons",title:"/api/admin/addons"},l=void 0,p={unversionedId:"api/admin/addons",id:"api/admin/addons",title:"/api/admin/addons",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/addons.md",sourceDirName:"api/admin",slug:"/api/admin/addons",permalink:"/api/admin/addons",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/addons.md",tags:[],version:"current",frontMatter:{id:"addons",title:"/api/admin/addons"},sidebar:"documentation",previous:{title:"API Documentation",permalink:"/api"},next:{title:"/api/admin/context",permalink:"/api/admin/context"}},s=[{value:"List addons and providers",id:"list-addons-and-providers",children:[],level:3},{value:"Create a new addon configuration",id:"create-a-new-addon-configuration",children:[],level:3},{value:"Notes",id:"notes",children:[],level:3},{value:"Update new addon configuration",id:"update-new-addon-configuration",children:[],level:3},{value:"Notes",id:"notes-1",children:[],level:3},{value:"Delete an addon configuration",id:"delete-an-addon-configuration",children:[],level:3}],u={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,o.kt)("h3",{id:"list-addons-and-providers"},"List addons and providers"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/addons")),(0,o.kt)("p",null,"Returns a list of ",(0,o.kt)("em",{parentName:"p"},"configured addons")," and available ",(0,o.kt)("em",{parentName:"p"},"addon providers"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addons": [\n    {\n      "id": 30,\n      "provider": "webhook",\n      "enabled": true,\n      "description": "post updates to slack",\n      "parameters": {\n        "url": "http://localhost:4242/webhook"\n      },\n      "events": ["feature-created", "feature-updated"]\n    },\n    {\n      "id": 33,\n      "provider": "slack",\n      "enabled": true,\n      "description": "default",\n      "parameters": {\n        "defaultChannel": "integration-demo-instance",\n        "url": "https://hooks.slack.com/someurl"\n      },\n      "events": ["feature-created", "feature-updated"]\n    }\n  ],\n  "providers": [\n    {\n      "name": "webhook",\n      "displayName": "Webhook",\n      "description": "Webhooks are a simple way to post messages from Unleash to third party services. Unleash make use of normal HTTP POST with a payload you may define yourself.",\n      "parameters": [\n        {\n          "name": "url",\n          "displayName": "Webhook URL",\n          "type": "url",\n          "required": true\n        },\n        {\n          "name": "bodyTemplate",\n          "displayName": "Body template",\n          "description": "You may format the body using a mustache template. If you don\'t specify anything, the format will be similar to the /api/admin/events format",\n          "type": "textfield",\n          "required": false\n        }\n      ],\n      "events": [\n        "feature-created",\n        "feature-updated",\n        "feature-archived",\n        "feature-revived"\n      ]\n    },\n    {\n      "name": "slack",\n      "displayName": "Slack",\n      "description": "Integrates Unleash with Slack.",\n      "parameters": [\n        {\n          "name": "url",\n          "displayName": "Slack webhook URL",\n          "type": "url",\n          "required": true\n        },\n        {\n          "name": "defaultChannel",\n          "displayName": "Default channel",\n          "description": "Default channel to post updates to if not specified in the slack-tag",\n          "type": "text",\n          "required": true\n        }\n      ],\n      "events": [\n        "feature-created",\n        "feature-updated",\n        "feature-archived",\n        "feature-revived"\n      ],\n      "tags": [\n        {\n          "name": "slack",\n          "description": "Slack tag used by the slack-addon to specify the slack channel.",\n          "icon": "S"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"create-a-new-addon-configuration"},"Create a new addon configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/addons")),(0,o.kt)("p",null,"Creates an addon configuration for an addon provider."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "provider": "webhook",\n  "description": "Optional description",\n  "enabled": true,\n  "parameters": {\n    "url": "http://localhost:4242/webhook"\n  },\n  "events": ["feature-created", "feature-updated"]\n}\n')),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"provider")," must be a valid addon provider")),(0,o.kt)("h3",{id:"update-new-addon-configuration"},"Update new addon configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/addons/:id")),(0,o.kt)("p",null,"Updates an addon configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "provider": "webhook",\n  "description": "Optional updated description",\n  "enabled": true,\n  "parameters": {\n    "url": "http://localhost:4242/webhook"\n  },\n  "events": ["feature-created", "feature-updated"]\n}\n')),(0,o.kt)("h3",{id:"notes-1"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"provider")," can not be changed.")),(0,o.kt)("h3",{id:"delete-an-addon-configuration"},"Delete an addon configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DELETE https://unleash.host.com/api/admin/addons/:id")),(0,o.kt)("p",null,"Deletes the addon with id=",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"."))}c.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);