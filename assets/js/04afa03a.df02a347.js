"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[81166],{99878:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(67294),o=a(86010),r=a(18015),i=a(11614);const s="admonition_LlT9",l="admonitionHeading_tbUL",d="admonitionIcon_kALy",u="admonitionContent_S0QG";var h=a(25108);const p={note:{infimaClassName:"secondary",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:n.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:n.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:n.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:n.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:n.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){const{mdxAdmonitionTitle:t,rest:a}=function(e){const t=n.Children.toArray(e),a=t.find((e=>n.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=n.createElement(n.Fragment,null,t.filter((e=>e!==a)));return{mdxAdmonitionTitle:a,rest:o}}(e.children);return{...e,title:e.title??t,children:a}}function g(e){const{children:t,type:a,title:i,icon:g}=m(e),v=function(e){const t=c[e]??e;return p[t]||(h.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),p.info)}(a),f=i??v.label,{iconComponent:k}=v,y=g??n.createElement(k,null);return n.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${v.infimaClassName}`,s)},n.createElement("div",{className:l},n.createElement("span",{className:d},y),f),n.createElement("div",{className:u},t))}},640:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(99878);const r=e=>{let{videoUrls:t}=e;return n.createElement("article",{className:"unleash-video-container"},t?t.map((e=>n.createElement("iframe",{key:e,width:"100%",height:"auto",src:e,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0}))):n.createElement(o.Z,{type:"danger"},"You need to provide YouTube video URLs for this component to work properly."))}},95972:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),o=(a(67294),a(3905)),r=a(640);const i={title:"Upgrading Unleash"},s=void 0,l={unversionedId:"using-unleash/deploy/upgrading-unleash",id:"using-unleash/deploy/upgrading-unleash",title:"Upgrading Unleash",description:"Generally, the intention is that unleash-server should always provide support for clients one major version lower than the current one. This should make it possible to upgrade unleash gradually.",source:"@site/docs/using-unleash/deploy/upgrading-unleash.md",sourceDirName:"using-unleash/deploy",slug:"/using-unleash/deploy/upgrading-unleash",permalink:"/using-unleash/deploy/upgrading-unleash",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/using-unleash/deploy/upgrading-unleash.md",tags:[],version:"current",frontMatter:{title:"Upgrading Unleash"},sidebar:"documentation",previous:{title:"Google Auth Hook",permalink:"/using-unleash/deploy/google-auth-hook"},next:{title:"Securing Unleash",permalink:"/using-unleash/deploy/securing-unleash"}},d={},u=[{value:"Upgrading directly from v3.x to v5.x",id:"upgrading-directly-from-v3x-to-v5x",level:2},{value:"Upgrading from v4.x to v5.x",id:"upgrading-from-v4x-to-v5x",level:2},{value:"Requires Node.js version 18+",id:"requires-nodejs-version-18",level:3},{value:"The Google Authenticator provider for SSO has been removed",id:"the-google-authenticator-provider-for-sso-has-been-removed",level:3},{value:"Default database password",id:"default-database-password",level:3},{value:"The /api/admin/features API is gone",id:"the-apiadminfeatures-api-is-gone",level:3},{value:"Error message structure",id:"error-message-structure",level:3},{value:"Upgrading from v3.x to v4.x",id:"upgrading-from-v3x-to-v4x",level:2},{value:"1. All API calls now require a token.",id:"1-all-api-calls-now-requires-token",level:3},{value:"2. Configuring Unleash",id:"2-configuring-unleash",level:3},{value:"3. Role-based Access Control (RBAC)",id:"3-role-based-access-control-rbac",level:3},{value:"4. Legacy v2 routes removed",id:"4-legacy-v2-routes-removed",level:3},{value:"5. Unleash CLI has been removed",id:"5-unleash-cli-has-been-removed",level:3},{value:"Upgrading from v2.x to v3.x",id:"upgrading-from-v2x-to-v3x",level:2},{value:"Upgrading from v1.0 to v2.0",id:"upgrading-from-v10-to-v20",level:2},{value:"Caveat 1: Not used db-migrate to migrate the Unleash database?",id:"caveat-1-not-used-db-migrate-to-migrate-the-unleash-database",level:3},{value:"How to check?",id:"how-to-check",level:4},{value:"How to fix?",id:"how-to-fix",level:4},{value:"Caveat 2: databaseUrl (not database<em>Uri</em>)",id:"caveat-2-databaseurl-not-databaseuri",level:3}],h={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Generally, the intention is that ",(0,o.kt)("inlineCode",{parentName:"p"},"unleash-server")," should always provide support for clients one major version lower than the current one. This should make it possible to upgrade ",(0,o.kt)("inlineCode",{parentName:"p"},"unleash")," gradually."),(0,o.kt)("h2",{id:"upgrading-directly-from-v3x-to-v5x"},"Upgrading directly from v3.x to v5.x"),(0,o.kt)(r.Z,{videoUrls:["https://www.youtube.com/embed/qmusq_9mE2E"],mdxType:"VideoContent"}),(0,o.kt)("p",null,"Ivar \xd8sthus, Unleash CTO and Co-Founder, demonstrates how to update Unleash 3.x to Unleash 5.x in just a few minutes with no downtime. You can also ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=qmusq_9mE2E&cc_load_policy=1"},"watch this on YouTube with a transcript"),"."),(0,o.kt)("h2",{id:"upgrading-from-v4x-to-v5x"},"Upgrading from v4.x to v5.x"),(0,o.kt)("p",null,"Unleash v5 was released on April 27th, 2023. It contains a few breaking changes."),(0,o.kt)("h3",{id:"requires-nodejs-version-18"},"Requires Node.js version 18+"),(0,o.kt)("p",null,"Unleash v5 drops support Node.js versions below 18, which is the current active LTS at the time of release. Unleash v4 officially supported Node.js v14 and v16, but both of these will reach end of life in 2023."),(0,o.kt)("h3",{id:"the-google-authenticator-provider-for-sso-has-been-removed"},"The Google Authenticator provider for SSO has been removed"),(0,o.kt)("p",null,"The Google Authenticator provider is now hidden by default. We recommend using ",(0,o.kt)("a",{parentName:"p",href:"/how-to/how-to-add-sso-open-id-connect"},"OpenID Connect")," instead."),(0,o.kt)("p",null,"However, if you are running a self hosted version of Unleash and you need to temporarily re-enable Google SSO, you can do so by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"GOOGLE_AUTH_ENABLED")," environment variable to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". If you're running a hosted version of Unleash, you'll need to reach out to us and ask us to re-enable the flag. However, the ability to do this will be removed in a future release and this is not safe to depend on."),(0,o.kt)("p",null,"This provider was deprecated in v4."),(0,o.kt)("h3",{id:"default-database-password"},"Default database password"),(0,o.kt)("p",null,"The Unleash default database password is now ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"passord"),". Turns out that the Norwegian word for password is too similar to the English word, and that people would think it was a typo."),(0,o.kt)("p",null,"This should only impact dev builds and initial setup. You should never use the default password in any production environments."),(0,o.kt)("h3",{id:"the-apiadminfeatures-api-is-gone"},"The /api/admin/features API is gone"),(0,o.kt)("p",null,"Most of the old features API was deprecated in v4.3 and superseded by the project API instead. In v5, the deprecated parts have been completely removed. The only operations on that API that are still active are the operations to add or remove a tag from a feature toggle."),(0,o.kt)("h3",{id:"error-message-structure"},"Error message structure"),(0,o.kt)("p",null,"Some of Unleash's API error messages have changed their structure. Specifically, this applies to error messages generated by our OpenAPI validation layer. However, only their structure has changed (and they now contain more human-friendly messages); the error codes should still be the same."),(0,o.kt)("p",null,"Previously, they would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error": "Request validation failed",\n  "validation": [\n    {\n      "keyword": "type",\n      "dataPath": ".body.parameters",\n      "schemaPath": "#/components/schemas/addonCreateUpdateSchema/properties/parameters/type",\n      "params": {\n        "type": "object"\n      },\n      "message": "should be object"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Now they look like this instead, and are more in line with the rest of Unleash's error messages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "37a1765f-a5a0-4371-8aa2-341f331579f9",\n  "name": "ValidationError",\n  "message": "Request validation failed: the payload you provided doesn\'t conform to the schema. Check the `details` property for a list of errors that we found.",\n  "details": [\n    {\n      "description": "The .parameters property should be object. You sent [].",\n      "path": "parameters"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"As such, if you're relying on the specifics of the error structure for those API errors, you might need to update your handling."),(0,o.kt)("h2",{id:"upgrading-from-v3x-to-v4x"},"Upgrading from v3.x to v4.x"),(0,o.kt)("p",null,"Before you upgrade we strongly recommend that you take a full ",(0,o.kt)("a",{parentName:"p",href:"database-backup"},"database backup"),", to make sure you can downgrade to version 3."),(0,o.kt)("p",null,"You can also read the highlights of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/user_guide/v4-whats-new"},"what's new in v4")),"."),(0,o.kt)("h3",{id:"1-all-api-calls-now-requires-token"},"1. All API calls now require a token."),(0,o.kt)("p",null,"If you are upgrading from Unleash Open-Source v3 client SDKs did not need to use an API token in order to connect to Unleash-server. Starting from v4 we have back-ported the API token handling for Enterprise in to the Open-Source version. This means that all client SDKs now need to use a client token in order to connect to Unleash."),(0,o.kt)("p",null,"Read more in the ",(0,o.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"API token documentation"),"."),(0,o.kt)("h3",{id:"2-configuring-unleash"},"2. Configuring Unleash"),(0,o.kt)("p",null,"We have done a lot of changes to the options you can pass in to Unleash. If you are manually configuring Unleash you should have a look on the updated ",(0,o.kt)("a",{parentName:"p",href:"/using-unleash/deploy/configuring-unleash"},"configuring Unleash documentation")),(0,o.kt)("h3",{id:"3-role-based-access-control-rbac"},"3. Role-based Access Control (RBAC)"),(0,o.kt)("p",null,"We have implemented RBAC in Unleash v4. This has totally changed the permission system in Unleash."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required actions:"),' If you have implemented "custom authentication" for your users you will need to make changes to your integration:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"extendedPermissions"),' option has been removed. You can no longer specify custom permission per-user basis. All "logged_in users" must belong to a "root" role. This can be "Admin", "Editor" or "Viewer". This is taken care of when you create new users via userService.'),(0,o.kt)("li",{parentName:"ul"},'All "logged-in users" needs to be defined in Unleash and have a unique ID. This can be achieved by calling "createUser" on "userService".')),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const user = userService.loginUserWithoutPassword(\n  'some@getunleash.io',\n  false, // autoCreateUser. Set to true if you want to create users on the fly.\n);\n\n// The user needs to be set on the current active session\nreq.session.user = user;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/using-unleash/deploy/securing-unleash"},"Read more about Securing Unleash v4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/rbac"},"Read more about RBAC"))),(0,o.kt)("h3",{id:"4-legacy-v2-routes-removed"},"4. Legacy v2 routes removed"),(0,o.kt)("p",null,"Only relevant if you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"enableLegacyRoutes")," option."),(0,o.kt)("p",null,"In v2 you could query feature toggles on ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/features"),". This was deprecated in v4 and we introduced two different endpoints (",(0,o.kt)("inlineCode",{parentName:"p"},"/api/admin/features")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/client/features"),") to be able to optimize performance and security. In v3 you could still enable the legacy routes via the ",(0,o.kt)("inlineCode",{parentName:"p"},"enableLegacyRoutes")," option. This was removed in v4."),(0,o.kt)("h3",{id:"5-unleash-cli-has-been-removed"},"5. Unleash CLI has been removed"),(0,o.kt)("p",null,"Unleash no longer ships with a binary that allows you to start Unleash directly from the command line. From v4 you need to either use Unleash via docker or programmatically."),(0,o.kt)("p",null,"Read more in our ",(0,o.kt)("a",{parentName:"p",href:"/using-unleash/deploy/getting-started"},"getting started documentation")),(0,o.kt)("h2",{id:"upgrading-from-v2x-to-v3x"},"Upgrading from v2.x to v3.x"),(0,o.kt)("p",null,"The notable change introduced in Unleash v3.x is a strict separation of API paths for client requests and admin requests. This makes it easier to implement different authentication mechanisms for the admin UI and all unleash-clients. You can read more about ",(0,o.kt)("a",{parentName:"p",href:"/using-unleash/deploy/securing-unleash"},"securing unleash"),"."),(0,o.kt)("p",null,"The recommended approach is to first upgrade the ",(0,o.kt)("inlineCode",{parentName:"p"},"unleash-server")," to v3 (which still supports v2 clients). After this is done, you should upgrade all your clients to v3."),(0,o.kt)("p",null,"After upgrading all your clients, you should consider turning off legacy routes, used by v2 clients. To do this, set the configuration option ",(0,o.kt)("inlineCode",{parentName:"p"},"enableLegacyRoutes")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," as described in the ",(0,o.kt)("a",{parentName:"p",href:"/using-unleash/deploy/configuring-unleash-v3"},"page on configuring Unleash v3"),"."),(0,o.kt)("h2",{id:"upgrading-from-v10-to-v20"},"Upgrading from v1.0 to v2.0"),(0,o.kt)("h3",{id:"caveat-1-not-used-db-migrate-to-migrate-the-unleash-database"},"Caveat 1: Not used db-migrate to migrate the Unleash database?"),(0,o.kt)("p",null,"In FINN we used liquibase, for internal reasons, to migrate our database. Because unleash from version 2.0 migrates the database internally, with db-migrate, you need to make sure that all previous migrations for version 1 exist, so that Unleash does not try to create already existing tables."),(0,o.kt)("h4",{id:"how-to-check"},"How to check?"),(0,o.kt)("p",null,'If you don\'t have a "migrations" table with ',(0,o.kt)("em",{parentName:"p"},"7 unique migrations")," you are affected by this."),(0,o.kt)("h4",{id:"how-to-fix"},"How to fix?"),(0,o.kt)("p",null,"Before starting unleash version 2 you have to run the SQL located under ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/fix-migrations-version-1.sql")),(0,o.kt)("h3",{id:"caveat-2-databaseurl-not-databaseuri"},"Caveat 2: databaseUrl (not database",(0,o.kt)("em",{parentName:"h3"},"Uri"),")"),(0,o.kt)("p",null,"Using Unleash as a library and injecting your own config? Then you should know that we changed the ",(0,o.kt)("inlineCode",{parentName:"p"},"databaseUri")," config param name to ",(0,o.kt)("strong",{parentName:"p"},"databaseUrl"),". This is to make sure the param is aligned with the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," and avoid multiple names for the same config param."))}p.isMDXComponent=!0}}]);