"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1185],{733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const r={id:"teams",title:"Microsoft Teams"},s=void 0,l={unversionedId:"reference/addons/teams",id:"reference/addons/teams",title:"Microsoft Teams",description:"This feature was introduced in Unleash v4.0.0.",source:"@site/docs/reference/addons/teams.md",sourceDirName:"reference/addons",slug:"/reference/addons/teams",permalink:"/reference/addons/teams",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/addons/teams.md",tags:[],version:"current",frontMatter:{id:"teams",title:"Microsoft Teams"},sidebar:"documentation",previous:{title:"Slack",permalink:"/reference/addons/slack"},next:{title:"Webhook",permalink:"/reference/addons/webhook"}},i={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Events",id:"events",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Tags",id:"tags",level:4}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This feature was introduced in ",(0,o.kt)("em",{parentName:"p"},"Unleash v4.0.0"),".")),(0,o.kt)("p",null,"The MicrosoftTeams addon allows Unleash to post Updates when a feature toggle is updated. To set up this addon, you need to set up a webhook connector for your channel. You can follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook"},"Creating an Incoming Webhook for a channel")," on how to do that."),(0,o.kt)("p",null,"The Microsoft Teams addon will perform a single retry if the HTTP POST against the Microsoft Teams Webhook URL fails (either a 50x or network error). Duplicate events may happen, and you should never assume events always comes in order."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"events"},"Events"),(0,o.kt)("p",null,"You can choose to trigger updates for the following events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"feature-created"),(0,o.kt)("li",{parentName:"ul"},"feature-updated (*)"),(0,o.kt)("li",{parentName:"ul"},"feature-metadata-updated"),(0,o.kt)("li",{parentName:"ul"},"feature-project-change"),(0,o.kt)("li",{parentName:"ul"},"feature-archived"),(0,o.kt)("li",{parentName:"ul"},"feature-revived"),(0,o.kt)("li",{parentName:"ul"},"feature-strategy-update"),(0,o.kt)("li",{parentName:"ul"},"feature-strategy-add"),(0,o.kt)("li",{parentName:"ul"},"feature-strategy-remove"),(0,o.kt)("li",{parentName:"ul"},"feature-stale-on"),(0,o.kt)("li",{parentName:"ul"},"feature-stale-off"),(0,o.kt)("li",{parentName:"ul"},"feature-environment-enabled"),(0,o.kt)("li",{parentName:"ul"},"feature-environment-disabled")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"*) Deprecated, and will not be used after transition to environments in Unleash v4.3")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"Unleash Microsoft Teams addon takes the following parameters."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Microsoft Teams Webhook URL")," - This is the only required property.")),(0,o.kt)("h4",{id:"tags"},"Tags"),(0,o.kt)("p",null,"Microsoft teams's incoming webhooks are channel specific. You will be able to create multiple addons to support messaging on multiple channels."))}m.isMDXComponent=!0}}]);