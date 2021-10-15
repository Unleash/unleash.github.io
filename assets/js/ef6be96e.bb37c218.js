"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8567],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2073:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"state",title:"/api/admin/state"},p=void 0,s={unversionedId:"api/admin/state",id:"api/admin/state",isDocsHomePage:!1,title:"/api/admin/state",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/state-api.md",sourceDirName:"api/admin",slug:"/api/admin/state",permalink:"/api/admin/state",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/api/admin/state-api.md",tags:[],version:"current",frontMatter:{id:"state",title:"/api/admin/state"},sidebar:"api",previous:{title:"/api/admin/events",permalink:"/api/admin/events"},next:{title:"/api/admin/feature-types",permalink:"/api/admin/feature-types"}},u=[{value:"Export Feature Toggles &amp; Strategies",id:"export-feature-toggles--strategies",children:[],level:3},{value:"Import Feature Toggles &amp; Strategies",id:"import-feature-toggles--strategies",children:[],level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,i.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,i.kt)("h3",{id:"export-feature-toggles--strategies"},"Export Feature Toggles & Strategies"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/admin/state/export")),(0,i.kt)("p",null,"The api endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/admin/state/export")," will export feature-toggles and strategies as json by default.\\\nYou can customize the export with query parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"format"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"json")),(0,i.kt)("td",{parentName:"tr",align:null},"Export format, either ",(0,i.kt)("inlineCode",{parentName:"td"},"json")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"yaml"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"download"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"If the exported data should be downloaded as a file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"featureToggles"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Include feature-toggles in the exported data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"strategies"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Include strategies in the exported data")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example response:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/admin/state/export?format=yaml&featureToggles=1&strategies=1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nfeatures:\n  - name: Feature.A\n    description: lorem ipsum\n    enabled: false\n    strategies:\n      - name: default\n        parameters: {}\n    variants:\n      - name: variant1\n        weight: 50\n      - name: variant2\n        weight: 50\n  - name: Feature.B\n    description: lorem ipsum\n    enabled: true\n    strategies:\n      - name: ActiveForUserWithId\n        parameters:\n          userIdList: '123,221,998'\n      - name: GradualRolloutRandom\n        parameters:\n          percentage: '10'\n    variants: []\nstrategies:\n  - name: country\n    description: Enable feature for certain countries\n    parameters:\n      - name: countries\n        type: list\n        description: List of countries\n        required: true\n")),(0,i.kt)("h3",{id:"import-feature-toggles--strategies"},"Import Feature Toggles & Strategies"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/admin/state/import")),(0,i.kt)("p",null,"You can import feature-toggles and strategies by POSTing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/admin/state/import")," endpoint.\\\nYou can either send the data as JSON in the POST-body or send a ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," parameter with ",(0,i.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," (YAML files are also accepted here)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Query Paramters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"drop")," - Use this parameter if you want the database to be cleaned before import (all strategies and features will be removed)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"keep")," - Use this query parameter if you want to keep all exiting feature toggle (and strategy) configurations as is (no override), and only insert missing feature toggles from the data provided.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You should be careful using the ",(0,i.kt)("inlineCode",{parentName:"p"},"drop")," parameter in production environments.")),(0,i.kt)("p",null,"Success: ",(0,i.kt)("inlineCode",{parentName:"p"},"202 Accepted"),"\\\nError: ",(0,i.kt)("inlineCode",{parentName:"p"},"400 Bad Request")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example body:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "features": [\n    {\n      "name": "Feature.A",\n      "description": "lorem ipsum",\n      "enabled": false,\n      "strategies": [\n        {\n          "name": "default",\n          "parameters": {}\n        }\n      ],\n      "variants": [\n        {\n          "name": "variant1",\n          "weight": 50\n        },\n        {\n          "name": "variant2",\n          "weight": 50\n        }\n      ]\n    },\n    {\n      "name": "Feature.B",\n      "description": "lorem ipsum",\n      "enabled": true,\n      "strategies": [\n        {\n          "name": "ActiveForUserWithId",\n          "parameters": {\n            "userIdList": "123,221,998"\n          }\n        },\n        {\n          "name": "GradualRolloutRandom",\n          "parameters": {\n            "percentage": "10"\n          }\n        }\n      ],\n      "variants": []\n    }\n  ],\n  "strategies": [\n    {\n      "name": "country",\n      "description": "Enable feature for certain countries",\n      "parameters": [\n        {\n          "name": "countries",\n          "type": "list",\n          "description": "List of countries",\n          "required": true\n        }\n      ]\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);