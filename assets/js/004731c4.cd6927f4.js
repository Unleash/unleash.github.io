"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4539],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=r,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"strategy_constraints",title:"Strategy Constraints"},c=void 0,l={unversionedId:"advanced/strategy_constraints",id:"advanced/strategy_constraints",isDocsHomePage:!1,title:"Strategy Constraints",description:"Strategy constraints part of Unleash Pro and Enterprise.",source:"@site/docs/advanced/strategy-constraints.md",sourceDirName:"advanced",slug:"/advanced/strategy_constraints",permalink:"/advanced/strategy_constraints",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/advanced/strategy-constraints.md",tags:[],version:"current",frontMatter:{id:"strategy_constraints",title:"Strategy Constraints"},sidebar:"documentation",previous:{title:"Datadog",permalink:"/addons/datadog"},next:{title:"Custom Activation Strategy",permalink:"/advanced/custom_activation_strategy"}},u=[{value:"Constrain on a specific environment",id:"constrain-on-a-specific-environment",children:[]},{value:"Constrain on custom context fields",id:"constrain-on-custom-context-fields",children:[]},{value:"Define your own custom fields",id:"define-your-own-custom-fields",children:[{value:"Step 1: Navigate to \u201cContext Fields\u201c",id:"step-1-navigate-to-context-fields",children:[]},{value:"Step 2: Define new context field",id:"step-2-define-new-context-field",children:[]}]}],d={toc:u};function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"alert alert--info",role:"alert"},"Strategy constraints part of Unleash Pro and Enterprise."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Strategy constraints allow you to set pre-conditions on activation strategies that needs to be satisfied for the activation strategies to take effect."),(0,a.kt)("h2",{id:"constrain-on-a-specific-environment"},"Constrain on a specific environment"),(0,a.kt)("p",null,"The most common use case for strategy constraints is that you want an activation strategy to only take effect in a specific environment. For example, you could enable the feature for everyone in development, while you only expose the new feature to a few percent of users in production."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Strategy constraints",src:n(4059).Z})),(0,a.kt)("h2",{id:"constrain-on-custom-context-fields"},"Constrain on custom context fields"),(0,a.kt)("p",null,"It is also possible to constrain an activation strategy configuration on custom context fields. A common use case is a multi-tenant service where you want to control roll-out on a tenant identifier. This allows you to decide which customer should get access to your new feature."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom constraints",src:n(6211).Z})),(0,a.kt)("h2",{id:"define-your-own-custom-fields"},"Define your own custom fields"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Starting with Unleash-enterprise version 3.2.28 customers can define their custom context fields via the user interface.")),(0,a.kt)("p",null,"You can also define your own custom context fields that you can use together with strategy constraints. We have seen customers use multiple variants of custom context fields to control their feature roll-out:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"region"),(0,a.kt)("li",{parentName:"ul"},"country"),(0,a.kt)("li",{parentName:"ul"},"customerType"),(0,a.kt)("li",{parentName:"ul"},"tenantId")),(0,a.kt)("p",null,"Combining strategy constraints with the \u201cflexibleRollout\u201d allows you to do a gradual roll-out to a specific segment of your user base."),(0,a.kt)("h3",{id:"step-1-navigate-to-context-fields"},"Step 1: Navigate to \u201cContext Fields\u201c"),(0,a.kt)("p",null,"Locate \u201ccontext fields in the menu"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Context fields",src:n(9899).Z})),(0,a.kt)("h3",{id:"step-2-define-new-context-field"},"Step 2: Define new context field"),(0,a.kt)("p",null,"Next you can define your new context field. The minimum requirement is to give it a unique ",(0,a.kt)("em",{parentName:"p"},"name"),". In addition, you can give it a description and define the legal values."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New context fields",src:n(4761).Z})),(0,a.kt)("h4",{id:"what-is-legal-values"},"What is \u201clegal values\u201d?"),(0,a.kt)("p",null,"Legal values defines all possible values for the context field. this will be used in Unleash Admin UI to guide users when working with context fields to make sure they only use legal values."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New context fields",src:n(7408).Z})))}f.isMDXComponent=!0},7408:function(e,t,n){t.Z=n.p+"assets/images/constraints_legal_values-5c007d027cd11566656a314143d03060.png"},9899:function(e,t,n){t.Z=n.p+"assets/images/context-fields-d3fb75e0be1bc56e8ee60e5336576aec.png"},6211:function(e,t,n){t.Z=n.p+"assets/images/custom-constraints-2fad70fadecd049dd05e34573d8de3ed.png"},4761:function(e,t,n){t.Z=n.p+"assets/images/new_context_field-31331b03e67715452f5ffb543c81f492.png"},4059:function(e,t,n){t.Z=n.p+"assets/images/strategy-constraints-a9a932e8c3645af137957122331791db.png"}}]);