"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2130],{4879:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"teams",title:"Microsoft Teams"},s=void 0,u={unversionedId:"addons/teams",id:"addons/teams",title:"Microsoft Teams",description:"This feature was introduced in Unleash v4.0.0.",source:"@site/docs/addons/teams.md",sourceDirName:"addons",slug:"/addons/teams",permalink:"/addons/teams",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/addons/teams.md",tags:[],version:"current",frontMatter:{id:"teams",title:"Microsoft Teams"},sidebar:"documentation",previous:{title:"Slack",permalink:"/addons/slack"},next:{title:"Webhook",permalink:"/addons/webhook"}},c=[{value:"Configuration",id:"configuration",children:[{value:"Events",id:"events",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Tags",id:"tags",children:[],level:4}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This feature was introduced in ",(0,o.kt)("em",{parentName:"p"},"Unleash v4.0.0"),".")),(0,o.kt)("p",null,"The MicrosoftTeams addon allows Unleash to post Updates when a feature toggle is updated. To set up this addon, you need to set up a webhook connector for your channel. You can follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook"},"Creating an Incoming Webhook for a channel")," on how to do that."),(0,o.kt)("p",null,"The Microsoft Teams addon will perform a single retry if the HTTP POST against the Microsoft Teams Webhook URL fails (either a 50x or network error). Duplicate events may happen, and you should never assume events always comes in order."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"events"},"Events"),(0,o.kt)("p",null,"You can choose to trigger updates for the following events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"feature-created"),(0,o.kt)("li",{parentName:"ul"},"feature-updated (*)"),(0,o.kt)("li",{parentName:"ul"},"feature-metadata-updated"),(0,o.kt)("li",{parentName:"ul"},"feature-project-change"),(0,o.kt)("li",{parentName:"ul"},"feature-archived"),(0,o.kt)("li",{parentName:"ul"},"feature-revived"),(0,o.kt)("li",{parentName:"ul"},"feature-strategy-update"),(0,o.kt)("li",{parentName:"ul"},"feature-strategy-add"),(0,o.kt)("li",{parentName:"ul"},"feature-strategy-remove"),(0,o.kt)("li",{parentName:"ul"},"feature-stale-on"),(0,o.kt)("li",{parentName:"ul"},"feature-stale-off"),(0,o.kt)("li",{parentName:"ul"},"feature-environment-enabled"),(0,o.kt)("li",{parentName:"ul"},"feature-environment-disabled")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"*) Deprecated, and will not be used after transition to environments in Unleash v4.3")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"Unleash Microsoft Teams addon takes the following parameters."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Microsoft Teams Webhook URL")," - This is the only required property.")),(0,o.kt)("h4",{id:"tags"},"Tags"),(0,o.kt)("p",null,"Microsoft teams's incoming webhooks are channel specific. You will be able to create multiple addons to support messaging on multiple channels."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);