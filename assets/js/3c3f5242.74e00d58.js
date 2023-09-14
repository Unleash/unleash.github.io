"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7415],{42874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={id:"webhook",title:"Webhook"},i=void 0,l={unversionedId:"reference/integrations/webhook",id:"reference/integrations/webhook",title:"Webhook",description:"This feature was introduced in Unleash v3.11.0.",source:"@site/docs/reference/integrations/webhook.md",sourceDirName:"reference/integrations",slug:"/reference/integrations/webhook",permalink:"/reference/integrations/webhook",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/integrations/webhook.md",tags:[],version:"current",frontMatter:{id:"webhook",title:"Webhook"},sidebar:"documentation",previous:{title:"Microsoft Teams",permalink:"/reference/integrations/teams"},next:{title:"Unleash concepts",permalink:"/reference/concepts"}},s={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Events",id:"events",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Custom SSL certificates",id:"certificates",level:4}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature was introduced in ",(0,r.kt)("em",{parentName:"p"},"Unleash v3.11.0"),".")),(0,r.kt)("p",null,"The Webhook Integration introduces a generic way to post messages from Unleash to third party services. Unleash allows you to define a webhook which listens changes in Unleash and post them to a third party services."),(0,r.kt)("p",null,"The webhook will perform a single retry if the HTTP POST call fails (either a 50x or network error). Duplicate events may happen, and you should never assume events always comes in order."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h4",{id:"events"},"Events"),(0,r.kt)("p",null,"You can choose to trigger updates for the following events (we might add more event types in the future):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"feature-created"),(0,r.kt)("li",{parentName:"ul"},"feature-updated (*)"),(0,r.kt)("li",{parentName:"ul"},"feature-metadata-updated"),(0,r.kt)("li",{parentName:"ul"},"feature-project-change"),(0,r.kt)("li",{parentName:"ul"},"feature-archived"),(0,r.kt)("li",{parentName:"ul"},"feature-revived"),(0,r.kt)("li",{parentName:"ul"},"feature-strategy-update"),(0,r.kt)("li",{parentName:"ul"},"feature-strategy-add"),(0,r.kt)("li",{parentName:"ul"},"feature-strategy-remove"),(0,r.kt)("li",{parentName:"ul"},"feature-stale-on"),(0,r.kt)("li",{parentName:"ul"},"feature-stale-off"),(0,r.kt)("li",{parentName:"ul"},"feature-environment-enabled"),(0,r.kt)("li",{parentName:"ul"},"feature-environment-disabled")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"*) Deprecated, and will not be used after transition to environments in Unleash v4.3")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"Unleash Webhook integration takes the following parameters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Webhook URL")," This is the only required property. If you are using a Slack Application you must also make sure your application is allowed to post the channel you want to post to."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type")," Used to set the content-type header used when unleash performs an HTTP POST to the defined endpoint."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body template")," Used to override the body template used by Unleash when performing the HTTP POST. You may format you message using a ",(0,r.kt)("a",{parentName:"p",href:"https://mustache.github.io"},"Mustache template"),". You will have the ",(0,r.kt)("a",{parentName:"p",href:"/reference/api/legacy/unleash/admin/events"},"Unleash event format")," available in the rendering context."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mustache"},'{\n  "event": "{{event.type}}",\n  "createdBy": "{{event.createdBy}}",\n  "featureToggle": "{{event.data.name}}",\n  "timestamp": "{{event.data.createdAt}}"\n}\n')),(0,r.kt)("p",null,"If you don't specify anything Unleash will use the ",(0,r.kt)("a",{parentName:"p",href:"/reference/api/legacy/unleash/admin/events"},"Unleash event format"),"."),(0,r.kt)("h4",{id:"certificates"},"Custom SSL certificates"),(0,r.kt)("p",null,"If your webhook endpoint uses a custom SSL certificate,\nyou will need to start Unleash with the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_EXTRA_CA_CERTS")," environment variable set.\nIt needs to point to your custom certificate file in pem format."),(0,r.kt)("p",null,"For more information, see the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#node_extra_ca_certsfile"},"official Node.js documentation on setting extra certificate files"),"."))}c.isMDXComponent=!0}}]);