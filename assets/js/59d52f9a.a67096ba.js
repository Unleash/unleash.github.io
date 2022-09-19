"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1213],{47680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const i={id:"migration_guide",title:"Migration Guide"},r=void 0,s={unversionedId:"deploy/migration_guide",id:"deploy/migration_guide",title:"Migration Guide",description:"Generally, the intention is that unleash-server should always provide support for clients one major version lower than the current one. This should make it possible to upgrade unleash gradually.",source:"@site/docs/deploy/migration-guide.md",sourceDirName:"deploy",slug:"/deploy/migration_guide",permalink:"/deploy/migration_guide",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/deploy/migration-guide.md",tags:[],version:"current",frontMatter:{id:"migration_guide",title:"Migration Guide"},sidebar:"documentation",previous:{title:"Import & Export",permalink:"/deploy/import_export"},next:{title:"Securing Unleash",permalink:"/deploy/securing_unleash"}},l={},u=[{value:"Upgrading from v3.x to v4.x",id:"upgrading-from-v3x-to-v4x",level:2},{value:"1. All API calls now requires token.",id:"1-all-api-calls-now-requires-token",level:3},{value:"2. Configuring Unleash",id:"2-configuring-unleash",level:3},{value:"3. Role-based Access Control (RBAC)",id:"3-role-based-access-control-rbac",level:3},{value:"4. Legacy v2 routes removed",id:"4-legacy-v2-routes-removed",level:3},{value:"5. Unleash CLI has been removed",id:"5-unleash-cli-has-been-removed",level:3},{value:"Upgrading from v2.x to v3.x",id:"upgrading-from-v2x-to-v3x",level:2},{value:"Upgrading from v1.0 to v2.0",id:"upgrading-from-v10-to-v20",level:2},{value:"Caveat 1: Not used db-migrate to migrate the Unleash database?",id:"caveat-1-not-used-db-migrate-to-migrate-the-unleash-database",level:3},{value:"How to check?",id:"how-to-check",level:4},{value:"How to fix?",id:"how-to-fix",level:4},{value:"Caveat 2: databaseUrl (not database<em>Uri</em>)",id:"caveat-2-databaseurl-not-databaseuri",level:3}],d={toc:u};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Generally, the intention is that ",(0,o.kt)("inlineCode",{parentName:"p"},"unleash-server")," should always provide support for clients one major version lower than the current one. This should make it possible to upgrade ",(0,o.kt)("inlineCode",{parentName:"p"},"unleash")," gradually."),(0,o.kt)("h2",{id:"upgrading-from-v3x-to-v4x"},"Upgrading from v3.x to v4.x"),(0,o.kt)("p",null,"Before you upgrade we strongly recommend that you take a full ",(0,o.kt)("a",{parentName:"p",href:"/deploy/database_backup"},"database backup"),", to make sure you can downgrade to version 3."),(0,o.kt)("p",null,"You can also read the highlights of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/user_guide/v4-whats-new"},"what's new in v4")),"."),(0,o.kt)("h3",{id:"1-all-api-calls-now-requires-token"},"1. All API calls now requires token."),(0,o.kt)("p",null,"If you are upgrading from Unleash Open-Source v3 client SDKs did not need to use an API token in order to connect to Unleash-server. Starting from v4 we have back-ported the API token handling for Enterprise in to the Open-Source version. This means that all client SDKs now need to use a client token in order to connect to Unleash."),(0,o.kt)("p",null,"Read more in the ",(0,o.kt)("a",{parentName:"p",href:"../user_guide/api-token"},"API token documentation"),"."),(0,o.kt)("h3",{id:"2-configuring-unleash"},"2. Configuring Unleash"),(0,o.kt)("p",null,"We have done a lot of changes to the options you can pass in to Unleash. If you are manually configuring Unleash you should have a look on the updated ",(0,o.kt)("a",{parentName:"p",href:"./configuring_unleash"},"configuring Unleash documentation")),(0,o.kt)("h3",{id:"3-role-based-access-control-rbac"},"3. Role-based Access Control (RBAC)"),(0,o.kt)("p",null,"We have implemented RBAC in Unleash v4. This has totally changed the permission system in Unleash."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required actions:"),' If you have implemented "custom authentication" for your users you will need to make changes to your integration:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"extendedPermissions"),' option has been removed. You can no longer specify custom permission per-user basis. All "logged_in users" must belong to a "root" role. This can be "Admin", "Editor" or "Viewer". This is taken care of when you create new users via userService.'),(0,o.kt)("li",{parentName:"ul"},'All "logged-in users" needs to be defined in Unleash and have a unique ID. This can be achieved by calling "createUser" on "userService".')),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const user = userService.loginUserWithoutPassword(\n  'some@getunleash.io',\n  false, // autoCreateUser. Set to true if you want to create users on the fly.\n);\n\n// The user needs to be set on the current active session\nreq.session.user = user;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/deploy/securing_unleash"},"Read more about Securing Unleash v4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../user_guide/rbac"},"Read more about RBAC"))),(0,o.kt)("h3",{id:"4-legacy-v2-routes-removed"},"4. Legacy v2 routes removed"),(0,o.kt)("p",null,"Only relevant if you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"enableLegacyRoutes")," option."),(0,o.kt)("p",null,"In v2 you could query feature toggles on ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/features"),". This was deprecated in v4 and we introduced two different endpoints (",(0,o.kt)("inlineCode",{parentName:"p"},"/api/admin/features")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/client/features"),") to be able to optimize performance and security. In v3 you could still enable the legacy routes via the ",(0,o.kt)("inlineCode",{parentName:"p"},"enableLegacyRoutes")," option. This was removed in v4."),(0,o.kt)("h3",{id:"5-unleash-cli-has-been-removed"},"5. Unleash CLI has been removed"),(0,o.kt)("p",null,"Unleash no longer ships with a binary that allows you to start Unleash directly from the command line. From v4 you need to either use Unleash via docker or programmatically."),(0,o.kt)("p",null,"Read more in our ",(0,o.kt)("a",{parentName:"p",href:"./getting_started"},"getting started documentation")),(0,o.kt)("h2",{id:"upgrading-from-v2x-to-v3x"},"Upgrading from v2.x to v3.x"),(0,o.kt)("p",null,"The notable change introduced in Unleash v3.x is a strict separation of API paths for client requests and admin requests. This makes it easier to implement different authentication mechanisms for the admin UI and all unleash-clients. You can read more about ",(0,o.kt)("a",{parentName:"p",href:"/deploy/securing_unleash"},"securing unleash"),"."),(0,o.kt)("p",null,"The recommended approach is to first upgrade the ",(0,o.kt)("inlineCode",{parentName:"p"},"unleash-server")," to v3 (which still supports v2 clients). After this is done, you should upgrade all your clients to v3."),(0,o.kt)("p",null,"After upgrading all your clients, you should consider turning off legacy routes, used by v2 clients. To do this, set the configuration option ",(0,o.kt)("inlineCode",{parentName:"p"},"enableLegacyRoutes")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," as described in the ",(0,o.kt)("a",{parentName:"p",href:"/deploy/configuring_unleash_v3"},"page on configuring Unleash v3"),"."),(0,o.kt)("h2",{id:"upgrading-from-v10-to-v20"},"Upgrading from v1.0 to v2.0"),(0,o.kt)("h3",{id:"caveat-1-not-used-db-migrate-to-migrate-the-unleash-database"},"Caveat 1: Not used db-migrate to migrate the Unleash database?"),(0,o.kt)("p",null,"In FINN we used liquibase, for internal reasons, to migrate our database. Because unleash from version 2.0 migrates the database internally, with db-migrate, you need to make sure that all previous migrations for version 1 exist, so that Unleash does not try to create already existing tables."),(0,o.kt)("h4",{id:"how-to-check"},"How to check?"),(0,o.kt)("p",null,'If you don\'t have a "migrations" table with ',(0,o.kt)("em",{parentName:"p"},"7 unique migrations")," you are affected by this."),(0,o.kt)("h4",{id:"how-to-fix"},"How to fix?"),(0,o.kt)("p",null,"Before starting unleash version 2 you have to run the SQL located under ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/fix-migrations-version-1.sql")),(0,o.kt)("h3",{id:"caveat-2-databaseurl-not-databaseuri"},"Caveat 2: databaseUrl (not database",(0,o.kt)("em",{parentName:"h3"},"Uri"),")"),(0,o.kt)("p",null,"Using Unleash as a library and injecting your own config? Then you should know that we changed the ",(0,o.kt)("inlineCode",{parentName:"p"},"databaseUri")," config param name to ",(0,o.kt)("strong",{parentName:"p"},"databaseUrl"),". This is to make sure the param is aligned with the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," and avoid multiple names for the same config param."))}h.isMDXComponent=!0}}]);