"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[85795],{34665:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),a=r(86010),c=r(85919),i=r(88746),s=r(71699),l=r(11614);const o="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",o)},r)}function h(e){let{href:t,icon:r,title:c,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:c},r," ",c),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:i},i))}function p(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(t.docId??void 0);return n.createElement(h,{href:t.href,icon:r,title:t.label,description:a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(E,{items:r.items,className:t})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const i=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},15756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),c=r(34665),i=r(85919);const s={id:"search",title:"Search",description:"Search",custom_edit_url:null},l=void 0,o={unversionedId:"reference/api/unleash/search",id:"reference/api/unleash/search",title:"Search",description:"Search",source:"@site/docs/reference/api/unleash/search.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/search",permalink:"/reference/api/unleash/search",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"search",title:"Search",description:"Search",custom_edit_url:null},sidebar:"documentation",previous:{title:"Update a public signup token",permalink:"/reference/api/unleash/update-public-signup-token"},next:{title:"Search and filter features",permalink:"/reference/api/unleash/search-features"}},u={},m=[],d={toc:m};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Search for features."),(0,a.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);