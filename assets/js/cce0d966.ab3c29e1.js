"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1415],{14250:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(67294),a=r(86010),s=r(85919),i=r(88746),c=r(71699),l=r(11614);const o="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",o)},r)}function d(e){let{href:t,icon:r,title:s,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:s},r," ",s),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function f(e){let{item:t}=e;const r=(0,s.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,s.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const i=(0,s.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},60158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),s=r(14250),i=r(85919);const c={id:"feature-types",title:"Feature Types",description:"Feature Types",custom_edit_url:null},l=void 0,o={unversionedId:"reference/api/unleash/feature-types",id:"reference/api/unleash/feature-types",title:"Feature Types",description:"Feature Types",source:"@site/docs/reference/api/unleash/feature-types.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/feature-types",permalink:"/reference/api/unleash/feature-types",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"feature-types",title:"Feature Types",description:"Feature Types",custom_edit_url:null},sidebar:"documentation",previous:{title:"Search for events",permalink:"/reference/api/unleash/search-events"},next:{title:"Get all feature types",permalink:"/reference/api/unleash/get-all-feature-types"}},u={},p=[],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Manage ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/feature-toggle-types"},"feature toggle types"),"."),(0,a.kt)(s.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);