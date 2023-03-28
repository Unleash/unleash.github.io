"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[7177],{74124:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(87462),r=a(67294),l=a(86010),i=a(63735),o=a(38224),p=a(5730);const s="tabList__CuJ",m="tabItem_LNqP";function d(e){let{className:t,block:a,selectedValue:o,selectValue:p,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=s[a].value;n!==o&&(u(t),p(n))},k=e=>{var t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:k,onClick:c},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":o===t})}),a??t)})))}function u(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function c(e){const t=(0,o.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement(d,(0,n.Z)({},e,t)),r.createElement(u,(0,n.Z)({},e,t)))}function k(e){const t=(0,p.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},48685:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(74124),l=a(11666),i=a(32526);const o=e=>{let{verb:t,payload:a,url:o,title:p,endpointType:s="Unleash server API"}=e;const m=(null==t?void 0:t.toUpperCase())||"",d=JSON.stringify(a,null,2),[u,c]="Unleash server API"===s?["unleash-url","API-token"]:["proxy-url","proxy-client-key"],k=(a?`\n${m} <${u}>/${o}\nAuthorization: <${c}>\ncontent-type: application/json\n\n${d}`:`\n${m} <${u}>/${o}\nAuthorization: <${c}>\ncontent-type: application/json`).trim(),g=(a?`\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <${c}>" \\\n     -X ${m} \\\n     -d '${d}' \\\n     <${u}>/${o}`:`\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <${c}>" \\\n     -X ${m} \\\n     <${u}>/${o}`).trim(),h=(a?`echo '${d}' \\\n| http ${m} \\\n  <${u}>/${o} \\\n  Authorization:<${c}>`:`\nhttp ${m} \\\n  <${u}>/${o} \\\n  Authorization:<${c}> \\\n  ${"POST"!==m||d?"":"--json"}`.trim()).trim();return n.createElement(r.Z,{groupId:"api-request"},n.createElement(l.Z,{value:"http",label:"HTTP"},n.createElement(i.Z,{language:"http",title:p},k)),n.createElement(l.Z,{value:"curl",label:"cURL"},n.createElement(i.Z,{language:"bash",title:p},g)),n.createElement(l.Z,{value:"httpie",label:"HTTPie"},n.createElement(i.Z,{language:"bash",title:p},h)))}},57657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(48685);const i={title:"Import & Export"},o=void 0,p={unversionedId:"reference/deploy/import-export",id:"reference/deploy/import-export",title:"Import & Export",description:"The import and export API first appeared in Unleash 3.3.0.",source:"@site/docs/reference/deploy/import-export.md",sourceDirName:"reference/deploy",slug:"/reference/deploy/import-export",permalink:"/reference/deploy/import-export",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/reference/deploy/import-export.md",tags:[],version:"current",frontMatter:{title:"Import & Export"},sidebar:"documentation",previous:{title:"Google Auth Hook",permalink:"/reference/deploy/google-auth-hook"},next:{title:"Migration Guide",permalink:"/reference/deploy/migration-guide"}},s={},m=[{value:"Runtime import &amp; export",id:"runtime-import--export",level:2},{value:"State Service",id:"state-service",level:3},{value:"API Export",id:"api-export",level:3},{value:"API Import",id:"api-import",level:3},{value:"Startup import",id:"startup-import",level:2},{value:"Importing files",id:"importing-files",level:3},{value:"Drop before import",id:"drop-before-import",level:3}],d={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Availability",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The import and export API first appeared in Unleash 3.3.0.")),(0,r.kt)("p",null,"Unleash supports import and export of feature toggles and strategies at startup and during runtime. The main purpose of the import/export feature is to bootstrap new Unleash instances with feature toggles and their configuration. If you are looking for a granular way to keep seperate Unleash instances in sync we strongly recommend that you take a look at the Unleahs Admin API's."),(0,r.kt)("p",null,"The import mechanism guarantees that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all imported features will be non-archived"),(0,r.kt)("li",{parentName:"ul"},"existing updates to strategies and features are included in the event history")),(0,r.kt)("p",null,"All import mechanisms support a ",(0,r.kt)("inlineCode",{parentName:"p"},"drop")," parameter which will clean the database before import (all strategies and features will be removed)."),(0,r.kt)("admonition",{title:"Dropping in production",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be careful when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"drop")," parameter in production environments: cleaning the database could lead to unintended loss of data.")),(0,r.kt)("h2",{id:"runtime-import--export"},"Runtime import & export"),(0,r.kt)("h3",{id:"state-service"},"State Service"),(0,r.kt)("p",null,"Unleash returns a StateService when started, you can use this to import and export data at any time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const unleash = require('unleash-server');\n\nconst { services } = await unleash.start({...});\nconst { stateService } = services;\n\nconst exportedData = await stateService.export({includeStrategies: false, includeFeatureToggles: true, includeTags: true, includeProjects: true});\n\nawait stateService.import({data: exportedData, userName: 'import', dropBeforeImport: false});\n\nawait stateService.importFile({file: 'exported-data.yml', userName: 'import', dropBeforeImport: true})\n")),(0,r.kt)("p",null,"If you want the database to be cleaned before import (all strategies and features will be removed), set the ",(0,r.kt)("inlineCode",{parentName:"p"},"dropBeforeImport")," parameter."),(0,r.kt)("p",null,"It is also possible to not override existing feature toggles (and strategies) by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"keepExisting")," parameter."),(0,r.kt)("h3",{id:"api-export"},"API Export"),(0,r.kt)("p",null,"The api endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/admin/state/export")," will export feature-toggles and strategies as json by default.\nYou can customize the export with query parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json")),(0,r.kt)("td",{parentName:"tr",align:null},"Export format, either ",(0,r.kt)("inlineCode",{parentName:"td"},"json")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"yaml"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"download"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"If the exported data should be downloaded as a file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"featureToggles"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Include feature-toggles in the exported data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strategies"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Include strategies in the exported data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Include tagtypes, tags and feature_tags in the exported data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"projects"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Include projects in the exported data")))),(0,r.kt)("p",null,"For example if you want to download just feature-toggles as yaml:"),(0,r.kt)(l.Z,{verb:"get",url:"api/admin/state/export?format=yaml&featureToggles=1&strategies=0&tags=0&projects=0&download=1",title:"Export features (and nothing else) as YAML.",mdxType:"ApiRequest"}),(0,r.kt)("h3",{id:"api-import"},"API Import"),(0,r.kt)("admonition",{title:"Importing environments in Unleash 4.19 and below",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is only relevant if you use ",(0,r.kt)("strong",{parentName:"p"},"Unleash 4.19 or earlier"),":"),(0,r.kt)("p",{parentName:"admonition"},"If you import an environment into an instance that already has that environment defined, Unleash will delete any API keys created specifically for that environment. This is to prevent unexpected access to the newly imported environments.")),(0,r.kt)("p",null,"You can import feature-toggles and strategies by POSTing to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/admin/state/import")," endpoint (keep in mind this will require authentication).\\\nYou can either send the data as JSON in the POST-body or send a ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," parameter with ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," (YAML files are also accepted here)."),(0,r.kt)("p",null,"You can customize the import with query parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drop"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"If the database should be cleaned before import (see comment below)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keep"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the existing feature toggles and strategies will not be override")))),(0,r.kt)("p",null,"If you want the database to be cleaned before import (",(0,r.kt)("strong",{parentName:"p"},"all strategies and features will be removed"),"), specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"drop")," query parameter."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You should be cautious about using the ",(0,r.kt)("inlineCode",{parentName:"p"},"drop")," query parameter in production environments.")),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)(l.Z,{verb:"post",url:"api/admin/state/import",payload:{version:3,features:[{name:"a-feature-toggle",enabled:!0,description:"#1 feature-toggle"}]},title:"Import data into Unleash.",mdxType:"ApiRequest"}),(0,r.kt)("h2",{id:"startup-import"},"Startup import"),(0,r.kt)("p",null,"You can import toggles and strategies on startup by using an import file in JSON or YAML format. As with other forms of imports, you can also choose to remove the current toggle and strategy configuration in the database before importing."),(0,r.kt)("p",null,"Unleash lets you do this both via configuration parameters and environment variables. The relevant parameters/variables are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"config parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"environment variable"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"importFile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IMPORT_FILE")),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"path to the configuration file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dropBeforeImport")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IMPORT_DROP_BEFORE_IMPORT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"whether to clean the database before importing the file")))),(0,r.kt)("h3",{id:"importing-files"},"Importing files"),(0,r.kt)("p",null,"To import strategies and toggles from a file (called ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.yml")," in the examples below), either"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use the ",(0,r.kt)("inlineCode",{parentName:"p"},"importFile")," parameter to point to the file (you can also passed this into the ",(0,r.kt)("inlineCode",{parentName:"p"},"unleash.start()")," entry point)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"unleash-server --databaseUrl [...] \\\n           --importFile configuration.yml\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"set the ",(0,r.kt)("inlineCode",{parentName:"p"},"IMPORT_FILE")," environment variable to the path of the file before starting Unleash"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"IMPORT_FILE=configuration.yml\n")))),(0,r.kt)("h3",{id:"drop-before-import"},"Drop before import"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You should never use this in production environments.")),(0,r.kt)("p",null,"To remove pre-existing feature toggles and strategies in the database before importing the new ones, either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add the ",(0,r.kt)("inlineCode",{parentName:"p"},"dropBeforeImport")," flag to the ",(0,r.kt)("inlineCode",{parentName:"p"},"unleash-server")," command (or to ",(0,r.kt)("inlineCode",{parentName:"p"},"unleash.start()"),")"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"unleash-server --databaseUrl [...] \\\n           --importFile configuration.yml \\\n           --dropBeforeImport\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"set the ",(0,r.kt)("inlineCode",{parentName:"p"},"IMPORT_DROP_BEFORE_IMPORT")," environment variable (note the leading ",(0,r.kt)("inlineCode",{parentName:"p"},"IMPORT_"),") to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"t"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". The variable is case-sensitive."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"IMPORT_DROP_BEFORE_IMPORT=true\n")))))}u.isMDXComponent=!0}}]);