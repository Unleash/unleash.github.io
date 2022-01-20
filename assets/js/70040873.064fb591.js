"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5507],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(2389),l=n(9443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),u=n(6010),c="tabItem_vU9c";function p(e){var t,n,o,l=e.lazy,p=e.block,d=e.defaultValue,h=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.lx)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),x=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,a.useState)(b),T=N[0],j=N[1],S=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=x[m];null!=O&&O!==T&&y.some((function(e){return e.value===O}))&&j(O)}var E=function(e){var t=e.currentTarget,n=S.indexOf(t),r=y[n].value;r!==T&&(P(t),j(r),null!=m&&w(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;n=S[r]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;n=S[a]||S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},f)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return S.push(e)},onKeyDown:D,onFocus:E,onClick:E},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},3814:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(6396),i=n(8215),s=["components"],u={id:"proxy-javascript",title:"JavaScript Proxy SDK"},c=void 0,p={unversionedId:"sdks/proxy-javascript",id:"sdks/proxy-javascript",title:"JavaScript Proxy SDK",description:"In this guide we explain how to use feature toggles in a Single Page App via The Unleash Proxy. You can also checkout the source code for the JavaScript Proxy SDK.",source:"@site/docs/sdks/proxy-javascript.md",sourceDirName:"sdks",slug:"/sdks/proxy-javascript",permalink:"/sdks/proxy-javascript",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/proxy-javascript.md",tags:[],version:"current",frontMatter:{id:"proxy-javascript",title:"JavaScript Proxy SDK"},sidebar:"documentation",previous:{title:"iOS Proxy SDK",permalink:"/sdks/proxy-ios"},next:{title:"React proxy SDK",permalink:"/sdks/proxy-react"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"How to use the JavaScript Proxy SDK",id:"how-to-use-the-javascript-proxy-sdk",children:[],level:2}],h={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide we explain how to use feature toggles in a Single Page App via ",(0,o.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"The Unleash Proxy"),". You can also checkout the source code for the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/unleash/unleash-proxy-client-js"},"JavaScript Proxy SDK"),"."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"For single-page apps we have a tiny proxy-client in JavaScript, without any external dependencies, except from browser APIs. This client will store toggles relevant for the current user in local-storage and synchronize with the Unleash Proxy in the background. This means we can bootstrap the toggles for a specific use the next time the user visits the web-page."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We are looking in to also ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/issues/785"},"supporting react-native")," with this SDK. Reach out if you want to help us validate the implementation.")),(0,o.kt)("h2",{id:"how-to-use-the-javascript-proxy-sdk"},"How to use the JavaScript Proxy SDK"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Install")),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install unleash-proxy-client\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add unleash-proxy-client\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Initialize the SDK")),(0,o.kt)("p",null,"You need to have an Unleash-hosted instance, and the proxy needs to be enabled. In addition you will need a proxy-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"clientKey")," in order to connect to the Unleash-hosted Proxy. For more on how to set up client keys, ",(0,o.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy#configuration-variables"},"consult the Unleash Proxy docs"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { UnleashClient } from 'unleash-proxy-client';\n\nconst unleash = new UnleashClient({\n  url: 'https://eu.unleash-hosted.com/hosted/proxy',\n  clientKey: 'your-proxy-key',\n  appName: 'my-webapp',\n});\n\n// Used to set the context fields, shared with the Unleash Proxy\nunleash.updateContext({ userId: '1233' });\n\n// Start the background polling\nunleash.start();\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Check if feature toggle is enabled")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"unleash.isEnabled('proxy.demo');\n")),(0,o.kt)("p",null,"...or get toggle variant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const variant = unleash.getVariant('proxy.demo');\nif (variant.name === 'blue') {\n  // something with variant blue...\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Listen for updates via the EventEmitter")),(0,o.kt)("p",null,"The client is also an event emitter. This means that your code can subscribe to updates from the client. This is a neat way to update a single page app when toggle state updates."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"unleash.on('update', () => {\n  const myToggle = unleash.isEnabled('proxy.demo');\n  //do something useful\n});\n")))}m.isMDXComponent=!0}}]);