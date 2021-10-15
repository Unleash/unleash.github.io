"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[99],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4264:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=r(3117),n=r(102),l=(r(7294),r(3905)),a=["components"],i={id:"rbac",title:"Role-based Access control"},s=void 0,c={unversionedId:"user_guide/rbac",id:"user_guide/rbac",isDocsHomePage:!1,title:"Role-based Access control",description:"This document forms the specifications for Role-Based Access Control which was introduced as part of the Unleash v4 release.",source:"@site/docs/user_guide/rbac.md",sourceDirName:"user_guide",slug:"/user_guide/rbac",permalink:"/user_guide/rbac",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/user_guide/rbac.md",tags:[],version:"current",frontMatter:{id:"rbac",title:"Role-based Access control"},sidebar:"documentation",previous:{title:"User Management",permalink:"/user_guide/user-management"},next:{title:"API Tokens",permalink:"/user_guide/api-token"}},u=[{value:"Core principles",id:"core-principles",children:[],level:3},{value:"Root Roles",id:"root-roles",children:[],level:3},{value:"Project",id:"project",children:[],level:3},{value:"Custom Roles",id:"custom-roles",children:[],level:3}],p={toc:u};function d(e){var t=e.components,i=(0,n.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document forms the specifications for ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Role-based_access_control"},"Role-Based Access Control")," which was introduced as part of the ",(0,l.kt)("strong",{parentName:"p"},"Unleash v4 release"),"."),(0,l.kt)("h3",{id:"core-principles"},"Core principles"),(0,l.kt)("p",null,"Unleash has two levels in it\u2019s hierarchy of resources:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Root resources")," - Everything that lives across the entire Unleash instance. Examples of this includes:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"activation strategies"),(0,l.kt)("li",{parentName:"ul"},"context field definitions"),(0,l.kt)("li",{parentName:"ul"},"addon configurations"),(0,l.kt)("li",{parentName:"ul"},"applications"),(0,l.kt)("li",{parentName:"ul"},"users"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Project resources")," - Resources which are only available under a project. Today this is only \u201cfeature toggles\u201d (but we expect more resources to live under a project in the future). A feature toggle will belong to only one single project. In Unleash-Open source there exists only a single project, the \u201cdefault\u201d project, while Unleash Enterprise supports multiple projects.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"RBAC overview",src:r(6238).Z})),(0,l.kt)("p",null,'Unleash v4 allows you control access to both "root resources" and individual project resources.'),(0,l.kt)("h3",{id:"root-roles"},"Root Roles"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Available for Unleash Open-Source and Unleash Enterprise.")),(0,l.kt)("p",null,'Unleash will come with three "root" role out of the box:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Admin")," - Used to administer the Unleash instance. Is allowed to add/remove users, add them to roles and update role permissions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Editor"),' - Represent users with typical read and write access to Unleash. They will typically be allowed to create new projects (for enterprise), create feature toggles on the "default" project, configure context fields etc. They will not be able to add/remove users or roles.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Viewer")," - Users with this role are only allowed to read resources in Unleash. They might be added as collaborators to specific projects.")),(0,l.kt)("h3",{id:"project"},"Project"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Project roles are part of Unleash Enterprise.")),(0,l.kt)("p",null,"Per project two roles are now available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Owner")," - Allowed to update the project. This includes adding and removing project members and their role."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Member")," - Allowed to create and update feature toggles within the project. They can not update the project itself")),(0,l.kt)("p",null,"It is important to highlight that we have not introduced a Viewer role on the project level. We believe that all users in Unleash should be able to to View all feature toggles and configuration within an organization. (If we learn this not to be the case we can add a separate role for READ access later)."),(0,l.kt)("h3",{id:"custom-roles"},"Custom Roles"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Will only be introduced for Unleash Enterprise.")),(0,l.kt)("p",null,'In a later iteration we will introduce the concept of "custom roles". This will allow full customization to meet internal needs of larger organisations. We believe these should be able to define access across both \u201croot resources\u201d and specific projects resources. We need further investigation with customers before we land custom roles.'),(0,l.kt)("p",null,"Please let us know if you have feedback or ideas on how custom roles should work in order to solve your company needs."))}d.isMDXComponent=!0},6238:function(e,t,r){t.Z=r.p+"assets/images/rbac-c1be44f92c7533ae331ef9e1933bbbdf.png"}}]);