"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9008],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=u(n),h=r,p=g["".concat(c,".").concat(h)]||g[h]||s[h]||o;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1825:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"audit_log",title:"The audit log"},c=void 0,u={unversionedId:"advanced/audit_log",id:"advanced/audit_log",title:"The audit log",description:"The audit log lets you track changes in Unleash. It lists what changed, when it changed, and who performed the change.",source:"@site/docs/advanced/audit-log.md",sourceDirName:"advanced",slug:"/advanced/audit_log",permalink:"/advanced/audit_log",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/advanced/audit-log.md",tags:[],version:"current",frontMatter:{id:"audit_log",title:"The audit log"},sidebar:"documentation",previous:{title:"Archived toggles",permalink:"/advanced/archived_toggles"},next:{title:"Impression data",permalink:"/advanced/impression-data"}},d=[{value:"Feature toggle log",id:"audit-log-per-feature-toggle",children:[],level:2},{value:"Global Audit Log",id:"global-audit-log",children:[],level:2}],s={toc:d};function g(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The audit log lets you track changes in Unleash. It lists ",(0,o.kt)("em",{parentName:"p"},"what")," changed, ",(0,o.kt)("em",{parentName:"p"},"when")," it changed, and ",(0,o.kt)("em",{parentName:"p"},"who")," performed the change."),(0,o.kt)("h2",{id:"audit-log-per-feature-toggle"},"Feature toggle log"),(0,o.kt)("p",null,'Each feature toggle has its own audit log. The audit log is available under the "Event log" tab in the tab view.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The event log for a feature toggle. The &quot;Event log&quot; tab is highlighted and the UI shows the most recent changes, including a JSON diff and the change details.",src:n(6563).Z,width:"1720",height:"1010"})),(0,o.kt)("h2",{id:"global-audit-log"},"Global Audit Log"),(0,o.kt)("p",null,"Unleash also keeps an audit log across all toggles and activation strategies, tracking all changes. You access the global audit log via the \u201cEvent history\u201d, which you can find in the drawer menu. The global audit log is only accessible by users with instance admin access."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The global event log and how to get there. It shows a number of events and their changes as well as the navigation steps: use the admin menu and navigate to &quot;event history&quot;.",src:n(2103).Z,width:"2880",height:"1571"})))}g.isMDXComponent=!0},2103:function(e,t,n){t.Z=n.p+"assets/images/global_audit_log-be68514c70fe73a95dfccd29259ebf0a.png"},6563:function(e,t,n){t.Z=n.p+"assets/images/unleash-toggle-history-c4fe0e3e49dcfcbfec41451bca1d3ba2.png"}}]);