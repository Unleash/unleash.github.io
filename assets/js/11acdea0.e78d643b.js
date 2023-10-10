"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4814],{74124:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),r=a(67294),l=a(86010),o=a(63735),i=a(38224),s=a(5730);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(m(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},o,{className:(0,l.Z)("tabs__item",d,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function m(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function p(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement(c,(0,n.Z)({},e,t)),r.createElement(m,(0,n.Z)({},e,t)))}function h(e){const t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},7771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(74124),o=a(11666);const i={id:"academy",title:"Unleash Academy"},s="Unleash Academy",u={unversionedId:"tutorials/academy",id:"tutorials/academy",title:"Unleash Academy",description:"Introduction",source:"@site/docs/tutorials/academy.md",sourceDirName:"tutorials",slug:"/tutorials/academy",permalink:"/tutorials/academy",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/tutorials/academy.md",tags:[],version:"current",frontMatter:{id:"academy",title:"Unleash Academy"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Learning Paths and How to use this content",id:"learning-paths-and-how-to-use-this-content",level:2},{value:"Course Directory",id:"course-directory",level:2},{value:"Directory by Persona",id:"directory-by-persona",level:3},{value:"Directory by Course",id:"directory-by-course",level:3}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unleash-academy"},"Unleash Academy"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unleash Academy is your go-to portal for complimentary self-paced training materials around the Unleash platform.")),(0,r.kt)("p",null,"Whether you are new to feature flags or a seasoned feature management user and whatever your organizational role, our materials will help onboard you to the full suite of capabilities the Unleash platform has to offer, refresh your existing knowledge, broaden your knowledge to new use cases, and much more!  "),(0,r.kt)("p",null,"Any Unleash user is welcomed - from Open Source, Pro to Enterprise.  "),(0,r.kt)("p",null,"Content is carefully curated to ensure the best, most relevant targeted learning experience. Review the next section on how to use the content to get started today!  "),(0,r.kt)("h2",{id:"learning-paths-and-how-to-use-this-content"},"Learning Paths and How to use this content"),(0,r.kt)("p",null,"Content is built around Learning Paths that are based on common user roles and ",(0,r.kt)("em",{parentName:"p"},"personas")," using Unleash today. This helps ensure that you maximize value from the time you spend with Unleash Academy by reviewing content that will help you achieve your goals with Unleash."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Start by identifying the ",(0,r.kt)("em",{parentName:"strong"},"persona")," most closely associated with your day to day responsibilities."),(0,r.kt)("br",{parentName:"p"}),"\n","Example titles are provided for additional guidance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"E.g Software Engineer, Software Developer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DevOps / Admin"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Platform Engineer, Site Reliability Engineer, DevOps Engineer, Systems Administrator, Cloud Infrastructure Consultant"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Product Owner"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Product Manager, Product Analyst"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"People Leader"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Manager, Executive")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All roles working with Unleash start with the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/academy-foundational"},(0,r.kt)("strong",{parentName:"a"},"Foundational"))," training. Then, role dependent courses are offered thereafter.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Now check the course directory below to find out which courses apply to your persona!"),"  "),(0,r.kt)("h2",{id:"course-directory"},"Course Directory"),(0,r.kt)("h3",{id:"directory-by-persona"},"Directory by Persona"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Developer",label:"Developer",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"academy-foundational"},(0,r.kt)("strong",null,"Foundational"))," (75min)  "),(0,r.kt)("li",null,(0,r.kt)("a",{href:"academy-advanced-for-devs"},(0,r.kt)("strong",null,"Advanced for Developers"))," (45min)"))),(0,r.kt)(o.Z,{value:"DevOps / Admin",label:"DevOps / Admin",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"academy-foundational"},(0,r.kt)("strong",null,"Foundational"))," (75min)  "),(0,r.kt)("li",null,(0,r.kt)("a",{href:"academy-managing-unleash-for-devops"},(0,r.kt)("strong",null,"Managing Unleash for DevOps/Admins"))," (45min)"))),(0,r.kt)(o.Z,{value:"Product Owner",label:"Product Owner",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"academy-foundational"},(0,r.kt)("strong",null,"Foundational"))," (75min)  "))),(0,r.kt)(o.Z,{value:"People Leader",label:"People Leader",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"academy-foundational"},(0,r.kt)("strong",null,"Foundational"))," (75min)  ")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Select the tab that corresponds to your persona. A course list is shown - plan to complete the courses in the displayed order, noting the estimated completion times."),(0,r.kt)("h3",{id:"directory-by-course"},"Directory by Course"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/tutorials/academy-foundational"},(0,r.kt)("strong",{parentName:"a"},"Foundational"))," - For all roles working with Unleash - Developers, Product owners, Leaders.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/tutorials/academy-advanced-for-devs"},(0,r.kt)("strong",{parentName:"a"},"Advanced for Developers"))," - For Developers only, after Foundational content has been reviewed  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/tutorials/academy-managing-unleash-for-devops"},(0,r.kt)("strong",{parentName:"a"},"Managing Unleash for DevOps/Admins"))," - For DevOps, Platform leads and Admins only after Foundational content has been reviewed")))}p.isMDXComponent=!0}}]);