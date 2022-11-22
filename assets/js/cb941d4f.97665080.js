"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1520],{74124:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),l=n(67294),o=n(86010),s=n(5730),i=n(20636),r=n(76602),u=n(63735);const c="tabList__CuJ",h="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:p,groupId:m,className:v}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,r.U)(),[U,N]=(0,l.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=m){const e=w[m];null!=e&&e!==U&&g.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,n=I.indexOf(t),a=g[n].value;a!==U&&(x(t),N(a),null!=m&&y(m,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;n=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;n=I[t]??I[I.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},v)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:U===t?0:-1,"aria-selected":U===t,key:t,ref:e=>I.push(e),onKeyDown:S,onClick:C},s,{className:(0,o.Z)("tabs__item",h,null==s?void 0:s.className,{"tabs__item--active":U===t})}),n??t)}))),n?(0,l.cloneElement)(f.filter((e=>e.props.value===U))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==U})))))}function p(e){const t=(0,s.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},53408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var a=n(87462),l=(n(67294),n(3905)),o=n(74124),s=n(11666);const i={title:"Java SDK"},r=void 0,u={unversionedId:"reference/sdks/java",id:"reference/sdks/java",title:"Java SDK",description:"In this guide we explain how to use feature toggles in a Java application using Unleash-hosted. We will be using the open source Unleash Java Client SDK.",source:"@site/docs/reference/sdks/java.md",sourceDirName:"reference/sdks",slug:"/reference/sdks/java",permalink:"/reference/sdks/java",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/sdks/java.md",tags:[],version:"current",frontMatter:{title:"Java SDK"},sidebar:"documentation",previous:{title:"GO SDK",permalink:"/reference/sdks/go"},next:{title:"Node SDK",permalink:"/reference/sdks/node"}},c={},h=[{value:"Step 1: Install the client SDK",id:"step-1-install-the-client-sdk",level:2},{value:"Step 2: Create a new Unleash Instance",id:"step-2-create-a-new-unleash-instance",level:2},{value:"Step 3: Use the feature toggle",id:"step-3-use-the-feature-toggle",level:2},{value:"Step 4: Provide Unleash Context",id:"step-4-provide-unleash-context",level:2}],d={toc:h};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this guide we explain how to use feature toggles in a Java application using Unleash-hosted. We will be using the open source Unleash ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-java"},"Java Client SDK"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You will need your ",(0,l.kt)("inlineCode",{parentName:"p"},"API URL")," and your ",(0,l.kt)("inlineCode",{parentName:"p"},"API token")," in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. ",(0,l.kt)("a",{parentName:"p",href:"../../how-to/how-to-create-api-tokens"},"Read more"))),(0,l.kt)("h2",{id:"step-1-install-the-client-sdk"},"Step 1: Install the client SDK"),(0,l.kt)("p",null,"First we must add Unleash Client SDK as a dependency to your project. Below is an example of how you would add it to your pom.xml in Java:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.getunleash</groupId>\n    <artifactId>unleash-client-java</artifactId>\n    <version>Latest version here</version>\n</dependency>\n")),(0,l.kt)("h2",{id:"step-2-create-a-new-unleash-instance"},"Step 2: Create a new Unleash Instance"),(0,l.kt)("p",null,"Next we must initialize a new instance of the Unleash Client."),(0,l.kt)("admonition",{title:"Synchronous initialization",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The client SDK will synchronize with the Unleash API on initialization, so it can take a few hundred milliseconds for the client to reach the correct state. You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"synchronousFetchOnInitialisation")," option to block the client until it has successfully synced with the server.")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"async",label:"Asynchronous initialization",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'UnleashConfig config = UnleashConfig.builder()\n        .appName("my.java-app")\n        .instanceId("your-instance-1")\n        .environment(System.getenv("APP_ENV"))\n        .unleashAPI("API URL")\n        .customHttpHeader("Authorization", "API token")\n        .build();\n\nUnleash unleash = new DefaultUnleash(config);\n'))),(0,l.kt)(s.Z,{value:"sync",label:"Synchronous initializiation",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'UnleashConfig config = UnleashConfig.builder()\n        .appName("my.java-app")\n        .instanceId("your-instance-1")\n        .environment(System.getenv("APP_ENV"))\n        .unleashAPI("API URL")\n        .customHttpHeader("Authorization", "API token")\n        .synchronousFetchOnInitialization(true)\n        .build();\n\nUnleash unleash = new DefaultUnleash(config);\n')))),(0,l.kt)("p",null,"In your app you typically just want one instance of Unleash, and inject that where you need it. You will typically use a dependency injection frameworks such as Spring or Guice to manage this."),(0,l.kt)("p",null,"You should change the URL and the Authorization header (API token) with the correct values for your instance, which you may locate under \u201cInstance admin\u201d in the menu."),(0,l.kt)("h2",{id:"step-3-use-the-feature-toggle"},"Step 3: Use the feature toggle"),(0,l.kt)("p",null,"Now that we have initialized the client SDK we can start using feature toggles defined in Unleash in our application. To achieve this we have the \u201cisEnabled\u201d method available, which will allow us to check the value of a feature toggle. This method will return ",(0,l.kt)("strong",{parentName:"p"},"true")," or ",(0,l.kt)("strong",{parentName:"p"},"false")," based on whether the feature should be enabled or disabled for the current request."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'if(unleash.isEnabled("AwesomeFeature")) {\n  //do some magic\n} else {\n  //do old boring stuff\n}\n')),(0,l.kt)("p",null,"Read more about the ",(0,l.kt)("a",{parentName:"p",href:"https://www.unleash-hosted.com/articles/our-unique-architecture"},"Unleash architecture")," to learn how it works in more details"),(0,l.kt)("h2",{id:"step-4-provide-unleash-context"},"Step 4: Provide Unleash Context"),(0,l.kt)("p",null,"It is the client SDK that computes whether a feature toggle should be considered enabled or disabled for specific use request. This is the job of the ",(0,l.kt)("a",{parentName:"p",href:"/reference/activation-strategies"},"activation strategies"),", which are implemented in the client SDK."),(0,l.kt)("p",null,"The activation strategies is an implementation of rules based on data, which you provide as part of the Unleash Context."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"a) As argument to the isEnabled call")),(0,l.kt)("p",null,"The simplest way to provide the Unleash Context is as part of the \u201cisEnabled\u201d call:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'UnleashContext context = UnleashContext.builder()\n  .userId("user@mail.com").build();\n\nunleash.isEnabled("someToggle", context);\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"b) Via a UnleashContextProvider")),(0,l.kt)("p",null,"This is a bit more advanced approach, where you configure a unleash-context provider. By doing this you do not have to rebuild or to pass the unleash-context object to every place you are calling ",(0,l.kt)("inlineCode",{parentName:"p"},"unleash.isEnabled"),"."),(0,l.kt)("p",null,"The provider typically binds the context to the same thread as the request. If you are using Spring the UnleashContextProvider will typically be a \u2018request scoped\u2019 bean."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'UnleashContextProvider contextProvider = new MyAwesomeContextProvider();\nUnleashConfig config = new UnleashConfig.Builder()\n            .appName("java-test")\n            .instanceId("instance x")\n            .unleashAPI("https://unleash.example.com/api/")\n            .unleashContextProvider(contextProvider)\n            .build();\n\nUnleash unleash = new DefaultUnleash(config);\n\n// Anywhere in the code unleash will get the unleash context from your registered provider.\nunleash.isEnabled("someToggle");\n')))}p.isMDXComponent=!0}}]);