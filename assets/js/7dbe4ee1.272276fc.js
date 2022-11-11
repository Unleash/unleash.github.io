"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[1926],{63015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var o=n(87462),s=(n(67294),n(3905));const r={title:"ADR: preferred styles import placement"},i=void 0,l={unversionedId:"contributing/frontend/ADR/preferred-styles-import-placement",id:"contributing/frontend/ADR/preferred-styles-import-placement",title:"ADR: preferred styles import placement",description:"Background",source:"@site/docs/contributing/frontend/ADR/preferred-styles-import-placement.md",sourceDirName:"contributing/frontend/ADR",slug:"/contributing/frontend/ADR/preferred-styles-import-placement",permalink:"/contributing/frontend/ADR/preferred-styles-import-placement",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/contributing/frontend/ADR/preferred-styles-import-placement.md",tags:[],version:"current",frontMatter:{title:"ADR: preferred styles import placement"}},p={},a=[{value:"Background",id:"background",level:2},{value:"Decision",id:"decision",level:2}],m={toc:a};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"background"},"Background"),(0,s.kt)("p",null,"SUPERSEDED BY ",(0,s.kt)("a",{parentName:"p",href:"/contributing/frontend/ADR/preferred-styling-method"},"ADR: Preferred styling method")),(0,s.kt)("p",null,"In the codebase, we have found a need to standardise where to locate the styles import. When using CSS modules, the styles import placement matters for the priority of the styles if you are passing through styles to other components. IE:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"// import order matters, because the useStyles in MyComponent now\n// is after the useStyles import it will not take precedence if it has\n// a styling conflict.\nimport useStyles from './SecondComponent.styles.ts';\nimport MyComponent from '../MyComponent/MyComponent.tsx';\n\nconst SecondComponent = () => {\n    const styles = useStyles();\n\n    return <MyComponent className={styles.overrideStyles} />\n}\n")),(0,s.kt)("h2",{id:"decision"},"Decision"),(0,s.kt)("p",null,"We have decided to always place style imports as the last import in the file, so that any components that the file may use can safely be overriden with styles from the parent component."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"// Do:\nimport MyComponent from '../MyComponent/MyComponent.tsx';\n\nimport useStyles from './SecondComponent.styles.ts';\n\nconst SecondComponent = () => {\n    const styles = useStyles();\n\n    return <MyComponent className={styles.overrideStyles} />;\n};\n\n// Don't:\nimport useStyles from './SecondComponent.styles.ts';\nimport MyComponent from '../MyComponent/MyComponent.tsx';\n\nconst SecondComponent = () => {\n    const styles = useStyles();\n\n    return <MyComponent className={styles.overrideStyles} />;\n};\n")),(0,s.kt)("p",null,"The reason for this decision is to remove the posibillity for hard to find bugs, that are not obvious to detect and that might be time consuming to find a solution to."))}c.isMDXComponent=!0}}]);