"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[22557],{19025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>r});var a=n(87462),i=(n(67294),n(3905));const l={title:"ADR: POST/PUT API payload"},o=void 0,s={unversionedId:"contributing/ADRs/back-end/POST-PUT-api-payload",id:"contributing/ADRs/back-end/POST-PUT-api-payload",title:"ADR: POST/PUT API payload",description:"Background",source:"@site/docs/contributing/ADRs/back-end/POST-PUT-api-payload.md",sourceDirName:"contributing/ADRs/back-end",slug:"/contributing/ADRs/back-end/POST-PUT-api-payload",permalink:"/contributing/ADRs/back-end/POST-PUT-api-payload",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/contributing/ADRs/back-end/POST-PUT-api-payload.md",tags:[],version:"current",frontMatter:{title:"ADR: POST/PUT API payload"},sidebar:"documentation",previous:{title:"ADR Overview",permalink:"/contributing/ADRs/"},next:{title:"ADR: Breaking DB changes",permalink:"/contributing/ADRs/back-end/breaking-db-changes"}},d={},r=[{value:"Background",id:"background",level:2},{value:"Example: adding new setting field to project settings",id:"example-adding-new-setting-field-to-project-settings",level:3},{value:"Decision",id:"decision",level:2}],u={toc:r};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"Whenever we receive a payload in our backend for POST or PUT requests we need to take into account backwards compatibility. When we add a new field to an existing API payload, clients using the previous version of the payload will not know about that new field. This means that we need to make sure that the new field is optional. If we make the field required, clients using the previous version of the payload will override the value of the new field with an empty value or null."),(0,i.kt)("h3",{id:"example-adding-new-setting-field-to-project-settings"},"Example: adding new setting field to project settings"),(0,i.kt)("p",null,"Project settings on Unleash 5.3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request PUT \'http://localhost:4242/api/admin/projects/default\' \\\n--header \'Authorization: INSERT_API_KEY\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "id": "default",\n  "name": "Default",\n  "description": "Default project",\n  "defaultStickiness": "default",\n  "mode": "open"\n}\'\n')),(0,i.kt)("p",null,"New version of project settings (Unleash 5.6):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request PUT \'http://localhost:4242/api/admin/projects/default\' \\\n--header \'Authorization: INSERT_API_KEY\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "id": "default",\n  "name": "Default",\n  "description": "Default project",\n  "defaultStickiness": "default",\n  "featureLimit": 2\n}\'\n')),(0,i.kt)("p",null,"Pay attention to the new field feature limit. If a customer updates Unleash to 5.6 but their integration still does not send that field, it may result in the unwanted behavior of setting that field to empty in the database, in case the server assumes that not sending the field means setting it to empty / ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("p",null,"This bug can easily be an oversight but can be prevented by following some rules when designing the API payload."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"When receiving a body from a request we need to take into account 3 possible cases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The field has a value"),(0,i.kt)("li",{parentName:"ol"},"The field is ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," or not part of the payload"),(0,i.kt)("li",{parentName:"ol"},"The field is ",(0,i.kt)("inlineCode",{parentName:"li"},"null"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the field has a value, we need to update or set that value in the DB."),(0,i.kt)("li",{parentName:"ul"},"If the field is ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," or not part of the payload, we need to leave the value in the DB as it is."),(0,i.kt)("li",{parentName:"ul"},"If the field is ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),", we need to remove the value from the DB (set it as ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," on the DB).")))}p.isMDXComponent=!0}}]);