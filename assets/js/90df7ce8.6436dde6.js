"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[990],{14250:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(67294),i=r(86010),a=r(85919),l=r(88746),c=r(71699),s=r(11614);const o="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(l.Z,{href:t,className:(0,i.Z)("card padding--lg",o)},r)}function f(e){let{href:t,icon:r,title:a,description:l}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:a},r," ",a),l&&n.createElement("p",{className:(0,i.Z)("text--truncate",u),title:l},l))}function p(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return n.createElement(f,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const l=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},l.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},24157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905)),a=r(14250),l=r(85919);const c={id:"telemetry",title:"Telemetry",description:"Telemetry",custom_edit_url:null},s=void 0,o={unversionedId:"reference/api/unleash/telemetry",id:"reference/api/unleash/telemetry",title:"Telemetry",description:"Telemetry",source:"@site/docs/reference/api/unleash/telemetry.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/telemetry",permalink:"/reference/api/unleash/telemetry",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"telemetry",title:"Telemetry",description:"Telemetry",custom_edit_url:null},sidebar:"documentation",previous:{title:"addTagToFeatures",permalink:"/reference/api/unleash/add-tag-to-features"},next:{title:"Get telemetry settings",permalink:"/reference/api/unleash/get-telemetry-settings"}},m={},u=[],d={toc:u};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API for information about telemetry collection"),(0,i.kt)(a.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);