"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7842],{33033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),s=(n(67294),n(3905));const r={title:"Unleash Edge",slug:"/reference/unleash-edge"},l=void 0,o={unversionedId:"generated/unleash-edge",id:"generated/unleash-edge",title:"Unleash Edge",description:"This document was generated from the README in the Unleash Edge GitHub repository.",source:"@site/docs/generated/unleash-edge.md",sourceDirName:"generated",slug:"/reference/unleash-edge",permalink:"/reference/unleash-edge",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/generated/unleash-edge.md",tags:[],version:"current",frontMatter:{title:"Unleash Edge",slug:"/reference/unleash-edge"},sidebar:"documentation",previous:{title:"Maintenance Mode",permalink:"/reference/maintenance-mode"},next:{title:"Unleash Proxy",permalink:"/reference/unleash-proxy"}},i={},d=[{value:"Running Unleash Edge",id:"running-unleash-edge",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Modes",id:"modes",level:3},{value:"Edge",id:"edge",level:4},{value:"Offline",id:"offline",level:4},{value:"Performance (more to come)",id:"performance-more-to-come",level:3},{value:"Development",id:"development",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Generated content",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This document was generated from the README in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-edge"},"Unleash Edge GitHub repository"),".")),(0,s.kt)("admonition",{title:"\ud83c\udfd7\ufe0f Under construction!",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Unleash Edge is currently considered very experimental. Use it at your own risk."),(0,s.kt)("p",{parentName:"admonition"},"Share your comments in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash/discussions"},"\ud83d\udde3\ufe0f GitHub Discussions")," or the ",(0,s.kt)("a",{parentName:"p",href:"https://slack.unleash.run/"},"\ud83d\udcac Unleash community Slack"),".")),(0,s.kt)("h1",{id:"unleash-edge"},"Unleash Edge"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://crates.io/crates/unleash-edge"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/unleash-edge?label=latest",alt:"crates.io"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/unleash-edge/latest"},(0,s.kt)("img",{parentName:"a",src:"https://docs.rs/unleash-edge/badge.svg?version=latest",alt:"Documentation"})),"\n",(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/crates/l/unleash-edge.svg",alt:"MIT licensed"}),"\n",(0,s.kt)("a",{parentName:"p",href:"https://deps.rs/crate/unleash-edge/0.2.0"},(0,s.kt)("img",{parentName:"a",src:"https://deps.rs/crate/unleash-edge/0.2.0/status.svg",alt:"Dependency Status"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-edge/actions/workflows/test-with-coverage.yaml"},(0,s.kt)("img",{parentName:"a",src:"https://github.com/Unleash/unleash-edge/actions/workflows/test-with-coverage.yaml/badge.svg",alt:"CI"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://coveralls.io/github/Unleash/unleash-edge?branch=main"},(0,s.kt)("img",{parentName:"a",src:"https://coveralls.io/repos/github/Unleash/unleash-edge/badge.svg?branch=main",alt:"Coverage Status"})),"\n",(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/crates/d/unleash-edge.svg",alt:"downloads"})),(0,s.kt)("p",null,"Unleash Edge is the successor to the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/how-to/how-to-run-the-unleash-proxy"},"Unleash Proxy"),"."),(0,s.kt)("h2",{id:"running-unleash-edge"},"Running Unleash Edge"),(0,s.kt)("p",null,"Unleash Edge is compiled to a single binary. You can configure it by passing in arguments or setting environment variables."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"Usage: unleash-edge [OPTIONS] <COMMAND>\n\nCommands:\n  edge     Run in edge mode\n  offline  Run in offline mode\n  help     Print this message or the help of the given subcommand(s)\n\nOptions:\n  -p, --port <PORT>\n          Which port should this server listen for HTTP traffic on [env: PORT=] [default: 3063]\n  -i, --interface <INTERFACE>\n          Which interfaces should this server listen for HTTP traffic on [env: INTERFACE=] [default: 0.0.0.0]\n  -w, --workers <WORKERS>\n          How many workers should be started to handle requests. Defaults to number of physical cpus [env: WORKERS=] [default: number of physical cpus]\n      --tls-enable\n          Should we bind TLS [env: TLS_ENABLE=]\n      --tls-server-key <TLS_SERVER_KEY>\n          Server key to use for TLS [env: TLS_SERVER_KEY=]\n      --tls-server-cert <TLS_SERVER_CERT>\n          Server Cert to use for TLS [env: TLS_SERVER_CERT=]\n      --tls-server-port <TLS_SERVER_PORT>\n          Port to listen for https connection on (will use the interfaces already defined) [env: TLS_SERVER_PORT=] [default: 3043]\n      --instance-id <INSTANCE_ID>\n          Instance id. Used for metrics reporting [env: INSTANCE_ID=] [default: Ulid::new()]\n  -a, --app-name <APP_NAME>\n          App name. Used for metrics reporting [env: APP_NAME=] [default: unleash-edge]\n  -h, --help\n          Print help\n")),(0,s.kt)("h2",{id:"concepts"},"Concepts"),(0,s.kt)("h3",{id:"modes"},"Modes"),(0,s.kt)("p",null,"Edge currently supports 2 different modes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#edge"},"Edge")," - Connection to upstream node (Unleash instance or another Edge). Supports dynamic tokens, metrics and other advanced features;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#offline"},"Offline")," - No connection to upstream node. Full control of data and tokens;")),(0,s.kt)("h4",{id:"edge"},"Edge"),(0,s.kt)("mermaid",{value:"graph LR\n  A(Client) --\x3e|Fetch toggles| B((Edge))\n  B--\x3e|Fetch toggles| C((Unleash))"}),(0,s.kt)("p",null,'Edge mode is the "standard" mode for Unleash Edge and the one you should default to in most cases. It connects to an upstream node, such as your Unleash instance, and uses that as the source of truth for feature toggles.'),(0,s.kt)("p",null,"Other than connecting Edge directly to your Unleash instance, it's also possible to connect to another Edge instance (",(0,s.kt)("em",{parentName:"p"},"daisy chaining"),"). You can have as many Edge nodes as you'd like between the Edge node your clients are accessing and the Unleash server, and it's also possible for multiple nodes to connect to a single upstream one. Depending on your architecture and requirements this can be a powerful feature, offering you flexibility and scalability when planning your implementation."),(0,s.kt)("mermaid",{value:"graph LR\n  A(Client 1) --\x3e|Fetch toggles| C((Edge 1))\n  B(Client 2) --\x3e|Fetch toggles| D((Edge 2))\n  C--\x3e|Fetch toggles| E((Edge 3))\n  D--\x3e|Fetch toggles| E\n  E--\x3e|Fetch toggles| F((Unleash))"}),(0,s.kt)("p",null,"This means that, in order to start up, Edge mode needs to know where the upstream node is. This is done by passing the ",(0,s.kt)("inlineCode",{parentName:"p"},"--upstream-url")," command line argument or setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"UPSTREAM_URL")," environment variable."),(0,s.kt)("p",null,"By default, Edge mode uses in-memory to store the features it fetches from the upstream node. However, you may want to use a more persistent storage solution. Edge supports Redis as well, and you can configure it by passing in the ",(0,s.kt)("inlineCode",{parentName:"p"},"--redis-url")," command line argument or setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"REDIS_URL")," environment variable."),(0,s.kt)("p",null,"Edge mode also supports dynamic tokens, meaning that Edge doesn't need a token to be provided when starting up. Once we make a request to the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/client/features")," endpoint using a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#client-tokens"},"client token")," Edge will validate upstream and fetch its respective features. After that, it gets added to the list of known tokens that gets periodically synced, making sure it is a valid token and its features are up-to-date."),(0,s.kt)("p",null,"Even though Edge supports dynamic tokens, you still have the option of providing a token through the command line argument or environment variable. This way, since Edge already knows about your token at start up, it will sync your features for that token and should be ready for your requests right away (",(0,s.kt)("em",{parentName:"p"},"warm up / hot start"),")."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#front-end-tokens"},"Front-end tokens")," can also be used with ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/frontend")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/proxy")," endpoints, however they are not allowed to fetch features upstream. In order to use these tokens correctly and make sure they return the correct information, it's important that the features they are allowed to access are already present in that Edge node's features cache. The easiest way to ensure this is by passing in at least one client token as one of the command line arguments, ensuring it has access to the same features as the front-end token you'll be using."),(0,s.kt)("p",null,"Besides dynamic tokens, Edge mode also supports metrics and other advanced features."),(0,s.kt)("p",null,"To launch in this mode, run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./unleash-edge edge --help\nUsage: unleash-edge edge [OPTIONS] --upstream-url <UPSTREAM_URL>\n\nOptions:\n  -u, --upstream-url <UPSTREAM_URL>\n          Where is your upstream URL. Remember, this is the URL to your instance, without any trailing /api suffix [env: UPSTREAM_URL=]\n  -r, --redis-url <REDIS_URL>\n          [env: REDIS_URL=]\n  -m, --metrics-interval-seconds <METRICS_INTERVAL_SECONDS>\n          How often should we post metrics upstream? [env: METRICS_INTERVAL_SECONDS=] [default: 60]\n  -f, --features-refresh-interval-seconds <FEATURES_REFRESH_INTERVAL_SECONDS>\n          How long between each refresh for a token [env: FEATURES_REFRESH_INTERVAL_SECONDS=] [default: 10]\n  -t, --tokens <TOKENS>\n          Get data for these client tokens at startup. Hot starts your feature cache [env: TOKENS=]\n\n")),(0,s.kt)("h4",{id:"offline"},"Offline"),(0,s.kt)("mermaid",{value:"graph LR\n  A(Client) --\x3e|Fetch toggles| B((Edge))\n  B--\x3e|Fetch toggles| C[Features dump]"}),(0,s.kt)("p",null,"Offline mode should be used when you don't have a connection to an upstream node, such as your Unleash instance itself or another Edge instance. It can also be used when you need to have full control of both the data your clients will get and which tokens can be used to access it."),(0,s.kt)("p",null,"Since this mode does not connect to an upstream node, it needs a downloaded JSON dump of a result from a query against an Unleash server on the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api/unleash/get-client-feature"},"/api/client/features")," endpoint as well as a comma-separated list of tokens that should be allowed to access the server."),(0,s.kt)("p",null,"If your token follows the Unleash API token format ",(0,s.kt)("inlineCode",{parentName:"p"},"[project]:[environment].<somesecret>"),", Edge will filter the features dump to match the project contained in the token."),(0,s.kt)("p",null,"If you'd rather use a simple token like ",(0,s.kt)("inlineCode",{parentName:"p"},"secret-123"),", any query against ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/client/features")," will receive the dump passed in on the command line."),(0,s.kt)("p",null,"When using offline mode, you can think of these tokens as ",(0,s.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#proxy-client-keys"},"proxy client keys"),"."),(0,s.kt)("p",null,"Since offline mode does not connect to an upstream node, it does not support metrics or dynamic tokens."),(0,s.kt)("p",null,"To launch in this mode, run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./unleash-edge offline --help\nUsage: unleash-edge offline [OPTIONS]\n\nOptions:\n  -b, --bootstrap-file <BOOTSTRAP_FILE>  [env: BOOTSTRAP_FILE=]\n  -t, --tokens <TOKENS>                  [env: TOKENS=]\n")),(0,s.kt)("h3",{id:"performance-more-to-come"},"Performance (more to come)"),(0,s.kt)("p",null,"Unleash edge will scale linearly with CPU. There are k6 benchmarks in the benchmark folder and we've already got some initial numbers from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rakyll/hey"},"hey"),"."),(0,s.kt)("p",null,"Edge was started using\n",(0,s.kt)("inlineCode",{parentName:"p"},'docker run --cpus="<cpu>" --memory=128M -p 3063:3063 -e UPSTREAM_URL=<upstream> -e TOKENS="<client token>" unleashorg/unleash-edge:edge -w <number of cpus> edge')),(0,s.kt)("p",null,"Then we run hey against the proxy endpoint, evaluating toggles"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ hey -z 10s -H "Authorization: <frontend token>" http://localhost:3063/api/proxy`\n')),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"CPU"),(0,s.kt)("th",{parentName:"tr",align:null},"Memory"),(0,s.kt)("th",{parentName:"tr",align:null},"RPS"),(0,s.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,s.kt)("th",{parentName:"tr",align:null},"p95"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"0.1"),(0,s.kt)("td",{parentName:"tr",align:null},"6.7 Mi"),(0,s.kt)("td",{parentName:"tr",align:null},"600"),(0,s.kt)("td",{parentName:"tr",align:null},"/api/proxy"),(0,s.kt)("td",{parentName:"tr",align:null},"19ms")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"6.7 Mi"),(0,s.kt)("td",{parentName:"tr",align:null},"8000"),(0,s.kt)("td",{parentName:"tr",align:null},"/api/proxy"),(0,s.kt)("td",{parentName:"tr",align:null},"7.4ms")))),(0,s.kt)("p",null,"and against our client features endpoint."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ hey -z 10s -H "Authorization: <client token>" http://localhost:3063/api/client/features\n')),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"CPU"),(0,s.kt)("th",{parentName:"tr",align:null},"Memory observed"),(0,s.kt)("th",{parentName:"tr",align:null},"RPS"),(0,s.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,s.kt)("th",{parentName:"tr",align:null},"p95"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"0.1"),(0,s.kt)("td",{parentName:"tr",align:null},"6 Mi"),(0,s.kt)("td",{parentName:"tr",align:null},"1370"),(0,s.kt)("td",{parentName:"tr",align:null},"/api/client/features"),(0,s.kt)("td",{parentName:"tr",align:null},"97ms")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"7 Mi"),(0,s.kt)("td",{parentName:"tr",align:null},"15000"),(0,s.kt)("td",{parentName:"tr",align:null},"/api/client/features"),(0,s.kt)("td",{parentName:"tr",align:null},"4ms")))),(0,s.kt)("h2",{id:"development"},"Development"),(0,s.kt)("p",null,"See our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-edge/blob/main/./CONTRIBUTING.md"},"Contributors guide")," as well as our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-edge/blob/main/./development-guide.md"},"development-guide")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"This content was generated on ",(0,s.kt)("time",{dateTime:"2023-03-01T00:17:45.841Z"},"1 March 2023 at 00:17:45 Coordinated Universal Time")))}p.isMDXComponent=!0}}]);