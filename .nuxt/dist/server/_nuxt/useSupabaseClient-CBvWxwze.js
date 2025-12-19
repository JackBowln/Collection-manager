import { C as useNuxtApp } from "../server.mjs";
const useSupabaseClient = () => {
  return useNuxtApp().$supabase.client;
};
export {
  useSupabaseClient as u
};
//# sourceMappingURL=useSupabaseClient-CBvWxwze.js.map
