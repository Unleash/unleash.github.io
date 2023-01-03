"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6250],{6076:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={title:"/api/admin/archive"},l=void 0,o={unversionedId:"reference/api/legacy/unleash/admin/archive",id:"reference/api/legacy/unleash/admin/archive",title:"/api/admin/archive",description:"In order to access the admin API endpoints you need to identify yourself. Unless you're using the none authentication method, you'll need to create an ADMIN token and add an Authorization header using the token.",source:"@site/docs/reference/api/legacy/unleash/admin/archive.md",sourceDirName:"reference/api/legacy/unleash/admin",slug:"/reference/api/legacy/unleash/admin/archive",permalink:"/reference/api/legacy/unleash/admin/archive",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api/legacy/unleash/admin/archive.md",tags:[],version:"current",frontMatter:{title:"/api/admin/archive"},sidebar:"documentation",previous:{title:"/api/admin/features",permalink:"/reference/api/legacy/unleash/admin/features"},next:{title:"/api/admin/metrics",permalink:"/reference/api/legacy/unleash/admin/metrics"}},s={},c=[{value:"Fetch archived toggles",id:"fetch-archived-toggles",level:3},{value:"Revive feature toggle",id:"revive-feature-toggle",level:3},{value:"Delete an archived feature toggle",id:"delete-an-archived-feature-toggle",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In order to access the admin API endpoints you need to identify yourself. Unless you're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," authentication method, you'll need to ",(0,i.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"create an ADMIN token")," and add an Authorization header using the token.")),(0,i.kt)("h3",{id:"fetch-archived-toggles"},"Fetch archived toggles"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET http://unleash.host.com/api/admin/archive/features")),(0,i.kt)("p",null,"Used to fetch list of archived feature toggles"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "features": [\n    {\n      "name": "Feature.A",\n      "description": "lorem ipsum",\n      "type": "release",\n      "stale": false,\n      "variants": [],\n      "tags": [],\n      "strategy": "default",\n      "parameters": {}\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"revive-feature-toggle"},"Revive feature toggle"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST http://unleash.host.com/api/admin/archive/revive/:featureName")),(0,i.kt)("p",null,"Response: ",(0,i.kt)("strong",{parentName:"p"},"200 OK")," - When feature toggle was successfully revived."),(0,i.kt)("h3",{id:"delete-an-archived-feature-toggle"},"Delete an archived feature toggle"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DELETE http://unleash.host.com/api/admin/archive/:featureName")),(0,i.kt)("p",null,"Will fully remove the feature toggle and associated configuration. Impossible to restore after this action."))}u.isMDXComponent=!0}}]);