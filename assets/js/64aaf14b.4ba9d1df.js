"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[426],{34665:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),s=r(86010),i=r(85919),a=r(88746),c=r(71699),l=r(11614);const o="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,s.Z)("card padding--lg",o)},r)}function p(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",u),title:i},r," ",i),a&&n.createElement("p",{className:(0,s.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},25483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>m});var n=r(87462),s=(r(67294),r(3905)),i=r(34665),a=r(85919);const c={id:"users",title:"Users",description:"Users",custom_edit_url:null},l=void 0,o={unversionedId:"reference/api/unleash/users",id:"reference/api/unleash/users",title:"Users",description:"Users",source:"@site/docs/reference/api/unleash/users.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/users",permalink:"/reference/api/unleash/users",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"users",title:"Users",description:"Users",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get telemetry settings",permalink:"/reference/api/unleash/get-telemetry-settings"},next:{title:"Get a list of groups",permalink:"/reference/api/unleash/get-groups"}},u={},m=[],d={toc:m};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Manage users and passwords."),(0,s.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);