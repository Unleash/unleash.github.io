"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5776],{11036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:".NET",slug:"/reference/sdks/dotnet",custom_edit_url:"https://github.com/Unleash/unleash-client-dotnet/edit/main/README.md"},s=void 0,i={unversionedId:"generated/sdks/server-side/dotnet",id:"generated/sdks/server-side/dotnet",title:".NET",description:"This document was generated from the README in the .NET GitHub repository.",source:"@site/docs/generated/sdks/server-side/dotnet.md",sourceDirName:"generated/sdks/server-side",slug:"/reference/sdks/dotnet",permalink:"/reference/sdks/dotnet",draft:!1,editUrl:"https://github.com/Unleash/unleash-client-dotnet/edit/main/README.md",tags:[],version:"current",frontMatter:{title:".NET",slug:"/reference/sdks/dotnet",custom_edit_url:"https://github.com/Unleash/unleash-client-dotnet/edit/main/README.md"},sidebar:"documentation",previous:{title:"SDK overview",permalink:"/reference/sdks/"},next:{title:"Go",permalink:"/reference/sdks/go"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Install the package",id:"install-the-package",level:3},{value:"Create a new a Unleash instance",id:"create-a-new-a-unleash-instance",level:3},{value:"Synchronous startup",id:"synchronous-startup",level:4},{value:"Configuring projects in unleash client",id:"configuring-projects-in-unleash-client",level:4},{value:"Check feature toggles",id:"check-feature-toggles",level:3},{value:"Providing context",id:"providing-context",level:4},{value:"Handling events",id:"handling-events",level:2},{value:"Activation strategies",id:"activation-strategies",level:2},{value:"Custom strategies",id:"custom-strategies",level:3},{value:"Unleash context",id:"unleash-context",level:2},{value:"UnleashContextProvider",id:"unleashcontextprovider",level:3},{value:"Custom HTTP headers",id:"custom-http-headers",level:2},{value:"HttpMessageHandlers/Custom HttpClient initialization",id:"httpmessagehandlerscustom-httpclient-initialization",level:3},{value:"Dynamic custom HTTP headers",id:"dynamic-custom-http-headers",level:3},{value:"Logging",id:"logging",level:2},{value:"Custom logger integration",id:"custom-logger-integration",level:3},{value:"Local backup",id:"local-backup",level:2},{value:"Bootstrapping",id:"bootstrapping",level:2},{value:"Provided Bootstrappers",id:"provided-bootstrappers",level:3},{value:"ToggleBootstrapFileProvider",id:"togglebootstrapfileprovider",level:4},{value:"ToggleBootstrapUrlProvider",id:"togglebootstrapurlprovider",level:4},{value:"Json Serialization",id:"json-serialization",level:2},{value:"Run unleash server with Docker locally",id:"run-unleash-server-with-docker-locally",level:2},{value:"Development",id:"development",level:2},{value:"Other information",id:"other-information",level:3}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Generated content",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This document was generated from the README in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-dotnet"},".NET GitHub repository"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To connect to Unleash, you'll need your Unleash API url (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<your-unleash>/api"),") and a ",(0,r.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#client-tokens"},"server-side API token")," (",(0,r.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"how do I create an API token?"),").")),(0,r.kt)("h1",{id:"unleash-featuretoggle-client-for-net"},"Unleash FeatureToggle Client for .Net"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-dotnet/blob/main/code-of-conduct.md"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg",alt:"Contributor Covenant"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Unleash.Client/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Unleash.Client.svg",alt:"NuGet"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Unleash Client SDK for .Net. It is compatible with the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.unleash-hosted.com/"},"Unleash-hosted.com SaaS offering")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/unleash/unleash"},"Unleash Open-Source"),"."),(0,r.kt)("p",null,"The main motivation for doing feature toggling is to decouple the process for deploying code to production and releasing new features. This helps reducing risk, and allow us to easily manage which features to enable."),(0,r.kt)("p",null,"Feature toggles decouple deployment of code from release of new features."),(0,r.kt)("p",null,"Take a look at the demonstration site at ",(0,r.kt)("a",{parentName:"p",href:"http://unleash.herokuapp.com/"},"unleash.herokuapp.com")),(0,r.kt)("p",null,"Read more of the main project at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash"},"github.com/unleash/unleash")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/unleash/unleash-client-dotnet/master/resources/dashboard.png",alt:"dashboard",title:"Unleash Server Dashboard"})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Supported Frameworks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NET Standard 2.0"),(0,r.kt)("li",{parentName:"ul"},".Net 4.7"),(0,r.kt)("li",{parentName:"ul"},".Net 4.6.1"),(0,r.kt)("li",{parentName:"ul"},".Net 4.6"),(0,r.kt)("li",{parentName:"ul"},".Net 4.5.1"),(0,r.kt)("li",{parentName:"ul"},".Net 4.5")),(0,r.kt)("p",null,"No direct dependencies"),(0,r.kt)("p",null,"Extendable architecture"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inject your own implementations of key components (Json serializer, background task scheduler, http client factory)")),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"install-the-package"},"Install the package"),(0,r.kt)("p",null,"Install the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"Unleash.Client")," from ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Unleash.Client/"},"nuget.org")," or use the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet")," cli:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package unleash.client\n")),(0,r.kt)("h3",{id:"create-a-new-a-unleash-instance"},"Create a new a Unleash instance"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f Important:")," In almost every case, you only want a ",(0,r.kt)("strong",{parentName:"p"},"single, shared instance of the Unleash  client (a ",(0,r.kt)("em",{parentName:"strong"},"singleton"),")")," in your application . You would typically use a dependency injection framework to inject it where you need it. Having multiple instances of the client in your application could lead to inconsistencies and performance degradation."),(0,r.kt)("p",null,"If you create more than 10 instances, Unleash will attempt to log warnings about your usage."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"To create a new instance of Unleash you need to create and pass in an ",(0,r.kt)("inlineCode",{parentName:"p"},"UnleashSettings")," object."),(0,r.kt)("p",null,"When creating an instance of the Unleash client, you can choose to do it either ",(0,r.kt)("strong",{parentName:"p"},"synchronously")," or ",(0,r.kt)("strong",{parentName:"p"},"asynchronously"),".\nThe SDK will synchronize with the Unleash API on initialization, so it can take a moment for the it to reach the correct state. With an asynchronous startup, this would happen in the background while the rest of your code keeps executing. In most cases, this isn't an issue. But if you want to ",(0,r.kt)("strong",{parentName:"p"},"wait until the SDK is fully synchronized"),", then you should use the configuration explained in the ",(0,r.kt)("a",{parentName:"p",href:"#synchronous-startup"},"synchronous startup")," section.\nThis is usually not an issue and Unleash will do this in the background as soon as you initialize it.\nHowever, if it's important that you do not continue execution until the SDK has synchronized, then you should use the configuration explained in the ",(0,r.kt)("a",{parentName:"p",href:"#synchronous-startup"},"synchronous startup")," section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'\nvar settings = new UnleashSettings()\n{\n    AppName = "dotnet-test",\n    UnleashApi = new Uri("<your-api-url>"),\n    CustomHttpHeaders = new Dictionary()\n    {\n      {"Authorization","<your-api-token>" }\n    }\n};\n\nvar unleash = new DefaultUnleash(settings);\n\n// Add to Container as Singleton\n// .NET Core 3/.NET 5/...\nservices.AddSingleton<IUnleash>(c => unleash);\n\n')),(0,r.kt)("p",null,"When your application shuts down, remember to dispose the unleash instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"unleash?.Dispose()\n")),(0,r.kt)("h4",{id:"synchronous-startup"},"Synchronous startup"),(0,r.kt)("p",null,"This unleash client does not throw any exceptions if the unleash server is unreachable. Also, fetching features will return the default value if the feature toggle cache has not yet been populated. In many situations it is perferable to throw an error than allow an application to startup with incorrect feature toggle values. For these cases, we provide a client factory with the option for synchronous initialization."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var settings = new UnleashSettings()\n{\n    AppName = "dotnet-test",\n    UnleashApi = new Uri("<your-api-url>"),\n    CustomHttpHeaders = new Dictionary<string, string>()\n    {\n       {"Authorization","<your-api-token>" }\n    }\n};\nvar unleashFactory = new UnleashClientFactory();\n\nIUnleash unleash = await unleashFactory.CreateClientAsync(settings, synchronousInitialization: true);\n\n// this `unleash` has successfully fetched feature toggles and written them to its cache.\n// if network errors or disk permissions prevented this from happening, the above await would have thrown an exception\n\nvar awesome = unleash.IsEnabled("SuperAwesomeFeature");\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateClientAsync")," method was introduced in version 1.5.0, making the previous ",(0,r.kt)("inlineCode",{parentName:"p"},"Generate")," method obsolete. There's also a ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateClient")," method available if you don't prefer the async version."),(0,r.kt)("h4",{id:"configuring-projects-in-unleash-client"},"Configuring projects in unleash client"),(0,r.kt)("p",null,"If you're organizing your feature toggles in ",(0,r.kt)("inlineCode",{parentName:"p"},"Projects")," in Unleash Enterprise, you can specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectId")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnleashSettings")," to select which project to fetch feature toggles for."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'\nvar settings = new UnleashSettings()\n{\n    AppName = "dotnet-test",\n    UnleashApi = new Uri("http://unleash.herokuapp.com/api/"),\n    ProjectId = "projectId"\n};\n\n')),(0,r.kt)("h3",{id:"check-feature-toggles"},"Check feature toggles"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IsEnabled")," method allows you to check whether a feature is enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'if(unleash.IsEnabled("SuperAwesomeFeature"))\n{\n  //do some magic\n}\nelse\n{\n  //do old boring stuff\n}\n')),(0,r.kt)("p",null,"If the Unleash client can't find the feature you're trying to check, it will default to returning ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". You can change this behavior on a per-invocation basis by providing a fallback value as a second argument."),(0,r.kt)("p",null,"For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},'unleash.IsEnabled("SuperAwesomeFeature")')," would return ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"SuperAwesomeFeature")," doesn't exist. But if you'd rather it returned ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", then you could pass that as the second argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'unleash.IsEnabled("SuperAwesomeFeature", true)\n')),(0,r.kt)("h4",{id:"providing-context"},"Providing context"),(0,r.kt)("p",null,"You can also ",(0,r.kt)("strong",{parentName:"p"},"provide an ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.getunleash.io/reference/unleash-context"},"Unleash context"))," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"IsEnabled")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var context = new UnleashContext\n{\n  UserId = "61"\n};\n\nunleash.IsEnabled("someToggle", context);\n')),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"#unleash-context"},"Unleash context")," section for more information about using the Unleash context in the .NET SDK."),(0,r.kt)("h2",{id:"handling-events"},"Handling events"),(0,r.kt)("p",null,"Currently supported events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/advanced/impression-data#impression-event-data"},"Impression data events")),(0,r.kt)("li",{parentName:"ul"},"Error events"),(0,r.kt)("li",{parentName:"ul"},"Toggles updated event")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'\nvar settings = new UnleashSettings()\n{\n    // ...\n};\n\nvar unleash = new DefaultUnleash(settings);\n\n// Set up handling of impression and error events\nunleash.ConfigureEvents(cfg =>\n{\n    cfg.ImpressionEvent = evt => { Console.WriteLine($"{evt.FeatureName}: {evt.Enabled}"); };\n    cfg.ErrorEvent = evt => { /* Handling code here */ Console.WriteLine($"{evt.ErrorType} occured."); };\n    cfg.TogglesUpdatedEvent = evt => { /* Handling code here */ Console.WriteLine($"Toggles updated on: {evt.UpdatedOn}"); };\n});\n\n')),(0,r.kt)("h2",{id:"activation-strategies"},"Activation strategies"),(0,r.kt)("p",null,"The .Net client comes with implementations for the built-in activation strategies provided by unleash."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DefaultStrategy"),(0,r.kt)("li",{parentName:"ul"},"UserWithIdStrategy"),(0,r.kt)("li",{parentName:"ul"},"GradualRolloutRandomStrategy"),(0,r.kt)("li",{parentName:"ul"},"GradualRolloutUserWithIdStrategy"),(0,r.kt)("li",{parentName:"ul"},"GradualRolloutSessionIdStrategy"),(0,r.kt)("li",{parentName:"ul"},"RemoteAddressStrategy"),(0,r.kt)("li",{parentName:"ul"},"ApplicationHostnameStrategy"),(0,r.kt)("li",{parentName:"ul"},"FlexibleRolloutStrategy")),(0,r.kt)("p",null,"Read more about the strategies in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/activation-strategies"},"the activation strategy reference docs"),"."),(0,r.kt)("h3",{id:"custom-strategies"},"Custom strategies"),(0,r.kt)("p",null,"You can also specify and implement your own ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/custom-activation-strategies"},"custom strategies"),". The specification must be registered in the Unleash UI and you must register the strategy implementation when you wire up unleash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"IStrategy s1 = new MyAwesomeStrategy();\nIStrategy s2 = new MySuperAwesomeStrategy();\n\nIUnleash unleash = new DefaultUnleash(config, s1, s2);\n")),(0,r.kt)("h2",{id:"unleash-context"},"Unleash context"),(0,r.kt)("p",null,"In order to use some of the common activation strategies you must provide an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/unleash-context"},"Unleash context"),"."),(0,r.kt)("p",null,"If you have configured custom stickiness and want to use that with the FlexibleRolloutStrategy or Variants, add the custom stickiness parameters to the Properties dictionary on the Unleash Context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'HttpContext.Current.Items["UnleashContext"] = new UnleashContext\n{\n    UserId = HttpContext.Current.User?.Identity?.Name,\n    SessionId = HttpContext.Current.Session?.SessionID,\n    RemoteAddress = HttpContext.Current.Request.UserHostAddress,\n    Properties = new Dictionary<string, string>\n    {\n        // Obtain "customField" and add it to the context properties\n        { "customField", HttpContext.Current.Items["customField"].ToString() }\n    }\n};\n')),(0,r.kt)("h3",{id:"unleashcontextprovider"},"UnleashContextProvider"),(0,r.kt)("p",null,"The provider typically binds the context to the same thread as the request. If you are using Asp.Net the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnleashContextProvider")," will typically be a 'request scoped' instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class AspNetContextProvider : IUnleashContextProvider\n{\n    public UnleashContext Context\n    {\n       get { return HttpContext.Current?.Items["UnleashContext"] as UnleashContext; }\n    }\n}\n\nprotected void Application_BeginRequest(object sender, EventArgs e)\n{\n    HttpContext.Current.Items["UnleashContext"] = new UnleashContext\n    {\n        UserId = HttpContext.Current.User?.Identity?.Name,\n        SessionId = HttpContext.Current.Session?.SessionID,\n        RemoteAddress = HttpContext.Current.Request.UserHostAddress,\n        Properties = new Dictionary<string, string>()\n        {\n            {"UserRoles", "A,B,C"}\n        }\n    };\n}\n\nvar settings = new UnleashSettings()\n{\n    AppName = "dotnet-test",\n    UnleashApi = new Uri("http://unleash.herokuapp.com/api/"),\n    UnleashContextProvider = new AspNetContextProvider(),\n    CustomHttpHeaders = new Dictionary()\n    {\n      {"Authorization", "API token" }\n    }\n};\n')),(0,r.kt)("h2",{id:"custom-http-headers"},"Custom HTTP headers"),(0,r.kt)("p",null,"If you want the client to send custom HTTP Headers with all requests to the Unleash api you can define that by setting them via the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnleashSettings"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var settings = new UnleashSettings()\n{\n    AppName = "dotnet-test",\n    UnleashApi = new Uri("http://unleash.herokuapp.com/api/"),\n    UnleashContextProvider = new AspNetContextProvider(),\n    CustomHttpHeaders = new Dictionary<string, string>()\n    {\n        {"Authorization", "API token" }\n    }\n};\n')),(0,r.kt)("h3",{id:"httpmessagehandlerscustom-httpclient-initialization"},"HttpMessageHandlers/Custom HttpClient initialization"),(0,r.kt)("p",null,"If you need to specify HttpMessageHandlers or to control the instantiation of the HttpClient, you can create a custom\nHttpClientFactory that inherits from DefaultHttpClientFactory, and override the method CreateHttpClientInstance.\nThen configure UnleashSettings to use your custom HttpClientFactory. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'internal class CustomHttpClientFactory : DefaultHttpClientFactory\n{\n    protected override HttpClient CreateHttpClientInstance(Uri unleashApiUri)\n    {\n        var messageHandler = new CustomHttpMessageHandler();\n        var httpClient = new HttpClient(messageHandler)\n        {\n            BaseAddress = apiUri,\n            Timeout = TimeSpan.FromSeconds(5)\n        };\n    }\n}\n\nvar settings = new UnleashSettings\n{\n    AppName = "dotnet-test",\n    //...\n    HttpClientFactory = new CustomHttpClientFactory()\n};\n')),(0,r.kt)("h3",{id:"dynamic-custom-http-headers"},"Dynamic custom HTTP headers"),(0,r.kt)("p",null,"If you need custom http headers that change during the lifetime of the client, a provider can be defined via the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnleashSettings"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Public Class CustomHttpHeaderProvider\n    Implements IUnleashCustomHttpHeaderProvider\n\n    Public Function GetCustomHeaders() As Dictionary(Of String, String) Implements IUnleashCustomHttpHeaderProvider.GetCustomHeaders\n        Dim token = \' Acquire or refresh a token\n        Return New Dictionary(Of String, String) From\n                {{"Authorization", "Bearer " & token}}\n    End Function\nEnd Class\n\n\' ...\n\nDim unleashSettings As New UnleashSettings()\nunleashSettings.AppName = "dotnet-test"\nunleashSettings.InstanceTag = "instance z"\n\' add the custom http header provider to the settings\nunleashSettings.UnleashCustomHttpHeaderProvider = New CustomHttpHeaderProvider()\nunleashSettings.UnleashApi = new Uri("http://unleash.herokuapp.com/api/")\nunleashSettings.UnleashContextProvider = New AspNetContextProvider()\nDim unleash = New DefaultUnleash(unleashSettings)\n                \n')),(0,r.kt)("h2",{id:"logging"},"Logging"),(0,r.kt)("p",null,"By default Unleash-client uses LibLog to integrate with the currently configured logger for your application.\nThe supported loggers are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Serilog"),(0,r.kt)("li",{parentName:"ul"},"NLog"),(0,r.kt)("li",{parentName:"ul"},"Log4Net"),(0,r.kt)("li",{parentName:"ul"},"EntLib"),(0,r.kt)("li",{parentName:"ul"},"Loupe")),(0,r.kt)("h3",{id:"custom-logger-integration"},"Custom logger integration"),(0,r.kt)("p",null,"To plug in your own logger you can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"ILogProvider")," interface, and register it with Unleash:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Unleash.Logging.LogProvider.SetCurrentLogProvider(new CustomLogProvider());\nvar settings = new UnleashSettings()\n//...\n")),(0,r.kt)("p",null," The ",(0,r.kt)("inlineCode",{parentName:"p"},"GetLogger")," method is responsible for returning a delegate to be used for logging, and your logging integration should be placed inside that delegate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing Unleash.Logging;\n\nnamespace Unleash.Demo.CustomLogging\n{\n    public class CustomLogProvider : ILogProvider\n    {\n        public Logger GetLogger(string name)\n        {\n            return (logLevel, messageFunc, exception, formatParameters) =>\n            {\n                // Plug in your logging code here\n\n                return true;\n            };\n        }\n\n        public IDisposable OpenMappedContext(string key, object value, bool destructure = false)\n        {\n            return new EmptyIDisposable();\n        }\n\n        public IDisposable OpenNestedContext(string message)\n        {\n            return new EmptyIDisposable();\n        }\n    }\n\n    public class EmptyIDisposable : IDisposable\n    {\n        public void Dispose()\n        {\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"local-backup"},"Local backup"),(0,r.kt)("p",null,"By default unleash-client fetches the feature toggles from unleash-server every 20s, and stores the result in temporary .json file which is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"System.IO.Path.GetTempPath()")," directory. This means that if the unleash-server becomes unavailable, the unleash-client will still be able to toggle the features based on the values stored in .json file. As a result of this, the second argument of ",(0,r.kt)("inlineCode",{parentName:"p"},"IsEnabled")," will be returned in two cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When .json file does not exists"),(0,r.kt)("li",{parentName:"ul"},"When the named feature toggle does not exist in .json file")),(0,r.kt)("h2",{id:"bootstrapping"},"Bootstrapping"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unleash supports bootstrapping from a JSON string."),(0,r.kt)("li",{parentName:"ul"},"Configure your own custom provider implementing the ",(0,r.kt)("inlineCode",{parentName:"li"},"IToggleBootstrapProvider")," interface's single method ",(0,r.kt)("inlineCode",{parentName:"li"},"ToggleCollection Read()"),".\nThis should return a ",(0,r.kt)("inlineCode",{parentName:"li"},"ToggleCollection"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"UnleashSettings.JsonSerializer")," can be used to deserialize a JSON string in the same format returned from ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/client/features"),"."),(0,r.kt)("li",{parentName:"ul"},"Example bootstrap files can be found in the json files located in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-client-dotnet/blob/main/tests/Unleash.Tests/App_Data"},"tests/Unleash.Tests/App_Data")),(0,r.kt)("li",{parentName:"ul"},"Our assumption is this can be use for applications deployed to ephemeral containers or more locked down file systems where Unleash's need to write the backup file is not desirable or possible."),(0,r.kt)("li",{parentName:"ul"},"Loading with bootstrapping defaults to override feature toggles loaded from Local Backup, this override can be switched off by setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"UnleashSettings.ToggleOverride")," property to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",null,"Configuring with the UnleashSettings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var settings = new UnleashSettings()\n{\n    AppName = "dotnet-test",\n    UnleashApi = new Uri("http://unleash.herokuapp.com/api/"),\n    CustomHttpHeaders = new Dictionary()\n    {\n      {"Authorization","API token" }\n    },\n    ToggleOverride = false, // Defaults to true\n    ToggleBootstrapProvider = new MyToggleBootstrapProvider() // A toggle bootstrap provider implementing IToggleBootstrapProvider here\n};\n')),(0,r.kt)("h3",{id:"provided-bootstrappers"},"Provided Bootstrappers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Two ToggleBootstrapProviders are provided"),(0,r.kt)("li",{parentName:"ul"},"These are found in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Unleash.Utilities"),":")),(0,r.kt)("h4",{id:"togglebootstrapfileprovider"},"ToggleBootstrapFileProvider"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unleash comes with a ",(0,r.kt)("inlineCode",{parentName:"li"},"ToggleBootstrapFileProvider")," which implements the ",(0,r.kt)("inlineCode",{parentName:"li"},"IToggleBootstrapProvider")," interface."),(0,r.kt)("li",{parentName:"ul"},"Configure with ",(0,r.kt)("inlineCode",{parentName:"li"},"UnleashSettings")," helper method:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'settings.UseBootstrapFileProvider("./path/to/file.json");\n')),(0,r.kt)("h4",{id:"togglebootstrapurlprovider"},"ToggleBootstrapUrlProvider"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unleash also comes with a ",(0,r.kt)("inlineCode",{parentName:"p"},"ToggleBootstrapUrlProvider")," which implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"IToggleBootstrapProvider")," interface.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fetches JSON from a webaddress using ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpMethod.Get"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure with ",(0,r.kt)("inlineCode",{parentName:"p"},"UnleashSettings")," helper method:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var shouldThrowOnError = true; // Throws for 500, 404, etc\nvar customHeaders = new Dictionary<string, string>()\n{\n    { "Authorization", "Bearer ABCdefg123" } // Or whichever set of headers would be required to GET this file\n}; // Defaults to null\nsettings.UseBootstrapUrlProvider("://domain.top/path/to/file.json", shouldThrowOnError, customHeaders);\n')),(0,r.kt)("h2",{id:"json-serialization"},"Json Serialization"),(0,r.kt)("p",null,"The unleash client is dependant on a json serialization library. If your application already have Newtonsoft.Json >= 9.0.1 installed, everything should work out of the box. If not, you will get an error message during startup telling you to implement an 'IJsonSerializer' interface, which needs to be added to the configuration."),(0,r.kt)("p",null,"With Newtonsoft.Json version 7.0.0.0, the following implementation can be used. For older versions, consider to upgrade."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var settings = new UnleashSettings()\n{\n    AppName = "dotnet-test",\n    UnleashApi = new Uri("http://unleash.herokuapp.com/api/"),\n    JsonSerializer = new NewtonsoftJson7Serializer()\n};\n\npublic class NewtonsoftJson7Serializer : IJsonSerializer\n{\n    private readonly Encoding utf8 = Encoding.UTF8;\n\n    private static readonly JsonSerializer Serializer = new JsonSerializer()\n    {\n        ContractResolver = new CamelCaseExceptDictionaryKeysResolver()\n    };\n\n    public T Deserialize<T>(Stream stream)\n    {\n        using (var streamReader = new StreamReader(stream, utf8))\n        using (var textReader = new JsonTextReader(streamReader))\n        {\n            return Serializer.Deserialize<T>(textReader);\n        }\n    }\n\n    public void Serialize<T>(Stream stream, T instance)\n    {\n        using (var writer = new StreamWriter(stream, utf8, 1024 * 4, leaveOpen: true))\n        using (var jsonWriter = new JsonTextWriter(writer))\n        {\n            Serializer.Serialize(jsonWriter, instance);\n            \n            jsonWriter.Flush();\n            stream.Position = 0;\n        }\n    }\n\n    class CamelCaseExceptDictionaryKeysResolver : CamelCasePropertyNamesContractResolver\n    {\n        protected override JsonDictionaryContract CreateDictionaryContract(Type objectType)\n        {\n            var contract = base.CreateDictionaryContract(objectType);\n\n            contract.DictionaryKeyResolver = propertyName =>\n            {\n                return propertyName;\n            };\n\n            return contract;\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The server api needs camel cased json, but not for certain dictionary keys. The implementation can be naively validated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonSerializerTester.Assert")," function. (Work in progress)."),(0,r.kt)("h2",{id:"run-unleash-server-with-docker-locally"},"Run unleash server with Docker locally"),(0,r.kt)("p",null,"The Unleash team have made a separate project which runs unleash server inside docker. Please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-docker"},"unleash-docker")," for more details."),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Visual Studio 2017 / Code"),(0,r.kt)("p",null,"Cakebuild"),(0,r.kt)("h3",{id:"other-information"},"Other information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check out our guide for more information on how to build and scale ",(0,r.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/topics/feature-flags/feature-flag-best-practices"},"feature flag")," systems")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This content was generated on ",(0,r.kt)("time",{dateTime:"2023-10-10T16:13:40.327Z"},"10 October 2023 at 16:13:40 Coordinated Universal Time")))}h.isMDXComponent=!0}}]);