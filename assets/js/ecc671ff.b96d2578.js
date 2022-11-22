"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1283],{74124:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),s=n(5730),l=n(20636),i=n(76602),u=n(63735);const p="tabList__CuJ",c="tabItem_LNqP";function h(e){var t;const{lazy:n,block:s,defaultValue:h,values:d,groupId:m,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===h?h:h??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:x}=(0,i.U)(),[w,N]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=b[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==w&&(T(t),N(a),null!=m&&x(m,String(a)))},U=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},k)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>S.push(e),onKeyDown:U,onClick:C},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,s.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},24907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(74124),s=n(11666);const l={title:"JavaScript Proxy SDK"},i=void 0,u={unversionedId:"reference/sdks/javascript-browser",id:"reference/sdks/javascript-browser",title:"JavaScript Proxy SDK",description:"This guide shows you how to use feature toggles in a single-page app with the Unleash Proxy and the Unleash front-end API. You can also check out the source code for the JavaScript Proxy SDK on GitHub for more details around the SDK.",source:"@site/docs/reference/sdks/javascript-browser.md",sourceDirName:"reference/sdks",slug:"/reference/sdks/javascript-browser",permalink:"/reference/sdks/javascript-browser",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/sdks/javascript-browser.md",tags:[],version:"current",frontMatter:{title:"JavaScript Proxy SDK"},sidebar:"documentation",previous:{title:"iOS Proxy SDK",permalink:"/reference/sdks/ios-proxy"},next:{title:"React Proxy SDK",permalink:"/reference/sdks/react"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"How to use the JavaScript Proxy SDK",id:"how-to-use-the-javascript-proxy-sdk",level:2},{value:"Step 1: Install",id:"step-1-install",level:2},{value:"Step 2: Initialize the SDK",id:"step-2-initialize-the-sdk",level:2},{value:"Option A: Connecting to the Unleash proxy",id:"option-a-connecting-to-the-unleash-proxy",level:3},{value:"Option B: Connecting directly to Unleash",id:"option-b-connecting-directly-to-unleash",level:3},{value:"Step 3: Check if feature toggle is enabled",id:"step-3-check-if-feature-toggle-is-enabled",level:3},{value:"Listen for updates via the EventEmitter",id:"listen-for-updates-via-the-eventemitter",level:2}],h={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide shows you how to use feature toggles in a single-page app with the ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash Proxy")," and the ",(0,r.kt)("a",{parentName:"p",href:"../front-end-api"},"Unleash front-end API"),". You can also check out the source code for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/unleash/unleash-proxy-client-js"},"JavaScript Proxy SDK")," on GitHub for more details around the SDK."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The JavaScript proxy client is a tiny Unleash client written in JavaScript without any external dependencies (except from browser APIs). This client stores toggles relevant for the current user in ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," and synchronizes with Unleash (the proxy ",(0,r.kt)("em",{parentName:"p"},"or")," the Unleash front-end API) in the background. Because toggles are stored in the user's browser, the client can use them to bootstrap itself the next time the user visits the same web page."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We are looking in to also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/issues/785"},"supporting react-native")," with this SDK. Reach out if you want to help us validate the implementation.")),(0,r.kt)("h2",{id:"how-to-use-the-javascript-proxy-sdk"},"How to use the JavaScript Proxy SDK"),(0,r.kt)("h2",{id:"step-1-install"},"Step 1: Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install unleash-proxy-client\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add unleash-proxy-client\n")))),(0,r.kt)("h2",{id:"step-2-initialize-the-sdk"},"Step 2: Initialize the SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { UnleashClient } from 'unleash-proxy-client';\n\nconst unleash = new UnleashClient({\n  url: 'https://eu.unleash-hosted.com/hosted/proxy',\n  clientKey: 'your-client-key',\n  appName: 'my-webapp',\n});\n\n// Use `updateContext` to set Unleash context fields.\nunleash.updateContext({ userId: '1233' });\n\n// Start the background polling\nunleash.start();\n")),(0,r.kt)("h3",{id:"option-a-connecting-to-the-unleash-proxy"},"Option A: Connecting to the Unleash proxy"),(0,r.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To connect to an Unleash proxy, you need to have an instance of the proxy running.")),(0,r.kt)("p",null,"Add the proxy's URL and a ",(0,r.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"proxy client key"),". The ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy#configuration-variables"},(0,r.kt)("em",{parentName:"a"},"configuration")," section of the Unleash proxy docs")," contain more info on how to configure client keys for your proxy."),(0,r.kt)("h3",{id:"option-b-connecting-directly-to-unleash"},"Option B: Connecting directly to Unleash"),(0,r.kt)("p",null,"Use the url to your Unleash instance's front-end API (",(0,r.kt)("inlineCode",{parentName:"p"},"<unleash-url>/api/frontend"),") as the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," parameter. For the ",(0,r.kt)("inlineCode",{parentName:"p"},"clientKey")," parameter, use a ",(0,r.kt)("inlineCode",{parentName:"p"},"FRONTEND")," token generated from your Unleash instance. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},(0,r.kt)("em",{parentName:"a"},"how to create API tokens"))," guide for the necessary steps."),(0,r.kt)("p",null,"You might also need to set up cross-origin resource sharing (CORS) for your instance. Visit the ",(0,r.kt)("a",{parentName:"p",href:"/reference/front-end-api#cors"},"CORS section of the front-end API guide")," for more information on setting up CORS."),(0,r.kt)("h3",{id:"step-3-check-if-feature-toggle-is-enabled"},"Step 3: Check if feature toggle is enabled"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"unleash.isEnabled('proxy.demo');\n")),(0,r.kt)("p",null,"...or get toggle variant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const variant = unleash.getVariant('proxy.demo');\nif (variant.name === 'blue') {\n  // something with variant blue...\n}\n")),(0,r.kt)("h2",{id:"listen-for-updates-via-the-eventemitter"},"Listen for updates via the EventEmitter"),(0,r.kt)("p",null,"The client is also an event emitter. This means that your code can subscribe to updates from the client. This is a neat way to update a single page app when toggle state updates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"unleash.on('update', () => {\n  const myToggle = unleash.isEnabled('proxy.demo');\n  //do something useful\n});\n")))}d.isMDXComponent=!0}}]);