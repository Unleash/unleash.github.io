"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5613],{17604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={id:"slack",title:"Slack (deprecated)"},l=void 0,i={unversionedId:"reference/integrations/slack",id:"reference/integrations/slack",title:"Slack (deprecated)",description:"This Slack integration is deprecated and will be removed in a future release. We recommend using the new Slack App integration instead.",source:"@site/docs/reference/integrations/slack.md",sourceDirName:"reference/integrations",slug:"/reference/integrations/slack",permalink:"/reference/integrations/slack",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/integrations/slack.md",tags:[],version:"current",frontMatter:{id:"slack",title:"Slack (deprecated)"},sidebar:"documentation",previous:{title:"Slack App",permalink:"/reference/integrations/slack-app"},next:{title:"Microsoft Teams",permalink:"/reference/integrations/teams"}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Events",id:"events",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Global configuration",id:"global-configuration",level:4},{value:"Tags",id:"tags",level:4}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Deprecation notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This Slack integration is deprecated and will be removed in a future release. We recommend using the new ",(0,r.kt)("a",{parentName:"p",href:"/reference/integrations/slack-app"},"Slack App")," integration instead.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature was introduced in ",(0,r.kt)("em",{parentName:"p"},"Unleash v3.11.0"),".")),(0,r.kt)("p",null,"The Slack integration allows Unleash to post Updates when a feature toggle is updated. To set up Slack, you need to configure an incoming Slack webhook URL. You can follow ",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/incoming-webhooks"},"Sending messages using Incoming Webhooks")," on how to do that. You can also choose to ",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/apps"},"create a slack app for Unleash"),", which will provide you with additional functionality to control how Unleash communicates messages on your Slack workspace."),(0,r.kt)("p",null,"The Slack integration will perform a single retry if the HTTP POST against the Slack Webhook URL fails (either a 50x or network error). Duplicate events may happen. You should never assume events always comes in order."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h4",{id:"events"},"Events"),(0,r.kt)("p",null,"You can choose to trigger updates for the following events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"feature-created"),(0,r.kt)("li",{parentName:"ul"},"feature-updated (*)"),(0,r.kt)("li",{parentName:"ul"},"feature-metadata-updated"),(0,r.kt)("li",{parentName:"ul"},"feature-project-change"),(0,r.kt)("li",{parentName:"ul"},"feature-archived"),(0,r.kt)("li",{parentName:"ul"},"feature-revived"),(0,r.kt)("li",{parentName:"ul"},"feature-strategy-update"),(0,r.kt)("li",{parentName:"ul"},"feature-strategy-add"),(0,r.kt)("li",{parentName:"ul"},"feature-strategy-remove"),(0,r.kt)("li",{parentName:"ul"},"feature-stale-on"),(0,r.kt)("li",{parentName:"ul"},"feature-stale-off"),(0,r.kt)("li",{parentName:"ul"},"feature-environment-enabled"),(0,r.kt)("li",{parentName:"ul"},"feature-environment-disabled")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"*) Deprecated, and will not be used after transition to environments in Unleash v4.3")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"Unleash Slack integration takes the following parameters."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Slack Webhook URL")," - This is the only required property. If you are using a Slack Application you must also make sure your application is allowed to post to the channel you want to post to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - Used to override the username used to post the update to a Slack channel."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Emoji Icon")," - Used to override the emoji icon used to post the update to a Slack channel."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default channel")," - Where to post the message if the feature toggles has not overridden the channel via the slack tags.")),(0,r.kt)("h4",{id:"global-configuration"},"Global configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unleash URL")," - The slack plugin uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"server.unleashUrl")," property to create the link back to Unleash in the posts. This can be set using the ",(0,r.kt)("strong",{parentName:"li"},"UNLEASH_URL")," environment variable or the ",(0,r.kt)("inlineCode",{parentName:"li"},"server.unleashUrl")," property when starting the server from node.")),(0,r.kt)("h4",{id:"tags"},"Tags"),(0,r.kt)("p",null,'The Slack integration also defined the Tag type "slack". You may use this tag to override which Slack channel Unleash should post updates to for this feature toggle.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Slack Tags",src:a(23991).Z,width:"1366",height:"789"})),(0,r.kt)("p",null,'In the picture you can see we have defined two slack tags for the "new-payment-system" toggle. In this example Unleash will post updates to the ',(0,r.kt)("strong",{parentName:"p"},"#notifications")," and ",(0,r.kt)("strong",{parentName:"p"},"#random")," channel."))}u.isMDXComponent=!0},23991:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/slack-addon-tags-c8dcbfdc838e3ea8f4e6ac49cc871e2e.png"}}]);