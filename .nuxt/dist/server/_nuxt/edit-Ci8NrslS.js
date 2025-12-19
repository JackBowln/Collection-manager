import { h as useRoute, c as useToast, d as __nuxt_component_2 } from "../server.mjs";
import { _ as __nuxt_component_9 } from "./Card-Dskk1veu.js";
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from "./Input-D0kU1oTm.js";
import { _ as __nuxt_component_1, a as _sfc_main$1, b as _sfc_main$2 } from "./FieldDefinition-CrH3ZwrU.js";
import { defineComponent, ref, reactive, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useSupabaseClient } from "./useSupabaseClient-CBvWxwze.js";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/hookable/dist/index.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const collectionId = route.params.id;
    const supabase = useSupabaseClient();
    const toast = useToast();
    const loading = ref(false);
    const form = reactive({
      name: "",
      description: "",
      visibility: "private",
      fields: []
    });
    const addField = () => {
      form.fields.push({
        tempId: Date.now(),
        // Unique ID for v-for key
        name: "",
        type: "text",
        options: [],
        visible: true,
        required: false,
        selected: false,
        folder_order: form.fields.length
      });
    };
    const removeField = async (index) => {
      const field = form.fields[index];
      if (field.id) {
        if (!confirm(`Tem certeza que deseja excluir o campo "${field.name}"? Todos os dados deste campo serão perdidos!`)) return;
        const { error } = await supabase.from("fields").delete().eq("id", field.id);
        if (error) {
          toast.add({ title: "Erro", description: error.message, color: "red" });
          return;
        }
      }
      form.fields.splice(index, 1);
    };
    const hasSelectedFields = computed(() => form.fields.some((f) => f.selected));
    const selectedFieldsCount = computed(() => form.fields.filter((f) => f.selected).length);
    const selectAllFields = () => {
      form.fields.forEach((f) => f.selected = true);
    };
    const deselectAllFields = () => {
      form.fields.forEach((f) => f.selected = false);
    };
    const deleteSelectedFields = async () => {
      const selected = form.fields.filter((f) => f.selected);
      if (selected.length === 0) return;
      if (!confirm(`Excluir ${selected.length} campos? Isso executará a ação imediatamente e não poderá ser desfeito.`)) return;
      const idsToDelete = selected.map((f) => f.id).filter((id) => !!id);
      if (idsToDelete.length > 0) {
        const { error } = await supabase.from("fields").delete().in("id", idsToDelete);
        if (error) {
          toast.add({ title: "Erro", description: error.message, color: "red" });
          return;
        }
      }
      form.fields = form.fields.filter((f) => !f.selected);
      toast.add({ title: "Excluído", description: "Campos removidos", color: "green" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_UCard = __nuxt_component_9;
      const _component_UFormGroup = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UTextarea = __nuxt_component_1;
      const _component_CollectionAccessControl = _sfc_main$1;
      const _component_FieldDefinition = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto p-4" }, _attrs))}><div class="flex items-center gap-4 mb-6">`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons-arrow-left",
        variant: "ghost",
        to: `/collections/${unref(collectionId)}`
      }, null, _parent));
      _push(`<h1 class="text-2xl font-bold">Editar Coleção</h1></div><form>`);
      _push(ssrRenderComponent(_component_UCard, { class: "mb-6" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold"${_scopeId}>Detalhes Básicos</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold" }, "Detalhes Básicos")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Nome da Coleção",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    placeholder: "ex. Discos de Vinil",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      placeholder: "ex. Discos de Vinil",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { label: "Descrição" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(form).description,
                    "onUpdate:modelValue": ($event) => unref(form).description = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(form).description,
                      "onUpdate:modelValue": ($event) => unref(form).description = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_component_UFormGroup, {
                  label: "Nome da Coleção",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      placeholder: "ex. Discos de Vinil",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, { label: "Descrição" }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(form).description,
                      "onUpdate:modelValue": ($event) => unref(form).description = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CollectionAccessControl, {
        modelValue: unref(form).visibility,
        "onUpdate:modelValue": ($event) => unref(form).visibility = $event,
        "collection-id": unref(collectionId),
        class: "mb-6"
      }, null, _parent));
      _push(`<div class="mb-6"><div class="flex flex-wrap gap-2 justify-between items-center mb-4 sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 border-b border-gray-200 dark:border-gray-800"><div class="flex items-center gap-2"><h2 class="text-lg font-semibold">Campos Personalizados</h2>`);
      if (unref(hasSelectedFields)) {
        _push(`<div class="flex gap-2 ml-4">`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          color: "red",
          variant: "soft",
          onClick: deleteSelectedFields
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Excluir Selecionados (${ssrInterpolate(unref(selectedFieldsCount))})`);
            } else {
              return [
                createTextVNode("Excluir Selecionados (" + toDisplayString(unref(selectedFieldsCount)) + ")", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          color: "gray",
          variant: "ghost",
          onClick: deselectAllFields
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Cancelar`);
            } else {
              return [
                createTextVNode("Cancelar")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          color: "gray",
          variant: "ghost",
          onClick: selectAllFields
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Selecionar Todos`);
            } else {
              return [
                createTextVNode("Selecionar Todos")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "sm",
        icon: "i-heroicons-plus",
        onClick: addField
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Adicionar Campo`);
          } else {
            return [
              createTextVNode("Adicionar Campo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(form).fields, (field, index) => {
        _push(ssrRenderComponent(_component_FieldDefinition, {
          key: field.tempId || field.id || index,
          modelValue: unref(form).fields[index],
          "onUpdate:modelValue": ($event) => unref(form).fields[index] = $event,
          onRemove: ($event) => removeField(index)
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="flex justify-end gap-3 z-20 relative">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: `/collections/${unref(collectionId)}`,
        color: "gray",
        variant: "ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancelar`);
          } else {
            return [
              createTextVNode("Cancelar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        loading: unref(loading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Salvar Alterações`);
          } else {
            return [
              createTextVNode("Salvar Alterações")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/[id]/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=edit-Ci8NrslS.js.map
