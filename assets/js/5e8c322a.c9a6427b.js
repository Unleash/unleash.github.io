"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7597],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7926:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),l=["components"],o={id:"index",title:"API Documentation",slug:"/api"},p=void 0,u={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"API Documentation",description:"Client API",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api",permalink:"/api",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/api/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"API Documentation",slug:"/api"},sidebar:"api",next:{title:"/internal-backstage/prometheus",permalink:"/api/internal/internal"}},c=[{value:"Client API",id:"client-api",children:[],level:2},{value:"Admin API (internal)",id:"admin-api-internal",children:[],level:2},{value:"System API&#39;s",id:"system-apis",children:[{value:"Content-Type",id:"contenttype",children:[],level:3}],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"client-api"},"Client API"),(0,a.kt)("p",null,"This describes the API provided to unleash-clients."),(0,a.kt)("p",null,"Since v4.0.0 all operations require an ",(0,a.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"API token")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"Client")," level access."),(0,a.kt)("p",null,"With versions earlier than v4.0.0 and ",(0,a.kt)("inlineCode",{parentName:"p"},"insecure")," authentication no authentication is required."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/client/features"},"Feature Toggles API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/client/register"},"Register API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/client/metrics"},"Metrics API"))),(0,a.kt)("h2",{id:"admin-api-internal"},"Admin API (internal)"),(0,a.kt)("p",null,"The internal API used by the Admin UI (unleash-frontend). Since v4.0.0 all operations require an ",(0,a.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"API token")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"Admin")," level access:"),(0,a.kt)("p",null,"With versions earlier than v4.0.0 and ",(0,a.kt)("inlineCode",{parentName:"p"},"insecure")," authentication Basic Auth (with curl ",(0,a.kt)("inlineCode",{parentName:"p"},"-u myemail@test.com:"),") is enough."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/admin/features"},"Feature Toggles API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/admin/strategies"},"Strategies API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/admin/events"},"Events API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/admin/metrics"},"Metrics API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/admin/tags"},"Tags API"))),(0,a.kt)("h2",{id:"system-apis"},"System API's"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/internal/internal"},"Internal Backstage API"))),(0,a.kt)("h3",{id:"contenttype"},"Content-Type"),(0,a.kt)("p",null,"All endpoints require ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")," as content type, so if you're using curl remember to add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'-H "Content-Type: application/json"\n')))}m.isMDXComponent=!0}}]);