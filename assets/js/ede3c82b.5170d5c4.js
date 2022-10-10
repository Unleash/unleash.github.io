"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3209],{46247:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=A(87462),r=(A(67294),A(3905));const a={id:"projects",title:"Projects"},n=void 0,l={unversionedId:"user_guide/projects",id:"user_guide/projects",title:"Projects",description:"All users get access to projects, but only pro and enterprise users can create, update, or delete them.",source:"@site/docs/user_guide/projects.md",sourceDirName:"user_guide",slug:"/user_guide/projects",permalink:"/user_guide/projects",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/user_guide/projects.md",tags:[],version:"current",frontMatter:{id:"projects",title:"Projects"},sidebar:"documentation",previous:{title:"Public Invite Links",permalink:"/reference/public-signup"},next:{title:"Role-based Access control",permalink:"/user_guide/rbac"}},s={},i=[{value:"The default project",id:"the-default-project",level:2},{value:"Understanding purpose of projects",id:"understanding-purpose-of-projects",level:2},{value:"Projects and environments",id:"projects-and-environments",level:2},{value:"Creating a new project",id:"creating-a-new-project",level:2},{value:"Deleting an existing project",id:"deleting-an-existing-project",level:2},{value:"Filter feature toggles on projects",id:"filter-feature-toggles-on-projects",level:2},{value:"Assigning project to a new feature toggle",id:"assigning-project-to-a-new-feature-toggle",level:2},{value:"Change project for an existing feature toggle",id:"change-project-for-an-existing-feature-toggle",level:2}],u={toc:i};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"feature availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All users get access to projects, but only pro and enterprise users can create, update, or delete them.")),(0,r.kt)("p",null,"This document explains how Unleash uses projects, including how to create and maintain them."),(0,r.kt)("h2",{id:"the-default-project"},"The default project"),(0,r.kt)("p",null,"All users get access to the default project. You cannot delete this project. You can, however, rename it if you're using the pro or enterprise version of Unleash."),(0,r.kt)("h2",{id:"understanding-purpose-of-projects"},"Understanding purpose of projects"),(0,r.kt)("p",null,"Projects are a way to organize your feature toggles within Unleash. Within a large organization, having multiple feature toggles, staying on top of the feature toggles might become a challenge. Every feature toggle will be part of a project. Projects can be linked to a development team or to functional modules within the software."),(0,r.kt)("p",null,"A common pattern is to organize the feature toggles according to key areas of the application, e.g. \u201cBasic user process\u201d and \u201cAdvanced user process\u201d. This is illustrated below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A diagram with two boxes labeled &quot;Basic user process&quot; and &quot;Advanced user process&quot;, respectively. The former contains features &quot;New login&quot; and &quot;Winter theme enablement&quot;, the latter &quot;New in-app purchase&quot; and &quot;Updated invoice repository&quot;.",src:A(54076).Z,width:"620",height:"352"})),(0,r.kt)("h2",{id:"projects-and-environments"},"Projects and environments"),(0,r.kt)("p",null,"You can configure which ",(0,r.kt)("a",{parentName:"p",href:"/user_guide/environments"},"environments")," should be available within a project. By default, all globally available environments are available. You can only enable/disable a feature toggle for the environments you configure for a project."),(0,r.kt)("p",null,'Within the admin UI, the projects are available under the "environments" tab of the project page. Changing them requires the project owner role.'),(0,r.kt)("h2",{id:"creating-a-new-project"},"Creating a new project"),(0,r.kt)("p",null,"When you log into Unleash for the first time, there is a Default project already created. All feature toggles are included in the Default project, unless explicitly set to a different one."),(0,r.kt)("p",null,"From the top-line menu \u2013 click on \u201cProjects\u201d"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Unleash admin UI with the &quot;Projects&quot; nav link in the top bar highlighted.",src:A(92725).Z,width:"1366",height:"520"})),(0,r.kt)("p",null,"The UI shows the currently available projects. To create a new project, use the \u201cnew project\u201d button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A list of projects. There is a button saying &quot;Add new project&quot;.",src:A(57890).Z,width:"1366",height:"520"})),(0,r.kt)("p",null,"The configuration of a new Project is now available. the following input is available to create the new Project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A project creation form. The form fields are labeled &quot;project ID&quot;, &quot;name&quot;, and &quot;description&quot;. The &quot;Create&quot; button is highlighted.",src:A(81699).Z,width:"1366",height:"594"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project Id"),(0,r.kt)("td",{parentName:"tr",align:null},"Id for this Project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"A short description of the project")))),(0,r.kt)("h2",{id:"deleting-an-existing-project"},"Deleting an existing project"),(0,r.kt)("p",null,"To keep your feature toggles clean, removing deprecated projects is important. From the overview of Projects \u2013"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the top right of the project card, find the project menu represented by three vertical dots.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A list of projects. Each project has three vertical dots \u2014 a kebab menu \u2014 next to it.",src:A(5057).Z,width:"1366",height:"520"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click on Delete Project")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A list of projects. Each project has three vertical dots \u2014 a kebab menu \u2014 next to it, which exposes a menu with the &quot;Edit project&quot; and &quot;Delete project&quot; options when interacted with.",src:A(47039).Z,width:"1366",height:"520"})),(0,r.kt)("h2",{id:"filter-feature-toggles-on-projects"},"Filter feature toggles on projects"),(0,r.kt)("p",null,"When browsing the feature toggles in Unleash, you might want to filter the view by looking only at the ones included in the project of interest. This is possible from the Feature toggle overview."),(0,r.kt)("p",null,'From the UI top navigation menu, choose "Feature toggles".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Unleash Admin UI navigation menu with the &quot;Feature toggles&quot; option highlighted by a red arrow.",src:A(4869).Z,width:"1366",height:"116"})),(0,r.kt)("p",null,"The list of features toggles can be filtered on the project of your choice. By default, all feature toggles are listed in the view. You can use the search to filter to a specific project or even for multiple projects in the same time if you need."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The feature toggle list with toggles scoped to the &quot;fintech&quot; project. The filter is activated by using a form control.",src:A(1065).Z,width:"1366",height:"495"})),(0,r.kt)("p",null,'In the search you can type "project:specific-name" to filter that project only.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The feature toggle list with an overlay listing all the projects available. You can select a project and the list will update with the toggles belonging to that project.",src:A(51221).Z,width:"1366",height:"495"})),(0,r.kt)("p",null,"The view will now be updated with the filtered feature toggles."),(0,r.kt)("h2",{id:"assigning-project-to-a-new-feature-toggle"},"Assigning project to a new feature toggle"),(0,r.kt)("p",null,"When you create a new feature toggle, you can choose which project to create it in. The default project is whatever project you are currently configuring."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A form to create a toggle. An arrow points to an input labeled &quot;project&quot;.",src:A(21606).Z,width:"1366",height:"782"})),(0,r.kt)("p",null,"All available projects are available from the drop-down menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A form to create a toggle. The &quot;project&quot; input is expanded to show projects you can create the toggle in.",src:A(11930).Z,width:"1366",height:"782"})),(0,r.kt)("h2",{id:"change-project-for-an-existing-feature-toggle"},"Change project for an existing feature toggle"),(0,r.kt)("p",null,"If you want to change which project a feature toggle belongs to, you can change that from the feature toggle's configuration page. Under the ",(0,r.kt)("em",{parentName:"p"},"settings")," tab, choose the ",(0,r.kt)("em",{parentName:"p"},"project")," option and choose the new project from the dropdown menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A feature toggle&#39;s settings tab. The project setting shows a dropdown to change projects.",src:A(34321).Z,width:"1366",height:"782"})))}c.isMDXComponent=!0},54076:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/project_concept-1609d99bdb73f944b91441bcd8340005.png"},1065:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/project_select-fa141022f70e49b150399e25a7297c9e.png"},92725:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/projects_button-4aa1260b628d28b60d9c9693be776520.png"},21606:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/projects_change_project-9e814cc77dab34a3f93659fa39ca7654.png"},47039:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/projects_delete_button-2ec5d763a040a149359d62edb4b03f1f.png"},34321:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/projects_existing_toggle_dropdown-3439a86613fbe74f8098dbf4f6d83812.png"},4869:(e,t,A)=>{A.d(t,{Z:()=>o});const o="data:image/png;base64,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"},5057:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/projects_menu_button-06eb7334928adcefd7fc644bf08699fd.png"},57890:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/projects_new_project-e66b68ea507d6bb1fad7ddd5c1ee5293.png"},81699:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/projects_save_new_project-aa44bd53dc9201eee483b6c4fa1fa2f3.png"},51221:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/projects_select_dropdown-74f2e4755327d649a7804536b9c31f7d.png"},11930:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/projects_toggle_project_dropdown-8571fc85268ebc00facfb1483059aec2.png"}}]);