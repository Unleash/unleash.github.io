"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3905],{99878:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),o=n(86010),i=n(18015),r=n(11614);const s="admonition_LlT9",l="admonitionHeading_tbUL",u="admonitionIcon_kALy",m="admonitionContent_S0QG";var h=n(25108);const c={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function p(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function g(e){const{children:t,type:n,title:r,icon:g}=p(e),f=function(e){const t=d[e]??e;return c[t]||(h.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),c.info)}(n),y=r??f.label,{iconComponent:w}=f,v=g??a.createElement(w,null);return a.createElement("div",{className:(0,o.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert",`alert--${f.infimaClassName}`,s)},a.createElement("div",{className:l},a.createElement("span",{className:u},v),y),a.createElement("div",{className:m},t))}},640:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(99878);const i=e=>{let{videoUrls:t}=e;return a.createElement("article",{className:"unleash-video-container"},t?t.map((e=>a.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0}))):a.createElement(o.Z,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly."))}},31939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),i=n(640);const r={title:"A/B and multivariate testing"},s=void 0,l={unversionedId:"topics/a-b-testing",id:"topics/a-b-testing",title:"A/B and multivariate testing",description:"A/B testing is a type of randomized controlled experiment, where you test two different versions of a feature to see which version performs better. If you have more than two versions, it's known as multivariate testing. Coupled with analytics, A/B and multivariate testing enables you to better understand your users and how you can serve them better.",source:"@site/docs/topics/a-b-testing.md",sourceDirName:"topics",slug:"/topics/a-b-testing",permalink:"/topics/a-b-testing",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/topics/a-b-testing.md",tags:[],version:"current",frontMatter:{title:"A/B and multivariate testing"},sidebar:"documentation",previous:{title:"The Anatomy of Unleash",permalink:"/topics/the-anatomy-of-unleash"},next:{title:"Best Practices for Migrating from a Homegrown Feature Management Solution",permalink:"/topics/feature-flag-migration/feature-flag-migration-best-practices"}},u={},m=[{value:"What is A/B testing",id:"what-is-ab-testing",level:2},{value:"How to do A/B testing",id:"how-to-do-ab-testing",level:2},{value:"Potential pitfalls",id:"potential-pitfalls",level:3},{value:"A/B testing with Unleash",id:"ab-testing-with-unleash",level:2},{value:"Impression data",id:"impression-data",level:3},{value:"Summary",id:"summary",level:2}],h={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A/B testing is a type of randomized controlled experiment, where you test two different versions of a feature to see which version performs better. If you have more than two versions, it's known as ",(0,o.kt)("em",{parentName:"p"},"multivariate testing"),". Coupled with analytics, A/B and multivariate testing enables you to better understand your users and how you can serve them better."),(0,o.kt)("p",null,"To facilitate A/B testing and experimentation, Unleash has a built-in 'experiment' ",(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggle-types#feature-toggle-types"},"toggle type")," and lets you give toggles any number of ",(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggle-variants"},"variants"),". To see a concrete example of configuring multivariate testing with unleash, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.getunleash.io/blog/a-b-n-experiments-in-3-simple-steps"},"our blog post on A/B testing with Unleash and Google Analytics"),"."),(0,o.kt)("p",null,"In the rest of this document, ",(0,o.kt)("em",{parentName:"p"},"A/B testing")," will refer to both strict A/B testing and multivariate testing unless otherwise specified."),(0,o.kt)(i.Z,{videoUrls:["https://www.youtube.com/embed/bxYdeMb9ffw?si=XSnKk74HbZg3puXO"],mdxType:"VideoContent"}),(0,o.kt)("h2",{id:"what-is-ab-testing"},"What is A/B testing"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/A/B_testing"},"According to Wikipedia"),", A/B testing is a user experience research methodology. They're useful for understanding user engagement and satisfaction."),(0,o.kt)("p",null,"You've probably encountered a great number of A/B tests yourself, whether you've been aware of it or not.\nLarge social media sites often use A/B testing to make their user experiences more streamlined and successful, so you're almost guaranteed to have seen one if you use any of them. News websites often try different headlines for the same story to see which performs better; they'll often demo multiple headlines at once and then settle for the one that gets the most engagement. E-commerce websites use them in their purchase funnel to see how it impacts user drop-off. It's everywhere and, more importantly, it works."),(0,o.kt)("p",null,"In a nutshell: if you're attempting to grow your customer base or improve your user experience, you will always benefit from running experiments, and A/B testing is a fantastic way to get measurable results that point you in the right direction."),(0,o.kt)("p",null,"For some concrete examples of businesses that have used A/B testing to improve their outcomes, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.crazyegg.com/blog/ab-testing-examples/"},"Crazy Egg's case study")," or ",(0,o.kt)("a",{parentName:"p",href:"https://vwo.com/blog/ab-testing-examples/"},"VWO's list of noteworthy examples"),"."),(0,o.kt)("h2",{id:"how-to-do-ab-testing"},"How to do A/B testing"),(0,o.kt)("p",null,"First off: you'll need a measurable outcome. You'll also have to be able to correlate the data you get with what group the user is in."),(0,o.kt)("p",null,"Say, for instance, that you're run a website where people can use with or without a membership. You're trying to improve the conversion rate and increase the number of members on the site. That gives us a measurable outcome: percentage of new sign-ups relative to the total number of users in the group. To correlate the data, you'll probably want to use a front-end analytics tool to track the number of users and how their interaction with the site."),(0,o.kt)("p",null,"In the above example, the A group serves as the control group. They're not going to see any changes. Group B, the ",(0,o.kt)("em",{parentName:"p"},"treatment group"),", will get a website with a change that you think would impact the number of users who sign up, such as a larger, more prominent sign up button."),(0,o.kt)("p",null,"How long the experiment should run for depends on your use case, but you should get enough data to see if there's a clear trend. If more users in the treatment group sign up for a membership, you'll know that the changes had the intended effect. If there is no change (or a negative effect), then you'll know that they didn't work."),(0,o.kt)("p",null,"The simplest A/B experiments use a control group and a single treatment group, but that may not be the way forward in all situations. If you're launching a new feature, for instance, you won't have a control group that receives 'no change'. In that case, the question is the same (does A or B perform better), but you don't have a control group. Additionally, you might want to try out multiple variations \u2014 with or without a control group. The principles remain the same however: find a measurable goal, and see which variant performs better."),(0,o.kt)("h3",{id:"potential-pitfalls"},"Potential pitfalls"),(0,o.kt)("p",null,"A thing to keep in mind when running experiments like this or in other cases where you're optimizing for a single metric is whether this is damaging to certain other metrics. Do more sign-ups also lead to more people (relatively) cancelling their membership? Does it decrease engagement with other parts of your product?"),(0,o.kt)("p",null,"Don't do yourself a disservice by chasing one metric above all else. Keep an eye on other metrics at the same time and see if they are affected \u2014 always maintain a holistic view of things."),(0,o.kt)("h2",{id:"ab-testing-with-unleash"},"A/B testing with Unleash"),(0,o.kt)("p",null,"Feature toggles are a great way to run A/B tests and to decouple them from your code, and Unleash ships with features to make it easy to get started with."),(0,o.kt)("p",null,"Toggles can be used for different purposes and we consider experimentation important enough to have given it its own ",(0,o.kt)("a",{parentName:"p",href:"/reference/feature-toggle-types#feature-toggle-types"},"toggle type"),". Experiment toggles have a lifetime expectancy suited to let you run an experiment and gather enough data to know whether it was a success or not."),(0,o.kt)("p",null,"If you're running a basic A/B test where the control group doesn't see any change, then a basic experiment toggle will do the job excellently. With a ",(0,o.kt)("a",{parentName:"p",href:"../reference/activation-strategies#gradual-rollout"},"gradual rollout"),", some appropriate ",(0,o.kt)("a",{parentName:"p",href:"/reference/strategy-constraints"},"strategy constraints"),", and an analytics tool of your choosing, you should be all set to start collecting metrics and measuring."),(0,o.kt)("p",null,"If you want to run a more advanced experiment, then take a look at using ",(0,o.kt)("a",{parentName:"p",href:"../reference/feature-toggle-variants"},"feature toggle variants"),". If you have a control group, and want to test multiple potential improvements, then simply add your desired variants to the toggle as discussed in the previous paragraph. If you want to launch a new feature (or a headline) in multiple variations right out the gate, consider using a basic on/off toggle with variants and activate it for all your users."),(0,o.kt)("h3",{id:"impression-data"},"Impression data"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference/impression-data"},"Impression data")," is an Unleash feature that was released in Unleash 4.7.\nIt allows you to capture events whenever a feature toggle is checked in your applications.\nThe event contains all the information about the toggle and the current context, so you can pass everything onto your third-party analytics provider, such as ",(0,o.kt)("a",{parentName:"p",href:"https://analytics.google.com/analytics"},"Google Analytics")," or ",(0,o.kt)("a",{parentName:"p",href:"https://posthog.com/"},"Posthog"),".\nThis makes Unleash even more useful as an A/B testing tool and makes it much easier to correlate events and variants with feature toggles and Unleash context."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"A/B testing allows you to run experiments on your users and improve your product by using real, proven metrics. It's used by some of the world's most popular businesses and can help you get ahead of competitors (and stay on top). We at Unleash want to help you, so we've baked in some tools to let you do A/B testing right out the gate to make it as smooth as possible to get started."),(0,o.kt)("p",null,"So what are you waiting for? Find out what you want to improve next and get testing!"))}c.isMDXComponent=!0}}]);