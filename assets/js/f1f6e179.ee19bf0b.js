"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5860],{12095:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=s(87462),n=(s(67294),s(3905));const i={title:"Stickiness"},r=void 0,o={unversionedId:"reference/stickiness",id:"reference/stickiness",title:"Stickiness",description:"Stickiness is how Unleash guarantees that the same user gets the same features every time. Stickiness is useful in any scenario where you want to either show a feature to only a subset of users or give users a variant of a feature.",source:"@site/docs/reference/stickiness.md",sourceDirName:"reference",slug:"/reference/stickiness",permalink:"/reference/stickiness",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/stickiness.md",tags:[],version:"current",frontMatter:{title:"Stickiness"},sidebar:"documentation",previous:{title:"Single Sign-On",permalink:"/reference/sso"},next:{title:"Strategy Constraints",permalink:"/reference/strategy-constraints"}},u={},l=[{value:"Calculation",id:"calculation",level:2},{value:"Consistency",id:"consistency",level:2},{value:"Custom stickiness (beta)",id:"custom-stickiness",level:2},{value:"Enabling custom stickiness",id:"enabling-custom-stickiness",level:3}],c={toc:l};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Stickiness")," is how Unleash guarantees that the same user gets the same features every time. Stickiness is useful in any scenario where you want to either show a feature to only a subset of users or give users a variant of a feature."),(0,n.kt)("h2",{id:"calculation"},"Calculation"),(0,n.kt)("p",null,"By default, Unleash calculates stickiness based on the user id and the group id. If the user id is unavailable, it falls back to using the session id instead. It hashes these values to a number between 0 and 100 using the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/MurmurHash"},"MurmurHash hash function"),". This number is what determines whether a user will see a specific feature or variant. Because the process is deterministic, the same user will always get the same number."),(0,n.kt)("p",null,"If both the user id and the session id is unavailable, the calculation returns a random value and stickiness is not guaranteed."),(0,n.kt)("h2",{id:"consistency"},"Consistency"),(0,n.kt)("p",null,"Because the number assigned to a user won't change, Unleash also guarantees that the a user will keep seeing the same features even if certain other parameters change."),(0,n.kt)("p",null,"For instance: When using the ",(0,n.kt)("a",{parentName:"p",href:"/reference/activation-strategies#gradual-rollout"},"gradual rollout activation strategy"),", any user whose number is less than or equal to the rollout percentage will see the feature. This means that the same users will keep seeing the feature even as you increase the percentage of your user base that sees the feature."),(0,n.kt)("h2",{id:"custom-stickiness"},"Custom stickiness (beta)"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Custom stickiness is available starting from Unleash Enterprise v4.")),(0,n.kt)("p",null,"When using ",(0,n.kt)("a",{parentName:"p",href:"/reference/activation-strategies#gradual-rollout"},"the gradual rollout strategy")," or ",(0,n.kt)("a",{parentName:"p",href:"/reference/feature-toggle-variants"},"feature toggle variants"),", you can use parameters other than the user id to calculate stickiness. More specifically, you can use any field, custom or otherwise, of the ",(0,n.kt)("a",{parentName:"p",href:"/reference/unleash-context"},"Unleash Context")," as long as you have enabled custom stickiness for these fields."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This feature is currently in beta and is not yet supported by all our SDKs. Check out the ",(0,n.kt)("a",{parentName:"p",href:"/reference/sdks/#server-side-sdk-compatibility-table"},"SDK compatibility table")," to see what SDKs support it at the moment.")),(0,n.kt)("h3",{id:"enabling-custom-stickiness"},"Enabling custom stickiness"),(0,n.kt)("p",null,'To enable custom stickiness on a field, navigate to the Create Context screen in the UI and find the field you want to enable. There\'s a "Custom stickiness" option at the bottom of the form. Enable this toggle and update the context field by pressing the "Update" button.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The Create Context screen in the Unleash UI. There&#39;s a toggle at the bottom to control custom stickiness.",src:s(61144).Z,width:"1366",height:"853"})))}h.isMDXComponent=!0},61144:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/enable_custom_stickiness-183c4f544fba2761a580ee4730c9a369.png"}}]);