"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3773],{14250:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(67294),i=n(86010),c=n(85919),a=n(88746),l=n(71699),s=n(11614);const o="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",o)},n)}function p(e){let{href:t,icon:n,title:c,description:a}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:c},n," ",c),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:null==i?void 0:i.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(E,{items:n.items,className:t})}function E(e){const{items:t,className:n}=e;if(!t)return r.createElement(k,e);const a=(0,c.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},95334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),i=(n(67294),n(3905)),c=n(14250),a=n(85919);const l={id:"client",title:"Client",description:"Client",custom_edit_url:null},s=void 0,o={unversionedId:"reference/api/unleash/client",id:"reference/api/unleash/client",title:"Client",description:"Client",source:"@site/docs/reference/api/unleash/client.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/client",permalink:"/reference/api/unleash/client",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"client",title:"Client",description:"Client",custom_edit_url:null},sidebar:"documentation",previous:{title:"sendResetPasswordEmail",permalink:"/reference/api/unleash/send-reset-password-email"},next:{title:"getClientFeature",permalink:"/reference/api/unleash/get-client-feature"}},u={},m=[],d={toc:m};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Endpoints for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/sdks"},"Unleash server-side clients"),"."),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);