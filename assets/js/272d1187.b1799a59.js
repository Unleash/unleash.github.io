"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2130],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3793:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"teams",title:"Microsoft Teams"},l=void 0,u={unversionedId:"addons/teams",id:"addons/teams",isDocsHomePage:!1,title:"Microsoft Teams",description:"This feature was introduced in Unleash v4.0.0.",source:"@site/docs/addons/teams.md",sourceDirName:"addons",slug:"/addons/teams",permalink:"/addons/teams",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/addons/teams.md",tags:[],version:"current",frontMatter:{id:"teams",title:"Microsoft Teams"},sidebar:"documentation",previous:{title:"Slack",permalink:"/addons/slack"},next:{title:"Datadog",permalink:"/addons/datadog"}},c=[{value:"Configuration",id:"configuration",children:[{value:"Events",id:"events",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Tags",id:"tags",children:[],level:4}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This feature was introduced in ",(0,a.kt)("em",{parentName:"p"},"Unleash v4.0.0"),".")),(0,a.kt)("p",null,"The MicrosoftTeams addon allows Unleash to post Updates when a feature toggle is updated. To set up this addon, you need to set up a webhook connector for your channel. You can follow ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook"},"Creating an Incoming Webhook for a channel")," on how to do that."),(0,a.kt)("p",null,"The Microsoft Teams addon will perform a single retry if the HTTP POST against the Microsoft Teams Webhook URL fails (either a 50x or network error). Duplicate events may happen, and you should never assume events always comes in order."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h4",{id:"events"},"Events"),(0,a.kt)("p",null,"You can choose to trigger updates for the following events (we might add more event types in the future):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"feature-created"),(0,a.kt)("li",{parentName:"ul"},"feature-updated"),(0,a.kt)("li",{parentName:"ul"},"feature-archived"),(0,a.kt)("li",{parentName:"ul"},"feature-revived"),(0,a.kt)("li",{parentName:"ul"},"feature-stale-on"),(0,a.kt)("li",{parentName:"ul"},"feature-stale-off")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"Unleash Microsoft Teams addon takes the following parameters."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Microsoft Teams Webhook URL")," - This is the only required property.")),(0,a.kt)("h4",{id:"tags"},"Tags"),(0,a.kt)("p",null,"Microsoft teams's incoming webhooks are channel specific. You will be able to create multiple addons to support messaging on multiple channels."))}d.isMDXComponent=!0}}]);