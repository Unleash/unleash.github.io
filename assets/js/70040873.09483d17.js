"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3580:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),r=n(7294),o=n(2389),l=n(1565),s=n(6010);const i="tabItem_LplD";function u(e){var t,n,o;const{lazy:u,block:p,defaultValue:c,values:d,groupId:h,className:m}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.lx)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===c?c:null!=(t=null!=c?c:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:k}=(0,l.UB)(),[x,w]=(0,r.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=h){const e=b[h];null!=e&&e!==x&&v.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=N.indexOf(t),a=v[n].value;a!==x&&(T(t),w(a),null!=h&&k(h,a))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},m)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:S,onFocus:j,onClick:j},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},3814:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(3580),l=n(8215);const s={id:"proxy-javascript",title:"JavaScript Proxy SDK"},i=void 0,u={unversionedId:"sdks/proxy-javascript",id:"sdks/proxy-javascript",title:"JavaScript Proxy SDK",description:"In this guide we explain how to use feature toggles in a Single Page App via The Unleash Proxy. You can also checkout the source code for the JavaScript Proxy SDK.",source:"@site/docs/sdks/proxy-javascript.md",sourceDirName:"sdks",slug:"/sdks/proxy-javascript",permalink:"/sdks/proxy-javascript",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/proxy-javascript.md",tags:[],version:"current",frontMatter:{id:"proxy-javascript",title:"JavaScript Proxy SDK"},sidebar:"documentation",previous:{title:"iOS Proxy SDK",permalink:"/sdks/proxy-ios"},next:{title:"React proxy SDK",permalink:"/sdks/proxy-react"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"How to use the JavaScript Proxy SDK",id:"how-to-use-the-javascript-proxy-sdk",children:[],level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide we explain how to use feature toggles in a Single Page App via ",(0,r.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"The Unleash Proxy"),". You can also checkout the source code for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/unleash/unleash-proxy-client-js"},"JavaScript Proxy SDK"),"."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"For single-page apps we have a tiny proxy-client in JavaScript, without any external dependencies, except from browser APIs. This client will store toggles relevant for the current user in local-storage and synchronize with the Unleash Proxy in the background. This means we can bootstrap the toggles for a specific use the next time the user visits the web-page."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We are looking in to also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/issues/785"},"supporting react-native")," with this SDK. Reach out if you want to help us validate the implementation.")),(0,r.kt)("h2",{id:"how-to-use-the-javascript-proxy-sdk"},"How to use the JavaScript Proxy SDK"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: Install")),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install unleash-proxy-client\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add unleash-proxy-client\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: Initialize the SDK")),(0,r.kt)("p",null,"You need to have an Unleash Proxy server running. In addition you will need a proxy-specific ",(0,r.kt)("inlineCode",{parentName:"p"},"clientKey")," in order to connect to the Unleash Proxy. For more on how to set up client keys, ",(0,r.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy#configuration-variables"},"consult the Unleash Proxy docs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { UnleashClient } from 'unleash-proxy-client';\n\nconst unleash = new UnleashClient({\n  url: 'https://eu.unleash-hosted.com/hosted/proxy',\n  clientKey: 'your-proxy-key',\n  appName: 'my-webapp',\n});\n\n// Used to set the context fields, shared with the Unleash Proxy\nunleash.updateContext({ userId: '1233' });\n\n// Start the background polling\nunleash.start();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3: Check if feature toggle is enabled")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"unleash.isEnabled('proxy.demo');\n")),(0,r.kt)("p",null,"...or get toggle variant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const variant = unleash.getVariant('proxy.demo');\nif (variant.name === 'blue') {\n  // something with variant blue...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Listen for updates via the EventEmitter")),(0,r.kt)("p",null,"The client is also an event emitter. This means that your code can subscribe to updates from the client. This is a neat way to update a single page app when toggle state updates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"unleash.on('update', () => {\n  const myToggle = unleash.isEnabled('proxy.demo');\n  //do something useful\n});\n")))}d.isMDXComponent=!0}}]);