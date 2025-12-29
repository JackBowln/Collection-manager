import { n as navigateTo, d as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, watch, mergeProps, useSSRContext } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/hookable/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/unctx/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/radix3/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/defu/dist/defu.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/ufo/dist/index.mjs";
import "@vueuse/core";
import "tailwind-merge";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/klona/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "confirm",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useSupabaseUser();
    watch(user, () => {
      if (user.value) {
        return navigateTo("/dashboard");
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-arrow-path",
        class: "w-8 h-8 animate-spin"
      }, null, _parent));
      _push(`<span class="ml-2">Verifying login...</span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confirm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=confirm-JdrqzxmG.js.map
