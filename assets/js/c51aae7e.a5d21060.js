"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3905],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,m=c["".concat(l,".").concat(g)]||c[g]||h[g]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5691:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"A/B and multivariate testing"},l=void 0,u={unversionedId:"topics/a-b-testing",id:"topics/a-b-testing",isDocsHomePage:!1,title:"A/B and multivariate testing",description:"A/B testing is a type of randomized controlled experiment, where you test two different versions of a feature to see which version performs better. If you have more than two versions, it's known as multivariate testing. Coupled with analytics, A/B and multivariate testing enables you to better understand your users and how you can serve them better.",source:"@site/docs/topics/a-b-testing.md",sourceDirName:"topics",slug:"/topics/a-b-testing",permalink:"/topics/a-b-testing",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/topics/a-b-testing.md",tags:[],version:"current",frontMatter:{title:"A/B and multivariate testing"},sidebar:"documentation",previous:{title:"SSO - Google (deprecated)",permalink:"/advanced/sso-google"},next:{title:"How to add strategy constraints",permalink:"/how-to/how-to-add-strategy-constraints"}},p=[{value:"What is A/B testing",id:"what-is-ab-testing",children:[],level:2},{value:"How to do A/B testing",id:"how-to-do-ab-testing",children:[{value:"Potential pitfalls",id:"potential-pitfalls",children:[],level:3}],level:2},{value:"A/B testing with Unleash",id:"ab-testing-with-unleash",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],h={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A/B testing is a type of randomized controlled experiment, where you test two different versions of a feature to see which version performs better. If you have more than two versions, it's known as ",(0,r.kt)("em",{parentName:"p"},"multivariate testing"),". Coupled with analytics, A/B and multivariate testing enables you to better understand your users and how you can serve them better."),(0,r.kt)("p",null,"To facilitate A/B testing and experimentation, Unleash has a built-in 'experiment' ",(0,r.kt)("a",{parentName:"p",href:"../advanced/feature_toggle_types#feature-toggle-types"},"toggle type")," and lets you give toggles any number of ",(0,r.kt)("a",{parentName:"p",href:"../advanced/toggle_variants"},"variants"),". To see a concrete example of configuring multivariate testing with unleash, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.getunleash.io/blog/a-b-n-experiments-in-3-simple-steps"},"our blog post on A/B testing with Unleash and Google Analytics"),"."),(0,r.kt)("p",null,"In the rest of this document, ",(0,r.kt)("em",{parentName:"p"},"A/B testing")," will refer to both strict A/B testing and multivariate testing unless otherwise specified."),(0,r.kt)("h2",{id:"what-is-ab-testing"},"What is A/B testing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/A/B_testing"},"According to Wikipedia"),", A/B testing is a user experience research methodology. They're useful for understanding user engagement and satisfaction."),(0,r.kt)("p",null,"You've probably encountered a great number of A/B tests yourself, whether you've been aware of it or not.\nLarge social media sites often use A/B testing to make their user experiences more streamlined and successful, so you're almost guaranteed to have seen one if you use any of them. News websites often try different headlines for the same story to see which performs better; they'll often demo multiple headlines at once and then settle for the one that gets the most engagement. E-commerce websites use them in their purchase funnel to see how it impacts user drop-off. It's everywhere and, more importantly, it works."),(0,r.kt)("p",null,"In a nutshell: if you're attempting to grow your customer base or improve your user experience, you will always benefit from running experiments, and A/B testing is a fantastic way to get measurable results that point you in the right direction."),(0,r.kt)("p",null,"For some concrete examples of businesses that have used A/B testing to improve their outcomes, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.crazyegg.com/blog/ab-testing-examples/"},"Crazy Egg's case study")," or ",(0,r.kt)("a",{parentName:"p",href:"https://vwo.com/blog/ab-testing-examples/"},"VWO's list of noteworthy examples"),"."),(0,r.kt)("h2",{id:"how-to-do-ab-testing"},"How to do A/B testing"),(0,r.kt)("p",null,"First off: you'll need a measurable outcome. You'll also have to be able to correlate the data you get with what group the user is in."),(0,r.kt)("p",null,"Say, for instance, that you're run a website where people can use with or without a membership. You're trying to improve the conversion rate and increase the number of members on the site. That gives us a measurable outcome: percentage of new sign-ups relative to the total number of users in the group. To correlate the data, you'll probably want to use a front-end analytics tool to track the number of users and how their interaction with the site."),(0,r.kt)("p",null,"In the above example, the A group serves as the control group. They're not going to see any changes. Group B, the ",(0,r.kt)("em",{parentName:"p"},"treatment group"),", will get a website with a change that you think would impact the number of users who sign up, such as a larger, more prominent sign up button."),(0,r.kt)("p",null,"How long the experiment should run for depends on your use case, but you should get enough data to see if there's a clear trend. If more users in the treatment group sign up for a membership, you'll know that the changes had the intended effect. If there is no change (or a negative effect), then you'll know that they didn't work."),(0,r.kt)("p",null,"The simplest A/B experiments use a control group and a single treatment group, but that may not be the way forward in all situations. If you're launching a new feature, for instance, you won't have a control group that receives 'no change'. In that case, the question is the same (does A or B perform better), but you don't have a control group. Additionally, you might want to try out multiple variations \u2014 with or without a control group. The principles remain the same however: find a measurable goal, and see which variant performs better."),(0,r.kt)("h3",{id:"potential-pitfalls"},"Potential pitfalls"),(0,r.kt)("p",null,"A thing to keep in mind when running experiments like this or in other cases where you're optimizing for a single metric is whether this is damaging to certain other metrics. Do more sign-ups also lead to more people (relatively) cancelling their membership? Does it decrease engagement with other parts of your product?"),(0,r.kt)("p",null,"Don't do yourself a disservice by chasing one metric above all else. Keep an eye on other metrics at the same time and see if they are affected \u2014 always maintain a holistic view of things."),(0,r.kt)("h2",{id:"ab-testing-with-unleash"},"A/B testing with Unleash"),(0,r.kt)("p",null,"Feature toggles are a great way to run A/B tests and to decouple them from your code, and Unleash ships with features to make it easy to get started with."),(0,r.kt)("p",null,"Toggles can be used for different purposes and we consider experimentation important enough to have given it its own ",(0,r.kt)("a",{parentName:"p",href:"../advanced/feature_toggle_types#feature-toggle-types"},"toggle type"),". Experiment toggles have a lifetime expectancy suited to let you run an experiment and gather enough data to know whether it was a success or not."),(0,r.kt)("p",null,"If you're running a basic A/B test where the control group doesn't see any change, then a basic experiment toggle will do the job excellently. With a ",(0,r.kt)("a",{parentName:"p",href:"../user_guide/activation_strategy#gradual-rollout"},"gradual rollout"),", some appropriate ",(0,r.kt)("a",{parentName:"p",href:"../advanced/strategy_constraints"},"strategy constraints"),", and an analytics tool of your choosing, you should be all set to start collecting metrics and measuring."),(0,r.kt)("p",null,"If you want to run a more advanced experiment, then take a look at using ",(0,r.kt)("a",{parentName:"p",href:"../advanced/toggle_variants"},"feature toggle variants"),". If you have a control group, and want to test multiple potential improvements, then simply add your desired variants to the toggle as discussed in the previous paragraph. If you want to launch a new feature (or a headline) in multiple variations right out the gate, consider using a basic on/off toggle with variants and activate it for all your users."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"A/B testing allows you to run experiments on your users and improve your product by using real, proven metrics. It's used by some of the world's most popular businesses and can help you get ahead of competitors (and stay on top). We at Unleash want to help you, so we've baked in some tools to let you do A/B testing right out the gate to make it as smooth as possible to get started."),(0,r.kt)("p",null,"So what are you waiting for? Find out what you want to improve next and get testing!"))}c.isMDXComponent=!0}}]);