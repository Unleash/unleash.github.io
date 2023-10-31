"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[44854],{23707:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var s=t(87462),n=(t(67294),t(3905));const l={title:"Database Backup"},u=void 0,o={unversionedId:"using-unleash/deploy/database-backup",id:"using-unleash/deploy/database-backup",title:"Database Backup",description:"When upgrading to a new major version of Unleash, we advise to do a full database backup to ease rollback in case of failures.",source:"@site/docs/using-unleash/deploy/database-backup.md",sourceDirName:"using-unleash/deploy",slug:"/using-unleash/deploy/database-backup",permalink:"/using-unleash/deploy/database-backup",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/using-unleash/deploy/database-backup.md",tags:[],version:"current",frontMatter:{title:"Database Backup"},sidebar:"documentation",previous:{title:"Database Setup",permalink:"/using-unleash/deploy/database-setup"},next:{title:"Email service",permalink:"/using-unleash/deploy/email-service"}},i={},p=[],r={toc:p};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When upgrading to a new major version of Unleash, we advise to do a full database backup to ease rollback in case of failures."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a database backup:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pg_dump --clean -U unleash_user -W -h localhost unleash > unleash-db.dump\n\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Restore from a backup:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"psql -U unleash_user -W -h localhost unleash < unleash-db.dump\n")))}d.isMDXComponent=!0}}]);