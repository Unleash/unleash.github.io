"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4124],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4698:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"index",title:"Introduction",slug:"/sdks"},s=void 0,u={unversionedId:"sdks/index",id:"sdks/index",isDocsHomePage:!1,title:"Introduction",description:"In order to connect your application to Unleash you need to use a client SDK (software developer kit) for your programming language. In addition you will need a API token. The SDK will handle connecting to the Unleash server instance and retrieve feature toggles based upon your configuration. Both open-source and the Unleash enterprise offering utilize the same set of client SDKs.",source:"@site/docs/sdks/index.md",sourceDirName:"sdks",slug:"/sdks",permalink:"/sdks",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/sdks/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction",slug:"/sdks"},sidebar:"documentation",previous:{title:"Technical Debt",permalink:"/user_guide/technical_debt"},next:{title:"Java SDK",permalink:"/sdks/java_sdk"}},p=[{value:"Clients written by awesome enthusiasts:",id:"clients-written-by-awesome-enthusiasts",children:[],level:3}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to connect your application to Unleash you need to use a client SDK (software developer kit) for your programming language. In addition you will need a ",(0,i.kt)("a",{parentName:"p",href:"../user_guide/api-token"},"API token"),". The SDK will handle connecting to the Unleash server instance and retrieve feature toggles based upon your configuration. Both open-source and the Unleash enterprise offering utilize the same set of client SDKs."),(0,i.kt)("p",null,"On this page you will find examples for connecting your application to the demo instance. If you are connecting to your own private instance you will have to remember to replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"API token")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"API url")," given in the examples."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Official Server SDKs"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdks/java_sdk"},"Java SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdks/node_sdk"},"Node.js SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdks/go_sdk"},"Go SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdks/ruby_sdk"},"Ruby SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdks/python_sdk"},"Python SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdks/dot_net_sdk"},".Net SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdks/php_sdk"},"PHP SDK"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Official Frontend Unleash Proxy SDKs:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdks/proxy-javascript"},"Javascript SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdks/android_proxy_sdk"},"Android SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdks/proxy-ios"},"iOS Proxy SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdks/proxy-react"},"React Proxy SDK"))),(0,i.kt)("h3",{id:"clients-written-by-awesome-enthusiasts"},"Clients written by awesome enthusiasts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cognitedata/unleash-client-rust"},"cognitedata/unleash-client-rust")," (Rust)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/silvercar/unleash-client-kotlin"},"silvercar/unleash-client-kotlin")," (Kotlin)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pub.dev/packages/unleash"},"uekoetter.dev/unleash-client-dart")," (Dart)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/minds/unleash-client-php"},"minds/unleash-client-php")," (PHP)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git.stogon.io/Stogon/unleash-bundle/"},"Stogon/unleash-bundle")," (PHP - Symfony)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/afontaine/unleash_ex"},"afontaine/unleash_ex")," (Elixir)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikefrancis/laravel-unleash"},"mikefrancis/laravel-unleash")," (Laravel - PHP)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AppsFlyer/unleash-client-clojure"},"AppsFlyer/clojure-unleash")," (Clojure)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pmb0/nestjs-unleash"},"pmb0/nestjs-unleash")," (NestJS - Node.js)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"...your implementation for your favorite language."))),(0,i.kt)("p",null,"When you get access to your instance \u2013 ",(0,i.kt)("a",{parentName:"p",href:"../user_guide/api-token"},"create a client secret"),", and we will provide you with your API url for your instance."))}d.isMDXComponent=!0}}]);