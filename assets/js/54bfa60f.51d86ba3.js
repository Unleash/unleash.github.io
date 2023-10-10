"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[198],{49976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={title:"Rust",slug:"/reference/sdks/rust",custom_edit_url:"https://github.com/Unleash/unleash-client-rust/edit/main/README.md"},l=void 0,o={unversionedId:"generated/sdks/server-side/rust",id:"generated/sdks/server-side/rust",title:"Rust",description:"This document was generated from the README in the Rust GitHub repository.",source:"@site/docs/generated/sdks/server-side/rust.md",sourceDirName:"generated/sdks/server-side",slug:"/reference/sdks/rust",permalink:"/reference/sdks/rust",draft:!1,editUrl:"https://github.com/Unleash/unleash-client-rust/edit/main/README.md",tags:[],version:"current",frontMatter:{title:"Rust",slug:"/reference/sdks/rust",custom_edit_url:"https://github.com/Unleash/unleash-client-rust/edit/main/README.md"},sidebar:"documentation",previous:{title:"Ruby",permalink:"/reference/sdks/ruby"},next:{title:"Android",permalink:"/reference/sdks/android-proxy"}},s={},u=[{value:"Client overview",id:"client-overview",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Status",id:"status",level:2},{value:"Code of conduct",id:"code-of-conduct",level:2},{value:"Contributing",id:"contributing",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Generated content",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This document was generated from the README in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-rust"},"Rust GitHub repository"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To connect to Unleash, you'll need your Unleash API url (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<your-unleash>/api"),") and a ",(0,i.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#client-tokens"},"server-side API token")," (",(0,i.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"how do I create an API token?"),").")),(0,i.kt)("h1",{id:"unleash-api-client-for-rustlang"},"Unleash API client for Rustlang"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://unleash.github.io"},"Unleash")," is a feature flag API system. This is a\nclient for it to facilitate using the API to control features in Rust programs."),(0,i.kt)("h2",{id:"client-overview"},"Client overview"),(0,i.kt)("p",null,"The client is written using async rust. For communicating with the Unleash API\nsurf or reqwest support is built in, or any async HTTP client can be provided by\nthe user if they implement the thin trait used to abstract over the actual\nclient."),(0,i.kt)("p",null,"Examples with async-std and tokio are in the examples/ in the source\ntree."),(0,i.kt)("p",null,"To use it in a sync program, run an async executor and ",(0,i.kt)("inlineCode",{parentName:"p"},"block_on()")," the relevant\ncalls. As the client specification requires sending background metrics to the\nAPI, you will need to arrange to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"poll_for_updates")," method from a\nthread as demonstrated in ",(0,i.kt)("inlineCode",{parentName:"p"},"examples/theads.rs")),(0,i.kt)("p",null,"The unleash defined strategies are included, to support custom strategies\nuse the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientBuilder")," and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"strategy")," method to register your custom\nstrategy memoization function."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/unleash-api-client/latest/unleash_api_client/"},"crate documentation")," should be consulted for more detail."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The easiest way to get started with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," is using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientBuilder"),". A simple example is provided:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let config = EnvironmentConfig::from_env()?;\nlet client = client::ClientBuilder::default()\n    .interval(500)\n    .into_client::<UserFeatures, reqwest::Client>(\n        &config.api_url,\n        &config.app_name,\n        &config.instance_id,\n        config.secret,\n    )?;\nclient.register().await?;\n")),(0,i.kt)("p",null,"The values required for the ",(0,i.kt)("inlineCode",{parentName:"p"},"into_client")," method are described as follows (in order, as seen above):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api_url")," - The server URL to fetch toggles from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"app_name")," - The name of your application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"instance_id")," - A unique ID, ideally per run. A runtime generated UUID would be a sensible choice here."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authorization")," - An Unleash client secret, if set this will be passed as the authorization header.")),(0,i.kt)("p",null,"While the above code shows the usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"EnvironmentConfig"),", this isn't required and is provided as a convenient way of reading a data from the system environment variables."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"EnvironmentConfig Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"api_url")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UNLEASH_API_URL")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"app_name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UNLEASH_APP_NAME")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"instance_id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UNLEASH_INSTANCE_ID")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"secret")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UNLEASH_CLIENT_SECRET")),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("p",null,"Note that if you do use the ",(0,i.kt)("inlineCode",{parentName:"p"},"EnvironmentConfig")," as a way of accessing the system variables, you'll need to ensure that all the environment variables marked as required in the above table are set, or a panic will be raised."),(0,i.kt)("p",null,"The ClientBuilder also has a few builder methods for setting properties which are assumed to have good defaults and generally do not require changing. If you do need to alter these properties you can invoke the following methods on the builder (as seen above with the interval)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"interval"),(0,i.kt)("td",{parentName:"tr",align:null},"u64"),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the polling interval to the Unleash server, in milliseconds"),(0,i.kt)("td",{parentName:"tr",align:null},"15000ms")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"disable_metric_submission"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"Turns off the metrics submission to Unleash"),(0,i.kt)("td",{parentName:"tr",align:null},"On")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enable_string_features"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"By default the Rust SDK requires you to define an enum for feature resolution, turning this on will allow you to resolve your features by string types instead, through the use of the ",(0,i.kt)("inlineCode",{parentName:"td"},"is_enabled_str")," method. Be warned that this is enforced by asserts and calling ",(0,i.kt)("inlineCode",{parentName:"td"},"is_enabled_str")," without turning this on with result in a panic"),(0,i.kt)("td",{parentName:"tr",align:null},"Off")))),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Core Unleash API features work, with Rust 1.59 or above. The MSRV for this project is weakly enforced: when a hard dependency raises its version, so will the minimum version tested against, but if older rust versions work for a user, that is not prevented. ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," in particular is known to enforce a 6-month compiler age, so regular increases with the minimum version tested against are expected."),(0,i.kt)("p",null,"Unimplemented Unleash specified features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"local serialised copy of toggles to survive restarts without network traffic.")),(0,i.kt)("h2",{id:"code-of-conduct"},"Code of conduct"),(0,i.kt)("p",null,"Please note that this project is released with a Contributor Code of Conduct. By\nparticipating in this project you agree to abide by its terms."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"PR's on Github as normal please. Cargo test to run the test suite, rustfmt code\nbefore submitting. To run the functional test suite you need an Unleash API to\nexecute against."),(0,i.kt)("p",null,"For instance, one way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d\n")),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:4242/"},"http://localhost:4242/")," and log in with admin + unleash4all, then create\na new API token at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:4242/admin/api/create-token"},"http://localhost:4242/admin/api/create-token")," for user\nadmin, type Client."),(0,i.kt)("p",null,"Then run the test suite:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'UNLEASH_API_URL=http://127.0.0.1:4242/api \\\n  UNLEASH_APP_NAME=fred UNLEASH_INSTANCE_ID=test \\\n  UNLEASH_CLIENT_SECRET="<tokenvalue>" \\\n  cargo test --features functional  -- --nocapture\n')),(0,i.kt)("p",null,"or similar. The functional test suite looks for a manually setup set of\nfeatures. E.g. log into the Unleash UI on port 4242 and create a feature called\n",(0,i.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This content was generated on ",(0,i.kt)("time",{dateTime:"2023-10-10T16:13:40.305Z"},"10 October 2023 at 16:13:40 Coordinated Universal Time")))}p.isMDXComponent=!0}}]);