"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7707],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"important-concepts",title:"Important Concepts"},u=void 0,l={unversionedId:"user_guide/important-concepts",id:"user_guide/important-concepts",isDocsHomePage:!1,title:"Important Concepts",description:"There are some concepts it's important to understand in order to work effectively with Unleash:",source:"@site/docs/user_guide/important-concepts.md",sourceDirName:"user_guide",slug:"/user_guide/important-concepts",permalink:"/user_guide/important-concepts",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/user_guide/important-concepts.md",tags:[],version:"current",frontMatter:{id:"important-concepts",title:"Important Concepts"},sidebar:"documentation",previous:{title:"Quickstart",permalink:"/user_guide/quickstart"},next:{title:"What's new in v4?",permalink:"/user_guide/v4-whats-new"}},c=[{value:"Activation strategies",id:"activation-strategies",children:[]},{value:"Local evaluation",id:"local-evaluation",children:[]},{value:"Unleash Context",id:"unleash-context",children:[]},{value:"API architecture",id:"api-architecture",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are some concepts it's important to understand in order to work effectively with Unleash:"),(0,o.kt)("h2",{id:"activation-strategies"},"Activation strategies"),(0,o.kt)("p",null,"Feature toggles can have multiple activation strategies. An activation strategy will only run when a feature toggle is enabled and provides a way to control WHO will get access to the feature."),(0,o.kt)("p",null,"Activation strategies compound, and every single strategy will be evaluated. If any one of them returns true, the user will receive access to the feature."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unless you add activation strategies on toggle creation, the toggle will be created with the default strategy. The default strategy says that the toggle is either 100% off or 100% on for all users. This means that any other strategies you add will have no effect. If you want to use strategies to control rollout you need to remove the default strategy.")),(0,o.kt)("p",null,"Unleash comes with a set of built in strategies. ",(0,o.kt)("a",{parentName:"p",href:"../advanced/custom_activation_strategy"},"But you can also build your own custom strategies.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./activation_strategy"},"You can read more about activation strategies here.")),(0,o.kt)("h2",{id:"local-evaluation"},"Local evaluation"),(0,o.kt)("p",null,"All our SDKs perform local evaluation of feature toggles, which means that they download the configuration from unleash and cache the configuration in memory in your application. This is done in order to avoid adding network latency to user interactions, making it unnoticable for users that you are using feature flagging, in addition to the added benefit that none of your data leaves your application - enforcing privacy by design."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.getunleash.io/blog/our-unique-architecture"},"Read more about our unique architecture here")),(0,o.kt)("h2",{id:"unleash-context"},"Unleash Context"),(0,o.kt)("p",null,"Since the SDKs perform local evaluation, some of the parameters needed for evaluation must be supplied through the Unleash Context. The unleash context allows you to pass in userIds, sessionIds or other relevant information that is needed in order to perform the evaluation. If, for example, you want to enable a feature for a set of specific userIds, you would need to provide the current userId in the unleash context in order for the evaluation to enable the feature."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./unleash_context"},"You can read more about the unleash context here.")),(0,o.kt)("h2",{id:"api-architecture"},"API architecture"),(0,o.kt)("p",null,"The Unleash API is split into two. One API is for the clients connecting unleash and is located under the path /api/client, and provides access to retrieving saved feature toggle configurations, metrics and registering the application. "),(0,o.kt)("p",null,"The second API is the admin API, which is utilised in order to control any CRUD aspect of unleash resources. The split ensures a second layer of security that ensures that in the case you should loose your client api key, attackers will only have read-only access to your feature toggle configurations."),(0,o.kt)("p",null,"This ensures that we can have different data responses for the client API endpoints which will include less metadata, and be cached more heavily - optimising the SDK endpoints for best performance."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api"},"Read more about unleash API here")))}d.isMDXComponent=!0}}]);