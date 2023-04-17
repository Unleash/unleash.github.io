"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1491],{10327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"Flutter",slug:"/reference/sdks/flutter"},o=void 0,i={unversionedId:"generated/sdks/client-side/flutter",id:"generated/sdks/client-side/flutter",title:"Flutter",description:"This document was generated from the README in the Flutter GitHub repository.",source:"@site/docs/generated/sdks/client-side/flutter.md",sourceDirName:"generated/sdks/client-side",slug:"/reference/sdks/flutter",permalink:"/reference/sdks/flutter",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/generated/sdks/client-side/flutter.md",tags:[],version:"current",frontMatter:{title:"Flutter",slug:"/reference/sdks/flutter"},sidebar:"documentation",previous:{title:"Android",permalink:"/reference/sdks/android-proxy"},next:{title:"iOS",permalink:"/reference/sdks/ios-proxy"}},s={},p=[{value:"How to use the client as a module",id:"how-to-use-the-client-as-a-module",level:2},{value:"Step 1: Installation",id:"step-1-installation",level:3},{value:"Step 2: Initialize the SDK",id:"step-2-initialize-the-sdk",level:3},{value:"Connection options",id:"connection-options",level:4},{value:"Step 3: Let the client synchronize",id:"step-3-let-the-client-synchronize",level:3},{value:"Step 4: Check feature toggle states",id:"step-4-check-feature-toggle-states",level:3},{value:"Updating the Unleash context",id:"updating-the-unleash-context",level:4},{value:"Available options",id:"available-options",level:3},{value:"Listen for updates via the events_emitter",id:"listen-for-updates-via-the-events_emitter",level:3},{value:"Available events:",id:"available-events",level:4},{value:"SessionId - Important note!",id:"sessionid---important-note",level:3},{value:"Stop the SDK",id:"stop-the-sdk",level:3},{value:"Bootstrap",id:"bootstrap",level:2},{value:"How to use it ?",id:"how-to-use-it-",level:3},{value:"Useful commands development",id:"useful-commands-development",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Generated content",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This document was generated from the README in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash_proxy_client_flutter"},"Flutter GitHub repository"),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To connect to Unleash from a client-side context, you'll need to use the ",(0,l.kt)("a",{parentName:"p",href:"/reference/front-end-api"},"Unleash front-end API")," (",(0,l.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"how do I create an API token?"),") or the ",(0,l.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash proxy")," (",(0,l.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"how do I create client keys?"),").")),(0,l.kt)("h1",{id:"unleash-proxy-client-for-flutter-dart"},"Unleash Proxy Client for Flutter (Dart)"),(0,l.kt)("p",null,"This is a tiny Unleash Client SDK you can use together with the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/front-end-api#using-the-unleash-front-end-api"},"Unleash Frontend API")," or the\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/sdks/unleash-proxy"},"Unleash Proxy"),".\nThis makes it super simple to use Unleash from any Flutter app."),(0,l.kt)("h2",{id:"how-to-use-the-client-as-a-module"},"How to use the client as a module"),(0,l.kt)("h3",{id:"step-1-installation"},"Step 1: Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"flutter pub add unleash_proxy_client_flutter\n")),(0,l.kt)("h3",{id:"step-2-initialize-the-sdk"},"Step 2: Initialize the SDK"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\ud83d\udca1 ",(0,l.kt)("strong",{parentName:"p"},"TIP"),": As a client-side SDK, this SDK requires you to connect to either an Unleash proxy or to the Unleash front-end API. Refer to the ",(0,l.kt)("a",{parentName:"p",href:"#connection-options"},"connection options section")," for more information."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Configure the client according to your needs. The following example provides only the required options. Refer to ",(0,l.kt)("a",{parentName:"p",href:"#available-options"},"the section on available options")," for the full list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unleash_proxy_client_flutter/unleash_proxy_client_flutter.dart';\n\nfinal unleash = UnleashClient(\n    url: Uri.parse('https://<your-unleash-instance>/api/frontend'),\n    clientKey: '<your-client-side-token>',\n    appName: 'my-app');\n")),(0,l.kt)("h4",{id:"connection-options"},"Connection options"),(0,l.kt)("p",null,"To connect this SDK to your Unleash instance's ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/front-end-api"},"front-end API"),", use the URL to your Unleash instance's front-end API (",(0,l.kt)("inlineCode",{parentName:"p"},"<unleash-url>/api/frontend"),") as the ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," parameter. For the ",(0,l.kt)("inlineCode",{parentName:"p"},"clientKey")," parameter, use a ",(0,l.kt)("inlineCode",{parentName:"p"},"FRONTEND")," token generated from your Unleash instance. Refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/how-to/how-to-create-api-tokens"},(0,l.kt)("em",{parentName:"a"},"how to create API tokens"))," guide for the necessary steps."),(0,l.kt)("p",null,"To connect this SDK to the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-proxy"},"Unleash proxy"),", use the proxy's URL and a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#proxy-client-keys"},"proxy client key"),". The ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-proxy#configuration"},(0,l.kt)("em",{parentName:"a"},"configuration")," section of the Unleash proxy docs")," contains more info on how to configure client keys for your proxy."),(0,l.kt)("h3",{id:"step-3-let-the-client-synchronize"},"Step 3: Let the client synchronize"),(0,l.kt)("p",null,"You should wait for the client's ",(0,l.kt)("inlineCode",{parentName:"p"},"ready")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"initialized")," events before you start working with it. Before it's ready, the client might not report the correct state for your features."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"unleash.on('ready', (_) {\n    if (unleash.isEnabled('proxy.demo')) {\n      print('proxy.demo is enabled');\n    } else {\n      print('proxy.demo is disabled');\n    }\n});\n")),(0,l.kt)("p",null,"The difference between the events is ",(0,l.kt)("a",{parentName:"p",href:"#available-events"},"explained below"),"."),(0,l.kt)("h3",{id:"step-4-check-feature-toggle-states"},"Step 4: Check feature toggle states"),(0,l.kt)("p",null,"Once the client is ready, you can start checking features in your application. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"isEnabled")," method to check the state of any feature you want:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"unleash.isEnabled('proxy.demo');\n")),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"getVariant")," method to get the variant of an ",(0,l.kt)("strong",{parentName:"p"},"enabled feature that has variants"),". If the feature is disabled or if it has no variants, then you will get back the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/feature-toggle-variants#the-disabled-variant"},(0,l.kt)("strong",{parentName:"a"},"disabled variant"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"final variant = unleash.getVariant('proxy.demo');\n\nif (variant.name == 'blue') {\n // something with variant blue...\n}\n")),(0,l.kt)("p",null,"You can also access the payload associated with the variant:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"final variant = unleash.getVariant('proxy.demo');\nfinal payload = variant.payload;\n\nif (payload != null) {\n  // do something with the payload\n  // print(payload \"${payload.type} ${payload.value}\");\n}\n")),(0,l.kt)("h4",{id:"updating-the-unleash-context"},"Updating the Unleash context"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-context"},"Unleash context")," is used to evaluate features against attributes of a the current user. To update and configure the Unleash context in this SDK, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"updateContext")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"setContextField")," methods."),(0,l.kt)("p",null,"The context you set in your app will be passed along to the Unleash proxy or the front-end API as query parameters for feature evaluation."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"updateContext")," method will replace the entire\n(mutable part) of the Unleash context with the data that you pass in."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"setContextField")," method only acts on the property that you choose. It does not affect any other properties of the Unleash context."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"// Used to set the context fields, shared with the Unleash Proxy. This \n// method will replace the entire (mutable part) of the Unleash Context.\nunleash.updateContext(UnleashContext(userId: '1233'));\n\n// Used to update a single field on the Unleash Context.\nunleash.setContextField('userId', '4141');\n")),(0,l.kt)("h3",{id:"available-options"},"Available options"),(0,l.kt)("p",null,"The Unleash SDK takes the following options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"option"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a"),(0,l.kt)("td",{parentName:"tr",align:null},"The Unleash Proxy URL to connect to. E.g.: ",(0,l.kt)("inlineCode",{parentName:"td"},"https://examples.com/proxy"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientKey"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a"),(0,l.kt)("td",{parentName:"tr",align:null},"The Unleash Proxy Secret to be used")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"appName"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the application using this SDK. Will be used as part of the metrics sent to Unleash Proxy. Will also be part of the Unleash Context.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refreshInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"How often, in seconds, the SDK should check for updated toggle configuration. If set to 0 will disable checking for updates")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableRefresh"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to true, the client will not check for updated toggle configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metricsInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"How often, in seconds, the SDK should send usage metrics back to Unleash Proxy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Set this option to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if you want to disable usage metrics")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storageProvider"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SharedPreferencesStorageProvider")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows you to inject a custom storeProvider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bootstrap"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows you to bootstrap the cached feature toggle configuration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bootstrapOverride"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Should the bootstrap automatically override cached data in the local-storage. Will only be used if bootstrap is not an empty array.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headerName"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Authorization")),(0,l.kt)("td",{parentName:"tr",align:null},"Provides possiblity to specify custom header that is passed to Unleash / Unleash Proxy with the ",(0,l.kt)("inlineCode",{parentName:"td"},"clientKey"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customHeaders"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}")),(0,l.kt)("td",{parentName:"tr",align:null},"Additional headers to use when making HTTP requests to the Unleash proxy. In case of name collisions with the default headers, the ",(0,l.kt)("inlineCode",{parentName:"td"},"customHeaders")," value will be used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"impressionDataAll"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},'Allows you to trigger "impression" events for ',(0,l.kt)("strong",{parentName:"td"},"all")," ",(0,l.kt)("inlineCode",{parentName:"td"},"getToggle")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"getVariant"),' invocations. This is particularly useful for "disabled" feature toggles that are not visible to frontend SDKs.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fetcher"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http.get")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows you to define your own ",(0,l.kt)("strong",{parentName:"td"},"fetcher"),". Can be used to add certificate pinning or additional http behavior.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"poster"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http.post")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows you to define your own ",(0,l.kt)("strong",{parentName:"td"},"poster"),". Can be used to add certificate pinning or additional http behavior.")))),(0,l.kt)("h3",{id:"listen-for-updates-via-the-events_emitter"},"Listen for updates via the events_emitter"),(0,l.kt)("p",null,"The client is also an event emitter. This means that your code can subscribe to updates from the client.\nThis is a neat way to update your app when toggle state updates."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"unleash.on('update', (_) {\n    final myToggle = unleash.isEnabled('proxy.demo');\n    //do something useful\n});\n")),(0,l.kt)("h4",{id:"available-events"},"Available events:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"error")," - emitted when an error occurs on init, or when fetch function fails, or when fetch receives a non-ok response object. The error object is sent as payload."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"initialized")," - emitted after the SDK has read local cached data in the storageProvider."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ready")," - emitted after the SDK has successfully started and performed the initial fetch towards the Unleash Proxy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"update")," - emitted every time the Unleash Proxy return a new feature toggle configuration. The SDK will emit this event as part of the initial fetch from the SDK.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"PS! Please remember that you should always register your event listeners before your call ",(0,l.kt)("inlineCode",{parentName:"p"},"unleash.start()"),". If you register them after you have started the SDK you risk loosing important events.")),(0,l.kt)("h3",{id:"sessionid---important-note"},"SessionId - Important note!"),(0,l.kt)("p",null,'You may provide a custom session id via the "context". If you do not provide a sessionId this SDK will create a random session id, which will also be stored in the provided storage. By always having a consistent sessionId available ensures that even "anonymous" users will get a consistent experience when feature toggles is evaluated, in combination with a gradual (percentage based) rollout.'),(0,l.kt)("h3",{id:"stop-the-sdk"},"Stop the SDK"),(0,l.kt)("p",null,"You can stop the Unleash client by calling the ",(0,l.kt)("inlineCode",{parentName:"p"},"stop")," method. Once the client has been stopped, it will no longer check for updates or send metrics to the server."),(0,l.kt)("p",null,"A stopped client ",(0,l.kt)("em",{parentName:"p"},"can")," be restarted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"unleash.stop();\n")),(0,l.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,l.kt)("p",null,"Now it is possible to bootstrap the SDK with your own feature toggle configuration when you don't want to make an API call."),(0,l.kt)("p",null,"This is also useful if you require the toggles to be in a certain state immediately after initializing the SDK."),(0,l.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,l.kt)("p",null,"Add a ",(0,l.kt)("inlineCode",{parentName:"p"},"bootstrap")," attribute when create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"UnleashClient"),".",(0,l.kt)("br",{parentName:"p"}),"\n","There's also a ",(0,l.kt)("inlineCode",{parentName:"p"},"bootstrapOverride")," attribute which is by default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"final unleash = UnleashClient(\n    url: Uri.parse('https://app.unleash-hosted.com/demo/api/proxy'),\n    clientKey: 'proxy-123',\n    appName: 'my-app',\n    bootstrapOverride: false,\n    bootstrap: {\n    'demoApp.step4': ToggleConfig(\n        enabled: true,\n        impressionData: false,\n        variant: Variant(enabled: true, name: 'blue'))\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTES: \u26a0\ufe0f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"bootstrapOverride")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," (by default), any local cached data will be overridden with the bootstrap specified.   "),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"bootstrapOverride")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," any local cached data will not be overridden unless the local cache is empty.")),(0,l.kt)("h2",{id:"useful-commands-development"},"Useful commands development"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flutter test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flutter format lib test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flutter analyze lib test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dart pub publish"))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This content was generated on ",(0,l.kt)("time",{dateTime:"2023-04-17T12:11:55.302Z"},"17 April 2023 at 12:11:55 Coordinated Universal Time")))}u.isMDXComponent=!0}}]);