"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[625],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,c=m["".concat(s,".").concat(g)]||m[g]||d[g]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"features",title:"/api/admin/features"},i=void 0,o={unversionedId:"api/admin/features",id:"api/admin/features",title:"/api/admin/features",description:"Most of this API was deprecated as part of the v4.3 release and will be removed in v5.0. You should use the project-based API (/api/admin/projects/:projectId) instead. The deprecated endpoints are marked as such in the document below.",source:"@site/docs/api/admin/feature-toggles-api.md",sourceDirName:"api/admin",slug:"/api/admin/features",permalink:"/api/admin/features",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/feature-toggles-api.md",tags:[],version:"current",frontMatter:{id:"features",title:"/api/admin/features"},sidebar:"documentation",previous:{title:"/api/admin/feature-types",permalink:"/api/admin/feature-types"},next:{title:"/api/admin/archive",permalink:"/api/admin/features-archive"}},s={},p=[{value:"Fetching Feature Toggles",id:"fetching-feature-toggles",level:2},{value:"Filter feature toggles",id:"filter-feature-toggles",level:3},{value:"Fetch specific feature toggle",id:"fetch-specific-feature-toggle",level:2},{value:"Create a new Feature Toggle",id:"create-a-new-feature-toggle",level:2},{value:"Update a Feature Toggle",id:"update-a-feature-toggle",level:2},{value:"Tag a Feature Toggle",id:"tag-a-feature-toggle",level:2},{value:"Remove a tag from a Feature Toggle",id:"remove-a-tag-from-a-feature-toggle",level:2},{value:"Archive a Feature Toggle",id:"archive-a-feature-toggle",level:2},{value:"Enable a Feature Toggle",id:"enable-a-feature-toggle",level:2},{value:"Disable a Feature Toggle",id:"disable-a-feature-toggle",level:2},{value:"Mark a Feature Toggle as &quot;stale&quot;",id:"mark-a-feature-toggle-as-stale",level:2},{value:"Mark a Feature Toggle as &quot;active&quot;",id:"mark-a-feature-toggle-as-active",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Most of this API was deprecated as part of the v4.3 release and will be removed in v5.0. You should use ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2"},"the project-based API (/api/admin/projects/:projectId)")," instead. The deprecated endpoints are marked as such in the document below.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ",(0,r.kt)("strong",{parentName:"a"},"admin")," token")," and add an Authorization header using the token.")),(0,r.kt)("h2",{id:"fetching-feature-toggles"},"Fetching Feature Toggles"),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint is deprecated. Please use the ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#fetching-toggles"},"project-based endpoint to fetch all toggles")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/admin/features")),(0,r.kt)("p",null,"This endpoint is the one all admin ui should use to fetch all available feature toggles from the ",(0,r.kt)("em",{parentName:"p"},"unleash-server"),". The response returns all active feature toggles and their current strategy configuration. A feature toggle will have ",(0,r.kt)("em",{parentName:"p"},"at least")," one configured strategy. A strategy will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," map."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 2,\n  "features": [\n    {\n      "name": "Feature.A",\n      "description": "lorem ipsum",\n      "type": "release",\n      "enabled": false,\n      "stale": false,\n      "strategies": [\n        {\n          "name": "default",\n          "parameters": {}\n        }\n      ],\n      "variants": [\n        {\n          "name": "variant1",\n          "weight": 50\n        },\n        {\n          "name": "variant2",\n          "weight": 50\n        }\n      ],\n      "tags": [\n        {\n          "id": 1,\n          "type": "simple",\n          "value": "TeamRed"\n        }\n      ]\n    },\n    {\n      "name": "Feature.B",\n      "description": "lorem ipsum",\n      "enabled": true,\n      "stale": false,\n      "strategies": [\n        {\n          "name": "ActiveForUserWithId",\n          "parameters": {\n            "userIdList": "123,221,998"\n          }\n        },\n        {\n          "name": "GradualRolloutRandom",\n          "parameters": {\n            "percentage": "10"\n          }\n        }\n      ],\n      "variants": [],\n      "tags": []\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"filter-feature-toggles"},"Filter feature toggles"),(0,r.kt)("p",null,"Supports three params for now"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag")," - filters for features tagged with tag"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project")," - filters for features belonging to project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namePrefix")," - filters for features beginning with prefix")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," performs OR filtering if multiple arguments"),(0,r.kt)("p",null,"To filter for any feature tagged with a ",(0,r.kt)("inlineCode",{parentName:"p"},"simple")," tag with value ",(0,r.kt)("inlineCode",{parentName:"p"},"taga")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"simple")," tag with value ",(0,r.kt)("inlineCode",{parentName:"p"},"tagb")," use"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/features?tag[]=simple:taga&tag[]simple:tagb")),(0,r.kt)("p",null,"To filter for any feature belonging to project ",(0,r.kt)("inlineCode",{parentName:"p"},"myproject")," use"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/features?project=myproject")),(0,r.kt)("p",null,"Response format is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"api/admin/features")),(0,r.kt)("h2",{id:"fetch-specific-feature-toggle"},"Fetch specific feature toggle"),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint is deprecated. Please use the ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#get-toggle"},"project-based endpoint to fetch specific toggles")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/admin/features/:featureName")),(0,r.kt)("p",null,"Used to fetch details about a specific featureToggle. This is mostly provded to make it easy to debug the API and should not be used by the client implementations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\n')),(0,r.kt)("h2",{id:"create-a-new-feature-toggle"},"Create a new Feature Toggle"),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint is deprecated. Please use the ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#create-toggle"},"project-based endpoint to create feature toggles")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/features/")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Used by the admin-dashboard to create a new feature toggles."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"name")," ",(0,r.kt)("strong",{parentName:"li"},"must be globally unique"),", otherwise you will get a ",(0,r.kt)("em",{parentName:"li"},"403-response"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"type")," is optional. If not defined it defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"release"))),(0,r.kt)("p",null,"Returns 200-response if the feature toggle was created successfully."),(0,r.kt)("h2",{id:"update-a-feature-toggle"},"Update a Feature Toggle"),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint is deprecated. Please use the ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#update-toggle"},"project-based endpoint to update a feature toggle")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PUT: http://unleash.host.com/api/admin/features/:toggleName")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": []\n}\n')),(0,r.kt)("p",null,"Used by the admin dashboard to update a feature toggles. The name has to match an existing features toggle."),(0,r.kt)("p",null,"Returns 200-response if the feature toggle was updated successfully."),(0,r.kt)("h2",{id:"tag-a-feature-toggle"},"Tag a Feature Toggle"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/admin/features/:featureName/tags")),(0,r.kt)("p",null,"Used to tag a feature"),(0,r.kt)("p",null,"If the tuple (type, value) does not already exist, it will be added to the list of tags. Then Unleash will add a relation between the feature name and the tag."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "simple",\n  "value": "Team-Green"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Success")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Returns _201-CREATED_ if the feature was tagged successfully\n- Creates the tag if needed, then connects the tag to the existing feature\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failures")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Returns _404-NOT-FOUND_ if the `type` was not found\n")),(0,r.kt)("h2",{id:"remove-a-tag-from-a-feature-toggle"},"Remove a tag from a Feature Toggle"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE https://unleash.host.com/api/admin/features/:featureName/tags/:type/:value")),(0,r.kt)("p",null,"Removes the specified tag from the ",(0,r.kt)("inlineCode",{parentName:"p"},"(type, value)")," tuple from the Feature Toggle's list of tags."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Success")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Returns _200-OK_\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failures")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Returns 404 if the tag does not exist\n- Returns 500 if the database could not be reached\n")),(0,r.kt)("h2",{id:"archive-a-feature-toggle"},"Archive a Feature Toggle"),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint is deprecated. Please use the ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#archive-toggle"},"project-based endpoint to archive toggles")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE: http://unleash.host.com/api/admin/features/:toggleName")),(0,r.kt)("p",null,"Used to archive a feature toggle. A feature toggle can never be totally be deleted, but can be archived. This is a design decision to make sure that a old feature toggle does not suddenly reappear because someone else is re-using the same name."),(0,r.kt)("h2",{id:"enable-a-feature-toggle"},"Enable a Feature Toggle"),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint is deprecated. Please use the ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#enable-env"},"project-based endpoint to enable feature toggles")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/features/:featureName/toggle/on")),(0,r.kt)("p",null,"Used to enable a feature toggle. The :featureName must match an existing Feature Toggle. Returns 200-response if the feature toggle was enabled successfully."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body")),(0,r.kt)("p",null,"None"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": true,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\n')),(0,r.kt)("h2",{id:"disable-a-feature-toggle"},"Disable a Feature Toggle"),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint is deprecated. Please use the ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#disable-env"},"project-based endpoint to disable feature toggles")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/features/:featureName/toggle/off")),(0,r.kt)("p",null,"Used to disable a feature toggle. The :featureName must match an existing Feature Toggle. Returns 200-response if the feature toggle was disabled successfully."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body")),(0,r.kt)("p",null,"None"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\n')),(0,r.kt)("h2",{id:"mark-a-feature-toggle-as-stale"},'Mark a Feature Toggle as "stale"'),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint is deprecated. Please use the ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#patch-toggle"},"project-based endpoint to patch a feature toggle and mark it as stale")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/features/:featureName/stale/on")),(0,r.kt)("p",null,"Used to mark a feature toggle as stale (deprecated). The :featureName must match an existing Feature Toggle. Returns 200-response if the feature toggle was enabled successfully."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body")),(0,r.kt)("p",null,"None"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": true,\n  "stale": true,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\n')),(0,r.kt)("h2",{id:"mark-a-feature-toggle-as-active"},'Mark a Feature Toggle as "active"'),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint is deprecated. Please use the ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#patch-toggle"},"project-based endpoint to patch a feature toggle and mark it as not stale")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/features/:featureName/stale/off")),(0,r.kt)("p",null,"Used to mark a feature toggle active (remove stale marking). The :featureName must match an existing Feature Toggle. Returns 200-response if the feature toggle was disabled successfully."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body")),(0,r.kt)("p",null,"None"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.A",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\n')))}d.isMDXComponent=!0}}]);