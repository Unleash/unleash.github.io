"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7174],{14250:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),s=n(86010),a=n(85919),c=n(88746),i=n(71699),l=n(11614);const o="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,s.Z)("card padding--lg",o)},n)}function h(e){let{href:t,icon:n,title:a,description:c}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,s.Z)("text--truncate",u),title:a},n," ",a),c&&r.createElement("p",{className:(0,s.Z)("text--truncate",m),title:c},c))}function p(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,a.xz)(t.docId??void 0);return r.createElement(h,{href:t.href,icon:n,title:t.label,description:s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function q(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return r.createElement(q,e);const c=(0,a.MN)(t);return r.createElement("section",{className:(0,s.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},43938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(87462),s=(n(67294),n(3905)),a=n(14250),c=n(85919);const i={id:"change-requests",title:"Change Requests",description:"Change Requests",custom_edit_url:null},l=void 0,o={unversionedId:"reference/api/unleash/change-requests",id:"reference/api/unleash/change-requests",title:"Change Requests",description:"Change Requests",source:"@site/docs/reference/api/unleash/change-requests.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/change-requests",permalink:"/reference/api/unleash/change-requests",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"change-requests",title:"Change Requests",description:"Change Requests",custom_edit_url:null},sidebar:"documentation",previous:{title:"Reset password",permalink:"/reference/api/unleash/send-reset-password-email"},next:{title:"Create/Add change to a change request",permalink:"/reference/api/unleash/change-request"}},u={},m=[],d={toc:m};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"API for managing ",(0,s.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/change-requests"},"change requests"),"."),(0,s.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);