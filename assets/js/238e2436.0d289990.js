"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={id:"api-token",title:"How to create API Tokens"},o=void 0,l={unversionedId:"user_guide/api-token",id:"user_guide/api-token",title:"How to create API Tokens",description:'In order to connect to Unleash clients will need an API token to grant access. A client SDK will need to token with "client privileges", which allows them to fetch feature toggle configuration and post usage metrics back.',source:"@site/docs/user_guide/token.md",sourceDirName:"user_guide",slug:"/user_guide/api-token",permalink:"/user_guide/api-token",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/user_guide/token.md",tags:[],version:"current",frontMatter:{id:"api-token",title:"How to create API Tokens"},sidebar:"documentation",previous:{title:"Unleash API guides",permalink:"/how-to/api"},next:{title:"How to use the Admin API",permalink:"/advanced/api_access"}},s={},p=[{value:"Create API Token",id:"create-api-token",level:2},{value:"Permissions",id:"permissions",level:3},{value:"Step-by-step",id:"step-by-step",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'In order to connect to Unleash clients will need an API token to grant access. A client SDK will need to token with "client privileges", which allows them to fetch feature toggle configuration and post usage metrics back.'),(0,r.kt)("h2",{id:"create-api-token"},"Create API Token"),(0,r.kt)("h3",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"To create an API token you'll need the CREATE_API_TOKEN permission level, at the time of writing (v4.0.0), this level is only set for instance admins."),(0,r.kt)("p",null,"Eventually one should be able to customize which users has access to create tokens."),(0,r.kt)("p",null,"All users are able to see tokens with CLIENT level access, but only instance admins can see tokens with ADMIN level access."),(0,r.kt)("h3",{id:"step-by-step"},"Step-by-step"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Select ",(0,r.kt)("inlineCode",{parentName:"strong"},"Advanced")," from the top-line menu"),"\n",(0,r.kt)("img",{alt:"Admin menu",src:n(9997).Z,width:"2880",height:"277"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Select ",(0,r.kt)("inlineCode",{parentName:"strong"},"API Access")," from the dropdown")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tab Menu",src:n(2149).Z,width:"2880",height:"1145"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Select ",(0,r.kt)("inlineCode",{parentName:"strong"},"API ACCESS")," from the tab men"),"\n",(0,r.kt)("img",{alt:"Tab Menu",src:n(2798).Z,width:"2880",height:"1406"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Click ",(0,r.kt)("inlineCode",{parentName:"strong"},"Add new API key")," at the top right of the page"),"\n",(0,r.kt)("img",{alt:"Tab Menu",src:n(9568).Z,width:"2880",height:"1400"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Client keys")),(0,r.kt)("p",null,"4a. If you're configuring an SDK select ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")," in the pop-up. And give the key an identifying name allowing you to recognize it later"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Api key client",src:n(7469).Z,width:"2469",height:"1362"})),(0,r.kt)("p",null,"5a. Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," column and add this to your client"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Api key list",src:n(9189).Z,width:"2186",height:"492"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Admin operations")),(0,r.kt)("p",null,"4a. If you're going to be using the admin interface via CURL you'll need a key with ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin")," rights. Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add new API key")," popup."),(0,r.kt)("p",null,"Remember to give the key a username allowing you to recognize the key in audit logs later"),(0,r.kt)("p",null,"5a. Copy the key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," column and use it in your authorization header. For curl, that would be ",(0,r.kt)("inlineCode",{parentName:"p"},'-H "Authorization: <yoursecrethere>"')))}u.isMDXComponent=!0},7469:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/add_new_api_key-08b1c88fb513d0053f22fa6480d2b0ac.png"},2149:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/admin_advanced_dropdown-840103259b6fbbcf932286249c1b699b.png"},9568:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/admin_new_api_key_button-be968d9802798b8cdb7b30e79d7cc6f0.png"},2798:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/admin_tab_menu-8797f4299b2f7913af913967263ff92d.png"},9997:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/admin_top-line_menu-25794afb7325d5faa26a9ff0a5cac167.png"},9189:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/api_key_list-f780fb27c135be9634f365ad92e3c206.png"}}]);