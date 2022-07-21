"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"user-management",title:"How to add new users to your Unleash instance"},i=void 0,s={unversionedId:"user_guide/user-management",id:"user_guide/user-management",title:"How to add new users to your Unleash instance",description:"This feature was introduced in Unleash v4 for Unleash Open-Source.",source:"@site/docs/user_guide/user-management.md",sourceDirName:"user_guide",slug:"/user_guide/user-management",permalink:"/user_guide/user-management",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/user_guide/user-management.md",tags:[],version:"current",frontMatter:{id:"user-management",title:"How to add new users to your Unleash instance"},sidebar:"documentation",previous:{title:"Users and permissions",permalink:"/how-to/users-and-permissions"},next:{title:"How to create and assign custom project roles",permalink:"/how-to/how-to-create-and-assign-custom-project-roles"}},u={},l=[],c={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This feature was introduced in Unleash v4 for Unleash Open-Source.")),(0,o.kt)("p",null,"You can add new users to Unleash in ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin > Users"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the top-line menu \u2013 click on the \u201cSettings Wheel\u201d then click on \u201cUsers\u201d.\n",(0,o.kt)("img",{alt:"A visual representation of the current step: the Unleash Admin UI with the steps highlighted.",src:n(9273).Z,width:"2873",height:"1286"}))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'To add a new user to your Unleash instance simply click the "Add user" button:\n',(0,o.kt)("img",{alt:"The Unleash users page with the &#39;add new user&#39; button being pointed to.",src:n(1697).Z,width:"2048",height:"1114"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Fill out the required fields about the user in the modal. You need to choose which role the new user should have on the "root level". E.g. giving the user an Editor role will allow the user to create a new project.'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"A form titled &quot;Add team member&quot;. It has the fields &quot;full name&quot;, &quot;email&quot;, and &quot;role&quot;. The role field is a radio button set with roles called &quot;admin&quot;, &quot;editor&quot;, and &quot;viewer&quot;.",src:n(3294).Z,width:"2880",height:"1569"})),(0,o.kt)("p",{parentName:"li"},"If you have configured an email server the user will receive the invite link in her inbox, otherwise you should share the magic invite link to Unleash presented in the confirmation dialogue."))))}d.isMDXComponent=!0},1697:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/user_admin-add-user-eb02a90f0958efa0b915b3a665c6491c.jpg"},3294:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/user_admin_add_user_modal-a211506208d5043111f77451b3a0b51d.png"},9273:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/user_admin_list_button-71dbf265e0f53bb246e730e1ba2e132a.png"}}]);