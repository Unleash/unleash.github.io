"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[89318],{6889:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(51402);const r=e=>{let{img:t,alt:n,caption:r}=e;return a.createElement("figure",null,a.createElement("img",{alt:n,src:(0,o.Z)(t)}),a.createElement("figcaption",null,r))}},77391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var a=n(87462),o=(n(67294),n(3905)),r=n(6889);const s={title:"The Anatomy of Unleash"},i=void 0,l={unversionedId:"understanding-unleash/the-anatomy-of-unleash",id:"understanding-unleash/the-anatomy-of-unleash",title:"The Anatomy of Unleash",description:"This guide's purpose is to give you a conceptual overview of how Unleash works. It covers the various components that exist within an Unleash system and how they interact with each other and with external applications. The diagrams are intended to help you understand the fundamental building blocks, such as projects, environments, variants and, of course, feature toggles.",source:"@site/docs/understanding-unleash/the-anatomy-of-unleash.mdx",sourceDirName:"understanding-unleash",slug:"/understanding-unleash/the-anatomy-of-unleash",permalink:"/understanding-unleash/the-anatomy-of-unleash",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/understanding-unleash/the-anatomy-of-unleash.mdx",tags:[],version:"current",frontMatter:{title:"The Anatomy of Unleash"},sidebar:"documentation",previous:{title:"Unleash introductory overview",permalink:"/understanding-unleash/unleash-overview"},next:{title:"Managing constraints",permalink:"/understanding-unleash/managing-constraints"}},u={},h=[{value:"The root level",id:"the-root-level",level:2},{value:"Projects",id:"projects",level:2},{value:"Environments and project environments",id:"environments-and-project-environments",level:2},{value:"Features (feature  toggles)",id:"features-feature--toggles",level:2},{value:"Activation strategies",id:"activation-strategies",level:2},{value:"Strategy constraints",id:"strategy-constraints",level:2},{value:"Segments",id:"segments",level:2},{value:"Variants and feature toggle payloads",id:"variants-and-feature-toggle-payloads",level:2},{value:"Variants and environments",id:"variants-and-environments",level:3},{value:"Use case: changing website colors",id:"use-case",level:2},{value:"Configuring Unleash for development",id:"configuring-unleash-for-development",level:3},{value:"In your application",id:"in-your-application",level:3},{value:"Rolling out the feature to users",id:"rolling-out-the-feature-to-users",level:3},{value:"Adding variants",id:"adding-variants",level:3}],g={toc:h};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide's purpose is to give you a conceptual overview of how Unleash works. It covers the various components that exist within an Unleash system and how they interact with each other and with external applications. The diagrams are intended to help you understand the fundamental building blocks, such as ",(0,o.kt)("a",{parentName:"p",href:"/reference/projects"},"projects"),", ",(0,o.kt)("a",{parentName:"p",href:"/reference/environments"},"environments"),", ",(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggle-variants"},"variants")," and, of course, ",(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggles"},"feature toggles"),"."),(0,o.kt)("p",null,"The end of this guide presents a ",(0,o.kt)("a",{parentName:"p",href:"#use-case"},"short use case, explaining how you might configure Unleash")," to start working with feature toggles."),(0,o.kt)("h2",{id:"the-root-level"},"The root level"),(0,o.kt)("p",null,"Some things in Unleash are configured and defined on the root level. These options apply across the entire Unleash instance. The most important root configuration options for day-to-day operations are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/api-tokens-and-client-keys"},"API access tokens")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/projects"},"Projects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/segments"},"Segments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/activation-strategies"},"Strategy types")," (including ",(0,o.kt)("a",{parentName:"li",href:"/reference/custom-activation-strategies"},"custom activation strategy types"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/tags"},"Tag types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/unleash-context"},"Unleash context")," fields (including ",(0,o.kt)("a",{parentName:"li",href:"/reference/unleash-context#custom-context-fields"},"custom context fields"),")"),(0,o.kt)("li",{parentName:"ul"},"Users, ",(0,o.kt)("a",{parentName:"li",href:"/reference/rbac#user-groups"},"user groups")," and ",(0,o.kt)("a",{parentName:"li",href:"/reference/rbac"},"roles"))),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference/projects"},(0,o.kt)("strong",{parentName:"a"},"Projects"))," contain ",(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggles"},"feature toggles")," and their configurations, and a set of active ",(0,o.kt)("a",{parentName:"p",href:"/reference/environments"},"environments"),"."),(0,o.kt)("p",null,"All Unleash instances must have at least one project at any given time. New instances get a project called \u201cDefault\u201d."),(0,o.kt)("p",null,"Pro and Enterprise customers can create, rename, and delete projects as they wish (as long as there is always ",(0,o.kt)("strong",{parentName:"p"},"at least one project"),"). Open-source users, on the other hand, only get access to the Default project."),(0,o.kt)(r.Z,{caption:"Unleash projects contain one or more environments.",alt:"A square labeled 'project' containing another square, labeled 'environment'.",img:"/img/anatomy-of-unleash-environment.png",mdxType:"Figure"}),(0,o.kt)("h2",{id:"environments-and-project-environments"},"Environments and project environments"),(0,o.kt)(r.Z,{img:"/img/anatomy-of-unleash-customer-tiers.png",caption:"Feature toggles can be activated or deactivated independently in different environments. For instance, a feature toggle can be active in the development environment, and deactivated in the production environment. Even if their configuration is otherwise identical, deactivated feature toggles will never be considered enabled.",mdxType:"Figure"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference/environments"},(0,o.kt)("strong",{parentName:"a"},"Environments"))," in Unleash let you change how a feature toggle works in your application\u2019s different environments. For instance, while you are developing a feature, it\u2019s likely that you\u2019ll want it to be available in your development environment, but not in your production environment: environments let you do that. You might also want to enable a feature for only some users in your development environment, but no users in your production environment: environments let you do that."),(0,o.kt)("p",null,"Environments exist on two different levels within Unleash. The set of ",(0,o.kt)("strong",{parentName:"p"},"all available environments is defined on the root level"),". Additionally, ",(0,o.kt)("strong",{parentName:"p"},"each project")," can choose which of these root environments should be ",(0,o.kt)("strong",{parentName:"p"},"available on the project level"),". The set of environments available to any given project is ",(0,o.kt)("strong",{parentName:"p"},"always a subset")," of the set of all available environments at the root level."),(0,o.kt)("p",null,"Each project must always have ",(0,o.kt)("strong",{parentName:"p"},"at least one")," active environment."),(0,o.kt)("p",null,"Enterprise users can create and remove environments. Open-source and Pro customers get access to two environments: ",(0,o.kt)("strong",{parentName:"p"},"development")," and ",(0,o.kt)("strong",{parentName:"p"},"production.")),(0,o.kt)("p",null,"Environments are adjacent to ",(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggles"},"feature toggles")," in Unleash: neither one contains the other, but they come together to let you define activation strategies."),(0,o.kt)(r.Z,{img:"/img/anatomy-of-unleash-new-feature-rollout.png",caption:"You can use different activation strategies and constraints in different environments. For instance, you can show a feature only to select user IDs in development, but roll it out to 25% of your user base in production.",mdxType:"Figure"}),(0,o.kt)("admonition",{title:"Environments and API keys",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When connecting an SDK to Unleash, it's the ",(0,o.kt)("strong",{parentName:"p"},"API key that decides which environment to")," fetch features for. For legacy reasons, all Unleash SDKs accept a configuration option called ",(0,o.kt)("inlineCode",{parentName:"p"},"environment"),", but this ",(0,o.kt)("strong",{parentName:"p"},"does not affect the environment")," at all. It is an Unleash context field and a holdover from before Unleash had native environments.")),(0,o.kt)("h2",{id:"features-feature--toggles"},"Features (feature  toggles)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggles"},(0,o.kt)("strong",{parentName:"a"},"Feature toggles"))," are at the heart of Unleash\u2019s functionality. Feature toggles belong to projects and live next to project environments. In and of itself, a feature toggle doesn\u2019t do anything. You must assign ",(0,o.kt)("a",{parentName:"p",href:"/reference/activation-strategies"},(0,o.kt)("strong",{parentName:"a"},"activation strategies"))," to it for it to start taking effect."),(0,o.kt)("p",null,"When creating a feature toggle, you must assign a unique (across your Unleash instance) name, a ",(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggle-types"},"feature toggle type"),", a ",(0,o.kt)("a",{parentName:"p",href:"/reference/projects"},"project")," it belongs to, and an optional description. Everything except for the name can be changed later."),(0,o.kt)(r.Z,{img:"/img/anatomy-of-unleash-features.png",caption:"Feature toggle states are evaluated independently in each environment.",alt:"A hierarchy showing a project containing an environment containing a feature toggle configuration.",mdxType:"Figure"}),(0,o.kt)("h2",{id:"activation-strategies"},"Activation strategies"),(0,o.kt)(r.Z,{img:"/img/anatomy-of-unleash-strategy.png",caption:"Activation strategies are applied to feature toggles on a per-environment basis and decide whether a feature is enabled or not.",alt:"A hierarchy displaying an environment containing a feature toggle configuration with an activation strategy.",mdxType:"Figure"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference/activation-strategies"},(0,o.kt)("strong",{parentName:"a"},"Activation strategies"))," (or just ",(0,o.kt)("strong",{parentName:"p"},"strategies")," for short) are the part of feature toggles that tell Unleash ",(0,o.kt)("strong",{parentName:"p"},"who should get a feature"),". An activation strategy is assigned to ",(0,o.kt)("strong",{parentName:"p"},"one "),"feature toggle in ",(0,o.kt)("strong",{parentName:"p"},"one "),"environment."),(0,o.kt)("p",null,"When you check a ",(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggles"},"feature toggle")," in an application, the following decides the result:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Is the toggle active in the current environment? If not, it will be disabled."),(0,o.kt)("li",{parentName:"ol"},"If the toggle ",(0,o.kt)("strong",{parentName:"li"},"is")," active in the current environment, the toggle\u2019s strategies decide the result. As long as ",(0,o.kt)("strong",{parentName:"li"},"at least one")," of a toggle\u2019s strategies resolve to true for the current context (user or application), then the toggle will be considered enabled. In other words, if you have a hundred strategies and ninety-nine of them resolve to false, but one of them resolves to true, then the toggle is enabled.")),(0,o.kt)("p",null,"Activation strategies tie feature toggles and ",(0,o.kt)("a",{parentName:"p",href:"/reference/environments"},"environments")," together. When you assign an activation strategy to a feature toggle, you do so in one environment at a time. You can assign the same strategy to the same toggle in different environments, but they will be different instances of the same strategy, and do not stay in sync. Unleash also lets you copy strategies from one environment to another."),(0,o.kt)("p",null,"Unleash comes with a number of strategies built in (refer the ",(0,o.kt)("a",{parentName:"p",href:"/reference/activation-strategies"},"activation strategies documentation")," for more information on those). You can also create your own ",(0,o.kt)("a",{parentName:"p",href:"/reference/custom-activation-strategies"},"custom activation strategies")," if you need them. All strategies can be further augmented by ",(0,o.kt)("a",{parentName:"p",href:"/reference/strategy-constraints"},(0,o.kt)("strong",{parentName:"a"},"strategy constraints")),"."),(0,o.kt)(r.Z,{img:"/img/anatomy-of-unleash-environments-strategies.png",caption:"Feature toggles exist across environments and can have different activation strategies in each environment.",mdxType:"Figure"}),(0,o.kt)(r.Z,{img:"/img/anatomy-of-unleash-environments-strategies2.png",caption:"Feature toggle activation strategies can be copied between environments. You can also create new strategies in each environment.",mdxType:"Figure"}),(0,o.kt)("h2",{id:"strategy-constraints"},"Strategy constraints"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference/strategy-constraints"},(0,o.kt)("strong",{parentName:"a"},"Strategy constraints"))," (or just ",(0,o.kt)("strong",{parentName:"p"},"constraints"),") help you fine-tune your strategies. They are an extra layer of prerequisites that help you narrow the audience of a strategy down. Strategy constraints are applied to ",(0,o.kt)("a",{parentName:"p",href:"/reference/activation-strategies"},(0,o.kt)("strong",{parentName:"a"},"activation strategies")),"."),(0,o.kt)("p",null,"For example, if you wanted to roll a feature out to 50% of users with ",(0,o.kt)("strong",{parentName:"p"},"a specific email domain "),"(such as \u201c@mycompany.com\u201d), then strategy constraints would let you target only users with that email domain."),(0,o.kt)("p",null,"Constraints can also be used for more general purposes, such as timing feature releases or releasing features in specific regions."),(0,o.kt)("p",null,"An activation strategy can have as many constraints as you want. When an activation strategy has multiple constraints, then ",(0,o.kt)("strong",{parentName:"p"},"every constraint "),"must be satisfied for the strategy to be evaluated. So if you have two constraints: one that says users must have an \u201c@mycompany.com\u201d email address and one that says users must have signed up for a beta program, then the strategy would ",(0,o.kt)("strong",{parentName:"p"},"only be evaluated for users with @mycompany.com emails that have signed up for the program"),"."),(0,o.kt)("admonition",{title:"Strategies and constraints",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Feature toggle strategies are ",(0,o.kt)("strong",{parentName:"p"},"permissive"),": As long as ",(0,o.kt)("strong",{parentName:"p"},"one")," strategy resolves to true, the feature is considered enabled. On the other hand, constrains are ",(0,o.kt)("strong",{parentName:"p"},"restrictive"),": for a given strategy, ",(0,o.kt)("strong",{parentName:"p"},"all")," constraints must be met for it to resolve to true."),(0,o.kt)("p",{parentName:"admonition"},"We can exemplify this difference with the logical operators AND and OR:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"For a feature toggle, if Strategy1 OR Strategy2 OR .. OR StrategyN is true, ",(0,o.kt)("strong",{parentName:"li"},"then the feature is enabled"),"."),(0,o.kt)("li",{parentName:"ul"},"For a strategy, it can be evaluated ",(0,o.kt)("strong",{parentName:"li"},"if and only if")," Constraint1 AND Constraint2 AND .. AND ConstraintN are met.")),(0,o.kt)("p",{parentName:"admonition"},"Note that even if all the constraints are met, the strategy itself might not resolve to true: that will depend on the strategy and the provided context.")),(0,o.kt)("p",null,"You can define constraints on whatever properties you want in your ",(0,o.kt)("a",{parentName:"p",href:"/reference/unleash-context"},"Unleash context"),"."),(0,o.kt)("p",null,"Constraints are applied to individual strategies and do not stay in sync with each other. When you need to have the same constraints applied to multiple strategies and need those constraints to stay in sync, use ",(0,o.kt)("a",{parentName:"p",href:"/reference/segments"},(0,o.kt)("strong",{parentName:"a"},"segments")),"."),(0,o.kt)(r.Z,{img:"/img/anatomy-of-unleash-constraint.png",caption:"Constraints can be applied to strategies, allowing you to narrow a feature's audience.",alt:"A hierarchy drawing showing a constraint applied to an activation strategy.",mdxType:"Figure"}),(0,o.kt)("h2",{id:"segments"},"Segments"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference/segments"},(0,o.kt)("strong",{parentName:"a"},"Segments"))," add extra functionality on top of ",(0,o.kt)("a",{parentName:"p",href:"/reference/strategy-constraints"},(0,o.kt)("strong",{parentName:"a"},"strategy constraints")),". A segment is a reusable collection of strategy constraints with a name and an optional description. When you apply a segment to a ",(0,o.kt)("a",{parentName:"p",href:"/reference/activation-strategies"},"strategy"),", the strategy will be evaluated as if all of the segment's constraints were applied to it."),(0,o.kt)("p",null,"Segments let you apply a set of constraints to multiple strategies ",(0,o.kt)("strong",{parentName:"p"},"and")," keep the constraints in sync between those strategies. Whenever you apply a segment to a strategy, you essentially create a ",(0,o.kt)("strong",{parentName:"p"},"reference")," to that segment. This means that whenever you change the segment by adding, removing, or changing constraints, this change propagates to all the strategies that reference this segment."),(0,o.kt)("p",null,"You can apply multiple segments to a strategy. Much like with constraints, ",(0,o.kt)("strong",{parentName:"p"},"every segment")," needs ",(0,o.kt)("strong",{parentName:"p"},"every constraint")," to be satisfied for the strategy to be evaluated. If you also have other constraints on the strategy, then those must also be satisfied."),(0,o.kt)("p",null,"Segments are only available to Pro and Enterprise users."),(0,o.kt)(r.Z,{img:"/img/anatomy-of-unleash-segments.png",caption:"Segments are reusable lists of constraints that can be applied to a strategy instead of or in addition to constraints.",mdxType:"Figure"}),(0,o.kt)("h2",{id:"variants-and-feature-toggle-payloads"},"Variants and feature toggle payloads"),(0,o.kt)("p",null,"By default, a ",(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggles"},"feature toggle")," in Unleash only tells you whether a feature is enabled or disabled, but you can also add more information to your toggles by using ",(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggle-variants"},(0,o.kt)("strong",{parentName:"a"},"feature toggle variants")),". Variants also allow you to run ",(0,o.kt)("a",{parentName:"p",href:"/topics/a-b-testing"},"A/B testing experiments"),"."),(0,o.kt)("p",null,"Feature toggles are designed to let you decide which users get access to a feature. Variants are designed to let you decide ",(0,o.kt)("strong",{parentName:"p"},"which version")," of the feature a user gets access to. For instance, if user A is part of your beta testing program and gets access to a new beta feature, then you can use variants to decide whether they should get the red version or the green version of the feature."),(0,o.kt)("p",null,"When you create new variants for a feature, they must be given a name and a ",(0,o.kt)("strong",{parentName:"p"},"weighting")," indicating how many users should see this particular variant of the feature. They can also be given a ",(0,o.kt)("strong",{parentName:"p"},"payload"),"."),(0,o.kt)("p",null,"You can use the variant payload to attach arbitrary data to a variant. Variants can have different kinds of payloads."),(0,o.kt)("p",null,"A feature toggle can have as many variants as you want."),(0,o.kt)("h3",{id:"variants-and-environments"},"Variants and environments"),(0,o.kt)("p",null,"Prior to 4.21, variants were independent of ",(0,o.kt)("a",{parentName:"p",href:"/reference/environments"},"environments"),". In other words: if you're on 4.19 or lower, you\u2019ll always have the exact same variants with the exact same weightings and the exact same payloads in all environments."),(0,o.kt)(r.Z,{img:"/img/anatomy-of-unleash-variants.png",caption:"Before Unleash 4.21, feature toggle variants were the same for all environments.",mdxType:"Figure"}),(0,o.kt)("p",null,"As of version 4.21, a feature can have different variants in different environments. For instance, a development environment might have no variants, while a production environment has 2 variants. Payloads, weightings and anything else can also differ between environments."),(0,o.kt)(r.Z,{img:"/img/anatomy-of-unleash-variants-per-environment.png",caption:"From Unleash 4.21 on, a feature toggle can have different in each environment.",mdxType:"Figure"}),(0,o.kt)("h2",{id:"use-case"},"Use case: changing website colors"),(0,o.kt)("p",null,"Using the concepts we have looked at in the previous sections, let\u2019s create a hypothetical case and see how Unleash would solve it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Problem statement:")," You have an existing website with a ",(0,o.kt)("strong",{parentName:"p"},"red")," color scheme, but you\u2019re feeling a bit adventurous and would like to try and see if changing it to a blue color scheme would be better."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Current state:")," You have an existing website that gets server-side rendered and you have a newly created instance of Unleash."),(0,o.kt)("h3",{id:"configuring-unleash-for-development"},"Configuring Unleash for development"),(0,o.kt)("p",null,"Assuming you have a brand new Unleash instance, you already have the \u201cDefault\u201d project and the \u201cDevelopment\u201d and \u201cProduction\u201d environments available. That\u2019s going to be all you need for now."),(0,o.kt)("p",null,"First things first, in the Default project, you create a new feature toggle, called \u201cnew-color-scheme\u201d (toggle names have to be URL-friendly, so no spaces allowed!)."),(0,o.kt)("p",null,"Because you\u2019d like to see the new color scheme while you\u2019re developing it, you assign a \u201cstandard\u201d strategy to the new-color-scheme toggle in the development environment and turn it on."),(0,o.kt)("h3",{id:"in-your-application"},"In your application"),(0,o.kt)("p",null,"You configure an ",(0,o.kt)("a",{parentName:"p",href:"/reference/sdks/"},"Unleash SDK for your server")," to communicate with Unleash. When rendering the page, you check the state of the new-color-scheme feature and render a different stylesheet based on the results."),(0,o.kt)("p",null,"In pseudocode (loosely based on the ",(0,o.kt)("a",{parentName:"p",href:"/reference/sdks/node"},"Node.js SDK"),"), that might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"if (unleash.isEnabled(\u201cnew-color-scheme\u201d)) {\n  // load stylesheet with new color scheme\n} else {\n  // load stylesheet with old color scheme\n}\n")),(0,o.kt)("p",null,"And with that, the new color scheme is now live in your development environment. Because there aren\u2019t  any strategies defined in the production environment yet, the feature is not active, and everything is as it was."),(0,o.kt)("h3",{id:"rolling-out-the-feature-to-users"},"Rolling out the feature to users"),(0,o.kt)("p",null,"When you\u2019re happy with the new color scheme, you decide to start rolling it out to users. But you want it to go out to only a small number of users at first, so that you can get some feedback while rolling out."),(0,o.kt)("p",null,"You decide to add a ",(0,o.kt)("em",{parentName:"p"},"gradual rollout")," strategy to the new-color-scheme feature in the production environment. Because you want to start small, you set the rollout percentage to 5%."),(0,o.kt)("p",null,"As soon as you enable the production environment, the feature gets rolled out to 5% of your users (assuming you\u2019ve deployed the code to production)."),(0,o.kt)("h3",{id:"adding-variants"},"Adding variants"),(0,o.kt)("p",null,"While you were developing the new color scheme, you also dabbled a bit with other colors in addition to blue: green and purple might be nice too! So you decide to create two extra color schemes that you\u2019re happy with. But you\u2019d like to hear what your users think too, so you need to roll it out to them somehow."),(0,o.kt)("p",null,"You decide to use feature toggle variants to differentiate between the different themes, creating three variants: blue, green, and purple. You want each of them to roll out to the same number of users, so you leave them equally weighted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nconst theme = unleash.getVariant(\u201cnew-color-scheme\u201d).name;\n\nif (theme === \u201cgreen\u201d) {\n  // load stylesheet with green color scheme\n} else if (theme === \u201cblue\u201d) {\n  // load stylesheet with blue color scheme\n} else if (theme === \u201cpurple\u201d) {\n  // load stylesheet with purple color scheme\n} else {\n  // load stylesheet with old color scheme\n}\n")),(0,o.kt)("p",null,"Now users that are included in the gradual rollout will get one of the three themes. Users that aren\u2019t included get the old theme."))}c.isMDXComponent=!0}}]);