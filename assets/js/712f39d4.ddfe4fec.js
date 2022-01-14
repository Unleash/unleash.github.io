"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6351],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7622:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={id:"python_sdk",title:"Python SDK"},u=void 0,c={unversionedId:"sdks/python_sdk",id:"sdks/python_sdk",title:"Python SDK",description:"You will need your API URL and your API token in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. Read more",source:"@site/docs/sdks/python.md",sourceDirName:"sdks",slug:"/sdks/python_sdk",permalink:"/sdks/python_sdk",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/sdks/python.md",tags:[],version:"current",frontMatter:{id:"python_sdk",title:"Python SDK"},sidebar:"documentation",previous:{title:"PHP SDK",permalink:"/sdks/php_sdk"},next:{title:"Ruby SDK",permalink:"/sdks/ruby_sdk"}},p=[{value:"Checking if a feature is enabled",id:"checking-if-a-feature-is-enabled",children:[],level:3},{value:"Getting a variant",id:"getting-a-variant",children:[],level:3}],s={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You will need your ",(0,l.kt)("inlineCode",{parentName:"p"},"API URL")," and your ",(0,l.kt)("inlineCode",{parentName:"p"},"API token")," in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. ",(0,l.kt)("a",{parentName:"p",href:"../user_guide/api-token"},"Read more"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from UnleashClient import UnleashClient\n\n    client = UnleashClient(\n        url="<API url>",\n        app_name="my-python-app",\n        custom_headers={\'Authorization\': \'<API token>\'})\n\n    client.initialize_client()\n\n    client.is_enabled("unleash.beta.variants")\n')),(0,l.kt)("h3",{id:"checking-if-a-feature-is-enabled"},"Checking if a feature is enabled"),(0,l.kt)("p",null,"A check of a simple toggle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Python"},'client.is_enabled("My Toggle")\n')),(0,l.kt)("p",null,"Specifying a default value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Python"},'client.is_enabled("My Toggle", default_value=True)\n')),(0,l.kt)("p",null,"Supplying application context:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Python"},'app_context = {"userId": "test@email.com"}\nclient.is_enabled("User ID Toggle", app_context)\n')),(0,l.kt)("p",null,"Supplying a fallback function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Python"},'def custom_fallback(feature_name: str, context: dict) -> bool:\n    return True\n\nclient.is_enabled("My Toggle", fallback_function=custom_fallback)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Must accept the feature name and context as an argument."),(0,l.kt)("li",{parentName:"ul"},"Client will evaluate the fallback function only if exception occurs when calling the ",(0,l.kt)("inlineCode",{parentName:"li"},"is_enabled()")," method i.e. feature flag not found or other general exception."),(0,l.kt)("li",{parentName:"ul"},"If both a ",(0,l.kt)("inlineCode",{parentName:"li"},"default_value")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"fallback_function")," are supplied, client will define the default value by ",(0,l.kt)("inlineCode",{parentName:"li"},"OR"),"ing the default value and the output of the fallback function.")),(0,l.kt)("h3",{id:"getting-a-variant"},"Getting a variant"),(0,l.kt)("p",null,"Checking for a variant:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'context = {\'userId\': \'2\'}  # Context must have userId, sessionId, or remoteAddr.  If none are present, distribution will be random.\n\nvariant = client.get_variant("MyvariantToggle", context)\n\nprint(variant)\n> {\n>    "name": "variant1",\n>    "payload": {\n>        "type": "string",\n>        "value": "val1"\n>        },\n>    "enabled": True\n> }\n')),(0,l.kt)("p",null,"Read more at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-python"},"github.com/Unleash/unleash-client-python")))}d.isMDXComponent=!0}}]);