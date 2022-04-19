"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[607],{4076:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(7294),i=n(8746),a=n(7434),o=n(6010),l="cardContainer_woeA",c="cardContainerLink_iOSj",s="cardTitle_pNjP",u="cardDescription_qC_k",f=n(1699);function m(e){var t=e.href,n=e.children,a=(0,o.Z)("card margin-bottom--lg padding--lg",l,t&&c);return t?r.createElement(i.Z,{href:t,className:a},n):r.createElement("div",{className:a},n)}function p(e){var t=e.href,n=e.icon,i=e.title,a=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},n," ",i),r.createElement("div",{className:(0,o.Z)("text--truncate",u),title:a},a))}function d(e){var t=e.item,n=(0,a.Wl)(t);return r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.items.length+" items"})}function g(e){var t,n=e.item,i=(0,f.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:i,title:n.label,description:null==o?void 0:o.description})}function h(e){var t=e.item;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items;return r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6"},r.createElement(h,{item:e}))})))}},5764:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(4076),l=n(7434),c=["components"],s={id:"integrations",title:"External Integrations and plugins"},u=void 0,f={unversionedId:"integrations/integrations",id:"integrations/integrations",title:"External Integrations and plugins",description:"Unleash can also integrate with other systems in different ways.",source:"@site/docs/integrations/integrations.md",sourceDirName:"integrations",slug:"/integrations/",permalink:"/integrations/",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/integrations/integrations.md",tags:[],version:"current",frontMatter:{id:"integrations",title:"External Integrations and plugins"},sidebar:"documentation",previous:{title:"Securing Unleash",permalink:"/deploy/securing_unleash"},next:{title:"Jira Server Integration - Installation",permalink:"/integrations/jira_server_plugin_installation"}},m=[{value:"Official integrations",id:"official-integrations",children:[],level:2},{value:"Community-contributed integrations:",id:"community-contributed-integrations",children:[],level:2}],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unleash can also integrate with other systems in different ways."),(0,a.kt)("h2",{id:"official-integrations"},"Official integrations"),(0,a.kt)("p",null,"Unleash provides these official integrations:"),(0,a.kt)(o.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"community-contributed-integrations"},"Community-contributed integrations:"),(0,a.kt)("p",null,"Our wonderful community has also created the following integrations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/crishellco/vue-unleash"},"Vue Unleash plugin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/quarkiverse/quarkus-unleash"},"Quarkus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitlab.com/m03geek/fastify-feature-flags#unleash-provider"},"Fastify feature flags plugin"))))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,d=m["".concat(c,".").concat(p)]||m[p]||f[p]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);