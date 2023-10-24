"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[46890],{11748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"ADR: Preferred data mutation method"},i=void 0,d={unversionedId:"contributing/ADRs/front-end/preferred-data-mutation-method",id:"contributing/ADRs/front-end/preferred-data-mutation-method",title:"ADR: Preferred data mutation method",description:"Background",source:"@site/docs/contributing/ADRs/front-end/preferred-data-mutation-method.md",sourceDirName:"contributing/ADRs/front-end",slug:"/contributing/ADRs/front-end/preferred-data-mutation-method",permalink:"/contributing/ADRs/front-end/preferred-data-mutation-method",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/contributing/ADRs/front-end/preferred-data-mutation-method.md",tags:[],version:"current",frontMatter:{title:"ADR: Preferred data mutation method"},sidebar:"documentation",previous:{title:"ADR: Preferred data fetching method",permalink:"/contributing/ADRs/front-end/preferred-data-fetching-method"},next:{title:"ADR: Preferred export",permalink:"/contributing/ADRs/front-end/preferred-export"}},s={},c=[{value:"Background",id:"background",level:2},{value:"Decision",id:"decision",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Because our product is open-core, we have complexities and needs for our SaaS platform that are not compatible with the needs of our open-source product. We have found a need to standardise how we fetch data from APIs, in order to reduce complexity and simplify the data fetching process."),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"We have decided to standardise data-fetching and error handling by implementing a top level ",(0,r.kt)("inlineCode",{parentName:"p"},"useAPI")," hook that will take care of formatting the\nrequest in the correct way adding the basePath if unleash is hosted on a subpath, wrap with error handlers and return the data in a consistent way."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ITagPayload } from 'interfaces/tags';\nimport useAPI from '../useApi/useApi';\n\nexport const useTagTypesApi = () => {\n    const { makeRequest, createRequest, errors, loading } = useAPI({\n        propagateErrors: true,\n    });\n\n    const createTag = async (payload: ITagPayload) => {\n        const path = `api/admin/tag-types`;\n        const req = createRequest(path, {\n            method: 'POST',\n            body: JSON.stringify(payload),\n        });\n\n        try {\n            const res = await makeRequest(req.caller, req.id);\n\n            return res;\n        } catch (e) {\n            throw e;\n        }\n    };\n\n    const validateTagName = async (name: string) => {\n        const path = `api/admin/tag-types/validate`;\n        const req = createRequest(path, {\n            method: 'POST',\n            body: JSON.stringify({ name }),\n        });\n        try {\n            const res = await makeRequest(req.caller, req.id);\n            return res;\n        } catch (e) {\n            throw e;\n        }\n    };\n    const updateTagType = async (tagName: string, payload: ITagPayload) => {\n        const path = `api/admin/tag-types/${tagName}`;\n        const req = createRequest(path, {\n            method: 'PUT',\n            body: JSON.stringify(payload),\n        });\n\n        try {\n            const res = await makeRequest(req.caller, req.id);\n            return res;\n        } catch (e) {\n            throw e;\n        }\n    };\n\n    const deleteTagType = async (tagName: string) => {\n        const path = `api/admin/tag-types/${tagName}`;\n        const req = createRequest(path, { method: 'DELETE' });\n\n        try {\n            const res = await makeRequest(req.caller, req.id);\n            return res;\n        } catch (e) {\n            throw e;\n        }\n    };\n\n    return {\n        createTag,\n        validateTagName,\n        updateTagType,\n        deleteTagType,\n        errors,\n        loading,\n    };\n};\n")))}p.isMDXComponent=!0}}]);