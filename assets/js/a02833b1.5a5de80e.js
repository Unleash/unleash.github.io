"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9734],{27839:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),i=r(86010),a=r(53438),s=r(39960),c=r(13919),l=r(95999);const o="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(s.Z,{href:t,className:(0,i.Z)("card padding--lg",o)},r)}function p(e){let{href:t,icon:r,title:a,description:s}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},r," ",a),s&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:s},s))}function g(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:r}=e;const i=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,a.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(p,{href:r.href,icon:i,title:r.label,description:null==s?void 0:s.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function k(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(E,{items:r.items,className:t})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const s=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},60102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>m});var n=r(87462),i=(r(67294),r(3905)),a=r(27839),s=r(53438);const c={id:"strategies",title:"Strategies",description:"Strategies",custom_edit_url:null},l=void 0,o={unversionedId:"reference/api/unleash/strategies",id:"reference/api/unleash/strategies",title:"Strategies",description:"Strategies",source:"@site/docs/reference/api/unleash/strategies.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/strategies",permalink:"/reference/api/unleash/strategies",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"strategies",title:"Strategies",description:"Strategies",custom_edit_url:null},sidebar:"documentation",previous:{title:"updatePublicSignupToken",permalink:"/reference/api/unleash/update-public-signup-token"},next:{title:"getAllStrategies",permalink:"/reference/api/unleash/get-all-strategies"}},u={},m=[],d={toc:m};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create, update, delete, manage ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/advanced/custom_activation_strategy"},"custom strategies"),"."),(0,i.kt)(a.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);