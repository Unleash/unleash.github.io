"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5210],{7241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),s=(n(67294),n(3905));const l={},r=void 0,o={unversionedId:"contributing/developer-guide",id:"contributing/developer-guide",title:"developer-guide",description:"Introduction",source:"@site/docs/contributing/developer-guide.md",sourceDirName:"contributing",slug:"/contributing/developer-guide",permalink:"/contributing/developer-guide",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/contributing/developer-guide.md",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"Introduction",id:"introduction",level:2},{value:"PostgreSQL",id:"postgresql",level:2},{value:"Create a local unleash databases in postgres",id:"create-a-local-unleash-databases-in-postgres",level:3},{value:"PostgreSQL with docker",id:"postgresql-with-docker",level:2},{value:"Start the application",id:"start-the-application",level:2},{value:"Database changes",id:"database-changes",level:2},{value:"Making a schema change",id:"making-a-schema-change",level:3},{value:"Publishing / Releasing new packages",id:"publishing--releasing-new-packages",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"Before developing on this project you will need two things:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"PostgreSQL 10.x or newer"),(0,s.kt)("li",{parentName:"ul"},"Node.js 14.x or newer")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"yarn install\nyarn run start:dev\n")),(0,s.kt)("h2",{id:"postgresql"},"PostgreSQL"),(0,s.kt)("p",null,"To run and develop unleash, you need to have PostgreSQL database (PostgreSQL v10.x or newer) locally."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Unleash currently also work with PostgreSQL v9.5+, but this might change in a future feature release, and we have stopped running automatic integration tests below PostgreSQL v10.")),(0,s.kt)("h3",{id:"create-a-local-unleash-databases-in-postgres"},"Create a local unleash databases in postgres"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ psql postgres <<SQL\nCREATE USER unleash_user WITH PASSWORD 'passord';\nCREATE DATABASE unleash;\nGRANT ALL PRIVILEGES ON DATABASE unleash to unleash_user;\nCREATE DATABASE unleash_test;\nGRANT ALL PRIVILEGES ON DATABASE unleash_test to unleash_user;\nSQL\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Password is intentionally set to 'passord', which is the Norwegian word for password.")),(0,s.kt)("p",null,"Then set env vars:"),(0,s.kt)("p",null,"(Optional as unleash will assume these as default values)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"export DATABASE_URL=postgres://unleash_user:passord@localhost:5432/unleash\nexport TEST_DATABASE_URL=postgres://unleash_user:passord@localhost:5432/unleash_test\n")),(0,s.kt)("h2",{id:"postgresql-with-docker"},"PostgreSQL with docker"),(0,s.kt)("p",null,"If you don't want to install PostgreSQL locally, you can spin up an Docker instance. We have created a script to ease this process: ",(0,s.kt)("inlineCode",{parentName:"p"},"scripts/docker-postgres.sh")),(0,s.kt)("h2",{id:"start-the-application"},"Start the application"),(0,s.kt)("p",null,"In order to start the application you will need Node.js v14.x or newer installed locally."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"// Install dependencies\nyarn install\n\n// Start server in development\nyarn start:dev\n\n// Unleash UI\nhttp://localhost:4242\n\n// API:\nhttp://localhost:4242/api/\n\n// Execute tests in all packages:\nyarn test\n")),(0,s.kt)("h2",{id:"database-changes"},"Database changes"),(0,s.kt)("p",null,"We use database migrations to track database changes."),(0,s.kt)("h3",{id:"making-a-schema-change"},"Making a schema change"),(0,s.kt)("p",null,"To run migrations, you will set the environment variable for DATABASE_URL"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"export DATABASE_URL=postgres://unleash_user:passord@localhost:5432/unleash")),(0,s.kt)("p",null,"Use db-migrate to create new migrations file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> yarn run db-migrate create YOUR-MIGRATION-NAME\n")),(0,s.kt)("p",null,"All migrations require one ",(0,s.kt)("inlineCode",{parentName:"p"},"up")," and one ",(0,s.kt)("inlineCode",{parentName:"p"},"down")," method."),(0,s.kt)("p",null,"Example of a typical migration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint camelcase: \"off\" */\n'use strict';\n\nexports.up = function(db, cb) {\n  db.createTable(\n    'examples',\n    {\n      id: { type: 'int', primaryKey: true, notNull: true },\n      created_at: { type: 'timestamp', defaultValue: 'now()' },\n    },\n    cb,\n  );\n};\n\nexports.down = function(db, cb) {\n  return db.dropTable('examples', cb);\n};\n")),(0,s.kt)("p",null,"Test your migrations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> yarn run db-migrate up\n> yarn run db-migrate down\n")),(0,s.kt)("h2",{id:"publishing--releasing-new-packages"},"Publishing / Releasing new packages"),(0,s.kt)("p",null,"Please run ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn test")," checks before publishing."),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run publish")," to start the publishing process."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"npm run publish:dry")))}d.isMDXComponent=!0}}]);