"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"php_sdk",title:"PHP SDK"},l=void 0,i={unversionedId:"sdks/php_sdk",id:"sdks/php_sdk",title:"PHP SDK",description:"In this guide we explain how to use feature toggles in a PHP application using Unleash-hosted. We will be using the open source Unleash PHP Client SDK.",source:"@site/docs/sdks/php.md",sourceDirName:"sdks",slug:"/sdks/php_sdk",permalink:"/sdks/php_sdk",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/php.md",tags:[],version:"current",frontMatter:{id:"php_sdk",title:"PHP SDK"},sidebar:"documentation",previous:{title:"Node SDK",permalink:"/sdks/node_sdk"},next:{title:"Python SDK",permalink:"/sdks/python_sdk"}},s={},p=[{value:"Step 1: Install the client SDK",id:"step-1-install-the-client-sdk",level:2},{value:"Step 2: Create a new Unleash Instance",id:"step-2-create-a-new-unleash-instance",level:2},{value:"Step 3: Use the feature toggle",id:"step-3-use-the-feature-toggle",level:2},{value:"Step 4: Provide Unleash Context",id:"step-4-provide-unleash-context",level:2}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide we explain how to use feature toggles in a PHP application using Unleash-hosted. We will be using the open source Unleash ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-php"},"PHP Client SDK"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You will need your ",(0,r.kt)("inlineCode",{parentName:"p"},"API URL")," and your ",(0,r.kt)("inlineCode",{parentName:"p"},"API token")," in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. ",(0,r.kt)("a",{parentName:"p",href:"../user_guide/api-token"},"Read more"))),(0,r.kt)("h2",{id:"step-1-install-the-client-sdk"},"Step 1: Install the client SDK"),(0,r.kt)("p",null,"First we must add Unleash Client SDK as a dependency to your project. Below is an example of how to install it via composer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"composer require unleash/client guzzlehttp/guzzle symfony/cache\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: You can install any other PSR-16, PSR-17 and PSR-18 implementations instead of guzzlehttp/guzzle and symfony/cache")),(0,r.kt)("h2",{id:"step-2-create-a-new-unleash-instance"},"Step 2: Create a new Unleash Instance"),(0,r.kt)("p",null,"Next we must initialize a new instance of the Unleash Client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Unleash\\Client\\UnleashBuilder;\n\n$unleash = UnleashBuilder::create()\n    ->withAppName('my.php-app')\n    ->withInstanceId('your-instance-1')\n    ->withAppUrl('API URL')\n    ->withHeader('Authorization', 'API token')\n    ->build();\n")),(0,r.kt)("p",null,"In your app you typically just want one instance of Unleash, and inject that where you need it. You will typically use a dependency injection frameworks to manage this."),(0,r.kt)("p",null,"You should change the URL and the Authorization header (API token) with the correct values for your instance, which you may locate under \u201cInstance admin\u201d in the menu."),(0,r.kt)("h2",{id:"step-3-use-the-feature-toggle"},"Step 3: Use the feature toggle"),(0,r.kt)("p",null,"Now that we have initialized the client SDK we can start using feature toggles defined in Unleash in our application. To achieve this we have the \u201cisEnabled\u201d method available, which will allow us to check the value of a feature toggle. This method will return ",(0,r.kt)("strong",{parentName:"p"},"true")," or ",(0,r.kt)("strong",{parentName:"p"},"false")," based on whether the feature should be enabled or disabled for the current request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n\nif ($unleash->isEnabled("AwesomeFeature")) {\n  //do some magic\n} else {\n  //do old boring stuff\n}\n')),(0,r.kt)("p",null,"Read more about the ",(0,r.kt)("a",{parentName:"p",href:"https://www.unleash-hosted.com/articles/our-unique-architecture"},"Unleash architecture")," to learn how it works in more details"),(0,r.kt)("h2",{id:"step-4-provide-unleash-context"},"Step 4: Provide Unleash Context"),(0,r.kt)("p",null,"It is the client SDK that computes whether a feature toggle should be considered enabled or disabled for specific use request. This is the job of the ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/activation_strategy"},"activation strategies"),", which are implemented in the client SDK."),(0,r.kt)("p",null,"The activation strategies is an implementation of rules based on data, which you provide as part of the Unleash Context."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"a) As argument to the isEnabled call")),(0,r.kt)("p",null,"The simplest way to provide the Unleash Context is as part of the \u201cisEnabled\u201d call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Unleash\\Client\\Configuration\\UnleashContext;\n\n$context = new UnleashContext(\n    currentUserId: 'user@mail.com',\n);\n\n$unleash->isEnabled(\"someToggle\", $context);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"b) Via a UnleashContextProvider")),(0,r.kt)("p",null,"This is a bit more advanced approach, where you configure a unleash-context provider. By doing this you do not have to rebuild or to pass the unleash-context object to every place you are calling ",(0,r.kt)("inlineCode",{parentName:"p"},"$unleash->isEnabled()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Unleash\\Client\\UnleashBuilder;\n\n$contextProvider = new MyAwesomeContextProvider();\n$unleash = UnleashBuilder::create()\n    ->withAppName('my.php-app')\n    ->withInstanceId('your-instance-1')\n    ->withAppUrl('http://unleash.herokuapp.com/api/')\n    ->withContextProvider($contextProvider)\n    ->build();\n\n// Anywhere in the code unleash will get the unleash context from your registered provider.\n$unleash->isEnabled(\"someToggle\");\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can read more complete documentation in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-php"},"Client SDK repository"),".")))}h.isMDXComponent=!0}}]);