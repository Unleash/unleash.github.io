"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2490],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5563:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"custom_activation_strategy",title:"Custom Activation Strategy"},l=void 0,c={unversionedId:"advanced/custom_activation_strategy",id:"advanced/custom_activation_strategy",isDocsHomePage:!1,title:"Custom Activation Strategy",description:"Even though Unleash comes with a few powerful activation strategies there might be scenarios where you would like to extend Unleash with your own custom strategies.",source:"@site/docs/advanced/custom-activation-strategy.md",sourceDirName:"advanced",slug:"/advanced/custom_activation_strategy",permalink:"/advanced/custom_activation_strategy",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/advanced/custom-activation-strategy.md",tags:[],version:"current",frontMatter:{id:"custom_activation_strategy",title:"Custom Activation Strategy"},sidebar:"documentation",previous:{title:"Strategy Constraints",permalink:"/advanced/strategy_constraints"},next:{title:"Feature Toggle Types",permalink:"/advanced/feature_toggle_types"}},u=[{value:"Example: TimeStamp Strategy",id:"example-timestamp-strategy",children:[{value:"Define custom strategy",id:"define-custom-strategy",children:[],level:4},{value:"Use custom strategy",id:"use-custom-strategy",children:[],level:4},{value:"Client implementation",id:"client-implementation",children:[],level:4}],level:3}],m={toc:u};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Even though Unleash comes with a few powerful ",(0,i.kt)("a",{parentName:"p",href:"/activation_strategy"},"activation strategies")," there might be scenarios where you would like to extend Unleash with your own custom strategies."),(0,i.kt)("h3",{id:"example-timestamp-strategy"},"Example: TimeStamp Strategy"),(0,i.kt)("p",null,"In this example we want to define an activation strategy offers a scheduled release of a feature toggle. This means that we want the feature toggle to be activated after a given date and time."),(0,i.kt)("h4",{id:"define-custom-strategy"},"Define custom strategy"),(0,i.kt)("p",null,'First we need to "define" our new strategy. To add a new "Strategy", open the Strategies tab from the sidebar.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"timestamp_create_strategy",src:n(9936).Z})),(0,i.kt)("p",null,"We name our strategy ",(0,i.kt)("inlineCode",{parentName:"p"},"TimeStamp")," and add one required parameter of type string, which we call ",(0,i.kt)("inlineCode",{parentName:"p"},"enableAfter"),"."),(0,i.kt)("h4",{id:"use-custom-strategy"},"Use custom strategy"),(0,i.kt)("p",null,"After we have created the strategy definition, we can now decide to use that activation strategy for our feature toggle."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"timestamp_use_strategy",src:n(2904).Z})),(0,i.kt)("p",null,"In the example we want to use our custom strategy for the feature toggle named ",(0,i.kt)("inlineCode",{parentName:"p"},"demo.TimeStampRollout"),"."),(0,i.kt)("h4",{id:"client-implementation"},"Client implementation"),(0,i.kt)("p",null,"All official client SDK's for Unleash provides abstractions for you to implement support for custom strategies."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before you have provided support for the custom strategy; the client will return false, because it does not understand the activation strategy.")),(0,i.kt)("p",null,"In Node.js the implementation for the ",(0,i.kt)("inlineCode",{parentName:"p"},"TimeStampStrategy")," would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n")),(0,i.kt)("p",null,"In the example implementation we make use of the library called moment to parse the timestamp and verify that current time is after the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"enabledAfter")," parameter."),(0,i.kt)("p",null,"All parameter injected to the strategy are handled as ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," objects. This means that the strategies needs to parse it to a more suitable format. In this example we just parse it directly to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," type and do the comparison directly. You might want to also consider timezone in a real implementation."),(0,i.kt)("p",null,"We also have to remember to register the custom strategy when initializing the Unleash client. Full working code example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Strategy, initialize, isEnabled } = require('unleash-client');\n\nclass TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n\nconst instance = initialize({\n  url: 'http://unleash.herokuapp.com/api/',\n  appName: 'unleash-demo',\n  instanceId: '1',\n  strategies: [new TimeStampStrategy()],\n});\n\ninstance.on('ready', () => {\n  setInterval(() => {\n    console.log(isEnabled('demo.TimeStampRollout'));\n  }, 1000);\n});\n")))}p.isMDXComponent=!0},9936:function(e,t,n){t.Z=n.p+"assets/images/timestamp_create_strategy-103954747a03c73d36bec4756291ef24.png"},2904:function(e,t,n){t.Z=n.p+"assets/images/timestamp_use_strategy-0600a069cbddb19a9ae9846d10e347b6.png"}}]);