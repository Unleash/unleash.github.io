"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=s(n),m=a,f=h["".concat(p,".").concat(m)]||h[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={id:"health",title:"/health"},i="Health API",o={unversionedId:"api/internal/health",id:"api/internal/health",title:"/health",description:"GET http://unleash.host.com/health",source:"@site/docs/api/internal/health.md",sourceDirName:"api/internal",slug:"/api/internal/health",permalink:"/api/internal/health",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/internal/health.md",tags:[],version:"current",frontMatter:{id:"health",title:"/health"},sidebar:"documentation",previous:{title:"/internal-backstage/prometheus",permalink:"/api/internal/internal"},next:{title:"Open API Specification",permalink:"/api/open_api"}},p={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"health-api"},"Health API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/health")),(0,a.kt)("p",null,"Used to check the health of the running Unleash instance. This endpoint has two possible responses:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Status: 200")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "health": "GOOD"\n}\n')),(0,a.kt)("p",null,"This response means everything is OK. Unleash is able to talk to the PostgreSQL"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Status: 500")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "health": "BAD"\n}\n')),(0,a.kt)("p",null,"This response indicates that Unleash is not able to talk to PostgreSQL and will not be able to serve requests."))}u.isMDXComponent=!0}}]);