import { _ as __nuxt_component_9 } from "./Card-CjK8ZZ2Z.js";
import { b as useUserSession, f as useToast, e as __nuxt_component_5, d as __nuxt_component_1, c as __nuxt_component_2 } from "../server.mjs";
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from "./Input-CWRe9pxK.js";
import { _ as __nuxt_component_3$1 } from "./Toggle-JvMqr6TW.js";
import { defineComponent, ref, reactive, watchEffect, mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, createBlock, createCommentVNode, openBlock, useSSRContext } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useColorMode } from "./composables-PcvjsKU4.js";
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
import "./keyboard-DfXvXu8t.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useUserSession();
    const toast = useToast();
    const colorMode = useColorMode();
    const loading = ref(false);
    const form = reactive({
      full_name: "",
      avatar_url: ""
    });
    watchEffect(() => {
      if (user.value) {
        form.full_name = user.value.name || "";
        form.avatar_url = user.value.avatar || "";
      }
    });
    const toggleTheme = (val) => {
      colorMode.preference = val ? "dark" : "light";
    };
    const uploading = ref(false);
    const fileInput = ref(null);
    const triggerFileInput = () => {
      fileInput.value?.click();
    };
    const handleFileUpload = async (event) => {
      const file = event.target.files[0];
      if (!file || !user.value) return;
      if (!file.type.startsWith("image/")) {
        toast.add({ title: "Erro", description: "Por favor envie apenas imagens.", color: "red" });
        return;
      }
      try {
        uploading.value = true;
        const formData = new FormData();
        formData.append("file", file);
        const data = await $fetch("/api/user/avatar", {
          method: "POST",
          body: formData
        });
        form.avatar_url = data.url;
        toast.add({ title: "Upload concluído", color: "green" });
      } catch (error) {
        toast.add({ title: "Erro no Upload", description: error.message, color: "red" });
      } finally {
        uploading.value = false;
      }
    };
    const updateProfile = async () => {
      try {
        loading.value = true;
        await $fetch("/api/user/profile", {
          method: "PATCH",
          body: {
            full_name: form.full_name,
            avatar_url: form.avatar_url
          }
        });
        toast.add({ title: "Perfil atualizado", color: "green" });
      } catch (error) {
        toast.add({ title: "Erro ao atualizar", description: error.message, color: "red" });
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_9;
      const _component_UIcon = __nuxt_component_1;
      const _component_UAvatar = __nuxt_component_5;
      const _component_UButton = __nuxt_component_2;
      const _component_UFormGroup = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UToggle = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto py-8" }, _attrs))}><div class="flex items-center gap-4 mb-8"><h1 class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Minha Conta</h1></div><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}><div class="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-user",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="font-semibold text-lg"${_scopeId}>Perfil</h3></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("div", { class: "p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-500" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-user",
                    class: "w-5 h-5"
                  })
                ]),
                createVNode("h3", { class: "font-semibold text-lg" }, "Perfil")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6"${_scopeId}><div class="flex flex-col items-center sm:flex-row gap-6 mb-6"${_scopeId}><div class="relative group cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: unref(form).avatar_url || unref(user)?.avatar,
              alt: unref(form).full_name,
              size: "3xl",
              class: "ring-4 ring-gray-100 dark:ring-gray-800 transition-opacity group-hover:opacity-75"
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-camera",
              class: "w-8 h-8 text-gray-800 dark:text-white drop-shadow-md"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(uploading)) {
              _push2(`<div class="absolute inset-0 bg-white/50 dark:bg-black/50 rounded-full flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-arrow-path",
                class: "w-8 h-8 animate-spin text-primary-500"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><input type="file" class="hidden" accept="image/*"${_scopeId}><div class="flex-1 w-full space-y-4"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              icon: "i-heroicons-arrow-up-tray",
              loading: unref(uploading),
              onClick: triggerFileInput
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Upload de Foto `);
                } else {
                  return [
                    createTextVNode(" Upload de Foto ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(form).avatar_url) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "red",
                variant: "ghost",
                icon: "i-heroicons-trash",
                size: "xs",
                onClick: ($event) => unref(form).avatar_url = ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Ou URL do Avatar",
              help: "Link externo para imagem"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).avatar_url,
                    "onUpdate:modelValue": ($event) => unref(form).avatar_url = $event,
                    icon: "i-heroicons-photo",
                    placeholder: "https://..."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).avatar_url,
                      "onUpdate:modelValue": ($event) => unref(form).avatar_url = $event,
                      icon: "i-heroicons-photo",
                      placeholder: "https://..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Nome Completo",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).full_name,
                    "onUpdate:modelValue": ($event) => unref(form).full_name = $event,
                    icon: "i-heroicons-identification"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).full_name,
                      "onUpdate:modelValue": ($event) => unref(form).full_name = $event,
                      icon: "i-heroicons-identification"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "E-mail",
              help: "O e-mail não pode ser alterado."
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    "model-value": unref(user)?.email,
                    icon: "i-heroicons-envelope",
                    disabled: "",
                    color: "gray"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      "model-value": unref(user)?.email,
                      icon: "i-heroicons-envelope",
                      disabled: "",
                      color: "gray"
                    }, null, 8, ["model-value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              loading: unref(loading),
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Salvar Alterações `);
                } else {
                  return [
                    createTextVNode(" Salvar Alterações ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(updateProfile, ["prevent"]),
                class: "space-y-6"
              }, [
                createVNode("div", { class: "flex flex-col items-center sm:flex-row gap-6 mb-6" }, [
                  createVNode("div", {
                    class: "relative group cursor-pointer",
                    onClick: triggerFileInput
                  }, [
                    createVNode(_component_UAvatar, {
                      src: unref(form).avatar_url || unref(user)?.avatar,
                      alt: unref(form).full_name,
                      size: "3xl",
                      class: "ring-4 ring-gray-100 dark:ring-gray-800 transition-opacity group-hover:opacity-75"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-camera",
                        class: "w-8 h-8 text-gray-800 dark:text-white drop-shadow-md"
                      })
                    ]),
                    unref(uploading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "absolute inset-0 bg-white/50 dark:bg-black/50 rounded-full flex items-center justify-center"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-arrow-path",
                        class: "w-8 h-8 animate-spin text-primary-500"
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("input", {
                    ref_key: "fileInput",
                    ref: fileInput,
                    type: "file",
                    class: "hidden",
                    accept: "image/*",
                    onChange: handleFileUpload
                  }, null, 544),
                  createVNode("div", { class: "flex-1 w-full space-y-4" }, [
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode(_component_UButton, {
                        color: "white",
                        icon: "i-heroicons-arrow-up-tray",
                        loading: unref(uploading),
                        onClick: triggerFileInput
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Upload de Foto ")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      unref(form).avatar_url ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        color: "red",
                        variant: "ghost",
                        icon: "i-heroicons-trash",
                        size: "xs",
                        onClick: ($event) => unref(form).avatar_url = ""
                      }, null, 8, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_UFormGroup, {
                      label: "Ou URL do Avatar",
                      help: "Link externo para imagem"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(form).avatar_url,
                          "onUpdate:modelValue": ($event) => unref(form).avatar_url = $event,
                          icon: "i-heroicons-photo",
                          placeholder: "https://..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "grid gap-6" }, [
                  createVNode(_component_UFormGroup, {
                    label: "Nome Completo",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).full_name,
                        "onUpdate:modelValue": ($event) => unref(form).full_name = $event,
                        icon: "i-heroicons-identification"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormGroup, {
                    label: "E-mail",
                    help: "O e-mail não pode ser alterado."
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        "model-value": unref(user)?.email,
                        icon: "i-heroicons-envelope",
                        disabled: "",
                        color: "gray"
                      }, null, 8, ["model-value"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex justify-end pt-4" }, [
                  createVNode(_component_UButton, {
                    type: "submit",
                    loading: unref(loading),
                    size: "lg"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Salvar Alterações ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}><div class="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-adjustments-horizontal",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="font-semibold text-lg"${_scopeId}>Preferências</h3></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("div", { class: "p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-500" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-adjustments-horizontal",
                    class: "w-5 h-5"
                  })
                ]),
                createVNode("h3", { class: "font-semibold text-lg" }, "Preferências")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between py-2"${_scopeId}><div class="flex flex-col"${_scopeId}><span class="font-medium"${_scopeId}>Tema Escuro</span><span class="text-sm text-gray-500"${_scopeId}>Alternar entre modo claro e escuro.</span></div>`);
            _push2(ssrRenderComponent(_component_UToggle, {
              size: "lg",
              "model-value": unref(colorMode).value === "dark",
              "onUpdate:modelValue": toggleTheme
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between py-2" }, [
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("span", { class: "font-medium" }, "Tema Escuro"),
                  createVNode("span", { class: "text-sm text-gray-500" }, "Alternar entre modo claro e escuro.")
                ]),
                createVNode(_component_UToggle, {
                  size: "lg",
                  "model-value": unref(colorMode).value === "dark",
                  "onUpdate:modelValue": toggleTheme
                }, null, 8, ["model-value"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=settings-BSTUnq93.js.map
