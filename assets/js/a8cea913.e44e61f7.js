"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,g=d["".concat(o,".").concat(h)]||d[h]||p[h]||l;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const l={id:"client-specification",title:"Client Specification"},s="Client Specification 1.0",r={unversionedId:"client-specification",id:"client-specification",title:"Client Specification",description:"This document attempts to guide developers in implementing an Unleash Client SDK.",source:"@site/docs/client-specification.md",sourceDirName:".",slug:"/client-specification",permalink:"/client-specification",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/client-specification.md",tags:[],version:"current",frontMatter:{id:"client-specification",title:"Client Specification"}},o={},c=[{value:"System Overview",id:"system-overview",level:2},{value:"The Basics",id:"the-basics",level:2},{value:"Implementation of isEnabled",id:"implementation-of-isenabled",level:3},{value:"Activation Strategies",id:"activation-strategies",level:2},{value:"Extension points",id:"extension-points",level:3},{value:"Fetching feature toggles (polling)",id:"fetching-feature-toggles-polling",level:2},{value:"Client registration",id:"client-registration",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Backup Feature Toggles",id:"backup-feature-toggles",level:2}],u={toc:c};function p(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-specification-10"},"Client Specification 1.0"),(0,i.kt)("p",null,"This document attempts to guide developers in implementing an Unleash Client SDK."),(0,i.kt)("h2",{id:"system-overview"},"System Overview"),(0,i.kt)("p",null,"Unleash is composed of three parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unleash API")," - The service holding all feature toggles and their configurations. Configurations declare which activation strategies to use and which parameters they should get."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unleash UI")," - The dashboard used to manage feature toggles, define new strategies, look at metrics, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unleash SDK")," - Used by clients to check if a feature is enabled or disabled. The SDK also collects metrics and sends them to the Unleash API. Activation Strategies are also implemented in the SDK. Unleash currently provides official SDKs for Java and Node.js")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"system_overview",src:n(38614).Z,title:"System Overview",width:"508",height:"324"})),(0,i.kt)("p",null,"To be super fast, the client SDK caches all feature toggles and their current configuration in memory. The activation strategies are also implemented in the SDK. This makes it really fast to check if a toggle is on or off because it is just a simple function operating on local state, without the need to poll data from the database."),(0,i.kt)("h2",{id:"the-basics"},"The Basics"),(0,i.kt)("p",null,"All client implementations should strive to have a consistent and straightforward user API. It should be a simple method, called isEnabled, to check if a feature toggle is enabled or not. The method should return a ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," value, true or false."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"unleash.isEnabled('myAwesomeToggle');\n")),(0,i.kt)("p",null,"The basic ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," method should also accept a default value. This should be used if the client does not know anything about a particular toggle. If the user does not specify a default value, false should be returned for unknown feature toggles."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Calling unleash with default value:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'boolean value = unleash.isEnabled("unknownFeatureToggle", false);\n//value==false because default value was used.\n')),(0,i.kt)("h3",{id:"implementation-of-isenabled"},"Implementation of isEnabled"),(0,i.kt)("p",null,"A feature toggle is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Feature.B",\n  "description": "lorem ipsum",\n  "enabled": true,\n  "strategies": [\n    {\n      "name": "ActiveForUserWithId",\n      "parameters": {\n        "userIdList": "123,221,998"\n      }\n    },\n    {\n      "name": "GradualRolloutRandom",\n      "parameters": {\n        "percentage": "10"\n      }\n    }\n  ],\n  "strategy": "ActiveForUserWithId",\n  "parameters": {\n    "userIdList": "123,221,998"\n  }\n}\n')),(0,i.kt)("p",null,"A simple demo of the ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," function in JavaScript style (most of the implementation will likely be more functional):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function isEnabled(name, unleashContext = {}, defaultValue = false) {\n  const toggle = toggleRepository.get(name);\n  let enabled = false;\n\n  if (!toggle) {\n    return defaultValue;\n  } else if (!toggle.isEnabled) {\n    return false;\n  } else {\n    for (let i = 0; i < toggle.strategies.length; i++) {\n      let strategyDef = toggle.strategies[i];\n      let strategyImpl = strategyImplRepository.get(strategyDef.name);\n      if (strategyImpl.isEnabled(toggle.parameters, unleashContext)) {\n        return true;\n      }\n    }\n    return false;\n  }\n}\n")),(0,i.kt)("h2",{id:"activation-strategies"},"Activation Strategies"),(0,i.kt)("p",null,"Activation strategies are defined and configured in the unleash-service. It is up to the client to provide the actual implementation of each activation strategy."),(0,i.kt)("p",null,"Unleash also ships with a few built-in strategies, and expects client SDK's to implement these. Read more about these ",(0,i.kt)("a",{parentName:"p",href:"/user_guide/activation_strategy"},"activation strategies"),". For the built-in strategies to work as expected the client should also allow the user to define an ",(0,i.kt)("a",{parentName:"p",href:"/user_guide/unleash_context"},"unleash-context"),". The context should be possible to pass in as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," call."),(0,i.kt)("h3",{id:"extension-points"},"Extension points"),(0,i.kt)("p",null,"Client implementation should also provide a defined interface to make it easier for the user to implement their own activation strategies, and register those in the Unleash client."),(0,i.kt)("h2",{id:"fetching-feature-toggles-polling"},"Fetching feature toggles (polling)"),(0,i.kt)("p",null,"The client implementation should fetch toggles in the background as regular polling. In a thread-based environment, such as Java, this needs to be done in a separate thread. The default poll interval should be ",(0,i.kt)("strong",{parentName:"p"},"15 seconds"),", and it should also be configurable."),(0,i.kt)("h2",{id:"client-registration"},"Client registration"),(0,i.kt)("p",null,"On start-up, the clients should register with the Unleash server. The registration request must include the required fields specified in the ",(0,i.kt)("a",{parentName:"p",href:"/api/client/register"},"API documentation"),"."),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Clients are expected to send metrics back to Unleash API at regular intervals. The metrics are a list of used toggles and how many times they evaluated to yes or no in at the time of requesting the metrics. Read more about how to send metrics in the ",(0,i.kt)("a",{parentName:"p",href:"/api/client/metrics"},"Metrics API")," documentation."),(0,i.kt)("h2",{id:"backup-feature-toggles"},"Backup Feature Toggles"),(0,i.kt)("p",null,"The SDK also persists the latest known state to a local file on the instance where the client is running. It will store a local copy every time the client receives changes from the API. Having a local backup of the latest known state minimises the consequences of clients not being able to talk to the Unleash API on startup. This is necessary due to network unreliability."))}p.isMDXComponent=!0},38614:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unleash-diagram-f346275dba31971141f2ab15f8a5a7b5.png"}}]);