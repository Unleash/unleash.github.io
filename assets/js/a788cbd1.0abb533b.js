"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[82831],{99878:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(67294),r=n(86010),o=n(18015),i=n(11614);const s="admonition_LlT9",l="admonitionHeading_tbUL",m="admonitionIcon_kALy",p="admonitionContent_S0QG";var u=n(25108);const d={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},h={secondary:"note",important:"info",success:"tip",warning:"danger"};function c(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}function f(e){const{children:t,type:n,title:i,icon:f}=c(e),g=function(e){const t=h[e]??e;return d[t]||(u.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),d.info)}(n),v=i??g.label,{iconComponent:k}=g,w=f??a.createElement(k,null);return a.createElement("div",{className:(0,r.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert",`alert--${g.infimaClassName}`,s)},a.createElement("div",{className:l},a.createElement("span",{className:m},w),v),a.createElement("div",{className:p},t))}},640:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(99878);const o=e=>{let{videoUrls:t}=e;return a.createElement("article",{className:"unleash-video-container"},t?t.map((e=>a.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0}))):a.createElement(r.Z,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly."))}},85777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(640),i=n(25108);const s={title:"Environment Import & Export"},l=void 0,m={unversionedId:"how-to/how-to-environment-import-export",id:"how-to/how-to-environment-import-export",title:"Environment Import & Export",description:"The environment import and export first appeared in Unleash 4.22.0.",source:"@site/docs/how-to/how-to-environment-import-export.mdx",sourceDirName:"how-to",slug:"/how-to/how-to-environment-import-export",permalink:"/how-to/how-to-environment-import-export",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-environment-import-export.mdx",tags:[],version:"current",frontMatter:{title:"Environment Import & Export"},sidebar:"documentation",previous:{title:"[Deprecated] Import & Export",permalink:"/how-to/how-to-import-export"},next:{title:"Users and permissions",permalink:"/how-to/users-and-permissions"}},p={},u=[{value:"Import &amp; Export items",id:"import--export-items",level:2},{value:"Export",id:"export",level:2},{value:"Import",id:"import",level:2},{value:"Import stages",id:"import-stages",level:3},{value:"Import requirements",id:"import-requirements",level:3},{value:"Context fields",id:"context-fields",level:4},{value:"Segments",id:"segments",level:4},{value:"Dependencies",id:"dependencies",level:4},{value:"Custom strategies",id:"custom-strategies",level:4},{value:"Existing features",id:"existing-features",level:4},{value:"Pending change requests",id:"pending-change-requests",level:4},{value:"Import warnings",id:"import-warnings",level:3},{value:"Archived features",id:"archived-features",level:4},{value:"Custom strategies",id:"custom-strategies-1",level:4},{value:"Required permissions",id:"required-permissions",level:3},{value:"Import and change requests",id:"import-and-change-requests",level:3},{value:"Environment import/export vs the instance import/export API",id:"environment-importexport-vs-the-instance-importexport-api",level:2}],d=(h="Figure",function(e){return i.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var h;const c={toc:u};function f(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The environment import and export first appeared in Unleash 4.22.0.")),(0,r.kt)(o.Z,{videoUrls:["https://www.youtube.com/embed/Bs73l2fZxJ4"],mdxType:"VideoContent"}),(0,r.kt)("p",null,"Environment export and import lets you copy feature configurations from one environment to another and even copy features from one Unleash instance to another."),(0,r.kt)("p",null,"When exporting, you select a set of features and ",(0,r.kt)("strong",{parentName:"p"},"one")," environment to export the configuration from. The environment must be the same for all features."),(0,r.kt)("p",null,"Then, when you import, you must select ",(0,r.kt)("strong",{parentName:"p"},"one")," environment and ",(0,r.kt)("strong",{parentName:"p"},"one")," project to import into. All features are imported into that project in that environment. If Unleash is unable to import the configuration safely, it will tell you why the import failed and what you need to do fix it (read more about ",(0,r.kt)("a",{parentName:"p",href:"#import-requirements"},"import requirements"),"."),(0,r.kt)("h2",{id:"import--export-items"},"Import & Export items"),(0,r.kt)("p",null,"When you export features, the export will contain both feature-specific configuration and global configuration."),(0,r.kt)("p",null,"On the project-level these items are exported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/feature-toggles"},"the feature itself")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/tags"},"feature tags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/dependent-features"},"feature dependencies"))),(0,r.kt)("p",null,"On the environment-level, these items are exported for the chosen environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/activation-strategies"},"activation strategies")," including ",(0,r.kt)("a",{parentName:"li",href:"/reference/strategy-constraints"},"constraints")," and references to ",(0,r.kt)("a",{parentName:"li",href:"/reference/segments"},"segments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/feature-toggle-variants"},"variants")),(0,r.kt)("li",{parentName:"ul"},"enabled/disabled")),(0,r.kt)("p",null,"Additionally, these global configuration items are exported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/unleash-context#custom-context-fields"},"custom context fields")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/tags#tag-types"},"feature tag types"))),(0,r.kt)("p",null,"Importantly, while references to ",(0,r.kt)("a",{parentName:"p",href:"/reference/segments"},"segments")," are exported, the segments themselves are ",(0,r.kt)("strong",{parentName:"p"},"not")," exported. Consult the ",(0,r.kt)("a",{parentName:"p",href:"#import-requirements"},"import requirements")," section for more information."),(0,r.kt)("h2",{id:"export"},"Export"),(0,r.kt)("p",null,"You can export features either from a project search or the global feature search. Use the search functionality to narrow the results to the list of features you want to export and use the export button to select environment. All features included in your search results will be included in the export."),(0,r.kt)(d,{caption:'Feature toggle lists can be filtered using the search bar. Once filtered, you can use the "export current selection" button to export the configuration for those features.',img:"/img/export.png",mdxType:"Figure"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"Import is a 3 stage process designed to be efficient and error-resistant."),(0,r.kt)("h3",{id:"import-stages"},"Import stages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"upload")," - you can upload previously exported JSON file or copy-paste export data from the exported JSON file into the code editor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"validation")," - you will get feedback on any errors or warnings before you do the actual import. This makes sure your feature flags configurations. You will not be able to finish the import if you have errors. Warnings don't stop you from importing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"import")," - the actual import that creates a new configuration in the target environment or creates a ","[change request]","/reference/change-requests.md) when the environment has change requests enabled")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The import UI. It has three stages: import, file, validate configuration, finish import.",src:n(53497).Z,width:"2564",height:"2332"})),(0,r.kt)("h3",{id:"import-requirements"},"Import requirements"),(0,r.kt)("p",null,"Unleash will reject an import if it discovers conflicts between the data to be imported and what already exists on the Unleash instance. The import tool will tell you about why an import is rejected in these cases."),(0,r.kt)("p",null,"The following sections describe requirements that must be met for Unleash not to stop the import job."),(0,r.kt)("h4",{id:"context-fields"},"Context fields"),(0,r.kt)("p",null,"When you import a custom context field ",(0,r.kt)("strong",{parentName:"p"},"with legal values defined"),":"),(0,r.kt)("p",null,"If a custom context field with the same name already exists in the target instance, then the pre-existing context field must have ",(0,r.kt)("strong",{parentName:"p"},"at least")," those legal values defined. In other words, the imported context field legal values must be a subset of the already existing context field's legal values."),(0,r.kt)("p",null,"When you import custom context fields without legal values or custom context fields that don't already exist in the target instance, then there are no requirements."),(0,r.kt)("p",null,"Custom context fields that don't already exist in the target instance will be created upon import."),(0,r.kt)("h4",{id:"segments"},"Segments"),(0,r.kt)("p",null,"If your import has segments, then a segment with the same name must already exist in the Unleash instance you are trying to import into. Only the name must be the same: the constraints in the segment can be different."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"If your import has a parent feature dependency, then the parent feature must already exist in the target Unleash instance or be part of the import data. The existing feature is identified by name."),(0,r.kt)("h4",{id:"custom-strategies"},"Custom strategies"),(0,r.kt)("p",null,"If your import contains custom strategies, then custom strategies with the same names must already exist in the target Unleash instance. The custom strategy definitions (including strategy parameters) that exist in the target instance do not otherwise need to match the custom strategy definitions in the instance the import came from."),(0,r.kt)("h4",{id:"existing-features"},"Existing features"),(0,r.kt)("p",null,"If any of the features you import already exist in the target Unleash instance, then they must exist within the project you're importing into. If any features you are attempting to import exist in a ",(0,r.kt)("strong",{parentName:"p"},"different")," project on the target instance, the import will be rejected."),(0,r.kt)("h4",{id:"pending-change-requests"},"Pending change requests"),(0,r.kt)("p",null,"The project and environment you are importing into must ",(0,r.kt)("strong",{parentName:"p"},"not have any pending ",(0,r.kt)("a",{parentName:"strong",href:"/reference/change-requests"},"change requests")),"."),(0,r.kt)("h3",{id:"import-warnings"},"Import warnings"),(0,r.kt)("p",null,"The import validation system will warn you about potential problems it finds in the import data. These warnings do not prevent you from importing the data, but you should read them carefully to ensure that Unleash does as you intend."),(0,r.kt)("p",null,"The following sections list things that the import tool will warn you about."),(0,r.kt)("h4",{id:"archived-features"},"Archived features"),(0,r.kt)("p",null,"The import tool will not import any features that have already been archived on the target Unleash instance. Because features are identified by their name, that means that if a feature called ",(0,r.kt)("inlineCode",{parentName:"p"},"feature-a")," has been created and archived on the target Unleash instance, then a feature with the same name (",(0,r.kt)("inlineCode",{parentName:"p"},"feature-a"),") will not be imported."),(0,r.kt)("p",null,"If you permanently delete the archived ",(0,r.kt)("inlineCode",{parentName:"p"},"feature-a")," from the target instance, then the new ",(0,r.kt)("inlineCode",{parentName:"p"},"feature-a")," (in the import data) ",(0,r.kt)("strong",{parentName:"p"},"will")," be imported."),(0,r.kt)("h4",{id:"custom-strategies-1"},"Custom strategies"),(0,r.kt)("p",null,"Unleash will verify that any custom strategies you are trying to import have already been defined on the target instance. However, it only does this verification by name. It does ",(0,r.kt)("strong",{parentName:"p"},"not")," validate that the definitions are otherwise the same or that they have the same ",(0,r.kt)("a",{parentName:"p",href:"/reference/custom-activation-strategies#parameters"},"configuration parameters"),"."),(0,r.kt)("h3",{id:"required-permissions"},"Required permissions"),(0,r.kt)("p",null,"To import features, you will ",(0,r.kt)("strong",{parentName:"p"},"always")," require the ",(0,r.kt)("strong",{parentName:"p"},"update feature toggles")," permission.\nAdditionally, depending on the actions your import job would trigger, you may also require any of the following permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create feature toggles"),": when the import would create new features"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Update tag types"),": when the import would create new tag types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create context fields"),": when the import would create new context fields"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create activation strategies"),": when the import would add activation strategies to a feature and change requests are disabled"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delete activation strategies"),": when import would remove existing activation strategies from a feature and change requests are disabled"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Update variants"),": when the import would update variants and change requests are disabled"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Update feature dependency"),": when the import would add feature dependencies and change requests are disabled")),(0,r.kt)("h3",{id:"import-and-change-requests"},"Import and change requests"),(0,r.kt)("p",null,"If change requests are enabled for the target project and environment, the import will not be fully applied. Any new features will be created, but all feature configuration will be added to a new change request."),(0,r.kt)("p",null,"If change requests are enabled, any permissions for ",(0,r.kt)("strong",{parentName:"p"},"Create activation strategies"),", ",(0,r.kt)("strong",{parentName:"p"},"Delete activation strategies")," and ",(0,r.kt)("strong",{parentName:"p"},"Update variants")," are not required."),(0,r.kt)("h2",{id:"environment-importexport-vs-the-instance-importexport-api"},"Environment import/export vs the ",(0,r.kt)("a",{parentName:"h2",href:"/how-to/how-to-import-export"},"instance import/export API")),(0,r.kt)("p",null,"Environment import/export has some similarities to the ",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-import-export"},"instance import/export API"),", but they serve different purposes."),(0,r.kt)("p",null,"The instance import/export API was designed to export all feature toggles (optionally with strategies and projects) from one Unleash instance to another. When it was developed, Unleash had much fewer features than it does now. As such, the API lacks support for some of the more recent features in Unleash."),(0,r.kt)("p",null,"On the other hand, the environment import/export feature was designed to export a selection of features based on search criteria. It can only export data from a single environment and only import it to a single environment. It also only supports importing into a single project (although it can export features from multiple projects)."),(0,r.kt)("p",null,"Further, the environment import/export comes with a much more stringent validation and will attempt to stop any corrupted data imports."))}f.isMDXComponent=!0},53497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-ab19548ea055e9d047bc9bf60293dd12.png"}}]);