import { _ as _export_sfc, e as __nuxt_component_1, m as mergeConfig, j as useUI, p as twMerge, k as appConfig } from "../server.mjs";
import { ref, computed, defineComponent, provide, unref, inject, h, Fragment, resolveComponent, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toRef, useId, useSSRContext } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { A, i, s, o as o$1, E as E$1, T, a as o$2, b as s$1 } from "./keyboard-DfXvXu8t.js";
import { twJoin } from "tailwind-merge";
import { u as useFormGroup } from "./Input-D0kU1oTm.js";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
const toggle = {
  base: "relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
  rounded: "rounded-full",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  active: "bg-{color}-500 dark:bg-{color}-400",
  inactive: "bg-gray-200 dark:bg-gray-700",
  size: {
    "2xs": "h-3 w-5",
    "xs": "h-3.5 w-6",
    "sm": "h-4 w-7",
    "md": "h-5 w-9",
    "lg": "h-6 w-11",
    "xl": "h-7 w-[3.25rem]",
    "2xl": "h-8 w-[3.75rem]"
  },
  container: {
    base: "pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",
    active: {
      "2xs": "translate-x-2 rtl:-translate-x-2",
      "xs": "translate-x-2.5 rtl:-translate-x-2.5",
      "sm": "translate-x-3 rtl:-translate-x-3",
      "md": "translate-x-4 rtl:-translate-x-4",
      "lg": "translate-x-5 rtl:-translate-x-5",
      "xl": "translate-x-6 rtl:-translate-x-6",
      "2xl": "translate-x-7 rtl:-translate-x-7"
    },
    inactive: "translate-x-0 rtl:-translate-x-0",
    size: {
      "2xs": "h-2 w-2",
      "xs": "h-2.5 w-2.5",
      "sm": "h-3 w-3",
      "md": "h-4 w-4",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6",
      "2xl": "h-7 w-7"
    }
  },
  icon: {
    base: "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",
    active: "opacity-100 ease-in duration-200",
    inactive: "opacity-0 ease-out duration-100",
    size: {
      "2xs": "h-2 w-2",
      "xs": "h-2 w-2",
      "sm": "h-2 w-2",
      "md": "h-3 w-3",
      "lg": "h-4 w-4",
      "xl": "h-5 w-5",
      "2xl": "h-6 w-6"
    },
    on: "text-{color}-500 dark:text-{color}-400",
    off: "text-gray-400 dark:text-gray-500",
    loading: "animate-spin text-{color}-500 dark:text-{color}-400"
  },
  default: {
    onIcon: null,
    offIcon: null,
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    color: "primary",
    size: "md"
  }
};
function d$1(u2, e2, r) {
  let i2 = ref(r == null ? void 0 : r.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t) {
    return f2.value || (i2.value = t), e2 == null ? void 0 : e2(t);
  }];
}
var u$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$1 || {});
let f$1 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: n, attrs: i2 }) {
  return () => {
    var r;
    let { features: e2, ...d2 } = t, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r = d2["aria-hidden"]) != null ? r : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n, name: "Hidden" });
  };
} });
function e(i2 = {}, s2 = null, t = []) {
  for (let [r, n] of Object.entries(i2)) o(t, f(s2, r), n);
  return t;
}
function f(i2, s2) {
  return i2 ? i2 + "[" + s2 + "]" : s2;
}
function o(i2, s2, t) {
  if (Array.isArray(t)) for (let [r, n] of t.entries()) o(i2, f(s2, r.toString()), n);
  else t instanceof Date ? i2.push([s2, t.toISOString()]) : typeof t == "boolean" ? i2.push([s2, t ? "1" : "0"]) : typeof t == "string" ? i2.push([s2, t]) : typeof t == "number" ? i2.push([s2, `${t}`]) : t == null ? i2.push([s2, ""]) : e(t, s2, i2);
}
function p(i2) {
  var t, r;
  let s2 = (t = i2 == null ? void 0 : i2.form) != null ? t : i2.closest("form");
  if (s2) {
    for (let n of s2.elements) if (n !== i2 && (n.tagName === "INPUT" && n.type === "submit" || n.tagName === "BUTTON" && n.type === "submit" || n.nodeName === "INPUT" && n.type === "image")) {
      n.click();
      return;
    }
    (r = s2.requestSubmit) == null || r.call(s2);
  }
}
let u = /* @__PURE__ */ Symbol("DescriptionContext");
function w() {
  let t = inject(u, null);
  if (t === null) throw new Error("Missing parent");
  return t;
}
function k({ slot: t = ref({}), name: o2 = "Description", props: s2 = {} } = {}) {
  let e2 = ref([]);
  function r(n) {
    return e2.value.push(n), () => {
      let i2 = e2.value.indexOf(n);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r, slot: t, name: o2, props: s2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t, { attrs: o2, slots: s2 }) {
  var n;
  let e2 = (n = t.id) != null ? n : `headlessui-description-${i()}`, r = w();
  return () => {
    let { name: i2 = "Description", slot: l = ref({}), props: d2 = {} } = r, { ...c } = t, f2 = { ...Object.entries(d2).reduce((a2, [g, m]) => Object.assign(a2, { [g]: unref(m) }), {}), id: e2 };
    return A({ ourProps: f2, theirProps: c, slot: l.value, attrs: o2, slots: s2, name: i2 });
  };
} });
let a = /* @__PURE__ */ Symbol("LabelContext");
function d() {
  let t = inject(a, null);
  if (t === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, d), n;
  }
  return t;
}
function E({ slot: t = {}, name: n = "Label", props: i2 = {} } = {}) {
  let e2 = ref([]);
  function o2(r) {
    return e2.value.push(r), () => {
      let l = e2.value.indexOf(r);
      l !== -1 && e2.value.splice(l, 1);
    };
  }
  return provide(a, { register: o2, slot: t, name: n, props: i2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t, { slots: n, attrs: i$1 }) {
  var r;
  let e2 = (r = t.id) != null ? r : `headlessui-label-${i()}`, o2 = d();
  return () => {
    let { name: l = "Label", slot: p2 = {}, props: c = {} } = o2, { passive: f2, ...s2 } = t, u2 = { ...Object.entries(c).reduce((b, [g, m]) => Object.assign(b, { [g]: unref(m) }), {}), id: e2 };
    return f2 && (delete u2.onClick, delete u2.htmlFor, delete s2.onClick), A({ ourProps: u2, theirProps: s2, slot: p2, attrs: i$1, slots: n, name: l });
  };
} });
let C = /* @__PURE__ */ Symbol("GroupContext");
defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l, { slots: c, attrs: i2 }) {
  let r = ref(null), f2 = E({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var t;
    return (t = r.value) == null ? void 0 : t.id;
  }), onClick(t) {
    r.value && (t.currentTarget.tagName === "LABEL" && t.preventDefault(), r.value.click(), r.value.focus({ preventScroll: true }));
  } } }), p2 = k({ name: "SwitchDescription" });
  return provide(C, { switchRef: r, labelledby: f2, describedby: p2 }), () => A({ theirProps: l, ourProps: {}, slot: {}, slots: c, attrs: i2, name: "SwitchGroup" });
} });
let ue = defineComponent({ name: "Switch", emits: { "update:modelValue": (l) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: null }, disabled: { type: Boolean, default: false }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: false, setup(l, { emit: c, attrs: i$1, slots: r, expose: f2 }) {
  var h$1;
  let p$1 = (h$1 = l.id) != null ? h$1 : `headlessui-switch-${i()}`, n = inject(C, null), [t, s$12] = d$1(computed(() => l.modelValue), (e2) => c("update:modelValue", e2), computed(() => l.defaultChecked));
  function m() {
    s$12(!t.value);
  }
  let E2 = ref(null), o2 = n === null ? E2 : n.switchRef, L = s(computed(() => ({ as: l.as, type: i$1.type })), o2);
  f2({ el: o2, $el: o2 });
  function D(e2) {
    e2.preventDefault(), m();
  }
  function R(e2) {
    e2.key === o$2.Space ? (e2.preventDefault(), m()) : e2.key === o$2.Enter && p(e2.currentTarget);
  }
  function x(e2) {
    e2.preventDefault();
  }
  computed(() => {
    var e2, a2;
    return (a2 = (e2 = o$1(o2)) == null ? void 0 : e2.closest) == null ? void 0 : a2.call(e2, "form");
  });
  return () => {
    let { name: e2, value: a2, form: K, tabIndex: y, ...b } = l, T$1 = { checked: t.value }, B = { id: p$1, ref: o2, role: "switch", type: L.value, tabIndex: y === -1 ? 0 : y, "aria-checked": t.value, "aria-labelledby": n == null ? void 0 : n.labelledby.value, "aria-describedby": n == null ? void 0 : n.describedby.value, onClick: D, onKeyup: R, onKeypress: x };
    return h(Fragment, [e2 != null && t.value != null ? h(f$1, E$1({ features: u$1.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: t.value, form: K, disabled: b.disabled, name: e2, value: a2 })) : null, A({ ourProps: B, theirProps: { ...i$1, ...T(b, ["modelValue", "defaultChecked"]) }, slot: T$1, attrs: i$1, slots: r, name: "Switch" })]);
  };
} });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.toggle, toggle);
const _sfc_main = defineComponent({
  components: {
    HSwitch: ue,
    UIcon: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    onIcon: {
      type: String,
      default: () => config.default.onIcon
    },
    offIcon: {
      type: String,
      default: () => config.default.offIcon
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
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
    const { ui, attrs } = useUI("toggle", toRef(props, "ui"), config);
    const { emitFormChange, color, inputId, name } = useFormGroup(props);
    const active = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        emit("change", value);
        emitFormChange();
      }
    });
    const switchClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.rounded,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && (active.value ? ui.value.active : ui.value.inactive).replaceAll("{color}", color.value)
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container.size[props.size],
        active.value ? ui.value.container.active[props.size] : ui.value.container.inactive
      );
    });
    const onIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.on.replaceAll("{color}", color.value)
      );
    });
    const offIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.off.replaceAll("{color}", color.value)
      );
    });
    const loadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.loading.replaceAll("{color}", color.value)
      );
    });
    s$1(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      active,
      switchClass,
      containerClass,
      onIconClass,
      offIconClass,
      loadingIconClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HSwitch = resolveComponent("HSwitch");
  const _component_UIcon = __nuxt_component_1;
  _push(ssrRenderComponent(_component_HSwitch, mergeProps({
    id: _ctx.inputId,
    modelValue: _ctx.active,
    "onUpdate:modelValue": ($event) => _ctx.active = $event,
    name: _ctx.name,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.switchClass
  }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="${ssrRenderClass(_ctx.containerClass)}"${_scopeId}>`);
        if (_ctx.loading) {
          _push2(`<span class="${ssrRenderClass([_ctx.ui.icon.active, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.loadingIcon,
            class: _ctx.loadingIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (!_ctx.loading && _ctx.onIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.onIcon,
            class: _ctx.onIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (!_ctx.loading && _ctx.offIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.offIcon,
            class: _ctx.offIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</span>`);
      } else {
        return [
          createVNode("span", { class: _ctx.containerClass }, [
            _ctx.loading ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.ui.icon.active, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.loadingIcon,
                class: _ctx.loadingIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true),
            !_ctx.loading && _ctx.onIcon ? (openBlock(), createBlock("span", {
              key: 1,
              class: [_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.onIcon,
                class: _ctx.onIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true),
            !_ctx.loading && _ctx.offIcon ? (openBlock(), createBlock("span", {
              key: 2,
              class: [_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.offIcon,
                class: _ctx.offIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true)
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Toggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_3 as _,
  d$1 as d,
  e,
  f$1 as f,
  k,
  u$1 as u
};
//# sourceMappingURL=Toggle-DHexaQQc.js.map
