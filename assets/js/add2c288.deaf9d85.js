"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3398],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=l,m=p["".concat(i,".").concat(h)]||p[h]||c[h]||n;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1259:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=a(3117),l=a(102),n=(a(7294),a(3905)),o=["components"],s={id:"activation_strategy",title:"Activation Strategies"},i=void 0,u={unversionedId:"user_guide/activation_strategy",id:"user_guide/activation_strategy",isDocsHomePage:!1,title:"Activation Strategies",description:"It is powerful to be able to turn a feature on and off instantaneously, without redeploying the application. The next level of control comes when you are able to enable a feature for specific users or enable it for a small subset of users. We achieve this level of control with the help of activation strategies. The most straightforward strategy is the standard strategy, which basically means that the feature should be enabled to everyone.",source:"@site/docs/user_guide/activation-strategies.md",sourceDirName:"user_guide",slug:"/user_guide/activation_strategy",permalink:"/user_guide/activation_strategy",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/user_guide/activation-strategies.md",tags:[],version:"current",frontMatter:{id:"activation_strategy",title:"Activation Strategies"},sidebar:"documentation",previous:{title:"Create a feature toggle",permalink:"/user_guide/create_feature_toggle"},next:{title:"Control rollout",permalink:"/user_guide/control_rollout"}},d=[{value:"Standard",id:"standard",children:[],level:2},{value:"UserIDs",id:"userids",children:[],level:2},{value:"Gradual Rollout",id:"gradual-rollout",children:[{value:"Customize stickiness (beta)",id:"customize-stickiness-beta",children:[],level:3}],level:2},{value:"IPs",id:"ips",children:[],level:2},{value:"Hostnames",id:"hostnames",children:[],level:2},{value:"gradualRolloutUserId (DEPRECATED from v4) - Use Gradual rollout instead",id:"gradualrolloutuserid-deprecated-from-v4---use-gradual-rollout-instead",children:[],level:2},{value:"gradualRolloutSessionId (DEPRECATED from v4) - Use Gradual rollout instead",id:"gradualrolloutsessionid-deprecated-from-v4---use-gradual-rollout-instead",children:[],level:2},{value:"gradualRolloutRandom (DEPRECATED from v4) - Use Gradual rollout instead",id:"gradualrolloutrandom-deprecated-from-v4---use-gradual-rollout-instead",children:[],level:2}],c={toc:d};function p(e){var t=e.components,s=(0,l.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It is powerful to be able to turn a feature on and off instantaneously, without redeploying the application. The next level of control comes when you are able to enable a feature for specific users or enable it for a small subset of users. We achieve this level of control with the help of activation strategies. The most straightforward strategy is the standard strategy, which basically means that the feature should be enabled to everyone."),(0,n.kt)("p",null,"The definition of an activation strategy lives in the Unleash API and can be created via the Unleash UI. The implementation of activation strategies lives in various client implementations."),(0,n.kt)("p",null,"Unleash comes with a few common activation strategies. Some of them require the client to provide the ",(0,n.kt)("a",{parentName:"p",href:"/user_guide/unleash_context"},"unleash-context"),", which gives the necessary context for Unleash."),(0,n.kt)("h2",{id:"standard"},"Standard"),(0,n.kt)("p",null,'A basic strategy that means "active for everyone".'),(0,n.kt)("p",null,"This strategy has the following modelling name in the code:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"default"))),(0,n.kt)("h2",{id:"userids"},"UserIDs"),(0,n.kt)("p",null,"Active for users with a ",(0,n.kt)("inlineCode",{parentName:"p"},"userId")," defined in the ",(0,n.kt)("inlineCode",{parentName:"p"},"userIds")," list. A typical use case is to enable a feature for a few specific devs or key persons before enabling the feature for everyone else. This strategy allows you to specify a list of user IDs that you want to expose the new feature for. (A user id may, of course, be an email if that is more appropriate in your system.)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"userIds - ",(0,n.kt)("em",{parentName:"li"},"List of user IDs you want the feature toggle to be enabled for"))),(0,n.kt)("p",null,"This strategy has the following modelling name in the code:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"userWithId"))),(0,n.kt)("h2",{id:"gradual-rollout"},"Gradual Rollout"),(0,n.kt)("p",null,"A flexible rollout strategy which combines all gradual rollout strategies in to a single strategy. This strategy allows you to customize what parameter should be sticky, and defaults to userId or sessionId."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"stickiness")," is used to define how we guarantee consistency for a gradual rollout. The same userId and the same rollout percentage should give predictable results. Configuration that should be supported:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"default")," - Unleash chooses the first value present on the context in defined order userId, sessionId, random."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"userId")," - guaranteed to be sticky on userId. If userId not present the behavior would be false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sessionId")," - guaranteed to be sticky on sessionId. If sessionId not present the behavior would be false."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"random")," - no stickiness guaranteed. For every isEnabled call it will yield a random true/false based on the selected rollout percentage."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"groupId")," is used to ensure that different toggles will ",(0,n.kt)("strong",{parentName:"li"},"hash differently")," for the same user. The groupId defaults to ",(0,n.kt)("em",{parentName:"li"},"feature toggle name"),", but the use can override it to ",(0,n.kt)("em",{parentName:"li"},"correlate rollout")," of multiple feature toggles."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rollout")," The percentage (0-100) you want to enable the feature toggle for.")),(0,n.kt)("p",null,"This strategy has the following modelling name in the code:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"flexibleRollout"))),(0,n.kt)("h3",{id:"customize-stickiness-beta"},"Customize stickiness (beta)"),(0,n.kt)("p",null,"By enabling the stickiness option on a custom context field you can use it together with the gradual rollout strategy. This will guarantee a consistent behavior for specific values of this context field. NB! this feature is currently only supported by the following SDKs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-client-node"},"unleash-client-node")," (from v3.6.0)")),(0,n.kt)("h2",{id:"ips"},"IPs"),(0,n.kt)("p",null,"The remote address strategy activates a feature toggle for remote addresses defined in the IP list. We occasionally use this strategy to enable a feature only for IPs in our office network."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IPs - ",(0,n.kt)("em",{parentName:"li"},"List of IPs to enable the feature for."))),(0,n.kt)("p",null,"This strategy has the following modelling name in the code:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"remoteAddress"))),(0,n.kt)("h2",{id:"hostnames"},"Hostnames"),(0,n.kt)("p",null,"The application hostname strategy activates a feature toggle for client instances with a hostName in the ",(0,n.kt)("inlineCode",{parentName:"p"},"hostNames")," list."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hostNames - ",(0,n.kt)("em",{parentName:"li"},"List of hostnames to enable the feature toggle for."))),(0,n.kt)("p",null,"This strategy has the following modelling name in the code:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"applicationHostname"))),(0,n.kt)("h2",{id:"gradualrolloutuserid-deprecated-from-v4---use-gradual-rollout-instead"},"gradualRolloutUserId (DEPRECATED from v4) - Use Gradual rollout instead"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"gradualRolloutUserId")," strategy gradually activates a feature toggle for logged-in users. Stickiness is based on the user ID. The strategy guarantees that the same user gets the same experience every time across devices. It also assures that a user which is among the first 10% will also be among the first 20% of the users. That way, we ensure the users get the same experience, even if we gradually increase the number of users exposed to a particular feature. To achieve this, we hash the user ID and normalize the hash value to a number between 1 and 100 with a simple modulo operator."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hash_and_normalise",src:a(2001).Z})),(0,n.kt)("p",null,"Starting from v3.x all clients should use the 32-bit ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/MurmurHash"},"MurmurHash3")," algorithm to normalize values. (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/issues/247"},"issue 247"),")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"percentage - ",(0,n.kt)("em",{parentName:"li"},"The percentage (0-100) you want to enable the feature toggle for.")),(0,n.kt)("li",{parentName:"ul"},"groupId - ",(0,n.kt)("em",{parentName:"li"},"Used to define an activation group, which allows you to correlate rollout across feature toggles."))),(0,n.kt)("h2",{id:"gradualrolloutsessionid-deprecated-from-v4---use-gradual-rollout-instead"},"gradualRolloutSessionId (DEPRECATED from v4) - Use Gradual rollout instead"),(0,n.kt)("p",null,"Similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"gradualRolloutUserId")," strategy, this strategy gradually activates a feature toggle, with the exception being that the stickiness is based on the session IDs. This makes it possible to target all users (not just logged-in users), guaranteeing that a user will get the same experience within a session."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"percentage - ",(0,n.kt)("em",{parentName:"li"},"The percentage (0-100) you want to enable the feature toggle for.")),(0,n.kt)("li",{parentName:"ul"},"groupId - ",(0,n.kt)("em",{parentName:"li"},"Used to define an activation group, which allows you to correlate rollout across feature toggles."))),(0,n.kt)("h2",{id:"gradualrolloutrandom-deprecated-from-v4---use-gradual-rollout-instead"},"gradualRolloutRandom (DEPRECATED from v4) - Use Gradual rollout instead"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"gradualRolloutRandom")," strategy randomly activates a feature toggle and has no stickiness. We have found this rollout strategy very useful in some scenarios, especially when we enable a feature which is not visible to the user. It is also the strategy we use to sample metrics and error reports."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"percentage - ",(0,n.kt)("em",{parentName:"li"},"The percentage (0-100) you want to enable the feature toggle for."))))}p.isMDXComponent=!0},2001:function(e,t,a){t.Z=a.p+"assets/images/hash_and_normalise-1001d2cc3bb741a887ceec960519d1e3.png"}}]);