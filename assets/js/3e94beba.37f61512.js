"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1906],{34665:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(67294),i=r(86010),o=r(85919),a=r(88746),c=r(71699),s=r(11614);const l="cardContainer_fWXF",p="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function d(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",p),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(E,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(x,{item:e})))))}},24451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var n=r(87462),i=(r(67294),r(3905)),o=r(34665),a=r(85919);const c={id:"import-export",title:"Import/Export",description:"Import/Export",custom_edit_url:null},s=void 0,l={unversionedId:"reference/api/unleash/import-export",id:"reference/api/unleash/import-export",title:"Import/Export",description:"Import/Export",source:"@site/docs/reference/api/unleash/import-export.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/import-export",permalink:"/reference/api/unleash/import-export",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"import-export",title:"Import/Export",description:"Import/Export",custom_edit_url:null},sidebar:"documentation",previous:{title:"Register a client SDK",permalink:"/reference/api/unleash/register-frontend-client"},next:{title:"Export feature toggles from an environment",permalink:"/reference/api/unleash/export-features"}},p={},m=[],u={toc:m};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/deploy/import_export"},"Import and export")," the state of your Unleash instance."),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);