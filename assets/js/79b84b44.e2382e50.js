"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return a?n.createElement(f,i(i({ref:t},g),{},{components:a})):n.createElement(f,i({ref:t},g))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={title:"Feature Toggles"},i=void 0,l={unversionedId:"reference/feature-toggles",id:"reference/feature-toggles",title:"Feature Toggles",description:"Feature toggles are the central concept that we built Unleash around. In Unleash, feature toggles are organized within projects. Feature toggles can have different activation strategies for each of their project's environments, and can also be given variants to facilitate A/B testing.",source:"@site/docs/reference/feature-toggles.mdx",sourceDirName:"reference",slug:"/reference/feature-toggles",permalink:"/reference/feature-toggles",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/feature-toggles.mdx",tags:[],version:"current",frontMatter:{title:"Feature Toggles"},sidebar:"documentation",previous:{title:"Environments",permalink:"/user_guide/environments"},next:{title:"Feature Toggle Types",permalink:"/advanced/feature_toggle_types"}},s={},u=[{value:"Configuration options",id:"configuration-options",level:2},{value:"Environments",id:"environments",level:2},{value:"Activation strategies",id:"activation-strategies",level:2},{value:"Variants",id:"variants",level:2},{value:"Creating toggles with payloads",id:"creating-toggles-with-payloads",level:3}],g={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Feature toggles are the central concept that we built Unleash around. In Unleash, feature toggles are organized within ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/projects"},"projects"),". Feature toggles can have different ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/activation_strategy"},"activation strategies")," for each of their project's ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/environments"},"environments"),", and can also be given ",(0,r.kt)("a",{parentName:"p",href:"/advanced/toggle_variants"},"variants")," to facilitate A/B testing."),(0,r.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,r.kt)("p",null,"Each feature toggle has the following configuration options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"The feature toggle's name. Must be URL-friendly according to ",(0,r.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc3986#section-2.3"},"section 2.3 of RFC 3986")," and must be unique within your Unleash instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feature toggle type"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Release"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"/advanced/feature_toggle_types"},"feature toggle's type"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"/user_guide/projects#the-default-project"},"default project"),". When created from a project page in the admin UI, that project will be the default value instead."),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"/user_guide/projects"},"project")," that should contain the feature toggle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"A description of the feature toggle's purpose.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable impression data"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable ",(0,r.kt)("a",{parentName:"td",href:"/advanced/impression-data"},"impression data")," for this toggle or not.")))),(0,r.kt)("h2",{id:"environments"},"Environments"),(0,r.kt)("p",null,"You probably won't want to use the same configuration to enable a toggle in development as you do in production. That's why feature toggles have different activation strategy configurations for each environment."),(0,r.kt)("p",null,"You can enable and disable a toggle independently in each of the ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/projects#projects-and-environments"},"project's environments"),". When you disable a toggle in an environment, it will always evaluate to false in that environment. When you enable a toggle in an environment, the toggle will evaluate to true or false depending on its activation strategies."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/environments"},"documentation on environments")," for more details on how environments work."),(0,r.kt)("h2",{id:"activation-strategies"},"Activation strategies"),(0,r.kt)("p",null,"To enable a feature in an environment, you must assign it at least one activation strategy. A feature toggle's activation strategies determine whether the toggle gets enabled for a particular ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/unleash_context"},"Unleash context")," (typically a user). When using multiple strategies in a single environment, only a single strategy needs to evaluate to true for the toggle to get enabled for a user. Whenever Unleash evaluates a toggle, it will evaluate strategies in the current environment until one of them resolves to true. If no strategies resolve to true, then the toggle's value is false."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/activation_strategy"},"activation strategies documentation")," for a detailed description of all the built-in strategies."),(0,r.kt)("h2",{id:"variants"},"Variants"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/advanced/toggle_variants"},"Variants")," adds another dimension of flexibility to feature toggles. Each feature toggle can be assigned any number of variants which will then get distributed amongst your users based on your choice of ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/unleash_context#structure"},"context field"),". You can find out more about variants in the ",(0,r.kt)("a",{parentName:"p",href:"/advanced/toggle_variants"},"variants docs"),"."),(0,r.kt)("h3",{id:"creating-toggles-with-payloads"},"Creating toggles with payloads"),(0,r.kt)("p",null,"While variants are most often used for A/B testing and the like, you can also use variants to assign a constant payload to a toggle. If you give a toggle only a single variant and that variant has a payload, then all users variants will receive that payload."))}p.isMDXComponent=!0}}]);