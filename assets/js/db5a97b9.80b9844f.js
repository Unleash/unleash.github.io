"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3682],{86585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Feature Flag Naming Patterns"},l=void 0,o={unversionedId:"reference/feature-flag-naming-patterns",id:"reference/feature-flag-naming-patterns",title:"Feature Flag Naming Patterns",description:"Feature flag naming patterns is an in-development, enterprise-only feature.",source:"@site/docs/reference/feature-flag-naming-patterns.mdx",sourceDirName:"reference",slug:"/reference/feature-flag-naming-patterns",permalink:"/reference/feature-flag-naming-patterns",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/feature-flag-naming-patterns.mdx",tags:[],version:"current",frontMatter:{title:"Feature Flag Naming Patterns"},sidebar:"documentation",previous:{title:"Strategy Variants",permalink:"/reference/strategy-variants"},next:{title:"Feature Toggles",permalink:"/reference/feature-toggles"}},s={},p=[{value:"Overview",id:"overview",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Feature flag naming patterns is an in-development, ",(0,r.kt)("strong",{parentName:"p"},"enterprise-only")," feature.")),(0,r.kt)("p",null,"A feature flag naming pattern is ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"},"JavaScript regular expression")," that is used to validate the name of a feature flag before the flag can be created. The pattern is defined in the project settings and is enforced when creating a new feature flag. The pattern is also enforced when creating a new feature flag via the API."),(0,r.kt)("p",null,"Feature flag naming patterns are defined on a per-project basis."),(0,r.kt)("p",null,"In addition to the pattern itself, you can also define a an example and a description of the pattern. If defined, both the example and the description will be shown to the user when they are creating a new feature flag."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The naming pattern consists of three parts:"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("strong",null,"Pattern")," (required)"),(0,r.kt)("dd",null,"The ",(0,r.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"},"regular expression")," that is used to validate the name of the feature flag. Must be a valid regular expression. Flags (such as case insensitivity) are not available."),(0,r.kt)("dt",null,(0,r.kt)("strong",null,"Example")," (optional)"),(0,r.kt)("dd",null,"An example of a name that is valid according to the provided pattern. Note: the example ",(0,r.kt)("strong",null,"must")," be valid against the described pattern for it to be saved."),(0,r.kt)("dt",null,(0,r.kt)("strong",null,"Description")," (optional)"),(0,r.kt)("dd",null,"Any additional text that you would like to display to users to provide extra information. This can be anything that you think they would find useful and can be as long or short as you want.")),(0,r.kt)("p",null,"For instance, you might define a pattern that requires all feature flags to follow a specific pattern, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"^(red|blue|green|yellow)\\.[a-z-]+\\.[0-9]+$"),'. You could then provide an example of a valid feature flag name (for instance "blue.water-gun.64") and a description of what the pattern should reflect: "',(0,r.kt)("inlineCode",{parentName:"p"},"<team>.<feature>.<ticket>"),'".'))}u.isMDXComponent=!0}}]);