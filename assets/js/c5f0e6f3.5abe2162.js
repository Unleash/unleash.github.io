"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4121],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(o),u=r,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return o?n.createElement(h,i(i({ref:t},d),{},{components:o})):n.createElement(h,i({ref:t},d))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1108:(e,t,o)=>{o.d(t,{Z:()=>h});var n=o(7294),r=o(6010),a=o(5281),i=o(5999);const s="admonition_LlT9",c="admonitionHeading_tbUL",l="admonitionIcon_kALy",d="admonitionContent_S0QG";const p={note:{infimaClassName:"secondary",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:n.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:n.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:n.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:n.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:n.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function u(e){var t;const{mdxAdmonitionTitle:o,rest:r}=function(e){const t=n.Children.toArray(e),o=t.find((e=>{var t;return n.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=n.createElement(n.Fragment,null,t.filter((e=>e!==o)));return{mdxAdmonitionTitle:o,rest:r}}(e.children);return{...e,title:null!=(t=e.title)?t:o,children:r}}function h(e){const{children:t,type:o,title:i,icon:h}=u(e),g=function(e){var t;const o=null!=(t=m[e])?t:e;return p[o]||(console.warn('No admonition config found for admonition type "'+o+'". Using Info as fallback.'),p.info)}(o),f=null!=i?i:g.label,{iconComponent:v}=g,w=null!=h?h:n.createElement(v,null);return n.createElement("div",{className:(0,r.Z)(a.k.common.admonition,a.k.common.admonitionType(e.type),"alert","alert--"+g.infimaClassName,s)},n.createElement("div",{className:c},n.createElement("span",{className:l},w),f),n.createElement("div",{className:d},t))}},65:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(7294),r=o(1108);const a={tip:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16",ariaHidden:"true"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},i=e=>{let{title:t="video content",videoUrls:o,children:i}=e;return n.createElement("article",{className:"unleash-video-container"},n.createElement(r.Z,{icon:a.tip,title:t,type:"note"},i),n.createElement("div",{className:"videos"},o?o.map((e=>n.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0}))):n.createElement(r.Z,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly.")))}},6796:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(7462),r=(o(7294),o(3905)),a=o(65);const i={title:"How to create and assign custom project roles"},s=void 0,c={unversionedId:"how-to/how-to-create-and-assign-custom-project-roles",id:"how-to/how-to-create-and-assign-custom-project-roles",title:"How to create and assign custom project roles",description:"Custom project roles were introduced in Unleash 4.6 and are only available in Unleash Enterprise.",source:"@site/docs/how-to/how-to-create-and-assign-custom-project-roles.md",sourceDirName:"how-to",slug:"/how-to/how-to-create-and-assign-custom-project-roles",permalink:"/how-to/how-to-create-and-assign-custom-project-roles",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-create-and-assign-custom-project-roles.md",tags:[],version:"current",frontMatter:{title:"How to create and assign custom project roles"},sidebar:"documentation",previous:{title:"How to add new users to your Unleash instance",permalink:"/user_guide/user-management"},next:{title:"Single Sign-On (SSO)",permalink:"/how-to/sso"}},l={},d=[{value:"Creating custom project roles",id:"creating-custom-project-roles",level:2},{value:"Assigning custom project roles",id:"assigning-custom-project-roles",level:2}],p={toc:d};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Custom project roles were introduced in ",(0,r.kt)("strong",{parentName:"p"},"Unleash 4.6")," and are only available in Unleash Enterprise.")),(0,r.kt)("p",null,"This guide takes you through ",(0,r.kt)("a",{parentName:"p",href:"#creating-custom-project-roles",title:"how to create custom project roles"},"how to create")," and ",(0,r.kt)("a",{parentName:"p",href:"#assigning-custom-project-roles",title:"how to assign custom project roles"},"assign")," ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/rbac#custom-project-roles"},"custom project roles"),". Custom project roles allow you to fine-tune access rights and permissions within your projects."),(0,r.kt)(a.Z,{videoUrls:["https://www.youtube.com/embed/2BlckVMHxgE","https://www.youtube.com/embed/IqaD8iGxkwk"],mdxType:"VideoContent"},(0,r.kt)("p",null,"The guides on this page are also available in video format! Does a minute or two of watching someone walk through the steps sound better to you than following steps with static screenshots? If so, check out these video walkthroughs instead \ud83c\udf7f")),(0,r.kt)("h2",{id:"creating-custom-project-roles"},"Creating custom project roles"),(0,r.kt)("p",null,"It takes about three steps to create custom project roles:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the custom project roles page by using the admin menu (the gear symbol) and navigating to users.\n",(0,r.kt)("img",{alt:"A visual representation of the current step: the Unleash Admin UI with the steps highlighted.",src:o(9194).Z,width:"2849",height:"1300"})),(0,r.kt)("li",{parentName:"ol"},'Navigate to the "project roles" tab.\n',(0,r.kt)("img",{alt:"The admin/roles screen, with the project roles tab highlighted. The page shows a table of project roles with their descriptions.",src:o(5873).Z,width:"2841",height:"1924"})),(0,r.kt)("li",{parentName:"ol"},'Use the "new project role" button to open the role creation form.\n',(0,r.kt)("img",{alt:"The visual position of the &#39;new project role&#39; button on the page.",src:o(8101).Z,width:"2841",height:"1924"})),(0,r.kt)("li",{parentName:"ol"},"Give the role a name, an optional description, and the set of permissions you'd like it to have. For a full overview of all the options, consult the ",(0,r.kt)("a",{parentName:"li",href:"/user_guide/rbac#custom-project-roles"},"custom project roles reference documentation"),".\n",(0,r.kt)("img",{alt:"The project role creation form filled in with details for a &quot;developer&quot; role. To the left is the equivalent cURL command you could run if you wanted to use the API instead of the form.",src:o(6433).Z,width:"2813",height:"3342"}))),(0,r.kt)("h2",{id:"assigning-custom-project-roles"},"Assigning custom project roles"),(0,r.kt)("p",null,"Custom project role creation is a pretty straightforward process and requires around three steps, outlined below."),(0,r.kt)("p",null,"To assign a custom project role to a user:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the project you want to assign the user a role in.\n",(0,r.kt)("img",{alt:"The steps to navigate to a project: use the &#39;projects&#39; navigation item and select your project.",src:o(2252).Z,width:"2813",height:"1231"})),(0,r.kt)("li",{parentName:"ol"},"Navigate to the project's ",(0,r.kt)("em",{parentName:"li"},"access")," page.\n",(0,r.kt)("img",{alt:"A project overview with the &#39;access&#39; tab highlighted.",src:o(8923).Z,width:"2814",height:"1250"})),(0,r.kt)("li",{parentName:"ol"},"This step depends on whether the user has already been added to the project or not:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the user has already been added to the project, select the new role you want to give them from the dropdown menu next to their name.\n",(0,r.kt)("img",{alt:"A list of users with access to the current project. To the right of each user is a dropdown input labeled role.",src:o(3004).Z,width:"2814",height:"1329"})),(0,r.kt)("li",{parentName:"ul"},"If the user ",(0,r.kt)("em",{parentName:"li"},"hasn't")," been added to the project, add them via the 'add user' form. Select the role you want to give them from the role field.\n",(0,r.kt)("img",{alt:"Adding a user to a project. The add user form is filled out with data for an &quot;Alexis&quot;. The Role input is open and the custom &quot;Developer&quot; role is highlighted.",src:o(759).Z,width:"2849",height:"1300"}))))))}m.isMDXComponent=!0},2252:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/assign-cpr-step-1-087b851f04df29d457853ffd949079c0.png"},8923:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/assign-cpr-step-2-b005093425d6fc11b46d1dbe2c51ca2a.png"},3004:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/assign-cpr-step-3a-7ff9c67bdc468d0b1faf0b33e4bc3fed.png"},759:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/assign-cpr-step-3b-4c7ffc6ea1be62ee507bfcb7107d6a86.png"},9194:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create-cpr-step-1-4b53eefb29114b446229ab48876fba1d.png"},5873:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create-cpr-step-2-63dd3cc862796e9d45bd09c0a807204c.png"},8101:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create-cpr-step-3-87502af5e6e82e668062bce5d8558738.png"},6433:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create-cpr-step-4-a78ae6c5d9d619445ef24a89b4d8a273.png"}}]);