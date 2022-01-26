"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[99],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4264:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"rbac",title:"Role-based Access control"},s=void 0,p={unversionedId:"user_guide/rbac",id:"user_guide/rbac",title:"Role-based Access control",description:"This document forms the specifications for Role-Based Access Control which was introduced as part of the Unleash v4 release.",source:"@site/docs/user_guide/rbac.md",sourceDirName:"user_guide",slug:"/user_guide/rbac",permalink:"/user_guide/rbac",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/user_guide/rbac.md",tags:[],version:"current",frontMatter:{id:"rbac",title:"Role-based Access control"},sidebar:"documentation",previous:{title:"Projects",permalink:"/user_guide/projects"},next:{title:"Single-Sign-On",permalink:"/advanced/enterprise-authentication"}},c=[{value:"Core principles",id:"core-principles",children:[],level:2},{value:"Standard roles",id:"standard-roles",children:[],level:2},{value:"Custom Project Roles",id:"custom-project-roles",children:[{value:"Project permissions",id:"project-permissions",children:[],level:3},{value:"Environment permissions",id:"environment-permissions",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document forms the specifications for ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Role-based_access_control"},"Role-Based Access Control")," which was introduced as part of the ",(0,o.kt)("strong",{parentName:"p"},"Unleash v4 release"),"."),(0,o.kt)("h2",{id:"core-principles"},"Core principles"),(0,o.kt)("p",null,"Unleash has two levels in it\u2019s hierarchy of resources:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Global resources")," - Everything that lives across the entire Unleash instance. Examples of this includes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"activation strategies"),(0,o.kt)("li",{parentName:"ul"},"context field definitions"),(0,o.kt)("li",{parentName:"ul"},"addon configurations"),(0,o.kt)("li",{parentName:"ul"},"applications"),(0,o.kt)("li",{parentName:"ul"},"users"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Project resources")," - Resources which are only available under a project. Today this is only \u201cfeature toggles\u201d (but we expect more resources to live under a project in the future). A feature toggle will belong to only one single project. In Unleash-Open source there exists only a single project, the \u201cdefault\u201d project, while Unleash Enterprise supports multiple projects.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RBAC overview",src:r(9755).Z})),(0,o.kt)("p",null,"Unleash v4 allows you control access to both global resources and individual project resources."),(0,o.kt)("h2",{id:"standard-roles"},"Standard roles"),(0,o.kt)("p",null,"Unleash comes with a set of built-in roles that you can use. The ",(0,o.kt)("em",{parentName:"p"},"global roles")," are available to all Unleash users, while the ",(0,o.kt)("em",{parentName:"p"},"project-based roles")," are only available to Pro and Enterprise users. The below table lists the roles, what they do, and what plans they are available in. Additionally, enterprise users can create their own ",(0,o.kt)("a",{parentName:"p",href:"#custom-project-roles"},"custom project roles"),"."),(0,o.kt)("p",null,"When you add a new user, you can assign them one of the global roles listed below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Role"),(0,o.kt)("th",{parentName:"tr",align:null},"Scope"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Availability"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Admin")),(0,o.kt)("td",{parentName:"tr",align:null},"Global"),(0,o.kt)("td",{parentName:"tr",align:null},"Users with the global admin role have superuser access to Unleash and can perform any operation within the Unleash platform."),(0,o.kt)("td",{parentName:"tr",align:null},"All versions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Editor")),(0,o.kt)("td",{parentName:"tr",align:null},"Global"),(0,o.kt)("td",{parentName:"tr",align:null},"Users with the editor role have access to most features in Unleash but can not manage users and roles in the global scope. Editors will be added as project owners when creating projects and get superuser rights within the context of these projects. Users with the editor role will also get access to most permissions on the default project by default."),(0,o.kt)("td",{parentName:"tr",align:null},"All versions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Viewer")),(0,o.kt)("td",{parentName:"tr",align:null},"Global"),(0,o.kt)("td",{parentName:"tr",align:null},"Users with the viewer role can read global resources in Unleash."),(0,o.kt)("td",{parentName:"tr",align:null},"All versions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Owner")),(0,o.kt)("td",{parentName:"tr",align:null},"Project"),(0,o.kt)("td",{parentName:"tr",align:null},"Users with this the project owner role have full control over the project, and can add and manage other users within the project context; manage feature toggles within the project; and control advanced project features like archiving and deleting the project."),(0,o.kt)("td",{parentName:"tr",align:null},"Pro and Enterprise")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Member")),(0,o.kt)("td",{parentName:"tr",align:null},"Project"),(0,o.kt)("td",{parentName:"tr",align:null},"Users with the project member role are allowed to view, create, and update feature toggles within a project, but have limited permissions in regards to managing the project's user access and can not archive or delete the project."),(0,o.kt)("td",{parentName:"tr",align:null},"Pro and Enterprise")))),(0,o.kt)("h2",{id:"custom-project-roles"},"Custom Project Roles"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"availability")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Custom project roles were introduced in ",(0,o.kt)("strong",{parentName:"p"},"Unleash 4.6")," and are only available in Unleash Enterprise."))),(0,o.kt)("p",null,"Custom project roles let you define your own roles with a specific set of project permissions down to the environment level. The roles can then be assigned to users in specific projects. All users have viewer access to all projects and resources, but must be assigned a project role to be allowed to edit a project's resources. For a step-by-step walkthrough of how to create and assign custom project roles, see ",(0,o.kt)("a",{parentName:"p",href:"/how-to/how-to-create-and-assign-custom-project-roles"},(0,o.kt)("em",{parentName:"a"},"how to create and assign custom project roles")),"."),(0,o.kt)("p",null,"Each custom project role consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},"name")," (required)"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},"role description")," (optional)"),(0,o.kt)("li",{parentName:"ul"},"a set of ",(0,o.kt)("strong",{parentName:"li"},"project permissions")," (optional)"),(0,o.kt)("li",{parentName:"ul"},"a set of ",(0,o.kt)("strong",{parentName:"li"},"environment permissions")," (optional)")),(0,o.kt)("h3",{id:"project-permissions"},"Project permissions"),(0,o.kt)("p",null,"You can assign the following project permissions. The permissions will be valid across all of the project's environments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"update the project")),(0,o.kt)("p",{parentName:"li"},"Lets the user update project settings, such as enabling/disabling environments, add users, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"delete the project")),(0,o.kt)("p",{parentName:"li"},"Lets the user delete the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"create feature toggles within the project")),(0,o.kt)("p",{parentName:"li"},"Lets the user create feature toggles within the project and create variants for said toggle. Note that they ",(0,o.kt)("strong",{parentName:"p"},"can not assign strategies")," to toggles without having the ",(0,o.kt)("em",{parentName:"p"},"create activation strategy")," permission for the corresponding environment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"update feature toggles within the project")),(0,o.kt)("p",{parentName:"li"},"Lets the user update feature toggle descriptions; mark toggles as stale / not stale; add, update, and remove toggle tags; and update toggle variants within the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"delete feature toggles within the project")),(0,o.kt)("p",{parentName:"li"},"Lets the user archive feature toggles within the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"change feature toggle project")),(0,o.kt)("p",{parentName:"li"},"Lets the user move toggles to other projects they have access to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"create/edit variants")),(0,o.kt)("p",{parentName:"li"},"Lets the user create and edit variants within the project."))),(0,o.kt)("h3",{id:"environment-permissions"},"Environment permissions"),(0,o.kt)("p",null,"You can assign the following permissions on a per-environment level within the project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"create activation strategies")),(0,o.kt)("p",{parentName:"li"},"Lets the user assign feature toggle activation strategies within the environment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"update activation strategies")),(0,o.kt)("p",{parentName:"li"},"Lets the user update feature toggle activation strategies within the environment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"delete activation strategies")),(0,o.kt)("p",{parentName:"li"},"Lets the user delete feature toggle activation strategies within the environment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"enable/disable toggles")),(0,o.kt)("p",{parentName:"li"},"Lets the user enable and disable toggles within the environment."))))}m.isMDXComponent=!0},9755:function(e,t,r){t.Z=r.p+"assets/images/rbac-c1be44f92c7533ae331ef9e1933bbbdf.png"}}]);