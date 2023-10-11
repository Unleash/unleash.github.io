"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8787],{89282:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(67294),i=n(86010),o=n(18015),l=n(11614);const r="admonition_LlT9",s="admonitionHeading_tbUL",u="admonitionIcon_kALy",d="admonitionContent_S0QG";var c=n(25108);const h={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},p={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:i}}(e.children);return{...e,title:e.title??t,children:n}}function f(e){const{children:t,type:n,title:l,icon:f}=m(e),g=function(e){const t=p[e]??e;return h[t]||(c.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),h.info)}(n),v=l??g.label,{iconComponent:y}=g,k=f??a.createElement(y,null);return a.createElement("div",{className:(0,i.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert",`alert--${g.infimaClassName}`,r)},a.createElement("div",{className:s},a.createElement("span",{className:u},k),v),a.createElement("div",{className:d},t))}},46469:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(51402);const o=e=>{let{img:t,alt:n,caption:o}=e;return a.createElement("figure",null,a.createElement("img",{alt:n,src:(0,i.Z)(t)}),a.createElement("figcaption",null,o))}},640:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(89282);const o=e=>{let{videoUrls:t}=e;return a.createElement("article",{className:"unleash-video-container"},t?t.map((e=>a.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0}))):a.createElement(i.Z,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly."))}},96263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),o=n(46469),l=n(640);const r={title:"The Playground"},s=void 0,u={unversionedId:"reference/playground",id:"reference/playground",title:"The Playground",description:"The Unleash playground is available in all Unleash versions from Unleash 4.14 onwards. Unleash 5.3 introduced a more advanced playground that allows you to query multiple environments and multiple values for a single context value at the same time.",source:"@site/docs/reference/playground.mdx",sourceDirName:"reference",slug:"/reference/playground",permalink:"/reference/playground",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/playground.mdx",tags:[],version:"current",frontMatter:{title:"The Playground"},sidebar:"documentation",previous:{title:"Notifications",permalink:"/reference/notifications"},next:{title:"Public Invite Links",permalink:"/reference/public-signup"}},d={},c=[{value:"Configuring the query",id:"configuring-the-query",level:2},{value:"Environments and projects",id:"environments-and-projects",level:3},{value:"The Unleash context",id:"the-unleash-context",level:3},{value:"Multiple values for a single context field",id:"multiple-values-for-a-single-context-field",level:4},{value:"Implicit context fields",id:"implicit-context-fields",level:4},{value:"The response",id:"the-response",level:2},{value:"The diff view",id:"the-diff-view",level:3},{value:"Detailed evaluation results",id:"detailed-evaluation-results",level:3},{value:"Unknown strategies",id:"unknown-strategies",level:2},{value:"Custom Strategies",id:"custom-strategies",level:3},{value:"The Application Hostname strategy",id:"application-hostname",level:3}],h={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Availability",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The Unleash playground is available in all Unleash versions from Unleash 4.14 onwards. Unleash 5.3 introduced a more advanced playground that allows you to query multiple environments and multiple values for a single context value at the same time.")),(0,i.kt)(l.Z,{videoUrls:["https://www.youtube.com/embed/-HP6axX5jUo"],mdxType:"VideoContent"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The Unleash Playground form and an indication of where in the nav menu it is located.",src:n(12912).Z,width:"1400",height:"800"})),(0,i.kt)("p",null,"The unleash playground is a part of the Unleash Admin UI and an accompanying API. The playground lets you see which of your instance's feature toggles would be enabled for a given Unleash context. It has multiple uses, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Understanding how Unleash evaluates strategies, constraints, and segments."),(0,i.kt)("li",{parentName:"ul"},"Debugging Unleash contexts and toggles behaving differently from what you expect."),(0,i.kt)("li",{parentName:"ul"},"Tailoring a set of strategies for given contexts.")),(0,i.kt)("p",null,"Each feature toggle will contain info on whether it was enabled or not and which variant it was assigned. Later versions of the playground also contain ",(0,i.kt)("a",{parentName:"p",href:"#detailed-evaluation-results"},"detailed evaluation results")," to help you understand exactly why the feature was enabled or disabled."),(0,i.kt)("h2",{id:"configuring-the-query"},"Configuring the query"),(0,i.kt)("p",null,"This section describes what information the playground needs to evaluate your Unleash context against your existing features."),(0,i.kt)("h3",{id:"environments-and-projects"},"Environments and projects"),(0,i.kt)("p",null,"The playground needs to know which environments and which projects to use when evaluating features. The playground UI will default to using the first environment in your list of instance environments and all projects."),(0,i.kt)("p",null,"You can select as many of your environments as you want. All environments must be environments that exist in your Unleash instance. Prior to Unleash 5.3, features could only be evaluated against a single environment at a time."),(0,i.kt)("p",null,"The playground will only evaluate features belonging to the projects you specify. The projects parameter can either be a list of projects ",(0,i.kt)("strong",{parentName:"p"},"or")," ",(0,i.kt)("em",{parentName:"p"},"all")," projects."),(0,i.kt)("h3",{id:"the-unleash-context"},"The Unleash context"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/reference/unleash-context"},"Unleash context")," represents a client SDK's configuration and used for evaluating your features. You can construct your own context or use a JSON version of a context from a client."),(0,i.kt)("h4",{id:"multiple-values-for-a-single-context-field"},"Multiple values for a single context field"),(0,i.kt)("admonition",{title:"Availability",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ability to specifiy multiple values for a single context field was introduced in Unleash 5.3.")),(0,i.kt)("p",null,"You can specify multiple values for a single context field by separating the values with a comma. For instance: ",(0,i.kt)("inlineCode",{parentName:"p"},'"value1, value2"'),"."),(0,i.kt)("p",null,"When you specify multiple values for context field, each value will be used to populate one variant of the response."),(0,i.kt)("h4",{id:"implicit-context-fields"},"Implicit context fields"),(0,i.kt)("p",null,"You can add any fields you want to the context used for the evaluation, and you can also leave out any fields you want. However, there are some fields that will be set for you if don't provide them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"appName")),": Unleash clients all require an ",(0,i.kt)("inlineCode",{parentName:"li"},"appName")," to start up. If you do not provide an ",(0,i.kt)("inlineCode",{parentName:"li"},"appName"),", the playground will assign a default value to this property instead."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"currentTime")),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"currentTime")," property of the ",(0,i.kt)("a",{parentName:"li",href:"/reference/unleash-context"},"Unleash context")," gets auto-populated with the current time. You can override this manually by providing a value of your own.")),(0,i.kt)("h2",{id:"the-response"},"The response"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Playground results: a table of feature names and whether they&#39;re enabled or not.",src:n(61938).Z,width:"1400",height:"800"})),(0,i.kt)("p",null,"The playground's response contains a list of all the feature toggles that have been evaluated based on your configured ",(0,i.kt)("a",{parentName:"p",href:"#environments-and-projects"},"environments, projects")," and ",(0,i.kt)("a",{parentName:"p",href:"#the-unleash-context"},"context"),". The full response will contain results for all combinations of context fields and all environments that you selected."),(0,i.kt)("p",null,"In the UI, the playground displays the features in a table. Each row of the table corresponds to a single feature. The table has a separate column for each of the environments that you selected for your query."),(0,i.kt)(o.Z,{caption:'Each row contains a feature and columns for the selected environments. In this screenshot, the "development" and "production" environments have been selected.',img:"/img/playground-results-row.png",mdxType:"Figure"}),(0,i.kt)("p",null,"Because you can add multiple values for each context field, each feature-environment cell contains the number of combinations that evaluated to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," for the feature in the given environment. This can be expanded into a more detailed overview over what combinations of context fields evaluated to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," along with any ",(0,i.kt)("a",{parentName:"p",href:"/reference/feature-toggle-variants"},"variants"),"."),(0,i.kt)(o.Z,{caption:'A small table showing the detailed evaluation for a feature in the "development" environment. The provided context contained three values for the "userId" property, so the table contains three rows, showing all different combinations of the context.',img:"/img/playground-results-development.png",mdxType:"Figure"}),(0,i.kt)("p",null,"As with all of Unleash's client SDKs, the playground respects ",(0,i.kt)("a",{parentName:"p",href:"/reference/stickiness"},"stickiness"),". The ",(0,i.kt)("a",{parentName:"p",href:"/reference/stickiness#calculation"},"stickiness algorithm")," guarantees that you'll always get the same variants and the same gradual rollout results if you provide the same context, as long as you provide the context field used for calculating stickiness."),(0,i.kt)("h3",{id:"the-diff-view"},"The diff view"),(0,i.kt)("p",null,'You can compare how a feature evaluates in different environments. If you select more than one environment for your playground query, the table will have an additional "Diff" column in each row. Using the "preview diff" button, you can open a table that gives an overview over how the feature evaluated for each context combination in each environment.'),(0,i.kt)(o.Z,{caption:'A table with three rows. Each row contains a context combination and results in the form of `true` and `false` each environment. In this case, it shows that when the "userId" context field is "2", then the feature is enabled in development, but not in production.',img:"/img/playground-results-diff.png",mdxType:"Figure"}),(0,i.kt)("h3",{id:"detailed-evaluation-results"},"Detailed evaluation results"),(0,i.kt)("admonition",{title:"Availability",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Detailed evaluation results were added to the playground in Unleash 4.15.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Detailed strategy evaluation results. A list of strategies and their constraints along with indicators of whether each one is `true` or `false`.",src:n(96497).Z,width:"1400",height:"800"})),(0,i.kt)("p",null,"Each feature in the response contains information about all of its evaluated strategies. Each of a feature's strategies lists all of the strategies constraints and segments and how it all evaluated (as best as the playground can, as mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"#unknown-strategies"},"unknown strategies")," section)."),(0,i.kt)("p",null,"In addition to the results of individual strategies, each strategy is also assigned an overall strategy evaluation result: one of ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", and ",(0,i.kt)("em",{parentName:"p"},"unknown"),". The rules for the overall result are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("em",{parentName:"li"},"at least one")," strategy evaluates to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", then the overall result is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("em",{parentName:"li"},"all")," strategies evaluate to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", the overall result is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("em",{parentName:"li"},"one or more")," strategies evaluate to ",(0,i.kt)("em",{parentName:"li"},"unknown")," and ",(0,i.kt)("em",{parentName:"li"},"all other strategies evaluate to ",(0,i.kt)("inlineCode",{parentName:"em"},"false")),", then the overall result is ",(0,i.kt)("inlineCode",{parentName:"li"},"unknown"),".")),(0,i.kt)("h2",{id:"unknown-strategies"},"Unknown strategies"),(0,i.kt)("p",null,"Not all strategies can be correctly evaluated by the playground. Strategies that cannot be fully evaluated will be given an evaluation result status of 'unknown'."),(0,i.kt)("p",null,"There's currently two cases where the playground can't evaluate the strategy:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"#custom-strategies"},"strategy is a custom strategy")," and the playground doesn't have an implementation for the strategy."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"#application-hostname"},"strategy is the 'Application Hostname' strategy"),".")),(0,i.kt)("p",null,"Even if the playground doesn't recognize or otherwise can't evaluate a specific strategy, it ",(0,i.kt)("em",{parentName:"p"},"may")," still evaluate the overall strategy result to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," (and be certain that it is the right result). If a strategy has ",(0,i.kt)("a",{parentName:"p",href:"/reference/strategy-constraints"},"constraints")," or ",(0,i.kt)("a",{parentName:"p",href:"/reference/segments"},"segments")," that are not satisfied, the playground knows that the strategy result wouldn't be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", regardless of the actual strategy implementation. As such, if a strategy can't be evaluated, it can be ",(0,i.kt)("strong",{parentName:"p"},"either")," ",(0,i.kt)("em",{parentName:"p"},"unknown")," or ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"false")),"."),(0,i.kt)("h3",{id:"custom-strategies"},"Custom Strategies"),(0,i.kt)("p",null,"The playground does not have any implementations for ",(0,i.kt)("a",{parentName:"p",href:"/reference/custom-activation-strategies"},"custom strategies")," and adding custom strategy implementations to Unleash is not currently supported. Because of this, custom strategies will never be evaluated as ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"application-hostname"},"The Application Hostname strategy"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/reference/activation-strategies#hostnames"},"application hostname strategy")," is a little different from the other built-in strategies: it depends on external state and ",(0,i.kt)("em",{parentName:"p"},"not")," on the Unleash context to evaluate. In short, the strategy checks its application environment to get the hostname, so the Unleash context has no effect on the result of this strategy."),(0,i.kt)("p",null,"Because the application hostname strategy depends on external state, the playground can't guarantee whether the strategy would be true or false in a client. Further, the result in the playground would most likely be different from what you'd see in a client. Because of this, the playground does not evaluate this strategy."))}p.isMDXComponent=!0},96497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playground-detailed-results-6f9b635c741b41863434024960c1ebdc.png"},12912:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playground-form-2a52cd2db54b217b017d510864722f69.png"},61938:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playground-results-dc89373141491155f051c8a8c9243559.png"}}]);