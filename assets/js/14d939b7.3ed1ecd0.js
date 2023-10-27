"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[99100],{23473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"datadog",title:"Datadog"},i=void 0,l={unversionedId:"reference/integrations/datadog",id:"reference/integrations/datadog",title:"Datadog",description:"This feature was introduced in Unleash v4.0.0.",source:"@site/docs/reference/integrations/datadog.md",sourceDirName:"reference/integrations",slug:"/reference/integrations/datadog",permalink:"/reference/integrations/datadog",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/integrations/datadog.md",tags:[],version:"current",frontMatter:{id:"datadog",title:"Datadog"},sidebar:"documentation",previous:{title:"Integrations",permalink:"/reference/integrations/"},next:{title:"Jira Server Integration - Installation",permalink:"/reference/integrations/jira-server-plugin-installation"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Events",id:"events",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Tags",id:"tags",level:4}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature was introduced in ",(0,r.kt)("em",{parentName:"p"},"Unleash v4.0.0"),".")),(0,r.kt)("p",null,"The Datadog integration allows Unleash to post Updates to Datadog when a feature toggle is updated. To set up this integration, you need to set up a webhook connector for your channel. You can follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/api/latest/events/#post-an-event"},"Submitting events to Datadog")," on how to do that."),(0,r.kt)("p",null,"The Datadog integration will perform a single retry if the HTTP POST against the Datadog Webhook URL fails (either a 50x or network error). Duplicate events may happen, and you should never assume events always comes in order."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h4",{id:"events"},"Events"),(0,r.kt)("p",null,"You can choose to trigger updates for the following events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"feature-created"),(0,r.kt)("li",{parentName:"ul"},"feature-updated (*)"),(0,r.kt)("li",{parentName:"ul"},"feature-metadata-updated"),(0,r.kt)("li",{parentName:"ul"},"feature-project-change"),(0,r.kt)("li",{parentName:"ul"},"feature-archived"),(0,r.kt)("li",{parentName:"ul"},"feature-revived"),(0,r.kt)("li",{parentName:"ul"},"feature-strategy-update"),(0,r.kt)("li",{parentName:"ul"},"feature-strategy-add"),(0,r.kt)("li",{parentName:"ul"},"feature-strategy-remove"),(0,r.kt)("li",{parentName:"ul"},"feature-stale-on"),(0,r.kt)("li",{parentName:"ul"},"feature-stale-off"),(0,r.kt)("li",{parentName:"ul"},"feature-environment-enabled"),(0,r.kt)("li",{parentName:"ul"},"feature-environment-disabled"),(0,r.kt)("li",{parentName:"ul"},"feature-environment-variants-updated"),(0,r.kt)("li",{parentName:"ul"},"feature-potentially-stale-on")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"*) Deprecated, and will not be used after transition to environments in Unleash v4.3")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"Unleash Datadog integration takes the following parameters."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Datadog Events URL")," - This is an optional property. The default URL is ",(0,r.kt)("a",{parentName:"li",href:"https://api.datadoghq.com/api/v1/events"},"https://api.datadoghq.com/api/v1/events"),". If you are not not using the US1 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.datadoghq.com/getting_started/site/"},"Datadog site"),", you'll need to change this. Some instances and their URLs are:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"EU: ",(0,r.kt)("a",{parentName:"li",href:"https://app.datadoghq.eu/api/v1/events"},"https://app.datadoghq.eu/api/v1/events")),(0,r.kt)("li",{parentName:"ul"},"US1: ",(0,r.kt)("a",{parentName:"li",href:"https://app.datadoghq.com/api/v1/events"},"https://app.datadoghq.com/api/v1/events")),(0,r.kt)("li",{parentName:"ul"},"US3: ",(0,r.kt)("a",{parentName:"li",href:"https://us3.datadoghq.com/api/v1/events"},"https://us3.datadoghq.com/api/v1/events")),(0,r.kt)("li",{parentName:"ul"},"US1-FED: ",(0,r.kt)("a",{parentName:"li",href:"https://app.ddog-gov.com/api/v1/events"},"https://app.ddog-gov.com/api/v1/events"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Datadog API key")," - This is a required property. The API key to use to authenticate with Datadog.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Datadog Source Type Name")," - This is an optional property. Sets ",(0,r.kt)("inlineCode",{parentName:"p"},"source_type_name")," parameter to be included in Datadog events.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Extra HTTP Headers")," - This is an optional property. Used to set the additional headers when Unleash communicates with Datadog."))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SOME_CUSTOM_HTTP_HEADER": "SOME_VALUE",\n  "SOME_OTHER_CUSTOM_HTTP_HEADER": "SOME_OTHER_VALUE"\n}\n')),(0,r.kt)("admonition",{title:"Body template availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The body template property will be introduced as a beta feature in Unleash 5.5 and is expected to be made generally available in Unleash 5.6.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Body template")," - This is an optional property. The template is used to override the body template used by Unleash when performing the HTTP POST. You can format your message using a ",(0,r.kt)("a",{parentName:"li",href:"https://mustache.github.io"},"Mustache template"),". Refer to the ",(0,r.kt)("a",{parentName:"li",href:"/reference/event-types"},"Unleash event types")," reference to find out which event properties you have access to in the template.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mustache"},'{\n  "event": "{{event.type}}",\n  "createdBy": "{{event.createdBy}}",\n  "featureToggle": "{{event.data.name}}",\n  "timestamp": "{{event.data.createdAt}}"\n}\n')),(0,r.kt)("p",null,"If you don't specify anything Unleash will send a formatted markdown body."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"username created feature toggle (featurename)[http://your.url/projects/projectname/features/featurename] in project *projectname*\n")),(0,r.kt)("h4",{id:"tags"},"Tags"),(0,r.kt)("p",null,"Datadog's incoming webhooks are app specific. You will be able to create multiple integrations to support messaging on different apps."))}u.isMDXComponent=!0}}]);