"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8442],{27839:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(67294),a=r(86010),c=r(53438),i=r(39960),s=r(13919),o=r(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function m(e){let{href:t,icon:r,title:c,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:c},r," ",c),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t;let{item:r}=e;const a=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:a,title:r.label,description:null==i?void 0:i.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function j(e){let{items:t,className:r}=e;return n.createElement("section",{className:(0,a.Z)("row",r)},function(e){return e.filter((e=>"category"!==e.type||!!(0,c.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},27948:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),c=r(27839),i=r(53438);const s={id:"projects",title:"Projects",description:"Projects"},o=void 0,l={unversionedId:"reference/api/unleash/projects",id:"reference/api/unleash/projects",title:"Projects",description:"Projects",source:"@site/docs/reference/api/unleash/projects.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/projects",permalink:"/reference/api/unleash/projects",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/projects.tag.mdx",tags:[],version:"current",frontMatter:{id:"projects",title:"Projects",description:"Projects"},sidebar:"documentation",previous:{title:"Evaluate an Unleash context against a set of environments and projects.",permalink:"/reference/api/unleash/get-playground"},next:{title:"getProjects",permalink:"/reference/api/unleash/get-projects"}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create, update, and delete ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/user_guide/projects"},"Unleash projects"),"."),(0,a.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);