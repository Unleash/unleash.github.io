"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"feature-types",title:"/api/admin/feature-types"},o=void 0,s={unversionedId:"api/admin/feature-types",id:"api/admin/feature-types",title:"/api/admin/feature-types",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/api/admin/feature-types-api.md",sourceDirName:"api/admin",slug:"/api/admin/feature-types",permalink:"/api/admin/feature-types",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/feature-types-api.md",tags:[],version:"current",frontMatter:{id:"feature-types",title:"/api/admin/feature-types"},sidebar:"documentation",previous:{title:"/api/admin/projects/:projectId",permalink:"/api/admin/feature-toggles-v2"},next:{title:"/api/admin/features",permalink:"/api/admin/features"}},p={},l=[],u={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,a.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,a.kt)("h1",{id:"feature-types-api"},"Feature Types API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET: http://unleash.host.com/api/admin/feature-types")),(0,a.kt)("p",null,"Used to fetch all feature types defined in the unleash system."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "types": [\n    {\n      "id": "release",\n      "name": "Release",\n      "description": "Used to enable trunk-based development for teams practicing Continuous Delivery.",\n      "lifetimeDays": 40\n    },\n    {\n      "id": "experiment",\n      "name": "Experiment",\n      "description": "Used to perform multivariate or A/B testing.",\n      "lifetimeDays": 40\n    },\n    {\n      "id": "ops",\n      "name": "Operational",\n      "description": "Used to control operational aspects of the system behavior.",\n      "lifetimeDays": 7\n    },\n    {\n      "id": "killswitch",\n      "name": "Kill switch",\n      "description": "Used to to gracefully degrade system functionality.",\n      "lifetimeDays": null\n    },\n    {\n      "id": "permission",\n      "name": "Permission",\n      "description": "Used to change the features or product experience that certain users receive.",\n      "lifetimeDays": null\n    }\n  ]\n}\n')))}c.isMDXComponent=!0}}]);