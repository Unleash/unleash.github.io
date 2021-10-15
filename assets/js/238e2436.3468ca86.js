"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4500],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6568:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={id:"api-token",title:"API Tokens"},s=void 0,c={unversionedId:"user_guide/api-token",id:"user_guide/api-token",isDocsHomePage:!1,title:"API Tokens",description:'In order to connect to Unleash clients will need an API token to grant access. A client SDK will need to token with "client privileges", which allows them to fetch feature toggle configuration and post usage metics back.',source:"@site/docs/user_guide/token.md",sourceDirName:"user_guide",slug:"/user_guide/api-token",permalink:"/user_guide/api-token",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/user_guide/token.md",tags:[],version:"current",frontMatter:{id:"api-token",title:"API Tokens"},sidebar:"documentation",previous:{title:"Role-based Access control",permalink:"/user_guide/rbac"},next:{title:"Technical Debt",permalink:"/user_guide/technical_debt"}},p=[{value:"Create API Token",id:"create-api-token",children:[{value:"Permissions",id:"permissions",children:[],level:3},{value:"Step-by-step",id:"step-by-step",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'In order to connect to Unleash clients will need an API token to grant access. A client SDK will need to token with "client privileges", which allows them to fetch feature toggle configuration and post usage metics back.'),(0,o.kt)("h2",{id:"create-api-token"},"Create API Token"),(0,o.kt)("h3",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"To create an API token you'll need the CREATE_API_TOKEN permission level, at the time of writing (v4.0.0), this level is only set for instance admins."),(0,o.kt)("p",null,"Eventually one should be able to customize which users has access to create tokens."),(0,o.kt)("p",null,"All users are able to see tokens with CLIENT level access, but only instance admins can see tokens with ADMIN level access."),(0,o.kt)("h3",{id:"step-by-step"},"Step-by-step"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Select ",(0,o.kt)("inlineCode",{parentName:"strong"},"Advanced")," from the top-line menu"),"\n",(0,o.kt)("img",{alt:"Admin menu",src:n(1517).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Select ",(0,o.kt)("inlineCode",{parentName:"strong"},"API Access")," from the dropdown")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tab Menu",src:n(695).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Select ",(0,o.kt)("inlineCode",{parentName:"strong"},"API ACCESS")," from the tab men"),"\n",(0,o.kt)("img",{alt:"Tab Menu",src:n(5574).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Click ",(0,o.kt)("inlineCode",{parentName:"strong"},"Add new API key")," at the top right of the page"),"\n",(0,o.kt)("img",{alt:"Tab Menu",src:n(873).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Client keys")),(0,o.kt)("p",null,"4a. If you're configuring an SDK select ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," in the pop-up. And give the key an identifying name allowing you to recognize it later"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Api key client",src:n(8099).Z})),(0,o.kt)("p",null,"5a. Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret")," column and add this to your client"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Api key list",src:n(4016).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Admin operations")),(0,o.kt)("p",null,"4a. If you're going to be using the admin interface via CURL you'll need a key with ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin")," rights. Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add new API key")," popup."),(0,o.kt)("p",null,"Remember to give the key a username allowing you to recognize the key in audit logs later"),(0,o.kt)("p",null,"5a. Copy the key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret")," column and use it in your authorization header. For curl, that would be ",(0,o.kt)("inlineCode",{parentName:"p"},'-H "Authorization: <yoursecrethere>"')))}d.isMDXComponent=!0},8099:function(e,t,n){t.Z=n.p+"assets/images/add_new_api_key-08b1c88fb513d0053f22fa6480d2b0ac.png"},695:function(e,t,n){t.Z=n.p+"assets/images/admin_advanced_dropdown-840103259b6fbbcf932286249c1b699b.png"},873:function(e,t,n){t.Z=n.p+"assets/images/admin_new_api_key_button-be968d9802798b8cdb7b30e79d7cc6f0.png"},5574:function(e,t,n){t.Z=n.p+"assets/images/admin_tab_menu-8797f4299b2f7913af913967263ff92d.png"},1517:function(e,t,n){t.Z=n.p+"assets/images/admin_top-line_menu-25794afb7325d5faa26a9ff0a5cac167.png"},4016:function(e,t,n){t.Z=n.p+"assets/images/api_key_list-f780fb27c135be9634f365ad92e3c206.png"}}]);