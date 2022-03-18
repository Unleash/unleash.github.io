"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1395],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(r),p=a,d=f["".concat(i,".").concat(p)]||f[p]||g[p]||n;return r?o.createElement(d,l(l({ref:t},c),{},{components:r})):o.createElement(d,l({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<n;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6840:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var o=r(7462),a=r(3366),n=(r(7294),r(3905)),l=["components"],u={id:"create_feature_toggle",title:"How to create a feature toggle"},i=void 0,s={unversionedId:"user_guide/create_feature_toggle",id:"user_guide/create_feature_toggle",title:"How to create a feature toggle",description:"In this guide you will learn how to create your first feature toggle using Unleash.",source:"@site/docs/user_guide/create-feature-toggle.md",sourceDirName:"user_guide",slug:"/user_guide/create_feature_toggle",permalink:"/user_guide/create_feature_toggle",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/user_guide/create-feature-toggle.md",tags:[],version:"current",frontMatter:{id:"create_feature_toggle",title:"How to create a feature toggle"},sidebar:"documentation",previous:{title:"How to capture impression data",permalink:"/how-to/how-to-capture-impression-data"},next:{title:"How to define custom context fields",permalink:"/how-to/how-to-define-custom-context-fields"}},c=[{value:"Step 1: Click the \u201ccreate feature toggle\u201d button",id:"step-1-click-the-create-feature-toggle-button",children:[],level:2},{value:"Step 2: Create Feature toggle",id:"step-2-create-feature-toggle",children:[],level:2},{value:"Step 3: Congratulations, you have now created your first feature toggle!",id:"step-3-congratulations-you-have-now-created-your-first-feature-toggle",children:[],level:2},{value:"Step 4: Enable the feature toggle only for your boss!",id:"step-4-enable-the-feature-toggle-only-for-your-boss",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],g={toc:c};function f(e){var t=e.components,u=(0,a.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this guide you will learn how to create your first feature toggle using Unleash."),(0,n.kt)("h2",{id:"step-1-click-the-create-feature-toggle-button"},"Step 1: Click the \u201ccreate feature toggle\u201d button"),(0,n.kt)("p",null,"The first time you log-in to your Unleash instance you will see an empty list of feature toggles. In order to create a new feature toggle you have to click the \u201ccreate feature toggle\u201d button"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a feature toggle",src:r(1374).Z,width:"2878",height:"1574"})),(0,n.kt)("h2",{id:"step-2-create-feature-toggle"},"Step 2: Create Feature toggle"),(0,n.kt)("p",null,"After clicking the \u201ccreate feature toggle\u201d button you will be presented with a form for creating a new feature toggle. You will need to define a few fields before you can actually complete the new feature toggle."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name")," \u2013 Must be unique across all your feature toggle. The name must also follow a URL friendly format. Can not be changed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description")," \u2013 A good description makes it easier for other members on your team to understand why this feature toggle exists."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Enabled")," \u2013 Whether the feature toggle should be enabled or disabled. If the feature toggle is disabled, activation strategy configurations will not be evaluated."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Activation")," strategies \u2013 A list of one or more activation strategies. An activation strategy is used to enable the feature toggle to a subset, or all, of your users.")),(0,n.kt)("p",null,"In the example below we have chosen to not set up a strategy, which means that the standard strategy will be applied."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a feature toggle",src:r(3944).Z,width:"2880",height:"1572"})),(0,n.kt)("h2",{id:"step-3-congratulations-you-have-now-created-your-first-feature-toggle"},"Step 3: Congratulations, you have now created your first feature toggle!"),(0,n.kt)("p",null,"The toggle is now created and ready to be used. The toggle does not have any metrics because it is not used by any applications, yet!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a feature toggle",src:r(8754).Z,width:"2880",height:"1570"})),(0,n.kt)("h2",{id:"step-4-enable-the-feature-toggle-only-for-your-boss"},"Step 4: Enable the feature toggle only for your boss!"),(0,n.kt)("p",null,"The next step is to change the activation strategy to only target your boss. You can use the \u201cuserIDs\u201d-strategy for that. Using the configuration shown below will only enable the feature toggle for \u201c",(0,n.kt)("a",{parentName:"p",href:"mailto:boss@company.com"},"boss@company.com"),"\u201d and \u201c",(0,n.kt)("a",{parentName:"p",href:"mailto:me@company.com"},"me@company.com"),"\u201d. Thus, you can safely test your feature in production, without exposing it to your users."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a feature toggle",src:r(7355).Z,width:"2880",height:"1573"})),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"In this guide you created your first feature toggle and enabled it for everyone. In later guides we will learn how we can reduce the risk by enabling the toggle for a controlled set of users first."))}f.isMDXComponent=!0},1374:function(e,t,r){t.Z=r.p+"assets/images/create_feature_toggle_button-ea24f6d9473be192e3dddf4256f1465a.png"},8754:function(e,t,r){t.Z=r.p+"assets/images/create_feature_toggle_list-efa9884439c391621194dae001bb2388.png"},3944:function(e,t,r){t.Z=r.p+"assets/images/create_feature_toggle_save-56a2663b3dddb89f7858db6ba339cfa7.png"},7355:function(e,t,r){t.Z=r.p+"assets/images/create_feature_toggle_userIds-2f686bbfa13d22c7af775cdf07e7251f.png"}}]);