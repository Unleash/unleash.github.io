"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9922],{69753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={title:"Vue",slug:"/reference/sdks/vue"},i=void 0,o={unversionedId:"generated/sdks/client-side/vue",id:"generated/sdks/client-side/vue",title:"Vue",description:"This document was generated from the README in the Vue GitHub repository.",source:"@site/docs/generated/sdks/client-side/vue.md",sourceDirName:"generated/sdks/client-side",slug:"/reference/sdks/vue",permalink:"/reference/sdks/vue",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/generated/sdks/client-side/vue.md",tags:[],version:"current",frontMatter:{title:"Vue",slug:"/reference/sdks/vue"},sidebar:"documentation",previous:{title:"Svelte",permalink:"/reference/sdks/svelte"},next:{title:"Deploy and manage Unleash",permalink:"/reference/deploy"}},s={},p=[{value:"Using config:",id:"using-config",level:2},{value:"Initializing your own client",id:"initializing-your-own-client",level:2},{value:"Deferring client start",id:"deferring-client-start",level:2},{value:"Check feature toggle status",id:"check-feature-toggle-status",level:2},{value:"Check variants",id:"check-variants",level:2},{value:"Defer rendering until flags fetched",id:"defer-rendering-until-flags-fetched",level:2},{value:"Updating context",id:"updating-context",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Generated content",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This document was generated from the README in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/proxy-client-vue"},"Vue GitHub repository"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To connect to Unleash from a client-side context, you'll need to use the ",(0,r.kt)("a",{parentName:"p",href:"/reference/front-end-api"},"Unleash front-end API")," (",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"how do I create an API token?"),") or the ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash proxy")," (",(0,r.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"how do I create client keys?"),").")),(0,r.kt)("h1",{id:"proxy-client-vue"},"proxy-client-vue"),(0,r.kt)("p",null,"PoC for a Vue SDK for ",(0,r.kt)("a",{parentName:"p",href:"https://www.getunleash.io/"},"Unleash")," based on the official ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/proxy-client-react"},"proxy-client-react"),"."),(0,r.kt)("h1",{id:"disclaimer"},"DISCLAIMER:"),(0,r.kt)("p",null,"This library is meant to be used with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy"},"unleash-proxy"),". The proxy application layer will sit between your unleash instance and your client applications, and provides performance and security benefits. DO NOT TRY to connect this library directly to the unleash instance, as the datasets follow different formats because the proxy only returns evaluated toggle information."),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @unleash/proxy-client-vue\n// or\nyarn add @unleash/proxy-client-vue\n")),(0,r.kt)("h1",{id:"initialization"},"Initialization"),(0,r.kt)("h2",{id:"using-config"},"Using config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createApp } from 'vue'\nimport { plugin as unleashPlugin } from '@unleash/proxy-client-vue'\n// import the root component App from a single-file component.\nimport App from './App.vue'\n\nconst config = {\n  url: 'https://HOSTNAME/proxy',\n  clientKey: 'PROXYKEY',\n  refreshInterval: 15,\n  appName: 'your-app-name',\n}\n\nconst app = createApp(App)\napp.use(unleashPlugin, { config })\napp.mount('#app')\n")),(0,r.kt)("p",null,"Or use the FlagProvider component like this in your entrypoint file (typically App.vue):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { FlagProvider } from '@unleash/proxy-client-vue'\n\nconst config = {\n  url: 'https://UNLEASH-INSTANCE/api/frontend',\n  clientKey: 'CLIENT\u2014SIDE\u2014API\u2014TOKEN',\n  refreshInterval: 15,\n  appName: 'your-app-name',\n}\n\n<template>\n  <FlagProvider :config=\"config\">\n    <App />\n  </FlagProvider>\n</template>\n")),(0,r.kt)("h2",{id:"initializing-your-own-client"},"Initializing your own client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createApp } from 'vue'\nimport { plugin as unleashPlugin } from '@unleash/proxy-client-vue'\n// import the root component App from a single-file component.\nimport App from './App.vue'\n\nconst config = {\n  url: 'https://HOSTNAME/proxy',\n  clientKey: 'PROXYKEY',\n  refreshInterval: 15,\n  appName: 'your-app-name',\n}\n\nconst client = new UnleashClient(config)\n\nconst app = createApp(App)\napp.use(unleashPlugin, { unleashClient: client })\napp.mount('#app')\n")),(0,r.kt)("p",null,"Or, using FlagProvider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { FlagProvider, UnleashClient } from '@unleash/proxy-client-vue'\n\nconst config = {\n  url: 'https://UNLEASH-INSTANCE/api/frontend',\n  clientKey: 'CLIENT\u2014SIDE\u2014API\u2014TOKEN',\n  refreshInterval: 15,\n  appName: 'your-app-name',\n}\n\nconst client = new UnleashClient(config)\n\n<template>\n  <FlagProvider :unleash-client=\"client\">\n    <App />\n  </FlagProvider>\n</template>\n")),(0,r.kt)("h2",{id:"deferring-client-start"},"Deferring client start"),(0,r.kt)("p",null,"By default, the Unleash client will start polling the Proxy for toggles immediately when the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlagProvider")," component renders. You can delay the polling by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"startClient")," prop to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"passing a client instance to the ",(0,r.kt)("inlineCode",{parentName:"li"},"FlagProvider"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<template>\n  <FlagProvider :unleash-client="client" :start-client="false">\n    <App />\n  </FlagProvider>\n</template>\n')),(0,r.kt)("p",null,"Deferring the client start gives you more fine-grained control over when to start fetching the feature toggle configuration. This could be handy in cases where you need to get some other context data from the server before fetching toggles, for instance."),(0,r.kt)("p",null,"To start the client, use the client's ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," method. The below snippet of pseudocode will defer polling until the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"asyncProcess")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const client = new UnleashClient({\n  /* ... */\n})\n\nonMounted(() => {\n  const asyncProcess = async () => {\n    // do async work ...\n    client.start()\n  }\n  asyncProcess()\n})\n\n<template>\n  <FlagProvider :unleash-client="client" :start-client="false">\n    <App />\n  </FlagProvider>\n</template>\n')),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("h2",{id:"check-feature-toggle-status"},"Check feature toggle status"),(0,r.kt)("p",null,"To check if a feature is enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<script setup>\nimport { useFlag } from '@unleash/proxy-client-vue'\n\nconst enabled = useFlag('travel.landing')\n<\/script>\n\n<template>\n  <SomeComponent v-if=\"enabled\" />\n  <AnotherComponent v-else />\n</template>\n")),(0,r.kt)("h2",{id:"check-variants"},"Check variants"),(0,r.kt)("p",null,"To check variants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<script setup>\nimport { useVariant } from '@unleash/proxy-client-vue'\n\nconst variant = useVariant('travel.landing')\n<\/script>\n\n<template>\n  <SomeComponent v-if=\"variant.enabled && variant.name === 'SomeComponent'\" />\n  <AnotherComponent v-else-if=\"variant.enabled && variant.name === 'AnotherComponent\" />\n  <DefaultComponent v-else />\n</template>\n")),(0,r.kt)("h2",{id:"defer-rendering-until-flags-fetched"},"Defer rendering until flags fetched"),(0,r.kt)("p",null,"useFlagsStatus retrieves the ready state and error events.\nFollow the following steps in order to delay rendering until the flags have been fetched."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useFlagsStatus } from '@unleash/proxy-client-vue'\n\nconst { flagsReady, flagsError } = useFlagsStatus()\n\n<Loading v-if=\"!flagsReady\" />\n<MyComponent v-else error={flagsError} />\n")),(0,r.kt)("h2",{id:"updating-context"},"Updating context"),(0,r.kt)("p",null,"Follow the following steps in order to update the unleash context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useUnleashContext, useFlag } from '@unleash/proxy-client-vue'\n\nconst props = defineProps<{\n  userId: string\n}>()\n\nconst { userId } = toRefs(props)\n\nconst updateContext = useUnleashContext()\n\nonMounted(() => {\n  updateContext({ userId })\n})\n\nwatch(userId, () => {\n  async function run() {\n    await updateContext({ userId: userId.value })\n    console.log('new flags loaded for', userId.value)\n  }\n  run()\n})\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This content was generated on ",(0,r.kt)("time",{dateTime:"2023-02-22T00:14:40.625Z"},"22 February 2023 at 00:14:40 Coordinated Universal Time")))}c.isMDXComponent=!0}}]);