"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[82336],{28638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Next.js",slug:"/reference/sdks/next-js",custom_edit_url:"https://github.com/Unleash/unleash-client-nextjs/edit/main/README.md"},l=void 0,s={unversionedId:"generated/sdks/client-side/next-js",id:"generated/sdks/client-side/next-js",title:"Next.js",description:"This document was generated from the README in the Next.js GitHub repository.",source:"@site/docs/generated/sdks/client-side/next-js.md",sourceDirName:"generated/sdks/client-side",slug:"/reference/sdks/next-js",permalink:"/reference/sdks/next-js",draft:!1,editUrl:"https://github.com/Unleash/unleash-client-nextjs/edit/main/README.md",tags:[],version:"current",frontMatter:{title:"Next.js",slug:"/reference/sdks/next-js",custom_edit_url:"https://github.com/Unleash/unleash-client-nextjs/edit/main/README.md"},sidebar:"documentation",previous:{title:"JavaScript browser",permalink:"/reference/sdks/javascript-browser"},next:{title:"React",permalink:"/reference/sdks/react"}},o={},p=[{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Detailed explanation",id:"detailed-explanation",level:4},{value:"A). \ud83c\udf1f <strong>App directory</strong> (new)",id:"a--app-directory-new",level:2},{value:"B). Middleware",id:"b-middleware",level:2},{value:"C). Client-side only - simple use case and for development purposes (CSR)",id:"c-client-side-only---simple-use-case-and-for-development-purposes-csr",level:2},{value:"D). Static Site Generation, optimized performance (SSG)",id:"d-static-site-generation-optimized-performance-ssg",level:2},{value:"E). Server Side Rendering (SSR)",id:"e-server-side-rendering-ssr",level:2},{value:"F). Bootstrapping / rehydration",id:"f-bootstrapping--rehydration",level:2},{value:"Usage",id:"usage-1",level:2},{value:"Example",id:"example",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Generated content",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This document was generated from the README in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-nextjs"},"Next.js GitHub repository"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To connect to Unleash from a client-side context, you'll need to use the ",(0,i.kt)("a",{parentName:"p",href:"/reference/front-end-api"},"Unleash front-end API")," (",(0,i.kt)("a",{parentName:"p",href:"/how-to/how-to-create-api-tokens"},"how do I create an API token?"),") or the ",(0,i.kt)("a",{parentName:"p",href:"/reference/unleash-proxy"},"Unleash proxy")," (",(0,i.kt)("a",{parentName:"p",href:"/reference/api-tokens-and-client-keys#proxy-client-keys"},"how do I create client keys?"),").")),(0,i.kt)("h1",{id:"unleash-nextjs-sdk"},"Unleash Next.js SDK"),(0,i.kt)("p",null,"This package allows easy integration of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/unleash/unleash"},"Unleash")," feature flags in a ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," application."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install, simply run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @unleash/nextjs\n# or\nyarn add @unleash/nextjs\n# or\npnpm add @unleash/nextjs\n")),(0,i.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,i.kt)("p",null,"This package will attempt to load configuration from\n",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/environment-variables"},"Next.js Environment variables"),"."),(0,i.kt)("p",null,"When using Unleash ",(0,i.kt)("strong",{parentName:"p"},"client-side"),", with ",(0,i.kt)("inlineCode",{parentName:"p"},"<FlagProvider />")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"getFrontendFlags()")," configure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_UNLEASH_FRONTEND_API_URL"),". URL should end with ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/frontend")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"/proxy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_UNLEASH_FRONTEND_API_TOKEN")," ",(0,i.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#front-end-tokens"},"client-side API token"),"\nif you're using the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/reference/front-end-api"},"front-end API"),",\nor a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#proxy-client-keys"},"proxy client key"),"\nif you're using a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/reference/unleash-proxy"},"proxy"))),(0,i.kt)("p",null,"If using ",(0,i.kt)("strong",{parentName:"p"},"server-side")," (SSR, SSG, API), using ",(0,i.kt)("inlineCode",{parentName:"p"},"getDefinitions()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"evaluateFlags()"),", set:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UNLEASH_SERVER_API_URL")," of you instance. URL should end with ",(0,i.kt)("inlineCode",{parentName:"li"},"/api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UNLEASH_SERVER_API_TOKEN")," ",(0,i.kt)("a",{parentName:"li",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#client-tokens"},"server-side API client token"))),(0,i.kt)("h4",{id:"detailed-explanation"},"Detailed explanation"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Prefixable"),(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NEXT_PUBLIC_")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UNLEASH_SERVER_API_URL")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http://localhost:4242/api"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NEXT_PUBLIC_")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UNLEASH_FRONTEND_API_URL")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<(NEXT_PUBLIC_)UNLEASH_SERVER_API_URL>/frontend"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"No")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UNLEASH_SERVER_API_TOKEN")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"default:development.unleash-insecure-api-token"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"No")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UNLEASH_SERVER_INSTANCE_ID")),(0,i.kt)("td",{parentName:"tr",align:null},"undefined")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NEXT_PUBLIC_")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UNLEASH_FRONTEND_API_TOKEN")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"default:development.unleash-insecure-frontend-api-token"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NEXT_PUBLIC_")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UNLEASH_APP_NAME")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nextjs"))))),(0,i.kt)("p",null,"If you plan to use configuration in the browser, add ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_")," prefix.\nIf both are defined and available, private variable takes priority.\nYou can use both to have different values on client-side and server-side."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\ud83d\udca1 ",(0,i.kt)("strong",{parentName:"p"},"Usage with GitLab's feature flags"),": To use this SDK with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/operations/feature_flags.html"},"GitLab Feature Flags"),", use ",(0,i.kt)("inlineCode",{parentName:"p"},"UNLEASH_SERVER_INSTANCE_ID")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"UNLEASH_SERVER_API_TOKEN")," to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/operations/feature_flags.html#get-access-credentials"},"authorize with GitLab's service"),"."),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)("h2",{id:"a--app-directory-new"},"A). \ud83c\udf1f ",(0,i.kt)("strong",{parentName:"h2"},"App directory")," (new)"),(0,i.kt)("p",null,"This package is ready for server-side use with ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/app/building-your-application/routing"},"App Router"),"."),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-nextjs/tree/main/example#app-router"},(0,i.kt)("inlineCode",{parentName:"a"},"./example/README.md#App-router"))," for an implementation example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { cookies } from "next/headers";\nimport { evaluateFlags, flagsClient, getDefinitions } from "@unleash/nextjs";\n\nconst getFlag = async () => {\n  const cookieStore = cookies();\n  const sessionId =\n    cookieStore.get("unleash-session-id")?.value ||\n    `${Math.floor(Math.random() * 1_000_000_000)}`;\n\n  const definitions = await getDefinitions({\n    fetchOptions: {\n      next: { revalidate: 15 }, // Cache layer like Unleash Proxy!\n    },\n  });\n\n  const { toggles } = await evaluateFlags(definitions, {\n    sessionId,\n  });\n  const flags = flagsClient(toggles);\n\n  return flags.isEnabled("nextjs-example");\n};\n\nexport default async function Page() {\n  const isEnabled = await getFlag();\n\n  return (\n    <p>\n      Feature flag is{" "}\n      <strong>\n        <code>{isEnabled ? "ENABLED" : "DISABLED"}</code>\n      </strong>\n      .\n    </p>\n  );\n}\n')),(0,i.kt)("h2",{id:"b-middleware"},"B). Middleware"),(0,i.kt)("p",null,"It's possible to run this SDK in Next.js Edge Middleware. This is a great use case for A/B testing, where you can transparently redirect users to different pages based on a feature flag. Target pages can be statically generated, improving performance."),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-client-nextjs/tree/main/example#middleware"},(0,i.kt)("inlineCode",{parentName:"a"},"./example/README.md#Middleware"))," for an implementation example."),(0,i.kt)("h2",{id:"c-client-side-only---simple-use-case-and-for-development-purposes-csr"},"C). Client-side only - simple use case and for development purposes (CSR)"),(0,i.kt)("p",null,"Fastest way to get started is to connect frontend directly to Unleash.\nYou can find out more about direct ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/front-end-api"},"Front-end API access")," in our documentation,\nincluding a guide on how to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/how-to/how-to-create-api-tokens"},"setup a client-side SDK key"),"."),(0,i.kt)("p",null,"Important: Hooks and provider are only available in ",(0,i.kt)("inlineCode",{parentName:"p"},"@unleash/nextjs/client"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AppProps } from "next/app";\nimport { FlagProvider } from "@unleash/nextjs/client";\n\nexport default function App({ Component, pageProps }: AppProps) {\n  return (\n    <FlagProvider>\n      <Component {...pageProps} />\n    </FlagProvider>\n  );\n}\n')),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"<FlagProvider />")," in place you can now use hooks like: ",(0,i.kt)("inlineCode",{parentName:"p"},"useFlag"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"useVariant"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"useFlagsStatus")," to block rendering until flags are ready."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useFlag } from "@unleash/nextjs/client";\n\nconst YourComponent = () => {\n  const isEnabled = useFlag("nextjs-example");\n\n  return <>{isEnabled ? "ENABLED" : "DISABLED"}</>;\n};\n')),(0,i.kt)("p",null,"Optionally, you can configure ",(0,i.kt)("inlineCode",{parentName:"p"},"FlagProvider")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," prop. It will take priority over environment variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<FlagProvider\n  config={{\n    url: "http://localhost:4242/api/frontend", // replaces NEXT_PUBLIC_UNLEASH_FRONTEND_API_URL\n    clientKey: "<Frontend_API_token>", // replaces NEXT_PUBLIC_UNLEASH_FRONTEND_API_TOKEN\n    appName: "nextjs", // replaces NEXT_PUBLIC_UNLEASH_APP_NAME\n\n    refreshInterval: 15, // additional client configuration\n    // see https://github.com/Unleash/unleash-proxy-client-js#available-options\n  }}\n>\n')),(0,i.kt)("p",null,"If you only plan to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unleash/proxy-client-react"},"Unleash client-side React SDK")," now also works with Next.js. Check documentation there for more examples."),(0,i.kt)("h2",{id:"d-static-site-generation-optimized-performance-ssg"},"D). Static Site Generation, optimized performance (SSG)"),(0,i.kt)("p",null,"With same access as in the client-side example above you can resolve Unleash feature flags when building static pages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  flagsClient,\n  getDefinitions,\n  evaluateFlags,\n  getFrontendFlags,\n  type IVariant,\n} from "@unleash/nextjs";\nimport type { GetStaticProps, NextPage } from "next";\n\ntype Data = {\n  isEnabled: boolean;\n  variant: IVariant;\n};\n\nconst ExamplePage: NextPage<Data> = ({ isEnabled, variant }) => (\n  <>\n    Flag status: {isEnabled ? "ENABLED" : "DISABLED"}\n    <br />\n    Variant: {variant.name}\n  </>\n);\n\nexport const getStaticProps: GetStaticProps<Data> = async (_ctx) => {\n  /* Using server-side SDK: */\n  const definitions = await getDefinitions();\n  const context = {}; // optional, see https://docs.getunleash.io/reference/unleash-context\n  const { toggles } = evaluateFlags(definitions, context);\n\n  /* Or with the proxy/front-end API */\n  // const { toggles } = await getFrontendFlags({ context });\n\n  const flags = flagsClient(toggles);\n\n  return {\n    props: {\n      isEnabled: flags.isEnabled("nextjs-example"),\n      variant: flags.getVariant("nextjs-example"),\n    },\n  };\n};\n\nexport default ExamplePage;\n')),(0,i.kt)("p",null,"The same approach will work for ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"},"ISR (Incremental Static Regeneration)"),"."),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"getDefinitions()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getFrontendFlags()")," can take arguments overriding URL, token and other request parameters."),(0,i.kt)("h2",{id:"e-server-side-rendering-ssr"},"E). Server Side Rendering (SSR)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  flagsClient,\n  evaluateFlags,\n  getDefinitions,\n  type IVariant,\n} from "@unleash/nextjs";\nimport type { GetServerSideProps, NextPage } from "next";\n\ntype Data = {\n  isEnabled: boolean;\n};\n\nconst ExamplePage: NextPage<Data> = ({ isEnabled }) => (\n  <>Flag status: {isEnabled ? "ENABLED" : "DISABLED"}</>\n);\n\nexport const getServerSideProps: GetServerSideProps<Data> = async (ctx) => {\n  const sessionId =\n    ctx.req.cookies["unleash-session-id"] ||\n    `${Math.floor(Math.random() * 1_000_000_000)}`;\n  ctx.res.setHeader("set-cookie", `unleash-session-id=${sessionId}; path=/;`);\n\n  const context = {\n    sessionId, // needed for stickiness\n    // userId: "123" // etc\n  };\n\n  const { toggles } = await getFrontendFlags({ context }); // Use Proxy/Frontend API\n  const flags = flagsClient(toggles);\n\n  return {\n    props: {\n      isEnabled: flags.isEnabled("nextjs-example"),\n    },\n  };\n};\n\nexport default ExamplePage;\n')),(0,i.kt)("h2",{id:"f-bootstrapping--rehydration"},"F). Bootstrapping / rehydration"),(0,i.kt)("p",null,"You can bootstrap Unleash React SDK to have values loaded from the start.\nInitial value can be customized server-side."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import App, { AppContext, type AppProps } from "next/app";\nimport {\n  FlagProvider,\n  getFrontendFlags,\n  type IMutableContext,\n  type IToggle,\n} from "@unleash/nextjs";\n\ntype Data = {\n  toggles: IToggle[];\n  context: IMutableContext;\n};\n\nexport default function CustomApp({\n  Component,\n  pageProps,\n  toggles,\n  context,\n}: AppProps & Data) {\n  return (\n    <FlagProvider\n      config={{\n        bootstrap: toggles,\n        context,\n      }}\n    >\n      <Component {...pageProps} />\n    </FlagProvider>\n  );\n}\n\nCustomApp.getInitialProps = async (ctx: AppContext) => {\n  const context = {\n    userId: "123",\n  };\n\n  const { toggles } = await getFrontendFlags(); // use Unleash Proxy\n\n  return {\n    ...(await App.getInitialProps(ctx)),\n    bootstrap: toggles,\n    context, // pass context along so client can refetch correct values\n  };\n};\n')),(0,i.kt)("h1",{id:"\ufe0f-cli-experimental"},"\u2697\ufe0f CLI (experimental)"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"unleash [action] [options]")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," section, or with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx @unleash/nextjs\n")),(0,i.kt)("p",null,"For the CLI to work, the following ",(0,i.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variables")," must be configured with appropriate values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UNLEASH_SERVER_API_URL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UNLEASH_SERVER_API_TOKEN"))),(0,i.kt)("p",null,"The CLI will attempt to read environment values from any ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," files if they're present. You can also set the variables directly when invoking the interface, as in the ",(0,i.kt)("a",{parentName:"p",href:"#example"},"CLI usage example"),"."),(0,i.kt)("h2",{id:"usage-1"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get-definitions <outputFile.json>")," Download feature flags definitions for bootstrapping (offline use) of server-side SDK."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"generate-types [options] <outputFile.ts>")," Generate types and typed functions from feature flags defined in an Unleash instance.\nIt will also generate strictly typed versions of ",(0,i.kt)("inlineCode",{parentName:"li"},"useFlag"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"useVariant"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"useFlags")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"flagsClient")," (unless ",(0,i.kt)("inlineCode",{parentName:"li"},"--typesOnly")," is used).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-t, --typesOnly")," don't include typed versions of functions exported from ",(0,i.kt)("inlineCode",{parentName:"li"},"@unleash/nextjs")," (default: false)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-b, --bootstrap <sourceFile.json>")," load definitions from a file instead of fetching definitions - work offline"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-V")," Output the version number")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Try it now"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"UNLEASH_SERVER_API_URL=https://app.unleash-hosted.com/demo/api \\\nUNLEASH_SERVER_API_TOKEN=test-server:default.8a090f30679be7254af997864d66b86e44dcfc5291916adff72a0fb5 \\\nnpx @unleash/nextjs generate-types ./unleash.ts\n")),(0,i.kt)("h1",{id:"known-limitation"},"Known limitation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In current interation ",(0,i.kt)("strong",{parentName:"li"},"server-side SDK does not support metrics"),"."),(0,i.kt)("li",{parentName:"ul"},'When used server-side, this SDK does not support the "Hostname" and "IP" strategies. Use custom context fields and constraints instead.')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This content was generated on ",(0,i.kt)("time",{dateTime:"2023-10-24T00:13:49.303Z"},"24 October 2023 at 00:13:49 Coordinated Universal Time")))}u.isMDXComponent=!0}}]);