"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[51726],{4119:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"/internal-backstage/prometheus"},o="Internal Backstage API",s={unversionedId:"reference/api/legacy/unleash/internal/prometheus",id:"reference/api/legacy/unleash/internal/prometheus",title:"/internal-backstage/prometheus",description:"GET http://unleash.host.com/internal-backstage/prometheus",source:"@site/docs/reference/api/legacy/unleash/internal/prometheus.md",sourceDirName:"reference/api/legacy/unleash/internal",slug:"/reference/api/legacy/unleash/internal/prometheus",permalink:"/reference/api/legacy/unleash/internal/prometheus",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/legacy/unleash/internal/prometheus.md",tags:[],version:"current",frontMatter:{title:"/internal-backstage/prometheus"},sidebar:"documentation",previous:{title:"Delete a user",permalink:"/reference/api/unleash/delete-user"},next:{title:"/health",permalink:"/reference/api/legacy/unleash/internal/health"}},i={},u=[{value:"Annotations",id:"annotations",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"internal-backstage-api"},"Internal Backstage API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/internal-backstage/prometheus")),(0,r.kt)("p",null,"Unleash uses Prometheus internally to collect metrics. By default, the metrics are available at ",(0,r.kt)("inlineCode",{parentName:"p"},"/internal-backstage/prometheus"),". You can disable this endpoint by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"serverMetrics")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"Note that it's not recommended to expose Prometheus metrics to the public as of the ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/assets/downloads/2018-06-11--cure53_security_audit.pdf"},"Prometheus pentest-report")," issue PRM-01-002. Thus, if you want to keep metrics enabled, you should block all external access to ",(0,r.kt)("inlineCode",{parentName:"p"},"/internal-backstage/*")," on the network layer to keep your instance secure."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Read more about Prometheus")),(0,r.kt)("h2",{id:"annotations"},"Annotations"),(0,r.kt)("p",null,"Unleash will automatically count all updates for all toggles under the metric name ",(0,r.kt)("inlineCode",{parentName:"p"},"feature_toggle_update_total"),", and the toggle name is will be set as a label value. This information can be used to create annotations in grafana for everytime a feature toggle is changed."),(0,r.kt)("p",null,"You can use this query in grafana to achieve this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'delta(feature_toggle_update_total{toggle="Demo"}[1m]) != bool 0\n')),(0,r.kt)("p",null,"Another useful counter is the ",(0,r.kt)("inlineCode",{parentName:"p"},"feature_toggle_usage_total")," which will give you the numbers for how many times a feature toggle has been evaluated to ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," or not."))}c.isMDXComponent=!0}}]);