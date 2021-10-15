"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4241],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8289:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],i={id:"slack",title:"Slack"},s=void 0,c={unversionedId:"addons/slack",id:"addons/slack",isDocsHomePage:!1,title:"Slack",description:"This feature was introduced in Unleash v3.11.0.",source:"@site/docs/addons/slack.md",sourceDirName:"addons",slug:"/addons/slack",permalink:"/addons/slack",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/addons/slack.md",tags:[],version:"current",frontMatter:{id:"slack",title:"Slack"},sidebar:"documentation",previous:{title:"Webhook",permalink:"/addons/webhook"},next:{title:"Microsoft Teams",permalink:"/addons/teams"}},u=[{value:"Configuration",id:"configuration",children:[{value:"Events",id:"events",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Global configuration",id:"global-configuration",children:[],level:4},{value:"Tags",id:"tags",children:[],level:4}],level:2}],p={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This feature was introduced in ",(0,o.kt)("em",{parentName:"p"},"Unleash v3.11.0"),".")),(0,o.kt)("p",null,"The Slack addon allows Unleash to post Updates when a feature toggle is updated. To set up Slack, you need to configure an incoming Slack webhook URL. You can follow ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/incoming-webhooks"},"Sending messages using Incoming Webhooks")," on how to do that. You can also choose to ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/apps"},"create a slack app for Unleash"),", which will provide you with additional functionality to control how Unleash communicates messages on your Slack workspace."),(0,o.kt)("p",null,"The Slack addon will perform a single retry if the HTTP POST against the Slack Webhook URL fails (either a 50x or network error). Duplicate events may happen. You should never assume events always comes in order."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"events"},"Events"),(0,o.kt)("p",null,"You can choose to trigger updates for the following events (we might add more event types in the future):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"feature-created"),(0,o.kt)("li",{parentName:"ul"},"feature-updated"),(0,o.kt)("li",{parentName:"ul"},"feature-archived"),(0,o.kt)("li",{parentName:"ul"},"feature-revived"),(0,o.kt)("li",{parentName:"ul"},"feature-stale-on"),(0,o.kt)("li",{parentName:"ul"},"feature-stale-off")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"Unleash Slack addon takes the following parameters."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Slack Webhook URL")," - This is the only required property. If you are using a Slack Application you must also make sure your application is allowed to post to the channel you want to post to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Username")," - Used to override the username used to post the update to a Slack channel."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Emoji Icon")," - Used to override the emoji icon used to post the update to a Slack channel."),(0,o.kt)("li",{parentName:"ul"},"Default channel - Where to post the message if the feature toggles has not overridden the channel via the slack tags.")),(0,o.kt)("h4",{id:"global-configuration"},"Global configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unleash URL")," - The slack plugin uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"server.unleashUrl")," property to create the link back to Unleash in the posts. This can be set using the ",(0,o.kt)("strong",{parentName:"li"},"UNLEASH_URL")," environment variable or the ",(0,o.kt)("inlineCode",{parentName:"li"},"server.unleashUrl")," property when starting the server from node.")),(0,o.kt)("h4",{id:"tags"},"Tags"),(0,o.kt)("p",null,'The Slack addon also defined the Tag type "slack". You may use this tag to override which Slack channel Unleash should post updates to for this feature toggle.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Slack Tags",src:n(1827).Z})),(0,o.kt)("p",null,'In the picture you can see we have defined two slack tags for the "new-payment-system" toggle. In this example Unleash will post updates to the ',(0,o.kt)("strong",{parentName:"p"},"#notifications")," and ",(0,o.kt)("strong",{parentName:"p"},"#random")," channel."))}d.isMDXComponent=!0},1827:function(e,t,n){t.Z=n.p+"assets/images/slack_addon_tags-b4bb6fb9fa207c9c59b3add0b6b519ee.png"}}]);