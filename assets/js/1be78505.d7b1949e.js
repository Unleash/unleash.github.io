"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9514,713],{79735:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_e});var a=n(67294),l=n(86010),o=n(44873),r=n(18015),i=n(39105),c=n(85919),s=n(6141),d=n(50003),m=n(60740),u=n(11614),b=n(20883);const p="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function E(){const{shown:e,scrollToTop:t}=(0,b.a)({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,p,e&&h),type:"button",onClick:t})}var f=n(7394),v=n(94980),g=n(96793),_=n(49627),k=n(87462);function C(e){return a.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S="collapseSidebarButton_PEFL",I="collapseSidebarButtonIcon_kv0_";function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",S),onClick:t},a.createElement(C,{className:I}))}var Z=n(69061),T=n(63735),y=n(55132),x=n(93478),w=n(17940),L=n(18407),A=n(88746),M=n(5730);function B(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,g.L)(),f=function(e){const t=(0,M.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),v=(0,c._F)(t,o),_=(0,L.Mg)(h,o),{collapsed:C,setCollapsed:S}=(0,w.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=(0,y.f)(),Z=function(e){void 0===e&&(e=!C),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,x.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:v,collapsed:C,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(A.Z,(0,k.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":v}),onClick:b?e=>{null==n||n(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!C:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(B,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(K,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:o,level:i+1})))}var H=n(71699),P=n(39656);const D="menuExternalLink_NmtK";function W(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,o),E=(0,H.Z)(m);return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(A.Z,(0,k.Z)({className:(0,l.Z)("menu__link",!E&&D,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(P.Z,null)))}const R="menuHtmlItem_M9Kj";function V(e){let{item:t,level:n,index:o}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),c&&[R,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:i}})}function z(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(F,(0,k.Z)({item:t},n));case"html":return a.createElement(V,(0,k.Z)({item:t},n));default:return a.createElement(W,(0,k.Z)({item:t},n))}}function U(e){let{items:t,...n}=e;return a.createElement(y.D,null,t.map(((e,t)=>a.createElement(z,(0,k.Z)({key:t,item:e,index:t},n)))))}const K=(0,a.memo)(U),j="menu_SIkG",G="menuWithAnnouncementBar_GW3s";function Y(e){let{path:t,sidebar:n,className:o}=e;const i=function(){const{isActive:e}=(0,Z.nT)(),[t,n]=(0,a.useState)(e);return(0,T.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",j,i&&G,o)},a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:n,activePath:t,level:1})))}const q="sidebar_njMd",O="sidebarWithHideableNavbar_wUlq",X="sidebarHidden_VK0M",J="sidebarLogo_isFc";function Q(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,g.L)();return a.createElement("div",{className:(0,l.Z)(q,i&&O,r&&X)},i&&a.createElement(_.Z,{tabIndex:-1,className:J}),a.createElement(Y,{path:t,sidebar:n}),c&&a.createElement(N,{onClick:o}))}const $=a.memo(Q);var ee=n(82306),te=n(35022);const ne=e=>{let{sidebar:t,path:n}=e;const o=(0,te.e)();return a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ae(e){return a.createElement(ee.Zo,{component:ne,props:e})}const le=a.memo(ae);function oe(e){const t=(0,v.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement($,e),l&&a.createElement(le,e))}const re="expandButton_m80_",ie="expandButtonIcon_BlDH";function ce(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:re,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:ie}))}const se={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function de(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:(null==n?void 0:n.name)??"noSidebar"},t)}function me(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:i}=(0,f.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),o((e=>!e))}),[o,c]);return a.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,se.docSidebarContainer,n&&se.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(se.docSidebarContainer)&&n&&s(!0)}},a.createElement(de,null,a.createElement("div",{className:(0,l.Z)(se.sidebarViewport,c&&se.sidebarViewportHidden)},a.createElement(oe,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&a.createElement(ce,{toggleSidebar:d}))))}const ue={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function be(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(ue.docMainContainer,(t||!o)&&ue.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",ue.docItemWrapper,t&&ue.docItemWrapperEnhanced)},n))}const pe="docPage__5DB",he="docsWrapper_BCFX";function Ee(e){let{children:t}=e;const n=(0,d.V)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:he},a.createElement(E,null),a.createElement("div",{className:pe},n&&a.createElement(me,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(be,{hiddenSidebarContainer:l},t)))}var fe=n(30713),ve=n(26145);function ge(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ve.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function _e(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(fe.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(ge,e),a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(Ee,null,i)))))}},30713:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294),l=n(11614),o=n(44873),r=n(60740);function i(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},55132:(e,t,n)=>{n.d(t,{D:()=>i,f:()=>c});var a=n(67294),l=n(93478);const o=Symbol("EmptyContext"),r=a.createContext(o);function i(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(r.Provider,{value:o},t)}function c(){const e=(0,a.useContext)(r);if(e===o)throw new l.i6("DocSidebarItemsExpandedStateProvider");return e}},20883:(e,t,n)=>{n.d(t,{a:()=>r});var a=n(67294),l=n(63735),o=n(68265);function r(e){let{threshold:t}=e;const[n,r]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:c,cancelScroll:s}=(0,l.Ct)();return(0,l.RF)(((e,n)=>{let{scrollY:a}=e;const l=null==n?void 0:n.scrollY;l&&(i.current?i.current=!1:a>=l?(s(),r(!1)):a<t?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,o.S)((e=>{e.location.hash&&(i.current=!0,r(!1))})),{shown:n,scrollToTop:()=>c(0)}}}}]);