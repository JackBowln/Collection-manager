import { _ as __nuxt_component_6 } from "./Card-Bfh9rD5X.js";
import { defineComponent, mergeProps, toRef, useId, inject, computed, useSSRContext, createSlots, withCtx, renderSlot, provide, ref, watch, unref, isRef, createVNode, createTextVNode, createBlock, withKeys, openBlock, Fragment, renderList, toDisplayString, createCommentVNode } from "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { twJoin } from "tailwind-merge";
import { _ as _export_sfc, m as mergeConfig, i as useUI, t as twMerge, j as appConfig, k as get, c as useToast, d as __nuxt_component_2, g as __nuxt_component_5, e as __nuxt_component_1$3 } from "../server.mjs";
import { u as useFormGroup, a as __nuxt_component_1$1, _ as __nuxt_component_0$1 } from "./Input-CUCmPBr7.js";
import { ssrRenderAttrs, ssrRenderClass, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { u as useSupabaseClient } from "./useSupabaseClient-CktZlRub.js";
import { a as __nuxt_component_1$2, b as __nuxt_component_0$2 } from "./Select-PkSwbjSb.js";
const radioGroup = {
  wrapper: "relative flex items-start",
  fieldset: "",
  legend: "text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",
  default: {
    color: "primary"
  }
};
const radio = {
  wrapper: "relative flex items-start",
  container: "flex items-center h-5",
  base: "h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
  form: "form-radio",
  color: "text-{color}-500 dark:text-{color}-400",
  background: "bg-white dark:bg-gray-900",
  border: "border border-gray-300 dark:border-gray-700",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  inner: "ms-3 flex flex-col",
  label: "text-sm font-medium text-gray-700 dark:text-gray-200",
  required: "text-sm text-red-500 dark:text-red-400",
  help: "text-sm text-gray-500 dark:text-gray-400",
  default: {
    color: "primary"
  }
};
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.radio, radio);
const _sfc_main$3 = defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("radio", toRef(props, "ui"), config$1, toRef(props, "class"));
    const inputId = props.id ?? useId();
    const radioGroup2 = inject("radio-group", null);
    const { emitFormChange, color, name } = radioGroup2 ?? useFormGroup(props, config$1);
    const pick = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        if (!radioGroup2) {
          emitFormChange();
        }
      }
    });
    function onChange(event) {
      emit("change", event.target.value);
    }
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.background,
        ui.value.border,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && ui.value.color.replaceAll("{color}", color.value)
      ), props.inputClass);
    });
    return {
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      pick,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      onChange
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper,
    "data-n-ids": _ctx.attrs["data-n-ids"]
  }, _attrs))}><div class="${ssrRenderClass(_ctx.ui.container)}"><input${ssrRenderAttrs((_temp0 = mergeProps({
    id: _ctx.inputId,
    checked: ssrLooseEqual(_ctx.pick, _ctx.value),
    name: _ctx.name,
    required: _ctx.required,
    value: _ctx.value,
    disabled: _ctx.disabled,
    type: "radio",
    class: _ctx.inputClass
  }, _ctx.attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.pick))))}></div>`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass(_ctx.ui.label)}">`);
    ssrRenderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => {
      _push(`${ssrInterpolate(_ctx.label)}`);
    }, _push, _parent);
    if (_ctx.required) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.required)}">*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</label>`);
    if (_ctx.help || _ctx.$slots.help) {
      _push(`<p class="${ssrRenderClass(_ctx.ui.help)}">`);
      ssrRenderSlot(_ctx.$slots, "help", { help: _ctx.help }, () => {
        _push(`${ssrInterpolate(_ctx.help)}`);
      }, _push, _parent);
      _push(`</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Radio.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.radioGroup, radioGroup);
const configRadio = mergeConfig(appConfig.ui.strategy, appConfig.ui.radio, radio);
const _sfc_main$2 = defineComponent({
  components: {
    URadio: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Boolean],
      default: ""
    },
    name: {
      type: String,
      default: null
    },
    legend: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    uiRadio: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("radioGroup", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiRadio } = useUI("radio", toRef(props, "uiRadio"), configRadio);
    const { emitFormChange, color, name } = useFormGroup(props, config, false);
    provide("radio-group", { color, name });
    const onUpdate = (value) => {
      emit("update:modelValue", value);
      emit("change", value);
      emitFormChange();
    };
    const guessOptionValue = (option) => {
      return get(option, props.valueAttribute, get(option, props.optionAttribute));
    };
    const guessOptionText = (option) => {
      return get(option, props.optionAttribute, get(option, props.valueAttribute));
    };
    const guessOptionSelected = (option) => {
      return props.modelValue === guessOptionValue(option);
    };
    const normalizeOption = (option) => {
      if (["string", "number", "boolean"].includes(typeof option)) {
        return {
          value: option,
          label: option
        };
      }
      return {
        ...option,
        value: guessOptionValue(option),
        label: guessOptionText(option),
        selected: guessOptionSelected(option)
      };
    };
    const normalizedOptions = computed(() => {
      return props.options.map((option) => normalizeOption(option));
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiRadio,
      attrs,
      normalizedOptions,
      onUpdate
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_URadio = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><fieldset${ssrRenderAttrs(mergeProps(_ctx.attrs, {
    class: _ctx.ui.fieldset
  }))}>`);
  if (_ctx.legend || _ctx.$slots.legend) {
    _push(`<legend class="${ssrRenderClass(_ctx.ui.legend)}">`);
    ssrRenderSlot(_ctx.$slots, "legend", {}, () => {
      _push(`${ssrInterpolate(_ctx.legend)}`);
    }, _push, _parent);
    _push(`</legend>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList(_ctx.normalizedOptions, (option) => {
    _push(ssrRenderComponent(_component_URadio, {
      key: option.value,
      label: option.label,
      "model-value": _ctx.modelValue,
      value: option.value,
      help: option.help,
      disabled: option.disabled || _ctx.disabled,
      ui: _ctx.uiRadio,
      onChange: ($event) => _ctx.onUpdate(option.value)
    }, createSlots({ _: 2 }, [
      _ctx.$slots.label ? {
        name: "label",
        fn: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "label", mergeProps({ ref_for: true }, { option, selected: option.selected }), null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "label", mergeProps({ ref_for: true }, { option, selected: option.selected }))
            ];
          }
        }),
        key: "0"
      } : void 0,
      _ctx.$slots.help ? {
        name: "help",
        fn: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "help", mergeProps({ ref_for: true }, { option, selected: option.selected }), null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "help", mergeProps({ ref_for: true }, { option, selected: option.selected }))
            ];
          }
        }),
        key: "1"
      } : void 0
    ]), _parent));
  });
  _push(`<!--]--></fieldset></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/RadioGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CollectionAccessControl",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    collectionId: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const supabase = useSupabaseClient();
    const toast = useToast();
    const visibility = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const visibilityOptions = [
      { value: "private", label: "Privado (Apenas eu)" },
      { value: "shared", label: "Compartilhado (Usuários específicos)" },
      { value: "public", label: 'Público (Qualquer pessoa pode ver na aba "Explorar")' }
    ];
    const emailInput = ref("");
    const searching = ref(false);
    const adding = ref(false);
    const shares = ref([]);
    const loadShares = async () => {
      if (!props.collectionId) return;
      const { data, error } = await supabase.from("collection_shares").select(`id, user_id, profiles ( id, email, full_name, avatar_url )`).eq("collection_id", props.collectionId);
      if (!error && data) {
        shares.value = data;
      }
    };
    watch(() => props.collectionId, loadShares, { immediate: true });
    const addUser = async () => {
      if (!emailInput.value || !props.collectionId) return;
      adding.value = true;
      try {
        const { data: users, error: searchError } = await supabase.from("profiles").select("id").eq("email", emailInput.value).single();
        if (searchError || !users) {
          toast.add({ title: "Usuário não encontrado", description: "Nenhum usuário encontrado com este e-mail.", color: "red" });
          return;
        }
        const { error: shareError } = await supabase.from("collection_shares").insert({
          collection_id: props.collectionId,
          user_id: users.id
        });
        if (shareError) {
          if (shareError.code === "23505") {
            toast.add({ title: "Já compartilhado", description: "Usuário já tem acesso.", color: "orange" });
          } else {
            throw shareError;
          }
        } else {
          toast.add({ title: "Adicionado", color: "green" });
          emailInput.value = "";
          loadShares();
        }
      } catch (error) {
        toast.add({ title: "Erro", description: error.message, color: "red" });
      } finally {
        adding.value = false;
      }
    };
    const removeUser = async (shareId) => {
      if (!confirm("Remover acesso para este usuário?")) return;
      const { error } = await supabase.from("collection_shares").delete().eq("id", shareId);
      if (error) {
        toast.add({ title: "Erro", description: error.message, color: "red" });
      } else {
        loadShares();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_6;
      const _component_URadioGroup = __nuxt_component_1;
      const _component_UInput = __nuxt_component_1$1;
      const _component_UButton = __nuxt_component_2;
      const _component_UAvatar = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-semibold"${_scopeId}>Configurações de Visibilidade</h3>`);
          } else {
            return [
              createVNode("h3", { class: "font-semibold" }, "Configurações de Visibilidade")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_URadioGroup, {
              modelValue: unref(visibility),
              "onUpdate:modelValue": ($event) => isRef(visibility) ? visibility.value = $event : null,
              options: visibilityOptions,
              legend: "Quem pode ver esta coleção?"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_component_URadioGroup, {
                  modelValue: unref(visibility),
                  "onUpdate:modelValue": ($event) => isRef(visibility) ? visibility.value = $event : null,
                  options: visibilityOptions,
                  legend: "Quem pode ver esta coleção?"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(visibility) === "shared") {
        _push(ssrRenderComponent(_component_UCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="font-semibold"${_scopeId}>Compartilhado com</h3>`);
            } else {
              return [
                createVNode("h3", { class: "font-semibold" }, "Compartilhado com")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-4"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(emailInput),
                "onUpdate:modelValue": ($event) => isRef(emailInput) ? emailInput.value = $event : null,
                placeholder: "Digite o e-mail do usuário...",
                class: "flex-1",
                loading: unref(searching),
                onKeyup: addUser
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                icon: "i-heroicons-paper-airplane",
                onClick: addUser,
                loading: unref(adding)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Adicionar`);
                  } else {
                    return [
                      createTextVNode("Adicionar")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(shares).length === 0) {
                _push2(`<div class="text-gray-500 text-sm italic"${_scopeId}> Não compartilhado com ninguém ainda. </div>`);
              } else {
                _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
                ssrRenderList(unref(shares), (share) => {
                  _push2(`<div class="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UAvatar, {
                    src: share.profiles?.avatar_url,
                    alt: share.profiles?.full_name,
                    size: "xs"
                  }, null, _parent2, _scopeId));
                  _push2(`<div class="text-sm"${_scopeId}><div class="font-medium"${_scopeId}>${ssrInterpolate(share.profiles?.full_name || "Unknown")}</div><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(share.profiles?.email)}</div></div></div>`);
                  _push2(ssrRenderComponent(_component_UButton, {
                    icon: "i-heroicons-trash",
                    color: "red",
                    variant: "ghost",
                    size: "xs",
                    onClick: ($event) => removeUser(share.id)
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("div", { class: "flex gap-2" }, [
                    createVNode(_component_UInput, {
                      modelValue: unref(emailInput),
                      "onUpdate:modelValue": ($event) => isRef(emailInput) ? emailInput.value = $event : null,
                      placeholder: "Digite o e-mail do usuário...",
                      class: "flex-1",
                      loading: unref(searching),
                      onKeyup: withKeys(addUser, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "loading"]),
                    createVNode(_component_UButton, {
                      icon: "i-heroicons-paper-airplane",
                      onClick: addUser,
                      loading: unref(adding)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Adicionar")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  unref(shares).length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-gray-500 text-sm italic"
                  }, " Não compartilhado com ninguém ainda. ")) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "space-y-2"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(shares), (share) => {
                      return openBlock(), createBlock("div", {
                        key: share.id,
                        class: "flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded"
                      }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UAvatar, {
                            src: share.profiles?.avatar_url,
                            alt: share.profiles?.full_name,
                            size: "xs"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "text-sm" }, [
                            createVNode("div", { class: "font-medium" }, toDisplayString(share.profiles?.full_name || "Unknown"), 1),
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(share.profiles?.email), 1)
                          ])
                        ]),
                        createVNode(_component_UButton, {
                          icon: "i-heroicons-trash",
                          color: "red",
                          variant: "ghost",
                          size: "xs",
                          onClick: ($event) => removeUser(share.id)
                        }, null, 8, ["onClick"])
                      ]);
                    }), 128))
                  ]))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollectionAccessControl.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FieldDefinition",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "remove"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const field = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const optionsInput = ref(field.value.options ? field.value.options.join(", ") : "");
    const typeOptions = [
      { label: "Texto Curto", value: "text" },
      { label: "Texto Longo", value: "textarea" },
      { label: "Número", value: "number" },
      { label: "Data", value: "date" },
      { label: "Sim/Não", value: "boolean" },
      { label: "Seleção (Dropdown)", value: "select" },
      { label: "Múltipla Seleção", value: "multiselect" }
    ];
    const updateOptions = () => {
      if (optionsInput.value.trim()) {
        field.value.options = optionsInput.value.split(",").map((s) => s.trim()).filter(Boolean);
      } else {
        field.value.options = [];
      }
    };
    watch(() => field.value.type, (newType) => {
      if (!["select", "multiselect"].includes(newType)) {
        field.value.options = null;
        optionsInput.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_6;
      const _component_UCheckbox = __nuxt_component_0$2;
      const _component_UIcon = __nuxt_component_1$3;
      const _component_UButton = __nuxt_component_2;
      const _component_UFormGroup = __nuxt_component_0$1;
      const _component_UInput = __nuxt_component_1$1;
      const _component_USelect = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "mb-4 relative" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: unref(field).selected,
              "onUpdate:modelValue": ($event) => unref(field).selected = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-bars-3",
              class: "cursor-move text-gray-400"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-medium text-sm"${_scopeId}>Definição do Campo</span></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "red",
              variant: "ghost",
              icon: "i-heroicons-trash",
              size: "xs",
              onClick: ($event) => _ctx.$emit("remove")
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_UCheckbox, {
                    modelValue: unref(field).selected,
                    "onUpdate:modelValue": ($event) => unref(field).selected = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-bars-3",
                    class: "cursor-move text-gray-400"
                  }),
                  createVNode("span", { class: "font-medium text-sm" }, "Definição do Campo")
                ]),
                createVNode(_component_UButton, {
                  color: "red",
                  variant: "ghost",
                  icon: "i-heroicons-trash",
                  size: "xs",
                  onClick: ($event) => _ctx.$emit("remove")
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Nome do Campo",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(field).name,
                    "onUpdate:modelValue": ($event) => unref(field).name = $event,
                    placeholder: "ex. Ano de Lançamento"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(field).name,
                      "onUpdate:modelValue": ($event) => unref(field).name = $event,
                      placeholder: "ex. Ano de Lançamento"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Tipo do Campo",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: unref(field).type,
                    "onUpdate:modelValue": ($event) => unref(field).type = $event,
                    options: typeOptions
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: unref(field).type,
                      "onUpdate:modelValue": ($event) => unref(field).type = $event,
                      options: typeOptions
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (["select", "multiselect"].includes(unref(field).type)) {
              _push2(ssrRenderComponent(_component_UFormGroup, {
                label: "Opções (separadas por vírgula)",
                class: "md:col-span-2",
                required: ""
              }, {
                help: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-xs text-gray-500"${_scopeId2}>Digite as opções separadas por vírgula.</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-xs text-gray-500" }, "Digite as opções separadas por vírgula.")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(optionsInput),
                      "onUpdate:modelValue": ($event) => isRef(optionsInput) ? optionsInput.value = $event : null,
                      placeholder: "Opção 1, Opção 2, Opção 3",
                      onBlur: updateOptions
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: unref(optionsInput),
                        "onUpdate:modelValue": ($event) => isRef(optionsInput) ? optionsInput.value = $event : null,
                        placeholder: "Opção 1, Opção 2, Opção 3",
                        onBlur: updateOptions
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center gap-4 mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: unref(field).visible,
              "onUpdate:modelValue": ($event) => unref(field).visible = $event,
              label: "Visível na Tabela"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: unref(field).required,
              "onUpdate:modelValue": ($event) => unref(field).required = $event,
              label: "Obrigatório",
              color: "red"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                createVNode(_component_UFormGroup, {
                  label: "Nome do Campo",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(field).name,
                      "onUpdate:modelValue": ($event) => unref(field).name = $event,
                      placeholder: "ex. Ano de Lançamento"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, {
                  label: "Tipo do Campo",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_USelect, {
                      modelValue: unref(field).type,
                      "onUpdate:modelValue": ($event) => unref(field).type = $event,
                      options: typeOptions
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                ["select", "multiselect"].includes(unref(field).type) ? (openBlock(), createBlock(_component_UFormGroup, {
                  key: 0,
                  label: "Opções (separadas por vírgula)",
                  class: "md:col-span-2",
                  required: ""
                }, {
                  help: withCtx(() => [
                    createVNode("span", { class: "text-xs text-gray-500" }, "Digite as opções separadas por vírgula.")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(optionsInput),
                      "onUpdate:modelValue": ($event) => isRef(optionsInput) ? optionsInput.value = $event : null,
                      placeholder: "Opção 1, Opção 2, Opção 3",
                      onBlur: updateOptions
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode("div", { class: "flex items-center gap-4 mt-2" }, [
                  createVNode(_component_UCheckbox, {
                    modelValue: unref(field).visible,
                    "onUpdate:modelValue": ($event) => unref(field).visible = $event,
                    label: "Visível na Tabela"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UCheckbox, {
                    modelValue: unref(field).required,
                    "onUpdate:modelValue": ($event) => unref(field).required = $event,
                    label: "Obrigatório",
                    color: "red"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FieldDefinition.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
//# sourceMappingURL=FieldDefinition-CtRzfioR.js.map
