"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[66255],{99878:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(67294),r=a(86010),i=a(18015),o=a(11614);const l="admonition_LlT9",s="admonitionHeading_tbUL",p="admonitionIcon_kALy",d="admonitionContent_S0QG";var m=a(25108);const u={note:{infimaClassName:"secondary",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:n.createElement(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:n.createElement(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:n.createElement(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:n.createElement(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:n.createElement(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function h(e){const{mdxAdmonitionTitle:t,rest:a}=function(e){const t=n.Children.toArray(e),a=t.find((e=>n.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=n.createElement(n.Fragment,null,t.filter((e=>e!==a)));return{mdxAdmonitionTitle:a,rest:r}}(e.children);return{...e,title:e.title??t,children:a}}function k(e){const{children:t,type:a,title:o,icon:k}=h(e),N=function(e){const t=c[e]??e;return u[t]||(m.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),u.info)}(a),f=o??N.label,{iconComponent:g}=N,y=k??n.createElement(g,null);return n.createElement("div",{className:(0,r.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert",`alert--${N.infimaClassName}`,l)},n.createElement("div",{className:s},n.createElement("span",{className:p},y),f),n.createElement("div",{className:d},t))}},640:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(99878);const i=e=>{let{videoUrls:t}=e;return n.createElement("article",{className:"unleash-video-container"},t?t.map((e=>n.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0}))):n.createElement(r.Z,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly."))}},64740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),i=a(640);const o={title:"Strategy Constraints"},l=void 0,s={unversionedId:"reference/strategy-constraints",id:"reference/strategy-constraints",title:"Strategy Constraints",description:"Before Unleash 4.16, strategy constraints were only available to Unleash Pro and Enterprise users. From 4.16 onwards, they're available to everyone.",source:"@site/docs/reference/strategy-constraints.md",sourceDirName:"reference",slug:"/reference/strategy-constraints",permalink:"/reference/strategy-constraints",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/strategy-constraints.md",tags:[],version:"current",frontMatter:{title:"Strategy Constraints"},sidebar:"documentation",previous:{title:"Stickiness",permalink:"/reference/stickiness"},next:{title:"Tags",permalink:"/reference/tags"}},p={},d=[{value:"Constraining on custom context fields",id:"constraining-on-custom-context-fields",level:2},{value:"Constraint structure",id:"constraint-structure",level:2},{value:"Strategy constraint operators",id:"strategy-constraint-operators",level:2},{value:"Constraint negation / inversion",id:"constraint-negation",level:3},{value:"Numeric operators",id:"numeric-operators",level:3},{value:"Date and time operators",id:"date-and-time-operators",level:3},{value:"String operators",id:"string-operators",level:3},{value:"Versioning (SemVer) operators",id:"versioning-semver-operators",level:3},{value:"Interacting with strategy constraints in the client SDKs",id:"sdks",level:2},{value:"Constraint limitations (or &quot;how many user IDs can I add to a constraint&quot;)",id:"limitations",level:2},{value:"Incompatibilities and undefined behavior",id:"incompatibilities",level:2},{value:"Deprecated: Constrain on a specific environment",id:"constrain-on-a-specific-environment",level:2}],m={toc:d};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Before Unleash 4.16, strategy constraints were only available to Unleash Pro and Enterprise users. From 4.16 onwards, they're ",(0,r.kt)("strong",{parentName:"p"},"available to everyone"),"."),(0,r.kt)("p",{parentName:"admonition"},"Unleash 4.9 introduced a more comprehensive set of constraint operators. These require that both Unleash ",(0,r.kt)("em",{parentName:"p"},"and")," your client SDK of choice support them. See the ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/#strategy-constraints"},"SDK compatibility table")," for more information. Prior to Unleash 4.9, the only available operators were ",(0,r.kt)("inlineCode",{parentName:"p"},"IN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NOT_IN"),".")),(0,r.kt)("admonition",{title:"undefined behavior",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When using ",(0,r.kt)("em",{parentName:"p"},"advanced strategy constraints")," (any operator that isn't ",(0,r.kt)("inlineCode",{parentName:"p"},"IN")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"NOT_IN"),"), ",(0,r.kt)("em",{parentName:"p"},"make sure your client SDK is up to date")," and supports this feature. For older versions of the client SDKs we ",(0,r.kt)("strong",{parentName:"p"},"cannot guarantee")," any specific behavior. Please see the ",(0,r.kt)("a",{parentName:"p",href:"#incompatibilities"},"incompatibilities section")," for more information.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Strategy constraints")," are conditions that must be satisfied for an ",(0,r.kt)("a",{parentName:"p",href:"../reference/activation-strategies"},"activation strategy")," to be evaluated for a feature toggle.\nWith strategy constraints, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"roll out a feature ",(0,r.kt)("strong",{parentName:"li"},"only to users in a specific region")),(0,r.kt)("li",{parentName:"ul"},"schedule a feature to be ",(0,r.kt)("strong",{parentName:"li"},"released at a specific time")),(0,r.kt)("li",{parentName:"ul"},"make a feature available for ",(0,r.kt)("strong",{parentName:"li"},"a limited time only")),(0,r.kt)("li",{parentName:"ul"},"release a feature to users with one of a set of ",(0,r.kt)("strong",{parentName:"li"},"email addresses")),(0,r.kt)("li",{parentName:"ul"},"... and much more!")),(0,r.kt)("p",null,"Strategy constraints use fields from the ",(0,r.kt)("a",{parentName:"p",href:"../reference/unleash-context"},"Unleash Context")," to determine whether a strategy should apply or not.\nYou can constrain both on ",(0,r.kt)("a",{parentName:"p",href:"../reference/unleash-context#structure"},"standard context fields")," and on ",(0,r.kt)("a",{parentName:"p",href:"../reference/unleash-context#custom-context-fields"},"custom context fields"),"."),(0,r.kt)("p",null,"This page explains what strategy constraints are in Unleash and how they work. If you want to know ",(0,r.kt)("em",{parentName:"p"},"how you add")," strategy constraints to an activation strategy, see ",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-add-strategy-constraints",title:"how to add strategy constraints"},"the corresponding how-to guide"),"."),(0,r.kt)(i.Z,{videoUrls:["https://www.youtube.com/embed/kqtqMFhLRBE"],mdxType:"VideoContent"}),(0,r.kt)("h2",{id:"constraining-on-custom-context-fields"},"Constraining on custom context fields"),(0,r.kt)("admonition",{title:"Making custom context fields available",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To be able to constrain on a field, it must be listed under the Context Field menu. If a field isn't listed, you can add it yourself. See ",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-define-custom-context-fields"},"the how-to guide for creating your own custom fields")," for more info.")),(0,r.kt)("p",null,"Unleash only provides a limited set of context fields by default, and they may not fulfill all your needs.\nBy using ",(0,r.kt)("a",{parentName:"p",href:"../reference/unleash-context#custom-context-fields"},"custom context fields"),", you can tailor strategy constraints to your specific use case, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"based on tenant IDs, release a feature to only specific tenants in a multi-tenant setup"),(0,r.kt)("li",{parentName:"ul"},"release a feature to users in a specific region"),(0,r.kt)("li",{parentName:"ul"},"release a feature only to beta testers")),(0,r.kt)("p",null,"You can also combine strategy constraints with the ",(0,r.kt)("a",{parentName:"p",href:"../reference/activation-strategies#gradual-rollout"},"gradual rollout strategy")," to do a gradual rollout to a ",(0,r.kt)("strong",{parentName:"p"},"specific segment")," of your user base."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A toggle with the gradual rollout strategy. The toggle is constrained on the custom content field &quot;region&quot; and set to only activate if the region is Africa or Europe.",src:a(68931).Z,width:"1366",height:"1272"})),(0,r.kt)("h2",{id:"constraint-structure"},"Constraint structure"),(0,r.kt)("p",null,"Each strategy constraint has three parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("strong",{parentName:"li"},"context field"),": The context field to use for evaluation."),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("strong",{parentName:"li"},"operator"),": One of the ",(0,r.kt)("a",{parentName:"li",href:"#strategy-constraint-operators"},"operators listed below"),"."),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("strong",{parentName:"li"},"value"),"/",(0,r.kt)("strong",{parentName:"li"},"list of values"),": A value or list of values to use in the evaluation of the constraint.")),(0,r.kt)("p",null,"These parts turn the strategy constraint into an expression that evaluates to either ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"To clarify, here's a few example strategy constraints and what they do:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Context field"),(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Value(s)"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STR_ENDS_WITH")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@example.com, @mycompany.com")),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluates to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," for users whose user IDs end with ",(0,r.kt)("inlineCode",{parentName:"td"},"@example.com")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"@mycompany.com"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"currentTime")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATE_AFTER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2022-06-05 21:43:22Z")),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluates to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if the current time is after ",(0,r.kt)("inlineCode",{parentName:"td"},"2022-06-05 21:43:22Z"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userScore"),(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NUM_GTE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000")),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluates to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if the ",(0,r.kt)("a",{parentName:"td",href:"../reference/unleash-context#custom-context-fields"},"custom context field")," ",(0,r.kt)("inlineCode",{parentName:"td"},"userScore")," has a value of ",(0,r.kt)("inlineCode",{parentName:"td"},"1000")," or higher.")))),(0,r.kt)("h2",{id:"strategy-constraint-operators"},"Strategy constraint operators"),(0,r.kt)("admonition",{title:"Placeholder context field",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this section, ",(0,r.kt)("inlineCode",{parentName:"p"},"<context-field>")," is used as a placeholder for an arbitrary context field. With the exception of the ",(0,r.kt)("inlineCode",{parentName:"p"},"currentTime")," field, you can use any context field in its place.")),(0,r.kt)("p",null,"Unleash currently supports 15 different constraint operators.\nThe operators can be grouped into four different categories based on their method of comparison."),(0,r.kt)("h3",{id:"constraint-negation"},"Constraint negation / inversion"),(0,r.kt)("p",null,"All constraint expressions can be ",(0,r.kt)("strong",{parentName:"p"},"negated"),", meaning that they get their opposite value. Constraints are evaluated to either ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". Negating a constraint would turn a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," value into a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," value into a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," value."),(0,r.kt)("p",null,"For instance, using the numeric equivalence operator ",(0,r.kt)("inlineCode",{parentName:"p"},"NUM_EQ"),", the following truth table shows the how value negation affects the result:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Expression"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Negated"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4 ",(0,r.kt)("inlineCode",{parentName:"td"},"NUM_EQ")," 4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4 ",(0,r.kt)("inlineCode",{parentName:"td"},"NUM_EQ")," 5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"numeric-operators"},"Numeric operators"),(0,r.kt)("p",null,"Numeric operators compare the numeric values of context fields with your provided value."),(0,r.kt)("p",null,"Numeric operators only accept single values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"th"},"<context-field>")," is ..."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NUM_EQ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"equal")," to the provided value; the mathematical ",(0,r.kt)("inlineCode",{parentName:"td"},"=")," operator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NUM_GT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"strictly greater than")," the provided value; the mathematical ",(0,r.kt)("inlineCode",{parentName:"td"},">")," operator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NUM_GTE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"greater than or equal to")," the provided value; the mathematical ",(0,r.kt)("inlineCode",{parentName:"td"},"\u2a7e")," operator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NUM_LT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"strictly less than")," the provided value; the mathematical ",(0,r.kt)("inlineCode",{parentName:"td"},"<")," operator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NUM_LTE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"less than or equal to")," the provided value; the mathematical ",(0,r.kt)("inlineCode",{parentName:"td"},"\u2a7d")," operator")))),(0,r.kt)("p",null,"You can read more about ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Equality_(mathematics)",title:"Mathematical equality at Wikipedia"},"numeric equality")," or ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inequality_(mathematics)"},"numeric inequality operators at Wikipedia"),"."),(0,r.kt)("h3",{id:"date-and-time-operators"},"Date and time operators"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"currentTime")," and date and time operators"),(0,r.kt)("p",{parentName:"admonition"},"The date and time operators are ",(0,r.kt)("strong",{parentName:"p"},"only available on the ",(0,r.kt)("inlineCode",{parentName:"strong"},"currentTime"))," context field. Furthermore, the ",(0,r.kt)("inlineCode",{parentName:"p"},"currentTime")," context field ",(0,r.kt)("strong",{parentName:"p"},"can not be used")," with any of the other operators.")),(0,r.kt)("p",null,"With the date and time operators, you can enable a feature before and/or after a specified time.\nThe operators compare the ",(0,r.kt)("a",{parentName:"p",href:"../reference/unleash-context"},"Unleash context's")," ",(0,r.kt)("inlineCode",{parentName:"p"},"currentTime")," property against the provided value."),(0,r.kt)("p",null,"You can create a ",(0,r.kt)("strong",{parentName:"p"},"time span")," by combining the two constraint operators using two different constraints on the same strategy.\nIn that case the strategy will be evaluated from ",(0,r.kt)("inlineCode",{parentName:"p"},"DATE_AFTER")," and until ",(0,r.kt)("inlineCode",{parentName:"p"},"DATE_BEFORE"),"."),(0,r.kt)("p",null,"Date and time operators only support single values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"th"},"currentTime")," is ..."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATE_AFTER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"after")," the provided date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATE_BEFORE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"before")," the provided date")))),(0,r.kt)("h3",{id:"string-operators"},"String operators"),(0,r.kt)("p",null,"String operators differ from the other categories in two different ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all operators accept multiple values"),(0,r.kt)("li",{parentName:"ul"},"most operators also consider ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Letter_case",title:"letter case on Wikipedia"},"letter case")," and can be set to be case-sensitive or case-insensitive")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"th"},"<context-field>")," ..."),(0,r.kt)("th",{parentName:"tr",align:null},"Supports case-insensitivity"),(0,r.kt)("th",{parentName:"tr",align:null},"Available since"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IN")),(0,r.kt)("td",{parentName:"tr",align:null},"is ",(0,r.kt)("strong",{parentName:"td"},"equal")," to any of the provided values"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"v3.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NOT_IN")),(0,r.kt)("td",{parentName:"tr",align:null},"is ",(0,r.kt)("strong",{parentName:"td"},"not equal")," to any of the provided values"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"v3.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STR_CONTAINS")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"contains")," any of the provided strings"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"v4.9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STR_ENDS_WITH")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ends")," with any of the provided strings"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"v4.9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STR_STARTS_WITH")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"starts")," with any of the provided strings"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"v4.9")))),(0,r.kt)("h3",{id:"versioning-semver-operators"},"Versioning (SemVer) operators"),(0,r.kt)("p",null,"The SemVer operators are used to compare version numbers such as application versions, dependency versions, etc."),(0,r.kt)("p",null,"The SemVer input must follow a few rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The value you enter ",(0,r.kt)("strong",{parentName:"li"},"must")," start with and contain at least major, minor, and patch versions: Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"1.2.3")),(0,r.kt)("li",{parentName:"ul"},"Optionally, you can also add pre-release version information by adding a hyphen and series of dot separated identifiers after the patch version. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"1.2.3-rc.2"))),(0,r.kt)("p",null,"Versions with pre-release indicators (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"4.8.0-rc.2"),") are considered ",(0,r.kt)("em",{parentName:"p"},"less than")," versions without (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"4.8.0"),") in accordance with ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/#spec-item-11"},"the SemVer specification, item 11"),"."),(0,r.kt)("p",null,"You can read more about SemVer in ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"the full SemVer specification"),"."),(0,r.kt)("p",null,"SemVer operators only support single values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"th"},"<context-field>")," is ..."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SEMVER_EQ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"equal")," to the provided value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SEMVER_GT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"strictly greater than")," the provided value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SEMVER_LT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"strictly less than")," the provided value")))),(0,r.kt)("p",null,"Additionally, you can use negation to get ",(0,r.kt)("em",{parentName:"p"},"less than or equal to")," and ",(0,r.kt)("em",{parentName:"p"},"greater than or equal to")," functionality:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Effect"),(0,r.kt)("th",{parentName:"tr",align:null},"How"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"th"},"<context-field>")," is ..."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greater than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},"Negate ",(0,r.kt)("inlineCode",{parentName:"td"},"SEMVER_LT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"greater than or equal to")," the provided value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},"Negate ",(0,r.kt)("inlineCode",{parentName:"td"},"SEMVER_GT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"less than or equal to")," the provided value")))),(0,r.kt)("p",null,'"Not less than 2.0.0" ',(0,r.kt)("em",{parentName:"p"},"is the same as"),' "greater than or equal to 2.0.0". The same applies for ',(0,r.kt)("em",{parentName:"p"},"less than or equal"),': "Not greater than 1.9.5." ',(0,r.kt)("em",{parentName:"p"},"is the same as"),' "less than or equal to 1.9.5".'),(0,r.kt)("h2",{id:"sdks"},"Interacting with strategy constraints in the client SDKs"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This section gives a brief overview over to use the client SDKs to interact with strategy constraints. The exact steps will vary depending on which client you are using, so make sure to consult the documentation for your specific client SDK.")),(0,r.kt)("p",null,"Strategy constraints require ",(0,r.kt)("a",{parentName:"p",href:"../reference/unleash-context"},"the Unleash Context")," to work. All official ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/"},"Unleash client SDKs")," support the option to pass ",(0,r.kt)("a",{parentName:"p",href:"../reference/unleash-context#structure",title:"Unleash Context, section: structure"},"dynamic context values")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," function (or the SDK's equivalent)."),(0,r.kt)("p",null,"If the strategy constraint uses a ",(0,r.kt)("a",{parentName:"p",href:"../reference/unleash-context#structure"},(0,r.kt)("strong",{parentName:"a"},"standard Unleash Context field")),", set the context field to the value you wish to give it."),(0,r.kt)("p",null,"If the strategy constraint uses a ",(0,r.kt)("a",{parentName:"p",href:"../reference/unleash-context#custom-context-fields"},(0,r.kt)("strong",{parentName:"a"},"custom context field")),", use the Unleash Context's ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," field. Use the name of the custom context field as a key and set the value to your desired string."),(0,r.kt)("p",null,"If you set a context field to a value that the SDKs cannot parse correctly for a chosen constraint operator, the strategy constraint will evaluate to false.\nIn other words: if you have a strategy constraint operator that expects a number, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"NUM_GT"),", but you set the corresponding context field to a string value, then the expression will be false: ",(0,r.kt)("inlineCode",{parentName:"p"},'"some string"')," is ",(0,r.kt)("strong",{parentName:"p"},"not")," greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),".\nThis value can still be negated as explained in ",(0,r.kt)("a",{parentName:"p",href:"#constraint-negation"},"the section on negating values"),"."),(0,r.kt)("h2",{id:"limitations"},'Constraint limitations (or "how many user IDs can I add to a constraint")'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Explored the content in this subsection in more depth in ",(0,r.kt)("a",{parentName:"p",href:"/topics/managing-constraints"},"the topic guide on using Unleash with large constraints"),".")),(0,r.kt)("p",null,"When using a constraint operator that accepts a list of values, it might be tempting to add a large number of values to that list. However, we advise you ",(0,r.kt)("strong",{parentName:"p"},"not")," to do that: Unleash is not a database, and is not intended to store large amounts of data. Instead you should try and find a different way to achieve what you want."),(0,r.kt)("p",null,"For instance, instead of adding hundreds of user ids to the constraint value list, think about what properties those users share. Are they beta testers? Are they premium members? Are they employees?"),(0,r.kt)("p",null,"Can you map their common feature into an ",(0,r.kt)("a",{parentName:"p",href:"../reference/unleash-context"},"Unleash context")," property instead and set the constraint on that? If they're beta testers, how about using a ",(0,r.kt)("inlineCode",{parentName:"p"},"betaTester")," property? And likewise, for premium members, you could check to see if their ",(0,r.kt)("inlineCode",{parentName:"p"},"membership")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"premium"),"? And if they're employees, maybe you're better off checking whether their user ID ends with ",(0,r.kt)("inlineCode",{parentName:"p"},"@yourcompany.tld"),"?"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"reason")," why you should try and keep value lists small has to do with Unleash's evaluation model: Because Unleash's server-side SDKs fetch the full feature toggle configuration from Unleash, every value that you add to that constraint value list will increase the payload size. For small numbers, this isn't an issue, but as the list grows, so will the payload, and so will the time and processing power used by the SDK to evaluate the feature."),(0,r.kt)("h2",{id:"incompatibilities"},"Incompatibilities and undefined behavior"),(0,r.kt)("p",null,"It's important that you use an up-to-date client SDK if you're using the advanced constraint operators introduced in Unleash 4.9. If your client SDK does not support the new operators, we cannot guarantee how it'll react. As a result, you may see different behavior across applications."),(0,r.kt)("p",null,"If you use the new constraints with old SDKs, here's how it'll affect ",(0,r.kt)("em",{parentName:"p"},"some")," of the SDKs (the list is not exhaustive):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Node.js and Go client SDKs will ignore the new constraints completely: the constraints will not affect the toggle's status."),(0,r.kt)("li",{parentName:"ul"},"The Python client SDK will evaluate the toggle to false, as it cannot evaluate the constraint successfully."),(0,r.kt)("li",{parentName:"ul"},"The .NET, Ruby, and PHP SDKs raise exceptions if the provided operator is not ",(0,r.kt)("inlineCode",{parentName:"li"},"IN")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"NOT_IN"),".")),(0,r.kt)("p",null,"Please inspect the ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/#strategy-constraints"},"SDK compatibility table to see which version of your preferred SDK introduced support for this feature"),"."),(0,r.kt)("p",null,"After Unleash 4.9, we updated the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/client-specification"},"Unleash client specification"),". Going forward, any constraint that a client does not recognize, ",(0,r.kt)("strong",{parentName:"p"},"must be evaluated as ",(0,r.kt)("inlineCode",{parentName:"strong"},"false"))),(0,r.kt)("h2",{id:"constrain-on-a-specific-environment"},"[Deprecated]",": Constrain on a specific environment"),(0,r.kt)("p",null,"Before Unleash 4.3, using strategy constraints was the recommended way to have different toggle configurations per environment. Now that Unleash has environment support built in, we no longer recommend you use strategy constraints for this. Instead, see the ",(0,r.kt)("a",{parentName:"p",href:"/reference/environments"},"environments documentation"),"."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("inlineCode",{parentName:"li"},"userScore")," is not a default Unleash field, but can be added as a ",(0,r.kt)("a",{parentName:"li",href:"../reference/unleash-context#custom-context-fields"},"custom context field"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},68931:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/strategy-constraints-7d0a96c1341a1492e3fdd701ec9bf2bb.png"}}]);