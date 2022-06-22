"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[625],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=i,c=u["".concat(o,".").concat(g)]||u[g]||m[g]||r;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1061:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=a(7462),i=(a(7294),a(3905));const r={id:"features",title:"/api/admin/features"},l=void 0,s={unversionedId:"api/admin/features",id:"api/admin/features",title:"/api/admin/features",description:"Most of this API was deprecated as part of the v4.3 release and will be removed in v5.0. You should use the project-based API (/api/admin/projects/:projectId) instead. The deprecated endpoints are marked as such in the document below.",source:"@site/docs/api/admin/feature-toggles-api.md",sourceDirName:"api/admin",slug:"/api/admin/features",permalink:"/api/admin/features",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/feature-toggles-api.md",tags:[],version:"current",frontMatter:{id:"features",title:"/api/admin/features"},sidebar:"documentation",previous:{title:"/api/admin/feature-types",permalink:"/api/admin/feature-types"},next:{title:"/api/admin/archive",permalink:"/api/admin/features-archive"}},o=[{value:"Fetching Feature Toggles",id:"fetching-feature-toggles",children:[{value:"Filter feature toggles",id:"filter-feature-toggles",children:[],level:3}],level:2},{value:"Fetch specific feature toggle",id:"fetch-specific-feature-toggle",children:[],level:2},{value:"Create a new Feature Toggle",id:"create-a-new-feature-toggle",children:[],level:2},{value:"Update a Feature Toggle",id:"update-a-feature-toggle",children:[],level:2},{value:"Tag a Feature Toggle",id:"tag-a-feature-toggle",children:[],level:2},{value:"Remove a tag from a Feature Toggle",id:"remove-a-tag-from-a-feature-toggle",children:[],level:2},{value:"Archive a Feature Toggle",id:"archive-a-feature-toggle",children:[],level:2},{value:"Enable a Feature Toggle",id:"enable-a-feature-toggle",children:[],level:2},{value:"Disable a Feature Toggle",id:"disable-a-feature-toggle",children:[],level:2},{value:"Mark a Feature Toggle as &quot;stale&quot;",id:"mark-a-feature-toggle-as-stale",children:[],level:2},{value:"Mark a Feature Toggle as &quot;active&quot;",id:"mark-a-feature-toggle-as-active",children:[],level:2}],p={toc:o};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Most of this API was deprecated as part of the v4.3 release and will be removed in v5.0. You should use ",(0,i.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2"},"the project-based API (/api/admin/projects/:projectId)")," instead. The deprecated endpoints are marked as such in the document below."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,i.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ",(0,i.kt)("strong",{parentName:"a"},"admin")," token")," and add an Authorization header using the token."))),(0,i.kt)("h2",{id:"fetching-feature-toggles"},"Fetching Feature Toggles"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This endpoint is deprecated. Please use the ",(0,i.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#fetching-toggles"},"project-based endpoint to fetch all toggles")," instead."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/admin/features")),(0,i.kt)("p",null,"This endpoint is the one all admin ui should use to fetch all available feature toggles from the ",(0,i.kt)("em",{parentName:"p"},"unleash-server"),". The response returns all active feature toggles and their current strategy configuration. A feature toggle will have ",(0,i.kt)("em",{parentName:"p"},"at least")," one configured strategy. A strategy will have a ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parameters")," map."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 2,\n  "features": [\n    {\n      "name": "Feature.A",\n      "description": "lorem ipsum",\n      "type": "release",\n      "enabled": false,\n      "stale": false,\n      "strategies": [\n        {\n          "name": "default",\n          "parameters": {}\n        }\n      ],\n      "variants": [\n        {\n          "name": "variant1",\n          "weight": 50\n        },\n        {\n          "name": "variant2",\n          "weight": 50\n        }\n      ],\n      "tags": [\n        {\n          "id": 1,\n          "type": "simple",\n          "value": "TeamRed"\n        }\n      ]\n    },\n    {\n      "name": "Feature.B",\n      "description": "lorem ipsum",\n      "enabled": true,\n      "stale": false,\n      "strategies": [\n        {\n          "name": "ActiveForUserWithId",\n          "parameters": {\n            "userIdList": "123,221,998"\n          }\n        },\n        {\n          "name": "GradualRolloutRandom",\n          "parameters": {\n            "percentage": "10"\n          }\n        }\n      ],\n      "variants": [],\n      "tags": []\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"filter-feature-toggles"},"Filter feature toggles"),(0,i.kt)("p",null,"Supports three params for now"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tag")," - filters for features tagged with tag"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"project")," - filters for features belonging to project"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namePrefix")," - filters for features beginning with prefix")),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"project")," performs OR filtering if multiple arguments"),(0,i.kt)("p",null,"To filter for any feature tagged with a ",(0,i.kt)("inlineCode",{parentName:"p"},"simple")," tag with value ",(0,i.kt)("inlineCode",{parentName:"p"},"taga")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"simple")," tag with value ",(0,i.kt)("inlineCode",{parentName:"p"},"tagb")," use"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/features?tag[]=simple:taga&tag[]simple:tagb")),(0,i.kt)("p",null,"To filter for any feature belonging to project ",(0,i.kt)("inlineCode",{parentName:"p"},"myproject")," use"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/features?project=myproject")),(0,i.kt)("p",null,"Response format is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"api/admin/features")),(0,i.kt)("h2",{id:"fetch-specific-feature-toggle"},"Fetch specific feature toggle"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This endpoint is deprecated. Please use the ",(0,i.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#get-toggle"},"project-based endpoint to fetch specific toggles")," instead."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/admin/features/:featureName")),(0,i.kt)("p",null,"Used to fetch details about a specific featureToggle. This is mostly provded to make it easy to debug the API and should not be used by the client implementations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\n')),(0,i.kt)("h2",{id:"create-a-new-feature-toggle"},"Create a new Feature Toggle"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This endpoint is deprecated. Please use the ",(0,i.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#create-toggle"},"project-based endpoint to create feature toggles")," instead."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/features/")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Used by the admin-dashboard to create a new feature toggles."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"name")," ",(0,i.kt)("strong",{parentName:"li"},"must be globally unique"),", otherwise you will get a ",(0,i.kt)("em",{parentName:"li"},"403-response"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"type")," is optional. If not defined it defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"release"))),(0,i.kt)("p",null,"Returns 200-response if the feature toggle was created successfully."),(0,i.kt)("h2",{id:"update-a-feature-toggle"},"Update a Feature Toggle"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This endpoint is deprecated. Please use the ",(0,i.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#update-toggle"},"project-based endpoint to update a feature toggle")," instead."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT: http://unleash.host.com/api/admin/features/:toggleName")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": []\n}\n')),(0,i.kt)("p",null,"Used by the admin dashboard to update a feature toggles. The name has to match an existing features toggle."),(0,i.kt)("p",null,"Returns 200-response if the feature toggle was updated successfully."),(0,i.kt)("h2",{id:"tag-a-feature-toggle"},"Tag a Feature Toggle"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/admin/features/:featureName/tags")),(0,i.kt)("p",null,"Used to tag a feature"),(0,i.kt)("p",null,"If the tuple (type, value) does not already exist, it will be added to the list of tags. Then Unleash will add a relation between the feature name and the tag."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "simple",\n  "value": "Team-Green"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Success")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Returns _201-CREATED_ if the feature was tagged successfully\n- Creates the tag if needed, then connects the tag to the existing feature\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Failures")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Returns _404-NOT-FOUND_ if the `type` was not found\n")),(0,i.kt)("h2",{id:"remove-a-tag-from-a-feature-toggle"},"Remove a tag from a Feature Toggle"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DELETE https://unleash.host.com/api/admin/features/:featureName/tags/:type/:value")),(0,i.kt)("p",null,"Removes the specified tag from the ",(0,i.kt)("inlineCode",{parentName:"p"},"(type, value)")," tuple from the Feature Toggle's list of tags."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Success")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Returns _200-OK_\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Failures")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Returns 404 if the tag does not exist\n- Returns 500 if the database could not be reached\n")),(0,i.kt)("h2",{id:"archive-a-feature-toggle"},"Archive a Feature Toggle"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This endpoint is deprecated. Please use the ",(0,i.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#archive-toggle"},"project-based endpoint to archive toggles")," instead."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DELETE: http://unleash.host.com/api/admin/features/:toggleName")),(0,i.kt)("p",null,"Used to archive a feature toggle. A feature toggle can never be totally be deleted, but can be archived. This is a design decision to make sure that a old feature toggle does not suddenly reappear because someone else is re-using the same name."),(0,i.kt)("h2",{id:"enable-a-feature-toggle"},"Enable a Feature Toggle"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This endpoint is deprecated. Please use the ",(0,i.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#enable-env"},"project-based endpoint to enable feature toggles")," instead."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/features/:featureName/toggle/on")),(0,i.kt)("p",null,"Used to enable a feature toggle. The :featureName must match an existing Feature Toggle. Returns 200-response if the feature toggle was enabled successfully."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body")),(0,i.kt)("p",null,"None"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": true,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\n')),(0,i.kt)("h2",{id:"disable-a-feature-toggle"},"Disable a Feature Toggle"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This endpoint is deprecated. Please use the ",(0,i.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#disable-env"},"project-based endpoint to disable feature toggles")," instead."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/features/:featureName/toggle/off")),(0,i.kt)("p",null,"Used to disable a feature toggle. The :featureName must match an existing Feature Toggle. Returns 200-response if the feature toggle was disabled successfully."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body")),(0,i.kt)("p",null,"None"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\n')),(0,i.kt)("h2",{id:"mark-a-feature-toggle-as-stale"},'Mark a Feature Toggle as "stale"'),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This endpoint is deprecated. Please use the ",(0,i.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#patch-toggle"},"project-based endpoint to patch a feature toggle and mark it as stale")," instead."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/features/:featureName/stale/on")),(0,i.kt)("p",null,"Used to mark a feature toggle as stale (deprecated). The :featureName must match an existing Feature Toggle. Returns 200-response if the feature toggle was enabled successfully."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body")),(0,i.kt)("p",null,"None"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": true,\n  "stale": true,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\n')),(0,i.kt)("h2",{id:"mark-a-feature-toggle-as-active"},'Mark a Feature Toggle as "active"'),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This endpoint is deprecated. Please use the ",(0,i.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#patch-toggle"},"project-based endpoint to patch a feature toggle and mark it as not stale")," instead."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/features/:featureName/stale/off")),(0,i.kt)("p",null,"Used to mark a feature toggle active (remove stale marking). The :featureName must match an existing Feature Toggle. Returns 200-response if the feature toggle was disabled successfully."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body")),(0,i.kt)("p",null,"None"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\n')))}d.isMDXComponent=!0}}]);