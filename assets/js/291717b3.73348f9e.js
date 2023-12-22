"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[47076],{99878:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),s=n(86010),r=n(18015),o=n(11614);const i="admonition_LlT9",l="admonitionHeading_tbUL",c="admonitionIcon_kALy",h="admonitionContent_S0QG";var u=n(25108);const d={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},p={secondary:"note",important:"info",success:"tip",warning:"danger"};function g(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),s=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:s}}(e.children);return{...e,title:e.title??t,children:n}}function m(e){const{children:t,type:n,title:o,icon:m}=g(e),f=function(e){const t=p[e]??e;return d[t]||(u.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),d.info)}(n),v=o??f.label,{iconComponent:w}=f,y=m??a.createElement(w,null);return a.createElement("div",{className:(0,s.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${f.infimaClassName}`,i)},a.createElement("div",{className:l},a.createElement("span",{className:c},y),v),a.createElement("div",{className:h},t))}},640:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),s=n(99878);const r=e=>{let{videoUrls:t}=e;return a.createElement("article",{className:"unleash-video-container"},t?t.map((e=>a.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0}))):a.createElement(s.Z,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly."))}},97954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=n(87462),s=(n(67294),n(3905)),r=n(640);const o={title:"Change Requests"},i=void 0,l={unversionedId:"reference/change-requests",id:"reference/change-requests",title:"Change Requests",description:"The change requests feature is an enterprise-only feature that was introduced in Unleash 4.19.0.",source:"@site/docs/reference/change-requests.md",sourceDirName:"reference",slug:"/reference/change-requests",permalink:"/reference/change-requests",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/change-requests.md",tags:[],version:"current",frontMatter:{title:"Change Requests"},sidebar:"documentation",previous:{title:"Banners",permalink:"/reference/banners"},next:{title:"Custom Activation Strategies",permalink:"/reference/custom-activation-strategies"}},c={},h=[{value:"Change request configuration",id:"change-request-configuration",level:2},{value:"Change request flow",id:"change-request-flow",level:2},{value:"Scheduled changes",id:"scheduled-changes",level:3},{value:"Edge cases: what happens when ...?",id:"edge-cases-what-happens-when-",level:4},{value:"Different ways to schedule changes",id:"different-ways-to-schedule-changes",level:4},{value:"Change request permissions",id:"change-request-permissions",level:2},{value:"Circumventing change requests",id:"circumventing-change-requests",level:3},{value:"Change Request for segments",id:"change-request-for-segments",level:2}],u={toc:h};function d(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Availability",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"The change requests feature is an enterprise-only feature that was introduced in ",(0,s.kt)("strong",{parentName:"p"},"Unleash 4.19.0"),".\nThe change requests for segments was introduced in ",(0,s.kt)("strong",{parentName:"p"},"Unleash 5.4.0"),".")),(0,s.kt)(r.Z,{videoUrls:["https://www.youtube.com/embed/ENUqFVcdr-w"],mdxType:"VideoContent"}),(0,s.kt)("p",null,"Feature flagging is a powerful tool, and because it's so powerful, you sometimes need to practice caution. The ability to have complete control over your production environment comes at the cost of the potential to make mistakes in production. Change requests were introduced in version 4.19.0 to alleviate this fear. Change requests allow you to group changes together and apply them to production at the same time, instead of applying changes directly to production. This allows you to make multiple changes to feature toggles and their configuration and status (on/off) all at once, reducing the risk of errors in production."),(0,s.kt)("p",null,"Our goal is developer efficiency, but we also recognize that we have users and customers in highly regulated industries, governed by law and strict requirements. Therefore, we have added a capability to change requests that will allow you to enforce the ",(0,s.kt)("em",{parentName:"p"},"4 eyes principle"),"."),(0,s.kt)("h2",{id:"change-request-configuration"},"Change request configuration"),(0,s.kt)("p",null,"The change request configuration can be set up per project, per environment. This means that you can have different change request configurations for different environments, such as production and development. This is useful because different environments may have different requirements, so you can customize the change request configuration to fit those requirements. However, this also means that you cannot change toggles across projects in the same change request."),(0,s.kt)("p",null,"Currently there are two configuration options for change requests:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Enable change requests")," - This is a boolean value that enables or disables change requests for the project and environment."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Required approvals")," - This is an integer value that indicates how many approvals are required before a change request can be applied. Specific permissions are required to approve and apply change requests.")),(0,s.kt)("p",null,"The change request configuration can be set up in the project settings page:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Change request configuration",src:n(24437).Z,width:"2824",height:"1556"})),(0,s.kt)("h2",{id:"change-request-flow"},"Change request flow"),(0,s.kt)("p",null,"Once a change request flow is configured for a project and environment, you can no longer directly change the status of a toggle. Instead, you will be asked to put your changes into a draft. The change request flow handles the following scenarios:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Updating the status of a toggle in the environment"),(0,s.kt)("li",{parentName:"ul"},"Adding a strategy to the feature toggle in the environment"),(0,s.kt)("li",{parentName:"ul"},"Updating a strategy of a feature toggle in the environment"),(0,s.kt)("li",{parentName:"ul"},"Deleting a strategy from a feature toggle in the environment")),(0,s.kt)("p",null,"The flow can be summarized as follows:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Change request flow",src:n(64621).Z,width:"860",height:"298"})),(0,s.kt)("p",null,"Once a change is added to a draft, the draft needs to be completed before another change request can be opened. The draft is personal to the user that created the change request draft, until it is sent for review. Once changes are added to draft, the user will have a banner in the top of the screen indicating that a draft exists. The state of a change request can be one of the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Draft")," - The change request is in draft mode, and can be edited by the user that created the draft."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"In review")," - The change request is in review mode, and can be edited by the user that created the draft. If editing occurs, all current approvals are revoked"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Approved")," - The change request has been approved by the required number of users."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Scheduled")," - The change request has been scheduled and will be applied at the scheduled time (unless there are conflicts, as described in the section on ",(0,s.kt)("a",{parentName:"li",href:"#scheduled-changes"},"scheduling change requests"),")."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Applied")," - The change request has been applied to the environment. The feature toggle configuration is updated."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Cancelled")," - The change request has been cancelled by the change request author or by an admin."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Rejected")," - The change request has been rejected by the reviewer or by an admin.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Change request banner",src:n(272).Z,width:"2820",height:"1560"})),(0,s.kt)("p",null,"Once a change request is sent to review by the user who created it, it becomes available for everyone in the change request tab in the project."),(0,s.kt)("p",null,"From here, you can navigate to the change request overview page. This page will give you information about the changes the change request contains, the state the change request is in, and what action needs to be taken next."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Change request banner",src:n(69834).Z,width:"2662",height:"1462"})),(0,s.kt)("p",null,"From here, if you have the correct permissions, you can approve and schedule or apply the change request. Once applied, the changes will be live in production."),(0,s.kt)("h3",{id:"scheduled-changes"},"Scheduled changes"),(0,s.kt)("admonition",{title:"Availability",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Change request scheduling is currently in development and will be released in an upcoming version of Unleash. How the feature works (and as such, the contents of this subsection) can change before the feature is released.")),(0,s.kt)("p",null,"When a change request is approved, you can schedule it to be applied at a later time. This allows you to group changes together and apply them at a time that is convenient for you, such as during a maintenance window, or at a time when you know there will be less traffic to your application."),(0,s.kt)("p",null,"Scheduled changes can be rescheduled, applied immediately, or rejected. They can not be edited or moved back to any of the previous states."),(0,s.kt)("p",null,"Unleash will attempt to apply the changes at the scheduled time. However, if there are conflicts, the changes will not be applied and the change request will be marked as failed. Conflicts will occur if the change request contains changes that affect a flag that has been archived or a strategy that has been deleted."),(0,s.kt)("p",null,"Be aware that if a strategy or variants affected by a scheduled change request are updated after the change request was scheduled, the application of the scheduled change request will overwrite those changes with the state in the scheduled change request."),(0,s.kt)("p",null,"Unleash will warn you ahead of time if you make changes that conflict with a scheduled change request."),(0,s.kt)("p",null,"If Unleash fails to apply a scheduled change request, the change request will remain in the scheduled state. You can reschedule it and try to apply it again later, or you can reject it."),(0,s.kt)("p",null,"If a scheduled change request can not be applied, Unleash will send a notification to the person who scheduled it and to the person who created the change request."),(0,s.kt)("p",null,"When a scheduled change request is applied, the person who scheduled it and the person who created it will each receive a notification."),(0,s.kt)("h4",{id:"edge-cases-what-happens-when-"},"Edge cases: what happens when ...?"),(0,s.kt)("p",null,"If the user who scheduled a change request is deleted from the Unleash users list before the scheduled time, the changes will ",(0,s.kt)("strong",{parentName:"p"},"not")," be applied."),(0,s.kt)("p",null,"If a change request has been scheduled and change requests are then disabled for the project and environment, the change request ",(0,s.kt)("strong",{parentName:"p"},"will still be applied")," according to schedule. To prevent this, you can reject the scheduled change request."),(0,s.kt)("h4",{id:"different-ways-to-schedule-changes"},"Different ways to schedule changes"),(0,s.kt)("p",null,"Unleash currently offers two distinct ways to schedule changes. Each method has its own pros and cons, and you can also combine the methods for maximum flexibility."),(0,s.kt)("p",null,"The first method is through scheduled change requests, as we have explained in the preceding sections. Scheduled change requests make it easy to see all the changes across multiple flags and strategies in one view and makes it easy to reschedule or reject them. However, because scheduled changes rely on flags and strategy configurations, conflicts can arise causing the schedule to fail."),(0,s.kt)("p",null,"The second method uses Unleash's ",(0,s.kt)("a",{parentName:"p",href:"/reference/strategy-constraints"},"constraints")," and the ",(0,s.kt)("a",{parentName:"p",href:"/reference/strategy-constraints#date-and-time-operators"},"DATE_AFTER operator")," to encode when changes should take effect. The pros of this method is that because these changes can be applied immediately, you won't run into any conflicts when they happen. The cons are that you'll need to apply the same constraints to all the parts that you want to change and that there is no easy way to see all the changes in one view. You also can not scheduled changes to a segment in this way. When using this option, we recommend that you use ",(0,s.kt)("a",{parentName:"p",href:"/reference/segments"},"segments")," if you want to schedule multiple changes, so that their application time stays in sync."),(0,s.kt)("p",null,"Another important distinction is how these changes affect your connected SDKs. If you use constraints (or segments), then any connected SDK will be aware of the schedule ahead of time. That means that even if the SDK can not connect to Unleash at the scheduled time, it will still activate the changes because it's encoded in its constraints. On the other hand, if you use change requests to schedule changes, SDKs ",(0,s.kt)("strong",{parentName:"p"},"must")," update their configuration after the scheduled time to be aware of the changes."),(0,s.kt)("h2",{id:"change-request-permissions"},"Change request permissions"),(0,s.kt)("p",null,"Change requests have their own set of environment-specific permissions that can be applied to ",(0,s.kt)("a",{parentName:"p",href:"/reference/rbac#custom-project-roles"},"custom project roles"),". These permissions let users"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"approve/reject change requests"),(0,s.kt)("li",{parentName:"ul"},"apply change requests"),(0,s.kt)("li",{parentName:"ul"},"skip the change request flow")),(0,s.kt)("p",null,'None of the predefined roles have any change request permissions, so you must create your own project roles to take advantage of change requests. In other words, even a user with the project "owner" role can not approve or apply change requests.'),(0,s.kt)("p",null,"There is no permission to create change requests: ",(0,s.kt)("strong",{parentName:"p"},"Anyone can create change requests"),", even Unleash users with the ",(0,s.kt)("a",{parentName:"p",href:"/reference/rbac#predefined-roles"},"root viewer role"),". Change requests don't cause any changes until approved and applied by someone with the correct permissions."),(0,s.kt)("p",null,"You can prevent non-project members from submitting change requests by setting a ",(0,s.kt)("a",{parentName:"p",href:"/reference/project-collaboration-mode"},"protected project collaboration mode"),"."),(0,s.kt)("h3",{id:"circumventing-change-requests"},"Circumventing change requests"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"skip change requests")," permission allows users to bypass the change request flow. Users with this permission can change feature toggles directly (they are of course still limited by any other permissions they have)."),(0,s.kt)("p",null,"The skip change requests permission was designed to make it possible to quickly turn something off in the event that a feature release didn't go as expected or was causing issues."),(0,s.kt)("p",null,"The skip change requests permission does ",(0,s.kt)("strong",{parentName:"p"},"not")," grant any other permissions, so to be allowed to do things as enabling/disabling a toggle, the user will still need the explicit permissions to do that too."),(0,s.kt)("p",null,"In the UI non-admin users with ",(0,s.kt)("strong",{parentName:"p"},"skip change requests")," permission and explicit permission to perform the actual action will be able to make changes directly without change requests."),(0,s.kt)("p",null,"Admin users will always see the change request UI so that they can test the change request flow. Admin users can however self-approve and self-apply their own changes."),(0,s.kt)("h2",{id:"change-request-for-segments"},"Change Request for segments"),(0,s.kt)("p",null,"Changes to project ",(0,s.kt)("a",{parentName:"p",href:"/reference/segments"},"segments")," (as opposed to global segments) also go through the change request process. This is to prevent a backdoor in the change request process."),(0,s.kt)("p",null,"Since projects segments are not environment specific and change requests are always environment specific we allow to attach segment change to any environment with change requests enabled.\nWhen you make changes though the Change Request UI it will automatically select first environment with change requests enabled, giving priority to ",(0,s.kt)("a",{parentName:"p",href:"/reference/environments#environment-types"},"production")," environments."),(0,s.kt)("p",null,"Changes to segments can be only circumvented by admin users through the API calls."))}d.isMDXComponent=!0},272:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/change-request-banner-2ba7c0600023da57b83d84a29d8f7c91.png"},24437:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/change-request-configuration-cb767d3b52b8d0774abc54cb9dacdef3.png"},64621:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/change-request-flow-5efa1df4af9586874136db1d0f540e4a.png"},69834:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/change-request-overview-99ce5d3fac53f350c5e97c137d7f1865.png"}}]);