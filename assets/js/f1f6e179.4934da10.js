"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[15860],{12095:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=s(87462),i=(s(67294),s(3905));const n={title:"Stickiness"},r=void 0,o={unversionedId:"reference/stickiness",id:"reference/stickiness",title:"Stickiness",description:"Stickiness is how Unleash guarantees that the same user gets the same features every time. Stickiness is useful in any scenario where you want to either show a feature to only a subset of users or give users a variant of a feature.",source:"@site/docs/reference/stickiness.md",sourceDirName:"reference",slug:"/reference/stickiness",permalink:"/reference/stickiness",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/stickiness.md",tags:[],version:"current",frontMatter:{title:"Stickiness"},sidebar:"documentation",previous:{title:"Single Sign-On",permalink:"/reference/sso"},next:{title:"Strategy Constraints",permalink:"/reference/strategy-constraints"}},l={},c=[{value:"Calculation",id:"calculation",level:2},{value:"Consistency",id:"consistency",level:2},{value:"Custom stickiness",id:"custom-stickiness",level:2},{value:"Enabling custom stickiness",id:"enabling-custom-stickiness",level:3},{value:"Project default stickiness",id:"project-default-stickiness",level:2}],u={toc:c};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Stickiness")," is how Unleash guarantees that the same user gets the same features every time. Stickiness is useful in any scenario where you want to either show a feature to only a subset of users or give users a variant of a feature."),(0,i.kt)("h2",{id:"calculation"},"Calculation"),(0,i.kt)("p",null,"By default, Unleash calculates stickiness based on the user id and the group id. If the user id is unavailable, it falls back to using the session id instead. It hashes these values to a number between 0 and 100 using the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/MurmurHash"},"MurmurHash hash function"),". This number is what determines whether a user will see a specific feature or variant. Because the process is deterministic, the same user will always get the same number."),(0,i.kt)("p",null,"If both the user id and the session id is unavailable, the calculation returns a random value and stickiness is not guaranteed."),(0,i.kt)("h2",{id:"consistency"},"Consistency"),(0,i.kt)("p",null,"Because the number assigned to a user won't change, Unleash also guarantees that the a user will keep seeing the same features even if certain other parameters change."),(0,i.kt)("p",null,"For instance: When using the ",(0,i.kt)("a",{parentName:"p",href:"/reference/activation-strategies#gradual-rollout"},"gradual rollout activation strategy"),", any user whose number is less than or equal to the rollout percentage will see the feature. This means that the same users will keep seeing the feature even as you increase the percentage of your user base that sees the feature."),(0,i.kt)("h2",{id:"custom-stickiness"},"Custom stickiness"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Custom stickiness is available starting from Unleash Enterprise v4.")),(0,i.kt)("p",null,"When using ",(0,i.kt)("a",{parentName:"p",href:"/reference/activation-strategies#gradual-rollout"},"the gradual rollout strategy")," or ",(0,i.kt)("a",{parentName:"p",href:"/reference/feature-toggle-variants"},"feature toggle variants"),", you can use parameters other than the user id to calculate stickiness. More specifically, you can use any field, custom or otherwise, of the ",(0,i.kt)("a",{parentName:"p",href:"/reference/unleash-context"},"Unleash Context")," as long as you have enabled custom stickiness for these fields."),(0,i.kt)("admonition",{title:"SDK compatibility",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Custom stickiness is supported by all of our SDKs except for the Rust SDK. You can always refer to the ",(0,i.kt)("a",{parentName:"p",href:"/reference/sdks/#server-side-sdk-compatibility-table"},"SDK compatibility table")," for the full overview.")),(0,i.kt)("h3",{id:"enabling-custom-stickiness"},"Enabling custom stickiness"),(0,i.kt)("p",null,'To enable custom stickiness on a field, navigate to the Create Context screen in the UI and find the field you want to enable. There\'s a "Custom stickiness" option at the bottom of the form. Enable this toggle and update the context field by pressing the "Update" button.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The Create Context screen in the Unleash UI. There&#39;s a toggle at the bottom to control custom stickiness.",src:s(61144).Z,width:"1366",height:"853"})),(0,i.kt)("h2",{id:"project-default-stickiness"},"Project default stickiness"),(0,i.kt)("admonition",{title:"Availability",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Project default stickiness was introduced in ",(0,i.kt)("strong",{parentName:"p"},"Unleash v5"),".")),(0,i.kt)("p",null,"Each project in Unleash can have its own default stickiness context field. Whenever you add a gradual rollout strategy or variants to a feature in that project, Unleash will use the configured context field as the initial value. "),(0,i.kt)("p",null,"Only context fields that have the ",(0,i.kt)("a",{parentName:"p",href:"/reference/unleash-context#custom-stickiness"},"custom stickiness")," option turned on can be used as default stickiness fields."),(0,i.kt)("p",null,'If you don\'t specify a default custom stickiness, the project will use the "default" stickiness option, which works as described in the ',(0,i.kt)("a",{parentName:"p",href:"#calculation"},"calculation section"),"."),(0,i.kt)("p",null,"You can configure project default stickiness when you create a project or by editing the project later. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The Edit Project screen.  There is a dropdown for setting the default stickiness",src:s(29139).Z,width:"1324",height:"1196"})))}h.isMDXComponent=!0},61144:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/enable_custom_stickiness-183c4f544fba2761a580ee4730c9a369.png"},29139:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/project_default_stickiness-f98738228ff781fc7a78c74c65028352.png"}}]);