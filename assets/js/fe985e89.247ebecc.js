"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[18103],{34665:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(67294),i=r(86010),a=r(85919),c=r(88746),s=r(71699),l=r(11614);const o="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",o)},r)}function h(e){let{href:t,icon:r,title:a,description:c}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},r," ",a),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",d),title:c},c))}function p(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return n.createElement(h,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const c=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},62671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(87462),i=(r(67294),r(3905)),a=r(34665),c=r(85919);const s={id:"archive",title:"Archive",description:"Archive",custom_edit_url:null},l=void 0,o={unversionedId:"reference/api/unleash/archive",id:"reference/api/unleash/archive",title:"Archive",description:"Archive",source:"@site/docs/reference/api/unleash/archive.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/archive",permalink:"/reference/api/unleash/archive",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"archive",title:"Archive",description:"Archive",custom_edit_url:null},sidebar:"documentation",previous:{title:"Delete API token",permalink:"/reference/api/unleash/delete-api-token"},next:{title:"Get archived features",permalink:"/reference/api/unleash/get-archived-features"}},u={},d=[],m={toc:d};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Revive or permanently delete ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/advanced/archived_toggles"},"archived feature toggles"),"."),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);