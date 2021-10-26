"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5020],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,y=c["".concat(i,".").concat(d)]||c[d]||h[d]||o;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7659:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],s={id:"unleash-proxy",title:"Unleash Proxy"},i=void 0,u={unversionedId:"sdks/unleash-proxy",id:"sdks/unleash-proxy",isDocsHomePage:!1,title:"Unleash Proxy",description:"The unleash-proxy is compatible with all Unleash Enterprise versions and Unleash Open-Source v4. You should reach out to support@getunleash.io if you want the Unleash Team to host the Unleash Proxy for you.",source:"@site/docs/sdks/unleash-proxy.md",sourceDirName:"sdks",slug:"/sdks/unleash-proxy",permalink:"/sdks/unleash-proxy",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/sdks/unleash-proxy.md",tags:[],version:"current",frontMatter:{id:"unleash-proxy",title:"Unleash Proxy"},sidebar:"documentation",previous:{title:"PHP SDK",permalink:"/sdks/php_sdk"},next:{title:"Android Proxy SDK",permalink:"/sdks/android_proxy_sdk"}},p=[{value:"How to Run the Unleash Proxy",id:"how-to-run-the-unleash-proxy",children:[],level:3},{value:"Unleash Proxy API",id:"unleash-proxy-api",children:[],level:3},{value:"We care about Privacy!",id:"we-care-about-privacy",children:[],level:3},{value:"How to connect to the Proxy?",id:"how-to-connect-to-the-proxy",children:[],level:3}],h={toc:p};function c(e){var t=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The unleash-proxy is compatible with all Unleash Enterprise versions and Unleash Open-Source v4. You should reach out to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:support@getunleash.io"},"support@getunleash.io"))," if you want the Unleash Team to host the Unleash Proxy for you.")),(0,o.kt)("p",null,"A lot of our users wanted to use feature toggles in their single-page and native applications. To solve this in a preformat and privacy concerned way we built The Unleash Proxy"),(0,o.kt)("p",null,"The Unleash Proxy sits between the Unleash API and the application. It provides a simple and super-fast API, as it has all the data it needs available in memory."),(0,o.kt)("p",null,"The proxy solves three important aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Performance")," \u2013 The proxy will cache all toggles in memory, and will be running on the edge, close to your end-users. A single instance will be able to handle thousands of request/sec, and you can scale it easily by adding additional instances."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security")," \u2013 The proxy evaluates the feature flags for the user on the server-side, and only exposes the results of enabled feature flags for a specific user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Privacy")," \u2013 If you run the proxy yourself (we can host it as well though) we will not see your end users. This means that you still have full control of your end-users, the way it should be!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Unleash Proxy",src:n(2186).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The Unleash Proxy uses the Unleash SDK and exposes a simple API"),". The Proxy will synchronize with the Unleash API in the background and provide a simple HTTP API for clients."),(0,o.kt)("h3",{id:"how-to-run-the-unleash-proxy"},"How to Run the Unleash Proxy"),(0,o.kt)("p",null,"The Unleash Proxy is Open Source and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy"},"available on github"),". You can either run it as a docker image or as part of a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy#run-with-nodejs"},"node.js express application"),"."),(0,o.kt)("p",null,"The easies way to run Unleash is via Docker. We have published a ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/unleashorg/unleash-proxy"},"docker image on docker hub"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Pull")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull unleashorg/unleash-proxy\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Start")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n   -e UNLEASH_PROXY_SECRETS=some-secret \\\n   -e UNLEASH_URL='https://app.unleash-hosted.com/demo/api/' \\\n   -e UNLEASH_API_TOKEN=56907a2fa53c1d16101d509a10b78e36190b0f918d9f122d \\\n   -p 3000:3000 \\\n   unleashorg/unleash-proxy\n")),(0,o.kt)("p",null,"You should see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Unleash-proxy is listening on port 3000!\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: verify")),(0,o.kt)("p",null,"In order to verify the proxy you can use curl and see that you get a few evaluated feature toggles back:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://localhost:3000/proxy -H "Authorization: some-secret"\n')),(0,o.kt)("p",null,"Expected output would be something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "toggles": [\n    {\n      "name": "demo",\n      "enabled": true,\n      "variant": {\n        "name": "disabled",\n        "enabled": false\n      }\n    },\n    {\n      "name": "demoApp.step1",\n      "enabled": true,\n      "variant": {\n        "name": "disabled",\n        "enabled": false\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Health endpoint")),(0,o.kt)("p",null,"The proxy will try to synchronize with the Unleash API at startup, until it has successfully done that the proxy will return ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP 503 - Not Read?")," for all request. You can use the health endpoint to validate that the proxy is ready to recieve requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:3000/proxy/health -I\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'HTTP/1.1 200 OK\nAccess-Control-Allow-Origin: *\nAccess-Control-Expose-Headers: ETag\nContent-Type: text/html; charset=utf-8\nContent-Length: 2\nETag: W/"2-eoX0dku9ba8cNUXvu/DyeabcC+s"\nDate: Fri, 04 Jun 2021 10:38:27 GMT\nConnection: keep-alive\nKeep-Alive: timeout=5\n')),(0,o.kt)("p",null,"There are multiple more configuration options available. You find all ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy#available-options"},"available options on github"),"."),(0,o.kt)("h3",{id:"unleash-proxy-api"},"Unleash Proxy API"),(0,o.kt)("p",null,"The Unleash Proxy has a very simple API. It takes the ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/unleash_context"},"Unleash Context")," as input and will return the feature toggles relevant for that specific context."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Unleash Proxy",src:n(9231).Z}),"."),(0,o.kt)("h3",{id:"we-care-about-privacy"},"We care about Privacy!"),(0,o.kt)("p",null,"The Unleash Proxy is important because you should not expose your entire toggle configurations to your end users! Single page apps works in context of a specific user. The proxy will only return the evaluated toggles (with variants) that should be enabled for those specific users in that specific context."),(0,o.kt)("p",null,"Most of our customers prefer to run The Unleash Proxy themselves. PS! We actually prefer this as we don\u2019t want to see your users. Running it is pretty simple, it is either a small Node.js process you start or a docker image you use. (We can of course host the proxy for you also.)"),(0,o.kt)("h3",{id:"how-to-connect-to-the-proxy"},"How to connect to the Proxy?"),(0,o.kt)("p",null,"The Unleash Proxy takes the heavy lifting of evaluating toggles and only returns enabled toggles and their values to the client. This means that you would get away with a simple http-client in many common use-cases."),(0,o.kt)("p",null,"However in some settings you would like a bit more logic around it to make it as fast as possible, and keep up to date with changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-javascript"},"JavaScript Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-react"},"React Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/android_proxy_sdk"},"Android Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-ios"},"iOS Proxy SDK"))),(0,o.kt)("p",null,"The proxy is also ideal fit for serverless functions such as AWS Lambda. In that scenario the proxy can run on a small container near the serverless function, preferably in the same VPC, giving the lambda extremely fast access to feature flags, at a predictable cost."))}c.isMDXComponent=!0},9231:function(e,t,n){t.Z=n.p+"assets/images/The-Unleash-Proxy-API-bcb2385b1ee46b9b4b283f297ca97eb8.png"},2186:function(e,t,n){t.Z=n.p+"assets/images/The-unleash-proxy-df05d1a9b1c7beb796416a16d1b9f951.png"}}]);