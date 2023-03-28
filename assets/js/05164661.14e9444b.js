"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9519],{89282:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(67294),i=n(86010),s=n(18015),o=n(11614);const r="admonition_LlT9",l="admonitionHeading_tbUL",m="admonitionIcon_kALy",c="admonitionContent_S0QG";var d=n(25108);const u={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},p={secondary:"note",important:"info",success:"tip",warning:"danger"};function g(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),i=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:i}}(e.children);return{...e,title:e.title??t,children:n}}function h(e){const{children:t,type:n,title:o,icon:h}=g(e),f=function(e){const t=p[e]??e;return u[t]||(d.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),u.info)}(n),v=o??f.label,{iconComponent:y}=f,k=h??a.createElement(y,null);return a.createElement("div",{className:(0,i.Z)(s.k.common.admonition,s.k.common.admonitionType(e.type),"alert",`alert--${f.infimaClassName}`,r)},a.createElement("div",{className:l},a.createElement("span",{className:m},k),v),a.createElement("div",{className:c},t))}},640:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(89282);const s={tip:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16",ariaHidden:"true"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},o=e=>{let{title:t="video content",videoUrls:n,children:o}=e;return a.createElement("article",{className:"unleash-video-container"},a.createElement(i.Z,{icon:s.tip,title:t,type:"note"},o),a.createElement("div",{className:"videos"},n?n.map((e=>a.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0}))):a.createElement(i.Z,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly.")))}},13592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),s=n(640);const o={title:"Segments"},r=void 0,l={unversionedId:"reference/segments",id:"reference/segments",title:"Segments",description:"Segments are available to Unleash Pro and Unleash Enterprise users since Unleash 4.13.",source:"@site/docs/reference/segments.mdx",sourceDirName:"reference",slug:"/reference/segments",permalink:"/reference/segments",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/segments.mdx",tags:[],version:"current",frontMatter:{title:"Segments"},sidebar:"documentation",previous:{title:"Role-based Access control",permalink:"/reference/rbac"},next:{title:"Service accounts",permalink:"/reference/service-accounts"}},m={},c=[{value:"Structure and evaluation",id:"structure-and-evaluation",level:2},{value:"Segment limits",id:"segment-limits",level:2},{value:"A note on large segments",id:"large-segments",level:3},{value:"Creating, updating, and deleting segments",id:"creating-updating-and-deleting-segments",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Availability",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Segments are available to Unleash Pro and Unleash Enterprise users since ",(0,i.kt)("strong",{parentName:"p"},"Unleash 4.13"),".")),(0,i.kt)(s.Z,{videoUrls:["https://www.youtube.com/embed/LWMCCFcRic0"],mdxType:"VideoContent"},(0,i.kt)("p",null,"Want a quick overview of what segments are and what they're used for? Well, then you're in luck: we've got this short segment explainer video to help you out \ud83d\udcfd\ufe0f")),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"segment")," is a reusable collection of ",(0,i.kt)("a",{parentName:"p",href:"/reference/strategy-constraints"},"strategy constraints"),". Like with strategy constraints, you apply segments to ",(0,i.kt)("a",{parentName:"p",href:"/reference/activation-strategies"},"feature toggle activation strategies"),"."),(0,i.kt)("p",null,"You can apply the same segment to multiple activation strategies. If you update the segment, the changes will affect every strategy that uses that segment."),(0,i.kt)("p",null,"Segments let you create user groups based on data available in the Unleash context. These groups can be as simple or as complex as you want to make them. You could, for example, use segments to target:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users in a specific region"),(0,i.kt)("li",{parentName:"ul"},"Users on a specific device type"),(0,i.kt)("li",{parentName:"ul"},"Users who signed up before a specific point in time"),(0,i.kt)("li",{parentName:"ul"},"... Or any combination of the above.")),(0,i.kt)("p",null,"Because segments stay in sync across strategies, any changes will propagate to all the activation strategies that use them. This also makes them ideal for use cases such as activating or deactivating multiple feature toggles at the same time. In other words, you can use segments to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"release one or more new features at a specified time"),(0,i.kt)("li",{parentName:"ul"},"create events with start and end times and guarantee that features will only be active during that period")),(0,i.kt)("h2",{id:"structure-and-evaluation"},"Structure and evaluation"),(0,i.kt)("p",null,"Segments are collections of strategy constraints. To satisfy a segment, ",(0,i.kt)("em",{parentName:"p"},"all")," the constraints in the collection must be satisfied."),(0,i.kt)("p",null,"If an activation strategy has a segment ",(0,i.kt)("em",{parentName:"p"},"and")," additional constraints applied, the segment ",(0,i.kt)("em",{parentName:"p"},"and")," the strategies must all be satisfied. Similarly, if an activation strategy has multiple segments, then they must ",(0,i.kt)("em",{parentName:"p"},"must all be satisfied"),"."),(0,i.kt)("h2",{id:"segment-limits"},"Segment limits"),(0,i.kt)("p",null,"In theory, you could create segments with a thousand constraints, each with a million values. But this wouldn't scale well, so there are limitations in place to stop you from doing this. Unleash enforces the following limits on use of segments:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By default, a segment can have ",(0,i.kt)("strong",{parentName:"p"},"at most 100 values")," specified across all of its constraints. That means that if you add a constraint that uses 10 values, you will have 90 more values to use for any other constraints you add to the same segment.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By default, you can apply ",(0,i.kt)("strong",{parentName:"p"},"at most 5 segments to any one strategy"),". Separate strategies (even on the same feature) do not count towards the same total, so you can have two strategies with 5 segments each."))),(0,i.kt)("p",null,"You ",(0,i.kt)("strong",{parentName:"p"},"can")," ",(0,i.kt)("a",{parentName:"p",href:"/reference/deploy/configuring-unleash#segments"},"configure segment limits")," with environment variables."),(0,i.kt)("h3",{id:"large-segments"},"A note on large segments"),(0,i.kt)("p",null,"Segments are just constraints, so any limitations that apply to constraints also apply to segments."),(0,i.kt)("p",null,"This means that if you want to add a hundred different user IDs to one of your constraints, you are most likely better off thinking about finding another way to solve this problem. That may be using a different abstraction or finding another pattern that you can use instead. Refer to the section on ",(0,i.kt)("a",{parentName:"p",href:"/reference/strategy-constraints#limitations"},"constraint limitations")," for a more thorough explanation."),(0,i.kt)("h2",{id:"creating-updating-and-deleting-segments"},"Creating, updating, and deleting segments"),(0,i.kt)("p",null,"Segments can be created, edited, and deleted from the segments page in the admin UI or via the API (see the ",(0,i.kt)("a",{parentName:"p",href:"/reference/api/legacy/unleash/admin/segments"},"segments API documentation"),")."),(0,i.kt)("p",null,"A segment that is in use ",(0,i.kt)("strong",{parentName:"p"},"cannot")," be deleted. If you'd like to delete a segment that is in use, you must first remove the segment from all the activation strategies that are currently using it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The Segments page, listing two existing segments: &quot;Mobile users&quot; and &quot;Users in the APAC region&quot;. The navigation menu with the Segments page link is opened and highlighted to provide navigation help.",src:n(37100).Z,width:"1366",height:"520"})))}u.isMDXComponent=!0},37100:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/segments-page-573c2af328e63dd7fafaf89b7fc73544.png"}}]);