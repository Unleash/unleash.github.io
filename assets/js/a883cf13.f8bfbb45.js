"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[63646],{34665:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),i=r(86010),c=r(85919),s=r(88746),a=r(71699),l=r(11614);const o="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(s.Z,{href:t,className:(0,i.Z)("card padding--lg",o)},r)}function p(e){let{href:t,icon:r,title:c,description:s}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:c},r," ",c),s&&n.createElement("p",{className:(0,i.Z)("text--truncate",u),title:s},s))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(E,{items:r.items,className:t})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const s=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},34833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905)),c=r(34665),s=r(85919);const a={id:"metrics",title:"Metrics",description:"Metrics",custom_edit_url:null},l=void 0,o={unversionedId:"reference/api/unleash/metrics",id:"reference/api/unleash/metrics",title:"Metrics",description:"Metrics",source:"@site/docs/reference/api/unleash/metrics.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/metrics",permalink:"/reference/api/unleash/metrics",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"metrics",title:"Metrics",description:"Metrics",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get maintenance mode status",permalink:"/reference/api/unleash/get-maintenance"},next:{title:"Gets usage data",permalink:"/reference/api/unleash/get-requests-per-second"}},m={},u=[],d={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Register, read, or delete metrics recorded by Unleash."),(0,i.kt)(c.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);