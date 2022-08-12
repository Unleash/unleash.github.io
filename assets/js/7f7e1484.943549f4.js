"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[4784],{72905:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},28403:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(87462),l=n(67294),r=n(86010),i=n(72389),s=n(67392),o=n(7094),d=n(12466);const p="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,n;const{lazy:i,block:u,defaultValue:g,values:k,groupId:c,className:N}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===g?g:null!=(t=null!=g?g:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:C}=(0,o.U)(),[T,x]=(0,l.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,d.o5)();if(null!=c){const e=b[c];null!=e&&e!==T&&v.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=w.indexOf(t),a=v[n].value;a!==T&&(I(t),x(a),null!=c&&C(c,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=w.indexOf(e.currentTarget)+1;n=null!=(a=w[t])?a:w[0];break}case"ArrowLeft":{var l;const t=w.indexOf(e.currentTarget)-1;n=null!=(l=w[t])?l:w[w.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},N)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:A,onFocus:E,onClick:E},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function g(e){const t=(0,i.Z)();return l.createElement(u,(0,a.Z)({key:String(t)},e))}},90872:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),l=n(28403),r=n(72905),i=n(55483);const s=e=>{let{verb:t,payload:n,url:s,title:o,endpointType:d="Unleash server API"}=e;const p=(null==t?void 0:t.toUpperCase())||"",m=JSON.stringify(n,null,2),[u,g]="Unleash server API"===d?["unleash-url","API-token"]:["proxy-url","proxy-client-key"],k=(n?"\n"+p+" <"+u+">/"+s+"\nAuthorization: <"+g+">\ncontent-type: application/json\n\n"+m:"\n"+p+" <"+u+">/"+s+"\nAuthorization: <"+g+">\ncontent-type: application/json").trim(),c=(n?'\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <'+g+'>" \\\n     -X '+p+" \\\n     -d '"+m+"' \\\n     <"+u+">/"+s:'\ncurl -H "Content-Type: application/json" \\\n     -H "Authorization: <'+g+'>" \\\n     -X '+p+" \\\n     <"+u+">/"+s).trim(),N=(n?"echo '"+m+"' \\\n| http "+p+" \\\n  <"+u+">/"+s+" \\\n  Authorization:<"+g+">":("\nhttp "+p+" \\\n  <"+u+">/"+s+" \\\n  Authorization:<"+g+"> \\\n  "+("POST"!==p||m?"":"--json")).trim()).trim();return a.createElement(l.Z,{groupId:"api-request"},a.createElement(r.Z,{value:"http",label:"HTTP"},a.createElement(i.Z,{language:"http",title:o},k)),a.createElement(r.Z,{value:"curl",label:"cURL"},a.createElement(i.Z,{language:"bash",title:o},c)),a.createElement(r.Z,{value:"httpie",label:"HTTPie"},a.createElement(i.Z,{language:"bash",title:o},N)))}},61505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,basePath:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>o,path:()=>u,toc:()=>p});var a=n(87462),l=(n(67294),n(3905)),r=n(90872);const i={title:"/api/admin/segments"},s=void 0,o={unversionedId:"api/admin/segments",id:"api/admin/segments",title:"/api/admin/segments",description:"Segments are available to Unleash Pro and Unleash Enterprise users since Unleash 4.13.",source:"@site/docs/api/admin/segments.mdx",sourceDirName:"api/admin",slug:"/api/admin/segments",permalink:"/api/admin/segments",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/api/admin/segments.mdx",tags:[],version:"current",frontMatter:{title:"/api/admin/segments"},sidebar:"documentation",previous:{title:"/api/admin/projects",permalink:"/api/admin/projects"},next:{title:"/api/admin/state",permalink:"/api/admin/state"}},d={},p=[{value:"Get all segments",id:"get-all-segments",level:2},{value:"200 OK",id:"200-ok",level:3},{value:"Create segment",id:"create-segment",level:2},{value:"201 Created",id:"201-created",level:3},{value:"400 Bad Request",id:"400-bad-request",level:3},{value:"Payload structure",id:"payload-structure",level:3},{value:"Get segment by ID",id:"get-segment-by-id",level:2},{value:"200 OK",id:"200-ok-1",level:3},{value:"404 Not Found",id:"404-not-found",level:3},{value:"Update an existing segment",id:"update-an-existing-segment",level:2},{value:"204 No Content",id:"204-no-content",level:3},{value:"404 Not Found",id:"404-not-found-1",level:3},{value:"Delete a segment",id:"delete-a-segment",level:2},{value:"204 No Content",id:"204-no-content-1",level:3},{value:"404 Not Found",id:"404-not-found-2",level:3},{value:"409 Conflict",id:"409-conflict",level:3},{value:"List strategies that use a specific segment",id:"list-strategies-that-use-a-specific-segment",level:2},{value:"200 OK",id:"200-ok-2",level:3},{value:"404 Not Found",id:"404-not-found-3",level:3},{value:"List segments applied to a specific strategy",id:"list-segments-applied-to-a-specific-strategy",level:2},{value:"200 OK",id:"200-ok-3",level:3},{value:"404 Not Found",id:"404-not-found-4",level:3},{value:"Replace activation strategy segments",id:"replace-activation-strategy-segments",level:2},{value:"Remove all segments from an activation strategy",id:"remove-all-segments-from-an-activation-strategy",level:3},{value:"201 Created",id:"201-created-1",level:3},{value:"403 Forbidden",id:"403-forbidden",level:3},{value:"404 Not Found",id:"404-not-found-5",level:3},{value:"Payload structure",id:"payload-structure-1",level:3},{value:"API types",id:"api-types",level:2},{value:"Segment",id:"segment-type-description",level:3},{value:"Example",id:"example",level:4},{value:"Description",id:"description",level:4},{value:"Constraint",id:"constraint-type-description",level:3},{value:"Example",id:"example-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Activation strategy",id:"activation-strategy-type-description",level:3},{value:"Example",id:"example-2",level:4},{value:"Description",id:"description-2",level:4}],m="api/admin/segments",u=e=>m+"/"+e,g={toc:p,basePath:m};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Availability",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Segments are available to Unleash Pro and Unleash Enterprise users since ",(0,l.kt)("strong",{parentName:"p"},"Unleash 4.13"),".")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"To use the admin API, you'll need to ",(0,l.kt)("a",{parentName:"p",href:"/user_guide/api-token"},"create and use an admin API token"),".")),(0,l.kt)("p",null,"The segments API lets you create, read, update, and delete ",(0,l.kt)("a",{parentName:"p",href:"/reference/segments"},"segments"),"."),(0,l.kt)("h2",{id:"get-all-segments"},"Get all segments"),(0,l.kt)("p",null,"Retrieve all segments that exist in this Unleash instance. Returns a list of ",(0,l.kt)("a",{parentName:"p",href:"#segment-type-description"},"segment objects"),"."),(0,l.kt)(r.Z,{verb:"Get",url:m,title:"Retrieve all existing segments.",mdxType:"ApiRequest"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example responses"),(0,l.kt)("h3",{id:"200-ok"},"200 OK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 1,\n    "name": "my-segment",\n    "description": "a segment description",\n    "constraints": [],\n    "createdBy": "user@example.com",\n    "createdAt": "2022-04-01T14:02:25.491Z"\n  }\n]\n'))),(0,l.kt)("h2",{id:"create-segment"},"Create segment"),(0,l.kt)("p",null,"Create a new segment with the specified configuration."),(0,l.kt)(r.Z,{verb:"post",url:m,title:"Create a new segment.",payload:{name:"my-segment",description:"a segment description",constraints:[]},mdxType:"ApiRequest"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example responses"),(0,l.kt)("h3",{id:"201-created"},"201 Created"),(0,l.kt)("p",null,"The segment was successfully created. This response has no body."),(0,l.kt)("h3",{id:"400-bad-request"},"400 Bad Request"),(0,l.kt)("p",null,"A segment with the provided name already exists.")),(0,l.kt)("h3",{id:"payload-structure"},"Payload structure"),(0,l.kt)("p",null,"Use a JSON object with the following properties to create a new segment."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the segment."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"mobile-users"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"A description of the segment."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"This segment is for users on mobile devices."'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"constraints")),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("a",{parentName:"td",href:"#constraint-type-description"},"constraint objects")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The constraints in this segment."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,l.kt)("h2",{id:"get-segment-by-id"},"Get segment by ID"),(0,l.kt)("p",null,"Retrieves the segment with the specified ID."),(0,l.kt)(r.Z,{verb:"Get",url:u("<segment-id>"),title:"Retrieve the segment with the provided ID.",mdxType:"ApiRequest"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example responses"),(0,l.kt)("h3",{id:"200-ok-1"},"200 OK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "name": "my-segment",\n  "description": "a segment description",\n  "constraints": [],\n  "createdBy": "user@example.com",\n  "createdAt": "2022-04-01T14:02:25.491Z"\n}\n')),(0,l.kt)("h3",{id:"404-not-found"},"404 Not Found"),(0,l.kt)("p",null,"No segment with the provided ID exists.")),(0,l.kt)("h2",{id:"update-an-existing-segment"},"Update an existing segment"),(0,l.kt)("p",null,"Replace the data of the specified segment with the provided payload."),(0,l.kt)(r.Z,{verb:"put",url:u("<segment-id>"),title:"Update a segment with new data.",payload:{name:"my-segment",description:"this is a newly provided description.",constraints:[]},mdxType:"ApiRequest"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example responses"),(0,l.kt)("h3",{id:"204-no-content"},"204 No Content"),(0,l.kt)("p",null,"The update was successful. This response has no body."),(0,l.kt)("h3",{id:"404-not-found-1"},"404 Not Found"),(0,l.kt)("p",null,"No segment with the provided ID exists.")),(0,l.kt)("h2",{id:"delete-a-segment"},"Delete a segment"),(0,l.kt)("p",null,"Delete the request with the specified ID."),(0,l.kt)(r.Z,{verb:"delete",url:u("<segment-id>"),title:"Delete a segment.",mdxType:"ApiRequest"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example responses"),(0,l.kt)("h3",{id:"204-no-content-1"},"204 No Content"),(0,l.kt)("p",null,"The segment was deleted successfully."),(0,l.kt)("h3",{id:"404-not-found-2"},"404 Not Found"),(0,l.kt)("p",null,"No segment with the provided ID exists."),(0,l.kt)("h3",{id:"409-conflict"},"409 Conflict"),(0,l.kt)("p",null,"The segment is being used by at least one strategy and can not be deleted. To delete the segment, first remove it from any strategies that use it.")),(0,l.kt)("h2",{id:"list-strategies-that-use-a-specific-segment"},"List strategies that use a specific segment"),(0,l.kt)("p",null,"Retrieve all strategies that use the specified segment. Returns a list of ",(0,l.kt)("a",{parentName:"p",href:"#activation-strategy-type-description"},"activation strategy objects"),"."),(0,l.kt)(r.Z,{verb:"Get",url:u("<segment-id>/strategies"),title:"Retrieve all activation strategies that use the specified segment.",mdxType:"ApiRequest"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example responses"),(0,l.kt)("h3",{id:"200-ok-2"},"200 OK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "strategy-id",\n    "featureName": "my-feature",\n    "projectId": "my-project",\n    "environment": "development",\n    "strategyName": "my strategy",\n    "parameters": {},\n    "constraints": [],\n    "createdAt": "2022-04-01T14:02:25.491Z"\n  }\n]\n')),(0,l.kt)("h3",{id:"404-not-found-3"},"404 Not Found"),(0,l.kt)("p",null,"No segment with the provided id exists.")),(0,l.kt)("h2",{id:"list-segments-applied-to-a-specific-strategy"},"List segments applied to a specific strategy"),(0,l.kt)("p",null,"Retrieve all segments that are applied to the specified strategy. Returns a list of ",(0,l.kt)("a",{parentName:"p",href:"#segment-type-description"},"segment objects"),"."),(0,l.kt)(r.Z,{verb:"Get",url:u("strategies/<strategy-id>"),title:"Retrieve all segments that are used by the specified strategy.",mdxType:"ApiRequest"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example responses"),(0,l.kt)("h3",{id:"200-ok-3"},"200 OK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 1,\n    "name": "my-segment",\n    "description": "a segment description",\n    "constraints": [],\n    "createdBy": "user@example.com",\n    "createdAt": "2022-04-01T14:02:25.491Z"\n  }\n]\n')),(0,l.kt)("h3",{id:"404-not-found-4"},"404 Not Found"),(0,l.kt)("p",null,"No strategy with the provided id exists.")),(0,l.kt)("h2",{id:"replace-activation-strategy-segments"},"Replace activation strategy segments"),(0,l.kt)("p",null,"Replace the segments applied to the specified activation strategy with the provided segment list."),(0,l.kt)(r.Z,{verb:"post",url:u("strategies"),title:"Replace the segments to the specified strategy.",payload:{projectId:"my-project",strategyId:"my-strategy",environmentId:"development",segmentIds:[61,62,63,64]},mdxType:"ApiRequest"}),(0,l.kt)("h3",{id:"remove-all-segments-from-an-activation-strategy"},"Remove all segments from an activation strategy"),(0,l.kt)("p",null,"To remove all segments from an activation strategy, use this endpoint and provide an empty list of ",(0,l.kt)("inlineCode",{parentName:"p"},"segmentIds"),'. For instance, the following payload would remove all segments from the strategy "my-strategy".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projectId": "my-project",\n  "strategyId": "my-strategy",\n  "environmentId": "development",\n  "segmentIds": []\n}\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example responses"),(0,l.kt)("h3",{id:"201-created-1"},"201 Created"),(0,l.kt)("p",null,"The strategy's list of segments was successfully updated."),(0,l.kt)("h3",{id:"403-forbidden"},"403 Forbidden"),(0,l.kt)("p",null,"You do not have access to edit this activation strategy."),(0,l.kt)("h3",{id:"404-not-found-5"},"404 Not Found"),(0,l.kt)("p",null,"No strategy with the provided ID exists.")),(0,l.kt)("h3",{id:"payload-structure-1"},"Payload structure"),(0,l.kt)("p",null,"Use a JSON object with the following properties to update the list of applied segments."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"projectId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the feature toggle's project."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"my-project"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"strategyId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the strategy."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"my-strategy"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"environmentId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the environment."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"development"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"segmentIds")),(0,l.kt)("td",{parentName:"tr",align:null},"list of segment IDs (numbers)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of segment IDs to apply to the strategy."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,l.kt)("h2",{id:"api-types"},"API types"),(0,l.kt)("p",null,"This section describes the data objects returned by the endpoints in the segments API. For information on a specific endpoint, refer to its specific description above."),(0,l.kt)("h3",{id:"segment-type-description"},"Segment"),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 12054,\n  "name": "segment name",\n  "description": "segment description",\n  "constraints": [],\n  "createdBy": "you@example.com",\n  "createdAt": "2022-05-23T15:45:22.000Z"\n}\n')),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The segment's ID."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"546"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The segment's name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"my-segment"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"An optional description of the segment."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"segment description"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"constraints")),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("a",{parentName:"td",href:"#constraint-type-description"},"constraint objects")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of constraint objects in the segment."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"createdBy")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"An identifier for who created the segment."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"you@example.com"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"createdAt")),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The time when the segment was created. Format: ",(0,l.kt)("inlineCode",{parentName:"td"},"YYYY-MM-DDThh:mm:ss.sTZD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"2022-04-23T13:56:24.45+01:00"'))))),(0,l.kt)("h3",{id:"constraint-type-description"},"Constraint"),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "contextName": "appName",\n    "operator": "STR_CONTAINS",\n    "values": [],\n    "inverted": false,\n    "caseInsensitive": false\n}\n')),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"values")," and ",(0,l.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"value")),(0,l.kt)("p",{parentName:"admonition"},"Some constraint operators only support single values. If a constraint uses one of these operators, the payload will contain a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," property with the correct value. However, for backwards compatibility reasons, the payload will ",(0,l.kt)("em",{parentName:"p"},"also")," contain a ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," property. If the operator accepts multiple values, the ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," property will not be present. Visit the ",(0,l.kt)("a",{parentName:"p",href:"/advanced/strategy_constraints"},"strategy constraints documentation")," for more information on what operators support what number of values.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"contextName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the context field targeted by the constraint."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"myContextField"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"operator")),(0,l.kt)("td",{parentName:"tr",align:null},"string, the name of one of the ",(0,l.kt)("a",{parentName:"td",href:"/advanced/strategy_constraints"},"constraint operators")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The operator to apply to the context field."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DATE_BEFORE"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:null},"a list of strings"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of values to apply the constraint operator to."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'["value a", "value b"]'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"The value to apply the constraint operator to."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"15"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inverted")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the result of ",(0,l.kt)("a",{parentName:"td",href:"/advanced/strategy_constraints#constraint-negation"},"the constraint will be negated or not"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"caseInsensitive")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the constraint operator is case sensitive or not. Only ",(0,l.kt)("a",{parentName:"td",href:"/advanced/strategy_constraints#string-operators"},"applies to some string-based operators"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"activation-strategy-type-description"},"Activation strategy"),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "64fbe72b-d107-4b26-b6b8-4fead08d286c",\n  "environment": "development",\n  "featureName": "my-feature",\n  "projectId": "my-project",\n  "strategyName": "flexibleRollout"\n}\n')),(0,l.kt)("h4",{id:"description-2"},"Description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"GUID string"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the strategy."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"64fbe72b-d107-4b26-b6b8-4fead08d286c"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"environment")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the strategy's environment."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"development"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"featureName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the feature the strategy is applied to."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"my-feature"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"projectId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the current project."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"my-project"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"strategyName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the strategy."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"flexibleRollout"'))))))}k.isMDXComponent=!0}}]);