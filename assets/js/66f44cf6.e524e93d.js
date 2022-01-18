"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1968],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?o.createElement(g,l(l({ref:t},p),{},{components:n})):o.createElement(g,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},630:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],i={id:"android_proxy_sdk",title:"Android Proxy SDK"},s=void 0,d={unversionedId:"sdks/android_proxy_sdk",id:"sdks/android_proxy_sdk",title:"Android Proxy SDK",description:"In this guide we'll explain how to use feature toggles in an Android application using Unleash's Android Proxy SDK and the Unleash Proxy.",source:"@site/docs/sdks/android-proxy.md",sourceDirName:"sdks",slug:"/sdks/android_proxy_sdk",permalink:"/sdks/android_proxy_sdk",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/sdks/android-proxy.md",tags:[],version:"current",frontMatter:{id:"android_proxy_sdk",title:"Android Proxy SDK"},sidebar:"documentation",previous:{title:".NET SDK",permalink:"/sdks/dot_net_sdk"},next:{title:"iOS Proxy SDK",permalink:"/sdks/proxy-ios"}},p=[{value:"How to use the Android Proxy SDK",id:"how-to-use-the-android-proxy-sdk",children:[{value:"Step 1: Install the proxy SDK",id:"step-1-install-the-proxy-sdk",children:[],level:3},{value:"Step 2: Enable internet",id:"step-2-enable-internet",children:[],level:3},{value:"Step 3: Configure Context",id:"step-3-configure-context",children:[],level:3},{value:"Step 4: Configure the Client",id:"step-4-configure-the-client",children:[{value:"Step 4a: Configure client polling proxy",id:"step-4a-configure-client-polling-proxy",children:[],level:4},{value:"Step 4b: Configure client loading toggles from a file",id:"step-4b-configure-client-loading-toggles-from-a-file",children:[],level:4}],level:3},{value:"Step 5: Instantiate the client",id:"step-5-instantiate-the-client",children:[],level:3},{value:"Step 6: Use the feature toggle",id:"step-6-use-the-feature-toggle",children:[],level:3}],level:2},{value:"Updates",id:"updates",children:[],level:2},{value:"KDoc",id:"kdoc",children:[],level:2},{value:"Github",id:"github",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide we'll explain how to use feature toggles in an Android application using Unleash's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-android-proxy-sdk"},"Android Proxy SDK")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy"},"Unleash Proxy"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Android proxy SDK requires the Unleash Proxy to function. You'll need the proxy's URL and a configured proxy secret. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"proxy documentation")," for how to set it up and ",(0,r.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy#configuration-variables"},"how to configure the proxy secrets"),"."))),(0,r.kt)("h2",{id:"how-to-use-the-android-proxy-sdk"},"How to use the Android Proxy SDK"),(0,r.kt)("h3",{id:"step-1-install-the-proxy-sdk"},"Step 1: Install the proxy SDK"),(0,r.kt)("p",null,"First we must add unleash-android-proxy-sdk as a dependency to our project."),(0,r.kt)("p",null,"In gradle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("io.getunleash:unleash-android-proxy-sdk:LATEST_VERSION")\n')),(0,r.kt)("p",null,"In maven"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.getunleash</groupId>\n    <artifactId>unleash-android-proxy-sdk</artifactId>\n    <version>Latest version here</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"step-2-enable-internet"},"Step 2: Enable internet"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NB - Your app will need internet permission in order to reach the proxy. So in your manifest add")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.INTERNET" />\n')),(0,r.kt)("h3",{id:"step-3-configure-context"},"Step 3: Configure Context"),(0,r.kt)("p",null,"Since the proxy works by evaluating all feature toggles server side and returning the evaluated toggles back to the client, we'll need to configure the context to send to the proxy for evaluation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.getunleash.UnleashContext\n\nval myAppContext = UnleashContext.newBuilder()\n    .appName("Your AppName")\n    .userId("However you resolve your userid")\n    .sessionId("However you resolve your session id")\n    .build()\n')),(0,r.kt)("h3",{id:"step-4-configure-the-client"},"Step 4: Configure the Client"),(0,r.kt)("p",null,"To create a client, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnleashConfig.newBuilder")," method. When building a configuration, you'll need to provide it with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proxyUrl"),": the URL your proxy is available at"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientSecret"),": the ",(0,r.kt)("a",{parentName:"li",href:"/sdks/unleash-proxy#configuration-variables"},"proxy secret")," you wish to use"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pollMode"),": how you want to load the toggle status")),(0,r.kt)("p",null,"As of v0.1 the SDK supports an automatic polling with an adjustable poll period or loading the state from disk. Most users will probably want to use the polling client, but it's nice to know that you can instantiate your client without actually needing Internet if you choose loading from File"),(0,r.kt)("h4",{id:"step-4a-configure-client-polling-proxy"},"Step 4a: Configure client polling proxy"),(0,r.kt)("p",null,"Configuring a client with a 60 seconds poll interval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.getunleash.UnleashConfig\nimport io.getunleash.polling.PollingModes\n\nval unleashConfig = UnleashConfig.newBuilder()\n    .proxyUrl("URL to your proxy installation")\n    .clientSecret("yourProxySecret")\n    .pollMode(PollingModes.autoPoll(Duration.ofSeconds(60)) {\n        // This lambda will be called every time polling the server updates the toggle state\n        featuresUpdated()\n    })\n    .build()\n')),(0,r.kt)("h4",{id:"step-4b-configure-client-loading-toggles-from-a-file"},"Step 4b: Configure client loading toggles from a file"),(0,r.kt)("p",null,"If you need to have a known state for your UnleashClient, you can perform a query against the proxy using your HTTP client of choice and save the output as a json file. Then you can tell Unleash to use this file to setup toggle states."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.getunleash.UnleashConfig\nimport io.getunleash.polling.PollingModes\n\nval toggles = File("/tmp/proxyresponse.json")\nval pollingMode = PollingModes.fileMode(toggles)\n\nval unleashConfig = UnleashConfig.newBuilder()\n    .proxyUrl("Doesn\'t matter since we don\'t use it when sent a file")\n    .clientSecret("Doesn\'t matter since we don\'t use it when sent a file")\n    .pollMode(pollingMode)\n    .build()\n')),(0,r.kt)("h3",{id:"step-5-instantiate-the-client"},"Step 5: Instantiate the client"),(0,r.kt)("p",null,"Having created your ",(0,r.kt)("inlineCode",{parentName:"p"},"UnleashContext")," and your ",(0,r.kt)("inlineCode",{parentName:"p"},"UnleashConfig")," you can now instantiate your client. Make sure you only do this once, and pass the instantiated client to classes/functions that need it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import io.getunleash.UnleashClient\n\nval unleashClient = UnleashClient(config = unleashConfig, context = myAppContext)\n")),(0,r.kt)("h3",{id:"step-6-use-the-feature-toggle"},"Step 6: Use the feature toggle"),(0,r.kt)("p",null,"Now that we have initialized the proxy SDK we can start using feature toggles defined in Unleash in our application. To achieve this we have the \u201cisEnabled\u201d method available, which will allow us to check the value of a feature toggle. This method will return true or false based on whether the feature should be enabled or disabled for the current state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'if (unleashClient.isEnabled("AwesomeFeature")) {\n    //do some magic\n} else {\n    //do old boring stuff\n}\n')),(0,r.kt)("h2",{id:"updates"},"Updates"),(0,r.kt)("p",null,"When using the AutoPoll mode you are able to pass in a listener which will get notified everytime our toggles changes, allowing you to recheck your toggles. For an example, see our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-android-proxy-sdk/blob/main/samples/android/app/src/main/java/com/example/unleash/MainActivity.kt"},"android-sample-app")),(0,r.kt)("h2",{id:"kdoc"},"KDoc"),(0,r.kt)("p",null,"KDoc for the api is available at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/unleash-android-proxy-sdk"},"https://docs.getunleash.io/unleash-android-proxy-sdk")),(0,r.kt)("h2",{id:"github"},"Github"),(0,r.kt)("p",null,"Readme for the client and source code is available at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-android-proxy-sdk"},"https://github.com/Unleash/unleash-android-proxy-sdk")))}c.isMDXComponent=!0}}]);