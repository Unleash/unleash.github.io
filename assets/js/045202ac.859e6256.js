"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[30583],{93727:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var n=a(87462),s=(a(67294),a(3905));const o={title:"How to add strategy constraints"},i=void 0,r={unversionedId:"how-to/how-to-add-strategy-constraints",id:"how-to/how-to-add-strategy-constraints",title:"How to add strategy constraints",description:"Before Unleash 4.16, strategy constraints were only available to Unleash Pro and Enterprise users. From 4.16 onwards, they're available to everyone.",source:"@site/docs/how-to/how-to-add-strategy-constraints.md",sourceDirName:"how-to",slug:"/how-to/how-to-add-strategy-constraints",permalink:"/how-to/how-to-add-strategy-constraints",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-add-strategy-constraints.md",tags:[],version:"current",frontMatter:{title:"How to add strategy constraints"},sidebar:"documentation",previous:{title:"Feature flags, strategies, context",permalink:"/how-to/misc"},next:{title:"How to add feature flag naming patterns",permalink:"/how-to/how-to-add-feature-flag-naming-patterns"}},d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Open the constraints menu",id:"step-1",level:2},{value:"Step 2: Add and configure the constraint",id:"step-2",level:2},{value:"Step 3: Save the strategy",id:"step-3",level:2},{value:"How to update existing constraints",id:"how-to-update-existing-constraints",level:2}],l={toc:h};function c(t){let{components:e,...o}=t;return(0,s.kt)("wrapper",(0,n.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Availability",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Before Unleash 4.16, strategy constraints were only available to Unleash Pro and Enterprise users. From 4.16 onwards, they're ",(0,s.kt)("strong",{parentName:"p"},"available to everyone"),".")),(0,s.kt)("p",null,"This guide shows you how to add ",(0,s.kt)("a",{parentName:"p",href:"/reference/strategy-constraints"},"strategy constraints")," to your feature toggles via the admin UI. For information on how to interact with strategy constraints from an ",(0,s.kt)("a",{parentName:"p",href:"/reference/sdks/"},"Unleash client SDK"),", visit the specific SDKs documentation or see ",(0,s.kt)("a",{parentName:"p",href:"/reference/strategy-constraints#sdks",title:"strategy constraints documentation, section on interacting with constraints from client SDKs"},"the relevant section in the strategy constraints documentation"),"."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"You'll need to have an existing feature toggle with a defined strategy to add a constraint. The rest of this guide assumes you have a specific strategy that you're working with."),(0,s.kt)("h2",{id:"step-1"},"Step 1: Open the constraints menu"),(0,s.kt)("p",null,'On the strategy you\'re working with, find and select the "edit strategy" button.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A feature toggle with one strategy. The &quot;edit strategy&quot; button is highlighted.",src:a(33560).Z,width:"1366",height:"694"})),(0,s.kt)("p",null,'On the "edit strategy" screen, select the "add constraint" button to open the constraints menu.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A feature toggle strategy view showing a button labeled with add constraints.",src:a(96190).Z,width:"1366",height:"660"})),(0,s.kt)("h2",{id:"step-2"},"Step 2: Add and configure the constraint"),(0,s.kt)("p",null,"Refer to ",(0,s.kt)("a",{parentName:"p",href:"/reference/strategy-constraints#constraint-structure"},"the ",(0,s.kt)("em",{parentName:"a"},"constraint structure")," section of the strategy constraints reference")," for a thorough explanation of the constraint fields."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'From the "Context Field" dropdown, ',(0,s.kt)("strong",{parentName:"li"},"select the context field")," you would like to constrain the strategy on and ",(0,s.kt)("strong",{parentName:"li"},"choose the ",(0,s.kt)("a",{parentName:"strong",href:"/reference/strategy-constraints#strategy-constraint-operators"},"constraint operator"))," you want."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Define the values")," to use for this constraint. The operator you selected decides whether you can define one or multiple values and what format they can have."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Save the constraint")," first.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A strategy constraint form with a constraint set to &quot;useid&quot;. The &quot;values&quot; input is a text input containing the values &quot;41&quot;, &quot;932&quot;, &quot;822&quot;.",src:a(2423).Z,width:"1366",height:"660"})),(0,s.kt)("h2",{id:"step-3"},"Step 3: Save the strategy"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A feature toggle strategy view showing a button at the end of the form labeled with save strategy.",src:a(93126).Z,width:"1351",height:"248"})),(0,s.kt)("h2",{id:"how-to-update-existing-constraints"},"How to update existing constraints"),(0,s.kt)("p",null,'To update an existing constraint, find the constraint in the "edit strategy" screen and use the constraint\'s "edit" button.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A strategy form showing an existing constraint with existing values and 2 buttons, the &quot;edit&quot; button is highlighted.",src:a(84841).Z,width:"1366",height:"211"})))}c.isMDXComponent=!0},96190:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/add-constraint-3f365575019e1e87b6443d64ea979f35.png"},2423:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/constraints-add-to-strategy-4fa5a3dec5dd4844e520eb8a6ea21194.png"},84841:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/constraints-edit-dd64a9bdc65902127f80e07e0e040c3f.png"},93126:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/constraints-save-strategy-1c2512fa5063282ef1bb32db8fb57a0c.png"},33560:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create-toggle-edit-strategy-2d4db63979dc725ff3d9f80ec14e8182.png"}}]);