"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={id:"database-setup",title:"Database Setup"},l=void 0,s={unversionedId:"deploy/database-setup",id:"deploy/database-setup",title:"Database Setup",description:"To run Unleash you need to have PostgreSQL database (PostgreSQL v10.x or newer).",source:"@site/docs/deploy/database-setup.md",sourceDirName:"deploy",slug:"/deploy/database-setup",permalink:"/deploy/database-setup",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/deploy/database-setup.md",tags:[],version:"current",frontMatter:{id:"database-setup",title:"Database Setup"},sidebar:"documentation",previous:{title:"Configuring Unleash",permalink:"/deploy/configuring_unleash"},next:{title:"Database Backup",permalink:"/deploy/database_backup"}},i={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To run Unleash you need to have PostgreSQL database (PostgreSQL v10.x or newer)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a local unleash databases in PostgreSQL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ psql postgres <<SQL\nCREATE USER unleash_user WITH PASSWORD 'password';\nCREATE DATABASE unleash;\nGRANT ALL PRIVILEGES ON DATABASE unleash to unleash_user;\nSQL\n")),(0,r.kt)("p",null,"You will now have a PostgreSQL database with the following configuration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"database name: ",(0,r.kt)("inlineCode",{parentName:"li"},"unleash")),(0,r.kt)("li",{parentName:"ul"},"username: ",(0,r.kt)("inlineCode",{parentName:"li"},"unleash_user")),(0,r.kt)("li",{parentName:"ul"},"password: ",(0,r.kt)("inlineCode",{parentName:"li"},"password")),(0,r.kt)("li",{parentName:"ul"},"host: ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost")," (assuming you started it locally)"),(0,r.kt)("li",{parentName:"ul"},"port: ",(0,r.kt)("inlineCode",{parentName:"li"},"5432")," (assuming you are using the default PostgreSQL port)")))}c.isMDXComponent=!0}}]);