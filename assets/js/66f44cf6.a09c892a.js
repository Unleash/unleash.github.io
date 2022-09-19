"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=a,c=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return n?o.createElement(c,r(r({ref:t},p),{},{components:n})):o.createElement(c,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={id:"android_proxy_sdk",title:"Android Proxy SDK"},r=void 0,l={unversionedId:"sdks/android_proxy_sdk",id:"sdks/android_proxy_sdk",title:"Android Proxy SDK",description:"In this guide we'll explain how to use feature toggles in an Android application using Unleash's Android Proxy SDK and the Unleash Proxy.",source:"@site/docs/sdks/android-proxy.md",sourceDirName:"sdks",slug:"/sdks/android_proxy_sdk",permalink:"/sdks/android_proxy_sdk",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/android-proxy.md",tags:[],version:"current",frontMatter:{id:"android_proxy_sdk",title:"Android Proxy SDK"},sidebar:"documentation",previous:{title:".NET SDK",permalink:"/sdks/dot_net_sdk"},next:{title:"iOS Proxy SDK",permalink:"/sdks/proxy-ios"}},s={},d=[],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this guide we'll explain how to use feature toggles in an Android application using Unleash's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-android-proxy-sdk"},"Android Proxy SDK")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy"},"Unleash Proxy"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The Android proxy SDK requires the Unleash Proxy or ",(0,a.kt)("em",{parentName:"mdxAdmonitionTitle"},"Unleash v4.16 or later"),". Refer to the ",(0,a.kt)("a",{parentName:"mdxAdmonitionTitle",href:"/reference/front-end-api"},"Unleash front-end API documentation")," guide for simple setup. For large-scale, deployments refer to the ",(0,a.kt)("a",{parentName:"mdxAdmonitionTitle",href:"/sdks/unleash-proxy"},"proxy documentation")," for how to set it up and ",(0,a.kt)("a",{parentName:"mdxAdmonitionTitle",href:"/sdks/unleash-proxy#configuration-variables"},"how to configure the proxy secrets"),". :::"),(0,a.kt)("h2",{parentName:"admonition",id:"how-to-use-the-android-proxy-sdk"},"How to use the Android Proxy SDK"),(0,a.kt)("h3",{parentName:"admonition",id:"step-1-install-the-proxy-sdk"},"Step 1: Install the proxy SDK"),(0,a.kt)("p",{parentName:"admonition"},"First we must add unleash-android-proxy-sdk as a dependency to our project."),(0,a.kt)("p",{parentName:"admonition"},"In gradle"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("io.getunleash:unleash-android-proxy-sdk:LATEST_VERSION")\n')),(0,a.kt)("p",{parentName:"admonition"},"In maven"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.getunleash</groupId>\n    <artifactId>unleash-android-proxy-sdk</artifactId>\n    <version>Latest version here</version>\n</dependency>\n")),(0,a.kt)("h3",{parentName:"admonition",id:"step-2-enable-internet"},"Step 2: Enable internet"),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"NB - Your app will need internet permission in order to reach the proxy. So in your manifest add")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.INTERNET" />\n')),(0,a.kt)("h3",{parentName:"admonition",id:"step-3-configure-context"},"Step 3: Configure Context"),(0,a.kt)("p",{parentName:"admonition"},"Since the proxy works by evaluating all feature toggles server side and returning the evaluated toggles back to the client, we'll need to configure the context to send to the proxy for evaluation."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.getunleash.UnleashContext\n\nval myAppContext = UnleashContext.newBuilder()\n    .appName("Your AppName")\n    .userId("However you resolve your userid")\n    .sessionId("However you resolve your session id")\n    .build()\n')),(0,a.kt)("h3",{parentName:"admonition",id:"step-4-configure-the-client"},"Step 4: Configure the Client"),(0,a.kt)("p",{parentName:"admonition"},"To create a client, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnleashConfig.newBuilder")," method. When building a configuration, you'll need to provide it with:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxyUrl"),": the URL your proxy is available at"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientKey"),": the ",(0,a.kt)("a",{parentName:"li",href:"/sdks/unleash-proxy#configuration-variables"},"proxy client key")," you wish to use (this method was known as ",(0,a.kt)("inlineCode",{parentName:"li"},"clientSecret")," prior to version 0.4.0)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pollMode"),": how you want to load the toggle status")),(0,a.kt)("p",{parentName:"admonition"},"As of v0.1 the SDK supports an automatic polling with an adjustable poll period or loading the state from disk. Most users will probably want to use the polling client, but it's nice to know that you can instantiate your client without actually needing Internet if you choose loading from File"),(0,a.kt)("h4",{parentName:"admonition",id:"step-4a-configure-client-polling-proxy"},"Step 4a: Configure client polling proxy"),(0,a.kt)("p",{parentName:"admonition"},"Configuring a client with a 60 seconds poll interval"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.getunleash.UnleashConfig\nimport io.getunleash.polling.PollingModes\n\nval unleashConfig = UnleashConfig.newBuilder()\n    .proxyUrl("URL to your proxy installation")\n    .clientKey("yourProxySecret")\n    .pollMode(PollingModes.autoPoll(Duration.ofSeconds(60)) {\n        // This lambda will be called every time polling the server updates the toggle state\n        featuresUpdated()\n    })\n    .build()\n')),(0,a.kt)("h4",{parentName:"admonition",id:"step-4b-configure-client-loading-toggles-from-a-file"},"Step 4b: Configure client loading toggles from a file"),(0,a.kt)("p",{parentName:"admonition"},"If you need to have a known state for your UnleashClient, you can perform a query against the proxy using your HTTP client of choice and save the output as a json file. Then you can tell Unleash to use this file to setup toggle states."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.getunleash.UnleashConfig\nimport io.getunleash.polling.PollingModes\n\nval toggles = File("/tmp/proxyresponse.json")\nval pollingMode = PollingModes.fileMode(toggles)\n\nval unleashConfig = UnleashConfig.newBuilder()\n    .proxyUrl("Doesn\'t matter since we don\'t use it when sent a file")\n    .clientKey("Doesn\'t matter since we don\'t use it when sent a file")\n    .pollMode(pollingMode)\n    .build()\n')),(0,a.kt)("h3",{parentName:"admonition",id:"step-5-instantiate-the-client"},"Step 5: Instantiate the client"),(0,a.kt)("p",{parentName:"admonition"},"Having created your ",(0,a.kt)("inlineCode",{parentName:"p"},"UnleashContext")," and your ",(0,a.kt)("inlineCode",{parentName:"p"},"UnleashConfig")," you can now instantiate your client. Make sure you only do this once, and pass the instantiated client to classes/functions that need it."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"import io.getunleash.UnleashClient\n\nval unleashClient = UnleashClient(config = unleashConfig, context = myAppContext)\n")),(0,a.kt)("h3",{parentName:"admonition",id:"step-6-use-the-feature-toggle"},"Step 6: Use the feature toggle"),(0,a.kt)("p",{parentName:"admonition"},"Now that we have initialized the proxy SDK we can start using feature toggles defined in Unleash in our application. To achieve this we have the \u201cisEnabled\u201d method available, which will allow us to check the value of a feature toggle. This method will return true or false based on whether the feature should be enabled or disabled for the current state."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'if (unleashClient.isEnabled("AwesomeFeature")) {\n    //do some magic\n} else {\n    //do old boring stuff\n}\n')),(0,a.kt)("h2",{parentName:"admonition",id:"updates"},"Updates"),(0,a.kt)("p",{parentName:"admonition"},"When using the AutoPoll mode you are able to pass in a listener which will get notified everytime our toggles changes, allowing you to recheck your toggles. For an example, see our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-android-proxy-sdk/blob/main/samples/android/app/src/main/java/com/example/unleash/MainActivity.kt"},"android-sample-app")),(0,a.kt)("h2",{parentName:"admonition",id:"kdoc"},"KDoc"),(0,a.kt)("p",{parentName:"admonition"},"KDoc for the api is available at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/unleash-android-proxy-sdk"},"https://docs.getunleash.io/unleash-android-proxy-sdk")),(0,a.kt)("h2",{parentName:"admonition",id:"github"},"Github"),(0,a.kt)("p",{parentName:"admonition"},"Readme for the client and source code is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-android-proxy-sdk"},"https://github.com/Unleash/unleash-android-proxy-sdk"))))}u.isMDXComponent=!0}}]);