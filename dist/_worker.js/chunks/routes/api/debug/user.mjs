import{d as s,e as r,h as e}from"../../../_/nitro.mjs";import"node:async_hooks";const i=s(async s=>{const{user:i}=await r(s),o=e(),a=await o.prepare("SELECT * FROM profiles WHERE id = ?").bind(i.id).first();return{sessionUser:i,dbProfile:a,exists:!!a}});export{i as default};
//# sourceMappingURL=user.mjs.map
