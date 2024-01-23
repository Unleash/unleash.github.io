"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[93334],{65559:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),o=n(86010),l=n(63735),i=n(38224),s=n(5730);const p="tabList__CuJ",u="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const h=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=h.indexOf(t),a=p[n].value;a!==i&&(c(t),s(a))},y=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;n=h[t]??h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;n=h[t]??h[h.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>h.push(e),onKeyDown:y,onClick:d},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function c(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(c,(0,a.Z)({},e,t)))}function y(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},48685:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(65559),o=n(30433),l=n(1291);const i=e=>{let{verb:t,payload:n,url:i,title:s,endpointType:p="Unleash server API"}=e;const u=(null==t?void 0:t.toUpperCase())||"",h=JSON.stringify(n,null,2),[c,d]="Unleash server API"===p?["unleash-url","API-token"]:["proxy-url","proxy-client-key"],y=(n?`\n${u} <${c}>/${i}\nAuthorization: <${d}>\ncontent-type: application/json\n\n${h}`:`\n${u} <${c}>/${i}\nAuthorization: <${d}>\ncontent-type: application/json`).trim(),m=(n?`\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <${d}>" \\\n     -X ${u} \\\n     -d '${h}' \\\n     <${c}>/${i}`:`\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <${d}>" \\\n     -X ${u} \\\n     <${c}>/${i}`).trim(),k=(n?`echo '${h}' \\\n| http ${u} \\\n  <${c}>/${i} \\\n  Authorization:<${d}>`:`\nhttp ${u} \\\n  <${c}>/${i} \\\n  Authorization:<${d}> \\\n  ${"POST"!==u||h?"":"--json"}`.trim()).trim();return a.createElement(r.Z,{groupId:"api-request"},a.createElement(o.Z,{value:"http",label:"HTTP"},a.createElement(l.Z,{language:"http",title:s},y)),a.createElement(o.Z,{value:"curl",label:"cURL"},a.createElement(l.Z,{language:"bash",title:s},m)),a.createElement(o.Z,{value:"httpie",label:"HTTPie"},a.createElement(l.Z,{language:"bash",title:s},k)))}},85101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(65559),l=n(30433),i=n(48685);const s={title:"How to run the Unleash Proxy"},p=void 0,u={unversionedId:"how-to/how-to-run-the-unleash-proxy",id:"how-to/how-to-run-the-unleash-proxy",title:"How to run the Unleash Proxy",description:"Placeholders in the code samples below are delimited by angle brackets (i.e. ``). You will need to replace them with the values that are correct in your situation for the code samples to run properly.",source:"@site/docs/how-to/how-to-run-the-unleash-proxy.mdx",sourceDirName:"how-to",slug:"/how-to/how-to-run-the-unleash-proxy",permalink:"/how-to/how-to-run-the-unleash-proxy",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-run-the-unleash-proxy.mdx",tags:[],version:"current",frontMatter:{title:"How to run the Unleash Proxy"},sidebar:"documentation",previous:{title:"Unleash Proxy guides",permalink:"/how-to/proxy"},next:{title:"Feature flags, strategies, context",permalink:"/how-to/misc"}},h={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to run the Proxy via Docker",id:"run-proxy-via-docker",level:2},{value:"1. Pull the Proxy image",id:"1-pull-the-proxy-image",level:3},{value:"2. Start the Proxy",id:"2-start-the-proxy",level:3},{value:"How to run the Proxy as a Node.js app",id:"run-proxy-as-node-app",level:2},{value:"1. initialize the project",id:"1-initialize-the-project",level:3},{value:"2. Install the Unleash Proxy package",id:"2-install-the-unleash-proxy-package",level:3},{value:"3. Configure and start the proxy",id:"3-configure-and-start-the-proxy",level:3},{value:"Verify that the proxy is working",id:"verify-that-the-proxy-is-working",level:2}],d={toc:c};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Placeholders",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Placeholders in the code samples below are delimited by angle brackets (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"<placeholder-name>"),"). You will need to replace them with the values that are correct in ",(0,r.kt)("em",{parentName:"p"},"your")," situation for the code samples to run properly.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash Proxy")," provides a way for you to consume feature toggles in ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/#front-end-sdks"},"front-end clients"),", such as the ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/javascript-browser"},"JavaScript Proxy client")," and ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/react"},"React Proxy client"),"."),(0,r.kt)("p",null,"Depending on your setup, the Proxy is most easily run in one of two ways, depending on your situation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-proxy-via-docker"},"Via Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-proxy-as-node-app"},"As a Node.js app"))),(0,r.kt)("p",null,"If you're using a hosted version of Unleash, we can also run the proxy for you."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This is what you need before you can run the proxy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A running Unleash server to connect to. You'll need its API path (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://app.unleash-hosted.com/demo/api"),") to connect the proxy to it."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"../reference/api-tokens-and-client-keys#client-tokens"},"client API token")," for the proxy to use."),(0,r.kt)("li",{parentName:"ul"},"If you're running the Proxy via Docker: ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"docker")," command line tool"),"."),(0,r.kt)("li",{parentName:"ul"},"If you're running the Proxy as a Node.js app: ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js and its command line tools"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"../reference/api-tokens-and-client-keys#proxy-client-keys"},"Proxy client key"),". This can be any arbitrary string (for instance: ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy-client-key"),"). Use this key when connecting a client SDK to the Proxy.")),(0,r.kt)("h2",{id:"run-proxy-via-docker"},"How to run the Proxy via Docker"),(0,r.kt)("p",null,"We provide a ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/unleashorg/unleash-proxy"},"Docker image (available on on Docker Hub)")," that you can use to run the proxy."),(0,r.kt)("h3",{id:"1-pull-the-proxy-image"},"1. Pull the Proxy image"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," command to pull the Proxy image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Pull the Unleash Proxy docker image"',title:'"Pull',the:!0,Unleash:!0,Proxy:!0,docker:!0,'image"':!0},"docker pull unleashorg/unleash-proxy\n")),(0,r.kt)("h3",{id:"2-start-the-proxy"},"2. Start the Proxy"),(0,r.kt)("p",null,"When running the Proxy, you'll need to provide it with at least the configuration options listed below. Check the reference docs for the ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy#configuration-options"},"full list of configuration options"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the Unleash Proxy via Docker"',title:'"Run',the:!0,Unleash:!0,Proxy:!0,via:!0,'Docker"':!0},"docker run \\\n    -e UNLEASH_PROXY_CLIENT_KEYS=<proxy-client-key> \\\n    -e UNLEASH_URL='<unleash-api-url>' \\\n    -e UNLEASH_API_TOKEN=<client-api-token> \\\n    -p 3000:3000 \\\n    unleashorg/unleash-proxy\n")),(0,r.kt)("p",null,"If the proxy starts up successfully, you should see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Unleash-proxy is listening on port 3000!\n")),(0,r.kt)("h2",{id:"run-proxy-as-node-app"},"How to run the Proxy as a Node.js app"),(0,r.kt)("p",null,"To run the Proxy via Node.js, you'll have to create your own Node.js project and use the Unleash Proxy as a dependency."),(0,r.kt)("h3",{id:"1-initialize-the-project"},"1. initialize the project"),(0,r.kt)("p",null,"If you don't already have an existing Node.js project, create one:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init\n")))),(0,r.kt)("h3",{id:"2-install-the-unleash-proxy-package"},"2. Install the Unleash Proxy package"),(0,r.kt)("p",null,"Install the Unleash Proxy as a dependency:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @unleash/proxy\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @unleash/proxy\n")))),(0,r.kt)("h3",{id:"3-configure-and-start-the-proxy"},"3. Configure and start the proxy"),(0,r.kt)("p",null,"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"createApp")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"@unleash/proxy")," and configure the proxy. You'll need to provide at least the configuration options highlighted below. Check the reference docs for the ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy#configuration-options"},"full list of configuration options"),"."),(0,r.kt)("p",null,"Here is an example of what running the Proxy as a Node.js app might look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Sample app running the Unleash Proxy"',title:'"Sample',app:!0,running:!0,the:!0,Unleash:!0,'Proxy"':!0},"const port = 3000;\n\nconst { createApp } = require('@unleash/proxy');\n\nconst app = createApp({\n    // highlight-start\n    unleashUrl: '<unleash-api-url>',\n    unleashApiToken: '<client-api-token>',\n    clientKeys: ['<proxy-client-key>'],\n    proxyPort: 3000,\n    // highlight-end\n});\n\napp.listen(port, () =>\n    console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`),\n);\n")),(0,r.kt)("h2",{id:"verify-that-the-proxy-is-working"},"Verify that the proxy is working"),(0,r.kt)("p",null,"When the proxy process has started up correctly, you can start querying its ",(0,r.kt)("inlineCode",{parentName:"p"},"/proxy")," endpoint. If it's running correctly, you'll get back a JSON object with a list of toggles. The list may be empty if you haven't added any toggles for the corresponding project/environment yet."),(0,r.kt)(i.Z,{verb:"get",url:"proxy",endpointType:"proxy",title:"Request toggles from the Unleash Proxy",mdxType:"ApiRequest"}))}y.isMDXComponent=!0}}]);