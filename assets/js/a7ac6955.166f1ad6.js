"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1782:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"important-concepts",title:"Important Concepts"},i=void 0,s={unversionedId:"user_guide/important-concepts",id:"user_guide/important-concepts",title:"Important Concepts",description:"There are some concepts it's important to understand in order to work effectively with Unleash:",source:"@site/docs/user_guide/important-concepts.md",sourceDirName:"user_guide",slug:"/user_guide/important-concepts",permalink:"/user_guide/important-concepts",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/user_guide/important-concepts.md",tags:[],version:"current",frontMatter:{id:"important-concepts",title:"Important Concepts"},sidebar:"documentation",previous:{title:"Unleash introductory overview",permalink:"/user_guide/unleash_overview"},next:{title:"Quickstart",permalink:"/user_guide/quickstart"}},l=[{value:"Activation strategies",id:"activation-strategies",children:[],level:2},{value:"Local evaluation",id:"local-evaluation",children:[],level:2},{value:"Unleash Context",id:"unleash-context",children:[],level:2},{value:"API architecture",id:"api-architecture",children:[],level:2},{value:"Feature toggle types",id:"feature-toggle-types",children:[],level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are some concepts it's important to understand in order to work effectively with Unleash:"),(0,a.kt)("h2",{id:"activation-strategies"},"Activation strategies"),(0,a.kt)("p",null,"Feature toggles can have multiple activation strategies. An activation strategy will only run when a feature toggle is enabled and provides a way to control WHO will get access to the feature."),(0,a.kt)("p",null,"Activation strategies compound, and every single strategy will be evaluated. If any one of them returns true, the user will receive access to the feature."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unless you add activation strategies on toggle creation, the toggle will be created with the default strategy. The default strategy says that the toggle is either 100% off or 100% on for all users. This means that any other strategies you add will have no effect. If you want to use strategies to control rollout you need to remove the default strategy.")),(0,a.kt)("p",null,"Unleash comes with a set of built in strategies. ",(0,a.kt)("a",{parentName:"p",href:"../advanced/custom_activation_strategy"},"But you can also build your own custom strategies.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./activation_strategy"},"You can read more about activation strategies here.")),(0,a.kt)("h2",{id:"local-evaluation"},"Local evaluation"),(0,a.kt)("p",null,"All our SDKs perform local evaluation of feature toggles, which means that they download the configuration from unleash and cache the configuration in memory in your application. This is done in order to avoid adding network latency to user interactions, making it unnoticable for users that you are using feature flagging, in addition to the added benefit that none of your data leaves your application - enforcing privacy by design."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.getunleash.io/blog/our-unique-architecture"},"Read more about our unique architecture here.")),(0,a.kt)("h2",{id:"unleash-context"},"Unleash Context"),(0,a.kt)("p",null,"Since the SDKs perform local evaluation, some of the parameters needed for evaluation must be supplied through the Unleash Context. The unleash context allows you to pass in userIds, sessionIds or other relevant information that is needed in order to perform the evaluation. If, for example, you want to enable a feature for a set of specific userIds, you would need to provide the current userId in the unleash context in order for the evaluation to enable the feature."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./unleash_context"},"You can read more about the unleash context here.")),(0,a.kt)("h2",{id:"api-architecture"},"API architecture"),(0,a.kt)("p",null,"The Unleash API is split into two. One API is for the clients connecting to unleash. It is located under the path /api/client. This provides access to retrieving saved feature toggle configurations, metrics and registering the application."),(0,a.kt)("p",null,"The second API is the admin API, which is utilised in order to control any CRUD aspect of unleash resources. The split ensures a second layer of security that ensures that in the case you should loose your client api key, attackers will only have read-only access to your feature toggle configurations."),(0,a.kt)("p",null,"This ensures that we can have different data responses for the client API endpoints which will include less metadata, and be cached more heavily - optimising the SDK endpoints for best performance."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api"},"Read more about unleash API here.")),(0,a.kt)("h2",{id:"feature-toggle-types"},"Feature toggle types"),(0,a.kt)("p",null,"Unleash categorizes feature toggles into five distinct types. This categorization makes it easier for you to see what the purpose of a toggle is and helps Unleash with ",(0,a.kt)("a",{parentName:"p",href:"/user_guide/technical_debt"},"managing technical debt"),". A feature toggle's type has no effect on how the toggle behaves or how you can configure it."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/advanced/feature_toggle_types"},"Read more about feature toggle types here.")))}c.isMDXComponent=!0}}]);