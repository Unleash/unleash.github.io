(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6151],{31874:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));n(51402),n(82083);var i=n(92414),r=n(11666);n(93162);const s={id:"unleash-api",title:"Unleash API",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},l=void 0,c={unversionedId:"reference/api/unleash/unleash-api",id:"reference/api/unleash/unleash-api",title:"Unleash API",description:"",source:"@site/docs/reference/api/unleash/unleash-api.info.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/unleash-api",permalink:"/reference/api/unleash/unleash-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"unleash-api",title:"Unleash API",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"documentation",previous:{title:"OpenAPI docs",permalink:"/reference/api/unleash"},next:{title:"Addons",permalink:"/reference/api/unleash/addons"}},u={},d=[],p={toc:d};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 4.22.0"),(0,o.kt)("h1",{className:"openapi__heading"},"Unleash API"),(0,o.kt)("div",{style:{marginBottom:"2rem"}},(0,o.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,o.kt)(i.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,o.kt)(r.Z,{label:"API Key: apiKey",value:"apiKey",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Security Scheme Type:"),(0,o.kt)("td",null,"apiKey")),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Header parameter name:"),(0,o.kt)("td",null,"Authorization")))))))))}f.isMDXComponent=!0},93162:function(e,t,n){var a,o,i,r=n(25108);o=[],a=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(r.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){c(a.response,t,n)},a.onerror=function(){r.error("could not download file")},a.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var r=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):o(l.href)?a(e,t,n):i(l,l.target="_blank")):(l.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(o(e))a(e,n,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){i(s)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var i="application/octet-stream"===e.type,r=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&r||l)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var d=s.URL||s.webkitURL,p=d.createObjectURL(e);o?o.location=p:location.href=p,o=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c},void 0===(i="function"==typeof a?a.apply(t,o):a)||(e.exports=i)}}]);