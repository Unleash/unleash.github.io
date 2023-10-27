"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[17842],{33033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={title:"Unleash Edge",slug:"/reference/unleash-edge",custom_edit_url:"https://github.com/Unleash/unleash-edge/edit/main/README.md"},i=void 0,o={unversionedId:"generated/unleash-edge",id:"generated/unleash-edge",title:"Unleash Edge",description:"This document was generated from the README in the Unleash Edge GitHub repository.",source:"@site/docs/generated/unleash-edge.md",sourceDirName:"generated",slug:"/reference/unleash-edge",permalink:"/reference/unleash-edge",draft:!1,editUrl:"https://github.com/Unleash/unleash-edge/edit/main/README.md",tags:[],version:"current",frontMatter:{title:"Unleash Edge",slug:"/reference/unleash-edge",custom_edit_url:"https://github.com/Unleash/unleash-edge/edit/main/README.md"},sidebar:"documentation",previous:{title:"Dependent features",permalink:"/reference/dependent-features"},next:{title:"Unleash Proxy",permalink:"/reference/unleash-proxy"}},s={},d=[{value:"Migrating to Edge from the Proxy",id:"migrating-to-edge-from-the-proxy",level:2},{value:"Running Unleash Edge",id:"running-unleash-edge",level:2},{value:"Built-in Health check",id:"built-in-health-check",level:3},{value:"Built-in Ready check",id:"built-in-ready-check",level:3},{value:"Getting Unleash Edge",id:"getting-unleash-edge",level:2},{value:"Binary",id:"binary",level:3},{value:"Docker",id:"docker",level:3},{value:"Cargo/Rust",id:"cargorust",level:3},{value:"Concepts",id:"concepts",level:2},{value:"Modes",id:"modes",level:3},{value:"Edge",id:"edge",level:4},{value:"Front-end tokens",id:"front-end-tokens",level:3},{value:"Enterprise",id:"enterprise",level:4},{value:"Open Source",id:"open-source",level:4},{value:"Offline",id:"offline",level:4},{value:"Environments in offline mode",id:"environments-in-offline-mode",level:5},{value:"Metrics",id:"metrics",level:2},{value:"Performance",id:"performance",level:2},{value:"Large Dataset (350 features (100kB))",id:"large-dataset-350-features-100kb",level:3},{value:"Small Dataset (5 features (2kB))",id:"small-dataset-5-features-2kb",level:3},{value:"Why choose Unleash Edge over the Unleash Proxy?",id:"why-choose-unleash-edge-over-the-unleash-proxy",level:2},{value:"Development",id:"development",level:2}],u={toc:d};function h(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Generated content",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This document was generated from the README in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-edge"},"Unleash Edge GitHub repository"),".")),(0,l.kt)("h1",{id:"unleash-edge"},"Unleash Edge"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://crates.io/crates/unleash-edge"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/unleash-edge?label=latest",alt:"crates.io"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/unleash-edge/latest"},(0,l.kt)("img",{parentName:"a",src:"https://docs.rs/unleash-edge/badge.svg?version=latest",alt:"Documentation"})),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/crates/l/unleash-edge.svg",alt:"MIT licensed"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://deps.rs/crate/unleash-edge/14.0.0"},(0,l.kt)("img",{parentName:"a",src:"https://deps.rs/crate/unleash-edge/14.0.0/status.svg",alt:"Dependency Status"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-edge/actions/workflows/test-with-coverage.yaml"},(0,l.kt)("img",{parentName:"a",src:"https://github.com/Unleash/unleash-edge/actions/workflows/test-with-coverage.yaml/badge.svg",alt:"CI"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://coveralls.io/github/Unleash/unleash-edge?branch=main"},(0,l.kt)("img",{parentName:"a",src:"https://coveralls.io/repos/github/Unleash/unleash-edge/badge.svg?branch=main",alt:"Coverage Status"})),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/crates/d/unleash-edge.svg",alt:"downloads"})),(0,l.kt)("p",null,"Unleash Edge is the successor to the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/how-to/how-to-run-the-unleash-proxy"},"Unleash Proxy"),"."),(0,l.kt)("p",null,"Unleash Edge sits between the Unleash API and your SDKs and provides a cached read-replica of your Unleash instance. This means you can scale up your Unleash instance to thousands of connected SDKs without increasing the number of requests you make to your Unleash instance."),(0,l.kt)("p",null,"Unleash Edge offers two important features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Performance"),": Unleash Edge caches in memory and can run close to your end-users. A single instance can handle tens to hundreds of thousands of requests per second."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Resilience"),": Unleash Edge is designed to survive restarts and operate properly even if you lose connection to your Unleash server.")),(0,l.kt)("p",null,"Unleash Edge is built to help you scale Unleash."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you're looking for the easiest way to connect your client SDKs you can check out our ",(0,l.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/reference/front-end-api"},"Frontend API"),"."),(0,l.kt)("li",{parentName:"ul"},"If you're looking to learn how to scale your own feature flag system why not check out our recommendations for building and scaling ",(0,l.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/topics/feature-flags/feature-flag-best-practices"},"feature flags"))),(0,l.kt)("h2",{id:"migrating-to-edge-from-the-proxy"},"Migrating to Edge from the Proxy"),(0,l.kt)("p",null,"For more info on migrating, check out the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-edge/blob/main/./migration-guide.md"},"migration guide")," that details the differences between Edge and the Proxy and how to achieve similar behavior in Edge."),(0,l.kt)("h2",{id:"running-unleash-edge"},"Running Unleash Edge"),(0,l.kt)("p",null,"Unleash Edge is compiled to a single binary. You can configure it by passing in arguments or setting environment variables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Usage: unleash-edge [OPTIONS] <COMMAND>\n\nCommands:\n  edge     Run in edge mode\n  offline  Run in offline mode\n  help     Print this message or the help of the given subcommand(s)\n\nOptions:\n  -p, --port <PORT>\n          Which port should this server listen for HTTP traffic on [env: PORT=] [default: 3063]\n  -i, --interface <INTERFACE>\n          Which interfaces should this server listen for HTTP traffic on [env: INTERFACE=] [default: 0.0.0.0]\n  -b, --base-path <BASE_PATH>\n          Which base path should this server listen for HTTP traffic on [env: BASE_PATH=] [default: ]\n  -w, --workers <WORKERS>\n          How many workers should be started to handle requests. Defaults to number of physical cpus [env: WORKERS=] [default: number of physical cpus]\n      --tls-enable\n          Should we bind TLS [env: TLS_ENABLE=]\n      --tls-server-key <TLS_SERVER_KEY>\n          Server key to use for TLS [env: TLS_SERVER_KEY=] (Needs to be a path to a file)\n      --tls-server-cert <TLS_SERVER_CERT>\n          Server Cert to use for TLS [env: TLS_SERVER_CERT=] (Needs to be a path to a file)\n      --tls-server-port <TLS_SERVER_PORT>\n          Port to listen for https connection on (will use the interfaces already defined) [env: TLS_SERVER_PORT=] [default: 3043]\n      --instance-id <INSTANCE_ID>\n          Instance id. Used for metrics reporting [env: INSTANCE_ID=] [default: Ulid::new()]\n  -a, --app-name <APP_NAME>\n          App name. Used for metrics reporting [env: APP_NAME=] [default: unleash-edge]\n  -h, --help\n          Print help\n")),(0,l.kt)("h3",{id:"built-in-health-check"},"Built-in Health check"),(0,l.kt)("p",null,"There is now (from 5.1.0) a subcommand named ",(0,l.kt)("inlineCode",{parentName:"p"},"health")," which will ping your health endpoint and exit with status 0 provided the health endpoint returns 200 OK."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./unleash-edge health\n")),(0,l.kt)("p",null,"will check an Edge process running on http://localhost:3063. If you're using base-path or the port variable you should use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-e --edge-url")," CLI arg (or the EDGE_URL environment variable) to tell the health checker where edge is running."),(0,l.kt)("p",null,"If you're hosting Edge with a self-signed certificate using the tls cli arguments, you should use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--ca-certificate-file <file_containing_your_ca_and_key_in_pem_format>")," flag (or the CA_CERTIFICATE_FILE environment variable) to allow the health checker to trust the self signed certificate."),(0,l.kt)("h3",{id:"built-in-ready-check"},"Built-in Ready check"),(0,l.kt)("p",null,"There is now (from 12.0.0) a subcommand named ",(0,l.kt)("inlineCode",{parentName:"p"},"ready")," which will ping your ready endpoint and exit with status 0 provided the ready endpoint returns 200 OK and ",(0,l.kt)("inlineCode",{parentName:"p"},'{ status: "READY" }'),". Otherwise it will return status 1 and an error message to signal that Edge is not ready (it has not spoken to upstream or recovered from a persisted backup)."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Edge not running:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./unleash-edge ready\nError: Failed to connect to ready endpoint at http://localhost:3063/internal-backstage/ready. Failed with status None\n$ echo $?\n1\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Edge running but not populated its feature cache yet (not spoken to upstream or restored from backup)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./unleash-edge ready\nError: Ready check returned a different status than READY. It returned EdgeStatus { status: NotReady }\n$ echo $?\n1\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Edge running and synchronized. I.e. READY")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./unleash-edge ready\nOK\n$ echo $?\n0\n")),(0,l.kt)("p",null,"If you're hosting Edge with a self-signed certificate using the tls cli arguments, you should use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--ca-certificate-file <file_containing_your_ca_and_key_in_pem_format>")," flag (or the CA_CERTIFICATE_FILE environment variable) to allow the health checker to trust the self signed certificate."),(0,l.kt)("h2",{id:"getting-unleash-edge"},"Getting Unleash Edge"),(0,l.kt)("p",null,"Unleash Edge is distributed as a binary and as a docker image."),(0,l.kt)("h3",{id:"binary"},"Binary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The binary is downloadable from our ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-edge/releases/latest"},"Releases page"),"."),(0,l.kt)("li",{parentName:"ul"},"We're currently building for linux x86_64, windows x86_64, darwin (OS X) x86_64 and darwin (OS X) aarch64 (M1/M2 macs)")),(0,l.kt)("h3",{id:"docker"},"Docker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The docker image gets uploaded to dockerhub and Github Package registry."),(0,l.kt)("li",{parentName:"ul"},"For dockerhub use the coordinates ",(0,l.kt)("inlineCode",{parentName:"li"},"unleashorg/unleash-edge:<version>"),"."),(0,l.kt)("li",{parentName:"ul"},"For Github package registry use the coordinates ",(0,l.kt)("inlineCode",{parentName:"li"},"ghpr.io/unleash/unleash-edge:<version>")),(0,l.kt)("li",{parentName:"ul"},"If you'd like to live on the edge (sic) you can use the tag ",(0,l.kt)("inlineCode",{parentName:"li"},"edge"),". This is built from ",(0,l.kt)("inlineCode",{parentName:"li"},"HEAD")," on each commit"),(0,l.kt)("li",{parentName:"ul"},"When running the docker image, the same CLI arguments that's available when running the binary is available to your ",(0,l.kt)("inlineCode",{parentName:"li"},"docker run")," command. To start successfully you will need to decide which mode you're running in.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If running in ",(0,l.kt)("inlineCode",{parentName:"li"},"edge")," mode your command should be",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docker run -p 3063:3063 -e UPSTREAM_URL=<YOUR_UNLEASH_INSTANCE> unleashorg/unleash-edge:v8.0.1 edge")))),(0,l.kt)("li",{parentName:"ul"},"If running in ",(0,l.kt)("inlineCode",{parentName:"li"},"offline")," mode you will need to provide a volume containing your feature toggles file. An example is available inside the examples folder. To use this, you can use the command",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docker run -v ./examples:/edge/data -p 3063:3063 -e BOOTSTRAP_FILE=/edge/data/features.json -e TOKENS='my-secret-123,another-secret-789' unleashorg/unleash-edge:v8.0.1 offline"))))))),(0,l.kt)("h3",{id:"cargorust"},"Cargo/Rust"),(0,l.kt)("p",null,"If you have the ",(0,l.kt)("a",{parentName:"p",href:"https://rustup.rs"},"Rust toolchain")," installed you can build a binary for the platform you're running by cloning this repo and running ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo build --release"),". This will give you an ",(0,l.kt)("inlineCode",{parentName:"p"},"unleash-edge")," binary in ",(0,l.kt)("inlineCode",{parentName:"p"},"./target/release")),(0,l.kt)("h2",{id:"concepts"},"Concepts"),(0,l.kt)("h3",{id:"modes"},"Modes"),(0,l.kt)("p",null,"Edge currently supports 2 different modes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#edge"},"Edge")," - Connection to upstream node (Unleash instance or another Edge). Supports dynamic tokens, metrics and other advanced features;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#offline"},"Offline")," - No connection to upstream node. Full control of data and tokens;")),(0,l.kt)("h4",{id:"edge"},"Edge"),(0,l.kt)("mermaid",{value:"graph LR\n  A(Client) --\x3e|Fetch toggles| B((Edge))\n  B--\x3e|Fetch toggles| C((Unleash))"}),(0,l.kt)("p",null,'Edge mode is the "standard" mode for Unleash Edge and the one you should default to in most cases. It connects to an upstream node, such as your Unleash instance, and uses that as the source of truth for feature toggles.'),(0,l.kt)("p",null,"Other than connecting Edge directly to your Unleash instance, it's also possible to connect to another Edge instance (",(0,l.kt)("em",{parentName:"p"},"daisy chaining"),"). You can have as many Edge nodes as you'd like between the Edge node your clients are accessing and the Unleash server, and it's also possible for multiple nodes to connect to a single upstream one. Depending on your architecture and requirements this can be a powerful feature, offering you flexibility and scalability when planning your implementation."),(0,l.kt)("mermaid",{value:"graph LR\n  A(Client 1) --\x3e|Fetch toggles| C((Edge 1))\n  B(Client 2) --\x3e|Fetch toggles| D((Edge 2))\n  C--\x3e|Fetch toggles| E((Edge 3))\n  D--\x3e|Fetch toggles| E\n  E--\x3e|Fetch toggles| F((Unleash))"}),(0,l.kt)("p",null,"This means that, in order to start up, Edge mode needs to know where the upstream node is. This is done by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"--upstream-url")," command line argument or setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"UPSTREAM_URL")," environment variable."),(0,l.kt)("p",null,"By default, Edge mode uses an in-memory cache to store the features it fetches from the upstream node. However, you may want to use a more persistent storage solution. For this purpose, Edge supports either Redis or a backup file, which you can configure by passing in either the ",(0,l.kt)("inlineCode",{parentName:"p"},"--redis-url")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--backup_folder")," command line argument, respectively. On start-up, Edge checks whether the persistent backup option is specified, in which case it uses it to populate its internal caches. This can be useful when your Unleash server is unreachable."),(0,l.kt)("p",null,"Edge mode also supports dynamic tokens, meaning that Edge doesn't need a token to be provided when starting up. Once we make a request to the ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/client/features")," endpoint using a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#client-tokens"},"client token")," Edge will validate upstream and fetch its respective features. After that, it gets added to the list of known tokens that gets periodically synced, making sure it is a valid token and its features are up-to-date."),(0,l.kt)("p",null,"Even though Edge supports dynamic tokens, you still have the option of providing a token through the command line argument or environment variable. This way, since Edge already knows about your token at start up, it will sync your features for that token and should be ready for your requests right away (",(0,l.kt)("em",{parentName:"p"},"warm up / hot start"),")."),(0,l.kt)("h3",{id:"front-end-tokens"},"Front-end tokens"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#front-end-tokens"},"Front-end tokens")," can also be used with ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/frontend")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/proxy")," endpoints, however they are not allowed to fetch features upstream.\nIn order to use these tokens correctly and make sure they return the correct information, it's important that the features they are allowed to access are already present in that Edge node's features cache.\nThe easiest way to ensure this is by passing in at least one client token as one of the command line arguments,\nensuring it has access to the same features as the front-end token you'll be using.\nIf you're using a frontend token that doesn't have data in the node's feature cache, you will receive an HTTP Status code: 511 Network Authentication Required along with a body of which project and environment you will need to add a client token for."),(0,l.kt)("h4",{id:"enterprise"},"Enterprise"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"--service-account-token")," CLI arg or ",(0,l.kt)("inlineCode",{parentName:"p"},"SERVICE_ACCOUNT_TOKEN")," environment variable you can provide Edge with a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/service-accounts"},"Service Account Token")," which has access to create client tokens at startup.\nDoing so, Edge will use this token to create a client token for any frontend token where Edge is not already aware of a client token which will give it access to the necessary projects for creating the response."),(0,l.kt)("h4",{id:"open-source"},"Open Source"),(0,l.kt)("p",null,"Unleash OSS does not support Service accounts, so if you want Edge to create Client tokens for Frontend tokens you will need to use an admin token in the ",(0,l.kt)("inlineCode",{parentName:"p"},"--service-account-token | SERVICE_ACCOUNT_TOKEN")," argument."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access": {\n    "environment": "default",\n    "project": "demo-app"\n  },\n  "explanation": "Edge does not yet have data for this token. Please make a call against /api/client/features with a client token that has the same access as your token"\n}\n')),(0,l.kt)("p",null,"To launch in this mode, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ unleash-edge edge -h\nRun in edge mode\n\nUsage: unleash-edge edge [OPTIONS] --upstream-url <UPSTREAM_URL>\n\nOptions:\n  -u, --upstream-url <UPSTREAM_URL>\n          Where is your upstream URL. Remember, this is the URL to your instance, without any trailing /api suffix [env: UPSTREAM_URL=]\n  -r, --redis-url <REDIS_URL>\n          A URL pointing to a running Redis instance. Edge will use this instance to persist feature and token data and read this back after restart. Mutually exclusive with the --backup-folder option [env: REDIS_URL=]\n  -b, --backup-folder <BACKUP_FOLDER>\n          A path to a local folder. Edge will write feature and token data to disk in this folder and read this back after restart. Mutually exclusive with the --redis-url option [env: BACKUP_FOLDER=]\n  -m, --metrics-interval-seconds <METRICS_INTERVAL_SECONDS>\n          How often should we post metrics upstream? [env: METRICS_INTERVAL_SECONDS=] [default: 60]\n  -f, --features-refresh-interval-seconds <FEATURES_REFRESH_INTERVAL_SECONDS>\n          How long between each refresh for a token [env: FEATURES_REFRESH_INTERVAL_SECONDS=] [default: 10]\n      --token-revalidation-interval-seconds <TOKEN_REVALIDATION_INTERVAL_SECONDS>\n          How long between each revalidation of a token [env: TOKEN_REVALIDATION_INTERVAL_SECONDS=] [default: 3600]\n  -t, --tokens <TOKENS>\n          Get data for these client tokens at startup. Accepts comma-separated list of tokens. Hot starts your feature cache [env: TOKENS=]\n  -H, --custom-client-headers <CUSTOM_CLIENT_HEADERS>\n          Expects curl header format (-H <HEADERNAME>: <HEADERVALUE>) for instance `-H X-Api-Key: mysecretapikey` [env: CUSTOM_CLIENT_HEADERS=]\n  -s, --skip-ssl-verification\n          If set to true, we will skip SSL verification when connecting to the upstream Unleash server [env: SKIP_SSL_VERIFICATION=]\n      --pkcs8-client-certificate-file <PKCS8_CLIENT_CERTIFICATE_FILE>\n          Client certificate chain in PEM encoded X509 format with the leaf certificate first. The certificate chain should contain any intermediate certificates that should be sent to clients to allow them to build a chain to a trusted root [env: PKCS8_CLIENT_CERTIFICATE_FILE=]\n      --pkcs8-client-key-file <PKCS8_CLIENT_KEY_FILE>\n          Client key is a PEM encoded PKCS#8 formatted private key for the leaf certificate [env: PKCS8_CLIENT_KEY_FILE=]\n      --pkcs12-identity-file <PKCS12_IDENTITY_FILE>\n          Identity file in pkcs12 format. Typically this file has a pfx extension [env: PKCS12_IDENTITY_FILE=]\n      --pkcs12-passphrase <PKCS12_PASSPHRASE>\n          Passphrase used to unlock the pkcs12 file [env: PKCS12_PASSPHRASE=]\n      --upstream-certificate-file <UPSTREAM_CERTIFICATE_FILE>\n          Extra certificate passed to the client for building its trust chain. Needs to be in PEM format (crt or pem extensions usually are) [env: UPSTREAM_CERTIFICATE_FILE=]\n\n  -h, --help\n          Print help\n\n")),(0,l.kt)("h4",{id:"offline"},"Offline"),(0,l.kt)("mermaid",{value:"graph LR\n  A(Client) --\x3e|Fetch toggles| B((Edge))\n  B--\x3e|Fetch toggles| C[Features dump]"}),(0,l.kt)("p",null,"Offline mode is useful when there is no connection to an upstream node, such as your Unleash instance or another Edge instance, or as a tool to make working with Unleash easier during development."),(0,l.kt)("p",null,"To use offline mode, you'll need a features file. The easiest way to get one is to download a JSON dump of a result from a query against an Unleash server on the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api/unleash/get-client-feature"},"/api/client/features")," endpoint. You can also use a hand rolled, human readable JSON version of the features file. Edge will automatically convert it to the API format when it starts up. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "featureOne": {\n    "enabled": true,\n    "variant": "variantOne"\n  },\n  "featureTwo": {\n    "enabled": false,\n    "variant": "variantTwo"\n  },\n  "featureThree": {\n    "enabled": true\n  }\n}\n')),(0,l.kt)("p",null,"The simplified JSON format should be an object with a key for each feature. You can force the result of ",(0,l.kt)("inlineCode",{parentName:"p"},"is_enabled")," in your SDK by setting the enabled property, likewise can also force the result of ",(0,l.kt)("inlineCode",{parentName:"p"},"get_variant")," by specifying the name of the variant you want. This format is primarily for development."),(0,l.kt)("p",null,"When using offline mode you must specify one or more tokens at startup. These tokens will let your SDKs access Edge. Tokens following the Unleash API format ",(0,l.kt)("inlineCode",{parentName:"p"},"[project]:[environment].<somesecret>")," allow Edge to recognize the project and environment specified in the token, returning only the relevant features to the calling SDK. On the other hand, for tokens not adhering to this format, Edge will return all features if there is an exact match with any of the startup tokens."),(0,l.kt)("p",null,"To make local development easier, you can specify a reload interval in seconds (Since Unleash-Edge 10.0.x); this will cause Edge to reload the features file from disk every X seconds. This can be useful for local development."),(0,l.kt)("p",null,"Since offline mode does not connect to an upstream node, it does not support metrics or dynamic tokens."),(0,l.kt)("p",null,"To launch in this mode, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./unleash-edge offline --help\nUsage: unleash-edge offline [OPTIONS]\n\nOptions:\n  -b, --bootstrap-file <BOOTSTRAP_FILE>         [env: BOOTSTRAP_FILE=]\n  -t, --tokens <TOKENS>                         [env: TOKENS=]\n  -r, --reload-interval <RELOAD_INTERVAL>       [env: RELOAD_INTERVAL=]\n\n")),(0,l.kt)("h5",{id:"environments-in-offline-mode"},"Environments in offline mode"),(0,l.kt)("p",null,"Currently, Edge does not support multiple environments in offline mode. All tokens added at startup will receive the same list of features passed in as the bootstrap argument.\nHowever, tokens in ",(0,l.kt)("inlineCode",{parentName:"p"},"<project>:<environment>.<secret>")," format will still filter by project."),(0,l.kt)("h2",{id:"metrics"},(0,l.kt)("a",{parentName:"h2",href:"https://docs.getunleash.io/reference/api/unleash/metrics"},"Metrics")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u2757 Note:")," For Unleash to correctly register SDK usage metrics sent from Edge instances, your Unleash instance must be v4.22 or newer."),(0,l.kt)("p",null,"Since Edge is designed to avoid overloading its upstream, Edge gathers and accumulates usage metrics from SDKs for a set interval (METRICS_INTERVAL_SECONDS) before posting a batch upstream.\nThis reduces load on Unleash instances down to a single call every interval, instead of every single client posting to Unleash for updating metrics.\nUnleash instances running on versions older than 4.22 are not able to handle the batch format posted by Edge, which means you won't see any metrics from clients connected to an Edge instance until you're able to update to 4.22 or newer."),(0,l.kt)("h2",{id:"performance"},"Performance"),(0,l.kt)("p",null,"Unleash Edge will scale linearly with CPU. There are k6 benchmarks in the benchmark folder. We've already got some initial numbers from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rakyll/hey"},"hey"),"."),(0,l.kt)("p",null,"Do note that the number of requests Edge can handle does depend on the total size of your toggle response. That is, Edge is faster if you only have 10 toggles with 1 strategy each, than it will be with 1000 toggles with multiple strategies on each. Benchmarks here were run with data fetched from the Unleash demo instance (roughly 100kB (350 features / 200 strategies)) as well as against a small dataset of 5 features with one strategy on each."),(0,l.kt)("p",null,"Edge was started using\n",(0,l.kt)("inlineCode",{parentName:"p"},'docker run --cpus="<cpu>" --memory=128M -p 3063:3063 -e UPSTREAM_URL=<upstream> -e TOKENS="<client token>" unleashorg/unleash-edge:edge -w <number of cpus rounded up to closest integer> edge')),(0,l.kt)("p",null,"Then we run hey against the proxy endpoint, evaluating toggles"),(0,l.kt)("h3",{id:"large-dataset-350-features-100kb"},"Large Dataset (350 features (100kB))"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ hey -z 10s -H "Authorization: <frontend token>" http://localhost:3063/api/frontend`\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CPU"),(0,l.kt)("th",{parentName:"tr",align:null},"Memory"),(0,l.kt)("th",{parentName:"tr",align:null},"RPS"),(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"p95"),(0,l.kt)("th",{parentName:"tr",align:null},"Data transferred"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"6.7 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"600"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/frontend"),(0,l.kt)("td",{parentName:"tr",align:null},"103ms"),(0,l.kt)("td",{parentName:"tr",align:null},"76Mi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"6.7 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"6900"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/frontend"),(0,l.kt)("td",{parentName:"tr",align:null},"7.4ms"),(0,l.kt)("td",{parentName:"tr",align:null},"866Mi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"9.5"),(0,l.kt)("td",{parentName:"tr",align:null},"25300"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/frontend"),(0,l.kt)("td",{parentName:"tr",align:null},"2.4ms"),(0,l.kt)("td",{parentName:"tr",align:null},"3.2Gi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"40921"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/frontend"),(0,l.kt)("td",{parentName:"tr",align:null},"1.6ms"),(0,l.kt)("td",{parentName:"tr",align:null},"5.26Gi")))),(0,l.kt)("p",null,"and against our client features endpoint."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ hey -z 10s -H "Authorization: <client token>" http://localhost:3063/api/client/features\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CPU"),(0,l.kt)("th",{parentName:"tr",align:null},"Memory observed"),(0,l.kt)("th",{parentName:"tr",align:null},"RPS"),(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"p95"),(0,l.kt)("th",{parentName:"tr",align:null},"Data transferred"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"11 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"309"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/client/features"),(0,l.kt)("td",{parentName:"tr",align:null},"199ms"),(0,l.kt)("td",{parentName:"tr",align:null},"300 Mi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"11 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"3236"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/client/features"),(0,l.kt)("td",{parentName:"tr",align:null},"16ms"),(0,l.kt)("td",{parentName:"tr",align:null},"3 Gi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"11 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"12815"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/client/features"),(0,l.kt)("td",{parentName:"tr",align:null},"4.5ms"),(0,l.kt)("td",{parentName:"tr",align:null},"14 Gi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"17 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"23207"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/client/features"),(0,l.kt)("td",{parentName:"tr",align:null},"2.7ms"),(0,l.kt)("td",{parentName:"tr",align:null},"26 Gi")))),(0,l.kt)("h3",{id:"small-dataset-5-features-2kb"},"Small Dataset (5 features (2kB))"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ hey -z 10s -H "Authorization: <frontend token>" http://localhost:3063/api/frontend`\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CPU"),(0,l.kt)("th",{parentName:"tr",align:null},"Memory"),(0,l.kt)("th",{parentName:"tr",align:null},"RPS"),(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"p95"),(0,l.kt)("th",{parentName:"tr",align:null},"Data transferred"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"4.3 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"3673"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/frontend"),(0,l.kt)("td",{parentName:"tr",align:null},"93ms"),(0,l.kt)("td",{parentName:"tr",align:null},"9Mi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"6.7 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"39000"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/frontend"),(0,l.kt)("td",{parentName:"tr",align:null},"1.6ms"),(0,l.kt)("td",{parentName:"tr",align:null},"80Mi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"6.9 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"100020"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/frontend"),(0,l.kt)("td",{parentName:"tr",align:null},"600\u03bcs"),(0,l.kt)("td",{parentName:"tr",align:null},"252Mi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"12.5 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"141090"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/frontend"),(0,l.kt)("td",{parentName:"tr",align:null},"600\u03bcs"),(0,l.kt)("td",{parentName:"tr",align:null},"324Mi")))),(0,l.kt)("p",null,"and against our client features endpoint."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ hey -z 10s -H "Authorization: <client token>" http://localhost:3063/api/client/features\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CPU"),(0,l.kt)("th",{parentName:"tr",align:null},"Memory observed"),(0,l.kt)("th",{parentName:"tr",align:null},"RPS"),(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"p95"),(0,l.kt)("th",{parentName:"tr",align:null},"Data transferred"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"4 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"3298"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/client/features"),(0,l.kt)("td",{parentName:"tr",align:null},"92ms"),(0,l.kt)("td",{parentName:"tr",align:null},"64 Mi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"4 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"32360"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/client/features"),(0,l.kt)("td",{parentName:"tr",align:null},"2ms"),(0,l.kt)("td",{parentName:"tr",align:null},"527Mi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"11 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"95838"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/client/features"),(0,l.kt)("td",{parentName:"tr",align:null},"600\u03bcs"),(0,l.kt)("td",{parentName:"tr",align:null},"2.13 Gi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"17 Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"129381"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/client/features"),(0,l.kt)("td",{parentName:"tr",align:null},"490\u03bcs"),(0,l.kt)("td",{parentName:"tr",align:null},"2.87 Gi")))),(0,l.kt)("h2",{id:"why-choose-unleash-edge-over-the-unleash-proxy"},"Why choose Unleash Edge over the Unleash Proxy?"),(0,l.kt)("p",null,"Edge offers a superset of the same feature set as the Unleash Proxy and we've made sure it offers the same security and privacy features."),(0,l.kt)("p",null,"However, there are a few notable differences between the Unleash Proxy and Unleash Edge:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unleash Edge is built to be light and fast, it handles an order of magnitude more requests per second than the Unleash Proxy can, while using two orders of magnitude less memory."),(0,l.kt)("li",{parentName:"ul"},"All your Unleash environments can be handled by a single instance, no more running multiple instances of the Unleash Proxy to handle both your development and production environments."),(0,l.kt)("li",{parentName:"ul"},"Backend SDKs can connect to Unleash Edge without turning on experimental feature flags."),(0,l.kt)("li",{parentName:"ul"},"Unleash Edge is smart enough to dynamically resolve the tokens you use to connect to it against the upstream Unleash instance. This means you don't have to worry about knowing in advance what tokens your SDKs use - if you want to swap out the Unleash token your SDK uses, this can be done without ever restarting or worrying about Unleash Edge. Unleash Edge will only collect and cache data for the environments and projects you use.")),(0,l.kt)("h2",{id:"development"},"Development"),(0,l.kt)("p",null,"See our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-edge/blob/main/./CONTRIBUTING.md"},"Contributors guide")," as well as our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-edge/blob/main/./development-guide.md"},"development-guide")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This content was generated on ",(0,l.kt)("time",{dateTime:"2023-10-27T00:13:32.032Z"},"27 October 2023 at 00:13:32 Coordinated Universal Time")))}h.isMDXComponent=!0}}]);