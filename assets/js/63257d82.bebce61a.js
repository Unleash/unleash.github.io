"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3637],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1058:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={title:"Unleash introductory overview"},i=void 0,s={unversionedId:"user_guide/unleash_overview",id:"user_guide/unleash_overview",title:"Unleash introductory overview",description:"One of the most important aspects of the architecture to understand is that feature toggles are evaluated in a client SDKs which runs as part of your application. This makes toggle evaluations super-fast (we're talk nano-seconds), scalable and resilient against network disturbances. In order to achieve this Unleash compromises a small update-delay when you change your toggle configurations until it is fully propagated to your application (in terms of seconds and is configurable).",source:"@site/docs/user_guide/unleash_overview.md",sourceDirName:"user_guide",slug:"/user_guide/unleash_overview",permalink:"/user_guide/unleash_overview",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/user_guide/unleash_overview.md",tags:[],version:"current",frontMatter:{title:"Unleash introductory overview"},sidebar:"documentation",previous:{title:"First steps and tutorials",permalink:"/tutorials"},next:{title:"Important Concepts",permalink:"/user_guide/important-concepts"}},l=[{value:"Unleash Server",id:"unleash-server",children:[],level:3},{value:"System Overview",id:"system-overview",children:[],level:3}],u={toc:l};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"One of the most important aspects of the architecture to understand is that feature toggles ",(0,n.kt)("em",{parentName:"p"},"are evaluated in a client SDKs")," which runs as part of your application. This makes toggle evaluations super-fast (",(0,n.kt)("em",{parentName:"p"},"we're talk nano-seconds"),"), scalable and resilient against network disturbances. In order to achieve this Unleash compromises a small update-delay when you change your toggle configurations until it is fully propagated to your application (in terms of seconds and is configurable)."),(0,n.kt)("p",null,"If you want more details you can read about ",(0,n.kt)("a",{parentName:"p",href:"https://www.getunleash.io/blog/our-unique-architecture"},"our unique architecture"),"."),(0,n.kt)("h3",{id:"unleash-server"},"Unleash Server"),(0,n.kt)("p",null,"Before you can connect your application to Unleash you need a Unleash server. You have a few options available:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Unleash Open-source"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/deploy/getting_started"},"Docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/unleash/helm-charts/"},"Helm Chart")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.heroku.com/deploy/?template=https://github.com/Unleash/unleash"},"Click-to-deploy on Heroku")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Unleash Enterprise"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.getunleash.io/plans"},"Hosted Plans")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.getunleash.io/blog/self-host-your-feature-toggle-system"},"Self-hosted"))))),(0,n.kt)("h3",{id:"system-overview"},"System Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A visual overview of an Unleash system as described in the following paragraph.",src:a(9017).Z,title:"System Overview",width:"1096",height:"768"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unleash API")," - The service holding all feature toggles and their configurations. Configurations declare which activation strategies to use and which parameters they should get. ",(0,n.kt)("a",{parentName:"li",href:"/api"},"API documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unleash Admin UI")," - The dashboard used to manage feature toggles, define new strategies, look at metrics, etc. ",(0,n.kt)("a",{parentName:"li",href:"/user_guide/create_feature_toggle"},"Create your first feature toggle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unleash SDK")," - Used by clients to check if a feature is enabled or disabled. The SDK also collects metrics and sends them to the Unleash API. ",(0,n.kt)("a",{parentName:"li",href:"/sdks"},"See all our SDKs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unleash Proxy")," - Sits between frontend/native applications and the Unleash API. Ensures high performance and that you don't expose the full feature toggle configuration to end-users. ",(0,n.kt)("a",{parentName:"li",href:"/sdks/unleash-proxy"},"Read more about Unleash Proxy"))),(0,n.kt)("p",null,"To be super fast (",(0,n.kt)("em",{parentName:"p"},"we're talking nano-seconds"),"), the ",(0,n.kt)("a",{parentName:"p",href:"/sdks"},"client SDK")," caches all feature toggles and their current configuration in memory. The activation strategies are also implemented in the SDK. This makes it really fast to check if a toggle is on or off because it is just a simple function operating on local state, without the need to poll data from the database."))}c.isMDXComponent=!0},9017:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/unleash-architecture-b113650ebd4df9ac1cbb10bc3c82f5d1.svg"}}]);