"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8787],{70799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var n=a(87462),s=(a(67294),a(3905));const l={title:"The Playground"},i=void 0,r={unversionedId:"reference/playground",id:"reference/playground",title:"The Playground",description:"The Unleash playground is available from Unleash 4.14 onwards. The playground is available in all Unleash versions.",source:"@site/docs/reference/playground.mdx",sourceDirName:"reference",slug:"/reference/playground",permalink:"/reference/playground",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/playground.mdx",tags:[],version:"current",frontMatter:{title:"The Playground"},sidebar:"documentation",previous:{title:"Front-end API access",permalink:"/reference/front-end-api"},next:{title:"Public Invite Links",permalink:"/reference/public-signup"}},o={},u=[{value:"Configuring the query",id:"configuring-the-query",level:2},{value:"Environment and projects",id:"environment-and-projects",level:3},{value:"The Unleash context",id:"the-unleash-context",level:3},{value:"Implicit context fields",id:"implicit-context-fields",level:4},{value:"The response",id:"the-response",level:2},{value:"Detailed evaluation results",id:"detailed-evaluation-results",level:3},{value:"Unknown strategies",id:"unknown-strategies",level:2},{value:"Custom Strategies",id:"custom-strategies",level:3},{value:"The Application Hostname strategy",id:"application-hostname",level:3}],d={toc:u};function h(e){let{components:t,...l}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Availability",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"The Unleash playground is available from Unleash 4.14 onwards. The playground is available in all Unleash versions.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"The Unleash Playground form and an indication of where in the nav menu it is located.",src:a(12912).Z,width:"1400",height:"800"})),(0,s.kt)("p",null,"The unleash playground is a part of the Unleash Admin UI and an accompanying API. The playground lets you see which of your instance's feature toggles would be enabled for a given Unleash context. It has multiple uses, such as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Understanding how Unleash evaluates strategies, constraints, and segments."),(0,s.kt)("li",{parentName:"ul"},"Debugging Unleash contexts and toggles behaving differently from what you expect."),(0,s.kt)("li",{parentName:"ul"},"Tailoring a set of strategies for given contexts.")),(0,s.kt)("p",null,"Each feature toggle will contain info on whether it was enabled or not and which variant it was assigned. Later versions of the playground also contain ",(0,s.kt)("a",{parentName:"p",href:"#detailed-evaluation-results"},"detailed evaluation results")," to help you understand exactly why the feature was enabled or disabled."),(0,s.kt)("h2",{id:"configuring-the-query"},"Configuring the query"),(0,s.kt)("p",null,"This section describes what information the playground needs to evaluate your Unleash context against your existing features."),(0,s.kt)("h3",{id:"environment-and-projects"},"Environment and projects"),(0,s.kt)("p",null,"The playground needs to know which environment and which projects to use when evaluating features. The playground UI will default to using the first environment in your list of instance environments and all projects."),(0,s.kt)("p",null,"Features can only be evaluated against a single environment at a time. The environment should be one of the environments configured for your Unleash instance."),(0,s.kt)("p",null,"The playground will only evaluate features belonging to the projects you specify. The projects parameter can either be a list of projects ",(0,s.kt)("strong",{parentName:"p"},"or")," ",(0,s.kt)("em",{parentName:"p"},"all")," projects."),(0,s.kt)("h3",{id:"the-unleash-context"},"The Unleash context"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/user_guide/unleash_context"},"Unleash context")," represents a client SDK's configuration and used for evaluating your features. You can construct your own context or use a JSON version of a context from a client."),(0,s.kt)("h4",{id:"implicit-context-fields"},"Implicit context fields"),(0,s.kt)("p",null,"You can add any fields you want to the context used for the evaluation, and you can also leave out any fields you want. However, there are some fields that will be set for you if don't provide them:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"strong"},"appName")),": Unleash clients all require an ",(0,s.kt)("inlineCode",{parentName:"li"},"appName")," to start up. If you do not provide an ",(0,s.kt)("inlineCode",{parentName:"li"},"appName"),", the playground will assign a default value to this property instead."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"strong"},"currentTime")),": The ",(0,s.kt)("inlineCode",{parentName:"li"},"currentTime")," property of the ",(0,s.kt)("a",{parentName:"li",href:"/user_guide/unleash_context"},"Unleash context")," gets auto-populated with the current time. You can override this manually by providing a value of your own.")),(0,s.kt)("h2",{id:"the-response"},"The response"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Playground results: a table of feature names and whether they&#39;re enabled or not.",src:a(61938).Z,width:"1400",height:"800"})),(0,s.kt)("p",null,"The playground's response contains a list of all the feature toggles that have been evaluated based on your configured ",(0,s.kt)("a",{parentName:"p",href:"#environments-and-projects"},"environments and projects"),". In the UI, the playground displays the features in a table. Each feature indicates whether its considered ",(0,s.kt)("em",{parentName:"p"},"enabled")," or ",(0,s.kt)("em",{parentName:"p"},"disabled")," and which ",(0,s.kt)("a",{parentName:"p",href:"/advanced/toggle_variants"},"variant")," was assigned to it, if any."),(0,s.kt)("p",null,"As with all of Unleash's client SDKs, the playground respects ",(0,s.kt)("a",{parentName:"p",href:"/advanced/stickiness"},"stickiness"),". The ",(0,s.kt)("a",{parentName:"p",href:"/advanced/stickiness#calculation"},"stickiness algorithm")," guarantees that you'll always get the same variants and the same gradual rollout results if you provide the same context, as long as you provide the context field used for calculating stickiness."),(0,s.kt)("h3",{id:"detailed-evaluation-results"},"Detailed evaluation results"),(0,s.kt)("admonition",{title:"Availability",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Detailed evaluation results were added to the playground in Unleash 4.15.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Detailed strategy evaluation results. A list of strategies and their constraints along with indicators of whether each one is `true` or `false`.",src:a(96497).Z,width:"1400",height:"800"})),(0,s.kt)("p",null,"Each feature in the response contains information about all of its evaluated strategies. Each of a feature's strategies lists all of the strategies constraints and segments and how it all evaluated (as best as the playground can, as mentioned in the ",(0,s.kt)("a",{parentName:"p",href:"#unknown-strategies"},"unknown strategies")," section)."),(0,s.kt)("p",null,"In addition to the results of individual strategies, each strategy is also assigned an overall strategy evaluation result: one of ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),", and ",(0,s.kt)("em",{parentName:"p"},"unknown"),". The rules for the overall result are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("em",{parentName:"li"},"at least one")," strategy evaluates to ",(0,s.kt)("inlineCode",{parentName:"li"},"true"),", then the overall result is ",(0,s.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("em",{parentName:"li"},"all")," strategies evaluate to ",(0,s.kt)("inlineCode",{parentName:"li"},"false"),", the overall result is ",(0,s.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("em",{parentName:"li"},"one or more")," strategies evaluate to ",(0,s.kt)("em",{parentName:"li"},"unknown")," and ",(0,s.kt)("em",{parentName:"li"},"all other strategies evaluate to ",(0,s.kt)("inlineCode",{parentName:"em"},"false")),", then the overall result is ",(0,s.kt)("inlineCode",{parentName:"li"},"unknown"),".")),(0,s.kt)("h2",{id:"unknown-strategies"},"Unknown strategies"),(0,s.kt)("p",null,"Not all strategies can be correctly evaluated by the playground. Strategies that cannot be fully evaluated will be given an evaluation result status of 'unknown'."),(0,s.kt)("p",null,"There's currently two cases where the playground can't evaluate the strategy:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("a",{parentName:"li",href:"#custom-strategies"},"strategy is a custom strategy")," and the playground doesn't have an implementation for the strategy."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("a",{parentName:"li",href:"#application-hostname"},"strategy is the 'Application Hostname' strategy"),".")),(0,s.kt)("p",null,"Even if the playground doesn't recognize or otherwise can't evaluate a specific strategy, it ",(0,s.kt)("em",{parentName:"p"},"may")," still evaluate the overall strategy result to ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," (and be certain that it is the right result). If a strategy has ",(0,s.kt)("a",{parentName:"p",href:"/advanced/strategy_constraints"},"constraints")," or ",(0,s.kt)("a",{parentName:"p",href:"/reference/segments"},"segments")," that are not satisfied, the playground knows that the strategy result wouldn't be ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),", regardless of the actual strategy implementation. As such, if a strategy can't be evaluated, it can be ",(0,s.kt)("strong",{parentName:"p"},"either")," ",(0,s.kt)("em",{parentName:"p"},"unknown")," or ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"em"},"false")),"."),(0,s.kt)("h3",{id:"custom-strategies"},"Custom Strategies"),(0,s.kt)("p",null,"The playground does not have any implementations for ",(0,s.kt)("a",{parentName:"p",href:"/advanced/custom_activation_strategy"},"custom strategies")," and adding custom strategy implementations to Unleash is not currently supported. Because of this, custom strategies will never be evaluated as ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,s.kt)("h3",{id:"application-hostname"},"The Application Hostname strategy"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/user_guide/activation_strategy#hostnames"},"application hostname strategy")," is a little different from the other built-in strategies: it depends on external state and ",(0,s.kt)("em",{parentName:"p"},"not")," on the Unleash context to evaluate. In short, the strategy checks its application environment to get the hostname, so the Unleash context has no effect on the result of this strategy."),(0,s.kt)("p",null,"Because the application hostname strategy depends on external state, the playground can't guarantee whether the strategy would be true or false in a client. Further, the result in the playground would most likely be different from what you'd see in a client. Because of this, the playground does not evaluate this strategy."))}h.isMDXComponent=!0},96497:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/playground-detailed-results-6f9b635c741b41863434024960c1ebdc.png"},12912:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/playground-form-2a52cd2db54b217b017d510864722f69.png"},61938:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/playground-results-dc89373141491155f051c8a8c9243559.png"}}]);