"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={id:"sso-google",title:"[Deprecated] How to add SSO with Google"},l=void 0,r={unversionedId:"advanced/sso-google",id:"advanced/sso-google",title:"[Deprecated] How to add SSO with Google",description:"Single Sign-on via the Google Authenticator provider is deprecated. We recommend using OpenId Connect instead.",source:"@site/docs/advanced/sso-google.md",sourceDirName:"advanced",slug:"/advanced/sso-google",permalink:"/advanced/sso-google",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/advanced/sso-google.md",tags:[],version:"current",frontMatter:{id:"sso-google",title:"[Deprecated] How to add SSO with Google"},sidebar:"documentation",previous:{title:"How to add SSO with SAML 2.0 Keycloak",permalink:"/advanced/sso-saml-keycloak"},next:{title:"Reference documentation",permalink:"/reference"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Basic configuration",id:"basic-configuration",level:2},{value:"Step 1: Sign-in to Unleash",id:"step-1",level:3},{value:"Step 2: Navigate to SSO configuration",id:"step-2",level:3},{value:"Step 3: Google Authentication",id:"step-3n",level:3},{value:"Step 4: Configure Unleash",id:"step-4",level:3},{value:"Step 5: Verify",id:"step-5",level:3}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Single Sign-on via the Google Authenticator provider is deprecated. We recommend using ",(0,a.kt)("a",{parentName:"p",href:"/advanced/sso-open-id-connect"},"OpenId Connect")," instead.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this guide we will do a deep dive on the Single-Sign-On (SSO) using Google Authentication. Unleash supports other identity providers and protocols, have a look at ",(0,a.kt)("a",{parentName:"p",href:"/advanced/enterprise-authentication"},"all available Single-Sign-On options")),(0,a.kt)("h2",{id:"basic-configuration"},"Basic configuration"),(0,a.kt)("h3",{id:"step-1"},"Step 1: Sign-in to Unleash"),(0,a.kt)("p",null,'In order to configure SSO you will need to log in to the Unleash instance with a user that have "Admin" role. If you are self-hosting Unleash then a default user will be automatically created the first time you start Unleash:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"username: ",(0,a.kt)("inlineCode",{parentName:"li"},"admin")),(0,a.kt)("li",{parentName:"ul"},"password: ",(0,a.kt)("inlineCode",{parentName:"li"},"unleash4all"))),(0,a.kt)("h3",{id:"step-2"},"Step 2: Navigate to SSO configuration"),(0,a.kt)("p",null,'In order to configure SSO with Google with your Unleash enterprise you should navigate to the Single-Sign-On configuration section and choose the "Google" tab.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sso-config",src:n(8553).Z,width:"1218",height:"280"})),(0,a.kt)("h3",{id:"step-3n"},"Step 3: Google Authentication"),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials"},"https://console.developers.google.com/apis/credentials")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create credentials")),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Oauth Client Id")),(0,a.kt)("li",{parentName:"ol"},"Choose Application Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"web application")),(0,a.kt)("li",{parentName:"ol"},"Add https://","[unleash.hostname.com]","/auth/google/callback as an authorized redirect URI.")),(0,a.kt)("p",null,"You will then get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Client ID")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"Client Secret")," that you will need in the next step."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Google OAuth: Secret",src:n(3100).Z,width:"2000",height:"762"})),(0,a.kt)("h3",{id:"step-4"},"Step 4: Configure Unleash"),(0,a.kt)("p",null,"Login to Unleash and navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Admin menu -> Single-Sign-on -> Google"),"."),(0,a.kt)("p",null,"First insert the Client Id and Client Secret from step 3."),(0,a.kt)("p",null,"You must also specify the hostname Unleash is running on. If Unleash is running on localhost you should specify the port as well (localhost:4242)."),(0,a.kt)("p",null,"If you want to allow everyone in your organization to access Unleash, and have Unleash auto-create users you can enable this option. You should then also specify which email domains you want to allow logging in to Unleash."),(0,a.kt)("p",null,"Remember to click \u201cSave\u201d to store your settings."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Google OAuth: Secret",src:n(3623).Z,width:"1636",height:"1612"})),(0,a.kt)("h3",{id:"step-5"},"Step 5: Verify"),(0,a.kt)("p",null,"Logout of Unleash and sign back in again. You should now be presented with the \u201cSSO Authentication Option\u201d. Click the button and follow the sign-in flow. If all goes well you should be successfully signed in to Unleash. If something is not working you can still sign-in with username and password."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Verify SSO",src:n(9695).Z,width:"2524",height:"1568"})))}d.isMDXComponent=!0},3623:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/google_auth_settings-58709fa82fb8796b53dc6c4f43fb36e4.png"},9695:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sign-in-google-7e1cc137cee63eb79e907cbc79d014da.png"},8553:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-configure-079e9d928b1ab9eeca86b65c8c4b23d8.png"},3100:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sso-google-secret-de05554f0d394674c37f068b4fb74e6a.png"}}]);