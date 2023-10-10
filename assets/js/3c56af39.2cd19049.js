"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5588],{62657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"JavaScript browser",slug:"/reference/sdks/javascript-browser",custom_edit_url:"https://github.com/Unleash/unleash-proxy-client-js/edit/main/README.md"},l=void 0,i={unversionedId:"generated/sdks/client-side/javascript-browser",id:"generated/sdks/client-side/javascript-browser",title:"JavaScript browser",description:"This document was generated from the README in the JavaScript browser GitHub repository.",source:"@site/docs/generated/sdks/client-side/javascript-browser.md",sourceDirName:"generated/sdks/client-side",slug:"/reference/sdks/javascript-browser",permalink:"/reference/sdks/javascript-browser",draft:!1,editUrl:"https://github.com/Unleash/unleash-proxy-client-js/edit/main/README.md",tags:[],version:"current",frontMatter:{title:"JavaScript browser",slug:"/reference/sdks/javascript-browser",custom_edit_url:"https://github.com/Unleash/unleash-proxy-client-js/edit/main/README.md"},sidebar:"documentation",previous:{title:"iOS",permalink:"/reference/sdks/ios-proxy"},next:{title:"Next.js",permalink:"/reference/sdks/next-js"}},s={},p=[{value:"Frameworks supported",id:"frameworks-supported",level:2},{value:"How to use the client",id:"how-to-use-the-client",level:2},{value:"Step 1: Installation",id:"step-1-installation",level:3},{value:"Step 2: Initialize the SDK",id:"step-2-initialize-the-sdk",level:3},{value:"Connection options",id:"connection-options",level:4},{value:"Step 3: Let the client synchronize",id:"step-3-let-the-client-synchronize",level:3},{value:"Step 4: Check feature toggle states",id:"step-4-check-feature-toggle-states",level:3},{value:"Updating the Unleash context",id:"updating-the-unleash-context",level:4},{value:"Available options",id:"available-options",level:3},{value:"Listen for updates via the EventEmitter",id:"listen-for-updates-via-the-eventemitter",level:3},{value:"Available events:",id:"available-events",level:4},{value:"SessionId - Important note!",id:"sessionid---important-note",level:3},{value:"Stop the SDK",id:"stop-the-sdk",level:3},{value:"Custom store",id:"custom-store",level:3},{value:"How to use in node.js",id:"how-to-use-in-nodejs",level:2},{value:"How to use the client via CDN.",id:"how-to-use-the-client-via-cdn",level:2},{value:"Bootstrap",id:"bootstrap",level:2},{value:"How to use it ?",id:"how-to-use-it-",level:3}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Generated content",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This document was generated from the README in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy-client-js"},"JavaScript browser GitHub repository"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To connect to Unleash from a client-side context, you'll need to use the ",(0,r.kt)("a",{parentName:"p",href:"/reference/front-end-api"},"Unleash front-end API")," (",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"how do I create an API token?"),") or the ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash proxy")," (",(0,r.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"how do I create client keys?"),").")),(0,r.kt)("h1",{id:"unleash-proxy-client-for-the-browser-js"},"Unleash Proxy Client for the browser (JS)"),(0,r.kt)("p",null,"The JavaScript proxy client is a tiny Unleash client written in JavaScript without any external dependencies (except from browser APIs). This client stores toggles relevant for the current user in ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," and synchronizes with Unleash (the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/front-end-api"},"Unleash front-end API")," ",(0,r.kt)("em",{parentName:"p"},"or")," the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-proxy"},"Unleash proxy"),") in the background. Because toggles are stored in the user's browser, the client can use them to bootstrap itself the next time the user visits the same web page."),(0,r.kt)("p",null,"This client expect ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," to be available. If you need to support older\nbrowsers you should probably use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/github/fetch"},"fetch polyfill"),". "),(0,r.kt)("h2",{id:"frameworks-supported"},"Frameworks supported"),(0,r.kt)("p",null,"This package is not tied to any framework, but can be used together most popular frameworks, examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/sdks/proxy-react"},"Unleash React SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/"},"React Native")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://angularjs.org/"},"Angular JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vuejs.org/"},"Vue.js")),(0,r.kt)("li",{parentName:"ul"},"...and probably your favorite! ")),(0,r.kt)("h2",{id:"how-to-use-the-client"},"How to use the client"),(0,r.kt)("h3",{id:"step-1-installation"},"Step 1: Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm install unleash-proxy-client\n")),(0,r.kt)("h3",{id:"step-2-initialize-the-sdk"},"Step 2: Initialize the SDK"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\ud83d\udca1 ",(0,r.kt)("strong",{parentName:"p"},"TIP"),": As a client-side SDK, this SDK requires you to connect to either an Unleash proxy or to the Unleash front-end API. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"#connection-options"},"connection options section")," for more information."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Configure the client according to your needs. The following example provides only the required options. Refer to ",(0,r.kt)("a",{parentName:"p",href:"#available-options"},"the section on available options")," for the full list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { UnleashClient } from 'unleash-proxy-client';\n\nconst unleash = new UnleashClient({\n    url: 'https://<your-unleash-instance>/api/frontend',\n    clientKey: '<your-client-side-token>',\n    appName: 'my-webapp',\n});\n\n// Start the background polling\nunleash.start();\n")),(0,r.kt)("h4",{id:"connection-options"},"Connection options"),(0,r.kt)("p",null,"To connect this SDK to your Unleash instance's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/front-end-api"},"front-end API"),", use the URL to your Unleash instance's front-end API (",(0,r.kt)("inlineCode",{parentName:"p"},"<unleash-url>/api/frontend"),") as the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," parameter. For the ",(0,r.kt)("inlineCode",{parentName:"p"},"clientKey")," parameter, use a ",(0,r.kt)("inlineCode",{parentName:"p"},"FRONTEND")," token generated from your Unleash instance. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/how-to/how-to-create-api-tokens"},(0,r.kt)("em",{parentName:"a"},"how to create API tokens"))," guide for the necessary steps."),(0,r.kt)("p",null,"To connect this SDK to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-proxy"},"Unleash proxy"),", use the proxy's URL and a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#proxy-client-keys"},"proxy client key"),". The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-proxy#configuration"},(0,r.kt)("em",{parentName:"a"},"configuration")," section of the Unleash proxy docs")," contains more info on how to configure client keys for your proxy."),(0,r.kt)("h3",{id:"step-3-let-the-client-synchronize"},"Step 3: Let the client synchronize"),(0,r.kt)("p",null,"You should wait for the client's ",(0,r.kt)("inlineCode",{parentName:"p"},"ready")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"initialized")," events before you start working with it. Before it's ready, the client might not report the correct state for your features."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"unleash.on('ready', () => {\n    if (unleash.isEnabled('proxy.demo')) {\n        console.log('proxy.demo is enabled');\n    } else {\n        console.log('proxy.demo is disabled');\n    }\n});\n")),(0,r.kt)("p",null,"The difference between the events is described in the ",(0,r.kt)("a",{parentName:"p",href:"#available-events"},"section on available events"),"."),(0,r.kt)("h3",{id:"step-4-check-feature-toggle-states"},"Step 4: Check feature toggle states"),(0,r.kt)("p",null,"Once the client is ready, you can start checking features in your application. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," method to check the state of any feature you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"unleash.isEnabled('proxy.demo');\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getVariant")," method to get the variant of an ",(0,r.kt)("strong",{parentName:"p"},"enabled feature that has variants"),". If the feature is disabled or if it has no variants, then you will get back the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/feature-toggle-variants#the-disabled-variant"},(0,r.kt)("strong",{parentName:"a"},"disabled variant"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const variant = unleash.getVariant('proxy.demo');\nif (variant.name === 'blue') {\n    // something with variant blue...\n}\n")),(0,r.kt)("h4",{id:"updating-the-unleash-context"},"Updating the Unleash context"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-context"},"Unleash context")," is used to evaluate features against attributes of a the current user. To update and configure the Unleash context in this SDK, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateContext")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setContextField")," methods."),(0,r.kt)("p",null,"The context you set in your app will be passed along to the Unleash proxy or the front-end API as query parameters for feature evaluation."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"updateContext")," method will replace the entire\n(mutable part) of the Unleash context with the data that you pass in."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"setContextField")," method only acts on the property that you choose. It does not affect any other properties of the Unleash context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"unleash.updateContext({ userId: '1233' });\n\nunleash.setContextField('userId', '4141');\n")),(0,r.kt)("h3",{id:"available-options"},"Available options"),(0,r.kt)("p",null,"The Unleash SDK takes the following options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"option"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"The Unleash Proxy URL to connect to. E.g.: ",(0,r.kt)("inlineCode",{parentName:"td"},"https://examples.com/proxy"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientKey"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"The Unleash Proxy Secret to be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appName"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the application using this SDK. Will be used as part of the metrics sent to Unleash Proxy. Will also be part of the Unleash Context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refreshInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},"How often, in seconds, the SDK should check for updated toggle configuration. If set to 0 will disable checking for updates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disableRefresh"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"If set to true, the client will not check for updated toggle configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metricsInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},"How often, in seconds, the SDK should send usage metrics back to Unleash Proxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disableMetrics"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Set this option to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if you want to disable usage metrics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storageProvider"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LocalStorageProvider")," in browser, ",(0,r.kt)("inlineCode",{parentName:"td"},"InMemoryStorageProvider")," otherwise"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to inject a custom storeProvider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fetch"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"window.fetch")," or global ",(0,r.kt)("inlineCode",{parentName:"td"},"fetch")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to override the fetch implementation to use. Useful in Node.js environments where you can inject ",(0,r.kt)("inlineCode",{parentName:"td"},"node-fetch"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to bootstrap the cached feature toggle configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrapOverride"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Should the bootstrap automatically override cached data in the local-storage. Will only be used if bootstrap is not an empty array.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headerName"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Authorization")),(0,r.kt)("td",{parentName:"tr",align:null},"Which header the SDK should use to authorize with Unleash / Unleash Proxy. The header will be given the ",(0,r.kt)("inlineCode",{parentName:"td"},"clientKey")," as its value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customHeaders"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"Additional headers to use when making HTTP requests to the Unleash proxy. In case of name collisions with the default headers, the ",(0,r.kt)("inlineCode",{parentName:"td"},"customHeaders")," value will be used if it is not ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"),". ",(0,r.kt)("inlineCode",{parentName:"td"},"customHeaders")," values that are ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," will be ignored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"impressionDataAll"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},'Allows you to trigger "impression" events for ',(0,r.kt)("strong",{parentName:"td"},"all")," ",(0,r.kt)("inlineCode",{parentName:"td"},"getToggle")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"getVariant"),' invocations. This is particularly useful for "disabled" feature toggles that are not visible to frontend SDKs.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"environment"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the ",(0,r.kt)("inlineCode",{parentName:"td"},"environment")," option of the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.getunleash.io/reference/unleash-context"},"Unleash context"),". This does ",(0,r.kt)("strong",{parentName:"td"},"not")," affect the SDK's ",(0,r.kt)("a",{parentName:"td",href:"https://docs.getunleash.io/reference/environments"},"Unleash environment"),".")))),(0,r.kt)("h3",{id:"listen-for-updates-via-the-eventemitter"},"Listen for updates via the EventEmitter"),(0,r.kt)("p",null,"The client is also an event emitter. This means that your code can subscribe to updates from the client.\nThis is a neat way to update a single page app when toggle state updates. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"unleash.on('update', () => {\n    const myToggle = unleash.isEnabled('proxy.demo');\n    //do something useful\n});\n")),(0,r.kt)("h4",{id:"available-events"},"Available events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"error")," - emitted when an error occurs on init, or when fetch function fails, or when fetch receives a non-ok response object. The error object is sent as payload."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"initialized")," - emitted after the SDK has read local cached data in the storageProvider. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ready")," - emitted after the SDK has successfully started and performed the initial fetch towards the Unleash Proxy. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"update")," - emitted every time the Unleash Proxy return a new feature toggle configuration. The SDK will emit this event as part of the initial fetch from the SDK.  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PS! Please remember that you should always register your event listeners before your call ",(0,r.kt)("inlineCode",{parentName:"p"},"unleash.start()"),". If you register them after you have started the SDK you risk loosing important events. ")),(0,r.kt)("h3",{id:"sessionid---important-note"},"SessionId - Important note!"),(0,r.kt)("p",null,'You may provide a custom session id via the "context". If you do not provide a sessionId this SDK will create a random session id, which will also be stored in the provided storage (local storage). By always having a consistent sessionId available ensures that even "anonymous" users will get a consistent experience when feature toggles is evaluated, in combination with a gradual (percentage based) rollout. '),(0,r.kt)("h3",{id:"stop-the-sdk"},"Stop the SDK"),(0,r.kt)("p",null,"You can stop the Unleash client by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"stop")," method. Once the client has been stopped, it will no longer check for updates or send metrics to the server."),(0,r.kt)("p",null,"A stopped client ",(0,r.kt)("em",{parentName:"p"},"can")," be restarted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"unleash.stop()\n")),(0,r.kt)("h3",{id:"custom-store"},"Custom store"),(0,r.kt)("p",null,"This SDK can work with React Native storage ",(0,r.kt)("a",{parentName:"p",href:"https://react-native-async-storage.github.io/async-storage/"},"@react-native-async-storage/async-storage")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sriraman/react-native-shared-preferences"},"react-native-shared-preferences")," and many more to backup feature toggles locally. This is useful for bootstrapping the SDK the next time the user comes back to your application. "),(0,r.kt)("p",null,"You can provide your own storage implementation. "),(0,r.kt)("p",null,"Examples: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import SharedPreferences from 'react-native-shared-preferences';\nimport { UnleashClient } from 'unleash-proxy-client';\n\nconst unleash = new UnleashClient({\n    url: 'https://eu.unleash-hosted.com/hosted/proxy',\n    clientKey: 'your-proxy-key',\n    appName: 'my-webapp',\n    storageProvider: {\n      save: (name: string, data: any) => SharedPreferences.setItem(name, data),\n      get: (name: string) => SharedPreferences.getItem(name, (val) => val)\n    },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import AsyncStorage from '@react-native-async-storage/async-storage';\nimport { UnleashClient } from 'unleash-proxy-client';\n\nconst PREFIX = 'unleash:repository';\n\nconst unleash = new UnleashClient({\n    url: 'https://eu.unleash-hosted.com/hosted/proxy',\n    clientKey: 'your-proxy-key',\n    appName: 'my-webapp',\n    storageProvider: {\n       save: (name: string, data: any) => {\n        const repo = JSON.stringify(data);\n        const key = `${PREFIX}:${name}`;\n        return AsyncStorage.setItem(key, repo);\n      },\n      get: (name: string) => {\n        const key = `${PREFIX}:${name}`;\n        const data = await AsyncStorage.getItem(key);\n        return data ? JSON.parse(data) : undefined;\n      }\n    },\n});\n")),(0,r.kt)("h2",{id:"how-to-use-in-nodejs"},"How to use in node.js"),(0,r.kt)("p",null,'This SDK can also be used in node.js applications (from v1.4.0). Please note that you will need to provide a valid "fetch" implementation. Only ECMAScript modules is exported from this package.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import fetch from 'node-fetch';\nimport { UnleashClient, InMemoryStorageProvider } from 'unleash-proxy-client';\n\nconst unleash = new UnleashClient({\n  url: 'https://app.unleash-hosted.com/demo/proxy',\n  clientKey: 'proxy-123',\n  appName: 'nodejs-proxy',\n  storageProvider: new InMemoryStorageProvider(),\n  fetch,\n});\n\nawait unleash.start();\nconst isEnabled = unleash.isEnabled('proxy.demo');\nconsole.log(isEnabled);\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"index.mjs")),(0,r.kt)("h2",{id:"how-to-use-the-client-via-cdn"},"How to use the client via CDN."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n<head>\n    <script src=\"https://unpkg.com/unleash-proxy-client@latest/build/main.min.js\" type=\"text/javascript\"><\/script>\n    <script type=\"text/javascript\">\n        var config = {url: 'https://app.unleash-hosted.com/demo/proxy', clientKey: 'proxy-123', appName: 'web'};\n        var client = new unleash.UnleashClient(config);\n        client.updateContext({userId: '1233'})\n\n        client.on('update', () => {\n            console.log(client.isEnabled('proxy.demo'));\n        });\n        client.start();\n    <\/script>\n</head>\n</html>\n")),(0,r.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,r.kt)("p",null,"Now it is possible to bootstrap the SDK with your own feature toggle configuration when you don't want to make an API call.  "),(0,r.kt)("p",null,"This is also useful if you require the toggles to be in a certain state immediately after initializing the SDK."),(0,r.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap")," attribute when create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"UnleashClient"),".",(0,r.kt)("br",{parentName:"p"}),"\n","There's also a ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrapOverride")," attribute which is by default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { UnleashClient } from \'unleash-proxy-client\';\n\nconst unleash = new UnleashClient({\n  url: \'https://app.unleash-hosted.com/demo/proxy\',\n  clientKey: \'proxy-123\',\n  appName: \'nodejs-proxy\',\n  bootstrap: [{\n    "enabled": true,\n    "name": "demoApp.step4",\n    "variant": {\n        "enabled": true,\n        "name": "blue"\n    }\n  }],\n  bootstrapOverride: false\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTES: \u26a0\ufe0f"),"\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrapOverride")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," (by default), any local cached data will be overridden with the bootstrap specified.",(0,r.kt)("br",{parentName:"p"}),"\n","If ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrapOverride")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," any local cached data will not be overridden unless the local cache is empty."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This content was generated on ",(0,r.kt)("time",{dateTime:"2023-10-10T16:13:40.417Z"},"10 October 2023 at 16:13:40 Coordinated Universal Time")))}h.isMDXComponent=!0}}]);