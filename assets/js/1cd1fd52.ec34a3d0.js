"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4357],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6182:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"configuring_unleash",title:"Configuring Unleash"},s=void 0,p={unversionedId:"deploy/configuring_unleash",id:"deploy/configuring_unleash",isDocsHomePage:!1,title:"Configuring Unleash",description:"This is the guide on how to configure Unleash v4 self-hosted. If you are still using Unleash v3 you should checkout configuring Unleash v3",source:"@site/docs/deploy/configuring-unleash.md",sourceDirName:"deploy",slug:"/deploy/configuring_unleash",permalink:"/deploy/configuring_unleash",editUrl:"https://github.com/Unleash/unleash/edit/master/website/docs/deploy/configuring-unleash.md",tags:[],version:"current",frontMatter:{id:"configuring_unleash",title:"Configuring Unleash"},sidebar:"Deploy and manage",previous:{title:"Getting Started",permalink:"/deploy/getting_started"},next:{title:"Securing Unleash",permalink:"/deploy/securing_unleash"}},u=[{value:"Must configure",id:"must-configure",children:[{value:"Database details",id:"database-details",children:[],level:3}],level:2},{value:"Nice to configure",id:"nice-to-configure",children:[{value:"Unleash URL",id:"unleash-url",children:[],level:3},{value:"Email server details",id:"email-server-details",children:[],level:3}],level:2},{value:"Further customization",id:"further-customization",children:[{value:"Disabling Auto-Start",id:"disabling-auto-start",children:[],level:3},{value:"Graceful shutdown",id:"shutdown-unleash",children:[],level:3}],level:2},{value:"Securing Unleash",id:"securing-unleash",children:[],level:2},{value:"How do I configure the log output?",id:"how-do-i-configure-the-log-output",children:[],level:2},{value:"Database pooling connection timeouts",id:"database-pooling-connection-timeouts",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is the guide on how to configure ",(0,r.kt)("strong",{parentName:"p"},"Unleash v4 self-hosted"),". If you are still using Unleash v3 you should checkout ",(0,r.kt)("a",{parentName:"p",href:"./configuring_unleash_v3"},"configuring Unleash v3"))),(0,r.kt)("h2",{id:"must-configure"},"Must configure"),(0,r.kt)("h3",{id:"database-details"},"Database details"),(0,r.kt)("p",null,"In order for Unleash server to work, you must setup database connection details."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If using docker, use environment variables",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_HOST")," - the database hostname - defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_PORT")," - the port the database is listening on - defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"5432")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_USERNAME")," - the user configured for access - defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"unleash_user")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_PASSWORD")," - the password for the user - defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"passord")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_NAME")," - the name of the database - defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"unleash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_SSL")," - a json object representing SSL configuration or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," for not using SSL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_SCHEMA")," - Which schema to use - defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"public")))),(0,r.kt)("li",{parentName:"ul"},"We also support ",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," see ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING"},"libpq's doc")," for full format explanation. In short: ",(0,r.kt)("inlineCode",{parentName:"li"},"postgres://USER:PASSWORD@HOST:PORT/DATABASE")),(0,r.kt)("li",{parentName:"ul"},"If you're using secret files from kubernetes and would like to load a ",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," format from a file, use ",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_URL_FILE")," and point it to a path containing a connection URL.")),(0,r.kt)("h2",{id:"nice-to-configure"},"Nice to configure"),(0,r.kt)("h3",{id:"unleash-url"},"Unleash URL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configured with ",(0,r.kt)("inlineCode",{parentName:"li"},"UNLEASH_URL")," ",(0,r.kt)("strong",{parentName:"li"}," Should be set to the public discoverable URL of your instance, so if your instance is accessed by your users at ",(0,r.kt)("inlineCode",{parentName:"strong"},"https://unleash.mysite.com")," use that. ")," If you're deploying this to a subpath, include the subpath in this. So ",(0,r.kt)("inlineCode",{parentName:"li"},"https://mysite.com/unleash")," will also be correct."),(0,r.kt)("li",{parentName:"ul"},"Used to create",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reset password URLs"),(0,r.kt)("li",{parentName:"ul"},"Welcome link for new users"),(0,r.kt)("li",{parentName:"ul"},"Links in events for our Slack, Microsoft Teams and Datadog addons")))),(0,r.kt)("h3",{id:"email-server-details"},"Email server details"),(0,r.kt)("p",null,"Used to send reset-password mails and welcome mails when onboarding new users. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"NOTE")," - If this is not configured, you will not be able to allow your users to reset their own passwords."),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"/deploy/email"},"more details, see here")),(0,r.kt)("h2",{id:"further-customization"},"Further customization"),(0,r.kt)("p",null,'In order to customize "anything" in Unleash you need to use ',(0,r.kt)("a",{parentName:"p",href:"./getting_started#option-two---from-nodejs"},"Unleash from Node.js")," or start the ",(0,r.kt)("a",{parentName:"p",href:"./getting_started#option-one---use-docker"},"docker image")," with environment variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const unleash = require('unleash-server');\n\nconst unleashOptions = {\n  db: {\n    user: 'unleash_user',\n    password: 'passord',\n    host: 'localhost',\n    port: 5432,\n    database: 'unleash',\n    ssl: false,\n    pool: {\n      min: 0,\n      max: 4,\n      idleTimeoutMillis: 30000,\n    },\n  },\n  enableRequestLogger: true,\n};\n\nunleash.start(unleashOptions);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Available Unleash options include:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"databaseUrl")," - (",(0,r.kt)("em",{parentName:"p"},"deprecated"),") the postgres database url to connect to. Only used if ",(0,r.kt)("em",{parentName:"p"},"db")," object is not specified, and overrides the ",(0,r.kt)("em",{parentName:"p"},"db")," object and any environment variables that change parts of it (like ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_SSL"),"). Should include username/password. This value may also be set via the ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable. Alternatively, if you would like to read the database url from a file, you may set the ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL_FILE")," environment variable with the full file path. The contents of the file must be the database url exactly.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"db")," - The database configuration object taking the following properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"user")," - the database username (",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_USERNAME"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"password")," - the database password (",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_PASSWORD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"host")," - the database hostname (",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_HOST"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"port")," - the database port defaults to 5432 (",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_PORT"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"database")," - the database name to be used (",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_NAME"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ssl")," - an object describing ssl options, see ",(0,r.kt)("a",{parentName:"li",href:"https://node-postgres.com/features/ssl"},"https://node-postgres.com/features/ssl")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_SSL"),", as a stringified json object)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"schema")," - the postgres database schema to use. Defaults to 'public'. (",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_SCHEMA"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"version")," - the postgres database version. Used to connect a non-standard database. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),", which let the underlying adapter to detect the version automatically. (",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_VERSION"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"pool")," - an object describing pool options, see ",(0,r.kt)("a",{parentName:"li",href:"https://knexjs.org/#Installation-pooling"},"https://knexjs.org/#Installation-pooling"),". We support the following three fields:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"min")," - minimum connections in connections pool (defaults to 0) (",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_POOL_MIN"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"max")," - maximum connections in connections pool (defaults to 4) (",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_POOL_MAX"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"idleTimeoutMillis")," - time in milliseconds a connection must be idle before being marked as a candidate for eviction (defaults to 30000) (",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_POOL_IDLE_TIMEOUT_MS"),")"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"server")," - The server config object taking the following properties"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"port")," - which port the unleash-server should bind to. If port is omitted or is 0, the operating system will assign an arbitrary unused port. Will be ignored if pipe is specified. This value may also be set via the ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTP_PORT")," environment variable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"host")," - which host the unleash-server should bind to. If host is omitted, the server will accept connections on the unspecified IPv6 address (::) when IPv6 is available, or the unspecified IPv4 address (0.0.0.0) otherwise. This value may also be set via the ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTP_HOST")," environment variable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"pipe")," - parameter to identify IPC endpoints. See ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/api/net.html#net_identifying_paths_for_ipc_connections"},"https://nodejs.org/api/net.html#net_identifying_paths_for_ipc_connections")," for more details"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"serverMetrics")," (boolean) - use this option to turn on/off prometheus metrics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"baseUriPath")," (string) - use to register a base path for all routes on the application. For example ",(0,r.kt)("inlineCode",{parentName:"li"},"/my/unleash/base")," (note the starting /). Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),". Can also be configured through the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"BASE_URI_PATH"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"unleashUrl")," (string) - Used to specify the official URL this instance of Unleash can be accessed at for an end user. Can also be configured through the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"UNLEASH_URL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"gracefulShutdownEnable"),": (boolean) - Used to control if Unleash should shutdown gracefully (close connections, stop tasks,). Defaults to true. ",(0,r.kt)("inlineCode",{parentName:"li"},"GRACEFUL_SHUTDOWN_ENABLE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"gracefulShutdownTimeout"),": (number) - Used to control the timeout, in milliseconds, for shutdown Unleash gracefully. Will kill all connections regardless if this timeout is exceeded. Defaults to 1000ms ",(0,r.kt)("inlineCode",{parentName:"li"},"GRACEFUL_SHUTDOWN_TIMEOUT")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"preHook")," (function) - this is a hook if you need to provide any middlewares to express before ",(0,r.kt)("inlineCode",{parentName:"p"},"unleash")," adds any. Express app instance is injected as first argument.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"preRouterHook")," (function) - use this to register custom express middlewares before the ",(0,r.kt)("inlineCode",{parentName:"p"},"unleash")," specific routers are added.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"authentication")," - (object) - An object for configuring/implementing custom admin authentication"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"enableApiToken (boolean) - Should unleash require API tokens for access? Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type (string) What kind of authentication to use. Possible values"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"open-source")," - Sign in with username and password. This is the default value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"custom")," - If implementing your own authentication hook, use this"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")," - Turn off authentication all together"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"demo")," - Only requires an email to sign in (was default in v3)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"customAuthHandler: (function) - custom express middleware handling authentication. Used when type is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"custom"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"createAdminUser: (boolean) - whether to create an admin user with default password - Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"initApiTokens: (ApiTokens[]) - Array of API tokens to create on startup. The tokens will only be created if the database doesn't already contain any API tokens.\nExample:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"[{\n   environment: '*',\n   project: '*',\n   secret: '*:*.964a287e1b728cb5f4f3e0120df92cb5',\n   type: ApiTokenType.ADMIN,\n   username: 'some-user',\n}]\n")),(0,r.kt)("p",{parentName:"li"},"  The tokens can be of any API token type. Note that ",(0,r.kt)("em",{parentName:"p"},"admin")," tokens ",(0,r.kt)("strong",{parentName:"p"},"must")," target all environments and projects (i.e. use ",(0,r.kt)("inlineCode",{parentName:"p"},"'*'")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"environments")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," and start the secret with ",(0,r.kt)("inlineCode",{parentName:"p"},"*:*."),")."),(0,r.kt)("p",{parentName:"li"},"  You can also use the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"INIT_ADMIN_API_TOKENS")," to create API tokens on startup. This variable should be set to a comma-separated list of API tokens to initialize (for instance ",(0,r.kt)("inlineCode",{parentName:"p"},"*:*.some-random-string, *:*.some-other-token"),"). With the environment variable, all tokens will be created as admin tokens and Unleash will assign a username automatically.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ui")," (object) - Set of UI specific overrides. You may set the following keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"environment"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"slogan"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"getLogger")," (function) - Used to register a ",(0,r.kt)("a",{parentName:"p",href:"#how-do-i-configure-the-log-output"},"custom log provider"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"logLevel")," (",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"info")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"warn")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"fatal"),") - The lowest level to log at, also configurable using environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"eventHook")," (",(0,r.kt)("inlineCode",{parentName:"p"},"function(event, data)"),") - If provided, this function will be invoked whenever a feature is mutated. The possible values for ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"'feature-created'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'feature-updated'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'feature-archived'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'feature-revived'"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," argument contains information about the mutation. Its fields are ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," (string) - the event type (same as ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"); ",(0,r.kt)("inlineCode",{parentName:"p"},"createdBy")," (string) - the user who performed the mutation; ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," - the contents of the change. The contents in ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," differs based on the event type; For ",(0,r.kt)("inlineCode",{parentName:"p"},"'feature-archived'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"'feature-revived'"),", the only field will be ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," - the name of the feature. For ",(0,r.kt)("inlineCode",{parentName:"p"},"'feature-created'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"'feature-updated'")," the data follows a schema defined in the code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/blob/master/src/lib/services/feature-schema.js#L65"},"here"),". See an ",(0,r.kt)("a",{parentName:"p",href:"/api/admin/events"},"api here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"secureHeaders")," (boolean) - use this to enable security headers (HSTS, CSP, etc) when serving Unleash from HTTPS. Can also be configured through the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"SECURE_HEADERS"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"versionCheck")," - the object deciding where to check for latest version"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," - The url to check version (Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"https://version.unleash.run"),") - Overridable with (",(0,r.kt)("inlineCode",{parentName:"li"},"UNLEASH_VERSION_URL"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable")," - Whether version checking is enabled (defaults to true) - Overridable with (",(0,r.kt)("inlineCode",{parentName:"li"},"CHECK_VERSION"),") (if anything other than ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", does not check)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"email")," - the email object configuring an SMTP server for sending welcome mails and password reset mails"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host")," - The server URL to your SMTP server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," - Which port the SMTP server is running on. Defaults to 465 (Secure SMTP)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secure")," (boolean) - Whether to use SMTPS or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sender")," - Which email should be set as sender of mails being sent from Unleash?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smtpuser")," - Username for your SMTP server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smtppass")," - Password for your SMTP server")))),(0,r.kt)("h3",{id:"disabling-auto-start"},"Disabling Auto-Start"),(0,r.kt)("p",null,"If you're using Unleash as part of a larger express app, you can disable the automatic server start by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"server.create"),". It takes the same options as ",(0,r.kt)("inlineCode",{parentName:"p"},"server.start"),", but will not begin listening for connections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst unleash = require('unleash-server');\nconst app = express();\n\nconst start = async () => {\n  const instance = await unleash.create({\n    databaseUrl: 'postgres://unleash_user:password@localhost:5432/unleash',\n  });\n  app.use(instance.app);\n  console.log(`Unleash app generated and attached to parent application`);\n};\n\nstart();\n")),(0,r.kt)("h3",{id:"shutdown-unleash"},"Graceful shutdown"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PS! Unleash will listen for the ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGINT")," signal and automatically trigger graceful shutdown of Unleash.")),(0,r.kt)("p",null,"If you need to stop Unleash (close database connections, and stop running Unleash tasks) you may use the stop function. Be aware that it is not possible to restart the Unleash instance after stopping it, but you can create a new instance of Unleash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst unleash = require('unleash-server');\nconst app = express();\n\nconst start = async () => {\n  const instance = await unleash.start({\n    databaseUrl: 'postgres://unleash_user:password@localhost:5432/unleash',\n    port: 4242,\n  });\n\n  //Sometime later\n  await instance.stop();\n  console.log('Unleash has now stopped');\n};\n\nstart();\n")),(0,r.kt)("h2",{id:"securing-unleash"},"Securing Unleash"),(0,r.kt)("p",null,"You can integrate Unleash with your authentication provider (OAuth 2.0). Read more about ",(0,r.kt)("a",{parentName:"p",href:"/deploy/securing_unleash"},"securing unleash"),"."),(0,r.kt)("h2",{id:"how-do-i-configure-the-log-output"},"How do I configure the log output?"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"unleash")," uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nomiddlename/log4js-node"},"log4js")," to log important information. It is possible to swap out the logger provider (only when using Unleash programmatically). You do this by providing an implementation of the ",(0,r.kt)("strong",{parentName:"p"},"getLogger")," function as This enables filtering of log levels and easy redirection of output streams."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function getLogger(name) {\n  // do something with the name\n  return {\n    debug: console.log,\n    info: console.log,\n    warn: console.log,\n    error: console.error,\n  };\n}\n")),(0,r.kt)("p",null,"The logger interface with its ",(0,r.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," methods expects format string support as seen in ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," or the JavaScript ",(0,r.kt)("inlineCode",{parentName:"p"},"console")," object. Many commonly used logging implementations cover this API, e.g., bunyan, pino or winston."),(0,r.kt)("h2",{id:"database-pooling-connection-timeouts"},"Database pooling connection timeouts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please be aware of the default values of connection pool about idle session handling."),(0,r.kt)("li",{parentName:"ul"},"If you have a network component which closes idle sessions on tcp layer, please ensure, that the connection pool idleTimeoutMillis setting is lower than the timespan as the network component will close the idle connection.")))}d.isMDXComponent=!0}}]);