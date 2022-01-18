"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6352],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7422:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={id:"email",title:"Email service"},s=void 0,u={unversionedId:"deploy/email",id:"deploy/email",title:"Email service",description:"New since Unleash v4.0.0 is an email service allowing us to send reset password and welcome mails to new users. In order for this to work you'll need to tell unleash what SMTP service you'd like to send mails from.",source:"@site/docs/deploy/email.md",sourceDirName:"deploy",slug:"/deploy/email",permalink:"/deploy/email",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/deploy/email.md",tags:[],version:"current",frontMatter:{id:"email",title:"Email service"},sidebar:"Deploy and manage",previous:{title:"Securing Unleash",permalink:"/deploy/securing_unleash"},next:{title:"Google Auth Hook",permalink:"/deploy/google_auth"}},c=[{value:"Configuring",id:"configuring",children:[{value:"Docker",id:"docker",children:[],level:3},{value:"Node",id:"node",children:[],level:3}],level:2}],p={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"New since Unleash v4.0.0 is an email service allowing us to send reset password and welcome mails to new users. In order for this to work you'll need to tell unleash what SMTP service you'd like to send mails from."),(0,a.kt)("p",null,"If the service is not configured you'll see a log line every time you add a new user saying"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[2021-05-07T12:59:04.572] [WARN] routes/user-controller.ts - email\nwas not sent to the user because email configuration is lacking\n")),(0,a.kt)("h2",{id:"configuring"},"Configuring"),(0,a.kt)("p",null,"Depending on your deploy case there are different ways of configuring this service. Full documentation of all configuration possibilities is available ",(0,a.kt)("a",{parentName:"p",href:"/deploy/configuring_unleash"},"here")),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("p",null,"With docker, we configure the mail service via environment variables."),(0,a.kt)("p",null,"You'll want to at least include EMAIL_HOST, EMAIL_USER, EMAIL_PASSWORD and EMAIL_SENDER"),(0,a.kt)("p",null,"Environment variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"EMAIL_HOST - Your SMTP server address"),(0,a.kt)("li",{parentName:"ul"},"EMAIL_PORT - Your SMTP server port - defaults to 567"),(0,a.kt)("li",{parentName:"ul"},"EMAIL_SECURE - whether to use SMTPS - set to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," - defaults to false,"),(0,a.kt)("li",{parentName:"ul"},"EMAIL_USER - the username to authenticate against your SMTP server"),(0,a.kt)("li",{parentName:"ul"},"EMAIL_PASSWORD - the password for your SMTP user"),(0,a.kt)("li",{parentName:"ul"},"EMAIL_SENDER - which address should reset-password mails and welcome mails be sent from - defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"noreply@unleash-hosted.com")," which is probably not what you want.")),(0,a.kt)("h3",{id:"node"},"Node"),(0,a.kt)("p",null,"With node, we can configure this when calling Unleash's start method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const unleash = require('unleash-server');\n\nunleash.start({\n  email: {\n    host: 'myhost',\n    smtpuser: 'username',\n    smtppass: 'password',\n    sender: 'noreply@mycompany.com',\n  },\n});\n")))}d.isMDXComponent=!0}}]);