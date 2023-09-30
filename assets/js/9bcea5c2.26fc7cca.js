"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4504],{89282:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(67294),i=a(86010),r=a(18015),s=a(11614);const l="admonition_LlT9",o="admonitionHeading_tbUL",h="admonitionIcon_kALy",c="admonitionContent_S0QG";var d=a(25108);const u={note:{infimaClassName:"secondary",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:n.createElement(s.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:n.createElement(s.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:n.createElement(s.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:n.createElement(s.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:n.createElement(s.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function p(e){const{mdxAdmonitionTitle:t,rest:a}=function(e){const t=n.Children.toArray(e),a=t.find((e=>n.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=n.createElement(n.Fragment,null,t.filter((e=>e!==a)));return{mdxAdmonitionTitle:a,rest:i}}(e.children);return{...e,title:e.title??t,children:a}}function v(e){const{children:t,type:a,title:s,icon:v}=p(e),g=function(e){const t=m[e]??e;return u[t]||(d.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),u.info)}(a),f=s??g.label,{iconComponent:y}=g,k=v??n.createElement(y,null);return n.createElement("div",{className:(0,i.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${g.infimaClassName}`,l)},n.createElement("div",{className:o},n.createElement("span",{className:h},k),f),n.createElement("div",{className:c},t))}},640:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),i=a(89282);const r={tip:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16",ariaHidden:"true"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},s=e=>{let{title:t="video content",videoUrls:a,children:s}=e;return n.createElement("article",{className:"unleash-video-container"},n.createElement(i.Z,{icon:r.tip,title:t,type:"note"},s),n.createElement("div",{className:"videos"},a?a.map((e=>n.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0}))):n.createElement(i.Z,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly.")))}},82661:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905)),r=a(640);const s={title:"Strategy Variants"},l=void 0,o={unversionedId:"reference/strategy-variants",id:"reference/strategy-variants",title:"Strategy Variants",description:"Strategy variants were first introduced in Unleash 5.4.",source:"@site/docs/reference/strategy-variants.md",sourceDirName:"reference",slug:"/reference/strategy-variants",permalink:"/reference/strategy-variants",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/strategy-variants.md",tags:[],version:"current",frontMatter:{title:"Strategy Variants"},sidebar:"documentation",previous:{title:"Environments",permalink:"/reference/environments"},next:{title:"Feature Flag Naming Patterns",permalink:"/reference/feature-flag-naming-patterns"}},h={},c=[{value:"What are strategy variants?",id:"what-are-strategy-variants",level:2},{value:"Variant weight",id:"variant-weight",level:3},{value:"Weight types and calculation",id:"weight-types-and-calculation",level:4},{value:"Variant payload",id:"variant-payload",level:3},{value:"Variant stickiness",id:"variant-stickiness",level:3},{value:"Strategy variants vs feature toggle variants",id:"strategy-variants-vs-feature-toggle-variants",level:3},{value:"How do I configure strategy variants",id:"how-do-i-configure-strategy-variants",level:2},{value:"The <code>disabled</code> variant",id:"the-disabled-variant",level:2},{value:"Strategy variants and strategies order",id:"strategy-variants-and-strategies-order",level:2},{value:"Client SDK Support",id:"client-sdk-support",level:2}],d={toc:c};function u(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Availability",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Strategy variants")," were first introduced in Unleash 5.4.  ")),(0,i.kt)(r.Z,{videoUrls:["https://www.youtube.com/embed/M0oyGHtva0o"],mdxType:"VideoContent"},(0,i.kt)("p",null,"In addition to the written reference below, the following video provides for details on Strategy Variants, including setup, migration tips and use cases. \ud83c\udf7f  ")),(0,i.kt)("p",null,"Gradual rollout strategies in Unleash can have ",(0,i.kt)("em",{parentName:"p"},"strategy variants"),". ",(0,i.kt)("em",{parentName:"p"},"Strategy variants")," allow each matching activation strategy to return not just simple enabled/disabled status, but\nalso attach any custom data or even multiple data items. "),(0,i.kt)("h2",{id:"what-are-strategy-variants"},"What are strategy variants?"),(0,i.kt)("p",null,"Whenever you create a feature activation strategy, you can assign it one or more values called ",(0,i.kt)("em",{parentName:"p"},"variants"),".\nThis is commonly done in cases where you want to serve your users additional information related to the matching strategy.\nAlso it's possible to assign multiple variants to one strategy to see which performs better. "),(0,i.kt)("p",null,"A variant has four components that define it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a ",(0,i.kt)("strong",{parentName:"p"},"name"),":"),(0,i.kt)("p",{parentName:"li"},"  This must be unique among the strategy's variants. When working with a feature with variants in a client, you will typically use the variant's name to find out which variant it is.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a ",(0,i.kt)("strong",{parentName:"p"},"weight"),":"),(0,i.kt)("p",{parentName:"li"},"  The weight is the likelihood of any one user getting this specific variant. See the ",(0,i.kt)("a",{parentName:"p",href:"#variant-weight"},"weights section")," for more info.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"an optional ",(0,i.kt)("strong",{parentName:"p"},"payload"),":"),(0,i.kt)("p",{parentName:"li"},"  A variant can also have an associated payload. Use this to deliver more data or context. See the ",(0,i.kt)("a",{parentName:"p",href:"#variant-payload"},"payload section")," for a more details."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A form for adding new strategy variants. It has fields for name, weight, payload.",src:a(24586).Z,title:"Creating a new strategy variant",width:"1596",height:"1498"})),(0,i.kt)("h3",{id:"variant-weight"},"Variant weight"),(0,i.kt)("p",null,"A variant's weight determines how likely it is that a user will receive that variant. It is a numeric value between 0 and 100 (inclusive) with one decimal's worth of precision."),(0,i.kt)("p",null,"When you have multiple variants, the sum of all their weights must add up to exactly 100. Depending on the ",(0,i.kt)("a",{parentName:"p",href:"#weight-types"},"weight type"),", Unleash may automatically determine the weight of the new variant and balance it out with the other variants."),(0,i.kt)("h4",{id:"weight-types-and-calculation"},"Weight types and calculation"),(0,i.kt)("p",null,"There are two kinds of variant weight types: ",(0,i.kt)("em",{parentName:"p"},"variable")," and ",(0,i.kt)("em",{parentName:"p"},"fixed"),". Unleash requires you to always have ",(0,i.kt)("em",{parentName:"p"},"at least")," one variable weight variant."),(0,i.kt)("p",null,"The default weight type is ",(0,i.kt)("em",{parentName:"p"},"variable"),". Variable weight variants will adjust their weight based on the number of other variable weight variants and whatever weight is not used up by fixed weight variants."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Fixed")," weight variants have a set weight which will not change. All fixed weight variants' weights can not add up to more than 100."),(0,i.kt)("p",null,"To calculate what the weight of a variable weight variant is, Unleash first subtracts the sum of fixed weights from 100 and then distributes the remaining weight evenly among the variable weight variants."),(0,i.kt)("p",null,"For instance, if you have three variable weight variants and two fixed weight variants weighted at 25 and 15 respectively, Unleash will:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Subtract the fixed weight from the total available: 100 - 40 = 60"),(0,i.kt)("li",{parentName:"ol"},"Divide the remainder by the number of variable weight variants: 60 / 3 = 20"),(0,i.kt)("li",{parentName:"ol"},"Assign each variable weight variant the same (up to rounding differences) weight: 20%")),(0,i.kt)("p",null,"In the example above, 60 divides cleanly by three. In cases where the remainder doesn't divide evenly among the variable weight variants, Unleash will distribute it as evenly as it can to one decimal's precision. If you have three variable weight variants, they will be weighted at 33.4, 33.3, and 33.3 respectively, so that it adds up to 100.0."),(0,i.kt)("h3",{id:"variant-payload"},"Variant payload"),(0,i.kt)("p",null,"Each variant can have an associated payload. Use this to add more context or data to a payload that you can access on the client, such as a customized message or other information."),(0,i.kt)("p",null,"Unleash currently supports these payload types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JSON"),(0,i.kt)("li",{parentName:"ul"},"CSV"),(0,i.kt)("li",{parentName:"ul"},"String")),(0,i.kt)("h3",{id:"variant-stickiness"},"Variant stickiness"),(0,i.kt)("p",null,"When you have only one variant in a strategy, stickiness does not matter. If you decide to add multiple variants to the strategy, then variant stickiness is derived from the strategy stickiness.\nStrategy stickiness is calculated on the received user and context, as described in ",(0,i.kt)("a",{parentName:"p",href:"/reference/stickiness"},"the stickiness chapter"),". This ensures that the same user will consistently see the same variant. If no context data is provided, the traffic will be spread randomly for each request."),(0,i.kt)("h3",{id:"strategy-variants-vs-feature-toggle-variants"},"Strategy variants vs feature toggle variants"),(0,i.kt)("p",null,"Strategy variants take precedence over the ",(0,i.kt)("a",{parentName:"p",href:"/reference/feature-toggle-variants"},"feature toggle variants"),". If your matching activation strategy doesn't have any variants configured you will fall back to the ",(0,i.kt)("a",{parentName:"p",href:"/reference/feature-toggle-variants"},"feature toggle variants"),".\nSince strategy variants are part of activation strategies they have full access to constraints and segments. Feature variants are much more limited since they only allow simple overrides. "),(0,i.kt)("h2",{id:"how-do-i-configure-strategy-variants"},"How do I configure strategy variants"),(0,i.kt)("p",null,"In the Unleash UI, you can configure variants by navigating to the gradual strategy view, and then choosing the 'Variants' section."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"strategy_variants",src:a(21535).Z,title:"Strategy Variants",width:"1614",height:"1624"})),(0,i.kt)("h2",{id:"the-disabled-variant"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"disabled")," variant"),(0,i.kt)("p",null,"When your matching strategy has no variants or when your toggle has no variants or when a toggle is disabled for a user, Unleash will return variant data that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "disabled",\n  "enabled": false\n}\n')),(0,i.kt)("p",null,"This is a fallback variant that Unleash uses to represent the lack of a variant."),(0,i.kt)("p",null,"Note: The actual representation of the built-in fallback variant in the client SDK will vary slightly, to honor best practices in various languages."),(0,i.kt)("h2",{id:"strategy-variants-and-strategies-order"},"Strategy variants and strategies order"),(0,i.kt)("p",null,"When you add multiple activation strategies, each having its own variants defined, the order of strategies matters. Unleash chooses the first matching strategy.\nIt is common to define your specific activation strategies with explicit constraints and segments first. The specific strategies can be followed by a\nbroad activation strategy with multiple percentage based variants. "),(0,i.kt)("p",null,"In the example below we configure fixed title for the internal users based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," constraint. In the second strategy we split titles between all other users\nbased on the 50%/50% split.\n",(0,i.kt)("img",{alt:"strategy_variants example",src:a(88888).Z,title:"Strategy Variants example",width:"2822",height:"1334"})),(0,i.kt)("h2",{id:"client-sdk-support"},"Client SDK Support"),(0,i.kt)("p",null,"To make use of strategy variants, you need to use a compatible client. Client SDK with variant support:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-client-node"},"unleash-client-node")," (from v4.1.0)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-client-java"},"unleash-client-java")," (from v8.3.0)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-client-go"},"unleash-client-go")," (from v3.8.0)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-client-python"},"unleash-client-python")," (from v5.8.0)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-client-ruby"},"unleash-client-ruby")," (from v4.5.0)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-client-dotnet"},"unleash-client-dotnet")," (from v3.3.0)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-client-php"},"unleash-client-php")," (from v1.13.0)"),(0,i.kt)("li",{parentName:"ul"},"Client SDKs talking to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-proxy"},"unleash-proxy")," (from v0.17.0) "),(0,i.kt)("li",{parentName:"ul"},"Client SDKs talking to Frontend API in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash"},"unleash-server")," (from v5.4.0)"),(0,i.kt)("li",{parentName:"ul"},"Unleash Playground in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash"},"unleash-server")," (from v5.4.0)")),(0,i.kt)("p",null,"If you would like to give feedback on this feature, experience issues or have questions, please feel free to open an issue on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/"},"GitHub"),"."))}u.isMDXComponent=!0},24586:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/strategy-variant-creation-form-f3092b4308c650c3e8bdec3a8d262f0f.png"},88888:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/strategy-variants-example-1f4ca5e646ce664ac0a22db0ce8c4d0d.png"},21535:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/strategy-variants-86889c25e2210d018a2517e9bdd9f336.png"}}]);