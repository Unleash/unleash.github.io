"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2017],{27839:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),i=n(86010),a=n(53438),c=n(39960),l=n(13919),s=n(95999);const o="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",o)},n)}function h(e){let{href:t,icon:n,title:a,description:c}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},n," ",a),c&&r.createElement("p",{className:(0,i.Z)("text--truncate",m),title:c},c))}function p(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:n}=e;const i=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(h,{href:n.href,icon:i,title:n.label,description:null==c?void 0:c.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return r.createElement(v,e);const c=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},62530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),i=(n(67294),n(3905)),a=n(27839),c=n(53438);const l={id:"auth",title:"Auth",description:"Auth",custom_edit_url:null},s=void 0,o={unversionedId:"reference/api/unleash/auth",id:"reference/api/unleash/auth",title:"Auth",description:"Auth",source:"@site/docs/reference/api/unleash/auth.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/auth",permalink:"/reference/api/unleash/auth",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"auth",title:"Auth",description:"Auth",custom_edit_url:null},sidebar:"documentation",previous:{title:"reviveFeature",permalink:"/reference/api/unleash/revive-feature"},next:{title:"login",permalink:"/reference/api/unleash/login"}},u={},m=[],d={toc:m};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Manage logins, passwords, etc."),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);