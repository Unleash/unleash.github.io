"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9956:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"context",title:"/api/admin/context"},i=void 0,l={unversionedId:"api/admin/context",id:"api/admin/context",title:"/api/admin/context",description:"The context feature is only available as part of Unleash Enterprise. In order to access the API programmatically you need to make sure you obtain a API token with admin permissions.",source:"@site/docs/api/admin/context.md",sourceDirName:"api/admin",slug:"/api/admin/context",permalink:"/api/admin/context",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/context.md",tags:[],version:"current",frontMatter:{id:"context",title:"/api/admin/context"},sidebar:"documentation",previous:{title:"/api/admin/addons",permalink:"/api/admin/addons"},next:{title:"/api/admin/events",permalink:"/api/admin/events"}},s=[{value:"List context fields defined in Unleash",id:"list-context-fields-defined-in-unleash",children:[],level:3},{value:"Create a new context field",id:"create-a-new-context-field",children:[],level:3},{value:"Update a context field",id:"update-a-context-field",children:[],level:3},{value:"Delete a context field",id:"delete-a-context-field",children:[],level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The context feature is only available as part of Unleash Enterprise. In order to access the API programmatically you need to make sure you ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"obtain a API token")," with admin permissions.")),(0,r.kt)("h3",{id:"list-context-fields-defined-in-unleash"},"List context fields defined in Unleash"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/context")),(0,r.kt)("p",null,"Returns a list of context fields defined in Unleash."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "appName",\n    "description": "Allows you to constrain on application name",\n    "stickiness": false,\n    "sortOrder": 2,\n    "createdAt": "2020-03-05T19:33:19.784Z"\n  },\n  {\n    "name": "environment",\n    "description": "Allows you to constrain on application environment",\n    "stickiness": false,\n    "sortOrder": 0,\n    "legalValues": ["qa", "dev", "prod"],\n    "createdAt": "2020-03-05T19:33:19.784Z"\n  },\n  {\n    "name": "tenantId",\n    "description": "Control rollout to your tenants",\n    "stickiness": true,\n    "sortOrder": 10,\n    "legalValues": ["company-a, company-b"],\n    "createdAt": "2020-03-05T19:33:19.784Z"\n  },\n  {\n    "name": "userId",\n    "description": "Allows you to constrain on userId",\n    "stickiness": false,\n    "sortOrder": 1,\n    "createdAt": "2020-03-05T19:33:19.784Z"\n  }\n]\n')),(0,r.kt)("h3",{id:"create-a-new-context-field"},"Create a new context field"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/admin/context")),(0,r.kt)("p",null,"Creates a new context field."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "region",\n  "description": "Control rollout based on region",\n  "legalValues": ["asia", "eu", "europe"],\n  "stickiness": true\n}\n')),(0,r.kt)("h3",{id:"update-a-context-field"},"Update a context field"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PUT https://unleash.host.com/api/context/:name")),(0,r.kt)("p",null,"Updates a new context field"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "region",\n  "description": "Control rollout based on region",\n  "legalValues": ["asia", "eu"],\n  "stickiness": true\n}\n')),(0,r.kt)("h3",{id:"delete-a-context-field"},"Delete a context field"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE https://unleash.host.com/api/admin/context/:name")),(0,r.kt)("p",null,"Deletes the context field with name=",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"."))}p.isMDXComponent=!0}}]);