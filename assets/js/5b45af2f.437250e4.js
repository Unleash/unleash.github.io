"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[99394],{34665:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(86010),i=n(85919),s=n(88746),l=n(71699),c=n(11614);const o="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(s.Z,{href:t,className:(0,a.Z)("card padding--lg",o)},n)}function p(e){let{href:t,icon:n,title:i,description:s}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},n," ",i),s&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:s},s))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:a?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const s=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},54994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),i=n(34665),s=n(85919);const l={id:"unstable",title:"Unstable",description:"Unstable",custom_edit_url:null},c=void 0,o={unversionedId:"reference/api/unleash/unstable",id:"reference/api/unleash/unstable",title:"Unstable",description:"Unstable",source:"@site/docs/reference/api/unleash/unstable.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/unstable",permalink:"/reference/api/unleash/unstable",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"unstable",title:"Unstable",description:"Unstable",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get telemetry settings",permalink:"/reference/api/unleash/get-telemetry-settings"},next:{title:"Get all banners.",permalink:"/reference/api/unleash/get-banners"}},u={},m=[],d={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Experimental endpoints that may change or disappear at any time."),(0,a.kt)(i.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);