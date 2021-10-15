"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6689],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5785:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=r(3117),n=r(102),a=(r(7294),r(3905)),i=["components"],l={id:"control_rollout",title:"Control rollout"},s=void 0,u={unversionedId:"user_guide/control_rollout",id:"user_guide/control_rollout",isDocsHomePage:!1,title:"Control rollout",description:"It is powerful to be able to turn a feature on and off instantaneously, without redeploying the application. The next level of control comes when you are able to enable a feature for specific users or enable it for a small subset of users.",source:"@site/docs/user_guide/control-rollout.md",sourceDirName:"user_guide",slug:"/user_guide/control_rollout",permalink:"/user_guide/control_rollout",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/user_guide/control-rollout.md",tags:[],version:"current",frontMatter:{id:"control_rollout",title:"Control rollout"},sidebar:"documentation",previous:{title:"Activation Strategies",permalink:"/user_guide/activation_strategy"},next:{title:"Projects",permalink:"/user_guide/projects"}},c=[{value:"Built in activation strategies",id:"built-in-activation-strategies",children:[],level:2},{value:"The standard activation strategy",id:"the-standard-activation-strategy",children:[],level:2},{value:"The UserIDs strategy",id:"the-userids-strategy",children:[],level:2},{value:"Multiple activation strategies",id:"multiple-activation-strategies",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is powerful to be able to turn a feature on and off instantaneously, without redeploying the application. The next level of control comes when you are able to enable a feature for specific users or enable it for a small subset of users."),(0,a.kt)("p",null,"In this guide you will learn how to control the roll-out (expose it to real users) of a new feature with the help of activation strategies."),(0,a.kt)("h2",{id:"built-in-activation-strategies"},"Built in activation strategies"),(0,a.kt)("p",null,"Unleash comes with a few common activation strategies. Some of them require the client to provide the unleash-context, which gives the necessary context for Unleash."),(0,a.kt)("p",null,"The built-in activation strategies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Standard"),(0,a.kt)("li",{parentName:"ul"},"UserIDs"),(0,a.kt)("li",{parentName:"ul"},"Gradual Rollout"),(0,a.kt)("li",{parentName:"ul"},"IPs"),(0,a.kt)("li",{parentName:"ul"},"Hostnames")),(0,a.kt)("h2",{id:"the-standard-activation-strategy"},"The standard activation strategy"),(0,a.kt)("p",null,"When you create a new feature toggle you will get the standard activation strategy, if you don\u2019t configure any specific strategies. The standard activation strategy will always evaluate to true, given that the feature toggle is enabled."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Default activation strategy",src:r(1987).Z})),(0,a.kt)("h2",{id:"the-userids-strategy"},"The UserIDs strategy"),(0,a.kt)("p",null,"When we have deployed some new code to production it would be nice to enable the new feature for ourselves before we enable it to everyone else. To achieve this with Unleash, you can use the ",(0,a.kt)("strong",{parentName:"p"},"UserIDs")," activation strategy. This strategy allows you to specify a list of user IDs that you want to expose the new feature for."),(0,a.kt)("p",null,"A userId is how you identify users in your system (email, UUID, etc) and is provided as part of the Unleash Context to the client SDK."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UserWithId activation strategy",src:r(2152).Z})),(0,a.kt)("h2",{id:"multiple-activation-strategies"},"Multiple activation strategies"),(0,a.kt)("p",null,"In order to increase the exposure of the feature which is protected with the feature toggle you can configure multiple activation strategies on the same feature toggle."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Multiple activation strategy",src:r(4580).Z})),(0,a.kt)("p",null,"In the example above we have to configure two activation strategies, ",(0,a.kt)("strong",{parentName:"p"},"userWithId")," and ",(0,a.kt)("strong",{parentName:"p"},"flexibleRollout"),". If one of them evaluates to true the feature toggle is considered enabled. In the example we have enabled the feature toggle for usersWithId (",(0,a.kt)("a",{parentName:"p",href:"mailto:_productlead@mycompany.com"},"_productlead@mycompany.com")," and ",(0,a.kt)("a",{parentName:"p",href:"mailto:me@mycompany.com_"},"me@mycompany.com_"),") in addition to 75% of the traffic."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"You use activation strategies to control who the feature toggle will be enabled for. You can configure multiple strategies for a feature toggle, and they are considered in an OR fashion, meaning if one of them evaluates to true the toggle will be enabled."),(0,a.kt)("p",null,"If you need to limit the exposure (AND) you should look in to ",(0,a.kt)("a",{parentName:"p",href:"/advanced/strategy_constraints"},"strategy constraints"),", which is the building block for that."))}d.isMDXComponent=!0},4580:function(e,t,r){t.Z=r.p+"assets/images/control_rollout_multiple_strategies-0dfd4c4d8ba3831d282b8ccd811e10f7.png"},1987:function(e,t,r){t.Z=r.p+"assets/images/control_rollout_standard_strategy-03b84dbced70e9c82e884b9bd76a373c.png"},2152:function(e,t,r){t.Z=r.p+"assets/images/control_rollout_userid_strategy-18fd13333e4fe1df1ee64e7607a546aa.png"}}]);