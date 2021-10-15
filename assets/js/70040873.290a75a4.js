"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5507],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3814:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={id:"proxy-javascript",title:"JavaScript Proxy SDK"},l=void 0,p={unversionedId:"sdks/proxy-javascript",id:"sdks/proxy-javascript",isDocsHomePage:!1,title:"JavaScript Proxy SDK",description:"In this guide we explain how to use feature toggles in a Single Page App via The Unleash Proxy. You can also checkout the source code for the JavaScript Proxy SDK.",source:"@site/docs/sdks/proxy-javascript.md",sourceDirName:"sdks",slug:"/sdks/proxy-javascript",permalink:"/sdks/proxy-javascript",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/sdks/proxy-javascript.md",tags:[],version:"current",frontMatter:{id:"proxy-javascript",title:"JavaScript Proxy SDK"},sidebar:"documentation",previous:{title:"Android Proxy SDK",permalink:"/sdks/android_proxy_sdk"},next:{title:"React proxy SDK",permalink:"/sdks/proxy-react"}},c=[{value:"Introduction",id:"introduction",children:[],level:3}],u={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide we explain how to use feature toggles in a Single Page App via ",(0,o.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"The Unleash Proxy"),". You can also checkout the source code for the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/unleash/unleash-proxy-client-js"},"JavaScript Proxy SDK"),"."),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"For single-page apps we have a tiny proxy-client in JavaScript, without any external dependencies, except from browser APIs. This client will store toggles relevant for the current user in local-storage and synchronize with the Unleash Proxy in the background. This means we can bootstrap the toggles for a specific use the next time the user visits the web-page."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We are looking in to also ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/issues/785"},"supporting react-native")," with this SDK. Reach out if you want to help us validate the implementation.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Install")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install unleash-proxy-client\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Initialize the SDK")),(0,o.kt)("p",null,"You need to have a Unleash-hosted instance, and the proxy need to be enabled. In addition you will need a proxy-specific clientKey in order to connect to the Unleash-hosted Proxy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { UnleashClient } from 'unleash-proxy-client';\n\nconst unleash = new UnleashClient({\n  url: 'https://eu.unleash-hosted.com/hosted/proxy',\n  clientKey: 'your-proxy-key',\n  appName: 'my-webapp',\n});\n\n// Used to set the context fields, shared with the Unleash Proxy\nunleash.updateContext({ userId: '1233' });\n\n// Start the background polling\nunleash.start();\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Check if feature toggle is enabled")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"unleash.isEnabled('proxy.demo');\n")),(0,o.kt)("p",null,"...or get toggle variant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const variant = unleash.getVariant('proxy.demo');\nif (variant.name === 'blue') {\n  // something with variant blue...\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Listen for updates via the EventEmitter")),(0,o.kt)("p",null,"The client is also an event emitter. This means that your code can subscribe to updates from the client. This is a neat way to update a single page app when toggle state updates."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"unleash.on('update', () => {\n  const myToggle = unleash.isEnabled('proxy.demo');\n  //do something useful\n});\n")))}h.isMDXComponent=!0}}]);