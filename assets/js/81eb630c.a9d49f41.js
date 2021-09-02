"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3069],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,k=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],r={id:"sso-saml-keycloak",title:"SSO - SAML 2.0 Keycloak"},s=void 0,c={unversionedId:"advanced/sso-saml-keycloak",id:"advanced/sso-saml-keycloak",isDocsHomePage:!1,title:"SSO - SAML 2.0 Keycloak",description:"The Single-Sign-On capability is only available for customers on the Enterprise subscription. Check out the Unleash plans for details.",source:"@site/docs/advanced/sso-saml-keycloak.md",sourceDirName:"advanced",slug:"/advanced/sso-saml-keycloak",permalink:"/advanced/sso-saml-keycloak",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/advanced/sso-saml-keycloak.md",tags:[],version:"current",frontMatter:{id:"sso-saml-keycloak",title:"SSO - SAML 2.0 Keycloak"},sidebar:"documentation",previous:{title:"SSO - SAML 2.0 Okta",permalink:"/advanced/sso-saml"},next:{title:"SSO - Google (deprecated)",permalink:"/advanced/sso-google"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Basic configuration",id:"basic-configuration",children:[{value:"Step 1: Sign-in to Unleash",id:"step-1",children:[]},{value:"Step 2: Navigate to SSO configuration",id:"step-2",children:[]},{value:"Step 3: Keycloak with SAML 2.0",id:"step-3",children:[]},{value:"Step 4: Configure SAML 2.0 Authentication provider in Unleash",id:"step-3",children:[]},{value:"Step 5: Validate",id:"step-5",children:[]}]}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("strong",{parentName:"p"},"Single-Sign-On capability")," is only available for customers on the Enterprise subscription. Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://www.getunleash.io/plans"},"Unleash plans")," for details.")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this guide we will do a deep dive on the Single-Sign-On (SSO) integration with SAML 2.0 and connect it with Keycloak as IdP. Unleash supports other identity providers and protocols, have a look at ",(0,o.kt)("a",{parentName:"p",href:"/advanced/enterprise-authentication"},"all available Single-Sign-On options")),(0,o.kt)("h2",{id:"basic-configuration"},"Basic configuration"),(0,o.kt)("h3",{id:"step-1"},"Step 1: Sign-in to Unleash"),(0,o.kt)("p",null,'In order to configure SSO you will need to log in to the Unleash instance with a user that have "Admin" role. If you are self-hosting Unleash then a default user will be automatically created the first time you start Unleash:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"username: ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")),(0,o.kt)("li",{parentName:"ul"},"password: ",(0,o.kt)("inlineCode",{parentName:"li"},"unleash4all"))),(0,o.kt)("h3",{id:"step-2"},"Step 2: Navigate to SSO configuration"),(0,o.kt)("p",null,'In order to configure SSO with SAML with your Unleash enterprise you should navigate to the Single-Sign-On configuration section and choose the "SAML 2.0" tab.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sso-config",src:n(6760).Z})),(0,o.kt)("h3",{id:"step-3"},"Step 3: Keycloak with SAML 2.0"),(0,o.kt)("p",null,"Open to the Keycloak dashboard and navigate to \u201cClients\u201d and click \u201cAdd Client\u201d button. Give it a unique clientId (e.g. unleash), use the \u201csaml\u201d protocol and specify the following SAML Endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://<unleash.hostname.com>/auth/saml/callback\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Keycloak: Add client",src:n(7978).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"a) Change \u201cName ID format to \u201cemail\u201d")," Unleash expects an email to be sent from the SSO provider so make sure Name ID format is set to email, see a). also you must give the IDP Initiated SSO URL Name, we have chosen to call it \u201cunleash\u201d, see 2). This gives us the Sign-on URL we will need in our Unleash configuration later."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Keycloak: step 2",src:n(5285).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"b) Copy the Keycloak Entity ID an Signing key")),(0,o.kt)("p",null,"Navigate to \u201cRealm Settings\u201d and open the \u201cSAML 2.0 Identity Provider Metadata\u201d. You will need copy the entityID (a) and the X509Certificate (B). These will be required when configuring SAML 2.0 in Unleash."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Keycloak: step 3",src:n(48).Z})),(0,o.kt)("h3",{id:"step-3"},"Step 4: Configure SAML 2.0 Authentication provider in Unleash"),(0,o.kt)("p",null,"Go back to Unleash Admin Dashboard and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin Menu -> Single-Sign-On -> SAML"),". Fill in the values captured in the step 3."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Entity ID (3b a)"),(0,o.kt)("li",{parentName:"ul"},"Single Sing-On URL (3a b)"),(0,o.kt)("li",{parentName:"ul"},"Certificate (3b b)")),(0,o.kt)("p",null,"You may also choose to \u201cauto create users\u201d. This will make Unleash automatically create new users on the fly first time they sign-in to Unleash with the given SSO provider. You may also limit the auto-creation to certain email domains, shown in the example below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Keycloak: step 4",src:n(5315).Z})),(0,o.kt)("h3",{id:"step-5"},"Step 5: Validate"),(0,o.kt)("p",null,"You have now successfully configured Unleash to use SAML 2.0 together with Keycloak as an IdP. Please note that you also must assign users to the application defined in Keycloak to actually be able to log-in to Unleash."),(0,o.kt)("p",null,"Try signing out of Unleash. If everything is configured correctly you should be presented with the option to sign in with SAML 2.0."))}d.isMDXComponent=!0},7978:function(e,t,n){t.Z=n.p+"assets/images/keykloak_step1-768x347-44d9190db1752ec4ed70c29499d145aa.png"},5285:function(e,t,n){t.Z=n.p+"assets/images/keykloak_step2b-768x242-eda1a0d74c67a5189fbc5b538170d11d.png"},48:function(e,t,n){t.Z=n.p+"assets/images/keykloak_step3-768x235-8b396e1cacb7dda0391f0904dc5b132b.png"},5315:function(e,t,n){t.Z=n.p+"assets/images/keykloak_step4-768x644-52af8c74af86573d7ec006a3084f25f5.png"},6760:function(e,t,n){t.Z=n.p+"assets/images/sso-configure-saml-b21f26aca67f7af1e116bc5a2d23204a.png"}}]);