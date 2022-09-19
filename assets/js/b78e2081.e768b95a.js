"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[9239],{85142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const s={id:"metrics",title:"/api/client/metrics"},o=void 0,r={unversionedId:"api/client/metrics",id:"api/client/metrics",title:"/api/client/metrics",description:"In order to access the client API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create a CLIENT token and add an Authorization header using the token.",source:"@site/docs/api/client/metrics-api.md",sourceDirName:"api/client",slug:"/api/client/metrics",permalink:"/api/client/metrics",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/client/metrics-api.md",tags:[],version:"current",frontMatter:{id:"metrics",title:"/api/client/metrics"},sidebar:"documentation",previous:{title:"/api/client/features",permalink:"/api/client/features"},next:{title:"/api/client/register",permalink:"/api/client/register"}},c={},l=[{value:"Send metrics",id:"send-metrics",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In order to access the client API endpoints you need to identify yourself. Unless you're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,a.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create a CLIENT token")," and add an Authorization header using the token.")),(0,a.kt)("h3",{id:"send-metrics"},"Send metrics"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST: http://unleash.host.com/api/client/metrics")),(0,a.kt)("p",null,"Register a metrics payload with a timed bucket."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appName": "appName",\n  "instanceId": "instanceId",\n  "bucket": {\n    "start": "2016-11-03T07:16:43.572Z",\n    "stop": "2016-11-03T07:16:53.572Z",\n    "toggles": {\n      "toggle-name-1": {\n        "yes": 123,\n        "no": 321\n      },\n      "toggle-name-2": {\n        "yes": 111,\n        "no": 0\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);