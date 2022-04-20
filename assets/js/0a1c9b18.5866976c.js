"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},289:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"dot_net_sdk",title:".NET SDK"},s=void 0,u={unversionedId:"sdks/dot_net_sdk",id:"sdks/dot_net_sdk",title:".NET SDK",description:"In this guide we explain how to use feature toggles in a .NET application using Unleash-hosted. We will be using the open source Unleash .net Client SDK.",source:"@site/docs/sdks/dot_net.md",sourceDirName:"sdks",slug:"/sdks/dot_net_sdk",permalink:"/sdks/dot_net_sdk",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/dot_net.md",tags:[],version:"current",frontMatter:{id:"dot_net_sdk",title:".NET SDK"},sidebar:"documentation",previous:{title:"Ruby SDK",permalink:"/sdks/ruby_sdk"},next:{title:"Android Proxy SDK",permalink:"/sdks/android_proxy_sdk"}},c=[{value:"Step 1: Install client SDK",id:"step-1-install-client-sdk",children:[],level:2},{value:"Step 2: Create a new Unleash Instance",id:"step-2-create-a-new-unleash-instance",children:[],level:2},{value:"Step 3: Use the feature toggle",id:"step-3-use-the-feature-toggle",children:[],level:2},{value:"Step 4: Provide Unleash Context",id:"step-4-provide-unleash-context",children:[],level:2}],h={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide we explain how to use feature toggles in a .NET application using Unleash-hosted. We will be using the open source Unleash ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-dotnet"},".net Client SDK"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You will need your ",(0,o.kt)("inlineCode",{parentName:"p"},"API URL")," and your ",(0,o.kt)("inlineCode",{parentName:"p"},"API token")," in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/api-token"},"Read more"))),(0,o.kt)("h2",{id:"step-1-install-client-sdk"},"Step 1: Install client SDK"),(0,o.kt)("p",null,"First we must add Unleash Client SDK as a dependency to your project. Below is an example of how you would add it via the .NET cli. Please see ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Unleash.Client/"},"NuGet")," for other alternatives."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet add package unleash.client\n")),(0,o.kt)("h2",{id:"step-2-create-a-new-unleash-instance"},"Step 2: Create a new Unleash Instance"),(0,o.kt)("p",null,"Next we must initialize a new instance of the Unleash Client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var settings = new UnleashSettings()\n{\n  AppName = "dot-net-client",\n  Environment = "local",\n  UnleashApi = new Uri("API URL"),\n  CustomHttpHeaders = new Dictionary()\n  {\n    {"Authorization","API token" }\n  }\n};\n\nIUnleash unleash = new DefaultUnleash(settings);\n')),(0,o.kt)("p",null,"In your app you typically just want one instance of Unleash, and inject that where you need it."),(0,o.kt)("p",null,"You should change the URL and the Authorization header (API token) with the correct values for your instance, which you may locate under \u201cInstance admin\u201d in the menu."),(0,o.kt)("h2",{id:"step-3-use-the-feature-toggle"},"Step 3: Use the feature toggle"),(0,o.kt)("p",null,"Now that we have initialized the client SDK we can start using feature toggles defined in Unleash in our application. To achieve this we have the \u201cisEnabled\u201d method available, which will allow us to check the value of a feature toggle. This method will return true or false based on whether the feature should be enabled or disabled for the current request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'if (unleash.IsEnabled("Demo"))\n{\n  //do some magic\n}\nelse\n{\n  //do old boring stuff\n}\n')),(0,o.kt)("p",null,"Pleas note the client SDK will synchronize with the Unleash-hosted API on initialization, and thus it can take a few milliseconds the first time before the client has the correct state. You can use the ",(0,o.kt)("em",{parentName:"p"},"SynchronousInitialization")," option to block the client until it has successfully synced with the server."),(0,o.kt)("p",null,"Read more about the ",(0,o.kt)("a",{parentName:"p",href:"https://www.getunleash.io/blog/our-unique-architecture"},"Unleash architecture")," to learn how it works in more details"),(0,o.kt)("h2",{id:"step-4-provide-unleash-context"},"Step 4: Provide Unleash Context"),(0,o.kt)("p",null,"It is the client SDK that computes whether a feature toggle should be considered enabled or disabled for specific use request. This is the job of the activation strategies, which are implemented in the client SDK."),(0,o.kt)("p",null,"The activation strategies is an implementation of rules based on data, which you provide as part of the Unleash Context."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"a) As argument to the isEnabled call")),(0,o.kt)("p",null,"The simplest way to provide the Unleash Context is as part of the \u201cisEnabled\u201d call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var context = new UnleashContext\n{\n  UserId = "61"\n};\n\nunleash.IsEnabled("someToggle", context);\n')),(0,o.kt)("p",null,"b) Via a UnleashContextProvider"),(0,o.kt)("p",null,"This is a bit more advanced approach, where you configure an unleash-context provider. By doing this, you do not have to rebuild or to pass the unleash-context object to every place you are calling ",(0,o.kt)("inlineCode",{parentName:"p"},"unleash.IsEnabled"),". You can read more, and get ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-dotnet#unleashcontextprovider"},"examples about this option on GitHub"),"."))}p.isMDXComponent=!0}}]);