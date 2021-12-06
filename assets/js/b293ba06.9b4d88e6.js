"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8954],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8641:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"proxy-react",title:"React proxy SDK"},s=void 0,p={unversionedId:"sdks/proxy-react",id:"sdks/proxy-react",isDocsHomePage:!1,title:"React proxy SDK",description:"This library is meant to be used with the unleash-proxy. The proxy application layer will sit between your unleash instance and your client applications, and provides performance and security benefits. DO NOT TRY to connect this library directly to the unleash instance, as the datasets follow different formats because the proxy only returns evaluated toggle information.",source:"@site/docs/sdks/proxy-react.md",sourceDirName:"sdks",slug:"/sdks/proxy-react",permalink:"/sdks/proxy-react",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/sdks/proxy-react.md",tags:[],version:"current",frontMatter:{id:"proxy-react",title:"React proxy SDK"},sidebar:"documentation",previous:{title:"JavaScript Proxy SDK",permalink:"/sdks/proxy-javascript"},next:{title:"iOS Proxy SDK",permalink:"/sdks/proxy-ios"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Initialize the client",id:"initialize-the-client",children:[],level:2},{value:"How to check feature toggle states",id:"how-to-check-feature-toggle-states",children:[],level:2},{value:"How to update the Unleash Context",id:"how-to-update-the-unleash-context",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This library is meant to be used with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy"},"unleash-proxy"),". The proxy application layer will sit between your unleash instance and your client applications, and provides performance and security benefits. DO NOT TRY to connect this library directly to the unleash instance, as the datasets follow different formats because the proxy only returns evaluated toggle information."),(0,o.kt)("p",null,"For more detailed information, check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/proxy-client-react"},"the React Proxy SDK on GitHub"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @unleash/proxy-client-react\n// or\nyarn add @unleash/proxy-client-react\n")),(0,o.kt)("h2",{id:"initialize-the-client"},"Initialize the client"),(0,o.kt)("p",null,"The snippet below shows you how to initialize the client. We recommend that you do this in your entry point file (typically index.js/ts) to ensure that you only have ",(0,o.kt)("em",{parentName:"p"},"one")," instance of it."),(0,o.kt)("p",null,"The configuration variables are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"url"))),(0,o.kt)("p",{parentName:"li"},"  Your proxy's URL.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"clientKey"))),(0,o.kt)("p",{parentName:"li"},"  One of your proxy's ",(0,o.kt)("a",{parentName:"p",href:"unleash-proxy#configuration-variables"},"designated client keys (also known as proxy secrets)"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"refreshInterval"))),(0,o.kt)("p",{parentName:"li"},"How often (in seconds) the client should poll the proxy for updates.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"appName"))),(0,o.kt)("p",{parentName:"li"},"The name of your application. It's only used for identifying your application and can be whatever you want it to be.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"environment"))),(0,o.kt)("p",{parentName:"li"},"The environment that your application runs in. This corresponds to the environment field in ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/unleash_context"},"the Unleash Context"),". Note that this is separate from the newer ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/environments"},"Environments feature"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import FlagProvider from '@unleash/proxy-client-react';\n\nconst config = {\n  url: 'https://HOSTNAME/api/proxy',\n  clientKey: 'PROXYKEY',\n  refreshInterval: 15,\n  appName: 'your-app-name',\n  environment: 'dev',\n};\n\nReactDOM.render(\n  <React.StrictMode>\n    <FlagProvider config={config}>\n      <App />\n    </FlagProvider>\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n")),(0,o.kt)("h2",{id:"how-to-check-feature-toggle-states"},"How to check feature toggle states"),(0,o.kt)("p",null,"To check if a feature is enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useFlag } from '@unleash/proxy-client-react';\n\nconst TestComponent = () => {\n  const enabled = useFlag('travel.landing');\n\n  if (enabled) {\n    return <SomeComponent />\n  }\n  return <AnotherComponent />\n};\n\nexport default TestComponent;\n")),(0,o.kt)("p",null,"To check variants:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useVariant } from '@unleash/proxy-client-react';\n\nconst TestComponent = () => {\n  const variant = useVariant('travel.landing');\n\n  if (variant.enabled && variant.name === \"SomeComponent\") {\n    return <SomeComponent />\n  } else if (variant.enabled && variant.name === \"AnotherComponent\") {\n    return <AnotherComponent />\n  }\n  return <DefaultComponent />\n};\n\nexport default TestComponent;\n")),(0,o.kt)("h2",{id:"how-to-update-the-unleash-context"},"How to update the Unleash Context"),(0,o.kt)("p",null,"Follow the following steps in order to update the unleash context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useUnleashContext, useFlag } from '@unleash/proxy-client-react'\n\nconst MyComponent = ({ userId }) => {\n  const variant = useFlag(\"my-toggle\");\n  const updateContext = useUnleashContext();\n\n  useEffect(() => {\n    // context is updated with userId\n    updateContext({ userId })\n  }, [])\n}\n\n")))}m.isMDXComponent=!0}}]);