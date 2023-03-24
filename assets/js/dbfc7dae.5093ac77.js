"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[971],{46469:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(51402);const i=e=>{let{img:t,alt:a,caption:i}=e;return n.createElement("figure",null,n.createElement("img",{alt:a,src:(0,r.Z)(t)}),n.createElement("figcaption",null,i))}},74459:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(46469);const s={title:"Network view"},o=void 0,l={unversionedId:"reference/network-view",id:"reference/network-view",title:"Network view",description:"The network view was released in Unleash 4.21. It is available to Pro and Enterprise users.",source:"@site/docs/reference/network-view.mdx",sourceDirName:"reference",slug:"/reference/network-view",permalink:"/reference/network-view",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/network-view.mdx",tags:[],version:"current",frontMatter:{title:"Network view"},sidebar:"documentation",previous:{title:"Maintenance Mode",permalink:"/reference/maintenance-mode"},next:{title:"Notifications",permalink:"/reference/notifications"}},h={},p=[{value:"Applications",id:"applications",level:2},{value:"&quot;unknown&quot; applications",id:"unknown-applications",level:3},{value:"Network overview",id:"network-overview",level:2},{value:"Network traffic",id:"network-traffic",level:2},{value:"Data source",id:"data-source",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The network view was released in Unleash 4.21. It is available to Pro and Enterprise users."),(0,r.kt)("p",{parentName:"admonition"},"You must configure the ",(0,r.kt)("a",{parentName:"p",href:"#data-source"},"data source")," to activate the feature.")),(0,r.kt)("p",null,"The Unleash admin UI contains a ",(0,r.kt)("strong",{parentName:"p"},"network view")," as part of the admin configuration pages. This network view was designed to give you an overview and understanding of incoming requests to your Unleash instance. It makes it possible to pinpoint sources of sudden request surges, and can therefore also help you identify issues with SDK setups",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("p",null,"The network view offers two different visualizations of the same data, known as the ",(0,r.kt)("a",{parentName:"p",href:"#network-overview"},"network overview")," and the ",(0,r.kt)("a",{parentName:"p",href:"#network-traffic"},"network traffic")," views."),(0,r.kt)("p",null,"Because Unleash doesn't store this kind of data itself, the network view requires you to configure an ",(0,r.kt)("a",{parentName:"p",href:"#data-source"},"external data source")," for the network overview to work. The network view is only available if you tell Unleash where it can find the data (refer to the ",(0,r.kt)("a",{parentName:"p",href:"#data-source"},"data source section"),")."),(0,r.kt)("p",null,"The network view is intended to provide a simple and Unleash-centric overview that serves basic use cases. If you need detailed metrics and connection graphs, you may be better off using specialized network monitoring tools."),(0,r.kt)("h2",{id:"applications"},"Applications"),(0,r.kt)("p",null,"Both the network overview and the network traffic diagrams show you ",(0,r.kt)("strong",{parentName:"p"},"applications")," that have made requests to the Unleash instance. An ",(0,r.kt)("strong",{parentName:"p"},"application")," is defined as anything that sends requests to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/api/unleash/client"},"Unleash client API"),", the ",(0,r.kt)("a",{parentName:"p",href:"/reference/front-end-api"},"Unleash front-end API"),",  the Unleash admin API, or any other API that Unleash exposes. This includes ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/"},"Unleash SDKs"),", ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-edge"},"Unleash Edge"),", the ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash proxy"),", and even the admin UI."),(0,r.kt)("h3",{id:"unknown-applications"},'"unknown" applications'),(0,r.kt)("p",null,'Requests that come from Unleash SDKs and other official Unleash applications will always have an application name defined. But you might sometimes see some applications listed as "unknown" in the diagrams.'),(0,r.kt)("p",null,"This happens when Unleash receives requests that don't contain an application name header (",(0,r.kt)("inlineCode",{parentName:"p"},"UNLEASH_APPNAME"),"). This can happen, for instance, if you make HTTP requests from the command line to test Unleash connections or if you write your own HTTP client for Unleash that doesn't provide an application name."),(0,r.kt)("p",null,'Because Unleash can\'t separate these based on their application names, all "unknown" clients will get lumped together as one application in the overview.'),(0,r.kt)("h2",{id:"network-overview"},"Network overview"),(0,r.kt)("p",null,"The network overview is a diagram that shows the Unleash instance and known ",(0,r.kt)("a",{parentName:"p",href:"#applications"},"applications")," that have connected to it within the last five minutes. ",(0,r.kt)("a",{parentName:"p",href:"#unknown-applications"},"Unknown applications")," are not shown."),(0,r.kt)("p",null,"Each application shown on the diagram has:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An application name"),(0,r.kt)("li",{parentName:"ul"},"the average number of requests per second (",(0,r.kt)("em",{parentName:"li"},"req/s"),") that we have registered over the last five minutes.")),(0,r.kt)(i.Z,{caption:"The network overview shows applications that have recently made requests to Unleash. In this figure, it's showing three different instances of the Unleash proxy connected to Unleash. Each instance has an average of 20 req/s.",img:"/img/network-overview.png",mdxType:"Figure"}),(0,r.kt)("h2",{id:"network-traffic"},"Network traffic"),(0,r.kt)("p",null,"The network traffic diagram is a line chart that presents requests that have used the most network traffic over the last six hours, grouped by client and base URL for the request. For legibility, this chart only shows the ten groups that have caused the most traffic over the last six hours."),(0,r.kt)("p",null,"Unleash aggregates requests by ",(0,r.kt)("strong",{parentName:"p"},"client")," (using application name) and ",(0,r.kt)("strong",{parentName:"p"},"base URL"),". Base URLs are batched together using the ",(0,r.kt)("strong",{parentName:"p"},"first two")," path segments following the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api")," part of the URL. In essence, that means:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Separate requests by API: Admin API requests are separate from client API requests."),(0,r.kt)("li",{parentName:"ol"},"Within each of these groups, group all requests by their next URL path segment. For instance: ",(0,r.kt)("inlineCode",{parentName:"li"},"/client/features")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"/client/features/feature-a")," are grouped together, while ",(0,r.kt)("inlineCode",{parentName:"li"},"/client/register")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"/admin/features")," are separate groups.")),(0,r.kt)(i.Z,{caption:"The network traffic chart plots req/s on the Y axis and time on the X axis. Requests are bundled per endpoint per application.",img:"/img/network-traffic.png",mdxType:"Figure"}),(0,r.kt)("h2",{id:"data-source"},"Data source"),(0,r.kt)("admonition",{title:"Prometheus and other sources",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The network view was written to be used with ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," and is therefore compatible with Prometheus' API."),(0,r.kt)("p",{parentName:"admonition"},"Other services that offer the same capabilities and the same API may work as substitutes, but we make no guarantees."),(0,r.kt)("p",{parentName:"admonition"},"This section will refer to the external source as Prometheus for simplicity.")),(0,r.kt)("p",null,"The network view uses an external Prometheus-like API to create diagrams. Because of this, Unleash will not enable the network view feature unless you set the ",(0,r.kt)("inlineCode",{parentName:"p"},"PROMETHEUS_API")," environment variable."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PROMETHEUS_API")," environment variable should point to the base path of the Prometheus installation, and Prometheus should be configured to get its data from Unleash's ",(0,r.kt)("a",{parentName:"p",href:"/reference/api/legacy/unleash/internal/prometheus"},"internal backstage API"),". This can for example be done via a scraping job",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Scraping job for Unleash metrics"',title:'"Scraping',job:!0,for:!0,Unleash:!0,'metrics"':!0},"  - job_name: unleash_internal_metrics\n    metrics_path: /internal-backstage/prometheus\n    static_configs:\n      - targets: ['unleash-url']\n")),(0,r.kt)("p",null,"This setup means that there is a mutual dependency between Unleash and Prometheus, where Prometheus regularly fetches data from Unleash's backstage API and Unleash fetches and displays this data when you use the network view. This diagram provides a visual representation of that."),(0,r.kt)("mermaid",{value:"sequenceDiagram\n    participant Unleash\n    loop Scrape data\n    Prometheus--\x3e>Unleash: fetch internal-backstage/prometheus\n    end\n    Unleash->>+Prometheus: Query data for network view"}),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"For instance: when using Unleash in an API setting, a common mistake is to instantiate a new SDK for every request instead of sharing a single instance across requests. This would be visible in the network overview graph as a large number of requests from the same app.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"How to set up Prometheus to collect metrics from that API is outside of the scope of this document.",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);