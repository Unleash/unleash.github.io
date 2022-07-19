"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,g=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={id:"quickstart",title:"Quickstart"},i=void 0,l={unversionedId:"user_guide/quickstart",id:"user_guide/quickstart",title:"Quickstart",description:"In this section we will attempt to guide you in order to get started with Unleash easily. There are multiple options to get started with Unleash, browse the headings to find the method that works best for you.",source:"@site/docs/user_guide/quickstart.md",sourceDirName:"user_guide",slug:"/user_guide/quickstart",permalink:"/user_guide/quickstart",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/user_guide/quickstart.md",tags:[],version:"current",frontMatter:{id:"quickstart",title:"Quickstart"},sidebar:"documentation",previous:{title:"Important Concepts",permalink:"/user_guide/important-concepts"},next:{title:"How-to guides",permalink:"/how-to"}},s={},u=[{value:"I just want to get started creating toggles without much setup",id:"i-just-want-to-get-started-creating-toggles-without-much-setup",level:2},{value:"I want to test toggles in a client side environment",id:"i-want-to-test-toggles-in-a-client-side-environment",level:3},{value:"Create your first toggle",id:"create-your-first-toggle",level:4},{value:"Connecting to the Unleash proxy from your app",id:"connecting-to-the-unleash-proxy-from-your-app",level:4},{value:"I want to test toggles in a backend environment",id:"i-want-to-test-toggles-in-a-backend-environment",level:3},{value:"Create your first toggle",id:"create-your-first-toggle-1",level:4},{value:"Connecting to the Unleash instance from your app",id:"connecting-to-the-unleash-instance-from-your-app",level:4},{value:"I want to setup my own instance for testing purposes",id:"i-want-to-setup-my-own-instance-for-testing-purposes",level:2},{value:"Deploy a free version of Unleash to Heroku",id:"deploy-a-free-version-of-unleash-to-heroku",level:3},{value:"Deploy a paid version of Unleash to DigitalOcean",id:"deploy-a-paid-version-of-unleash-to-digitalocean",level:3},{value:"Accessing your new instance",id:"accessing-your-new-instance",level:3},{value:"Create your first toggle",id:"create-your-first-toggle-2",level:3},{value:"Connect your SDK",id:"connect-your-sdk",level:3},{value:"I want to run Unleash locally",id:"i-want-to-run-unleash-locally",level:2},{value:"Run Unleash with Docker",id:"run-unleash-with-docker",level:3},{value:"Accessing your new instance",id:"accessing-your-new-instance-1",level:3},{value:"Run Unleash and the Unleash proxy with Docker",id:"run-unleash-and-the-unleash-proxy-with-docker",level:3},{value:"Create your first toggle",id:"create-your-first-toggle-3",level:3},{value:"Connect your SDK",id:"connect-your-sdk-1",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section we will attempt to guide you in order to get started with Unleash easily. There are multiple options to get started with Unleash, browse the headings to find the method that works best for you."),(0,o.kt)("h2",{id:"i-just-want-to-get-started-creating-toggles-without-much-setup"},"I just want to get started creating toggles without much setup"),(0,o.kt)("p",null,"Usually, you'll need to set up an Unleash instance in order to work with Unleash. However, for testing purposes we have set up a demo instance that you can use in order to test out different use-cases before setting up your own instance. You can find the demo instance admin panel here: ",(0,o.kt)("a",{parentName:"p",href:"https://app.unleash-hosted.com/demo/"},"https://app.unleash-hosted.com/demo/")),(0,o.kt)("p",null,"NOTE: This is a demo instance set up with the Enterprise version. Some of the functionality may be enterprise specific, but everything we cover here is also available in open source."),(0,o.kt)("h3",{id:"i-want-to-test-toggles-in-a-client-side-environment"},"I want to test toggles in a client side environment"),(0,o.kt)("p",null,"In order to use feature toggles on the client side you need to connect through ",(0,o.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"the Unleash proxy"),". The Unleash proxy will provide a security and performance layer between your client application and the Unleash instance. For now, you can use the proxy we have set up on the demo instance."),(0,o.kt)("h4",{id:"create-your-first-toggle"},"Create your first toggle"),(0,o.kt)("p",null,"In order to create a toggle through the UI, ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/create_feature_toggle"},"you can follow this guide"),". Once you have created your feature toggle, you are ready to connect your application using an SDK."),(0,o.kt)("h4",{id:"connecting-to-the-unleash-proxy-from-your-app"},"Connecting to the Unleash proxy from your app"),(0,o.kt)("p",null,"Connection details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Api URL: https://app.unleash-hosted.com/demo/api/proxy\nSecret key: proxy-123\n")),(0,o.kt)("p",null,"Now you can open your application code and connect through one of the proxy SDKs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/android_proxy_sdk"},"Android Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-ios"},"iOS Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-javascript"},"Javascript Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-react"},"React Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-svelte"},"Svelte Proxy SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-vue"},"Vue Proxy SDK"))),(0,o.kt)("p",null,"Here is a connection example using the JavaScript Proxy SDK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { UnleashClient } from 'unleash-proxy-client';\n\nconst unleash = new UnleashClient({\n  url: 'https://app.unleash-hosted.com/demo/api/proxy',\n  clientKey: 'proxy-123',\n  appName: 'my-webapp',\n});\n\nunleash.on('synchronized', () => {\n  if (unleash.isEnabled('proxy.demo')) {\n    // do something\n  }\n});\n\n// Used to set the context fields, shared with the Unleash Proxy\nunleash.updateContext({ userId: '1233' });\n\n// Start the background polling\nunleash.start();\n")),(0,o.kt)("p",null,"Now you are ready to use the feature toggle you created in your client side application, using the appropriate proxy SDK."),(0,o.kt)("h3",{id:"i-want-to-test-toggles-in-a-backend-environment"},"I want to test toggles in a backend environment"),(0,o.kt)("h4",{id:"create-your-first-toggle-1"},"Create your first toggle"),(0,o.kt)("p",null,"In order to create a toggle through the UI, ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/create_feature_toggle"},"you can follow this guide"),". Once you have created your feature toggle, you are ready to connect your application using an SDK."),(0,o.kt)("h4",{id:"connecting-to-the-unleash-instance-from-your-app"},"Connecting to the Unleash instance from your app"),(0,o.kt)("p",null,"Connection details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Api URL: https://app.unleash-hosted.com/demo/api/\nSecret key: 56907a2fa53c1d16101d509a10b78e36190b0f918d9f122d\n")),(0,o.kt)("p",null,"Curl command test credentials and retrieve feature toggles:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl https://app.unleash-hosted.com/demo/api/client/features \\\n-H "Authorization: 56907a2fa53c1d16101d509a10b78e36190b0f918d9f122d";\n')),(0,o.kt)("p",null,"Now you can open up your application code and create a connection to Unleash using one of our ",(0,o.kt)("a",{parentName:"p",href:"/sdks"},"SDKs"),". Here's an example using the NodeJS SDK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { initialize } = require('unleash-client');\nconst unleash = initialize({\n  url: 'https://app.unleash-hosted.com/demo/api/',\n  appName: 'my-app-name',\n  instanceId: 'my-unique-instance-id',\n  customHeaders: {\n    Authorization: '56907a2fa53c1d16101d509a10b78e36190b0f918d9f122d',\n  },\n});\n\nunleash.on('synchronized', () => {\n  // Unleash is ready to serve updated feature toggles.\n\n  // Check a feature flag\n  const isEnabled = unleash.isEnabled('some-toggle');\n\n  // Check the variant\n  const variant = unleash.getVariant('app.ToggleY');\n});\n")),(0,o.kt)("p",null,"Now you can fetch the feature toggle you created and try turning it on / off in your code."),(0,o.kt)("h2",{id:"i-want-to-setup-my-own-instance-for-testing-purposes"},"I want to setup my own instance for testing purposes"),(0,o.kt)("p",null,"If you want to set up your own instance for testing purposes you can easily do so by using one of our premade setup kits for Heroku or DigitalOcean."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Heroku instance setup is FREE, and includes a DB to save your state but it will eventually go to sleep when not used. The DigitalOcean setup utilises droplets and will cost you around $10/month to run, but in turn it will not go to sleep. NOTE: If you use the DigitalOcean link below and are a new user, you will receive $100 in FREE credits.")),(0,o.kt)("h3",{id:"deploy-a-free-version-of-unleash-to-heroku"},"Deploy a free version of Unleash to Heroku"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.heroku.com/deploy/?template=https://github.com/Unleash/unleash"},(0,o.kt)("img",{parentName:"a",src:"https://www.herokucdn.com/deploy/button.png",alt:"Deploy to Heroku"}))),(0,o.kt)("h3",{id:"deploy-a-paid-version-of-unleash-to-digitalocean"},"Deploy a paid version of Unleash to DigitalOcean"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You'll receive $100 in free credits if you are a new DigitalOcean user using this link.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.digitalocean.com/apps/new?repo=https://github.com/Unleash/unleash/tree/main&refcode=0e1d75187044"},(0,o.kt)("img",{parentName:"a",src:"https://www.deploytodo.com/do-btn-blue.svg",alt:"Deploy to DigitalOcean"}))),(0,o.kt)("h3",{id:"accessing-your-new-instance"},"Accessing your new instance"),(0,o.kt)("p",null,"Once you have set up the new instance, click the URL provided by either Heroku or DigitalOcean and you'll be taken to the application login screen."),(0,o.kt)("p",null,"Input the following credentials to log in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"username: admin\npassword: unleash4all\n")),(0,o.kt)("h3",{id:"create-your-first-toggle-2"},"Create your first toggle"),(0,o.kt)("p",null,"In order to create a toggle through the UI, ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/create_feature_toggle"},"you can follow this guide"),". Once you have created your feature toggle, you are ready to connect your application using an SDK."),(0,o.kt)("p",null,"If you'd like to create your feature toggles with code, you can hit the create feature endpoint with the following command:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CRUD operations require an admin API key. For security reasons we have split the admin and client API into separate APIs. You can view how to create API keys in the next section of this guide. Make sure you create client keys for use in SDKs and restrict Admin api key usage.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl"},'curl -H "Content-Type: application/json" \\\n     -H "Authorization: MY-ADMIN-API-KEY" \\\n     -X POST \\\n     -d \'{\n  "name": "my-unique-feature-name",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\' \\\nhttp://CHANGEME/api/admin/features\n')),(0,o.kt)("h3",{id:"connect-your-sdk"},"Connect your SDK"),(0,o.kt)("p",null,'Next, find the navigation, open up the Admin panel and find the API Access tab. Click the "Add new api key" button and create a client key. This key can be used to connect to the instance with our ',(0,o.kt)("a",{parentName:"p",href:"/sdks"},"SDKs"),"."),(0,o.kt)("p",null,"You can find more ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"information about API keys here"),"."),(0,o.kt)("p",null,"Now that you have your API key created, you have what you need to connect to the SDK (NodeJS example):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { initialize } = require('unleash-client');\nconst unleash = initialize({\n  url: 'https://your.heroku.instance.com/api/',\n  appName: 'my-app-name',\n  instanceId: 'my-unique-instance-id',\n  customHeaders: {\n    Authorization: 'YOUR_API_KEY_HERE',\n  },\n});\n\nunleash.on('synchronized', () => {\n  // Unleash is ready to serve updated feature toggles.\n\n  // Check a feature flag\n  const isEnabled = unleash.isEnabled('some-toggle');\n\n  // Check the variant\n  const variant = unleash.getVariant('app.ToggleY');\n});\n")),(0,o.kt)("h2",{id:"i-want-to-run-unleash-locally"},"I want to run Unleash locally"),(0,o.kt)("h3",{id:"run-unleash-with-docker"},"Run Unleash with Docker"),(0,o.kt)("p",null,"The easiest way to run unleash locally is using ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"docker"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Each container that runs in your local Docker instance must have a unique name. If you've run these commands before, you can either start the containers again (",(0,o.kt)("inlineCode",{parentName:"p"},"docker start ${CONTAINER_NAME}"),") or remove them (",(0,o.kt)("inlineCode",{parentName:"p"},"docker rm ${CONTAINER_NAME}"),") and run the commands again.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a network by running ",(0,o.kt)("inlineCode",{parentName:"li"},"docker network create unleash")),(0,o.kt)("li",{parentName:"ol"},"Start a postgres database:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run \\\n  -e POSTGRES_USER=unleash_user \\\n  -e POSTGRES_PASSWORD=some_password \\\n  -e POSTGRES_DB=unleash \\\n  --network unleash \\\n  --name postgres \\\n  postgres\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Start Unleash via docker:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run \\\n  -p 4242:4242 \\\n  -e DATABASE_HOST=postgres \\\n  -e DATABASE_NAME=unleash \\\n  -e DATABASE_USERNAME=unleash_user \\\n  -e DATABASE_PASSWORD=some_password \\\n  -e DATABASE_SSL=false \\\n  --network unleash \\\n  --name unleash \\\n  --pull=always unleashorg/unleash-server\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/deploy/getting_started"},"Click here to see all options to get started locally.")),(0,o.kt)("h3",{id:"accessing-your-new-instance-1"},"Accessing your new instance"),(0,o.kt)("p",null,"Once you have the local instance running on localhost, input the following credentials to log in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"username: admin\npassword: unleash4all\n")),(0,o.kt)("h3",{id:"run-unleash-and-the-unleash-proxy-with-docker"},"Run Unleash and the Unleash proxy with Docker"),(0,o.kt)("p",null,"Follow steps outlined in the ",(0,o.kt)("a",{parentName:"p",href:"#run-unleash-with-docker"},"Run Unleash with Docker")," section to get the Unleash instance up and running. Once you have done that you need to first get an API key from your Unleash instance and then use that API key when starting the Unleash proxy."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get an API key."),(0,o.kt)("p",{parentName:"li"},"To get an API key, access your Unleash instance in a web browser. First, navigate to the API access screen."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"The Unleash UI showing a dropdown menu under the Configure menu entry. The dropdown menu&#39;s API Access option is highlighted and you&#39;re told to navigate there.",src:n(2124).Z,title:"Navigate to the API access page.",width:"1366",height:"411"})),(0,o.kt)("p",{parentName:"li"},"Next, create an API key with these details"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name:")," proxy-key (this can be whatever you want)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"token type:")," client"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"project:")," all"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"environment:")," select your preferred environment (this option is only available in Unleash 4.3 and later)")),(0,o.kt)("p",{parentName:"li"},"Copy the API key to your clipboard. You'll need it in the next step."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Depending on whether you have the environments feature enabled or not, the API key will look a little different. If you don't have environments enabled, it'll just be a 64 character long hexadecimal string (for instance ",(0,o.kt)("inlineCode",{parentName:"p"},"be44368985f7fb3237c584ef86f3d6bdada42ddbd63a019d26955178"),"). If you do have environments enabled, the key will be prefixed with the project and the environment that the key is valid for. It'll use the format ",(0,o.kt)("inlineCode",{parentName:"p"},"<project>:<environment>.<key>"),", e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"demo-app:production.be44368985f7fb3237c584ef86f3d6bdada42ddbd63a019d26955178"),"."),(0,o.kt)("p",{parentName:"admonition"},"Regardless of which format your string uses, do not modify it."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the Unleash proxy"),(0,o.kt)("p",{parentName:"li"},"Start a container with the Unleash proxy by running the following command. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"${API_KEY}")," with the key you created in the following step."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run \\\n  -e UNLEASH_PROXY_SECRETS=some-secret \\\n  -e UNLEASH_URL='http://unleash:4242/api/' \\\n  -e UNLEASH_API_TOKEN='${API_KEY}' \\\n  -p 3000:3000 \\\n  --network unleash \\\n  --name unleash-proxy \\\n  --pull=always unleashorg/unleash-proxy\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Test the proxy"),(0,o.kt)("p",{parentName:"li"},"To make sure the proxy is running successfully, you can test it by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-curl"},'curl http://localhost:3000/proxy -H "Authorization: some-secret"\n')))),(0,o.kt)("h3",{id:"create-your-first-toggle-3"},"Create your first toggle"),(0,o.kt)("p",null,"In order to create a toggle through the UI, ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/create_feature_toggle"},"you can follow this guide"),". Once you have created your feature toggle, you are ready to connect your application using an SDK."),(0,o.kt)("p",null,"If you'd like to create your feature toggles with code, you can hit the create feature endpoint with the following command:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CRUD operations require an admin API key. For security reasons we have split the admin and client API into separate APIs. You can view how to create API keys in the next section of this guide. Make sure you create client keys for use in SDKs and restrict Admin api key usage.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl"},'curl -H "Content-Type: application/json" \\\n     -H "Authorization: MY-ADMIN-API-KEY" \\\n     -X POST \\\n     -d \'{\n  "name": "my-unique-feature-name",\n  "description": "lorem ipsum..",\n  "type": "release",\n  "enabled": false,\n  "stale": false,\n  "strategies": [\n    {\n      "name": "default",\n      "parameters": {}\n    }\n  ],\n  "variants": [],\n  "tags": []\n}\' \\\nhttp://CHANGEME/api/admin/features\n')),(0,o.kt)("h3",{id:"connect-your-sdk-1"},"Connect your SDK"),(0,o.kt)("p",null,'Find the navigation, open up the Admin panel and find the API Access tab. Click the "Add new api key" button and create a client key. This key can be used to connect to the instance with our ',(0,o.kt)("a",{parentName:"p",href:"/sdks"},"SDKs"),"."),(0,o.kt)("p",null,"You can find more ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"information about API keys here"),"."),(0,o.kt)("p",null,"Now that you have your API key created, you have what you need to connect to the SDK (NodeJS example):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { initialize } = require('unleash-client');\nconst unleash = initialize({\n  url: 'https://localhost:4242/api/',\n  appName: 'my-app-name',\n  instanceId: 'my-unique-instance-id',\n  customHeaders: {\n    Authorization: 'YOUR_API_KEY_HERE',\n  },\n});\n\nunleash.on('synchronized', () => {\n  // Unleash is ready to serve updated feature toggles.\n\n  // Check a feature flag\n  const isEnabled = unleash.isEnabled('some-toggle');\n\n  // Check the variant\n  const variant = unleash.getVariant('app.ToggleY');\n});\n")))}c.isMDXComponent=!0},2124:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api_access_navigation-4971ae031bbd186b376438932e202b1b.png"}}]);