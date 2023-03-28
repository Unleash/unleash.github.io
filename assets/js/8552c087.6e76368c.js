"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3645],{89282:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(67294),o=a(86010),i=a(18015),r=a(11614);const s="admonition_LlT9",l="admonitionHeading_tbUL",c="admonitionIcon_kALy",d="admonitionContent_S0QG";var p=a(25108);const u={note:{infimaClassName:"secondary",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:n.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:n.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:n.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:n.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:n.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function h(e){const{mdxAdmonitionTitle:t,rest:a}=function(e){const t=n.Children.toArray(e),a=t.find((e=>{var t;return n.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=n.createElement(n.Fragment,null,t.filter((e=>e!==a)));return{mdxAdmonitionTitle:a,rest:o}}(e.children);return{...e,title:e.title??t,children:a}}function g(e){const{children:t,type:a,title:r,icon:g}=h(e),f=function(e){const t=m[e]??e;return u[t]||(p.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),u.info)}(a),v=r??f.label,{iconComponent:b}=f,y=g??n.createElement(b,null);return n.createElement("div",{className:(0,o.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert",`alert--${f.infimaClassName}`,s)},n.createElement("div",{className:l},n.createElement("span",{className:c},y),v),n.createElement("div",{className:d},t))}},74124:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),o=a(67294),i=a(86010),r=a(63735),s=a(38224),l=a(5730);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==s&&(u(t),l(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}null==(t=a)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},r,{className:(0,i.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":s===t})}),a??t)})))}function u(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function m(e){const t=(0,s.Y)(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",c)},o.createElement(p,(0,n.Z)({},e,t)),o.createElement(u,(0,n.Z)({},e,t)))}function h(e){const t=(0,l.Z)();return o.createElement(m,(0,n.Z)({key:String(t)},e))}},48685:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),o=a(74124),i=a(11666),r=a(32526);const s=e=>{let{verb:t,payload:a,url:s,title:l,endpointType:c="Unleash server API"}=e;const d=(null==t?void 0:t.toUpperCase())||"",p=JSON.stringify(a,null,2),[u,m]="Unleash server API"===c?["unleash-url","API-token"]:["proxy-url","proxy-client-key"],h=(a?`\n${d} <${u}>/${s}\nAuthorization: <${m}>\ncontent-type: application/json\n\n${p}`:`\n${d} <${u}>/${s}\nAuthorization: <${m}>\ncontent-type: application/json`).trim(),g=(a?`\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <${m}>" \\\n     -X ${d} \\\n     -d '${p}' \\\n     <${u}>/${s}`:`\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <${m}>" \\\n     -X ${d} \\\n     <${u}>/${s}`).trim(),f=(a?`echo '${p}' \\\n| http ${d} \\\n  <${u}>/${s} \\\n  Authorization:<${m}>`:`\nhttp ${d} \\\n  <${u}>/${s} \\\n  Authorization:<${m}> \\\n  ${"POST"!==d||p?"":"--json"}`.trim()).trim();return n.createElement(o.Z,{groupId:"api-request"},n.createElement(i.Z,{value:"http",label:"HTTP"},n.createElement(r.Z,{language:"http",title:l},h)),n.createElement(i.Z,{value:"curl",label:"cURL"},n.createElement(r.Z,{language:"bash",title:l},g)),n.createElement(i.Z,{value:"httpie",label:"HTTPie"},n.createElement(r.Z,{language:"bash",title:l},f)))}},640:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(89282);const i={tip:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16",ariaHidden:"true"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},r=e=>{let{title:t="video content",videoUrls:a,children:r}=e;return n.createElement("article",{className:"unleash-video-container"},n.createElement(o.Z,{icon:i.tip,title:t,type:"note"},r),n.createElement("div",{className:"videos"},a?a.map((e=>n.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0}))):n.createElement(o.Z,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly.")))}},77680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),i=a(48685),r=a(640);const s={title:"How to capture impression data"},l=void 0,c={unversionedId:"how-to/how-to-capture-impression-data",id:"how-to/how-to-capture-impression-data",title:"How to capture impression data",description:"Placeholders in the code samples below are delimited by angle brackets (i.e. ``). You will need to replace them with the values that are correct in your situation for the code samples to run properly.",source:"@site/docs/how-to/how-to-capture-impression-data.mdx",sourceDirName:"how-to",slug:"/how-to/how-to-capture-impression-data",permalink:"/how-to/how-to-capture-impression-data",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-capture-impression-data.mdx",tags:[],version:"current",frontMatter:{title:"How to capture impression data"},sidebar:"documentation",previous:{title:"How to add strategy constraints",permalink:"/how-to/how-to-add-strategy-constraints"},next:{title:"How to create a feature toggle",permalink:"/how-to/how-to-create-feature-toggles"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Enable impression data for your feature toggle",id:"step-1",level:2},{value:"Enabling impression data for new feature toggles",id:"step-1-new-toggles",level:3},{value:"Enabling impression data for existing feature toggles",id:"step-1-existing-toggles",level:3},{value:"Step 2: Capture impression events in your client",id:"step-2",level:2},{value:"Capture and transform the event",id:"capture-and-transform-the-event",level:3}],u={toc:p};function m(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Placeholders",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Placeholders in the code samples below are delimited by angle brackets (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"<placeholder-name>"),"). You will need to replace them with the values that are correct in ",(0,o.kt)("em",{parentName:"p"},"your")," situation for the code samples to run properly.")),(0,o.kt)("p",null,"Unleash allows you to gather ",(0,o.kt)("a",{parentName:"p",href:"/reference/impression-data"},(0,o.kt)("strong",{parentName:"a"},"impression data"))," from your feature toggles, giving you complete visibility into who checked what toggles and when. What you do with this data is entirely up to you, but a common use case is to send it off to an aggregation and analytics service such as ",(0,o.kt)("a",{parentName:"p",href:"https://posthog.com/"},"Posthog")," or ",(0,o.kt)("a",{parentName:"p",href:"https://analytics.google.com/"},"Google Analytics"),", either just for monitoring purposes or to facilitate ",(0,o.kt)("a",{parentName:"p",href:"/topics/a-b-testing"},"A/B testing"),"."),(0,o.kt)("p",null,"This guide will take you through everything you need to do in Unleash to facilitate such a workflow. It will show you how to send data to Posthog as an example sink, but the exact same principles will apply to any other service of the same kind."),(0,o.kt)(r.Z,{videoUrls:["https://www.youtube.com/embed/bxYdeMb9ffw"],mdxType:"VideoContent"},"This content in this guide is also available in video format."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"We will assume that you have the necessary details for your third-party service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"where to send the data to"),". We'll refer to this in the code samples below as ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"<sink-url>")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"what format the data needs to be in"),". This will determine how you transform the event data before you send it.")),(0,o.kt)("p",null,"In addition, you'll need to have a toggle to record impression data for and an ",(0,o.kt)("a",{parentName:"p",href:"/reference/sdks/"},"Unleash client SDK")," that supports impression data. This guide will use the ",(0,o.kt)("a",{parentName:"p",href:"/reference/sdks/javascript-browser"},"JavaScript proxy SDK"),"."),(0,o.kt)("p",null,"When you have those things sorted, follow the below steps."),(0,o.kt)("h2",{id:"step-1"},"Step 1: Enable impression data for your feature toggle"),(0,o.kt)("p",null,"Because impression data is an ",(0,o.kt)("strong",{parentName:"p"},"opt-in feature"),", the first step is to enable it for the feature you want to gather data from. You can use both the UI and the API."),(0,o.kt)("h3",{id:"step-1-new-toggles"},"Enabling impression data for new feature toggles"),(0,o.kt)("p",null,"When you create a new feature toggle via the UI, there's an option at the end of the form that you must enable:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The create feature toggle form. There&#39;s a toggle at the end of the form that enables or disables impression data. It&#39;s labeled &quot;impression data&quot;.",src:a(63543).Z,width:"1366",height:"873"})),(0,o.kt)("p",null,"To create a feature toggle with impression data enabled, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"impressionData")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in the request payload, as seen below. For more options, check the ",(0,o.kt)("a",{parentName:"p",href:"/reference/api/legacy/unleash/admin/features-v2#create-toggle"},"reference docs on creating features"),"."),(0,o.kt)(i.Z,{verb:"post",payload:{name:"<feature-toggle-name>",impressionData:!0},url:"api/admin/projects/<project-id>/features",title:"Create a feature toggle with impression data enabled.",mdxType:"ApiRequest"}),(0,o.kt)("h3",{id:"step-1-existing-toggles"},"Enabling impression data for existing feature toggles"),(0,o.kt)("p",null,'To enable impression data for an existing toggle, go to the "Settings" tab of that feature toggle and use the "edit" button near the Feature information title in the admin UI. It will take you to a form that looks like the toggle creation form. Use the "Enable impression data" toggle to enable it, the same way you would when ',(0,o.kt)("a",{parentName:"p",href:"#step-1-new-toggles"},"enabling impression data for a new feature toggle"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The create feature toggle form. There&#39;s a toggle at the end of the form that enables or disables impression data. It&#39;s labeled &quot;impression data&quot;.",src:a(43650).Z,width:"1366",height:"703"})),(0,o.kt)("p",null,"To enable impression data for an existing toggle, use the ",(0,o.kt)("a",{parentName:"p",href:"/reference/api/legacy/unleash/admin/features-v2#patch-toggle"},"API's toggle patching functionality"),":"),(0,o.kt)(i.Z,{verb:"patch",payload:[{op:"replace",path:"/impressionData",value:!0}],url:"api/admin/projects/<project-id>/features/<feature-toggle-name>",title:"Enable impression data on an existing toggle.",mdxType:"ApiRequest"}),(0,o.kt)("h2",{id:"step-2"},"Step 2: Capture impression events in your client"),(0,o.kt)("p",null,"In your client SDK, initialize the library for the third party service you're using.\nFor the full details on setting up a Posthog client, see ",(0,o.kt)("a",{parentName:"p",href:"https://posthog.com/docs/integrate/client/js"},"the official Posthog JavaScript client docs"),".\nThe steps below will use extracts from said documentation."),(0,o.kt)("p",null,"After initializing the library, you'll probably also want to identify the current user, so that events can be correlated properly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Identify the user."',title:'"Identify',the:!0,'user."':!0},"posthog.identify(userId);\n")),(0,o.kt)("h3",{id:"capture-and-transform-the-event"},"Capture and transform the event"),(0,o.kt)("p",null,"Attach an event listener to Unleash that listens for ",(0,o.kt)("inlineCode",{parentName:"p"},'"impression"')," events. Inside the listener, transform the event data to the format you want and send it to your analytics service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Capture, transform, and send impression data."',title:'"Capture,',"transform,":!0,and:!0,send:!0,impression:!0,'data."':!0},'// listen for impression events\nunleash.on("impression", (event) => {\n\n    // capture and transform events\n    posthog.capture(event.eventType, {\n        ...event.context,\n        distinct_id: event.context?.userId,\n        featureName: event.featureName,\n        enabled: event.enabled,\n        variant: event.variant,\n    });\n\n});\n')),(0,o.kt)("p",null,"Posthog expects an object with a ",(0,o.kt)("inlineCode",{parentName:"p"},"distinct_id")," property that it uses to correlate data.\nAdditionally, you can add whatever properties you want, such as the feature toggle name, its state and/or variant, or the whole Unleash context.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"posthog.capture")," method sends the event data to your Posthog instance."))}m.isMDXComponent=!0},43650:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enable-impression-data-existing-toggle-1f91199b63b7a8d7041bd6bd8236320e.png"},63543:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enable-impression-data-d4513856d3c9992ba05d9925d46a804e.png"}}]);