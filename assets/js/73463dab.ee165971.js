"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9278],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),f=a,m=h["".concat(p,".").concat(f)]||h[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1471:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"health",title:"/health"},p="Health API",c={unversionedId:"api/internal/health",id:"api/internal/health",title:"/health",description:"GET http://unleash.host.com/health",source:"@site/docs/api/internal/health.md",sourceDirName:"api/internal",slug:"/api/internal/health",permalink:"/api/internal/health",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/internal/health.md",tags:[],version:"current",frontMatter:{id:"health",title:"/health"},sidebar:"api",previous:{title:"/internal-backstage/prometheus",permalink:"/api/internal/internal"},next:{title:"Open API Specification",permalink:"/api/open_api"}},s=[],u={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"health-api"},"Health API"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/health")),(0,i.kt)("p",null,"Used to check the health of the running Unleash instance. This endpoint has two possible responses:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Status: 200")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "health": "GOOD"\n}\n')),(0,i.kt)("p",null,"This response means everything is OK. Unleash is able to talk to the PostgreSQL"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Status: 500")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "health": "BAD"\n}\n')),(0,i.kt)("p",null,"This response indicates that Unleash is not able to talk to PostgreSQL and will not be able to serve requests."))}h.isMDXComponent=!0}}]);