"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7550],{14250:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(86010),i=n(85919),s=n(88746),c=n(71699),l=n(11614);const o="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(s.Z,{href:t,className:(0,a.Z)("card padding--lg",o)},n)}function p(e){let{href:t,icon:n,title:i,description:s}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},n," ",i),s&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:s},s))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(k,e);const s=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},25532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),i=n(14250),s=n(85919);const c={id:"tags",title:"Tags",description:"Tags",custom_edit_url:null},l=void 0,o={unversionedId:"reference/api/unleash/tags",id:"reference/api/unleash/tags",title:"Tags",description:"Tags",source:"@site/docs/reference/api/unleash/tags.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/tags",permalink:"/reference/api/unleash/tags",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"tags",title:"Tags",description:"Tags",custom_edit_url:null},sidebar:"documentation",previous:{title:"reactivateStrategy",permalink:"/reference/api/unleash/reactivate-strategy"},next:{title:"getTags",permalink:"/reference/api/unleash/get-tags"}},u={},m=[],d={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create, update, and delete ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/tags"},"tags and tag types"),"."),(0,a.kt)(i.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);