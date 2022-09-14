"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9698],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72905:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},28403:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),o=a(86010),s=a(72389),i=a(67392),l=a(7094),p=a(12466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,a;const{lazy:s,block:c,defaultValue:d,values:h,groupId:g,className:y}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,i.l)(k,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===d?d:null!=(t=null!=d?d:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,l.U)(),[S,x]=(0,r.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:D}=(0,p.o5)();if(null!=g){const e=v[g];null!=e&&e!==S&&k.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==S&&(D(t),x(n),null!=g&&w(g,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;a=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},y)},k.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:E,onClick:E},s,{className:(0,o.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(f.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function d(e){const t=(0,s.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},33573:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(28403),s=a(72905);const i={title:"How to use custom activation strategies"},l=void 0,p={unversionedId:"how-to/how-to-use-custom-strategies",id:"how-to/how-to-use-custom-strategies",title:"How to use custom activation strategies",description:"This guide takes you through how to use custom activation strategies with Unleash. We'll go through how you define a custom strategy in the admin UI, how you add it to a toggle, and how you'd implement it in a client SDK.",source:"@site/docs/how-to/how-to-use-custom-strategies.md",sourceDirName:"how-to",slug:"/how-to/how-to-use-custom-strategies",permalink:"/how-to/how-to-use-custom-strategies",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-use-custom-strategies.md",tags:[],version:"current",frontMatter:{title:"How to use custom activation strategies"},sidebar:"documentation",previous:{title:"How to define custom context fields",permalink:"/how-to/how-to-define-custom-context-fields"},next:{title:"How to schedule feature releases",permalink:"/how-to/how-to-schedule-feature-releases"}},u={},m=[{value:"Step 1: Define your custom strategy",id:"step-1",level:2},{value:"Step 2: Apply your custom strategy to a feature toggle",id:"step-2",level:2},{value:"Step 3: Implement the strategy in your client SDK",id:"step-3",level:2},{value:"Option A: Implement the strategy for a server-side client SDK",id:"step-3-a",level:3},{value:"Option B: Implement the strategy for a front-end client SDK",id:"step-3-b",level:3},{value:"With a containerized proxy",id:"step-3-b-docker",level:4},{value:"When running the proxy with Node.js",id:"step-3-b-node",level:4}],c={toc:m};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide takes you through how to use ",(0,r.kt)("a",{parentName:"p",href:"/advanced/custom_activation_strategy"},"custom activation strategies")," with Unleash. We'll go through how you define a custom strategy in the admin UI, how you add it to a toggle, and how you'd implement it in a ",(0,r.kt)("a",{parentName:"p",href:"/sdks"},"client SDK"),"."),(0,r.kt)("p",null,"In this example we want to define an activation strategy offers a scheduled release of a feature toggle. This means that we want the feature toggle to be activated after a given date and time."),(0,r.kt)("h2",{id:"step-1"},"Step 1: Define your custom strategy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Navigate to the strategies view"),'. Interact with the "Configure" button in the page header and then go to the "Strategies" link in the dropdown menu that appears.'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"A visual guide for how to navigate to the strategies page in the Unleash admin UI. It shows the steps described in the preceding paragraph.",src:a(34757).Z,width:"1366",height:"520"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Define your strategy"),'. Use the "Add new strategy" button to open the strategy creation form. Fill in the form to define your strategy. Refer to ',(0,r.kt)("a",{parentName:"p",href:"/advanced/custom_activation_strategy#definition"},"the custom strategy reference documentation")," for a full list of options."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"A strategy creation form. It has fields labeled &quot;strategy name&quot; \u2014 &quot;TimeStamp&quot; \u2014 and &quot;description&quot; \u2014 &quot;activate toggle after a given timestamp&quot;. It also has fields for a parameter named &quot;enableAfter&quot;. The parameter is of type &quot;string&quot; and the parameter description is &quot;Expected format: YYYY-MM-DD HH:MM&quot;. The parameter is required.",src:a(45056).Z,width:"1366",height:"847"})))),(0,r.kt)("h2",{id:"step-2"},"Step 2: Apply your custom strategy to a feature toggle"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Navigate to your feature toggle")," and ",(0,r.kt)("strong",{parentName:"p"},"apply the strategy")," you just created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The strategy configuration screen for the custom &quot;TimeStamp&quot; strategy from the previous step. The &quot;enableAfter&quot; field says &quot;2021-12-25 00:00&quot;.",src:a(7069).Z,width:"1366",height:"750"})),(0,r.kt)("h2",{id:"step-3"},"Step 3: Implement the strategy in your client SDK"),(0,r.kt)("p",null,"The steps to implement a custom strategy for your client depend on the kind of client SDK you're using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if you're using a server-side client SDK, follow the steps in ",(0,r.kt)("a",{parentName:"li",href:"#step-3-a",title:"Step 3 option A: implement the strategy for a server-side client SDK"},"option A"),"."),(0,r.kt)("li",{parentName:"ul"},"if you're using a front-end client SDK (",(0,r.kt)("a",{parentName:"li",href:"/sdks/android_proxy_sdk"},"Android"),", ",(0,r.kt)("a",{parentName:"li",href:"/sdks/proxy-javascript"},"JavaScript"),", ",(0,r.kt)("a",{parentName:"li",href:"/sdks/proxy-react"},"React"),", ",(0,r.kt)("a",{parentName:"li",href:"/sdks/proxy-ios"},"iOS"),"), follow the steps in ",(0,r.kt)("a",{parentName:"li",href:"#step-3-b",title:"Step 3 option B: implementing the strategy for a front-end client SDK"},"option B"))),(0,r.kt)("h3",{id:"step-3-a"},"Option A: Implement the strategy for a server-side client SDK"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Implement the custom strategy")," in your ",(0,r.kt)("a",{parentName:"p",href:"/sdks"},"client SDK"),". The exact way to do this will vary depending on the specific SDK you're using, so refer to the SDK's documentation. The example below shows an example of how you'd implement a custom strategy called \"TimeStamp\" for the ",(0,r.kt)("a",{parentName:"p",href:"/sdks/node_sdk"},"Node.js client SDK"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Strategy } = require('unleash-client');\n\nclass TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Register the custom strategy with the Unleash Client"),". When instantiating the Unleash Client, provide it with a list of the custom strategies you'd like to use \u2014 again: refer to ",(0,r.kt)("em",{parentName:"p"},"your")," client SDK's docs for the specifics."),(0,r.kt)("p",{parentName:"li"},"Here's a full, working example for Node.js. Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"strategies")," property being passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Strategy, initialize, isEnabled } = require('unleash-client');\n\nclass TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n\nconst instance = initialize({\n  url: 'http://unleash.herokuapp.com/api/',\n  appName: 'unleash-demo',\n  instanceId: '1',\n  // highlight-next-line\n  strategies: [new TimeStampStrategy()],\n});\n\ninstance.on('ready', () => {\n  setInterval(() => {\n    console.log(isEnabled('demo.TimeStampRollout'));\n  }, 1000);\n});\n")))),(0,r.kt)("h3",{id:"step-3-b"},"Option B: Implement the strategy for a front-end client SDK"),(0,r.kt)("p",null,"Front-end client SDKs don't evaluate strategies directly, so you need to implement the ",(0,r.kt)("strong",{parentName:"p"},"custom strategy in the ",(0,r.kt)("a",{parentName:"strong",href:"/sdks/unleash-proxy"},"Unleash Proxy")),". Depending on how you run the Unleash Proxy, follow one of the below series of steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you're running the Unleash Proxy as a Docker container, refer to the ",(0,r.kt)("a",{parentName:"li",href:"#step-3-b-docker"},"steps for using a containerized Proxy"),"."),(0,r.kt)("li",{parentName:"ul"},"If you're using the Unleash Proxy via Node.js, refer to the ",(0,r.kt)("a",{parentName:"li",href:"#step-3-b-node"},"steps for using custom strategies via Node.js"),".")),(0,r.kt)("h4",{id:"step-3-b-docker"},"With a containerized proxy"),(0,r.kt)("p",null,"Strategies are stored in separate JavaScript files and loaded into the container at startup. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"the Unleash Proxy documentation")," for a full overview of all the options."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a strategies directory.")," Create a directory that Docker has access to where you can store your strategies. The next steps assume you called it ",(0,r.kt)("inlineCode",{parentName:"p"},"strategies"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Initialize a Node.js project")," and ",(0,r.kt)("strong",{parentName:"p"},"install the Unleash Client"),":"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y && \\\nnpm install unleash-client\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn init -y&& \\\nyarn add unleash-client\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a strategy file")," and ",(0,r.kt)("strong",{parentName:"p"},"implement your strategies"),". Remember to ",(0,r.kt)("strong",{parentName:"p"},"export your list of strategies"),". The next steps will assume you called the file ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp.js"),". An example implementation looks like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Strategy } = require('unleash-client');\n\nclass TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n\nmodule.exports = [new TimeStampStrategy()]; // <- export strategies\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mount the strategies directory")," and ",(0,r.kt)("strong",{parentName:"p"},"point the ",(0,r.kt)("a",{parentName:"strong",href:"https://hub.docker.com/r/unleashorg/unleash-proxy"},"Unleash Proxy docker container")," at your strategies file"),". The highlighted lines below show the extra options you need to add. The following command assumes that your strategies directory is a direct subdirectory of your current working directory. Modify the rest of the command to suit your needs."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name unleash-proxy --pull=always \\\n    -e UNLEASH_PROXY_CLIENT_KEYS=some-secret \\\n    -e UNLEASH_URL='http://unleash:4242/api/' \\\n    -e UNLEASH_API_TOKEN=${API_TOKEN} \\\n    # highlight-start\n    -e UNLEASH_CUSTOM_STRATEGIES_FILE=/strategies/timestamp.js \\\n    --mount type=bind,source=\"$(pwd)\"/strategies,target=/strategies \\\n    # highlight-end\n    -p 3000:3000 --network unleash unleashorg/unleash-proxy\n")))),(0,r.kt)("h4",{id:"step-3-b-node"},"When running the proxy with Node.js"),(0,r.kt)("p",null,"The Unleash Proxy accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"customStrategies")," property as part of its initialization options. Use this to pass it initialized strategies."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install the ",(0,r.kt)("inlineCode",{parentName:"strong"},"unleash-client")," package"),". You'll need this to implement the custom strategy:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install unleash-client\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add unleash-client\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Implement your strategy"),". You can import it from a different file or put it in the same file as the Proxy initialization. For instance, a ",(0,r.kt)("inlineCode",{parentName:"p"},"TimeStampStrategy")," could look like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Strategy } = require('unleash-client');\n\nclass TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pass the strategy to the Proxy Client")," using the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"customStrategies"))," option. A full code example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { createApp } = require('@unleash/proxy');\nconst { Strategy } = require('unleash-client');\n\nclass TimeStampStrategy extends Strategy {\n  constructor() {\n    super('TimeStamp');\n  }\n\n  isEnabled(parameters, context) {\n    return Date.parse(parameters.enableAfter) < Date.now();\n  }\n}\n\nconst port = 3000;\n\nconst app = createApp({\n  unleashUrl: 'https://app.unleash-hosted.com/demo/api/',\n  unleashApiToken:\n    '*:default.56907a2fa53c1d16101d509a10b78e36190b0f918d9f122d',\n  clientKeys: ['proxy-secret', 'another-proxy-secret', 's1'],\n  refreshInterval: 1000,\n  // highlight-next-line\n  customStrategies: [new TimeStampStrategy()],\n});\n\napp.listen(port, () =>\n  // eslint-disable-next-line no-console\n  console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`),\n);\n")))))}d.isMDXComponent=!0},34757:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom-strategy-navigation-7eedfccd7515be93145fd19a1c61dd15.png"},45056:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/timestamp_create_strategy-53b52563d781ddbb241d98eaf21cf359.png"},7069:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/timestamp_use_strategy-5a391e0fa7eab868895eafdb7dbdedfe.png"}}]);