"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4247],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5991:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"projects",title:"/api/admin/projects"},l=void 0,c={unversionedId:"api/admin/projects",id:"api/admin/projects",title:"/api/admin/projects",description:"The context feature is only available as part of Unleash Enterprise. In order to access the API programmatically you need to make sure you obtain an API token with admin permissions.",source:"@site/docs/api/admin/project.md",sourceDirName:"api/admin",slug:"/api/admin/projects",permalink:"/api/admin/projects",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/project.md",tags:[],version:"current",frontMatter:{id:"projects",title:"/api/admin/projects"},sidebar:"documentation",previous:{title:"/api/admin/metrics",permalink:"/api/admin/metrics"},next:{title:"/api/admin/state",permalink:"/api/admin/state"}},s=[{value:"List projects in Unleash",id:"list-projects-in-unleash",children:[],level:3},{value:"Create a new project",id:"create-a-new-project",children:[],level:3},{value:"Update a projects field",id:"update-a-projects-field",children:[],level:3},{value:"Delete a projects field",id:"delete-a-projects-field",children:[],level:3}],d={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The context feature is only available as part of Unleash Enterprise. In order to access the API programmatically you need to make sure you ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"obtain an API token")," with admin permissions.")),(0,o.kt)("h3",{id:"list-projects-in-unleash"},"List projects in Unleash"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET https://unleash.host.com/api/admin/projects")),(0,o.kt)("p",null,"Returns a list of projects in Unleash."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "projects": [\n    {\n      "id": "default",\n      "name": "Default",\n      "description": "Default project",\n      "createdAt": "2020-12-03T09:47:20.170Z"\n    },\n    {\n      "id": "MyNewProject",\n      "name": "MyNewProject",\n      "description": "A test project",\n      "createdAt": "2020-12-03T09:47:20.170Z"\n    },\n    {\n      "id": "test",\n      "name": "Test Project",\n      "description": "Collection of test toggles",\n      "createdAt": "2020-12-03T09:47:20.170Z"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"create-a-new-project"},"Create a new project"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST https://unleash.host.com/api/admin/projects")),(0,o.kt)("p",null,"Creates a new project."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "someId",\n  "name": "Test Project",\n  "description": "Some description"\n}\n')),(0,o.kt)("h3",{id:"update-a-projects-field"},"Update a projects field"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PUT https://unleash.host.com/api/projects/:id")),(0,o.kt)("p",null,"Updates a project with id=",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "someId",\n  "name": "Test Project",\n  "description": "Some description"\n}\n')),(0,o.kt)("h3",{id:"delete-a-projects-field"},"Delete a projects field"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DELETE https://unleash.host.com/api/admin/projects/:id")),(0,o.kt)("p",null,"Deletes the project with id=",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"."))}u.isMDXComponent=!0}}]);