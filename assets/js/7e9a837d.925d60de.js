"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4213],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(i,".").concat(d)]||c[d]||p[d]||s;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4654:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return h},default:function(){return c}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],l={id:"securing-unleash-v3",title:"Securing Unleash v3"},i=void 0,u={unversionedId:"deploy/securing-unleash-v3",id:"deploy/securing-unleash-v3",title:"Securing Unleash v3",description:"This guide is only relevant if you are using Unleash Open-Source. The Enterprise edition does already ship with a secure setup and multiple SSO options.",source:"@site/docs/deploy/securing-unleash-v3.md",sourceDirName:"deploy",slug:"/deploy/securing-unleash-v3",permalink:"/deploy/securing-unleash-v3",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/deploy/securing-unleash-v3.md",tags:[],version:"current",frontMatter:{id:"securing-unleash-v3",title:"Securing Unleash v3"}},h=[{value:"General settings",id:"general-settings",children:[],level:2},{value:"Securing the Admin API",id:"securing-the-admin-api",children:[],level:2},{value:"Securing the Client API",id:"securing-the-client-api",children:[],level:2}],p={toc:h};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This guide is only relevant if you are using Unleash Open-Source. The Enterprise edition does already ship with a secure setup and multiple SSO options.")),(0,s.kt)("p",null,"The Unleash API is split into two different paths: ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/client")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/admin"),". This makes it easy to have different authentication strategy for the admin interface and the client-api used by the applications integrating with Unleash."),(0,s.kt)("h2",{id:"general-settings"},"General settings"),(0,s.kt)("p",null,"Unleash uses an encrypted cookie to maintain a user session. This allows users to be logged in across multiple instances of Unleash. To protect this cookie, Unleash will automatically generate a secure token the first time you start Unleash."),(0,s.kt)("h2",{id:"securing-the-admin-api"},"Securing the Admin API"),(0,s.kt)("p",null,"To secure the Admin API, you have to tell Unleash that you are using a custom admin authentication and implement your authentication logic as a preHook."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const unleash = require('unleash-server');\nconst myCustomAdminAuth = require('./auth-hook');\n\nunleash\n  .start({\n    databaseUrl: 'postgres://unleash_user:passord@localhost:5432/unleash',\n    adminAuthentication: 'custom',\n    preRouterHook: myCustomAdminAuth,\n  })\n  .then(unleash => {\n    console.log(\n      `Unleash started on http://localhost:${unleash.app.get('port')}`,\n    );\n  });\n")),(0,s.kt)("p",null,"Additionally, you can trigger the admin interface to prompt the user to sign in by configuring your middleware to return a ",(0,s.kt)("inlineCode",{parentName:"p"},"401")," status on protected routes. The response body must contain a ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," and a ",(0,s.kt)("inlineCode",{parentName:"p"},"path")," used to redirect the user to the proper login route."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "You must be logged in to use Unleash",\n  "path": "/custom/login"\n}\n')),(0,s.kt)("p",null,"Examples of custom authentication hooks:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash/blob/master/examples/google-auth-hook.js"},"google-auth-hook.js")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash/blob/master/examples/basic-auth-hook.js"},"basic-auth-hook.js")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash/blob/master/examples/keycloak-auth-hook.js"},"keycloak-auth-hook.js"))),(0,s.kt)("p",null,"We also have a version of Unleash deployed on Heroku which uses Google OAuth 2.0: ",(0,s.kt)("a",{parentName:"p",href:"https://secure-unleash.herokuapp.com"},"https://secure-unleash.herokuapp.com")),(0,s.kt)("h2",{id:"securing-the-client-api"},"Securing the Client API"),(0,s.kt)("p",null,"A common way to support client access is to use pre-shared secrets. This can be solved by having clients send a shared key in an HTTP header with every client request to the Unleash API. All official Unleash clients should support this."),(0,s.kt)("p",null,"In the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-java#custom-http-headers"},"Java client")," this would look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'UnleashConfig unleashConfig = UnleashConfig.builder()\n  .appName("my-app")\n  .instanceId("my-instance-1")\n  .unleashAPI(unleashAPI)\n  .customHttpHeader("Authorization", "12312Random")\n  .build();\n')),(0,s.kt)("p",null,"On the Unleash server side, you need to implement a preRouter hook which verifies that all calls to ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/client")," include this pre-shared key in the defined header. This could look something like this."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const unleash = require('unleash-server');\nconst sharedSecret = '12312Random';\n\nunleash\n  .start({\n    databaseUrl: 'postgres://unleash_user:passord@localhost:5432/unleash',\n    preRouterHook: app => {\n      app.use('/api/client', (req, res, next) => {\n        if (req.header('authorization') !== sharedSecret) {\n          res.sendStatus(401);\n        } else {\n          next();\n        }\n      });\n    },\n  })\n  .then(unleash => {\n    console.log(\n      `Unleash started on http://localhost:${unleash.app.get('port')}`,\n    );\n  });\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/blob/master/examples/client-auth-unleash.js"},"client-auth-unleash.js")))}c.isMDXComponent=!0}}]);