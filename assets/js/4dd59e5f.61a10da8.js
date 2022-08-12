"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},27839:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),i=n(86010),a=n(53438),o=n(39960),l=n(13919),s=n(95999);const c="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",c)},n)}function f(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",m),title:o},o))}function d(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t;let{item:n}=e;const i=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:i,title:n.label,description:null==o?void 0:o.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){let{items:t,className:n}=e;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((e=>"category"!==e.type||!!(0,a.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},76645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(87462),i=(n(67294),n(3905)),a=n(27839),o=n(53438);const l={id:"integrations",title:"External Integrations and plugins"},s=void 0,c={unversionedId:"integrations/integrations",id:"integrations/integrations",title:"External Integrations and plugins",description:"Unleash can also integrate with other systems in different ways.",source:"@site/docs/integrations/integrations.md",sourceDirName:"integrations",slug:"/integrations/",permalink:"/integrations/",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/integrations/integrations.md",tags:[],version:"current",frontMatter:{id:"integrations",title:"External Integrations and plugins"},sidebar:"documentation",previous:{title:"Securing Unleash",permalink:"/deploy/securing_unleash"},next:{title:"Jira Server Integration - Installation",permalink:"/integrations/jira_server_plugin_installation"}},u={},m=[{value:"Official integrations",id:"official-integrations",level:2},{value:"Community-contributed integrations:",id:"community-contributed-integrations",level:2}],p={toc:m};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Unleash can also integrate with other systems in different ways."),(0,i.kt)("h2",{id:"official-integrations"},"Official integrations"),(0,i.kt)("p",null,"Unleash provides these official integrations:"),(0,i.kt)(a.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}),(0,i.kt)("h2",{id:"community-contributed-integrations"},"Community-contributed integrations:"),(0,i.kt)("p",null,"Our wonderful community has also created the following integrations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/crishellco/vue-unleash"},"Vue Unleash plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/quarkiverse/quarkus-unleash"},"Quarkus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/m03geek/fastify-feature-flags#unleash-provider"},"Fastify feature flags plugin"))))}f.isMDXComponent=!0}}]);