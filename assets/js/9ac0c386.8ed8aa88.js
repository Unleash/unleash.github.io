(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1051],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7192:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={id:"index",title:"Introduction",slug:"/",sidebar_position:1},l={unversionedId:"user_guide/index",id:"user_guide/index",isDocsHomePage:!1,title:"Introduction",description:"Welcome to the Unleash documentation. We know that getting to know a new solution might be tedious. Our goal with our documentation is to guide you through the most essential concepts of Unleash.",source:"@site/docs/user_guide/index.md",sourceDirName:"user_guide",slug:"/",permalink:"/",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/user_guide/index.md",version:"current",sidebarPosition:1,frontMatter:{id:"index",title:"Introduction",slug:"/",sidebar_position:1},sidebar:"documentation",next:{title:"What's new in v4?",permalink:"/user_guide/v4-whats-new"}},u=[{value:"Unleash Server",id:"unleash-server",children:[]},{value:"System Overview",id:"system-overview",children:[]}],c={toc:u};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the Unleash documentation. We know that getting to know a new solution might be tedious. Our goal with our documentation is to guide you through the most essential concepts of Unleash."),(0,o.kt)("p",null,"One of the most important aspects of the architecture to understand is that feature toggles ",(0,o.kt)("em",{parentName:"p"},"are evaluated in a client SDKs")," which runs as part of your application. This makes toggle evaluations super-fast, but of course it compromises a small update-delay when you change your toggle configurations (in terms of seconds and is configurable)."),(0,o.kt)("p",null,"If you want more details you cam read about ",(0,o.kt)("a",{parentName:"p",href:"https://www.unleash-hosted.com/articles/our-unique-architecture"},"our unique architecture"),"."),(0,o.kt)("h2",{id:"unleash-server"},"Unleash Server"),(0,o.kt)("p",null,"Before you can connect your application to Unleash you need a Unleash server. You have a few options available:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"deploy/getting_started"},"Unleash Open-source - Self-managed")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.getunleash.io/plans"},"Unleash Enterprise - Cloud-hosted")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.getunleash.io"},"Unleash Enterprise - Self-hosted"))),(0,o.kt)("h2",{id:"system-overview"},"System Overview"),(0,o.kt)("p",null,"Unleash is composed of the following parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unleash API")," - The service holding all feature toggles and their configurations. Configurations declare which activation strategies to use and which parameters they should get."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unleash UI")," - The dashboard used to manage feature toggles, define new strategies, look at metrics, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unleash SDK")," - Used by clients to check if a feature is enabled or disabled. The SDK also collects metrics and sends them to the Unleash API. Activation Strategies are also implemented in the SDK."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unleash Proxy")," - Sits between frontend and native applications and the Unleash API. Ensures high performance and that we don't expose the full feature toggle configuration to end-users. ",(0,o.kt)("a",{parentName:"li",href:"/sdks/unleash-proxy"},"Read more about Unleash Proxy"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"system_overview",src:n(457).Z,title:"System Overview"})),(0,o.kt)("p",null,"To be super fast (",(0,o.kt)("em",{parentName:"p"},"we talk nano-seconds"),"), the ",(0,o.kt)("a",{parentName:"p",href:"/sdks/index"},"client SDK")," caches all feature toggles and their current configuration in memory. The activation strategies are also implemented in the SDK. This makes it really fast to check if a toggle is on or off because it is just a simple function operating on local state, without the need to poll data from the database."))}p.isMDXComponent=!0},457:function(e,t,n){"use strict";t.Z=n.p+"assets/images/unleash-diagram-f346275dba31971141f2ab15f8a5a7b5.png"}}]);