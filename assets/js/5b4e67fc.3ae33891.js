"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2935:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"features",title:"/api/client/features"},l=void 0,o={unversionedId:"api/client/features",id:"api/client/features",title:"/api/client/features",description:"In order to access the client API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create a CLIENT token and add an Authorization header using the token.",source:"@site/docs/api/client/feature-toggles-api.md",sourceDirName:"api/client",slug:"/api/client/features",permalink:"/api/client/features",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/client/feature-toggles-api.md",tags:[],version:"current",frontMatter:{id:"features",title:"/api/client/features"},sidebar:"documentation",previous:{title:"/api/admin/user-admin",permalink:"/api/admin/user-admin"},next:{title:"/api/client/metrics",permalink:"/api/client/metrics"}},s=[{value:"Fetching Feature Toggles",id:"fetching-feature-toggles",children:[{value:"Filter feature toggles",id:"filter-feature-toggles",children:[],level:4}],level:3},{value:"Get specific feature toggle",id:"get-specific-feature-toggle",children:[],level:3},{value:"Strategy Constraints",id:"strategy-constraints",children:[],level:3},{value:"Variants",id:"variants",children:[],level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In order to access the client API endpoints you need to identify yourself. Unless you're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create a CLIENT token")," and add an Authorization header using the token.")),(0,r.kt)("h3",{id:"fetching-feature-toggles"},"Fetching Feature Toggles"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/client/features")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HEADERS:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UNLEASH-APPNAME: appName"),(0,r.kt)("li",{parentName:"ul"},"UNLEASH-INSTANCEID: instanceId")),(0,r.kt)("p",null,"This endpoint is the one all clients should use to fetch all available feature toggles from the ",(0,r.kt)("em",{parentName:"p"},"unleash-server"),". The response returns all active feature toggles and their current strategy configuration. A feature toggle will have ",(0,r.kt)("em",{parentName:"p"},"at least")," one configured strategy. A strategy will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," map."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note:")," Clients should prefer the ",(0,r.kt)("inlineCode",{parentName:"p"},"strategies")," property. Legacy properties (",(0,r.kt)("inlineCode",{parentName:"p"},"strategy")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters"),") will be kept until ",(0,r.kt)("strong",{parentName:"p"},"version 2")," of the format.")),(0,r.kt)("p",null,"This endpoint should never return anything besides a valid ",(0,r.kt)("em",{parentName:"p"},"20X or 304-response"),". It will also include an ",(0,r.kt)("inlineCode",{parentName:"p"},"Etag"),"-header. The value of this header can be used by clients as the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"If-None-Match"),"-header in the request to prevent a data transfer if the client already has the latest response locally."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "features": [\n    {\n      "name": "Feature.A",\n      "type": "release",\n      "enabled": false,\n      "stale": false,\n      "strategies": [\n        {\n          "name": "default",\n          "parameters": {}\n        }\n      ],\n      "strategy": "default",\n      "parameters": {}\n    },\n    {\n      "name": "Feature.B",\n      "type": "killswitch",\n      "enabled": true,\n      "stale": false,\n      "strategies": [\n        {\n          "name": "ActiveForUserWithId",\n          "parameters": {\n            "userIdList": "123,221,998"\n          }\n        },\n        {\n          "name": "GradualRolloutRandom",\n          "parameters": {\n            "percentage": "10"\n          }\n        }\n      ],\n      "strategy": "ActiveForUserWithId",\n      "parameters": {\n        "userIdList": "123,221,998"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"filter-feature-toggles"},"Filter feature toggles"),(0,r.kt)("p",null,"Supports three params for now"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag")," - filters for features tagged with tag"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project")," - filters for features belonging to project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namePrefix")," - filters for features beginning with prefix")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," performs OR filtering if multiple arguments"),(0,r.kt)("p",null,"To filter for any feature tagged with a ",(0,r.kt)("inlineCode",{parentName:"p"},"simple")," tag with value ",(0,r.kt)("inlineCode",{parentName:"p"},"taga")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"simple")," tag with value ",(0,r.kt)("inlineCode",{parentName:"p"},"tagb")," use"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/client/features?tag[]=simple:taga&tag[]simple:tagb")),(0,r.kt)("p",null,"To filter for any feature belonging to project ",(0,r.kt)("inlineCode",{parentName:"p"},"myproject")," use"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/client/features?project=myproject")),(0,r.kt)("p",null,"Response format is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"api/client/features")),(0,r.kt)("h3",{id:"get-specific-feature-toggle"},"Get specific feature toggle"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/client/features/:featureName")),(0,r.kt)("p",null,"Used to fetch details about a specific feature toggle. This is mainly provided to make it easy to debug the API and should not be used by the client implementations."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Notice"),": You will not get a version property when fetching a specific feature toggle by name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "strategy": "default",\n  "parameters": {}\n}\n')),(0,r.kt)("h3",{id:"strategy-constraints"},"Strategy Constraints"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a unleash-enterprise feature")),(0,r.kt)("p",null,"Strategy definitions may also contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"constraints")," property. Strategy constraints is a feature in Unleash which work on context fields, which is defined as part of the ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/unleash_context"},"Unleash Context"),". The purpose is to define a set of rules where all needs to be satisfied in order for the activation strategy to evaluate to true. A ",(0,r.kt)("a",{parentName:"p",href:"https://www.unleash-hosted.com/articles/strategy-constraints"},"high level description")," of it is available online."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("p",null,"The example shows strategy constraints in action. Constraints is a new field on the strategy-object. It is a list of constraints that need to be satisfied."),(0,r.kt)("p",null,"In the example ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," needs to be ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," AND ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," must be either ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," OR ",(0,r.kt)("inlineCode",{parentName:"p"},"44")," in order for the Unleash Client to evaluate the strategy, which in this scenario is \u201cdefault\u201d and will always evaluate to true."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "release",\n  "enabled": true,\n  "stale": false,\n  "name": "Demo",\n  "strategies": [\n    {\n      "constraints": [\n        {\n          "contextName": "environment",\n          "operator": "IN",\n          "values": ["production"]\n        },\n        {\n          "contextName": "userId",\n          "operator": "IN",\n          "values": ["123", "44"]\n        }\n      ],\n      "name": "default",\n      "parameters": {}\n    }\n  ]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"contextName")," - is the name of the field to look up on the unleash context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"values")," - is a list of values (string)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"operator")," - is the logical action to take on the values Supported operator are:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IN")," - constraint is satisfied if one of the values in the list matches the value for this context field in the context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NOT_IN")," - constraint is satisfied if NONE of the values is the list matches the value for this field in the context.")))),(0,r.kt)("h3",{id:"variants"},"Variants"),(0,r.kt)("p",null,"All feature toggles can also take an array of variants. You can read more about ",(0,r.kt)("a",{parentName:"p",href:"/advanced/toggle_variants"},"feature toggle variants"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "features": [\n    {\n      "name": "Demo",\n      "type": "operational",\n      "enabled": true,\n      "stale": false,\n      "strategies": [\n        {\n          "name": "default"\n        }\n      ],\n      "variants": [\n        {\n          "name": "red",\n          "weight": 500,\n          "weightType": "variable",\n          "payload": {\n            "type": "string",\n            "value": "something"\n          },\n          "overrides": [\n            {\n              "contextName": "userId",\n              "values": ["123"]\n            }\n          ]\n        },\n        {\n          "name": "blue",\n          "weight": 500,\n          "overrides": [],\n          "weightType": "variable"\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"payload")," - an optional object representing a payload to the variant. Takes two properties if present ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"value"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"overrides")," - an optional array of overrides. If any context field matches any of the the defined overrides it means that the variant should be selected.")))}u.isMDXComponent=!0}}]);