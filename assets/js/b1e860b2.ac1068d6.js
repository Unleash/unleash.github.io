"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[58055],{34665:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(67294),i=n(86010),a=n(85919),s=n(88746),c=n(71699),o=n(11614);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(s.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:a,description:s}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},n," ",a),s&&r.createElement("p",{className:(0,i.Z)("text--truncate",d),title:s},s))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:null==i?void 0:i.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(E,{items:n.items,className:t})}function E(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const s=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(k,{item:e})))))}},9362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),a=n(34665),s=n(85919);const c={id:"api-tokens",title:"API tokens",description:"API tokens",custom_edit_url:null},o=void 0,l={unversionedId:"reference/api/unleash/api-tokens",id:"reference/api/unleash/api-tokens",title:"API tokens",description:"API tokens",source:"@site/docs/reference/api/unleash/api-tokens.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/api-tokens",permalink:"/reference/api/unleash/api-tokens",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"api-tokens",title:"API tokens",description:"API tokens",custom_edit_url:null},sidebar:"documentation",previous:{title:"Update splash settings",permalink:"/reference/api/unleash/update-splash-settings"},next:{title:"Get API tokens",permalink:"/reference/api/unleash/get-all-api-tokens"}},u={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create, update, and delete ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys"},"Unleash API tokens"),"."),(0,i.kt)(a.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);