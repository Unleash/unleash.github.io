"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3052],{4286:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"feature-types",title:"/api/admin/feature-types"},p=void 0,u={unversionedId:"api/admin/feature-types",id:"api/admin/feature-types",title:"/api/admin/feature-types",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/feature-types-api.md",sourceDirName:"api/admin",slug:"/api/admin/feature-types",permalink:"/api/admin/feature-types",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/feature-types-api.md",tags:[],version:"current",frontMatter:{id:"feature-types",title:"/api/admin/feature-types"},sidebar:"documentation",previous:{title:"/api/admin/projects/:projectId",permalink:"/api/admin/feature-toggles-v2"},next:{title:"/api/admin/features",permalink:"/api/admin/features"}},c=[],l={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,i.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,i.kt)("h1",{id:"feature-types-api"},"Feature Types API"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/admin/feature-types")),(0,i.kt)("p",null,"Used to fetch all feature types defined in the unleash system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "types": [\n    {\n      "id": "release",\n      "name": "Release",\n      "description": "Used to enable trunk-based development for teams practicing Continuous Delivery.",\n      "lifetimeDays": 40\n    },\n    {\n      "id": "experiment",\n      "name": "Experiment",\n      "description": "Used to perform multivariate or A/B testing.",\n      "lifetimeDays": 40\n    },\n    {\n      "id": "ops",\n      "name": "Operational",\n      "description": "Used to control operational aspects of the system behavior.",\n      "lifetimeDays": 7\n    },\n    {\n      "id": "killswitch",\n      "name": "Kill switch",\n      "description": "Used to to gracefully degrade system functionality.",\n      "lifetimeDays": null\n    },\n    {\n      "id": "permission",\n      "name": "Permission",\n      "description": "Used to change the features or product experience that certain users receive.",\n      "lifetimeDays": null\n    }\n  ]\n}\n')))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);