(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3209],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(r),d=o,f=g["".concat(l,".").concat(d)]||g[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3250:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],c={id:"projects",title:"Projects"},l={unversionedId:"user_guide/projects",id:"user_guide/projects",isDocsHomePage:!1,title:"Projects",description:"Project support is available as part of Unleash Enterprise.",source:"@site/docs/user_guide/projects.md",sourceDirName:"user_guide",slug:"/user_guide/projects",permalink:"/user_guide/projects",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/user_guide/projects.md",version:"current",frontMatter:{id:"projects",title:"Projects"},sidebar:"documentation",previous:{title:"Control rollout",permalink:"/user_guide/control_rollout"},next:{title:"Unleash Context",permalink:"/user_guide/unleash_context"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Understanding purpose of projects",id:"understanding-purpose-of-projects",children:[]},{value:"Creating a new project",id:"creating-a-new-project",children:[]},{value:"Deleting an existing project",id:"deleting-an-existing-project",children:[]},{value:"Filter feature toggles on projects",id:"filter-feature-toggles-on-projects",children:[]},{value:"Assigning project to a new feature toggle",id:"assigning-project-to-a-new-feature-toggle",children:[]},{value:"Change project for an existing feature toggle",id:"change-project-for-an-existing-feature-toggle",children:[]}],p={toc:s};function u(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Project support is available as part of Unleash Enterprise.")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This topic explains how projects are supported in Unleash, how to create and maintain them."),(0,a.kt)("h2",{id:"understanding-purpose-of-projects"},"Understanding purpose of projects"),(0,a.kt)("p",null,"Projects are a way to organize your feature toggles within Unleash. Within a large organization, having multiple feature toggles, staying on top of the feature toggles might become a challenge. Every feature toggle will be part of a project. Projects can be linked to a development team or to functional modules within the software."),(0,a.kt)("p",null,"A common pattern is to organize the feature toggles according to key areas of the application, e.g. \u201cBasic user process\u201d and \u201cAdvanced user process\u201d. This is illustrated below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(5756).Z})),(0,a.kt)("h2",{id:"creating-a-new-project"},"Creating a new project"),(0,a.kt)("p",null,"When you log into Unleash for the first time, there is a Default project already created. All feature toggles are included in the Default project, unless explicitly set to a different one."),(0,a.kt)("p",null,"From the top-line menu \u2013 click on the hamburger icon."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(2488).Z})),(0,a.kt)("p",null,"From the menu \u2013 choose \u201cProjects\u201d"),(0,a.kt)("img",{src:"/img/projects_menu_open.png",alt:"menu open",width:"200"}),(0,a.kt)("p",null,"The available projects will now be listed. To create a new Project \u2013 choose the \u201c+\u201d"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(1578).Z})),(0,a.kt)("p",null,"The configuration of a new Project is now available. the following input is available to create the new Project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(3536).Z})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Project Id"),(0,a.kt)("td",{parentName:"tr",align:null},"Id for this Project")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Project name"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the Project.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description"),(0,a.kt)("td",{parentName:"tr",align:null},"A short description of the project")))),(0,a.kt)("h2",{id:"deleting-an-existing-project"},"Deleting an existing project"),(0,a.kt)("p",null,"To keep your feature toggles clean, removing deprecated projects is important. From the overview of Projects \u2013 choose the Delete button for the project you want to delete."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(3223).Z})),(0,a.kt)("h2",{id:"filter-feature-toggles-on-projects"},"Filter feature toggles on projects"),(0,a.kt)("p",null,"When browsing the feature toggles in Unleash, you might want to filter the view by looking only at the ones included in the project of interest. This is possible from the Feature toggle overview."),(0,a.kt)("p",null,"From the top-line menu \u2013 choose the hamburger icon"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(2488).Z})),(0,a.kt)("p",null,"From the menu \u2013 choose \u201cFeature toggles\u201d"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(8998).Z})),(0,a.kt)("p",null,"The list of features toggles can be filtered on the project of your choice. By default, all feature toggles are listed in the view."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(5469).Z})),(0,a.kt)("p",null,"From the drop-down, chose the project to filter on."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(335).Z})),(0,a.kt)("p",null,"The view will now be updated with the filtered feature toggles."),(0,a.kt)("h2",{id:"assigning-project-to-a-new-feature-toggle"},"Assigning project to a new feature toggle"),(0,a.kt)("p",null,"When creating a new feature toggle, the project where the feature toggle will be created may be chosen. The default project is \u201cDefault\u201d"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(5308).Z})),(0,a.kt)("p",null,"All available projects are available from the drop-down menu."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(6556).Z})),(0,a.kt)("h2",{id:"change-project-for-an-existing-feature-toggle"},"Change project for an existing feature toggle"),(0,a.kt)("p",null,"There might be a need to change the project a feature toggle belongs to. Changing the project is possible from the feature toggle configuration page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project concept",src:r(5221).Z})),(0,a.kt)("p",null,"To change the project, simply change the project from the drop-down menu."))}u.isMDXComponent=!0},8998:function(e,t,r){"use strict";t.Z=r.p+"assets/images/feature_toggles_menu-20e3311569e58b9fbc74d0234d442e9d.png"},5756:function(e,t,r){"use strict";t.Z=r.p+"assets/images/project_concept-1609d99bdb73f944b91441bcd8340005.png"},5469:function(e,t,r){"use strict";t.Z=r.p+"assets/images/project_select-16ffc68d600250dbecd3c8f7481b2b1a.png"},5308:function(e,t,r){"use strict";t.Z=r.p+"assets/images/projects_change_project-75ab5c01a5bfa8f670e1e7101b4283e3.png"},3223:function(e,t,r){"use strict";t.Z=r.p+"assets/images/projects_delete_button-b09fae6d3ed278bed05dd09ac430455b.png"},5221:function(e,t,r){"use strict";t.Z=r.p+"assets/images/projects_existing_toggle_dropdown-b564da687ed1f141a46d12cc33113661.png"},2488:function(e,t,r){"use strict";t.Z=r.p+"assets/images/projects_menu-325e5065c1aedb077a923368d5aabbb5.png"},1578:function(e,t,r){"use strict";t.Z=r.p+"assets/images/projects_new_project-c2670c0b5a859c7e7ae42e617419c4fa.png"},3536:function(e,t,r){"use strict";t.Z=r.p+"assets/images/projects_save_new_project-a32e963538e9fa9481bb08c947132db8.png"},335:function(e,t,r){"use strict";t.Z=r.p+"assets/images/projects_select_dropdown-f4525df54def54e34ef5ec07d56d5191.png"},6556:function(e,t,r){"use strict";t.Z=r.p+"assets/images/projects_toggle_project_dropdown-339a3cfcd7f55be6a8ade65b8ee2b951.png"}}]);