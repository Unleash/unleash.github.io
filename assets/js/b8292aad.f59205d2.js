"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[443],{27839:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),i=n(86010),s=n(53438),a=n(39960),c=n(13919),l=n(95999);const o="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",o)},n)}function f(e){let{href:t,icon:n,title:s,description:a}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:s},n," ",s),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:a},a))}function p(e){let{item:t}=e;const n=(0,s.Wl)(t);return n?r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t;let{item:n}=e;const i=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,s.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function E(e){let{className:t}=e;const n=(0,s.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(E,e);const a=(0,s.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e})))))}},33726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),s=n(27839),a=n(53438);const c={id:"events",title:"Events",description:"Events",custom_edit_url:null},l=void 0,o={unversionedId:"reference/api/unleash/events",id:"reference/api/unleash/events",title:"Events",description:"Events",source:"@site/docs/reference/api/unleash/events.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/events",permalink:"/reference/api/unleash/events",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"events",title:"Events",description:"Events",custom_edit_url:null},sidebar:"documentation",previous:{title:"toggleEnvironmentOff",permalink:"/reference/api/unleash/toggle-environment-off"},next:{title:"Get the most recent events from the Unleash instance or all events related to a project.",permalink:"/reference/api/unleash/get-events"}},m={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Read events from this Unleash instance."),(0,i.kt)(s.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);