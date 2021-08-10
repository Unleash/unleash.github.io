"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6747],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,h=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4925:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"internal",title:"/internal-backstage/prometheus"},u="Internal Backstage API",c={unversionedId:"api/internal/internal",id:"api/internal/internal",isDocsHomePage:!1,title:"/internal-backstage/prometheus",description:"GET http://unleash.host.com/internal-backstage/prometheus",source:"@site/docs/api/internal/internal-backstage-api.md",sourceDirName:"api/internal",slug:"/api/internal/internal",permalink:"/api/internal/internal",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/api/internal/internal-backstage-api.md",version:"current",frontMatter:{id:"internal",title:"/internal-backstage/prometheus"},sidebar:"api",previous:{title:"API Documentation",permalink:"/api"},next:{title:"/health",permalink:"/api/internal/health"}},p=[{value:"Annotations",id:"annotations",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"internal-backstage-api"},"Internal Backstage API"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/internal-backstage/prometheus")),(0,i.kt)("p",null,"Unleash uses prometheus internally to collect metrics. These are available on the given url if the ",(0,i.kt)("inlineCode",{parentName:"p"},"serverMetrics")," option is enabled (default=true)."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Read more about Prometheus")),(0,i.kt)("h2",{id:"annotations"},"Annotations"),(0,i.kt)("p",null,"Unleash will automatically count all updates for all toggles under the metric name ",(0,i.kt)("inlineCode",{parentName:"p"},"feature_toggle_update_total"),", and the toggle name is will be set as a label value. This information can be used to create annotations in grafana for everytime a feature toggle is changed."),(0,i.kt)("p",null,"You can use this query in grafana to achieve this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'delta(feature_toggle_update_total{toggle="Demo"}[1m]) != bool 0\n')),(0,i.kt)("p",null,"Another useful counter is the ",(0,i.kt)("inlineCode",{parentName:"p"},"feature_toggle_usage_total")," which will give you the numbers for how many times a feature toggle has been evaluated to ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," or not."))}m.isMDXComponent=!0}}]);