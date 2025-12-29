import { c as __nuxt_component_2, d as __nuxt_component_1, e as __nuxt_component_5$1 } from "../server.mjs";
import { _ as __nuxt_component_5 } from "./Badge-Bm7uoIiW.js";
import { defineComponent, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/hookable/dist/index.mjs";
import { u as useFetch } from "./fetch-CFsjn0J_.js";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "explore",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: collections, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/explore", "$30g6sZvROi")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_1;
      const _component_UBadge = __nuxt_component_5;
      const _component_UAvatar = __nuxt_component_5$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-4 max-w-6xl" }, _attrs))}><div class="flex justify-between items-center mb-8 border-b pb-4 dark:border-gray-700"><div><h1 class="text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"> Explorar Coleções </h1><p class="text-gray-500 mt-1">Descubra o que a comunidade está criando.</p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/dashboard",
        variant: "ghost",
        icon: "i-heroicons-arrow-left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Voltar para Dashboard`);
          } else {
            return [
              createTextVNode("Voltar para Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center py-20">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-arrow-path",
          class: "w-10 h-10 animate-spin text-primary-500"
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(collections)?.length === 0) {
        _push(`<div class="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-xl">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-globe-alt",
          class: "w-16 h-16 text-gray-400 mx-auto mb-4"
        }, null, _parent));
        _push(`<h3 class="text-xl font-bold text-gray-900 dark:text-white">Nenhuma coleção pública ainda</h3><p class="text-gray-500 mt-2">Seja o primeiro a compartilhar uma coleção com o mundo!</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
        ssrRenderList(unref(collections), (collection) => {
          _push(`<article class="group flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"><div class="h-48 bg-gray-100 dark:bg-gray-800 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 group-hover:from-primary-500/20 group-hover:to-purple-500/20 transition-colors"></div><div class="absolute bottom-4 left-4 right-4">`);
          _push(ssrRenderComponent(_component_UBadge, {
            color: "primary",
            variant: "subtle",
            size: "sm",
            class: "mb-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Coleção Pública`);
              } else {
                return [
                  createTextVNode("Coleção Pública")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<h2 class="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight">${ssrInterpolate(collection.name)}</h2></div></div><div class="flex-1 p-6 flex flex-col"><p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-1">${ssrInterpolate(collection.description || "Sem descrição disponível.")}</p><div class="mt-auto border-t border-gray-100 dark:border-gray-800 pt-4 flex items-center justify-between"><div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_component_UAvatar, {
            src: collection.owner?.avatar_url,
            alt: collection.owner?.full_name,
            size: "xs"
          }, null, _parent));
          _push(`<div class="flex flex-col"><span class="text-xs font-semibold text-gray-900 dark:text-white">${ssrInterpolate(collection.owner?.full_name || "Anônimo")}</span><span class="text-[10px] text-gray-500">${ssrInterpolate(new Date(collection.created_at).toLocaleDateString())}</span></div></div>`);
          _push(ssrRenderComponent(_component_UButton, {
            to: `/collections/${collection.id}`,
            variant: "ghost",
            color: "gray",
            icon: "i-heroicons-arrow-right",
            class: "-mr-2"
          }, null, _parent));
          _push(`</div></div></article>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/explore.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=explore-zZF09PI1.js.map
