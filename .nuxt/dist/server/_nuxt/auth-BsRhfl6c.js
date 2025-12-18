import { w as defineNuxtRouteMiddleware, b as useSupabaseUser, n as navigateTo } from "../server.mjs";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/hookable/dist/index.mjs";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/unctx/dist/index.mjs";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/radix3/dist/index.mjs";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/defu/dist/defu.mjs";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/ufo/dist/index.mjs";
import "@supabase/ssr";
import "@vueuse/core";
import "tailwind-merge";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/klona/dist/index.mjs";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "vue/server-renderer";
import "@iconify/utils/lib/css/icon";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
const auth = defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser();
  if (!user.value) {
    return navigateTo("/login");
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-BsRhfl6c.js.map
