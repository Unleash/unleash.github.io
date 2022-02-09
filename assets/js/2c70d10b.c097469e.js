"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2176],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),l=n(2389),o=n(9548),i=n(6010),s="tabItem_LplD";function u(e){var t,n,l,u=e.lazy,c=e.block,d=e.defaultValue,h=e.values,p=e.groupId,m=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,r.useState)(g),S=N[0],D=N[1],T=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var I=y[p];null!=I&&I!==S&&v.some((function(e){return e.value===I}))&&D(I)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==S&&(x(t),D(a),null!=p&&w(p,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:E,onClick:E},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function c(e){var t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},9460:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return h},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),s=["components"],u={id:"node_sdk",title:"Node SDK"},c=void 0,d={unversionedId:"sdks/node_sdk",id:"sdks/node_sdk",title:"Node SDK",description:"In this guide we explain how to use feature toggles in a Node application using Unleash-hosted. We will be using the open source Unleash Node.js Client SDK.",source:"@site/docs/sdks/node.md",sourceDirName:"sdks",slug:"/sdks/node_sdk",permalink:"/sdks/node_sdk",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/node.md",tags:[],version:"current",frontMatter:{id:"node_sdk",title:"Node SDK"},sidebar:"documentation",previous:{title:"Java SDK",permalink:"/sdks/java_sdk"},next:{title:"PHP SDK",permalink:"/sdks/php_sdk"}},h=[{value:"Step 1: Install the client SDK",id:"step-1-install-the-client-sdk",children:[],level:2},{value:"Step 2: Initialize the client SDK",id:"step-2-initialize-the-client-sdk",children:[],level:2},{value:"Step 3: Use the feature toggle",id:"step-3-use-the-feature-toggle",children:[],level:2},{value:"Step 4: Provide the Unleash-context",id:"step-4-provide-the-unleash-context",children:[],level:2}],p={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this guide we explain how to use feature toggles in a Node application using Unleash-hosted. We will be using the open source Unleash ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-node"},"Node.js Client SDK"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You will need your ",(0,l.kt)("inlineCode",{parentName:"p"},"API URL")," and your ",(0,l.kt)("inlineCode",{parentName:"p"},"API token")," in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. ",(0,l.kt)("a",{parentName:"p",href:"../user_guide/api-token"},"Read more"))),(0,l.kt)("h2",{id:"step-1-install-the-client-sdk"},"Step 1: Install the client SDK"),(0,l.kt)("p",null,"First we must install Node.js dependency:"),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install unleash-client\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add unleash-client\n")))),(0,l.kt)("h2",{id:"step-2-initialize-the-client-sdk"},"Step 2: Initialize the client SDK"),(0,l.kt)("p",null,"Next we must initialize the client SDK in the application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const unleash = require('unleash-client');\n\nunleash.initialize({\n  url: 'https://YOUR-API-URL',\n  appName: 'my-node-name',\n  environment: process.env.APP_ENV,\n  customHeaders: { Authorization: 'SOME-SECRET' },\n});\n")),(0,l.kt)("p",null,"The example code above will initialize the client SDK, and connect to the Unleash-hosted demo instance. It also uses the API token for the demo instance. You should change the URL and the Authorization header (API token) with the correct values for your instance, which you may locate under \u201cInstance admin\u201d in the menu."),(0,l.kt)("p",null,"Please also pay attention to the \u201cenvironment\u201d option. Setting this will allow you to use ",(0,l.kt)("a",{parentName:"p",href:"/advanced/strategy_constraints"},"strategy constraints")," which enables different roll-out strategies per environment."),(0,l.kt)("h2",{id:"step-3-use-the-feature-toggle"},"Step 3: Use the feature toggle"),(0,l.kt)("p",null,"Now that we have initialized the client SDK in our application we can start using feature toggles defined in Unleash in our application. To achieve this we have the \u201cisEnabled\u201d method available, which will allow us to check the value of a feature toggle. This method will return ",(0,l.kt)("strong",{parentName:"p"},"true")," or ",(0,l.kt)("strong",{parentName:"p"},"false")," based on whether the feature should be enabled or disabled for the current request."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"setInterval(() => {\n  if (unleash.isEnabled('DemoToggle')) {\n    console.log('Toggle enabled');\n  } else {\n    console.log('Toggle disabled');\n  }\n}, 1000);\n")),(0,l.kt)("p",null,"Please note that in the above example we put the isEnabled-evaluation inside the setInterval method. This is required in the small example to make sure that the feature toggle is not evaluated, and application exits, before the client SDK have been able to synchronize with the Unleash-hosted API. State is kept in memory by the client SDK (and synchronizes with the Unleash-hosted API in the background). This is done to prefer performance over update speed. You can read more about the ",(0,l.kt)("a",{parentName:"p",href:"https://www.unleash-hosted.com/articles/our-unique-architecture"},"Unleash architecture"),"."),(0,l.kt)("p",null,"It can also be nice to notice that if you use an undefined feature toggle the Unleash SDK will return false instead of crashing your application. The SDK will also report metrics back to Unleash-hosted on feature toggle usage, which makes it ","_","possible to spot toggles not yet defined. And this is a very neat way to help you debug if something does not work as expected."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'Note that you can also wait until the Unleash SDK has fully syncrhonized similar to familiar "on-ready" hooks in other APIs. See ',(0,l.kt)("a",{parentName:"em",href:"https://github.com/Unleash/unleash-client-node#block-until-unleash-sdk-has-synchronized"},"block until Unleashed is synchronized")," for how to do this.")),(0,l.kt)("h2",{id:"step-4-provide-the-unleash-context"},"Step 4: Provide the Unleash-context"),(0,l.kt)("p",null,"It is the client SDK that computes whether a feature toggle should be considered enabled or disabled for a specific request. This is the job of the activation strategies, which are implemented in the client SDK."),(0,l.kt)("p",null,"An activation strategy is an implementation of rules based on data, which you provide as part of the Unleash Context."),(0,l.kt)("p",null,"You provide the Unleash context as part of the second argument to the isEnabled call:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const context = {\n  userId: '123',\n  sessionId: '123123-123-123',\n  remoteAddress: '127.0.0.1',\n};\n\nconst enabled = isEnabled('app.demo', context);\n")))}m.isMDXComponent=!0}}]);