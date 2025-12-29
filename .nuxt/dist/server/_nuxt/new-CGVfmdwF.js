import { b as useUserSession, f as useToast, c as __nuxt_component_2 } from "../server.mjs";
import { _ as __nuxt_component_9 } from "./Card-CjK8ZZ2Z.js";
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from "./Input-CWRe9pxK.js";
import { _ as __nuxt_component_1, a as _sfc_main$1, b as _sfc_main$2 } from "./FieldDefinition-WmOpqtMW.js";
import { defineComponent, ref, reactive, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/hookable/dist/index.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    useUserSession();
    useToast();
    const loading = ref(false);
    const form = reactive({
      name: "",
      description: "",
      visibility: "private",
      fields: []
    });
    const addField = () => {
      form.fields.push({
        name: "",
        type: "text",
        options: [],
        visible: true,
        required: false,
        is_dynamic: false,
        selected: false,
        folder_order: form.fields.length
      });
    };
    const removeField = (index) => {
      form.fields.splice(index, 1);
    };
    const isSticky = ref(false);
    ref(null);
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
        to: "/dashboard"
      }, null, _parent));
      _push(`<h1 class="text-2xl font-bold">Criar Nova Coleção</h1></div><form>`);
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
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    placeholder: "Uma coleção dos meus discos raros..."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(form).description,
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      placeholder: "Uma coleção dos meus discos raros..."
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
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      placeholder: "Uma coleção dos meus discos raros..."
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
        class: "mb-6"
      }, null, _parent));
      _push(`<div class="relative mb-6"><div class="absolute -top-1 left-0 right-0 h-1 pointer-events-none"></div><div class="${ssrRenderClass([[unref(isSticky) ? "backdrop-blur-md border-b border-gray-200 dark:border-gray-800" : "border-transparent"], "flex justify-between items-center mb-4 sticky top-0 z-10 py-4 transition-all duration-300 dark:bg-transparent"])}"><h2 class="text-lg font-semibold">Campos Personalizados</h2>`);
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
      _push(`</div>`);
      if (unref(form).fields.length === 0) {
        _push(`<div class="text-center py-8 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg"><p class="text-gray-500">Nenhum campo definido. Adicione campos para estruturar sua coleção.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(form).fields, (field, index) => {
        _push(ssrRenderComponent(_component_FieldDefinition, {
          key: index,
          modelValue: unref(form).fields[index],
          "onUpdate:modelValue": ($event) => unref(form).fields[index] = $event,
          onRemove: ($event) => removeField(index)
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="flex justify-end gap-3">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/dashboard",
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
            _push2(`Criar Coleção`);
          } else {
            return [
              createTextVNode("Criar Coleção")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=new-CGVfmdwF.js.map
