"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||k[u]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"API tokens and client keys"},s=void 0,l={unversionedId:"reference/api-tokens-and-client-keys",id:"reference/api-tokens-and-client-keys",title:"API tokens and client keys",description:"For Unleash to be of any use, it requires at least a server and a consuming client.",source:"@site/docs/reference/api-tokens-and-client-keys.mdx",sourceDirName:"reference",slug:"/reference/api-tokens-and-client-keys",permalink:"/reference/api-tokens-and-client-keys",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api-tokens-and-client-keys.mdx",tags:[],version:"current",frontMatter:{title:"API tokens and client keys"},sidebar:"documentation",previous:{title:"Activation Strategies",permalink:"/user_guide/activation_strategy"},next:{title:"Archived toggles",permalink:"/advanced/archived_toggles"}},i={},p=[{value:"API tokens",id:"api-tokens",level:2},{value:"Admin tokens",id:"admin-tokens",level:3},{value:"Client tokens",id:"client-tokens",level:3},{value:"Format",id:"format",level:3},{value:"Version 1",id:"version-1",level:4},{value:"Version 2",id:"version-2",level:4},{value:"Proxy client keys",id:"proxy-client-keys",level:2}],c={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For Unleash to be of any use, it requires at least a server and a ",(0,r.kt)("a",{parentName:"p",href:"/sdks"},"consuming client"),".\nMore advanced use cases may call for multiple clients, automated feature toggle updates, the ",(0,r.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"Unleash proxy")," and ",(0,r.kt)("a",{parentName:"p",href:"/sdks#front-end-sdks"},"Unleash proxy clients"),", and more. To facilitate communication between all these moving parts, Unleash uses a system of API tokens and client keys, all with a specific purpose in mind."),(0,r.kt)("p",null,"This document details the three kinds of tokens and keys that you will need to fully connect any Unleash system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#admin-tokens"},"Admin tokens")," for updating resources in Unleash"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#client-tokens"},"Client tokens")," for connecting server-side client SDKs and the Unleash proxy to the Unleash server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#proxy-client-keys"},"Proxy client keys")," for connecting proxy client SDKs to the Unleash proxy.")),(0,r.kt)("h2",{id:"api-tokens"},"API tokens"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This section describes what API tokens are. For information on how to create them, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"how-to guide for creating API tokens"),".")),(0,r.kt)("p",null,"Use API tokens to connect to the Unleash server API. API tokens come in two distinct types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#admin-tokens"},"Admin tokens")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#client-tokens"},"Client tokens"))),(0,r.kt)("p",null,"Both types use ",(0,r.kt)("a",{parentName:"p",href:"#format"},"the same format")," but have different intended uses. API tokens are considered to be ",(0,r.kt)("em",{parentName:"p"},"secrets")," and should ",(0,r.kt)("em",{parentName:"p"},"not")," be exposed to end users."),(0,r.kt)("h3",{id:"admin-tokens"},"Admin tokens"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Admin tokens")," grant ",(0,r.kt)("em",{parentName:"p"},"full read and write access")," to all resources in the Unleash server API. Admin tokens have access to all projects, all environments, and all global resources (find out more about ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/rbac#core-principles"},"resources in the RBAC document"),")."),(0,r.kt)("p",null,"Use admin tokens to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automate Unleash behavior such as creating feature toggles, projects, etc."),(0,r.kt)("li",{parentName:"ul"},"Write custom Unleash UIs to replace the default Unleash admin UI.")),(0,r.kt)("p",null,"Do ",(0,r.kt)("strong",{parentName:"p"},"not")," use admin tokens for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks"},"Client SDKs"),": You will ",(0,r.kt)("em",{parentName:"li"},"not")," be able to read toggle data from multiple environments. Use ",(0,r.kt)("a",{parentName:"li",href:"#client-tokens"},"client tokens")," instead.")),(0,r.kt)("p",null,"Support for scoped admin tokens with more fine-grained permissions is currently in the planning stage."),(0,r.kt)("h3",{id:"client-tokens"},"Client tokens"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Client tokens")," are intended for use in ",(0,r.kt)("a",{parentName:"p",href:"/sdks#server-side-sdks"},"server-side client SDKs")," (including the Unleash Proxy) and grant the user permissions to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read feature toggle information"),(0,r.kt)("li",{parentName:"ul"},"Register applications with the Unleash server"),(0,r.kt)("li",{parentName:"ul"},"Send usage metrics")),(0,r.kt)("p",null,"When creating a client token, you can choose which projects it should be able to read data from. You can give it access to a specific list of projects or to all projects (including projects that don't exist yet). Prior to Unleash 4.10, a token could be valid only for a ",(0,r.kt)("em",{parentName:"p"},"single project")," or ",(0,r.kt)("em",{parentName:"p"},"all projects"),"."),(0,r.kt)("p",null,"Each client token is only ",(0,r.kt)("strong",{parentName:"p"},"valid for a single environment"),"."),(0,r.kt)("p",null,"Use client tokens:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("a",{parentName:"li",href:"/sdks#server-side-sdks"},"server-side client SDKs")),(0,r.kt)("li",{parentName:"ul"},"To connect ",(0,r.kt)("a",{parentName:"li",href:"/sdks/unleash-proxy"},"the Unleash Proxy")," to the Unleash API")),(0,r.kt)("p",null,"Do ",(0,r.kt)("strong",{parentName:"p"},"not")," use client tokens in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sdks#front-end-sdks"},"Front-end SDKs"),". You will ",(0,r.kt)("em",{parentName:"li"},"not")," be able to connect to the Unleash server due to CORS restrictions. Configure an ",(0,r.kt)("a",{parentName:"li",href:"/sdks/unleash-proxy"},"Unleash Proxy")," and use ",(0,r.kt)("a",{parentName:"li",href:"#proxy-client-keys"},"Proxy client keys")," instead.")),(0,r.kt)("h3",{id:"format"},"Format"),(0,r.kt)("p",null,"API tokens come in one of two formats. When we introduced ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/environments"},"environments")," in Unleash 4.3, we updated the format of the tokens to provide more human-readable information to the user. Both formats are still valid (you don't need to update a working token of the old format) and are described below."),(0,r.kt)("h4",{id:"version-1"},"Version 1"),(0,r.kt)("p",null,"The first version of API tokens was a 64 character long hexadecimal string. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"be44368985f7fb3237c584ef86f3d6bdada42ddbd63a019d26955178\n")),(0,r.kt)("h4",{id:"version-2"},"Version 2"),(0,r.kt)("p",null,"API tokens consist of three parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Project(s)"),(0,r.kt)("li",{parentName:"ol"},"Environment"),(0,r.kt)("li",{parentName:"ol"},"Hash")),(0,r.kt)("p",null,"The parts are separated by two different separators: A colon (",(0,r.kt)("inlineCode",{parentName:"p"},":"),") between the project(s) and the environment, and a full stop (",(0,r.kt)("inlineCode",{parentName:"p"},"."),") between the environment and the hash."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"project(s)")," part is one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The id of a specific project, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"default"),". This indicates that the token is ",(0,r.kt)("strong",{parentName:"li"},"only valid for this project"),"."),(0,r.kt)("li",{parentName:"ul"},"A pair of opening and closing square brackets: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),". This indicates that the token is ",(0,r.kt)("strong",{parentName:"li"},"valid for a discrete list of projects"),". The list of projects is not shown in the token."),(0,r.kt)("li",{parentName:"ul"},"An asterisk: ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),". This indicates that the token is ",(0,r.kt)("strong",{parentName:"li"},"valid for all projects (current and future)"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"environment")," is the name of an environment on your Unleash server, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"development"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"hash")," is 64 character long hexadecimal string."),(0,r.kt)("p",null,"Some example client tokens are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'A token with access to toggles in the "development" environment of a single project, "project-a":',(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"project-a:development.be44368985f7fb3237c584ef86f3d6bdada42ddbd63a019d26955178\n"))),(0,r.kt)("li",{parentName:"ul"},'A token with access to toggles in the "production" environment multiple projects:',(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"[]:production.be44368985f7fb3237c584ef86f3d6bdada42ddbd63a019d26955178\n"))),(0,r.kt)("li",{parentName:"ul"},'A token with access to toggles in the "development" environment of all projects:',(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"*:development.be44368985f7fb3237c584ef86f3d6bdada42ddbd63a019d26955178\n")))),(0,r.kt)("h2",{id:"proxy-client-keys"},"Proxy client keys"),(0,r.kt)("p",null,"Use proxy client keys to connect ",(0,r.kt)("a",{parentName:"p",href:"/sdks#front-end-sdks"},"Proxy client SDKs (front-end SDKs)")," to the ",(0,r.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy"},"Unleash Proxy"),". As opposed to the ",(0,r.kt)("a",{parentName:"p",href:"#api-tokens"},"API tokens"),", Proxy client keys are ",(0,r.kt)("em",{parentName:"p"},"not")," considered secret and are safe to use on any clients (refer to the ",(0,r.kt)("a",{parentName:"p",href:"/sdks/unleash-proxy#we-care-about-privacy"},"the proxy documentation for more about privacy"),"). They do ",(0,r.kt)("em",{parentName:"p"},"not")," let you connect to the Unleash server API."),(0,r.kt)("p",null,"Proxy client keys are arbitrary strings that you ",(0,r.kt)("em",{parentName:"p"},"must")," provide the Unleash proxy with on startup. Unleash does not generate proxy client keys for you. Because of this, they have no specific format."),(0,r.kt)("p",null,"Use Proxy client keys to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect ",(0,r.kt)("a",{parentName:"li",href:"/sdks#front-end-sdks"},"Proxy client SDKs")," to the ",(0,r.kt)("a",{parentName:"li",href:"/sdks/unleash-proxy"},"Unleash Proxy")),(0,r.kt)("li",{parentName:"ul"},"Connect your own custom Proxy clients (or pure HTTP requests) to the Unleash Proxy")),(0,r.kt)("p",null,"Do ",(0,r.kt)("strong",{parentName:"p"},"not")," use Proxy client keys to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to the Unleash API. It will not work. Use an appropriate ",(0,r.kt)("a",{parentName:"li",href:"#api-tokens"},"API token")," instead.")))}k.isMDXComponent=!0}}]);