"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9734],{34665:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),a=r(86010),i=r(85919),s=r(88746),c=r(71699),l=r(11614);const o="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(s.Z,{href:t,className:(0,a.Z)("card padding--lg",o)},r)}function p(e){let{href:t,icon:r,title:i,description:s}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},r," ",i),s&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:s},s))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(E,{items:r.items,className:t})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const s=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},8094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),i=r(34665),s=r(85919);const c={id:"strategies",title:"Strategies",description:"Strategies",custom_edit_url:null},l=void 0,o={unversionedId:"reference/api/unleash/strategies",id:"reference/api/unleash/strategies",title:"Strategies",description:"Strategies",source:"@site/docs/reference/api/unleash/strategies.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/strategies",permalink:"/reference/api/unleash/strategies",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"strategies",title:"Strategies",description:"Strategies",custom_edit_url:null},sidebar:"documentation",previous:{title:"Delete a token for a service account.",permalink:"/reference/api/unleash/delete-service-account-token"},next:{title:"Get all strategies",permalink:"/reference/api/unleash/get-all-strategies"}},u={},m=[],d={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create, update, delete, manage ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/custom-activation-strategies"},"custom strategies"),"."),(0,a.kt)(i.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);