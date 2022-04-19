"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5027],{1645:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"java_sdk",title:"Java SDK"},s=void 0,u={unversionedId:"sdks/java_sdk",id:"sdks/java_sdk",title:"Java SDK",description:"In this guide we explain how to use feature toggles in a Java application using Unleash-hosted. We will be using the open source Unleash Java Client SDK.",source:"@site/docs/sdks/java.md",sourceDirName:"sdks",slug:"/sdks/java_sdk",permalink:"/sdks/java_sdk",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/java.md",tags:[],version:"current",frontMatter:{id:"java_sdk",title:"Java SDK"},sidebar:"documentation",previous:{title:"GO SDK",permalink:"/sdks/go_sdk"},next:{title:"Node SDK",permalink:"/sdks/node_sdk"}},c=[{value:"Step 1: Install the client SDK",id:"step-1-install-the-client-sdk",children:[],level:2},{value:"Step 2: Create a new Unleash Instance",id:"step-2-create-a-new-unleash-instance",children:[],level:2},{value:"Step 3: Use the feature toggle",id:"step-3-use-the-feature-toggle",children:[],level:2},{value:"Step 4: Provide Unleash Context",id:"step-4-provide-unleash-context",children:[],level:2}],h={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide we explain how to use feature toggles in a Java application using Unleash-hosted. We will be using the open source Unleash ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-java"},"Java Client SDK"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You will need your ",(0,o.kt)("inlineCode",{parentName:"p"},"API URL")," and your ",(0,o.kt)("inlineCode",{parentName:"p"},"API token")," in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/api-token"},"Read more"))),(0,o.kt)("h2",{id:"step-1-install-the-client-sdk"},"Step 1: Install the client SDK"),(0,o.kt)("p",null,"First we must add Unleash Client SDK as a dependency to your project. Below is an example of how you would add it to your pom.xml in Java:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.getunleash</groupId>\n    <artifactId>unleash-client-java</artifactId>\n    <version>Latest version here</version>\n</dependency>\n")),(0,o.kt)("h2",{id:"step-2-create-a-new-unleash-instance"},"Step 2: Create a new Unleash Instance"),(0,o.kt)("p",null,"Next we must initialize a new instance of the Unleash Client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'UnleashConfig unleashConfig = UnleashConfig.builder()\n        .appName("my.java-app")\n        .instanceId("your-instance-1")\n        .environment(System.getenv("APP_ENV"))\n        .unleashAPI("API URL")\n        .customHttpHeader("Authorization", "API token")\n        .build();\n\nUnleash unleash = new DefaultUnleash(config);\n')),(0,o.kt)("p",null,"In your app you typically just want one instance of Unleash, and inject that where you need it. You will typically use a dependency injection frameworks such as Spring or Guice to manage this."),(0,o.kt)("p",null,"You should change the URL and the Authorization header (API token) with the correct values for your instance, which you may locate under \u201cInstance admin\u201d in the menu."),(0,o.kt)("h2",{id:"step-3-use-the-feature-toggle"},"Step 3: Use the feature toggle"),(0,o.kt)("p",null,"Now that we have initialized the client SDK we can start using feature toggles defined in Unleash in our application. To achieve this we have the \u201cisEnabled\u201d method available, which will allow us to check the value of a feature toggle. This method will return ",(0,o.kt)("strong",{parentName:"p"},"true")," or ",(0,o.kt)("strong",{parentName:"p"},"false")," based on whether the feature should be enabled or disabled for the current request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'if(unleash.isEnabled("AwesomeFeature")) {\n  //do some magic\n} else {\n  //do old boring stuff\n}\n')),(0,o.kt)("p",null,"Pleas note the client SDK will synchronize with the Unleash-hosted API on initialization, and thus it can take a few milliseconds the first time before the client has the correct state. You can use the ",(0,o.kt)("em",{parentName:"p"},"synchronousFetchOnInitialisation")," option to block the client until it has successfully synced with the server."),(0,o.kt)("p",null,"Read more about the ",(0,o.kt)("a",{parentName:"p",href:"https://www.unleash-hosted.com/articles/our-unique-architecture"},"Unleash architecture")," to learn how it works in more details"),(0,o.kt)("h2",{id:"step-4-provide-unleash-context"},"Step 4: Provide Unleash Context"),(0,o.kt)("p",null,"It is the client SDK that computes whether a feature toggle should be considered enabled or disabled for specific use request. This is the job of the ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/activation_strategy"},"activation strategies"),", which are implemented in the client SDK."),(0,o.kt)("p",null,"The activation strategies is an implementation of rules based on data, which you provide as part of the Unleash Context."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"a) As argument to the isEnabled call")),(0,o.kt)("p",null,"The simplest way to provide the Unleash Context is as part of the \u201cisEnabled\u201d call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'UnleashContext context = UnleashContext.builder()\n  .userId("user@mail.com").build();\n\nunleash.isEnabled("someToggle", context);\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"b) Via a UnleashContextProvider")),(0,o.kt)("p",null,"This is a bit more advanced approach, where you configure a unleash-context provider. By doing this you do not have to rebuild or to pass the unleash-context object to every place you are calling ",(0,o.kt)("inlineCode",{parentName:"p"},"unleash.isEnabled"),"."),(0,o.kt)("p",null,"The provider typically binds the context to the same thread as the request. If you are using Spring the UnleashContextProvider will typically be a \u2018request scoped\u2019 bean."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'UnleashContextProvider contextProvider = new MyAwesomeContextProvider();\nUnleashConfig config = new UnleashConfig.Builder()\n            .appName("java-test")\n            .instanceId("instance x")\n            .unleashAPI("http://unleash.herokuapp.com/api/")\n            .unleashContextProvider(contextProvider)\n            .build();\n\nUnleash unleash = new DefaultUnleash(config);\n\n// Anywhere in the code unleash will get the unleash context from your registered provider.\nunleash.isEnabled("someToggle");\n')))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);