"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7830],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,v=c["".concat(o,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},215:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],u={id:"events",title:"/api/admin/events"},o=void 0,d={unversionedId:"api/admin/events",id:"api/admin/events",isDocsHomePage:!1,title:"/api/admin/events",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/events-api.md",sourceDirName:"api/admin",slug:"/api/admin/events",permalink:"/api/admin/events",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/api/admin/events-api.md",tags:[],version:"current",frontMatter:{id:"events",title:"/api/admin/events"},sidebar:"api",previous:{title:"/api/admin/metrics",permalink:"/api/admin/metrics"},next:{title:"/api/admin/state",permalink:"/api/admin/state"}},p=[{value:"Feature Toggle events:",id:"feature-toggle-events",children:[],level:3},{value:"Strategy Events",id:"strategy-events",children:[],level:3},{value:"Context field events",id:"context-field-events",children:[],level:3},{value:"Project events",id:"project-events",children:[],level:3},{value:"Tag events",id:"tag-events",children:[],level:3},{value:"Tag type events",id:"tag-type-events",children:[],level:3},{value:"Addon events",id:"addon-events",children:[],level:3},{value:"User events",id:"user-events",children:[],level:3},{value:"Environment events (Enterprise)",id:"environment-events-enterprise",children:[],level:3}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,l.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,l.kt)("h1",{id:"events-api"},"Events API"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/admin/events")),(0,l.kt)("p",null,"Used to fetch all changes in the unleash system."),(0,l.kt)("p",null,"Defined event types:"),(0,l.kt)("h3",{id:"feature-toggle-events"},"Feature Toggle events:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"feature-created"),(0,l.kt)("li",{parentName:"ul"},"feature-deleted"),(0,l.kt)("li",{parentName:"ul"},"feature-updated"),(0,l.kt)("li",{parentName:"ul"},"feature-metadata-updated"),(0,l.kt)("li",{parentName:"ul"},"feature-project-change"),(0,l.kt)("li",{parentName:"ul"},"feature-archived"),(0,l.kt)("li",{parentName:"ul"},"feature-revived"),(0,l.kt)("li",{parentName:"ul"},"feature-import"),(0,l.kt)("li",{parentName:"ul"},"feature-tagged"),(0,l.kt)("li",{parentName:"ul"},"feature-tag-import"),(0,l.kt)("li",{parentName:"ul"},"feature-strategy-update"),(0,l.kt)("li",{parentName:"ul"},"feature-strategy-add"),(0,l.kt)("li",{parentName:"ul"},"feature-strategy-remove"),(0,l.kt)("li",{parentName:"ul"},"drop-feature-tags"),(0,l.kt)("li",{parentName:"ul"},"feature-untagged"),(0,l.kt)("li",{parentName:"ul"},"feature-stale-on"),(0,l.kt)("li",{parentName:"ul"},"feature-stale-off"),(0,l.kt)("li",{parentName:"ul"},"drop-features"),(0,l.kt)("li",{parentName:"ul"},"feature-environment-enabled"),(0,l.kt)("li",{parentName:"ul"},"feature-environment-disabled")),(0,l.kt)("h3",{id:"strategy-events"},"Strategy Events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"strategy-created"),(0,l.kt)("li",{parentName:"ul"},"strategy-deleted"),(0,l.kt)("li",{parentName:"ul"},"strategy-deprecated"),(0,l.kt)("li",{parentName:"ul"},"strategy-reactivated"),(0,l.kt)("li",{parentName:"ul"},"strategy-updated"),(0,l.kt)("li",{parentName:"ul"},"strategy-import"),(0,l.kt)("li",{parentName:"ul"},"drop-strategies")),(0,l.kt)("h3",{id:"context-field-events"},"Context field events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"context-field-created"),(0,l.kt)("li",{parentName:"ul"},"context-field-updated"),(0,l.kt)("li",{parentName:"ul"},"context-field-deleted")),(0,l.kt)("h3",{id:"project-events"},"Project events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"project-created"),(0,l.kt)("li",{parentName:"ul"},"project-updated"),(0,l.kt)("li",{parentName:"ul"},"project-deleted"),(0,l.kt)("li",{parentName:"ul"},"project-import"),(0,l.kt)("li",{parentName:"ul"},"drop-projects")),(0,l.kt)("h3",{id:"tag-events"},"Tag events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tag-created"),(0,l.kt)("li",{parentName:"ul"},"tag-deleted"),(0,l.kt)("li",{parentName:"ul"},"tag-import"),(0,l.kt)("li",{parentName:"ul"},"drop-tags")),(0,l.kt)("h3",{id:"tag-type-events"},"Tag type events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tag-type-created"),(0,l.kt)("li",{parentName:"ul"},"tag-type-deleted"),(0,l.kt)("li",{parentName:"ul"},"tag-type-updated"),(0,l.kt)("li",{parentName:"ul"},"tag-type-import"),(0,l.kt)("li",{parentName:"ul"},"drop-tag-types")),(0,l.kt)("h3",{id:"addon-events"},"Addon events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"addon-config-created"),(0,l.kt)("li",{parentName:"ul"},"addon-config-updated"),(0,l.kt)("li",{parentName:"ul"},"addon-config-deleted")),(0,l.kt)("h3",{id:"user-events"},"User events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"user-created"),(0,l.kt)("li",{parentName:"ul"},"user-updated"),(0,l.kt)("li",{parentName:"ul"},"user-deleted")),(0,l.kt)("h3",{id:"environment-events-enterprise"},"Environment events (Enterprise)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"drop-environments"),(0,l.kt)("li",{parentName:"ul"},"environment-import")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": 2,\n    "events": [{\n        "id": 187,\n        "type": "feature-metadata-updated",\n        "createdBy": "admin",\n        "createdAt": "2021-11-11T09:42:14.271Z",\n        "data": {\n            "name": "HelloEvents!",\n            "description": "Hello Events update!",\n            "type": "release",\n            "project": "default",\n            "stale": false,\n            "variants": [],\n            "createdAt": "2021-11-11T09:40:51.077Z",\n            "lastSeenAt": null\n        },\n        "preData": {\n            "name": "HelloEvents!",\n            "description": "Hello Events!",\n            "type": "release",\n            "project": "default",\n            "stale": false,\n            "variants": [],\n            "createdAt": "2021-11-11T09:40:51.077Z",\n            "lastSeenAt": null\n        },\n        "tags": [{\n            "value": "team-x",\n            "type": "simple"\n        }],\n        "featureName": "HelloEvents!",\n        "project": "default",\n        "environment": null\n    }, {\n        "id": 186,\n        "type": "feature-tagged",\n        "createdBy": "admin",\n        "createdAt": "2021-11-11T09:41:20.464Z",\n        "data": {\n            "type": "simple",\n            "value": "team-x"\n        },\n        "preData": null,\n        "tags": [],\n        "featureName": "HelloEvents!",\n        "project": null,\n        "environment": null\n    }, {\n        "id": 184,\n        "type": "feature-environment-enabled",\n        "createdBy": "admin",\n        "createdAt": "2021-11-11T09:41:03.782Z",\n        "data": null,\n        "preData": null,\n        "tags": [],\n        "featureName": "HelloEvents!",\n        "project": "default",\n        "environment": "default"\n    }, {\n        "id": 183,\n        "type": "feature-strategy-add",\n        "createdBy": "admin",\n        "createdAt": "2021-11-11T09:41:00.740Z",\n        "data": {\n            "id": "88e1df00-1951-452f-a063-6f5e18476f87",\n            "name": "flexibleRollout",\n            "constraints": [],\n            "parameters": {\n                "groupId": "HelloEvents!",\n                "rollout": 51,\n                "stickiness": "default"\n            }\n        },\n        "preData": null,\n        "tags": [],\n        "featureName": "HelloEvents!",\n        "project": "default",\n        "environment": "default"\n    }, {\n        "id": 182,\n        "type": "feature-created",\n        "createdBy": "admin",\n        "createdAt": "2021-11-11T09:40:51.083Z",\n        "data": {\n            "name": "HelloEvents!",\n            "description": "Hello Events!",\n            "type": "release",\n            "project": "default",\n            "stale": false,\n            "variants": [],\n            "createdAt": "2021-11-11T09:40:51.077Z",\n            "lastSeenAt": null\n        },\n        "preData": null,\n        "tags": [],\n        "featureName": "HelloEvents!",\n        "project": "default",\n        "environment": null\n    }]\n}\n')),(0,l.kt)("p",null,"All events will implement the following interface:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\ninterface IEvent {\n    id: number;\n    createdAt: Date;\n    type: string;\n    createdBy: string;\n    project?: string;\n    environment?: string;\n    featureName?: string;\n    data?: any;\n    preData?: any;\n    tags?: ITag[];\n}\n")))}c.isMDXComponent=!0}}]);