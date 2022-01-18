"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3209],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(o),d=n,f=g["".concat(s,".").concat(d)]||g[d]||u[d]||a;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},6247:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],l={id:"projects",title:"Projects"},s=void 0,c={unversionedId:"user_guide/projects",id:"user_guide/projects",title:"Projects",description:"Projects are part of Unleash Pro and Unleash Enterprise.",source:"@site/docs/user_guide/projects.md",sourceDirName:"user_guide",slug:"/user_guide/projects",permalink:"/user_guide/projects",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/user_guide/projects.md",tags:[],version:"current",frontMatter:{id:"projects",title:"Projects"},sidebar:"documentation",previous:{title:"Control rollout",permalink:"/user_guide/control_rollout"},next:{title:"Environments",permalink:"/user_guide/environments"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Understanding purpose of projects",id:"understanding-purpose-of-projects",children:[],level:2},{value:"Creating a new project",id:"creating-a-new-project",children:[],level:2},{value:"Deleting an existing project",id:"deleting-an-existing-project",children:[],level:2},{value:"Filter feature toggles on projects",id:"filter-feature-toggles-on-projects",children:[],level:2},{value:"Assigning project to a new feature toggle",id:"assigning-project-to-a-new-feature-toggle",children:[],level:2},{value:"Change project for an existing feature toggle",id:"change-project-for-an-existing-feature-toggle",children:[],level:2}],u={toc:p};function g(e){var t=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"alert alert--info",role:"alert"},"Projects are part of Unleash Pro and Unleash Enterprise."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This topic explains how projects are supported in Unleash, how to create and maintain them."),(0,a.kt)("h2",{id:"understanding-purpose-of-projects"},"Understanding purpose of projects"),(0,a.kt)("p",null,"Projects are a way to organize your feature toggles within Unleash. Within a large organization, having multiple feature toggles, staying on top of the feature toggles might become a challenge. Every feature toggle will be part of a project. Projects can be linked to a development team or to functional modules within the software."),(0,a.kt)("p",null,"A common pattern is to organize the feature toggles according to key areas of the application, e.g. \u201cBasic user process\u201d and \u201cAdvanced user process\u201d. This is illustrated below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A diagram with two boxes labeled &quot;Basic user process&quot; and &quot;Advanced user process&quot;, respectively. The former contains features &quot;New login&quot; and &quot;Winter theme enablement&quot;, the latter &quot;New in-app purchase&quot; and &quot;Updated invoice repository&quot;.",src:o(8011).Z})),(0,a.kt)("h2",{id:"creating-a-new-project"},"Creating a new project"),(0,a.kt)("p",null,"When you log into Unleash for the first time, there is a Default project already created. All feature toggles are included in the Default project, unless explicitly set to a different one."),(0,a.kt)("p",null,"From the top-line menu \u2013 click on \u201cProjects\u201d"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Unleash admin UI with the &quot;Projects&quot; nav link in the top bar highlighted.",src:o(743).Z})),(0,a.kt)("p",null,"The available projects will now be listed. To create a new Project \u2013 choose the \u201cAdd new project\u201d"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A list of projects. There is a button saying &quot;Add new project&quot;.",src:o(8848).Z})),(0,a.kt)("p",null,"The configuration of a new Project is now available. the following input is available to create the new Project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A project creation form. The form fields are labeled &quot;project ID&quot;, &quot;name&quot;, and &quot;description&quot;. The &quot;Create&quot; button is highlighted.",src:o(108).Z})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Project Id"),(0,a.kt)("td",{parentName:"tr",align:null},"Id for this Project")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Project name"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the Project.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description"),(0,a.kt)("td",{parentName:"tr",align:null},"A short description of the project")))),(0,a.kt)("h2",{id:"deleting-an-existing-project"},"Deleting an existing project"),(0,a.kt)("p",null,"To keep your feature toggles clean, removing deprecated projects is important. From the overview of Projects \u2013"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the top right of the project card, find the project menu represented by three vertical dots.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A list of projects. Each project has three vertical dots \u2014 a kebab menu \u2014 next to it.",src:o(9010).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Click on Delete Project")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A list of projects. Each project has three vertical dots \u2014 a kebab menu \u2014 next to it, which exposes a menu with the &quot;Edit project&quot; and &quot;Delete project&quot; options when interacted with.",src:o(3064).Z})),(0,a.kt)("h2",{id:"filter-feature-toggles-on-projects"},"Filter feature toggles on projects"),(0,a.kt)("p",null,"When browsing the feature toggles in Unleash, you might want to filter the view by looking only at the ones included in the project of interest. This is possible from the Feature toggle overview."),(0,a.kt)("p",null,'From the UI top navigation menu, choose "Feature toggles".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Unleash Admin UI navigation menu with the &quot;Feature toggles&quot; option highlighted by a red arrow.",src:o(4911).Z})),(0,a.kt)("p",null,"The list of features toggles can be filtered on the project of your choice. By default, all feature toggles are listed in the view."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The feature toggle list with toggles scoped to the &quot;fintech&quot; project. The filter is activated by using a form control.",src:o(616).Z})),(0,a.kt)("p",null,"From the drop-down, chose the project to filter on."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The feature toggle list with an overlay listing all the projects available. You can select a project and the list will update with the toggles belonging to that project.",src:o(3713).Z})),(0,a.kt)("p",null,"The view will now be updated with the filtered feature toggles."),(0,a.kt)("h2",{id:"assigning-project-to-a-new-feature-toggle"},"Assigning project to a new feature toggle"),(0,a.kt)("p",null,"When you create a new feature toggle, you can choose which project to create it in. The default project is whatever project you are currently configuring."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A form to create a toggle. An arrow points to an input labeled &quot;project&quot;.",src:o(3950).Z})),(0,a.kt)("p",null,"All available projects are available from the drop-down menu."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A form to create a toggle. The &quot;project&quot; input is expanded to show projects you can create the toggle in.",src:o(4693).Z})),(0,a.kt)("h2",{id:"change-project-for-an-existing-feature-toggle"},"Change project for an existing feature toggle"),(0,a.kt)("p",null,"If you want to change which project a feature toggle belongs to, you can change that from the feature toggle's configuration page. Under the ",(0,a.kt)("em",{parentName:"p"},"settings")," tab, choose the ",(0,a.kt)("em",{parentName:"p"},"project")," option and choose the new project from the dropdown menu."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A feature toggle&#39;s settings tab. The project setting shows a dropdown to change projects.",src:o(5882).Z})))}g.isMDXComponent=!0},8011:function(e,t,o){t.Z=o.p+"assets/images/project_concept-1609d99bdb73f944b91441bcd8340005.png"},616:function(e,t,o){t.Z=o.p+"assets/images/project_select-842a82989e4ec625e93e07348f65c7c7.png"},743:function(e,t,o){t.Z=o.p+"assets/images/projects_button-49625b22d058b3424460e9e8c766f0a4.png"},3950:function(e,t,o){t.Z=o.p+"assets/images/projects_change_project-26223d21d57e09d9121d571ed4711e1a.png"},3064:function(e,t,o){t.Z=o.p+"assets/images/projects_delete_button-7561befd6ef1ea3df2fe2d9bd442d8bb.png"},5882:function(e,t,o){t.Z=o.p+"assets/images/projects_existing_toggle_dropdown-59c050d17036761bfd0f7eba9900960c.png"},4911:function(e,t,o){t.Z=o.p+"assets/images/projects_menu-eff8715570bfa47d30b90499668791a1.png"},9010:function(e,t,o){t.Z=o.p+"assets/images/projects_menu_button-26757ce754f665c9ad90ccd662164783.png"},8848:function(e,t,o){t.Z=o.p+"assets/images/projects_new_project-9bb52982b8d8658bbf2cc447bf64da49.png"},108:function(e,t,o){t.Z=o.p+"assets/images/projects_save_new_project-191ee1ddcbbc444b4f4a040fbb7c6bb9.png"},3713:function(e,t,o){t.Z=o.p+"assets/images/projects_select_dropdown-40cf8bf12af7c4f91e76a89071a87636.png"},4693:function(e,t,o){t.Z=o.p+"assets/images/projects_toggle_project_dropdown-8e543b850157e2bfedc0f2e44358b2eb.png"}}]);