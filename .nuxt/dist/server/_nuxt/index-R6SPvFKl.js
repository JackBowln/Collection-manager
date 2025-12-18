import { defineComponent, withAsyncContext, useSSRContext } from "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { ssrRenderAttrs } from "vue/server-renderer";
import { b as useSupabaseUser, n as navigateTo } from "../server.mjs";
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
import "@iconify/utils/lib/css/icon";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const user = useSupabaseUser();
    if (user.value) {
      [__temp, __restore] = withAsyncContext(() => navigateTo("/dashboard")), await __temp, __restore();
    } else {
      [__temp, __restore] = withAsyncContext(() => navigateTo("/login")), await __temp, __restore();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>Redirecting...</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-R6SPvFKl.js.map
