"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[3645],{8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},3580:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),o=a(7294),r=a(2389),i=a(6808),l=a(6010),s="tabItem_LplD";function u(e){var t,a,r,u=e.lazy,p=e.block,d=e.defaultValue,c=e.values,h=e.groupId,m=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),y=b.tabGroupChoices,k=b.setTabGroupChoices,N=(0,o.useState)(w),E=N[0],x=N[1],T=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var z=y[h];null!=z&&z!==E&&v.some((function(e){return e.value===z}))&&x(z)}var I=function(e){var t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==E&&(C(t),x(n),null!=h&&k(h,n))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;a=T[o]||T[T.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},m)},v.map((function(e){var t=e.value,a=e.label,r=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return T.push(e)},onKeyDown:Z,onFocus:I,onClick:I},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),u?(0,o.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function p(e){var t=(0,r.Z)();return o.createElement(u,(0,n.Z)({key:String(t)},e))}},872:function(e,t,a){var n=a(7294),o=a(3580),r=a(8215),i=a(5197);t.Z=function(e){var t=e.verb,a=e.payload,l=e.url,s=e.title,u=e.endpointType,p=void 0===u?"Unleash server API":u,d=(null==t?void 0:t.toUpperCase())||"",c=JSON.stringify(a,null,2),h="Unleash server API"===p?["unleash-url","API-token"]:["proxy-url","proxy-client-key"],m=h[0],g=h[1],v=(a?"\n"+d+" <"+m+">/"+l+"\nAuthorization: <"+g+">\ncontent-type: application/json\n\n"+c:"\n"+d+" <"+m+">/"+l+"\nAuthorization: <"+g+">\ncontent-type: application/json").trim(),f=(a?'\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <'+g+'>" \\\n     -X '+d+" \\\n     -d '"+c+"' \\\n     <"+m+">/"+l:'\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <'+g+'>" \\\n     -X '+d+" \\\n     <"+m+">/"+l).trim(),w=(a?"echo '"+c+"' \\\n| http "+d+" \\\n  <"+m+">/"+l+" \\\n  Authorization:<"+g+">":("\nhttp "+d+" \\\n  <"+m+">/"+l+" \\\n  Authorization:<"+g+"> \\\n  "+("POST"!==d||c?"":"--json")).trim()).trim();return n.createElement(o.Z,{groupId:"api-request"},n.createElement(r.Z,{value:"http",label:"HTTP"},n.createElement(i.Z,{language:"http",title:s},v)),n.createElement(r.Z,{value:"curl",label:"cURL"},n.createElement(i.Z,{language:"bash",title:s},f)),n.createElement(r.Z,{value:"httpie",label:"HTTPie"},n.createElement(i.Z,{language:"bash",title:s},w)))}},4312:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),o=a(6010),r={note:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},i={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function l(e){var t=e.children,a=e.type,l=e.title,s=void 0===l?a:l,u=e.icon,p=void 0===u?r[a]:u;return n.createElement("div",{className:(0,o.Z)("admonition","admonition-"+a,"alert","alert--"+i[a])},n.createElement("div",{className:"admonition-heading"},n.createElement("h5",null,n.createElement("span",{className:"admonition-icon"},p),s)),n.createElement("div",{className:"admonition-content"},t))}var s={tip:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16",ariaHidden:"true"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},u=function(e){var t=e.title,a=void 0===t?"video content":t,o=e.videoUrls,r=e.children;return n.createElement("article",{className:"unleash-video-container"},n.createElement(l,{icon:s.tip,title:a,type:"note"},r),n.createElement("div",{className:"videos"},o?o.map((function(e){return n.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0})})):n.createElement(l,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly.")))}},5402:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=a(872),l=a(4312),s=["components"],u={title:"How to capture impression data"},p=void 0,d={unversionedId:"how-to/how-to-capture-impression-data",id:"how-to/how-to-capture-impression-data",title:"How to capture impression data",description:"Placeholders in the code samples below are delimited by angle brackets (i.e. ``). You will need to replace them with the values that are correct in your situation for the code samples to run properly.",source:"@site/docs/how-to/how-to-capture-impression-data.mdx",sourceDirName:"how-to",slug:"/how-to/how-to-capture-impression-data",permalink:"/how-to/how-to-capture-impression-data",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-capture-impression-data.mdx",tags:[],version:"current",frontMatter:{title:"How to capture impression data"},sidebar:"documentation",previous:{title:"How to add strategy constraints",permalink:"/how-to/how-to-add-strategy-constraints"},next:{title:"How to create a feature toggle",permalink:"/user_guide/create_feature_toggle"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Step 1: Enable impression data for your feature toggle",id:"step-1",children:[{value:"Enabling impression data for new feature toggles",id:"step-1-new-toggles",children:[],level:3},{value:"Enabling impression data for existing feature toggles",id:"step-1-existing-toggles",children:[],level:3}],level:2},{value:"Step 2: Capture impression events in your client",id:"step-2",children:[{value:"Capture and transform the event",id:"capture-and-transform-the-event",children:[],level:3}],level:2}],h={toc:c};function m(e){var t=e.components,u=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Placeholders")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Placeholders in the code samples below are delimited by angle brackets (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"<placeholder-name>"),"). You will need to replace them with the values that are correct in ",(0,r.kt)("em",{parentName:"p"},"your")," situation for the code samples to run properly."))),(0,r.kt)("p",null,"Unleash allows you to gather ",(0,r.kt)("a",{parentName:"p",href:"/advanced/impression-data"},(0,r.kt)("strong",{parentName:"a"},"impression data"))," from your feature toggles, giving you complete visibility into who checked what toggles and when. What you do with this data is entirely up to you, but a common use case is to send it off to an aggregation and analytics service such as ",(0,r.kt)("a",{parentName:"p",href:"https://posthog.com/"},"Posthog")," or ",(0,r.kt)("a",{parentName:"p",href:"https://analytics.google.com/"},"Google Analytics"),", either just for monitoring purposes or to facilitate ",(0,r.kt)("a",{parentName:"p",href:"/topics/a-b-testing"},"A/B testing"),"."),(0,r.kt)("p",null,"This guide will take you through everything you need to do in Unleash to facilitate such a workflow. It will show you how to send data to Posthog as an example sink, but the exact same principles will apply to any other service of the same kind."),(0,r.kt)(l.Z,{videoUrls:["https://www.youtube.com/embed/bxYdeMb9ffw"],mdxType:"VideoContent"},"This content in this guide is also available in video format."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"We will assume that you have the necessary details for your third-party service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"where to send the data to"),". We'll refer to this in the code samples below as ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"<sink-url>")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"what format the data needs to be in"),". This will determine how you transform the event data before you send it.")),(0,r.kt)("p",null,"In addition, you'll need to have a toggle to record impression data for and an ",(0,r.kt)("a",{parentName:"p",href:"/sdks"},"Unleash client SDK")," that supports impression data. This guide will use the ",(0,r.kt)("a",{parentName:"p",href:"/sdks/proxy-javascript"},"JavaScript proxy SDK"),"."),(0,r.kt)("p",null,"When you have those things sorted, follow the below steps."),(0,r.kt)("h2",{id:"step-1"},"Step 1: Enable impression data for your feature toggle"),(0,r.kt)("p",null,"Because impression data is an ",(0,r.kt)("strong",{parentName:"p"},"opt-in feature"),", the first step is to enable it for the feature you want to gather data from. You can use both the UI and the API."),(0,r.kt)("h3",{id:"step-1-new-toggles"},"Enabling impression data for new feature toggles"),(0,r.kt)("p",null,"When you create a new feature toggle via the UI, there's an option at the end of the form that you must enable:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The create feature toggle form. There&#39;s a toggle at the end of the form that enables or disables impression data. It&#39;s labeled &quot;impression data&quot;.",src:a(3065).Z,width:"1550",height:"1073"})),(0,r.kt)("p",null,"To create a feature toggle with impression data enabled, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"impressionData")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the request payload, as seen below. For more options, check the ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#create-toggle"},"reference docs on creating features"),"."),(0,r.kt)(i.Z,{verb:"post",payload:{name:"<feature-toggle-name>",impressionData:!0},url:"api/admin/projects/<project-id>/features",title:"Create a feature toggle with impression data enabled.",mdxType:"ApiRequest"}),(0,r.kt)("h3",{id:"step-1-existing-toggles"},"Enabling impression data for existing feature toggles"),(0,r.kt)("p",null,'To enable impression data for an existing toggle, use the "edit" button on the toggle\'s page in the admin UI. It will take you to a form that looks like the toggle creation form. Use the "impression data" toggle to enable impression data the same way you would when ',(0,r.kt)("a",{parentName:"p",href:"#step-1-new-toggles"},"enabling impression data for a new feature toggle"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The create feature toggle form. There&#39;s a toggle at the end of the form that enables or disables impression data. It&#39;s labeled &quot;impression data&quot;.",src:a(9688).Z,width:"2856",height:"1349"})),(0,r.kt)("p",null,"To enable impression data for an existing toggle, use the ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/feature-toggles-v2#patch-toggle"},"API's toggle patching functionality"),":"),(0,r.kt)(i.Z,{verb:"patch",payload:[{op:"replace",path:"/impressionData",value:!0}],url:"api/admin/projects/<project-id>/features/<feature-toggle-name>",title:"Enable impression data on an existing toggle.",mdxType:"ApiRequest"}),(0,r.kt)("h2",{id:"step-2"},"Step 2: Capture impression events in your client"),(0,r.kt)("p",null,"In your client SDK, initialize the library for the third party service you're using.\nFor the full details on setting up a Posthog client, see ",(0,r.kt)("a",{parentName:"p",href:"https://posthog.com/docs/integrate/client/js"},"the official Posthog JavaScript client docs"),".\nThe steps below will use extracts from said documentation."),(0,r.kt)("p",null,"After initializing the library, you'll probably also want to identify the current user, so that events can be correlated properly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Identify the user."',title:'"Identify',the:!0,'user."':!0},"posthog.identify(userId);\n")),(0,r.kt)("h3",{id:"capture-and-transform-the-event"},"Capture and transform the event"),(0,r.kt)("p",null,"Attach an event listener to Unleash that listens for ",(0,r.kt)("inlineCode",{parentName:"p"},'"impression"')," events. Inside the listener, transform the event data to the format you want and send it to your analytics service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Capture, transform, and send impression data."',title:'"Capture,',"transform,":!0,and:!0,send:!0,impression:!0,'data."':!0},'// listen for impression events\nunleash.on("impression", (event) => {\n\n    // capture and transform events\n    posthog.capture(event.eventType, {\n        ...event.context,\n        distinct_id: event.context?.userId,\n        featureName: event.featureName,\n        enabled: event.enabled,\n        variant: event.variant,\n    });\n\n});\n')),(0,r.kt)("p",null,"Posthog expects an object with a ",(0,r.kt)("inlineCode",{parentName:"p"},"distinct_id")," property that it uses to correlate data.\nAdditionally, you can add whatever properties you want, such as the feature toggle name, its state and/or variant, or the whole Unleash context.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"posthog.capture")," method sends the event data to your Posthog instance."))}m.isMDXComponent=!0},9688:function(e,t,a){t.Z=a.p+"assets/images/enable-impression-data-existing-toggle-7e781ac1d1fae7415cbc20da4819eefc.png"},3065:function(e,t,a){t.Z=a.p+"assets/images/enable-impression-data-a9bb99269c96d3c42db2e4b9efdcc186.png"}}]);