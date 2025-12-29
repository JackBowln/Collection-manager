import{V as a,k as s,U as o}from"../../_/nitro.mjs";import"node:async_hooks";const e=a({onSuccess:async(a,{user:e})=>(console.log("Google Auth Success:",e.email),await s(a,{user:{id:e.sub,email:e.email,name:e.name,avatar:e.picture}}),o(a,"/dashboard"))});export{e as default};
//# sourceMappingURL=google.get.mjs.map
