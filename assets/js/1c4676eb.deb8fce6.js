"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7657],{27839:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),a=n(86010),i=n(53438),s=n(39960),c=n(13919),o=n(95999);const d="cardContainer_fWXF",l="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(s.Z,{href:t,className:(0,a.Z)("card padding--lg",d)},n)}function p(e){let{href:t,icon:n,title:i,description:s}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l),title:i},n," ",i),s&&r.createElement("p",{className:(0,a.Z)("text--truncate",u),title:s},s))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t;let{item:n}=e;const a=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:a,title:n.label,description:null==s?void 0:s.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function k(e){let{items:t,className:n}=e;return r.createElement("section",{className:(0,a.Z)("row",n)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},19999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(27839),s=n(53438);const c={id:"addons",title:"Addons",description:"Addons"},o=void 0,d={unversionedId:"reference/api/unleash/addons",id:"reference/api/unleash/addons",title:"Addons",description:"Addons",source:"@site/docs/reference/api/unleash/addons.tag.mdx",sourceDirName:"reference/api/unleash",slug:"/reference/api/unleash/addons",permalink:"/reference/api/unleash/addons",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/unleash/addons.tag.mdx",tags:[],version:"current",frontMatter:{id:"addons",title:"Addons",description:"Addons"},sidebar:"documentation",previous:{title:"OpenAPI docs",permalink:"/reference/api/unleash"},next:{title:"getAddons",permalink:"/reference/api/unleash/get-addons"}},l={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create, update, and delete ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/addons"},"Unleash addons"),"."),(0,a.kt)(i.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);