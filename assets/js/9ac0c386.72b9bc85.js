"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1051],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4699:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"index",title:"Introduction",slug:"/",sidebar_position:1},s=void 0,u={unversionedId:"user_guide/index",id:"user_guide/index",title:"Introduction",description:"Welcome to the Unleash documentation. Our goal with our documentation is to guide you through the most essential concepts of Unleash.",source:"@site/docs/user_guide/index.md",sourceDirName:"user_guide",slug:"/",permalink:"/",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/user_guide/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",title:"Introduction",slug:"/",sidebar_position:1},sidebar:"documentation",next:{title:"Quickstart",permalink:"/user_guide/quickstart"}},c=[{value:"Unleash Server",id:"unleash-server",children:[],level:3},{value:"System Overview",id:"system-overview",children:[],level:3}],p={toc:c};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the Unleash documentation. Our goal with our documentation is to guide you through the most essential concepts of Unleash."),(0,o.kt)("p",null,"One of the most important aspects of the architecture to understand is that feature toggles ",(0,o.kt)("em",{parentName:"p"},"are evaluated in a client SDKs")," which runs as part of your application. This makes toggle evaluations super-fast (",(0,o.kt)("em",{parentName:"p"},"we talk nano-seconds"),"), scalable and resilient against network disturbances. In order to achieve this Unleash compromises a small update-delay when you change your toggle configurations until it is fully propagated to your application (in terms of seconds and is configurable)."),(0,o.kt)("p",null,"If you want more details you can read about ",(0,o.kt)("a",{parentName:"p",href:"https://www.getunleash.io/blog/our-unique-architecture"},"our unique architecture"),"."),(0,o.kt)("h3",{id:"unleash-server"},"Unleash Server"),(0,o.kt)("p",null,"Before you can connect your application to Unleash you need a Unleash server. You have a few options available:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Unleash Open-source"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"deploy/getting_started"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/unleash/helm-charts/"},"Helm Chart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.heroku.com/deploy/?template=https://github.com/Unleash/unleash"},"Click-to-deploy on Heroku")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Unleash Enterprise"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.getunleash.io/plans"},"Hosted Plans")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.getunleash.io/blog/self-host-your-feature-toggle-system"},"Self-hosted"))))),(0,o.kt)("h3",{id:"system-overview"},"System Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"system_overview",src:n(4597).Z,title:"System Overview"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unleash API")," - The service holding all feature toggles and their configurations. Configurations declare which activation strategies to use and which parameters they should get. ",(0,o.kt)("a",{parentName:"li",href:"/api"},"API documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unleash Admin UI")," - The dashboard used to manage feature toggles, define new strategies, look at metrics, etc. ",(0,o.kt)("a",{parentName:"li",href:"/user_guide/create_feature_toggle"},"Create your first feature toggle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unleash SDK")," - Used by clients to check if a feature is enabled or disabled. The SDK also collects metrics and sends them to the Unleash API. ",(0,o.kt)("a",{parentName:"li",href:"/sdks"},"See all our SDKs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unleash Proxy")," - Sits between frontend/native applications and the Unleash API. Ensures high performance and that you don't expose the full feature toggle configuration to end-users. ",(0,o.kt)("a",{parentName:"li",href:"/sdks/unleash-proxy"},"Read more about Unleash Proxy"))),(0,o.kt)("p",null,"To be super fast (",(0,o.kt)("em",{parentName:"p"},"we talk nano-seconds"),"), the ",(0,o.kt)("a",{parentName:"p",href:"/sdks"},"client SDK")," caches all feature toggles and their current configuration in memory. The activation strategies are also implemented in the SDK. This makes it really fast to check if a toggle is on or off because it is just a simple function operating on local state, without the need to poll data from the database."))}h.isMDXComponent=!0},4597:function(e,t,n){t.Z=n.p+"assets/images/Unleash_architecture-895e21edb92e7c2b148f64912835c6b1.svg"}}]);