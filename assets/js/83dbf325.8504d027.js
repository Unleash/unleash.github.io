"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[111],{74124:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),r=a(67294),l=a(86010),s=a(63735),o=a(38224),i=a(5730);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==o&&(m(t),i(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},s,{className:(0,l.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":o===t})}),a??t)})))}function m(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,o.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement(c,(0,n.Z)({},e,t)),r.createElement(m,(0,n.Z)({},e,t)))}function h(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},54167:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(74124),s=a(11666);const o={title:"Getting Started"},i=void 0,p={unversionedId:"reference/deploy/getting-started",id:"reference/deploy/getting-started",title:"Getting Started",description:"This section only applies if you plan to self-host Unleash. If you are looking for our hosted solution you should head over to www.getunleash.io",source:"@site/docs/reference/deploy/getting-started.md",sourceDirName:"reference/deploy",slug:"/reference/deploy/getting-started",permalink:"/reference/deploy/getting-started",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/deploy/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"documentation",previous:{title:"Deploy and manage Unleash",permalink:"/reference/deploy"},next:{title:"Configuring Unleash",permalink:"/reference/deploy/configuring-unleash"}},u={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Start Unleash server",id:"start-unleash-server",level:2},{value:"Option 1 - use Docker",id:"option-one---use-docker",level:3},{value:"Option 2 - use Docker-compose",id:"option-two---use-docker-compose",level:3},{value:"Option 3 - from Node.js",id:"option-three---from-nodejs",level:3},{value:"Create an api token for your client",id:"create-an-api-token-for-your-client",level:2},{value:"Test your server and create a sample API call",id:"test-your-server-and-create-a-sample-api-call",level:2},{value:"Version check",id:"version-check",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This section only applies if you plan to self-host Unleash. If you are looking for our hosted solution you should head over to ",(0,r.kt)("a",{parentName:"p",href:"https://www.getunleash.io/plans"},"www.getunleash.io"))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"You will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," (version 14 or later)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/download/"},"PostgreSQL")," (version 10 or later)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./database-setup"},"Create an unleash user and database"),".")),(0,r.kt)("h2",{id:"start-unleash-server"},"Start Unleash server"),(0,r.kt)("p",null,"Whichever option you choose to start Unleash, you must specify a database URI (it can be set in the environment variable DATABASE_URL). If your database server is not set up to support SSL you'll also need to set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_SSL")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Once the server has started, you will see the message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Unleash started on http://localhost:4242\n")),(0,r.kt)("p",null,"To run multiple replicas of Unleash simply point all instances to the same database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unleash v4:")," The first time Unleash starts it will create a default user which you can use to sign-in to you Unleash instance and add more users with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"username: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")),(0,r.kt)("li",{parentName:"ul"},"password: ",(0,r.kt)("inlineCode",{parentName:"li"},"unleash4all"))),(0,r.kt)("h3",{id:"option-one---use-docker"},"Option 1 - use Docker"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Useful links:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/unleashorg/unleash-server/"},"Docker image on dockerhub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/unleash/unleash"},"Unleash Helm Chart on artifacthub"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a network by running ",(0,r.kt)("inlineCode",{parentName:"li"},"docker network create unleash")),(0,r.kt)("li",{parentName:"ol"},"Start a postgres database:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -e POSTGRES_PASSWORD=some_password \\\n  -e POSTGRES_USER=unleash_user -e POSTGRES_DB=unleash \\\n  --network unleash --name postgres postgres\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Start Unleash via docker:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -p 4242:4242 \\\n  -e DATABASE_HOST=postgres -e DATABASE_NAME=unleash \\\n  -e DATABASE_USERNAME=unleash_user -e DATABASE_PASSWORD=some_password \\\n  -e DATABASE_SSL=false \\\n  --network unleash --pull=always unleashorg/unleash-server\n")),(0,r.kt)("h3",{id:"option-two---use-docker-compose"},"Option 2 - use Docker-compose"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-docker"},"Unleash repository"),"."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"docker compose up -d")," in repository root folder.")),(0,r.kt)("h3",{id:"option-three---from-nodejs"},"Option 3 - from Node.js"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new folder/directory on your development computer.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From a terminal/bash shell, install the dependencies:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm init\nnpm install unleash-server --save\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn init\nyarn add unleash-server\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a file called ",(0,r.kt)("em",{parentName:"p"},"server.js"),", paste the following into it and save."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const unleash = require('unleash-server');\n\nunleash\n  .start({\n    db: {\n      ssl: false,\n      host: 'localhost',\n      port: 5432,\n      database: 'unleash',\n      user: 'unleash_user',\n      password: 'password',\n    },\n    server: {\n      port: 4242,\n    },\n  })\n  .then((unleash) => {\n    console.log(\n      `Unleash started on http://localhost:${unleash.app.get('port')}`,\n    );\n  });\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("em",{parentName:"p"},"server.js"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"node server.js\n")))),(0,r.kt)("h2",{id:"create-an-api-token-for-your-client"},"Create an api token for your client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-to/how-to-create-api-tokens"},"API Token creation"))),(0,r.kt)("h2",{id:"test-your-server-and-create-a-sample-api-call"},"Test your server and create a sample API call"),(0,r.kt)("p",null,"Once the Unleash server has started, go to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:4242"},"localhost:4242")," in your browser. If you see an empty list of feature toggles, try creating one with ",(0,r.kt)("a",{parentName:"p",href:"https://curl.se/"},"curl")," from a terminal/bash shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location -H "Authorization: <apitoken from previous step>" \\\n  --request POST \'http://localhost:4242/api/admin/features\' \\\n  --header \'Content-Type: application/json\' --data-raw \'{\\\n  "name": "Feature.A",\\\n  "description": "Dolor sit amet.",\\\n  "type": "release",\\\n  "enabled": false,\\\n  "stale": false,\\\n  "strategies": [\\\n    {\\\n      "name": "default",\\\n      "parameters": {}\\\n    }\\\n  ]\\\n}\'\n')),(0,r.kt)("h2",{id:"version-check"},"Version check"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unleash checks that it uses the latest version by making a call to ",(0,r.kt)("a",{parentName:"li",href:"https://version.unleash.run"},"https://version.unleash.run"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a cloud function storing instance id to our database for statistics."))),(0,r.kt)("li",{parentName:"ul"},"This request includes a unique instance id for your server."),(0,r.kt)("li",{parentName:"ul"},"If you do not wish to check for upgrades define the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"CHECK_VERSION")," to anything else other than ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," before starting, and Unleash won't make any calls",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"export CHECK_VERSION=false"))))))}d.isMDXComponent=!0}}]);