"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[27150],{34665:(e,t,c)=>{c.d(t,{Z:()=>k});var n=c(67294),r=c(86010),i=c(85919),s=c(88746),a=c(71699),o=c(11614);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:c}=e;return n.createElement(s.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},c)}function p(e){let{href:t,icon:c,title:i,description:s}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:i},c," ",i),s&&n.createElement("p",{className:(0,r.Z)("text--truncate",m),title:s},s))}function f(e){let{item:t}=e;const c=(0,i.Wl)(t);return c?n.createElement(p,{href:c,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const c=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:c,title:t.label,description:r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const c=(0,i.jA)();return n.createElement(k,{items:c.items,className:t})}function k(e){const{items:t,className:c}=e;if(!t)return n.createElement(g,e);const s=(0,i.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",c)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},6488:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=c(87462),r=(c(67294),c(3905)),i=c(34665),s=c(85919);const a={id:"service-accounts",title:"Service Accounts",description:"Service Accounts",custom_edit_url:null},o=void 0,l={unversionedId:"reference/api/unleash/service-accounts",id:"reference/api/unleash/service-accounts",title:"Service Accounts",description:"Service Accounts",source:"@site/docs/reference/api/unleash/service-accounts.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/service-accounts",permalink:"/reference/api/unleash/service-accounts",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"service-accounts",title:"Service Accounts",description:"Service Accounts",custom_edit_url:null},sidebar:"documentation",previous:{title:"Get all segments",permalink:"/reference/api/unleash/get-segments"},next:{title:"List service accounts.",permalink:"/reference/api/unleash/get-service-accounts"}},u={},m=[],d={toc:m};function p(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Endpoints for managing ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/service-accounts"},"Service Accounts"),", which enable programmatic access to the Unleash API."),(0,r.kt)(i.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);