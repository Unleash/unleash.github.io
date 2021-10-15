"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[8549],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5129:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=t(3117),o=t(102),r=(t(7294),t(3905)),l=["components"],i={id:"google_auth_v3",title:"Google Auth Hook"},p=void 0,s={unversionedId:"deploy/google_auth_v3",id:"deploy/google_auth_v3",isDocsHomePage:!1,title:"Google Auth Hook",description:"You can also find the complete source code for this guide in the unleash-examples project.",source:"@site/docs/deploy/google-auth-hook-v3.md",sourceDirName:"deploy",slug:"/deploy/google_auth_v3",permalink:"/deploy/google_auth_v3",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/deploy/google-auth-hook-v3.md",tags:[],version:"current",frontMatter:{id:"google_auth_v3",title:"Google Auth Hook"}},c=[{value:"Creating a web application client ID",id:"creating-a-web-application-client-id",children:[],level:3},{value:"Add dependencies",id:"add-dependencies",children:[],level:3},{value:"Configure the Google strategy for use by Passport.js",id:"configure-the-google-strategy-for-use-by-passportjs",children:[],level:3},{value:"In <code>googleAdminAuth</code> function",id:"in-googleadminauth-function",children:[],level:3},{value:"The complete code",id:"the-complete-code",children:[],level:3}],u={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also find the complete ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unleash/unleash-examples/tree/main/v3/securing-google-auth"},"source code for this guide")," in the unleash-examples project.")),(0,r.kt)("p",null,"This part of the tutorial shows how to create a sign-in flow for users and integrate with Unleash server project. The implementation assumes that I am working in ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"4242")," port."),(0,r.kt)("p",null,"This is a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," server file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const unleash = require('unleash-server');\n\nunleash.start(options).then((unleash) => {\n  console.log(`Unleash started on http://localhost:${unleash.app.get('port')}`);\n});\n")),(0,r.kt)("h3",{id:"creating-a-web-application-client-id"},"Creating a web application client ID"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the credentials section in the ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials?_ga=2.77615956.-1991581217.1542834301"},"Google Cloud Platform Console"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"OAuth consent screen"),". Type a product name. Fill in any relevant optional fields. Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create credentials > OAuth client ID"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Application type"),", select ",(0,r.kt)("strong",{parentName:"p"},"Web Application"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the ",(0,r.kt)("strong",{parentName:"p"},"Name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Authorized redirect URIs")," enter the following URLs, one at a time."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://localhost:4242/api/auth/callback\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("strong",{parentName:"p"},"CLIENT ID")," and ",(0,r.kt)("strong",{parentName:"p"},"CLIENT SECRET")," and save them for later use."))),(0,r.kt)("h3",{id:"add-dependencies"},"Add dependencies"),(0,r.kt)("p",null,"Add two dependencies ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@passport-next/passport"},(0,r.kt)("inlineCode",{parentName:"a"},"@passport-next/passport"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@passport-next/passport-google-oauth2"},(0,r.kt)("inlineCode",{parentName:"a"},"@passport-next/passport-google-oauth2"))," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const unleash = require('unleash-server');\nconst passport = require('@passport-next/passport');\nconst GoogleOAuth2Strategy =\n  require('@passport-next/passport-google-oauth2').Strategy;\n")),(0,r.kt)("h3",{id:"configure-the-google-strategy-for-use-by-passportjs"},"Configure the Google strategy for use by Passport.js"),(0,r.kt)("p",null,"OAuth 2-based strategies require a ",(0,r.kt)("inlineCode",{parentName:"p"},"verify")," function which receives the credential (",(0,r.kt)("inlineCode",{parentName:"p"},"accessToken"),") for accessing the Google API on the user's behalf, along with the user's profile. The function must invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"cb")," with a user object, which will be set at ",(0,r.kt)("inlineCode",{parentName:"p"},"req.user")," in route handlers after authentication."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const GOOGLE_CLIENT_ID = '...';\nconst GOOGLE_CLIENT_SECRET = '...';\nconst GOOGLE_CALLBACK_URL = 'http://localhost:4242/api/auth/callback';\n\npassport.use(\n  new GoogleOAuth2Strategy(\n    {\n      clientID: GOOGLE_CLIENT_ID,\n      clientSecret: GOOGLE_CLIENT_SECRET,\n      callbackURL: GOOGLE_CALLBACK_URL,\n    },\n    function (accessToken, refreshToken, profile, cb) {\n      // Extract the minimal profile information we need from the profile object\n      // and connect with Unleash to get name and email.\n      cb(\n        null,\n        new unleash.User({\n          name: profile.displayName,\n          email: profile.emails[0].value,\n        }),\n      );\n    },\n  ),\n);\n")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"googleAdminAuth()")," function and other options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function googleAdminAuth(app) {}\n\nlet options = {\n  adminAuthentication: 'custom',\n  preRouterHook: googleAdminAuth,\n};\n\nunleash.start(options).then((instance) => {\n  console.log(\n    `Unleash started on http://localhost:${instance.app.get('port')}`,\n  );\n});\n")),(0,r.kt)("h3",{id:"in-googleadminauth-function"},"In ",(0,r.kt)("inlineCode",{parentName:"h3"},"googleAdminAuth")," function"),(0,r.kt)("p",null,"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"passport")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function googleAdminAuth(app) {\n  app.use(passport.initialize());\n  app.use(passport.session());\n  passport.serializeUser((user, done) => done(null, user));\n  passport.deserializeUser((user, done) => done(null, user));\n  // ...\n}\n")),(0,r.kt)("p",null,"Implement a preRouter hook for ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/admin/login"),". It's necessary for login with Google."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function googleAdminAuth(app) {\n  // ...\n  app.get(\n    '/api/admin/login',\n    passport.authenticate('google', { scope: ['email'] }),\n  );\n  // ...\n}\n")),(0,r.kt)("p",null,"Implement a preRouter hook for ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/auth/callback"),". It's a callback when the login is executed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function googleAdminAuth(app) {\n  // ...\n  app.get(\n    '/api/auth/callback',\n    passport.authenticate('google', {\n      failureRedirect: '/api/admin/error-login',\n    }),\n    (req, res) => {\n      // Successful authentication, redirect to your app.\n      res.redirect('/');\n    },\n  );\n  // ...\n}\n")),(0,r.kt)("p",null,"Implement a preRouter hook for ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/admin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function googleAdminAuth(app) {\n  // ...\n  app.use('/api/admin/', (req, res, next) => {\n    if (req.user) {\n      next();\n    } else {\n      // Instruct unleash-frontend to pop-up auth dialog\n      return res\n        .status('401')\n        .json(\n          new unleash.AuthenticationRequired({\n            path: '/api/admin/login',\n            type: 'custom',\n            message: `You have to identify yourself in order to use Unleash. Click the button and follow the instructions.`,\n          }),\n        )\n        .end();\n    }\n  });\n  // ...\n}\n")),(0,r.kt)("h3",{id:"the-complete-code"},"The complete code"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," server file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nconst unleash = require('unleash-server');\nconst passport = require('@passport-next/passport');\nconst GoogleOAuth2Strategy = require('@passport-next/passport-google-oauth2');\n\nconst GOOGLE_CLIENT_ID = '...';\nconst GOOGLE_CLIENT_SECRET = '...';\nconst GOOGLE_CALLBACK_URL = 'http://localhost:4242/api/auth/callback';\n\npassport.use(\n  new GoogleOAuth2Strategy(\n    {\n      clientID: GOOGLE_CLIENT_ID,\n      clientSecret: GOOGLE_CLIENT_SECRET,\n      callbackURL: GOOGLE_CALLBACK_URL,\n    },\n    (accessToken, refreshToken, profile, cb) => {\n      cb(\n        null,\n        new unleash.User({\n          name: profile.displayName,\n          email: profile.emails[0].value,\n        }),\n      );\n    },\n  ),\n);\n\nfunction googleAdminAuth(app) {\n  app.use(passport.initialize());\n  app.use(passport.session());\n  passport.serializeUser((user, done) => done(null, user));\n  passport.deserializeUser((user, done) => done(null, user));\n\n  app.get(\n    '/api/admin/login',\n    passport.authenticate('google', { scope: ['email'] }),\n  );\n  app.get(\n    '/api/auth/callback',\n    passport.authenticate('google', {\n      failureRedirect: '/api/admin/error-login',\n    }),\n    (req, res) => {\n      res.redirect('/');\n    },\n  );\n\n  app.use('/api/admin/', (req, res, next) => {\n    if (req.user) {\n      next();\n    } else {\n      return res\n        .status('401')\n        .json(\n          new unleash.AuthenticationRequired({\n            path: '/api/admin/login',\n            type: 'custom',\n            message: `You have to identify yourself in order to use Unleash. Click the button and follow the instructions.`,\n          }),\n        )\n        .end();\n    }\n  });\n}\n\nconst options = {\n  adminAuthentication: 'custom',\n  preRouterHook: googleAdminAuth,\n};\n\nunleash.start(options).then((instance) => {\n  console.log(\n    `Unleash started on http://localhost:${instance.app.get('port')}`,\n  );\n});\n")))}d.isMDXComponent=!0}}]);