"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[2439],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(t),g=a,d=h["".concat(l,".").concat(g)]||h[g]||u[g]||r;return t?o.createElement(d,s(s({ref:n},c),{},{components:t})):o.createElement(d,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8001:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),s=["components"],i={id:"google_auth",title:"Google Auth Hook"},l=void 0,p={unversionedId:"deploy/google_auth",id:"deploy/google_auth",title:"Google Auth Hook",description:"You can also find the complete source code for this guide in the unleash-examples project.",source:"@site/docs/deploy/google-auth-hook.md",sourceDirName:"deploy",slug:"/deploy/google_auth",permalink:"/deploy/google_auth",editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/deploy/google-auth-hook.md",tags:[],version:"current",frontMatter:{id:"google_auth",title:"Google Auth Hook"},sidebar:"Deploy and manage",previous:{title:"Email service",permalink:"/deploy/email"},next:{title:"Database Setup",permalink:"/deploy/database-setup"}},c=[{value:"Creating a web application client ID",id:"creating-a-web-application-client-id",children:[],level:3},{value:"Add dependencies",id:"add-dependencies",children:[],level:3},{value:"In <code>googleAdminAuth</code> function: Configure the Google strategy for use by Passport.js",id:"in-googleadminauth-function-configure-the-google-strategy-for-use-by-passportjs",children:[],level:3},{value:"In <code>googleAdminAuth</code> function",id:"in-googleadminauth-function",children:[],level:3},{value:"The complete code",id:"the-complete-code",children:[],level:3}],u={toc:c};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also find the complete ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-examples/tree/main/v4/securing-google-auth"},"source code for this guide")," in the unleash-examples project.")),(0,r.kt)("p",null,"This part of the tutorial shows how to create a sign-in flow for users and integrate with Unleash server project. The implementation assumes that I am working in ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"4242")," port."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you are still using Unleash v3 you need to follow the ",(0,r.kt)("a",{parentName:"strong",href:"/deploy/google_auth_v3"},"google-auth-hook-v3"))),(0,r.kt)("p",null,"This is a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," server file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const unleash = require('unleash-server');\n\nunleash.start(options).then((unleash) => {\n  console.log(`Unleash started on http://localhost:${unleash.app.get('port')}`);\n});\n")),(0,r.kt)("h3",{id:"creating-a-web-application-client-id"},"Creating a web application client ID"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the credentials section in the ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials?_ga=2.77615956.-1991581217.1542834301"},"Google Cloud Platform Console"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"OAuth consent screen"),". Type a product name. Fill in any relevant optional fields. Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create credentials > OAuth client ID"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Application type"),", select ",(0,r.kt)("strong",{parentName:"p"},"Web Application"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the ",(0,r.kt)("strong",{parentName:"p"},"Name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Authorized redirect URIs")," enter the following URLs, one at a time."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://localhost:4242/api/auth/callback\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("strong",{parentName:"p"},"CLIENT ID")," and ",(0,r.kt)("strong",{parentName:"p"},"CLIENT SECRET")," and save them for later use."))),(0,r.kt)("h3",{id:"add-dependencies"},"Add dependencies"),(0,r.kt)("p",null,"Add two dependencies ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@passport-next/passport"},(0,r.kt)("inlineCode",{parentName:"a"},"@passport-next/passport"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@passport-next/passport-google-oauth2"},(0,r.kt)("inlineCode",{parentName:"a"},"@passport-next/passport-google-oauth2"))," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const unleash = require('unleash-server');\nconst passport = require('@passport-next/passport');\nconst GoogleOAuth2Strategy =\n  require('@passport-next/passport-google-oauth2').Strategy;\n")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"googleAdminAuth()")," function and other options. Make sure to also accept the services argument to get access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"userService"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function googleAdminAuth(app, config, services) {\n  const { baseUriPath } = config.server;\n  const { userService } = services;\n}\n\nlet options = {\n  authentication: {\n    type: 'custom',\n    customAuthHandler: googleAdminAuth,\n  },\n};\n\nunleash.start(options).then((instance) => {\n  console.log(\n    `Unleash started on http://localhost:${instance.app.get('port')}`,\n  );\n});\n")),(0,r.kt)("h3",{id:"in-googleadminauth-function-configure-the-google-strategy-for-use-by-passportjs"},"In ",(0,r.kt)("inlineCode",{parentName:"h3"},"googleAdminAuth")," function: Configure the Google strategy for use by Passport.js"),(0,r.kt)("p",null,"OAuth 2-based strategies require a ",(0,r.kt)("inlineCode",{parentName:"p"},"verify")," function which receives the credential (",(0,r.kt)("inlineCode",{parentName:"p"},"accessToken"),") for accessing the Google API on the user's behalf, along with the user's profile. The function must invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"cb")," with a user object, which will be set at ",(0,r.kt)("inlineCode",{parentName:"p"},"req.user")," in route handlers after authentication."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const GOOGLE_CLIENT_ID = '...';\nconst GOOGLE_CLIENT_SECRET = '...';\nconst GOOGLE_CALLBACK_URL = 'http://localhost:4242/api/auth/callback';\n\nfunction googleAdminAuth(app, config, services) {\n  const { baseUriPath } = config.server;\n  const { userService } = services;\n\n  passport.use(\n    new GoogleOAuth2Strategy(\n      {\n        clientID: GOOGLE_CLIENT_ID,\n        clientSecret: GOOGLE_CLIENT_SECRET,\n        callbackURL: GOOGLE_CALLBACK_URL,\n      },\n      async function (accessToken, refreshToken, profile, cb) {\n        // Extract the minimal profile information we need from the profile object\n        // and connect with Unleash\n        const email = profile.emails[0].value;\n        const user = await userService.loginUserWithoutPassword(email, true);\n        cb(null, user);\n      },\n    ),\n  );\n}\n")),(0,r.kt)("h3",{id:"in-googleadminauth-function"},"In ",(0,r.kt)("inlineCode",{parentName:"h3"},"googleAdminAuth")," function"),(0,r.kt)("p",null,"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"passport")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function googleAdminAuth(app, config, services) {\n  // ...\n  app.use(passport.initialize());\n  app.use(passport.session());\n  passport.serializeUser((user, done) => done(null, user));\n  passport.deserializeUser((user, done) => done(null, user));\n  // ...\n}\n")),(0,r.kt)("p",null,"Implement a preRouter hook for ",(0,r.kt)("inlineCode",{parentName:"p"},"/auth/google/login"),". It's necessary for login with Google."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function googleAdminAuth(app, config, services) {\n  // ...\n  app.get(\n    '/auth/google/login',\n    passport.authenticate('google', { scope: ['email'] }),\n  );\n  // ...\n}\n")),(0,r.kt)("p",null,"Implement a preRouter hook for ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/auth/callback"),". It's a callback when the login is executed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function googleAdminAuth(app, config, services) {\n  // ...\n  app.get(\n    '/api/auth/callback',\n    passport.authenticate('google', {\n      failureRedirect: '/api/admin/error-login',\n    }),\n    (req, res) => {\n      // Successful authentication, redirect to your app.\n      res.redirect('/');\n    },\n  );\n  // ...\n}\n")),(0,r.kt)("p",null,"Implement a preRouter hook for ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/admin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function googleAdminAuth(app, config, services) {\n  // ...\n  app.use('/api/admin/', (req, res, next) => {\n    if (req.user) {\n      next();\n    } else {\n      // Instruct unleash-frontend to pop-up auth dialog\n      return res\n        .status('401')\n        .json(\n          new unleash.AuthenticationRequired({\n            path: '/auth/google/login',\n            type: 'custom',\n            message: `You have to identify yourself in order to use Unleash. Click the button and follow the instructions.`,\n          }),\n        )\n        .end();\n    }\n  });\n  // ...\n}\n")),(0,r.kt)("h3",{id:"the-complete-code"},"The complete code"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also find the complete ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-examples/tree/main/v4/securing-google-auth"},"source code for this guide")," in the unleash-examples project.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," server file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nconst unleash = require('unleash-server');\nconst passport = require('@passport-next/passport');\nconst GoogleOAuth2Strategy = require('@passport-next/passport-google-oauth2');\n\nconst GOOGLE_CLIENT_ID = '...';\nconst GOOGLE_CLIENT_SECRET = '...';\nconst GOOGLE_CALLBACK_URL = 'http://localhost:4242/api/auth/callback';\n\nfunction googleAdminAuth(app, config, services) {\n  const { baseUriPath } = config.server;\n  const { userService } = services;\n\n  passport.use(\n    new GoogleOAuth2Strategy(\n      {\n        clientID: GOOGLE_CLIENT_ID,\n        clientSecret: GOOGLE_CLIENT_SECRET,\n        callbackURL: GOOGLE_CALLBACK_URL,\n      },\n      async (accessToken, refreshToken, profile, cb) => {\n        const email = profile.emails[0].value;\n        const user = await userService.loginUserWithoutPassword(email, true);\n        cb(null, user);\n      },\n    ),\n  );\n\n  app.use(passport.initialize());\n  app.use(passport.session());\n  passport.serializeUser((user, done) => done(null, user));\n  passport.deserializeUser((user, done) => done(null, user));\n\n  app.get(\n    '/auth/google/login',\n    passport.authenticate('google', { scope: ['email'] }),\n  );\n  app.get(\n    '/api/auth/callback',\n    passport.authenticate('google', {\n      failureRedirect: '/api/admin/error-login',\n    }),\n    (req, res) => {\n      res.redirect('/');\n    },\n  );\n\n  app.use('/api/admin/', (req, res, next) => {\n    if (req.user) {\n      next();\n    } else {\n      return res\n        .status('401')\n        .json(\n          new unleash.AuthenticationRequired({\n            path: '/auth/google/login',\n            type: 'custom',\n            message: `You have to identify yourself in order to use Unleash. Click the button and follow the instructions.`,\n          }),\n        )\n        .end();\n    }\n  });\n}\n\nconst options = {\n  authentication: {\n    type: 'custom',\n    customAuthHandler: googleAdminAuth,\n  },\n};\n\nunleash.start(options);\n")))}h.isMDXComponent=!0}}]);