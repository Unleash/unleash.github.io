"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72905:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},28403:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:h,groupId:y,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,r.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=y){const e=x[y];null!=e&&e!==w&&k.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==w&&(C(t),T(a),null!=y&&N(y,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;n=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:j,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},28641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(28403),l=n(72905);const i={id:"proxy-react",title:"React Proxy SDK"},s=void 0,p={unversionedId:"sdks/proxy-react",id:"sdks/proxy-react",title:"React Proxy SDK",description:"This library is meant to be used with the unleash-proxy. The proxy application layer will sit between your unleash instance and your client applications, and provides performance and security benefits. DO NOT TRY to connect this library directly to the unleash instance, as the datasets follow different formats because the proxy only returns evaluated toggle information.",source:"@site/docs/sdks/proxy-react.md",sourceDirName:"sdks",slug:"/sdks/proxy-react",permalink:"/sdks/proxy-react",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/proxy-react.md",tags:[],version:"current",frontMatter:{id:"proxy-react",title:"React Proxy SDK"},sidebar:"documentation",previous:{title:"JavaScript Proxy SDK",permalink:"/sdks/proxy-javascript"},next:{title:"Svelte Proxy SDK",permalink:"/sdks/proxy-svelte"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"How to check feature toggle states",id:"how-to-check-feature-toggle-states",level:2},{value:"How to update the Unleash Context",id:"how-to-update-the-unleash-context",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This library is meant to be used with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy"},"unleash-proxy"),". The proxy application layer will sit between your unleash instance and your client applications, and provides performance and security benefits. DO NOT TRY to connect this library directly to the unleash instance, as the datasets follow different formats because the proxy only returns evaluated toggle information."),(0,r.kt)("p",null,"For more detailed information, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/proxy-client-react"},"React Proxy SDK on GitHub"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the React proxy client and the ",(0,r.kt)("a",{parentName:"p",href:"/sdks/proxy-javascript"},"JavaScript proxy client")," packages:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @unleash/proxy-client-react unleash-proxy-client\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @unleash/proxy-client-react unleash-proxy-client\n")))),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"The snippet below shows you how to initialize the client. We recommend that you do this in your entry point file (typically index.js/ts) to ensure that you only have ",(0,r.kt)("em",{parentName:"p"},"one")," instance of it."),(0,r.kt)("p",null,"The configuration variables are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"url"))),(0,r.kt)("p",{parentName:"li"},"Your proxy's URL.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"clientKey"))),(0,r.kt)("p",{parentName:"li"},"One of your proxy's ",(0,r.kt)("a",{parentName:"p",href:"unleash-proxy#configuration-variables"},"designated client keys (also known as proxy secrets)"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"refreshInterval"))),(0,r.kt)("p",{parentName:"li"},"How often (in seconds) the client should poll the proxy for updates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"appName"))),(0,r.kt)("p",{parentName:"li"},"The name of your application. It's only used for identifying your application and can be whatever you want it to be.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"environment"))),(0,r.kt)("p",{parentName:"li"},"The environment that your application runs in. This corresponds to the environment field in ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/unleash_context"},"the Unleash Context"),". Note that this is separate from the newer ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/environments"},"Environments feature"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { FlagProvider } from '@unleash/proxy-client-react';\n\nconst config = {\n  url: 'https://HOSTNAME/api/proxy',\n  clientKey: 'PROXYKEY',\n  refreshInterval: 15,\n  appName: 'your-app-name',\n  environment: 'dev',\n};\n\nReactDOM.render(\n  <React.StrictMode>\n    <FlagProvider config={config}>\n      <App />\n    </FlagProvider>\n  </React.StrictMode>,\n  document.getElementById('root'),\n);\n")),(0,r.kt)("h2",{id:"how-to-check-feature-toggle-states"},"How to check feature toggle states"),(0,r.kt)("p",null,"To check if a feature is enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useFlag } from '@unleash/proxy-client-react';\n\nconst TestComponent = () => {\n  const enabled = useFlag('travel.landing');\n\n  if (enabled) {\n    return <SomeComponent />;\n  }\n  return <AnotherComponent />;\n};\n\nexport default TestComponent;\n")),(0,r.kt)("p",null,"To check variants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useVariant } from '@unleash/proxy-client-react';\n\nconst TestComponent = () => {\n  const variant = useVariant('travel.landing');\n\n  if (variant.enabled && variant.name === 'SomeComponent') {\n    return <SomeComponent />;\n  } else if (variant.enabled && variant.name === 'AnotherComponent') {\n    return <AnotherComponent />;\n  }\n  return <DefaultComponent />;\n};\n\nexport default TestComponent;\n")),(0,r.kt)("h2",{id:"how-to-update-the-unleash-context"},"How to update the Unleash Context"),(0,r.kt)("p",null,"Follow the following steps in order to update the unleash context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useUnleashContext, useFlag } from '@unleash/proxy-client-react';\n\nconst MyComponent = ({ userId }) => {\n  const variant = useFlag('my-toggle');\n  const updateContext = useUnleashContext();\n\n  useEffect(() => {\n    // context is updated with userId\n    updateContext({ userId });\n  }, []);\n};\n")))}d.isMDXComponent=!0}}]);