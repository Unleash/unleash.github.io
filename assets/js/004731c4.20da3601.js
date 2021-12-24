"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4539],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:e},u),{},{components:n})):a.createElement(m,i({ref:e},u))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3487:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"strategy_constraints",title:"Strategy Constraints"},l=void 0,c={unversionedId:"advanced/strategy_constraints",id:"advanced/strategy_constraints",isDocsHomePage:!1,title:"Strategy Constraints",description:"Strategy constraints are available to Unleash Pro and Enterprise users.",source:"@site/docs/advanced/strategy-constraints.md",sourceDirName:"advanced",slug:"/advanced/strategy_constraints",permalink:"/advanced/strategy_constraints",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/advanced/strategy-constraints.md",tags:[],version:"current",frontMatter:{id:"strategy_constraints",title:"Strategy Constraints"},sidebar:"documentation",previous:{title:"Datadog",permalink:"/addons/datadog"},next:{title:"Custom Activation Strategies",permalink:"/advanced/custom_activation_strategy"}},u=[{value:"Constraint structure",id:"constraint-structure",children:[],level:2},{value:"Interacting with strategy constraints in the client SDKs",id:"sdks",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Deprecated: Constrain on a specific environment",id:"constrain-on-a-specific-environment",children:[],level:2}],d={toc:u};function p(t){var e=t.components,s=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Availability")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Strategy constraints are available to Unleash Pro and Enterprise users."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page explains what strategy constraints are in Unleash and how they work. If you want to know ",(0,o.kt)("em",{parentName:"p"},"how you add")," strategy constraints to an activation strategy, see ",(0,o.kt)("a",{parentName:"p",href:"/how-to/how-to-add-strategy-constraints",title:"how to add strategy constraints"},"the corresponding how-to guide"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Strategy constraints")," allow you to set preconditions on activation strategies that must be satisfied for the activation strategy to take effect. For example, you might want a strategy to only trigger if a user belongs to a specific group or is in a specific country."),(0,o.kt)("p",null,"Constraints use fields from the ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/unleash_context"},"Unleash Context")," to determine whether a strategy should apply or not. You can constrain on both ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/unleash_context#structure"},"standard context fields")," and on ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/unleash_context#custom-context-fields"},"custom context fields"),". A common use for using custom context fields is a multi-tenant service where you want to use a tenant identifier to control the feature rollout. This would allow you to decide which users should get access to your new feature based on the tenant. Other commonly seen custom context fields include fields for region, country, and customer type."),(0,o.kt)("p",null,"Combining strategy constraints with the ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/activation_strategy#gradual-rollout"},"gradual rollout strategy")," allows you to do a gradual rollout to a specific segment of your user base."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A toggle with the gradual rollout strategy. The toggle is constrained on the custom content field &quot;region&quot; and set to only activate if the region is Africa or Europe.",src:n(6211).Z})),(0,o.kt)("h2",{id:"constraint-structure"},"Constraint structure"),(0,o.kt)("p",null,"Each strategy constraint has three parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Context field"),": The context field to evaluate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Operator"),": Either ",(0,o.kt)("inlineCode",{parentName:"li"},"IN")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"NOT_IN"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Values"),": The list of values that trigger this constraint.")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"context field")," is the field that you want to use for constraining this strategy. The ",(0,o.kt)("strong",{parentName:"p"},"values")," field is a list of values that the constraint should either allow or deny. The ",(0,o.kt)("strong",{parentName:"p"},"operator")," determines whether the values are allowed or denied."),(0,o.kt)("p",null,"For instance, to constrain the strategy to only users with IDs ",(0,o.kt)("inlineCode",{parentName:"p"},"id-123")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id-456"),": select ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," as the context field, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"IN")," operator, and set values to ",(0,o.kt)("inlineCode",{parentName:"p"},"id-123, id-456"),". The strategy will then be evaluated only for these two users."),(0,o.kt)("p",null,"If, on the other hand, you would like to ensure the strategy is never evaluated for the same users, you would use the same configuration as above, but set the operator to ",(0,o.kt)("inlineCode",{parentName:"p"},"NOT_IN"),". This would mean that the strategy is evaluated for all users ",(0,o.kt)("em",{parentName:"p"},"not")," listed in the values."),(0,o.kt)("h2",{id:"sdks"},"Interacting with strategy constraints in the client SDKs"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This section gives a brief overview over to use the client SDKs to interact with strategy constraints. The exact steps will vary depending on which client you are using, so make sure to consult the documentation for your specific client SDK."))),(0,o.kt)("p",null,"Strategy constraints require ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/unleash_context"},"the Unleash Context")," to work. All official ",(0,o.kt)("a",{parentName:"p",href:"/sdks"},"Unleash client SDKs")," support the option to pass ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/unleash_context#structure",title:"Unleash Context, section: structure"},"dynamic context values")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"isEnabled")," function (or the SDKs equivalent)."),(0,o.kt)("p",null,"If the strategy constraint uses a ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/unleash_context#structure"},(0,o.kt)("strong",{parentName:"a"},"standard Unleash Context field")),", set the context field to the value you wish to give it."),(0,o.kt)("p",null,"If the strategy constraint uses a ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/unleash_context#custom-context-fields"},(0,o.kt)("strong",{parentName:"a"},"custom context field")),", use the Unleash Context's ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," field. Use the name of the custom context field as a key and set the value to your desired string."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To be able to constrain on a field, it must be listed under the Context Field menu. If a field isn't listed, you can add it yourself. See ",(0,o.kt)("a",{parentName:"p",href:"/how-to/how-to-define-custom-context-fields"},"the how-to guide for creating your own custom fields")," for more info."),(0,o.kt)("h2",{id:"constrain-on-a-specific-environment"},"[Deprecated]",": Constrain on a specific environment"),(0,o.kt)("p",null,"Before Unleash 4.3, using strategy constraints was the recommended way to have different toggle configurations per environment. Now that Unleash has environment support built in, we no longer recommend you use strategy constraints for this. Instead, see the ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/environments"},"environments documentation"),"."))}p.isMDXComponent=!0},6211:function(t,e,n){e.Z=n.p+"assets/images/custom-constraints-37e951da922d576705cfca6e797026b3.png"}}]);