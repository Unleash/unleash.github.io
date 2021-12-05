"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5020],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,m=d["".concat(i,".").concat(c)]||d[c]||h[c]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7659:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],s={id:"unleash-proxy",title:"Unleash Proxy"},i=void 0,p={unversionedId:"sdks/unleash-proxy",id:"sdks/unleash-proxy",isDocsHomePage:!1,title:"Unleash Proxy",description:"The unleash-proxy is compatible with all Unleash Enterprise versions and Unleash Open-Source v4. You should reach out to support@getunleash.io if you want the Unleash Team to host the Unleash Proxy for you.",source:"@site/docs/sdks/unleash-proxy.md",sourceDirName:"sdks",slug:"/sdks/unleash-proxy",permalink:"/sdks/unleash-proxy",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/sdks/unleash-proxy.md",tags:[],version:"current",frontMatter:{id:"unleash-proxy",title:"Unleash Proxy"},sidebar:"documentation",previous:{title:"PHP SDK",permalink:"/sdks/php_sdk"},next:{title:"Android Proxy SDK",permalink:"/sdks/android_proxy_sdk"}},u=[{value:"How to Run the Unleash Proxy",id:"how-to-run-the-unleash-proxy",children:[],level:2},{value:"Unleash Proxy API",id:"unleash-proxy-api",children:[{value:"Payload",id:"payload",children:[{value:"Toggle data",id:"toggle-data",children:[],level:4}],level:3}],level:2},{value:"We care about Privacy!",id:"we-care-about-privacy",children:[],level:2},{value:"How to connect to the Proxy?",id:"how-to-connect-to-the-proxy",children:[],level:2}],h={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The unleash-proxy is compatible with all Unleash Enterprise versions and Unleash Open-Source v4. You should reach out to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:support@getunleash.io"},"support@getunleash.io"))," if you want the Unleash Team to host the Unleash Proxy for you.")),(0,o.kt)("p",null,"A lot of our users wanted to use feature toggles in their single-page and native applications. To solve this in a performant and privacy concerned way we built The Unleash Proxy"),(0,o.kt)("p",null,"The Unleash Proxy sits between the Unleash API and the application. It provides a simple and super-fast API, as it has all the data it needs available in memory."),(0,o.kt)("p",null,"The proxy solves three important aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Performance")," \u2013 The proxy will cache all toggles in memory, and will be running on the edge, close to your end-users. A single instance will be able to handle thousands of request/sec, and you can scale it easily by adding additional instances."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security")," \u2013 The proxy evaluates the feature flags for the user on the server-side, and exposes results for feature flags that are enabled for a specific user (flags not enabled for that specific user are ",(0,o.kt)("em",{parentName:"li"},"not")," exposed)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Privacy")," \u2013 If you run the proxy yourself (we can host it as well though) we will not see your end users. This means that you still have full control of your end-users, the way it should be!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Unleash Proxy",src:a(2186).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The Unleash Proxy uses the Unleash SDK and exposes a simple API"),". The Proxy will synchronize with the Unleash API in the background and provide a simple HTTP API for clients."),(0,o.kt)("h2",{id:"how-to-run-the-unleash-proxy"},"How to Run the Unleash Proxy"),(0,o.kt)("p",null,"The Unleash Proxy is Open Source and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy"},"available on github"),". You can either run it as a docker image or as part of a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy#run-with-nodejs"},"node.js express application"),"."),(0,o.kt)("p",null,"The easies way to run Unleash is via Docker. We have published a ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/unleashorg/unleash-proxy"},"docker image on docker hub"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Pull")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull unleashorg/unleash-proxy\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Start")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n   -e UNLEASH_PROXY_SECRETS=some-secret \\\n   -e UNLEASH_URL='https://app.unleash-hosted.com/demo/api/' \\\n   -e UNLEASH_API_TOKEN=56907a2fa53c1d16101d509a10b78e36190b0f918d9f122d \\\n   -p 3000:3000 \\\n   unleashorg/unleash-proxy\n")),(0,o.kt)("p",null,"You should see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Unleash-proxy is listening on port 3000!\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: verify")),(0,o.kt)("p",null,"In order to verify the proxy you can use curl and see that you get a few evaluated feature toggles back:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://localhost:3000/proxy -H "Authorization: some-secret"\n')),(0,o.kt)("p",null,"The output is of the form described in the ",(0,o.kt)("a",{parentName:"p",href:"#payload"},"payload section"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Health endpoint")),(0,o.kt)("p",null,"The proxy will try to synchronize with the Unleash API at startup, until it has successfully done that the proxy will return ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP 503 - Not Read?")," for all request. You can use the health endpoint to validate that the proxy is ready to recieve requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:3000/proxy/health -I\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'HTTP/1.1 200 OK\nAccess-Control-Allow-Origin: *\nAccess-Control-Expose-Headers: ETag\nContent-Type: text/html; charset=utf-8\nContent-Length: 2\nETag: W/"2-eoX0dku9ba8cNUXvu/DyeabcC+s"\nDate: Fri, 04 Jun 2021 10:38:27 GMT\nConnection: keep-alive\nKeep-Alive: timeout=5\n')),(0,o.kt)("p",null,"There are multiple more configuration options available. You find all ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy#available-options"},"available options on github"),"."),(0,o.kt)("h2",{id:"unleash-proxy-api"},"Unleash Proxy API"),(0,o.kt)("p",null,"The Unleash Proxy has a very simple API. It takes the ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/unleash_context"},"Unleash Context")," as input and will return the feature toggles relevant for that specific context."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Unleash Proxy",src:a(9231).Z}),"."),(0,o.kt)("h3",{id:"payload"},"Payload"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy")," endpoint returns information about toggles enabled for the current user. The payload is a JSON object with a ",(0,o.kt)("inlineCode",{parentName:"p"},"toggles")," property, which contains a list of toggles."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "toggles": [\n    {\n      "name": "demo",\n      "enabled": true,\n      "variant": {\n        "name": "disabled",\n        "enabled": false\n      }\n    },\n    {\n      "name": "demoApp.step1",\n      "enabled": true,\n      "variant": {\n        "name": "disabled",\n        "enabled": false\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"toggle-data"},"Toggle data"),(0,o.kt)("p",null,"The data for a toggle without ",(0,o.kt)("a",{parentName:"p",href:"/advanced/toggle_variants"},"variants")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "basic-toggle",\n  "enabled": true,\n  "variant": {\n    "name": "disabled",\n    "enabled": false\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"name")),": the name of the feature."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"enabled")),": whether the toggle is enabled or not. Will always be ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"variant")),": describes whether the toggle has variants and, if it does, what variant is active for this user. If a toggle doesn't have any variants, it will always be ",(0,o.kt)("inlineCode",{parentName:"li"},'{"name": "disabled", "enabled": true}'),".")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Unleash uses a fallback variant called "disabled" to indicate that a toggle has no variants. However, you are free to create a variant called "disabled" yourself. In that case you can tell them apart by checking the variant\'s ',(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property: if the toggle has no variants, ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," will be ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),'. If the toggle is the "disabled" variant that you created, it will have ',(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."))),(0,o.kt)("p",null,"If a toggle has variants, then the variant object can also contain an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," property. The ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," will contain data about the variant's payload: what type it is, and what the content is. To learn more about variants and their payloads, check ",(0,o.kt)("a",{parentName:"p",href:"/advanced/toggle_variants"},"the feature toggle variants documentation"),"."),(0,o.kt)("p",null,"Variant toggles without payloads look will have their name listed and the ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "toggle-with-variants",\n  "enabled": true,\n  "variant": {\n    "name": "simple",\n    "enabled": true\n  }\n}\n\n')),(0,o.kt)("p",null,"If the variant has a payload, the optional ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," property will list the payload's type and it's content in a stringified form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "toggle-with-variants",\n  "enabled": true,\n  "variant": {\n    "name": "with-payload-string",\n    "payload": {\n      "type": "string",\n      "value": "this string is the variant\'s payload"\n    },\n    "enabled": true\n  }\n}\n')),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"variant")," property:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"name")),": is the name of the variant, as shown in the Admin UI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"enabled")),": indicates whether the variant is enabled or not. If the toggle has variants, this is always ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"payload"))," (optional): Only present if the variant has a payload. Describes the payload's type and content.")),(0,o.kt)("p",null,"If the variant has a payload, the ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," object contains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"type")),": the type of the variant's payload"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"value")),": the value of the variant's payload")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," will always be the payload's content as a string, escaped as necessary. For instance, a variant with a JSON payload would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "toggle-with-variants",\n  "enabled": true,\n  "variant": {\n    "name": "with-payload-json",\n    "payload": {\n      "type": "json",\n      "value": "{\\"description\\": \\"this is data delivered as a json string\\"}"\n    },\n    "enabled": true\n  }\n}\n')),(0,o.kt)("h2",{id:"we-care-about-privacy"},"We care about Privacy!"),(0,o.kt)("p",null,"The Unleash Proxy is important because you should not expose your entire set of toggle configurations to your end users. Single page apps work in the context of a specific user. The proxy allows you to only provide data that relates to that one user: ",(0,o.kt)("em",{parentName:"p"},"The proxy will only return the evaluated toggles (with variants) that should be enabled for that specific user in that specific context.")),(0,o.kt)("p",null,"Most of our customers prefer to run The Unleash Proxy themselves. PS! We actually prefer this as we don\u2019t want to see your users. Running it is pretty simple, it is either a small Node.js process you start or a docker image you use. (We can of course host the proxy for you also.)"),(0,o.kt)("h2",{id:"how-to-connect-to-the-proxy"},"How to connect to the Proxy?"),(0,o.kt)("p",null,"The Unleash Proxy takes the heavy lifting of evaluating toggles and only returns enabled toggles and their values to the client. This means that you would get away with a simple http-client in many common use-cases."),(0,o.kt)("p",null,"However in some settings you would like a bit more logic around it to make it as fast as possible, and keep up to date with changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-javascript"},"JavaScript Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-react"},"React Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/android_proxy_sdk"},"Android Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-ios"},"iOS Proxy SDK"))),(0,o.kt)("p",null,"The proxy is also ideal fit for serverless functions such as AWS Lambda. In that scenario the proxy can run on a small container near the serverless function, preferably in the same VPC, giving the lambda extremely fast access to feature flags, at a predictable cost."))}d.isMDXComponent=!0},9231:function(e,t,a){t.Z=a.p+"assets/images/The-Unleash-Proxy-API-bcb2385b1ee46b9b4b283f297ca97eb8.png"},2186:function(e,t,a){t.Z=a.p+"assets/images/The-unleash-proxy-df05d1a9b1c7beb796416a16d1b9f951.png"}}]);