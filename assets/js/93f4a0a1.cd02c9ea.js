"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[31913],{41155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var o=n(87462),a=(n(67294),n(3905));const i={title:"How to synchronize Unleash instances"},s=void 0,r={unversionedId:"how-to/how-to-synchronize-unleash-instances",id:"how-to/how-to-synchronize-unleash-instances",title:"How to synchronize Unleash instances",description:"This is an experimental feature",source:"@site/docs/how-to/how-to-synchronize-unleash-instances.md",sourceDirName:"how-to",slug:"/how-to/how-to-synchronize-unleash-instances",permalink:"/how-to/how-to-synchronize-unleash-instances",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-synchronize-unleash-instances.md",tags:[],version:"current",frontMatter:{title:"How to synchronize Unleash instances"},sidebar:"documentation",previous:{title:"How to schedule feature releases",permalink:"/how-to/how-to-schedule-feature-releases"},next:{title:"Environments",permalink:"/how-to/env"}},l={},h=[{value:"Configuration",id:"configuration",level:2},{value:"Source Unleash Instance",id:"source-unleash-instance",level:3},{value:"Target Unleash Instance",id:"target-unleash-instance",level:3},{value:"Process",id:"process",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:h};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is an experimental feature")),(0,a.kt)("h1",{id:"unleash-instance-synchronization-script"},"Unleash Instance Synchronization Script"),(0,a.kt)("p",null,"This script allows you to synchronize feature toggles between two Unleash instances using the export and import APIs provided by Unleash. The script exports feature toggles from the source instance and imports them into the target instance."),(0,a.kt)("p",null,"You can find this script in the following location within the project:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"scripts/promote.sh")),(0,a.kt)("p",null,"This script can also be integrated into a continuous deployment pipeline, allowing you to automatically synchronize feature toggles between instances at a frequency determined by your pipeline configuration."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To synchronize two Unleash instances, you need to configure each instance with the required settings. The script requires the following configuration:"),(0,a.kt)("h3",{id:"source-unleash-instance"},"Source Unleash Instance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SOURCE_URL"),": The URL of the source Unleash API.\nExample: ",(0,a.kt)("inlineCode",{parentName:"li"},'SOURCE_URL="http://localhost:4242/api/admin/features-batch/export"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SOURCE_API_TOKEN"),": The API token for the source Unleash instance. This can be a personal access token or a service account token with enough privileges to perform the export operation.\nExample: ",(0,a.kt)("inlineCode",{parentName:"li"},'SOURCE_API_TOKEN="user:98b555423fa020a3e67267fb8462fdeea13a1d62e7ea61d5fe4f3022"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SOURCE_ENV"),": The environment name for the source instance. Only feature toggles matching this environment will be exported."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SOURCE_TAG"),": The tag to filter feature toggles for export.")),(0,a.kt)("h3",{id:"target-unleash-instance"},"Target Unleash Instance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TARGET_URL"),": The URL of the target Unleash API.\nExample: ",(0,a.kt)("inlineCode",{parentName:"li"},'TARGET_URL="http://localhost:4242/api/admin/features-batch/import"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TARGET_API_TOKEN"),": The API token for the target Unleash instance. This can be a personal access token or a service account token with enough privileges to perform the import operation.\nExample: ",(0,a.kt)("inlineCode",{parentName:"li"},'TARGET_API_TOKEN="user:98b555423fa020a3e67267fb8462fdeea13a1d62e7ea61d5fe4f3022"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TARGET_PROJECT"),": The project name for the target instance where the feature toggles will be imported."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TARGET_ENV"),": The environment name for the target instance.")),(0,a.kt)("h2",{id:"process"},"Process"),(0,a.kt)("p",null,"The script performs the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Export feature toggles from the source instance based on the specified tag and environment."),(0,a.kt)("li",{parentName:"ol"},"Import the exported feature toggles into the target instance under the specified project and environment.")),(0,a.kt)("p",null,"If change requests are enabled in the target project, the import process will go through the change request process, allowing you to review the changes before applying them."),(0,a.kt)("p",null,"The script prints each step of the export and import process, providing feedback on the success or failure of each operation."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Here are some common issues you might encounter and how to resolve them:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure you use the correct URLs for the source and target instances."),(0,a.kt)("li",{parentName:"ol"},"Ensure that the API tokens have the necessary permissions to perform export and import operations."),(0,a.kt)("li",{parentName:"ol"},"Verify that the specified source and target environments exist."),(0,a.kt)("li",{parentName:"ol"},"Check that the target project exists."),(0,a.kt)("li",{parentName:"ol"},"If you have change requests enabled in the target project, ensure that there are no pending change requests for the same API token.")),(0,a.kt)("admonition",{title:"Feedback wanted",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you would like to give feedback on this feature, experience issues or have questions, please feel free to open an issue on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/"},"GitHub"),".")))}p.isMDXComponent=!0}}]);