"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7076],{97954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=n(87462),r=(n(67294),n(3905));const s={title:"Change requests"},i=void 0,o={unversionedId:"reference/change-requests",id:"reference/change-requests",title:"Change requests",description:"The change requests feature is an enterprise-only feature that was introduced in Unleash 4.19.0.",source:"@site/docs/reference/change-requests.md",sourceDirName:"reference",slug:"/reference/change-requests",permalink:"/reference/change-requests",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/change-requests.md",tags:[],version:"current",frontMatter:{title:"Change requests"},sidebar:"documentation",previous:{title:"Unleash Proxy",permalink:"/reference/unleash-proxy"},next:{title:"Developer contribution docs",permalink:"/developer-guide"}},u={},h=[{value:"Change request configuration",id:"change-request-configuration",level:2},{value:"Change request flow",id:"change-request-flow",level:2},{value:"Change request permissions",id:"change-request-permissions",level:2},{value:"Circumventing change requests",id:"circumventing-change-requests",level:3}],l={toc:h};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The change requests feature is an enterprise-only feature that was introduced in ",(0,r.kt)("strong",{parentName:"p"},"Unleash 4.19.0"),".")),(0,r.kt)("p",null,"Feature flagging is a powerful tool, and because it's so powerful, you sometimes need to practice caution. The ability to have complete control over your production environment comes at the cost of the potential to make mistakes in production. Change requests were introduced in version 4.19.0 to alleviate this fear. Change requests allow you to group changes together and apply them to production at the same time, instead of applying changes directly to production. This allows you to make multiple changes to feature toggles and their configuration and status (on/off) all at once, reducing the risk of errors in production."),(0,r.kt)("p",null,"Our goal is developer effeciency, but we also recognize that we have users and customers in highly regulated industries, governed by law and strict requirements. Therefore, we have added a capability to change requests that will allow you to enforce the ",(0,r.kt)("em",{parentName:"p"},"4 eyes principle"),"."),(0,r.kt)("h2",{id:"change-request-configuration"},"Change request configuration"),(0,r.kt)("p",null,"The change request configuration can be set up per project, per environment. This means that you can have different change request configurations for different environments, such as production and development. This is useful because different environments may have different requirements, so you can customize the change request configuration to fit those requirements. However, this also means that you cannot change toggles across projects in the same change request."),(0,r.kt)("p",null,"Currently there are two configuration options for change requests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable change requests")," - This is a boolean value that enables or disables change requests for the project and environment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Required approvals")," - This is an integer value that indicates how many approvals are required before a change request can be applied. Specific permissions are required to approve and apply change requests.")),(0,r.kt)("p",null,"The change request configuration can be set up in the project settings page: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Change request configuration",src:n(24437).Z,width:"2824",height:"1556"})),(0,r.kt)("h2",{id:"change-request-flow"},"Change request flow"),(0,r.kt)("p",null,"Once a change request flow is configured for a project and environment, you can no longer directly change the status of a toggle. Instead, you will be asked to put your changes into a draft. The change request flow handles the following scenarios: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updating the status of a toggle in the environment"),(0,r.kt)("li",{parentName:"ul"},"Adding a strategy to the feature toggle in the environment"),(0,r.kt)("li",{parentName:"ul"},"Updating a strategy of a feature toggle in the environment"),(0,r.kt)("li",{parentName:"ul"},"Deleting a strategy from a feature toggle in the environment")),(0,r.kt)("p",null,"The flow can be summarized as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Change request flow",src:n(64621).Z,width:"860",height:"298"})),(0,r.kt)("p",null,"Once a change is added to a draft, the draft needs to be completed before another change request can be opened. The draft is personal to the user that created the change request draft, until it is sent for review. Once changes are added to draft, the user will have a banner in the top of the screen indicating that a draft exists. The state of a change request can be one of the following: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Draft")," - The change request is in draft mode, and can be edited by the user that created the draft."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"In review")," - The change request is in review mode, and can be edited by the user that created the draft. If editing ocurrs, all current approvals are revoked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Approved")," - The change request has been approved by the required number of users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Applied")," - The change request has been applied to the environment. The feature toggle configuration is updated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cancelled")," - The change request has been cancelled by the user/admin.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Change request banner",src:n(272).Z,width:"2820",height:"1560"})),(0,r.kt)("p",null,"Once a change request is sent to review by the user who created it, it becomes available for everyone in the change request tab in the project. "),(0,r.kt)("p",null,"From here, you can navigate to the change request overview page. This page will give you information about the changes the change request contains, the state the change request is in, and what action needs to be taken next."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Change request banner",src:n(69834).Z,width:"2662",height:"1462"})),(0,r.kt)("p",null,"From here, if you have the correct permissions, you can approve and apply the change request. Once applied the changes will be live in production."),(0,r.kt)("h2",{id:"change-request-permissions"},"Change request permissions"),(0,r.kt)("p",null,"As a result of adding change requests, we have added three new environment specific permissions: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Approve change request"),(0,r.kt)("li",{parentName:"ul"},"Apply change request"),(0,r.kt)("li",{parentName:"ul"},"Skip change request")),(0,r.kt)("p",null,"These permisssions can be used to compose ",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-create-and-assign-custom-project-roles"},"project roles"),"."),(0,r.kt)("p",null,"Once you have created a custom project role that has the correct permissions, you can assign it to a user or group of users in the project settings access section. These users will then assume permissions according to the role they have been assigned."),(0,r.kt)("h3",{id:"circumventing-change-requests"},"Circumventing change requests"),(0,r.kt)("p",null,"In the event that you need API access to directly turn something off without going through the change request procedure, you can leverage the skip change request permission. The holder of this permission can bypass the change request procedure and directly change the feature toggle configuration, depending on the other permissions they have. The skip change request permission is only valid for circumventing the change request flow, you still need to explicitly grant the user the permissions for the actions you'd like to perform. IE: Changing a toggle status in an environment, or adding a strategy to a toggle in an environment."))}c.isMDXComponent=!0},272:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/change-request-banner-2ba7c0600023da57b83d84a29d8f7c91.png"},24437:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/change-request-configuration-cb767d3b52b8d0774abc54cb9dacdef3.png"},64621:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/change-request-flow-5658ef786f8e59a0ecef174500751918.png"},69834:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/change-request-overview-99ce5d3fac53f350c5e97c137d7f1865.png"}}]);