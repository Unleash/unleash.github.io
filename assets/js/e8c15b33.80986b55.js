"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5440],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"features-archive",title:"/api/admin/archive"},u=void 0,c={unversionedId:"api/admin/features-archive",id:"api/admin/features-archive",isDocsHomePage:!1,title:"/api/admin/archive",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/feature-toggles-archive-api.md",sourceDirName:"api/admin",slug:"/api/admin/features-archive",permalink:"/api/admin/features-archive",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/api/admin/feature-toggles-archive-api.md",tags:[],version:"current",frontMatter:{id:"features-archive",title:"/api/admin/archive"},sidebar:"api",previous:{title:"/api/admin/features",permalink:"/api/admin/features"},next:{title:"/api/admin/strategies",permalink:"/api/admin/strategies"}},s=[{value:"Fetch archived toggles",id:"fetch-archived-toggles",children:[]},{value:"Revive feature toggle",id:"revive-feature-toggle",children:[]},{value:"Delete an archivied feature toggle",id:"delete-an-archivied-feature-toggle",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,i.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,i.kt)("h3",{id:"fetch-archived-toggles"},"Fetch archived toggles"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/api/admin/archive/features")),(0,i.kt)("p",null,"Used to fetch list of archived feature toggles"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "features": [\n    {\n      "name": "Feature.A",\n      "description": "lorem ipsum",\n      "type": "release",\n      "stale": false,\n      "variants": [],\n      "tags": [],\n      "strategy": "default",\n      "parameters": {}\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"revive-feature-toggle"},"Revive feature toggle"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST http://unleash.host.com/api/admin/archive/revive/:featureName")),(0,i.kt)("p",null,"Response: ",(0,i.kt)("strong",{parentName:"p"},"200 OK")," - When feature toggle was successfully revived. "),(0,i.kt)("h3",{id:"delete-an-archivied-feature-toggle"},"Delete an archivied feature toggle"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST http://unleash.host.com/api/admin/archive/revive/:featureName")),(0,i.kt)("p",null,"Will fully remove the feature toggle and associated configuration. Impossible to restore after this action."))}d.isMDXComponent=!0}}]);