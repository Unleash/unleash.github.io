"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[77567],{95570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={title:"Configuring Unleash v3"},l=void 0,r={unversionedId:"using-unleash/deploy/configuring-unleash-v3",id:"using-unleash/deploy/configuring-unleash-v3",title:"Configuring Unleash v3",description:"This is the guide on how to configure Unleash v3 self-hosted. If you are using Unleash v4 you should checkout configuring Unleash",source:"@site/docs/using-unleash/deploy/configuring-unleash-v3.md",sourceDirName:"using-unleash/deploy",slug:"/using-unleash/deploy/configuring-unleash-v3",permalink:"/using-unleash/deploy/configuring-unleash-v3",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/using-unleash/deploy/configuring-unleash-v3.md",tags:[],version:"current",frontMatter:{title:"Configuring Unleash v3"}},s={},u=[{value:"Disabling Auto-Start",id:"disabling-auto-start",level:3},{value:"Securing Unleash",id:"securing-unleash",level:2},{value:"How do I configure the log output?",id:"how-do-i-configure-the-log-output",level:2},{value:"Database pooling connection timeouts",id:"database-pooling-connection-timeouts",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is the guide on how to configure ",(0,i.kt)("strong",{parentName:"p"},"Unleash v3 self-hosted"),". If you are using Unleash v4 you should checkout ",(0,i.kt)("a",{parentName:"p",href:"/using-unleash/deploy/configuring-unleash"},"configuring Unleash"))),(0,i.kt)("p",null,'In order to customize "anything" in Unleash you need to use ',(0,i.kt)("a",{parentName:"p",href:"/using-unleash/deploy/getting-started#option-two---from-nodejs"},"Unleash from Node.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const unleash = require('unleash-server');\n\nconst unleashOptions = {\n  db: {\n    user: 'unleash_user',\n    password: 'passord',\n    host: 'localhost',\n    port: 5432,\n    database: 'unleash',\n    ssl: false,\n    pool: {\n      min: 0,\n      max: 4,\n      idleTimeoutMillis: 30000,\n    },\n  },\n  enableRequestLogger: true,\n};\n\nunleash.start(unleashOptions);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available Unleash options include:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"db")," - The database configuration object taking the following properties:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"user")," - the database username (",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_USERNAME"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"password")," - the database password (",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_PASSWORD"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"host")," - the database hostname (",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_HOST"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"port")," - the database port defaults to 5432 (",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_PORT"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"database")," - the database name to be used (",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_NAME"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ssl")," - an object describing ssl options, see ",(0,i.kt)("a",{parentName:"li",href:"https://node-postgres.com/features/ssl"},"https://node-postgres.com/features/ssl")," (",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_SSL"),", as a stringified json object)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"version")," - the postgres database version. Used to connect a non-standard database. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),", which let the underlying adapter to detect the version automatically. (",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_VERSION"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"pool")," - an object describing pool options, see ",(0,i.kt)("a",{parentName:"li",href:"https://knexjs.org/guide/#pool"},"https://knexjs.org/guide/#pool"),". We support the following four fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"min")," - minimum connections in connections pool (defaults to 0) (",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_POOL_MIN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"max")," - maximum connections in connections pool (defaults to 4) (",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_POOL_MAX"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"idleTimeoutMillis")," - time in milliseconds a connection must be idle before being marked as a candidate for eviction (defaults to 30000) (",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_POOL_IDLE_TIMEOUT_MS"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"afterCreate")," - a callback for for configuring active connections, see ",(0,i.kt)("a",{parentName:"li",href:"https://knexjs.org/guide/#aftercreate"},"https://knexjs.org/guide/#aftercreate"),". This is incompatible with the ",(0,i.kt)("inlineCode",{parentName:"li"},"ALLOW_NON_STANDARD_DB_DATES")," environment variable, which will override this property to support non-standard Postgres date formats. If you've set your Postgres instance to use a date style other than ",(0,i.kt)("inlineCode",{parentName:"li"},"ISO, DMY")," then you'll need to set the ",(0,i.kt)("inlineCode",{parentName:"li"},"ALLOW_NON_STANDARD_DB_DATES")," environment variable to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". Setting the environment variable should be preferred over writing your own callback."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"databaseUrl")," - (",(0,i.kt)("em",{parentName:"li"},"deprecated"),") the postgres database url to connect to. Only used if ",(0,i.kt)("em",{parentName:"li"},"db")," object is not specified, and overrides the ",(0,i.kt)("em",{parentName:"li"},"db")," object and any environment variables that change parts of it (like ",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_SSL"),"). Should include username/password. This value may also be set via the ",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," environment variable. Alternatively, if you would like to read the database url from a file, you may set the ",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_URL_FILE")," environment variable with the full file path. The contents of the file must be the database url exactly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"databaseSchema")," - the postgres database schema to use. Defaults to 'public'. (",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_SCHEMA"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"port")," - which port the unleash-server should bind to. If port is omitted or is 0, the operating system will assign an arbitrary unused port. Will be ignored if pipe is specified. This value may also be set via the ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP_PORT")," environment variable"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"host")," - which host the unleash-server should bind to. If host is omitted, the server will accept connections on the unspecified IPv6 address (::) when IPv6 is available, or the unspecified IPv4 address (0.0.0.0) otherwise. This value may also be set via the ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP_HOST")," environment variable"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pipe")," - parameter to identify IPC endpoints. See ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/net.html#net_identifying_paths_for_ipc_connections"},"https://nodejs.org/api/net.html#net_identifying_paths_for_ipc_connections")," for more details"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"enableLegacyRoutes")," (boolean) - allows you to turn on/off support for legacy routes to support older clients. Disabled by default. Will be removed in 4.x."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"serverMetrics")," (boolean) - use this option to turn on/off prometheus metrics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"preHook")," (function) - this is a hook if you need to provide any middlewares to express before ",(0,i.kt)("inlineCode",{parentName:"li"},"unleash")," adds any. Express app instance is injected as first argument."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"preRouterHook")," (function) - use this to register custom express middlewares before the ",(0,i.kt)("inlineCode",{parentName:"li"},"unleash")," specific routers are added. This is typically how you would register custom middlewares to handle authentication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"adminAuthentication")," (string) - use this when implementing custom admin authentication ",(0,i.kt)("a",{parentName:"li",href:"/using-unleash/deploy/securing-unleash"},"securing-unleash"),". Possible values are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"none")," - will disable authentication altogether"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unsecure")," - (default) will use simple cookie based authentication. UI will require the user to specify an email in order to use unleash."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"custom")," - use this when you implement your own custom authentication logic."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ui")," (object) - Set of UI specific overrides. You may set the following keys: ",(0,i.kt)("inlineCode",{parentName:"li"},"headerBackground"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"environment"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"slogan"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"getLogger")," (function) - Used to register a ",(0,i.kt)("a",{parentName:"li",href:"#how-do-i-configure-the-log-output"},"custom log provider"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eventHook")," (",(0,i.kt)("inlineCode",{parentName:"li"},"function(event, data)"),") - If provided, this function will be invoked whenever a feature is mutated. The possible values for ",(0,i.kt)("inlineCode",{parentName:"li"},"event")," are ",(0,i.kt)("inlineCode",{parentName:"li"},"'feature-created'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'feature-updated'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'feature-archived'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'feature-revived'"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," argument contains information about the mutation. Its fields are ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," (string) - the event type (same as ",(0,i.kt)("inlineCode",{parentName:"li"},"event"),"); ",(0,i.kt)("inlineCode",{parentName:"li"},"createdBy")," (string) - the user who performed the mutation; ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," - the contents of the change. The contents in ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," differs based on the event type; For ",(0,i.kt)("inlineCode",{parentName:"li"},"'feature-archived'")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"'feature-revived'"),", the only field will be ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," - the name of the feature. For ",(0,i.kt)("inlineCode",{parentName:"li"},"'feature-created'")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"'feature-updated'")," the data follows ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash/blob/a06d2c04bb0d83d9c8c5bf2a90e9dace50f0b10a/lib/routes/admin-api/feature-schema.js#L38-L59"},"this schema defined in the source code"),". See an ",(0,i.kt)("a",{parentName:"li",href:"/reference/api/legacy/unleash/admin/events"},"api here"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"baseUriPath")," (string) - use to register a base path for all routes on the application. For example ",(0,i.kt)("inlineCode",{parentName:"li"},"/my/unleash/base")," (note the starting /). Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),". Can also be configured through the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"BASE_URI_PATH"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"unleashUrl")," (string) - Used to specify the official URL this instance of Unleash can be accessed at for an end user. Can also be configured through the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"UNLEASH_URL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"secureHeaders")," (boolean) - use this to enable security headers (HSTS, CSP, etc) when serving Unleash from HTTPS. Can also be configured through the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"SECURE_HEADERS"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"checkVersion")," - the checkVersion object deciding where to check for latest version",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url")," - The url to check version (Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://version.unleash.run"),") - Overridable with (",(0,i.kt)("inlineCode",{parentName:"li"},"UNLEASH_VERSION_URL"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enable")," - Whether version checking is enabled (defaults to true) - Overridable with (",(0,i.kt)("inlineCode",{parentName:"li"},"CHECK_VERSION"),") (if anything other than ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", does not check)")))),(0,i.kt)("h3",{id:"disabling-auto-start"},"Disabling Auto-Start"),(0,i.kt)("p",null,"If you're using Unleash as part of a larger express app, you can disable the automatic server start by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"server.create"),". It takes the same options as ",(0,i.kt)("inlineCode",{parentName:"p"},"server.start"),", but will not begin listening for connections."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const unleash = require('unleash-server');\n// ... const app = express();\n\nunleash\n  .create({\n    databaseUrl: 'postgres://unleash_user:password@localhost:5432/unleash',\n    port: 4242,\n  })\n  .then((result) => {\n    app.use(result.app);\n    console.log(`Unleash app generated and attached to parent application`);\n  });\n")),(0,i.kt)("h2",{id:"securing-unleash"},"Securing Unleash"),(0,i.kt)("p",null,"You can integrate Unleash with your authentication provider (OAuth 2.0). Read more about ",(0,i.kt)("a",{parentName:"p",href:"/using-unleash/deploy/securing-unleash"},"securing unleash"),"."),(0,i.kt)("h2",{id:"how-do-i-configure-the-log-output"},"How do I configure the log output?"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"unleash")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nomiddlename/log4js-node"},"log4js")," to log important information. It is possible to swap out the logger provider (only when using Unleash programmatically). You do this by providing an implementation of the ",(0,i.kt)("strong",{parentName:"p"},"getLogger")," function as This enables filtering of log levels and easy redirection of output streams."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function getLogger(name) {\n  // do something with the name\n  return {\n    debug: console.log,\n    info: console.log,\n    warn: console.log,\n    error: console.error,\n  };\n}\n")),(0,i.kt)("p",null,"The logger interface with its ",(0,i.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"warn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," methods expects format string support as seen in ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," or the JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"console")," object. Many commonly used logging implementations cover this API, e.g., bunyan, pino or winston."),(0,i.kt)("h2",{id:"database-pooling-connection-timeouts"},"Database pooling connection timeouts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please be aware of the default values of connection pool about idle session handling."),(0,i.kt)("li",{parentName:"ul"},"If you have a network component which closes idle sessions on tcp layer, please ensure, that the connection pool idleTimeoutMillis setting is lower than the timespan as the network component will close the idle connection.")))}d.isMDXComponent=!0}}]);