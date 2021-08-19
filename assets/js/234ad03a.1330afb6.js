"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5210],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,g=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1156:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],s={},i=void 0,u={unversionedId:"contributing/developer-guide",id:"contributing/developer-guide",isDocsHomePage:!1,title:"developer-guide",description:"Introduction",source:"@site/docs/contributing/developer-guide.md",sourceDirName:"contributing",slug:"/contributing/developer-guide",permalink:"/contributing/developer-guide",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/contributing/developer-guide.md",version:"current",frontMatter:{}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"PostgreSQL",id:"postgresql",children:[{value:"Create a local unleash databases in postgres",id:"create-a-local-unleash-databases-in-postgres",children:[]}]},{value:"PostgreSQL with docker",id:"postgresql-with-docker",children:[]},{value:"Start the application",id:"start-the-application",children:[]},{value:"Database changes",id:"database-changes",children:[{value:"Making a schema change",id:"making-a-schema-change",children:[]}]},{value:"Publishing / Releasing new packages",id:"publishing--releasing-new-packages",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Before developing on this project you will need two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PostgreSQL 10.x or newer"),(0,o.kt)("li",{parentName:"ul"},"Node.js 14.x or newer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run start:dev\n")),(0,o.kt)("h2",{id:"postgresql"},"PostgreSQL"),(0,o.kt)("p",null,"To run and develop unleash, you need to have PostgreSQL database (PostgreSQL v10.x or newer) locally."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unleash currently also work with PostgreSQL v9.5+, but this might change in a future feature release, and we have stopped running automatic integration tests below PostgreSQL v10.")),(0,o.kt)("h3",{id:"create-a-local-unleash-databases-in-postgres"},"Create a local unleash databases in postgres"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ psql postgres <<SQL\nCREATE USER unleash_user WITH PASSWORD 'passord';\nCREATE DATABASE unleash;\nGRANT ALL PRIVILEGES ON DATABASE unleash to unleash_user;\nCREATE DATABASE unleash_test;\nGRANT ALL PRIVILEGES ON DATABASE unleash_test to unleash_user;\nSQL\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Password is intentionally set to 'passord', which is the Norwegian word for password.")),(0,o.kt)("p",null,"Then set env vars:"),(0,o.kt)("p",null,"(Optional as unleash will assume these as default values)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export DATABASE_URL=postgres://unleash_user:passord@localhost:5432/unleash\nexport TEST_DATABASE_URL=postgres://unleash_user:passord@localhost:5432/unleash_test\n")),(0,o.kt)("h2",{id:"postgresql-with-docker"},"PostgreSQL with docker"),(0,o.kt)("p",null,"If you don't want to install PostgreSQL locally, you can spin up an Docker instance. We have created a script to ease this process: ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/docker-postgres.sh")),(0,o.kt)("h2",{id:"start-the-application"},"Start the application"),(0,o.kt)("p",null,"In order to start the application you will need Node.js v14.x or newer installed locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Install dependencies\nnpm install\n\n// Start server in development\nnpm start:dev\n\n// Unleash UI\nhttp://localhost:4242\n\n// API:\nhttp://localhost:4242/api/\n\n// Execute tests in all packages:\nnpm test\n")),(0,o.kt)("h2",{id:"database-changes"},"Database changes"),(0,o.kt)("p",null,"We use database migrations to track database changes."),(0,o.kt)("h3",{id:"making-a-schema-change"},"Making a schema change"),(0,o.kt)("p",null,"To run migrations, you will set the environment variable for DATABASE_URL"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"export DATABASE_URL=postgres://unleash_user:passord@localhost:5432/unleash")),(0,o.kt)("p",null,"Use db-migrate to create new migrations file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run db-migrate -- create YOUR-MIGRATION-NAME\n")),(0,o.kt)("p",null,"All migrations require one ",(0,o.kt)("inlineCode",{parentName:"p"},"up")," and one ",(0,o.kt)("inlineCode",{parentName:"p"},"down")," method."),(0,o.kt)("p",null,"Example of a typical migration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint camelcase: \"off\" */\n'use strict';\n\nexports.up = function(db, cb) {\n  db.createTable(\n    'examples',\n    {\n      id: { type: 'int', primaryKey: true, notNull: true },\n      created_at: { type: 'timestamp', defaultValue: 'now()' },\n    },\n    cb,\n  );\n};\n\nexports.down = function(db, cb) {\n  return db.dropTable('examples', cb);\n};\n")),(0,o.kt)("p",null,"Test your migrations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run db-migrate -- up\n> npm run db-migrate -- down\n")),(0,o.kt)("h2",{id:"publishing--releasing-new-packages"},"Publishing / Releasing new packages"),(0,o.kt)("p",null,"Please run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run nsp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run test")," checks before publishing."),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run publish")," to start the publishing process."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run publish:dry")))}d.isMDXComponent=!0}}]);