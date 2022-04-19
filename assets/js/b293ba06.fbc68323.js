"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8954],{1871:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},3842:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),o=n(5730),l=n(7434),i=n(6010),u="tabItem_LplD";function s(e){var t,n,o,s=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),g=b.tabGroupChoices,x=b.setTabGroupChoices,N=(0,a.useState)(k),w=N[0],T=N[1],O=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=g[m];null!=E&&E!==w&&y.some((function(e){return e.value===E}))&&T(E)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),r=y[n].value;r!==w&&(C(t),T(r),null!=m&&x(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},h)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},6254:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(3842),i=n(1871),u=["components"],s={id:"proxy-react",title:"React proxy SDK"},p=void 0,c={unversionedId:"sdks/proxy-react",id:"sdks/proxy-react",title:"React proxy SDK",description:"This library is meant to be used with the unleash-proxy. The proxy application layer will sit between your unleash instance and your client applications, and provides performance and security benefits. DO NOT TRY to connect this library directly to the unleash instance, as the datasets follow different formats because the proxy only returns evaluated toggle information.",source:"@site/docs/sdks/proxy-react.md",sourceDirName:"sdks",slug:"/sdks/proxy-react",permalink:"/sdks/proxy-react",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/sdks/proxy-react.md",tags:[],version:"current",frontMatter:{id:"proxy-react",title:"React proxy SDK"},sidebar:"documentation",previous:{title:"JavaScript Proxy SDK",permalink:"/sdks/proxy-javascript"},next:{title:"Deploy and manage Unleash",permalink:"/deploy"}},d=[{value:"Installation",id:"installation",children:[],level:2},{value:"Initialize the client",id:"initialize-the-client",children:[],level:2},{value:"How to check feature toggle states",id:"how-to-check-feature-toggle-states",children:[],level:2},{value:"How to update the Unleash Context",id:"how-to-update-the-unleash-context",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This library is meant to be used with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-proxy"},"unleash-proxy"),". The proxy application layer will sit between your unleash instance and your client applications, and provides performance and security benefits. DO NOT TRY to connect this library directly to the unleash instance, as the datasets follow different formats because the proxy only returns evaluated toggle information."),(0,o.kt)("p",null,"For more detailed information, check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unleash/proxy-client-react"},"the React Proxy SDK on GitHub"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @unleash/proxy-client-react\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @unleash/proxy-client-react\n")))),(0,o.kt)("h2",{id:"initialize-the-client"},"Initialize the client"),(0,o.kt)("p",null,"The snippet below shows you how to initialize the client. We recommend that you do this in your entry point file (typically index.js/ts) to ensure that you only have ",(0,o.kt)("em",{parentName:"p"},"one")," instance of it."),(0,o.kt)("p",null,"The configuration variables are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"url"))),(0,o.kt)("p",{parentName:"li"},"  Your proxy's URL.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"clientKey"))),(0,o.kt)("p",{parentName:"li"},"  One of your proxy's ",(0,o.kt)("a",{parentName:"p",href:"unleash-proxy#configuration-variables"},"designated client keys (also known as proxy secrets)"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"refreshInterval"))),(0,o.kt)("p",{parentName:"li"},"How often (in seconds) the client should poll the proxy for updates.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"appName"))),(0,o.kt)("p",{parentName:"li"},"The name of your application. It's only used for identifying your application and can be whatever you want it to be.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"environment"))),(0,o.kt)("p",{parentName:"li"},"The environment that your application runs in. This corresponds to the environment field in ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/unleash_context"},"the Unleash Context"),". Note that this is separate from the newer ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/environments"},"Environments feature"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import FlagProvider from '@unleash/proxy-client-react';\n\nconst config = {\n  url: 'https://HOSTNAME/api/proxy',\n  clientKey: 'PROXYKEY',\n  refreshInterval: 15,\n  appName: 'your-app-name',\n  environment: 'dev',\n};\n\nReactDOM.render(\n  <React.StrictMode>\n    <FlagProvider config={config}>\n      <App />\n    </FlagProvider>\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n")),(0,o.kt)("h2",{id:"how-to-check-feature-toggle-states"},"How to check feature toggle states"),(0,o.kt)("p",null,"To check if a feature is enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useFlag } from '@unleash/proxy-client-react';\n\nconst TestComponent = () => {\n  const enabled = useFlag('travel.landing');\n\n  if (enabled) {\n    return <SomeComponent />\n  }\n  return <AnotherComponent />\n};\n\nexport default TestComponent;\n")),(0,o.kt)("p",null,"To check variants:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useVariant } from '@unleash/proxy-client-react';\n\nconst TestComponent = () => {\n  const variant = useVariant('travel.landing');\n\n  if (variant.enabled && variant.name === \"SomeComponent\") {\n    return <SomeComponent />\n  } else if (variant.enabled && variant.name === \"AnotherComponent\") {\n    return <AnotherComponent />\n  }\n  return <DefaultComponent />\n};\n\nexport default TestComponent;\n")),(0,o.kt)("h2",{id:"how-to-update-the-unleash-context"},"How to update the Unleash Context"),(0,o.kt)("p",null,"Follow the following steps in order to update the unleash context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useUnleashContext, useFlag } from '@unleash/proxy-client-react'\n\nconst MyComponent = ({ userId }) => {\n  const variant = useFlag(\"my-toggle\");\n  const updateContext = useUnleashContext();\n\n  useEffect(() => {\n    // context is updated with userId\n    updateContext({ userId })\n  }, [])\n}\n\n")))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);