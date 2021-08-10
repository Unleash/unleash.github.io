"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6110],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2597:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"index",title:"Introduction"},s=void 0,u={unversionedId:"addons/index",id:"addons/index",isDocsHomePage:!1,title:"Introduction",description:"This feature was introduced in Unleash v3.11.0.",source:"@site/docs/addons/addons.md",sourceDirName:"addons",slug:"/addons/index",permalink:"/addons/index",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/addons/addons.md",version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"documentation",previous:{title:"Community SDKs \u2665",permalink:"/sdks/community"},next:{title:"Webhook",permalink:"/addons/webhook"}},c=[{value:"Notes",id:"notes",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This feature was introduced in ",(0,a.kt)("em",{parentName:"p"},"Unleash v3.11.0"),".")),(0,a.kt)("p",null,"Unleash Addons allows you to extend Unleash with new functionality. Currently, addons allow you to listen to changes in Unleash and trigger updates in other systems, typical via a WebHook."),(0,a.kt)("p",null,"Currently Unleash support the following Addons out of the box:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./webhook"},"Webhook")," - A generic way to post messages from Unleash to third party services."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./slack"},"Slack")," - Allows Unleash to post updates to Slack."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./teams"},"Microsoft Teams")," - Allows Unleash to post updates to Microsoft Teams."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./datadog"},"Datadog")," -allows Unleash to post Updates to Datadog when a feature toggle is updated.")),(0,a.kt)("p",null,"In future releases we plan to support community built addons."),(0,a.kt)("h3",{id:"notes"},"Notes"),(0,a.kt)("p",null,"When updating or creating a new addon configuration it can take up to one minute before Unleash picks up the new config on all instances due to caching."))}p.isMDXComponent=!0}}]);