"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2905:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},8403:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:v,groupId:f,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:w}=(0,s.U)(),[N,P]=(0,r.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=x[f];null!=e&&e!==N&&y.some((t=>t.value===e))&&P(e)}const O=e=>{const t=e.currentTarget,n=C.indexOf(t),a=y[n].value;a!==N&&(T(t),P(a),null!=f&&w(f,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(8403),o=n(2905);const i={id:"proxy-vue",title:"Vue Proxy SDK"},s=void 0,u={unversionedId:"sdks/proxy-vue",id:"sdks/proxy-vue",title:"Vue Proxy SDK",description:"Vue Proxy SDK is currently at version 0.0.1 and is experimental.",source:"@site/docs/sdks/proxy-vue.md",sourceDirName:"sdks",slug:"/sdks/proxy-vue",permalink:"/sdks/proxy-vue",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/proxy-vue.md",tags:[],version:"current",frontMatter:{id:"proxy-vue",title:"Vue Proxy SDK"},sidebar:"documentation",previous:{title:"Svelte Proxy SDK",permalink:"/sdks/proxy-svelte"},next:{title:"Deploy and manage Unleash",permalink:"/deploy"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Deferring client start",id:"deferring-client-start",level:2},{value:"Usage",id:"usage",level:2},{value:"Check feature toggle status",id:"check-feature-toggle-status",level:3},{value:"Check variants",id:"check-variants",level:3},{value:"Defer rendering until flags fetched",id:"defer-rendering-until-flags-fetched",level:3},{value:"Updating context",id:"updating-context",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"alert alert--info",role:"alert"},(0,r.kt)("em",null,"Vue Proxy SDK is currently at version 0.0.1 and is experimental"),"."),(0,r.kt)("br",null),(0,r.kt)("p",null,"This library is meant to be used with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy"},"unleash-proxy"),". The proxy application layer will sit between your unleash instance and your client applications, and provides performance and security benefits. DO NOT TRY to connect this library directly to the unleash instance, as the datasets follow different formats because the proxy only returns evaluated toggle information."),(0,r.kt)("p",null,"For more detailed information, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/proxy-client-vue"},"Vue Proxy SDK on GitHub"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @unleash/proxy-client-vue\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @unleash/proxy-client-vue\n")))),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"Import the provider like this in your entrypoint file (typically App.vue):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { FlagProvider } from '@unleash/proxy-client-vue'\n\nconst config = {\n  url: 'https://HOSTNAME/proxy',\n  clientKey: 'PROXYKEY',\n  refreshInterval: 15,\n  appName: 'your-app-name',\n  environment: 'dev'\n}\n\n<template>\n  <FlagProvider :config=\"config\">\n    <App />\n  </FlagProvider>\n</template>\n")),(0,r.kt)("p",null,"Alternatively, you can pass your own client in to the FlagProvider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { FlagProvider, UnleashClient } from '@unleash/proxy-client-vue'\n\nconst config = {\n  url: 'https://HOSTNAME/proxy',\n  clientKey: 'PROXYKEY',\n  refreshInterval: 15,\n  appName: 'your-app-name',\n  environment: 'dev'\n}\n\nconst client = new UnleashClient(config)\n\n<template>\n  <FlagProvider :unleash-client=\"client\">\n    <App />\n  </FlagProvider>\n</template>\n")),(0,r.kt)("h2",{id:"deferring-client-start"},"Deferring client start"),(0,r.kt)("p",null,"By default, the Unleash client will start polling the Proxy for toggles immediately when the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlagProvider")," component renders. You can delay the polling by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"startClient")," prop to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"passing a client instance to the ",(0,r.kt)("inlineCode",{parentName:"li"},"FlagProvider"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<template>\n  <FlagProvider :unleash-client="client" :start-client="false">\n    <App />\n  </FlagProvider>\n</template>\n')),(0,r.kt)("p",null,"Deferring the client start gives you more fine-grained control over when to start fetching the feature toggle configuration. This could be handy in cases where you need to get some other context data from the server before fetching toggles, for instance."),(0,r.kt)("p",null,"To start the client, use the client's ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," method. The below snippet of pseudocode will defer polling until the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"asyncProcess")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const client = new UnleashClient({\n  /* ... */\n})\n\nonMounted(() => {\n  const asyncProcess = async () => {\n    // do async work ...\n    client.start()\n  }\n  asyncProcess()\n})\n\n<template>\n  <FlagProvider :unleash-client="client" :start-client="false">\n    <App />\n  </FlagProvider>\n</template>\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"check-feature-toggle-status"},"Check feature toggle status"),(0,r.kt)("p",null,"To check if a feature is enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<script setup>\nimport { useFlag } from '@unleash/proxy-client-vue'\n\nconst enabled = useFlag('travel.landing')\n<\/script>\n\n<template>\n  <SomeComponent v-if=\"enabled\" />\n  <AnotherComponent v-else />\n</template>\n")),(0,r.kt)("h3",{id:"check-variants"},"Check variants"),(0,r.kt)("p",null,"To check variants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<script setup>\nimport { useVariant } from '@unleash/proxy-client-vue'\n\nconst variant = useVariant('travel.landing')\n<\/script>\n\n<template>\n  <SomeComponent v-if=\"variant.enabled && variant.name === 'SomeComponent'\" />\n  <AnotherComponent v-else-if=\"variant.enabled && variant.name === 'AnotherComponent\" />\n  <DefaultComponent v-else />\n</template>\n")),(0,r.kt)("h3",{id:"defer-rendering-until-flags-fetched"},"Defer rendering until flags fetched"),(0,r.kt)("p",null,"useFlagsStatus retrieves the ready state and error events. Follow the following steps in order to delay rendering until the flags have been fetched."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useFlagsStatus } from '@unleash/proxy-client-vue'\n\nconst { flagsReady, flagsError } = useFlagsStatus()\n\n<Loading v-if=\"!flagsReady\" />\n<MyComponent v-else error={flagsError} />\n")),(0,r.kt)("h3",{id:"updating-context"},"Updating context"),(0,r.kt)("p",null,"Follow the following steps in order to update the unleash context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useUnleashContext, useFlag } from '@unleash/proxy-client-vue'\n\nconst props = defineProps<{\n  userId: string\n}>()\n\nconst { userId } = toRefs(props)\n\nconst updateContext = useUnleashContext()\n\nonMounted(() => {\n  updateContext({ userId })\n})\n\nwatch(userId, () => {\n  async function run() {\n    await updateContext({ userId: userId.value })\n    console.log('new flags loaded for', userId.value)\n  }\n  run()\n})\n")))}m.isMDXComponent=!0}}]);