"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[81726],{5520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Impression Data"},o=void 0,l={unversionedId:"reference/impression-data",id:"reference/impression-data",title:"Impression Data",description:"The impression data feature was introduced in Unleash 4.7. It is available in the JavaScript-based proxy clients and in some server-side SDKs. Please refer to the SDK compatibility table for an overview of server-side SDKs that support it.",source:"@site/docs/reference/impression-data.md",sourceDirName:"reference",slug:"/reference/impression-data",permalink:"/reference/impression-data",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/impression-data.md",tags:[],version:"current",frontMatter:{title:"Impression Data"},sidebar:"documentation",previous:{title:"Front-end API access",permalink:"/reference/front-end-api"},next:{title:"Login History",permalink:"/reference/login-history"}},s={},p=[{value:"Impression event data",id:"impression-event-data",level:2},{value:"Example <code>isEnabled</code> event",id:"example-isenabled",level:3},{value:"Example <code>getVariant</code> event",id:"example-getvariant",level:3},{value:"Enabling impression data",id:"enabling-impression-data",level:2},{value:"Example setup",id:"example-setup",level:2}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The impression data feature was introduced in ",(0,r.kt)("strong",{parentName:"p"},"Unleash 4.7"),". It is available in the JavaScript-based proxy clients and in some server-side SDKs. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/#server-side-sdk-compatibility-table"},"SDK compatibility table")," for an overview of server-side SDKs that support it.")),(0,r.kt)("p",null,"Unleash can provide you with ",(0,r.kt)("strong",{parentName:"p"},"impression data")," about the toggles in your application. Impression data contains information about a specific feature toggle activation check: The client SDK will emit an ",(0,r.kt)("strong",{parentName:"p"},"impression event")," when it calls ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"getVariant"),". Some front-end SDKs emit impression events only when a toggle is enabled."),(0,r.kt)("admonition",{title:"Front-end SDKs and disabled toggles",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Older versions of the front-end SDKs and other SDKs that connect the ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash proxy")," or the ",(0,r.kt)("a",{parentName:"p",href:"/reference/front-end-api"},"Unleash front-end API")," would ",(0,r.kt)("strong",{parentName:"p"},"not")," emit impression events when a toggle is disabled."),(0,r.kt)("p",{parentName:"admonition"},"This is because impression data is a ",(0,r.kt)("strong",{parentName:"p"},"per-toggle")," setting and the Proxy and front-end API only transmit information about toggles that are enabled. As such, the SDK will never know that it should emit an impression event if a toggle is disabled."),(0,r.kt)("p",{parentName:"admonition"},"Some of the front-end SDKs now include a include a configuration property that lets you turn on impression data for all toggles regardless of whether they're enabled or not.")),(0,r.kt)("p",null,"Impression data was designed to make it easier for you to ",(0,r.kt)("strong",{parentName:"p"},"collect analytics data"),", ",(0,r.kt)("strong",{parentName:"p"},"perform A/B tests"),", and ",(0,r.kt)("strong",{parentName:"p"},"enrich experiments")," in your applications. It contains information about the feature toggle and the related ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-context"},"Unleash Context"),"."),(0,r.kt)("p",null,"Impression data is ",(0,r.kt)("strong",{parentName:"p"},"opt-in on a per-toggle basis"),". Unleash will not emit impression events for toggles not marked as such. Once you've turned impression data on for a toggle, you can start listening for impression events in your client SDK."),(0,r.kt)("h2",{id:"impression-event-data"},"Impression event data"),(0,r.kt)("p",null,"There's two types of impression events you can listen for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example-isenabled"},(0,r.kt)("inlineCode",{parentName:"a"},"isEnabled")," events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example-getvariant"},(0,r.kt)("inlineCode",{parentName:"a"},"getVariant")," events"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getVariant")," event contains all the information found in an ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," event in addition to extra data that's only relevant to ",(0,r.kt)("inlineCode",{parentName:"p"},"getVariant")," calls."),(0,r.kt)("p",null,"This table describes all the properties on the impression events:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Event type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventType")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the event: ",(0,r.kt)("inlineCode",{parentName:"td"},"isEnabled")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"getVariant")),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventId")),(0,r.kt)("td",{parentName:"tr",align:null},"A globally unique id (GUID) assigned to this event."),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:null},"A representation of the current ",(0,r.kt)("a",{parentName:"td",href:"/reference/unleash-context"},"Unleash Context"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the toggle was enabled or not at when the client made the request."),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"featureName")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the feature toggle."),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"variant")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the active variant"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getVariant")," events only")))),(0,r.kt)("h3",{id:"example-isenabled"},"Example ",(0,r.kt)("inlineCode",{parentName:"h3"},"isEnabled")," event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  eventType: 'isEnabled',\n  eventId: '84b41a43-5ba0-47d8-b21f-a60a319607b0',\n  context: {\n    sessionId: 54085233,\n    appName: 'my-webapp',\n    environment: 'default'\n  },\n  enabled: true,\n  featureName: 'my-feature-toggle',\n}\n")),(0,r.kt)("h3",{id:"example-getvariant"},"Example ",(0,r.kt)("inlineCode",{parentName:"h3"},"getVariant")," event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  eventType: 'getVariant',\n  eventId: '84b41a43-5ba0-47d8-b21f-a60a319607b0',\n  context: {\n    sessionId: 54085233,\n    appName: 'my-webapp',\n    environment: 'default'\n  },\n  enabled: true,\n  featureName: 'my-feature-toggle',\n  variant: 'variantA'\n}\n")),(0,r.kt)("h2",{id:"enabling-impression-data"},"Enabling impression data"),(0,r.kt)("p",null,"Impression data is strictly an ",(0,r.kt)("strong",{parentName:"p"},"opt-in")," feature and must be enabled on a ",(0,r.kt)("strong",{parentName:"p"},"per-toggle basis"),". You can enable and disable it both when you create a toggle and when you edit a toggle."),(0,r.kt)("p",null,"You can enable impression data via the impression data toggle in the admin UI's toggle creation form. You can also go via the ",(0,r.kt)("a",{parentName:"p",href:"/reference/api/legacy/unleash/admin/features-v2#create-toggle"},"the API, using the ",(0,r.kt)("inlineCode",{parentName:"a"},"impressionData")," option"),". For more detailed instructions, see ",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-capture-impression-data#step-1"},"the section on enabling impression data in the how-to guide for capturing impression data"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A feature toggle creation form. At the end of the form is a heading that says &quot;Impression data&quot;, a short paragraph that describes the feature, and a toggle to opt in or out of it.",src:n(44430).Z,width:"1366",height:"873"})),(0,r.kt)("h2",{id:"example-setup"},"Example setup"),(0,r.kt)("p",null,"The exact setup will vary depending on your ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/"},"client SDK"),'. The below example configures the [Unleash Proxy client../reference/sdks/javascript-browser) to listen for impression events and log them to the console. If "my-feature-toggle" is configured to emit impression data, then it will trigger an impression event as soon as Unleash is ready.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const unleash = new UnleashClient({\n  url: 'https://eu.unleash-hosted.com/hosted/proxy',\n  clientKey: 'your-proxy-key',\n  appName: 'my-webapp',\n});\n\nunleash.start();\n\nunleash.on('ready', () => {\n  unleash.isEnabled('my-feature-toggle');\n});\n\nunleash.on('impression', (event) => {\n  // Capture the event here and pass it internal data lake or analytics provider\n  console.log(event);\n});\n")))}m.isMDXComponent=!0},44430:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_feat_impression-d4513856d3c9992ba05d9925d46a804e.png"}}]);