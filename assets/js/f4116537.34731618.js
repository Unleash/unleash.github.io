"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[371],{80968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const l={title:"Node SDK",slug:"/reference/sdks/node"},o=void 0,s={unversionedId:"generated/sdks/server-side/node",id:"generated/sdks/server-side/node",title:"Node SDK",description:"This document was generated from the README in the Node SDK's GitHub repository.",source:"@site/docs/generated/sdks/server-side/node.md",sourceDirName:"generated/sdks/server-side",slug:"/reference/sdks/node",permalink:"/reference/sdks/node",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/generated/sdks/server-side/node.md",tags:[],version:"current",frontMatter:{title:"Node SDK",slug:"/reference/sdks/node"},sidebar:"documentation",previous:{title:"Java SDK",permalink:"/reference/sdks/java"},next:{title:"PHP SDK",permalink:"/reference/sdks/php"}},r={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"1. Install the unleash-client into your project",id:"1-install-the-unleash-client-into-your-project",level:3},{value:"2. Initialize unleash-client",id:"2-initialize-unleash-client",level:3},{value:"How do I know when it&#39;s ready?",id:"how-do-i-know-when-its-ready",level:4},{value:"Constructing the Unleash client directly",id:"constructing-the-unleash-client-directly",level:4},{value:"Synchronous initialization",id:"synchronous-initialization",level:4},{value:"3. Check features",id:"3-check-features",level:3},{value:"Providing an Unleash context",id:"providing-an-unleash-context",level:4},{value:"4. Stop unleash",id:"4-stop-unleash",level:3},{value:"Built in activation strategies",id:"built-in-activation-strategies",level:3},{value:"Unleash context",id:"unleash-context",level:3},{value:"Advanced usage",id:"advanced-usage",level:2},{value:"Custom strategies",id:"custom-strategies",level:2},{value:"1. implement the custom strategy:",id:"1-implement-the-custom-strategy",level:3},{value:"2. register your custom strategy:",id:"2-register-your-custom-strategy",level:3},{value:"Events",id:"events",level:2},{value:"Bootstrap",id:"bootstrap",level:2},{value:"Toggle definitions",id:"toggle-definitions",level:2},{value:"Custom Store Provider",id:"custom-store-provider",level:2},{value:"Custom repository",id:"custom-repository",level:2}],p={toc:u};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Generated content",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This document was generated from the README in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-node"},"Node SDK's GitHub repository"),".")),(0,i.kt)("admonition",{title:"Connecting to Unleash",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To connect to Unleash, you'll need your Unleash API url (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<your-unleash>/api"),") and a ",(0,i.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#client-tokens"},"server-side API token")," (",(0,i.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"how do I create an API token?"),").")),(0,i.kt)("h1",{id:"unleash-client-sdk-for-nodejs"},"Unleash Client SDK for Node.js"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/unleash-client"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/unleash-client",alt:"Unleash node SDK on npm"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/dm/unleash-client",alt:"npm downloads"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-node/actions"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/Unleash/unleash-client-node/workflows/Build/badge.svg",alt:"Build Status"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://codeclimate.com/github/Unleash/unleash-client-node"},(0,i.kt)("img",{parentName:"a",src:"https://codeclimate.com/github/Unleash/unleash-client-node/badges/gpa.svg",alt:"Code Climate"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://coveralls.io/github/Unleash/unleash-client-node?branch=main"},(0,i.kt)("img",{parentName:"a",src:"https://coveralls.io/repos/github/Unleash/unleash-client-node/badge.svg?branch=main",alt:"Coverage Status"}))),(0,i.kt)("p",null,"The official Unleash client SDK for Node.js."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"1-install-the-unleash-client-into-your-project"},"1. Install the unleash-client into your project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install unleash-client\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add unleash-client\n")),(0,i.kt)("p",null,"(Or any other tool you like.)"),(0,i.kt)("h3",{id:"2-initialize-unleash-client"},"2. Initialize unleash-client"),(0,i.kt)("p",null,"Once installed, you must initialize the SDK in your application. By default, Unleash initialization\nis asynchronous, but if you need it to be synchronous, you can\n",(0,i.kt)("a",{parentName:"p",href:"#synchronous-initialization"},"block until the SDK has synchronized with the server"),"."),(0,i.kt)("p",null,"Note that until the SDK has synchronized with the API, all features will evaluate to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," unless\nyou a ",(0,i.kt)("a",{parentName:"p",href:"#bootstrap"},"bootstrapped configuration"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\ud83d\udca1 ",(0,i.kt)("strong",{parentName:"p"},"Tip"),": All code samples in this section will initialize the SDK and try to connect to the\nUnleash instance you point it to. You will need an Unleash instance and a\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#client-tokens"},"server-side API token"),"\nfor the connection to be successful."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We recommend that you initialize the Unleash client SDK ",(0,i.kt)("strong",{parentName:"p"},"as early as possible")," in your\napplication. The SDK will set up an in-memory repository and poll for updates from the Unleash\nserver at regular intervals."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { initialize } = require('unleash-client');\n\nconst unleash = initialize({\n  url: 'https://YOUR-API-URL',\n  appName: 'my-node-name',\n  customHeaders: { Authorization: 'SOME-SECRET' },\n});\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," function will configure a ",(0,i.kt)("strong",{parentName:"p"},"global")," Unleash instance. If you call this method\nmultiple times, the global instance will be changed. You will ",(0,i.kt)("strong",{parentName:"p"},"not")," create multiple instances."),(0,i.kt)("h4",{id:"how-do-i-know-when-its-ready"},"How do I know when it's ready?"),(0,i.kt)("p",null,"Because the SDK takes care of talking to the server in the background, it can be difficult to know\nexactly when it has connected and is ready to evaluate toggles. If you want to run some code when\nthe SDK becomes ready, you can listen for the ",(0,i.kt)("inlineCode",{parentName:"p"},"'synchronized'")," event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"unleash.on('synchronized', () => {\n  // the SDK has synchronized with the server\n  // and is ready to serve\n});\n")),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"#events"},"events reference")," later in this document for more information on events and\nan exhaustive list of all the events the SDK can emit."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," function will configure and create a ",(0,i.kt)("em",{parentName:"p"},"global")," Unleash instance. When a global instance exists, calling this method has no effect. Call the ",(0,i.kt)("inlineCode",{parentName:"p"},"destroy")," function to remove the globally configured instance."),(0,i.kt)("h4",{id:"constructing-the-unleash-client-directly"},"Constructing the Unleash client directly"),(0,i.kt)("p",null,"You can also construct the Unleash instance yourself instead of via the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," method."),(0,i.kt)("p",null,"When using the Unleash client directly, you ",(0,i.kt)("strong",{parentName:"p"},"should not create new Unleash instances on every request"),". Most applications are expected to only have a single Unleash instance (singleton). Each Unleash instance will maintain a connection to the Unleash API, which may result in flooding the Unleash API. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { Unleash } = require('unleash-client');\n\nconst unleash = new Unleash({\n  url: 'https://YOUR-API-URL',\n  appName: 'my-node-name',\n  customHeaders: { Authorization: 'SOME-SECRET' },\n});\n\nunleash.on('ready', console.log.bind(console, 'ready'));\n\n// optional error handling when using unleash directly\nunleash.on('error', console.error);\n")),(0,i.kt)("h4",{id:"synchronous-initialization"},"Synchronous initialization"),(0,i.kt)("p",null,"You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"startUnleash")," function and ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," to wait for the SDK to have fully\nsynchronized with the Unleash API. This guarantees that the SDK is not operating on local and\npotentially stale feature toggle configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { startUnleash } = require('unleash-client');\n\nconst unleash = await startUnleash({\n  url: 'https://YOUR-API-URL',\n  appName: 'my-node-name',\n  customHeaders: { Authorization: 'SOME-SECRET' },\n});\n\n// Unleash SDK has now fresh state from the unleash-api\nconst isEnabled = unleash.isEnabled('Demo');\n")),(0,i.kt)("h3",{id:"3-check-features"},"3. Check features"),(0,i.kt)("p",null,"With the SDK initialized, you can use it to check the states of your feature toggles in your\napplication."),(0,i.kt)("p",null,"The primary way to check feature toggle status is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," method on the SDK. It takes\nthe name of the feature and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," based on whether the feature is enabled or\nnot."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"setInterval(() => {\n  if (unleash.isEnabled('DemoToggle')) {\n    console.log('Toggle enabled');\n  } else {\n    console.log('Toggle disabled');\n  }\n}, 1000);\n")),(0,i.kt)("p",null,"\ud83d\udc40 ",(0,i.kt)("strong",{parentName:"p"},"Note"),": In this example, we've wrapped the ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," call inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval")," function. In\nthe event that all your app does is to start the SDK and check a feature status, this is will keep a\nnode app running until the SDK has synchronized with the Unleash API. It is ",(0,i.kt)("strong",{parentName:"p"},"not")," required in\nnormal apps."),(0,i.kt)("h4",{id:"providing-an-unleash-context"},"Providing an Unleash context"),(0,i.kt)("p",null,"Calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," method with just a feature name will work in simple use cases, but in many\ncases you'll also want to provide an\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-context"},"Unleash context"),". The SDK uses the Unleash\ncontext to evaluate any\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/activation-strategies"},"activation strategy")," with\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/strategy-constraints"},"strategy constraints"),", and also to\nevaluate some of the built-in strategies."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," accepts an Unleash context object as a second argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const unleashContext = {\n  userId: '123',\n  sessionId: 'some-session-id',\n  remoteAddress: '127.0.0.1',\n  properties: {\n    region: 'EMEA',\n  },\n};\n\nconst enabled = unleash.isEnabled('someToggle', unleashContext);\n")),(0,i.kt)("h3",{id:"4-stop-unleash"},"4. Stop unleash"),(0,i.kt)("p",null,"To shut down the client (turn off the polling) you can simply call the destroy-method. This is\ntypically not required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { destroy } = require('unleash-client');\ndestroy();\n")),(0,i.kt)("h3",{id:"built-in-activation-strategies"},"Built in activation strategies"),(0,i.kt)("p",null,"The client comes supports all built-in activation strategies provided by Unleash."),(0,i.kt)("p",null,"Read more about\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/activation-strategies"},"activation strategies in the official docs"),"."),(0,i.kt)("h3",{id:"unleash-context"},"Unleash context"),(0,i.kt)("p",null,"In order to use some of the common activation strategies you must provide an\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-context"},"Unleash context"),". This client SDK allows you\nto send in the unleash context as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const unleashContext = {\n  userId: '123',\n  sessionId: 'some-session-id',\n  remoteAddress: '127.0.0.1',\n};\nunleash.isEnabled('someToggle', unleashContext);\n")),(0,i.kt)("h2",{id:"advanced-usage"},"Advanced usage"),(0,i.kt)("p",null,"The initialize method takes the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"url")," - The url to fetch toggles from (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"appName")," - The application name / codebase name (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"environment")," - The active environment this application is running in. Automatically populated\nin the Unleash Context (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"instanceId")," - A unique identifier, should/could be somewhat unique."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"refreshInterval")," - The poll interval to check for updates. Defaults to 15000ms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"metricsInterval")," - How often the client should send metrics to Unleash API. Defaults to\n60000ms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"strategies")," - Custom activation strategies to be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disableMetrics")," - Disable metrics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"customHeaders")," - Provide a map(object) of custom headers to be sent to the unleash-server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"customHeadersFunction")," - Provide a function that return a Promise resolving as custom headers\nto be sent to unleash-server. When options are set, this will take precedence over ",(0,i.kt)("inlineCode",{parentName:"li"},"customHeaders"),"\noption."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"timeout")," - Specify a timeout in milliseconds for outgoing HTTP requests. Defaults to 10000ms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"repository")," - Provide a custom repository implementation to manage the underlying data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"httpOptions")," - Provide custom http options such as ",(0,i.kt)("inlineCode",{parentName:"li"},"rejectUnauthorized")," - be careful with these\noptions as they may compromise your application security."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"namePrefix")," - Only fetch feature toggles with the provided name prefix."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tags")," - Only fetch feature toggles tagged with the list of tags. E.g.:\n",(0,i.kt)("inlineCode",{parentName:"li"},"[{type: 'simple', value: 'proxy'}]"),".")),(0,i.kt)("h2",{id:"custom-strategies"},"Custom strategies"),(0,i.kt)("h3",{id:"1-implement-the-custom-strategy"},"1. implement the custom strategy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { Strategy, initialize } = require('unleash-client');\nclass ActiveForUserWithEmailStrategy extends Strategy {\n  constructor() {\n    super('ActiveForUserWithEmail');\n  }\n\n  isEnabled(parameters, context) {\n    return parameters.emails.indexOf(context.email) !== -1;\n  }\n}\n")),(0,i.kt)("h3",{id:"2-register-your-custom-strategy"},"2. register your custom strategy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"initialize({\n  url: 'http://unleash.herokuapp.com',\n  customHeaders: {\n    Authorization: 'API token',\n  },\n  strategies: [new ActiveForUserWithEmailStrategy()],\n});\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"The unleash instance object implements the EventEmitter class and ",(0,i.kt)("strong",{parentName:"p"},"emits")," the following events:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"event"),(0,i.kt)("th",{parentName:"tr",align:null},"payload"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ready"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"is emitted once the fs-cache is ready. if no cache file exists it will still be emitted. The client is ready to use, but might not have synchronized with the Unleash API yet. This means the SDK still can operate on stale configurations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"synchronized"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"is emitted when the SDK has successfully synchronized with the Unleash API, or when it has been bootstrapped, and has all the latest feature toggle configuration available.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"registered"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"is emitted after the app has been registered at the api server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sent"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")," data"),(0,i.kt)("td",{parentName:"tr",align:null},"key/value pair of delivered metrics")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"count"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," name, ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"is emitted when a feature is evaluated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"warn"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," msg"),(0,i.kt)("td",{parentName:"tr",align:null},"is emitted on a warning")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"error"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Error")," err"),(0,i.kt)("td",{parentName:"tr",align:null},"is emitted on a error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"unchanged"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"is emitted each time the client gets new toggle state from server, but nothing has changed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"changed"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")," data"),(0,i.kt)("td",{parentName:"tr",align:null},"is emitted each time the client gets new toggle state from server and changes has been made")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"impression"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")," data"),(0,i.kt)("td",{parentName:"tr",align:null},"is emitted for every user impression (isEnabled / getVariant)")))),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { initialize } = require('unleash-client');\n\nconst unleash = initialize({\n  appName: 'my-app-name',\n  url: 'http://unleash.herokuapp.com/api/',\n  customHeaders: {\n    Authorization: 'API token',\n  },\n});\n\n// Some useful life-cycle events\nunleash.on('ready', console.log);\nunleash.on('synchronized', console.log);\nunleash.on('error', console.error);\nunleash.on('warn', console.warn);\n\nunleash.once('registered', () => {\n  // Do something after the client has registered with the server api.\n  // NB! It might not have received updated feature toggles yet.\n});\n\nunleash.once('changed', () => {\n  console.log(`Demo is enabled: ${unleash.isEnabled('Demo')}`);\n});\n\nunleash.on('count', (name, enabled) => console.log(`isEnabled(${name})`));\n")),(0,i.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,i.kt)("p",null,"(Available from v3.11.x)"),(0,i.kt)("p",null,"The Node.js SDK supports a bootstrap parameter, allowing you to load the initial feature toggle\nconfiguration from somewhere else than the Unleash API. The bootstrap ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," can be provided as an\nargument directly to the SDK, as a ",(0,i.kt)("inlineCode",{parentName:"p"},"filePath")," to load or as a ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," to fetch the content from.\nBootstrap is a convenient way to increase resilience, where the SDK can still load fresh toggle\nconfiguration from the bootstrap location, even if the Unleash API should be unavailable at startup."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Bootstrap with data passed as an argument")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const client = initialize({\n  appName: 'my-application',\n  url: 'https://app.unleash-hosted2.com/demo/api/',\n  customHeaders: {\n    Authorization: '943ca9171e2c884c545c5d82417a655fb77cec970cc3b78a8ff87f4406b495d0',\n  },\n  bootstrap: {\n    data: [\n      {\n        enabled: false,\n        name: 'BootstrapDemo',\n        description: '',\n        project: 'default',\n        stale: false,\n        type: 'release',\n        variants: [],\n        strategies: [{ name: 'default' }],\n      },\n    ],\n  },\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Bootstrap via a URL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const client = initialize({\n  appName: 'my-application',\n  url: 'https://app.unleash-hosted.com/demo/api/',\n  customHeaders: {\n    Authorization: '943ca9171e2c884c545c5d82417a655fb77cec970cc3b78a8ff87f4406b495d0',\n  },\n  bootstrap: {\n    url: 'http://localhost:3000/proxy/client/features',\n    urlHeaders: {\n      Authorization: 'bootstrap',\n    },\n  },\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Bootstrap from a File")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const client = initialize({\n  appName: 'my-application',\n  url: 'https://app.unleash-hosted.com/demo/api/',\n  customHeaders: {\n    Authorization: '943ca9171e2c884c545c5d82417a655fb77cec970cc3b78a8ff87f4406b495d0',\n  },\n  bootstrap: {\n    filePath: '/tmp/some-bootstrap.json',\n  },\n});\n")),(0,i.kt)("h2",{id:"toggle-definitions"},"Toggle definitions"),(0,i.kt)("p",null,"Sometimes you might be interested in the raw feature toggle definitions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  initialize,\n  getFeatureToggleDefinition,\n  getFeatureToggleDefinitions,\n} = require('unleash-client');\n\ninitialize({\n  url: 'http://unleash.herokuapp.com/api/',\n  customHeaders: {\n    Authorization: 'API token',\n  },\n  appName: 'my-app-name',\n  instanceId: 'my-unique-instance-id',\n});\n\nconst featureToggleX = getFeatureToggleDefinition('app.ToggleX');\nconst featureToggles = getFeatureToggleDefinitions();\n")),(0,i.kt)("h2",{id:"custom-store-provider"},"Custom Store Provider"),(0,i.kt)("p",null,"(Available from v3.11.x)"),(0,i.kt)("p",null,"By default this SDK will use a store provider that writes a backup of the feature toggle\nconfiguration to a ",(0,i.kt)("strong",{parentName:"p"},"file on disk"),". This happens every time it receives updated configuration from\nthe Unleash API. You can swap out the store provider with either the provided in-memory store\nprovider or a custom store provider implemented by you."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Use InMemStorageProvider")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { initialize, InMemStorageProvider } = require('unleash-client');\n\nconst client = initialize({\n  appName: 'my-application',\n  url: 'http://localhost:3000/api/',\n  customHeaders: {\n    Authorization: 'my-key',\n  },\n  storageProvider: new InMemStorageProvider(),\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Custom Store Provider backed by redis")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { initialize, InMemStorageProvider } = require('unleash-client');\n\nconst { createClient } = require('redis');\n\nclass CustomRedisStore {\n  async set(key, data) {\n    const client = createClient();\n    await client.connect();\n    await client.set(key, JSON.stringify(data));\n  }\n  async get(key) {\n    const client = createClient();\n    await client.connect();\n    const data = await client.get(key);\n    return JSON.parse(data);\n  }\n}\n\nconst client = initialize({\n  appName: 'my-application',\n  url: 'http://localhost:3000/api/',\n  customHeaders: {\n    Authorization: 'my-key',\n  },\n  storageProvider: new CustomRedisStore(),\n});\n")),(0,i.kt)("h2",{id:"custom-repository"},"Custom repository"),(0,i.kt)("p",null,"You can manage the underlying data layer yourself if you want to. This enables you to use unleash\noffline, from a browser environment or implement your own caching layer. See\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-node/blob/main/examples/custom_repository.js"},"example"),"."),(0,i.kt)("p",null,"Unleash depends on a ",(0,i.kt)("inlineCode",{parentName:"p"},"ready")," event of the repository you pass in. Be sure that you emit the event\n",(0,i.kt)("strong",{parentName:"p"},"after")," you've initialized unleash."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This content was generated on ",(0,i.kt)("time",{datetime:"2023-01-13T11:41:42.244Z"},"13 January 2023 at 11:41:42 Coordinated Universal Time")))}h.isMDXComponent=!0}}]);