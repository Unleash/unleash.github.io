"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3369],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5580:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"v4-whats-new",title:"What's new in v4?"},l=void 0,u={unversionedId:"user_guide/v4-whats-new",id:"user_guide/v4-whats-new",isDocsHomePage:!1,title:"What's new in v4?",description:"Version 4 of Unleash brings a lot of improvements to Unleash. In this document we will highlight some of the things that has been added.",source:"@site/docs/user_guide/whats-new-v4.md",sourceDirName:"user_guide",slug:"/user_guide/v4-whats-new",permalink:"/user_guide/v4-whats-new",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/user_guide/whats-new-v4.md",tags:[],version:"current",frontMatter:{id:"v4-whats-new",title:"What's new in v4?"},sidebar:"documentation",previous:{title:"Important Concepts",permalink:"/user_guide/important-concepts"},next:{title:"Create a feature toggle",permalink:"/user_guide/create_feature_toggle"}},c=[{value:"Upgrade with ease",id:"upgrade-with-ease",children:[],level:3},{value:"Role-Based Access Control",id:"role-based-access-control",children:[],level:3},{value:"New Addons",id:"new-addons",children:[],level:3},{value:"Improved UX",id:"improved-ux",children:[],level:3},{value:"New SSO Option",id:"new-sso-option",children:[],level:3},{value:"User Management",id:"user-management",children:[],level:3},{value:"API access",id:"api-access",children:[],level:3},{value:"Custom stickiness",id:"custom-stickiness",children:[],level:3}],d={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Version 4 of Unleash brings a lot of improvements to Unleash. In this document we will highlight some of the things that has been added."),(0,o.kt)("h3",{id:"upgrade-with-ease"},"Upgrade with ease"),(0,o.kt)("p",null,"Unleash can either be hosted by us or self-hosted. If you have a managed Unleash Enterprise instance you are automatically upgraded to version 4. If you manage Unleash yourself (either Open-Source or Enterprise Self-hosted) we recommend reading the ",(0,o.kt)("a",{parentName:"p",href:"/deploy/migration_guide"},"migration guide"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PS! The first time you access Unleash v4 from a self-hosted instance you will need to login with the default admin user:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"username: ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")),(0,o.kt)("li",{parentName:"ul"},"password: ",(0,o.kt)("inlineCode",{parentName:"li"},"unleash4all"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(We recommend changing the password of the default user from the admin section.)")),(0,o.kt)("h3",{id:"role-based-access-control"},"Role-Based Access Control"),(0,o.kt)("p",null,"With Role-Based Access Control you can now assign groups to users in order to control access. You can control access to root resources in addition to controlling access to ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/projects"},"projects"),". ",(0,o.kt)("em",{parentName:"p"},'Please be aware that all existing users will become "Owner" of all existing projects as part of the migration from v3 to v4.')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/user_guide/rbac"},"Read more")),(0,o.kt)("h3",{id:"new-addons"},"New Addons"),(0,o.kt)("p",null,"Addons make it easy to integrate Unleash with other systems. In version 4 we bring two new integrations to Unleash:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../addons/teams"},"Microsoft Teams")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/addons/datadog"},"Datadog"))),(0,o.kt)("h3",{id:"improved-ux"},"Improved UX"),(0,o.kt)("p",null,"Unleash v4 includes a new implementation of the frontend based on ",(0,o.kt)("a",{parentName:"p",href:"https://material-ui.com"},"Material-ui"),". This will make it much easier for us to improve the Unleash Admin UI and our ambition is to make it intuitive to use even for non-developers. The improved UX is made available in Unleash Open-Source and Unleash Enterprise."),(0,o.kt)("h3",{id:"new-sso-option"},"New SSO Option"),(0,o.kt)("p",null,"In version 4 we added support for ",(0,o.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect")," as part of the Unleash Enterprise offering. OpenID Connect is a simple identity layer on top of the OAuth 2.0 protocol. It allows Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner."),(0,o.kt)("h3",{id:"user-management"},"User Management"),(0,o.kt)("p",null,"In version 4 we improved the User Management and made it available for Unleash Open-Source and Unleash Enterprise. Starting in v4 all users accessing Unleash needs to exist in Unleash in order to gain access (because they need to have the proper permission from RBAC.)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/user_guide/user-management"},"Read more")),(0,o.kt)("h3",{id:"api-access"},"API access"),(0,o.kt)("p",null,"In version 4 we improved the API Access and made it available for Unleash Open-Source and Unleash Enterprise. Starting from Unleash v4 we require all SDKs to use an access token in order to connect to Unleash."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/advanced/api_access"},"Read more")),(0,o.kt)("h3",{id:"custom-stickiness"},"Custom stickiness"),(0,o.kt)("p",null,'In Unleash Enterprise v4 you can configure stickiness when you are doing a gradual rollout with the "flexible rollout" strategy or together with feature toggle variants. This means that you can now have consistent behavior based on any field available on the ',(0,o.kt)("a",{parentName:"p",href:"/user_guide/unleash_context"},"Unleash context"),"."))}p.isMDXComponent=!0}}]);