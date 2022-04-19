"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7918],{8828:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var n=a(7294),l=a(6010),i=a(845),r=a(6158),s=a(56),o=a(7027),c=a(1614),d=a(7434);function m(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function u(e){var t=e.lastUpdatedBy;return n.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function v(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:d.kM.common.lastUpdated},n.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(m,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(u,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var g=a(7462),h=a(3366),p="iconEdit_dcUD",E=["className"];var b=function(e){var t=e.className,a=(0,h.Z)(e,E);return n.createElement("svg",(0,g.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(p,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function f(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},n.createElement(b,null),n.createElement(c.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var N=a(8746),k="tag_hD8n",Z="tagRegular_D6E_",_="tagWithCount_i0QQ";var L=function(e){var t,a=e.permalink,i=e.name,r=e.count;return n.createElement(N.Z,{href:a,className:(0,l.Z)(k,(t={},t[Z]=!r,t[_]=r,t))},i,r&&n.createElement("span",null,r))},U="tags_XVD_",C="tag_JSN8";function T(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(c.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(U,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:C},n.createElement(L,{name:t,permalink:a}))}))))}var w="lastUpdated_foO9";function y(e){return n.createElement("div",{className:(0,l.Z)(d.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(T,e)))}function M(e){var t=e.editUrl,a=e.lastUpdatedAt,i=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(d.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(f,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",w)},(a||i)&&n.createElement(v,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:i})))}function A(e){var t=e.content.metadata,a=t.editUrl,i=t.lastUpdatedAt,r=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,c=o.length>0,m=!!(a||i||s);return c||m?n.createElement("footer",{className:(0,l.Z)(d.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(y,{tags:o}),m&&n.createElement(M,{editUrl:a,lastUpdatedAt:i,lastUpdatedBy:s,formattedLastUpdatedAt:r})):null}var x=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function H(e){var t=e.toc,a=e.className,l=e.linkClassName,i=e.isChild;return t.length?n.createElement("ul",{className:i?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(H,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function D(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,i=e.linkClassName,r=void 0===i?"table-of-contents__link":i,s=e.linkActiveClassName,o=void 0===s?void 0:s,c=e.minHeadingLevel,m=e.maxHeadingLevel,u=(0,h.Z)(e,x),v=(0,d.LU)(),p=null!=c?c:v.tableOfContents.minHeadingLevel,E=null!=m?m:v.tableOfContents.maxHeadingLevel,b=(0,d.DA)({toc:t,minHeadingLevel:p,maxHeadingLevel:E}),f=(0,n.useMemo)((function(){if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:E}}),[r,o,p,E]);return(0,d.Si)(f),n.createElement(H,(0,g.Z)({toc:b,className:l,linkClassName:r},u))}var V="tableOfContents_cNA8",B=["className"];var S=function(e){var t=e.className,a=(0,h.Z)(e,B);return n.createElement("div",{className:(0,l.Z)(V,"thin-scrollbar",t)},n.createElement(D,(0,g.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},I="tocCollapsible_jdIR",O="tocCollapsibleButton_Fzxq",F="tocCollapsibleContent_MpvI",R="tocCollapsibleExpanded_laf4";function P(e){var t,a=e.toc,i=e.className,r=e.minHeadingLevel,s=e.maxHeadingLevel,o=(0,d.uR)({initialState:!0}),m=o.collapsed,u=o.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(I,(t={},t[R]=!m,t),i)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",O),onClick:u},n.createElement(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(d.zF,{lazy:!0,className:F,collapsed:m},n.createElement(D,{toc:a,minHeadingLevel:r,maxHeadingLevel:s})))}var z=a(9955),q="docItemContainer_vinB",Q="docItemCol_DM6M",W="tocMobile_TmEX";function j(e){var t,a=e.content,c=a.metadata,m=a.frontMatter,u=m.image,v=m.keywords,g=m.hide_title,h=m.hide_table_of_contents,p=m.toc_min_heading_level,E=m.toc_max_heading_level,b=c.description,f=c.title,N=!g&&void 0===a.contentTitle,k=(0,d.iP)(),Z=!h&&a.toc&&a.toc.length>0,_=Z&&("desktop"===k||"ssr"===k);return n.createElement(n.Fragment,null,n.createElement(o.Z,{title:f,description:b,keywords:v,image:u}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[Q]=!h,t))},n.createElement(r.Z,null),n.createElement("div",{className:q},n.createElement("article",null,n.createElement(s.Z,null),Z&&n.createElement(P,{toc:a.toc,minHeadingLevel:p,maxHeadingLevel:E,className:(0,l.Z)(d.kM.docs.docTocMobile,W)}),n.createElement("div",{className:(0,l.Z)(d.kM.docs.docMarkdown,"markdown")},N&&n.createElement("header",null,n.createElement(z.Z,{as:"h1"},f)),n.createElement(a,null)),n.createElement(A,e)),n.createElement(i.Z,{previous:c.previous,next:c.next}))),_&&n.createElement("div",{className:"col col--3"},n.createElement(S,{toc:a.toc,minHeadingLevel:p,maxHeadingLevel:E,className:d.kM.docs.docTocDesktop}))))}},845:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),l=a(7294),i=a(1614),r=a(8746);var s=function(e){var t=e.permalink,a=e.title,n=e.subLabel;return l.createElement(r.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))};var o=function(e){var t=e.previous,a=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(s,(0,n.Z)({},t,{subLabel:l.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.createElement(s,(0,n.Z)({},a,{subLabel:l.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},56:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(7434),i=a(6010);function r(e){var t=e.className,a=(0,l.E6)();return a.badge?n.createElement("span",{className:(0,i.Z)(t,l.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}},6158:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),l=a(6832),i=a(8746),r=a(1614),s=a(5601),o=a(7434),c=a(6010);var d={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function m(e){var t=d[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.className,i=e.versionMetadata,r=(0,l.Z)().siteConfig.title,d=(0,s.useActivePlugin)({failfast:!0}).pluginId,v=(0,o.J)(d).savePreferredVersionName,g=(0,s.useDocVersionSuggestions)(d),h=g.latestDocSuggestion,p=g.latestVersionSuggestion,E=null!=h?h:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,c.Z)(a,o.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(m,{siteTitle:r,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:p.label,to:E.path,onClick:function(){return v(p.name)}})))}function g(e){var t=e.className,a=(0,o.E6)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},9955:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7462),l=a(3366),i=a(7294),r=a(6010),s=a(1614),o=a(7434),c="anchorWithStickyNavbar_mojV",d="anchorWithHideOnScrollNavbar_R0VQ",m=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,l.Z)(e,m),g=(0,o.LU)().navbar.hideOnScroll;return u?i.createElement(a,(0,n.Z)({},v,{className:(0,r.Z)("anchor",(t={},t[d]=g,t[c]=!g,t)),id:u}),v.children,i.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(a,v)}function g(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?i.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):i.createElement(v,(0,n.Z)({as:t},a))}}}]);