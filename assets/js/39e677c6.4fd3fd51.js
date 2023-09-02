"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5312],{58258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const o={title:"Go",slug:"/reference/sdks/go"},i=void 0,s={unversionedId:"generated/sdks/server-side/go",id:"generated/sdks/server-side/go",title:"Go",description:"This document was generated from the README in the Go GitHub repository.",source:"@site/docs/generated/sdks/server-side/go.md",sourceDirName:"generated/sdks/server-side",slug:"/reference/sdks/go",permalink:"/reference/sdks/go",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/generated/sdks/server-side/go.md",tags:[],version:"current",frontMatter:{title:"Go",slug:"/reference/sdks/go"},sidebar:"documentation",previous:{title:".NET",permalink:"/reference/sdks/dotnet"},next:{title:"Java",permalink:"/reference/sdks/java"}},r={},u=[{value:"Go Version",id:"go-version",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"1. Install unleash-client-go",id:"1-install-unleash-client-go",level:3},{value:"2. Initialize unleash",id:"2-initialize-unleash",level:3},{value:"Preloading feature toggles",id:"preloading-feature-toggles",level:4},{value:"Bootstrapping from file",id:"bootstrapping-from-file",level:4},{value:"Bootstrapping from S3",id:"bootstrapping-from-s3",level:4},{value:"Bootstrapping from Google",id:"bootstrapping-from-google",level:4},{value:"3. Use unleash",id:"3-use-unleash",level:3},{value:"4. Stop unleash",id:"4-stop-unleash",level:3},{value:"Built in activation strategies",id:"built-in-activation-strategies",level:3},{value:"Unleash context",id:"unleash-context",level:3},{value:"Caveat",id:"caveat",level:3},{value:"Feature Resolver",id:"feature-resolver",level:3},{value:"Development",id:"development",level:2},{value:"Steps to release",id:"steps-to-release",level:2},{value:"Adding client specifications",id:"adding-client-specifications",level:2},{value:"Benchmarking",id:"benchmarking",level:2}],h={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Generated content",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This document was generated from the README in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-go"},"Go GitHub repository"),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To connect to Unleash, you'll need your Unleash API url (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"https://<your-unleash>/api"),") and a ",(0,l.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#client-tokens"},"server-side API token")," (",(0,l.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"how do I create an API token?"),").")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-go/actions/workflows/build.yml"},(0,l.kt)("img",{parentName:"a",src:"https://github.com/Unleash/unleash-client-go/actions/workflows/build.yml/badge.svg",alt:"Build Status"}))," ",(0,l.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/Unleash/unleash-client-go/v3"},(0,l.kt)("img",{parentName:"a",src:"https://pkg.go.dev/badge/github.com/Unleash/unleash-client-go/v3?status.svg",alt:"GoDoc"}))," ",(0,l.kt)("a",{parentName:"p",href:"https://goreportcard.com/report/github.com/Unleash/unleash-client-go"},(0,l.kt)("img",{parentName:"a",src:"https://goreportcard.com/badge/github.com/Unleash/unleash-client-go",alt:"Go Report Card"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://coveralls.io/github/Unleash/unleash-client-go?branch=v3"},(0,l.kt)("img",{parentName:"a",src:"https://coveralls.io/repos/github/Unleash/unleash-client-go/badge.svg?branch=v3",alt:"Coverage Status"}))),(0,l.kt)("h1",{id:"unleash-client-go"},"unleash-client-go"),(0,l.kt)("p",null,"Unleash Client for Go. Read more about the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash"},"Unleash project")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Version 3.x of the client requires ",(0,l.kt)("inlineCode",{parentName:"strong"},"unleash-server")," v3.x or higher.")),(0,l.kt)("h2",{id:"go-version"},"Go Version"),(0,l.kt)("p",null,"The client is currently tested against Go 1.10.x and 1.13.x. These versions will be updated\nas new versions of Go are released."),(0,l.kt)("p",null,"The client may work on older versions of Go as well, but is not actively tested."),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("h3",{id:"1-install-unleash-client-go"},"1. Install unleash-client-go"),(0,l.kt)("p",null,"To install the latest version of the client use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/Unleash/unleash-client-go/v3\n")),(0,l.kt)("p",null,"If you are still using Unleash Server v2.x.x, then you should use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/Unleash/unleash-client-go\n")),(0,l.kt)("h3",{id:"2-initialize-unleash"},"2. Initialize unleash"),(0,l.kt)("p",null,"The easiest way to get started with Unleash is to initialize it early in your application code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/Unleash/unleash-client-go/v3"\n)\n\nfunc init() {\n    unleash.Initialize(\n        unleash.WithListener(&unleash.DebugListener{}),\n        unleash.WithAppName("my-application"),\n        unleash.WithUrl("http://unleash.herokuapp.com/api/"),\n        unleash.WithCustomHeaders(http.Header{"Authorization": {"<API token>"}}),\n    )\n}\n')),(0,l.kt)("h4",{id:"preloading-feature-toggles"},"Preloading feature toggles"),(0,l.kt)("p",null,"If you'd like to prebake your application with feature toggles (maybe you're working without persistent storage, so Unleash's backup isn't available), you can replace the defaultStorage implementation with a BootstrapStorage. This allows you to pass in a reader to where data in the format of ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/client/features")," can be found."),(0,l.kt)("h4",{id:"bootstrapping-from-file"},"Bootstrapping from file"),(0,l.kt)("p",null,"Bootstrapping from file on disk is then done using something similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/Unleash/unleash-client-go/v3"\n)\n\nfunc init() {\n    myBootstrap := os.Open("bootstrapfile.json") // or wherever your file is located at runtime\n    // BootstrapStorage handles the case where Reader is nil\n    unleash.Initialize(\n        unleash.WithListener(&unleash.DebugListener{}),\n        unleash.WithAppName("my-application"),\n        unleash.WithUrl("http://unleash.herokuapp.com/api/"),\n        unleash.WithStorage(&BootstrapStorage{Reader: myBootstrap})\n    )\n}\n')),(0,l.kt)("h4",{id:"bootstrapping-from-s3"},"Bootstrapping from S3"),(0,l.kt)("p",null,"Bootstrapping from S3 is then done by downloading the file using the AWS library and then passing in a Reader to the just downloaded file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/Unleash/unleash-client-go/v3"\n    "github.com/aws/aws-sdk-go-v2/aws"\n    "github.com/aws/aws-sdk-go-v2/config"\n    "github.com/aws/aws-sdk-go-v2/service/s3"\n)\n\nfunc init() {\n    // Load the shared AWS config\n    cfg, err := config.LoadDefaultConfig(context.TODO())\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Create an S3 client\n    client := s3.NewFromConfig(cfg)\n\n    obj, err := client.GetObject(context.TODO(), &s3.GetObjectInput{\n        Bucket: aws.String("YOURBUCKET"),\n        Key:    aws.String("YOURKEY"),\n    })\n\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    reader := obj.Body\n    defer reader.Close()\n\n    // BootstrapStorage handles the case where Reader is nil\n    unleash.Initialize(\n        unleash.WithListener(&unleash.DebugListener{}),\n        unleash.WithAppName("YOURAPPNAME"),\n        unleash.WithUrl("YOURINSTANCE_URL"),\n        unleash.WithStorage(&BootstrapStorage{Reader: reader})\n    )\n}\n')),(0,l.kt)("h4",{id:"bootstrapping-from-google"},"Bootstrapping from Google"),(0,l.kt)("p",null,"Since the Google Cloud Storage API returns a Reader, implementing a Bootstrap from GCS is done using something similar to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/Unleash/unleash-client-go/v3"\n    "cloud.google.com/go/storage"\n)\n\nfunc init() {\n    ctx := context.Background() // Configure Google Cloud context\n    client, err := storage.NewClient(ctx) // Configure your client\n    if err != nil {\n        // TODO: Handle error.\n    }\n    defer client.Close()\n\n    // Fetch the bucket, then object and then create a reader\n    reader := client.Bucket(bucketName).Object("my-bootstrap.json").NewReader(ctx)\n\n    // BootstrapStorage handles the case where Reader is nil\n    unleash.Initialize(\n        unleash.WithListener(&unleash.DebugListener{}),\n        unleash.WithAppName("my-application"),\n        unleash.WithUrl("http://unleash.herokuapp.com/api/"),\n        unleash.WithStorage(&unleash.BootstrapStorage{Reader: reader})\n    )\n}\n')),(0,l.kt)("h3",{id:"3-use-unleash"},"3. Use unleash"),(0,l.kt)("p",null,"After you have initialized the unleash-client you can easily check if a feature\ntoggle is enabled or not."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'unleash.IsEnabled("app.ToggleX")\n')),(0,l.kt)("h3",{id:"4-stop-unleash"},"4. Stop unleash"),(0,l.kt)("p",null,"To shut down the client (turn off the polling) you can simply call the\ndestroy-method. This is typically not required."),(0,l.kt)("p",null,"unleash.Close()"),(0,l.kt)("h3",{id:"built-in-activation-strategies"},"Built in activation strategies"),(0,l.kt)("p",null,"The Go client comes with implementations for the built-in activation strategies\nprovided by unleash."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DefaultStrategy"),(0,l.kt)("li",{parentName:"ul"},"UserIdStrategy"),(0,l.kt)("li",{parentName:"ul"},"FlexibleRolloutStrategy"),(0,l.kt)("li",{parentName:"ul"},"GradualRolloutUserIdStrategy"),(0,l.kt)("li",{parentName:"ul"},"GradualRolloutSessionIdStrategy"),(0,l.kt)("li",{parentName:"ul"},"GradualRolloutRandomStrategy"),(0,l.kt)("li",{parentName:"ul"},"RemoteAddressStrategy"),(0,l.kt)("li",{parentName:"ul"},"ApplicationHostnameStrategy")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/activation-strategies"},"Read more about activation strategies in the docs"),"."),(0,l.kt)("h3",{id:"unleash-context"},"Unleash context"),(0,l.kt)("p",null,"In order to use some of the common activation strategies you must provide an\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-context"},"unleash-context"),".\nThis client SDK allows you to send in the unleash context as part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"isEnabled")," call:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ctx := context.Context{\n    UserId:        "123",\n    SessionId:     "some-session-id",\n    RemoteAddress: "127.0.0.1",\n}\n\nunleash.IsEnabled("someToggle", unleash.WithContext(ctx))\n')),(0,l.kt)("h3",{id:"caveat"},"Caveat"),(0,l.kt)("p",null,"This client uses go routines to report several events and doesn't drain the channel by default. So you need to either register a listener using ",(0,l.kt)("inlineCode",{parentName:"p"},"WithListener"),' or drain the channel "manually" (demonstrated in ',(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-go/blob/master/example_with_instance_test.go"},"this example"),")."),(0,l.kt)("h3",{id:"feature-resolver"},"Feature Resolver"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"FeatureResolver")," is a ",(0,l.kt)("inlineCode",{parentName:"p"},"FeatureOption")," used in ",(0,l.kt)("inlineCode",{parentName:"p"},"IsEnabled")," via the ",(0,l.kt)("inlineCode",{parentName:"p"},"WithResolver"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"FeatureResolver")," can be used to provide a feature instance in a different way than the client would normally retrieve it. This alternative resolver can be useful if you already have the feature instance and don't want to incur the cost to retrieve it from the repository."),(0,l.kt)("p",null,"An example of its usage is below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'ctx := context.Context{\n    UserId:        "123",\n    SessionId:     "some-session-id",\n    RemoteAddress: "127.0.0.1",\n}\n\n// the FeatureResolver function that will be passed into WithResolver\nresolver := func(featureName string) *api.Feature {\n    if featureName == "someToggle" {\n        // Feature being created in place for sake of example, but it is preferable an existing feature instance is used\n        return &api.Feature{\n            Name:        "someToggle",\n            Description: "Example of someToggle",\n            Enabled:     true,\n            Strategies: []api.Strategy{\n                {\n                    Id:   1,\n                    Name: "default",\n                },\n            },\n            CreatedAt:  time.Time{},\n            Strategy:   "default-strategy",\n        }\n    } else {\n        // it shouldn\'t reach this block because the name will match above "someToggle" for this example\n        return nil\n    }\n}\n\n// This would return true because the matched strategy is default and the feature is Enabled\nunleash.IsEnabled("someToggle", unleash.WithContext(ctx), unleash.WithResolver(resolver))\n')),(0,l.kt)("h2",{id:"development"},"Development"),(0,l.kt)("h2",{id:"steps-to-release"},"Steps to release"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update the clientVersion in ",(0,l.kt)("inlineCode",{parentName:"li"},"client.go")),(0,l.kt)("li",{parentName:"ul"},"Tag the repository with the new tag")),(0,l.kt)("h2",{id:"adding-client-specifications"},"Adding client specifications"),(0,l.kt)("p",null,"In order to make sure the unleash clients uphold their contract, we have defined a set of\nclient specifications that define this contract. These are used to make sure that each unleash client\nat any time adhere to the contract, and define a set of functionality that is core to unleash. You can view\nthe ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/client-specification"},"client specifications here"),"."),(0,l.kt)("p",null,"In order to make the tests run please do the following steps."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// in repository root\n// testdata is gitignored\nmkdir testdata\ncd testdata\ngit clone https://github.com/Unleash/client-specification.git\n")),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"make"),(0,l.kt)("li",{parentName:"ul"},"golint (go get -u golang.org/x/lint/golint)")),(0,l.kt)("p",null,"Run tests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make\n")),(0,l.kt)("p",null,"Run lint check:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make lint\n")),(0,l.kt)("p",null,"Run code-style checks:(currently failing)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make strict-check\n")),(0,l.kt)("p",null,"Run race-tests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make test-race\n")),(0,l.kt)("h2",{id:"benchmarking"},"Benchmarking"),(0,l.kt)("p",null,"You can benchmark feature toggle evaluation by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"go test -run=^$ -bench=BenchmarkFeatureToggleEvaluation -benchtime=10s\n")),(0,l.kt)("p",null,"Here's an example of how the output could look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"goos: darwin\ngoarch: arm64\npkg: github.com/Unleash/unleash-client-go/v3\nBenchmarkFeatureToggleEvaluation-8 Final Estimated Operations Per Day: 101.131 billion (1.011315e+11)\n13635154 854.3 ns/op\nPASS\nok github.com/Unleash/unleash-client-go/v3 13.388s\n")),(0,l.kt)("p",null,"In this example the benchmark was run on a MacBook Pro (M1 Pro, 2021) with 16GB RAM."),(0,l.kt)("p",null,"We can see a result of ",(0,l.kt)("strong",{parentName:"p"},"854.3 ns/op"),", which means around ",(0,l.kt)("strong",{parentName:"p"},"101.131 billion")," feature toggle evaluations per day."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": The benchmark is run with a single CPU core, no parallelism."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This content was generated on ",(0,l.kt)("time",{dateTime:"2023-09-02T00:13:08.302Z"},"2 September 2023 at 00:13:08 Coordinated Universal Time")))}p.isMDXComponent=!0}}]);