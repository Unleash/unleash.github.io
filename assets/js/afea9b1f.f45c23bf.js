"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9698],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),o=n(2389),s=n(9443);var i=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(3616),p=n(6010),u="tabItem_vU9c";function c(e){var t,n,o,s=e.lazy,c=e.block,m=e.defaultValue,d=e.values,h=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=i(),b=N.tabGroupChoices,w=N.setTabGroupChoices,S=(0,r.useState)(v),x=S[0],T=S[1],D=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=b[h];null!=I&&I!==x&&y.some((function(e){return e.value===I}))&&T(I)}var O=function(e){var t=e.currentTarget,n=D.indexOf(t),a=y[n].value;a!==x&&(E(t),T(a),null!=h&&w(h,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;n=D[r]||D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":c},g)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return D.push(e)},onKeyDown:j,onFocus:O,onClick:O},o,{className:(0,p.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},3573:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=n(6396),i=n(8215),l=["components"],p={title:"How to use custom activation strategies"},u=void 0,c={unversionedId:"how-to/how-to-use-custom-strategies",id:"how-to/how-to-use-custom-strategies",title:"How to use custom activation strategies",description:"This guide takes you through how to use custom activation strategies with Unleash. We'll go through how you define a custom strategy in the admin UI, how you add it to a toggle, and how you'd implement it in a client SDK.",source:"@site/docs/how-to/how-to-use-custom-strategies.md",sourceDirName:"how-to",slug:"/how-to/how-to-use-custom-strategies",permalink:"/how-to/how-to-use-custom-strategies",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-use-custom-strategies.md",tags:[],version:"current",frontMatter:{title:"How to use custom activation strategies"},sidebar:"documentation",previous:{title:"How to define custom context fields",permalink:"/how-to/how-to-define-custom-context-fields"},next:{title:"Users and permissions",permalink:"/how-to/users-and-permissions"}},m=[{value:"Step 1: Define your custom strategy",id:"step-1",children:[],level:2},{value:"Step 2: Apply your custom strategy to a feature toggle",id:"step-2",children:[],level:2},{value:"Step 3: Implement the strategy in your client SDK",id:"step-3",children:[{value:"Option A: Implement the strategy for a server-side client SDK",id:"step-3-a",children:[],level:3},{value:"Option B: Implement the strategy for a front-end client SDK",id:"step-3-b",children:[{value:"With a containerized proxy",id:"step-3-b-docker",children:[],level:4},{value:"When running the proxy with Node.js",id:"step-3-b-node",children:[],level:4}],level:3}],level:2}],d={toc:m};function h(e){var t=e.components,p=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide takes you through how to use ",(0,o.kt)("a",{parentName:"p",href:"/advanced/custom_activation_strategy"},"custom activation strategies")," with Unleash. We'll go through how you define a custom strategy in the admin UI, how you add it to a toggle, and how you'd implement it in a ",(0,o.kt)("a",{parentName:"p",href:"/sdks"},"client SDK"),"."),(0,o.kt)("p",null,"In this example we want to define an activation strategy offers a scheduled release of a feature toggle. This means that we want the feature toggle to be activated after a given date and time."),(0,o.kt)("h2",{id:"step-1"},"Step 1: Define your custom strategy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Navigate to the strategies view"),'. Interact with the "Configure" button in the page header and then go to the "Strategies" link in the dropdown menu that appears.'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"A visual guide for how to navigate to the strategies page in the Unleash admin UI. It shows the steps described in the preceding paragraph.",src:n(8923).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Define your strategy"),'. Use the "Add new strategy" button to open the strategy creation form. Fill in the form to define your strategy. Refer to ',(0,o.kt)("a",{parentName:"p",href:"/advanced/custom_activation_strategy#definition"},"the custom strategy reference documentation")," for a full list of options."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"A strategy creation form. It has fields labeled &quot;strategy name&quot; \u2014 &quot;TimeStamp&quot; \u2014 and &quot;description&quot; \u2014 &quot;activate toggle after a given timestamp&quot;. It also has fields for a parameter named &quot;enableAfter&quot;. The parameter is of type &quot;string&quot; and the parameter description is &quot;Expected format: YYYY-MM-DD HH:MM&quot;. The parameter is required.",src:n(9126).Z})))),(0,o.kt)("h2",{id:"step-2"},"Step 2: Apply your custom strategy to a feature toggle"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Navigate to your feature toggle")," and ",(0,o.kt)("strong",{parentName:"p"},"apply the strategy")," you just created."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The strategy configuration screen for the custom &quot;TimeStamp&quot; strategy from the previous step. The &quot;enableAfter&quot; field says &quot;2021-12-25 00:00&quot;.",src:n(4868).Z})),(0,o.kt)("h2",{id:"step-3"},"Step 3: Implement the strategy in your client SDK"),(0,o.kt)("p",null,"The steps to implement a custom strategy for your client depend on the kind of client SDK you're using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you're using a server-side client SDK, follow the steps in ",(0,o.kt)("a",{parentName:"li",href:"#step-3-a",title:"Step 3 option A: implement the strategy for a server-side client SDK"},"option A"),"."),(0,o.kt)("li",{parentName:"ul"},"if you're using a front-end client SDK (",(0,o.kt)("a",{parentName:"li",href:"/sdks/android_proxy_sdk"},"Android"),", ",(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-javascript"},"JavaScript"),", ",(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-react"},"React"),", ",(0,o.kt)("a",{parentName:"li",href:"/sdks/proxy-ios"},"iOS"),"), follow the steps in ",(0,o.kt)("a",{parentName:"li",href:"#step-3-b",title:"Step 3 option B: implementing the strategy for a front-end client SDK"},"option B"))),(0,o.kt)("h3",{id:"step-3-a"},"Option A: Implement the strategy for a server-side client SDK"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Implement the custom strategy")," in your ",(0,o.kt)("a",{parentName:"p",href:"/sdks"},"client SDK"),". The exact way to do this will vary depending on the specific SDK you're using, so refer to the SDK's documentation. The example below shows an example of how you'd implement a custom strategy called \"TimeStamp\" for the ",(0,o.kt)("a",{parentName:"p",href:"/sdks/node_sdk"},"Node.js client SDK"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Strategy } = require('unleash-client');\n\nclass TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Register the custom strategy with the Unleash Client"),".  When instantiating the Unleash Client, provide it with a list of the custom strategies you'd like to use \u2014 again: refer to ",(0,o.kt)("em",{parentName:"p"},"your")," client SDK's docs for the specifics."),(0,o.kt)("p",{parentName:"li"},"Here's a full, working example for Node.js. Notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"strategies")," property being passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize")," function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Strategy, initialize, isEnabled } = require('unleash-client');\n\nclass TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n\nconst instance = initialize({\n  url: 'http://unleash.herokuapp.com/api/',\n  appName: 'unleash-demo',\n  instanceId: '1',\n  // highlight-next-line\n  strategies: [new TimeStampStrategy()],\n});\n\ninstance.on('ready', () => {\n  setInterval(() => {\n    console.log(isEnabled('demo.TimeStampRollout'));\n  }, 1000);\n});\n\n")))),(0,o.kt)("h3",{id:"step-3-b"},"Option B: Implement the strategy for a front-end client SDK"),(0,o.kt)("p",null,"Front-end client SDKs don't evaluate strategies directly, so you need to implement the ",(0,o.kt)("strong",{parentName:"p"},"custom strategy in the ",(0,o.kt)("a",{parentName:"strong",href:"/sdks/unleash-proxy"},"Unleash Proxy")),". Depending on how you run the Unleash Proxy, follow one of the below series of steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you're running the Unleash Proxy as a Docker container, refer to the ",(0,o.kt)("a",{parentName:"li",href:"#step-3-b-docker"},"steps for using a containerized Proxy"),"."),(0,o.kt)("li",{parentName:"ul"},"If you're using the Unleash Proxy via Node.js, refer to the ",(0,o.kt)("a",{parentName:"li",href:"#step-3-b-node"},"steps for using custom strategies via Node.js"),".")),(0,o.kt)("h4",{id:"step-3-b-docker"},"With a containerized proxy"),(0,o.kt)("p",null,"Strategies are stored in separate JavaScript files and loaded into the container at startup. Refer to ",(0,o.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"the Unleash Proxy documentation")," for a full overview of all the options."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create a strategies directory.")," Create a directory that Docker has access to where you can store your strategies. The next steps assume you called it ",(0,o.kt)("inlineCode",{parentName:"p"},"strategies"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Initialize a Node.js project")," and ",(0,o.kt)("strong",{parentName:"p"},"install the Unleash Client"),":"),(0,o.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y && \\\nnpm install unleash-client\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn init -y&& \\\nyarn add unleash-client\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create a strategy file")," and ",(0,o.kt)("strong",{parentName:"p"},"implement your strategies"),". Remember to ",(0,o.kt)("strong",{parentName:"p"},"export your list of strategies"),". The next steps will assume you called the file ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp.js"),".  An example implementation looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Strategy } = require('unleash-client');\n\nclass TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n\nmodule.exports = [new TimeStampStrategy()]; // <- export strategies\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Mount the strategies directory")," and ",(0,o.kt)("strong",{parentName:"p"},"point the ",(0,o.kt)("a",{parentName:"strong",href:"https://hub.docker.com/r/unleashorg/unleash-proxy"},"Unleash Proxy docker container")," at your strategies file"),". The highlighted lines below show the extra options you need to add. The following command assumes that your strategies directory is a direct subdirectory of your current working directory. Modify the rest of the command to suit your needs."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name unleash-proxy --pull=always \\\n    -e UNLEASH_PROXY_SECRETS=some-secret \\\n    -e UNLEASH_URL='http://unleash:4242/api/' \\\n    -e UNLEASH_API_TOKEN=${API_TOKEN} \\\n    # highlight-start\n    -e UNLEASH_CUSTOM_STRATEGIES_FILE=/strategies/timestamp.js \\\n    --mount type=bind,source=\"$(pwd)\"/strategies,target=/strategies \\\n    # highlight-end\n    -p 3000:3000 --network unleash unleashorg/unleash-proxy\n")))),(0,o.kt)("h4",{id:"step-3-b-node"},"When running the proxy with Node.js"),(0,o.kt)("p",null,"The Unleash Proxy accepts a ",(0,o.kt)("inlineCode",{parentName:"p"},"customStrategies")," property as part of its initialization options. Use this to pass it initialized strategies."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Install the ",(0,o.kt)("inlineCode",{parentName:"strong"},"unleash-client")," package"),". You'll need this to implement the custom strategy:"),(0,o.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install unleash-client\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add unleash-client\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Implement your strategy"),". You can import it from a different file or put it in the same file as the Proxy initialization. For instance, a ",(0,o.kt)("inlineCode",{parentName:"p"},"TimeStampStrategy")," could look like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Strategy } = require('unleash-client');\n\nclass TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Pass the strategy to the Proxy Client")," using the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"customStrategies"))," option. A full code example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { createApp } = require('@unleash/proxy');\nconst { Strategy } = require('unleash-client');\n\nclass TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n\nconst port = 3000;\n\nconst app = createApp({\n    unleashUrl: 'https://app.unleash-hosted.com/demo/api/',\n    unleashApiToken: '*:default.56907a2fa53c1d16101d509a10b78e36190b0f918d9f122d',\n    proxySecrets: ['proxy-secret', 'another-proxy-secret', 's1'],\n    refreshInterval: 1000,\n    // highlight-next-line\n    customStrategies: [new TimeStampStrategy()]\n});\n\napp.listen(port, () =>\n    // eslint-disable-next-line no-console\n    console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`),\n);\n")))))}h.isMDXComponent=!0},8923:function(e,t,n){t.Z=n.p+"assets/images/custom-strategy-navigation-978c3f84cdb10d896fc41a4614f04673.png"},9126:function(e,t,n){t.Z=n.p+"assets/images/timestamp_create_strategy-103954747a03c73d36bec4756291ef24.png"},4868:function(e,t,n){t.Z=n.p+"assets/images/timestamp_use_strategy-a22bd279597bae1e57a22f214caa05c8.png"}}]);