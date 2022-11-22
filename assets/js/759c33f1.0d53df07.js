"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2702],{74124:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),i=a(86010),s=a(5730),o=a(20636),l=a(76602),u=a(63735);const c="tabList__CuJ",h="tabItem_LNqP";function p(e){var t;const{lazy:a,block:s,defaultValue:p,values:d,groupId:m,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,o.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:b}=(0,l.U)(),[N,T]=(0,r.useState)(k),A=[],{blockElementScrollPositionUntilNextRender:$}=(0,u.o5)();if(null!=m){const e=w[m];null!=e&&e!==N&&v.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=A.indexOf(t),n=v[a].value;n!==N&&($(t),T(n),null!=m&&b(m,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=A.indexOf(e.currentTarget)+1;a=A[t]??A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;a=A[t]??A[A.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},v.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>A.push(e),onKeyDown:S,onClick:E},s,{className:(0,i.Z)("tabs__item",h,null==s?void 0:s.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},48685:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(74124),i=a(11666),s=a(32526);const o=e=>{let{verb:t,payload:a,url:o,title:l,endpointType:u="Unleash server API"}=e;const c=(null==t?void 0:t.toUpperCase())||"",h=JSON.stringify(a,null,2),[p,d]="Unleash server API"===u?["unleash-url","API-token"]:["proxy-url","proxy-client-key"],m=(a?`\n${c} <${p}>/${o}\nAuthorization: <${d}>\ncontent-type: application/json\n\n${h}`:`\n${c} <${p}>/${o}\nAuthorization: <${d}>\ncontent-type: application/json`).trim(),f=(a?`\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <${d}>" \\\n     -X ${c} \\\n     -d '${h}' \\\n     <${p}>/${o}`:`\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <${d}>" \\\n     -X ${c} \\\n     <${p}>/${o}`).trim(),g=(a?`echo '${h}' \\\n| http ${c} \\\n  <${p}>/${o} \\\n  Authorization:<${d}>`:`\nhttp ${c} \\\n  <${p}>/${o} \\\n  Authorization:<${d}> \\\n  ${"POST"!==c||h?"":"--json"}`.trim()).trim();return n.createElement(r.Z,{groupId:"api-request"},n.createElement(i.Z,{value:"http",label:"HTTP"},n.createElement(s.Z,{language:"http",title:l},m)),n.createElement(i.Z,{value:"curl",label:"cURL"},n.createElement(s.Z,{language:"bash",title:l},f)),n.createElement(i.Z,{value:"httpie",label:"HTTPie"},n.createElement(s.Z,{language:"bash",title:l},g)))}},87153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(48685);const s={title:"How to schedule feature releases"},o=void 0,l={unversionedId:"how-to/how-to-schedule-feature-releases",id:"how-to/how-to-schedule-feature-releases",title:"How to schedule feature releases",description:"Placeholders in the code samples below are delimited by angle brackets (i.e. ``). You will need to replace them with the values that are correct in your situation for the code samples to run properly.",source:"@site/docs/how-to/how-to-schedule-feature-releases.mdx",sourceDirName:"how-to",slug:"/how-to/how-to-schedule-feature-releases",permalink:"/how-to/how-to-schedule-feature-releases",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/how-to/how-to-schedule-feature-releases.mdx",tags:[],version:"current",frontMatter:{title:"How to schedule feature releases"},sidebar:"documentation",previous:{title:"How to use custom activation strategies",permalink:"/how-to/how-to-use-custom-strategies"},next:{title:"Environments",permalink:"/how-to/env"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Schedule feature releases with strategy constraints",id:"strategy-constraints",level:2},{value:"Step 1: Add an activation strategy with a date-based constraint",id:"step-1-add-an-activation-strategy-with-a-date-based-constraint",level:3},{value:"Scheduling a release via the UI",id:"scheduling-a-release-via-the-ui",level:4},{value:"Scheduling a release via the API",id:"scheduling-a-release-via-the-api",level:4},{value:"Schedule feature releases with custom activation strategies",id:"custom-activation-strategies",level:2},{value:"Step 1: Define and apply a custom activation strategy",id:"step-1-define-and-apply-a-custom-activation-strategy",level:3},{value:"Step 2: Implement the custom activation strategy in your clients",id:"step-2-implement-the-custom-activation-strategy-in-your-clients",level:3}],h={toc:c};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Placeholders",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Placeholders in the code samples below are delimited by angle brackets (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"<placeholder-name>"),"). You will need to replace them with the values that are correct in ",(0,r.kt)("em",{parentName:"p"},"your")," situation for the code samples to run properly.")),(0,r.kt)("p",null,"There's a whole host of reasons why you may want to schedule the release of a feature, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"to release a feature at a specific date and time")," (for a product launch, for instance)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"to make a feature available only up until a specific moment")," (for a contest cutoff, for instance)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"to make a feature available during a limited period")," (for a 24 hour flash sale, for instance)")),(0,r.kt)("p",null,"There's two distinct ways to do this, depending on which version of Unleash you are running:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you're using version 4.9 or later of Unleash Pro or Enterprise, you can (and should) ",(0,r.kt)("a",{parentName:"li",href:"#strategy-constraints"},"use strategy constraints")),(0,r.kt)("li",{parentName:"ul"},"Otherwise, ",(0,r.kt)("a",{parentName:"li",href:"#custom-activation-strategies"},"use custom activation strategies"))),(0,r.kt)("p",null,"In this guide we'll schedule a feature for release at some point in time. The exact same logic applies if you want to make a feature available until some point in the future. Finally, if you want to only make a feature available during a limited time period, you can easily combine the two options."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This guide assumes that you've got the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"some basic experience with Unleash"),(0,r.kt)("li",{parentName:"ul"},"a running instance of Unleash and connected clients (where applicable)"),(0,r.kt)("li",{parentName:"ul"},"an existing feature toggle that you want to schedule the release for")),(0,r.kt)("h2",{id:"strategy-constraints"},"Schedule feature releases with strategy constraints"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/strategy-constraints#date-and-time-operators"},"Strategy contstraints")," are the easiest way to schedule feature releases (",(0,r.kt)("a",{parentName:"p",href:"/reference/strategy-constraints#incompatibilities"},"as long as your SDKs are up to date"),"). You can use this approach with ",(0,r.kt)("em",{parentName:"p"},"any")," strategy you want. The strategies will work just as they normally do, they just won't become active until the specified time. For example: with the standard strategy, the feature would become available to all your users at the specified time; with a gradual rollout, the rollout would start at the specified time."),(0,r.kt)("h3",{id:"step-1-add-an-activation-strategy-with-a-date-based-constraint"},"Step 1: Add an activation strategy with a date-based constraint"),(0,r.kt)("h4",{id:"scheduling-a-release-via-the-ui"},"Scheduling a release via the UI"),(0,r.kt)("p",null,"To schedule a feature release via the UI:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the desired activation strategy to the feature"),(0,r.kt)("li",{parentName:"ol"},'Open the constraint creator by using the "Add constraint" button'),(0,r.kt)("li",{parentName:"ol"},"Add a date-based constraint by selecting the ",(0,r.kt)("inlineCode",{parentName:"li"},"currentTime")," context field (step 1 in the below image), choosing the ",(0,r.kt)("inlineCode",{parentName:"li"},"DATE_AFTER")," operator (step 2), and setting the point in time where you want the feature to be available from (step 3)\n",(0,r.kt)("img",{alt:"A strategy constraint specifying that the activation strategy should be enabled at 12:00 AM, November 25th 2022. There are visual call-outs pointing to the relevant settings mentioned above.",src:a(17849).Z,width:"1366",height:"760"}))),(0,r.kt)("h4",{id:"scheduling-a-release-via-the-api"},"Scheduling a release via the API"),(0,r.kt)("p",null,"To add an activation strategy via the Admin API, use the feature's ",(0,r.kt)("inlineCode",{parentName:"p"},"strategies")," endpoint to add a new strategy (see the ",(0,r.kt)("a",{parentName:"p",href:"/reference/api/legacy/unleash/admin/features-v2#add-strategy"},"API documentation for adding strategies to feature toggles")," for more details)."),(0,r.kt)("p",null,"The payload's ",(0,r.kt)("inlineCode",{parentName:"p"},'"name"')," property should contain the name of the strategy to apply (see ",(0,r.kt)("a",{parentName:"p",href:"/reference/activation-strategies"},"activation strategies reference documentation")," for all built-in strategies' ",(0,r.kt)("em",{parentName:"p"},"modeling names"),")."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'"constraint"')," object should have the same format as described in the code sample below. The activation date must be in an ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc3339#section-5.8"},"RFC 3339-compatible format"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'"1990-12-31T23:59:60Z"'),"."),(0,r.kt)(i.Z,{verb:"post",payload:{name:"default",constraints:[{value:"<activation-date>",operator:"DATE_AFTER",contextName:"currentTime"}]},url:"api/admin/projects/<project-id>/features/environments/<environment>/strategies",title:"Add a feature activation strategy with a scheduled activation time.",mdxType:"ApiRequest"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'"operator"')," property in the code sample can be replaced with ",(0,r.kt)("a",{parentName:"p",href:"/reference/strategy-constraints#date-and-time-operators"},"any of the other date and time-based operators")," according to your needs."),(0,r.kt)("h2",{id:"custom-activation-strategies"},"Schedule feature releases with custom activation strategies"),(0,r.kt)("p",null,"To schedule feature releases without using strategy constraints, you can use custom activation strategies. This requires defining a custom strategy and then implementing that strategy in your SDKs. For detailed instructions on how to do either of these things, refer to their respective how-to guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-to/how-to-use-custom-strategies#step-1"},"How to ",(0,r.kt)("em",{parentName:"a"},"define")," custom strategies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-to/how-to-use-custom-strategies#step-3"},"How to ",(0,r.kt)("em",{parentName:"a"},"implement")," custom strategies"))),(0,r.kt)("h3",{id:"step-1-define-and-apply-a-custom-activation-strategy"},"Step 1: Define and apply a custom activation strategy"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Define a strategy")," that takes a parameter that tells it when to activate (visit ",(0,r.kt)("a",{parentName:"p",href:"/reference/custom-activation-strategies#definition"},"the custom activation strategy reference documentation")," for full details on definitions):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Give the strategy a name. We'll use ",(0,r.kt)("inlineCode",{parentName:"li"},"enableAfter"),"."),(0,r.kt)("li",{parentName:"ol"},"Give the strategy a required string parameter where the user can enter the time at which the feature should activate. Be sure to describe the format that the user must adhere to."),(0,r.kt)("li",{parentName:"ol"},"Save the strategy")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-use-custom-strategies#step-2"},(0,r.kt)("strong",{parentName:"a"},"Apply the strategy")," to the feature toggle")," you want to schedule."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A custom activation strategy definition for a strategy called `enableAfter`. It takes a required parameter called `start time`: a string in a date format.",src:a(87974).Z,width:"1366",height:"876"})),(0,r.kt)("h3",{id:"step-2-implement-the-custom-activation-strategy-in-your-clients"},"Step 2: Implement the custom activation strategy in your clients"),(0,r.kt)("p",null,"In each of the client SDKs that will interact with your feature, implement the strategy (",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-use-custom-strategies#step-3"},"the implementation how-to guide")," has steps for all SDK types)."))}p.isMDXComponent=!0},87974:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom-strategy-enable-after-340f4a21fe7c8496072a4d636ae3456d.png"},17849:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/strategy-constraint-date-after-4b41afb8feef8c7a3b294155c305a3e4.png"}}]);