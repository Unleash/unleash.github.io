"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3102],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2702:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"webhook",title:"Webhook"},u=void 0,s={unversionedId:"addons/webhook",id:"addons/webhook",title:"Webhook",description:"This feature was introduced in Unleash v3.11.0.",source:"@site/docs/addons/webhook.md",sourceDirName:"addons",slug:"/addons/webhook",permalink:"/addons/webhook",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/addons/webhook.md",tags:[],version:"current",frontMatter:{id:"webhook",title:"Webhook"},sidebar:"documentation",previous:{title:"Microsoft Teams",permalink:"/addons/teams"},next:{title:"API Documentation",permalink:"/api"}},p=[{value:"Configuration",id:"configuration",children:[{value:"Events",id:"events",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4}],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This feature was introduced in ",(0,o.kt)("em",{parentName:"p"},"Unleash v3.11.0"),".")),(0,o.kt)("p",null,"The Webhook Addon introduces a generic way to post messages from Unleash to third party services. Unleash allows you to define a webhook which listens changes in Unleash and post them to a third party services."),(0,o.kt)("p",null,"The webhook will perform a single retry if the HTTP POST call fails (either a 50x or network error). Duplicate events may happen, and you should never assume events always comes in order."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"events"},"Events"),(0,o.kt)("p",null,"You can choose to trigger updates for the following events (we might add more event types in the future):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"feature-created"),(0,o.kt)("li",{parentName:"ul"},"feature-updated (*)"),(0,o.kt)("li",{parentName:"ul"},"feature-metadata-updated"),(0,o.kt)("li",{parentName:"ul"},"feature-project-change"),(0,o.kt)("li",{parentName:"ul"},"feature-archived"),(0,o.kt)("li",{parentName:"ul"},"feature-revived"),(0,o.kt)("li",{parentName:"ul"},"feature-strategy-update"),(0,o.kt)("li",{parentName:"ul"},"feature-strategy-add"),(0,o.kt)("li",{parentName:"ul"},"feature-strategy-remove"),(0,o.kt)("li",{parentName:"ul"},"feature-stale-on"),(0,o.kt)("li",{parentName:"ul"},"feature-stale-off"),(0,o.kt)("li",{parentName:"ul"},"feature-environment-enabled"),(0,o.kt)("li",{parentName:"ul"},"feature-environment-disabled")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"*) Deprecated, and will not be used after transition to environments in Unleash v4.3")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"Unleash Webhook addon takes the following parameters."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Webhook URL")," This is the only required property. If you are using a Slack Application you must also make sure your application is allowed to post the channel you want to post to."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Content-Type")," Used to set the content-type header used when unleash performs an HTTP POST to the defined endpoint."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Body template")," Used to override the body template used by Unleash when performing the HTTP POST. You may format you message using a ",(0,o.kt)("a",{parentName:"p",href:"https://mustache.github.io"},"Mustache template"),". You will have the ",(0,o.kt)("a",{parentName:"p",href:"/api/admin/events"},"Unleash event format")," available in the rendering context."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mustache"},'{\n  "event": "{{event.type}}",\n  "createdBy": "{{event.createdBy}}",\n  "featureToggle": "{{event.data.name}}",\n  "timestamp": "{{event.data.createdAt}}"\n}\n')),(0,o.kt)("p",null,"If you don't specify anything Unleash will use the ",(0,o.kt)("a",{parentName:"p",href:"/api/admin/events"},"Unleash event format"),"."))}d.isMDXComponent=!0}}]);