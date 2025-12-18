import { _ as __nuxt_component_6 } from "./Card-Bfh9rD5X.js";
import { _ as __nuxt_component_0, a as __nuxt_component_1 } from "./Input-CUCmPBr7.js";
import { b as useSupabaseUser, c as useToast, n as navigateTo, d as __nuxt_component_2, a as __nuxt_component_0$1 } from "../server.mjs";
import { defineComponent, ref, watchEffect, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, withModifiers, useSSRContext } from "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useSupabaseClient } from "./useSupabaseClient-CktZlRub.js";
import "tailwind-merge";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/defu/dist/defu.mjs";
import "@vueuse/core";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/hookable/dist/index.mjs";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/unctx/dist/index.mjs";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/radix3/dist/index.mjs";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/ufo/dist/index.mjs";
import "@supabase/ssr";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/klona/dist/index.mjs";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/mnt/c/Users/viniv/Desktop/dev/collection-manager/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const toast = useToast();
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    watchEffect(() => {
      if (user.value) {
        navigateTo("/dashboard");
      }
    });
    const handleLogin = async () => {
      try {
        loading.value = true;
        const { error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value
        });
        if (error) throw error;
        toast.add({ title: "Sucesso", description: "Login realizado com sucesso", color: "green" });
        navigateTo("/dashboard");
      } catch (error) {
        toast.add({ title: "Error", description: error.message, color: "red" });
      } finally {
        loading.value = false;
      }
    };
    const handleGoogleLogin = async () => {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${(void 0).location.origin}/confirm`
          // We'll create this page
        }
      });
      if (error) {
        toast.add({ title: "Error", description: error.message, color: "red" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_6;
      const _component_UFormGroup = __nuxt_component_0;
      const _component_UInput = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, { class: "w-full max-w-md" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-xl font-bold text-center"${_scopeId}>Bem-vindo de volta</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-xl font-bold text-center" }, "Bem-vindo de volta")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-sm text-center text-gray-500"${_scopeId}> Não tem uma conta? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/register",
              class: "text-primary-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cadastre-se`);
                } else {
                  return [
                    createTextVNode("Cadastre-se")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              createVNode("p", { class: "text-sm text-center text-gray-500" }, [
                createTextVNode(" Não tem uma conta? "),
                createVNode(_component_NuxtLink, {
                  to: "/register",
                  class: "text-primary-600 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Cadastre-se")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "E-mail",
              name: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    type: "email",
                    placeholder: "seu@email.com",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(email),
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                      type: "email",
                      placeholder: "seu@email.com",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Senha",
              name: "password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(password),
                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                    type: "password",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(password),
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                      type: "password",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              block: "",
              loading: unref(loading)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Entrar`);
                } else {
                  return [
                    createTextVNode("Entrar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form><div class="relative my-6"${_scopeId}><div class="absolute inset-0 flex items-center"${_scopeId}><span class="w-full border-t"${_scopeId}></span></div><div class="relative flex justify-center text-sm"${_scopeId}><span class="px-2 bg-white dark:bg-gray-800 text-gray-500"${_scopeId}>Ou continue com</span></div></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              block: "",
              color: "white",
              variant: "solid",
              icon: "i-logos-google-icon",
              onClick: handleGoogleLogin
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Google `);
                } else {
                  return [
                    createTextVNode(" Google ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(handleLogin, ["prevent"]),
                class: "space-y-4"
              }, [
                createVNode(_component_UFormGroup, {
                  label: "E-mail",
                  name: "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(email),
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                      type: "email",
                      placeholder: "seu@email.com",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, {
                  label: "Senha",
                  name: "password"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(password),
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                      type: "password",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  type: "submit",
                  block: "",
                  loading: unref(loading)
                }, {
                  default: withCtx(() => [
                    createTextVNode("Entrar")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ], 32),
              createVNode("div", { class: "relative my-6" }, [
                createVNode("div", { class: "absolute inset-0 flex items-center" }, [
                  createVNode("span", { class: "w-full border-t" })
                ]),
                createVNode("div", { class: "relative flex justify-center text-sm" }, [
                  createVNode("span", { class: "px-2 bg-white dark:bg-gray-800 text-gray-500" }, "Ou continue com")
                ])
              ]),
              createVNode(_component_UButton, {
                block: "",
                color: "white",
                variant: "solid",
                icon: "i-logos-google-icon",
                onClick: handleGoogleLogin
              }, {
                default: withCtx(() => [
                  createTextVNode(" Google ")
                ]),
                _: 1
              })
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
//# sourceMappingURL=login-DHWlol1x.js.map
