"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[40216],{29073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var s=n(87462),l=(n(67294),n(3905));const a={title:"Email service"},o=void 0,i={unversionedId:"using-unleash/deploy/email-service",id:"using-unleash/deploy/email-service",title:"Email service",description:"New since Unleash v4.0.0 is an email service allowing us to send reset password and welcome mails to new users. In order for this to work you'll need to tell unleash what SMTP service you'd like to send mails from.",source:"@site/docs/using-unleash/deploy/email-service.md",sourceDirName:"using-unleash/deploy",slug:"/using-unleash/deploy/email-service",permalink:"/using-unleash/deploy/email-service",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/using-unleash/deploy/email-service.md",tags:[],version:"current",frontMatter:{title:"Email service"},sidebar:"documentation",previous:{title:"Database Backup",permalink:"/using-unleash/deploy/database-backup"},next:{title:"Google Auth Hook",permalink:"/using-unleash/deploy/google-auth-hook"}},r={},u=[{value:"Configuring",id:"configuring",level:2},{value:"Docker",id:"docker",level:3},{value:"Node",id:"node",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"New since Unleash v4.0.0 is an email service allowing us to send reset password and welcome mails to new users. In order for this to work you'll need to tell unleash what SMTP service you'd like to send mails from."),(0,l.kt)("p",null,"If the service is not configured you'll see a log line every time you add a new user saying"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[2021-05-07T12:59:04.572] [WARN] routes/user-controller.ts - email\nwas not sent to the user because email configuration is lacking\n")),(0,l.kt)("h2",{id:"configuring"},"Configuring"),(0,l.kt)("p",null,"Depending on your deploy case there are different ways of configuring this service. Full documentation of all configuration possibilities is available ",(0,l.kt)("a",{parentName:"p",href:"/using-unleash/deploy/configuring-unleash"},"here")),(0,l.kt)("h3",{id:"docker"},"Docker"),(0,l.kt)("p",null,"With docker, we configure the mail service via environment variables."),(0,l.kt)("p",null,"You'll want to at least include EMAIL_HOST, EMAIL_USER, EMAIL_PASSWORD and EMAIL_SENDER"),(0,l.kt)("p",null,"Environment variables:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EMAIL_HOST - Your SMTP server address"),(0,l.kt)("li",{parentName:"ul"},"EMAIL_PORT - Your SMTP server port - defaults to 567"),(0,l.kt)("li",{parentName:"ul"},"EMAIL_SECURE - whether to use SMTPS - set to ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," - defaults to false,"),(0,l.kt)("li",{parentName:"ul"},"EMAIL_USER - the username to authenticate against your SMTP server"),(0,l.kt)("li",{parentName:"ul"},"EMAIL_PASSWORD - the password for your SMTP user"),(0,l.kt)("li",{parentName:"ul"},"EMAIL_SENDER - which address should reset-password mails and welcome mails be sent from - defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"noreply@unleash-hosted.com")," which is probably not what you want.")),(0,l.kt)("h3",{id:"node"},"Node"),(0,l.kt)("p",null,"With node, we can configure this when calling Unleash's start method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const unleash = require('unleash-server');\n\nunleash.start({\n  email: {\n    host: 'myhost',\n    smtpuser: 'username',\n    smtppass: 'password',\n    sender: 'noreply@mycompany.com',\n  },\n});\n")),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"For troubleshooting tips, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"/using-unleash/troubleshooting/email-service"},"email service troubleshooting guide"),"."))}c.isMDXComponent=!0}}]);