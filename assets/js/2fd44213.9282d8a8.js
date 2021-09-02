"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6696],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1500:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"proxy-ios",title:"iOS Proxy SDK"},s=void 0,u={unversionedId:"sdks/proxy-ios",id:"sdks/proxy-ios",isDocsHomePage:!1,title:"iOS Proxy SDK",description:"In this guide we explain how to use feature toggles in Swift applications via The Unleash Proxy. You can also checkout the source code for the iOS Proxy SDK.",source:"@site/docs/sdks/proxy-ios.md",sourceDirName:"sdks",slug:"/sdks/proxy-ios",permalink:"/sdks/proxy-ios",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/sdks/proxy-ios.md",tags:[],version:"current",frontMatter:{id:"proxy-ios",title:"iOS Proxy SDK"},sidebar:"documentation",previous:{title:"React proxy SDK",permalink:"/sdks/proxy-react"},next:{title:"Community SDKs \u2665",permalink:"/sdks/community"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Update context",id:"update-context",children:[]}]},{value:"Events",id:"events",children:[]}],p={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this guide we explain how to use feature toggles in Swift applications via ",(0,i.kt)("a",{parentName:"p",href:"./unleash-proxy"},"The Unleash Proxy"),". You can also checkout the source code for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy-client-swift"},"iOS Proxy SDK"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The unleash-proxy-client-swift makes it easy for native applications and other swift platforms to connect to the unleash proxy. The proxy will evaluate a feature toggle for a given ",(0,i.kt)("a",{parentName:"p",href:"/user_guide/unleash_context"},"context")," and return a list of feature flags relevant for the provided context."),(0,i.kt)("p",null,"The unleash-proxy-client-swift will then cache these toggles in a map in memory and refresh the configuration at a configurable interval, making queries against the toggle configuration extremely fast."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MacOS: 12.15"),(0,i.kt)("li",{parentName:"ul"},"iOS: 13")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Follow the following steps in order to install the unleash-proxy-client-swift:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In your Xcode project go to File -> Swift Packages -> Add Package Dependency"),(0,i.kt)("li",{parentName:"ol"},"Supply the link to this repository"),(0,i.kt)("li",{parentName:"ol"},"Set the appropriate package constraints (typically up to next major version)"),(0,i.kt)("li",{parentName:"ol"},"Let Xcode find and install the necessary packages")),(0,i.kt)("p",null,"Once you're done, you should see SwiftEventBus and UnleashProxyClientSwift listed as dependencies in the file explorer of your project."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"In order to get started you need to import and instantiate the unleash client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'import SwiftUI\n// Import UnleashProxyClientSwift\nimport UnleashProxyClientSwift\n\n// Setup Unleash in the context where it makes most sense\n\nvar unleash = UnleashProxyClientSwift.UnleashClient(\n    unleashUrl: "https://app.unleash-hosted.com/hosted/api/proxy",\n    clientKey: "PROXY_KEY",\n    refreshInterval: 15,\n    appName: "test",\n    environment: "dev")\n\nunleash.start()\n')),(0,i.kt)("p",null,"In the example above we import the UnleashProxyClientSwift and instantiate the client. You need to provide the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"unleashUrl: the full url to your proxy instance ","[String]"),(0,i.kt)("li",{parentName:"ul"},"clientKey: the proxy key ","[String]"),(0,i.kt)("li",{parentName:"ul"},"refreshInterval: the polling interval in seconds ","[Int]"),(0,i.kt)("li",{parentName:"ul"},"appName: the application name identifier ","[String]"),(0,i.kt)("li",{parentName:"ul"},"environment: the application env ","[String]")),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"unleash.start()")," will make the first request against the proxy and retrieve the feature toggle configuration, and set up the polling interval in the background."),(0,i.kt)("p",null,"NOTE: While waiting to boot up the configuration may not be available, which means that asking for a feature toggle may result in a false if the configuration has not loaded. In the event that you need to be certain that the configuration is loaded we emit an event you can subscribe to, once the configuration is loaded. See more in the Events section."),(0,i.kt)("p",null,"Once the configuration is loaded you can ask against the cache for a given feature toggle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'if unleash.isEnabled(name: "ios") {\n    // do something\n} else {\n   // do something else\n}\n')),(0,i.kt)("p",null,"You can also set up ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/docs/advanced/toggle_variants"},"variants")," and use them in a similar fashion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'var variant = unleash.getVariant(name: "ios")\nif variant.enabled {\n    // do something\n} else {\n   // do something else\n}\n')),(0,i.kt)("h3",{id:"update-context"},"Update context"),(0,i.kt)("p",null,"In order to update the context you can use the following method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'var context: [String: String] = [:]\ncontext["userId"] = "c3b155b0-5ebe-4a20-8386-e0cab160051e"\nunleash.updateContext(context: context)\n')),(0,i.kt)("p",null,"This will stop and start the polling interval in order to renew polling with new context values."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"The proxy client emits two different events you can subscribe to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"ready"'),(0,i.kt)("li",{parentName:"ul"},'"update"')),(0,i.kt)("p",null,"Usage them in the following manner:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'func handleReady() {\n    // do this when unleash is ready\n}\n\nunleash.subscribe(name: "ready", callback: handleReady)\n\nfunc handleUpdate() {\n    // do this when unleash is updated\n}\n\nunleash.subscribe(name: "update", callback: handleUpdate)\n')),(0,i.kt)("p",null,"The ready event is fired once the client has received it's first set of feature toggles and cached it in memory. Every subsequent event will be an update event that is triggered if there is a change in the feature toggle configuration."))}h.isMDXComponent=!0}}]);