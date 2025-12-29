import { _ as __nuxt_component_9 } from "./Card-CjK8ZZ2Z.js";
import { b as useUserSession, n as navigateTo, c as __nuxt_component_2 } from "../server.mjs";
import { defineComponent, watchEffect, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "tailwind-merge";
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
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/klona/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { loggedIn } = useUserSession();
    watchEffect(() => {
      if (loggedIn.value) {
        navigateTo("/dashboard");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_9;
      const _component_UButton = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, { class: "w-full max-w-md" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-xl font-bold text-center"${_scopeId}>Bem-vindo ao Gerenciador de Coleções</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-xl font-bold text-center" }, "Bem-vindo ao Gerenciador de Coleções")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold"${_scopeId}> Powered by Cloudflare + Nuxt </p>`);
          } else {
            return [
              createVNode("p", { class: "text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold" }, " Powered by Cloudflare + Nuxt ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6 py-4"${_scopeId}><p class="text-center text-gray-500 text-sm"${_scopeId}>Entre com sua conta para gerenciar suas coleções com segurança e rapidez.</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              block: "",
              color: "white",
              variant: "solid",
              size: "lg",
              icon: "i-logos-google-icon",
              to: "/auth/google",
              external: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Entrar com Google `);
                } else {
                  return [
                    createTextVNode(" Entrar com Google ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              block: "",
              color: "gray",
              variant: "ghost",
              size: "lg",
              icon: "i-logos-github-icon",
              to: "/auth/github",
              external: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Entrar com GitHub `);
                } else {
                  return [
                    createTextVNode(" Entrar com GitHub ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6 py-4" }, [
                createVNode("p", { class: "text-center text-gray-500 text-sm" }, "Entre com sua conta para gerenciar suas coleções com segurança e rapidez."),
                createVNode(_component_UButton, {
                  block: "",
                  color: "white",
                  variant: "solid",
                  size: "lg",
                  icon: "i-logos-google-icon",
                  to: "/auth/google",
                  external: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Entrar com Google ")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  block: "",
                  color: "gray",
                  variant: "ghost",
                  size: "lg",
                  icon: "i-logos-github-icon",
                  to: "/auth/github",
                  external: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Entrar com GitHub ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-ARuVEhcF.js.map
