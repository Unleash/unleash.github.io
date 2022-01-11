"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5870],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9884:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={id:"user-management",title:"User Management"},s=void 0,l={unversionedId:"user_guide/user-management",id:"user_guide/user-management",title:"User Management",description:"This feature was introduced in Unleash v4 for Unleash Open-Source.",source:"@site/docs/user_guide/user-management.md",sourceDirName:"user_guide",slug:"/user_guide/user-management",permalink:"/user_guide/user-management",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/user_guide/user-management.md",tags:[],version:"current",frontMatter:{id:"user-management",title:"User Management"},sidebar:"documentation",previous:{title:"Unleash Context",permalink:"/user_guide/unleash_context"},next:{title:"Role-based Access control",permalink:"/user_guide/rbac"}},c=[],p={toc:c};function d(e){var t=e.components,u=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This feature was introduced in Unleash v4 for Unleash Open-Source.")),(0,a.kt)("p",null,"You can manage users with access to Unleash in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Admin > Users"),"."),(0,a.kt)("p",null,"From the top-line menu \u2013 click on the \u201cSettings Wheel\u201d then click on \u201cUsers\u201d.\n",(0,a.kt)("img",{alt:"Add user button",src:n(3256).Z})),(0,a.kt)("p",null,'To add a new user to your Unleash instance simply click the "Add user" button:\n',(0,a.kt)("img",{alt:"Add user button",src:n(8282).Z})),(0,a.kt)("p",null,'Fill out the required fields about the user in the modal. You need to choose which role the new user should have on the "root level". E.g. giving the user an Editor role will allow the user to create a new project.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add user button",src:n(2553).Z})),(0,a.kt)("p",null,"If you have configured an email server the user will receive the invite link in her inbox, otherwise you should share the magic invite link to Unleash presented in the confirmation dialogue."))}d.isMDXComponent=!0},8282:function(e,t,n){t.Z=n.p+"assets/images/user_admin-add-user-eb02a90f0958efa0b915b3a665c6491c.jpg"},2553:function(e,t,n){t.Z=n.p+"assets/images/user_admin_add_user_modal-a211506208d5043111f77451b3a0b51d.png"},3256:function(e,t,n){t.Z=n.p+"assets/images/user_admin_list_button-71dbf265e0f53bb246e730e1ba2e132a.png"}}]);