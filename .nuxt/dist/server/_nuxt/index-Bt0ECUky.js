import { b as useSupabaseUser, c as useToast, f as useAsyncData, d as __nuxt_component_2, e as __nuxt_component_1, n as navigateTo, g as __nuxt_component_5 } from "../server.mjs";
import { _ as __nuxt_component_9 } from "./Card-Dskk1veu.js";
import { _ as __nuxt_component_4 } from "./Dropdown-TOktksTi.js";
import { _ as __nuxt_component_7 } from "./Badge-BRw-NuRI.js";
import { defineComponent, withAsyncContext, unref, withCtx, createTextVNode, createVNode, toDisplayString, withModifiers, useSSRContext } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { u as useSupabaseClient } from "./useSupabaseClient-CBvWxwze.js";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/hookable/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/unctx/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/radix3/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/defu/dist/defu.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/ufo/dist/index.mjs";
import "@supabase/ssr";
import "@vueuse/core";
import "tailwind-merge";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/klona/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
import "./usePopper-BnxSMfCG.js";
import "./keyboard-DfXvXu8t.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const toast = useToast();
    const { data: collections, pending, refresh: refreshMy } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("my-collections", async () => {
      const { data, error } = await supabase.from("collections").select("*").eq("user_id", user.value?.id).order("created_at", { ascending: false });
      if (error) throw error;
      return data || [];
    })), __temp = await __temp, __restore(), __temp);
    const { data: sharedCollections, pending: pendingShares, refresh: refreshShared } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("shared-collections", async () => {
      const { data, error } = await supabase.from("collection_shares").select(`
      id,
      collection:collections (
         id, name, description, created_at, visibility,
         owner:profiles ( full_name, avatar_url, email )
      )
    `).eq("user_id", user.value?.id);
      if (error) throw error;
      return data || [];
    })), __temp = await __temp, __restore(), __temp);
    const refresh = () => {
      refreshMy();
      refreshShared();
    };
    const getActionItems = (collection) => [
      [{
        label: "Editar",
        icon: "i-heroicons-pencil-square",
        click: () => navigateTo(`/collections/${collection.id}/edit`)
      }],
      [{
        label: "Excluir",
        icon: "i-heroicons-trash",
        click: () => confirmDelete(collection.id)
      }]
    ];
    const goToCollection = (id) => {
      navigateTo(`/collections/${id}`);
    };
    const confirmDelete = async (id) => {
      if (!confirm("Tem certeza que deseja excluir esta coleção e todos os seus itens?")) return;
      const { error } = await supabase.from("collections").delete().eq("id", id);
      if (error) {
        toast.add({ title: "Erro", description: error.message, color: "red" });
      } else {
        toast.add({ title: "Sucesso", description: "Coleção excluída", color: "green" });
        refresh();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_1;
      const _component_UCard = __nuxt_component_9;
      const _component_UDropdown = __nuxt_component_4;
      const _component_UBadge = __nuxt_component_7;
      const _component_UAvatar = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-4"><div><h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2"> Bem-vindo, <span class="text-primary-500">${ssrInterpolate(unref(user)?.user_metadata.full_name?.split(" ")[0])}</span></h1><p class="text-gray-500 dark:text-gray-400">Gerencie suas coleções ou descubra novidades.</p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/collections/new",
        icon: "i-heroicons-plus",
        size: "lg",
        class: "shadow-lg shadow-primary-500/20 hover:scale-105 transition-transform"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nova Coleção `);
          } else {
            return [
              createTextVNode(" Nova Coleção ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-8"><section><h2 class="text-lg font-semibold mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-user" }, null, _parent));
      _push(` Minhas Coleções </h2>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center py-8">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-arrow-path",
          class: "w-8 h-8 animate-spin text-gray-400"
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(collections)?.length === 0) {
        _push(`<div class="text-center py-8 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg"><p class="text-gray-500">Você não tem coleções criadas.</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(collections), (collection) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: collection.id,
            class: "group cursor-pointer border-0 ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm hover:shadow-xl hover:ring-primary-500/50 dark:hover:ring-primary-500/50 transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-900 overflow-hidden",
            onClick: ($event) => goToCollection(collection.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UDropdown, {
                  items: getActionItems(collection),
                  onClick: () => {
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        icon: "i-heroicons-ellipsis-vertical",
                        size: "xs"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UButton, {
                          color: "gray",
                          variant: "soft",
                          icon: "i-heroicons-ellipsis-vertical",
                          size: "xs"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="p-4 flex flex-col h-full"${_scopeId}><div class="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-folder",
                  class: "w-7 h-7"
                }, null, _parent2, _scopeId));
                _push2(`</div><h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-primary-500 transition-colors"${_scopeId}>${ssrInterpolate(collection.name)}</h3><p class="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4 flex-1"${_scopeId}>${ssrInterpolate(collection.description || "Sem descrição definida.")}</p><div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800"${_scopeId}><span class="text-xs text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(new Date(collection.created_at).toLocaleDateString())}</span>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  size: "xs",
                  variant: "subtle",
                  color: collection.visibility === "public" ? "green" : collection.visibility === "shared" ? "purple" : "gray"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(collection.visibility === "public" ? "Público" : collection.visibility === "shared" ? "Compartilahdo" : "Privado")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(collection.visibility === "public" ? "Público" : collection.visibility === "shared" ? "Compartilahdo" : "Privado"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10" }, [
                    createVNode(_component_UDropdown, {
                      items: getActionItems(collection),
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          color: "gray",
                          variant: "soft",
                          icon: "i-heroicons-ellipsis-vertical",
                          size: "xs"
                        })
                      ]),
                      _: 1
                    }, 8, ["items", "onClick"])
                  ]),
                  createVNode("div", { class: "p-4 flex flex-col h-full" }, [
                    createVNode("div", { class: "w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-folder",
                        class: "w-7 h-7"
                      })
                    ]),
                    createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-primary-500 transition-colors" }, toDisplayString(collection.name), 1),
                    createVNode("p", { class: "text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4 flex-1" }, toDisplayString(collection.description || "Sem descrição definida."), 1),
                    createVNode("div", { class: "flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800" }, [
                      createVNode("span", { class: "text-xs text-gray-400 font-mono" }, toDisplayString(new Date(collection.created_at).toLocaleDateString()), 1),
                      createVNode(_component_UBadge, {
                        size: "xs",
                        variant: "subtle",
                        color: collection.visibility === "public" ? "green" : collection.visibility === "shared" ? "purple" : "gray"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(collection.visibility === "public" ? "Público" : collection.visibility === "shared" ? "Compartilahdo" : "Privado"), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section><section><h2 class="text-lg font-semibold mb-4 flex items-center gap-2 text-purple-600 dark:text-purple-400">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-users" }, null, _parent));
      _push(` Compartilhado Comigo </h2>`);
      if (unref(pendingShares)) {
        _push(`<div class="text-sm text-gray-400">Carregando compartilhamentos...</div>`);
      } else if (unref(sharedCollections)?.length === 0) {
        _push(`<div class="text-center py-8 bg-gray-50 dark:bg-gray-800 rounded-lg"><p class="text-gray-500 text-sm">Ninguém compartilhou coleções com você ainda.</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(sharedCollections), (item) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: item.collection.id,
            class: "group cursor-pointer border-0 ring-1 ring-purple-100 dark:ring-purple-900/30 shadow-sm hover:shadow-purple-500/20 hover:ring-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-900",
            onClick: ($event) => goToCollection(item.collection.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="p-4 flex flex-col h-full"${_scopeId}><div class="flex justify-between items-start mb-3"${_scopeId}><div class="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-folder-open",
                  class: "w-6 h-6"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-eye",
                  class: "text-gray-300 group-hover:text-purple-500 transition-colors"
                }, null, _parent2, _scopeId));
                _push2(`</div><h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-500 transition-colors"${_scopeId}>${ssrInterpolate(item.collection.name)}</h3><p class="text-gray-500 text-sm line-clamp-2 mb-4 flex-1"${_scopeId}>${ssrInterpolate(item.collection.description || "Sem descrição")}</p><div class="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UAvatar, {
                  src: item.collection.owner?.avatar_url,
                  size: "xs",
                  class: "ring-2 ring-white dark:ring-gray-900"
                }, null, _parent2, _scopeId));
                _push2(`<div class="flex flex-col"${_scopeId}><span class="text-[10px] text-gray-400 uppercase tracking-wider font-semibold"${_scopeId}>Compartilhado por</span><span class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(item.collection.owner?.full_name || "Desconhecido")}</span></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "p-4 flex flex-col h-full" }, [
                    createVNode("div", { class: "flex justify-between items-start mb-3" }, [
                      createVNode("div", { class: "w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-folder-open",
                          class: "w-6 h-6"
                        })
                      ]),
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-eye",
                        class: "text-gray-300 group-hover:text-purple-500 transition-colors"
                      })
                    ]),
                    createVNode("h3", { class: "text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-500 transition-colors" }, toDisplayString(item.collection.name), 1),
                    createVNode("p", { class: "text-gray-500 text-sm line-clamp-2 mb-4 flex-1" }, toDisplayString(item.collection.description || "Sem descrição"), 1),
                    createVNode("div", { class: "flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-gray-800" }, [
                      createVNode(_component_UAvatar, {
                        src: item.collection.owner?.avatar_url,
                        size: "xs",
                        class: "ring-2 ring-white dark:ring-gray-900"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("span", { class: "text-[10px] text-gray-400 uppercase tracking-wider font-semibold" }, "Compartilhado por"),
                        createVNode("span", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(item.collection.owner?.full_name || "Desconhecido"), 1)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Bt0ECUky.js.map
