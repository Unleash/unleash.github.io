"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3977],{29541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=n(87462),l=(n(67294),n(3905));const o={title:"PHP SDK"},s=void 0,i={unversionedId:"reference/sdks/php",id:"reference/sdks/php",title:"PHP SDK",description:"In this guide we explain how to use feature toggles in a PHP application using Unleash-hosted. We will be using the open source Unleash PHP Client SDK.",source:"@site/docs/reference/sdks/php.md",sourceDirName:"reference/sdks",slug:"/reference/sdks/php",permalink:"/reference/sdks/php",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/sdks/php.md",tags:[],version:"current",frontMatter:{title:"PHP SDK"},sidebar:"documentation",previous:{title:"Node SDK",permalink:"/reference/sdks/node"},next:{title:"Python SDK",permalink:"/reference/sdks/python"}},r={},h=[{value:"Step 1: Install the client SDK",id:"step-1-install-the-client-sdk",level:2},{value:"Step 2: Create a new Unleash Instance",id:"step-2-create-a-new-unleash-instance",level:2},{value:"Step 3: Use the feature toggle",id:"step-3-use-the-feature-toggle",level:2},{value:"Step 4: Provide Unleash Context",id:"step-4-provide-unleash-context",level:2}],p={toc:h};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this guide we explain how to use feature toggles in a PHP application using Unleash-hosted. We will be using the open source Unleash ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-php"},"PHP Client SDK"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You will need your ",(0,l.kt)("inlineCode",{parentName:"p"},"API URL")," and your ",(0,l.kt)("inlineCode",{parentName:"p"},"API token")," in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. ",(0,l.kt)("a",{parentName:"p",href:"../../how-to/how-to-create-api-tokens"},"Read more"))),(0,l.kt)("h2",{id:"step-1-install-the-client-sdk"},"Step 1: Install the client SDK"),(0,l.kt)("p",null,"First we must add Unleash Client SDK as a dependency to your project. Below is an example of how to install it via composer:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"composer require unleash/client guzzlehttp/guzzle symfony/cache\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: You can install any other PSR-16, PSR-17 and PSR-18 implementations instead of guzzlehttp/guzzle and symfony/cache")),(0,l.kt)("h2",{id:"step-2-create-a-new-unleash-instance"},"Step 2: Create a new Unleash Instance"),(0,l.kt)("p",null,"Next we must initialize a new instance of the Unleash Client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Unleash\\Client\\UnleashBuilder;\n\n$unleash = UnleashBuilder::create()\n    ->withAppName('my.php-app')\n    ->withInstanceId('your-instance-1')\n    ->withAppUrl('API URL')\n    ->withHeader('Authorization', 'API token')\n    ->build();\n")),(0,l.kt)("p",null,"In your app you typically just want one instance of Unleash, and inject that where you need it. You will typically use a dependency injection frameworks to manage this."),(0,l.kt)("p",null,"You should change the URL and the Authorization header (API token) with the correct values for your instance, which you may locate under \u201cInstance admin\u201d in the menu."),(0,l.kt)("h2",{id:"step-3-use-the-feature-toggle"},"Step 3: Use the feature toggle"),(0,l.kt)("p",null,"Now that we have initialized the client SDK we can start using feature toggles defined in Unleash in our application. To achieve this we have the \u201cisEnabled\u201d method available, which will allow us to check the value of a feature toggle. This method will return ",(0,l.kt)("strong",{parentName:"p"},"true")," or ",(0,l.kt)("strong",{parentName:"p"},"false")," based on whether the feature should be enabled or disabled for the current request."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n\nif ($unleash->isEnabled("AwesomeFeature")) {\n  //do some magic\n} else {\n  //do old boring stuff\n}\n')),(0,l.kt)("p",null,"Read more about the ",(0,l.kt)("a",{parentName:"p",href:"https://www.unleash-hosted.com/articles/our-unique-architecture"},"Unleash architecture")," to learn how it works in more details"),(0,l.kt)("h2",{id:"step-4-provide-unleash-context"},"Step 4: Provide Unleash Context"),(0,l.kt)("p",null,"It is the client SDK that computes whether a feature toggle should be considered enabled or disabled for specific use request. This is the job of the ",(0,l.kt)("a",{parentName:"p",href:"/reference/activation-strategies"},"activation strategies"),", which are implemented in the client SDK."),(0,l.kt)("p",null,"The activation strategies is an implementation of rules based on data, which you provide as part of the Unleash Context."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"a) As argument to the isEnabled call")),(0,l.kt)("p",null,"The simplest way to provide the Unleash Context is as part of the \u201cisEnabled\u201d call:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Unleash\\Client\\Configuration\\UnleashContext;\n\n$context = new UnleashContext(\n    currentUserId: 'user@mail.com',\n);\n\n$unleash->isEnabled(\"someToggle\", $context);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"b) Via a UnleashContextProvider")),(0,l.kt)("p",null,"This is a bit more advanced approach, where you configure a unleash-context provider. By doing this you do not have to rebuild or to pass the unleash-context object to every place you are calling ",(0,l.kt)("inlineCode",{parentName:"p"},"$unleash->isEnabled()"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Unleash\\Client\\UnleashBuilder;\n\n$contextProvider = new MyAwesomeContextProvider();\n$unleash = UnleashBuilder::create()\n    ->withAppName('my.php-app')\n    ->withInstanceId('your-instance-1')\n    ->withAppUrl('https://unleash.example.com/api/')\n    ->withContextProvider($contextProvider)\n    ->build();\n\n// Anywhere in the code unleash will get the unleash context from your registered provider.\n$unleash->isEnabled(\"someToggle\");\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can read more complete documentation in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-php"},"Client SDK repository"),".")))}u.isMDXComponent=!0}}]);