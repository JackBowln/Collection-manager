import { b as useUserSession, n as navigateTo, a as __nuxt_component_0, d as __nuxt_component_1, c as __nuxt_component_2, A as __nuxt_component_3, e as __nuxt_component_5 } from "../server.mjs";
import { _ as __nuxt_component_4 } from "./Dropdown-Ba5iGOTw.js";
import { defineComponent, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { u as useColorMode } from "./composables-PcvjsKU4.js";
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
import "./usePopper-wR_LLQw2.js";
import "./keyboard-DfXvXu8t.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { user, clear } = useUserSession();
    const colorMode = useColorMode();
    computed({
      get() {
        return colorMode.value === "dark";
      },
      set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
      }
    });
    const userItems = computed(() => [
      [{
        label: user.value?.name || "Usuário",
        slot: "account",
        disabled: true
      }],
      [{
        label: "Configurações",
        icon: "i-heroicons-cog-8-tooth",
        to: "/settings"
      }],
      [{
        label: "Sair",
        icon: "i-heroicons-arrow-left-on-rectangle",
        click: async () => {
          await clear();
          navigateTo("/login");
        }
      }]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2;
      const _component_ClientOnly = __nuxt_component_3;
      const _component_UDropdown = __nuxt_component_4;
      const _component_UAvatar = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300" }, _attrs))}><header class="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60"><div class="container mx-auto px-4 h-16 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard",
        class: "flex items-center gap-2 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-rectangle-stack",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><span class="font-bold text-lg tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"${_scopeId}> Collector </span>`);
          } else {
            return [
              createVNode("div", { class: "w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform" }, [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-rectangle-stack",
                  class: "w-5 h-5"
                })
              ]),
              createVNode("span", { class: "font-bold text-lg tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent" }, " Collector ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-full border border-gray-200/50 dark:border-gray-700/50">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/dashboard",
        variant: "ghost",
        color: "gray",
        size: "sm",
        "active-class": "bg-white dark:bg-gray-700 shadow-sm text-primary-500",
        class: "rounded-full px-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        to: "/explore",
        variant: "ghost",
        color: "gray",
        size: "sm",
        "active-class": "bg-white dark:bg-gray-700 shadow-sm text-primary-500",
        class: "rounded-full px-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explorar `);
          } else {
            return [
              createTextVNode(" Explorar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      if (unref(user)) {
        _push(ssrRenderComponent(_component_UDropdown, {
          items: unref(userItems),
          popper: { placement: "bottom-end" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UAvatar, {
                src: unref(user).avatar,
                alt: unref(user).name,
                size: "sm",
                class: "ring-2 ring-white dark:ring-gray-900 cursor-pointer hover:ring-primary-500 transition-all"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UAvatar, {
                  src: unref(user).avatar,
                  alt: unref(user).name,
                  size: "sm",
                  class: "ring-2 ring-white dark:ring-gray-900 cursor-pointer hover:ring-primary-500 transition-all"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_UButton, {
          to: "/login",
          color: "primary",
          variant: "solid",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Entrar `);
            } else {
              return [
                createTextVNode(" Entrar ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div></header><main class="flex-1 container mx-auto px-4 py-6 md:py-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t border-gray-200 dark:border-gray-800 py-6 mt-12 bg-white dark:bg-gray-900"><div class="container mx-auto px-4 text-center text-sm text-gray-500"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Collector App.</p></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-CVbxpkio.js.map
