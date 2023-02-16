"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1932],{5783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={title:"Python",slug:"/reference/sdks/python"},s=void 0,o={unversionedId:"generated/sdks/server-side/python",id:"generated/sdks/server-side/python",title:"Python",description:"This document was generated from the README in the Python GitHub repository.",source:"@site/docs/generated/sdks/server-side/python.md",sourceDirName:"generated/sdks/server-side",slug:"/reference/sdks/python",permalink:"/reference/sdks/python",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/generated/sdks/server-side/python.md",tags:[],version:"current",frontMatter:{title:"Python",slug:"/reference/sdks/python"},sidebar:"documentation",previous:{title:"PHP",permalink:"/reference/sdks/php"},next:{title:"Ruby",permalink:"/reference/sdks/ruby"}},r={},p=[{value:"Installation",id:"installation",level:2},{value:"For Flask Users",id:"for-flask-users",level:2},{value:"Usage",id:"usage",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Checking if a feature is enabled",id:"checking-if-a-feature-is-enabled",level:3},{value:"Fallback function and default values",id:"fallback-function-and-default-values",level:4},{value:"Getting a variant",id:"getting-a-variant",level:3}],h={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Generated content",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This document was generated from the README in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-python"},"Python GitHub repository"),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To connect to Unleash, you'll need your Unleash API url (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"https://<your-unleash>/api"),") and a ",(0,l.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#client-tokens"},"server-side API token")," (",(0,l.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"how do I create an API token?"),").")),(0,l.kt)("h1",{id:"unleash-client-python"},"unleash-client-python"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/unleash/unleash-client-python/workflows/CI/badge.svg?branch=main",alt:null})," ",(0,l.kt)("a",{parentName:"p",href:"https://coveralls.io/github/Unleash/unleash-client-python?branch=main"},(0,l.kt)("img",{parentName:"a",src:"https://coveralls.io/repos/github/Unleash/unleash-client-python/badge.svg?branch=main",alt:"Coverage Status"}))," ",(0,l.kt)("a",{parentName:"p",href:"https://badge.fury.io/py/UnleashClient"},(0,l.kt)("img",{parentName:"a",src:"https://badge.fury.io/py/UnleashClient.svg",alt:"PyPI version"}))," ",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/UnleashClient.svg",alt:"PyPI - Python Version"})," ",(0,l.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-MIT-yellow.svg",alt:"License: MIT"}))),(0,l.kt)("p",null,"This is the Python client for ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/unleash/unleash"},"Unleash"),".  It implements ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/blob/main/docs/client-specification.md"},"Client Specifications 1.0")," and checks compliance based on spec in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/client-specification"},"unleash/client-specifications")),(0,l.kt)("p",null,"What it supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default activation strategies using 32-bit ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/MurmurHash"},"Murmurhash3")),(0,l.kt)("li",{parentName:"ul"},"Custom strategies"),(0,l.kt)("li",{parentName:"ul"},"Full client lifecycle:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Client registers with Unleash server"),(0,l.kt)("li",{parentName:"ul"},"Client periodically fetches feature toggles and stores to on-disk cache"),(0,l.kt)("li",{parentName:"ul"},"Client periodically sends metrics to Unleash Server"))),(0,l.kt)("li",{parentName:"ul"},"Tested on Linux (Ubuntu), OSX, and Windows")),(0,l.kt)("p",null,"Check out the ",(0,l.kt)("a",{parentName:"p",href:"https://unleash.github.io/unleash-client-python/"},"project documentation")," and the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/unleash-client-python/changelog.html"},"changelog"),"."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Check out the package on ",(0,l.kt)("a",{parentName:"p",href:"https://pypi.org/project/UnleashClient/"},"Pypi"),"!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install UnleashClient\n")),(0,l.kt)("h2",{id:"for-flask-users"},"For Flask Users"),(0,l.kt)("p",null,"If you're looking into running Unleash from Flask, you might want to take a look at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/Flask-Unleash"},(0,l.kt)("em",{parentName:"a"},"Flask-Unleash"),", the Unleash Flask extension"),". The extension builds upon this SDK to reduce the amount of boilerplate code you need to write to integrate with Flask. Of course, if you'd rather use this package directly, that will work too."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"initialization"},"Initialization"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from UnleashClient import UnleashClient\n\nclient = UnleashClient(\n    url=\"https://unleash.herokuapp.com\",\n    app_name=\"my-python-app\",\n    custom_headers={'Authorization': '<API token>'})\n\nclient.initialize_client()\n")),(0,l.kt)("p",null,"For more information about configuring ",(0,l.kt)("inlineCode",{parentName:"p"},"UnleashClient"),", check out the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/unleash-client-python/unleashclient.html"},"project reference docs"),"!"),(0,l.kt)("h3",{id:"checking-if-a-feature-is-enabled"},"Checking if a feature is enabled"),(0,l.kt)("p",null,"A check of a simple toggle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'client.is_enabled("my_toggle")\n')),(0,l.kt)("p",null,"To supply application context, use the second positional argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'app_context = {"userId": "test@email.com"}\nclient.is_enabled("user_id_toggle", app_context)\n')),(0,l.kt)("h4",{id:"fallback-function-and-default-values"},"Fallback function and default values"),(0,l.kt)("p",null,"You can specify a fallback function for cases where the client doesn't recognize the toggle by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"fallback_function")," keyword argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def custom_fallback(feature_name: str, context: dict) -> bool:\n    return True\n\nclient.is_enabled("my_toggle", fallback_function=custom_fallback)\n')),(0,l.kt)("p",null,"You can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"fallback_function")," argument to replace the obsolete ",(0,l.kt)("inlineCode",{parentName:"p"},"default_value")," keyword argument by using a lambda that ignores its inputs. Whatever the lambda returns will be used as the default value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'client.is_enabled("my_toggle", fallback_function=lambda feature_name, context: True)\n')),(0,l.kt)("p",null,"The fallback function ",(0,l.kt)("strong",{parentName:"p"},"must")," accept the feature name and context as positional arguments in that order."),(0,l.kt)("p",null,"The client will evaluate the fallback function only if an exception occurs when calling the ",(0,l.kt)("inlineCode",{parentName:"p"},"is_enabled()")," method. This happens when the client can't find the feature flag. The client ",(0,l.kt)("em",{parentName:"p"},"may")," also throw other, general exceptions."),(0,l.kt)("p",null,"For more information about usage, see the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/unleash-client-python/usage.html"},"Usage documentation"),"."),(0,l.kt)("h3",{id:"getting-a-variant"},"Getting a variant"),(0,l.kt)("p",null,"Checking for a variant:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'context = {\'userId\': \'2\'}  # Context must have userId, sessionId, or remoteAddr.  If none are present, distribution will be random.\n\nvariant = client.get_variant("variant_toggle", context)\n\nprint(variant)\n> {\n>    "name": "variant1",\n>    "payload": {\n>        "type": "string",\n>        "value": "val1"\n>        },\n>    "enabled": True\n> }\n')),(0,l.kt)("p",null,"For more information about variants, see the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/advanced/toggle_variants"},"Variant documentation"),"."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This content was generated on ",(0,l.kt)("time",{dateTime:"2023-02-16T12:37:48.252Z"},"16 February 2023 at 12:37:48 Coordinated Universal Time")))}u.isMDXComponent=!0}}]);