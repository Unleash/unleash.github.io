"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[112],{14278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={title:"Ruby SDK"},i=void 0,o={unversionedId:"reference/sdks/ruby",id:"reference/sdks/ruby",title:"Ruby SDK",description:"You will need your API URL and your API token in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. Read more",source:"@site/docs/reference/sdks/ruby.md",sourceDirName:"reference/sdks",slug:"/reference/sdks/ruby",permalink:"/reference/sdks/ruby",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/sdks/ruby.md",tags:[],version:"current",frontMatter:{title:"Ruby SDK"},sidebar:"documentation",previous:{title:"Python SDK",permalink:"/reference/sdks/python"},next:{title:"Rust SDK",permalink:"/reference/sdks/rust"}},u={},s=[{value:"Sample usage",id:"sample-usage",level:3},{value:"Variations",id:"variations",level:3},{value:"Client methods",id:"client-methods",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You will need your ",(0,l.kt)("inlineCode",{parentName:"p"},"API URL")," and your ",(0,l.kt)("inlineCode",{parentName:"p"},"API token")," in order to connect the Client SDK to you Unleash instance. You can find this information in the \u201cAdmin\u201d section Unleash management UI. ",(0,l.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"Read more"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'unleash'\n\n@unleash = Unleash::Client.new(\n  url: '<API url>',\n  app_name: 'simple-test',\n  custom_http_headers: {'Authorization': '<API token>'},\n)\n")),(0,l.kt)("h3",{id:"sample-usage"},"Sample usage"),(0,l.kt)("p",null,"To evaluate a feature toggle, you can use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'if @unleash.is_enabled? "AwesomeFeature", @unleash_context\n  puts "AwesomeFeature is enabled"\nend\n')),(0,l.kt)("p",null,"If the feature is not found in the server, it will by default return false. However you can override that by setting the default return value to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'if @unleash.is_enabled? "AwesomeFeature", @unleash_context, true\n  puts "AwesomeFeature is enabled by default"\nend\n')),(0,l.kt)("p",null,"Alternatively by using ",(0,l.kt)("inlineCode",{parentName:"p"},"if_enabled")," you can send a code block to be executed as a parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'@unleash.if_enabled "AwesomeFeature", @unleash_context, true do\n  puts "AwesomeFeature is enabled by default"\nend\n')),(0,l.kt)("h3",{id:"variations"},"Variations"),(0,l.kt)("p",null,"If no variant is found in the server, use the fallback variant."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'fallback_variant = Unleash::Variant.new(name: \'default\', enabled: true, payload: {"color" => "blue"})\nvariant = @unleash.get_variant "ColorVariants", @unleash_context, fallback_variant\n\nputs "variant color is: #{variant.payload.fetch(\'color\')}"\n')),(0,l.kt)("h2",{id:"client-methods"},"Client methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Return Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is_enabled?")),(0,l.kt)("td",{parentName:"tr",align:null},"Check if feature toggle is to be enabled or not."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enabled?")),(0,l.kt)("td",{parentName:"tr",align:null},"Alias to the ",(0,l.kt)("inlineCode",{parentName:"td"},"is_enabled?")," method. But more ruby idiomatic."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"if_enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Run a code block, if a feature is enabled."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"yield"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get_variant")),(0,l.kt)("td",{parentName:"tr",align:null},"Get variant for a given feature"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Unleash::Variant"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shutdown")),(0,l.kt)("td",{parentName:"tr",align:null},"Save metrics to disk, flush metrics to server, and then kill ToggleFetcher and MetricsReporter threads. A safe shutdown. Not really useful in long running applications, like web applications."),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shutdown!")),(0,l.kt)("td",{parentName:"tr",align:null},"Kill ToggleFetcher and MetricsReporter threads immediately."),(0,l.kt)("td",{parentName:"tr",align:null},"nil")))),(0,l.kt)("p",null,"Read more at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-ruby"},"github.com/Unleash/unleash-client-ruby")))}p.isMDXComponent=!0}}]);