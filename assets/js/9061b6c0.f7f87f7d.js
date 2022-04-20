"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[56],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=o(n),c=i,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,p(p({ref:t},u),{},{components:n})):a.createElement(g,p({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,p=new Array(l);p[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,p[1]=r;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9072:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),p=["components"],r={id:"tags",title:"/api/admin/tags"},s=void 0,o={unversionedId:"api/admin/tags",id:"api/admin/tags",title:"/api/admin/tags",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/tags-api.md",sourceDirName:"api/admin",slug:"/api/admin/tags",permalink:"/api/admin/tags",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/tags-api.md",tags:[],version:"current",frontMatter:{id:"tags",title:"/api/admin/tags"}},u=[{value:"Create a new tag",id:"create-a-new-tag",children:[],level:3},{value:"Notes",id:"notes",children:[],level:3},{value:"List tags",id:"list-tags",children:[],level:3},{value:"List tags by type",id:"list-tags-by-type",children:[],level:3},{value:"Get a single tag",id:"get-a-single-tag",children:[],level:3},{value:"Delete a tag",id:"delete-a-tag",children:[],level:3},{value:"Fetching Tag types",id:"fetching-tag-types",children:[],level:3},{value:"Get a single tag type",id:"get-a-single-tag-type",children:[],level:3},{value:"Create a new tag type",id:"create-a-new-tag-type",children:[],level:3},{value:"Update tag type",id:"update-tag-type",children:[],level:3},{value:"Deleting a tag type",id:"deleting-a-tag-type",children:[],level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,l.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,l.kt)("h3",{id:"create-a-new-tag"},"Create a new tag"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/admin/tags")),(0,l.kt)("p",null,"Creates a new tag without connecting it to any other object, can be helpful to build an autocomplete list."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Body")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "value": "MyTag",\n  "type": "simple"\n}\n')),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," must exist in tag-types")),(0,l.kt)("h3",{id:"list-tags"},"List tags"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/tags")),(0,l.kt)("p",null,"This endpoint is the one all admin UIs should use to fetch all available tags from the ",(0,l.kt)("em",{parentName:"p"},"unleash_server"),". The response returns all tags."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "tags": [\n    {\n      "value": "Team-Red",\n      "type": "simple"\n    },\n    {\n      "value": "Team-Green",\n      "type": "simple"\n    },\n    {\n      "value": "DecemberExperiment",\n      "type": "simple"\n    },\n    {\n      "value": "#team-alert-channel",\n      "type": "slack"\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"list-tags-by-type"},"List tags by type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET: https://unleash.host.com/api/admin/tags/:type")),(0,l.kt)("p",null,"Lists all tags of ",(0,l.kt)("inlineCode",{parentName:"p"},":type"),". If none exist, returns the empty list"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example response to query for ",(0,l.kt)("a",{parentName:"strong",href:"https://unleash.host.com/api/admin/tags/simple"},"https://unleash.host.com/api/admin/tags/simple"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "tags": [\n    {\n      "value": "Team-Red",\n      "type": "simple"\n    },\n    {\n      "value": "Team-Green",\n      "type": "simple"\n    },\n    {\n      "value": "DecemberExperiment",\n      "type": "simple"\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"get-a-single-tag"},"Get a single tag"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/tags/:type/:value")),(0,l.kt)("p",null,"Gets the tag defined by the ",(0,l.kt)("inlineCode",{parentName:"p"},"type, value")," tuple"),(0,l.kt)("h3",{id:"delete-a-tag"},"Delete a tag"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DELETE https://unleash.host.com/api/admin/tags/:type/:value")),(0,l.kt)("p",null,"Deletes the tag defined by the ",(0,l.kt)("inlineCode",{parentName:"p"},"type, value")," tuple; all features tagged with this tag will lose the tag."),(0,l.kt)("h3",{id:"fetching-tag-types"},"Fetching Tag types"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET: https://unleash.host.com/api/admin/tag-types")),(0,l.kt)("p",null,"Used to fetch all types the server knows about. This endpoint is the one all admin UI should use to fetch all available tag types from the ",(0,l.kt)("em",{parentName:"p"},"unleash-server"),". The response returns all tag types. Any server will have ",(0,l.kt)("em",{parentName:"p"},"at least")," one configured tag type (the ",(0,l.kt)("inlineCode",{parentName:"p"},"simple")," type). A tag type will be a map of ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"icon")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "tagTypes": [\n    {\n      "name": "simple",\n      "description": "Arbitrary tags. Used to simplify filtering of features",\n      "icon": "#"\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"get-a-single-tag-type"},"Get a single tag type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET: https://unleash.host.com/api/admin/tag-types/simple")),(0,l.kt)("p",null,"Used to fetch details about a specific tag-type. This is mostly provided to make it easy to debug the API and should not be used by the client implementations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "tagType": {\n    "name": "simple",\n    "description": "Some description",\n    "icon": "Some icon",\n    "createdAt": "2021-01-07T10:00:00Z"\n  }\n}\n')),(0,l.kt)("h3",{id:"create-a-new-tag-type"},"Create a new tag type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST: https://unleash.host.com/api/admin/tag-types")),(0,l.kt)("p",null,"Used to register a new tag type. This endpoint should be used to inform the server about a new type of tags."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Body:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "tagtype",\n  "description": "Purpose of tag type",\n  "icon": "Either an URL to icon or a simple prefix string for tag"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Notes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"if ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," is not unique, will return 409 CONFLICT, if you'd like to update an existing tag through admin-api look at ",(0,l.kt)("a",{parentName:"li",href:"#Update-tag-type"},"Update tag type"),".")),(0,l.kt)("p",null,"Returns 201-CREATED if the tag type was created successfully"),(0,l.kt)("h3",{id:"update-tag-type"},"Update tag type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PUT: https://unleash.host.com/api/admin/tag-types/:typeName")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Body:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "description": "New description",\n  "icon": "New icon"\n}\n')),(0,l.kt)("h3",{id:"deleting-a-tag-type"},"Deleting a tag type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DELETE: https://unleash.host.com/api/admin/tag-types/:typeName")),(0,l.kt)("p",null,"Returns 200 if the type was not in use and the type was deleted. If the type was in use, will return a ",(0,l.kt)("em",{parentName:"p"},"409 CONFLICT")))}m.isMDXComponent=!0}}]);