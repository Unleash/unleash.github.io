"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4539],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),p=a,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"strategy_constraints",title:"Strategy Constraints"},l=void 0,c={unversionedId:"advanced/strategy_constraints",id:"advanced/strategy_constraints",isDocsHomePage:!1,title:"Strategy Constraints",description:"Strategy constraints part of Unleash Pro and Enterprise.",source:"@site/docs/advanced/strategy-constraints.md",sourceDirName:"advanced",slug:"/advanced/strategy_constraints",permalink:"/advanced/strategy_constraints",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/advanced/strategy-constraints.md",tags:[],version:"current",frontMatter:{id:"strategy_constraints",title:"Strategy Constraints"},sidebar:"documentation",previous:{title:"Datadog",permalink:"/addons/datadog"},next:{title:"Custom Activation Strategy",permalink:"/advanced/custom_activation_strategy"}},u=[{value:"Constrain on a specific environment",id:"constrain-on-a-specific-environment",children:[],level:2},{value:"Constrain on custom context fields",id:"constrain-on-custom-context-fields",children:[],level:2},{value:"Define your own custom fields",id:"define-your-own-custom-fields",children:[{value:"Step 1: Navigate to \u201cContext Fields\u201c",id:"step-1-navigate-to-context-fields",children:[],level:3},{value:"Step 2: Define new context field",id:"step-2-define-new-context-field",children:[{value:"What is \u201clegal values\u201d?",id:"what-is-legal-values",children:[],level:4}],level:3}],level:2}],d={toc:u};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"alert alert--info",role:"alert"},"Strategy constraints part of Unleash Pro and Enterprise."),(0,r.kt)("br",null),(0,r.kt)("p",null,"Strategy constraints allow you to set pre-conditions on activation strategies that needs to be satisfied for the activation strategies to take effect."),(0,r.kt)("h2",{id:"constrain-on-a-specific-environment"},"Constrain on a specific environment"),(0,r.kt)("p",null,"The most common use case for strategy constraints is that you want an activation strategy to only take effect in a specific environment. For example, you could enable the feature for everyone in development, while you only expose the new feature to a few percent of users in production."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Strategy constraints",src:n(4059).Z})),(0,r.kt)("h2",{id:"constrain-on-custom-context-fields"},"Constrain on custom context fields"),(0,r.kt)("p",null,"It is also possible to constrain an activation strategy configuration on custom context fields. A common use case is a multi-tenant service where you want to control roll-out on a tenant identifier. This allows you to decide which customer should get access to your new feature."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom constraints",src:n(6211).Z})),(0,r.kt)("h2",{id:"define-your-own-custom-fields"},"Define your own custom fields"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Starting with Unleash-enterprise version 3.2.28 customers can define their custom context fields via the user interface.")),(0,r.kt)("p",null,"You can also define your own custom context fields that you can use together with strategy constraints. We have seen customers use multiple variants of custom context fields to control their feature roll-out:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"region"),(0,r.kt)("li",{parentName:"ul"},"country"),(0,r.kt)("li",{parentName:"ul"},"customerType"),(0,r.kt)("li",{parentName:"ul"},"tenantId")),(0,r.kt)("p",null,"Combining strategy constraints with the \u201cflexibleRollout\u201d allows you to do a gradual roll-out to a specific segment of your user base."),(0,r.kt)("h3",{id:"step-1-navigate-to-context-fields"},"Step 1: Navigate to \u201cContext Fields\u201c"),(0,r.kt)("p",null,"Locate \u201ccontext fields in the menu"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Context fields",src:n(9899).Z})),(0,r.kt)("h3",{id:"step-2-define-new-context-field"},"Step 2: Define new context field"),(0,r.kt)("p",null,"Next you can define your new context field. The minimum requirement is to give it a unique ",(0,r.kt)("em",{parentName:"p"},"name"),". In addition, you can give it a description and define the legal values."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New context fields",src:n(4761).Z})),(0,r.kt)("h4",{id:"what-is-legal-values"},"What is \u201clegal values\u201d?"),(0,r.kt)("p",null,"Legal values defines all possible values for the context field. this will be used in Unleash Admin UI to guide users when working with context fields to make sure they only use legal values."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New context fields",src:n(7408).Z})))}f.isMDXComponent=!0},7408:function(e,t,n){t.Z=n.p+"assets/images/constraints_legal_values-0709cca8b891b41462ada17de05cde5c.png"},9899:function(e,t,n){t.Z=n.p+"assets/images/context-fields-fd22fbc0b95beddac29fa58c5e5505f5.png"},6211:function(e,t,n){t.Z=n.p+"assets/images/custom-constraints-a7c1bfae985c342768e3c0d26fffcab4.png"},4761:function(e,t,n){t.Z=n.p+"assets/images/new_context_field-5041b9947e156aca28379be906a7e050.png"},4059:function(e,t,n){t.Z=n.p+"assets/images/strategy-constraints-b716a868daab749c32111613cd71a20f.png"}}]);