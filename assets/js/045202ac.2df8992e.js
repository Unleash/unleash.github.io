"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[583],{93727:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const s={title:"How to add strategy constraints"},r=void 0,i={unversionedId:"how-to/how-to-add-strategy-constraints",id:"how-to/how-to-add-strategy-constraints",title:"How to add strategy constraints",description:"Before Unleash 4.16, strategy constraints were only available to Unleash Pro and Enterprise users. From 4.16 onwards, they're available to everyone.",source:"@site/docs/how-to/how-to-add-strategy-constraints.md",sourceDirName:"how-to",slug:"/how-to/how-to-add-strategy-constraints",permalink:"/how-to/how-to-add-strategy-constraints",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-add-strategy-constraints.md",tags:[],version:"current",frontMatter:{title:"How to add strategy constraints"},sidebar:"documentation",previous:{title:"Feature toggles, strategies, context",permalink:"/how-to/misc"},next:{title:"How to capture impression data",permalink:"/how-to/how-to-capture-impression-data"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Open the constraints menu",id:"step-1",level:2},{value:"Step 2: Add and configure the constraint",id:"step-2",level:2},{value:"How to update existing constraints",id:"how-to-update-existing-constraints",level:2}],h={toc:c};function l(t){let{components:e,...s}=t;return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Availability",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before Unleash 4.16, strategy constraints were only available to Unleash Pro and Enterprise users. From 4.16 onwards, they're ",(0,o.kt)("strong",{parentName:"p"},"available to everyone"),".")),(0,o.kt)("p",null,"This guide shows you how to add ",(0,o.kt)("a",{parentName:"p",href:"/reference/strategy-constraints"},"strategy constraints")," to your feature toggles via the admin UI. For information on how to interact with strategy constraints from an ",(0,o.kt)("a",{parentName:"p",href:"/reference/sdks/"},"Unleash client SDK"),", visit the specific SDKs documentation or see ",(0,o.kt)("a",{parentName:"p",href:"/reference/strategy-constraints#sdks",title:"strategy constraints documentation, section on interacting with constraints from client SDKs"},"the relevant section in the strategy constraints documentation"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You'll need to have an existing feature toggle with a defined strategy to add a constraint. The rest of this guide assumes you have a specific strategy that you're working with."),(0,o.kt)("h2",{id:"step-1"},"Step 1: Open the constraints menu"),(0,o.kt)("p",null,'On the strategy you\'re working with, find and select the "edit strategy" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A feature toggle with one strategy. The &quot;edit strategy&quot; button is highlighted.",src:n(33560).Z,width:"1366",height:"694"})),(0,o.kt)("p",null,'On the "edit strategy" screen, select the "add constraint" button to open the constraints menu.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A feature toggle strategy view showing a button labeled with add constraints.",src:n(96190).Z,width:"1366",height:"660"})),(0,o.kt)("h2",{id:"step-2"},"Step 2: Add and configure the constraint"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/reference/strategy-constraints#constraint-structure"},"the ",(0,o.kt)("em",{parentName:"a"},"constraint structure")," section of the strategy constraints reference")," for a thorough explanation of the constraint fields."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'From the "Context Field" dropdown, ',(0,o.kt)("strong",{parentName:"li"},"select the context field")," you would like to constrain the strategy on and ",(0,o.kt)("strong",{parentName:"li"},"choose the ",(0,o.kt)("a",{parentName:"strong",href:"/reference/strategy-constraints#strategy-constraint-operators"},"constraint operator"))," you want."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Define the values")," to use for this constraint. The operator you selected decides whether you can define one or multiple values and what format they can have."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Save the constraint")," first, and then ",(0,o.kt)("strong",{parentName:"li"},"save the strategy"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A strategy constraint form with a constraint set to &quot;region&quot;. The &quot;values&quot; input is a dropdown menu containing the options &quot;Africa&quot;, &quot;Asia&quot;, &quot;Europe&quot;, and &quot;North America&quot;, as defined in the preceding paragraph.",src:n(2423).Z,width:"1366",height:"660"})),(0,o.kt)("h2",{id:"how-to-update-existing-constraints"},"How to update existing constraints"),(0,o.kt)("p",null,'To update an existing constraint, find the constraint in the "edit strategy" screen and use the constraint\'s "edit" button.'))}l.isMDXComponent=!0},96190:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/add-constraint-3f365575019e1e87b6443d64ea979f35.png"},2423:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/constraints-add-to-strategy-4fa5a3dec5dd4844e520eb8a6ea21194.png"},33560:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/create-toggle-edit-strategy-2d4db63979dc725ff3d9f80ec14e8182.png"}}]);