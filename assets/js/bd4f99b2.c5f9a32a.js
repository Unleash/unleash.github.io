"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4873],{16413:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const s={title:"Activation Strategies"},o=void 0,n={unversionedId:"reference/activation-strategies",id:"reference/activation-strategies",title:"Activation Strategies",description:"It is powerful to be able to turn a feature on and off instantaneously, without redeploying the application. The next level of control comes when you are able to enable a feature for specific users or enable it for a small subset of users. We achieve this level of control with the help of activation strategies. The most straightforward strategy is the standard strategy, which basically means that the feature should be enabled to everyone.",source:"@site/docs/reference/activation-strategies.md",sourceDirName:"reference",slug:"/reference/activation-strategies",permalink:"/reference/activation-strategies",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/activation-strategies.md",tags:[],version:"current",frontMatter:{title:"Activation Strategies"},sidebar:"documentation",previous:{title:"Unleash concepts",permalink:"/reference/concepts"},next:{title:"API tokens and client keys",permalink:"/reference/api-tokens-and-client-keys"}},i={},u=[{value:"Standard",id:"standard",level:2},{value:"UserIDs",id:"userids",level:2},{value:"Gradual Rollout",id:"gradual-rollout",level:2},{value:"Custom stickiness",id:"custom-stickiness",level:3},{value:"IPs",id:"ips",level:2},{value:"Hostnames",id:"hostnames",level:2},{value:"Multiple activation strategies",id:"multiple-activation-strategies",level:2},{value:"Deprecated strategies",id:"deprecated-strategies",level:2},{value:"gradualRolloutUserId (DEPRECATED from v4) - Use Gradual rollout instead",id:"gradualrolloutuserid-deprecated-from-v4---use-gradual-rollout-instead",level:3},{value:"gradualRolloutSessionId (DEPRECATED from v4) - Use Gradual rollout instead",id:"gradualrolloutsessionid-deprecated-from-v4---use-gradual-rollout-instead",level:3},{value:"gradualRolloutRandom (DEPRECATED from v4) - Use Gradual rollout instead",id:"gradualrolloutrandom-deprecated-from-v4---use-gradual-rollout-instead",level:3}],d={toc:u};function p(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"It is powerful to be able to turn a feature on and off instantaneously, without redeploying the application. The next level of control comes when you are able to enable a feature for specific users or enable it for a small subset of users. We achieve this level of control with the help of activation strategies. The most straightforward strategy is the standard strategy, which basically means that the feature should be enabled to everyone."),(0,l.kt)("p",null,"Unleash comes with a number of built-in strategies (described below) and also lets you add your own ",(0,l.kt)("a",{parentName:"p",href:"/reference/custom-activation-strategies"},"custom activation strategies")," if you need more control. However, while activation strategies are ",(0,l.kt)("em",{parentName:"p"},"defined")," on the server, the server does not ",(0,l.kt)("em",{parentName:"p"},"implement")," the strategies. Instead, activation strategy implementation is done client-side. This means that it is ",(0,l.kt)("em",{parentName:"p"},"the client")," that decides whether a feature should be enabled or not."),(0,l.kt)("p",null,"All ",(0,l.kt)("a",{parentName:"p",href:"/reference/sdks/#server-side-sdks"},"server-side client SDKs")," and the ",(0,l.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash Proxy")," implement the default strategies (and allow you to add your own ",(0,l.kt)("a",{parentName:"p",href:"/reference/custom-activation-strategies#implementation"},"custom strategy implementations"),"). The ",(0,l.kt)("a",{parentName:"p",href:"/reference/sdks/#front-end-sdks"},"front-end client SDKs")," do not do the evaluation themselves, instead relying on the ",(0,l.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash Proxy")," to take care of the implementation and evaluation."),(0,l.kt)("p",null,"Some activation strategies require the client to provide the current ",(0,l.kt)("a",{parentName:"p",href:"/reference/unleash-context"},"Unleash context")," to the toggle evaluation function for the evaluation to be done correctly."),(0,l.kt)("p",null,"The following activation strategies are bundled with Unleash and always available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#standard"},"Standard")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#userids"},"UserIDs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gradual-rollout"},"Gradual Rollout")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ips"},"IPs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#hostnames"},"Hostnames"))),(0,l.kt)("h2",{id:"standard"},"Standard"),(0,l.kt)("p",null,'A basic strategy that means "active for everyone".'),(0,l.kt)("p",null,"This strategy has the following modelling name in the code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"default"))),(0,l.kt)("h2",{id:"userids"},"UserIDs"),(0,l.kt)("p",null,"Active for users with a ",(0,l.kt)("inlineCode",{parentName:"p"},"userId")," defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"userIds")," list. A typical use case is to enable a feature for a few specific devs or key persons before enabling the feature for everyone else. This strategy allows you to specify a list of user IDs that you want to expose the new feature for. (A user id may, of course, be an email if that is more appropriate in your system.)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"userIds - ",(0,l.kt)("em",{parentName:"li"},"List of user IDs you want the feature toggle to be enabled for"))),(0,l.kt)("p",null,"This strategy has the following modelling name in the code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"userWithId"))),(0,l.kt)("h2",{id:"gradual-rollout"},"Gradual Rollout"),(0,l.kt)("p",null,"A flexible rollout strategy which combines all gradual rollout strategies in to a single strategy. This strategy allows you to customize what parameter should be sticky, and defaults to userId or sessionId."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"stickiness")," is used to define how we guarantee consistency for a gradual rollout. The same userId and the same rollout percentage should give predictable results. Configuration that should be supported:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"default")," - Unleash chooses the first value present on the context in defined order userId, sessionId, random."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"userId")," - guaranteed to be sticky on userId. If userId not present the behavior would be false"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sessionId")," - guaranteed to be sticky on sessionId. If sessionId not present the behavior would be false."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"random")," - no stickiness guaranteed. For every isEnabled call it will yield a random true/false based on the selected rollout percentage."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"groupId")," is used to ensure that different toggles will ",(0,l.kt)("strong",{parentName:"li"},"hash differently")," for the same user. The groupId defaults to ",(0,l.kt)("em",{parentName:"li"},"feature toggle name"),", but the user can override it to ",(0,l.kt)("em",{parentName:"li"},"correlate rollout")," of multiple feature toggles."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rollout")," The percentage (0-100) you want to enable the feature toggle for.")),(0,l.kt)("p",null,"This strategy has the following modelling name in the code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"flexibleRollout"))),(0,l.kt)("h3",{id:"custom-stickiness"},"Custom stickiness"),(0,l.kt)("admonition",{title:"SDK compatibility",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Custom stickiness is supported by all of our SDKs except for the Rust SDK. You can always refer to the ",(0,l.kt)("a",{parentName:"p",href:"/reference/sdks/#server-side-sdk-compatibility-table"},"SDK compatibility table")," for the full overview.")),(0,l.kt)("p",null,"By enabling the stickiness option on a custom context field you can use the custom context field to group users with the gradual rollout strategy. This will guarantee a consistent behavior for specific values of this context field."),(0,l.kt)("h2",{id:"ips"},"IPs"),(0,l.kt)("p",null,"The remote address strategy activates a feature toggle for remote addresses defined in the IP list. We occasionally use this strategy to enable a feature only for IPs in our office network."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IPs - ",(0,l.kt)("em",{parentName:"li"},"List of IPs to enable the feature for."))),(0,l.kt)("p",null,"This strategy has the following modelling name in the code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"remoteAddress"))),(0,l.kt)("h2",{id:"hostnames"},"Hostnames"),(0,l.kt)("p",null,"The application hostname strategy activates a feature toggle for client instances with a hostName in the ",(0,l.kt)("inlineCode",{parentName:"p"},"hostNames")," list."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"hostNames - ",(0,l.kt)("em",{parentName:"li"},"List of hostnames to enable the feature toggle for."))),(0,l.kt)("p",null,"This strategy has the following modelling name in the code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"applicationHostname"))),(0,l.kt)("h2",{id:"multiple-activation-strategies"},"Multiple activation strategies"),(0,l.kt)("p",null,"You can apply as many activation strategies to a toggle as you want. When a toggle has multiple strategies, Unleash will check each strategy in isolation. If any one of the strategies would enable the toggle for the current user, then the toggle is enabled."),(0,l.kt)("p",null,"As an example, consider a case where you want to roll a feature out to 75% of your users. However, you also want to make sure that you and your product lead get access to the feature. To achieve this, you would apply a ",(0,l.kt)("strong",{parentName:"p"},"gradual rollout")," strategy and set it to 75%. Additionally, you would add a ",(0,l.kt)("strong",{parentName:"p"},"user IDs")," strategy and add ",(0,l.kt)("inlineCode",{parentName:"p"},"engineer@mycompany.com")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"productlead@mycompany.com"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"A feature toggle with two active strategies: a user ID strategy and a gradual rollout strategy. The strategies are configured as described in the preceding paragraph.",src:a(64223).Z,width:"1366",height:"803"})),(0,l.kt)("h2",{id:"deprecated-strategies"},"Deprecated strategies"),(0,l.kt)("h3",{id:"gradualrolloutuserid-deprecated-from-v4---use-gradual-rollout-instead"},"gradualRolloutUserId (DEPRECATED from v4) - Use Gradual rollout instead"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"gradualRolloutUserId")," strategy gradually activates a feature toggle for logged-in users. Stickiness is based on the user ID. The strategy guarantees that the same user gets the same experience every time across devices. It also assures that a user which is among the first 10% will also be among the first 20% of the users. That way, we ensure the users get the same experience, even if we gradually increase the number of users exposed to a particular feature. To achieve this, we hash the user ID and normalize the hash value to a number between 1 and 100 with a simple modulo operator."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hash_and_normalise",src:a(22995).Z,width:"518",height:"170"})),(0,l.kt)("p",null,"Starting from v3.x all clients should use the 32-bit ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/MurmurHash"},"MurmurHash3")," algorithm to normalize values. (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/issues/247"},"issue 247"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"percentage - ",(0,l.kt)("em",{parentName:"li"},"The percentage (0-100) you want to enable the feature toggle for.")),(0,l.kt)("li",{parentName:"ul"},"groupId - ",(0,l.kt)("em",{parentName:"li"},"Used to define an activation group, which allows you to correlate rollout across feature toggles."))),(0,l.kt)("h3",{id:"gradualrolloutsessionid-deprecated-from-v4---use-gradual-rollout-instead"},"gradualRolloutSessionId (DEPRECATED from v4) - Use Gradual rollout instead"),(0,l.kt)("p",null,"Similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"gradualRolloutUserId")," strategy, this strategy gradually activates a feature toggle, with the exception being that the stickiness is based on the session IDs. This makes it possible to target all users (not just logged-in users), guaranteeing that a user will get the same experience within a session."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"percentage - ",(0,l.kt)("em",{parentName:"li"},"The percentage (0-100) you want to enable the feature toggle for.")),(0,l.kt)("li",{parentName:"ul"},"groupId - ",(0,l.kt)("em",{parentName:"li"},"Used to define an activation group, which allows you to correlate rollout across feature toggles."))),(0,l.kt)("h3",{id:"gradualrolloutrandom-deprecated-from-v4---use-gradual-rollout-instead"},"gradualRolloutRandom (DEPRECATED from v4) - Use Gradual rollout instead"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"gradualRolloutRandom")," strategy randomly activates a feature toggle and has no stickiness. We have found this rollout strategy very useful in some scenarios, especially when we enable a feature which is not visible to the user. It is also the strategy we use to sample metrics and error reports."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"percentage - ",(0,l.kt)("em",{parentName:"li"},"The percentage (0-100) you want to enable the feature toggle for."))))}p.isMDXComponent=!0},64223:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/control_rollout_multiple_strategies-34187f649be430f862c0517c7f947973.png"},22995:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hash_and_normalise-1001d2cc3bb741a887ceec960519d1e3.png"}}]);