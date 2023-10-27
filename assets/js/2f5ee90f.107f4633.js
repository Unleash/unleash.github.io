"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[81496],{57220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"API tokens and client keys"},s=void 0,i={unversionedId:"reference/api-tokens-and-client-keys",id:"reference/api-tokens-and-client-keys",title:"API tokens and client keys",description:"For Unleash to be of any use, it requires at least a server and a consuming client. More advanced use cases may call for multiple clients, automated feature toggle updates, the Unleash proxy and Unleash proxy clients, and more. To facilitate communication between all these moving parts, Unleash uses a system of API tokens and client keys, all with a specific purpose in mind.",source:"@site/docs/reference/api-tokens-and-client-keys.mdx",sourceDirName:"reference",slug:"/reference/api-tokens-and-client-keys",permalink:"/reference/api-tokens-and-client-keys",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/api-tokens-and-client-keys.mdx",tags:[],version:"current",frontMatter:{title:"API tokens and client keys"},sidebar:"documentation",previous:{title:"Activation Strategies",permalink:"/reference/activation-strategies"},next:{title:"Archived toggles",permalink:"/reference/archived-toggles"}},l={},p=[{value:"API tokens",id:"api-tokens",level:2},{value:"The parts of an API token",id:"token-data",level:3},{value:"API token visibility",id:"api-token-visibility",level:3},{value:"Admin tokens",id:"admin-tokens",level:3},{value:"Personal access tokens",id:"personal-access-tokens",level:3},{value:"Client tokens",id:"client-tokens",level:3},{value:"Front-end tokens",id:"front-end-tokens",level:3},{value:"Format",id:"format",level:3},{value:"Version 1",id:"version-1",level:4},{value:"Version 2",id:"version-2",level:4},{value:"Proxy client keys",id:"proxy-client-keys",level:2}],k={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For Unleash to be of any use, it requires at least a server and a ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/"},"consuming client"),". More advanced use cases may call for multiple clients, automated feature toggle updates, the ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash proxy")," and ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/#front-end-sdks"},"Unleash proxy clients"),", and more. To facilitate communication between all these moving parts, Unleash uses a system of API tokens and client keys, all with a specific purpose in mind."),(0,r.kt)("p",null,"This document details the three kinds of tokens and keys that you will need to fully connect any Unleash system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#admin-tokens"},"Admin tokens")," for updating resources in Unleash"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#client-tokens"},"Client tokens")," for connecting server-side client SDKs and the Unleash proxy to the Unleash server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#proxy-client-keys"},"Proxy client keys")," for connecting proxy client SDKs to the Unleash proxy.")),(0,r.kt)("h2",{id:"api-tokens"},"API tokens"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This section describes what API tokens are. For information on how to create them, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"how-to guide for creating API tokens"),".")),(0,r.kt)("p",null,"Use API tokens to connect to the Unleash server API. API tokens come in four distinct types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#admin-tokens"},"Admin tokens")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#personal-access-tokens"},"Personal access tokens")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#client-tokens"},"Client tokens")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#front-end-tokens"},"Front-end tokens"))),(0,r.kt)("p",null,"All types use ",(0,r.kt)("a",{parentName:"p",href:"#format"},"the same format")," but have different intended uses. Admin and client tokens are ",(0,r.kt)("em",{parentName:"p"},"secrets")," and should ",(0,r.kt)("em",{parentName:"p"},"not")," be exposed to end users. Front-end tokens, on the other hand, are not secret."),(0,r.kt)("h3",{id:"token-data"},"The parts of an API token"),(0,r.kt)("p",null,"Admin, client and front-end tokens contain the following pieces of information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'Token name (sometimes called "username")'),(0,r.kt)("td",{parentName:"tr",align:null},"The token's name. Names are ",(0,r.kt)("strong",{parentName:"td"},"not")," required to be unique.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Type"),(0,r.kt)("td",{parentName:"tr",align:null},"What kind of token it is: admin, client, or front-end.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Projects"),(0,r.kt)("td",{parentName:"tr",align:null},"What projects a token has access to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"What environment the token has access to.")))),(0,r.kt)("p",null,"Personal access tokens follow their own special format, and only contain an optional description for the token and an expiry date."),(0,r.kt)("h3",{id:"api-token-visibility"},"API token visibility"),(0,r.kt)("admonition",{title:"project-level visibility",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Project-level visibility and access to API tokens was introduced in Unleash 4.22.")),(0,r.kt)("p",null,"By default, only admin users can create API tokens, and only admins can see their values."),(0,r.kt)("p",null,"However, any ","[client]","(#client-tokens client tokens) and ",(0,r.kt)("a",{parentName:"p",href:"#front-end-tokens"},"front-end tokens")," that are applicable to a project, will also be visible to any members of that project that have the ",(0,r.kt)("inlineCode",{parentName:"p"},"READ_PROJECT_API_TOKEN")," permission (all project members by default)."),(0,r.kt)("p",null,"Similarly, any project members with the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE_PROJECT_API_TOKEN")," permission can also create client and front-end tokens for that specific project (",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-create-project-api-tokens"},"how to create project API tokens"),")."),(0,r.kt)("h3",{id:"admin-tokens"},"Admin tokens"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Admin tokens")," grant ",(0,r.kt)("em",{parentName:"p"},"full read and write access")," to all resources in the Unleash server API. Admin tokens have access to all projects, all environments, and all root resources (find out more about ",(0,r.kt)("a",{parentName:"p",href:"/reference/rbac#core-principles"},"resources in the RBAC document"),")."),(0,r.kt)("p",null,"Use admin tokens to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automate Unleash behavior such as creating feature toggles, projects, etc."),(0,r.kt)("li",{parentName:"ul"},"Write custom Unleash UIs to replace the default Unleash admin UI.")),(0,r.kt)("p",null,"Do ",(0,r.kt)("strong",{parentName:"p"},"not")," use admin tokens for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/sdks/"},"Client SDKs"),": You will ",(0,r.kt)("em",{parentName:"li"},"not")," be able to read toggle data from multiple environments. Use ",(0,r.kt)("a",{parentName:"li",href:"#client-tokens"},"client tokens")," instead.")),(0,r.kt)("p",null,"Support for scoped admin tokens with more fine-grained permissions is currently in the planning stage."),(0,r.kt)("h3",{id:"personal-access-tokens"},"Personal access tokens"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Personal access tokens")," are a special form of admin tokens and grant access to the same resources that the user that created them has access to. These permissions are dynamic, so if a user's permissions change through addition of a custom role, the token will likewise have altered permissions."),(0,r.kt)("p",null,"When using a personal access token to modify resources, the event log will list the token creator's name for that operation."),(0,r.kt)("p",null,"Personal access tokens with a lifetime ",(0,r.kt)("strong",{parentName:"p"},"will stop working after the expiration date"),"."),(0,r.kt)("p",null,"Use personal access tokens to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provide more fine-grained permissions for automation than an admin token provides"),(0,r.kt)("li",{parentName:"ul"},"Give temporary access to an automation tool")),(0,r.kt)("admonition",{title:"On token expiration",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is possible to set a token's expiration date to ",(0,r.kt)("strong",{parentName:"p"},"never"),". However, a token that doesn't expire brings with it a few security concerns. We recommend that you use tokens with expiration dates whenever possible.")),(0,r.kt)("p",null,"Do ",(0,r.kt)("strong",{parentName:"p"},"not")," use personal access tokens for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/sdks/"},"Client SDKs"),": You will ",(0,r.kt)("em",{parentName:"li"},"not")," be able to read toggle data from multiple environments. Use ",(0,r.kt)("a",{parentName:"li",href:"#client-tokens"},"client tokens")," instead."),(0,r.kt)("li",{parentName:"ul"},"Write custom Unleash UIs: Personal access tokens may expire and their permissions may change. It's better to use ",(0,r.kt)("a",{parentName:"li",href:"#admin-tokens"},"admin tokens")," tokens instead.")),(0,r.kt)("h3",{id:"client-tokens"},"Client tokens"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Client tokens")," are intended for use in ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/#server-side-sdks"},"server-side client SDKs")," (including the Unleash Proxy) and grant the user permissions to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read feature toggle information"),(0,r.kt)("li",{parentName:"ul"},"Register applications with the Unleash server"),(0,r.kt)("li",{parentName:"ul"},"Send usage metrics")),(0,r.kt)("p",null,"When creating a client token, you can choose which projects it should be able to read data from. You can give it access to a specific list of projects or to all projects (including projects that don't exist yet). Prior to Unleash 4.10, a token could be valid only for a ",(0,r.kt)("em",{parentName:"p"},"single project")," or ",(0,r.kt)("em",{parentName:"p"},"all projects"),"."),(0,r.kt)("p",null,"Each client token is only ",(0,r.kt)("strong",{parentName:"p"},"valid for a single environment"),"."),(0,r.kt)("p",null,"Use client tokens:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("a",{parentName:"li",href:"/reference/sdks/#server-side-sdks"},"server-side client SDKs")),(0,r.kt)("li",{parentName:"ul"},"To connect ",(0,r.kt)("a",{parentName:"li",href:"/reference/unleash-proxy"},"the Unleash Proxy")," to the Unleash API")),(0,r.kt)("p",null,"Do ",(0,r.kt)("strong",{parentName:"p"},"not")," use client tokens in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/sdks/#front-end-sdks"},"Front-end SDKs"),". You will ",(0,r.kt)("em",{parentName:"li"},"not")," be able to connect to the Unleash server due to CORS restrictions. To connect front-end SDKs, choose one of the following options:"),(0,r.kt)("li",{parentName:"ul"},"Enable the ",(0,r.kt)("a",{parentName:"li",href:"/reference/front-end-api"},"Unleash front-end API")," and create a ",(0,r.kt)("a",{parentName:"li",href:"#front-end-tokens"},"front-end token"),"."),(0,r.kt)("li",{parentName:"ul"},"Configure an ",(0,r.kt)("a",{parentName:"li",href:"/reference/unleash-proxy"},"Unleash Proxy")," and use ",(0,r.kt)("a",{parentName:"li",href:"#proxy-client-keys"},"Proxy client keys"),".")),(0,r.kt)("h3",{id:"front-end-tokens"},"Front-end tokens"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Front-end tokens")," are used with ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/#front-end-sdks"},"front-end SDKs")," when used with the ",(0,r.kt)("a",{parentName:"p",href:"/reference/front-end-api"},"Unleash front-end API"),". They grant the user permission to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read the enabled toggled for a given context"),(0,r.kt)("li",{parentName:"ul"},"Register applications with the Unleash server"),(0,r.kt)("li",{parentName:"ul"},"Send usage metrics")),(0,r.kt)("p",null,"As with ",(0,r.kt)("a",{parentName:"p",href:"#client-tokens"},"client tokens"),", front-end tokens can read data from one, multiple, or all existing projects."),(0,r.kt)("p",null,"Each front-end token is only ",(0,r.kt)("strong",{parentName:"p"},"valid for a single environment"),"."),(0,r.kt)("p",null,"Use front-end tokens in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/sdks/#front-end-sdks"},"Front-end SDKs (also known as ",(0,r.kt)("em",{parentName:"a"},"proxy clients"),")"),".")),(0,r.kt)("p",null,"Do ",(0,r.kt)("strong",{parentName:"p"},"not")," use front-end tokens in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/sdks/#server-side-sdks"},"Server-side SDKs"),". The format is different, so they won't work correctly.")),(0,r.kt)("h3",{id:"format"},"Format"),(0,r.kt)("p",null,"API tokens come in one of two formats. When we introduced ",(0,r.kt)("a",{parentName:"p",href:"/reference/environments"},"environments")," in Unleash 4.3, we updated the format of the tokens to provide more human-readable information to the user. Both formats are still valid (you don't need to update a working token of the old format) and are described below."),(0,r.kt)("h4",{id:"version-1"},"Version 1"),(0,r.kt)("p",null,"The first version of API tokens was a 64 character long hexadecimal string. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"be44368985f7fb3237c584ef86f3d6bdada42ddbd63a019d26955178\n")),(0,r.kt)("h4",{id:"version-2"},"Version 2"),(0,r.kt)("p",null,"API tokens consist of three parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Project(s)"),(0,r.kt)("li",{parentName:"ol"},"Environment"),(0,r.kt)("li",{parentName:"ol"},"Hash")),(0,r.kt)("p",null,"The parts are separated by two different separators: A colon (",(0,r.kt)("inlineCode",{parentName:"p"},":"),") between the project(s) and the environment, and a full stop (",(0,r.kt)("inlineCode",{parentName:"p"},"."),") between the environment and the hash."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"project(s)")," part is one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The id of a specific project, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"default"),". This indicates that the token is ",(0,r.kt)("strong",{parentName:"li"},"only valid for this project"),"."),(0,r.kt)("li",{parentName:"ul"},"A pair of opening and closing square brackets: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),". This indicates that the token is ",(0,r.kt)("strong",{parentName:"li"},"valid for a discrete list of projects"),". The list of projects is not shown in the token."),(0,r.kt)("li",{parentName:"ul"},"An asterisk: ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),". This indicates that the token is ",(0,r.kt)("strong",{parentName:"li"},"valid for all projects (current and future)"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"environment")," is the name of an environment on your Unleash server, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"development"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"hash")," is 64 character long hexadecimal string."),(0,r.kt)("p",null,"Personal access tokens do not contain project or environment information, since they mimic the user that created them. Instead, the token starts with the string ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"."),(0,r.kt)("p",null,"Some example client tokens are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'A token with access to toggles in the "development" environment of a single project, "project-a":',(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"project-a:development.be44368985f7fb3237c584ef86f3d6bdada42ddbd63a019d26955178\n"))),(0,r.kt)("li",{parentName:"ul"},'A token with access to toggles in the "production" environment multiple projects:',(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"[]:production.be44368985f7fb3237c584ef86f3d6bdada42ddbd63a019d26955178\n"))),(0,r.kt)("li",{parentName:"ul"},'A token with access to toggles in the "development" environment of all projects:',(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"*:development.be44368985f7fb3237c584ef86f3d6bdada42ddbd63a019d26955178\n"))),(0,r.kt)("li",{parentName:"ul"},"A personal access token:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"user:be7536c3a160ff15e3a92da45de531dd54bc1ae15d8455c0476f086b\n")))),(0,r.kt)("h2",{id:"proxy-client-keys"},"Proxy client keys"),(0,r.kt)("p",null,"Use proxy client keys to connect ",(0,r.kt)("a",{parentName:"p",href:"/reference/sdks/#front-end-sdks"},"Proxy client SDKs (front-end SDKs)")," to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash Proxy"),". As opposed to the ",(0,r.kt)("a",{parentName:"p",href:"#api-tokens"},"API tokens"),", Proxy client keys are ",(0,r.kt)("em",{parentName:"p"},"not")," considered secret and are safe to use on any clients (refer to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy#we-care-about-privacy"},"the proxy documentation for more about privacy"),"). They do ",(0,r.kt)("em",{parentName:"p"},"not")," let you connect to the Unleash server API."),(0,r.kt)("p",null,"Proxy client keys are arbitrary strings that you ",(0,r.kt)("em",{parentName:"p"},"must")," provide the Unleash proxy with on startup. They can be whatever you want and you ",(0,r.kt)("strong",{parentName:"p"},"create them yourself"),"."),(0,r.kt)("admonition",{title:"Creating proxy client keys",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To designate a string as a proxy client key, add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"clientKeys")," list when starting the proxy, as mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"/reference/unleash-proxy#configuration"},(0,r.kt)("em",{parentName:"a"},"configuration")," section of the Unleash proxy documentation"),". Connecting clients should then specify the same string as their client key.")),(0,r.kt)("p",null,"Unleash does not generate proxy client keys for you. Because of this, they have no specific format."),(0,r.kt)("p",null,"Use Proxy client keys to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect ",(0,r.kt)("a",{parentName:"li",href:"/reference/sdks/#front-end-sdks"},"Proxy client SDKs")," to the ",(0,r.kt)("a",{parentName:"li",href:"/reference/unleash-proxy"},"Unleash Proxy")),(0,r.kt)("li",{parentName:"ul"},"Connect your own custom Proxy clients (or pure HTTP requests) to the Unleash Proxy")),(0,r.kt)("p",null,"Do ",(0,r.kt)("strong",{parentName:"p"},"not")," use Proxy client keys to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to the Unleash API. It will not work. Use an appropriate ",(0,r.kt)("a",{parentName:"li",href:"#api-tokens"},"API token")," instead.")))}c.isMDXComponent=!0}}]);