"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1063],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),b=n,f=d["".concat(c,".").concat(b)]||d[b]||i[b]||o;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>i,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={id:"database_backup",title:"Database Backup"},l=void 0,p={unversionedId:"deploy/database_backup",id:"deploy/database_backup",title:"Database Backup",description:"When upgrading to a new major version of Unleash, we advise to do a full database backup to ease rollback in case of failures.",source:"@site/docs/deploy/database-backup.md",sourceDirName:"deploy",slug:"/deploy/database_backup",permalink:"/deploy/database_backup",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/deploy/database-backup.md",tags:[],version:"current",frontMatter:{id:"database_backup",title:"Database Backup"},sidebar:"documentation",previous:{title:"Database Setup",permalink:"/deploy/database-setup"},next:{title:"Email service",permalink:"/deploy/email"}},c={},s=[],u={toc:s};function i(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When upgrading to a new major version of Unleash, we advise to do a full database backup to ease rollback in case of failures."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a database backup:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pg_dump --clean -U unleash_user -W -h localhost unleash > unleash-db.dump\n\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Restore from a backup:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"psql -U unleash_user -W -h localhost unleash < unleash-db.dump\n")))}i.isMDXComponent=!0}}]);