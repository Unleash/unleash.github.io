"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4842],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(n),d=l,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5864:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=["components"],o={id:"go_sdk",title:"GO SDK"},s=void 0,u={unversionedId:"sdks/go_sdk",id:"sdks/go_sdk",title:"GO SDK",description:"You will need your API URL and your API token in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. Read more",source:"@site/docs/sdks/go.md",sourceDirName:"sdks",slug:"/sdks/go_sdk",permalink:"/sdks/go_sdk",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/go.md",tags:[],version:"current",frontMatter:{id:"go_sdk",title:"GO SDK"},sidebar:"documentation",previous:{title:"Introduction",permalink:"/sdks"},next:{title:"Java SDK",permalink:"/sdks/java_sdk"}},c=[{value:"1. Install unleash-client-go",id:"1-install-unleash-client-go",children:[],level:3},{value:"2. Initialize unleash",id:"2-initialize-unleash",children:[],level:3},{value:"3. Use unleash",id:"3-use-unleash",children:[],level:3},{value:"4. Stop unleash",id:"4-stop-unleash",children:[],level:3},{value:"Built in activation strategies",id:"built-in-activation-strategies",children:[],level:3},{value:"Unleash context",id:"unleash-context",children:[],level:3}],p={toc:c};function h(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You will need your ",(0,i.kt)("inlineCode",{parentName:"p"},"API URL")," and your ",(0,i.kt)("inlineCode",{parentName:"p"},"API token")," in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. ",(0,i.kt)("a",{parentName:"p",href:"../user_guide/api-token"},"Read more"))),(0,i.kt)("h3",{id:"1-install-unleash-client-go"},"1. Install unleash-client-go"),(0,i.kt)("p",null,"To install the latest version of the client use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/Unleash/unleash-client-go/v3\n")),(0,i.kt)("p",null,"If you are still using Unleash Server v2.x.x, then you should use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/Unleash/unleash-client-go\n")),(0,i.kt)("h3",{id:"2-initialize-unleash"},"2. Initialize unleash"),(0,i.kt)("p",null,"The easiest way to get started with Unleash is to initialize it early in your application code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/Unleash/unleash-client-go/v3"\n)\n\nfunc init() {\n    unleash.Initialize(\n        unleash.WithListener(&unleash.DebugListener{}),\n        unleash.WithAppName("my-application"),\n        unleash.WithUrl("http://unleash.herokuapp.com/api/"),\n        unleash.WithCustomHeaders(http.Header{"Authorization": {"<API token>"}}),\n    )\n}\n')),(0,i.kt)("h3",{id:"3-use-unleash"},"3. Use unleash"),(0,i.kt)("p",null,"After you have initialized the unleash-client you can easily check if a feature toggle is enabled or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'unleash.IsEnabled("app.ToggleX")\n')),(0,i.kt)("h3",{id:"4-stop-unleash"},"4. Stop unleash"),(0,i.kt)("p",null,"To shut down the client (turn off the polling) you can simply call the destroy-method. This is typically not required."),(0,i.kt)("p",null,"unleash.Close()"),(0,i.kt)("h3",{id:"built-in-activation-strategies"},"Built in activation strategies"),(0,i.kt)("p",null,"The Go client comes with implementations for the built-in activation strategies provided by unleash."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DefaultStrategy"),(0,i.kt)("li",{parentName:"ul"},"UserIdStrategy"),(0,i.kt)("li",{parentName:"ul"},"FlexibleRolloutStrategy"),(0,i.kt)("li",{parentName:"ul"},"GradualRolloutUserIdStrategy"),(0,i.kt)("li",{parentName:"ul"},"GradualRolloutSessionIdStrategy"),(0,i.kt)("li",{parentName:"ul"},"GradualRolloutRandomStrategy"),(0,i.kt)("li",{parentName:"ul"},"RemoteAddressStrategy"),(0,i.kt)("li",{parentName:"ul"},"ApplicationHostnameStrategy")),(0,i.kt)("p",null,"Read more about the strategies in ",(0,i.kt)("a",{parentName:"p",href:"../user_guide/activation_strategy"},"the activation strategies document"),"."),(0,i.kt)("h3",{id:"unleash-context"},"Unleash context"),(0,i.kt)("p",null,"In order to use some of the common activation strategies you must provide a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/blob/master/docs/unleash-context.md"},"unleash-context"),". This client SDK allows you to send in the unleash context as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'ctx := context.Context{\n    UserId: "123",\n    SessionId: "some-session-id",\n    RemoteAddress: "127.0.0.1",\n}\n\nunleash.IsEnabled("someToggle", unleash.WithContext(ctx))\n')),(0,i.kt)("p",null,"Read more at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-go"},"github.com/Unleash/unleash-client-go")))}h.isMDXComponent=!0}}]);