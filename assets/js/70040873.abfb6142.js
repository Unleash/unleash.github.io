"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2905:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},8403:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),s=n(7392),i=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:h,values:m,groupId:y,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===h?h:null!=(t=null!=h?h:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:w}=(0,i.U)(),[N,P]=(0,r.useState)(k),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=y){const e=x[y];null!=e&&e!==N&&g.some((t=>t.value===e))&&P(e)}const j=e=>{const t=e.currentTarget,n=S.indexOf(t),a=g[n].value;a!==N&&(T(t),P(a),null!=y&&w(y,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;n=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:O,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},3814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(8403),l=n(2905);const s={id:"proxy-javascript",title:"JavaScript Proxy SDK"},i=void 0,u={unversionedId:"sdks/proxy-javascript",id:"sdks/proxy-javascript",title:"JavaScript Proxy SDK",description:"In this guide we explain how to use feature toggles in a Single Page App via The Unleash Proxy. You can also checkout the source code for the JavaScript Proxy SDK.",source:"@site/docs/sdks/proxy-javascript.md",sourceDirName:"sdks",slug:"/sdks/proxy-javascript",permalink:"/sdks/proxy-javascript",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/proxy-javascript.md",tags:[],version:"current",frontMatter:{id:"proxy-javascript",title:"JavaScript Proxy SDK"},sidebar:"documentation",previous:{title:"iOS Proxy SDK",permalink:"/sdks/proxy-ios"},next:{title:"React Proxy SDK",permalink:"/sdks/proxy-react"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"How to use the JavaScript Proxy SDK",id:"how-to-use-the-javascript-proxy-sdk",level:2}],d={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide we explain how to use feature toggles in a Single Page App via ",(0,r.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"The Unleash Proxy"),". You can also checkout the source code for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/unleash/unleash-proxy-client-js"},"JavaScript Proxy SDK"),"."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"For single-page apps we have a tiny proxy-client in JavaScript, without any external dependencies, except from browser APIs. This client will store toggles relevant for the current user in local-storage and synchronize with the Unleash Proxy in the background. This means we can bootstrap the toggles for a specific use the next time the user visits the web-page."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We are looking in to also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/issues/785"},"supporting react-native")," with this SDK. Reach out if you want to help us validate the implementation.")),(0,r.kt)("h2",{id:"how-to-use-the-javascript-proxy-sdk"},"How to use the JavaScript Proxy SDK"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: Install")),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install unleash-proxy-client\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add unleash-proxy-client\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: Initialize the SDK")),(0,r.kt)("p",null,"You need to have an Unleash Proxy server running. In addition you will need a proxy-specific ",(0,r.kt)("inlineCode",{parentName:"p"},"clientKey")," in order to connect to the Unleash Proxy. For more on how to set up client keys, ",(0,r.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy#configuration-variables"},"consult the Unleash Proxy docs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { UnleashClient } from 'unleash-proxy-client';\n\nconst unleash = new UnleashClient({\n  url: 'https://eu.unleash-hosted.com/hosted/proxy',\n  clientKey: 'your-proxy-key',\n  appName: 'my-webapp',\n});\n\n// Used to set the context fields, shared with the Unleash Proxy\nunleash.updateContext({ userId: '1233' });\n\n// Start the background polling\nunleash.start();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3: Check if feature toggle is enabled")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"unleash.isEnabled('proxy.demo');\n")),(0,r.kt)("p",null,"...or get toggle variant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const variant = unleash.getVariant('proxy.demo');\nif (variant.name === 'blue') {\n  // something with variant blue...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Listen for updates via the EventEmitter")),(0,r.kt)("p",null,"The client is also an event emitter. This means that your code can subscribe to updates from the client. This is a neat way to update a single page app when toggle state updates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"unleash.on('update', () => {\n  const myToggle = unleash.isEnabled('proxy.demo');\n  //do something useful\n});\n")))}h.isMDXComponent=!0}}]);