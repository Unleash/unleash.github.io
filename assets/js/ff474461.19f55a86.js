"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[6441],{55200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>g,toc:()=>u});var o=n(87462),i=(n(67294),n(3905)),a=n(25108);const s={title:"Jira Cloud Integration - Usage"},l=void 0,g={unversionedId:"reference/integrations/jira-cloud-plugin-usage",id:"reference/integrations/jira-cloud-plugin-usage",title:"Jira Cloud Integration - Usage",description:"With the Unleash Jira Cloud Plugin you can create, view and manage Unleash feature toggles directly from a Jira issue.",source:"@site/docs/reference/integrations/jira-cloud-plugin-usage.md",sourceDirName:"reference/integrations",slug:"/reference/integrations/jira-cloud-plugin-usage",permalink:"/reference/integrations/jira-cloud-plugin-usage",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/integrations/jira-cloud-plugin-usage.md",tags:[],version:"current",frontMatter:{title:"Jira Cloud Integration - Usage"},sidebar:"documentation",previous:{title:"Jira Cloud Integration - Installation",permalink:"/reference/integrations/jira-cloud-plugin-installation"},next:{title:"Slack",permalink:"/reference/integrations/slack"}},r={},u=[{value:"Using the plugin",id:"using-the-plugin",level:2},{value:"Connecting a toggle to an issue",id:"connecting-a-toggle-to-an-issue",level:3},{value:"Toggle status as part of Issue view",id:"toggle-status-as-part-of-issue-view",level:3},{value:"Change Requests",id:"change-requests",level:3},{value:"Disconnecting toggle from Issue",id:"disconnecting-toggle-from-issue",level:3}],c=(d="Figure",function(e){return a.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const h={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With the Unleash Jira Cloud Plugin you can create, view and manage Unleash feature toggles directly from a Jira issue."),(0,i.kt)("p",null,"The plugin also shows you current status of connected toggles."),(0,i.kt)("h2",{id:"using-the-plugin"},"Using the plugin"),(0,i.kt)("p",null,"To use the plugin, you'll need to create an issue or use an existing one. Once the issue is saved and you open up the issue panel, you'll be greeted with a button to activate the Unleash plugin for that issue."),(0,i.kt)(c,{caption:"The Unleash Feature Flags button gets added to the top-level actions of new issues. Use that button to activate the Unleash plugin for that issue.",img:"/img/jira-cloud-activate-unleash-panel-button.png",mdxType:"Figure"}),(0,i.kt)("h3",{id:"connecting-a-toggle-to-an-issue"},"Connecting a toggle to an issue"),(0,i.kt)(c,{caption:"Once active, the Unleash plugin adds a button labeled 'connect toggle' to the issue.",img:"/img/jira-cloud-issue-button.png",mdxType:"Figure"}),(0,i.kt)("p",null,'Use the issue\'s "connect toggle" button to open a dialog. '),(0,i.kt)("p",null,"There are a few steps to connect a toggle:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the Unleash project that contains the toggle:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Cloud: connect feature toggle form. The project selection dropdown contains all Unleash projects",src:n(45041).Z,width:"596",height:"512"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'Use the "create new toggle" option to choose whether you want to add an existing toggle or create a new one.  ')),(0,i.kt)(c,{caption:"When you add an existing toggle, use the toggle name select list to choose from existing toggles in the selected Unleash project.",img:"/img/jira-cloud-add-existing-toggle.png",mdxType:"Figure"}),(0,i.kt)(c,{caption:"When you add a new toggle, you must give it a name and can choose to give it a description.",img:"/img/jira-cloud-add-new-toggle.png",mdxType:"Figure"}),(0,i.kt)("h3",{id:"toggle-status-as-part-of-issue-view"},"Toggle status as part of Issue view"),(0,i.kt)("p",null,"Once you've connected at least one toggle to an issue, the Unleash plugin will list the current status of each environment for\nthat toggle. If the current user is allowed to edit the issue, they can also enable or disable environments directly\nfrom Jira."),(0,i.kt)(c,{caption:"A Jira Cloud issue with a connected toggle. The Unleash feature flags section now shows the connected toggles along with the toggle's environments. There are controls to enable or disable the toggle in the development and production environments",img:"/img/jira-cloud-toggle-status.png",mdxType:"Figure"}),(0,i.kt)("h3",{id:"change-requests"},"Change Requests"),(0,i.kt)("p",null,"The plugin respects Unleash's ",(0,i.kt)("a",{parentName:"p",href:"/reference/change-requests"},"change requests"),". If change requests are turned on in the connected project and the selected environment, the plugin will ask whether you want to create a change request or not. "),(0,i.kt)("p",null,"If you already have an active change request for that project and that environment, the changes will be added to your existing change request."),(0,i.kt)("p",null,"If you confirm that you would like to open a change request, then the plugin will create one for you and present a confirmation dialog."),(0,i.kt)(c,{caption:"A dialog appears when the plugin creates a change request for you. The dialog contains a link directly to the newly created change request.",img:"/img/jira-cloud-change-request-confirmation.png",mdxType:"Figure"}),(0,i.kt)("p",null,"When the Change Request has been reviewed and applied in Unleash, the toggle will show the requested state after the next refresh\nof the issue and toggle status page."),(0,i.kt)("h3",{id:"disconnecting-toggle-from-issue"},"Disconnecting toggle from Issue"),(0,i.kt)("p",null,'If a toggle is no longer relevant for your Jira Issue, you can disconnect it using the "disconnect toggle" button. This button is only available if your user has edit permissions for the Jira issue.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jira Cloud: issue with a connected toggle. The &#39;disconnect toggle&#39; button (highlighted) is displayed next to the toggle&#39;s name.",src:n(90756).Z,width:"764",height:"588"})),(0,i.kt)("p",null,'The toggle will be disconnected immediately. However, the plugin will not delete the toggle from Unleash,\nso you can still reconnect your Jira issue to the same toggle using the "Connect to existing toggle" functionality'))}p.isMDXComponent=!0},90756:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/jira-cloud-disconnect-toggle-385c9bbb730242a7b9e801ef9e7b384f.png"},45041:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/jira-cloud-select-project-expanded-39075d4524640029334d62b63d189b4d.png"}}]);