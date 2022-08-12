"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5020],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,k=u["".concat(s,".").concat(h)]||u[h]||m[h]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"unleash-proxy",title:"Unleash Proxy"},i=void 0,o={unversionedId:"sdks/unleash-proxy",id:"sdks/unleash-proxy",title:"Unleash Proxy",description:"The unleash-proxy is compatible with all Unleash Enterprise versions and Unleash Open-Source v4. You should reach out to support@getunleash.io if you want the Unleash Team to host the Unleash Proxy for you.",source:"@site/docs/sdks/unleash-proxy.md",sourceDirName:"sdks",slug:"/sdks/unleash-proxy",permalink:"/sdks/unleash-proxy",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/unleash-proxy.md",tags:[],version:"current",frontMatter:{id:"unleash-proxy",title:"Unleash Proxy"},sidebar:"documentation",previous:{title:"Unleash Context",permalink:"/user_guide/unleash_context"},next:{title:"Topic guides",permalink:"/topics"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Privacy and hosting options",id:"privacy-and-hosting",level:2},{value:"Health endpoint",id:"health-endpoint",level:2},{value:"Custom activation strategies",id:"custom-activation-strategies",level:2},{value:"Custom activation strategy files format",id:"custom-activation-strategy-files-format",level:3},{value:"Unleash Proxy API",id:"unleash-proxy-api",level:2},{value:"OpenAPI integration and API documentation",id:"openapi",level:3},{value:"Payload",id:"payload",level:3},{value:"Toggle data",id:"toggle-data",level:4},{value:"How to connect to the Proxy?",id:"how-to-connect-to-the-proxy",level:2}],d={toc:p};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The unleash-proxy is compatible with all Unleash Enterprise versions and Unleash Open-Source v4. You should reach out to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:support@getunleash.io"},"support@getunleash.io"))," if you want the Unleash Team to host the Unleash Proxy for you.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Looking for how to run the Unleash proxy? Check out the ",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-run-the-unleash-proxy"},(0,r.kt)("em",{parentName:"a"},"How to run the Unleash Proxy")," guide"),"!")),(0,r.kt)("p",null,"A lot of our users wanted to use feature toggles in their single-page and native applications. To solve this in a performant and privacy concerned way we built The Unleash Proxy"),(0,r.kt)("p",null,"The Unleash Proxy sits between the Unleash API and the application. It provides a simple and super-fast API, as it has all the data it needs available in memory."),(0,r.kt)("p",null,"The proxy solves three important aspects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performance")," \u2013 The proxy will cache all toggles in memory, and will be running on the edge, close to your end-users. A single instance will be able to handle thousands of request/sec, and you can scale it easily by adding additional instances."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Security")," \u2013 The proxy evaluates the feature flags for the user on the server-side, and exposes results for feature flags that are enabled for a specific user (flags not enabled for that specific user are ",(0,r.kt)("em",{parentName:"li"},"not")," exposed)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Privacy")," \u2013 If you run the proxy yourself (we can host it as well though) we will not see your end users. This means that you still have full control of your end-users, the way it should be!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Unleash Proxy",src:a(37613).Z,width:"830",height:"262"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Unleash Proxy uses the Unleash SDK and exposes a simple API"),". The Proxy will synchronize with the Unleash API in the background and provide a simple HTTP API for clients."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You ",(0,r.kt)("strong",{parentName:"p"},"must configure")," these three variables for the proxy to start successfully:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"unleashUrl")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"UNLEASH_URL"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"unleashApiToken")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"UNLEASH_API_TOKEN"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"clientKeys")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"UNLEASH_PROXY_CLIENT_KEYS"))))),(0,r.kt)("p",null,"The Proxy has a large number of configuration options that you can use to adjust it to your specific use case. The table below lists all the available options."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clientKeys")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_PROXY_CLIENT_KEYS")),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("a",{parentName:"td",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"client keys")," that the proxy should accept. When querying the proxy, Proxy SDKs must set the request's ",(0,r.kt)("em",{parentName:"td"},"client keys header")," to one of these values. The default client keys header is ",(0,r.kt)("inlineCode",{parentName:"td"},"Authorization"),". When using an environment variable to set the proxy secrets, the value should be a comma-separated list of strings, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"secret-one,secret-two"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clientKeysHeaderName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CLIENT_KEY_HEADER_NAME")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"authorization"')),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the HTTP header to use for client keys. Incoming requests must set the value of this header to one of the Proxy's ",(0,r.kt)("inlineCode",{parentName:"td"},"clientKeys")," to be authorized successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customStrategies")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_CUSTOM_STRATEGIES_FILE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this option to inject implementation of custom activation strategies. If you are using ",(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_CUSTOM_STRATEGIES_FILE"),": provide a valid path to a JavaScript file which exports an array of custom activation strategies.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enableOAS")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ENABLE_OAS")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," to expose the proxy's OpenAPI spec at ",(0,r.kt)("inlineCode",{parentName:"td"},"/docs/openapi.json")," and an interactive Swagger interface at ",(0,r.kt)("inlineCode",{parentName:"td"},"/docs/openapi"),". Read more in the ",(0,r.kt)("a",{parentName:"td",href:"#openapi"},"OpenAPI section"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"environment")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_ENVIRONMENT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"If set this will be the ",(0,r.kt)("inlineCode",{parentName:"td"},"environment")," used by the proxy in the Unleash Context. It will not be possible for proxy SDKs to override the environment if set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logLevel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOG_LEVEL ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"warn"')),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to set ",(0,r.kt)("inlineCode",{parentName:"td"},"logLevel"),". Supported options: ",(0,r.kt)("inlineCode",{parentName:"td"},'"debug"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"info"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"warn"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"error"')," and ",(0,r.kt)("inlineCode",{parentName:"td"},'"fatal"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logger")),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SimpleLogger")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Register a custom logger.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metricsInterval")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_METRICS_INTERVAL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30000")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"How often the proxy should send usage metrics back to Unleash, defined in ms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namePrefix")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_NAME_PREFIX")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"If set, the Proxy will only fetch toggles whose name start with the provided prefix.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"projectName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_PROJECT_NAME")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"If set, the Proxy will only fetch toggles belonging to the project with this ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxyBasePath")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PROXY_BASE_PATH")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'The base path to run the proxy from. "/proxy" will be added at the end. For instance, if ',(0,r.kt)("inlineCode",{parentName:"td"},"proxyBasePath")," is ",(0,r.kt)("inlineCode",{parentName:"td"},'"base/path"'),", the proxy will run at ",(0,r.kt)("inlineCode",{parentName:"td"},"/base/path/proxy"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxyPort")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PORT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3000")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The port to run the proxy on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxySecrets")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_PROXY_SECRETS")),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated alias for ",(0,r.kt)("inlineCode",{parentName:"td"},"clientKeys"),". Please use ",(0,r.kt)("inlineCode",{parentName:"td"},"clientKeys")," instead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"refreshInterval")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_FETCH_INTERVAL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5000")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"How often the proxy should query Unleash for updates, defined in ms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tags")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_TAGS")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"If set, the proxy will only fetch feature toggles with these ",(0,r.kt)("a",{parentName:"td",href:"/advanced/tags"},"tags"),". The format should be ",(0,r.kt)("inlineCode",{parentName:"td"},"tagName:tagValue,tagName2:tagValue2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"trustProxy")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRUST_PROXY ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, the Unleash Proxy will know that it is itself sitting behind a proxy and that the ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Forwarded-*")," header fields (which otherwise may be easily spoofed) can be trusted. The proxy will automatically enrich the IP address in the Unleash Context. Can be ",(0,r.kt)("inlineCode",{parentName:"td"},"true/false")," (trust all proxies) or a string (trust only given IP/CIDR (e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"'127.0.0.1'"),")). If it is a string, it can also be a list of comma separated values (e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"'127.0.0.1,192.168.1.1/24'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unleashApiToken")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_API_TOKEN")),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"/reference/api-tokens-and-client-keys#client-tokens"},"client API token")," for connecting to Unleash API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unleashAppName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_APP_NAME")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"unleash-proxy" ')),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The application name to use when registering with Unleash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unleashInstanceId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_INSTANCE_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"auto-generated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique(-ish) identifier for your instance. Typically a hostname, pod id or something similar. Unleash uses this to separate metrics from the client SDKs with the same ",(0,r.kt)("inlineCode",{parentName:"td"},"unleashAppName"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unleashUrl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNLEASH_URL")),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The API URL of the Unleash instance you want to connect to.")))),(0,r.kt)("h2",{id:"privacy-and-hosting"},"Privacy and hosting options"),(0,r.kt)("div",{id:"we-care-about-privacy"}),(0,r.kt)("p",null,"The Unleash Proxy is important because you should not expose your entire set of toggle configurations to your end users. Single page apps work in the context of a specific user. The proxy allows you to only provide data that relates to that one user: ",(0,r.kt)("em",{parentName:"p"},"The proxy will only return the evaluated toggles (with variants) that should be enabled for that specific user in that specific context.")),(0,r.kt)("p",null,"Most of our customers prefer to run the Unleash proxy themselves. We actually prefer this as we don\u2019t want to see your users. Running it is pretty simple, it is either a small Node.js process you start or a docker image you use. (We can of course host the proxy for you also.)"),(0,r.kt)("p",null,"For more information on the various hosting options and their tradeoffs, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/topics/proxy-hosting"},"proxy hosting strategies topic document"),"."),(0,r.kt)("h2",{id:"health-endpoint"},"Health endpoint"),(0,r.kt)("p",null,"The proxy will try to synchronize with the Unleash API at startup, until it has successfully done that the proxy will return ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP 503 - Not Read?")," for all request. You can use the health endpoint to validate that the proxy is ready to recieve requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:3000/proxy/health -I\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'HTTP/1.1 200 OK\nAccess-Control-Allow-Origin: *\nAccess-Control-Expose-Headers: ETag\nContent-Type: text/html; charset=utf-8\nContent-Length: 2\nETag: W/"2-eoX0dku9ba8cNUXvu/DyeabcC+s"\nDate: Fri, 04 Jun 2021 10:38:27 GMT\nConnection: keep-alive\nKeep-Alive: timeout=5\n')),(0,r.kt)("h2",{id:"custom-activation-strategies"},"Custom activation strategies"),(0,r.kt)("p",null,"The Unleash Proxy can load ",(0,r.kt)("a",{parentName:"p",href:"/advanced/custom_activation_strategy"},"custom activation strategies")," for front-end client SDKs (",(0,r.kt)("a",{parentName:"p",href:"/sdks/android_proxy_sdk"},"Android"),", ",(0,r.kt)("a",{parentName:"p",href:"/sdks/proxy-javascript"},"JavaScript"),", ",(0,r.kt)("a",{parentName:"p",href:"/sdks/proxy-react"},"React"),", ",(0,r.kt)("a",{parentName:"p",href:"/sdks/proxy-ios"},"iOS"),"). For a step-by-step guide, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-use-custom-strategies#step-3-b"},(0,r.kt)("em",{parentName:"a"},"how to use custom strategies")," guide"),"."),(0,r.kt)("p",null,"To load custom strategies, use either of these two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"customStrategies"))," option: use this if you're running the Unleash Proxy via Node directly."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"UNLEASH_CUSTOM_STRATEGIES_FILE"))," environment variable: use this if you're running the proxy as a container.")),(0,r.kt)("p",null,"Both options take a list of file paths to JavaScript files that export custom strategy implementations."),(0,r.kt)("h3",{id:"custom-activation-strategy-files-format"},"Custom activation strategy files format"),(0,r.kt)("p",null,"Each strategy file must export a list of instantiated strategies. A file can export as many strategies as you'd like."),(0,r.kt)("p",null,"Here's an example file that exports two custom strategies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Strategy } = require('unleash-client');\n\nclass MyCustomStrategy extends Strategy {\n  // ... strategy implementation\n}\n\nclass MyOtherCustomStrategy extends Strategy {\n  // ... strategy implementation\n}\n\n// export strategies\nmodule.exports = [new MyCustomStrategy(), new MyOtherCustomStrategy()];\n")),(0,r.kt)("p",null,"Refer the ",(0,r.kt)("a",{parentName:"p",href:"/advanced/custom_activation_strategy#implementation"},"custom activation strategy documentation")," for more details on how to implement a custom activation strategy."),(0,r.kt)("h2",{id:"unleash-proxy-api"},"Unleash Proxy API"),(0,r.kt)("p",null,"The Unleash Proxy has a very simple API. It takes the ",(0,r.kt)("a",{parentName:"p",href:"../user_guide/unleash_context"},"Unleash Context")," as input and will return the feature toggles relevant for that specific context."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Unleash Proxy",src:a(56506).Z,width:"782",height:"460"})),(0,r.kt)("h3",{id:"openapi"},"OpenAPI integration and API documentation"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Availability The OpenAPI integration is available in versions 0.9 and later of the Unleash proxy.")),(0,r.kt)("p",null,"The proxy can optionally expose a runtime-generated OpenAPI JSON spec and a corresponding OpenAPI UI for its API. The OpenAPI UI page is an interactive page where you can discover and test the API endpoints the proxy exposes. The JSON spec can be used to generate an OpenAPI client with OpenAPI tooling such as the ",(0,r.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/"},"OpenAPI generator"),"."),(0,r.kt)("p",null,"To enable the JSON spec and UI, set ",(0,r.kt)("inlineCode",{parentName:"p"},"ENABLE_OAS")," (environment variable) or ",(0,r.kt)("inlineCode",{parentName:"p"},"enableOAS")," (in-code configuration variable) to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"The spec and UI can then be found at ",(0,r.kt)("inlineCode",{parentName:"p"},"<base url>/docs/openapi.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<base url>/docs/openapi")," respectively."),(0,r.kt)("h3",{id:"payload"},"Payload"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," endpoint returns information about toggles enabled for the current user. The payload is a JSON object with a ",(0,r.kt)("inlineCode",{parentName:"p"},"toggles")," property, which contains a list of toggles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "toggles": [\n    {\n      "name": "demo",\n      "enabled": true,\n      "variant": {\n        "name": "disabled",\n        "enabled": false\n      }\n    },\n    {\n      "name": "demoApp.step1",\n      "enabled": true,\n      "variant": {\n        "name": "disabled",\n        "enabled": false\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"toggle-data"},"Toggle data"),(0,r.kt)("p",null,"The data for a toggle without ",(0,r.kt)("a",{parentName:"p",href:"/advanced/toggle_variants"},"variants")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "basic-toggle",\n  "enabled": true,\n  "variant": {\n    "name": "disabled",\n    "enabled": false\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"name")),": the name of the feature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"enabled")),": whether the toggle is enabled or not. Will always be ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"variant")),": describes whether the toggle has variants and, if it does, what variant is active for this user. If a toggle doesn't have any variants, it will always be ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "disabled", "enabled": false}'),".")),(0,r.kt)("admonition",{title:'The "disabled" variant',type:"note"},(0,r.kt)("p",{parentName:"admonition"},'Unleash uses a fallback variant called "disabled" to indicate that a toggle has no variants. However, you are free to create a variant called "disabled" yourself. In that case you can tell them apart by checking the variant\'s ',(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property: if the toggle has no variants, ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),'. If the toggle is the "disabled" variant that you created, it will have ',(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("p",null,"If a toggle has variants, then the variant object can also contain an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," property. The ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," will contain data about the variant's payload: what type it is, and what the content is. To learn more about variants and their payloads, check ",(0,r.kt)("a",{parentName:"p",href:"/advanced/toggle_variants"},"the feature toggle variants documentation"),"."),(0,r.kt)("p",null,"Variant toggles without payloads look will have their name listed and the ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "toggle-with-variants",\n  "enabled": true,\n  "variant": {\n    "name": "simple",\n    "enabled": true\n  }\n}\n')),(0,r.kt)("p",null,"If the variant has a payload, the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," property will list the payload's type and it's content in a stringified form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "toggle-with-variants",\n  "enabled": true,\n  "variant": {\n    "name": "with-payload-string",\n    "payload": {\n      "type": "string",\n      "value": "this string is the variant\'s payload"\n    },\n    "enabled": true\n  }\n}\n')),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"variant")," property:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"name")),": is the name of the variant, as shown in the Admin UI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"enabled")),": indicates whether the variant is enabled or not. If the toggle has variants, this is always ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"payload"))," (optional): Only present if the variant has a payload. Describes the payload's type and content.")),(0,r.kt)("p",null,"If the variant has a payload, the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," object contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"type")),": the type of the variant's payload"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"value")),": the value of the variant's payload")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," will always be the payload's content as a string, escaped as necessary. For instance, a variant with a JSON payload would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "toggle-with-variants",\n  "enabled": true,\n  "variant": {\n    "name": "with-payload-json",\n    "payload": {\n      "type": "json",\n      "value": "{\\"description\\": \\"this is data delivered as a json string\\"}"\n    },\n    "enabled": true\n  }\n}\n')),(0,r.kt)("h2",{id:"how-to-connect-to-the-proxy"},"How to connect to the Proxy?"),(0,r.kt)("p",null,"The Unleash Proxy takes the heavy lifting of evaluating toggles and only returns enabled toggles and their values to the client. This means that you would get away with a simple http-client in many common use-cases."),(0,r.kt)("p",null,"However in some settings you would like a bit more logic around it to make it as fast as possible, and keep up to date with changes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/android_proxy_sdk"},"Android Proxy SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/proxy-ios"},"iOS Proxy SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/proxy-javascript"},"Javascript Proxy SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/proxy-react"},"React Proxy SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/proxy-svelte"},"Svelte Proxy SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks/proxy-vue"},"Vue Proxy SDK"))),(0,r.kt)("p",null,"The proxy is also ideal fit for serverless functions such as AWS Lambda. In that scenario the proxy can run on a small container near the serverless function, preferably in the same VPC, giving the lambda extremely fast access to feature flags, at a predictable cost."))}m.isMDXComponent=!0},56506:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/The-Unleash-Proxy-API-bcb2385b1ee46b9b4b283f297ca97eb8.png"},37613:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/The-unleash-proxy-df05d1a9b1c7beb796416a16d1b9f951.png"}}]);